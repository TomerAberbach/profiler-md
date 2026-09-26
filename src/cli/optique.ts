import {
  lineBreak,
  message,
  optionName,
  optionNames,
  text,
  value,
  valueSet,
} from '@optique/core/message'
import type { Message, MessageTerm } from '@optique/core/message'
import type { NonEmptyString } from '@optique/core/nonempty'
import {
  negatableFlag as negatableFlagBuiltin,
  option as optionBuiltin,
} from '@optique/core/primitives'
import type {
  NegatableFlagNames,
  NegatableFlagOptions,
  OptionOptions,
} from '@optique/core/primitives'
import { findSimilar } from '@optique/core/suggestion'
import type { OptionName } from '@optique/core/usage'
import {
  choice as choiceBuiltin,
  float,
  integer,
  isValueParser,
  regExp,
  string,
} from '@optique/core/valueparser'
import type {
  ChoiceOptionsString,
  ValueParser,
} from '@optique/core/valueparser'
import { path } from '@optique/run'
import { reasonOf } from '../error.ts'
import { uncapitalizeFirst } from '../helpers/format.ts'

/**
 * Parses a regex compiled with `flags`, stating the reason when it fails to
 * compile.
 */
export const regex = (flags = `u`): ValueParser<`sync`, RegExp> =>
  regExp({
    metavar: `REGEX`,
    flags,
    errors: {
      invalidRegExp: pattern =>
        message`expected a valid regex, ${text(regexErrorReason(pattern, flags))}, got: ${value(pattern)}`,
    },
  })

/**
 * The reason a regex fails to compile, lowercased. V8 reports it as
 * `Invalid regular expression: /<pattern>/<flags>: <reason>`, so the reason is
 * the text after the last colon.
 */
const regexErrorReason = (pattern: string, flags: string): string => {
  try {
    // eslint-disable-next-line no-new
    new RegExp(pattern, flags)
  } catch (error) {
    return uncapitalizeFirst(reasonOf(error).split(`: `).at(-1)!)
  }
  throw new Error(`expected the regex to fail to compile, got: ${pattern}`)
}

/**
 * Optique's `choice`, stating `expected` and suggesting the nearest of
 * `suggestions` (default: every choice) when the value is invalid.
 */
export const choice = <const Choice extends string>(
  choices: readonly Choice[],
  {
    expected,
    suggestions = choices,
    ...options
  }: ChoiceOptionsString & {
    expected: string
    suggestions?: readonly string[]
  },
): ValueParser<`sync`, Choice> =>
  choiceBuiltin(choices, {
    ...options,
    errors: {
      invalidChoice: input => {
        const error = message`expected ${text(expected)}, got: ${value(input)}`
        const similar = findSimilar(input, suggestions)
        return similar.length === 0
          ? error
          : [
              ...error,
              ...message`${lineBreak()}${text(`  hint: did you mean `)}${valueSet(
                similar,
                {
                  fallback: ``,
                  locale: `en-US`,
                  type: `disjunction`,
                },
              )}?`,
            ]
      },
      ...options.errors,
    },
  })

/**
 * Parses a number with `parser`, rejecting one outside `min` to `max`. Every
 * failure, whether the input is malformed, unsafe, or out of range, states
 * `expected` and the input as the caller typed it.
 */
const numberInRange = (
  parser: ValueParser<`sync`, number>,
  { expected, min, max }: { expected: string; min: number; max: number },
): ValueParser<`sync`, number> => ({
  ...parser,
  parse: input => {
    const result = parser.parse(input)
    return result.success && result.value >= min && result.value <= max
      ? result
      : {
          success: false,
          error: message`expected ${text(expected)}, got: ${value(input)}`,
        }
  },
})

export const integerAtLeast = (
  metavar: NonEmptyString,
  min: number,
): ValueParser<`sync`, number> =>
  numberInRange(integer({ metavar }), {
    expected: `an integer of at least ${min}`,
    min,
    max: Infinity,
  })

export const fraction = (
  metavar: NonEmptyString,
): ValueParser<`sync`, number> =>
  numberInRange(float({ metavar }), {
    expected: `a number from 0 to 1`,
    min: 0,
    max: 1,
  })

export const nonEmptyString = (
  metavar: NonEmptyString,
  expected: string,
): ValueParser<`sync`, string> =>
  string({
    metavar,
    pattern: /./su,
    errors: {
      patternMismatch: message`expected ${text(expected)}, got: ${value(``)}`,
    },
  })

const unexpectedValue = (names: MessageTerm, input: string): Message =>
  message`${names}: expected no value, got: ${value(input)}`

/**
 * Optique's `option`, reporting a value attached to a Boolean option in this
 * CLI's error style.
 */
export const option = ((...args: readonly unknown[]) => {
  if (args.some(arg => isValueParser(arg))) {
    return optionBuiltin(...(args as Parameters<typeof optionBuiltin>))
  }

  const names = args.filter(arg => typeof arg === `string`) as [
    OptionName,
    ...OptionName[],
  ]
  const options = args.find(arg => typeof arg === `object`) as
    OptionOptions | undefined
  return optionBuiltin(...names, {
    ...options,
    errors: {
      unexpectedValue: input => unexpectedValue(optionNames(names), input),
      ...options?.errors,
    },
  })
}) as typeof optionBuiltin

/**
 * Optique's `negatableFlag`, reporting a value attached to either flag in this
 * CLI's error style.
 */
export const negatableFlag = (
  names: NegatableFlagNames,
  options?: NegatableFlagOptions,
): ReturnType<typeof negatableFlagBuiltin> =>
  negatableFlagBuiltin(names, {
    ...options,
    errors: {
      unexpectedValue: (name, input) =>
        unexpectedValue(optionName(name), input),
      ...options?.errors,
    },
  })

export const filePath = (
  metavar: NonEmptyString,
): ValueParser<`sync`, string> =>
  path({
    metavar,
    errors: { emptyPath: message`expected a file path, got: ${value(``)}` },
  })
