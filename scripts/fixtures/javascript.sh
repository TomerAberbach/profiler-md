#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

TYPESCRIPT_VERSION=5.4.5
DATADOG_PPROF_VERSION=5.3.0
# Puppeteer bundles a pinned Chromium build, so pinning the package pins the
# browser. nixpkgs `chromium` is unavailable on aarch64-darwin (the flake's only
# system), so the Chrome captures source the browser this way instead of via the
# flake, mirroring how the other JS deps above are pinned through npm.
PUPPETEER_VERSION=24.15.0
ZOD_REPO=https://github.com/colinhacks/zod
ZOD_TAG=v3.23.8

assets="$REPO/scripts/fixtures/assets/javascript"
json_input="$REPO/scripts/fixtures/assets/shared/twitter.json"

# Keep the Chromium download inside WORKDIR so the EXIT trap cleans it up.
export PUPPETEER_CACHE_DIR="$WORKDIR/.puppeteer"

node_proj=""
setup_node() {
  [[ -n "$node_proj" ]] && return 0
  local dir="$WORKDIR/zod"

  notice "Cloning zod ($ZOD_TAG)"
  git clone --depth 1 --branch "$ZOD_TAG" "$ZOD_REPO" "$dir" >&2

  notice "Installing tsc tooling and puppeteer (downloads pinned Chromium)"
  npm install --prefix "$dir" --no-save --no-audit --no-fund \
    "typescript@$TYPESCRIPT_VERSION" \
    "@datadog/pprof@$DATADOG_PPROF_VERSION" \
    "puppeteer@$PUPPETEER_VERSION" >&2

  cp "$assets/cpuprofile-run.mjs" "$assets/tsc-run.mjs" \
    "$assets/tsc-workload.mjs" "$assets/datadog-pprof.mjs" \
    "$assets/datadog-pprof-heap.mjs" \
    "$assets/chrome-workload.mjs" "$assets/chrome-cpu.mjs" \
    "$assets/chrome-heap.mjs" "$assets/chrome-heap-snapshot.mjs" "$dir/"
  node_proj="$dir"
}

capture_node_cpu() {
  local out=$1 role=$2
  setup_node
  notice "CPU profiling zod type-check using node ($role)"
  node "$node_proj/cpuprofile-run.mjs" "$node_proj" "$out" >&2
}

capture_node_heap() {
  local out=$1 role=$2
  local profdir
  setup_node
  profdir="$WORKDIR/node-heap-$role"
  mkdir -p "$profdir"
  notice "Heap profiling zod type-check using node ($role)"
  node --heap-prof --heap-prof-dir="$profdir" \
    "$node_proj/tsc-run.mjs" "$node_proj" >&2
  mv "$(find "$profdir" -name '*.heapprofile' | head -1)" "$out"
}

capture_node_heap_snapshot() {
  local out=$1 role=$2
  notice "Heap snapshotting parsed twitter.json using node ($role)"
  node "$assets/heap-snapshot.mjs" "$json_input" "$out" >&2
}

capture_pprof_cpu() {
  local out=$1 role=$2
  setup_node
  notice "CPU profiling zod type-check using @datadog/pprof ($role)"
  node "$node_proj/datadog-pprof.mjs" "$node_proj" "$out" >&2
}

capture_pprof_heap() {
  local out=$1 role=$2
  setup_node
  notice "Heap profiling zod type-check using @datadog/pprof ($role)"
  node "$node_proj/datadog-pprof-heap.mjs" "$node_proj" "$out" >&2
}

capture_deno_cpu() {
  local out=$1 role=$2
  setup_node
  notice "CPU profiling zod type-check using deno ($role)"
  deno run -A --node-modules-dir=auto \
    "$node_proj/cpuprofile-run.mjs" "$node_proj" "$out" >&2
}

capture_bun_cpu() {
  local out=$1 role=$2
  local profdir prof
  setup_node
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
  notice "V8 heap snapshotting parsed twitter.json using bun ($role)"
  # `bun --heap-prof` writes a V8-format snapshot on exit (the same schema Node
  # and Chrome produce, matched by `v8-heap-snapshot`), so the workload just
  # builds and retains a representative heap and exits. Its `--heap-prof-dir`
  # mishandles absolute paths (it strips the leading slash and resolves relative
  # to the cwd), so run from inside profdir and let it default to the cwd. The
  # asset and input paths are absolute, so the cd doesn't affect them.
  ( cd "$profdir" && bun --heap-prof "$assets/bun-heap-snapshot.mjs" "$json_input" >&2 )
  prof="$(find "$profdir" -name '*.heapsnapshot' | head -1)"
  [[ -n "$prof" ]] || { echo "  bun produced no .heapsnapshot" >&2; return 1; }
  mv "$prof" "$out"
}

capture_bun_jsc_heap_snapshot() {
  local out=$1 role=$2
  notice "JSC heap snapshotting parsed twitter.json using bun ($role)"
  # Bun's `generateHeapSnapshot("jsc")` returns a JSC `Inspector`-format snapshot
  # (matched by `jsc-heap-snapshot`) — the same flavor Safari exports, headless.
  bun "$assets/bun-jsc-heap-snapshot.mjs" "$json_input" "$out" >&2
}

capture_chrome_cpu() {
  local out=$1 role=$2
  setup_node
  notice "CPU profiling DOM build using headless Chrome ($role)"
  node "$node_proj/chrome-cpu.mjs" "$json_input" "$out" >&2
}

capture_chrome_heap() {
  local out=$1 role=$2
  setup_node
  notice "Heap allocation profiling DOM build using headless Chrome ($role)"
  node "$node_proj/chrome-heap.mjs" "$json_input" "$out" >&2
}

capture_chrome_heap_snapshot() {
  local out=$1 role=$2
  setup_node
  notice "Heap snapshotting DOM build using headless Chrome ($role)"
  node "$node_proj/chrome-heap-snapshot.mjs" "$json_input" "$out" >&2
}

# This script produces many independent fixtures across several runtimes. Run
# each through `try` so one flaky capture doesn't drop the rest. The script
# still exits non-zero if anything failed.
status=0
try() { "$@" || status=1; }

for role in base current; do
  try emit "$FIXTURES/javascript.node.$role.cpuprofile" \
    capture_node_cpu "$role"
  try emit "$FIXTURES/javascript.node.$role.heapprofile" \
    capture_node_heap "$role"
  try emit "$FIXTURES/javascript.node.$role.heapsnapshot" \
    capture_node_heap_snapshot "$role"
  try emit "$FIXTURES/javascript.pprof.cpu.$role.pprof" \
    capture_pprof_cpu "$role"
  try emit "$FIXTURES/javascript.pprof.heap.$role.pprof" \
    capture_pprof_heap "$role"
  try emit "$FIXTURES/javascript.deno.$role.cpuprofile" \
    capture_deno_cpu "$role"
  try emit "$FIXTURES/javascript.bun.$role.cpuprofile" \
    capture_bun_cpu "$role"
  try emit "$FIXTURES/javascript.bun.$role.heapsnapshot" \
    capture_bun_v8_heap_snapshot "$role"
  try emit "$FIXTURES/javascript.bun.$role.jsc-heap-snapshot.json" \
    capture_bun_jsc_heap_snapshot "$role"
  try emit "$FIXTURES/javascript.chrome.$role.cpuprofile" \
    capture_chrome_cpu "$role"
  try emit "$FIXTURES/javascript.chrome.$role.heapprofile" \
    capture_chrome_heap "$role"
  try emit "$FIXTURES/javascript.chrome.$role.heapsnapshot" \
    capture_chrome_heap_snapshot "$role"
done

try verify_pair "$FIXTURES/javascript.node.base.cpuprofile" \
  "$FIXTURES/javascript.node.current.cpuprofile"
try verify_pair "$FIXTURES/javascript.node.base.heapprofile" \
  "$FIXTURES/javascript.node.current.heapprofile"
try verify_pair "$FIXTURES/javascript.node.base.heapsnapshot" \
  "$FIXTURES/javascript.node.current.heapsnapshot"
try verify_pair "$FIXTURES/javascript.pprof.cpu.base.pprof" \
  "$FIXTURES/javascript.pprof.cpu.current.pprof"
try verify_pair "$FIXTURES/javascript.pprof.heap.base.pprof" \
  "$FIXTURES/javascript.pprof.heap.current.pprof"
try verify_pair "$FIXTURES/javascript.deno.base.cpuprofile" \
  "$FIXTURES/javascript.deno.current.cpuprofile"
try verify_pair "$FIXTURES/javascript.bun.base.cpuprofile" \
  "$FIXTURES/javascript.bun.current.cpuprofile"
try verify_pair "$FIXTURES/javascript.bun.base.heapsnapshot" \
  "$FIXTURES/javascript.bun.current.heapsnapshot"
try verify_pair "$FIXTURES/javascript.bun.base.jsc-heap-snapshot.json" \
  "$FIXTURES/javascript.bun.current.jsc-heap-snapshot.json"
try verify_pair "$FIXTURES/javascript.chrome.base.cpuprofile" \
  "$FIXTURES/javascript.chrome.current.cpuprofile"
try verify_pair "$FIXTURES/javascript.chrome.base.heapprofile" \
  "$FIXTURES/javascript.chrome.current.heapprofile"
try verify_pair "$FIXTURES/javascript.chrome.base.heapsnapshot" \
  "$FIXTURES/javascript.chrome.current.heapsnapshot"

exit "$status"
