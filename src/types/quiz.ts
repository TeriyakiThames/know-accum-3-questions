export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  section: number;
  module: number;
  questionNumberInModule: number;
  prompt: string;
  options: Record<OptionKey, string>;
  correctAnswers: OptionKey[];
  isMultiple: boolean;
  image?: string;
}

export type QuizMode = 'module' | 'random' | 'wrong' | 'bookmark';

export interface QuizSessionState {
  mode: QuizMode;
  section?: number;
  module?: number;
  questionIds: number[];
  currentIndex: number;
  userAnswers: Record<number, OptionKey[]>;
  submittedQuestions: Record<number, boolean>;
  isCompleted: boolean;
}

export interface ModuleProgress {
  bestScore: number;
  totalQuestions: number;
  completedAt: string;
}

export interface QuizExportData {
  version: 1;
  exportedAt: string;
  moduleScores: Record<string, ModuleProgress>;
  wrongQuestions: number[];
  bookmarks: number[];
  randomPool?: number[];
  randomPoolRemaining?: number;
}

export interface CompactSyncPayload {
  v: 1;
  t: number;
  w: number[];
  b: number[];
  s: Record<string, [number, number, string]>;
}
