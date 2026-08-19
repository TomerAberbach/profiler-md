import { createWriteStream } from 'node:fs'
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
    stream.once(`open`, () => resolve()).once(`error`, reject)
  })
  return {
    write: text =>
      new Promise((resolve, reject) => {
        stream.write(text, error =>
          error ? reject(error) : stream.end(resolve),
        )
      }),
  }
}
