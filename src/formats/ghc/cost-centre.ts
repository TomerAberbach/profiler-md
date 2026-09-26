import type { StackFrame } from '../../modalities/stack-frame.ts'

/**
 * A cost centre: the annotation GHC's runtime attributes ticks and allocation
 * to, present in every format the runtime writes.
 */
export type GhcCostCentre = {
  /** The binding the cost centre covers, e.g. `lbsToTokens`. */
  label: string

  /** The module defining the binding, e.g. `Data.Aeson.KeyMap`. */
  module: string

  /**
   * The source span GHC assigned, e.g. `src/Data/Aeson/KeyMap.hs:247:1-30`, or
   * a placeholder like `<built-in>` for a cost centre with no source.
   */
  srcLoc: string
}

/**
 * Builds the stack frame a cost centre's samples resolve to.
 *
 * The module qualifies the label into the name Haskell code refers to the
 * binding by, since a bare label repeats across modules. Every container module
 * exports a `fromList`.
 */
export const costCentreStackFrame = ({
  label,
  module,
  srcLoc,
}: GhcCostCentre): StackFrame => ({
  name: `${module}.${label}`,
  definition: costCentreDefinition(srcLoc),
})

/**
 * The cost centre's source and the position its span starts at, where its
 * binding is defined.
 *
 * A cost centre with no source of its own is located nowhere.
 *
 * A source matching neither span shape becomes the whole path, since dropping
 * it would lose the file along with the position.
 */
const costCentreDefinition = (srcLoc: string): StackFrame[`definition`] => {
  if (!srcLoc || PLACEHOLDER_SOURCES.has(srcLoc)) {
    return undefined
  }

  const span = SINGLE_LINE_SPAN.exec(srcLoc) ?? MULTI_LINE_SPAN.exec(srcLoc)
  if (!span) {
    return { type: `file`, urlOrPath: srcLoc }
  }

  const { line, column } = span.groups!
  return {
    type: `file`,
    urlOrPath: srcLoc.slice(0, span.index),
    position: {
      line: Number(line),
      column: Number.parseInt(column!, 10),
    },
  }
}

/**
 * What GHC writes in place of a span for its runtime's built-in cost centres,
 * for a module-wide CAF, and for a binding the compiler generated.
 */
const PLACEHOLDER_SOURCES = new Set([
  `<built-in>`,
  `<entire-module>`,
  `<no location info>`,
])

/**
 * The suffix of a span within one line, e.g. the `:247:1-30` of
 * `src/Data/Aeson/KeyMap.hs:247:1-30`, leaving the file before it.
 *
 * The file is whatever GHC compiled the binding from, a preprocessed or
 * generated source (`.hsc`, `.x`) as much as a `.hs` one, so the suffix alone
 * identifies the shape.
 *
 * The column group holds the start column, followed by the end column when the
 * two differ. Parsing the leading number discards the end column.
 */
const SINGLE_LINE_SPAN = /:(?<line>\d+):(?<column>\d[\d-]*)$/u

/**
 * The suffix of a span across lines, e.g. the `:(118,1)-(131,17)` of
 * `Profile.hs:(118,1)-(131,17)`.
 */
const MULTI_LINE_SPAN = /:\((?<line>\d+),(?<column>\d+)\)-\(\d+,\d+\)$/u
