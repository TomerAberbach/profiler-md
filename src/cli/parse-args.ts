import { runParser } from '@optique/core'
import { formatMessage } from '@optique/core/message'
import type { Message } from '@optique/core/message'
import packageJson from '../../package.json' with { type: 'json' }
import { uncapitalizeFirst } from '../helpers/format.ts'
import { program } from './cli.ts'
import type { CLIArgs } from './cli.ts'
import { CliError, reportError } from './error.ts'
import {
  defaultLogLevel,
  makeCliLogger,
  warnInvalidLogLevelEnv,
} from './log.ts'
import { logo } from './logo.ts'

export const parseArgs = (): CLIArgs =>
  runParser(program.parser, program.metadata.name, process.argv.slice(2), {
    // The error is reported as a CliError from its structured message, so the
    // runner's own rendering of it is dropped
    stderr: () => {},
    onError: (_, error) => {
      const logger = makeCliLogger()
      const logLevel = defaultLogLevel()
      warnInvalidLogLevelEnv(logger, logLevel)
      return reportError(new CliError(toCliErrorReason(error), 2), {
        logger,
        logLevel,
      })
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
  })

/**
 * Restates Optique's `Sentence.` as this CLI's `clause`: a lowercase first
 * letter unless the clause starts with an identifier or a quoted value, and no
 * trailing period.
 */
const toCliErrorReason = (error: Message): string => {
  const clause = formatMessage(error).replace(/\.$/u, ``)
  return /^[A-Z][a-z]/u.test(clause) ? uncapitalizeFirst(clause) : clause
}
