/**
 * Scores how a diff pairs functions, and a heap snapshot's retainer groups,
 * across its base and current sides against ground truth, to measure a change
 * to the pairing instead of judging it from examples.
 *
 * A diff pairs functions by match key, which ignores line and column, and
 * pairs the functions that share a match key by their positions. The ground
 * truth identifies which current function each base function with a position
 * is, and under a version change, each base function with a source reference
 * and no position:
 * - Same code: an example pair whose workload runs one version on both sides. A
 *   base function is the current function at its position. A function with no
 *   counterpart there was recorded in one run only. A function with no position
 *   goes unscored, because an example pair that upgrades a project missing from
 *   `upgraded-projects.ts` is also scored as same code, and a function with no
 *   position would match by name across the upgrade
 * - Version change: an example pair whose workload runs consecutive releases of
 *   a project in `upgraded-projects.ts`. The committed `ground-truth.json`
 *   contains the file diff of each profiled file of such a project, which maps
 *   each base function to its current position. A function defined where the
 *   file diff changed has no known counterpart, so it goes unscored. A function
 *   with no position is the current function of its name in the same file,
 *   comparing names without the identifiers the origin strips because they
 *   differ per run or per build. `src/origins/inputs.test.ts` checks those
 *   rules. A file no project matches is from a toolchain both sides share, so
 *   its positions map to themselves
 * - Synthetic edits: the same-code example pairs with seeded edits applied to
 *   one source reference of the current side (lines inserted or deleted between
 *   functions, or columns shifted on one line), so the edits move each base
 *   function in it to a known position. Only the edited source reference's
 *   functions are scored
 *
 * Recall is the share of base functions with a counterpart that the diff pairs
 * with it. Precision is the share of the diff's pairs that are correct. The
 * weighted columns weight each base function by its share of its input's
 * total, so a mistake on a hot function counts for more. The `by position`
 * tables count only the functions whose match key several functions share on
 * either side, which the diff pairs by position. The `lines` tables score how
 * the diff pairs the executing lines of each correctly paired function, against
 * the current lines the ground truth maps the base lines to, weighting each
 * line by its share of its input's total. Synthetic edits move and delete
 * executing lines as they do functions.
 *
 * The `instance groups` tables score how a heap snapshot diff pairs each
 * constructor's instance groups. A base group's counterpart is the current
 * group whose retainer path has the same steps, with each step's position
 * mapped under the same kinds of ground truth, and its edge and retainer
 * compared by match key. A group weighs its share of its heap snapshot's size.
 * The synthetic edits move the positions of the current side's paths in one
 * source reference, and only the groups with a step located in it are scored.
 * The `retained nodes` tables score how it pairs each function's retained
 * nodes, grouped by name, category, location, and retainer path within the
 * instance retaining them, the same way, with a group's counterpart also
 * sharing its nodes' match key and mapped position. Their synthetic edits also
 * move the nodes' positions, and score the groups whose nodes are located in
 * the edited source reference.
 *
 * Usage:
 * - `pnpm evaluate-diff-matching` scores every example pair
 * - `--update` fetches both versions of each upgraded project's profiled files
 *   and rewrites `ground-truth.json` from their file diffs. Run it after
 *   regenerating inputs or changing a version pin
 * - `--check` fails when `ground-truth.json` is out of date, without
 *   fetching anything, or when a workload script pins a version per side that
 *   no upgraded project reads and `UNSCORED_PINS` does not exempt
 * - `--filter <substring>` scores only the example pairs whose base filename
 *   contains it
 * - `--edits <count>` sets the number of synthetic edits per example pair
 * - `--seed <seed>` sets the synthetic edits' seed
 * - `--verbose` prints a row per example pair instead of per origin
 */

import { parseArgs } from 'node:util'
import { parseExampleFilename } from '../../src/formats/examples.ts'
import type { RetainerGroup } from '../../src/modalities/heap-snapshot/diff.ts'
import { resolveProfileToMdOptions } from '../../src/options.ts'
import type { FormattingProfileToMdOptions } from '../../src/options.ts'
import {
  checkGroundTruth,
  readGroundTruth,
  updateGroundTruth,
} from './ground-truth.ts'
import { committedPairs, scoredInputPairs } from './inputs.ts'
import { identity } from './position.ts'
import {
  applyRetainerGroupEdit,
  evaluateRetainerGroups,
  retainerGroupInputs,
} from './retainer-groups.ts'
import type { RetainerGroupInput } from './retainer-groups.ts'
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
  for (const [name, { rows, entities }] of Object.entries(tables)) {
    printTable(name, rows, entities)
  }
}

/**
 * Scores each example pair under the kinds of ground truth that apply to it,
 * and returns the evaluations keyed by kind, then by row, with the entities
 * each kind scores.
 */
const scoreCommittedPairs = (
  {
    filter,
    edits,
    seed,
    verbose,
  }: { filter?: string; edits: number; seed: number; verbose: boolean },
  options: FormattingProfileToMdOptions,
): Record<string, { rows: Map<string, Evaluation>; entities: string }> => {
  const groundTruth = readGroundTruth()
  const tables = {
    'same code': { rows: new Map<string, Evaluation>(), entities: `functions` },
    'version change': {
      rows: new Map<string, Evaluation>(),
      entities: `functions`,
    },
    'synthetic edits': {
      rows: new Map<string, Evaluation>(),
      entities: `functions`,
    },
    ...groupTables(`instance groups`),
    ...groupTables(`retained nodes`),
  }

  for (const pair of committedPairs(filter)) {
    const row = verbose
      ? `${pair.name}.${pair.ext}`
      : parseExampleFilename(pair.base).origin
    const random = pairRandom(seed, pair.base)
    for (const inputs of scoredInputPairs(pair, options)) {
      const versionChange = versionChangeMap(
        inputs.base,
        inputs.current,
        groundTruth,
      )

      if (inputs.type === `heap-snapshot`) {
        const scoreGroups = <Group extends RetainerGroup>(
          input: RetainerGroupInput<Group>,
          groups: `instance groups` | `retained nodes`,
        ) => {
          if (versionChange) {
            addEvaluation(
              tables[`version change, ${groups}`].rows,
              row,
              evaluateRetainerGroups(input, options, versionChange),
            )
            return
          }

          addEvaluation(
            tables[`same code, ${groups}`].rows,
            row,
            evaluateRetainerGroups(input, options, { positionMap: identity }),
          )
          for (let edit = 0; edit < edits; edit++) {
            const edited = applyRetainerGroupEdit(input, options, random)
            if (!edited) {
              break
            }
            addEvaluation(
              tables[`synthetic edits, ${groups}`].rows,
              row,
              evaluateRetainerGroups(edited.input, options, {
                positionMap: edited.positionMap,
                editedSourceReference: edited.sourceReference,
              }),
            )
          }
        }
        const { instanceGroups, retainedNodeGroups } = retainerGroupInputs(
          inputs.base,
          inputs.current,
          options,
        )
        scoreGroups(instanceGroups, `instance groups`)
        scoreGroups(retainedNodeGroups, `retained nodes`)
        continue
      }

      const { base: baseInput, current: currentInput } = inputs
      if (versionChange) {
        addEvaluation(
          tables[`version change`].rows,
          row,
          evaluate(
            baseInput,
            currentInput,
            options,
            versionChange.positionMap,
            versionChange.sourceReferenceMap,
          ),
        )
        continue
      }

      addEvaluation(
        tables[`same code`].rows,
        row,
        evaluate(baseInput, currentInput, options, identity),
      )
      for (let edit = 0; edit < edits; edit++) {
        const map = applySyntheticEdit(baseInput, currentInput, options, random)
        if (!map) {
          break
        }
        addEvaluation(
          tables[`synthetic edits`].rows,
          row,
          evaluate(baseInput, currentInput, options, map.positionMap),
        )
        map.restore()
      }
    }
  }
  return tables
}

type GroupTables<Groups extends string> = Record<
  `${`same code` | `version change` | `synthetic edits`}, ${Groups}`,
  { rows: Map<string, Evaluation>; entities: string }
>

/** A kind of retainer group's tables, one per kind of ground truth. */
const groupTables = <Groups extends string>(
  groups: Groups,
): GroupTables<Groups> =>
  ({
    [`same code, ${groups}`]: { rows: new Map(), entities: `groups` },
    [`version change, ${groups}`]: { rows: new Map(), entities: `groups` },
    [`synthetic edits, ${groups}`]: { rows: new Map(), entities: `groups` },
  }) as GroupTables<Groups>

main()
