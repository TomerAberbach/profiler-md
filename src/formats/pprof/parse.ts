import { Profile as PprofProto } from 'pprof-format'
import { determineMetric } from '../../metric.ts'
import type { Metric } from '../../metric.ts'
import type { Profile, ProfileStackFrame, Sample } from '../../profile/index.ts'

export const parsePprof = (bytes: Uint8Array): Profile[] => {
  const profile = PprofProto.decode(bytes)

  const { strings } = profile.stringTable
  const string = (index: number | bigint): string =>
    strings[Number(index)] ?? ``

  // Every value type except a plain sample count becomes a metric; remember each
  // one's index into a sample's parallel value list. The first count-typed
  // value is how many sampled occurrences a record aggregates (pprof merges
  // identical stacks into one record), so it feeds the sample count rather
  // than a metric.
  const metrics: Metric[] = []
  const metricValueIndices: number[] = []
  let countValueIndex: number | undefined
  for (const [index, { type, unit }] of profile.sampleType.entries()) {
    const unitName = string(unit)
    if (unitName.toLowerCase() === `count`) {
      countValueIndex ??= index
      continue
    }
    metricValueIndices.push(index)
    metrics.push(determineMetric({ name: string(type), unit: unitName }))
  }

  // Each function is a frame; its dense index is its id. IDs are keyed raw
  // (pprof-format decodes a given varint to `number`, or `bigint` past 4
  // encoded bytes, deterministically per value) so the per-sample lookups
  // below never build key strings.
  const frameIndexByFunctionId = new Map<number | bigint, number>()
  const frames: ProfileStackFrame[] = []
  for (const func of profile.function) {
    frameIndexByFunctionId.set(func.id, frames.length)
    frames.push({
      name: string(func.name) || string(func.systemName),
      location: {
        urlOrPath: string(func.filename),
        line: knownPprofLine(Number(func.startLine)),
      },
    })
  }

  // Each location resolves to its frame indices and lines, dropping any frame
  // whose function is absent from the table (unsymbolized) rather than carrying
  // a dangling reference into aggregation.
  type LocationFrame = { frame: number; line: number }
  const framesByLocationId = new Map<number | bigint, LocationFrame[]>()
  for (const location of profile.location) {
    framesByLocationId.set(
      location.id,
      location.line.flatMap(({ functionId, line }) => {
        const frame = frameIndexByFunctionId.get(functionId)
        return frame === undefined ? [] : { frame, line: Number(line) }
      }),
    )
  }

  const samples: Sample[] = []
  for (const { locationId, value } of profile.sample) {
    const frameIndices: number[] = []
    let calleeLine: number | undefined
    for (const id of locationId) {
      // Drop references to locations absent from the table, as above.
      for (const { frame, line } of framesByLocationId.get(id) ?? []) {
        frameIndices.push(frame)
        calleeLine ??= line
      }
    }
    if (frameIndices.length === 0) {
      continue
    }
    // A record's metric values are totals across its aggregated occurrences,
    // and the aggregator scales values by the sample count, so divide them
    // back to per-occurrence. A missing or zero count (some producers zero it
    // while a metric value remains) still describes at least one occurrence.
    const count =
      countValueIndex === undefined ? 1 : Number(value[countValueIndex]!)
    const sampleCount = count > 0 ? count : 1
    samples.push({
      values: metricValueIndices.map(
        index => Number(value[index]!) / sampleCount,
      ),
      frameIndices,
      // The leaf's line 0 means unknown, not a fallback to deeper lines.
      line: knownPprofLine(calleeLine),
      sampleCount,
    })
  }

  return [{ frames, metrics, samples }]
}

/**
 * Normalizes a pprof line to `undefined` when unknown: proto3 has no field
 * presence for scalars, so an unset `Function.start_line` or `Line.line`
 * decodes to `0`.
 */
const knownPprofLine = (line: number | undefined): number | undefined =>
  line !== undefined && line > 0 ? line : undefined
