import { beamOriginSpec } from './beam.ts'
import { bunOriginSpec } from './bun.ts'
import { denoOriginSpec } from './deno.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'
import { goOriginSpec } from './go.ts'
import { jvmOriginSpec } from './jvm.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'
import { nodeOriginSpec } from './node.ts'
import { pprofJlOriginSpec } from './pprof-jl.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'
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
  nodePprofOriginSpec,
  pprofRsOriginSpec,
  goOriginSpec,
  pprofJlOriginSpec,
  pySpyOriginSpec,
  tachyonOriginSpec,
  jvmOriginSpec,
  dotnetTraceOriginSpec,
  beamOriginSpec,
  rbspyOriginSpec,
  safariOriginSpec,
  systingOriginSpec,
  unknownOriginSpec,
]
