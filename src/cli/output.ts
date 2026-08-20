import { createWriteStream } from 'node:fs'
import { CliError, reasonOf } from './error.ts'
import { openPager } from './pager.ts'

export type Output = {
  write: (text: string) => Promise<void>
}

export type WriteOutputOptions = {
  pager: boolean
}

export const writeOutput = async (
  text: string,
  outputPath: string,
  { pager }: WriteOutputOptions,
): Promise<void> => {
  const output =
    (pager && isTTYOutput(outputPath) ? await openPager() : null) ??
    (await openOutput(outputPath))
  await output.write(text)
}

export const isTTYOutput = (outputPath: string): boolean =>
  outputPath === `-` && Boolean(process.stdout.isTTY)

const openOutput = async (outputPath: string): Promise<Output> => {
  if (outputPath === `-`) {
    return {
      write: text =>
        new Promise((resolve, reject) => {
          // A reader such as `head` can close the pipe before the write
          // finishes, failing the write with `EPIPE` and emitting an `error`
          // event that would otherwise go unhandled. A closed pipe is a normal
          // exit.
          const finish = (error?: NodeJS.ErrnoException | null) => {
            if (!error || error.code === `EPIPE`) {
              resolve()
            } else {
              reject(error)
            }
          }
          process.stdout.on(`error`, finish)
          process.stdout.write(text, finish)
        }),
    }
  }

  const stream = createWriteStream(outputPath)
  await new Promise<void>((resolve, reject) => {
    stream
      .once(`open`, () => resolve())
      .once(`error`, error => reject(writeError(outputPath, error)))
  })
  return {
    write: text =>
      new Promise((resolve, reject) => {
        stream.write(text, error =>
          error ? reject(writeError(outputPath, error)) : stream.end(resolve),
        )
      }),
  }
}

const writeError = (outputPath: string, error: unknown): CliError =>
  new CliError(
    `cannot write ${outputPath}: ${WRITE_ERROR_REASONS.get(errorCodeOf(error)) ?? reasonOf(error)}`,
    1,
    { cause: error },
  )

const errorCodeOf = (error: unknown): string | undefined =>
  error instanceof Error && `code` in error && typeof error.code === `string`
    ? error.code
    : undefined

const WRITE_ERROR_REASONS: ReadonlyMap<string | undefined, string> = new Map([
  [`ENOENT`, `no such directory`],
  [`EISDIR`, `is a directory`],
  [`EACCES`, `permission denied`],
  [`EPERM`, `permission denied`],
])
