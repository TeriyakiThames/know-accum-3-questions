# ADR 009: Vercel Web Analytics Integration & Lightweight Custom Events

## Status
Accepted

## Date
2026-11-18

## Context & Requirements
1. **User Scale & Privacy**: The web application is designed for targeted study groups (up to ~30 concurrent active learners). Heavyweight enterprise analytics suites (like full GA4 tag managers or cookie-gated trackers) introduce unnecessary bundle bloat, cookie consent banner friction, and privacy concerns.
2. **Offline-First Compatibility**: Aligned with ADR-001 and ADR-007, the application must remain 100% operational offline, in local development, and behind content blockers. Analytics calls must never throw uncaught exceptions or interrupt the core drill experience.
3. **Deployment Target**: The application is deployed and hosted on Vercel.

## Decisions Made

### 1. Zero-Config Observability with `@vercel/analytics`
- **Decision**: Integrate `@vercel/analytics/next` at the root layout (`src/app/layout.tsx`).
- **Rationale**:
  - Leverages Vercel's edge-native Web Analytics script (`/_vercel/insights/script.js`), which is cookie-free, fully GDPR/CCPA compliant, and under 2KB.
  - Automatically captures real-time visitors, unique views, top referrers, device/OS distributions, and page transitions across App Router paths.
  - Automatically wraps internal route listeners in `<Suspense fallback={null}>` to prevent client de-opt warnings in Next.js 16.

### 2. Resilient Event Tracking Helper (`src/lib/analytics.ts`)
- **Decision**: Provide a wrapped `trackEvent(name, properties)` helper with try/catch guards.
- **Rationale**: Prevents any runtime exceptions if the app is accessed offline, during local development, or if browser privacy extensions block telemetry requests.

### 3. Key Milestone Telemetry
- **Decision**: Track high-level pedagogical and sync events:
  - `quiz_completed`: Captures drill mode (`module`, `wrong`, `random`, `bookmark`), section, module number, score, and total questions.
  - `sync_export`: Captures export method (`copy_code`, `copy_link`, `download_file`).
  - `sync_import`: Captures merge/replace mode and restored module count.
- **Privacy Assurance**: No personally identifiable information (PII) or user identifiers are ever recorded. Only aggregate interaction counters and module scores are sent.

## Verification & Deployment Steps
1. The package `@vercel/analytics` is installed via `pnpm`.
2. `<Analytics />` is placed in `src/app/layout.tsx`.
3. In the Vercel Dashboard for the deployed project, the developer enables **Web Analytics** under the Analytics tab.
