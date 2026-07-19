#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh
source scripts/inputs/_jvm.sh

JVM_LANGUAGE=kotlin
JVM_WORKLOAD="kotlin-result compilation"

KOTLIN_RESULT_REPO=https://github.com/michaelbull/kotlin-result
KOTLIN_RESULT_TAG=2.3.1

source=""
ensure_source() {
  [[ -n "$source" ]] && return 0
  local dir="$WORKDIR/kotlin-result"
  notice "Cloning kotlin-result ($KOTLIN_RESULT_TAG)"
  git clone --depth 1 --branch "$KOTLIN_RESULT_TAG" "$KOTLIN_RESULT_REPO" "$dir" >&2 \
    || return 1

  # commonMain/Binding.kt declares `expect class BindingException` (its `actual`
  # lives in jvmMain). Stock `kotlinc` can't compile expect/actual in a single
  # non-multiplatform invocation, and that file is the ONLY user of the binding
  # feature in commonMain (nothing else references it), so compile a copy of
  # commonMain with Binding.kt removed.
  local common="$dir/kotlin-result/src/commonMain/kotlin"
  local src="$WORKDIR/kotlin-src"
  rm -rf "$src"
  cp -r "$common" "$src" || return 1
  rm -f "$src/com/github/michaelbull/result/Binding.kt" || return 1
  source="$src"
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

# Compile the kotlin-result source into a fresh scratch dir, forwarding the JVM
# arg via -J to the kotlinc launcher. Each capture is its own short-lived
# compiler process.
run_jvm_workload() {
  local jvm_arg=$1 dir
  ensure_source || return 1
  dir="$(mktemp -d "$WORKDIR/kotlinc.XXXXXX")" || return 1
  local opt_in_flags=()
  local fqn
  for fqn in "${OPT_INS[@]}"; do opt_in_flags+=("-opt-in=$fqn"); done
  kotlinc "${opt_in_flags[@]}" "${FREE_COMPILER_ARGS[@]}" "-J$jvm_arg" -d "$dir" "$source"
}

emit_jvm_captures
verify_pairs

exit "$status"
