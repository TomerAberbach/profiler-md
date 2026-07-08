/** Encodes callgrind profile {@link lines} into UTF-8 bytes for testing. */
export const makeCallgrind = (lines: string[]): Uint8Array =>
  textEncoder.encode(lines.map(line => `${line}\n`).join(``))

const textEncoder = new TextEncoder()
