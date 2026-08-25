#!/usr/bin/env bash
# py-spy can sample Python on macOS but crashes intermittently (SIGABRT) on the
# short-lived Black process, so the capture runs in a linux/arm64 container where
# py-spy is rock-solid with SYS_PTRACE — no sudo, no flaky aborts. memray traces
# from inside the interpreter and runs in a container of its own.

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

PY_SPY_VERSION="0.4.0"
# memray 1.19 writes capture version 12 and 1.20 writes version 13, so the
# captures cover both header versions the parser reads.
MEMRAY_V12_VERSION="1.19.3"
MEMRAY_V13_VERSION="1.20.0"
PYINSTRUMENT_VERSION="5.1.3"
BLACK_VERSION="24.8.0"

# Black formats CPython's own _pydecimal.py as a real, sizeable workload. Fetch
# it pinned to a CPython tag and verify its checksum.
CPYTHON_VERSION="3.13.2"
TARGET="$REPO/scripts/inputs/assets/python/_pydecimal.py"
TARGET_URL="https://raw.githubusercontent.com/python/cpython/v$CPYTHON_VERSION/Lib/_pydecimal.py"
TARGET_SHA256="87a3372df4c4269adcdac5725e04675d306abcfa8d65e8dda59c1846e3d202ac"

fetch_pydecimal() {
  fetch_asset "CPython $CPYTHON_VERSION _pydecimal.py" \
    "$TARGET_URL" "$TARGET_SHA256" "$TARGET"
}

# Run all three py-spy captures once per role inside the container, writing the
# in-container output names into the mounted /out.
declare -A rundir=()
run_for_role() {
  local role=$1
  [[ -n "${rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/python-$role"
  mkdir -p "$dir"
  # Stage the real CPython _pydecimal.py into the mount as the Black input.
  fetch_pydecimal || return 1
  cp "$TARGET" "$dir/_pydecimal.py" || return 1

  notice "Profiling black with py-spy ($role)"
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends python3 python3-venv python3-pip

      python3 -m venv /venv
      /venv/bin/pip install --quiet "py-spy==$PY_SPY_VERSION" "black==$BLACK_VERSION"

      # Each capture formats a fresh copy of the input so Black always has work.
      # --idle adds off-CPU/idle samples for the wall-clock profile. py-spy
      # occasionally races Black at exit ("No child process"); since that is rare
      # and per-run, retry a few times.
      cap() {
        local out=$1 fmt=$2 n
        shift 2
        for n in 1 2 3; do
          cp /out/_pydecimal.py /tmp/work.py
          /venv/bin/py-spy record -o "$out" -f "$fmt" "$@" \
            -- /venv/bin/python -m black /tmp/work.py && return 0
          echo "py-spy attempt $n failed; retrying" >&2
        done
        return 1
      }
      cap /out/cpu.collapsed raw
      cap /out/cpu.speedscope.json speedscope
      cap /out/wall.collapsed raw --idle
      # --function writes the first line of each function in place of the
      # executing line, in the same "name (file:line)" shape, so one function
      # is one frame string.
      cap /out/function.collapsed raw --function
      cap /out/function.speedscope.json speedscope --function
    ' --cap-add SYS_PTRACE \
    -e PY_SPY_VERSION="$PY_SPY_VERSION" \
    -e BLACK_VERSION="$BLACK_VERSION" || return 1

  rundir[$role]=$dir
}

# py-spy unwinds native stacks (`--native`) on x86_64 Linux only, and reads a
# single bogus address from a process Rosetta emulates, so the native captures
# run in the emulated x86_64 VM. They record the C frames between the Python
# ones: Black's mypyc-compiled modules, libc, and the frames py-spy cannot
# symbolicate, which it writes with the path `?`. Emulation slows Black
# tenfold, and each sample pauses the emulated process for longer still,
# so the captures sample at 10 Hz to record about as many samples as the other
# py-spy inputs do at 100 Hz. One VM runs both roles' captures, since booting
# and installing into it takes minutes.
native_dir=""
run_native() {
  [[ -n "$native_dir" ]] && return 0
  local dir="$WORKDIR/python-native"
  mkdir -p "$dir/base" "$dir/current"
  fetch_pydecimal || return 1
  cp "$TARGET" "$dir/_pydecimal.py" || return 1

  notice "Profiling black with py-spy --native (base and current)"
  x86_64_vm_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends python3 python3-venv python3-pip

      python3 -m venv /venv
      /venv/bin/pip install --quiet "py-spy==$PY_SPY_VERSION" "black==$BLACK_VERSION"

      # Each capture formats a fresh copy of the input so Black always has work.
      # Because py-spy runs Black as the SSH user, the copy is world-readable.
      # py-spy exits 0 when Black fails, and an empty capture counts as a
      # failure instead. It also occasionally races Black at exit ("No child
      # process"), so retry.
      cap() {
        local out=$1 fmt=$2 n
        shift 2
        for n in 1 2 3; do
          install -m 644 /out/_pydecimal.py /tmp/work.py
          if /venv/bin/py-spy record -o "$out" -f "$fmt" --native --rate 10 "$@" \
              -- /venv/bin/python -m black /tmp/work.py 2>&1 | tee /tmp/py-spy.log \
            && ! grep -q "Samples: 0 " /tmp/py-spy.log; then
            return 0
          fi
          echo "py-spy attempt $n failed; retrying" >&2
        done
        return 1
      }
      for role in base current; do
        cap /out/$role/native.collapsed raw
        cap /out/$role/native.speedscope.json speedscope
      done
    ' PY_SPY_VERSION="$PY_SPY_VERSION" BLACK_VERSION="$BLACK_VERSION" || return 1

  native_dir=$dir
}

# memray traces every allocation Black makes, in both capture file formats: the
# default one record per allocation, and the smaller `--aggregate` one holding
# each stack's peak and leaked totals.
#
# Black is installed from a checkout rather than from PyPI, so its frames use
# the paths of its own sources instead of an installed package's. That is how a
# project being worked on appears, and it keeps its code out of the third-party
# category.
declare -A memray_rundir=()
run_memray_for_role() {
  local role=$1
  [[ -n "${memray_rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/python-memray-$role"
  mkdir -p "$dir"
  fetch_pydecimal || return 1
  cp "$TARGET" "$dir/_pydecimal.py" || return 1

  notice "Profiling black with memray ($role)"
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends python3 python3-venv python3-pip git

      git clone --quiet --depth 1 --branch "$BLACK_VERSION" \
        https://github.com/psf/black /src/black

      python3 -m venv /venv
      /venv/bin/pip install --quiet "memray==$MEMRAY_V12_VERSION"
      /venv/bin/pip install --quiet -e /src/black

      # Each memray release needs its own environment because it installs its
      # own extension module.
      python3 -m venv /venv13
      /venv13/bin/pip install --quiet "memray==$MEMRAY_V13_VERSION"
      /venv13/bin/pip install --quiet -e /src/black

      # Each capture formats a fresh copy of the input so Black always has work.
      cap() {
        cp /out/_pydecimal.py /tmp/work.py
        "$1"/bin/memray run --force -o "$2" "${@:3}" -m black /tmp/work.py
      }
      cap /venv /out/default.memray.bin
      cap /venv /out/aggregated.memray.bin --aggregate
      cap /venv13 /out/v13.memray.bin
    ' -e MEMRAY_V12_VERSION="$MEMRAY_V12_VERSION" \
    -e MEMRAY_V13_VERSION="$MEMRAY_V13_VERSION" \
    -e BLACK_VERSION="$BLACK_VERSION" || return 1

  memray_rundir[$role]=$dir
}

# pyinstrument samples from inside the interpreter and exports speedscope with
# its default frame selection, which keeps the frames above pyinstrument's 1%
# threshold and absorbs the rest into their parents. --show-all keeps every
# frame, but it sometimes exports a tree covering a few milliseconds instead
# of the whole run, so no input uses it.
#
# Black is installed from a checkout for the same reason memray's capture
# installs one, and because pyinstrument hides installed-package frames by
# default.
declare -A pyinstrument_rundir=()
run_pyinstrument_for_role() {
  local role=$1
  [[ -n "${pyinstrument_rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/python-pyinstrument-$role"
  mkdir -p "$dir"
  fetch_pydecimal || return 1
  cp "$TARGET" "$dir/_pydecimal.py" || return 1

  notice "Profiling black with pyinstrument ($role)"
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends python3 python3-venv python3-pip git

      git clone --quiet --depth 1 --branch "$BLACK_VERSION" \
        https://github.com/psf/black /src/black

      python3 -m venv /venv
      /venv/bin/pip install --quiet "pyinstrument==$PYINSTRUMENT_VERSION"
      /venv/bin/pip install --quiet -e /src/black

      # The capture formats a fresh copy of the input so Black always has work.
      #
      # Black runs as its console script rather than as "-m black". Under
      # "-m", pyinstrument trims the leading runpy frames by descending into
      # the first child of each. That child is the import subtree rather than
      # the module body, so the speedscope export covers only the imports.
      cp /out/_pydecimal.py /tmp/work.py
      /venv/bin/pyinstrument -r speedscope -o /out/default.speedscope.json \
        /venv/bin/black /tmp/work.py
    ' -e PYINSTRUMENT_VERSION="$PYINSTRUMENT_VERSION" \
    -e BLACK_VERSION="$BLACK_VERSION" || return 1

  pyinstrument_rundir[$role]=$dir
}

# Tachyon is the sampling profiler CPython 3.15 ships in its standard library.
# It reads the profiled interpreter's memory from outside the process. On macOS
# that requires root (task_for_pid), so the captures run in the official Python
# 3.15 image instead of under sudo on the host. They add SYS_PTRACE because the
# default seccomp profile permits process_vm_readv only with it. Black publishes
# no compiled wheel for 3.15 yet, so its frames are the pure-Python ones.
TACHYON_PYTHON_IMAGE="python:3.15.0rc1-trixie"
HYPOTHESIS_VERSION="6.165.10"
PYTEST_VERSION="9.1.1"

# The sampling modes to capture Black under, and the sampling options that
# change which frames a stack contains, each in the default wall mode.
# `--all-threads` roots stacks at every thread's `tid:` frame instead of the
# main thread's alone, and `--native` inserts a bare `<native>` frame where the
# interpreter was running non-Python code.
TACHYON_BLACK_CONFIGS=(
  "wall --mode wall"
  "cpu --mode cpu"
  "gil --mode gil"
  "all-threads --all-threads"
  "native --native"
)

declare -A tachyon_rundir=()
run_tachyon_for_role() {
  local role=$1
  [[ -n "${tachyon_rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/python-tachyon-$role"
  mkdir -p "$dir"
  fetch_pydecimal || return 1
  cp "$TARGET" "$dir/_pydecimal.py" || return 1

  notice "Profiling black with tachyon ($role)"
  DOCKER_IMAGE="$TACHYON_PYTHON_IMAGE" docker_capture "$dir" '
      python -m venv /venv
      /venv/bin/pip install --quiet "black==$BLACK_VERSION"

      # Each capture formats a fresh copy of the input so Black always has work.
      while read -r config flags; do
        cp /out/_pydecimal.py /tmp/work.py
        # shellcheck disable=SC2086
        /venv/bin/python -m profiling.sampling run $flags --collapsed \
          -o "/out/$config.collapsed" -m black /tmp/work.py
      done <<<"$TACHYON_CONFIGS"
    ' --cap-add SYS_PTRACE \
    -e BLACK_VERSION="$BLACK_VERSION" \
    -e TACHYON_CONFIGS="$(printf '%s\n' "${TACHYON_BLACK_CONFIGS[@]}")" || return 1

  tachyon_rundir[$role]=$dir
}

# Exception mode keeps a sample only while the thread has an exception in
# flight or an `except` block on its base exception stack. A Black run produces
# none because its handlers `continue` or re-raise at once, and the ones in
# generators set the generator's own exception stack. The capture profiles
# Hypothesis's shrink-quality tests instead. Each shrink step re-runs the
# failing example, and the engine formats its traceback inside the `except`
# block that caught it.
declare -A tachyon_exception_rundir=()
run_tachyon_exception_for_role() {
  local role=$1
  [[ -n "${tachyon_exception_rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/python-tachyon-exception-$role"
  mkdir -p "$dir"

  notice "Profiling the hypothesis shrink-quality tests with tachyon --mode exception ($role)"
  DOCKER_IMAGE="$TACHYON_PYTHON_IMAGE" docker_capture "$dir" '
      python -m venv /venv
      /venv/bin/pip install --quiet "hypothesis==$HYPOTHESIS_VERSION" "pytest==$PYTEST_VERSION"

      git -c advice.detachedHead=false clone --quiet --depth 1 \
        --branch "v$HYPOTHESIS_VERSION" \
        https://github.com/HypothesisWorks/hypothesis /src/hypothesis
      cd /src/hypothesis/hypothesis

      /venv/bin/python -m profiling.sampling run --mode exception --collapsed \
        -o /out/exception.collapsed \
        -m pytest -q -p no:cacheprovider tests/quality/test_shrink_quality.py
    ' --cap-add SYS_PTRACE \
    -e HYPOTHESIS_VERSION="$HYPOTHESIS_VERSION" \
    -e PYTEST_VERSION="$PYTEST_VERSION" || return 1

  tachyon_exception_rundir[$role]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=in-container filename
copy_python_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role" || return 1
  cp "${rundir[$role]}/$name" "$out"
}

# capture_fn for emit: $1=out  $2=role  $3=in-VM filename
copy_native_profile() {
  local out=$1 role=$2 name=$3
  run_native || return 1
  cp "$native_dir/$role/$name" "$out"
}

# capture_fn for emit: $1=out  $2=role  $3=in-container filename
copy_memray_capture() {
  local out=$1 role=$2 name=$3
  run_memray_for_role "$role" || return 1
  cp "${memray_rundir[$role]}/$name" "$out"
}

# capture_fn for emit: $1=out  $2=role  $3=in-container filename
copy_tachyon_profile() {
  local out=$1 role=$2 name=$3
  run_tachyon_for_role "$role" || return 1
  cp "${tachyon_rundir[$role]}/$name" "$out"
}

# capture_fn for emit: $1=out  $2=role
copy_tachyon_exception_profile() {
  local out=$1 role=$2
  run_tachyon_exception_for_role "$role" || return 1
  cp "${tachyon_exception_rundir[$role]}/exception.collapsed" "$out"
}

# capture_fn for emit: $1=out  $2=role  $3=in-container filename
copy_pyinstrument_profile() {
  local out=$1 role=$2 name=$3
  run_pyinstrument_for_role "$role" || return 1
  cp "${pyinstrument_rundir[$role]}/$name" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  try emit "$GENERATED_INPUTS/python.py-spy.cpu.$role.collapsed" \
    copy_python_profile "$role" cpu.collapsed
  try emit "$GENERATED_INPUTS/python.py-spy.cpu.$role.speedscope.json" \
    copy_python_profile "$role" cpu.speedscope.json
  try emit "$GENERATED_INPUTS/python.py-spy.wall.$role.collapsed" \
    copy_python_profile "$role" wall.collapsed
  try emit "$GENERATED_INPUTS/python.py-spy.function.$role.collapsed" \
    copy_python_profile "$role" function.collapsed
  try emit "$GENERATED_INPUTS/python.py-spy.function.$role.speedscope.json" \
    copy_python_profile "$role" function.speedscope.json
  try emit "$GENERATED_INPUTS/python.py-spy.native.$role.collapsed" \
    copy_native_profile "$role" native.collapsed
  try emit "$GENERATED_INPUTS/python.py-spy.native.$role.speedscope.json" \
    copy_native_profile "$role" native.speedscope.json
  try emit "$GENERATED_INPUTS/python.memray.$role.memray.bin" \
    copy_memray_capture "$role" default.memray.bin
  try emit "$GENERATED_INPUTS/python.memray.aggregated.$role.memray.bin" \
    copy_memray_capture "$role" aggregated.memray.bin
  try emit "$GENERATED_INPUTS/python.memray.v13.$role.memray.bin" \
    copy_memray_capture "$role" v13.memray.bin
  try emit "$GENERATED_INPUTS/python.pyinstrument.$role.speedscope.json" \
    copy_pyinstrument_profile "$role" default.speedscope.json
  for config in "${TACHYON_BLACK_CONFIGS[@]%% *}"; do
    try emit "$GENERATED_INPUTS/python.tachyon.$config.$role.collapsed" \
      copy_tachyon_profile "$role" "$config.collapsed"
  done
  try emit "$GENERATED_INPUTS/python.tachyon.exception.$role.collapsed" \
    copy_tachyon_exception_profile "$role"
done

verify_pairs

exit "$status"
