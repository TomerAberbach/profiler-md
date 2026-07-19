import { asyncProfilerOriginSpec } from './async-profiler.ts'
import { bunOriginSpec } from './bun.ts'
import { chromeOriginSpec } from './chrome.ts'
import { denoOriginSpec } from './deno.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'
import { eflambeOriginSpec } from './eflambe.ts'
import { excimerOriginSpec } from './excimer.ts'
import { goOriginSpec } from './go.ts'
import { gperftoolsOriginSpec } from './gperftools.ts'
import { jdkOriginSpec } from './jdk.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'
import { nodeOriginSpec } from './node.ts'
import { pprofJlOriginSpec } from './pprof-jl.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'
import { profileJlOriginSpec } from './profile-jl.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { rbspyOriginSpec } from './rbspy.ts'
import { safariOriginSpec } from './safari.ts'
import { systingOriginSpec } from './systing.ts'
import { tachyonOriginSpec } from './tachyon.ts'
import { unknownOriginSpec } from './unknown.ts'

/**
 * All origin specs in global detection-priority order.
 *
 * Within a format, the detector tries candidates in this order, so origins that
 * share a format and whose marker entries overlap must be ordered carefully
 * (e.g. Deno before Node, since Deno supports `node:` specifiers).
 */
export const originSpecs = [
  denoOriginSpec,
  bunOriginSpec,
  nodeOriginSpec,
  // After the V8 runtimes: their runtime-specific markers must outrank
  // chrome's web-page URL evidence.
  chromeOriginSpec,
  nodePprofOriginSpec,
  pprofRsOriginSpec,
  goOriginSpec,
  pprofJlOriginSpec,
  profileJlOriginSpec,
  pySpyOriginSpec,
  tachyonOriginSpec,
  asyncProfilerOriginSpec,
  jdkOriginSpec,
  dotnetTraceOriginSpec,
  eflambeOriginSpec,
  rbspyOriginSpec,
  safariOriginSpec,
  systingOriginSpec,
  // Markerless origins, reachable only by format fallback, a parser origin
  // hint, or an explicit origin; their position has no effect.
  gperftoolsOriginSpec,
  excimerOriginSpec,
  unknownOriginSpec,
]
