import { spawn } from 'node:child_process'
import {
  appendFileSync,
  closeSync,
  mkdtempSync,
  openSync,
  readFileSync,
  rmSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { parseArgs } from 'node:util'
import {
  capitalizeFirst,
  formatConjunction,
  formatMilliseconds,
} from '../src/helpers/format.ts'

/**
 * Runs the checks CI runs, printing a line per step as it finishes. When a
 * step fails, it then prints a summary, the full output of every failed step,
 * and the summary again, so both the first and the last lines of the output
 * name what failed. Each step writes its output to a log file in a temporary
 * directory, which is kept when a step fails. A file write is synchronous, so
 * a step that exits right after writing loses none of its output.
 *
 * SIGINT, SIGTERM, or the deadline `--timeout-minutes` sets stops the running
 * steps with SIGTERM and reports them with their output so far. A repeated
 * signal stops them with SIGKILL.
 *
 * `node scripts/check.ts` runs both groups in parallel. `inputs` or `static`
 * runs one.
 */

type Group = {
  name: string
  steps: string[][]

  /** Whether a failed step stops the group's later steps. */
  stopsAtFailure: boolean
}

type StepResult = {
  step: string
  status: `passed` | `failed` | StopReason
  logPath: string
  elapsed: number
}

type StopReason = `interrupted` | `timed out`

const main = async (): Promise<void> => {
  const parsed = parseCheckArgs()
  if (!parsed) {
    process.exitCode = 2
    return
  }

  const { groups, timeoutMinutes } = parsed
  installStopHandlers(timeoutMinutes)

  const logDirectory = mkdtempSync(join(tmpdir(), `profiler-md-check-`))
  process.stderr.write(`Logging each check's output to ${logDirectory}\n`)

  const groupResults = await Promise.all(
    groups.map(group => runGroup(group, logDirectory)),
  )
  reportResults(groups, groupResults, logDirectory)
}

/** Writes the problem and returns `undefined` when the arguments are invalid. */
const parseCheckArgs = ():
  { groups: Group[]; timeoutMinutes: number | undefined } | undefined => {
  let parsed
  try {
    parsed = parseArgs({
      options: { 'timeout-minutes': { type: `string` } },
      allowPositionals: true,
    })
  } catch (error) {
    process.stderr.write(`${(error as Error).message}\n`)
    return undefined
  }

  const timeout = parsed.values[`timeout-minutes`]
  const timeoutMinutes =
    timeout === undefined ? undefined : parseTimeoutMinutes(timeout)
  if (timeoutMinutes === null) {
    return undefined
  }

  const groups = selectGroups(parsed.positionals)
  return groups && { groups, timeoutMinutes }
}

/** Writes the problem and returns `null` when the value is invalid. */
const parseTimeoutMinutes = (value: string): number | null => {
  const minutes = Number(value)
  if (Number.isFinite(minutes) && minutes > 0) {
    return minutes
  }

  process.stderr.write(
    `invalid --timeout-minutes, expected a positive number, got: ${value}\n`,
  )
  return null
}

/** Writes the problem and returns `undefined` when a name is unknown. */
const selectGroups = (names: string[]): Group[] | undefined => {
  if (names.length === 0) {
    return GROUPS
  }

  const groups: Group[] = []
  for (const name of new Set(names)) {
    const group = GROUPS.find(group => group.name === name)
    if (!group) {
      process.stderr.write(
        `unknown check group, got: ${name}\n  hint: pass one of ${GROUPS.map(({ name }) => name).join(`, `)}\n`,
      )
      return undefined
    }
    groups.push(group)
  }
  return groups
}

const installStopHandlers = (timeoutMinutes: number | undefined): void => {
  process.on(`SIGINT`, () => stop(`interrupted`))
  process.on(`SIGTERM`, () => stop(`interrupted`))
  if (timeoutMinutes !== undefined) {
    setTimeout(() => {
      process.stderr.write(
        `Timed out after ${timeoutMinutes} minutes, stopping the running checks\n`,
      )
      stop(`timed out`)
    }, timeoutMinutes * 60_000).unref()
  }
  // A reader such as `head` that exits early closes the pipe.
  process.stderr.on(`error`, () => {
    killRunning()
    process.exit(1)
  })
}

const runGroup = async (
  { steps, stopsAtFailure }: Group,
  logDirectory: string,
): Promise<StepResult[]> => {
  const results: StepResult[] = []
  for (const args of steps) {
    const result = await runStep(args, logDirectory)
    results.push(result)
    process.stderr.write(`${formatProgress(result)}\n`)
    if (
      stopReason !== undefined ||
      (result.status === `failed` && stopsAtFailure)
    ) {
      break
    }
  }
  for (const args of steps.slice(results.length)) {
    process.stderr.write(`- ${stepName(args)} skipped\n`)
  }
  return results
}

const formatProgress = ({ step, status, elapsed }: StepResult): string => {
  const mark = status === `passed` ? `✓` : `✗`
  const suffix = isStopReason(status) ? ` ${status}` : ``
  return `${mark} ${step} ${formatMilliseconds(elapsed)}${suffix}`
}

const runStep = (args: string[], logDirectory: string): Promise<StepResult> => {
  const start = performance.now()
  const logPath = join(logDirectory, `${args[0]}.log`)
  const log = openSync(logPath, `w`)
  return new Promise(resolve => {
    const child = spawn(`pnpm`, [`run`, ...args], {
      env: {
        ...process.env,
        ...(process.stderr.isTTY ? { FORCE_COLOR: `1` } : {}),
      },
      stdio: [`ignore`, log, log],
      // Its own process group, so a signal reaches the processes `pnpm` spawns.
      detached: true,
    })
    const { pid } = child
    if (pid !== undefined) {
      runningProcessGroups.add(pid)
    }
    child.on(`error`, error => appendFileSync(log, `${error.message}\n`))
    child.on(`close`, code => {
      if (pid !== undefined) {
        runningProcessGroups.delete(pid)
      }
      closeSync(log)
      resolve({
        step: stepName(args),
        status: code === 0 ? `passed` : (stopReason ?? `failed`),
        logPath,
        elapsed: performance.now() - start,
      })
    })
  })
}

const stepName = (args: string[]): string => args.join(` `)

const reportResults = (
  groups: Group[],
  groupResults: StepResult[][],
  logDirectory: string,
): void => {
  const results = groupResults.flat()
  const skipped = groups.flatMap(({ steps }, index) =>
    steps.slice(groupResults[index]!.length).map(stepName),
  )
  const unpassed = results.filter(({ status }) => status !== `passed`)
  if (unpassed.length === 0 && skipped.length === 0) {
    rmSync(logDirectory, { recursive: true })
    process.stderr.write(`\nAll ${results.length} checks passed\n`)
    return
  }

  const summary = summarize(results, skipped, logDirectory)
  process.stderr.write(`\n${summary}\n`)
  for (const { step, status, logPath } of unpassed) {
    const output = readFileSync(logPath, `utf8`).trimEnd()
    process.stderr.write(`\n━━ ${step} ${status} ━━\n${output}\n`)
  }
  process.stderr.write(`\n${summary}\n`)
  process.exitCode = stopReason === `interrupted` ? 130 : 1
}

const summarize = (
  results: StepResult[],
  skipped: string[],
  logDirectory: string,
): string => {
  const failed = results.filter(({ status }) => status === `failed`)
  const stopped = results.filter(({ status }) => isStopReason(status))
  const steps = (results: StepResult[]): string =>
    formatConjunction(results.map(({ step }) => step))
  return [
    ...(failed.length > 0
      ? [
          `${failed.length} of ${results.length + skipped.length} checks failed: ${steps(failed)}`,
        ]
      : []),
    ...(stopped.length > 0
      ? [`${capitalizeFirst(stopped[0]!.status)}: ${steps(stopped)}`]
      : []),
    ...(skipped.length > 0 ? [`Skipped: ${formatConjunction(skipped)}`] : []),
    `Full output of each check: ${logDirectory}`,
  ].join(`\n`)
}

const isStopReason = (status: StepResult[`status`]): status is StopReason =>
  status !== `passed` && status !== `failed`

const runningProcessGroups = new Set<number>()
let stopReason: StopReason | undefined

const stop = (reason: StopReason): void => {
  killRunning(stopReason === undefined ? `SIGTERM` : `SIGKILL`)
  stopReason ??= reason
}

const killRunning = (signal: NodeJS.Signals = `SIGTERM`): void => {
  for (const pid of runningProcessGroups) {
    try {
      process.kill(-pid, signal)
    } catch {
      // The group exited before the signal.
    }
  }
}

const GROUPS: Group[] = [
  {
    name: `inputs`,
    steps: [
      [`test`, `--run`],
      [`check-examples`],
      [`check-diff-matching`],
      [`check-input-privacy`],
    ],
    stopsAtFailure: true,
  },
  {
    name: `static`,
    steps: [
      [`build`],
      [`typecheck`],
      [`lint`, `--no-fix`],
      [`format`, `--no-write`, `--check`],
      [`knip`],
      [`check-bash`],
      [`check-readme`],
      [`check-demo`],
    ],
    stopsAtFailure: false,
  },
]

await main()
