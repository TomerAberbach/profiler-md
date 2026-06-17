#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

assets="$REPO/scripts/fixtures/assets/julia"
profile="$assets/profile.jl"
json_input="$REPO/scripts/fixtures/assets/shared/twitter.json"

depot="${PROFILER_MD_FIXTURES_CACHE:-${XDG_CACHE_HOME:-$HOME/.cache}/profiler-md-fixtures}/julia-depot"
export JULIA_DEPOT_PATH="$depot"

setup_done=
setup_depot() {
  [[ -n "$setup_done" ]] && return 0
  mkdir -p "$depot"
  notice "Instantiating Julia depot (JSON3, PProf)"
  julia --project="$assets" -e 'using Pkg; Pkg.instantiate()' </dev/null
  setup_done=1
}

# capture_fn for emit: $1=out  $2=role  $3=mode (cpu|alloc)
record_julia() {
  local out=$1 role=$2 mode=$3
  setup_depot

  notice "Profiling JSON3 using PProf ($role, $mode)"

  local gz="$WORKDIR/julia-$mode-$RANDOM.pb.gz"
  # Run single-threaded so idle GC/scheduler threads don't fill the profile with
  # wait frames (see docs/languages/julia.md).
  julia -t 1 --gcthreads=1 --project="$assets" "$profile" "$mode" "$gz" "$json_input" </dev/null
  gunzip -c "$gz" >"$out"
}

for role in base current; do
  emit "$FIXTURES/julia.pprof-jl.cpu.$role.pprof" record_julia "$role" cpu
  emit "$FIXTURES/julia.pprof-jl.alloc.$role.pprof" record_julia "$role" alloc
done

verify_pair \
  "$FIXTURES/julia.pprof-jl.cpu.base.pprof" \
  "$FIXTURES/julia.pprof-jl.cpu.current.pprof"
verify_pair \
  "$FIXTURES/julia.pprof-jl.alloc.base.pprof" \
  "$FIXTURES/julia.pprof-jl.alloc.current.pprof"
