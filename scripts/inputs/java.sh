#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh
source scripts/inputs/_jvm.sh

JVM_LANGUAGE=java
JVM_WORKLOAD=Renaissance

# Base and current profile consecutive Renaissance releases, so a diff compares
# two versions of the same code.
declare -A RENAISSANCE_VERSION=([base]="0.15.0" [current]="0.16.0")
declare -A RENAISSANCE_SHA256=(
  [base]="a3a85f16cdf6c4b7e58c13c41c38f30ca4ca661442d276e17fc612c07ca55a32"
  [current]="02cbebf14a886632a6387722365c0c9ec6f0954474254d15319600822e468361"
)

REPETITIONS=4

JVM_HEAP_DUMP=1

# The heap dump is taken from a running JVM, so its run is bounded by wall-clock
# time rather than repetitions and outlives the warmup below on any machine.
HEAP_DUMP_RUN_SECONDS=60
JVM_HEAP_DUMP_WARMUP=25

# fj-kmeans clusters 500,000 vectors by default, a live heap of ~85 MB that
# dumps to a file near GitHub's 100 MB limit. The heap capture clusters 100,000
# of them, which is the same workload over a fifth of the data.
HEAP_DUMP_VECTOR_LENGTH=100000

# From 0.16, fj-kmeans validates its cluster centers against ones computed for
# the default vector length, so the heap capture overrides them with the
# centers its vector length converges to.
declare -A HEAP_DUMP_EXPECTED_POINTS=(
  [current]="coordinate0, coordinate1, coordinate2, coordinate3, coordinate4;0.24992170287227722, 0.6492727870058589, 1.0511945345078835, 0.44934561868989414, 0.8493923661524304;0.45053931565868804, 0.8509558480737087, 0.24883125081337304, 0.6519977831993364, 1.049698185913669;0.6491151977765435, 1.0506295357745101, 0.44988652172175025, 0.8501008597770866, 0.251657845682231;0.8484528634024726, 0.25014989114637026, 0.6502588078986579, 1.0511308356593196, 0.4518147524365666;1.0502066590081758, 0.4503247351008006, 0.8499705067648112, 0.2505385829218838, 0.6508093545303877;"
)

run_jvm_workload() {
  local jvm_arg=$1 cfg=$2 role=$4
  local version=${RENAISSANCE_VERSION[$role]}
  local jar="$REPO/scripts/inputs/assets/java/renaissance-mit-$version.jar"
  fetch_asset "Renaissance $version jar" \
    "https://github.com/renaissance-benchmarks/renaissance/releases/download/v$version/renaissance-mit-$version.jar" \
    "${RENAISSANCE_SHA256[$role]}" "$jar" || return 1
  # The JVM's command line names the jar, and a recording holds the command
  # line, so the jar runs from WORKDIR rather than the checkout.
  cp "$jar" "$WORKDIR/renaissance.jar" || return 1
  jar="$WORKDIR/renaissance.jar"
  if [[ "$cfg" == heap ]]; then
    local overrides=(-o "vector_length=$HEAP_DUMP_VECTOR_LENGTH")
    if [[ -n "${HEAP_DUMP_EXPECTED_POINTS[$role]:-}" ]]; then
      overrides+=(-o "expected_points=${HEAP_DUMP_EXPECTED_POINTS[$role]}")
    fi
    java "$jvm_arg" -jar "$jar" \
      --scratch-base "$WORKDIR" \
      "${overrides[@]}" \
      -t "$HEAP_DUMP_RUN_SECONDS" fj-kmeans
    return
  fi
  java "$jvm_arg" -jar "$jar" \
    --scratch-base "$WORKDIR" -r "$REPETITIONS" fj-kmeans
}

emit_jvm_captures
verify_pairs

exit "$status"
