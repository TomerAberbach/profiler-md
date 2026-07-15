import { normalizeProfileToMdOptions } from '../options.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdOptions,
} from '../options.ts'

/**
 * Normalizes options for tests that call aggregation, diffing, or formatting
 * functions directly, which take resolved options. Only the full conversion
 * pipeline resolves `baseURL: 'auto'`, so tests can't pass `'auto'` here.
 */
export const resolveProfileToMdOptions = (
  options?: ProfileToMdOptions,
): FormattingProfileToMdOptions => {
  const { baseURL, ...rest } = normalizeProfileToMdOptions(options)
  if (baseURL === `auto`) {
    throw new Error(
      `baseURL: 'auto' is resolved by the conversion pipeline; pass a concrete base URL here`,
    )
  }
  return { ...rest, baseURL }
}
