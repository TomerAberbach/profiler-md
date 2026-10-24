#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

ZOD_REPO="https://github.com/colinhacks/zod"
# Base and current trace the type-check of consecutive zod releases, so a diff
# compares two versions of the same code.
declare -A ZOD_TAG=([base]="v3.23.7" [current]="v3.23.8")
TYPESCRIPT_VERSION=5.5.4
# tsc records absolute paths, so it runs in a container, where zod is at
# /src/zod on every machine.
DOCKER_IMAGE="node:22.12.0-bookworm-slim"

# capture_fn for emit: $1=out  $2=side
capture_tsc_trace() {
  local out=$1 side=$2
  local dir="$WORKDIR/typescript-tsc-$side"
  mkdir -p "$dir" || return 1

  notice "Tracing zod type-check using tsc ($side)"

  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends git ca-certificates

      git clone --depth 1 --branch "'"${ZOD_TAG[$side]}"'" "'"$ZOD_REPO"'" /src/zod

      # The pinned TypeScript is newer than the range the devDependencies of
      # zod peer depend on, so the install skips peer resolution.
      npm install --prefix /src/zod --no-save --no-audit --no-fund \
        --legacy-peer-deps "typescript@'"$TYPESCRIPT_VERSION"'"

      # tsc writes trace.json and types.json to the directory.
      node /src/zod/node_modules/typescript/bin/tsc -p /src/zod --noEmit \
        --generateTrace /out/trace
    ' || return 1

  cp "$dir/trace/trace.json" "$out" || return 1
}

ensure_docker

for side in base current; do
  try emit "$GENERATED_INPUTS/typescript.tsc.$side.trace-event.json" capture_tsc_trace "$side"
done

verify_pairs

exit "$status"
