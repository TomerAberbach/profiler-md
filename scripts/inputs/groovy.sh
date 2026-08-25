#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh
source scripts/inputs/_jvm.sh

JVM_LANGUAGE=groovy
JVM_WORKLOAD="CodeNarc analysis of Spock"

# CodeNarc's `-all` jar bundles Groovy, GMetrics, and SLF4J, so it runs
# self-contained under plain `java`.
CODENARC_VERSION="3.7.0-groovy-4.0"
CODENARC_JAR="$REPO/scripts/inputs/assets/groovy/CodeNarc-$CODENARC_VERSION-all.jar"
CODENARC_URL="https://repo1.maven.org/maven2/org/codenarc/CodeNarc/$CODENARC_VERSION/CodeNarc-$CODENARC_VERSION-all.jar"
CODENARC_SHA256="860f91195072b67ab94f9b9e46c9e4b945df8ad64668b901789d6c530958d806"

SPOCK_REPO="https://github.com/spockframework/spock"
SPOCK_TAG="spock-2.3"

RULESETS=(
  rulesets/basic.xml
  rulesets/braces.xml
  rulesets/convention.xml
  rulesets/design.xml
  rulesets/dry.xml
  rulesets/exceptions.xml
  rulesets/formatting.xml
  rulesets/groovyism.xml
  rulesets/imports.xml
  rulesets/naming.xml
  rulesets/size.xml
  rulesets/unnecessary.xml
  rulesets/unused.xml
)

spock_source=""
ensure_spock() {
  [[ -n "$spock_source" ]] && return 0
  local dir="$WORKDIR/spock"
  notice "Cloning Spock ($SPOCK_TAG)"
  git clone --depth 1 --branch "$SPOCK_TAG" "$SPOCK_REPO" "$dir" >&2 || return 1
  spock_source="$dir"
}

# Run CodeNarc analyzing Spock's Groovy sources, passing one JVM arg through
# (the agent or StartFlightRecording option). CodeNarc reports thousands of
# violations on a real codebase; that's expected, so -failOn stays unset and
# the CLI exits 0 regardless of violations.
#
# Two configs analyze one small module with one ruleset to keep the output
# under the 100 MB input size limit. The nativemem capture records every
# malloc/free, and even CodeNarc's startup (loading its ~350 rule classes and
# the Groovy runtime) emits ~80 MB of events. The cpu-threads-ann-sig capture
# roots each stack at its thread and appends method signatures, which
# multiplies CodeNarc's distinct stacks.
run_jvm_workload() {
  local jvm_arg=$1 cfg=$2 includes rulesets
  fetch_asset "CodeNarc $CODENARC_VERSION all jar" \
    "$CODENARC_URL" "$CODENARC_SHA256" "$CODENARC_JAR" || return 1
  ensure_spock || return 1
  if [[ "$cfg" == nativemem || "$cfg" == cpu-threads-ann-sig ]]; then
    includes='spock-core/**/*.groovy'
    rulesets=rulesets/basic.xml
  else
    includes='**/*.groovy'
    rulesets="$(IFS=,; echo "${RULESETS[*]}")"
  fi
  java "$jvm_arg" -jar "$CODENARC_JAR" \
    -basedir="$spock_source" \
    -includes="$includes" \
    -rulesetfiles="$rulesets" \
    -report=text:stdout
}

emit_jvm_captures
verify_pairs

exit "$status"
