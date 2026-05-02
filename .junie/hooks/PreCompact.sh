#!/bin/bash
# Description: Save project state before context compression.

echo "💾 Saving project state before compaction..."

# 1. Export current structure to a temporary summary
find . -maxdepth 3 -not -path '*/.*' > .claude/last_known_state.txt

# 2. Check for uncommitted changes
git status --short > .claude/pending_changes.txt