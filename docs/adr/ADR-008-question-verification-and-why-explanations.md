# ADR 008: Question Bank Answer Verification and Static "Why Section" Explanations

## Status
Accepted

## Date
2026-11-18

## Context & Requirements
A comprehensive audit of the 260 quiz questions (derived from `Know Accum 3 Quizzes_Final.docx`) revealed several data integrity issues:
1. **Footer Offset Errors**: In the source document, typographical and pagination errors in footers led to incorrect answers for 18 questions across relational keys, external data benefits, SQL DML/DDL commands, data governance, and PII anonymization.
2. **Option Truncation**: During initial extraction, multi-line SQL queries and Python code were clipped at the first line, resulting in identical or malformed option choices (e.g. four identical `SELECT *` options in Q99 and Q149).
3. **Lack of Educational Feedback**: Users answering questions had no context or explanation for why an answer was correct, limiting pedagogical value and retention.
4. **Offline Architecture Compatibility**: The application operates completely offline without server-side database requirements or third-party AI API key dependencies at runtime.

## Decisions Made

### 1. Static Pre-Generation of "Why Section" Explanations
- **Decision**: Generate concise 2-3 sentence educational explanations for all 260 questions and embed them directly into `src/data/questions.json` under an `explanation` field.
- **Rationale**: Keeps the application 100% offline, zero-latency, and eliminates runtime API costs and network requirements. Aligns directly with ADR-001 and ADR-007 offline-first architecture.

### 2. Comprehensive Answer Verification & Restoration
- **Decision**: Audit all 260 questions against the Google Data Analytics Professional Certificate curriculum and original docx content:
  - Corrected 18 erroneous answers caused by footer typos (e.g. Q89, Q91, Q92, Q94, Q95, Q96, Q97, Q125-Q137, Q170).
  - Restored multi-line option text for 7 questions (28 option strings) where queries or code blocks were cut off (Q98, Q99, Q149, Q150, Q154, Q180, Q233).
  - Ensured single-choice vs. multiple-choice flags (`isMultiple`) match question prompts and answer arrays.

### 3. Smart Auto-Advance and Explanation UX in `QuizCard`
- **Decision**:
  - **On Correct Answer**: Maintain the smooth 900ms auto-advance flow for fast drill pacing, while offering an optional "Why is this correct?" collapsible button.
  - **On Incorrect Answer**: Immediately cancel auto-advance and expand the "Why section" card by default with an amber lightbulb icon and prominent educational text, requiring the user to manually click "Next" when they have finished learning from their mistake.
  - **Interaction Guard**: Clicking the explanation toggle on a correct answer automatically cancels auto-advance so the user is never rushed.

### 4. Review Integration in Wrong Questions and Bookmarks
- **Decision**: Integrate the "Why section" directly into the expanded question cards inside both `WrongQuestionsView` and `BookmarksView`.
- **Rationale**: When reviewing missed or saved questions, learners immediately have access to the core concept and rationale without needing to re-attempt the quiz.
