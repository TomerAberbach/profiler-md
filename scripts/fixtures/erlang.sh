#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

EFLAMBE_PIN="0.3.1"

assets="$REPO/scripts/fixtures/assets/erlang"
json_input="$REPO/scripts/fixtures/assets/shared/twitter.json"

project_dir=""
setup_project() {
  [[ -n "$project_dir" ]] && return 0
  local dir="$WORKDIR/erlang-profile"

  notice "Creating rebar3 project (eflambe $EFLAMBE_PIN)"

  ( cd "$WORKDIR" && rebar3 new app name=profile >/dev/null </dev/null )
  mv "$WORKDIR/profile" "$dir"

  cat >"$dir/rebar.config" <<EOF
{erl_opts, [debug_info]}.
{deps, [
  {eflambe, "$EFLAMBE_PIN"}
]}.
EOF

  cp "$assets/profile.erl" "$dir/src/profile.erl"

  notice "Fetching and compiling deps"

  ( cd "$dir" && rebar3 compile >/dev/null </dev/null )

  project_dir="$dir"
}

# capture_fn for emit: $1=out  $2=role
record_eflambe() {
  local out=$1 role=$2
  setup_project
  local dir="$project_dir"

  notice "Profiling json using eflambe ($role)"

  local profile="$WORKDIR/erlang-$role-profile"
  rm -rf "$profile"
  mkdir -p "$profile"

  ( cd "$profile" && erl -noshell \
      -pa "$dir"/_build/default/lib/*/ebin \
      -eval '
        application:ensure_all_started(eflambe),
        Doc = profile:doc("'"$json_input"'"),
        eflambe:apply({profile, run, [Doc]}, [{output_format, brendan_gregg}])
      ' \
      -s init stop )

  local produced
  produced=$(find "$profile" -type f -name '*.bggg' -o -type f -name '*profile*' 2>/dev/null | head -1)
  if [[ -z "$produced" ]]; then
    produced=$(find "$profile" -type f 2>/dev/null | head -1)
  fi
  [[ -n "$produced" ]] || { echo "  eflambe produced no output in $profile" >&2; return 1; }
  mv "$produced" "$out"
}

for role in base current; do
  emit "$FIXTURES/erlang.eflambe.cpu.$role.collapsed" record_eflambe "$role"
done

verify_pair \
  "$FIXTURES/erlang.eflambe.cpu.base.collapsed" \
  "$FIXTURES/erlang.eflambe.cpu.current.collapsed"
