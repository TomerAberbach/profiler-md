#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/haskell"

# Cost centres are sampled every RTS tick (1 ms), so the workload repeats the
# document enough times for a couple of thousand samples. The two roles repeat
# it a different number of times because the runtime counts allocation exactly:
# run the same workload twice and both roles allocate the same bytes, leaving
# the allocation half of the diff with nothing to report.
declare -A ROLE_ITERATIONS=([base]=500 [current]=550)

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
  # Guarded with `|| return 1` because callers run under `try`'s `||` context,
  # where set -e is off: an unguarded failing compile would memoize a path to a
  # binary that was never built, and every role would then fail on the missing
  # report rather than on the compiler's own error.
  ( cd "$dir" && ghc -O2 -prof -fprof-auto-top -rtsopts -outputdir build -o profile Profile.hs >/dev/null ) \
    || return 1

  binary="$dir/profile"
}

# capture_fn for emit: $1=out  $2=role
record_role() {
  local out=$1 role=$2

  build_workload || return 1
  fetch_twitter_json || return 1

  notice "Profiling aeson using GHC's cost-centre profiler ($role)"

  # The runtime names the report after the program and writes it to the working
  # directory, so each role records in its own.
  local run="$WORKDIR/haskell-$role"
  rm -rf "$run"
  mkdir -p "$run" || return 1

  ( cd "$run" && "$binary" "$TWITTER_JSON" "${ROLE_ITERATIONS[$role]}" +RTS -pj -RTS >/dev/null ) \
    || return 1

  cp "$run/profile.prof" "$out"
}

for role in base current; do
  try emit "$GENERATED_INPUTS/haskell.ghc.$role.prof.json" record_role "$role"
done

verify_pairs

exit "$status"
