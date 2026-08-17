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

# One recording per role writes both of GHC's formats, so they describe the same
# run rather than two separate runs.
recorded=" "
record_role() {
  local role=$1
  [[ "$recorded" == *" $role "* ]] && return 0

  build_workload || return 1
  fetch_twitter_json || return 1

  notice "Profiling aeson using GHC's cost-centre profiler ($role)"

  # The runtime names both reports after the program and writes them to the
  # working directory, so each role records in its own.
  local run="$WORKDIR/haskell-$role"
  rm -rf "$run"
  mkdir -p "$run" || return 1

  # -pj writes the JSON report and -l-au the eventlog, both from the same run's
  # cost-centre samples.
  ( cd "$run" && "$binary" "$TWITTER_JSON" "${ROLE_ITERATIONS[$role]}" +RTS -pj -l-au -RTS >/dev/null ) \
    || return 1

  recorded+="$role "
}

# capture_fn for emit: $1=out  $2=role  $3=the recording's filename
copy_recording() {
  local out=$1 role=$2 filename=$3
  record_role "$role" || return 1
  cp "$WORKDIR/haskell-$role/$filename" "$out"
}

# `emit` skips a target that already exists, so a role with only one of its
# outputs present would take the other from a fresh run, leaving a pair that
# describes two runs. Delete the remaining half to record both again.
for role in base current; do
  json="$GENERATED_INPUTS/haskell.ghc.$role.prof.json"
  eventlog="$GENERATED_INPUTS/haskell.ghc.$role.eventlog"
  if [[ -f "$json" && ! -f "$eventlog" ]] || [[ ! -f "$json" && -f "$eventlog" ]]; then
    rm -f "$json" "$eventlog"
  fi
done

for role in base current; do
  try emit "$GENERATED_INPUTS/haskell.ghc.$role.prof.json" \
    copy_recording "$role" profile.prof
  try emit "$GENERATED_INPUTS/haskell.ghc.$role.eventlog" \
    copy_recording "$role" profile.eventlog
done

verify_pairs

exit "$status"
