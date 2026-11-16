# AGENTS.md: Developer & AI Agent Guidelines

> **Operational manual, Git protocol, commit rules, and dos/don'ts for AI coding agents working in this codebase.**

---

## 1. ⚠️ Git Protocol & Workflow

Any AI assistant or agent operating in this repository must strictly adhere to these rules:

1. **Direct Commits & Pushes to `main` Permitted:**
   - For this repository, commits and pushes directly to `main` (`origin/main`) are permitted. Pull Request (PR) isolation rules are bypassed per repository specification.
2. **Review & Validation Before Commit:**
   - Before committing and pushing, all local validation checks must pass:
     - `pnpm type-check` (`tsc --noEmit`) with 0 errors.
     - `pnpm lint` (`eslint`) with 0 errors.
     - `pnpm build` (`next build`) must compile cleanly.
3. **Commit Messages Standard:**
   - Commit messages must strictly follow Conventional Commits format (e.g. `feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`, `refactor: ...`).
   - Strictly NO parenthetical scopes in commit messages (e.g. use `feat: add something`, NOT `feat(db): add something` or `fix(home): ...`).
   - Commit messages must be **strictly under 50 characters**.
4. **Architectural Decision Records (ADR):**
   - Architectural decisions must be documented in `docs/adr/`.
5. **Safe Remote & Upstream Tracking:**
   - Ensure the working branch tracks `origin/main`:
     ```bash
     git push -u origin main
     ```

---

## 2. 🚫 Dos and Don'ts

### Critical Don'ts (Hard Restrictions)

- **No Destructive Deletion Commands Without Explicit Permission:**
  - Destructive file deletion or history rewrite commands (e.g. `rm -rf`, `rm -f`, `Remove-Item -Force`, `git reset --hard`, `git clean -fd`) must **NEVER** be executed unless the human developer explicitly authorizes them in the chat.
- **Never Use Other Package Managers:**
  - Use **`pnpm`** exclusively across all environments and scripts. Never use `npm`, `yarn`, or `bun`.
- **Never Bypass Validation:**
  - Never push code that breaks TypeScript types or fails the build.

### Core Dos

- **Maintain Type Safety:** Write strict TypeScript types and ensure full compile-time safety.
- **Manual External Setup Guidance:** Whenever external console configurations or environment variables are required, outline clear, step-by-step instructions and wait for the developer to perform them.

---

## 3. Code Standards & Scripts

All agent operations rely on the following standard commands:

- `pnpm dev`: Start the local development server.
- `pnpm build`: Build the production application.
- `pnpm lint`: Run ESLint checks.
- `pnpm type-check`: Run TypeScript compiler type checking without emitting files.

---

## 4. Task Completion Summary Protocol

After completing work and verifying each task, the AI assistant must summarize everything done in short, concise bullet points without numbering or blank line breaks between items. Section headers must not have bullets in front; instead, each section's contents are listed in bullets, strictly following these sections:

**Task:**

- [<TASK-NAME>] - <Short Title> (e.g. `[Init Setup] - Initialize Next.js project and agent rules`)

**Problem that we are fixing:**

- Brief explanation of the issue, requirement, or objective addressed.

**Solution overview:**

- High-level overview of the fix and architecture, kept short and concise.

**File by file changes:**

- List each modified/created file with its change described in exactly 1 sentence only.

**Recommended commit message:**

- Conventional semantic commit message for changes inside the branch, strictly under 50 characters (e.g. `chore: init nextjs app and agent rules`).

**Leftover/handoff tasks if any:**

- Actionable manual steps for the developer (console setups, env vars, PR reviews, etc.).
