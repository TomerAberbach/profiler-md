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
          process.stdout.write(text, error =>
            error ? reject(error) : resolve(),
          )
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
