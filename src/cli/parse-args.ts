import { runParser } from '@optique/core'
import packageJson from '../../package.json' with { type: 'json' }
import { program } from './cli.ts'
import type { CLIArgs } from './cli.ts'
import { getMaxWidth } from './help.ts'
import { logo } from './logo.ts'

export const parseArgs = (): CLIArgs =>
  runParser(program.parser, program.metadata.name, process.argv.slice(2), {
    colors: false,
    maxWidth: getMaxWidth(),
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
    onError: () => process.exit(2),
  })
