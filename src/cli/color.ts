import { Ansis } from 'ansis'
import { isTTYOutput } from './output.ts'

export type MakeAnsisOptions = {
  outputPath: string
  color: boolean | undefined
}

export const makeAnsis = (options: MakeAnsisOptions): Ansis =>
  new Ansis(resolveColorLevel(options))

type ColorLevel = 0 | 1 | 2 | 3

const resolveColorLevel = ({
  outputPath,
  color,
}: MakeAnsisOptions): ColorLevel => {
  let level: ColorLevel = isTTYOutput(outputPath) ? ttyColorLevel() : 0

  if (process.env.NO_COLOR !== undefined) {
    level = 0
  }

  if (color === false) {
    level = 0
  } else if (color === true) {
    level = Math.max(level, 1) as ColorLevel
  }

  const forceLevel = parseForceColor(process.env.FORCE_COLOR)
  if (forceLevel !== null) {
    level = forceLevel
  }

  return level
}

const ttyColorLevel = (): ColorLevel => {
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/68299
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const depth = process.stdout.getColorDepth?.() ?? 1
  if (depth >= 24) {
    return 3
  }
  if (depth >= 8) {
    return 2
  }
  return 1
}

const parseForceColor = (value: string | undefined): ColorLevel | null => {
  if (!value) {
    return null
  }

  switch (value) {
    case `0`:
    case `false`:
      return 0
    case `2`:
      return 2
    case `3`:
      return 3
    default:
      return 1
  }
}
