# Sampling profile

Collected 2,686 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 91.2% |   2,449 |
| Compiler         |  6.6% |     176 |
| Standard library |  1.9% |      51 |
| Unknown          |  0.2% |       5 |
| Ours             |  0.1% |       4 |
| JIT              | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2,238 samples (83.3%) thread_start at libsystem_pthread.dylib
│   └── 2,238 samples (83.3%) _pthread_start
│       ├── 2,148 samples (80.0%) thread_native_entry at libjvm.dylib
│       │   └── 2,148 samples (80.0%) Thread::call_run
│       │       ├── 911 samples (33.9%) WorkerThread::run
│       │       │   ├── 891 samples (33.2%, self 36.8% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       │   └── … 4 samples (0.1%) G1ParScanThreadState::do_copy_to_survivor_space at libjvm.dylib
│       │       ├── 792 samples (29.5%) JavaThread::thread_main_inner
│       │       │   ├── 354 samples (13.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 214 samples (8.0%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 179 samples (6.7%) C2Compiler::compile_method
│       │       │   │   │   │   └── 179 samples (6.7%) Compile::Compile
│       │       │   │   │   │       ├── 86 samples (3.2%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 52 samples (1.9%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 10 samples (0.4%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   │   ├── 8 samples (0.3%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 7 samples (0.3%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │   │   │       │   │   │   └── 5 samples (0.2%) PhaseChaitin::elide_copy
│       │       │   │   │   │       │   │   ├── 6 samples (0.2%) PhaseChaitin::gather_lrg_masks
│       │       │   │   │   │       │   │   └── 21 samples (0.8%) 15 more callees, led by (0.1%) PhaseChaitin::Select
│       │       │   │   │   │       │   ├── 10 samples (0.4%) PhaseOutput::Output
│       │       │   │   │   │       │   └── … 6 samples (0.2%) Matcher::match_tree at libjvm.dylib
│       │       │   │   │   │       └── 82 samples (3.1%) Compile::Optimize
│       │       │   │   │   │           ├── … 23 samples (0.9%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │           │   ├── 6 samples (0.2%) PhaseIdealLoop::build_loop_late
│       │       │   │   │   │           │   └── 4 samples (0.1%) PhaseIdealLoop::build_loop_early
│       │       │   │   │   │           ├── … 4 samples (0.1%) PhaseIdealLoop::build_loop_early at libjvm.dylib
│       │       │   │   │   │           ├── … 3 samples (0.1%) ConnectionGraph::create_split_phi at libjvm.dylib
│       │       │   │   │   │           ├── … 2 samples (0.1%) Node::dominates at libjvm.dylib
│       │       │   │   │   │           └── 19 samples (0.7%) 8 more callees, led by (0.2%) PhaseCCP::PhaseCCP
│       │       │   │   │   └── 35 samples (1.3%) 2 more callees, led by (1.3%) Compiler::compile_method
│       │       │   │   └── … 139 samples (5.2%, self 44.6% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   └── 438 samples (16.3%) 5 more callees, led by (3.3%) signal_thread_entry
│       │       ├── 267 samples (9.9%) ConcurrentGCThread::run
│       │       │   └── 267 samples (9.9%) 3 more callees, led by (3.3%) G1ServiceThread::run_service
│       │       └── 178 samples (6.6%) 2 more callees, led by (3.3%) VMThread::run
│       └── … 89 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 89 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── 5 samples (0.2%) (anonymous)
└── 354 samples (13.2%) 6 more root frames, led by (3.3%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                          | Location                   |
| ----: | ------: | ------------------------------------------------- | -------------------------- |
| 44.6% |   1,198 | `__psynch_cvwait`                                 | `libsystem_kernel.dylib`   |
| 36.8% |     989 | `semaphore_wait_trap`                             | `libsystem_kernel.dylib`   |
|  3.3% |      89 | `mach_msg2_trap`                                  | `libsystem_kernel.dylib`   |
|  3.3% |      89 | `__ulock_wait`                                    | `libsystem_kernel.dylib`   |
|  0.3% |       7 | `PhaseIdealLoop::build_loop_early`                | `libjvm.dylib`             |
|  0.3% |       7 | `PhaseChaitin::build_ifg_physical`                | `libjvm.dylib`             |
|  0.3% |       7 | `PhaseChaitin::Split`                             | `libjvm.dylib`             |
|  0.2% |       5 | `PhaseChaitin::elide_copy`                        | `libjvm.dylib`             |
|  0.2% |       5 | `Node::dominates`                                 | `libjvm.dylib`             |
|  0.2% |       5 | `(anonymous)`                                     | `<unknown>`                |
|  0.1% |       4 | `Node::is_CFG`                                    | `libjvm.dylib`             |
|  0.1% |       4 | `IndexSetIterator::advance_and_next`              | `libjvm.dylib`             |
|  0.1% |       4 | `Matcher::match_tree`                             | `libjvm.dylib`             |
|  0.1% |       4 | `tlv_get_addr`                                    | `libdyld.dylib`            |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late`                 | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseChaitin::gather_lrg_masks`                  | `libjvm.dylib`             |
|  0.1% |       3 | `ConnectionGraph::create_split_phi`               | `libjvm.dylib`             |
|  0.1% |       3 | `_platform_memset`                                | `libsystem_platform.dylib` |
|  0.1% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`             |
|  0.1% |       3 | `CompiledMethod::cleanup_inline_caches_impl`      | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                          | Location                   |
| ----: | ------: | ------------------------------------------------- | -------------------------- |
| 44.6% |   1,198 | `__psynch_cvwait`                                 | `libsystem_kernel.dylib`   |
| 36.8% |     989 | `semaphore_wait_trap`                             | `libsystem_kernel.dylib`   |
|  3.3% |      89 | `mach_msg2_trap`                                  | `libsystem_kernel.dylib`   |
|  3.3% |      89 | `__ulock_wait`                                    | `libsystem_kernel.dylib`   |
|  0.1% |       4 | `tlv_get_addr`                                    | `libdyld.dylib`            |
|  0.1% |       3 | `_platform_memset`                                | `libsystem_platform.dylib` |
|  0.1% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`             |
|  0.1% |       3 | `CompiledMethod::cleanup_inline_caches_impl`      | `libjvm.dylib`             |
|  0.1% |       3 | `pthread_jit_write_protect_np`                    | `libsystem_pthread.dylib`  |
|  0.1% |       3 | `__psynch_mutexwait`                              | `libsystem_kernel.dylib`   |
|  0.1% |       3 | `sys_icache_invalidate`                           | `libsystem_platform.dylib` |
|  0.1% |       2 | `G1CardSet::add_to_howl`                          | `libjvm.dylib`             |
|  0.1% |       2 | `vmSymbols::find_sid`                             | `libjvm.dylib`             |
|  0.1% |       2 | `java_lang_Throwable::fill_in_stack_trace`        | `libjvm.dylib`             |
|  0.1% |       2 | `Dictionary::find`                                | `libjvm.dylib`             |
| <0.1% |       1 | `LibraryCallKit::inline_native_Class_query`       | `libjvm.dylib`             |
| <0.1% |       1 | `cmpOpOper::num_edges`                            | `libjvm.dylib`             |
| <0.1% |       1 | `_platform_bzero`                                 | `libsystem_platform.dylib` |
| <0.1% |       1 | `Dict::Insert`                                    | `libjvm.dylib`             |
| <0.1% |       1 | `posix_madvise`                                   | `libsystem_kernel.dylib`   |

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 0.3% |       7 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.3% |       7 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.3% |       7 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 0.2% |       5 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.2% |       5 | `Node::dominates`                           | `libjvm.dylib` |
| 0.1% |       4 | `Node::is_CFG`                              | `libjvm.dylib` |
| 0.1% |       4 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 0.1% |       4 | `Matcher::match_tree`                       | `libjvm.dylib` |
| 0.1% |       3 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.1% |       3 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.1% |       3 | `ConnectionGraph::create_split_phi`         | `libjvm.dylib` |
| 0.1% |       3 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.1% |       3 | `PhaseIterGVN::remove_globally_dead_node`   | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIterGVN::add_users_to_worklist`       | `libjvm.dylib` |
| 0.1% |       2 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::find_shared`                      | `libjvm.dylib` |
| 0.1% |       2 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.1% |       2 | `RegMask::is_bound`                         | `libjvm.dylib` |
| 0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.1% |       2 | `PhaseChaitin::Select`                      | `libjvm.dylib` |

##### Standard library

|     % | Samples | Function                                                           | Location                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
|  0.1% |       2 | `invokeVirtual(Object, Object)`                                    | `java.lang.invoke.DirectMethodHandle$Holder`                           |
|  0.1% |       2 | `equals(Object, Object)`                                           | `java.util.Objects`                                                    |
|  0.1% |       2 | `putVal(int, Object, Object, boolean, boolean)`                    | `java.util.HashMap`                                                    |
|  0.1% |       2 | `getNode(Object)`                                                  | `java.util.HashMap`                                                    |
| <0.1% |       1 | `makePreparedLambdaForm(MethodType, int)`                          | `java.lang.invoke.DirectMethodHandle`                                  |
| <0.1% |       1 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`                                       |
| <0.1% |       1 | `checkCustomized(MethodHandle)`                                    | `java.lang.invoke.Invokers`                                            |
| <0.1% |       1 | `<init>(MethodType, LambdaForm)`                                   | `java.lang.invoke.MethodHandle`                                        |
| <0.1% |       1 | `getAndPut(String, MemoizeCache$ValueProvider)`                    | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                    |
| <0.1% |       1 | `initCEN()`                                                        | `jdk.nio.zipfs.ZipFileSystem`                                          |
| <0.1% |       1 | `guardWithCatch(Object, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`                    |
| <0.1% |       1 | `coder()`                                                          | `java.lang.String`                                                     |
| <0.1% |       1 | `invoke(Object, Object)`                                           | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`                    |
| <0.1% |       1 | `isAssignable(Method, Method)`                                     | `java.beans.PropertyDescriptor`                                        |
| <0.1% |       1 | `<init>(XMLParserConfiguration)`                                   | `com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser` |
| <0.1% |       1 | `iterate()`                                                        | `groovy.lang.MetaClassImpl$MethodIndexAction`                          |
| <0.1% |       1 | `delegate(Object, Object, Object)`                                 | `java.lang.invoke.DelegatingMethodHandle$Holder`                       |
| <0.1% |       1 | `invoke(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001130c00`                    |
| <0.1% |       1 | `getTypeName()`                                                    | `java.lang.Class`                                                      |
| <0.1% |       1 | `compareTo(String)`                                                | `java.lang.String`                                                     |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       2 | `java.util.Objects:64` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:635` |
| 50.0% |       1 | `java.util.HashMap:636` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:585` |
| 50.0% |       1 | `java.util.HashMap:580` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.DirectMethodHandle:236` |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `java.security.AccessController:778` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `java.lang.invoke.Invokers:627` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:62` |

##### `initCEN()` (`jdk.nio.zipfs.ZipFileSystem`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `jdk.nio.zipfs.ZipFileSystem:1598` |

##### `coder()` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:4803` |

##### `isAssignable(Method, Method)` (`java.beans.PropertyDescriptor`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.beans.PropertyDescriptor:776` |

##### `<init>(XMLParserConfiguration)` (`com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser:82` |

##### `iterate()` (`groovy.lang.MetaClassImpl$MethodIndexAction`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `groovy.lang.MetaClassImpl$MethodIndexAction:3878` |

##### `getTypeName()` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       1 | `java.lang.Class:1810` |

##### `compareTo(String)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:2034` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 77.9% |     933 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |      89 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      88 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.3% |      88 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.1% |     891 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.0% |      89 | `os::signal_wait`                | `libjvm.dylib` |
|  0.6% |       6 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      89 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      89 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       5 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 50.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 25.0% |       1 | `PhaseIFG::remove_node`                        | `libjvm.dylib` |
| 25.0% |       1 | `PhaseIFG::re_insert`                          | `libjvm.dylib` |
| 25.0% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |
| 25.0% |       1 | `PhaseChaitin::build_ifg_physical`             | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       4 | `Matcher::xform` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 25.0% |       1 | `PhaseMacroExpand::expand_subtypecheck_node` | `libjvm.dylib` |
| 25.0% |       1 | `PhaseCFG::PhaseCFG`                         | `libjvm.dylib` |
| 25.0% |       1 | `Parse::do_newarray`                         | `libjvm.dylib` |
| 25.0% |       1 | `TypeInstPtr::cast_to_ptr_type`              | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ConnectionGraph::create_split_phi` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       3 | `ConnectionGraph::split_memory_phi` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 33.3% |       1 | `PhaseChaitin::Register_Allocate`        | `libjvm.dylib` |
| 33.3% |       1 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| 33.3% |       1 | `Matcher::match_tree`                    | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 66.7% |       2 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |
| 33.3% |       1 | `nmethod::do_unloading`                 | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                   | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 33.3% |       1 | `JavaCalls::call_helper` | `libjvm.dylib`                                             |
| 33.3% |       1 | `<clinit>()`             | `com.sun.org.apache.xerces.internal.impl.xs.XSConstraints` |
| 33.3% |       1 | `JVM_NewArray`           | `libjvm.dylib`                                             |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       3 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |       3 | `nmethod::oops_do_process_weak` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 33.3% |       1 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |
| 33.3% |       1 | `ciBytecodeStream::get_method`  | `libjvm.dylib` |
| 33.3% |       1 | `ciField::ciField`              | `libjvm.dylib` |

##### `PhaseIterGVN::remove_globally_dead_node` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       3 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|      % | Samples | Caller                                             | Location       |
| -----: | ------: | -------------------------------------------------- | -------------- |
| 100.0% |       2 | `SystemDictionary::resolve_instance_class_or_null` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIterGVN::PhaseIterGVN`          | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `RegMask::is_bound` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       2 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `put(Object, Object)` | `java.util.HashMap` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |       2 | `get(Object)` | `java.util.LinkedHashMap` |

##### `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `LibraryIntrinsic::generate` | `libjvm.dylib` |

##### `cmpOpOper::num_edges` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Type::hashcons` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       1 | `free_medium` | `libsystem_malloc.dylib` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                                | Location                              |
| -----: | ------: | ------------------------------------- | ------------------------------------- |
| 100.0% |       1 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

|      % | Samples | Caller                           | Location                         |
| -----: | ------: | -------------------------------- | -------------------------------- |
| 100.0% |       1 | `doPrivileged(PrivilegedAction)` | `java.security.AccessController` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|      % | Samples | Caller                                                                           | Location                           |
| -----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       1 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller                                                                          | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `initCEN()` (`jdk.nio.zipfs.ZipFileSystem`)

|      % | Samples | Caller                                     | Location                      |
| -----: | ------: | ------------------------------------------ | ----------------------------- |
| 100.0% |       1 | `<init>(ZipFileSystemProvider, Path, Map)` | `jdk.nio.zipfs.ZipFileSystem` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller                             | Location                                         |
| -----: | ------: | ---------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `coder()` (`java.lang.String`)

|      % | Samples | Caller     | Location           |
| -----: | ------: | ---------- | ------------------ |
| 100.0% |       1 | `length()` | `java.lang.String` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isAssignable(Method, Method)` (`java.beans.PropertyDescriptor`)

|      % | Samples | Caller                                           | Location                        |
| -----: | ------: | ------------------------------------------------ | ------------------------------- |
| 100.0% |       1 | `<init>(PropertyDescriptor, PropertyDescriptor)` | `java.beans.PropertyDescriptor` |

##### `<init>(XMLParserConfiguration)` (`com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser`)

|      % | Samples | Caller                           | Location                                                       |
| -----: | ------: | -------------------------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `<init>(XMLParserConfiguration)` | `com.sun.org.apache.xerces.internal.parsers.AbstractSAXParser` |

##### `iterate()` (`groovy.lang.MetaClassImpl$MethodIndexAction`)

|      % | Samples | Caller                                | Location                    |
| -----: | ------: | ------------------------------------- | --------------------------- |
| 100.0% |       1 | `replaceWithMOPCalls(CachedMethod[])` | `groovy.lang.MetaClassImpl` |

##### `delegate(Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010da400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001130c00`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `getTypeName()` (`java.lang.Class`)

|      % | Samples | Caller                                         | Location                   |
| -----: | ------: | ---------------------------------------------- | -------------------------- |
| 100.0% |       1 | `specificToGenericStringHeader(StringBuilder)` | `java.lang.reflect.Method` |

##### `compareTo(String)` (`java.lang.String`)

|      % | Samples | Caller                                | Location                                      |
| -----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `compareToCachedMethod(CachedMethod)` | `org.codehaus.groovy.reflection.CachedMethod` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 83.3% |   2,238 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 83.3% |   2,238 | `thread_start`                             | `libsystem_pthread.dylib` |
| 80.0% |   2,148 | `Thread::call_run`                         | `libjvm.dylib`            |
| 80.0% |   2,148 | `thread_native_entry`                      | `libjvm.dylib`            |
| 44.6% |   1,198 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.8% |     989 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 34.8% |     934 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 33.9% |     911 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.5% |     792 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 26.1% |     701 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 13.2% |     354 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  9.9% |     267 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  8.7% |     233 | `Monitor::wait`                            | `libjvm.dylib`            |
|  8.0% |     214 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  6.7% |     179 | `Compile::Compile`                         | `libjvm.dylib`            |
|  6.7% |     179 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  6.6% |     178 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.6% |     178 | `main`                                     | `java`                    |
|  5.2% |     140 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  3.3% |      89 | `VMThread::run`                            | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 83.3% |   2,238 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 83.3% |   2,238 | `thread_start`                          | `libsystem_pthread.dylib` |
| 80.0% |   2,148 | `Thread::call_run`                      | `libjvm.dylib`            |
| 80.0% |   2,148 | `thread_native_entry`                   | `libjvm.dylib`            |
| 44.6% |   1,198 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 36.8% |     989 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 34.8% |     934 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 33.9% |     911 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.5% |     792 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 26.1% |     701 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  9.9% |     267 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  8.7% |     233 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.6% |     178 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.6% |     178 | `main`                                  | `java`                    |
|  3.3% |      89 | `VMThread::run`                         | `libjvm.dylib`            |
|  3.3% |      89 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.3% |      89 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.3% |      89 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.3% |      89 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |
|  3.3% |      89 | `__CFRunLoopRun`                        | `CoreFoundation`          |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 13.2% |     354 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  8.0% |     214 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  6.7% |     179 | `Compile::Compile`                         | `libjvm.dylib` |
|  6.7% |     179 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  5.2% |     140 | `CompileQueue::get`                        | `libjvm.dylib` |
|  3.2% |      86 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  3.1% |      82 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.9% |      52 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  1.6% |      44 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  1.4% |      37 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  1.4% |      37 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  1.3% |      34 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.3% |      34 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.2% |      31 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.8% |      21 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.7% |      20 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.6% |      15 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  0.5% |      14 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.5% |      13 | `Matcher::match`                           | `libjvm.dylib` |
|  0.4% |      10 | `Matcher::xform`                           | `libjvm.dylib` |

##### Standard library

|    % | Samples | Function                        | Location                                                                |
| ---: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| 3.3% |      89 | `wait0(long)`                   | `java.lang.Object`                                                      |
| 3.3% |      89 | `wait(long)`                    | `java.lang.Object`                                                      |
| 3.3% |      89 | `wait()`                        | `java.lang.Object`                                                      |
| 3.3% |      89 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |      89 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      89 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| 3.3% |      89 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| 3.3% |      89 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| 3.3% |      89 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| 3.3% |      89 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| 3.3% |      88 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| 3.3% |      88 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| 3.3% |      88 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 3.3% |      88 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      88 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      88 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| 3.3% |      88 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| 3.3% |      88 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| 3.3% |      88 | `run()`                         | `java.lang.Thread`                                                      |
| 3.3% |      88 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,238 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,148 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,148 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 77.9% |     933 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |      89 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |      88 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.3% |      88 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.1% |     891 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.0% |      89 | `os::signal_wait`                | `libjvm.dylib` |
|  0.6% |       6 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 75.1% |     701 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 24.9% |     233 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     911 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     792 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.7% |      89 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| 12.7% |      89 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.7% |      89 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| 12.7% |      89 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.6% |      88 | `NotificationThread::notification_thread_entry`               | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     354 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     267 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 60.1% |     140 | `CompileQueue::get`               | `libjvm.dylib` |
| 38.2% |      89 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.7% |       4 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     214 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     179 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     179 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     178 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |      89 | `unknown`    | `<unknown>`    |
| 50.0% |      89 | `apple_main` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     140 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      89 | `Thread::call_run` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      89 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Caller     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |      89 | `mach_msg` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |      89 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Caller           | Location         |
| -----: | ------: | ---------------- | ---------------- |
| 100.0% |      89 | `__CFRunLoopRun` | `CoreFoundation` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Caller                 | Location         |
| -----: | ------: | ---------------------- | ---------------- |
| 100.0% |      89 | `CFRunLoopRunSpecific` | `CoreFoundation` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |      89 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |      89 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |      89 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |      89 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |      89 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller  | Location                                  |
| -----: | ------: | ------- | ----------------------------------------- |
| 100.0% |      89 | `run()` | `java.lang.ref.Finalizer$FinalizerThread` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Caller                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |      89 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Caller  | Location                                   |
| -----: | ------: | ------- | ------------------------------------------ |
| 100.0% |      89 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |      88 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |      88 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      88 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |      88 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |      88 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |      88 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Caller                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      88 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      88 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Caller  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |      88 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      86 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      82 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      52 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 65.9% |      29 | `Compile::Optimize`       | `libjvm.dylib` |
| 34.1% |      15 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      37 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      37 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      34 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      34 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      31 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 57.1% |      12 | `Compile::Optimize`                        | `libjvm.dylib` |
| 33.3% |       7 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  4.8% |       1 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  4.8% |       1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      20 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      15 | `Compile::Optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      14 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      13 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      10 | `Matcher::match` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 96.0% |   2,148 | `thread_native_entry` | `libjvm.dylib` |
|  4.0% |      89 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,238 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 42.4% |     911 | `WorkerThread::run`             | `libjvm.dylib` |
| 36.9% |     792 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.4% |     267 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.1% |      89 | `VMThread::run`                 | `libjvm.dylib` |
|  4.1% |      89 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,148 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |     933 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 97.8% |     891 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  1.3% |      12 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.5% |       5 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  0.2% |       2 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 44.7% |     354 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
| 11.2% |      89 | `signal_thread_entry`                           | `libjvm.dylib` |
| 11.2% |      89 | `ServiceThread::service_thread_entry`           | `libjvm.dylib` |
| 11.1% |      88 | `JvmtiAgentThread::start_function_wrapper`      | `libjvm.dylib` |
| 11.1% |      88 | `NotificationThread::notification_thread_entry` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     701 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 60.5% |     214 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 39.5% |     140 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      89 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      89 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| 33.3% |      89 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     233 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 83.6% |     179 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 15.9% |      34 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.5% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.0% |      86 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 45.8% |      82 | `Compile::Optimize`                      | `libjvm.dylib` |
|  5.6% |      10 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     179 | `Compile::Compile` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      89 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      89 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     178 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     140 | `Monitor::wait` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 95.5% |      85 | `VMThread::wait_for_operation` | `libjvm.dylib` |
|  4.5% |       4 | `VMThread::inner_execute`      | `libjvm.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |      89 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      89 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |      89 | `mach_msg` | `libsystem_kernel.dylib` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Callee                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |      89 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |      89 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |      89 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |      89 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |      89 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |      89 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |      89 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

|      % | Samples | Callee     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |      89 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      89 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |      89 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |      89 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |      88 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |      88 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % | Samples | Callee                    | Location                                 |
| -----: | ------: | ------------------------- | ---------------------------------------- |
| 100.0% |      88 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee                  | Location                                                                |
| -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% |      88 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      88 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee          | Location                       |
| -----: | ------: | --------------- | ------------------------------ |
| 100.0% |      88 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % | Samples | Callee         | Location                       |
| -----: | ------: | -------------- | ------------------------------ |
| 100.0% |      88 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% |      88 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |      88 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % | Samples | Callee  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |      88 | `run()` | `java.lang.Thread` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 60.5% |      52 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 15.1% |      13 | `Matcher::match`                  | `libjvm.dylib` |
| 11.6% |      10 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  7.0% |       6 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.3% |       2 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 35.4% |      29 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 18.3% |      15 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 14.6% |      12 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  8.5% |       7 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
|  6.1% |       5 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 19.2% |      10 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 15.4% |       8 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.5% |       7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 11.5% |       6 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  5.8% |       3 | `PhaseChaitin::Select`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.1% |      37 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 15.9% |       7 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 24.3% |       9 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 21.6% |       8 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 13.5% |       5 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 10.8% |       4 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
|  5.4% |       2 | `Node::is_CFG`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      37 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 91.2% |      31 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  8.8% |       3 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      34 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 45.2% |      14 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 29.0% |       9 | `Compilation::build_hir`       | `libjvm.dylib` |
| 22.6% |       7 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  3.2% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 95.2% |      20 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  4.8% |       1 | `PhiNode::hash`               | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 20.0% |       4 | `LoadNode::Ideal`            | `libjvm.dylib` |
| 20.0% |       4 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 10.0% |       2 | `StoreNode::Ideal`           | `libjvm.dylib` |
| 10.0% |       2 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
| 10.0% |       2 | `RegionNode::Ideal`          | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      15 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 71.4% |      10 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 28.6% |       4 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 76.9% |      10 | `Matcher::xform`       | `libjvm.dylib` |
| 15.4% |       2 | `Matcher::find_shared` | `libjvm.dylib` |
|  7.7% |       1 | `RegionNode::Opcode`   | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 60.0% |       6 | `Matcher::match_tree`   | `libjvm.dylib` |
| 10.0% |       1 | `StoreNode::match_edge` | `libjvm.dylib` |
| 10.0% |       1 | `Matcher::match_sfpt`   | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.2% |     891 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  5.2% |     139 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  3.3% |      89 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  3.3% |      89 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  3.3% |      89 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  3.3% |      89 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  3.3% |      89 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  3.3% |      89 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  3.3% |      89 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  3.3% |      89 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  3.3% |      89 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  3.3% |      88 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  3.3% |      88 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  3.3% |      88 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  3.2% |      87 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|  3.2% |      85 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  3.1% |      84 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  0.3% |       7 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
|  0.3% |       7 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                   |
|  0.2% |       5 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                 |
