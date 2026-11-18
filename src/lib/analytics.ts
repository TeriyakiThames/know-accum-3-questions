import { track } from '@vercel/analytics';

/**
 * Safely send a custom event to Vercel Web Analytics.
 * In development, offline, or when ad-blockers are active, fails silently without throwing.
 */
export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean | null>
): void {
  try {
    track(name, properties);
  } catch {
    // Fail silently in unsupported or blocked environments
  }
}
