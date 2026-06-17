#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

assets="$REPO/scripts/fixtures/assets/csharp"

app_dll=""
setup_once() {
  [[ -n "$app_dll" ]] && return 0

  notice "Building Newtonsoft.Json profile"

  local build="$WORKDIR/csharp-profile"
  mkdir -p "$build"
  cp "$assets/Profile.csproj" "$assets/Profile.cs" "$build/"
  dotnet build "$build/Profile.csproj" --configuration Release
  app_dll="$build/bin/Release/net8.0/Profile.dll"
}

# capture_fn for emit: $1=out  $2=role
capture_dotnet_trace() {
  local out=$1 role=$2
  setup_once

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
  out="$FIXTURES/csharp.dotnet-trace.$role.speedscope.json"
  emit "$out" capture_dotnet_trace "$role"
done

verify_pair \
  "$FIXTURES/csharp.dotnet-trace.base.speedscope.json" \
  "$FIXTURES/csharp.dotnet-trace.current.speedscope.json"
