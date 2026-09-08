import { describe, expect, test } from 'vitest'
import { decompressLz4Frame, isLz4Frame } from './lz4.ts'
import { lz4FrameOf } from './testing.ts'

const text = (bytes: Uint8Array): string => new TextDecoder().decode(bytes)
const codes = (string: string): number[] => [
  ...new TextEncoder().encode(string),
]

describe(`isLz4Frame`, () => {
  test(`recognizes the frame magic alone`, () => {
    expect(isLz4Frame(lz4FrameOf([]))).toBe(true)
    expect(isLz4Frame(Uint8Array.from([0x04, 0x22, 0x4d]))).toBe(false)
    expect(isLz4Frame(new TextEncoder().encode(`not lz4`))).toBe(false)
  })
})

describe(`decompressLz4Frame`, () => {
  test(`reads a sequence of literals`, () => {
    // A token of five literals and no match, which is how a block ends.
    expect(
      text(decompressLz4Frame(lz4FrameOf([[0x50, ...codes(`hello`)]]))),
    ).toBe(`hello`)
  })

  test(`reads a match copied from earlier output`, () => {
    // One literal, then a match of eight bytes one byte back, which repeats
    // that literal as it copies.
    expect(
      text(decompressLz4Frame(lz4FrameOf([[0x14, ...codes(`a`), 0x01, 0x00]]))),
    ).toBe(`aaaaaaaaa`)
  })

  test(`reads a length past what its token can hold`, () => {
    // A literal length of 15 means one or more extension bytes follow, summing
    // to the rest of the length.
    const literals = codes(`abcdefghijklmnopq`)
    expect(
      text(decompressLz4Frame(lz4FrameOf([[0xf0, 0x02, ...literals]]))),
    ).toBe(`abcdefghijklmnopq`)
  })

  test(`reads a match into the block before it`, () => {
    // The second block's match reaches four bytes back, into the first
    // block's output, as only linked blocks may.
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([
            [0x40, ...codes(`abcd`)],
            [0x00, 0x04, 0x00],
          ]),
        ),
      ),
    ).toBe(`abcdabcd`)
  })

  test(`reads a block stored uncompressed`, () => {
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([codes(`plain`)], { uncompressed: true }),
        ),
      ),
    ).toBe(`plain`)
  })

  test(`reads concatenated frames as one stream`, () => {
    const first = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    const second = lz4FrameOf([[0x20, ...codes(`ef`)]])
    const both = new Uint8Array(first.length + second.length)
    both.set(first)
    both.set(second, first.length)

    expect(text(decompressLz4Frame(both))).toBe(`abcdef`)
  })

  test(`stops at a requested prefix`, () => {
    const compressed = lz4FrameOf([
      [0x40, ...codes(`abcd`)],
      [0x40, ...codes(`efgh`)],
    ])

    // Decompression stops at a sequence boundary, so the prefix covers what
    // was asked for without necessarily ending there.
    expect(text(decompressLz4Frame(compressed, 2)).startsWith(`ab`)).toBe(true)
    expect(decompressLz4Frame(compressed, 2).length).toBeLessThan(8)
  })

  test(`reads a frame declaring the size it decompresses to`, () => {
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([[0x40, ...codes(`abcd`)]], { contentSize: 4n }),
        ),
      ),
    ).toBe(`abcd`)
  })

  test(`reads a frame declaring a size too large to allocate`, () => {
    expect(
      text(
        decompressLz4Frame(
          lz4FrameOf([[0x40, ...codes(`abcd`)]], { contentSize: 2n ** 63n }),
        ),
      ),
    ).toBe(`abcd`)
  })

  test(`rejects bytes that aren't a frame`, () => {
    expect(() =>
      decompressLz4Frame(new TextEncoder().encode(`hello!!`)),
    ).toThrow(`LZ4 frame magic`)
  })

  test(`rejects a block running past the end of the input`, () => {
    const compressed = lz4FrameOf([[0x40, ...codes(`abcd`)]])
    expect(() => decompressLz4Frame(compressed.subarray(0, 12))).toThrow(
      `truncated LZ4 block`,
    )
  })

  test(`rejects a match reaching before the start of the output`, () => {
    // A match nine bytes back with only one byte of output before it.
    expect(() =>
      decompressLz4Frame(lz4FrameOf([[0x14, ...codes(`a`), 0x09, 0x00]])),
    ).toThrow(`before the start`)
  })
})
