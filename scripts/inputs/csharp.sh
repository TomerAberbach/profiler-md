#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/csharp"

# Base and current profile consecutive Newtonsoft.Json releases, so a diff compares
# two versions of the same code.
declare -A NEWTONSOFT_JSON_VERSION=([base]="13.0.3" [current]="13.0.4")

# Each role builds in one directory, so both record the same paths.
app_dll="$WORKDIR/csharp-profile/bin/Release/net8.0/Profile.dll"
build_for_role() {
  local role=$1
  notice "Building Newtonsoft.Json ${NEWTONSOFT_JSON_VERSION[$role]} profile"

  local build="$WORKDIR/csharp-profile"
  rm -rf "$build"
  mkdir -p "$build"
  cp "$assets/Profile.csproj" "$assets/Profile.cs" "$build/"
  dotnet build "$build/Profile.csproj" --configuration Release \
    -p:NewtonsoftJsonVersion="${NEWTONSOFT_JSON_VERSION[$role]}"
}

# capture_fn for emit: $1=out  $2=role
capture_dotnet_trace() {
  local out=$1 role=$2
  build_for_role "$role" || return 1

  notice "Profiling Newtonsoft.Json using dotnet-trace ($role)"

  local prefix="$WORKDIR/csharp-$role"
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

for role in base current; do
  out="$GENERATED_INPUTS/csharp.dotnet-trace.$role.speedscope.json"
  try emit "$out" capture_dotnet_trace "$role"
done

verify_pairs

exit "$status"
