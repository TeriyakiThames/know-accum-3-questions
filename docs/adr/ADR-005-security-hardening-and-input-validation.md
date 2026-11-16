# ADR 005: Security Hardening, Input Validation, and Storage Resilience

## Status
Accepted

## Date
2026-11-17

## Context & Requirements
A comprehensive security audit executed under Cloudflare's Security Audit Framework identified five vulnerabilities across client-side storage, URL query routing, HTTP security headers, script data ingestion, and transitive dependencies:
1. **Client State Resilience**: `storage.ts` blindly cast JSON deserialized values to arrays and records without validating types, leading to uncaught TypeErrors when local storage was tampered with or corrupted.
2. **URL Parameter Injection & Desynchronization**: `/quiz` query parameters were parsed without checking for `NaN` or validating bounds, causing `NaN` routing loops and corrupt storage keys.
3. **Missing HTTP Security Headers**: `next.config.ts` lacked headers for anti-framing (clickjacking), Content-Security-Policy, and MIME-sniffing protection.
4. **Environment Information Disclosure**: `parse-docx.py` committed a hardcoded developer filesystem path and username.
5. **Transitive Dependency Vulnerability**: `minimatch` < 11.0.1 carried moderate advisory GHSA-g3hv-75wg-m249.

## Decisions Made

### 1. Robust Client-Side Storage Schema Validation
- **Decision**: Introduce `sanitizeIdArray` in `storage.ts` verifying that items are positive integers within `[1, allQuestions.length]`. Validate `getModuleScores` dictionary keys against `/^[1-7]-[1-4]$/` and ensure numeric values for `bestScore` and `totalQuestions`.
- **Rationale**: Prevents application crashes and React unhandled exceptions from corrupted or malformed `localStorage` entries.

### 2. URL Search Parameter Clamping
- **Decision**: In `src/app/quiz/page.tsx`, validate `mode` against an allowlist (`['module', 'random', 'wrong', 'bookmark']`), clamp `sectionNum` to `[1, 7]`, `moduleNum` to `[1, 4]`, and `randomCount` to `[1, 260]`.
- **Rationale**: Prevents `NaN` parameter propagation into routes (`/quiz?mode=module&section=NaN&module=NaN`), memory exhaustion, and invalid storage writes.

### 3. HTTP Security Headers
- **Decision**: Configure `async headers()` in `next.config.ts` defining `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
- **Rationale**: Protects user interactions from cross-origin framing/clickjacking and enforces modern browser security isolation.

### 4. Portable Data Script Configuration
- **Decision**: Update `scripts/parse-docx.py` to check `os.environ.get("DOCX_PATH")` and `sys.argv[1]` with a repository-relative default.
- **Rationale**: Eliminates developer username leakage and ensures cross-platform script portability.

### 5. Dependency Vulnerability Override
- **Decision**: Add `overrides: { minimatch: ">=11.0.1" }` in `pnpm-workspace.yaml`.
- **Rationale**: Enforces patched versions of `minimatch` across all transitive dependencies, resolving GHSA-g3hv-75wg-m249.
