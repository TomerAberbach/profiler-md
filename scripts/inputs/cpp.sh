#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

FMT_REPO="https://github.com/fmtlib/fmt"
FMT_TAG="11.2.0"

profile="$REPO/scripts/inputs/assets/cpp/profile.cpp"

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

  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev \
        build-essential git ca-certificates

      git clone --depth 1 --branch "'"$FMT_TAG"'" "'"$FMT_REPO"'" /src/fmt

      # -g gives the host pprof line and inline info to symbolize fmt frames.
      g++ -O2 -g -std=c++17 -DFMT_HEADER_ONLY -I /src/fmt/include \
        /out/profile.cpp -o /out/binary

      # `-print -quit` stops at the first match: no `| head` pipe whose early
      # close would SIGPIPE `find` and trip `set -o pipefail`, and faster too.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" -print -quit 2>/dev/null)

      # 1 kHz sampling, against the 100 Hz default, gives a denser profile. The
      # harness is a single process, so no children inherit the preload.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        /out/binary

      # tcmalloc dumps numbered heap.NNNN.heap files.
      HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=1048576 \
        /out/binary
      cp "$(ls -1 /out/heap.*.heap | sort | tail -n1)" /out/heap.raw
    ' -e ROLE="$role"

  # pprof can't symbolize the Linux runtime libraries (libc, tcmalloc, ld) on
  # another OS, so drop those expected warnings. Other errors still print and
  # fail the capture through the exit code.
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

# capture_fn for emit: $1=out  $2=role
#   Runs in its own container, so regenerating it skips the gperftools
#   captures.
capture_perf() {
  local out=$1 role=$2
  local dir="$WORKDIR/cpp-perf-$role"
  mkdir -p "$dir"
  cp "$profile" "$dir/profile.cpp"

  notice "Profiling fmt with perf ($role)"

  # perf_event_open goes to the real kernel, so the container must be
  # `--privileged` (Docker's default seccomp profile blocks the syscall) and
  # the platform cannot be emulated. DOCKER_PLATFORM is the host's, so
  # docker_capture's default already runs natively.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        linux-perf build-essential git ca-certificates

      # Kernel stacks need a paranoia level that permits them. Without it
      # the capture is user-space only rather than failing.
      sysctl -w kernel.perf_event_paranoid=-1 >/dev/null 2>&1 || true

      git clone --depth 1 --branch "'"$FMT_TAG"'" "'"$FMT_REPO"'" /src/fmt

      # Frame pointers so perf can walk the stack without the debug info its
      # dwarf unwinder would copy whole stacks to reach.
      g++ -O2 -g -fno-omit-frame-pointer -std=c++17 -DFMT_HEADER_ONLY \
        -I /src/fmt/include /out/profile.cpp -o /tmp/binary

      # cpu-clock rather than the default cycles: the VM the container runs in
      # exposes no PMU, so the hardware counter would fall back anyway.
      perf record -F 999 -e cpu-clock --call-graph fp -o /out/cpu.perf.data \
        -- /tmp/binary
    ' --privileged -e ROLE="$role"

  cp "$dir/cpu.perf.data" "$out"
}

ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/cpp.gperftools.cpu.$role.pprof"  copy_cpp_profile "$role" cpu
  try emit "$GENERATED_INPUTS/cpp.gperftools.heap.$role.pprof" copy_cpp_profile "$role" heap
  try emit "$GENERATED_INPUTS/cpp.perf.cpu.$role.perf.data"    capture_perf "$role"
done

verify_pairs

exit "$status"
