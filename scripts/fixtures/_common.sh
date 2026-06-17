#!/usr/bin/env bash

set -euo pipefail

# Pretty-print a path relative to the repo root.
rel() { echo "${1#"$REPO"/}"; }

# Writes clearly visible notice to the controlling terminal so it stays visible
# even when the orchestrator redirects a workload script's output to a log file.
# Falls back to stderr when there is no terminal.
notice() {
  if { : >/dev/tty; } 2>/dev/null; then
    printf '  >> %s\n' "$*" >/dev/tty
  else
    printf '  >> %s\n' "$*" >&2
  fi
}

# Probes for whether the Docker daemon is reachable.
_docker_probe() {
  command -v docker >/dev/null 2>&1 || return 1
  if command -v timeout >/dev/null 2>&1; then
    timeout 15 docker info >/dev/null 2>&1
  else
    docker info >/dev/null 2>&1
  fi
}

# Blocks until the Docker daemon is reachable, prompting the user to start it
# and re-probing in a loop.
ensure_docker() {
  _docker_probe && return 0

  if ! { : </dev/tty; } 2>/dev/null; then
    notice "Docker daemon not reachable and no terminal to prompt. Start Docker and re-run."
    exit 1
  fi

  while true; do
    notice "Docker daemon not reachable. Start Docker, then press Enter to retry."
    read -r _ </dev/tty || { notice "No input received. Start Docker and re-run."; exit 1; }
    if _docker_probe; then
      notice "Docker is up. Continuing."
      return 0
    fi
    notice "Still can't reach the Docker daemon. Give it a moment to finish starting, then retry."
  done
}

# Decides whether to generate an output. Returns 0 to proceed or 1 to skip.
should_generate() {
  local out=$1
  if [[ -f "$out" ]]; then
    echo "Skipping $(rel "$out")"
    return 1
  fi
  echo "Generating $(rel "$out")"
  return 0
}

# Runs the repo CLI against a fixture.
cli() { node "$REPO/src/cli/index.ts" "$@"; }

# Verifies a single fixture converts to Markdown. Returns non-zero if it doesn't
# (the `|| return 1` matters: under `try`, set -e is off, so an unchecked failing
# `cli` would otherwise fall through to the "Verified" echo and report success).
verify_fixture() {
  local out=$1
  [[ -f "$out" ]] || { echo "  MISSING after capture: $(rel "$out")" >&2; return 1; }
  cli "$out" >/dev/null || { echo "  FAILED to convert: $(rel "$out")" >&2; return 1; }
  echo "Verified $(rel "$out")"
}

# Verifies a base/current pair diffs or no-ops if one half doesn't exist.
verify_pair() {
  local base=$1 current=$2
  [[ -f "$base" && -f "$current" ]] || return 0
  cli "$base" "$current" >/dev/null \
    || { echo "  FAILED to diff: $(rel "$base") <> $(rel "$current")" >&2; return 1; }
  echo "Verified diff $(rel "$base") <> $(rel "$current")"
}

# emit <out> <capture_fn> [args...]
#   Skips per should_generate, otherwise invokes `capture_fn "$out" args...`,
#   which must write to "$out", then verifies the result.
emit() {
  local out=$1 fn=$2
  shift 2
  should_generate "$out" || return 0
  "$fn" "$out" "$@"
  verify_fixture "$out"
}

# A scratch directory for clones and builds, cleaned up on exit.
WORKDIR="$(mktemp -d "${TMPDIR:-/tmp}/profiler-md-fixtures.XXXXXX")"
cleanup_workdir() { rm -rf "$WORKDIR"; }
trap cleanup_workdir EXIT

# Abort the whole script on Ctrl+C / SIGTERM. Without this, captures wrapped in
# `try` (`cmd || status=1`) or in `for role` loops swallow the interrupt and
# continue to the next capture instead of stopping. `exit` still runs the EXIT
# cleanup above.
trap 'exit 130' INT TERM
