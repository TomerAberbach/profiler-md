#!/usr/bin/env bash
# py-spy can sample Python on macOS but crashes intermittently (SIGABRT) on the
# short-lived Black process, so the capture runs in a linux/arm64 container where
# py-spy is rock-solid with SYS_PTRACE — no sudo, no flaky aborts.

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

PY_SPY_VERSION="0.4.0"
BLACK_VERSION="24.8.0"

# Black formats CPython's own _pydecimal.py as a real, sizeable workload. Fetch
# it pinned to a CPython tag and verify its checksum.
CPYTHON_VERSION="3.13.2"
TARGET="$REPO/scripts/fixtures/assets/python/_pydecimal.py"
TARGET_URL="https://raw.githubusercontent.com/python/cpython/v$CPYTHON_VERSION/Lib/_pydecimal.py"
TARGET_SHA256="87a3372df4c4269adcdac5725e04675d306abcfa8d65e8dda59c1846e3d202ac"

fetch_pydecimal() {
  [[ -f "$TARGET" ]] && return 0
  notice "Fetching CPython $CPYTHON_VERSION _pydecimal.py"
  mkdir -p "$(dirname "$TARGET")"
  curl -fsSL "$TARGET_URL" -o "$TARGET"
  echo "$TARGET_SHA256  $TARGET" | shasum -a 256 -c -
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
  fetch_pydecimal
  cp "$TARGET" "$dir/_pydecimal.py"

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
    ' --cap-add SYS_PTRACE \
    -e PY_SPY_VERSION="$PY_SPY_VERSION" \
    -e BLACK_VERSION="$BLACK_VERSION"

  rundir[$role]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=in-container filename
copy_python_profile() {
  local out=$1 role=$2 name=$3
  run_for_role "$role"
  cp "${rundir[$role]}/$name" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  try emit "$FIXTURES/python.py-spy.cpu.$role.collapsed" \
    copy_python_profile "$role" cpu.collapsed
  try emit "$FIXTURES/python.py-spy.cpu.$role.speedscope.json" \
    copy_python_profile "$role" cpu.speedscope.json
  try emit "$FIXTURES/python.py-spy.wall.$role.collapsed" \
    copy_python_profile "$role" wall.collapsed
done

verify_pairs

exit "$status"
