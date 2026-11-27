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
 * - `--update` fetches both versions of each upgraded project's profiled files,
 *   rewrites `ground-truth.json` from their file diffs, and then rewrites
 *   `scores.txt`. Run it after a change to how files are diffed
 * - `--update-stale` rewrites `scores.txt`, the committed scores of every
 *   example pair, and does what `--update` does when `ground-truth.json` is out
 *   of date, the only case in which it fetches anything. Run it after a change
 *   to the pairing, the inputs, or a version pin
 * - `--check` fails when `ground-truth.json` is out of date, without fetching
 *   anything, when a workload script pins a version per side that no upgraded
 *   project reads and `UNSCORED_PINS` does not exempt, or when the scores differ
 *   from `scores.txt`
 * - `--filter <substring>` scores only the example pairs whose base filename
 *   contains it
 * - `--edits <count>` sets the number of synthetic edits per example pair
 * - `--seed <seed>` sets the synthetic edits' seed
 * - `--verbose` prints a row per example pair instead of per origin
 *
 * `--update`, `--update-stale`, and `--check` each take no other flag.
 */

import { parseArgs } from 'node:util'
import { parseExampleFilename } from '../../src/formats/examples.ts'
import { resolveProfileToMdOptions } from '../../src/options.ts'
import {
  GROUND_TRUTH_PATH,
  groundTruthProblems,
  staleProjects,
  UPDATE_HINT,
  updateGroundTruth,
} from './ground-truth.ts'
import type { ProfiledFile } from './ground-truth.ts'
import { committedPairs } from './inputs.ts'
import type { EditOptions } from './pair.ts'
import { evaluatePairs } from './pairs.ts'
import { addEvaluation } from './score.ts'
import { scoreProblems, updateScores } from './scores.ts'
import { printTable } from './table.ts'
import type {
  GroundTruthName,
  GroupsName,
  ScoreTable,
  ScoreTables,
} from './table.ts'

const main = async (): Promise<void> => {
  const command = parseCommand()
  switch (command.type) {
    case `check`:
      await checkScores()
      break
    case `update`:
      await updateAll()
      break
    case `update-stale`:
      await updateStale()
      break
    case `print`:
      printScores(await scoreCurrentPairs(command.scoringOptions))
  }
}

type Command =
  | { type: `check` | `update` | `update-stale` }
  | { type: `print`; scoringOptions: ScoringOptions }

const parseCommand = (): Command => {
  const { values } = parseArgs({
    options: {
      check: { type: `boolean` },
      update: { type: `boolean` },
      'update-stale': { type: `boolean` },
      filter: { type: `string` },
      edits: { type: `string` },
      seed: { type: `string` },
      verbose: { type: `boolean` },
    },
  })
  const type = ([`check`, `update`, `update-stale`] as const).find(
    name => values[name],
  )
  if (type === undefined) {
    return {
      type: `print`,
      scoringOptions: {
        filter: values.filter,
        edits: Number(values.edits ?? COMMITTED_SCORES.edits),
        seed: Number(values.seed ?? COMMITTED_SCORES.seed),
        verbose: values.verbose ?? false,
      },
    }
  }

  const flags = Object.keys(values).map(name => `--${name}`)
  if (flags.length > 1) {
    throw new Error(
      `conflicting flags, got: ${flags.join(` `)}\n  hint: pass --${type} alone, because the committed scores cover every example pair`,
    )
  }
  return { type }
}

const checkScores = async (): Promise<void> => {
  const { tables, profiledFiles, missingFiles } =
    await scoreCommittedPairs(COMMITTED_SCORES)
  const problems = [
    ...groundTruthProblems(profiledFiles),
    // A pair whose ground truth lacks a file is unscored, so its scores differ.
    ...(missingFiles.length > 0 ? [] : scoreProblems(tables)),
  ]
  if (problems.length > 0) {
    process.stderr.write(`${problems.join(`\n`)}\n`)
    process.exitCode = 1
  }
}

const updateAll = async (): Promise<void> => {
  updateGroundTruth(resolveProfileToMdOptions({ baseURL: null }))
  updateScores(await scoreCurrentPairs(COMMITTED_SCORES))
}

const updateStale = async (): Promise<void> => {
  const { tables, profiledFiles } = await scoreCommittedPairs(COMMITTED_SCORES)
  if (staleProjects(profiledFiles).length > 0) {
    await updateAll()
  } else {
    updateScores(tables)
  }
}

const printScores = (tables: ScoreTables): void => {
  for (const [name, { rows, entities }] of Object.entries(tables)) {
    printTable(name, rows, entities)
  }
}

type ScoringOptions = EditOptions & {
  filter?: string | undefined

  /** Whether to score a row per example pair instead of per origin. */
  verbose: boolean
}

const COMMITTED_SCORES: ScoringOptions = { edits: 5, seed: 1, verbose: true }

/** Scores the example pairs, and throws when the ground truth lacks a file. */
const scoreCurrentPairs = async (
  scoringOptions: ScoringOptions,
): Promise<ScoreTables> => {
  const { tables, missingFiles } = await scoreCommittedPairs(scoringOptions)
  const [missing] = missingFiles
  if (missing) {
    throw new Error(
      `${GROUND_TRUTH_PATH} has no current file diff of ${missing.project} file ${missing.path}\n  hint: ${UPDATE_HINT}`,
    )
  }
  return tables
}

/**
 * Scores each example pair, and returns the evaluations keyed by kind, then by
 * row, with the entities each kind scores. Also returns the upgraded projects'
 * files the pairs profile, and those the ground truth lacks.
 */
const scoreCommittedPairs = async ({
  filter,
  edits,
  seed,
  verbose,
}: ScoringOptions): Promise<{
  tables: ScoreTables
  profiledFiles: ProfiledFile[]
  missingFiles: ProfiledFile[]
}> => {
  const tables: ScoreTables = {
    'same code': { rows: new Map(), entities: `functions` },
    'version change': { rows: new Map(), entities: `functions` },
    'synthetic edits': { rows: new Map(), entities: `functions` },
    ...groupTables(`instance groups`),
    ...groupTables(`retained nodes`),
  }
  const profiledFiles: ProfiledFile[] = []
  const missingFiles: ProfiledFile[] = []
  const results = await evaluatePairs(committedPairs(filter), { edits, seed })
  for (const [pair, result] of results) {
    const row = verbose
      ? `${pair.name}.${pair.ext}`
      : parseExampleFilename(pair.base).origin
    for (const [table, evaluation] of result.evaluations) {
      addEvaluation(tables[table].rows, row, evaluation)
    }
    profiledFiles.push(...result.profiledFiles)
    missingFiles.push(...result.missingFiles)
  }
  return { tables, profiledFiles, missingFiles }
}

/** A kind of retainer group's tables, one per kind of ground truth. */
const groupTables = <Groups extends GroupsName>(
  groups: Groups,
): Record<`${GroundTruthName}, ${Groups}`, ScoreTable> => {
  const tables = [`same code`, `version change`, `synthetic edits`].map(
    (groundTruth): [string, ScoreTable] => [
      `${groundTruth}, ${groups}`,
      { rows: new Map(), entities: `groups` },
    ],
  )
  return Object.fromEntries(tables) as Record<
    `${GroundTruthName}, ${Groups}`,
    ScoreTable
  >
}

await main()
