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

run_jvm_workload() {
  local jvm_arg=$1
  fetch_asset "Renaissance $RENAISSANCE_VERSION jar" \
    "$RENAISSANCE_URL" "$RENAISSANCE_SHA256" "$RENAISSANCE_JAR" || return 1
  java "$jvm_arg" -jar "$RENAISSANCE_JAR" \
    --scratch-base "$WORKDIR" -r "$REPETITIONS" fj-kmeans
}

emit_jvm_captures
verify_pairs

exit "$status"
