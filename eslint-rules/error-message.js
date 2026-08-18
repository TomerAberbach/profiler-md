/** Enforces the message conventions in `CLAUDE.md` on error and logger messages. */

/**
 * Stands in for an interpolated value, so a check distinguishes an
 * interpolation from a gap in the text. It matches no check's pattern.
 */
const INTERPOLATION = `\0`

/** The text of a message argument, or `undefined` if it isn't one. */
const messageText = node => {
  switch (node.type) {
    case `Literal`:
      return typeof node.value === `string` ? node.value : undefined
    case `TemplateLiteral`:
      return node.quasis.map(quasi => quasi.value.cooked).join(INTERPOLATION)
    case `BinaryExpression`: {
      if (node.operator !== `+`) {
        return undefined
      }
      const left = messageText(node.left)
      const right = messageText(node.right)
      return left === undefined || right === undefined
        ? undefined
        : left + right
    }
    default:
      return undefined
  }
}

const checks = [
  { messageId: `multiLine`, fails: text => text.includes(`\n`) },
  { messageId: `trailingPeriod`, fails: text => text.endsWith(`.`) },
  { messageId: `semicolon`, fails: text => text.includes(`;`) },
  {
    // A capital may start an identifier, a proper noun, or a format title,
    // which this rule cannot distinguish from prose, so it rejects only a
    // capitalized opener followed by a lowercase word.
    messageId: `capitalized`,
    fails: text => /^[A-Z][a-z]+ [a-z]/u.test(text),
  },
]

const LOGGER_METHODS = new Set([`error`, `warn`, `info`, `debug`])

/**
 * Holds for `logger.<level>?.(...)` too, because optional chaining leaves the
 * callee a member expression.
 */
const isLoggerCall = ({ callee }) =>
  callee.type === `MemberExpression` &&
  !callee.computed &&
  callee.object.type === `Identifier` &&
  callee.object.name === `logger` &&
  LOGGER_METHODS.has(callee.property.name)

const isErrorConstruction = ({ callee }) =>
  callee.type === `Identifier` && callee.name.endsWith(`Error`)

export const errorMessage = {
  meta: {
    type: `problem`,
    docs: {
      description: `enforce the project's error and logger message conventions`,
    },
    schema: [],
    messages: {
      multiLine: `Write the message on one line.`,
      trailingPeriod: `Drop the message's trailing period.`,
      semicolon: `Replace the message's semicolon with a comma or a second clause.`,
      capitalized: `Start the message lowercase, unless it opens with an identifier, a proper noun, or a format title.`,
    },
  },

  create: context => {
    const checkMessage = ([message]) => {
      const text = message && messageText(message)
      if (text === undefined) {
        return
      }

      for (const { messageId, fails } of checks) {
        if (fails(text)) {
          context.report({ node: message, messageId })
        }
      }
    }

    return {
      NewExpression: node => {
        if (isErrorConstruction(node)) {
          checkMessage(node.arguments)
        }
      },
      CallExpression: node => {
        if (isLoggerCall(node)) {
          checkMessage(node.arguments)
        }
      },
    }
  },
}
