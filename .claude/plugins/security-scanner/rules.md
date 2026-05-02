# Plugin: Security Scanner (GBAC Specialist)

**Goal:** Prevent unauthorized access and ensure strict gender-based logic enforcement.

## 🛡️ Scanning Protocol

- **Endpoint Protection:** Every new API route or Server Action must be scanned for `checkGender()` middleware.
- **Data Leakage:** Ensure male users cannot fetch hidden metadata of female profiles (e.g., location, private contact).
- **ID Verification:** Check if `userId` is securely tied to the session and not spoofable in client-side props.
- **Report Style:** If a vulnerability is found, stop execution immediately and alert the user with high priority.

## 🚨 Trigger Rules

- Run automatically before `pnpm build`.
- Run when any file in `app/api/` or `lib/actions/` is modified.
