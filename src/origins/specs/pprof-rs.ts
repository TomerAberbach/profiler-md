import type { DeepReadonly } from '../../helpers/types.ts'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { locationlessCategory, pathCategory } from '../categorize.ts'
import { RUST_LOCATION_MATCH_RULES, RUSTC_COMMIT_HASH_PATH } from '../rust.ts'
import { matchEntryFromRules, placeholderPathNormalizer } from '../spec.ts'
import type { OriginSpec } from '../spec.ts'

/**
 * The path pprof-rs writes for a symbol without debug info: its
 * `Symbol::filename` substitutes `Unknown` for a missing file name, e.g. for
 * `_main` or a stdlib entry point in a release build. Its `Symbol::raw_name`
 * substitutes the same string for a missing name, so a nameless symbol reaches
 * the pipeline as a function named `Unknown`.
 */
const UNKNOWN_PATHS: ReadonlySet<string> = new Set([`Unknown`])

export const pprofRsOriginSpec = {
  id: `pprof-rs`,
  formats: [`pprof`],
  isMarkerEntry: entry =>
    rustStdlibCategory(entry) !== undefined || isRustName(entry),
  categorizeEntry: entry =>
    rustStdlibCategory(entry) ??
    cargoRegistryCategory(entry) ??
    locationlessCategory(entry) ??
    `ours`,
  matchEntry: matchEntryFromRules({
    location: RUST_LOCATION_MATCH_RULES,
  }),
  normalizeStackFrame: placeholderPathNormalizer(UNKNOWN_PATHS),
} as const satisfies OriginSpec

/** Categorizes Rust standard-library (`std`/`core`/`alloc`) frames as `stdlib`. */
const rustStdlibCategory = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory | undefined =>
  pathCategory(entry, `stdlib`, RUST_STDLIB_PATH)

/**
 * Rust stdlib sources come from the rustc build, under a `/rustc/` path bearing
 * the commit hash, or from a local rustup toolchain, under a
 * `/lib/rustlib/src/rust/` path.
 */
const RUST_STDLIB_PATH = new RegExp(
  `/${RUSTC_COMMIT_HASH_PATH}/|/lib/rustlib/src/rust/`,
  `u`,
)

/** Whether the entry's name contains Rust's demangled closure syntax. */
const isRustName = ({ name }: DeepReadonly<ProfileEntry>): boolean =>
  name !== undefined &&
  (name.includes(`{{closure}}`) || /::\{closure#\d/u.test(name))

/** Categorizes frames from Cargo's dependency registry as `third-party`. */
const cargoRegistryCategory = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory | undefined =>
  pathCategory(entry, `third-party`, CARGO_REGISTRY_SOURCE)

/** A crate Cargo unpacked from a registry, e.g. `…/registry/src/index…/serde-1.0.0/`. */
const CARGO_REGISTRY_SOURCE = /\/registry\/src\//u
