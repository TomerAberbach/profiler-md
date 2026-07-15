import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import { matchEntryFromRules } from './origin.ts'
import type { EntryMatchRule, OriginSpec } from './origin.ts'

/**
 * The `rustc/<40-hex commit hash>` path segment that Rust embeds in stdlib
 * source locations, e.g.
 * `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`.
 *
 * A source-string fragment (not a `RegExp`) so it can be spliced into a larger
 * pattern; shared between the stdlib detection and match normalization here,
 * which collapse the same hash.
 */
const RUSTC_COMMIT_HASH_PATH = `rustc/[0-9a-f]{40}`

// Cargo build-script output directories embed a per-build hash and always emit
// into an `out/` directory, e.g. `build/web-compiler-274140d43750284c/out/parser.rs`.
// The `out/` lookahead keeps this from stripping unrelated `build/<name>-<16 hex>/`
// directories (e.g. some JS bundler outputs) that aren't Cargo build scripts.
const CARGO_BUILD_HASH_REGEX =
  /(?<prefix>^|\/)(?<dir>build\/[^/]+)-[0-9a-f]{16}(?=\/out\/)/u

// Rust stdlib paths embed the rustc commit hash (see RUSTC_COMMIT_HASH_PATH),
// which varies per toolchain build.
const RUSTC_HASH_REGEX = new RegExp(
  `(?<prefix>^|/)${RUSTC_COMMIT_HASH_PATH}(?=/)`,
  `u`,
)

/**
 * Match-normalization rules stripping the per-build Cargo build-script hash
 * and the rustc commit hash from a location.
 */
const RUST_LOCATION_MATCH_RULES: EntryMatchRule[] = [
  [CARGO_BUILD_HASH_REGEX, `$<prefix>$<dir>`],
  [RUSTC_HASH_REGEX, `$<prefix>rustc`],
]

export const pprofRsOriginSpec = {
  id: `pprof-rs`,
  formats: [`pprof`],
  isMarkerEntry: entry =>
    rustStdlibCategory(entry) !== undefined || isRustName(entry),
  categorizeEntry: entry =>
    rustStdlibCategory(entry) ??
    cargoRegistryCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
  matchEntry: matchEntryFromRules({
    location: RUST_LOCATION_MATCH_RULES,
  }),
} as const satisfies OriginSpec

/** Categorizes Rust standard-library (`std`/`core`/`alloc`) frames as `stdlib`. */
const rustStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && RUST_STDLIB_PATH.test(fileReferencePath(location))
    ? `stdlib`
    : undefined

/**
 * Rust stdlib sources come from the rustc build, under a `/rustc/` path bearing
 * the commit hash, or from a local rustup toolchain, under a
 * `/lib/rustlib/src/rust/` path.
 */
const RUST_STDLIB_PATH = new RegExp(
  `/${RUSTC_COMMIT_HASH_PATH}/|/lib/rustlib/src/rust/`,
  `u`,
)

/** Categorizes frames from Cargo's dependency registry as `third-party`. */
const cargoRegistryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && fileReferencePath(location).includes(`/registry/src/`)
    ? `third-party`
    : undefined

/** Whether the entry's name carries Rust's name-mangling syntax. */
const isRustName = ({ name }: DeepReadonly<ProfileEntry>): boolean =>
  name !== undefined &&
  (name.includes(`{{closure}}`) || /::\{closure#\d/u.test(name))
