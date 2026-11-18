# ADR 006: Course Metadata Model and Coursera Section Integration

## Status
Accepted

## Date
2026-11-18

## Context & Requirements
The application originally labeled modules under generic section numbers ("Section 1" through "Section 7") without referencing their official Google Data Analytics Certificate course titles or linking to Coursera. Additionally, Courses 8 (Capstone Project) and 9 (Job Search with AI) belong to the certificate curriculum but do not contain standardized quiz modules.

The requirements were:
1. Replace generic "Section X" header text with descriptive course names across the curriculum while preserving numeric badge indicators.
2. Provide direct access via compact "Coursera ↗" buttons on section headers that open each respective Coursera course in a new browser tab.
3. Integrate Courses 8 and 9 as dedicated link cards below Section 7 without collapsible module dropdowns.
4. Propagate course titles to quiz headers, question cards, and result summaries with graceful text truncation (`truncate`, ellipsis) to ensure mobile responsiveness.

## Decisions Made

### 1. Centralized Course Metadata Repository
- **Decision**: Create `src/data/courses.ts` defining `CourseSection` metadata, URL mappings for all 9 courses, and lookup utilities (`getCourseById`).
- **Rationale**: Isolates domain course metadata from raw question schema, enabling clean reuse across home dashboard, quiz runners, review cards, and report modals.

### 2. Accessible Section Accordion & Non-Interfering Link Button
- **Decision**: Redesign the section header in `src/app/page.tsx` as an accessible container with keyboard support, placing the "Coursera ↗" external anchor inside the header with `e.stopPropagation()` to prevent nested interactive element conflicts.
- **Rationale**: Complies with HTML accessibility standards (avoiding nested `<button>` inside `<button>` or `<a>` inside `<button>`), preventing hydration errors while ensuring clicks on the Coursera button do not toggle the module accordion.

### 3. Direct Course Card Architecture for Sections 8 & 9
- **Decision**: Render non-quiz courses (8 & 9) as styled anchor cards linking directly to Coursera, retaining consistent badge numbers and typography while displaying "Course on Coursera (No quiz questions)" and omitting expand/collapse chevrons.
- **Rationale**: Maintains visual continuity across the certificate sequence without introducing empty or broken module dropdowns.

### 4. Ellipsis Truncation for Responsive Mobile Layouts
- **Decision**: Apply `truncate` and `min-w-0` styling with tooltip titles (`title="..."`) to course titles across quiz headers, quiz cards, results, and report modals.
- **Rationale**: Guarantees that longer titles (such as "Google Data Analytics Capstone: Complete a Case Study") gracefully truncate with ellipsis without breaking navigation bar layouts or overflowing small mobile viewports.
