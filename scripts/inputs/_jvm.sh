#!/usr/bin/env bash

# A workload script sources this after _common.sh, then defines:
#
#   JVM_LANGUAGE      the generated-input filename prefix (e.g. `java`)
#   JVM_WORKLOAD      the notice phrase naming the workload (e.g. `Renaissance`)
#   run_jvm_workload  runs the workload once. $1 and $2 are the capture config
#                     and the input's extension, for workloads that shrink
#                     high-volume captures like nativemem. $3 is the side, for
#                     workloads that run a different version per side. The
#                     remaining arguments are JVM args to pass through
#
# and calls `emit_jvm_captures` followed by `verify_pairs`. A workload that also
# captures a heap dump sets:
#
#   JVM_HEAP_DUMP         capture a heap dump under the `heap` config
#   JVM_HEAP_DUMP_WARMUP  seconds to let that run work before dumping it
#                         (15 by default)
#
# A workload script that also captures JFR recordings with truncated stack
# traces sets:
#
#   JVM_TRUNCATED_JFR     capture the JDK_JFR_TRUNCATED_CONFIGS

# Resolves libasyncProfiler once per run. Call it directly rather than in a
# command substitution, whose subshell would discard the memoization.
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

declare -A AP_EVENT=(
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

# These configs record at Flight Recorder's default stack depth, which marks
# the workloads' deeper traces truncated, so they record truncated traces beside
# complete ones.
declare -A JDK_JFR_TRUNCATED_STACK_DEPTH=([cpu-stackdepth-64]=64)
JDK_JFR_OPTS[cpu-stackdepth-64]="${JDK_JFR_OPTS[cpu]}"
JDK_JFR_TRUNCATED_CONFIGS=(cpu-stackdepth-64)

# The `profile` template records the JVM's environment variables and the
# machine's whole process list. Both describe the machine that generated the
# input rather than the workload, and the inputs are committed to a public
# repository. profiler-md reads neither event.
JDK_JFR_PRIVACY_OPTS="+jdk.InitialEnvironmentVariable#enabled=false,+jdk.SystemProcess#enabled=false"

# Flight Recorder records the innermost 64 frames of a stack trace by default,
# and marks a deeper trace truncated. The workloads' stacks run deeper, so a
# truncated trace lacks its outermost callers. 2048 matches the depth
# async-profiler records by default.
JDK_JFR_STACK_DEPTH=2048

# A JFR recording holds the JVM's command line, so a JFR capture writes to
# WORKDIR and moves the recording into place, and the recording names no path in
# the checkout.
capture_path() {
  echo "$WORKDIR/$(basename "$1")"
}

# capture_fn for emit: $1=out  $2=side  $3=config  $4=event-spec
capture_ap_jfr() {
  local out=$1 side=$2 cfg=$3 event_spec=$4 capture
  capture="$(capture_path "$out")"
  ensure_ap_lib || return 1
  notice "Profiling $JVM_WORKLOAD using async-profiler JFR ($side, $event_spec)"
  run_jvm_workload "$cfg" jfr "$side" "-agentpath:$ap_lib=start,$event_spec,file=$capture,jfr" \
    || return 1
  mv "$capture" "$out"
}

# The collapsed format holds one event type, so each config records one.
declare -A AP_COLLAPSED_OPTS=(
  [cpu]="event=cpu"
  [alloc]="event=alloc"
  [cpu-threads-ann-sig]="event=cpu,threads,ann,sig"
  [cpu-dot]="event=cpu,dot"
  [alloc-dot]="event=alloc,dot"
)
AP_COLLAPSED_CONFIGS=(cpu alloc cpu-threads-ann-sig cpu-dot alloc-dot)

# capture_fn for emit: $1=out  $2=side  $3=config  $4=agent options
capture_ap_collapsed() {
  local out=$1 side=$2 cfg=$3 opts=$4
  ensure_ap_lib || return 1
  notice "Profiling $JVM_WORKLOAD using async-profiler collapsed ($side, $opts)"
  run_jvm_workload "$cfg" collapsed "$side" "-agentpath:$ap_lib=start,$opts,file=$out,collapsed"
}

# The JVMs running now, one PID per line, excluding the `jcmd` process listing
# them. A heap dump needs the workload's PID, and `jcmd -l` is how a JVM is
# discovered whichever launcher started it (`java`, `kotlinc`, or a compile
# daemon).
jvm_pids() {
  jcmd -l 2>/dev/null | grep -v 'sun\.tools\.jcmd\.JCmd' | awk '{print $1}' | sort
}

HEAP_DUMP_STARTUP_TIMEOUT=180

# capture_fn for emit: $1=out  $2=side
#
# Dumps the heap of a JVM running the workload, which a workload script keeps
# alive past JVM_HEAP_DUMP_WARMUP seconds so the dump holds the workload's own
# data rather than the JVM's startup state.
capture_jdk_heap_dump() {
  local out=$1 side=$2 before pid="" waited=0 workload_pid
  local warmup=${JVM_HEAP_DUMP_WARMUP:-15}
  notice "Dumping $JVM_WORKLOAD's heap using jcmd ($side)"
  before="$(jvm_pids)"
  # A heap dump holds the JVM's working directory, so the workload runs from
  # WORKDIR rather than the checkout.
  (cd "$WORKDIR" && run_jvm_workload heap hprof "$side" "-XX:+UsePerfData") &
  workload_pid=$!

  while ((waited < HEAP_DUMP_STARTUP_TIMEOUT)); do
    pid="$(comm -13 <(printf '%s\n' "$before") <(jvm_pids) | head -1)"
    [[ -n "$pid" ]] && break
    sleep 1
    ((waited++))
  done
  if [[ -z "$pid" ]]; then
    echo "  NO JVM started within ${HEAP_DUMP_STARTUP_TIMEOUT}s for the heap dump" >&2
    kill "$workload_pid" 2>/dev/null
    wait "$workload_pid" 2>/dev/null
    return 1
  fi

  waited=0
  while ((waited < warmup)) && kill -0 "$pid" 2>/dev/null; do
    sleep 1
    ((waited++))
  done
  if ! kill -0 "$pid" 2>/dev/null; then
    echo "  WORKLOAD exited before its ${warmup}s warmup finished, so its heap is gone" >&2
    wait "$workload_pid" 2>/dev/null
    return 1
  fi

  # -all=false collects garbage first, so the dump holds the live heap alone.
  jcmd "$pid" GC.heap_dump -all=false "$out" >&2
  local dumped=$?
  kill "$pid" "$workload_pid" 2>/dev/null
  wait "$workload_pid" 2>/dev/null
  return "$dumped"
}

# capture_fn for emit: $1=out  $2=side  $3=config  $4=extra StartFlightRecording options
capture_jdk_jfr() {
  local out=$1 side=$2 cfg=$3 extra=$4 capture
  local depth=${JDK_JFR_TRUNCATED_STACK_DEPTH[$cfg]:-$JDK_JFR_STACK_DEPTH}
  capture="$(capture_path "$out")"
  notice "Profiling $JVM_WORKLOAD using JDK Flight Recorder ($side, $extra, stackdepth=$depth)"
  run_jvm_workload "$cfg" jfr "$side" "-XX:FlightRecorderOptions:stackdepth=$depth" \
    "-XX:StartFlightRecording=filename=$capture,$extra,$JDK_JFR_PRIVACY_OPTS" \
    || return 1
  mv "$capture" "$out"
}

emit_jvm_captures() {
  local side cfg out
  for side in base current; do
    for cfg in "${AP_JFR_CONFIGS[@]}"; do
      out="$GENERATED_INPUTS/$JVM_LANGUAGE.async-profiler.$cfg.$side.jfr"
      try emit "$out" capture_ap_jfr "$side" "$cfg" "${AP_EVENT[$cfg]}"
    done

    for cfg in "${AP_COLLAPSED_CONFIGS[@]}"; do
      out="$GENERATED_INPUTS/$JVM_LANGUAGE.async-profiler.$cfg.$side.collapsed"
      try emit "$out" capture_ap_collapsed "$side" "$cfg" "${AP_COLLAPSED_OPTS[$cfg]}"
    done

    local jdk_jfr_configs=("${JDK_JFR_CONFIGS[@]}")
    if [[ -n "${JVM_TRUNCATED_JFR:-}" ]]; then
      jdk_jfr_configs+=("${JDK_JFR_TRUNCATED_CONFIGS[@]}")
    fi
    for cfg in "${jdk_jfr_configs[@]}"; do
      out="$GENERATED_INPUTS/$JVM_LANGUAGE.jdk.$cfg.$side.jfr"
      try emit "$out" capture_jdk_jfr "$side" "$cfg" "${JDK_JFR_OPTS[$cfg]}"
    done

    # Heap dumps are opt-in. A dump holds the live heap, which under the Kotlin
    # compiler and CodeNarc grows past the 100 MB input size limit, and one
    # JVM's dump already covers a format the JVM writes the same way whichever
    # language runs on it.
    if [[ -n "${JVM_HEAP_DUMP:-}" ]]; then
      try emit "$GENERATED_INPUTS/$JVM_LANGUAGE.jdk.$side.hprof" \
        capture_jdk_heap_dump "$side"
    fi
  done
}
