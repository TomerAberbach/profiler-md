#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

# Base and current profile TypeScript nightly builds a week apart, so a diff of
# the zod type-check compares two versions of the same code. Between releases the
# build emits most of typescript.js differently, while a week of nightly commits
# edits it in a few hundred places, so most functions keep their code and move.
declare -A TYPESCRIPT_VERSION=([base]=5.5.0-dev.20240415 [current]=5.5.0-dev.20240422)
DATADOG_PPROF_VERSION=5.3.0
# Puppeteer bundles a pinned Chromium build, so pinning the package pins the
# browser. nixpkgs `chromium` is unavailable on aarch64-darwin (the flake's only
# system), so the Chrome captures source the browser this way instead of via the
# flake.
PUPPETEER_VERSION=24.15.0
# Base and current chart the tweets in headless Chrome with consecutive d3
# releases, whose minified bundle moves its closures along one line.
declare -A D3_VERSION=([base]=7.8.5 [current]=7.9.0)
ZOD_REPO=https://github.com/colinhacks/zod
ZOD_TAG=v3.23.8

assets="$REPO/scripts/inputs/assets/javascript"

# Keep the Chromium download inside WORKDIR so the EXIT trap cleans it up.
export PUPPETEER_CACHE_DIR="$WORKDIR/.puppeteer"

# Each role installs into one directory, so both record the same paths.
node_proj="$WORKDIR/zod"
node_role=""
setup_node() {
  local role=$1
  [[ "$node_role" == "$role" ]] && return 0
  local dir="$node_proj"

  if [[ -z "$node_role" ]]; then
    notice "Cloning zod ($ZOD_TAG)"
    git clone --depth 1 --branch "$ZOD_TAG" "$ZOD_REPO" "$dir" >&2 || return 1
  fi

  # One install names every package, because an install with `--no-save`
  # removes the packages an earlier one added. A nightly TypeScript is a
  # prerelease, which satisfies no range of zod's devDependencies that peer
  # depend on it (`typescript@>=3.7.0`), so the install skips peer resolution.
  notice "Installing tsc ${TYPESCRIPT_VERSION[$role]}, d3 ${D3_VERSION[$role]}, tooling, and puppeteer (downloads pinned Chromium)"
  npm install --prefix "$dir" --no-save --no-audit --no-fund --legacy-peer-deps \
    "typescript@${TYPESCRIPT_VERSION[$role]}" \
    "@datadog/pprof@$DATADOG_PPROF_VERSION" \
    "puppeteer@$PUPPETEER_VERSION" \
    "d3@${D3_VERSION[$role]}" >&2 || return 1

  cp "$assets/cpuprofile-run.mjs" "$assets/tsc-run.mjs" \
    "$assets/tsc-workload.mjs" "$assets/heapprofile-run.mjs" \
    "$assets/datadog-pprof.mjs" \
    "$assets/datadog-pprof-heap.mjs" \
    "$assets/chrome-workload.mjs" "$assets/chrome-cpu.mjs" \
    "$assets/chrome-heap.mjs" "$assets/chrome-heap-snapshot.mjs" "$dir/" \
    || return 1
  node_role=$role
}

capture_node_cpu() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  notice "CPU profiling zod type-check using node ($role)"
  node "$node_proj/cpuprofile-run.mjs" "$node_proj" "$out" >&2
}

capture_node_heap() {
  local out=$1 role=$2
  local profdir
  setup_node "$role" || return 1
  profdir="$WORKDIR/node-heap-$role"
  mkdir -p "$profdir"
  notice "Heap profiling zod type-check using node ($role)"
  node --heap-prof --heap-prof-dir="$profdir" \
    "$node_proj/tsc-run.mjs" "$node_proj" >&2
  mv "$(find "$profdir" -name '*.heapprofile' | head -1)" "$out"
}

capture_node_heap_snapshot() {
  local out=$1 role=$2
  fetch_twitter_json || return 1
  notice "Heap snapshotting parsed twitter.json using node ($role)"
  node "$assets/heap-snapshot.mjs" "$TWITTER_JSON" "$out" >&2
}

capture_node_heap_all_allocations() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  notice "Heap profiling zod type-check including collected objects using node ($role)"
  node "$node_proj/heapprofile-run.mjs" "$node_proj" "$out" >&2
}

capture_pprof_cpu() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  notice "CPU profiling zod type-check using @datadog/pprof ($role)"
  node "$node_proj/datadog-pprof.mjs" "$node_proj" "$out" >&2
}

capture_pprof_cpu_lines() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  notice "CPU profiling zod type-check using @datadog/pprof with line numbers ($role)"
  node "$node_proj/datadog-pprof.mjs" "$node_proj" "$out" --line-numbers >&2
}

capture_pprof_heap() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  notice "Heap profiling zod type-check using @datadog/pprof ($role)"
  node "$node_proj/datadog-pprof-heap.mjs" "$node_proj" "$out" >&2
}

capture_deno_cpu() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  notice "CPU profiling zod type-check using deno ($role)"
  # `manual` reads the node_modules setup_node installed. `auto` installs zod's
  # own devDependencies over it, replacing the pinned TypeScript with zod's.
  deno run -A --node-modules-dir=manual \
    "$node_proj/cpuprofile-run.mjs" "$node_proj" "$out" >&2
}

capture_bun_cpu() {
  local out=$1 role=$2
  local profdir prof
  setup_node "$role" || return 1
  profdir="$WORKDIR/bun-cpu-$role"
  mkdir -p "$profdir"
  notice "CPU profiling zod type-check using bun ($role)"
  bun --cpu-prof --cpu-prof-dir="$profdir" \
    "$node_proj/tsc-run.mjs" "$node_proj" >&2
  prof="$(find "$profdir" -name '*.cpuprofile' | head -1)"
  [[ -n "$prof" ]] || { echo "  bun produced no .cpuprofile" >&2; return 1; }
  mv "$prof" "$out"
}

capture_bun_v8_heap_snapshot() {
  local out=$1 role=$2
  local profdir prof
  profdir="$WORKDIR/bun-v8-heap-snapshot-$role"
  mkdir -p "$profdir"
  fetch_twitter_json || return 1
  notice "V8 heap snapshotting parsed twitter.json using bun ($role)"
  # `bun --heap-prof` writes a V8 heap snapshot on exit. Its `--heap-prof-dir`
  # mishandles absolute paths, stripping the leading slash and resolving the
  # rest against the cwd, so run from inside profdir and let it default to the
  # cwd. The asset and generated-input paths are absolute, so the cd leaves them
  # unaffected.
  ( cd "$profdir" && bun --heap-prof "$assets/bun-heap-snapshot.mjs" "$TWITTER_JSON" >&2 )
  prof="$(find "$profdir" -name '*.heapsnapshot' | head -1)"
  [[ -n "$prof" ]] || { echo "  bun produced no .heapsnapshot" >&2; return 1; }
  mv "$prof" "$out"
}

capture_bun_jsc_heap_snapshot() {
  local out=$1 role=$2
  fetch_twitter_json || return 1
  notice "JSC heap snapshotting parsed twitter.json using bun ($role)"
  # Bun's `generateHeapSnapshot("jsc")` returns the JSC Inspector snapshot
  # Safari exports.
  bun "$assets/bun-jsc-heap-snapshot.mjs" "$TWITTER_JSON" "$out" >&2
}

capture_chrome_cpu() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  fetch_twitter_json || return 1
  notice "CPU profiling d3 chart using headless Chrome ($role)"
  node "$node_proj/chrome-cpu.mjs" "$TWITTER_JSON" "$out" >&2
}

capture_chrome_heap() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  fetch_twitter_json || return 1
  notice "Heap allocation profiling d3 chart using headless Chrome ($role)"
  node "$node_proj/chrome-heap.mjs" "$TWITTER_JSON" "$out" >&2
}

capture_chrome_heap_snapshot() {
  local out=$1 role=$2
  setup_node "$role" || return 1
  fetch_twitter_json || return 1
  notice "Heap snapshotting d3 chart using headless Chrome ($role)"
  node "$node_proj/chrome-heap-snapshot.mjs" "$TWITTER_JSON" "$out" >&2
}

for role in base current; do
  try emit "$GENERATED_INPUTS/javascript.node.$role.cpuprofile" \
    capture_node_cpu "$role"
  try emit "$GENERATED_INPUTS/javascript.node.$role.heapprofile" \
    capture_node_heap "$role"
  try emit "$GENERATED_INPUTS/javascript.node.$role.heapsnapshot" \
    capture_node_heap_snapshot "$role"
  try emit "$GENERATED_INPUTS/javascript.node.all-allocations.$role.heapprofile" \
    capture_node_heap_all_allocations "$role"
  try emit "$GENERATED_INPUTS/javascript.node-pprof.cpu.$role.pprof" \
    capture_pprof_cpu "$role"
  try emit "$GENERATED_INPUTS/javascript.node-pprof.cpu-lines.$role.pprof" \
    capture_pprof_cpu_lines "$role"
  try emit "$GENERATED_INPUTS/javascript.node-pprof.heap.$role.pprof" \
    capture_pprof_heap "$role"
  try emit "$GENERATED_INPUTS/javascript.deno.$role.cpuprofile" \
    capture_deno_cpu "$role"
  try emit "$GENERATED_INPUTS/javascript.bun.$role.cpuprofile" \
    capture_bun_cpu "$role"
  try emit "$GENERATED_INPUTS/javascript.bun.$role.heapsnapshot" \
    capture_bun_v8_heap_snapshot "$role"
  try emit "$GENERATED_INPUTS/javascript.bun.$role.jsc-heap-snapshot.json" \
    capture_bun_jsc_heap_snapshot "$role"
  try emit "$GENERATED_INPUTS/javascript.chrome.$role.cpuprofile" \
    capture_chrome_cpu "$role"
  try emit "$GENERATED_INPUTS/javascript.chrome.$role.heapprofile" \
    capture_chrome_heap "$role"
  try emit "$GENERATED_INPUTS/javascript.chrome.$role.heapsnapshot" \
    capture_chrome_heap_snapshot "$role"
done

verify_pairs

exit "$status"
