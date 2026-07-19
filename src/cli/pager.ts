import { spawn } from 'node:child_process'
import type { ChildProcessByStdio } from 'node:child_process'
import type { Writable } from 'node:stream'
import type { Output } from './output.ts'

export const openPager = async (): Promise<Output | null> => {
  const raw = process.env.PAGER
  // Explicit `PAGER=` opts out of paging entirely (matches git/systemctl).
  if (raw?.trim() === ``) {
    return null
  }

  const env = {
    // Default `less` flags (overridable via the user's `LESS`):
    // - `F`: Quit if output fits one screen
    // - `R`: Pass through ANSI colors
    // - `S`: Chop long lines instead of wrapping
    // - `X`: Don't clear the screen on exit
    // - `-#6`: Scroll horizontally 6 columns at a time
    LESS: `FRSX -#6`,
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
      await new Promise<void>(resolve => {
        child.stdin.write(text, () => child.stdin.end(resolve))
      })
      await waitForExit(child)
    },
  }
}

type PagerProcess = ChildProcessByStdio<Writable, null, null>

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
    child.once(`spawn`, () => {
      child.stdin.on(`error`, (error: NodeJS.ErrnoException) => {
        // The user can quit the pager (e.g. `q` in `less`) before we finish
        // writing, which closes its stdin and makes our next write reject with
        // EPIPE. That's a normal exit path, not a failure.
        if (error.code !== `EPIPE`) {
          throw error
        }
      })
      resolve(child)
    })
    child.once(`error`, () => resolve(null))
  })
}

const waitForExit = (child: PagerProcess): Promise<void> =>
  new Promise((resolve, reject) => {
    child.once(`exit`, () => resolve())
    child.once(`error`, reject)
  })
