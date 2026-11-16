'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllSectionsAndModules, allQuestions } from '@/data/questions';
import {
  useQuizStorage,
  resetRandomPool,
} from '@/lib/storage';
import WrongQuestionsView from '@/components/WrongQuestionsView';
import BookmarksView from '@/components/BookmarksView';
import {
  BookOpen,
  Shuffle,
  AlertTriangle,
  Bookmark,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Trophy,
  Play,
  Layers,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'modules' | 'random' | 'wrong' | 'bookmarks'>('modules');

  // Reactive storage metrics via useSyncExternalStore
  const { moduleScores, randomPoolCount, wrongCount, bookmarkCount } = useQuizStorage();

  // Random mode settings
  const [randomCount, setRandomCount] = useState<number>(10);

  // Collapsible section state (open first section by default)
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({ 1: true });

  const sectionsData = getAllSectionsAndModules();

  const toggleSection = (sectionNum: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionNum]: !prev[sectionNum],
    }));
  };

  const handleStartModuleQuiz = (section: number, module: number) => {
    router.push(`/quiz?mode=module&section=${section}&module=${module}`);
  };

  const handleStartRandomQuiz = () => {
    router.push(`/quiz?mode=random&count=${randomCount}`);
  };

  const handleResetPool = () => {
    if (window.confirm('Reset the random pool back to all 260 questions?')) {
      resetRandomPool();
    }
  };

  // Overall stats
  const completedCount = Object.keys(moduleScores).length;
  const totalModules = 28;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
              <BookOpen size={16} />
            </div>
            <div>
              <h1 className="font-extrabold text-sm leading-tight tracking-tight">Know Accum 3</h1>
              <p className="text-[10px] text-zinc-500 font-medium">Data Quiz Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('wrong')}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                activeTab === 'wrong'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200/70 dark:border-rose-900/40'
              }`}
              title="Wrong Questions"
            >
              <AlertTriangle size={12} />
              <span>{wrongCount}</span>
            </button>

            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                activeTab === 'bookmarks'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/70 dark:border-amber-900/40'
              }`}
              title="Bookmarks"
            >
              <Bookmark size={12} className={bookmarkCount > 0 ? 'fill-current' : ''} />
              <span>{bookmarkCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-md w-full mx-auto p-4 flex flex-col gap-4">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-200/60 dark:bg-zinc-900 rounded-2xl">
          <button
            onClick={() => setActiveTab('modules')}
            className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'modules'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            <Layers size={14} />
            <span>Sections & Modules</span>
          </button>
          <button
            onClick={() => setActiveTab('random')}
            className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'random'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
          >
            <Shuffle size={14} />
            <span>Random Mode</span>
          </button>
        </div>

        {/* Tab 1: Sections & Modules */}
        {activeTab === 'modules' && (
          <div className="flex flex-col gap-4 animate-in fade-in pb-12">
            {/* Overview Banner Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-indigo-200 uppercase tracking-wider">
                  Overall Progress
                </span>
                <div className="text-xl font-extrabold mt-0.5">
                  {completedCount} / {totalModules} Modules
                </div>
                <p className="text-xs text-indigo-100/80 mt-0.5">
                  260 Questions across 7 Sections
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center">
                <Trophy size={24} className="text-amber-300" />
              </div>
            </div>

            {/* List of 7 Sections */}
            <div className="flex flex-col gap-3">
              {sectionsData.map((sec) => {
                const isExpanded = !!expandedSections[sec.section];
                const totalSecQuestions = sec.modules.reduce((sum, m) => sum + m.questionCount, 0);

                // Check section completion
                const completedInSec = sec.modules.filter(
                  (m) => !!moduleScores[`${sec.section}-${m.module}`]
                ).length;

                return (
                  <div
                    key={sec.section}
                    className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xs transition-all"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(sec.section)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 font-black text-sm flex items-center justify-center">
                          {sec.section}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                            Section {sec.section}
                          </h3>
                          <p className="text-xs text-zinc-500">
                            4 Modules • {totalSecQuestions} Questions
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {completedInSec === 4 ? (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                            Completed
                          </span>
                        ) : completedInSec > 0 ? (
                          <span className="text-[11px] font-medium text-zinc-500">
                            {completedInSec}/4 Done
                          </span>
                        ) : null}
                        <div className="text-zinc-400">
                          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        </div>
                      </div>
                    </button>

                    {/* Section Modules List */}
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 flex flex-col gap-2 border-t border-zinc-100 dark:border-zinc-800 animate-in fade-in">
                        {sec.modules.map((m) => {
                          const progress = moduleScores[`${sec.section}-${m.module}`];
                          const hasAttempted = !!progress;

                          return (
                            <button
                              key={m.module}
                              onClick={() => handleStartModuleQuiz(sec.section, m.module)}
                              className="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/40 border border-zinc-100 dark:border-zinc-800/80 hover:border-indigo-200 dark:hover:border-indigo-800 flex items-center justify-between text-left transition-all active:scale-[0.99] group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-lg bg-zinc-200/80 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-xs flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                  {m.module}
                                </div>
                                <div>
                                  <span className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    Module {m.module}
                                  </span>
                                  <span className="text-[11px] text-zinc-400 ml-2">
                                    ({m.questionCount} Questions)
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                {hasAttempted ? (
                                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100/70 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
                                    Best: {progress.bestScore}/{progress.totalQuestions}
                                  </span>
                                ) : (
                                  <span className="text-[11px] font-medium text-zinc-400">
                                    Not started
                                  </span>
                                )}
                                <ChevronRight
                                  size={14}
                                  className="text-zinc-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5"
                                />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Random Practice Mode */}
        {activeTab === 'random' && (
          <div className="flex flex-col gap-4 animate-in fade-in pb-12">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Shuffle size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-base">Random Practice Mode</h2>
                  <p className="text-xs text-zinc-500">
                    Draws non-repeating questions across all 7 sections
                  </p>
                </div>
              </div>

              {/* Pool Status */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500">Unseen Pool Remaining:</span>
                  <div className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                    {randomPoolCount} <span className="text-xs font-normal text-zinc-400">/ 260 questions</span>
                  </div>
                </div>

                <button
                  onClick={handleResetPool}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset Pool</span>
                </button>
              </div>

              {/* Question Count Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Select Question Count
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 20, 30, allQuestions.length].map((count) => (
                    <button
                      key={count}
                      onClick={() => setRandomCount(count)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        randomCount === count
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                      }`}
                    >
                      {count === allQuestions.length ? 'All (260)' : `${count} Qs`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Quiz Action */}
              <button
                onClick={handleStartRandomQuiz}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                <Play size={16} className="fill-current" />
                <span>Start Quiz ({randomCount === allQuestions.length ? '260' : randomCount} Questions)</span>
              </button>
            </div>

            {/* Hint Box */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-xs text-indigo-900 dark:text-indigo-300 flex items-start gap-2.5">
              <Sparkles size={16} className="shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400" />
              <span>
                Questions in Random Mode are drawn without duplicates from the pool. Once you have seen all 260 questions, the pool automatically refreshes for continuous mastery!
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Wrong Questions Bank */}
        {activeTab === 'wrong' && (
          <WrongQuestionsView onBack={() => setActiveTab('modules')} />
        )}

        {/* Tab 4: Bookmarked Questions */}
        {activeTab === 'bookmarks' && (
          <BookmarksView onBack={() => setActiveTab('modules')} />
        )}
      </main>
    </div>
  );
}
