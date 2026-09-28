#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

# Base and current profile consecutive Zig releases, whose standard library
# holds the parser and renderer the workload runs, so a diff compares two
# versions of the same code. Zig 0.16 replaced the file system and process APIs
# the workload uses, so each release has its own copy of it, and both are staged
# as `profile.zig` so they record the same path.
declare -A ZIG_VERSION=([base]="0.15.2" [current]="0.16.0")
declare -A ZIG_SHA256=(
  [base]="958ed7d1e00d0ea76590d27666efbf7a932281b3d7ba0c6b01b0ff26498f667f"
  [current]="ea4b09bfb22ec6f6c6ceac57ab63efb6b46e17ab08d21f69f3a48b38e1534f17"
)
declare -A ZIG_PROFILE=(
  [base]="$REPO/scripts/inputs/assets/zig/profile-0.15.zig"
  [current]="$REPO/scripts/inputs/assets/zig/profile.zig"
)

zig_tarball() {
  local version=${ZIG_VERSION[$1]}
  echo "https://ziglang.org/download/$version/zig-aarch64-linux-$version.tar.xz"
}

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -n "${rundir[$role]:-}" ]]; then
    return 0
  fi
  local dir="$WORKDIR/zig-$role"
  mkdir -p "$dir"
  # Stage the workload where the container can read it.
  cp "${ZIG_PROFILE[$role]}" "$dir/profile.zig"

  notice "Profiling zig fmt with gperftools ($role)"

  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev \
        ca-certificates curl xz-utils

      curl -fsSL --retry 5 -o /tmp/zig.tar.xz "'"$(zig_tarball "$role")"'"
      echo "'"${ZIG_SHA256[$role]}"'  /tmp/zig.tar.xz" | sha256sum -c -
      mkdir -p /opt/zig
      tar -xJf /tmp/zig.tar.xz -C /opt/zig --strip-components=1

      # -lc links glibc dynamically, so LD_PRELOAD reaches the binary. A Zig
      # program without libc is statically linked and the preload is ignored.
      # Frame pointers let gperftools walk the stack, and ReleaseSafe is the
      # optimization level a released Zig program ships with.
      /opt/zig/zig build-exe -O ReleaseSafe -fno-omit-frame-pointer -lc \
        --name binary -femit-bin=/out/binary /out/profile.zig

      # Real formatting input: the Zig standard library that ships in the
      # toolchain, 550 source files the workload parses and re-renders. 15
      # passes keep the recording around six seconds.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" -print -quit 2>/dev/null)

      # 1 kHz sampling, against the 100 Hz default, gives a denser profile.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        /out/binary /opt/zig/lib/std 15

      # tcmalloc dumps numbered heap.NNNN.heap files. The workload allocates a few GB in total, so dump every 512 MB rather
      # than leaving thousands of dumps behind.
      HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=536870912 \
        /out/binary /opt/zig/lib/std 15
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
copy_zig_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role"
  cp "${rundir[$role]}/$name.pprof" "$out"
}

# capture_fn for emit: $1=out  $2=role
#   Runs in its own container, so regenerating it skips the gperftools
#   captures.
capture_perf() {
  local out=$1 role=$2
  local dir="$WORKDIR/zig-perf-$role"
  mkdir -p "$dir"
  cp "${ZIG_PROFILE[$role]}" "$dir/profile.zig"

  notice "Profiling zig fmt with perf ($role)"

  # perf_event_open goes to the real kernel, so the container must be
  # `--privileged` (Docker's default seccomp profile blocks the syscall) and
  # the platform cannot be emulated. DOCKER_PLATFORM is the host's, so
  # docker_capture's default already runs natively.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        linux-perf ca-certificates curl xz-utils

      # Kernel stacks need a paranoia level that permits them. Without it
      # the capture is user-space only rather than failing.
      sysctl -w kernel.perf_event_paranoid=-1 >/dev/null 2>&1 || true

      curl -fsSL --retry 5 -o /tmp/zig.tar.xz "'"$(zig_tarball "$role")"'"
      echo "'"${ZIG_SHA256[$role]}"'  /tmp/zig.tar.xz" | sha256sum -c -
      mkdir -p /opt/zig
      tar -xJf /tmp/zig.tar.xz -C /opt/zig --strip-components=1

      # Frame pointers so perf can walk the stack without the debug info its
      # dwarf unwinder would copy whole stacks to reach.
      /opt/zig/zig build-exe -O ReleaseSafe -fno-omit-frame-pointer -lc \
        --name binary -femit-bin=/tmp/binary /out/profile.zig

      # cpu-clock rather than the default cycles: the VM the container runs in
      # exposes no PMU, so the hardware counter would fall back anyway.
      perf record -F 999 -e cpu-clock --call-graph fp -o /out/cpu.perf.data \
        -- /tmp/binary /opt/zig/lib/std 15
    ' --privileged -e ROLE="$role"

  cp "$dir/cpu.perf.data" "$out"
}

ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/zig.gperftools.cpu.$role.pprof"  copy_zig_profile "$role" cpu
  try emit "$GENERATED_INPUTS/zig.gperftools.heap.$role.pprof" copy_zig_profile "$role" heap
  try emit "$GENERATED_INPUTS/zig.perf.cpu.$role.perf.data"    capture_perf "$role"
done

verify_pairs

exit "$status"
