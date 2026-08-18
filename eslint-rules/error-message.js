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

/** Matches a variable or property holding a logger: `logger`, `normalizedLogger`, `#logger`. */
const LOGGER_NAME = /logger$/iu

const isLoggerExpression = node =>
  (node.type === `Identifier` && LOGGER_NAME.test(node.name)) ||
  (node.type === `MemberExpression` &&
    !node.computed &&
    LOGGER_NAME.test(node.property.name))

/**
 * Whether {@link callee} is a logger method accessed on the logger, as in
 * `logger.warn(...)`. Holds for `logger.warn?.(...)` too, because optional
 * chaining leaves the callee a member expression.
 */
const isLoggerMethodAccess = callee =>
  callee.type === `MemberExpression` &&
  !callee.computed &&
  LOGGER_METHODS.has(callee.property.name) &&
  isLoggerExpression(callee.object)

const findVariable = (scope, name) => {
  for (let current = scope; current; current = current.upper) {
    const variable = current.set.get(name)
    if (variable) {
      return variable
    }
  }
  return undefined
}

/**
 * Whether {@link callee} is a logger method destructured from the logger, as
 * in `const { warn } = logger` followed by `warn(...)`.
 */
const isDestructuredLoggerMethod = (callee, sourceCode) => {
  if (callee.type !== `Identifier`) {
    return false
  }
  const variable = findVariable(sourceCode.getScope(callee), callee.name)
  return (variable?.defs ?? []).some(({ type, node }) => {
    if (
      type !== `Variable` ||
      node.id.type !== `ObjectPattern` ||
      !node.init ||
      !isLoggerExpression(node.init)
    ) {
      return false
    }
    return node.id.properties.some(
      property =>
        property.type === `Property` &&
        !property.computed &&
        LOGGER_METHODS.has(property.key.name) &&
        property.value.type === `Identifier` &&
        property.value.name === callee.name,
    )
  })
}

const isLoggerCall = ({ callee }, sourceCode) =>
  isLoggerMethodAccess(callee) || isDestructuredLoggerMethod(callee, sourceCode)

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
        if (isLoggerCall(node, context.sourceCode)) {
          checkMessage(node.arguments)
        }
      },
    }
  },
}
