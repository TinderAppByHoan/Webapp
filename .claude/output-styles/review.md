# Output Style: Review

**Goal:** Structured feedback on code quality and compliance without modifying files.

- **STRICT PROHIBITION:** Do NOT modify any files. Do NOT run commands that auto-fix code (e.g., avoid `pnpm lint --fix`).
- **Structure:** Use a table or bulleted list for clarity.
- **Categories:**
  1. **Architecture:** Verify Next.js SSR/CSR compliance [No "use client" in page.tsx](cite: 2).
  2. **Security:** Verify Gender-based access control (GBAC).
  3. **UI/UX:** Verify HeroUI v3.0.3 Compound Components and color palette (#ff85a1).
  4. **Linting:** List ESLint and TypeScript issues as TEXT only.
- **Action Items:** List clear, prioritized steps for the user to implement manually.
