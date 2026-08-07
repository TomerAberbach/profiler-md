#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

JSON_FORTRAN_REPO="https://github.com/jacobwilliams/json-fortran"
JSON_FORTRAN_TAG="8.5.2"

profile="$REPO/scripts/inputs/assets/fortran/profile.f90"

declare -A rundir=()
run_for_role() {
  local role=$1
  if [[ -n "${rundir[$role]:-}" ]]; then
    return 0
  fi
  local dir="$WORKDIR/fortran-$role"
  mkdir -p "$dir"
  # Stage the workload and its input where the container can read them.
  cp "$profile" "$dir/profile.f90"
  cp "$TWITTER_JSON" "$dir/twitter.json"

  notice "Profiling json-fortran with gperftools ($role)"

  # Mount the scratch dir at /out so the profiles and binary land on the host.
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        google-perftools libgoogle-perftools-dev \
        gfortran git ca-certificates

      git clone --depth 1 --branch "'"$JSON_FORTRAN_TAG"'" \
        "'"$JSON_FORTRAN_REPO"'" /src/json-fortran

      # Compile the library sources in dependency order, then the workload
      # against them. Frame pointers let gperftools walk the stack, and -g adds
      # source locations to the frames. -DINT64 widens json-fortran integers to
      # 64 bits, which tweet IDs need.
      mkdir -p /build
      cd /build
      FFLAGS="-O2 -g -fno-omit-frame-pointer -DINT64"
      for source in json_kinds json_parameters json_string_utilities \
                    json_value_module json_file_module json_module; do
        gfortran $FFLAGS -c "/src/json-fortran/src/$source.F90"
      done
      gfortran $FFLAGS -o /out/binary /out/profile.f90 /build/*.o

      # Real parsing input: simdjson'"'"'s twitter.json sample, a Twitter API
      # search response. 200 passes keep the recording a few seconds long.
      LIBPROFILER=$(find / -name "libprofiler.so*" -print -quit 2>/dev/null)
      LIBTCMALLOC=$(find / -name "libtcmalloc.so*" -print -quit 2>/dev/null)
      if [[ -z "$LIBPROFILER" ]]; then
        echo "libprofiler.so not found" >&2
        exit 1
      fi
      if [[ -z "$LIBTCMALLOC" ]]; then
        echo "libtcmalloc.so not found" >&2
        exit 1
      fi

      # CPU profile: preload libprofiler and set CPUPROFILE (raw written on
      # exit). Sample at 1 kHz (vs the 100 Hz default) for a denser profile.
      CPUPROFILE=/out/cpu.raw CPUPROFILE_FREQUENCY=1000 LD_PRELOAD="$LIBPROFILER" \
        /out/binary /out/twitter.json 200

      # Heap profile: preload tcmalloc and set HEAPPROFILE (dumps
      # heap.NNNN.heap). Parsing allocates a node per JSON value, so dump every
      # 256 MB rather than leaving thousands of dumps behind. Keeping the first
      # dump captures both roles at the same allocated volume, so their diff
      # reflects the workload instead of where each run stopped.
      HEAPPROFILE=/out/heap LD_PRELOAD="$LIBTCMALLOC" \
        HEAP_PROFILE_ALLOCATION_INTERVAL=268435456 \
        /out/binary /out/twitter.json 200
      cp "$(ls -1 /out/heap.*.heap | sort | head -n1)" /out/heap.raw
    ' -e ROLE="$role"

  # The Linux runtime libs (libc, libgfortran, tcmalloc, ld) can't be symbolized
  # cross-OS, so we drop those expected warnings. Real errors still surface and
  # fail the build via the exit code.
  local drop='Local symbolization failed'
  pprof -proto "$dir/binary" "$dir/cpu.raw" >"$dir/cpu.pprof" \
    2> >(grep -v "$drop" >&2 || true)
  pprof -proto "$dir/binary" "$dir/heap.raw" >"$dir/heap.pprof" \
    2> >(grep -v "$drop" >&2 || true)

  rundir[$role]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=in-container basename (cpu|heap)
copy_fortran_profile() {
  local out=$1 role=$2 name=$3
  fetch_twitter_json
  run_for_role "$role"
  cp "${rundir[$role]}/$name.pprof" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/fortran.gperftools.cpu.$role.pprof"  copy_fortran_profile "$role" cpu
  try emit "$GENERATED_INPUTS/fortran.gperftools.heap.$role.pprof" copy_fortran_profile "$role" heap
done

verify_pairs

exit "$status"
