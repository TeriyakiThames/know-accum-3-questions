'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Question } from '@/types/quiz';
import { getQuestionById } from '@/data/questions';
import { getCourseById } from '@/data/courses';
import {
  getWrongQuestionIds,
  removeWrongQuestion,
  clearWrongQuestions,
} from '@/lib/storage';
import {
  XCircle,
  Play,
  Trash2,
  CheckCircle2,
  Flag,
  Check,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from 'lucide-react';
import ReportModal from './ReportModal';

export default function WrongQuestionsView({ onBack }: { onBack: () => void }) {
  const router = useRouter();
  const [wrongIds, setWrongIds] = useState<number[]>(() => getWrongQuestionIds());
  const [activeReportQuestion, setActiveReportQuestion] = useState<Question | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const questions: Question[] = wrongIds
    .map((id) => getQuestionById(id))
    .filter(Boolean) as Question[];

  const handleRemove = (id: number) => {
    removeWrongQuestion(id);
    setWrongIds(getWrongQuestionIds());
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all wrong questions?')) {
      clearWrongQuestions();
      setWrongIds([]);
    }
  };

  const handleStartPractice = () => {
    router.push('/quiz?mode=wrong');
  };

  return (
    <div className="w-full flex flex-col gap-4 animate-in fade-in pb-8">
      {/* View Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <XCircle size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold">Wrong Questions Bank</h2>
            <p className="text-xs text-zinc-500">
              {questions.length} {questions.length === 1 ? 'question' : 'questions'} to review
            </p>
          </div>
        </div>

        {questions.length > 0 && (
          <button
            onClick={handleClearAll}
            className="p-2 rounded-xl text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
            title="Clear all"
            aria-label="Clear all"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>

      {/* Start Practice Drill Button */}
      {questions.length > 0 ? (
        <button
          onClick={handleStartPractice}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#4f121b] hover:bg-[#3d0d15] dark:bg-[#c93b50] dark:hover:bg-[#dc485e] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
        >
          <Play size={16} className="fill-current" />
          <span>Practice All Wrong Questions ({questions.length})</span>
        </button>
      ) : (
        <div className="p-8 rounded-2xl border border-dashed border-zinc-200 dark:border-[#2e2326] text-center flex flex-col items-center justify-center gap-2 bg-white dark:bg-[#1c1618]">
          <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="font-semibold text-sm text-[#1a1617] dark:text-[#f3eff0]">No Wrong Questions Saved</h3>
          <p className="text-xs text-zinc-500 max-w-xs">
            Any questions you answer incorrectly during quizzes will automatically appear here for review.
          </p>
          <button
            onClick={onBack}
            className="mt-3 px-4 py-2 rounded-xl bg-[#1a1617] dark:bg-[#f3eff0] text-white dark:text-[#1a1617] text-xs font-semibold"
          >
            Go to Quizzes
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="flex flex-col gap-3">
        {questions.map((question, index) => {
          const isExpanded = expandedId === question.id;
          const optionKeys = ['A', 'B', 'C', 'D'] as const;

          return (
            <div
              key={question.id}
              className="p-4 rounded-2xl bg-white dark:bg-[#1c1618] border border-zinc-200 dark:border-[#2e2326] shadow-xs flex flex-col gap-2.5 transition-all"
            >
              {/* Question metadata row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span
                    className="text-xs font-medium text-zinc-500"
                    title={`${getCourseById(question.section)?.title || `Section ${question.section}`} • Module ${question.module}`}
                  >
                    S{question.section} • M{question.module} • Q#{question.id}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleRemove(question.id)}
                    className="px-2 py-1 rounded-lg text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors flex items-center gap-1"
                    title="Mark as Mastered"
                  >
                    <Check size={12} strokeWidth={3} />
                    <span>Mastered</span>
                  </button>

                  <button
                    onClick={() => setActiveReportQuestion(question)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-rose-500"
                    title="Report"
                    aria-label="Report"
                  >
                    <Flag size={14} />
                  </button>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : question.id)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>

              {/* Prompt */}
              <p
                onClick={() => setExpandedId(isExpanded ? null : question.id)}
                className={`text-sm font-medium text-[#1a1617] dark:text-[#f3eff0] leading-relaxed cursor-pointer ${
                  !isExpanded ? 'line-clamp-2' : ''
                }`}
              >
                {question.prompt}
              </p>

              {/* Expanded details: Image and Options */}
              {isExpanded && (
                <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100 dark:border-[#2e2326] animate-in fade-in">
                  {question.image && (
                    <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-[#2e2326] bg-zinc-50 dark:bg-[#151112] p-2 flex justify-center mb-1">
                      <Image
                        src={question.image}
                        alt={`Figure for Question #${question.id}`}
                        width={360}
                        height={220}
                        className="rounded-lg object-contain max-h-44 w-auto"
                        unoptimized
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5 text-xs">
                    {optionKeys.map((key) => {
                      const text = question.options[key];
                      const isCorrect = question.correctAnswers.includes(key);

                      return (
                        <div
                          key={key}
                          className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 font-medium'
                              : 'border-transparent text-zinc-600 dark:text-zinc-400'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                              isCorrect
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                            }`}
                          >
                            {isCorrect ? <Check size={10} strokeWidth={3} /> : key}
                          </span>
                          <span className="flex-1">{text}</span>
                          {isCorrect && (
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider shrink-0">
                              Answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {question.explanation && (
                    <div className="mt-1 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 text-xs flex flex-col gap-1 shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200 text-[11px]">
                        <Lightbulb size={13} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>Why this is correct</span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

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
