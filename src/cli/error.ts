import { ProfilerMdError } from '../error.ts'

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
    process.exit(error instanceof CliError ? error.exitCode : 1)
  }

  if (error instanceof Error) {
    process.stderr.write(
      error.stack ? `${error.stack}\n` : `error: ${error.message}\n`,
    )
    process.exit(1)
  }

  process.stderr.write(`error: ${String(error)}\n`)
  process.exit(1)
}

export const reasonOf = (error: unknown): string =>
  error instanceof Error ? error.message : String(error)
