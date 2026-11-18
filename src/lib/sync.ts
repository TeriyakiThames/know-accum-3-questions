import QRCode from 'qrcode';
import { QuizExportData, CompactSyncPayload, ModuleProgress } from '@/types/quiz';
import { allQuestions } from '@/data/questions';

export function toBase64Url(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function fromBase64Url(base64Url: string): string {
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4 !== 0) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export function exportToCompactCode(data: QuizExportData): string {
  const compactScores: Record<string, [number, number, string]> = {};
  for (const [key, val] of Object.entries(data.moduleScores || {})) {
    if (/^[1-7]-[1-4]$/.test(key) && val) {
      compactScores[key] = [val.bestScore || 0, val.totalQuestions || 0, val.completedAt || ''];
    }
  }

  const compactPayload: CompactSyncPayload = {
    v: 1,
    t: Math.floor(new Date(data.exportedAt || Date.now()).getTime() / 1000),
    w: data.wrongQuestions || [],
    b: data.bookmarks || [],
    s: compactScores,
  };

  return toBase64Url(JSON.stringify(compactPayload));
}

export function exportToJsonString(data: QuizExportData): string {
  return JSON.stringify(data, null, 2);
}

export function generateSyncUrl(code: string): string {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${window.location.pathname}#sync=${code}`;
  }
  return `#sync=${code}`;
}

export function parseSyncInput(input: string): QuizExportData | null {
  if (!input || typeof input !== 'string') return null;
  let raw = input.trim();

  // 1. Check if input is a URL containing #sync= or ?sync=
  if (raw.includes('#sync=')) {
    raw = raw.split('#sync=')[1].split('&')[0];
  } else if (raw.includes('?sync=')) {
    raw = raw.split('?sync=')[1].split('&')[0];
  }

  let parsed: unknown = null;

  // 2. Try raw JSON
  if (raw.startsWith('{')) {
    try {
      parsed = JSON.parse(raw);
    } catch {
      return null;
    }
  } else {
    // 3. Try Base64 URL decoding
    try {
      const decoded = fromBase64Url(raw);
      parsed = JSON.parse(decoded);
    } catch {
      return null;
    }
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return null;
  }

  const obj = parsed as Record<string, unknown>;

  // A. Check compact format { v: 1, t, w, b, s }
  if (obj.v === 1 && obj.s && typeof obj.s === 'object') {
    const rawScores = obj.s as Record<string, unknown>;
    const cleanScores: Record<string, ModuleProgress> = {};

    for (const [key, val] of Object.entries(rawScores)) {
      if (!/^[1-7]-[1-4]$/.test(key)) continue;
      if (Array.isArray(val) && val.length >= 2) {
        const bestScore = typeof val[0] === 'number' && Number.isFinite(val[0]) ? Math.max(0, Math.floor(val[0])) : 0;
        const totalQuestions =
          typeof val[1] === 'number' && Number.isFinite(val[1]) ? Math.max(0, Math.floor(val[1])) : 0;
        const completedAt = typeof val[2] === 'string' && val[2].length > 0 ? val[2] : new Date().toISOString();
        cleanScores[key] = { bestScore, totalQuestions, completedAt };
      }
    }

    const wrongQuestions = sanitizeNumericArray(obj.w);
    const bookmarks = sanitizeNumericArray(obj.b);
    const exportedAt =
      typeof obj.t === 'number' && Number.isFinite(obj.t)
        ? new Date(obj.t * 1000).toISOString()
        : new Date().toISOString();

    return {
      version: 1,
      exportedAt,
      wrongQuestions,
      bookmarks,
      moduleScores: cleanScores,
    };
  }

  // B. Check full format { version: 1, moduleScores, wrongQuestions, bookmarks, ... }
  if (obj.version === 1) {
    const rawScores = obj.moduleScores && typeof obj.moduleScores === 'object' ? (obj.moduleScores as Record<string, unknown>) : {};
    const cleanScores: Record<string, ModuleProgress> = {};

    for (const [key, val] of Object.entries(rawScores)) {
      if (!/^[1-7]-[1-4]$/.test(key)) continue;
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        const v = val as Record<string, unknown>;
        const bestScore = typeof v.bestScore === 'number' && Number.isFinite(v.bestScore) ? Math.max(0, Math.floor(v.bestScore)) : 0;
        const totalQuestions =
          typeof v.totalQuestions === 'number' && Number.isFinite(v.totalQuestions) ? Math.max(0, Math.floor(v.totalQuestions)) : 0;
        const completedAt = typeof v.completedAt === 'string' ? v.completedAt : new Date().toISOString();
        cleanScores[key] = { bestScore, totalQuestions, completedAt };
      }
    }

    const wrongQuestions = sanitizeNumericArray(obj.wrongQuestions);
    const bookmarks = sanitizeNumericArray(obj.bookmarks);
    const randomPool = obj.randomPool ? sanitizeNumericArray(obj.randomPool) : undefined;
    const exportedAt = typeof obj.exportedAt === 'string' ? obj.exportedAt : new Date().toISOString();

    return {
      version: 1,
      exportedAt,
      wrongQuestions,
      bookmarks,
      moduleScores: cleanScores,
      randomPool,
    };
  }

  return null;
}

function sanitizeNumericArray(raw: unknown): number[] {
  if (!Array.isArray(raw)) return [];
  const result: number[] = [];
  const seen = new Set<number>();
  for (const item of raw) {
    if (typeof item === 'number' && Number.isInteger(item) && item > 0 && item <= allQuestions.length) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  }
  return result;
}

export async function generateQrCodeDataUrl(urlOrCode: string): Promise<string> {
  return QRCode.toDataURL(urlOrCode, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 320,
    color: {
      dark: '#1a1617',
      light: '#ffffff',
    },
  });
}

export function downloadBackupFile(data: QuizExportData): void {
  if (typeof window === 'undefined') return;
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().split('T')[0];
  const a = document.createElement('a');
  a.href = url;
  a.download = `know-accum-quiz-backup-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
