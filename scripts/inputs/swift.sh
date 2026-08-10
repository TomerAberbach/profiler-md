#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

# The official Swift toolchain image, rather than the shared Debian one: no
# Swift toolchain is packaged for Debian, and swiftly's installer needs a
# toolchain-specific set of runtime libraries anyway. Ubuntu-based, so
# gperftools still comes from apt.
SWIFT_IMAGE="swift:6.1-noble"

profile_dir="$REPO/scripts/inputs/assets/swift/profile"

rundir=
run_failed=
run_swift() {
  if [[ -n "$rundir" ]]; then
    return 0
  fi
  # A retry would repeat a build that takes minutes.
  if [[ -n "$run_failed" ]]; then
    return 1
  fi
  local dir="$WORKDIR/swift"
  mkdir -p "$dir/pkg"
  cp -R "$profile_dir/." "$dir/pkg"


  notice "Profiling swift-syntax with gperftools (base + current; builds swift-syntax from source)"

  # Both roles come from one container: a second would repeat the build for a
  # binary the two recordings share.
  docker run --rm --platform "$DOCKER_PLATFORM" \
    -v "$dir:/out" \
    "$SWIFT_IMAGE" \
    bash -euo pipefail -c '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev

      # Build outside the bind mount: SwiftPM writes tens of thousands of files
      # and the mount is slower than the container filesystem.
      cp -R /out/pkg /src
      cd /src

      # -g records the line info the host pprof needs to symbolize swift-syntax
      # frames.
      # SwiftPM statically links the package and its dependencies into the
      # executable, so their symbols are in the one binary pprof reads.
      swift build -c release -Xswiftc -g

      # Real parsing input: swift-syntax'"'"'s own sources, 295 Swift files the
      # build already checked out. Six passes keep each recording around six
      # seconds.
      SRC=/src/.build/checkouts/swift-syntax/Sources

      # `-print -quit` avoids a `| head` pipe, whose early close would SIGPIPE
      # `find` and trip `set -o pipefail`.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" -print -quit 2>/dev/null)

      for role in base current; do
        # The raw profile is written on exit. 1 kHz sampling, against the 100 Hz
        # default, gives a denser profile.
        CPUPROFILE="/out/cpu.$role.raw" CPUPROFILE_FREQUENCY=1000 \
          LD_PRELOAD="$LIBPROFILER" \
          ./.build/release/profile "$SRC" 6

        # tcmalloc dumps heap.<role>.NNNN.heap, numbered from 0001. The workload
        # allocates about 77 MiB in total, under the 1 GB allocation interval
        # and the 100 MB in-use interval, so the dump at exit is the only one.
        HEAPPROFILE="/out/heap.$role" LD_PRELOAD="$LIBTCMALLOC" \
          ./.build/release/profile "$SRC" 6
        cp "$(ls -1 "/out/heap.$role".*.heap | sort | tail -n1)" "/out/heap.$role.raw"
      done

      # The host needs the binary to symbolize the raw profiles.
      cp ./.build/release/profile /out/binary
    ' || {
    # `try emit` suppresses errexit for everything it calls, so this block
    # checks the exit status.
    run_failed=1
    return 1
  }

  rundir=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=in-container basename (cpu|heap)
symbolize_swift_profile() {
  local out=$1 role=$2 name=$3
  run_swift || return 1

  # The Linux runtime libraries (libc, libswiftCore, ld) can't be symbolized
  # cross-OS, so the grep drops those expected warnings. Real errors still print
  # and fail the build via the exit code.
  local drop='Local symbolization failed'
  pprof -proto "$rundir/binary" "$rundir/$name.$role.raw" >"$rundir/$name.$role.pprof" \
    2> >(grep -v "$drop" >&2 || true) || return 1
  cp "$rundir/$name.$role.pprof" "$out"
}

ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/swift.gperftools.cpu.$role.pprof"  symbolize_swift_profile "$role" cpu
  try emit "$GENERATED_INPUTS/swift.gperftools.heap.$role.pprof" symbolize_swift_profile "$role" heap
done

verify_pairs

exit "$status"
