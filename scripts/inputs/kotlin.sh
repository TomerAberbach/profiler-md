#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

KOTLIN_RESULT_REPO=https://github.com/michaelbull/kotlin-result
KOTLIN_RESULT_TAG=2.3.1

source=""
ensure_source() {
  [[ -n "$source" ]] && return 0
  local dir="$WORKDIR/kotlin-result"
  notice "Cloning kotlin-result ($KOTLIN_RESULT_TAG)"
  git clone --depth 1 --branch "$KOTLIN_RESULT_TAG" "$KOTLIN_RESULT_REPO" "$dir" >&2

  # commonMain/Binding.kt declares `expect class BindingException` (its `actual`
  # lives in jvmMain). Stock `kotlinc` can't compile expect/actual in a single
  # non-multiplatform invocation, and that file is the ONLY user of the binding
  # feature in commonMain (nothing else references it), so compile a copy of
  # commonMain with Binding.kt removed.
  local common="$dir/kotlin-result/src/commonMain/kotlin"
  source="$WORKDIR/kotlin-src"
  rm -rf "$source"
  cp -r "$common" "$source"
  rm -f "$source/com/github/michaelbull/result/Binding.kt"
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

# kotlin-result's core source uses experimental contracts.
OPT_INS=(
  kotlin.contracts.ExperimentalContracts
  com.github.michaelbull.result.annotation.UnsafeResultValueAccess
  com.github.michaelbull.result.annotation.UnsafeResultErrorAccess
)
# Free compiler args the library's convention plugin sets.
FREE_COMPILER_ARGS=(
  -Xreturn-value-checker=full
  -Xexpect-actual-classes
)

# Compile the kotlin-result source into a fresh scratch dir, passing through one
# JVM arg to the kotlinc launcher. Each capture is its own short-lived compiler
# process.
# $1 = JVM arg to forward via -J (the agent or StartFlightRecording option).
run_kotlinc() {
  local jvm_arg=$1 dir
  ensure_source
  dir="$(mktemp -d "$WORKDIR/kotlinc.XXXXXX")"
  local opt_in_flags=()
  local fqn
  for fqn in "${OPT_INS[@]}"; do opt_in_flags+=("-opt-in=$fqn"); done
  kotlinc "${opt_in_flags[@]}" "${FREE_COMPILER_ARGS[@]}" "-J$jvm_arg" -d "$dir" "$source"
}

# capture_fn for emit: $1=out  $2=role  $3=event-spec
capture_ap_jfr() {
  local out=$1 role=$2 event_spec=$3 lib
  lib="$(async_profiler_lib)"
  notice "Profiling kotlin-result compilation using async-profiler JFR ($role, $event_spec)"
  run_kotlinc "-agentpath:$lib=start,$event_spec,file=$out,jfr"
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

# capture_fn for emit: $1=out  $2=role
capture_ap_collapsed() {
  local out=$1 role=$2 lib
  lib="$(async_profiler_lib)"
  notice "Profiling kotlin-result compilation using async-profiler JFR ($role, cpu)"
  run_kotlinc "-agentpath:$lib=start,event=cpu,file=$out,collapsed"
}

# capture_fn for emit: $1=out  $2=role  $3=extra StartFlightRecording options
capture_jdk_jfr() {
  local out=$1 role=$2 extra=$3
  notice "Profiling kotlin-result compilation using JDK Flight Recorder ($role, $extra)"
  run_kotlinc "-XX:StartFlightRecording=filename=$out,$extra"
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
    out="$GENERATED_INPUTS/kotlin.async-profiler.$cfg.$role.jfr"
    try emit "$out" capture_ap_jfr "$role" "${AP_JFR_EVENT[$cfg]}"
  done

  # async-profiler -> collapsed
  try emit "$GENERATED_INPUTS/kotlin.async-profiler.cpu.$role.collapsed" capture_ap_collapsed "$role"

  # JDK Flight Recorder -> JFR
  for cfg in "${JDK_JFR_CONFIGS[@]}"; do
    out="$GENERATED_INPUTS/kotlin.jdk.$cfg.$role.jfr"
    try emit "$out" capture_jdk_jfr "$role" "${JDK_JFR_OPTS[$cfg]}"
  done
done

verify_pairs

exit "$status"
