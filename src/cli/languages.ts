import { formats, formatToSpec } from '../formats/registry.ts'
import type { Format } from '../formats/registry.ts'
import { languageMetas } from '../languages.ts'
import type { LanguageMeta } from '../languages.ts'

export type Language = LanguageMeta & { formats: Format[] }

export const languages: ReadonlyMap<string, Language> = new Map(
  languageMetas.map(([id, meta]) => [
    id,
    {
      ...meta,
      formats: formats.filter(format =>
        formatToSpec[format].languages.includes(id as never),
      ),
    },
  ]),
)
