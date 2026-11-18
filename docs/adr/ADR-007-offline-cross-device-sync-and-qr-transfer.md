# ADR 007: Offline Cross-Device Sync, Code Transfer, and QR Code Synchronization

## Status
Accepted

## Date
2026-11-18

## Context & Requirements
Users studying quiz questions across multiple devices (e.g. studying on a laptop at home and reviewing on a mobile phone on the go) need a mechanism to transfer progress:
1. All application state is stored locally within browser `localStorage` (`quiz_wrong_questions`, `quiz_bookmarks`, `quiz_random_pool`, and `quiz_module_scores`).
2. Cloud database synchronization requires authentication, remote servers, ongoing hosting overhead, and complex offline conflict queues.
3. The total state payload for 28 completed modules, bookmarks, and wrong questions is compact (typically under 1 KB of structured JSON).
4. The solution must work 100% offline without mandatory accounts, provide instant cross-device transfer via mobile camera QR scanning, copy/paste code snippets, and `.json` backup files, while guaranteeing strict input sanitization.

## Decisions Made

### 1. Hybrid Serialization: Compact QR URL Hash & Full JSON Backup
- **Decision**: Define a two-tier serialization standard:
  - **Compact Payload (`CompactSyncPayload`)**: Short-form keys (`v`, `t`, `w`, `b`, `s`) encoded into URL-safe Base64 (`base64url`). The full study state fits under 1.2 KB, well within standard QR code capacity (Version 6, Error Correction Level M).
  - **Client-Side Hash Routing (`#sync=<payload>`)**: The QR code encodes a direct URL with a hash fragment. Hash fragments are never sent to remote servers (protecting privacy and complying with static hosting/CSP).
  - **File Backup**: Support downloading and uploading formatted JSON backup files (`know-accum-quiz-backup-YYYY-MM-DD.json`).

### 2. Zero-Friction Mobile Camera Onboarding
- **Decision**: When the app mounts or receives a `hashchange` event containing `#sync=`, it automatically parses and sanitizes the incoming payload, prompts the user inside `SyncModal` with an incoming vs. current diff overview, and immediately cleans the address bar with `window.history.replaceState`.
- **Rationale**: A user can point their iPhone or Android camera at a laptop screen, tap the browser banner, and complete synchronization in two clicks without manual copying or typing.

### 3. Smart Merge and Overwrite Strategies
- **Decision**: Provide two resolution paths when importing data:
  - **Merge (Recommended)**: Set union of bookmark IDs and wrong question IDs; for module scores, retains the higher `bestScore`, along with the latest completion timestamp.
  - **Overwrite**: Atomically replaces local storage with the incoming backup.
- **Rationale**: Prevents accidental data loss when studying across both devices independently.

### 4. Input Sanitization & Resilience
- **Decision**: In `src/lib/sync.ts` and `src/lib/storage.ts`, strictly validate all incoming data:
  - Question IDs are clamped to positive integers within `[1, 260]`.
  - Module keys must match `/^[1-7]-[1-4]$/`.
  - Scores must be non-negative integers.
- **Rationale**: Adheres to ADR 005 security standards, preventing corrupted or tampered payloads from breaking React application state.
