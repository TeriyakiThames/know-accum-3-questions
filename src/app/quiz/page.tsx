'use client';

import React, { Suspense, useState, useMemo, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Question, OptionKey, QuizMode } from '@/types/quiz';
import {
  getQuestionsByModule,
  getQuestionById,
} from '@/data/questions';
import {
  addWrongQuestion,
  removeWrongQuestion,
  getBookmarkedQuestionIds,
  toggleBookmark,
  drawRandomQuestions,
  removeQuestionFromRandomPool,
  getWrongQuestionIds,
  saveModuleScore,
} from '@/lib/storage';
import QuizCard from '@/components/QuizCard';
import QuizResults from '@/components/QuizResults';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowLeft, HelpCircle } from 'lucide-react';

interface QuizSessionProps {
  mode: QuizMode;
  sectionNum: number;
  moduleNum: number;
  randomCount: number;
  onRetake: () => void;
}

function QuizSession({
  mode,
  sectionNum,
  moduleNum,
  randomCount,
  onRetake,
}: QuizSessionProps) {
  const router = useRouter();

  // Initialize questions
  const [questions, setQuestions] = useState<Question[] | null>(() => {
    if (mode === 'module') {
      return getQuestionsByModule(sectionNum, moduleNum);
    }
    return null;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, OptionKey[]>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => getBookmarkedQuestionIds());
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const drawnQuestionsRef = useRef<Question[] | null>(null);

  useEffect(() => {
    if (mode === 'module') {
      return;
    }

    if (drawnQuestionsRef.current) {
      setQuestions(drawnQuestionsRef.current);
      return;
    }

    let loadedQuestions: Question[] = [];
    if (mode === 'random') {
      const drawnIds = drawRandomQuestions(randomCount);
      loadedQuestions = drawnIds.map((id) => getQuestionById(id)).filter(Boolean) as Question[];
    } else if (mode === 'wrong') {
      const wrongIds = getWrongQuestionIds();
      loadedQuestions = wrongIds.map((id) => getQuestionById(id)).filter(Boolean) as Question[];
    } else if (mode === 'bookmark') {
      const bIds = getBookmarkedQuestionIds();
      loadedQuestions = bIds.map((id) => getQuestionById(id)).filter(Boolean) as Question[];
    }

    drawnQuestionsRef.current = loadedQuestions;
    setQuestions(loadedQuestions);
  }, [mode, sectionNum, moduleNum, randomCount]);

  const currentQuestion = useMemo(() => {
    return questions ? questions[currentIndex] : undefined;
  }, [questions, currentIndex]);

  // Only remove seen questions from the random pool
  useEffect(() => {
    if (mode === 'random' && currentQuestion) {
      removeQuestionFromRandomPool(currentQuestion.id);
    }
  }, [mode, currentQuestion]);

  const isCurrentBookmarked = currentQuestion ? bookmarkedIds.includes(currentQuestion.id) : false;
  const currentUserSelected = currentQuestion ? userAnswers[currentQuestion.id] || [] : [];
  const isCurrentSubmitted = currentQuestion ? !!submittedQuestions[currentQuestion.id] : false;

  // Handle option selection
  const handleSelectOption = (key: OptionKey) => {
    if (!currentQuestion || isCurrentSubmitted) return;

    if (currentQuestion.isMultiple) {
      // Toggle selection
      const exists = currentUserSelected.includes(key);
      const nextSelected = exists
        ? currentUserSelected.filter((k) => k !== key)
        : [...currentUserSelected, key];
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: nextSelected,
      }));
    } else {
      // Single choice: pick and submit immediately
      const nextSelected = [key];
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: nextSelected,
      }));
      setSubmittedQuestions((prev) => ({
        ...prev,
        [currentQuestion.id]: true,
      }));

      // Check correctness
      const isCorrect =
        currentQuestion.correctAnswers.length === 1 &&
        currentQuestion.correctAnswers[0] === key;
      if (!isCorrect) {
        addWrongQuestion(currentQuestion.id);
      } else if (mode === 'wrong') {
        removeWrongQuestion(currentQuestion.id);
      }
    }
  };

  // Handle multi-choice submit
  const handleSubmitMultiAnswer = () => {
    if (!currentQuestion || isCurrentSubmitted || currentUserSelected.length === 0) return;

    setSubmittedQuestions((prev) => ({
      ...prev,
      [currentQuestion.id]: true,
    }));

    const isCorrect =
      currentQuestion.correctAnswers.length === currentUserSelected.length &&
      currentQuestion.correctAnswers.every((ans) => currentUserSelected.includes(ans));

    if (!isCorrect) {
      addWrongQuestion(currentQuestion.id);
    } else if (mode === 'wrong') {
      removeWrongQuestion(currentQuestion.id);
    }
  };

  // Next question / Finish
  const handleNext = () => {
    if (!questions) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Complete quiz
      setIsCompleted(true);

      // Save module score if module mode
      if (mode === 'module') {
        let score = 0;
        for (const q of questions) {
          const picked = userAnswers[q.id] || [];
          if (
            q.correctAnswers.length === picked.length &&
            q.correctAnswers.every((ans) => picked.includes(ans))
          ) {
            score++;
          }
        }
        saveModuleScore(sectionNum, moduleNum, score, questions.length);
      }
    }
  };

  // Previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Bookmark toggle
  const handleToggleBookmark = (targetQuestionId?: number) => {
    const qId = targetQuestionId ?? currentQuestion?.id;
    if (!qId) return;
    toggleBookmark(qId);
    setBookmarkedIds(getBookmarkedQuestionIds());
  };

  // Back to home
  const handleGoHome = () => {
    router.push('/');
  };

  // Next module in sequence
  const handleNextModule = () => {
    let nextSec = sectionNum;
    let nextMod = moduleNum + 1;
    if (nextMod > 4) {
      nextSec += 1;
      nextMod = 1;
    }
    if (nextSec > 7) {
      router.push('/');
      return;
    }
    router.push(`/quiz?mode=module&section=${nextSec}&module=${nextMod}`);
  };

  // Safe back exit
  const handleBackClick = () => {
    if (isCompleted || Object.keys(submittedQuestions).length === 0) {
      router.push('/');
    } else {
      setShowExitConfirm(true);
    }
  };

  if (questions === null) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#120e0f] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4f121b] dark:border-[#c93b50]" />
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#120e0f] text-[#1a1617] dark:text-[#f3eff0] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
        <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-[#1c1618] border border-zinc-200 dark:border-[#2e2326] text-zinc-400 mb-4">
          <HelpCircle size={40} />
        </div>
        <h2 className="text-xl font-bold mb-2">No Questions Found</h2>
        <p className="text-sm text-zinc-500 mb-6">
          {mode === 'wrong'
            ? "You don't have any wrong questions saved yet! Keep practicing to build your review bank."
            : mode === 'bookmark'
            ? "You haven't bookmarked any questions yet. Use the bookmark icon on any question to save it."
            : 'No questions available for this selection.'}
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-2.5 rounded-xl bg-[#4f121b] hover:bg-[#3d0d15] dark:bg-[#c93b50] dark:hover:bg-[#dc485e] text-white font-semibold text-sm transition-all"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#120e0f] text-[#1a1617] dark:text-[#f3eff0] flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#120e0f]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-[#2e2326]">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={handleBackClick}
            className="p-2 -ml-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#1c1618] transition-colors flex items-center gap-1 text-xs font-medium"
            aria-label="Back"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <div className="text-center font-bold text-sm tracking-tight text-[#1a1617] dark:text-[#f3eff0]">
            {mode === 'module' && `Section ${sectionNum} : Module ${moduleNum}`}
            {mode === 'random' && `Random Practice (${randomCount})`}
            {mode === 'wrong' && `Practice Wrong Questions`}
            {mode === 'bookmark' && `Practice Bookmarked`}
          </div>

          <div className="flex items-center justify-end w-10">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-md w-full mx-auto p-4 flex flex-col items-center">
        {!isCompleted && currentQuestion ? (
          <QuizCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            userSelected={currentUserSelected}
            isSubmitted={isCurrentSubmitted}
            isBookmarked={isCurrentBookmarked}
            onSelectOption={handleSelectOption}
            onSubmitAnswer={handleSubmitMultiAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
          />
        ) : (
          <QuizResults
            mode={mode}
            section={sectionNum}
            module={moduleNum}
            questions={questions}
            userAnswers={userAnswers}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onRetake={onRetake}
            onHome={handleGoHome}
            onNextModule={
              mode === 'module' && (sectionNum < 7 || moduleNum < 4)
                ? handleNextModule
                : undefined
            }
          />
        )}
      </main>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-xs bg-white dark:bg-[#1c1618] rounded-2xl p-5 shadow-2xl border border-zinc-200 dark:border-[#2e2326] text-center space-y-3">
            <h3 className="font-bold text-base text-[#1a1617] dark:text-[#f3eff0]">Exit Quiz?</h3>
            <p className="text-xs text-zinc-500">
              Your current progress in this session will not be saved. Are you sure you want to leave?
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2 rounded-xl border border-zinc-200 dark:border-[#2e2326] text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#251e21]"
              >
                Resume
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  router.push('/');
                }}
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function QuizEngine() {
  const searchParams = useSearchParams();

  const rawMode = searchParams.get('mode');
  const validModes: QuizMode[] = ['module', 'random', 'wrong', 'bookmark'];
  const mode: QuizMode = validModes.includes(rawMode as QuizMode) ? (rawMode as QuizMode) : 'module';

  const sectionParam = searchParams.get('section');
  const moduleParam = searchParams.get('module');
  const countParam = searchParams.get('count');

  const rawSec = parseInt(sectionParam || '', 10);
  const sectionNum = Number.isInteger(rawSec) && rawSec >= 1 && rawSec <= 7 ? rawSec : 1;
  const rawMod = parseInt(moduleParam || '', 10);
  const moduleNum = Number.isInteger(rawMod) && rawMod >= 1 && rawMod <= 4 ? rawMod : 1;
  const rawCount = parseInt(countParam || '', 10);
  const randomCount = Number.isInteger(rawCount) && rawCount >= 1 && rawCount <= 260 ? rawCount : 10;

  const [sessionKey, setSessionKey] = useState(0);

  return (
    <QuizSession
      key={`${mode}-${sectionNum}-${moduleNum}-${randomCount}-${sessionKey}`}
      mode={mode}
      sectionNum={sectionNum}
      moduleNum={moduleNum}
      randomCount={randomCount}
      onRetake={() => setSessionKey((prev) => prev + 1)}
    />
  );
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white dark:bg-[#120e0f] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4f121b] dark:border-[#c93b50]" />
        </div>
      }
    >
      <QuizEngine />
    </Suspense>
  );
}
