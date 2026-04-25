export const parseJson = (data: string | Uint8Array): unknown =>
  JSON.parse(
    // @ts-expect-error `JSON.parse` accepts `Uint8Array`, but TypeScript
    // doesn't include that in the types.
    data,
  )
