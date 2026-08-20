import packageJson from '../../package.json' with { type: 'json' }
import { ProfilerMdError } from '../error.ts'
import { unclassifiedParseFailures } from '../formats/error.ts'

export class CliError extends ProfilerMdError {
  public readonly exitCode: 1 | 2

  public constructor(message: string, exitCode: 1 | 2, options?: ErrorOptions) {
    super(message, options)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'CliError'
    this.exitCode = exitCode
  }
}

export const reportError = (error: unknown): never => {
  if (error instanceof ProfilerMdError) {
    process.stderr.write(`error: ${error.message}\n`)
    const parseFailures = unclassifiedParseFailures(error)
    if (parseFailures.length > 0) {
      process.stderr.write(
        [
          `If the input opens in its profiler, report this as a bug in ${packageJson.name}:`,
          `${packageJson.bugs.url}/new`,
          `Include the command you ran, the input if you can share it, and this trace:`,
          ...parseFailures.map(stackOf),
          ``,
        ].join(`\n`),
      )
    }
    process.exit(error instanceof CliError ? error.exitCode : 1)
  }

  process.stderr.write(`${stackOf(error)}\n`)
  process.exit(1)
}

/** An error's stack trace, or its description when it has none. */
const stackOf = (error: unknown): string =>
  error instanceof Error
    ? (error.stack ?? `${error.name}: ${error.message}`)
    : `error: ${String(error)}`
