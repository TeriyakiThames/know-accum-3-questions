# ADR 003: Theme Mode Switcher and Incremental Random Pool Consumption

## Status
Accepted

## Date
2026-11-17

## Context & Requirements
A series of user experience enhancements required architectural alignment across state, styling, and data storage:
1. **Light/Dark Theme Switching**: Provide user-controllable light and dark mode with persistent choice in `localStorage`, SSR hydration safety without flash of unstyled theme, and a brand color scheme (`#4f121b` accent, `#ffffff` background, `#1a1617` text in light mode, and an accessible dark palette).
2. **Incremental Random Pool Consumption**: Previously, entering random mode with 10 questions removed all 10 questions from the unseen pool immediately. If the user exited early, unseen questions were prematurely purged.
3. **Interactive Overall Progress & S/U Grading**: Show completed question count (`???/260`) and allow toggling between completion progress and correct question grading with an S (pass, $\ge 33.4\%$) or U (fail, $< 33.4\%$) evaluation.

## Decisions Made

### 1. Tailwind v4 Custom Dark Variant and React 19 Sync External Store
- **Decision**: Configure `@custom-variant dark (&:where(.dark, .dark *));` in `globals.css` alongside semantic CSS variables for `--background`, `--foreground`, and `--accent`. In `layout.tsx`, inject a tiny blocking script in `<head>` to synchronize the `.dark` class before hydration. In `ThemeToggle.tsx`, subscribe to theme state via `useSyncExternalStore` without invoking `setState` in render or effects.
- **Rationale**: Guarantees zero flash of wrong theme, zero cascading render warnings in React 19, and consistent styling across all components.

### 2. Seen-Question Random Pool Purge
- **Decision**: In `storage.ts`, `drawRandomQuestions` generates the question session array without immediately removing unseen questions from `RANDOM_POOL_KEY`. In `QuizSession`, an effect listens to `currentQuestion.id` and invokes `removeQuestionFromRandomPool(currentQuestion.id)` only when the question is actively displayed.
- **Rationale**: Prevents loss of unseen questions when users exit early from random practice, ensuring that only questions actually encountered are deducted from the 260-question pool.

### 3. Dual-View Overall Progress Banner
- **Decision**: Transform the home page's overall progress banner into an interactive toggle card calculating both completed questions (`sum(totalQuestions)`) and accuracy (`sum(bestScore) / 260`).
- **Rationale**: Gives users a unified, compact dashboard element showing both completion momentum and grading standing ($S \ge 33.4\%$, $U < 33.4\%$).
