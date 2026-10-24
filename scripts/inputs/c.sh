#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

ZSTD_REPO="https://github.com/facebook/zstd"
# Base and current profile consecutive zstd releases, so a diff compares two
# versions of the same code.
declare -A ZSTD_TAG=([base]="v1.5.6" [current]="v1.5.7")
# systing is not published to crates.io, so cargo installs it from its repository.
SYSTING_TAG="v1.13.14"
# Debian 13 packages clang 19, and DOCKER_IMAGE's Debian 12 packages clang 14.
CLANG_DOCKER_IMAGE="debian:trixie-slim"
SILESIA_DICKENS_URL="https://raw.githubusercontent.com/MiloszKrajewski/SilesiaCorpus/3f3fa2cdbbb3795c903b74e774acb309e1360337/dickens.zip"

declare -A rundir=()
run_for_side() {
  local side=$1
  if [[ -n "${rundir[$side]:-}" ]]; then
    return 0
  fi
  local dir="$WORKDIR/c-$side"
  mkdir -p "$dir"

  stage_container_pprof "$dir" || return 1

  notice "Profiling zstd with gperftools ($side)"

  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev llvm \
        build-essential git ca-certificates curl unzip

      git clone --depth 1 --branch "'"${ZSTD_TAG[$side]}"'" "'"$ZSTD_REPO"'" /src/zstd

      # libprofiler and libtcmalloc load through LD_PRELOAD at run time, because
      # the default --as-needed drops them from the link.
      make -C /src/zstd -j"$(nproc)" zstd
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # The `dickens` text of the Silesia corpus, truncated to a few MB so the
      # capture stays small.
      mkdir -p /work
      INPUT=/work/input.bin
      curl -fsSL --retry 5 -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
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

      # 1 kHz sampling, against the 100 Hz default, gives a denser profile.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        "$ZSTD" -19 -f -q "$INPUT" -o /dev/null

      # tcmalloc dumps numbered heap.NNNN.heap files.
      # libc lacks frame pointers, so the default frame pointer walk continues
      # past the program'"'"'s entry into invalid frames. The libgcc unwinder reads
      # unwind tables instead, so it walks through libc.
      TCMALLOC_STACKTRACE_METHOD=libgcc HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=1048576 \
        "$ZSTD" -19 -f -q "$INPUT" -o /dev/null
      cp "$(ls -1 /out/heap.*.heap | sort | tail -n1)" /out/heap.raw

      cp "$ZSTD" /out/binary

      # pprof symbolizes against the files the profiles map, and the runtime
      # libraries among them exist only in this container. pprof cannot
      # symbolize the kernel'"'"'s pseudo-mappings, such as [vdso], so the grep
      # drops its warnings about them. pprof prefers llvm-symbolizer, which
      # reports an unknown file as empty. addr2line reports `??:?`, which pprof
      # keeps as a file name (https://github.com/google/pprof/issues/1044).
      for name in cpu heap; do
        /out/pprof -proto /out/binary "/out/$name.raw" >"/out/$name.pprof" \
          2> >(grep -v "Local symbolization failed for \[" >&2 || true)
      done
    ' -e SIDE="$side"

  rundir[$side]=$dir
}

# capture_fn for emit: $1=out  $2=side  $3=in-container basename (cpu|heap)
copy_c_profile() {
  local out=$1 side=$2 name=$3
  run_for_side "$side"
  cp "${rundir[$side]}/$name.pprof" "$out"
}

# systing records through eBPF against the running kernel. The container must
# be `--privileged`, and the kernel must expose BTF (`/sys/kernel/btf/vmlinux`,
# as Docker Desktop's and modern distributions' kernels do). BPF programs run on
# the real kernel, so the platform cannot be emulated, and the capture uses the
# host's native architecture instead of the pinned DOCKER_PLATFORM. The
# container shares the host's pid namespace because systing filters samples by
# the traced command's pid as the kernel numbers it, and a container's own
# namespace renumbers it, leaving the recording without call stacks.
systing_rundir=
run_systing() {
  if [[ -n "$systing_rundir" ]]; then
    return 0
  fi
  local dir="$WORKDIR/c-systing"
  mkdir -p "$dir"

  notice "Profiling zstd with systing (base + current; builds systing from source)"

  docker run --rm --privileged --pid=host \
    -v "$dir:/out" \
    -e SYSTING_TAG="$SYSTING_TAG" \
    -e ZSTD_TAG_base="${ZSTD_TAG[base]}" -e ZSTD_TAG_current="${ZSTD_TAG[current]}" \
    "$DOCKER_IMAGE" \
    bash -euo pipefail -c '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        build-essential git ca-certificates curl unzip \
        clang libelf-dev pkg-config bpftool

      # systing builds its BPF skeletons with rustfmt, which the minimal
      # profile excludes.
      curl -sSf --retry 5 https://sh.rustup.rs | sh -s -- -y --profile minimal -c rustfmt -q
      . "$HOME/.cargo/env"
      # The generated Perfetto protobuf crate and DuckDB compiling side by side
      # exhaust the memory Docker allocates to its VM.
      cargo install -j 2 --locked -q --git https://github.com/josefbacik/systing.git \
        --tag "$SYSTING_TAG" systing

      # Frame pointers so systing'"'"'s unwinder can walk the stack, and debug
      # info so frames carry source locations. Each side builds in /src/zstd,
      # so both binaries record the same source paths.
      mkdir -p /work
      for side in base current; do
        tag=ZSTD_TAG_$side
        rm -rf /src/zstd
        git clone --depth 1 --branch "${!tag}" "'"$ZSTD_REPO"'" /src/zstd
        make -C /src/zstd -j"$(nproc)" zstd CFLAGS="-O2 -g -fno-omit-frame-pointer"
        ZSTD=/src/zstd/zstd
        [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd
        cp "$ZSTD" "/work/zstd-$side"
      done

      # systing symbolizes against the live process when the recording window
      # closes, and a command that has exited leaves every frame
      # `unknown ([exited])`. At -19 the input must outlast the window. systing
      # then stops the traced command, hence `|| true`.
      INPUT=/work/input.bin
      curl -fsSL --retry 5 -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      for _ in 1 2 3 4; do cat /work/dickens.full >>"$INPUT"; done
      rm -f /work/dickens.full

      mount -t tracefs tracefs /sys/kernel/tracing 2>/dev/null || true

      # Both sides run from one path, so their frames name the same binary.
      for side in base current; do
        cp "/work/zstd-$side" /work/zstd
        systing --duration 12 \
          --output "/out/cpu.$side.systing" \
          --output-dir "/work/traces-$side" \
          -- /work/zstd -19 -f -q "$INPUT" -o /dev/null || true
        [ -s "/out/cpu.$side.systing" ]
      done
    '

  systing_rundir=$dir
}

# capture_fn for emit: $1=out  $2=side
copy_systing_profile() {
  local out=$1 side=$2
  run_systing
  cp "$systing_rundir/cpu.$side.systing" "$out"
}

# capture_fn for emit: $1=out  $2=side
#   Runs in its own container, so regenerating it skips the gperftools
#   captures.
capture_callgrind() {
  local out=$1 side=$2
  local dir="$WORKDIR/c-callgrind-$side"
  mkdir -p "$dir"

  notice "Profiling zstd with callgrind ($side)"

  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        valgrind build-essential git ca-certificates curl unzip

      git clone --depth 1 --branch "'"${ZSTD_TAG[$side]}"'" "'"$ZSTD_REPO"'" /src/zstd

      # Build with debug info so callgrind resolves function names and source
      # files/lines rather than raw addresses.
      make -C /src/zstd -j"$(nproc)" zstd MOREFLAGS="-g"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # Extracted in two steps as in run_for_side, then truncated further and
      # compressed at the default level, because callgrind instruments every
      # instruction, ~50x slower than native.
      mkdir -p /work
      INPUT=/work/input.bin
      curl -fsSL --retry 5 -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 1048576 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      valgrind --tool=callgrind --callgrind-out-file=/out/callgrind.out \
        "$ZSTD" -3 -f -q "$INPUT" -o /dev/null
    ' -e SIDE="$side"

  cp "$dir/callgrind.out" "$out"
}

# capture_fn for emit: $1=out  $2=side
#   Runs in its own container, so regenerating it skips the other captures.
capture_perf() {
  local out=$1 side=$2
  local dir="$WORKDIR/c-perf-$side"
  mkdir -p "$dir"

  notice "Profiling zstd with perf ($side)"

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

      git clone --depth 1 --branch "'"${ZSTD_TAG[$side]}"'" "'"$ZSTD_REPO"'" /src/zstd

      # Frame pointers so perf can walk the stack without the debug info its
      # dwarf unwinder would copy whole stacks to reach.
      make -C /src/zstd -j"$(nproc)" zstd CFLAGS="-O2 -g -fno-omit-frame-pointer"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # Extracted in two steps as in run_for_side.
      mkdir -p /work
      INPUT=/work/input.bin
      curl -fsSL --retry 5 -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 4194304 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      # cpu-clock rather than the default cycles: the VM the container runs in
      # exposes no PMU, so the hardware counter would fall back anyway.
      perf record -F 999 -e cpu-clock --call-graph fp -o /out/cpu.perf.data \
        -- "$ZSTD" -19 -f -q "$INPUT" -o /dev/null
    ' --privileged -e SIDE="$side"

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

# capture_fn for emit: $1=out  $2=side
#   simpleperf writes perf.data with the feature sections the parser detects
#   its origin by.
capture_simpleperf() {
  local out=$1 side=$2
  local dir="$WORKDIR/c-simpleperf-$side"
  mkdir -p "$dir" || return 1
  fetch_simpleperf || return 1
  base64 -d "$SIMPLEPERF_B64" >"$dir/simpleperf" || return 1
  chmod +x "$dir/simpleperf" || return 1

  notice "Profiling zstd with simpleperf ($side)"

  # perf_event_open reaches the host kernel, as for the `perf` capture, so the
  # container is `--privileged` and runs natively.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        build-essential git ca-certificates curl unzip procps

      sysctl -w kernel.perf_event_paranoid=-1 >/dev/null 2>&1 || true

      git clone --depth 1 --branch "'"${ZSTD_TAG[$side]}"'" "'"$ZSTD_REPO"'" /src/zstd

      # Frame pointers so simpleperf can walk the stack without its dwarf
      # unwinder, whose stack copies the parser ignores.
      make -C /src/zstd -j"$(nproc)" zstd CFLAGS="-O2 -g -fno-omit-frame-pointer"
      ZSTD=/src/zstd/zstd
      [ -x "$ZSTD" ] || ZSTD=/src/zstd/programs/zstd

      # Extracted in two steps as in run_for_side.
      mkdir -p /work
      INPUT=/work/input.bin
      curl -fsSL --retry 5 -o /work/dickens.zip "'"$SILESIA_DICKENS_URL"'"
      unzip -p /work/dickens.zip dickens >/work/dickens.full
      head -c 4194304 /work/dickens.full >"$INPUT"
      rm -f /work/dickens.full

      # cpu-clock rather than the default cpu-cycles: the VM the container runs
      # in exposes no PMU.
      /out/simpleperf record -f 999 -e cpu-clock --call-graph fp \
        -o /out/cpu.perf.data -- "$ZSTD" -19 -f -q "$INPUT" -o /dev/null
      rm /out/simpleperf
    ' --privileged -e SIDE="$side" || return 1

  cp "$dir/cpu.perf.data" "$out" || return 1
}

# capture_fn for emit: $1=out  $2=side
capture_clang_time_trace() {
  local out=$1 side=$2
  local dir="$WORKDIR/c-clang-$side"
  mkdir -p "$dir" || return 1

  notice "Tracing the clang compilation of zstd's zstd_compress.c ($side)"

  DOCKER_IMAGE="$CLANG_DOCKER_IMAGE" docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        clang libc6-dev git ca-certificates

      git clone --depth 1 --branch "'"${ZSTD_TAG[$side]}"'" "'"$ZSTD_REPO"'" /src/zstd

      # -O3 as in the zstd Makefile. clang writes the trace beside the object
      # file, as zstd_compress.json.
      clang -O3 -ftime-trace \
        -c /src/zstd/lib/compress/zstd_compress.c -o /out/zstd_compress.o
    ' || return 1

  cp "$dir/zstd_compress.json" "$out" || return 1
}

ensure_docker

for side in base current; do
  try emit "$GENERATED_INPUTS/c.gperftools.cpu.$side.pprof"  copy_c_profile "$side" cpu
  try emit "$GENERATED_INPUTS/c.gperftools.heap.$side.pprof" copy_c_profile "$side" heap
  try emit "$GENERATED_INPUTS/c.systing.cpu.$side.systing"   copy_systing_profile "$side"
  try emit "$GENERATED_INPUTS/c.valgrind.$side.callgrind"    capture_callgrind "$side"
  try emit "$GENERATED_INPUTS/c.perf.cpu.$side.perf.data"    capture_perf "$side"
  try emit "$GENERATED_INPUTS/c.simpleperf.cpu.$side.perf.data" capture_simpleperf "$side"
  try emit "$GENERATED_INPUTS/c.clang.$side.trace-event.json" capture_clang_time_trace "$side"
done

verify_pairs

exit "$status"
