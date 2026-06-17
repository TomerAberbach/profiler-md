/** Encodes collapsed stack {@link lines} into UTF-8 bytes for testing. */
export const makeCollapsed = (lines: string[]): Uint8Array =>
  textEncoder.encode(lines.map(line => `${line}\n`).join(``))

const textEncoder = new TextEncoder()
