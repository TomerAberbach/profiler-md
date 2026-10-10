/**
 * Forbids writing to the console or a standard stream directly, so every
 * diagnostic goes through a `Logger` and respects the log level.
 */

const STANDARD_STREAMS = [`stdout`, `stderr`]

const isIdentifier = (node, name) =>
  node.type === `Identifier` && node.name === name

const isProperty = (node, name) =>
  !node.computed && isIdentifier(node.property, name)

/** Whether {@link callee} is a method of `console`, as in `console.error`. */
const isConsoleMethod = callee =>
  callee.type === `MemberExpression` && isIdentifier(callee.object, `console`)

/** Whether {@link callee} is `process.stdout.write` or `process.stderr.write`. */
const isStandardStreamWrite = callee =>
  callee.type === `MemberExpression` &&
  isProperty(callee, `write`) &&
  callee.object.type === `MemberExpression` &&
  isIdentifier(callee.object.object, `process`) &&
  STANDARD_STREAMS.some(stream => isProperty(callee.object, stream))

export const noStandardStreamWrite = {
  meta: {
    type: `problem`,
    docs: {
      description: `forbid writing to the console or a standard stream directly`,
    },
    schema: [],
    messages: {
      console: `Log through a Logger instead of calling console.`,
      standardStream: `Log through a Logger instead of writing to process.{{stream}}.`,
    },
  },

  create: context => ({
    CallExpression: ({ callee }) => {
      if (isConsoleMethod(callee)) {
        context.report({ node: callee, messageId: `console` })
      } else if (isStandardStreamWrite(callee)) {
        context.report({
          node: callee,
          messageId: `standardStream`,
          data: { stream: callee.object.property.name },
        })
      }
    },
  }),
}
