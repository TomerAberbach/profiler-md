#!/usr/bin/env bash

# Shared JVM capture logic: the async-profiler and JDK Flight Recorder
# configuration tables, capture functions, and the base/current emission loop.
# A workload script sources this after _common.sh, then defines:
#
#   JVM_LANGUAGE      the generated-input filename prefix (e.g. `java`)
#   JVM_WORKLOAD      the notice phrase naming the workload (e.g. `Renaissance`)
#   run_jvm_workload  runs the workload once; $1 is a JVM arg to pass through
#                     (the agent or StartFlightRecording option) and $2 the
#                     capture config, for workloads that shrink high-volume
#                     configs like nativemem
#
# and calls `emit_jvm_captures` followed by `verify_pairs`.

# Resolves libasyncProfiler once per run. A guarded direct call rather than
# command substitution: a subshell would discard the memoization, and the
# `|| return 1` matters because captures run under `try`'s `||` context, where
# set -e is off.
ap_lib=""
ensure_ap_lib() {
  [[ -n "$ap_lib" ]] && return 0
  [[ -n "${ASYNC_PROFILER_HOME:-}" ]] \
    || { echo "ASYNC_PROFILER_HOME must point at the async-profiler install" >&2; return 1; }
  local lib
  lib="$(find "$ASYNC_PROFILER_HOME" -name 'libasyncProfiler.*' \
    \( -name '*.so' -o -name '*.dylib' \) -print -quit 2>/dev/null)"
  [[ -n "$lib" ]] || { echo "libasyncProfiler not found under $ASYNC_PROFILER_HOME" >&2; return 1; }
  ap_lib="$lib"
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

declare -A JDK_JFR_OPTS=(
  [cpu]="settings=profile,+jdk.ExecutionSample#enabled=true"
  [alloc]="settings=profile,+jdk.ObjectAllocationSample#enabled=true"
  [live]="settings=profile,+jdk.OldObjectSample#enabled=true"
  [lock]="settings=profile,+jdk.JavaMonitorEnter#enabled=true,+jdk.JavaMonitorWait#enabled=true"
  [all]="settings=profile"
)
JDK_JFR_CONFIGS=(cpu alloc live lock all)

# capture_fn for emit: $1=out  $2=role  $3=config  $4=event-spec
capture_ap_jfr() {
  local out=$1 role=$2 cfg=$3 event_spec=$4
  ensure_ap_lib || return 1
  notice "Profiling $JVM_WORKLOAD using async-profiler JFR ($role, $event_spec)"
  run_jvm_workload "-agentpath:$ap_lib=start,$event_spec,file=$out,jfr" "$cfg"
}

# capture_fn for emit: $1=out  $2=role
capture_ap_collapsed() {
  local out=$1 role=$2
  ensure_ap_lib || return 1
  notice "Profiling $JVM_WORKLOAD using async-profiler collapsed ($role, event=cpu)"
  run_jvm_workload "-agentpath:$ap_lib=start,event=cpu,file=$out,collapsed" cpu
}

# capture_fn for emit: $1=out  $2=role  $3=config  $4=extra StartFlightRecording options
capture_jdk_jfr() {
  local out=$1 role=$2 cfg=$3 extra=$4
  notice "Profiling $JVM_WORKLOAD using JDK Flight Recorder ($role, $extra)"
  run_jvm_workload "-XX:StartFlightRecording=filename=$out,$extra" "$cfg"
}

emit_jvm_captures() {
  local role cfg out
  for role in base current; do
    # async-profiler -> JFR
    for cfg in "${AP_JFR_CONFIGS[@]}"; do
      out="$GENERATED_INPUTS/$JVM_LANGUAGE.async-profiler.$cfg.$role.jfr"
      try emit "$out" capture_ap_jfr "$role" "$cfg" "${AP_JFR_EVENT[$cfg]}"
    done

    # async-profiler -> collapsed
    try emit "$GENERATED_INPUTS/$JVM_LANGUAGE.async-profiler.cpu.$role.collapsed" \
      capture_ap_collapsed "$role"

    # JDK Flight Recorder -> JFR
    for cfg in "${JDK_JFR_CONFIGS[@]}"; do
      out="$GENERATED_INPUTS/$JVM_LANGUAGE.jdk.$cfg.$role.jfr"
      try emit "$out" capture_jdk_jfr "$role" "$cfg" "${JDK_JFR_OPTS[$cfg]}"
    done
  done
}
