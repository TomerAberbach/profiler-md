import { runParser } from '@optique/core'
import packageJson from '../../package.json' with { type: 'json' }
import { uncapitalizeFirst } from '../helpers/format.ts'
import { stderrSupportsColor } from './ansis.ts'
import { program } from './cli.ts'
import type { CLIArgs } from './cli.ts'
import { getMaxWidth, getUsageHint } from './help.ts'
import { highlightErrorPrefix } from './highlight-help.ts'
import { logo } from './logo.ts'

export const parseArgs = (): CLIArgs => {
  // A parse error is one write. A completion error writes its own usage, so
  // the synopsis follows only a single write.
  let stderrWrites = 0
  return runParser(
    program.parser,
    program.metadata.name,
    process.argv.slice(2),
    {
      maxWidth: getMaxWidth(),
      aboveError: `none`,
      stderr: text => {
        stderrWrites++
        process.stderr.write(
          `${highlightErrorPrefix(toCliErrorMessage(text), {
            colors: stderrSupportsColor(),
          })}\n`,
        )
      },
      onError: () => {
        if (stderrWrites === 1) {
          process.stderr.write(
            getUsageHint({
              colors: stderrSupportsColor(),
            }),
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
 * Restates Optique's `Error: Sentence.` as this CLI's `error: clause`: the
 * lowercase prefix, a lowercase first letter unless the clause starts with an
 * identifier or a quoted value, and no trailing period.
 */
const toCliErrorMessage = (text: string): string => {
  const match = /^Error: (?<clause>[^]*?)\.?\n?$/u.exec(text)
  if (!match) {
    return text
  }
  const clause = match.groups!.clause!
  const lowercasedClause = /^[A-Z][a-z]/u.test(clause)
    ? uncapitalizeFirst(clause)
    : clause
  return `error: ${lowercasedClause}`
}
