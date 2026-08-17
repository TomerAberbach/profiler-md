/**
 * Returns how many bits of {@link mask} are set.
 *
 * Divides rather than shifting, so a mask wider than the 32 bits a bitwise
 * operator works on is counted too, up to the 53 bits a number holds exactly.
 * A negative mask counts nothing.
 */
export const bitCount = (mask: number): number => {
  let count = 0
  for (let bits = mask; bits > 0; bits = Math.floor(bits / 2)) {
    count += bits % 2
  }
  return count
}
