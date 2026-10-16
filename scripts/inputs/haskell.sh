#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/haskell"

# Cost centres are sampled every RTS tick (1 ms), so the workload repeats the
# document enough times for a couple of thousand samples. The two sides repeat
# it a different number of times because the runtime counts allocation exactly:
# run the same workload twice and both sides allocate the same bytes, leaving
# the allocation half of the diff with nothing to report.
declare -A SIDE_ITERATIONS=([base]=500 [current]=550)

binary=""
build_workload() {
  [[ -n "$binary" ]] && return 0

  notice "Building the aeson workload with GHC cost-centre profiling"

  local dir="$WORKDIR/haskell"
  mkdir -p "$dir" || return 1
  cp "$assets/Profile.hs" "$dir/Profile.hs" || return 1

  # -fprof-auto-top is what `cabal build --enable-profiling` applies to an
  # executable: one cost centre per top-level binding, named and located from
  # the source. The nix toolchain's aeson is built with its own cost centres.
  #
  # An unguarded failing compile would memoize a path to a binary that was
  # never built, so every side would fail on the missing report rather than on
  # the compiler's own error.
  ( cd "$dir" && ghc -O2 -prof -fprof-auto-top -rtsopts -outputdir build -o profile Profile.hs >/dev/null ) \
    || return 1

  binary="$dir/profile"
}

# One recording per side writes both of GHC's formats, so they describe the same
# run rather than two separate runs.
recorded=" "
record_side() {
  local side=$1
  [[ "$recorded" == *" $side "* ]] && return 0

  build_workload || return 1
  fetch_twitter_json || return 1

  notice "Profiling aeson using GHC's cost-centre profiler ($side)"

  # The runtime names both reports after the program and writes them to the
  # working directory, so each side records in its own.
  local run="$WORKDIR/haskell-$side"
  rm -rf "$run"
  mkdir -p "$run" || return 1

  # -pj writes the JSON report and -l-au the eventlog, both from the same run's
  # cost-centre samples.
  ( cd "$run" && "$binary" "$TWITTER_JSON" "${SIDE_ITERATIONS[$side]}" +RTS -pj -l-au -RTS >/dev/null ) \
    || return 1

  recorded+="$side "
}

# capture_fn for emit: $1=out  $2=side  $3=the recording's filename
copy_recording() {
  local out=$1 side=$2 filename=$3
  record_side "$side" || return 1
  cp "$WORKDIR/haskell-$side/$filename" "$out"
}

# `emit` skips a target that already exists, so a side with only one of its
# outputs present would take the other from a fresh run, leaving a pair that
# describes two runs. Delete the remaining half to record both again.
for side in base current; do
  json="$GENERATED_INPUTS/haskell.ghc.$side.prof.json"
  eventlog="$GENERATED_INPUTS/haskell.ghc.$side.eventlog"
  if [[ -f "$json" && ! -f "$eventlog" ]] || [[ ! -f "$json" && -f "$eventlog" ]]; then
    rm -f "$json" "$eventlog"
  fi
done

for side in base current; do
  try emit "$GENERATED_INPUTS/haskell.ghc.$side.prof.json" \
    copy_recording "$side" profile.prof
  try emit "$GENERATED_INPUTS/haskell.ghc.$side.eventlog" \
    copy_recording "$side" profile.eventlog
done

verify_pairs

exit "$status"
