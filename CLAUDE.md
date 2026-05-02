<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 🚦 Context Routing Rules

- **Standard Requests:** If the prompt contains project keywords (e.g., "Next.js", "HeroUI", "UI/UX", "Social Network"), strictly prioritize documentation from `./.claude/`[cite: 1, 2, 7].
- **Slash Commands (Antigravity):** ONLY scan the `./.agent/` directory when a command starts with `@` (e.g., `@brainstorming`, `@skill-name`).
- **Conflict Resolution:** If a `@` command is used, instructions in `./.agent/` override standard rules for that specific response only.

<!-- BEGIN:project-context -->
# Project Context & Business Logic

This is a **Social Network Web Application** inspired by platforms like Facebook, X, and Instagram. When generating code, designing UI components, or implementing business logic, all AI agents MUST adhere to the following core concepts:

## 🛠 Tech Stack & Environment

- **Package Manager:** `pnpm`
- **Framework:** Next.js 15+ (App Router)
- **UI System:** HeroUI v3.0.3 & Framer Motion
- **Language:** TypeScript (Strict Mode)

## 💻 Critical Commands

- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Linting:** `pnpm lint` (Must run before finalizing any task)
- **Type Check:** `pnpm tsc`

## 📋 Operational Workflow (Mandatory)

1. **Pre-flight Check:**
   - **Immediately execute `chmod +x .claude/hooks/*.sh`** to ensure all automation scripts are executable.
   - Read task requirements and examine `.eslintrc`.
2. **Analyze Context:** Read task requirements and **thoroughly examine `.eslintrc`** or `eslint.config.js` to ensure compliance with local coding standards.
3. **Explore & Propose:** Provide 2-3 technical approaches optimized for Next.js 15.
4. **User Decision:** Wait for the user to select or refine the proposed solution.
5. **Final Implementation Plan:** Document a detailed step-by-step plan. Ensure it bypasses potential linting errors.
6. **Execution:** Modify or create code **ONLY** after the final plan is explicitly approved.
7. **Quality Assurance:** Run `pnpm lint` and verify type safety. Fix all warnings; do not use `// eslint-disable`.

## 📐 Engineering Standards

- **Component Pattern:** Utilize **HeroUI Compound Components** exclusively.
- **Architecture:** Default to Server Components; use `"use client"` only when necessary for interactivity.
- **Type Safety:** 100% TypeScript coverage. No `any` allowed.
- **Business Logic:** Enforce "Gender-Based Access Control" (Female: Full Access / Male: Read-only).

## 📂 Navigation & References

- **Agents & Roles:** [./.claude/agents/social-expert.md]
- **Specific Rules:** [./.claude/rules/access-control.md]
- **Response Style:** [./.claude/output-styles/terse.md]
- **Next.js Architecture:** [./.claude/rules/nextjs-architecture.md]
<!-- END:project-context -->
