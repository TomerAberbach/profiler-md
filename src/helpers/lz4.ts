import { DynamicTypedArray } from './array.ts'

/** The little-endian magic that begins an LZ4 frame. */
const FRAME_MAGIC = 0x18_4d_22_04

/** The first of the 16 magics reserved for skippable frames. */
const SKIPPABLE_MAGIC_START = 0x18_4d_2a_50
const SKIPPABLE_MAGIC_END = 0x18_4d_2a_5f

/** Returns whether {@link bytes} begins with the LZ4 frame magic. */
export const isLz4Frame = (bytes: Uint8Array): boolean =>
  bytes.length >= 4 &&
  new DataView(bytes.buffer, bytes.byteOffset, 4).getUint32(0, true) ===
    FRAME_MAGIC

/**
 * Decompresses the concatenated LZ4 frames in {@link bytes}.
 *
 * Blocks are decompressed into one contiguous output so a block in linked mode
 * can reference the bytes the preceding blocks produced. Checksums are read
 * past but not verified.
 *
 * {@link maxLength} stops decompression once that many bytes are out, for a
 * caller that needs only a prefix, such as one identifying a compressed file
 * by its magic. The returned prefix may be longer than asked for, since
 * decompression stops at a sequence boundary.
 *
 * @throws if the bytes are not a well-formed LZ4 frame.
 * @see https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md
 */
export const decompressLz4Frame = (
  bytes: Uint8Array,
  maxLength = Infinity,
): Uint8Array => {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  // A frame declaring its content size grows the output to fit before its
  // blocks are read, so this is the starting capacity for one that doesn't.
  const output = new GrowableBytes(
    Math.min(Math.max(bytes.length, 1 << 16), Math.max(maxLength * 2, 64)),
  )

  let offset = 0
  while (offset + 4 <= bytes.length && output.length < maxLength) {
    const magic = view.getUint32(offset, true)
    offset += 4

    if (magic >= SKIPPABLE_MAGIC_START && magic <= SKIPPABLE_MAGIC_END) {
      const size = readUint32(view, offset, bytes.length)
      offset += 4 + size
      continue
    }
    if (magic !== FRAME_MAGIC) {
      throw new Error(`expected an LZ4 frame magic`)
    }

    offset = decompressFrame(bytes, view, offset, output, maxLength)
  }

  return output.toBytes()
}

/**
 * Decompresses the frame whose descriptor begins at {@link offset}, appending
 * to {@link output}, and returns the offset just past the frame.
 */
const decompressFrame = (
  bytes: Uint8Array,
  view: DataView,
  offset: number,
  output: GrowableBytes,
  maxLength: number,
): number => {
  const { hasContentChecksum, hasBlockChecksums, contentSize, blocksOffset } =
    readFrameDescriptor(bytes, view, offset)
  offset = blocksOffset

  // A declared content size larger than a typed array can hold is corrupt, and
  // the doubling growth reaches whatever the frame really decompresses to.
  if (contentSize !== undefined && contentSize <= MAXIMUM_RESERVATION) {
    output.reserve(output.length + Math.min(contentSize, maxLength))
  }

  while (true) {
    const blockHeader = readUint32(view, offset, bytes.length)
    offset += 4
    if (blockHeader === 0) {
      return offset + (hasContentChecksum ? 4 : 0)
    }

    const size = blockHeader & 0x7f_ff_ff_ff
    const end = offset + size
    if (end > bytes.length) {
      throw new Error(`truncated LZ4 block`)
    }

    if ((blockHeader & 0x80_00_00_00) === 0) {
      decompressBlock(bytes, offset, end, output, maxLength)
    } else {
      output.append(bytes.subarray(offset, end))
    }

    offset = end + (hasBlockChecksums ? 4 : 0)
    if (output.length >= maxLength) {
      return offset
    }
  }
}

/** The largest reservation a frame's declared content size is trusted for. */
const MAXIMUM_RESERVATION = 2 ** 32 - 1

/**
 * Reads the frame descriptor beginning at {@link offset}: which of the
 * optional checksums the frame's blocks and content contain, the size the
 * frame decompresses to when it declares one, and the offset of the first
 * block header.
 */
const readFrameDescriptor = (
  bytes: Uint8Array,
  view: DataView,
  offset: number,
): {
  hasContentChecksum: boolean
  hasBlockChecksums: boolean
  contentSize: number | undefined
  blocksOffset: number
} => {
  const flags = readByte(bytes, offset)
  const version = flags >> 6
  if (version !== 1) {
    throw new Error(`unsupported LZ4 frame version: ${version}`)
  }
  const hasContentSize = (flags & 0b0000_1000) !== 0
  const hasDictionaryId = (flags & 0b0000_0001) !== 0

  // The content size follows the flags and the block descriptor (a maximum
  // block size this decoder has no need to bound).
  const contentSizeOffset = offset + 2
  if (hasContentSize && contentSizeOffset + 8 > bytes.length) {
    throw new Error(`truncated LZ4 frame`)
  }

  return {
    hasContentChecksum: (flags & 0b0000_0100) !== 0,
    hasBlockChecksums: (flags & 0b0001_0000) !== 0,
    contentSize: hasContentSize
      ? Number(view.getBigUint64(contentSizeOffset, true))
      : undefined,
    // Past the content size and the optional dictionary ID comes the header
    // checksum, and then the first block.
    blocksOffset:
      contentSizeOffset +
      (hasContentSize ? 8 : 0) +
      (hasDictionaryId ? 4 : 0) +
      1,
  }
}

/**
 * Decompresses the LZ4 block spanning `[start, end)` of {@link bytes} into
 * {@link output}.
 *
 * A block is a series of sequences, each a run of literal bytes followed by a
 * match copied from earlier output. In linked mode a match may reach back into
 * a previous block, so matches are copied from the accumulated output rather
 * than from this block alone.
 */
const decompressBlock = (
  bytes: Uint8Array,
  start: number,
  end: number,
  output: GrowableBytes,
  maxLength: number,
): void => {
  let offset = start
  while (offset < end && output.length < maxLength) {
    const token = bytes[offset++]!

    let literalLength = token >> 4
    if (literalLength === 15) {
      literalLength += readLengthExtension(bytes, offset, end)
      offset += lengthExtensionSize(bytes, offset, end)
    }

    const literalsEnd = offset + literalLength
    if (literalsEnd > end) {
      throw new Error(`LZ4 literals run past the end of the block`)
    }
    output.append(bytes.subarray(offset, literalsEnd))
    offset = literalsEnd

    // The last sequence of a block ends after its literals, with no match.
    if (offset === end) {
      break
    }
    if (offset + 2 > end) {
      throw new Error(`truncated LZ4 match offset`)
    }

    const matchOffset = bytes[offset]! | (bytes[offset + 1]! << 8)
    offset += 2
    if (matchOffset === 0) {
      throw new Error(`LZ4 match offset of zero`)
    }

    let matchLength = token & 0x0f
    if (matchLength === 15) {
      matchLength += readLengthExtension(bytes, offset, end)
      offset += lengthExtensionSize(bytes, offset, end)
    }
    output.copyWithin(matchOffset, matchLength + MINIMUM_MATCH_LENGTH)
  }
}

/** The length every match encodes implicitly, since no shorter match is coded. */
const MINIMUM_MATCH_LENGTH = 4

/** Sums the `0xff`-terminated length extension bytes beginning at {@link offset}. */
const readLengthExtension = (
  bytes: Uint8Array,
  offset: number,
  end: number,
): number => {
  let length = 0
  while (true) {
    if (offset >= end) {
      throw new Error(`truncated LZ4 length extension`)
    }
    const byte = bytes[offset++]!
    length += byte
    if (byte !== 0xff) {
      return length
    }
  }
}

/** The number of bytes {@link readLengthExtension} consumes at {@link offset}. */
const lengthExtensionSize = (
  bytes: Uint8Array,
  offset: number,
  end: number,
): number => {
  let size = 1
  while (offset + size <= end && bytes[offset + size - 1] === 0xff) {
    size++
  }
  return size
}

const readByte = (bytes: Uint8Array, offset: number): number => {
  if (offset >= bytes.length) {
    throw new Error(`truncated LZ4 frame`)
  }
  return bytes[offset]!
}

const readUint32 = (view: DataView, offset: number, length: number): number => {
  if (offset + 4 > length) {
    throw new Error(`truncated LZ4 frame`)
  }
  return view.getUint32(offset, true)
}

/** An append-only byte buffer that doubles its capacity as it fills. */
class GrowableBytes {
  readonly #bytes: DynamicTypedArray<Uint8Array>
  #length = 0

  public constructor(capacity: number) {
    this.#bytes = new DynamicTypedArray(new Uint8Array(capacity))
  }

  public get length(): number {
    return this.#length
  }

  /** Grows the buffer to hold {@link capacity} bytes without reallocating. */
  public reserve(capacity: number): void {
    this.#bytes.ensureCapacity(capacity)
  }

  public append(part: Uint8Array): void {
    const bytes = this.#bytes.ensureCapacity(this.#length + part.length)
    bytes.set(part, this.#length)
    this.#length += part.length
  }

  /**
   * Appends {@link length} bytes copied from {@link distance} bytes back,
   * one at a time because the ranges may overlap when the match repeats a
   * shorter pattern.
   */
  public copyWithin(distance: number, length: number): void {
    if (distance > this.#length) {
      throw new Error(`LZ4 match reaches before the start of the output`)
    }

    const bytes = this.#bytes.ensureCapacity(this.#length + length)
    let from = this.#length - distance
    let to = this.#length
    for (let index = 0; index < length; index++) {
      bytes[to++] = bytes[from++]!
    }
    this.#length = to
  }

  public toBytes(): Uint8Array {
    return this.#bytes.array.subarray(0, this.#length)
  }
}
