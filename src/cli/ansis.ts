import { Ansis } from 'ansis'

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
    ...globalThis,
    process: {
      ...process,
      env: {
        NO_COLOR: `1`,
        ...process.env,
      },
    },
  })
}
