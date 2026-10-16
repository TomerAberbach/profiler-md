#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/fsharp"

# Base and current profile consecutive Argu releases, so a diff compares
# two versions of the same code.
declare -A ARGU_VERSION=([base]="6.2.4" [current]="6.2.5")

# Each side builds in one directory, so both record the same paths.
app_dll="$WORKDIR/fsharp-profile/bin/Release/net8.0/Profile.dll"
build_for_side() {
  local side=$1
  notice "Building Argu ${ARGU_VERSION[$side]} profile"

  local build="$WORKDIR/fsharp-profile"
  rm -rf "$build"
  mkdir -p "$build"
  cp "$assets/Profile.fsproj" "$assets/Profile.fs" "$build/"
  dotnet build "$build/Profile.fsproj" --configuration Release \
    -p:ArguVersion="${ARGU_VERSION[$side]}"
}

# capture_fn for emit: $1=out  $2=side
capture_dotnet_trace() {
  local out=$1 side=$2
  build_for_side "$side" || return 1

  notice "Profiling Argu using dotnet-trace ($side)"

  local prefix="$WORKDIR/fsharp-$side"
  dotnet-trace collect \
    --format speedscope \
    -o "$prefix.nettrace" \
    -- \
    dotnet "$app_dll"

  local produced
  produced=$(ls "$prefix"*.speedscope.json 2>/dev/null | head -1)
  [[ -n "$produced" ]] || { echo "  No speedscope output from dotnet-trace" >&2; return 1; }
  mv "$produced" "$out"
}

for side in base current; do
  out="$GENERATED_INPUTS/fsharp.dotnet-trace.$side.speedscope.json"
  try emit "$out" capture_dotnet_trace "$side"
done

verify_pairs

exit "$status"
