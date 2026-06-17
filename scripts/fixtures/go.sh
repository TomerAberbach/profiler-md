#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

CONFIGS=(cpu heap heap-alloc goroutine block mutex threadcreate)
declare -A CONFIG_TO_PROFILE=(
  [cpu]=cpu [heap]=heap [heap-alloc]=allocs [goroutine]=goroutine
  [block]=block [mutex]=mutex [threadcreate]=threadcreate
)

profile="$REPO/scripts/fixtures/assets/go/profile.go"
json_input="$REPO/scripts/fixtures/assets/shared/twitter.json"

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -z "${rundir[$role]:-}" ]]; then
    local dir="$WORKDIR/go-$role"
    mkdir -p "$dir"
    notice "Profiling encoding/json using go ($role)"
    GOCACHE="$WORKDIR/gocache" GOFLAGS=-mod=mod go run "$profile" "$dir" "$json_input"
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
    out="$FIXTURES/go.pprof.$cfg.$role.pprof"
    emit "$out" copy_go_profile "$role" "${CONFIG_TO_PROFILE[$cfg]}"
  done
done

for cfg in "${CONFIGS[@]}"; do
  verify_pair "$FIXTURES/go.pprof.$cfg.base.pprof" "$FIXTURES/go.pprof.$cfg.current.pprof"
done
