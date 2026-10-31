import { spawn } from 'node:child_process'
import { join } from 'node:path'
import { LOG_LEVEL_ENV } from './log.ts'

type CliResult = { status: number | null; stdout: string; stderr: string }

export const runCli = (
  args: string[],
  input?: string | Uint8Array,
  env: NodeJS.ProcessEnv = {},
): Promise<CliResult> =>
  new Promise<CliResult>((resolve, reject) => {
    const child = spawn(process.execPath, [cliPath, ...args], {
      // Reuse compiled bytecode across the many spawned CLI processes,
      // roughly halving each one's startup.
      env: {
        ...process.env,
        // The developer's shell must not set the log level under test
        [LOG_LEVEL_ENV]: undefined,
        NODE_COMPILE_CACHE: compileCachePath,
        ...env,
      },
    })

    const stdout: Buffer[] = []
    const stderr: Buffer[] = []
    child.stdout.on(`data`, (chunk: Buffer) => stdout.push(chunk))
    child.stderr.on(`data`, (chunk: Buffer) => stderr.push(chunk))
    child.on(`error`, reject)
    child.on(`close`, status =>
      resolve({
        status,
        stdout: Buffer.concat(stdout).toString(`utf8`),
        stderr: Buffer.concat(stderr).toString(`utf8`),
      }),
    )

    // A failed CLI run leaves stdin unread, so the write fails with
    // `EPIPE`. The assertions in each test report that failure.
    child.stdin.on(`error`, () => {})
    child.stdin.end(input)
  })

/** Where `build-test-cli.ts` bundles the CLI the tests spawn. */
export const testCliDirectory = join(
  import.meta.dirname,
  `../../node_modules/.cache/profiler-md-cli`,
)

export const cliPath = join(testCliDirectory, `dist/cli/index.mjs`)

export const compileCachePath = join(
  import.meta.dirname,
  `../../node_modules/.cache/node-compile-cache`,
)
