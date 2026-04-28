<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-context -->
# Project Context & Business Logic

This is a **Social Network Web Application** inspired by platforms like Facebook, X, and Instagram. When generating code, designing UI components, or implementing business logic, all AI agents MUST adhere to the following core concepts:

1. **Target Audience & Design System (UI/UX):**
   - The primary target audience is **female**.
   - **Color Palette:** The UI must use a soft, gentle, and feminine color palette. **Light pink** should be the primary theme color. Avoid harsh, dark, or generic enterprise UI themes unless specifically requested.
   - **Aesthetics:** Prioritize modern, clean, and elegant design components.
   - **UI Framework & Ecosystem:** The interface MUST be built using **HeroUI v3.0.3** and its associated ecosystem (icons, animations, etc.). When a new feature or component requires a new dependency, ALWAYS search within the HeroUI ecosystem first. Only if HeroUI does not support it should you fall back to external/third-party dependencies.

2. **Access Control & Feature Restrictions (Business Logic):**
   - The application implements strict **gender-based access control**.
   - **Female Users:** Have full, unrestricted access to all core features.
   - **Male Users:** Are heavily restricted. They only have basic "read-only" access to view limited information.
   - When building APIs, database schemas, middleware, or UI components, always ensure that gender checks are considered and male users are appropriately restricted from core actions.
<!-- END:project-context -->
