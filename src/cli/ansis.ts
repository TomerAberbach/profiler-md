import { Ansis } from 'ansis'

export const stdoutSupportsColor = (): boolean =>
  streamSupportsColor(process.stdout)

export const stderrSupportsColor = (): boolean =>
  streamSupportsColor(process.stderr)

const streamSupportsColor = (stream: NodeJS.WriteStream): boolean =>
  makeAnsis({ isTTY: Boolean(stream.isTTY) }).isSupported()

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
