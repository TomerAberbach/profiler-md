import { runParser } from '@optique/core'
import packageJson from '../../package.json' with { type: 'json' }
import { uncapitalizeFirst } from '../helpers/format.ts'
import { program } from './cli.ts'
import type { CLIArgs } from './cli.ts'
import { CliError, reportError } from './error.ts'
import { getMaxWidth } from './help.ts'
import { logo } from './logo.ts'

export const parseArgs = (): CLIArgs => {
  // A parse error is one write, reported as a CliError so the synopsis
  // follows it. A completion error writes its own usage after its message.
  const stderrWrites: string[] = []
  return runParser(
    program.parser,
    program.metadata.name,
    process.argv.slice(2),
    {
      maxWidth: getMaxWidth(),
      aboveError: `none`,
      stderr: text => stderrWrites.push(text),
      onError: () => {
        const reason = toCliErrorReason(stderrWrites[0]!)
        if (stderrWrites.length === 1 && reason !== undefined) {
          return reportError(new CliError(reason, 2))
        }
        for (const text of stderrWrites) {
          const reason = toCliErrorReason(text)
          process.stderr.write(
            reason === undefined ? `${text}\n` : `error: ${reason}\n`,
          )
        }
        return process.exit(2)
      },
      version: {
        value: packageJson.version,
        option: true,
        onShow: () => {
          if (process.stderr.isTTY) {
            console.error(logo)
          }
          return process.exit(0)
        },
      },
      completion: {
        option: true,
        onShow: () => process.exit(0),
      },
    },
  )
}

/**
 * Restates Optique's `Error: Sentence.` as this CLI's `clause`: a lowercase
 * first letter unless the clause starts with an identifier or a quoted value,
 * and no trailing period. Returns `undefined` for text that is not an error
 * message.
 */
const toCliErrorReason = (text: string): string | undefined => {
  const match = /^Error: (?<clause>[^]*?)\.?\n?$/u.exec(text)
  if (!match) {
    return undefined
  }
  const clause = match.groups!.clause!
  return /^[A-Z][a-z]/u.test(clause) ? uncapitalizeFirst(clause) : clause
}
