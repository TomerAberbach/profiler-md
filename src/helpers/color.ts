export type Rgb = { red: number; green: number; blue: number }

export const parseRgb = (hex: string): Rgb => {
  const value = hex.replace(/^#/u, ``)
  return {
    red: Number.parseInt(value.slice(0, 2), 16),
    green: Number.parseInt(value.slice(2, 4), 16),
    blue: Number.parseInt(value.slice(4, 6), 16),
  }
}

export type RgbTuple = readonly [red: number, green: number, blue: number]

export const rgb = (hex: string): RgbTuple => {
  const { red, green, blue } = parseRgb(hex)
  return [red, green, blue]
}
