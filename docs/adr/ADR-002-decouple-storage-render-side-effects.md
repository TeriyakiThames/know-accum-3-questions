# ADR 002: Decouple LocalStorage Mutations from React Render

## Status
Accepted

## Date
2026-11-16

## Context & Requirements
When navigating from `HomePage` to `QuizPage` in random practice mode, React logged a console error:
`Cannot update a component ('HomePage') while rendering a different component ('QuizSession')`.
Investigation revealed:
1. `QuizSession` called `drawRandomQuestions` inside a `useState` initializer during its initial render phase.
2. `drawRandomQuestions` mutated `localStorage` and called `notifyStorageChange()`.
3. `notifyStorageChange()` synchronously dispatched `window.dispatchEvent('quiz_storage_updated')`.
4. `HomePage` was subscribed to `quiz_storage_updated` via `useSyncExternalStore`. Dispatching the event synchronously during `QuizSession`'s render phase invoked `HomePage`'s store callback, scheduling a state update on `HomePage` while `QuizSession` was in mid-render.
5. In development StrictMode, calling `drawRandomQuestions` inside `useState` also caused double-drawing of random questions.
6. `getRandomPool` also previously performed eager mutations inside getter calls during `getSnapshot()`.

## Decisions Made

### 1. Asynchronous Notification Dispatching
- **Decision**: Update `notifyStorageChange()` in `src/lib/storage.ts` to dispatch `quiz_storage_updated` via `queueMicrotask` with batch coalescing (`notifyScheduled`).
- **Rationale**: Defers external store subscription callbacks until the current synchronous JavaScript task and render cycle finish, eliminating re-entrant `setState` during render and coalescing rapid sequential writes.

### 2. Pure Getters in Storage Layer
- **Decision**: Make `getRandomPool()` and `getRandomPoolRemainingCount()` completely pure. If no stored pool exists, return a fresh or full array without writing to `localStorage` inside the getter.
- **Rationale**: Preserves `getSnapshot()` purity required by React's `useSyncExternalStore`. Storage writes only happen when explicitly executing `drawRandomQuestions()` or `resetRandomPool()`.

### 3. Client-Side Question Initialization in QuizSession
- **Decision**: Decouple random question drawing and dynamic storage reads into `useEffect` within `QuizSession`. Use a `drawnQuestionsRef` ref to guard against duplicate draws during React StrictMode mount/remount cycles.
- **Rationale**: Guarantees that render remains pure and free of external mutations.
