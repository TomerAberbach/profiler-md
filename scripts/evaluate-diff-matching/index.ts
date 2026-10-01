/**
 * Scores how a diff pairs functions across its base and current sides against
 * ground truth, to measure a change to the pairing instead of judging it from
 * examples.
 *
 * A diff pairs functions by match key, which ignores line and column, and
 * pairs the functions that share a match key by their positions. The ground
 * truth identifies which current function each base function with a position
 * is:
 * - Same code: a pair whose workload runs one version on both sides. A base
 *   function is the current function at its position. A function with no
 *   counterpart there was recorded in one run only
 * - Version change: a pair whose workload runs consecutive releases of a
 *   project in `upgraded-projects.ts`. The committed `ground-truth.json`
 *   contains the file diff of each profiled file of such a project, which maps
 *   each base function to its current position. A function defined where the
 *   file diff changed has no known counterpart, so it goes unscored. A file no
 *   project matches is from a toolchain both sides share, so its positions map
 *   to themselves
 * - Synthetic edits: the same-code pairs with seeded edits applied to one
 *   source reference of the current side (lines inserted or deleted between
 *   functions, or columns shifted on one line), so the edits move each base
 *   function in it to a known position. Only the edited source reference's
 *   functions are scored
 *
 * Recall is the share of base functions with a counterpart that the diff pairs
 * with it. Precision is the share of the diff's pairs that are correct. The
 * weighted columns weight each base function by its share of its input's
 * total, so a mistake on a hot function counts for more. The `by position`
 * tables count only the functions whose match key several functions share on
 * either side, which the diff pairs by position.
 *
 * Usage:
 * - `pnpm evaluate-diff-matching` scores every committed pair
 * - `--update` fetches both versions of each upgraded project's profiled files
 *   and rewrites `ground-truth.json` from their file diffs. Run it after
 *   regenerating inputs or changing a version pin
 * - `--check` fails when `ground-truth.json` is out of date, without
 *   fetching anything
 * - `--filter <substring>` scores only the pairs whose base filename contains
 *   it
 * - `--edits <count>` sets the number of synthetic edits per pair
 * - `--seed <seed>` sets the synthetic edits' seed
 * - `--verbose` prints a row per pair instead of per origin
 */

import { parseArgs } from 'node:util'
import { parseExampleFilename } from '../../src/cli/examples.ts'
import { resolveProfileToMdOptions } from '../../src/options.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import {
  checkGroundTruth,
  readGroundTruth,
  updateGroundTruth,
} from './ground-truth.ts'
import { committedPairs, functionInputPairs } from './inputs.ts'
import { identity } from './position.ts'
import { addEvaluation, evaluate } from './score.ts'
import type { Evaluation } from './score.ts'
import { applySyntheticEdit, pairRandom } from './synthetic-edits.ts'
import { printTable } from './table.ts'
import { versionChangeMap } from './version-change.ts'

const main = (): void => {
  const { values } = parseArgs({
    options: {
      update: { type: `boolean`, default: false },
      check: { type: `boolean`, default: false },
      filter: { type: `string` },
      edits: { type: `string`, default: `5` },
      seed: { type: `string`, default: `1` },
      verbose: { type: `boolean`, default: false },
    },
  })
  const options = resolveProfileToMdOptions({ baseURL: null })
  if (values.update) {
    updateGroundTruth(options)
    return
  }
  if (values.check) {
    checkGroundTruth(options)
    return
  }

  const tables = scoreCommittedPairs(
    {
      filter: values.filter,
      edits: Number(values.edits),
      seed: Number(values.seed),
      verbose: values.verbose,
    },
    options,
  )
  for (const [name, rows] of Object.entries(tables)) {
    printTable(name, rows)
  }
}

/**
 * Scores each committed pair under the kinds of ground truth that apply to it,
 * and returns the evaluations keyed by kind, then by row.
 */
const scoreCommittedPairs = (
  {
    filter,
    edits,
    seed,
    verbose,
  }: { filter?: string; edits: number; seed: number; verbose: boolean },
  options: FormattingProfileToMdOptions,
): Record<string, Map<string, Evaluation>> => {
  const groundTruth = readGroundTruth()
  const tables = {
    'same code': new Map<string, Evaluation>(),
    'version change': new Map<string, Evaluation>(),
    'synthetic edits': new Map<string, Evaluation>(),
  }

  for (const pair of committedPairs(filter)) {
    const row = verbose
      ? `${pair.name}.${pair.ext}`
      : parseExampleFilename(pair.base).origin
    const random = pairRandom(seed, pair.base)
    for (const [baseInput, currentInput] of functionInputPairs(pair, options)) {
      const versionChange = versionChangeMap(
        baseInput,
        currentInput,
        groundTruth,
      )
      if (versionChange) {
        addEvaluation(
          tables[`version change`],
          row,
          evaluate(baseInput, currentInput, options, versionChange),
        )
        continue
      }

      addEvaluation(
        tables[`same code`],
        row,
        evaluate(baseInput, currentInput, options, identity),
      )
      for (let edit = 0; edit < edits; edit++) {
        const map = applySyntheticEdit(baseInput, currentInput, options, random)
        if (!map) {
          break
        }
        addEvaluation(
          tables[`synthetic edits`],
          row,
          evaluate(baseInput, currentInput, options, map.positionMap),
        )
        map.restore()
      }
    }
  }
  return tables
}

main()
