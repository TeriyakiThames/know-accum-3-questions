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
