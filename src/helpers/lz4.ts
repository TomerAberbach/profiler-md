import { DynamicTypedArray } from './array.ts'
import { ByteQueue } from './bytes.ts'

/** The little-endian magic that begins an LZ4 frame. */
const FRAME_MAGIC = 0x18_4d_22_04

/** The first and last of the 16 magics reserved for skippable frames. */
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
 * @throws if the bytes are not a well-formed LZ4 frame.
 */
export const decompressLz4Frame = (bytes: Uint8Array): Uint8Array => {
  const output = new GrowableBytes(Math.max(bytes.length, WINDOW_SIZE))
  const decoder = new Lz4FrameDecoder(output)
  decoder.push(bytes)
  decoder.end()
  return output.toBytes()
}

/**
 * Decompresses the concatenated LZ4 frames {@link stream} yields, emitting
 * each block as it is decoded, however the input is chunked.
 *
 * The decoder retains the last 64 KiB it produced, the farthest back a match
 * may reach, and the bytes of the block it is decoding, so memory is bounded
 * by the block size a frame declares (at most 4 MiB) however large the input.
 *
 * The returned stream errors if the bytes are not a well-formed LZ4 frame.
 */
export const decompressLz4FrameStream = (
  stream: ReadableStream<Uint8Array>,
): ReadableStream<Uint8Array> => {
  let decoder: Lz4FrameDecoder
  return stream.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      start: controller => {
        const output = new Lz4Window()
        decoder = new Lz4FrameDecoder(output, () => {
          const bytes = output.read()
          if (bytes.length > 0) {
            controller.enqueue(bytes)
          }
        })
      },
      transform: chunk => decoder.push(chunk),
      flush: () => decoder.end(),
    }),
  )
}

/**
 * The farthest back a match may reach, since a match offset is 16 bits. A
 * decoder that has retained this much output can resolve any match.
 */
const WINDOW_SIZE = 1 << 16

/**
 * Decompresses LZ4 frames incrementally. Each {@link push} decodes every block
 * the bytes so far complete into the output, calling {@link onBlock} after
 * each, and {@link end} checks that the input stopped at a frame boundary.
 *
 * Checksums are read past but not verified.
 *
 * @see https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md
 */
class Lz4FrameDecoder {
  readonly #input = new ByteQueue()
  readonly #output: Lz4Output
  readonly #onBlock: () => void
  /** The frame whose blocks are being read, or `undefined` between frames. */
  #frame: FrameDescriptor | undefined
  /** The block whose bytes are awaited, or `undefined` between blocks. */
  #block: BlockHeader | undefined
  /** Bytes to discard before reading on: a skippable frame or a checksum. */
  #skip = 0

  public constructor(output: Lz4Output, onBlock: () => void = () => {}) {
    this.#output = output
    this.#onBlock = onBlock
  }

  /** Appends {@link bytes} to the input and decodes as far as they allow. */
  public push(bytes: Uint8Array): void {
    this.#input.push(bytes)
    while (this.#step()) {
      // Each step consumes one unit of the input, if it has arrived whole.
    }
  }

  /** @throws if the input ended inside a frame or after the last one. */
  public end(): void {
    if (this.#block !== undefined) {
      throw new Error(`truncated LZ4 block`)
    }
    if (this.#skip > 0 || this.#frame !== undefined) {
      throw new Error(`truncated LZ4 frame`)
    }
    if (this.#input.length > 0) {
      throw new Error(`trailing bytes after the last LZ4 frame`)
    }
  }

  /** Consumes the next unit of the input and returns whether it could. */
  #step(): boolean {
    if (this.#skip > 0) {
      const skipped = Math.min(this.#skip, this.#input.length)
      this.#input.take(skipped)
      this.#skip -= skipped
      return skipped > 0
    }
    if (this.#frame === undefined) {
      return this.#readFrameHeader()
    }
    if (this.#block === undefined) {
      return this.#readBlockHeader(this.#frame)
    }
    return this.#readBlock(this.#frame, this.#block)
  }

  #readFrameHeader(): boolean {
    const input = this.#input
    if (input.length < 4) {
      return false
    }

    const magic = input.uint32(0, true)
    if (magic >= SKIPPABLE_MAGIC_START && magic <= SKIPPABLE_MAGIC_END) {
      if (input.length < 8) {
        return false
      }
      this.#skip = input.uint32(4, true)
      input.take(8)
      return true
    }
    if (magic !== FRAME_MAGIC) {
      throw new Error(`expected an LZ4 frame magic`)
    }

    // The flags record which optional fields the rest of the descriptor
    // contains.
    if (input.length < 5) {
      return false
    }
    const flags = input.uint8(4)
    const version = flags >> 6
    if (version !== 1) {
      throw new Error(`unsupported LZ4 frame version: ${version}`)
    }
    const hasContentSize = (flags & 0b0000_1000) !== 0
    const hasDictionaryId = (flags & 0b0000_0001) !== 0

    // The flags and block descriptor, the optional content size and dictionary
    // ID, and the header checksum.
    const headerLength =
      4 + 2 + (hasContentSize ? 8 : 0) + (hasDictionaryId ? 4 : 0) + 1
    if (input.length < headerLength) {
      return false
    }
    const maximumBlockSize = maximumBlockSizeOf(input.uint8(5))
    const contentSize = hasContentSize ? input.uint64(6, true) : undefined
    input.take(headerLength)

    this.#frame = {
      maximumBlockSize,
      hasContentChecksum: (flags & 0b0000_0100) !== 0,
      hasBlockChecksums: (flags & 0b0001_0000) !== 0,
    }
    if (contentSize !== undefined) {
      this.#output.expect?.(contentSize)
    }
    return true
  }

  #readBlockHeader(frame: FrameDescriptor): boolean {
    const input = this.#input
    if (input.length < 4) {
      return false
    }
    const header = input.uint32(0, true)
    input.take(4)

    if (header === 0) {
      // The end mark, followed by the content checksum when the frame has one.
      this.#frame = undefined
      this.#skip = frame.hasContentChecksum ? 4 : 0
      return true
    }

    // Checking the size here, before the block's bytes arrive, keeps a corrupt
    // header from buffering the rest of the input.
    const size = header & 0x7f_ff_ff_ff
    if (size > frame.maximumBlockSize) {
      throw new Error(
        `LZ4 block larger than the frame's maximum block size of ${frame.maximumBlockSize} bytes, got: ${size}`,
      )
    }
    this.#block = { size, compressed: (header & 0x80_00_00_00) === 0 }
    return true
  }

  #readBlock(frame: FrameDescriptor, block: BlockHeader): boolean {
    if (this.#input.length < block.size) {
      return false
    }
    const bytes = this.#input.take(block.size)
    if (block.compressed) {
      decompressBlock(bytes, this.#output)
    } else {
      this.#output.append(bytes)
    }
    this.#block = undefined
    this.#skip = frame.hasBlockChecksums ? 4 : 0
    this.#onBlock()
    return true
  }
}

type FrameDescriptor = {
  /** The largest size a block's bytes and its decoded content may have. */
  maximumBlockSize: number
  hasContentChecksum: boolean
  hasBlockChecksums: boolean
}

/**
 * The maximum block size the block descriptor byte {@link descriptor}
 * declares, from the four sizes the format defines.
 *
 * @throws if the descriptor declares a reserved size.
 */
const maximumBlockSizeOf = (descriptor: number): number => {
  const sizeId = (descriptor >> 4) & 0b111
  if (sizeId < 4) {
    throw new Error(`reserved LZ4 block maximum size, got: ${sizeId}`)
  }
  return 1 << (8 + 2 * sizeId)
}

type BlockHeader = {
  size: number
  compressed: boolean
}

/**
 * Decompresses the LZ4 block {@link bytes} into {@link output}.
 *
 * A block is a series of sequences, each a run of literal bytes followed by a
 * match copied from earlier output. In linked mode a match may reach back into
 * a previous block, so matches are copied from the accumulated output rather
 * than from this block alone.
 */
const decompressBlock = (bytes: Uint8Array, output: Lz4Output): void => {
  const end = bytes.length
  let offset = 0
  while (offset < end) {
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

/**
 * Where a decoder writes decompressed bytes: an append-only buffer a match can
 * copy earlier output from.
 */
type Lz4Output = {
  /** Declares that the frame being decoded will append {@link length} bytes. */
  expect?: (length: number) => void
  append: (bytes: Uint8Array) => void
  /** Appends {@link length} bytes copied from {@link distance} bytes back. */
  copyWithin: (distance: number, length: number) => void
}

/**
 * An append-only byte buffer that doubles its capacity as it fills, holding
 * everything appended to it.
 */
class GrowableBytes implements Lz4Output {
  readonly #bytes: DynamicTypedArray<Uint8Array>
  #length = 0

  public constructor(capacity: number) {
    this.#bytes = new DynamicTypedArray(new Uint8Array(capacity))
  }

  public get length(): number {
    return this.#length
  }

  /**
   * Grows the buffer to fit the declared bytes without reallocating as they
   * arrive. A length larger than a typed array can hold is corrupt, and the
   * doubling growth reaches whatever the frame really decompresses to.
   */
  public expect(length: number): void {
    if (length <= MAXIMUM_RESERVATION) {
      this.#bytes.ensureCapacity(this.#length + length)
    }
  }

  public append(part: Uint8Array): void {
    const bytes = this.#bytes.ensureCapacity(this.#length + part.length)
    bytes.set(part, this.#length)
    this.#length += part.length
  }

  /**
   * Copies one byte at a time because the ranges may overlap when the match
   * repeats a shorter pattern.
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

  /** A view of the bytes appended so far. */
  public toBytes(): Uint8Array {
    return this.#bytes.array.subarray(0, this.#length)
  }
}

/** The largest reservation a frame's declared content size is trusted for. */
const MAXIMUM_RESERVATION = 2 ** 32 - 1

/**
 * An {@link Lz4Output} that returns its bytes as they are decoded, retaining
 * only the window a later match may copy from.
 *
 * The buffer is never written below its length and is replaced rather than
 * reused when the window slides, so a view {@link read} returned stays valid
 * however much is decoded after it.
 */
class Lz4Window implements Lz4Output {
  /**
   * Sized for the window and a few small blocks, and grown by doubling to fit
   * the block size the frames turn out to use.
   */
  #bytes = new GrowableBytes(2 * WINDOW_SIZE)
  /** The length of {@link bytes} already returned by {@link read}. */
  #read = 0

  public append(bytes: Uint8Array): void {
    this.#bytes.append(bytes)
  }

  public copyWithin(distance: number, length: number): void {
    this.#bytes.copyWithin(distance, length)
  }

  /** Returns the bytes decoded since the last read. */
  public read(): Uint8Array {
    const bytes = this.#bytes.toBytes().subarray(this.#read)
    this.#read = this.#bytes.length

    // Slide once the bytes before the window outgrow the slide interval, so a
    // slide copies the window at most once per block, and the buffer holds at
    // most the interval, the window, and one decoded block.
    if (this.#read - WINDOW_SIZE >= SLIDE_INTERVAL) {
      const window = new GrowableBytes(this.#read)
      window.append(this.#bytes.toBytes().subarray(this.#read - WINDOW_SIZE))
      this.#bytes = window
      this.#read = WINDOW_SIZE
    }
    return bytes
  }
}

/**
 * How many bytes past the window the buffer accumulates between slides: the
 * largest block a frame may declare, so copying the window costs at most a
 * fraction of decoding a block's worth of output.
 */
const SLIDE_INTERVAL = 4 << 20
