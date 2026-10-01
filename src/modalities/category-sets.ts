/**
 * A closed set of categories an entity is drawn from, with the title `--help`
 * lists it under and the noun for the entities it categorizes.
 */
export type CategorySet = {
  readonly title: string
  readonly noun: string
  readonly categories: readonly string[]
}

const FUNCTION_CATEGORIES = [
  `ours`,
  `third-party`,
  `stdlib`,
  `native`,
  `unknown`,
  `garbage-collector`,
  `compiler`,
  `jit`,
  `regexp`,
  `kernel`,
  `idle`,
] as const

/**
 * The category of code a function originated from.
 *
 * A closed set, so a category names the same thing whichever origin wrote the
 * input and formatting can partition by it. The first three record where the
 * code came from, the next two what the profiler could determine about a frame
 * with no source file, and the rest name a runtime activity.
 *
 * These boundaries decide most assignments:
 *
 * - `stdlib` requires positive evidence that the code is the language's or
 *   runtime's own library: a standard-library path, module specifier,
 *   namespace, or package prefix. A missing source file is never evidence for
 *   `stdlib`
 * - `native` is compiled code the profiler attributed to no source file, plus
 *   code located in a shared library or in a runtime's own C/C++ sources.
 *   `unknown` is a frame the profiler could not identify, a weaker claim,
 *   because the code may be a function in the profiled language
 * - `compiler` is the runtime producing executable code, and `jit` is a frame
 *   executing code the runtime generated. Where a frame both executes generated
 *   code and does the work of a named activity, the activity takes precedence,
 *   so a garbage collection write barrier compiled inline is
 *   `garbage-collector`
 */
export type FunctionCategory = (typeof FUNCTION_CATEGORIES)[number]

export const FUNCTION_CATEGORY_SET = {
  title: `Function categories`,
  noun: `function`,
  categories: FUNCTION_CATEGORIES,
} as const satisfies CategorySet
