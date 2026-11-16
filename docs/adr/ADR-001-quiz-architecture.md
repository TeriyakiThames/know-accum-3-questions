# ADR 001: Mobile-First Quiz Architecture & Decision Record

## Status
Accepted

## Date
2026-11-16

## Context & Requirements
The goal is to build a responsive, mobile-first quiz web application (supporting mobile webview as well as desktop screens) based on 260 questions across 7 Sections and 4 Modules each (28 modules total) extracted from `Know Accum 3 Quizzes_Final.docx`.
The application requires:
1. Section/module practice with varying module question lengths (8–15 questions).
2. Random practice mode drawing non-repeating questions from the 260-question pool until exhausted.
3. Wrong questions bank and bookmarked questions bank for targeted review and retake drills.
4. Report wrong question dialog copying structured report text to the clipboard.
5. High-fidelity results summary showing choices, correctness, and review actions.

## Decisions Made

### 1. Data Ingestion & Image Pipeline
- **Decision**: Pre-parse the `.docx` document using a Python script (`scripts/parse-docx.py`) into static `src/data/questions.json` and extract the 12 embedded figures to `public/images/questions/`.
- **Rationale**: Direct static bundling ensures zero runtime parsing overhead, offline capability, instantaneous page transitions, and complete type safety via TypeScript.

### 2. Adaptive Choice Interaction
- **Single-choice questions**: Selecting an option immediately displays visual correctness (emerald green for correct, rose red for incorrect) and auto-advances after an 800ms brief pause, with a manual "Next" button available for instantaneous skip.
- **Multiple-choice ("Select all that apply") questions**: Displays square checkbox indicators, allows selecting multiple options, and reveals answers only upon clicking "Submit Answer".
- **Visual cues**: Single-choice uses circular indicators; multi-choice uses square checkbox indicators accompanied by a "Select all that apply" badge.

### 3. Local State & Persistence
- **Decision**: Use browser `localStorage` wrapped with safe SSR/hydration guards for:
  - Wrong questions list (`quiz_wrong_questions`)
  - Bookmarked questions list (`quiz_bookmarks`)
  - Random mode pool (`quiz_random_pool`)
  - Module completion scores (`quiz_module_scores`)
- **Rationale**: No external database or authentication is required, providing instant, privacy-first local persistence across mobile sessions and webviews.

### 4. Report Wrong Feature
- **Decision**: Accessible from both active quiz cards and the end-of-set results page. Opens a modal dialog with Section, Module, Question ID prefilled, and a user textarea. When submitted, formats Markdown text and writes to the browser clipboard via `navigator.clipboard.writeText`, accompanied by a toast notification.

### 5. Git Commit Protocol & AGENTS Rules
- Commit messages must strictly adhere to Semantic Commits (`feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`) with **no scope parentheses** (e.g. `feat: add something`, not `feat(db): add something`) and must be strictly **under 50 characters**.
