import { join } from 'node:path'

/**
 * The Node compile cache directory scripts share, relative to the repository
 * root, so one script's runs reuse the bytecode and stripped types another's
 * compiled.
 */
export const compileCachePath = join(
  `node_modules`,
  `.cache`,
  `node-compile-cache`,
)
