#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

# The official Swift toolchain image, rather than the shared Debian one: no
# Swift toolchain is packaged for Debian, and swiftly's installer needs a
# toolchain-specific set of runtime libraries anyway. Ubuntu-based, so
# gperftools still comes from apt.
SWIFT_IMAGE="swift:6.1-noble"

profile_dir="$REPO/scripts/inputs/assets/swift/profile"

# Base and current profile consecutive swift-syntax releases, so a diff
# compares two versions of the same code. The committed manifest pins base's.
declare -A SWIFT_SYNTAX_VERSION=([base]="601.0.1" [current]="602.0.0")

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

  # Both roles come from one container, so gperftools installs once and current
  # parses the sources base's build checked out.
  docker run --rm --platform "$DOCKER_PLATFORM" \
    -v "$dir:/out" \
    -e SWIFT_SYNTAX_VERSION_base="${SWIFT_SYNTAX_VERSION[base]}" \
    -e SWIFT_SYNTAX_VERSION_current="${SWIFT_SYNTAX_VERSION[current]}" \
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

      # `-print -quit` avoids a `| head` pipe, whose early close would SIGPIPE
      # `find` and trip `set -o pipefail`.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" -print -quit 2>/dev/null)

      # Each role builds and runs in /src, so both record the same paths.
      for role in base current; do
        version=SWIFT_SYNTAX_VERSION_$role
        sed -i "s/exact: \"[^\"]*\"/exact: \"${!version}\"/" Package.swift
        if [ "$role" = current ]; then
          rm -rf .build Package.resolved
        fi

        # -g records the line info the host pprof needs to symbolize
        # swift-syntax frames. SwiftPM statically links the package and its
        # dependencies into the executable, so their symbols are in the one
        # binary pprof reads.
        swift build -c release -Xswiftc -g

        # Real parsing input: base'"'"'s swift-syntax sources, 295 Swift files
        # its build checked out, which both roles parse. Six passes keep each
        # recording around six seconds.
        SRC=/work/swift-syntax-sources
        if [ "$role" = base ]; then
          mkdir -p /work
          cp -R .build/checkouts/swift-syntax/Sources "$SRC"
        fi

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

        # The host needs the binary to symbolize the raw profiles.
        cp ./.build/release/profile "/out/binary.$role"
      done
    ' || {
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
  pprof -proto "$rundir/binary.$role" "$rundir/$name.$role.raw" >"$rundir/$name.$role.pprof" \
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
