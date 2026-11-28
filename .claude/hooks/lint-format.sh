#!/usr/bin/env bash

# Formats and lints the files the working copy's commit changes. Exits with 2,
# which returns the errors to Claude, when one can't be fixed automatically.

set -uo pipefail

input=$(cat)
is_retry=$(jq -r '.stop_hook_active' <<< "$input")

# CLAUDE_PROJECT_DIR stays the original checkout after Claude enters a worktree.
cd "$(jq -r '.cwd' <<< "$input")" || exit 1
# A git worktree nested in a jj repository has no `.jj`, so `jj root` would print
# the outer checkout.
until [[ -f .claude/hooks/lint-format.sh || "$PWD" == / ]]; do
  cd .. || exit 1
done
[[ "$PWD" != / ]] || cd "$CLAUDE_PROJECT_DIR" || exit 1

changed_files() {
  if [[ -e .jj ]] && command -v jj > /dev/null; then
    jj diff --name-only
  elif ! git rev-parse --verify --quiet HEAD > /dev/null; then
    git -c core.quotePath=false ls-files --cached --others --exclude-standard
  else
    git -c core.quotePath=false diff --name-only HEAD
    git -c core.quotePath=false ls-files --others --exclude-standard
  fi
}

files=()
lintable=()
while IFS= read -r file; do
  # Prettier fails on a symlink, and ESLint would rewrite its target.
  [[ -f "$file" && ! -L "$file" ]] || continue
  # ESLint and Prettier would parse a leading `-` as an option.
  file=./$file
  files+=("$file")
  case "$file" in
    *.ts | *.tsx | *.js | *.jsx | *.mts | *.mjs | *.cjs | *.md) lintable+=("$file") ;;
  esac
done < <(changed_files)

[[ ${#files[@]} -eq 0 ]] && exit 0

errors=''
if [[ ${#lintable[@]} -gt 0 ]]; then
  output=$(pnpm --silent lint:base --no-warn-ignored "${lintable[@]}" 2>&1) ||
    errors+="$output"$'\n'
fi
output=$(pnpm --silent format:base --ignore-unknown --log-level warn "${files[@]}" 2>&1) ||
  errors+="$output"$'\n'

# Blocking a retry again could keep Claude from ever stopping.
[[ -z "$errors" || "$is_retry" == true ]] && exit 0

printf '%s\n%s' 'Fix these errors in the files you changed, and report those in files you did not change:' "$errors" >&2
exit 2
