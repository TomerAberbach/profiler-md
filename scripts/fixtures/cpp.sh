#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

FMT_REPO="https://github.com/fmtlib/fmt"
FMT_TAG="11.2.0"

DOCKER_IMAGE="debian:bookworm-slim"
DOCKER_PLATFORM="linux/arm64"

profile="$REPO/scripts/fixtures/assets/cpp/profile.cpp"

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -n "${rundir[$role]:-}" ]]; then
    return 0
  fi
  local dir="$WORKDIR/cpp-$role"
  mkdir -p "$dir"
  # Stage the harness where the container can see it.
  cp "$profile" "$dir/profile.cpp"

  notice "Profiling fmt with gperftools ($role)"

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
        build-essential git ca-certificates

      git clone --depth 1 --branch "'"$FMT_TAG"'" "'"$FMT_REPO"'" /src/fmt

      # Compile the harness against header-only {fmt}. -g gives the host pprof
      # line/inline info to symbolize fmt frames.
      g++ -O2 -g -std=c++17 -DFMT_HEADER_ONLY -I /src/fmt/include \
        /out/profile.cpp -o /out/binary

      LIBPROFILER=$(find / -name "libprofiler.so*" 2>/dev/null | head -1)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" 2>/dev/null | head -1)

      # CPU profile: preload libprofiler and set CPUPROFILE. Sample at 1 kHz (vs
      # the 100 Hz default) for a denser profile. Single process, so no children
      # inherit the preload.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        /out/binary

      # Heap profile: preload tcmalloc and set HEAPPROFILE (dumps heap.NNNN.heap).
      HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=1048576 \
        /out/binary
      cp "$(ls -1 /out/heap.*.heap | sort | tail -n1)" /out/heap.raw
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
copy_cpp_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role"
  cp "${rundir[$role]}/$name.pprof" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  emit "$FIXTURES/cpp.gperftools.cpu.$role.pprof"  copy_cpp_profile "$role" cpu
  emit "$FIXTURES/cpp.gperftools.heap.$role.pprof" copy_cpp_profile "$role" heap
done

verify_pair "$FIXTURES/cpp.gperftools.cpu.base.pprof"  "$FIXTURES/cpp.gperftools.cpu.current.pprof"
verify_pair "$FIXTURES/cpp.gperftools.heap.base.pprof" "$FIXTURES/cpp.gperftools.heap.current.pprof"
