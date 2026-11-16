import { useSyncExternalStore } from 'react';
import { ModuleProgress } from '@/types/quiz';
import { allQuestions } from '@/data/questions';

const WRONG_QUESTIONS_KEY = 'quiz_wrong_questions';
const BOOKMARKS_KEY = 'quiz_bookmarks';
const RANDOM_POOL_KEY = 'quiz_random_pool';
const MODULE_SCORES_KEY = 'quiz_module_scores';

function isClient(): boolean {
  return typeof window !== 'undefined';
}

let notifyScheduled = false;

function notifyStorageChange(): void {
  if (!isClient()) return;
  if (!notifyScheduled) {
    notifyScheduled = true;
    queueMicrotask(() => {
      notifyScheduled = false;
      try {
        window.dispatchEvent(new Event('quiz_storage_updated'));
      } catch (err) {
        console.error('Error dispatching quiz_storage_updated event:', err);
      }
    });
  }
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
    notifyStorageChange();
  } catch (err) {
    console.error(`Error saving to localStorage key "${key}":`, err);
  }
}

function sanitizeIdArray(raw: unknown): number[] {
  if (!Array.isArray(raw)) return [];
  const result: number[] = [];
  const seen = new Set<number>();
  for (const item of raw) {
    if (typeof item === 'number' && Number.isInteger(item) && item > 0 && item <= allQuestions.length) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  }
  return result;
}

// === WRONG QUESTIONS ===
export function getWrongQuestionIds(): number[] {
  const raw = getStoredJson<unknown>(WRONG_QUESTIONS_KEY, []);
  return sanitizeIdArray(raw);
}

export function addWrongQuestion(id: number): void {
  if (!Number.isInteger(id) || id <= 0 || id > allQuestions.length) return;
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
  const raw = getStoredJson<unknown>(BOOKMARKS_KEY, []);
  return sanitizeIdArray(raw);
}

export function isBookmarked(id: number): boolean {
  return getBookmarkedQuestionIds().includes(id);
}

export function toggleBookmark(id: number): boolean {
  if (!Number.isInteger(id) || id <= 0 || id > allQuestions.length) return false;
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
  const stored = getStoredJson<unknown>(RANDOM_POOL_KEY, null);
  if (!stored || !Array.isArray(stored)) {
    return initFreshPool();
  }
  const sanitized = sanitizeIdArray(stored);
  return sanitized.length > 0 ? sanitized : initFreshPool();
}

export function getRandomPoolRemainingCount(): number {
  return getRandomPool().length;
}

export function resetRandomPool(): number[] {
  const fresh = initFreshPool();
  setStoredJson(RANDOM_POOL_KEY, fresh);
  return fresh;
}

export function removeQuestionFromRandomPool(id: number): void {
  const current = getRandomPool();
  if (current.includes(id)) {
    const updated = current.filter((qId) => qId !== id);
    setStoredJson(RANDOM_POOL_KEY, updated);
  }
}

export function drawRandomQuestions(count: number): number[] {
  const safeCount = Number.isInteger(count) && count > 0 ? Math.min(count, allQuestions.length) : 10;
  let pool = getRandomPool();
  if (pool.length === 0) {
    pool = resetRandomPool();
  }

  if (safeCount >= allQuestions.length) {
    return shuffle(allQuestions.map((q) => q.id));
  }

  if (pool.length >= safeCount) {
    return pool.slice(0, safeCount);
  }

  // If pool has fewer questions than requested:
  // Take current pool questions, and draw the rest from a freshly shuffled pool
  const selected = [...pool];
  const remainingNeeded = safeCount - pool.length;
  const allIds = allQuestions.map((q) => q.id);
  const remainingIds = allIds.filter((id) => !selected.includes(id));
  const freshShuffled = shuffle(remainingIds);

  const additional = freshShuffled.slice(0, remainingNeeded);
  // Persist the combined pool so all selected IDs exist in pool until seen
  setStoredJson(RANDOM_POOL_KEY, [...selected, ...freshShuffled]);

  return [...selected, ...additional];
}

// === MODULE PROGRESS & BEST SCORES ===
export function getModuleScores(): Record<string, ModuleProgress> {
  const raw = getStoredJson<unknown>(MODULE_SCORES_KEY, {});
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return {};
  }
  const cleanScores: Record<string, ModuleProgress> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!/^[1-7]-[1-4]$/.test(key)) continue;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const v = value as Record<string, unknown>;
      const bestScore = typeof v.bestScore === 'number' && Number.isFinite(v.bestScore) ? Math.max(0, Math.floor(v.bestScore)) : 0;
      const totalQuestions = typeof v.totalQuestions === 'number' && Number.isFinite(v.totalQuestions) ? Math.max(0, Math.floor(v.totalQuestions)) : 0;
      const completedAt = typeof v.completedAt === 'string' ? v.completedAt : new Date().toISOString();
      cleanScores[key] = { bestScore, totalQuestions, completedAt };
    }
  }
  return cleanScores;
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
  if (
    !Number.isInteger(section) || section < 1 || section > 7 ||
    !Number.isInteger(module) || module < 1 || module > 4 ||
    !Number.isInteger(score) || score < 0 ||
    !Number.isInteger(totalQuestions) || totalQuestions < 0
  ) {
    return;
  }
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

// === REACT 19 SYNC EXTERNAL STORE HOOK ===
let cachedSnapshot = '';
let cachedValue = {
  wrongCount: 0,
  bookmarkCount: 0,
  randomPoolCount: allQuestions.length,
  moduleScores: {} as Record<string, ModuleProgress>,
};

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('quiz_storage_updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('quiz_storage_updated', callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot() {
  if (typeof window === 'undefined') {
    return cachedValue;
  }
  const currentRaw = `${window.localStorage.getItem(WRONG_QUESTIONS_KEY) || ''}|${
    window.localStorage.getItem(BOOKMARKS_KEY) || ''
  }|${window.localStorage.getItem(RANDOM_POOL_KEY) || ''}|${
    window.localStorage.getItem(MODULE_SCORES_KEY) || ''
  }`;

  if (currentRaw !== cachedSnapshot) {
    cachedSnapshot = currentRaw;
    cachedValue = {
      wrongCount: getWrongQuestionIds().length,
      bookmarkCount: getBookmarkedQuestionIds().length,
      randomPoolCount: getRandomPoolRemainingCount(),
      moduleScores: getModuleScores(),
    };
  }
  return cachedValue;
}

const serverSnapshot: {
  wrongCount: number;
  bookmarkCount: number;
  randomPoolCount: number;
  moduleScores: Record<string, ModuleProgress>;
} = {
  wrongCount: 0,
  bookmarkCount: 0,
  randomPoolCount: allQuestions.length,
  moduleScores: {},
};

export function useQuizStorage() {
  return useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);
}
