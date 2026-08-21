import { spawn } from 'node:child_process'
import type { ChildProcessByStdio } from 'node:child_process'
import type { Writable } from 'node:stream'
import type { Output } from './output.ts'

/**
 * Opens the user's pager, or `less`, for stdout output. Returns `null` when an
 * empty `PAGER` opts out of paging or no pager spawns.
 *
 * A pager that fails before it shows anything would lose the output, so the
 * returned output writes to `fallback` when the pager exits with a non-zero
 * status.
 */
export const openPager = async (fallback: Output): Promise<Output | null> => {
  const raw = process.env.PAGER
  // Explicit `PAGER=` opts out of paging entirely (matches git/systemctl).
  if (raw?.trim() === ``) {
    return null
  }

  const env = {
    // Default `less` flags (overridable via the user's `LESS`):
    // - `F`: Quit if output fits one screen
    // - `I`: Ignore case in searches
    // - `R`: Pass through ANSI colors
    // - `S`: Chop long lines instead of wrapping
    // - `X`: Don't clear the screen on exit
    // - `-#6`: Scroll horizontally 6 columns at a time
    LESS: `FIRSX -#6`,
    ...process.env,
  }
  const child =
    (raw === undefined ? null : await trySpawn(raw, env)) ??
    (await trySpawn(`less`, env))
  if (!child) {
    return null
  }

  return {
    write: async text => {
      const exitCode = await page(child, text)
      if (exitCode !== 0 && exitCode !== null) {
        process.stderr.write(`warning: pager exited with status ${exitCode}\n`)
        await fallback.write(text)
      }
    },
  }
}

type PagerProcess = ChildProcessByStdio<Writable, null, null>

/**
 * Writes the text to the pager and resolves to its exit status once it quits,
 * or `null` when a signal killed it.
 *
 * A terminal's Ctrl-C signals this process and the pager together. The pager
 * handles its own interrupt and keeps running, so exiting here would orphan
 * it on the terminal. This process ignores SIGINT while the pager runs, as
 * git does, so quitting the pager ends the run instead.
 */
const page = async (
  child: PagerProcess,
  text: string,
): Promise<number | null> => {
  process.on(`SIGINT`, ignoreSignal)
  try {
    // The pager can exit before the write settles, so listen for its exit
    // before writing or the `exit` event is missed.
    const [exitCode] = await Promise.all([
      waitForExit(child),
      writeStdin(child, text),
    ])
    return exitCode
  } finally {
    process.off(`SIGINT`, ignoreSignal)
  }
}

const ignoreSignal = () => {}

const trySpawn = (
  command: string,
  env: NodeJS.ProcessEnv,
): Promise<PagerProcess | null> => {
  const [bin, ...args] = command.trim().split(/\s+/u)
  if (!bin) {
    return Promise.resolve(null)
  }

  const child = spawn(bin, args, {
    stdio: [`pipe`, `inherit`, `inherit`],
    env,
  })

  return new Promise(resolve => {
    child.once(`spawn`, () => resolve(child))
    child.once(`error`, () => resolve(null))
  })
}

const writeStdin = (child: PagerProcess, text: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const finish = (error?: NodeJS.ErrnoException | null) => {
      // Quitting the pager (e.g. `q` in `less`) before the write finishes
      // fails the write, a normal exit path. The code is `EPIPE` when the
      // pager closed its stdin first, and `ECANCELED` when Node destroyed the
      // pipe on the pager's exit first.
      if (!error || error.code === `EPIPE` || error.code === `ECANCELED`) {
        resolve()
      } else {
        reject(error)
      }
    }
    child.stdin.on(`error`, finish)
    child.stdin.write(text, error =>
      error ? finish(error) : child.stdin.end(finish),
    )
  })

/** Resolves to the pager's exit status, or `null` when a signal killed it. */
const waitForExit = (child: PagerProcess): Promise<number | null> =>
  new Promise((resolve, reject) => {
    child.once(`exit`, code => resolve(code))
    child.once(`error`, reject)
  })
