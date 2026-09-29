#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/julia"

depot="${PROFILER_MD_INPUT_GENERATION_CACHE:-${XDG_CACHE_HOME:-$HOME/.cache}/profiler-md-input-generation}/julia-depot"
export JULIA_DEPOT_PATH="$depot"

# Base and current profile consecutive JSON3 releases, so a diff compares two
# versions of the same code. The committed manifest pins base's, and each role
# copies the project and the workload into one directory, so both record the
# same paths and neither records the checkout's. The directory is fixed rather
# than under WORKDIR, which mktemp names anew per run, so a role regenerated
# alone records the same paths as the other.
declare -A JSON3_VERSION=([base]="1.14.0" [current]="1.14.1")
project="/tmp/profiler-md-julia-project"
profile="$project/profile.jl"

setup_role=
setup_depot() {
  local role=$1
  [[ "$setup_role" == "$role" ]] && return 0
  mkdir -p "$depot"
  rm -rf "$project"
  mkdir -p "$project"
  cp "$assets/Project.toml" "$assets/Manifest.toml" "$assets/profile.jl" \
    "$project/" || return 1
  notice "Instantiating Julia depot (JSON3 ${JSON3_VERSION[$role]}, PProf)"
  julia --project="$project" -e '
    using Pkg
    Pkg.compat("JSON3", "=" * ARGS[1])
    Pkg.add(name = "JSON3", version = ARGS[1])
    Pkg.instantiate()
  ' "${JSON3_VERSION[$role]}" </dev/null || return 1
  setup_role=$role
}

# capture_fn for emit: $1=out  $2=role  $3=mode (cpu|wall|alloc)
record_julia() {
  local out=$1 role=$2 mode=$3
  setup_depot "$role" || return 1
  fetch_twitter_json

  notice "Profiling JSON3 using PProf ($role, $mode)"

  local gz="$WORKDIR/julia-$mode-$RANDOM.pb.gz"
  # Run single-threaded so idle GC/scheduler threads don't fill the profile with
  # wait frames (see docs/languages/julia.md).
  julia -t 1 --gcthreads=1 --project="$project" "$profile" "$mode" "$gz" "$TWITTER_JSON" </dev/null
  gunzip -c "$gz" >"$out"
}

# capture_fn for emit: $1=out  $2=role
record_julia_heap() {
  local out=$1 role=$2
  setup_depot "$role" || return 1
  fetch_twitter_json

  notice "Snapshotting JSON3 heap using Profile.take_heap_snapshot ($role)"

  # A snapshot spans the entire runtime heap (Base's method tables and types
  # alone are ~190 MB), so store it gzipped. The pipeline strips gzip by its
  # magic bytes.
  local snapshot="$WORKDIR/julia-heap-$RANDOM.heapsnapshot"
  julia -t 1 --gcthreads=1 --project="$project" "$profile" heap "$snapshot" "$TWITTER_JSON" </dev/null
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
