# Command: audit

**Description:** Verify compliance with Next.js Architecture, UI Standards, and Target Audience requirements.

## 🔍 Inspection Checklist

1. **SSR/CSR Compliance:** Scan all `page.tsx` files. Ensure **NO** `"use client"` directives are present at the page level.
2. **Component Colocation:** Verify that Client Components are correctly placed in sibling `components/` folders.
3. **Design Consistency:**
   - Confirm usage of Primary Pink (`#ff85a1`) and Accent Orange (`#ff785a`).
   - Check for `rounded-3xl` and Glassmorphism effects (70% opacity, 10px blur).
4. **Performance:** Ensure all images use `next/image` and typography follows the established hierarchy for both 15-30 and 30+ age groups.
5. **Logic Check:** Ensure all interactive elements have a gender-check wrapper as defined in `.claude/rules/access-control.md`.
