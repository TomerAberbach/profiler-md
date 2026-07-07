#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

COMPOSER_VERSION="2.7.7"
COMPOSER_URL="https://getcomposer.org/download/${COMPOSER_VERSION}/composer.phar"
COMPOSER_SHA256="aab940cd53d285a54c50465820a2080fcb7182a4ba1e5f795abfb10414a4b4be"

GUZZLE_URL="https://github.com/guzzle/guzzle"
GUZZLE_TAG="7.9.2"

CONFIGS=(cpu wall)
if ! php -r 'exit(defined("EXCIMER_CPU") ? 0 : 1);' >/dev/null 2>&1; then
  notice "EXCIMER_CPU unavailable on this platform (macOS); capturing wall only"
  CONFIGS=(wall)
fi

profile="$REPO/scripts/inputs/assets/php/profile.php"

composer_phar=""
fetch_composer() {
  [[ -n "$composer_phar" ]] && return 0

  local phar="$WORKDIR/composer.phar"
  notice "Fetching composer $COMPOSER_VERSION"
  curl -fsSL "$COMPOSER_URL" -o "$phar"
  echo "$COMPOSER_SHA256  $phar" | shasum -a 256 -c -

  composer_phar="$phar"
}

declare -A guzzle_dir=()
setup_for_role() {
  local role=$1
  [[ -n "${guzzle_dir[$role]:-}" ]] && return 0

  fetch_composer

  notice "Cloning guzzle $GUZZLE_TAG ($role)"

  local src="$WORKDIR/php-$role"
  git clone --depth 1 --branch "$GUZZLE_TAG" "$GUZZLE_URL" "$src"

  guzzle_dir[$role]="$src"
}

# capture_fn for emit: $1=out  $2=role  $3=config (cpu|wall)
capture_excimer() {
  local out=$1 role=$2 cfg=$3
  setup_for_role "$role"
  local src="${guzzle_dir[$role]}"

  notice "Profiling composer dump-autoload using excimer ($cfg, $role)"
  php "$profile" "$out" "$cfg" "$src" "$composer_phar"
}

for role in base current; do
  for cfg in "${CONFIGS[@]}"; do
    out="$GENERATED_INPUTS/php.excimer.$cfg.$role.speedscope.json"
    try emit "$out" capture_excimer "$role" "$cfg"
  done
done

verify_pairs

exit "$status"
