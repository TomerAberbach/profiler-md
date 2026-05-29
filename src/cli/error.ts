export class CliError extends Error {
  public readonly exitCode: 1 | 2

  public constructor(message: string, exitCode: 1 | 2) {
    super(message)
    // eslint-disable-next-line stylistic/quotes
    this.name = 'CliError'
    this.exitCode = exitCode
  }
}

export const reportError = (error: unknown): never => {
  if (error instanceof CliError) {
    process.stderr.write(`error: ${error.message}\n`)
    process.exit(error.exitCode)
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
