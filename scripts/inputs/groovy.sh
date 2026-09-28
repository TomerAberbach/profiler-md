#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh
source scripts/inputs/_jvm.sh

JVM_LANGUAGE=groovy
JVM_WORKLOAD="CodeNarc analysis of Spock"

# CodeNarc's `-all` jar bundles Groovy, GMetrics, and SLF4J, so it runs
# self-contained under plain `java`. Base and current profile consecutive
# CodeNarc releases, so a diff compares two versions of the same code.
declare -A CODENARC_VERSION=([base]="3.6.0-groovy-4.0" [current]="3.7.0-groovy-4.0")
declare -A CODENARC_SHA256=(
  [base]="3f63f87a3880f49b2d29cea62070b6347ebd5a1a7aa0f56d2ef8aa9d1c9db528"
  [current]="860f91195072b67ab94f9b9e46c9e4b945df8ad64668b901789d6c530958d806"
)

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

# -failOn stays unset, so CodeNarc exits 0 despite the thousands of violations
# it reports on Spock.
#
# The nativemem, cpu-threads-ann-sig, and collapsed alloc captures analyze one
# small module with one ruleset to keep the output under the 100 MB input size
# limit. The nativemem capture records every malloc/free, and even CodeNarc's
# startup (loading its ~350 rule classes and the Groovy runtime) emits ~80 MB of
# events. The cpu-threads-ann-sig capture roots each stack at its thread and
# appends method signatures, multiplying CodeNarc's distinct stacks. A full
# collapsed alloc capture writes ~585 MB.
run_jvm_workload() {
  local jvm_arg=$1 cfg=$2 ext=$3 role=$4 includes rulesets
  local version=${CODENARC_VERSION[$role]}
  local jar="$REPO/scripts/inputs/assets/groovy/CodeNarc-$version-all.jar"
  fetch_asset "CodeNarc $version all jar" \
    "https://repo1.maven.org/maven2/org/codenarc/CodeNarc/$version/CodeNarc-$version-all.jar" \
    "${CODENARC_SHA256[$role]}" "$jar" || return 1
  # The JVM's command line names the jar, and a recording holds the command
  # line, so the jar runs from WORKDIR rather than the checkout.
  cp "$jar" "$WORKDIR/codenarc.jar" || return 1
  jar="$WORKDIR/codenarc.jar"
  ensure_spock || return 1
  if [[ "$cfg" == nativemem || "$cfg" == cpu-threads-ann-sig \
    || ("$cfg" == alloc* && "$ext" == collapsed) ]]; then
    includes='spock-core/**/*.groovy'
    rulesets=rulesets/basic.xml
  else
    includes='**/*.groovy'
    rulesets="$(IFS=,; echo "${RULESETS[*]}")"
  fi
  java "$jvm_arg" -jar "$jar" \
    -basedir="$spock_source" \
    -includes="$includes" \
    -rulesetfiles="$rulesets" \
    -report=text:stdout
}

emit_jvm_captures
verify_pairs

exit "$status"
