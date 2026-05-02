# Command: clean

**Description:** Wipe development artifacts and perform a fresh environment setup.

## 🧹 Cleanup Steps

1. **Process Management:** Stop any active development servers.
2. **Directory Cleanup:** Remove `.next/`, `dist/`, `build/`, and `node_modules/` (optional based on pnpm state).
3. **Fresh Installation:** Execute `pnpm install` to ensure all dependencies are correctly linked.
4. **Environment Check:** Run `pnpm dev` to verify the environment is restored and operational.
