#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

COMPOSER_VERSION="2.7.7"
COMPOSER_URL="https://getcomposer.org/download/${COMPOSER_VERSION}/composer.phar"
COMPOSER_SHA256="aab940cd53d285a54c50465820a2080fcb7182a4ba1e5f795abfb10414a4b4be"

GUZZLE_URL="https://github.com/guzzle/guzzle"
GUZZLE_TAG="7.9.2"

EXTS=(speedscope.json collapsed)

CONFIGS=(cpu wall)
if ! php -r 'exit(defined("EXCIMER_CPU") ? 0 : 1);' >/dev/null 2>&1; then
  notice "EXCIMER_CPU unavailable on this platform (macOS); capturing wall only"
  CONFIGS=(wall)
fi

workload_assets="$REPO/scripts/inputs/assets/php"

# Excimer names each frame by the file it was defined in, so the workload's
# absolute paths appear in the generated input and a diff pairs functions by
# them. The workload therefore runs from a fixed directory rather than from
# WORKDIR, which mktemp names anew per run.
WORKLOAD_DIR="/tmp/profiler-md-php-workload"

workload_ready=""
setup_workload_dir() {
  [[ -n "$workload_ready" ]] && return 0

  rm -rf "$WORKLOAD_DIR" || return 1
  mkdir -p "$WORKLOAD_DIR" || return 1

  # The profiling script is one of the sampled frames, and the manifest names
  # the sources composer dumps a classmap for, so both are copied beside the
  # workload rather than read from the repo.
  cp "$workload_assets/composer.json" "$workload_assets/profile.php" \
    "$WORKLOAD_DIR" || return 1

  workload_ready=1
}

composer_src=""
setup_composer() {
  [[ -n "$composer_src" ]] && return 0

  local phar="$WORKDIR/composer.phar"
  fetch_asset "composer $COMPOSER_VERSION" \
    "$COMPOSER_URL" "$COMPOSER_SHA256" "$phar" || return 1

  # Composer runs from the extracted phar so its frames name plain file paths,
  # as a PHP application's frames do, rather than `phar://` URLs.
  local src="$WORKLOAD_DIR/composer"
  notice "Extracting composer $COMPOSER_VERSION"
  php -r '$p = new Phar($argv[1]); $p->extractTo($argv[2], null, true);' \
    "$phar" "$src" || return 1

  composer_src="$src"
}

guzzle_src=""
setup_guzzle() {
  [[ -n "$guzzle_src" ]] && return 0

  notice "Cloning guzzle $GUZZLE_TAG"

  local src="$WORKLOAD_DIR/guzzle"
  git clone --quiet --depth 1 --branch "$GUZZLE_TAG" "$GUZZLE_URL" "$src" || return 1

  guzzle_src="$src"
}

# Both roles profile the same workload from the same paths, so their functions
# pair across a diff and only the sampling differs.
declare -A rundir=()
run_for_role() {
  local role=$1 cfg=$2
  local key="$role.$cfg"
  [[ -n "${rundir[$key]:-}" ]] && return 0

  setup_workload_dir || return 1
  setup_composer || return 1
  setup_guzzle || return 1

  local dir="$WORKDIR/php-$key"
  mkdir -p "$dir" || return 1

  notice "Profiling composer dump-autoload using excimer ($cfg, $role)"
  php "$WORKLOAD_DIR/profile.php" "$dir" "$cfg" "$composer_src" "$WORKLOAD_DIR" \
    || return 1

  rundir[$key]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=config (cpu|wall)  $4=ext
copy_excimer_profile() {
  local out=$1 role=$2 cfg=$3 ext=$4
  run_for_role "$role" "$cfg" || return 1
  cp "${rundir[$role.$cfg]}/php.$ext" "$out"
}

for role in base current; do
  for cfg in "${CONFIGS[@]}"; do
    for ext in "${EXTS[@]}"; do
      out="$GENERATED_INPUTS/php.excimer.$cfg.$role.$ext"
      try emit "$out" copy_excimer_profile "$role" "$cfg" "$ext"
    done
  done
done

verify_pairs

exit "$status"
