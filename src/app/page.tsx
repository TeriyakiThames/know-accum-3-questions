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
import ThemeToggle from '@/components/ThemeToggle';
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

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function HomePage() {
  const router = useRouter();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<'modules' | 'random' | 'wrong' | 'bookmarks'>('modules');

  // Reactive storage metrics via useSyncExternalStore
  const { moduleScores, randomPoolCount, wrongCount, bookmarkCount } = useQuizStorage();

  // Random mode settings
  const [randomCount, setRandomCount] = useState<number>(10);

  // Overall progress box toggle view (completion vs. score & grade)
  const [showOverallGrade, setShowOverallGrade] = useState(false);

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

  // Calculate questions completed and total correct questions out of 260
  const totalCompletedQuestions = Object.values(moduleScores).reduce(
    (sum, prog) => sum + (prog.totalQuestions || 0),
    0
  );
  const totalCorrectQuestions = Object.values(moduleScores).reduce(
    (sum, prog) => sum + (prog.bestScore || 0),
    0
  );

  const completionPercent = Math.min(100, Math.round((totalCompletedQuestions / 260) * 100));
  const correctPercent = (totalCorrectQuestions / 260) * 100;
  const isPassed = correctPercent >= 33.4;
  const grade = isPassed ? 'S' : 'U';

  return (
    <div className="min-h-screen bg-white dark:bg-[#120e0f] text-[#1a1617] dark:text-[#f3eff0] flex flex-col">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#120e0f]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-[#2e2326]">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#4f121b] to-[#781c2a] flex items-center justify-center text-white shadow-xs">
              <BookOpen size={16} />
            </div>
            <div>
              <h1 className="font-extrabold text-sm leading-tight tracking-tight text-[#1a1617] dark:text-[#f3eff0]">
                Know Accum 3
              </h1>
              <p className="text-[10px] text-zinc-500 font-medium">Google Data Analytics</p>
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

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-md w-full mx-auto p-4 flex flex-col gap-4">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-100 dark:bg-[#1c1618] border border-zinc-200/80 dark:border-[#2e2326] rounded-2xl">
          <button
            onClick={() => setActiveTab('modules')}
            className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'modules'
                ? 'bg-white dark:bg-[#251e20] text-[#1a1617] dark:text-[#f3eff0] shadow-xs'
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
                ? 'bg-white dark:bg-[#251e20] text-[#1a1617] dark:text-[#f3eff0] shadow-xs'
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
            {/* Overview Banner Card (Interactive: tap to toggle between completion & grade) */}
            <button
              type="button"
              onClick={() => setShowOverallGrade((prev) => !prev)}
              className="w-full text-left p-4 rounded-2xl bg-gradient-to-br from-[#4f121b] via-[#5c1621] to-[#731c2a] dark:from-[#240d11] dark:via-[#36131a] dark:to-[#4a1823] border border-[#731c2a]/40 dark:border-[#5c202a] text-white shadow-sm flex flex-col gap-3 transition-all hover:shadow-md active:scale-[0.99] group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-rose-200 uppercase tracking-wider">
                      {showOverallGrade ? 'Performance & Grade' : 'Overall Progress'}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/15 text-rose-100 font-medium">
                      {showOverallGrade ? 'Tap for Progress' : 'Tap for Grade'}
                    </span>
                  </div>

                  {showOverallGrade ? (
                    <div className="mt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black">{totalCorrectQuestions} / 260</span>
                        <span className="text-xs text-rose-200 font-semibold">Correct Questions</span>
                      </div>
                      <p className="text-xs text-rose-100/90 mt-0.5">
                        {correctPercent.toFixed(1)}% accuracy • 33.4% required to pass
                      </p>
                    </div>
                  ) : (
                    <div className="mt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black">{totalCompletedQuestions} / 260</span>
                        <span className="text-xs text-rose-200 font-semibold">Questions Completed</span>
                      </div>
                      <p className="text-xs text-rose-100/90 mt-0.5">
                        {completedCount} / {totalModules} Modules across 7 Sections
                      </p>
                    </div>
                  )}
                </div>

                <div className="shrink-0 flex items-center justify-center">
                  {showOverallGrade ? (
                    <div
                      className={`px-3 py-1.5 rounded-xl font-black text-sm flex items-center gap-1 shadow-sm border ${
                        isPassed
                          ? 'bg-emerald-500/90 text-white border-emerald-400'
                          : 'bg-rose-500/90 text-white border-rose-400'
                      }`}
                    >
                      <span className="text-lg font-black">{grade}</span>
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {isPassed ? 'Pass' : 'Fail'}
                      </span>
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center text-amber-300">
                      <Trophy size={22} />
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar of Completed / Correct Questions */}
              <div className="w-full space-y-1">
                <div className="w-full h-2 bg-black/25 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ease-out rounded-full ${
                      showOverallGrade
                        ? isPassed
                          ? 'bg-emerald-400'
                          : 'bg-rose-400'
                        : 'bg-white'
                    }`}
                    style={{
                      width: `${showOverallGrade ? Math.min(100, Math.round(correctPercent)) : completionPercent}%`,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-rose-200/90 font-medium">
                  <span>
                    {showOverallGrade
                      ? `${totalCorrectQuestions} / 260 correct (${correctPercent.toFixed(1)}%)`
                      : `${totalCompletedQuestions} / 260 completed (${completionPercent}%)`}
                  </span>
                  <span>
                    {showOverallGrade
                      ? isPassed
                        ? 'Status: S (Pass)'
                        : 'Status: U (Fail < 33.4%)'
                      : `${completedCount}/28 modules`}
                  </span>
                </div>
              </div>
            </button>

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
                    className="rounded-2xl bg-white dark:bg-[#1c1618] border border-zinc-200 dark:border-[#2e2326] overflow-hidden shadow-2xs transition-all"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(sec.section)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50/50 dark:hover:bg-[#251e20]/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#fcf0f2] dark:bg-[#2c1318] border border-[#eed2d6] dark:border-[#4d1f27] text-[#4f121b] dark:text-[#e05368] font-black text-sm flex items-center justify-center">
                          {sec.section}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-[#1a1617] dark:text-[#f3eff0]">
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
                      <div className="px-4 pb-4 pt-1 flex flex-col gap-2 border-t border-zinc-100 dark:border-[#2e2326] animate-in fade-in">
                        {sec.modules.map((m) => {
                          const progress = moduleScores[`${sec.section}-${m.module}`];
                          const hasAttempted = !!progress;

                          return (
                            <button
                              key={m.module}
                              onClick={() => handleStartModuleQuiz(sec.section, m.module)}
                              className="w-full p-3 rounded-xl bg-zinc-50 dark:bg-[#151112] hover:bg-[#fcf0f2]/70 dark:hover:bg-[#2c1318]/60 border border-zinc-100 dark:border-[#2e2326] hover:border-[#eed2d6] dark:hover:border-[#4d1f27] flex items-center justify-between text-left transition-all active:scale-[0.99] group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-lg bg-zinc-200/80 dark:bg-[#282023] text-zinc-700 dark:text-zinc-300 font-bold text-xs flex items-center justify-center group-hover:bg-[#4f121b] dark:group-hover:bg-[#c93b50] group-hover:text-white transition-colors">
                                  {m.module}
                                </div>
                                <div>
                                  <span className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 group-hover:text-[#4f121b] dark:group-hover:text-[#e05368] transition-colors">
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
                                  className="text-zinc-400 group-hover:text-[#4f121b] dark:group-hover:text-[#e05368] transition-transform group-hover:translate-x-0.5"
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
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1618] border border-zinc-200 dark:border-[#2e2326] shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#fcf0f2] dark:bg-[#2c1318] text-[#4f121b] dark:text-[#e05368]">
                  <Shuffle size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-base text-[#1a1617] dark:text-[#f3eff0]">Random Practice Mode</h2>
                  <p className="text-xs text-zinc-500">
                    Draws non-repeating questions across all 7 sections
                  </p>
                </div>
              </div>

              {/* Pool Status */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#151112] border border-zinc-100 dark:border-[#2e2326] flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500">Unseen Pool Remaining:</span>
                  <div className="font-bold text-base text-[#1a1617] dark:text-[#f3eff0]">
                    {randomPoolCount} <span className="text-xs font-normal text-zinc-400">/ 260 questions</span>
                  </div>
                </div>

                <button
                  onClick={handleResetPool}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#382b2e] text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#251e20] flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset Pool</span>
                </button>
              </div>

              {/* Question Count Selector (Without 'Qs' per Request 4) */}
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
                          ? 'bg-[#4f121b] dark:bg-[#c93b50] text-white shadow-xs'
                          : 'bg-zinc-100 dark:bg-[#251e20] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-[#32272a]'
                      }`}
                    >
                      {count === allQuestions.length ? 'All (260)' : `${count}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Quiz Action */}
              <button
                onClick={handleStartRandomQuiz}
                className="w-full py-3.5 rounded-xl bg-[#4f121b] hover:bg-[#3d0d15] dark:bg-[#c93b50] dark:hover:bg-[#dc485e] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
              >
                <Play size={16} className="fill-current" />
                <span>Start Quiz ({randomCount === allQuestions.length ? '260' : randomCount} Questions)</span>
              </button>
            </div>

            {/* Hint Box */}
            <div className="p-4 rounded-2xl bg-[#fcf0f2]/70 dark:bg-[#2c1318]/40 border border-[#eed2d6] dark:border-[#4d1f27] text-xs text-[#4f121b] dark:text-[#f3eff0] flex items-start gap-2.5">
              <Sparkles size={16} className="shrink-0 mt-0.5 text-[#4f121b] dark:text-[#e05368]" />
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

      {/* Footer Link to GitHub Repo (Request 9: subtle, not easy to find but is there) */}
      <footer className="mt-auto py-6 text-center text-xs text-zinc-400/80 dark:text-zinc-600">
        <div className="flex items-center justify-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <a
            href="https://github.com/TeriyakiThames/know-accum-3-questions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub repository</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
