import { formatConjunction, formatCount } from '../helpers/format.ts'
import type { AggregationProfileToMdOptions } from '../options.ts'
import type { FormatConverter, RecordTally } from './converter.ts'
import { FormatParseError, toFormatRejectionError } from './error.ts'
import type { FormatRejectionError } from './error.ts'

/**
 * Tallies whether one parse produced a record, the records it skipped, and the
 * parts missing from the end of its input.
 */
export class RecordTallyCounts implements RecordTally {
  public hasRecords = false

  readonly #converter: FormatConverter

  readonly #skips = new Map<
    string,
    { unit: string; reason: string; count: number }
  >()

  readonly #missing = new Set<string>()

  public constructor(converter: FormatConverter) {
    this.#converter = converter
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

    if (!this.hasRecords) {
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
      this.#converter,
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
