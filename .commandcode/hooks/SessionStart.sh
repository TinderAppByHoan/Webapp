#!/bin/bash
# Description: Load project context and perform a quick health check at session start.

# Ensure all hooks are executable
chmod +x .claude/hooks/*.sh 2>/dev/null

echo "🚀 Initializing Social Network Expert Development Session..."

# 1. Environment Check
if [ ! -f ".env" ]; then
    echo "⚠️ Warning: .env file missing. Some MCP tools might not work."
fi

# 2. Dependency Check
pnpm -v > /dev/null 2>&1 || { echo "❌ Error: pnpm is not installed."; exit 1; }

# 3. Rule Reinforcement
echo "📋 Reminding AI of Critical Rules:"
echo "- NO 'use client' in page.tsx."
echo "- Gender-Based Access Control is MANDATORY."
echo "- Using HeroUI v3.0.3 Compound Components."

# 4. Status Check
pnpm lint --quiet
echo "✅ Session ready. Happy coding!"