import type { DeepReadonly } from '../helpers/types.ts'
import { sourceReferencePathOrName } from '../location.ts'
import type { FunctionCategory, ProfileEntry } from '../options.ts'
import { systemDirectoryCategory } from './categorize.ts'

/**
 * Categorizes an entry a `perf.data` recording resolved to a mapped file: by
 * the kernel's own mappings, then by memory backed by no file, then by the
 * system directories, and an address no mapping covered as unknown, since such
 * a recording resolves an address no further than the file it fell in.
 */
export const categorizeLinuxEntry = (
  entry: DeepReadonly<ProfileEntry>,
): FunctionCategory =>
  kernelMappingCategory(entry) ??
  anonymousMappingCategory(entry) ??
  systemDirectoryCategory(entry) ??
  unmappedAddressCategory(entry) ??
  `ours`

/**
 * Categorizes the code a Linux kernel maps into a process rather than the
 * process mapping from a file: the kernel's own text, its modules, and the vDSO
 * the process calls into. `perf` names the kernel and the vDSO rather than
 * backing them with a file, so the rule reads a logical reference. `perf` names
 * a module by the object file it was loaded from, or by its name in brackets
 * when it found no such file.
 */
const kernelMappingCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined => {
  if (!location) {
    return undefined
  }
  const pathOrName = sourceReferencePathOrName(location)
  return KERNEL_MAPPING_NAMES.has(pathOrName) ||
    KERNEL_MODULE_FILE.test(pathOrName) ||
    isKernelModuleName(pathOrName)
    ? `kernel`
    : undefined
}

/**
 * The name the kernel's own mappings share, whatever section each covers,
 * after {@link isKernelMapping} matches the section suffix off.
 */
export const KERNEL_MAPPING_NAME = `[kernel.kallsyms]`

/**
 * Returns whether a mapping is the kernel's own text, which `perf` names after
 * the symbol table it would be symbolized from, with the section it covers
 * appended: `[kernel.kallsyms]_text`, `[kernel.kallsyms]_stext`.
 */
export const isKernelMapping = (path: string): boolean =>
  path === KERNEL_MAPPING_NAME || path.startsWith(`${KERNEL_MAPPING_NAME}_`)

/**
 * The names of the mappings the kernel provides rather than a file: its own
 * text, a guest's, and the page it maps into every process so a system call
 * can run without leaving user mode.
 */
const KERNEL_MAPPING_NAMES: ReadonlySet<string> = new Set([
  KERNEL_MAPPING_NAME,
  `[guest.kernel.kallsyms]`,
  `[vdso]`,
  `[vdso32]`,
  `[vdsox32]`,
  `[vsyscall]`,
])

/**
 * A kernel module's object file, `ext4.ko`, which the kernel may store
 * compressed under `/lib/modules/<release>/`.
 */
const KERNEL_MODULE_FILE = /\.ko(?:\.(?:gz|xz|zst))?$/u

/**
 * Returns whether a bracketed mapping name is a kernel module's. `perf` names a
 * module whose object file it did not find by the module's name in brackets,
 * and reads every bracketed name but the kernel's, the vDSO's, and the ones the
 * kernel gives a process's own memory as a module (`kmod_path__parse` in
 * `tools/perf/util/dso.c`).
 */
const isKernelModuleName = (name: string): boolean =>
  name.startsWith(`[`) &&
  name.endsWith(`]`) &&
  !KERNEL_MAPPING_NAMES.has(name) &&
  !isAnonymousMapping(name)

/**
 * Categorizes an address in memory a program obtained without a file, under
 * the names the kernel reports such a mapping by, as code the program generated
 * at run time: `perf` treats these mappings as a JIT's, and looks their
 * addresses up in the `/tmp/perf-<pid>.map` a JIT writes rather than on disk.
 */
const anonymousMappingCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location && isAnonymousMapping(sourceReferencePathOrName(location))
    ? `jit`
    : undefined

/**
 * Returns whether a mapping is of anonymous memory: by the names `perf` itself
 * treats as anonymous (`is_anon_memory` in `tools/perf/util/map.c`), and by
 * the names the kernel gives a process's heap, its stacks, and a region the
 * process named (`[anon:<name>]`) in `/proc/<pid>/maps`.
 */
export const isAnonymousMapping = (path: string): boolean =>
  path === `//anon` ||
  path.startsWith(`/dev/zero`) ||
  path.startsWith(`/anon_hugepage`) ||
  path === `[heap]` ||
  path === `[stack]` ||
  path.startsWith(`[stack:`) ||
  path.startsWith(`[anon:`)

/**
 * Categorizes an address no memory mapping covered as `unknown`.
 *
 * A profiler that resolves addresses against the mappings a process made states
 * where every other address came from, so one it left unattributed is code it
 * recorded nothing about rather than compiled code it placed.
 */
const unmappedAddressCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): FunctionCategory | undefined =>
  location ? undefined : `unknown`
