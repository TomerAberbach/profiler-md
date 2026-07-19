#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/julia"
profile="$assets/profile.jl"

depot="${PROFILER_MD_INPUT_GENERATION_CACHE:-${XDG_CACHE_HOME:-$HOME/.cache}/profiler-md-input-generation}/julia-depot"
export JULIA_DEPOT_PATH="$depot"

setup_done=
setup_depot() {
  [[ -n "$setup_done" ]] && return 0
  mkdir -p "$depot"
  notice "Instantiating Julia depot (JSON3, PProf)"
  julia --project="$assets" -e 'using Pkg; Pkg.instantiate()' </dev/null
  setup_done=1
}

# capture_fn for emit: $1=out  $2=role  $3=mode (cpu|wall|alloc)
record_julia() {
  local out=$1 role=$2 mode=$3
  setup_depot
  fetch_twitter_json

  notice "Profiling JSON3 using PProf ($role, $mode)"

  local gz="$WORKDIR/julia-$mode-$RANDOM.pb.gz"
  # Run single-threaded so idle GC/scheduler threads don't fill the profile with
  # wait frames (see docs/languages/julia.md).
  julia -t 1 --gcthreads=1 --project="$assets" "$profile" "$mode" "$gz" "$TWITTER_JSON" </dev/null
  gunzip -c "$gz" >"$out"
}

# capture_fn for emit: $1=out  $2=role
record_julia_heap() {
  local out=$1 role=$2
  setup_depot
  fetch_twitter_json

  notice "Snapshotting JSON3 heap using Profile.take_heap_snapshot ($role)"

  # A snapshot spans the entire runtime heap (Base's method tables and types
  # alone are ~190 MB), so store it gzipped like the gzipped pprof captures;
  # the CLI and tests decompress by magic bytes.
  local snapshot="$WORKDIR/julia-heap-$RANDOM.heapsnapshot"
  julia -t 1 --gcthreads=1 --project="$assets" "$profile" heap "$snapshot" "$TWITTER_JSON" </dev/null
  gzip -9 -c "$snapshot" >"$out"
  rm -f "$snapshot"
}

for role in base current; do
  try emit "$GENERATED_INPUTS/julia.pprof-jl.cpu.$role.pprof" record_julia "$role" cpu
  try emit "$GENERATED_INPUTS/julia.pprof-jl.wall.$role.pprof" record_julia "$role" wall
  try emit "$GENERATED_INPUTS/julia.pprof-jl.alloc.$role.pprof" record_julia "$role" alloc
  try emit "$GENERATED_INPUTS/julia.profile-jl.$role.heapsnapshot" record_julia_heap "$role"
done

verify_pairs

exit "$status"
