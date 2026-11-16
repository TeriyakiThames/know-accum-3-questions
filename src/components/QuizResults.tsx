'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Question, OptionKey, QuizMode } from '@/types/quiz';
import {
  Trophy,
  RotateCcw,
  Home,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Bookmark,
  Flag,
  Check,
  X,
  Sparkles,
} from 'lucide-react';
import ReportModal from './ReportModal';

interface QuizResultsProps {
  mode: QuizMode;
  section?: number;
  module?: number;
  questions: Question[];
  userAnswers: Record<number, OptionKey[]>;
  bookmarkedIds: number[];
  onToggleBookmark: (questionId: number) => void;
  onRetake: () => void;
  onHome: () => void;
  onNextModule?: () => void;
}

export default function QuizResults({
  mode,
  section,
  module,
  questions,
  userAnswers,
  bookmarkedIds,
  onToggleBookmark,
  onRetake,
  onHome,
  onNextModule,
}: QuizResultsProps) {
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [activeReportQuestion, setActiveReportQuestion] = useState<Question | null>(null);

  // Calculate score
  let correctCount = 0;
  const questionResults = questions.map((q) => {
    const picked = userAnswers[q.id] || [];
    const isCorrect =
      q.correctAnswers.length === picked.length &&
      q.correctAnswers.every((ans) => picked.includes(ans));
    if (isCorrect) correctCount++;
    return {
      question: q,
      picked,
      isCorrect,
    };
  });

  const totalQuestions = questions.length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const filteredResults = questionResults.filter((r) => {
    if (filter === 'correct') return r.isCorrect;
    if (filter === 'incorrect') return !r.isCorrect;
    return true;
  });

  const getScoreMessage = () => {
    if (scorePercent === 100) return 'Perfection! Excellent work! 🎉';
    if (scorePercent >= 80) return 'Great job! Solid mastery! 🌟';
    if (scorePercent >= 60) return 'Good effort! Review the missed questions below. 👍';
    return 'Keep practicing! Review your mistakes to reinforce the concepts. 💪';
  };

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Score Summary Card */}
      <div className="w-full bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl p-6 text-white shadow-xl flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-xs mb-3">
          {scorePercent >= 80 ? (
            <Trophy size={36} className="text-amber-300 animate-bounce" />
          ) : (
            <Sparkles size={36} className="text-indigo-200" />
          )}
        </div>

        <h2 className="text-2xl font-bold tracking-tight mb-1">Quiz Completed!</h2>
        <p className="text-xs text-indigo-100/90 mb-4 max-w-xs">{getScoreMessage()}</p>

        {/* Big Score Display */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-black">{correctCount}</span>
          <span className="text-2xl font-semibold text-indigo-200">/ {totalQuestions}</span>
        </div>
        <div className="text-sm font-semibold tracking-wide px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs">
          {scorePercent}% Accuracy
        </div>

        {/* Progress bar inside banner */}
        <div className="w-full max-w-xs h-2 bg-black/20 rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-emerald-400 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${scorePercent}%` }}
          />
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={onRetake}
          className="py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold text-xs text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
        >
          <RotateCcw size={16} />
          <span>Retake Quiz</span>
        </button>

        {onNextModule && mode === 'module' ? (
          <button
            onClick={onNextModule}
            className="py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs text-white flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
          >
            <span>Next Module</span>
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={onHome}
            className="py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs text-white flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
          >
            <Home size={16} />
            <span>Return Home</span>
          </button>
        )}
      </div>

      {/* Review Section Header & Filters */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Review Questions
          </h3>
          <span className="text-xs text-zinc-500">
            {mode === 'module'
              ? `Section ${section} • Module ${module}`
              : `${totalQuestions} Questions`}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
            }`}
          >
            All ({totalQuestions})
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              filter === 'correct'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
            }`}
          >
            Correct ({correctCount})
          </button>
          <button
            onClick={() => setFilter('incorrect')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              filter === 'incorrect'
                ? 'bg-white dark:bg-zinc-900 text-rose-600 dark:text-rose-400 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
            }`}
          >
            Incorrect ({totalQuestions - correctCount})
          </button>
        </div>
      </div>

      {/* Questions Review List */}
      <div className="flex flex-col gap-4">
        {filteredResults.map(({ question, picked, isCorrect }, index) => {
          const isBookmarked = bookmarkedIds.includes(question.id);
          const optionKeys: OptionKey[] = ['A', 'B', 'C', 'D'];

          return (
            <div
              key={question.id}
              className={`p-4 rounded-2xl border transition-all ${
                isCorrect
                  ? 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                  : 'bg-rose-50/20 dark:bg-rose-950/10 border-rose-200/80 dark:border-rose-900/40'
              }`}
            >
              {/* Question header info & status */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      isCorrect
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                        : 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    S{question.section} • M{question.module} • Q#{question.id}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={13} />
                      Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded-full">
                      <XCircle size={13} />
                      Incorrect
                    </span>
                  )}

                  {/* Bookmark button */}
                  <button
                    onClick={() => onToggleBookmark(question.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked
                        ? 'text-amber-500'
                        : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
                    }`}
                    title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
                    aria-label="Bookmark"
                  >
                    <Bookmark size={15} className={isBookmarked ? 'fill-current' : ''} />
                  </button>

                  {/* Report button */}
                  <button
                    onClick={() => setActiveReportQuestion(question)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-500 transition-colors"
                    title="Report question"
                    aria-label="Report"
                  >
                    <Flag size={15} />
                  </button>
                </div>
              </div>

              {/* Prompt */}
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3 leading-relaxed">
                {question.prompt}
              </p>

              {/* Question Image if present */}
              {question.image && (
                <div className="mb-3 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/40 p-2 flex justify-center">
                  <Image
                    src={question.image}
                    alt={`Figure for Question #${question.id}`}
                    width={400}
                    height={250}
                    className="rounded-lg object-contain max-h-48 w-auto"
                    unoptimized
                  />
                </div>
              )}

              {/* Option Choices Details */}
              <div className="flex flex-col gap-1.5 text-xs">
                {optionKeys.map((key) => {
                  const text = question.options[key];
                  if (!text) return null;

                  const isUserPick = picked.includes(key);
                  const isCorrectAnswer = question.correctAnswers.includes(key);

                  let itemStyle = 'border-transparent text-zinc-600 dark:text-zinc-400';
                  if (isCorrectAnswer) {
                    itemStyle =
                      'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 font-medium';
                  } else if (isUserPick && !isCorrectAnswer) {
                    itemStyle =
                      'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-100 line-through opacity-85';
                  }

                  return (
                    <div
                      key={key}
                      className={`p-2.5 rounded-xl border flex items-start gap-2 ${itemStyle}`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                          isCorrectAnswer
                            ? 'bg-emerald-500 text-white'
                            : isUserPick
                            ? 'bg-rose-500 text-white'
                            : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                        }`}
                      >
                        {isCorrectAnswer ? (
                          <Check size={10} strokeWidth={3} />
                        ) : isUserPick ? (
                          <X size={10} strokeWidth={3} />
                        ) : (
                          key
                        )}
                      </span>
                      <span className="flex-1 leading-snug">{text}</span>
                      {isUserPick && (
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-md bg-zinc-200/80 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 shrink-0">
                          Your choice
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Return to Dashboard Footer Button */}
      <div className="pt-2 pb-6">
        <button
          onClick={onHome}
          className="w-full py-3.5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
        >
          <Home size={18} />
          <span>Back to All Quizzes</span>
        </button>
      </div>

      {/* Active Report Modal */}
      {activeReportQuestion && (
        <ReportModal
          question={activeReportQuestion}
          isOpen={true}
          onClose={() => setActiveReportQuestion(null)}
        />
      )}
    </div>
  );
}
