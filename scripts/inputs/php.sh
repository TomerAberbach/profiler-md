#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

# Base and current profile consecutive composer releases, so a diff compares
# two versions of the same code.
declare -A COMPOSER_VERSION=([base]="2.7.7" [current]="2.7.8")
declare -A COMPOSER_SHA256=(
  [base]="aab940cd53d285a54c50465820a2080fcb7182a4ba1e5f795abfb10414a4b4be"
  [current]="3da35dc2abb99d8ef3fdb1dec3166c39189f7cb29974a225e7bbca04c1b2c6e0"
)

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

# Each role extracts its composer into one directory, so both record the same
# paths.
composer_src="$WORKLOAD_DIR/composer"
composer_role=""
setup_composer() {
  local role=$1
  [[ "$composer_role" == "$role" ]] && return 0

  local version=${COMPOSER_VERSION[$role]}
  local phar="$WORKDIR/composer-$version.phar"
  fetch_asset "composer $version" \
    "https://getcomposer.org/download/$version/composer.phar" \
    "${COMPOSER_SHA256[$role]}" "$phar" || return 1

  # Composer runs from the extracted phar so its frames name plain file paths,
  # as a PHP application's frames do, rather than `phar://` URLs.
  notice "Extracting composer $version"
  rm -rf "$composer_src" || return 1
  php -r '$p = new Phar($argv[1]); $p->extractTo($argv[2], null, true);' \
    "$phar" "$composer_src" || return 1

  composer_role=$role
}

guzzle_src=""
setup_guzzle() {
  [[ -n "$guzzle_src" ]] && return 0

  notice "Cloning guzzle $GUZZLE_TAG"

  local src="$WORKLOAD_DIR/guzzle"
  git clone --quiet --depth 1 --branch "$GUZZLE_TAG" "$GUZZLE_URL" "$src" || return 1

  guzzle_src="$src"
}

# Both roles profile the workload from the same paths, so their functions pair
# across a diff.
declare -A rundir=()
run_for_role() {
  local role=$1 cfg=$2
  local key="$role.$cfg"
  [[ -n "${rundir[$key]:-}" ]] && return 0

  setup_workload_dir || return 1
  setup_composer "$role" || return 1
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
