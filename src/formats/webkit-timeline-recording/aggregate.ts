import type { NormalizedProfileToMdOptions } from '../../options.ts'
import { ProfileAggregator, SECONDS } from '../../profile/index.ts'
import type { Profile } from '../../profile/index.ts'
import type { WebKitStackFrame, WebKitTimelineRecording } from './parse.ts'

export const aggregateWebKitTimelineRecording = (
  {
    recording: { sampleStackTraces, sampleDurations },
  }: WebKitTimelineRecording,
  options: NormalizedProfileToMdOptions,
): Profile => {
  const profileAggregator = new ProfileAggregator<
    WebKitStackFrame & { id?: never }
  >(
    {
      metrics: [SECONDS],
      functionKey: node =>
        `${node.name}|${node.url}|${node.line}|${node.column}`,
      functionInput: node => ({
        name: node.name,
        location: node.url
          ? {
              urlOrPath: node.url,
              line: node.line === -1 ? undefined : node.line,
              column: node.column === -1 ? undefined : node.column,
            }
          : undefined,
      }),
    },
    options,
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

  return profileAggregator.aggregate()
}
