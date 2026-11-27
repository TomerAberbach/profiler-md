import { parseDocument } from '../helpers/document.ts'
import type { Section } from '../helpers/document.ts'

/**
 * The sentences that restate one earlier in their own section or in a section
 * they are nested in. Sibling sections can open with the same sentence.
 */
export const repeatedSentences = (markdown: string): string[] =>
  repeatedWithin(parseDocument(markdown), new Set())

const repeatedWithin = (
  section: Section,
  enclosing: ReadonlySet<string>,
): string[] => {
  const stated = new Set(enclosing)
  const repeated: string[] = []
  for (const block of section.blocks) {
    if (block.type !== `paragraph`) {
      continue
    }
    for (const sentence of block.text.split(SENTENCE_BOUNDARY_REGEX)) {
      if (stated.has(sentence)) {
        repeated.push(sentence)
      }
      stated.add(sentence)
    }
  }
  return [
    ...repeated,
    ...section.children.flatMap(child => repeatedWithin(child, stated)),
  ]
}

const SENTENCE_BOUNDARY_REGEX = /(?<=\.)\s+/u
