#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

CONFIGS=(cpu heap heap-alloc goroutine goroutineleak block mutex threadcreate)
declare -A CONFIG_TO_PROFILE=(
  [cpu]=cpu [heap]=heap [heap-alloc]=allocs [goroutine]=goroutine
  [goroutineleak]=goroutineleak [block]=block [mutex]=mutex
  [threadcreate]=threadcreate
)

# Go 1.26 has the goroutineleak profile behind an experiment. Go 1.27 ships it
# by default and rejects the experiment's name, so delete this on upgrade.
export GOEXPERIMENT=goroutineleakprofile

profile="$REPO/scripts/inputs/assets/go/profile.go"

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -z "${rundir[$role]:-}" ]]; then
    local dir="$WORKDIR/go-$role"
    mkdir -p "$dir"
    fetch_twitter_json
    notice "Profiling encoding/json using go ($role)"
    GOCACHE="$WORKDIR/gocache" GOFLAGS=-mod=mod go run "$profile" "$dir" "$TWITTER_JSON"
    rundir[$role]=$dir
  fi
}

# capture_fn for emit: $1=out  $2=role  $3=pprof profile name
copy_go_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role"
  cp "${rundir[$role]}/$name.pprof" "$out"
}

for role in base current; do
  for cfg in "${CONFIGS[@]}"; do
    out="$GENERATED_INPUTS/go.go.$cfg.$role.pprof"
    try emit "$out" copy_go_profile "$role" "${CONFIG_TO_PROFILE[$cfg]}"
  done
done

verify_pairs

exit "$status"
