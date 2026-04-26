import { normalizeProfileToMdOptions } from '../../options.ts'
import type { ProfileToMdOptions } from '../../options.ts'
import { formatPythonProfile } from './format.ts'
import type { PythonProfile } from './parse.ts'
import { detectPythonProfile, parsePythonProfile } from './parse.ts'
import { summarizePythonProfile } from './summarize.ts'

export { detectPythonProfile }

/**
 * Converts the given Python cProfile/profile output to Markdown.
 *
 * It is assumed that {@link data} is valid profile output. The behavior of this
 * function is undefined for invalid profiles.
 *
 * You can generate a Python profile in several ways:
 * - [`python -m cProfile -o output.prof script.py`](https://docs.python.org/3/library/profile.html)
 * - [`python -m cProfile script.py`](https://docs.python.org/3/library/profile.html)
 * - Using [`cProfile.run()`](https://docs.python.org/3/library/profile.html#cProfile.run) with [`pstats.Stats.print_stats()`](https://docs.python.org/3/library/profile.html#pstats.Stats.print_stats)
 *
 * Save the text output by redirecting stdout or by using `pstats.Stats` with
 * `stream` parameter.
 */
export const pythonProfileToMd = (
  data: string | Uint8Array,
  options?: ProfileToMdOptions,
): string =>
  pythonProfileToMdInternal(
    parsePythonProfile(
      typeof data === `string` ? new TextEncoder().encode(data) : data,
    ),
    options,
  )

export const pythonProfileToMdInternal = (
  profile: PythonProfile,
  options?: ProfileToMdOptions,
): string => {
  const normalizedOptions = normalizeProfileToMdOptions(options)
  return formatPythonProfile(
    summarizePythonProfile(profile, normalizedOptions),
    normalizedOptions,
  )
}
