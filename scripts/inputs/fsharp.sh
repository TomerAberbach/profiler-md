#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/fsharp"

app_dll=""
setup_once() {
  [[ -n "$app_dll" ]] && return 0

  notice "Building Argu profile"

  local build="$WORKDIR/fsharp-profile"
  mkdir -p "$build"
  cp "$assets/Profile.fsproj" "$assets/Profile.fs" "$build/"
  dotnet build "$build/Profile.fsproj" --configuration Release
  app_dll="$build/bin/Release/net8.0/Profile.dll"
}

# capture_fn for emit: $1=out  $2=role
capture_dotnet_trace() {
  local out=$1 role=$2
  setup_once

  notice "Profiling Argu using dotnet-trace ($role)"

  local prefix="$WORKDIR/fsharp-$role"
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
  out="$GENERATED_INPUTS/fsharp.dotnet-trace.$role.speedscope.json"
  try emit "$out" capture_dotnet_trace "$role"
done

verify_pairs

exit "$status"
