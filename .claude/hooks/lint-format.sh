#!/bin/bash
FILE=$(jq -r '.tool_input.file_path')
cd "$CLAUDE_PROJECT_DIR" || exit 1
case "$FILE" in
  *.ts|*.tsx|*.js|*.jsx|*.mts|*.mjs|*.cjs|*.md) pnpm lint:base "$FILE" ;;
esac
pnpm format:base --ignore-unknown "$FILE"
