import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { originNormalizeFrame, resolveOrigin } from '../../origins/index.ts'
import { ProfileAggregator, SECONDS } from '../../profile/index.ts'
import type {
  AggregatedProfile,
  ProfileFunctionInput,
} from '../../profile/index.ts'
import type { WebKitStackFrame, WebKitTimelineRecording } from './parse.ts'

const frameKey = (node: WebKitStackFrame): string =>
  `${node.name}|${node.url}|${node.line}|${node.column}`

const frameInput = (node: WebKitStackFrame): ProfileFunctionInput => ({
  name: node.name,
  location: node.url
    ? {
        urlOrPath: node.url,
        line: node.line === -1 ? undefined : node.line,
        column: node.column === -1 ? undefined : node.column,
      }
    : undefined,
})

export const aggregateWebKitTimelineRecording = (
  {
    recording: { sampleStackTraces, sampleDurations },
  }: WebKitTimelineRecording,
  options: NormalizedProfileToMdOptions,
  context: ProfileToMdContext,
): AggregatedProfile[] => {
  // Frames are inlined per sample rather than in a shared table, so collect the
  // distinct ones to resolve the origin from up front.
  const distinctInputs: ProfileFunctionInput[] = []
  const seenFrames = new Set<string>()
  for (const { stackFrames } of sampleStackTraces) {
    for (const frame of stackFrames) {
      const key = frameKey(frame)
      if (!seenFrames.has(key)) {
        seenFrames.add(key)
        distinctInputs.push(frameInput(frame))
      }
    }
  }

  const origin = resolveOrigin(context.format, context, distinctInputs)
  const normalizeFrame = originNormalizeFrame(origin)

  const profileAggregator = new ProfileAggregator<
    WebKitStackFrame & { id?: never }
  >(
    {
      metrics: [SECONDS],
      functionKey: frameKey,
      functionInput: node => normalizeFrame(frameInput(node)),
    },
    options,
    { ...context, origin },
  )

  for (let index = 0; index < sampleStackTraces.length; index++) {
    const duration = sampleDurations[index]!

    const { stackFrames } = sampleStackTraces[index]!
    if (stackFrames.length === 0) {
      continue
    }

    const expressionLine = stackFrames[0]!.expressionLocation?.line
    profileAggregator.addSample({
      values: [duration],
      nodes: stackFrames,
      line:
        expressionLine !== undefined && expressionLine !== -1
          ? expressionLine
          : undefined,
    })
  }

  return [profileAggregator.aggregate()]
}
