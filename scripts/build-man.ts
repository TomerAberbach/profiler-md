import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import packageJson from '../package.json' with { type: 'json' }
import { getManPage } from '../src/cli/man.ts'

const [manPath] = packageJson.man as [string]
mkdirSync(dirname(manPath), { recursive: true })
writeFileSync(manPath, `${getManPage(new Date())}\n`)
