import { createRequire } from 'node:module'

export const typeCheckProject = projectDir => {
  const require = createRequire(`${projectDir}/`)
  const ts = require(`typescript`)

  const configPath = ts.findConfigFile(
    projectDir,
    ts.sys.fileExists,
    `tsconfig.json`,
  )
  const parsed = ts.getParsedCommandLineOfConfigFile(
    configPath,
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: diagnostic => {
        throw new Error(
          ts.flattenDiagnosticMessageText(diagnostic.messageText, `\n`),
        )
      },
    },
  )

  const program = ts.createProgram({
    rootNames: parsed.fileNames,
    options: { ...parsed.options, noEmit: true },
  })
  // Force the full type-checking work.
  program.getSemanticDiagnostics()
  program.getSyntacticDiagnostics()
  return program
}
