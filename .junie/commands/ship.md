# Command: ship

**Description:** Execute a comprehensive quality check and prepare the project for production.

## 🚀 Execution Steps

1. **Linting Check:** Run `pnpm lint` to ensure no styling or syntax violations based on `.eslintrc`.
2. **Type Verification:** Run `pnpm tsc` to confirm 100% TypeScript integrity.
3. **Security Audit:** Scan all Server Actions and Middleware for mandatory Gender-Based Access Control (GBAC) implementation.
4. **Production Build:** Execute `pnpm build` to verify the project can be successfully compiled.
5. **Final Report:**
   - If all steps pass: Output "Project is ready to ship 🚀".
   - If any step fails: List all errors and blockers that must be resolved.
