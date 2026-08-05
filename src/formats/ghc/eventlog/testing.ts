import { concatUint8Arrays } from '../../../helpers/bytes.ts'

export type EventlogCostCentre = {
  id: number
  label: string
  module: string
  srcLoc: string
}

/** A cost-centre stack sample, as cost-centre IDs innermost first. */
export type EventlogSample = number[]

/**
 * Builds an eventlog containing {@link costCentres} and {@link samples}, in the
 * order the runtime writes them: the header's event type declarations, the
 * cost-centre definitions, then the samples.
 *
 * Omitting {@link tickInterval} builds the log of a program run without
 * `+RTS -p`, whose samples are counted rather than timed.
 *
 * {@link sampleEventSize} is the size the header declares for a sample event,
 * which the runtime writes as the variable-size marker.
 */
export const makeGhcEventlog = ({
  costCentres = [],
  samples = [],
  tickInterval,
  sampleEventSize = VARIABLE_SIZE,
}: {
  costCentres?: EventlogCostCentre[]
  samples?: EventlogSample[]
  tickInterval?: number
  sampleEventSize?: number
} = {}): Uint8Array =>
  concatUint8Arrays([
    ascii(`hdrb`),
    ascii(`hetb`),
    eventType(COST_CENTRE_DEFINITION, VARIABLE_SIZE, `Cost centre definition`),
    eventType(TIME_PROFILE_SAMPLE, sampleEventSize, `Time profile sample`),
    eventType(TIME_PROFILE_BEGIN, 8, `Start of a time profile`),
    ascii(`hete`),
    ascii(`hdre`),
    ascii(`datb`),
    ...(tickInterval === undefined
      ? []
      : [event(TIME_PROFILE_BEGIN, uint64(tickInterval))]),
    ...costCentres.map(costCentre =>
      variableEvent(
        COST_CENTRE_DEFINITION,
        concatUint8Arrays([
          uint32(costCentre.id),
          nullTerminated(costCentre.label),
          nullTerminated(costCentre.module),
          nullTerminated(costCentre.srcLoc),
          Uint8Array.of(0),
        ]),
      ),
    ),
    ...samples.map((stack, index) =>
      variableEvent(
        TIME_PROFILE_SAMPLE,
        concatUint8Arrays([
          uint32(0),
          uint64(index + 1),
          Uint8Array.of(stack.length),
          ...stack.map(uint32),
        ]),
      ),
    ),
    uint16(DATA_END),
  ])

/** Builds an event of an undeclared type, which no runtime writes. */
export const undeclaredEvent = (): Uint8Array =>
  concatUint8Arrays([uint16(999), uint64(0)])

const COST_CENTRE_DEFINITION = 161
const TIME_PROFILE_SAMPLE = 167
const TIME_PROFILE_BEGIN = 168
const DATA_END = 0xffff
const VARIABLE_SIZE = -1

const eventType = (id: number, size: number, description: string): Uint8Array =>
  concatUint8Arrays([
    ascii(`etb\0`),
    uint16(id),
    uint16(size),
    uint32(description.length),
    ascii(description),
    uint32(0),
    ascii(`ete\0`),
  ])

const event = (id: number, payload: Uint8Array): Uint8Array =>
  concatUint8Arrays([uint16(id), uint64(0), payload])

const variableEvent = (id: number, payload: Uint8Array): Uint8Array =>
  concatUint8Arrays([uint16(id), uint64(0), uint16(payload.length), payload])

const ascii = (text: string): Uint8Array =>
  Uint8Array.from(text, character => character.codePointAt(0)!)

const nullTerminated = (text: string): Uint8Array =>
  concatUint8Arrays([new TextEncoder().encode(text), Uint8Array.of(0)])

const uint16 = (value: number): Uint8Array => {
  const bytes = new Uint8Array(2)
  new DataView(bytes.buffer).setUint16(0, value)
  return bytes
}

const uint32 = (value: number): Uint8Array => {
  const bytes = new Uint8Array(4)
  new DataView(bytes.buffer).setUint32(0, value)
  return bytes
}

const uint64 = (value: number): Uint8Array => {
  const bytes = new Uint8Array(8)
  new DataView(bytes.buffer).setBigUint64(0, BigInt(value))
  return bytes
}
