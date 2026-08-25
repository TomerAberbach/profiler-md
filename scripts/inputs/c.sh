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

# systing records through eBPF against the running kernel, which constrains
# this capture more than the others: the container must be `--privileged`,
# the kernel must expose BTF (`/sys/kernel/btf/vmlinux` — Docker Desktop's
# and any modern distro's kernels do), and the platform cannot be emulated
# (BPF programs run on the real kernel), so it uses the host's native
# architecture instead of the pinned DOCKER_PLATFORM. systing is installed
# from crates.io, which builds it from source — expect the first run to take
# a while.
systing_rundir=
run_systing() {
  if [[ -n "$systing_rundir" ]]; then
    return 0
  fi
  local dir="$WORKDIR/c-systing"
  mkdir -p "$dir"

  notice "Profiling zstd with systing (base + current; builds systing from source)"

  docker run --rm --privileged \
    -v "$dir:/out" \
    "$DOCKER_IMAGE" \
    bash -euo pipefail -c '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        build-essential git ca-certificates curl unzip \
        clang libelf-dev pkg-config bpftool

      curl -sSf https://sh.rustup.rs | sh -s -- -y --profile minimal -q
      . "$HOME/.cargo/env"
      cargo install --locked -q systing

      git clone --depth 1 --branch "'"$ZSTD_TAG"'" "'"$ZSTD_REPO"'" /src/zstd

      # Frame pointers so systing'"'"'s unwinder can walk the stack, and debug
      # info so frames carry source locations.
      make -C /src/zstd -j"$(nproc)" zstd CFLAGS="-O2 -g -fno-omit-frame-pointer"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # Real compression input: the full Silesia `dickens` corpus. At -19 it
      # outlasts the recording window, so symbolization runs while zstd is
      # still alive (systing then stops the traced command, hence `|| true`).
      mkdir -p /work
      INPUT=/work/input.bin
      curl -sSL -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >"$INPUT"

      mount -t tracefs tracefs /sys/kernel/tracing 2>/dev/null || true

      for role in base current; do
        systing --duration 12 \
          --output "/out/cpu.$role.systing" \
          --output-dir "/work/traces-$role" \
          -- "$ZSTD" -19 -f -q "$INPUT" -o /dev/null || true
        [ -s "/out/cpu.$role.systing" ]
      done
    '

  systing_rundir=$dir
}

# capture_fn for emit: $1=out  $2=role
copy_systing_profile() {
  local out=$1 role=$2
  run_systing
  cp "$systing_rundir/cpu.$role.systing" "$out"
}

# capture_fn for emit: $1=out  $2=role
#   Instruments the same zstd compression under Valgrind's Callgrind tool,
#   which writes the callgrind text format directly. Runs in its own container
#   so regenerating it skips the gperftools captures.
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
      # default level because callgrind instruments every instruction, ~50x
      # slower than native.
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

# capture_fn for emit: $1=out  $2=role
#   Records the same zstd compression with Linux perf, which writes perf.data
#   itself. Runs in its own container so regenerating it skips the other
#   captures.
capture_perf() {
  local out=$1 role=$2
  local dir="$WORKDIR/c-perf-$role"
  mkdir -p "$dir"

  notice "Profiling zstd with perf ($role)"

  # perf_event_open goes to the real kernel, so the container must be
  # `--privileged` (Docker's default seccomp profile blocks the syscall) and
  # the platform cannot be emulated. DOCKER_PLATFORM is the host's, so
  # docker_capture's default already runs natively.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        linux-perf build-essential git ca-certificates curl unzip

      # Kernel stacks need a paranoia level that permits them. Without it
      # the capture is user-space only rather than failing.
      sysctl -w kernel.perf_event_paranoid=-1 >/dev/null 2>&1 || true

      git clone --depth 1 --branch "'"$ZSTD_TAG"'" "'"$ZSTD_REPO"'" /src/zstd

      # Frame pointers so perf can walk the stack without the debug info its
      # dwarf unwinder would copy whole stacks to reach.
      make -C /src/zstd -j"$(nproc)" zstd CFLAGS="-O2 -g -fno-omit-frame-pointer"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # The same real compression input as the gperftools captures (see the
      # extraction notes there).
      mkdir -p /work
      INPUT=/work/input.bin
      curl -sSL -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 4194304 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      # cpu-clock rather than the default cycles: the VM the container runs in
      # exposes no PMU, so the hardware counter would fall back anyway.
      perf record -F 999 -e cpu-clock --call-graph fp -o /out/cpu.perf.data \
        -- "$ZSTD" -19 -f -q "$INPUT" -o /dev/null
    ' --privileged -e ROLE="$role"

  cp "$dir/cpu.perf.data" "$out"
}

# simpleperf is Android's perf, built as a static executable that runs on any
# aarch64 Linux kernel, so the Android prebuilt runs unchanged in the Debian
# container. Because gitiles serves a file's bytes base64-encoded, the asset is
# the encoded text.
SIMPLEPERF_TAG="android-16.0.0_r2"
SIMPLEPERF_B64="$REPO/scripts/inputs/assets/c/simpleperf-android-arm64-$SIMPLEPERF_TAG.b64"
SIMPLEPERF_URL="https://android.googlesource.com/platform/system/extras/+/refs/tags/$SIMPLEPERF_TAG/simpleperf/scripts/bin/android/arm64/simpleperf?format=TEXT"
SIMPLEPERF_B64_SHA256="283755306cc16085252a3ab9006a93b7977acfdca10cc0423145228386e4f862"

fetch_simpleperf() {
  fetch_asset "simpleperf $SIMPLEPERF_TAG (Android arm64 prebuilt)" \
    "$SIMPLEPERF_URL" "$SIMPLEPERF_B64_SHA256" "$SIMPLEPERF_B64"
}

# capture_fn for emit: $1=out  $2=role
#   simpleperf writes perf.data with the feature sections the parser detects
#   its origin by.
capture_simpleperf() {
  local out=$1 role=$2
  local dir="$WORKDIR/c-simpleperf-$role"
  mkdir -p "$dir" || return 1
  fetch_simpleperf || return 1
  base64 -d "$SIMPLEPERF_B64" >"$dir/simpleperf" || return 1
  chmod +x "$dir/simpleperf" || return 1

  notice "Profiling zstd with simpleperf ($role)"

  # perf_event_open reaches the host kernel, as for the `perf` capture, so the
  # container is `--privileged` and runs natively.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        build-essential git ca-certificates curl unzip procps

      sysctl -w kernel.perf_event_paranoid=-1 >/dev/null 2>&1 || true

      git clone --depth 1 --branch "'"$ZSTD_TAG"'" "'"$ZSTD_REPO"'" /src/zstd

      # Frame pointers so simpleperf can walk the stack without its dwarf
      # unwinder, whose stack copies the parser ignores.
      make -C /src/zstd -j"$(nproc)" zstd CFLAGS="-O2 -g -fno-omit-frame-pointer"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # The same real compression input as the gperftools captures (see the
      # extraction notes there).
      mkdir -p /work
      INPUT=/work/input.bin
      curl -sSL -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 4194304 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      # cpu-clock rather than the default cpu-cycles: the VM the container runs
      # in exposes no PMU.
      /out/simpleperf record -f 999 -e cpu-clock --call-graph fp \
        -o /out/cpu.perf.data -- "$ZSTD" -19 -f -q "$INPUT" -o /dev/null
      rm /out/simpleperf
    ' --privileged -e ROLE="$role" || return 1

  cp "$dir/cpu.perf.data" "$out" || return 1
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/c.gperftools.cpu.$role.pprof"  copy_c_profile "$role" cpu
  try emit "$GENERATED_INPUTS/c.gperftools.heap.$role.pprof" copy_c_profile "$role" heap
  try emit "$GENERATED_INPUTS/c.systing.cpu.$role.systing"   copy_systing_profile "$role"
  try emit "$GENERATED_INPUTS/c.valgrind.$role.callgrind"    capture_callgrind "$role"
  try emit "$GENERATED_INPUTS/c.perf.cpu.$role.perf.data"    capture_perf "$role"
  try emit "$GENERATED_INPUTS/c.simpleperf.cpu.$role.perf.data" capture_simpleperf "$role"
done

verify_pairs

exit "$status"
