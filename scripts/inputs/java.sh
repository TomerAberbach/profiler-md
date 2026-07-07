#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/java"
mkdir -p "$assets"

RENAISSANCE_VERSION="0.15.0"
RENAISSANCE_JAR="$assets/renaissance-mit-$RENAISSANCE_VERSION.jar"
RENAISSANCE_URL="https://github.com/renaissance-benchmarks/renaissance/releases/download/v$RENAISSANCE_VERSION/renaissance-mit-$RENAISSANCE_VERSION.jar"
RENAISSANCE_SHA256="a3a85f16cdf6c4b7e58c13c41c38f30ca4ca661442d276e17fc612c07ca55a32"

REPETITIONS=4

fetch_renaissance() {
  [[ -f "$RENAISSANCE_JAR" ]] && return 0
  notice "Fetching Renaissance $RENAISSANCE_VERSION jar"
  curl -fsSL "$RENAISSANCE_URL" -o "$RENAISSANCE_JAR"
  echo "$RENAISSANCE_SHA256  $RENAISSANCE_JAR" | shasum -a 256 -c -
}

declare -A ap_lib_cache=()
async_profiler_lib() {
  if [[ -z "${ap_lib_cache[lib]:-}" ]]; then
    : "${ASYNC_PROFILER_HOME:?ASYNC_PROFILER_HOME must point at the async-profiler install}"
    local lib
    lib="$(find "$ASYNC_PROFILER_HOME" -name 'libasyncProfiler.*' \
      \( -name '*.so' -o -name '*.dylib' \) -print -quit 2>/dev/null)"
    [[ -n "$lib" ]] || { echo "libasyncProfiler not found under $ASYNC_PROFILER_HOME" >&2; return 1; }
    ap_lib_cache[lib]="$lib"
  fi
  echo "${ap_lib_cache[lib]}"
}

run_renaissance() {
  fetch_renaissance
  java "$@" -jar "$RENAISSANCE_JAR" --scratch-base "$WORKDIR" -r "$REPETITIONS" fj-kmeans
}

capture_ap_jfr() {
  local out=$1 role=$2 event_spec=$3 lib
  lib="$(async_profiler_lib)"
  notice "Profiling Renaissance using async-profiler JFR ($role, $event_spec)"
  run_renaissance "-agentpath:$lib=start,$event_spec,file=$out,jfr"
}

declare -A AP_JFR_EVENT=(
  [cpu]="event=cpu"
  [wall]="event=wall"
  [alloc]="event=alloc"
  [live]="event=alloc,live"
  [nativemem]="event=nativemem"
  [lock]="event=lock"
  [all]="event=cpu,event=alloc,event=lock"
)
AP_JFR_CONFIGS=(cpu wall alloc live nativemem lock all)

capture_ap_collapsed() {
  local out=$1 role=$2 lib
  lib="$(async_profiler_lib)"
  notice "Profiling Renaissance using async-profiler collapsed ($role, event=cpu)"
  run_renaissance "-agentpath:$lib=start,event=cpu,file=$out,collapsed"
}

# capture_fn for emit: $1=out  $2=role  $4=extra StartFlightRecording options
capture_jdk_jfr() {
  local out=$1 role=$2 extra=$3
  notice "Profiling Renaissance using JDK Flight Recorder ($role, $extra)"
  run_renaissance "-XX:StartFlightRecording=filename=$out,$extra"
}

declare -A JDK_JFR_OPTS=(
  [cpu]="settings=profile,+jdk.ExecutionSample#enabled=true"
  [alloc]="settings=profile,+jdk.ObjectAllocationSample#enabled=true"
  [live]="settings=profile,+jdk.OldObjectSample#enabled=true"
  [lock]="settings=profile,+jdk.JavaMonitorEnter#enabled=true,+jdk.JavaMonitorWait#enabled=true"
  [all]="settings=profile"
)
JDK_JFR_CONFIGS=(cpu alloc live lock all)

for role in base current; do
  # async-profiler -> JFR
  for cfg in "${AP_JFR_CONFIGS[@]}"; do
    out="$GENERATED_INPUTS/java.async-profiler.$cfg.$role.jfr"
    try emit "$out" capture_ap_jfr "$role" "${AP_JFR_EVENT[$cfg]}"
  done

  # async-profiler -> collapsed
  try emit "$GENERATED_INPUTS/java.async-profiler.cpu.$role.collapsed" capture_ap_collapsed "$role"

  # JDK Flight Recorder -> JFR
  for cfg in "${JDK_JFR_CONFIGS[@]}"; do
    out="$GENERATED_INPUTS/java.jdk.$cfg.$role.jfr"
    try emit "$out" capture_jdk_jfr "$role" "${JDK_JFR_OPTS[$cfg]}"
  done
done

verify_pairs

exit "$status"
