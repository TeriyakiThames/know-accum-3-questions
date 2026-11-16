'use client';

import React, { useState } from 'react';
import { Question } from '@/types/quiz';
import { X, Copy, Check, AlertCircle } from 'lucide-react';

interface ReportModalProps {
  question: Question;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ question, isOpen, onClose }: ReportModalProps) {
  const [reason, setReason] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const reportText = [
      `=== QUIZ QUESTION REPORT ===`,
      `Section: ${question.section}`,
      `Module: ${question.module}`,
      `Question ID: #${question.id} (Module Q${question.questionNumberInModule})`,
      `Prompt: ${question.prompt}`,
      `Options:`,
      `  A: ${question.options.A}`,
      `  B: ${question.options.B}`,
      `  C: ${question.options.C}`,
      `  D: ${question.options.D}`,
      `Current Answer Key: ${question.correctAnswers.join(', ')}`,
      `Issue / Note: ${reason.trim() || 'No additional note provided.'}`,
      `============================`,
    ].join('\n');

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(reportText);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = reportText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1500);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-5 text-zinc-900 dark:text-zinc-100 flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <AlertCircle size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-base leading-tight">Report Question Issue</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Copies exact question details to clipboard
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Question Info Pill */}
        <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl text-xs space-y-1 border border-zinc-100 dark:border-zinc-800">
          <div className="flex justify-between font-medium text-zinc-700 dark:text-zinc-300">
            <span>Section {question.section} • Module {question.module}</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">Q#{question.id}</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2 italic">
            &ldquo;{question.prompt}&rdquo;
          </p>
        </div>

        {/* Input Textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            What is wrong with this question or answer?
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g. Typo in choice B, correct answer should be C, or confusing wording..."
            rows={3}
            className="w-full p-3 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50 resize-none transition-all placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-xs font-medium rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className={`flex-2 py-2.5 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-98'
            }`}
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Report to Clipboard</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
