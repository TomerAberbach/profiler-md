/** A change, worded so that the same change elsewhere reads the same. */
export type ChangeKind =
  | { noun: `cells`; name: string; verb: `changed` }
  | { noun: `column` | `section`; name: string; verb: Verb }
  | { noun: UnnamedNoun; verb: Verb }

type UnnamedNoun =
  | `blocks`
  | `code block`
  | `code blocks`
  | `columns`
  | `example`
  | `layout`
  | `paragraph`
  | `paragraphs`
  | `rows`
  | `sections`
  | `table`
  | `values in a paragraph`

type Verb =
  | `added`
  | `changed`
  | `realigned`
  | `removed`
  | `renamed`
  | `renamed to ${string}`
  | `reordered`

export const labelOf = (kind: ChangeKind): string =>
  `name` in kind
    ? `${kind.noun} ${kind.name} ${kind.verb}`
    : `${kind.noun} ${kind.verb}`

/** Joins the labels of kinds, naming changed columns of cells together. */
export const formatKinds = (kinds: ChangeKind[]): string => {
  const cells = kinds.filter(kind => kind.noun === `cells`)
  return [
    ...(cells.length > 0
      ? [`cells changed in ${cells.map(({ name }) => name).join(`, `)}`]
      : []),
    ...kinds.filter(({ noun }) => noun !== `cells`).map(labelOf),
  ].join(`, `)
}
