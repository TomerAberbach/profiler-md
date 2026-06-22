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

# A shared benchmark input parsed by several language workloads: simdjson's
# twitter.json sample (a real Twitter API search response), pinned to a release
# tag and checksum-verified. Our committed copy was reformatted, so the fetched
# bytes differ from it but parse to the identical document. Fetched on demand
# (guarded on the file already existing) so cached-fixture runs do no network I/O.
TWITTER_JSON="$REPO/scripts/fixtures/assets/shared/twitter.json"
TWITTER_JSON_URL="https://raw.githubusercontent.com/simdjson/simdjson/v3.10.1/jsonexamples/twitter.json"
TWITTER_JSON_SHA256="30721e496a8d73cfc50658923c34eb2c0fbe15ee6835005e43ee624d8dedf200"

fetch_twitter_json() {
  [[ -f "$TWITTER_JSON" ]] && return 0
  notice "Fetching simdjson twitter.json"
  mkdir -p "$(dirname "$TWITTER_JSON")"
  curl -fsSL "$TWITTER_JSON_URL" -o "$TWITTER_JSON"
  echo "$TWITTER_JSON_SHA256  $TWITTER_JSON" | shasum -a 256 -c -
}

# The aarch64 Linux target for the container-based captures, kept in one place.
DOCKER_IMAGE="debian:bookworm-slim"
DOCKER_PLATFORM="linux/arm64"

# docker_capture <out_dir> <container_script> [extra `docker run` args...]
#   Runs <container_script> under `bash -euo pipefail` in DOCKER_IMAGE with
#   <out_dir> bind-mounted at /out. Extra args (e.g. `-e FOO=bar`,
#   `--cap-add SYS_PTRACE`) are forwarded to `docker run`.
docker_capture() {
  local outdir=$1 script=$2
  shift 2
  docker run --rm --platform "$DOCKER_PLATFORM" \
    -v "$outdir:/out" \
    "$@" \
    "$DOCKER_IMAGE" \
    bash -euo pipefail -c "$script"
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

# Records each fixture emit handled, generated or already present, so
# `verify_pairs` can diff every base/current pair without callers re-listing
# paths. Only the base side is recorded, giving one entry per pair.
_emitted_bases=()

# emit <out> <capture_fn> [args...]
#   Skips per should_generate, otherwise invokes `capture_fn "$out" args...`,
#   which must write to "$out", then verifies the result.
#
# Guarding the capture and verify with `|| return 1` matters: callers run
# `try emit`, which (being a `||` context) disables set -e inside emit, so an
# unguarded failing capture would fall through to verify/record and be reported
# as success.
emit() {
  local out=$1 fn=$2
  shift 2
  if should_generate "$out"; then
    "$fn" "$out" "$@" || return 1
    verify_fixture "$out" || return 1
  fi
  case "$out" in *.base.*) _emitted_bases+=("$out") ;; esac
}

# Captures are wrapped in `try` so one flaky capture doesn't abort the whole
# script under set -e; a failure flips `status` instead, and the script exits
# with it. Without `try`, the first failing capture would kill every later one.
status=0
try() { "$@" || status=1; }

# Diffs every emitted base/current fixture pair, deriving each current path from
# the recorded base path so callers never re-list fixtures (a stale or forgotten
# entry can't silently skip a diff). verify_pair no-ops when a half is missing.
verify_pairs() {
  local base
  for base in ${_emitted_bases[@]+"${_emitted_bases[@]}"}; do
    try verify_pair "$base" "${base/.base./.current.}"
  done
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
