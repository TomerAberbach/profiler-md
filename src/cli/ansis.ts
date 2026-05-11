import { Ansis } from 'ansis'
import { isTTYOutput } from './output.ts'

export type MakeAnsisOptions = {
  outputPath: string
}

export const makeAnsis = ({ outputPath }: MakeAnsisOptions): Ansis => {
  if (isTTYOutput(outputPath)) {
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
