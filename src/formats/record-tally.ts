import { formatConjunction, formatCount } from '../helpers/format.ts'
import type { RecordReader } from '../modalities/spec.ts'
import type { AggregationProfileToMdOptions } from '../options.ts'
import { FormatParseError, toFormatRejectionError } from './error.ts'
import type { FormatRejectionError } from './error.ts'
import type { FormatSpec, RecordTally } from './spec.ts'

/**
 * Tallies whether one parse produced a record, the records it skipped, and the
 * parts missing from the end of its input.
 *
 * As the parsed inputs' {@link RecordReader}, it reports an error their lazy
 * iterables throw as the format's rejection of the input.
 */
export class RecordTallyCounts implements RecordTally, RecordReader {
  #hasRecords = false

  readonly #formatSpec: FormatSpec

  readonly #skips = new Map<
    string,
    { unit: string; reason: string; count: number }
  >()

  readonly #missing = new Set<string>()

  public constructor(formatSpec: FormatSpec) {
    this.#formatSpec = formatSpec
  }

  public skipped(unit: string, reason: string, count = 1): void {
    const key = `${unit}\0${reason}`
    const skip = this.#skips.get(key)
    if (skip) {
      skip.count += count
    } else {
      this.#skips.set(key, { unit, reason, count })
    }
  }

  public endsBefore(missing: string): void {
    this.#missing.add(missing)
  }

  public records<Value>(records: Iterable<Value>): Iterable<Value> {
    return this.#classifyFailures(records, true)
  }

  public iterable<Value>(iterable: Iterable<Value>): Iterable<Value> {
    return this.#classifyFailures(iterable, false)
  }

  public parsed(count: number): void {
    if (count > 0) {
      this.#hasRecords = true
    }
  }

  // A plain iterator object, because a delegating generator costs more per
  // item.
  #classifyFailures<Value>(
    iterable: Iterable<Value>,
    yieldsRecords: boolean,
  ): Iterable<Value> {
    return {
      [Symbol.iterator]: () => {
        const iterator = iterable[Symbol.iterator]()
        return {
          next: () => {
            try {
              const result = iterator.next()
              if (yieldsRecords && !result.done) {
                this.#hasRecords = true
              }
              return result
            } catch (error: unknown) {
              throw toFormatRejectionError(this.#formatSpec, error)
            }
          },
          return: value =>
            iterator.return?.(value) ?? { done: true, value: undefined },
        }
      },
    }
  }

  /**
   * Throws when the parse produced no records and skipped a record or reached
   * the end of its input early. Otherwise, warns once per skip reason and
   * missing part.
   *
   * Call after aggregation, because a lazy iterable skips records while
   * aggregation consumes it.
   */
  public throwOrWarn({ logger }: AggregationProfileToMdOptions): void {
    if (this.#skips.size === 0 && this.#missing.size === 0) {
      return
    }

    if (!this.#hasRecords) {
      throw this.#noUsableRecordsError()
    }

    if (logger.warn) {
      for (const description of this.#skipDescriptions()) {
        logger.warn(`skipped ${description}`)
      }
      for (const description of this.#missingDescriptions()) {
        logger.warn(description)
      }
    }
  }

  #noUsableRecordsError(): FormatRejectionError {
    const causes = [...this.#missingDescriptions()]
    if (this.#skips.size > 0) {
      causes.unshift(
        `the parser skipped ${formatConjunction(this.#skipDescriptions())}`,
      )
    }
    return toFormatRejectionError(
      this.#formatSpec,
      new FormatParseError(
        `no usable records because ${formatConjunction(causes)}`,
      ),
    )
  }

  *#skipDescriptions(): Iterable<string> {
    for (const { unit, reason, count } of this.#skips.values()) {
      yield `${formatCount(count, unit)} ${reason}`
    }
  }

  *#missingDescriptions(): Iterable<string> {
    for (const missing of this.#missing) {
      yield `the input ends before ${missing}`
    }
  }
}
