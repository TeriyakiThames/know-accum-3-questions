# ADR 004: Light Mode Color Scheme Enforcement and Card Tag Deduplication

## Status
Accepted

## Date
2026-11-17

## Context & Requirements
Two front-end user experience and rendering defects required remediation:
1. **Light Mode Consistency & Color Scheme**: Ensure full light mode support with explicit `color-scheme: light` / `color-scheme: dark` metadata, CSS declarations, and DOM attribute binding so browsers, inputs, and system scrollbars match theme state.
2. **Duplicate Question Type Tags**: In the quiz interface, single/multi question indicators appeared redundantly both beside the question counter at the top and above the answer choices. The top indicator must be removed while keeping the contextual indicator positioned directly above the choices.

## Decisions Made

### 1. Explicit Color Scheme Synchronization
- **Decision**: Define `color-scheme: light;` in `:root` and `color-scheme: dark;` in `.dark` in `globals.css`. Update `layout.tsx` inline blocking script and `ThemeToggle.tsx` to set `document.documentElement.style.colorScheme` dynamically on toggle. Add dual `themeColor` entries in `viewport` metadata for mobile Safari/Chrome.
- **Rationale**: Eliminates browser rendering ambiguities and guarantees system form controls, scrollbars, and mobile browser address bars conform to the active theme.

### 2. Header and Card Tag Deduplication
- **Decision**: Remove the redundant top single/multi badge from `QuizCard.tsx` header progress bar, replacing it with the progress percentage indicator (`{progressPercent}%`). Retain the primary question-type pill badge directly above the choice list with standardized phrasing (`Select all that apply` / `Single choice`).
- **Rationale**: Minimizes visual clutter at the top of the card and provides the answer format instruction exactly where the user makes their selection.
