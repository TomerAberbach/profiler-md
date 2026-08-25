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

  // If this is a non-TTY output, then start off the default level as no color.
  // CLI flags and `FORCE_COLOR` can still override this.
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
