import { createWriteStream } from 'node:fs'
import type { Writable } from 'node:stream'

export const writeOutput = async (
  markdown: string,
  outputPath: string,
): Promise<void> => {
  const output = await openOutput(outputPath)

  await new Promise<void>((resolve, reject) => {
    output.write(markdown, error => {
      if (error) {
        reject(error)
      } else if (output === process.stdout) {
        resolve()
      } else {
        output.end(resolve)
      }
    })
  })
}

const openOutput = async (outputPath: string): Promise<Writable> => {
  if (outputPath === `-`) {
    return process.stdout
  }

  const stream = createWriteStream(outputPath)
  await new Promise<void>((resolve, reject) => {
    stream.once(`open`, () => resolve()).once(`error`, reject)
  })
  return stream
}
