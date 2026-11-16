'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Question, OptionKey } from '@/types/quiz';
import {
  Bookmark,
  Flag,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Maximize2,
  X,
  Check,
} from 'lucide-react';
import ReportModal from './ReportModal';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  userSelected: OptionKey[];
  isSubmitted: boolean;
  isBookmarked: boolean;
  onSelectOption: (option: OptionKey) => void;
  onSubmitAnswer: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onToggleBookmark: () => void;
}

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  userSelected,
  isSubmitted,
  isBookmarked,
  onSelectOption,
  onSubmitAnswer,
  onNext,
  onPrevious,
  onToggleBookmark,
}: QuizCardProps) {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [imageZoomOpen, setImageZoomOpen] = useState(false);
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic for single-choice questions
  useEffect(() => {
    if (!question.isMultiple && isSubmitted) {
      const timer = setTimeout(() => {
        onNext();
      }, 900);
      autoAdvanceTimerRef.current = timer;
      return () => {
        clearTimeout(timer);
        autoAdvanceTimerRef.current = null;
      };
    }
  }, [question.isMultiple, isSubmitted, onNext]);

  const handleNextClick = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    onNext();
  };

  const optionKeys: OptionKey[] = ['A', 'B', 'C', 'D'];

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Question Progress Bar */}
      <div className="w-full space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-zinc-900 dark:text-zinc-100 font-bold text-sm">
              Question {currentIndex + 1}
            </span>
            <span className="text-zinc-400">/ {totalQuestions}</span>
          </div>
          <span className="text-xs text-zinc-400 font-medium">
            {progressPercent}%
          </span>
        </div>

        {/* Progress track */}
        <div className="w-full h-1.5 bg-zinc-100 dark:bg-[#251e20] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4f121b] dark:bg-[#c93b50] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="relative w-full bg-white dark:bg-[#1c1618] rounded-2xl p-5 shadow-xs border border-zinc-200 dark:border-[#2e2326] flex flex-col gap-4">
        {/* Header badges and actions */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#251e20] text-zinc-600 dark:text-zinc-400">
            Section {question.section} • Module {question.module}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl transition-all ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-500 fill-amber-500 border border-amber-200 dark:border-amber-800'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-[#251e20]'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark Question'}
              aria-label="Bookmark"
            >
              <Bookmark size={18} className={isBookmarked ? 'fill-current' : ''} />
            </button>
            <button
              onClick={() => setReportModalOpen(true)}
              className="p-2 rounded-xl text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              title="Report question issue"
              aria-label="Report"
            >
              <Flag size={18} />
            </button>
          </div>
        </div>

        {/* Question Text */}
        <div className="text-[#1a1617] dark:text-[#f3eff0] font-medium text-base sm:text-lg leading-relaxed">
          {question.prompt}
        </div>

        {/* Embedded Image (if present) */}
        {question.image && (
          <div className="relative group rounded-xl overflow-hidden border border-zinc-200 dark:border-[#2e2326] bg-zinc-50 dark:bg-[#151112] p-2 flex flex-col items-center justify-center">
            <div
              className="relative w-full max-h-64 sm:max-h-80 flex items-center justify-center cursor-zoom-in"
              onClick={() => setImageZoomOpen(true)}
            >
              <Image
                src={question.image}
                alt={`Figure for Question #${question.id}`}
                width={600}
                height={400}
                className="rounded-lg object-contain max-h-64 sm:max-h-80 w-auto"
                unoptimized
              />
              <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} />
              </div>
            </div>
          </div>
        )}

        {/* Answer Mode Instruction directly above options */}
        <div className="pt-2 pb-1 flex items-center justify-between">
          {question.isMultiple ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300/80 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0" />
              <span>Select all that apply</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-[#251e20] border border-zinc-200 dark:border-[#382b2e] text-zinc-800 dark:text-zinc-200 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#4f121b] dark:bg-[#c93b50] shrink-0" />
              <span>Single choice</span>
            </div>
          )}
          {question.isMultiple && userSelected.length > 0 && !isSubmitted && (
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
              {userSelected.length} selected
            </span>
          )}
        </div>

        {/* Option Choices */}
        <div className="flex flex-col gap-2.5 pt-1">
          {optionKeys.map((key) => {
            const optionText = question.options[key];
            if (!optionText) return null;

            const isSelected = userSelected.includes(key);
            const isCorrect = question.correctAnswers.includes(key);

            let optionStyle =
              'border-zinc-200 dark:border-[#2e2326] bg-zinc-50/50 dark:bg-[#151112] text-[#1a1617] dark:text-[#f3eff0] hover:border-zinc-300 dark:hover:border-[#423236]';
            let indicatorStyle =
              'border-zinc-300 dark:border-[#3d2e32] text-zinc-500 dark:text-zinc-400 bg-white dark:bg-[#1c1618]';

            if (isSubmitted) {
              if (isCorrect) {
                // Correct answer
                optionStyle =
                  'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500';
                indicatorStyle = 'border-emerald-500 bg-emerald-500 text-white';
              } else if (isSelected && !isCorrect) {
                // User picked wrong answer
                optionStyle =
                  'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500';
                indicatorStyle = 'border-rose-500 bg-rose-500 text-white';
              } else {
                optionStyle =
                  'border-zinc-200 dark:border-[#2e2326] opacity-60 bg-zinc-50 dark:bg-[#151112] text-zinc-400 dark:text-zinc-500';
              }
            } else if (isSelected) {
              // Selected state prior to submit
              optionStyle =
                'border-[#4f121b] dark:border-[#c93b50] bg-[#fdf2f4] dark:bg-[#2d1519] text-[#1a1617] dark:text-[#f3eff0] ring-2 ring-[#4f121b]/20 dark:ring-[#c93b50]/30';
              indicatorStyle = 'border-[#4f121b] dark:border-[#c93b50] bg-[#4f121b] dark:bg-[#c93b50] text-white';
            }

            return (
              <button
                key={key}
                disabled={isSubmitted}
                onClick={() => onSelectOption(key)}
                className={`w-full min-h-[52px] p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all active:scale-[0.99] disabled:active:scale-100 ${optionStyle}`}
              >
                {/* Indicator: circle for single-choice, square for multi-choice */}
                <div
                  className={`mt-0.5 shrink-0 flex items-center justify-center font-bold text-xs transition-colors ${
                    question.isMultiple
                      ? 'w-5 h-5 rounded-md border'
                      : 'w-5 h-5 rounded-full border'
                  } ${indicatorStyle}`}
                >
                  {isSubmitted && isCorrect ? (
                    <Check size={13} strokeWidth={3} />
                  ) : isSubmitted && isSelected && !isCorrect ? (
                    <X size={13} strokeWidth={3} />
                  ) : question.isMultiple && isSelected ? (
                    <Check size={13} strokeWidth={3} />
                  ) : (
                    key
                  )}
                </div>

                <div className="flex-1 text-sm font-medium leading-snug">{optionText}</div>
              </button>
            );
          })}
        </div>

        {/* Multi-choice Submit Action */}
        {question.isMultiple && !isSubmitted && (
          <div className="pt-2">
            <button
              onClick={onSubmitAnswer}
              disabled={userSelected.length === 0}
              className="w-full py-3 rounded-xl bg-[#4f121b] hover:bg-[#3d0d15] dark:bg-[#c93b50] dark:hover:bg-[#dc485e] disabled:bg-zinc-200 dark:disabled:bg-[#251e20] disabled:text-zinc-400 dark:disabled:text-zinc-600 text-white font-semibold text-sm shadow-xs transition-all active:scale-98"
            >
              Submit Answer ({userSelected.length} selected)
            </button>
          </div>
        )}

        {/* Feedback Banner after submission */}
        {isSubmitted && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center justify-between gap-2 border ${
              question.correctAnswers.every((ans) => userSelected.includes(ans)) &&
              userSelected.length === question.correctAnswers.length
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200'
            }`}
          >
            <div className="flex items-center gap-2">
              {question.correctAnswers.every((ans) => userSelected.includes(ans)) &&
              userSelected.length === question.correctAnswers.length ? (
                <>
                  <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-semibold">Correct! Well done.</span>
                </>
              ) : (
                <>
                  <XCircle size={18} className="text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>
                    <strong className="font-semibold">Incorrect.</strong> Correct answer:{' '}
                    <strong className="underline underline-offset-2">
                      {question.correctAnswers.join(', ')}
                    </strong>
                  </span>
                </>
              )}
            </div>

            <button
              onClick={handleNextClick}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold text-xs shrink-0 flex items-center gap-1 transition-all active:scale-95"
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Toolbar */}
      <div className="flex items-center justify-between px-1">
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-300 bg-white dark:bg-[#1c1618] border border-zinc-200 dark:border-[#2e2326] hover:bg-zinc-50 dark:hover:bg-[#251e20] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft size={16} />
          <span>Previous</span>
        </button>

        <span className="text-xs text-zinc-400 font-medium">
          {currentIndex + 1} of {totalQuestions}
        </span>

        <button
          onClick={handleNextClick}
          disabled={!isSubmitted}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-300 bg-white dark:bg-[#1c1618] border border-zinc-200 dark:border-[#2e2326] hover:bg-zinc-50 dark:hover:bg-[#251e20] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <span>{currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Lightbox Zoom for Diagram */}
      {imageZoomOpen && question.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setImageZoomOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setImageZoomOpen(false)}
              className="absolute -top-10 right-0 p-2 text-white/80 hover:text-white"
              aria-label="Close Zoom"
            >
              <X size={24} />
            </button>
            <Image
              src={question.image}
              alt={`Zoomed figure for Question #${question.id}`}
              width={1000}
              height={700}
              className="rounded-xl object-contain max-h-[85vh] w-auto shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Report Modal */}
      <ReportModal
        question={question}
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  );
}
