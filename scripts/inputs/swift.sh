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
  stage_container_pprof "$dir" || return 1


  notice "Profiling swift-syntax with gperftools (base + current; builds swift-syntax from source)"

  # Both sides come from one container, so gperftools installs once and current
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
        google-perftools libgoogle-perftools-dev binutils llvm

      # Build outside the bind mount: SwiftPM writes tens of thousands of files
      # and the mount is slower than the container filesystem.
      cp -R /out/pkg /src
      cd /src

      # `-print -quit` avoids a `| head` pipe, whose early close would SIGPIPE
      # `find` and trip `set -o pipefail`.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so" -print -quit 2>/dev/null)

      # Each side builds and runs in /src, so both record the same paths.
      for side in base current; do
        version=SWIFT_SYNTAX_VERSION_$side
        sed -i "s/exact: \"[^\"]*\"/exact: \"${!version}\"/" Package.swift
        if [ "$side" = current ]; then
          rm -rf .build Package.resolved
        fi

        # -g records the line info pprof needs to symbolize
        # swift-syntax frames. SwiftPM statically links the package and its
        # dependencies into the executable, so their symbols are in the one
        # binary pprof reads.
        swift build -c release -Xswiftc -g

        # Real parsing input: base'"'"'s swift-syntax sources, 295 Swift files
        # its build checked out, which both sides parse. Six passes keep each
        # recording around six seconds.
        SRC=/work/swift-syntax-sources
        if [ "$side" = base ]; then
          mkdir -p /work
          cp -R .build/checkouts/swift-syntax/Sources "$SRC"
        fi

        # The raw profile is written on exit. 1 kHz sampling, against the 100 Hz
        # default, gives a denser profile.
        CPUPROFILE="/out/cpu.$side.raw" CPUPROFILE_FREQUENCY=1000 \
          LD_PRELOAD="$LIBPROFILER" \
          ./.build/release/profile "$SRC" 6

        # tcmalloc dumps heap.<side>.NNNN.heap, numbered from 0001. The workload
        # allocates about 77 MiB in total, under the 1 GB allocation interval
        # and the 100 MB in-use interval, so the dump at exit is the only one.
        # libc lacks frame pointers, so the default frame pointer walk continues
        # past the program'"'"'s entry into invalid frames. The libgcc unwinder
        # reads unwind tables instead, so it walks through libc.
        TCMALLOC_STACKTRACE_METHOD=libgcc HEAPPROFILE="/out/heap.$side" \
          LD_PRELOAD="$LIBTCMALLOC" ./.build/release/profile "$SRC" 6
        cp "$(ls -1 "/out/heap.$side".*.heap | sort | tail -n1)" "/out/heap.$side.raw"

        # pprof symbolizes against the files the profiles map, and the runtime
        # libraries among them exist only in this container. pprof cannot
        # symbolize the kernel'"'"'s pseudo-mappings, such as [vdso], so the grep
        # drops its warnings about them. pprof prefers llvm-symbolizer, which
        # reports an unknown file as empty. addr2line reports `??:?`, which
        # pprof keeps as a file name
        # (https://github.com/google/pprof/issues/1044).
        for name in cpu heap; do
          /out/pprof -proto ./.build/release/profile "/out/$name.$side.raw" \
            >"/out/$name.$side.pprof" \
            2> >(grep -v "Local symbolization failed for \[" >&2 || true)
        done
      done
    ' || {
    run_failed=1
    return 1
  }

  rundir=$dir
}

# capture_fn for emit: $1=out  $2=side  $3=in-container basename (cpu|heap)
copy_swift_profile() {
  local out=$1 side=$2 name=$3
  run_swift || return 1

  cp "$rundir/$name.$side.pprof" "$out"
}

ensure_docker

for side in base current; do
  try emit "$GENERATED_INPUTS/swift.gperftools.cpu.$side.pprof"  copy_swift_profile "$side" cpu
  try emit "$GENERATED_INPUTS/swift.gperftools.heap.$side.pprof" copy_swift_profile "$side" heap
done

verify_pairs

exit "$status"
