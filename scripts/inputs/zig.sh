#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

ZIG_VERSION="0.16.0"
ZIG_TARBALL="https://ziglang.org/download/$ZIG_VERSION/zig-aarch64-linux-$ZIG_VERSION.tar.xz"
ZIG_SHA256="ea4b09bfb22ec6f6c6ceac57ab63efb6b46e17ab08d21f69f3a48b38e1534f17"

profile="$REPO/scripts/inputs/assets/zig/profile.zig"

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -n "${rundir[$role]:-}" ]]; then
    return 0
  fi
  local dir="$WORKDIR/zig-$role"
  mkdir -p "$dir"
  # Stage the workload where the container can read it.
  cp "$profile" "$dir/profile.zig"

  notice "Profiling zig fmt with gperftools ($role)"

  # Mount the scratch dir at /out so the profiles and binary land on the host.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev \
        ca-certificates curl xz-utils

      curl -sSL -o /tmp/zig.tar.xz "'"$ZIG_TARBALL"'"
      echo "'"$ZIG_SHA256"'  /tmp/zig.tar.xz" | sha256sum -c -
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

      # CPU profile: preload libprofiler and set CPUPROFILE. Sample at 1 kHz (vs
      # the 100 Hz default) for a denser profile.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        /out/binary /opt/zig/lib/std 15

      # Heap profile: preload tcmalloc and set HEAPPROFILE (dumps heap.NNNN.heap).
      # The workload allocates a few GB in total, so dump every 512 MB rather
      # than leaving thousands of dumps behind.
      HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=536870912 \
        /out/binary /opt/zig/lib/std 15
      cp "$(ls -1 /out/heap.*.heap | sort | tail -n1)" /out/heap.raw
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
copy_zig_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role"
  cp "${rundir[$role]}/$name.pprof" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/zig.gperftools.cpu.$role.pprof"  copy_zig_profile "$role" cpu
  try emit "$GENERATED_INPUTS/zig.gperftools.heap.$role.pprof" copy_zig_profile "$role" heap
done

verify_pairs

exit "$status"
