#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

ZSTD_REPO="https://github.com/facebook/zstd"
ZSTD_TAG="v1.5.6"
SILESIA_DICKENS_URL="https://raw.githubusercontent.com/MiloszKrajewski/SilesiaCorpus/3f3fa2cdbbb3795c903b74e774acb309e1360337/dickens.zip"

DOCKER_IMAGE="debian:bookworm-slim"
DOCKER_PLATFORM="linux/arm64"

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -n "${rundir[$role]:-}" ]]; then
    return 0
  fi
  local dir="$WORKDIR/c-$role"
  mkdir -p "$dir"

  notice "Profiling zstd with gperftools ($role)"

  # Mount the scratch dir at /out so the profiles and binary land on the host.
  docker run --rm --platform "$DOCKER_PLATFORM" \
    -v "$dir:/out" \
    -e ROLE="$role" \
    "$DOCKER_IMAGE" \
    bash -euo pipefail -c '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev \
        build-essential git ca-certificates curl unzip

      git clone --depth 1 --branch "'"$ZSTD_TAG"'" "'"$ZSTD_REPO"'" /src/zstd

      # Build the zstd CLI normally; libprofiler/libtcmalloc are activated at run
      # time via LD_PRELOAD (linking them is dropped by the default --as-needed).
      make -C /src/zstd -j"$(nproc)" zstd
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # Real compression input: the Silesia `dickens` corpus (real Dickens novel
      # text), truncated to a few MB so the capture stays small. The file inside
      # dickens.zip is named `dickens` (no extension).
      mkdir -p /work
      INPUT=/work/input.bin
      curl -sSL -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      # Extract then truncate as two steps. Piping `unzip -p` into `head -c`
      # makes head close the pipe early, killing unzip with SIGPIPE, which trips
      # `set -o pipefail`.
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 4194304 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      LIBPROFILER=$(find / -name "libprofiler.so*" 2>/dev/null | head -1)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" 2>/dev/null | head -1)

      # CPU profile: preload libprofiler and set CPUPROFILE (raw written on exit).
      # Sample at 1 kHz (vs the 100 Hz default) for a denser profile.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        "$ZSTD" -19 -f -q "$INPUT" -o /dev/null

      # Heap profile: preload tcmalloc and set HEAPPROFILE (dumps heap.NNNN.heap).
      HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=1048576 \
        "$ZSTD" -19 -f -q "$INPUT" -o /dev/null
      cp "$(ls -1 /out/heap.*.heap | sort | tail -n1)" /out/heap.raw

      # The binary is needed on the host to symbolize the raw profiles.
      cp "$ZSTD" /out/binary
    '

  # The Linux runtime libs (libc, tcmalloc, ld) can't be symbolized cross-OS, so
  # we drop those expected warnings. Real errors still surface and fail the
  # build via the exit code.
  local drop='Local symbolization failed'
  pprof -proto "$dir/binary" "$dir/cpu.raw" >"$dir/cpu.pprof" \
    2> >(grep -v "$drop" >&2 || true)
  pprof -proto "$dir/binary" "$dir/heap.raw" >"$dir/heap.pprof" \
    2> >(grep -v "$drop" >&2 || true)

  rundir[$role]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=in-container basename (cpu|heap)
copy_c_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role"
  cp "${rundir[$role]}/$name.pprof" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  emit "$FIXTURES/c.gperftools.cpu.$role.pprof"  copy_c_profile "$role" cpu
  emit "$FIXTURES/c.gperftools.heap.$role.pprof" copy_c_profile "$role" heap
done

verify_pair "$FIXTURES/c.gperftools.cpu.base.pprof"  "$FIXTURES/c.gperftools.cpu.current.pprof"
verify_pair "$FIXTURES/c.gperftools.heap.base.pprof" "$FIXTURES/c.gperftools.heap.current.pprof"
