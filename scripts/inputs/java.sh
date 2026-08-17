#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh
source scripts/inputs/_jvm.sh

JVM_LANGUAGE=java
JVM_WORKLOAD=Renaissance

RENAISSANCE_VERSION="0.15.0"
RENAISSANCE_JAR="$REPO/scripts/inputs/assets/java/renaissance-mit-$RENAISSANCE_VERSION.jar"
RENAISSANCE_URL="https://github.com/renaissance-benchmarks/renaissance/releases/download/v$RENAISSANCE_VERSION/renaissance-mit-$RENAISSANCE_VERSION.jar"
RENAISSANCE_SHA256="a3a85f16cdf6c4b7e58c13c41c38f30ca4ca661442d276e17fc612c07ca55a32"

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

run_jvm_workload() {
  local jvm_arg=$1 cfg=$2
  fetch_asset "Renaissance $RENAISSANCE_VERSION jar" \
    "$RENAISSANCE_URL" "$RENAISSANCE_SHA256" "$RENAISSANCE_JAR" || return 1
  if [[ "$cfg" == heap ]]; then
    java "$jvm_arg" -jar "$RENAISSANCE_JAR" \
      --scratch-base "$WORKDIR" \
      -o "vector_length=$HEAP_DUMP_VECTOR_LENGTH" \
      -t "$HEAP_DUMP_RUN_SECONDS" fj-kmeans
    return
  fi
  java "$jvm_arg" -jar "$RENAISSANCE_JAR" \
    --scratch-base "$WORKDIR" -r "$REPETITIONS" fj-kmeans
}

emit_jvm_captures
verify_pairs

exit "$status"
