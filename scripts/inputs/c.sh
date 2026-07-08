#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

ZSTD_REPO="https://github.com/facebook/zstd"
ZSTD_TAG="v1.5.6"
SILESIA_DICKENS_URL="https://raw.githubusercontent.com/MiloszKrajewski/SilesiaCorpus/3f3fa2cdbbb3795c903b74e774acb309e1360337/dickens.zip"

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
  docker_capture "$dir" '
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

      # `-print -quit` stops at the first match: no `| head` pipe whose early
      # close would SIGPIPE `find` and trip `set -o pipefail`, and faster too.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" -print -quit 2>/dev/null)

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
    ' -e ROLE="$role"

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

# capture_fn for emit: $1=out  $2=role
#   Instruments the same zstd compression under Valgrind's Callgrind tool,
#   which writes the callgrind text format directly. A separate container run
#   from the gperftools captures so regenerating one doesn't redo the other.
capture_callgrind() {
  local out=$1 role=$2
  local dir="$WORKDIR/c-callgrind-$role"
  mkdir -p "$dir"

  notice "Profiling zstd with callgrind ($role)"

  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        valgrind build-essential git ca-certificates curl unzip

      git clone --depth 1 --branch "'"$ZSTD_TAG"'" "'"$ZSTD_REPO"'" /src/zstd

      # Build with debug info so callgrind resolves function names and source
      # files/lines rather than raw addresses.
      make -C /src/zstd -j"$(nproc)" zstd MOREFLAGS="-g"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # The same real compression input as the gperftools captures (see the
      # extraction notes there), truncated further and compressed at the
      # default level because callgrind instruments every instruction (~50x
      # slower than native).
      mkdir -p /work
      INPUT=/work/input.bin
      curl -sSL -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 1048576 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      valgrind --tool=callgrind --callgrind-out-file=/out/callgrind.out \
        "$ZSTD" -3 -f -q "$INPUT" -o /dev/null
    ' -e ROLE="$role"

  cp "$dir/callgrind.out" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/c.gperftools.cpu.$role.pprof"  copy_c_profile "$role" cpu
  try emit "$GENERATED_INPUTS/c.gperftools.heap.$role.pprof" copy_c_profile "$role" heap
  try emit "$GENERATED_INPUTS/c.valgrind.$role.callgrind"    capture_callgrind "$role"
done

verify_pairs

exit "$status"
