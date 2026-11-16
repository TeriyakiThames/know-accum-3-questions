import { ModuleProgress } from '@/types/quiz';
import { allQuestions } from '@/data/questions';

const WRONG_QUESTIONS_KEY = 'quiz_wrong_questions';
const BOOKMARKS_KEY = 'quiz_bookmarks';
const RANDOM_POOL_KEY = 'quiz_random_pool';
const MODULE_SCORES_KEY = 'quiz_module_scores';

function isClient(): boolean {
  return typeof window !== 'undefined';
}

function getStoredJson<T>(key: string, defaultValue: T): T {
  if (!isClient()) return defaultValue;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStoredJson<T>(key: string, value: T): void {
  if (!isClient()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error saving to localStorage key "${key}":`, err);
  }
}

// === WRONG QUESTIONS ===
export function getWrongQuestionIds(): number[] {
  return getStoredJson<number[]>(WRONG_QUESTIONS_KEY, []);
}

export function addWrongQuestion(id: number): void {
  const current = getWrongQuestionIds();
  if (!current.includes(id)) {
    setStoredJson(WRONG_QUESTIONS_KEY, [...current, id]);
  }
}

export function removeWrongQuestion(id: number): void {
  const current = getWrongQuestionIds();
  setStoredJson(WRONG_QUESTIONS_KEY, current.filter((qId) => qId !== id));
}

export function clearWrongQuestions(): void {
  setStoredJson(WRONG_QUESTIONS_KEY, []);
}

// === BOOKMARKS ===
export function getBookmarkedQuestionIds(): number[] {
  return getStoredJson<number[]>(BOOKMARKS_KEY, []);
}

export function isBookmarked(id: number): boolean {
  return getBookmarkedQuestionIds().includes(id);
}

export function toggleBookmark(id: number): boolean {
  const current = getBookmarkedQuestionIds();
  const exists = current.includes(id);
  const updated = exists ? current.filter((qId) => qId !== id) : [...current, id];
  setStoredJson(BOOKMARKS_KEY, updated);
  return !exists;
}

export function clearBookmarks(): void {
  setStoredJson(BOOKMARKS_KEY, []);
}

// === RANDOM POOL ===
// Shuffle array using Fisher-Yates
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function initFreshPool(): number[] {
  const allIds = allQuestions.map((q) => q.id);
  return shuffle(allIds);
}

export function getRandomPool(): number[] {
  const stored = getStoredJson<number[] | null>(RANDOM_POOL_KEY, null);
  if (!stored || !Array.isArray(stored)) {
    const fresh = initFreshPool();
    setStoredJson(RANDOM_POOL_KEY, fresh);
    return fresh;
  }
  return stored;
}

export function getRandomPoolRemainingCount(): number {
  return getRandomPool().length;
}

export function resetRandomPool(): number[] {
  const fresh = initFreshPool();
  setStoredJson(RANDOM_POOL_KEY, fresh);
  return fresh;
}

/**
 * Draw count questions from the pool without duplicates.
 * If the pool has fewer than count questions, it drains the rest,
 * resets the pool, and draws the remainder from the fresh pool.
 */
export function drawRandomQuestions(count: number): number[] {
  let pool = getRandomPool();
  if (pool.length === 0) {
    pool = resetRandomPool();
  }

  if (count >= allQuestions.length) {
    resetRandomPool();
    return shuffle(allQuestions.map((q) => q.id));
  }

  const selected: number[] = [];
  while (selected.length < count) {
    if (pool.length === 0) {
      pool = resetRandomPool();
    }
    const nextId = pool.shift();
    if (nextId !== undefined && !selected.includes(nextId)) {
      selected.push(nextId);
    }
  }

  setStoredJson(RANDOM_POOL_KEY, pool);
  return selected;
}

// === MODULE PROGRESS & BEST SCORES ===
export function getModuleScores(): Record<string, ModuleProgress> {
  return getStoredJson<Record<string, ModuleProgress>>(MODULE_SCORES_KEY, {});
}

export function getModuleScore(section: number, module: number): ModuleProgress | undefined {
  const key = `${section}-${module}`;
  return getModuleScores()[key];
}

export function saveModuleScore(
  section: number,
  module: number,
  score: number,
  totalQuestions: number
): void {
  const key = `${section}-${module}`;
  const allScores = getModuleScores();
  const existing = allScores[key];

  const bestScore = existing ? Math.max(existing.bestScore, score) : score;
  allScores[key] = {
    bestScore,
    totalQuestions,
    completedAt: new Date().toISOString(),
  };

  setStoredJson(MODULE_SCORES_KEY, allScores);
}
