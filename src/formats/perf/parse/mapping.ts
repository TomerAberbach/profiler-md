import { FreeIndices } from '../../../helpers/free-indices.ts'
import type { SourceLocationInput } from '../../../location.ts'
import type { StackFrame } from '../../../modalities/stack-frame.ts'
import {
  isAnonymousMapping,
  isKernelMapping,
  KERNEL_MAPPING_NAME,
} from '../../../origins/linux.ts'

/**
 * The mappings one process made, as the records establishing them arrive:
 * unordered, and overlapping wherever a later mapping covered an earlier one.
 * Ordering them for lookup produces a {@link ProcessMaps}.
 */
export class RecordedMappings {
  /** Every mapping the process made or inherited, in the order they arrived. */
  readonly #mappings: Mapping[] = []

  /** When the process replaced its address space by an `execve`. */
  readonly #execTimes: number[] = []

  public add(mapping: Mapping): void {
    this.#mappings.push(mapping)
  }

  public addExec(time: number): void {
    this.#execTimes.push(time)
  }

  public inherit(mappings: readonly Mapping[]): void {
    for (const mapping of mappings) {
      this.#mappings.push(mapping)
    }
  }

  /**
   * Returns the mappings the process had at {@link time}: those made since the
   * last `execve` before then, and none made after.
   */
  public mappingsAt(time: number): Mapping[] {
    let execTime = 0
    for (const candidate of this.#execTimes) {
      if (candidate <= time && candidate > execTime) {
        execTime = candidate
      }
    }
    return this.#mappings.filter(
      mapping => mapping.time >= execTime && mapping.time <= time,
    )
  }

  /**
   * Orders the mappings for lookup. Each `execve` starts an image holding the
   * mappings made from it until the next, since the new image replaced every
   * mapping the old one had. Within an image, a mapping made later covers
   * whatever part of its range an earlier one had.
   */
  public toProcessMaps(): ProcessMaps {
    const starts = imageStarts(this.#execTimes)
    const mappings = mappingsByImage(this.#mappings, starts)
    const imageOf = (index: number): ProcessImage => ({
      start: starts[index]!,
      segments: segmentsOf(mappings[index]!),
      recent: undefined,
    })

    const images: [ProcessImage, ...ProcessImage[]] = [imageOf(0)]
    for (let index = 1; index < starts.length; index++) {
      images.push(imageOf(index))
    }
    return new ProcessMaps(images)
  }
}

/**
 * The address ranges a process had mapped, ordered for lookup, resolving an
 * address to the file mapped over it.
 */
export class ProcessMaps {
  /** In the order they began, beginning with the one it started with. */
  readonly #images: readonly [ProcessImage, ...ProcessImage[]]

  public constructor(images: readonly [ProcessImage, ...ProcessImage[]]) {
    this.#images = images
  }

  /**
   * Returns the mapping that covered the address whose halves are {@link high}
   * and {@link low} at {@link time}.
   */
  public find(high: number, low: number, time: number): Mapping | undefined {
    const image = this.#imageAt(time)
    const { recent, segments } = image
    if (recent && segmentCovers(recent, high, low)) {
      return recent.mapping
    }

    const segment = findSegment(segments, high, low)
    if (!segment) {
      return undefined
    }
    image.recent = segment
    return segment.mapping
  }

  #imageAt(time: number): ProcessImage {
    let index = this.#images.length - 1
    while (index > 0 && this.#images[index]!.start > time) {
      index--
    }
    return this.#images[index]!
  }
}

/**
 * One program image a process ran, and what it had mapped: from an `execve`
 * (or the recording's start) to the next.
 */
type ProcessImage = {
  /** When the `execve` that began it happened, or `0` for the first. */
  start: number
  segments: Segment[]

  /** The segment resolved last, which the next address usually falls in too. */
  recent: Segment | undefined
}

/**
 * A stretch of one process's address space that one mapping covered last: the
 * mapping's range, less whatever later mappings took over.
 */
type Segment = {
  startHigh: number
  startLow: number
  endHigh: number
  endLow: number
  mapping: Mapping
}

/**
 * Returns the times the images a process ran begin, which begin with the
 * recording's start, since the process was running something from then on.
 */
const imageStarts = (execTimes: readonly number[]): [number, ...number[]] => [
  0,
  ...[...new Set(execTimes)]
    .filter(time => time > 0)
    .sort((left, right) => left - right),
]

/** Splits the given mappings into the image each was made during. */
const mappingsByImage = (
  mappings: readonly Mapping[],
  starts: readonly number[],
): Mapping[][] => {
  const byImage = starts.map((): Mapping[] => [])
  for (const mapping of mappings) {
    let index = starts.length - 1
    while (index > 0 && starts[index]! > mapping.time) {
      index--
    }
    byImage[index]!.push(mapping)
  }
  return byImage
}

/**
 * Returns the non-overlapping segments the given mappings resolve to, ordered
 * by address. Where mappings overlap, the one made last covers the overlap,
 * as the kernel's address space did, and the later of two made at the same
 * time in the file covers it, since `perf` inserts them in that order.
 */
const segmentsOf = (mappings: Mapping[]): Segment[] => {
  const boundaries = boundaryPointsOf(mappings)
  const covering = coveringMappingsOf(mappings, boundaries)
  return segmentsFromIntervals(mappings, boundaries.points, covering)
}

/** Numbers the distinct points the given mappings begin and end at. */
const boundaryPointsOf = (mappings: Mapping[]): BoundaryPoints => {
  const count = mappings.length
  const boundaries = new Array<Boundary>(count * 2)
  for (let index = 0; index < count; index++) {
    const mapping = mappings[index]!
    boundaries[index * 2] = {
      high: mapping.startHigh,
      low: mapping.startLow,
      mapping: index,
      isEnd: false,
    }
    boundaries[index * 2 + 1] = {
      high: mapping.endHigh,
      low: mapping.endLow,
      mapping: index,
      isEnd: true,
    }
  }
  boundaries.sort((left, right) =>
    compareAddresses(left.high, left.low, right.high, right.low),
  )

  const points: Boundary[] = []
  const firstPoint = new Int32Array(count)
  const endPoint = new Int32Array(count)
  for (const boundary of boundaries) {
    const last = points.at(-1)
    if (
      !last ||
      compareAddresses(last.high, last.low, boundary.high, boundary.low) !== 0
    ) {
      points.push(boundary)
    }
    ;(boundary.isEnd ? endPoint : firstPoint)[boundary.mapping] =
      points.length - 1
  }

  return { points, firstPoint, endPoint }
}

/**
 * The distinct addresses the mappings begin and end at, in ascending order, and
 * where each mapping's range begins and ends among them. The interval a point
 * numbers runs from it to the point after it.
 */
type BoundaryPoints = {
  points: Boundary[]
  firstPoint: Int32Array
  endPoint: Int32Array
}

/** An end of a mapping's range, at the address with the given halves. */
type Boundary = { high: number; low: number; mapping: number; isEnd: boolean }

/**
 * Returns which mapping covers the interval each point begins, or `-1` for an
 * interval no mapping covers. Each mapping, newest first, takes the intervals
 * in its range that no newer mapping took already.
 */
const coveringMappingsOf = (
  mappings: Mapping[],
  { points, firstPoint, endPoint }: BoundaryPoints,
): Int32Array => {
  const newestFirst = mappings.map((_, index) => index)
  newestFirst.sort(
    (left, right) =>
      mappings[right]!.time - mappings[left]!.time || right - left,
  )

  const covering = new Int32Array(points.length).fill(-1)
  const free = new FreeIndices(points.length)
  for (const index of newestFirst) {
    const end = endPoint[index]!
    for (
      let interval = free.firstFrom(firstPoint[index]!);
      interval < end;
      interval = free.firstFrom(interval + 1)
    ) {
      covering[interval] = index
      free.take(interval)
    }
  }
  return covering
}

/** Returns one segment per run of adjacent intervals one mapping took. */
const segmentsFromIntervals = (
  mappings: Mapping[],
  points: Boundary[],
  covering: Int32Array,
): Segment[] => {
  const segments: Segment[] = []
  for (let interval = 0; interval < points.length - 1; interval++) {
    const index = covering[interval]!
    if (index === -1) {
      continue
    }
    const end = points[interval + 1]!
    if (interval > 0 && covering[interval - 1] === index) {
      const last = segments.at(-1)!
      last.endHigh = end.high
      last.endLow = end.low
      continue
    }
    segments.push({
      startHigh: points[interval]!.high,
      startLow: points[interval]!.low,
      endHigh: end.high,
      endLow: end.low,
      mapping: mappings[index]!,
    })
  }
  return segments
}

/**
 * Returns the segment covering the address whose halves are {@link high} and
 * {@link low}: the last one beginning at or below it, when it reaches that far.
 */
const findSegment = (
  segments: readonly Segment[],
  high: number,
  low: number,
): Segment | undefined => {
  let lowIndex = 0
  let highIndex = segments.length - 1
  while (lowIndex <= highIndex) {
    const middle = (lowIndex + highIndex) >> 1
    const segment = segments[middle]!
    if (compareAddresses(segment.startHigh, segment.startLow, high, low) <= 0) {
      lowIndex = middle + 1
    } else {
      highIndex = middle - 1
    }
  }

  const segment = segments[highIndex]
  return segment && segmentCovers(segment, high, low) ? segment : undefined
}

const segmentCovers = (
  { startHigh, startLow, endHigh, endLow }: Segment,
  high: number,
  low: number,
): boolean =>
  compareAddresses(startHigh, startLow, high, low) <= 0 &&
  compareAddresses(high, low, endHigh, endLow) < 0

/**
 * Orders two addresses given by their halves: negative when the first is
 * lower, zero when they are equal, and positive when it is higher.
 */
const compareAddresses = (
  leftHigh: number,
  leftLow: number,
  rightHigh: number,
  rightLow: number,
): number => leftHigh - rightHigh || leftLow - rightLow

/**
 * One file mapped over one address range of one process.
 *
 * Addresses are held as 32-bit halves throughout, because a kernel address is
 * far above the range a number holds exactly: rounded to a number, addresses
 * near a mapping's end round up to it and fall out of the mapping.
 */
export type Mapping = {
  /** The range's halves. */
  startHigh: number
  startLow: number
  endHigh: number
  endLow: number

  /** The halves of the offset into the mapped file the range begins at. */
  pageOffsetHigh: number
  pageOffsetLow: number

  /** When the mapping was made, or `0` when the file records no times. */
  time: number

  file: MappedFile
}

/**
 * A file mapped into a recorded process, owning the frames of the addresses
 * sampled within it so an address interns without a composite key.
 */
export class MappedFile {
  readonly #location: SourceLocationInput | undefined

  /**
   * A file-relative address to its index in the profile's frames, keyed by the
   * address's halves so every 64-bit address is its own key.
   */
  readonly #frames = new Map<number, Map<number, number>>()

  /**
   * Takes the path the file was mapped from, or nothing for the addresses no
   * mapping covers.
   */
  public constructor(path: string | undefined) {
    this.#location = path === undefined ? undefined : mappedFileLocation(path)
  }

  public frameFor(high: number, low: number, frames: StackFrame[]): number {
    let byLow = this.#frames.get(high)
    if (!byLow) {
      byLow = new Map()
      this.#frames.set(high, byLow)
    }

    let index = byLow.get(low)
    if (index === undefined) {
      index = frames.length
      frames.push({
        name: addressName(high, low),
        ...(this.#location === undefined ? {} : { location: this.#location }),
      })
      byLow.set(low, index)
    }
    return index
  }
}

/** Formats an address from its halves, the name an unsymbolized frame takes. */
const addressName = (high: number, low: number): string =>
  high === 0
    ? `0x${low.toString(16)}`
    : `0x${high.toString(16)}${low.toString(16).padStart(8, `0`)}`

/**
 * Where the code at a mapped address was defined, as far as the file states it:
 * the mapped file. A mapping backed by no file (the kernel, the vDSO, an
 * anonymous region) names what it is rather than a path, so it becomes a
 * logical reference to that name.
 */
const mappedFileLocation = (path: string): SourceLocationInput | undefined => {
  if (isKernelMapping(path)) {
    return { type: `logical`, name: KERNEL_MAPPING_NAME }
  }
  if (PSEUDO_FILE.test(path) || isAnonymousMapping(path)) {
    return { type: `logical`, name: path }
  }
  return path ? { type: `file`, urlOrPath: path } : undefined
}

/** A name `perf` gives a mapping backed by no file, e.g. `[vdso]`. */
const PSEUDO_FILE = /^\[[^\][]+\]$/u
