import { Ansis } from 'ansis'

export const stdoutSupportsColor = (): boolean =>
  streamSupportsColor(process.stdout)

export const stderrSupportsColor = (): boolean =>
  streamSupportsColor(process.stderr)

const streamSupportsColor = (stream: NodeJS.WriteStream): boolean =>
  makeAnsis({ isTTY: isTTY(stream) }).isSupported()

export const isTTY = (stream: NodeJS.WriteStream): boolean =>
  // @types/node types `isTTY` as a boolean, but a non-TTY stream leaves it
  // undefined.
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion
  Boolean(stream.isTTY)

export type MakeAnsisOptions = {
  /** Whether the stream the styled text is written to is a TTY. */
  isTTY: boolean
}

export const makeAnsis = ({ isTTY }: MakeAnsisOptions): Ansis => {
  if (isTTY) {
    return new Ansis()
  }

  // `FORCE_COLOR` and the color flags still override this default
  return new Ansis({
    process: {
      ...process,
      env: {
        NO_COLOR: `1`,
        ...process.env,
      },
    },
  })
}
