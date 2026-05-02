#!/bin/bash
# Description: Automatically format code and verify linting after AI edits.

echo "🔍 Running Post-Edit Validation..."

# 1. Auto-format and Lint Fix
pnpm lint --fix

# 2. Architecture Verification
# Simple check for 'use client' in app/ directory pages
grep -r "use client" app/**/page.tsx && echo "❌ Architecture Violation: Found 'use client' in page.tsx!"

# 3. Auto-commit (Optional - Un-comment if needed)
# git add .
# git commit -m "AI: Automated code refinement and lint fix"