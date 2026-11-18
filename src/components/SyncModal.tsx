'use client';

import React, { useState, useEffect, useRef, useId } from 'react';
import Image from 'next/image';
import {
  exportQuizData,
  importQuizData,
  useQuizStorage,
} from '@/lib/storage';
import {
  exportToCompactCode,
  generateSyncUrl,
  parseSyncInput,
  generateQrCodeDataUrl,
  downloadBackupFile,
} from '@/lib/sync';
import { QuizExportData } from '@/types/quiz';
import { trackEvent } from '@/lib/analytics';
import {
  QrCode,
  Copy,
  Check,
  Download,
  Upload,
  X,
  Smartphone,
  Laptop,
  ArrowRightLeft,
  AlertCircle,
  CheckCircle2,
  FileJson,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialImportPayload?: QuizExportData | null;
}

export default function SyncModal({ isOpen, onClose, initialImportPayload }: SyncModalProps) {
  const { moduleScores, wrongCount, bookmarkCount } = useQuizStorage();
  const fileInputId = useId();

  const [activeTab, setActiveTab] = useState<'export' | 'import'>(
    initialImportPayload ? 'import' : 'export'
  );

  // Export states
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [syncCode, setSyncCode] = useState<string>('');
  const [syncUrl, setSyncUrl] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Import states
  const [importInput, setImportInput] = useState<string>('');
  const [parsedIncoming, setParsedIncoming] = useState<QuizExportData | null>(
    initialImportPayload || null
  );
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccessMessage, setImportSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Local device stats
  const localCompletedModules = Object.keys(moduleScores).length;

  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // Generate QR code and sync links on client mount / open
  useEffect(() => {
    let cancelled = false;

    try {
      const currentData = exportQuizData();
      const code = exportToCompactCode(currentData);
      const url = generateSyncUrl(code);

      generateQrCodeDataUrl(url)
        .then((dataUrl) => {
          if (!cancelled) {
            setSyncCode(code);
            setSyncUrl(url);
            setQrCodeDataUrl(dataUrl);
          }
        })
        .catch((err) => {
          console.error('Failed to generate QR Code:', err);
        });
    } catch (err) {
      console.error('Error preparing export sync data:', err);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      const code = syncCode || exportToCompactCode(exportQuizData());
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      trackEvent('sync_export', { method: 'copy_code' });
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleCopyLink = async () => {
    try {
      const code = syncCode || exportToCompactCode(exportQuizData());
      const link = syncUrl || generateSyncUrl(code);
      await navigator.clipboard.writeText(link);
      setCopiedLink(true);
      trackEvent('sync_export', { method: 'copy_link' });
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleDownloadBackup = () => {
    const currentData = exportQuizData();
    downloadBackupFile(currentData);
    trackEvent('sync_export', { method: 'download_file' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setImportInput(val);
    setImportSuccessMessage(null);

    if (!val.trim()) {
      setParsedIncoming(null);
      setImportError(null);
      return;
    }

    const parsed = parseSyncInput(val);
    if (parsed) {
      setParsedIncoming(parsed);
      setImportError(null);
    } else {
      setParsedIncoming(null);
      setImportError('Unrecognized or invalid sync code format.');
    }
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setImportInput(text);
        const parsed = parseSyncInput(text);
        if (parsed) {
          setParsedIncoming(parsed);
          setImportError(null);
        } else {
          setParsedIncoming(null);
          setImportError('Clipboard does not contain a valid sync code or URL.');
        }
      }
    } catch {
      setImportError('Clipboard access denied. Please manually paste into the box below.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        setImportInput(content);
        const parsed = parseSyncInput(content);
        if (parsed) {
          setParsedIncoming(parsed);
          setImportError(null);
        } else {
          setParsedIncoming(null);
          setImportError('Uploaded file is not a valid quiz backup.');
        }
      }
    };
    reader.onerror = () => {
      setImportError('Failed to read file.');
    };
    reader.readAsText(file);
  };

  const handleApplyImport = (mode: 'merge' | 'replace') => {
    if (!parsedIncoming) return;

    try {
      const res = importQuizData(parsedIncoming, mode);
      if (res.success) {
        trackEvent('sync_import', { mode, modules: res.moduleScoreCount });
        setImportSuccessMessage(
          mode === 'merge'
            ? `Successfully merged! Now at ${res.moduleScoreCount} modules, ${res.bookmarkCount} bookmarks, and ${res.wrongCount} wrong questions.`
            : `Successfully replaced! Restored ${res.moduleScoreCount} modules, ${res.bookmarkCount} bookmarks, and ${res.wrongCount} wrong questions.`
        );
        setParsedIncoming(null);
        setImportInput('');
      } else {
        setImportError('Failed to apply sync data.');
      }
    } catch (err) {
      console.error('Import error:', err);
      setImportError('An unexpected error occurred while saving sync data.');
    }
  };

  const incomingCompletedModules = parsedIncoming
    ? Object.keys(parsedIncoming.moduleScores || {}).length
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white dark:bg-[#1a1416] border border-zinc-200 dark:border-[#2e2326] rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sync-dialog-title"
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-zinc-100 dark:border-[#261d20] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-[#fcf0f2] dark:bg-[#2c1318] text-[#4f121b] dark:text-[#e05368] flex items-center justify-center">
              <ArrowRightLeft size={18} />
            </div>
            <div>
              <h2 id="sync-dialog-title" className="text-base font-extrabold text-[#1a1617] dark:text-[#f3eff0]">
                Sync & Transfer
              </h2>
              <p className="text-[11px] text-zinc-500 font-medium">
                Transfer progress between Phone & Laptop
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-[#251e20] transition-colors"
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-5 pt-3">
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-zinc-100 dark:bg-[#140f10] border border-zinc-200/80 dark:border-[#261d20] rounded-2xl">
            <button
              onClick={() => {
                setActiveTab('export');
                setImportSuccessMessage(null);
              }}
              className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'export'
                  ? 'bg-white dark:bg-[#251e20] text-[#1a1617] dark:text-[#f3eff0] shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
              }`}
            >
              <QrCode size={14} />
              <span>Export / Share</span>
            </button>
            <button
              onClick={() => setActiveTab('import')}
              className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'import'
                  ? 'bg-white dark:bg-[#251e20] text-[#1a1617] dark:text-[#f3eff0] shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
              }`}
            >
              <Upload size={14} />
              <span>Import / Receive</span>
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* TAB 1: EXPORT / SHARE */}
          {activeTab === 'export' && (
            <div className="space-y-4 animate-in fade-in">
              {/* Summary of current progress being transferred */}
              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-[#151112] border border-zinc-200/70 dark:border-[#2e2326] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[11px] text-zinc-500 font-medium block">
                    Current Device Progress
                  </span>
                  <div className="font-bold text-[#1a1617] dark:text-[#f3eff0] mt-0.5">
                    {localCompletedModules} Modules • {bookmarkCount} Bookmarks • {wrongCount} Wrong
                  </div>
                </div>
                <div className="flex items-center gap-1 text-zinc-400">
                  <Laptop size={15} />
                  <ArrowRightLeft size={12} />
                  <Smartphone size={15} />
                </div>
              </div>

              {/* QR Code Container */}
              <div className="flex flex-col items-center justify-center p-4 bg-zinc-50 dark:bg-[#151112] border border-zinc-200/80 dark:border-[#2e2326] rounded-2xl">
                <div className="p-3 bg-white rounded-2xl shadow-xs border border-zinc-200/60 inline-flex items-center justify-center">
                  {qrCodeDataUrl ? (
                    <Image
                      src={qrCodeDataUrl}
                      alt="Sync QR Code"
                      width={180}
                      height={180}
                      className="w-44 h-44 object-contain rounded-lg"
                      unoptimized
                    />
                  ) : (
                    <div className="w-44 h-44 flex items-center justify-center text-zinc-400">
                      <RefreshCw size={24} className="animate-spin" />
                    </div>
                  )}
                </div>

                <p className="text-xs text-center text-zinc-600 dark:text-zinc-400 font-medium mt-3 max-w-xs">
                  Scan with your phone&apos;s camera to open and import progress automatically.
                </p>

                {isLocalhost && (
                  <div className="mt-2 text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-center">
                    Note: Running locally. Copy code or backup file if phone cannot access localhost.
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="py-2.5 px-3 rounded-xl border border-zinc-200 dark:border-[#2e2326] hover:bg-zinc-100 dark:hover:bg-[#251e20] text-xs font-semibold text-zinc-700 dark:text-zinc-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copiedLink ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    <span>{copiedLink ? 'Link Copied!' : 'Copy Direct Link'}</span>
                  </button>

                  <button
                    onClick={handleCopyCode}
                    className="py-2.5 px-3 rounded-xl bg-[#4f121b] hover:bg-[#3d0d15] dark:bg-[#c93b50] dark:hover:bg-[#dc485e] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedCode ? 'Code Copied!' : 'Copy Sync Code'}</span>
                  </button>
                </div>

                <button
                  onClick={handleDownloadBackup}
                  className="w-full py-2.5 px-3 rounded-xl border border-zinc-200 dark:border-[#2e2326] hover:bg-zinc-100 dark:hover:bg-[#251e20] text-xs font-semibold text-zinc-600 dark:text-zinc-300 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download size={14} />
                  <span>Download .json Backup File</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: IMPORT / RECEIVE */}
          {activeTab === 'import' && (
            <div className="space-y-4 animate-in fade-in">
              {importSuccessMessage ? (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-xs font-medium leading-relaxed">{importSuccessMessage}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  {/* Paste / Input area */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                        Sync Code or URL
                      </label>
                      <button
                        onClick={handlePasteClipboard}
                        className="text-xs font-semibold text-[#4f121b] dark:text-[#e05368] hover:underline flex items-center gap-1"
                      >
                        <Copy size={12} />
                        <span>Paste from Clipboard</span>
                      </button>
                    </div>

                    <textarea
                      value={importInput}
                      onChange={handleInputChange}
                      placeholder="Paste your sync code, full link (#sync=...), or JSON backup here..."
                      className="w-full h-24 p-3 rounded-2xl bg-zinc-50 dark:bg-[#151112] border border-zinc-200 dark:border-[#2e2326] text-xs font-mono text-[#1a1617] dark:text-[#f3eff0] placeholder:text-zinc-400 focus:outline-hidden focus:border-[#4f121b] dark:focus:border-[#c93b50] resize-none"
                    />
                  </div>

                  {/* File Upload Option */}
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".json,application/json"
                      onChange={handleFileUpload}
                      className="hidden"
                      id={fileInputId}
                    />
                    <label
                      htmlFor={fileInputId}
                      className="w-full py-2.5 px-3 rounded-xl border border-dashed border-zinc-300 dark:border-[#382b2e] hover:bg-zinc-50 dark:hover:bg-[#1c1618] text-xs font-semibold text-zinc-600 dark:text-zinc-300 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <FileJson size={15} />
                      <span>Or Upload .json Backup File</span>
                    </label>
                  </div>

                  {importError && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-400 flex items-center gap-2">
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{importError}</span>
                    </div>
                  )}

                  {/* Incoming Payload Diff & Confirmation */}
                  {parsedIncoming && (
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#151112] border border-zinc-200 dark:border-[#2e2326] space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a1617] dark:text-[#f3eff0]">
                        <Sparkles size={14} className="text-amber-500" />
                        <span>Incoming Progress Detected</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-[#1f181a] border border-zinc-200/70 dark:border-[#2e2326]">
                          <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                            Incoming Device
                          </span>
                          <span className="font-bold text-sm block mt-0.5">
                            {incomingCompletedModules} Modules
                          </span>
                          <span className="text-[11px] text-zinc-500">
                            {parsedIncoming.bookmarks.length} Bookmarks • {parsedIncoming.wrongQuestions.length} Wrong
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white dark:bg-[#1f181a] border border-zinc-200/70 dark:border-[#2e2326]">
                          <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                            Current Device
                          </span>
                          <span className="font-bold text-sm block mt-0.5">
                            {localCompletedModules} Modules
                          </span>
                          <span className="text-[11px] text-zinc-500">
                            {bookmarkCount} Bookmarks • {wrongCount} Wrong
                          </span>
                        </div>
                      </div>

                      <div className="pt-1 flex flex-col gap-2">
                        <button
                          onClick={() => handleApplyImport('merge')}
                          className="w-full py-3 rounded-xl bg-[#4f121b] hover:bg-[#3d0d15] dark:bg-[#c93b50] dark:hover:bg-[#dc485e] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                        >
                          <Check size={14} />
                          <span>Merge with Current (Recommended)</span>
                        </button>

                        <button
                          onClick={() => {
                            if (window.confirm('Overwrite all local progress with the incoming data?')) {
                              handleApplyImport('replace');
                            }
                          }}
                          className="w-full py-2 rounded-xl text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors text-center"
                        >
                          Overwrite completely
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
