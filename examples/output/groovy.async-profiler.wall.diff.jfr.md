# Sampling profile diff

Collected 2,686 → 2,910 samples (+224 samples, +8.3%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Native            |   +9.4% |  +231 | 91.2% → 92.1% | 2,449 → 2,680 |
| Compiler          |   -1.1% |    -2 |   6.6% → 6.0% |     176 → 174 |
| Standard library  |   +3.9% |    +2 |   1.9% → 1.8% |       51 → 53 |
| Unknown           | removed |    -5 |   0.2% → 0.0% |         5 → 0 |
| Ours              | removed |    -4 |   0.1% → 0.0% |         4 → 0 |
| JIT               | +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 |
| Garbage collector |     new |    +1 |  0.0% → <0.1% |         0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2,238 → 2,432 samples (83.3% → 83.6%) thread_start at libsystem_pthread.dylib
│   └── 2,238 → 2,432 samples (83.3% → 83.6%) _pthread_start
│       ├── 2,148 → 2,335 samples (80.0% → 80.2%) thread_native_entry at libjvm.dylib
│       │   └── 2,148 → 2,335 samples (80.0% → 80.2%) Thread::call_run
│       │       ├── 911 → 995 samples (33.9% → 34.2%) WorkerThread::run
│       │       │   ├── 891 → 992 samples (33.2% → 34.1%, self 36.8% → 37.5% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       │   └── … 4 → 0 samples (0.1% → 0.0%) G1ParScanThreadState::do_copy_to_survivor_space at libjvm.dylib
│       │       ├── 792 → 860 samples (29.5% → 29.6%) JavaThread::thread_main_inner
│       │       │   ├── 354 → 382 samples (13.2% → 13.1%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 214 → 216 samples (8.0% → 7.4%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 179 → 182 samples (6.7% → 6.3%) C2Compiler::compile_method
│       │       │   │   │   │   └── 179 → 180 samples (6.7% → 6.2%) Compile::Compile
│       │       │   │   │   │       ├── 86 → 84 samples (3.2% → 2.9%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 52 → 46 samples (1.9% → 1.6%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 10 → 5 samples (0.4% → 0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   │   ├── 1 → 4 samples (<0.1% → 0.1%) PhaseAggressiveCoalesce::insert_copies
│       │       │   │   │   │       │   │   └── 41 → 37 samples (1.5% → 1.3%) 20 more callees, led by (0.3%) PhaseChaitin::Split
│       │       │   │   │   │       │   ├── 10 → 14 samples (0.4% → 0.5%) PhaseOutput::Output
│       │       │   │   │   │       │   └── … 6 → 5 samples (0.2%) Matcher::match_tree at libjvm.dylib
│       │       │   │   │   │       ├── 82 → 79 samples (3.1% → 2.7%) Compile::Optimize
│       │       │   │   │   │       │   ├── … 23 → 21 samples (0.9% → 0.7%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   │   │       │   │   ├── 1 → 7 samples (<0.1% → 0.2%) PhaseIdealLoop::Dominators
│       │       │   │   │   │       │   │   └── 22 → 14 samples (0.8% → 0.5%) 11 more callees, led by (0.2%) PhaseIdealLoop::build_loop_late
│       │       │   │   │   │       │   ├── 12 → 18 samples (0.4% → 0.6%) PhaseIterGVN::optimize
│       │       │   │   │   │       │   │   └── 11 → 18 samples (0.4% → 0.6%) PhaseIterGVN::transform_old
│       │       │   │   │   │       │   │       └── … 2 → 0 samples (0.1% → 0.0%) Node::dominates at libjvm.dylib
│       │       │   │   │   │       │   └── 41 → 38 samples (1.5% → 1.3%) 11 more callees, led by (0.6% → 0.5%) Compile::optimize_loops
│       │       │   │   │   │       └── 11 → 17 samples (0.4% → 0.6%) 2 more callees, led by (0.4% → 0.5%) ParseGenerator::generate
│       │       │   │   │   └── 35 → 34 samples (1.3% → 1.2%) 3 more callees, led by (1.3% → 1.1%) Compiler::compile_method
│       │       │   │   └── … 140 → 165 samples (5.2% → 5.7%) PlatformMonitor::wait at libjvm.dylib
│       │       │   │       ├── 139 → 160 samples (5.2% → 5.5%, self 44.6% → 44.9% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │       └── … 1 → 4 samples (<0.1% → 0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   └── 438 → 478 samples (16.3% → 16.4%) 5 more callees, led by (3.3%) signal_thread_entry
│       │       ├── 267 → 288 samples (9.9%) ConcurrentGCThread::run
│       │       │   └── 267 → 288 samples (9.9%) 3 more callees, led by (3.3%) G1ServiceThread::run_service
│       │       └── 178 → 192 samples (6.6%) 2 more callees, led by (3.3%) VMThread::run
│       └── … 89 → 96 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 89 → 96 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── 5 → 0 samples (0.2% → 0.0%) (anonymous)
└── 354 → 382 samples (13.2% → 13.1%) 7 more root frames, led by (3.3%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                  | Location                                            |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------- | --------------------------------------------------- |
|   +9.1% |  +109 | 44.6% → 44.9% | 1,198 → 1,307 | `__psynch_cvwait`                                                         | `libsystem_kernel.dylib`                            |
|  +10.2% |  +101 | 36.8% → 37.5% |   989 → 1,090 | `semaphore_wait_trap`                                                     | `libsystem_kernel.dylib`                            |
| +300.0% |    +9 |   0.1% → 0.4% |        3 → 12 | `__psynch_mutexwait`                                                      | `libsystem_kernel.dylib`                            |
|   +7.9% |    +7 |          3.3% |       89 → 96 | `mach_msg2_trap`                                                          | `libsystem_kernel.dylib`                            |
|   +7.9% |    +7 |          3.3% |       89 → 96 | `__ulock_wait`                                                            | `libsystem_kernel.dylib`                            |
| +500.0% |    +5 |  <0.1% → 0.2% |         1 → 6 | `PhaseIdealLoop::Dominators`                                              | `libjvm.dylib`                                      |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `PhaseIterGVN::transform_old`                                             | `libjvm.dylib`                                      |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `PhaseAggressiveCoalesce::insert_copies`                                  | `libjvm.dylib`                                      |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `Arena::contains`                                                         | `libjvm.dylib`                                      |
| +150.0% |    +3 |   0.1% → 0.2% |         2 → 5 | `PhaseLive::compute`                                                      | `libjvm.dylib`                                      |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH`                    |
| +150.0% |    +3 |   0.1% → 0.2% |         2 → 5 | `java_lang_Throwable::fill_in_stack_trace`                                | `libjvm.dylib`                                      |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `Type::cmp`                                                               | `libjvm.dylib`                                      |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseIdealLoop::try_sink_out_of_loop`                                    | `libjvm.dylib`                                      |
| +100.0% |    +2 |          0.1% |         2 → 4 | `PhaseIdealLoop::build_loop_late_post_work`                               | `libjvm.dylib`                                      |
| +100.0% |    +2 |          0.1% |         2 → 4 | `PhaseOutput::BuildOopMaps`                                               | `libjvm.dylib`                                      |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                 |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `collector(Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001031800` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseCFG::partial_latency_of_defs`                                       | `libjvm.dylib`                                      |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `Node::Node`                                                              | `libjvm.dylib`                                      |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                               | Location                 |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------ | ------------------------ |
|   +9.1% |  +109 | 44.6% → 44.9% | 1,198 → 1,307 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib` |
|  +10.2% |  +101 | 36.8% → 37.5% |   989 → 1,090 | `semaphore_wait_trap`                                                                                  | `libsystem_kernel.dylib` |
| +300.0% |    +9 |   0.1% → 0.4% |        3 → 12 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib` |
|   +7.9% |    +7 |          3.3% |       89 → 96 | `mach_msg2_trap`                                                                                       | `libsystem_kernel.dylib` |
|   +7.9% |    +7 |          3.3% |       89 → 96 | `__ulock_wait`                                                                                         | `libsystem_kernel.dylib` |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `Arena::contains`                                                                                      | `libjvm.dylib`           |
| +150.0% |    +3 |   0.1% → 0.2% |         2 → 5 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `__vfprintf`                                                                                           | `libsystem_c.dylib`      |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `frame::sender_for_compiled_frame`                                                                     | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `Dict::Insert`                                                                                         | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `posix_madvise`                                                                                        | `libsystem_kernel.dylib` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `BacktraceBuilder::push`                                                                               | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `nmethod::check_dependency_on`                                                                         | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `vframeStreamCommon::next`                                                                             | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `ConstantPool::klass_at_impl`                                                                          | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `InstanceKlass::find_method_index`                                                                     | `libjvm.dylib`           |
| +100.0% |    +1 |  <0.1% → 0.1% |         1 → 2 | `ValueRecorder<Metadata*>::maybe_find_index`                                                           | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`           |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `ImmutableOopMapSet::find_slot_for_offset`                                                             | `libjvm.dylib`           |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| +500.0% |    +5 | <0.1% → 0.2% |   1 → 6 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseIterGVN::transform_old`                 | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseAggressiveCoalesce::insert_copies`      | `libjvm.dylib` |
| +150.0% |    +3 |  0.1% → 0.2% |   2 → 5 | `PhaseLive::compute`                          | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Type::cmp`                                   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::try_sink_out_of_loop`        | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |   2 → 4 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| +100.0% |    +2 |         0.1% |   2 → 4 | `PhaseOutput::BuildOopMaps`                   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseCFG::partial_latency_of_defs`           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Node::Node`                                  | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `LinearScan::resolve_data_flow`               | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `IfTrueNode::Opcode`                          | `libjvm.dylib` |
|  +33.3% |    +1 |         0.1% |   3 → 4 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
|  +50.0% |    +1 |         0.1% |   2 → 3 | `Compile::identify_useful_nodes`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseRenumberLive::PhaseRenumberLive`        | `libjvm.dylib` |
|  +25.0% |    +1 |  0.1% → 0.2% |   4 → 5 | `IndexSetIterator::advance_and_next`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::Simplify`                      | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|  +50.0% |    +1 |         0.1% |   2 → 3 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH`                       |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`                   | `java.lang.invoke.MethodHandleImpl`                    |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`    |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `cast(Object)`                                                                              | `java.lang.Class`                                      |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`           | `java.lang.invoke.MethodHandles$Lookup`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `initValue()`                                                                               | `org.codehaus.groovy.reflection.CachedClass$3`         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `declaredAnnotations()`                                                                     | `java.lang.reflect.Executable`                         |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToCallSite(Object, Object)`                                                            | `java.lang.invoke.Invokers$Holder`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `computeStartState(DFA, ParserRuleContext, boolean)`                                        | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visit(GroovyCodeVisitor)`                                                                  | `org.codehaus.groovy.ast.expr.BinaryExpression`        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `maybeCustomize()`                                                                          | `java.lang.invoke.MethodHandle`                        |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `checkCanSetAccessible(Class, Class, boolean)`                                              | `java.lang.reflect.AccessibleObject`                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `addConstantUtf8(String)`                                                                   | `jdk.internal.org.objectweb.asm.SymbolTable`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<clinit>()`                                                                                | `org.codehaus.groovy.ast.ClassHelper`                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `mismatch(byte[], int, byte[], int, int)`                                                   | `jdk.internal.util.ArraysSupport`                      |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                          | Location                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| removed |    -5 |  0.2% → 0.0% |   5 → 0 | `(anonymous)`                                     | `<unknown>`                                  |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `Node::is_CFG`                                    | `libjvm.dylib`                               |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `Matcher::match_tree`                             | `libjvm.dylib`                               |
|  -57.1% |    -4 |  0.3% → 0.1% |   7 → 3 | `PhaseChaitin::build_ifg_physical`                | `libjvm.dylib`                               |
|  -42.9% |    -3 |  0.3% → 0.1% |   7 → 4 | `PhaseIdealLoop::build_loop_early`                | `libjvm.dylib`                               |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `PhaseChaitin::elide_copy`                        | `libjvm.dylib`                               |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`                               |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl`      | `libjvm.dylib`                               |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseIterGVN::remove_globally_dead_node`         | `libjvm.dylib`                               |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `sys_icache_invalidate`                           | `libsystem_platform.dylib`                   |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `ConnectionGraph::create_split_phi`               | `libjvm.dylib`                               |
|  -40.0% |    -2 |  0.2% → 0.1% |   5 → 3 | `Node::dominates`                                 | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `G1CardSet::add_to_howl`                          | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `MachNode::reloc`                                 | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseCCP::push_and`                              | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `RegionNode::is_CFG`                              | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `MachNode::ideal_Opcode`                          | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `BoolNode::Opcode`                                | `libjvm.dylib`                               |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`                   | `java.lang.invoke.DirectMethodHandle$Holder` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl`                                                                                 | `libjvm.dylib`             |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `sys_icache_invalidate`                                                                                                      | `libsystem_platform.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `G1CardSet::add_to_howl`                                                                                                     | `libjvm.dylib`             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Dictionary::find`                                                                                                           | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LibraryCallKit::inline_native_Class_query`                                                                                  | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `cmpOpOper::num_edges`                                                                                                       | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `_platform_bzero`                                                                                                            | `libsystem_platform.dylib` |
|  -33.3% |    -1 |         0.1% |   3 → 2 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                                                              | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                               | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nmethod::stub_begin`                                                                                                        | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `_platform_strcmp`                                                                                                           | `libsystem_platform.dylib` |
|  -33.3% |    -1 |         0.1% |   3 → 2 | `pthread_jit_write_protect_np`                                                                                               | `libsystem_pthread.dylib`  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `pthread_mutex_trylock`                                                                                                      | `libsystem_pthread.dylib`  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `JavaFrameAnchor::make_walkable`                                                                                             | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `SymbolTable::lookup_only`                                                                                                   | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `java_lang_String::create_from_unicode`                                                                                      | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `Node::is_CFG`                                  | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `Matcher::match_tree`                           | `libjvm.dylib` |
|  -57.1% |    -4 |  0.3% → 0.1% |   7 → 3 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
|  -42.9% |    -3 |  0.3% → 0.1% |   7 → 4 | `PhaseIdealLoop::build_loop_early`              | `libjvm.dylib` |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseIterGVN::remove_globally_dead_node`       | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `ConnectionGraph::create_split_phi`             | `libjvm.dylib` |
|  -40.0% |    -2 |  0.2% → 0.1% |   5 → 3 | `Node::dominates`                               | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `MachNode::reloc`                               | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `PhaseCCP::push_and`                            | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `RegionNode::is_CFG`                            | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `MachNode::ideal_Opcode`                        | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `BoolNode::Opcode`                              | `libjvm.dylib` |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  -50.0% |    -1 | 0.1% → <0.1% |   2 → 1 | `PhaseIterGVN::add_users_to_worklist`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::schedule_pinned_nodes`               | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_block_proj`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless`        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachNode::in_RegMask`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LoopNode::is_valid_counted_loop`               | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                           | Location                                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$MH`                                       |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object)`                                    | `java.lang.invoke.DirectMethodHandle$Holder`                           |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `equals(Object, Object)`                                           | `java.util.Objects`                                                    |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)`                    | `java.util.HashMap`                                                    |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `getNode(Object)`                                                  | `java.util.HashMap`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `makePreparedLambdaForm(MethodType, int)`                          | `java.lang.invoke.DirectMethodHandle`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkCustomized(MethodHandle)`                                    | `java.lang.invoke.Invokers`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAndPut(String, MemoizeCache$ValueProvider)`                    | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `initCEN()`                                                        | `jdk.nio.zipfs.ZipFileSystem`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `coder()`                                                          | `java.lang.String`                                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `invoke(Object, Object)`                                           | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isAssignable(Method, Method)`                                     | `java.beans.PropertyDescriptor`                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(XMLParserConfiguration)`                                   | `com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `iterate()`                                                        | `groovy.lang.MetaClassImpl$MethodIndexAction`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `delegate(Object, Object, Object)`                                 | `java.lang.invoke.DelegatingMethodHandle$Holder`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getTypeName()`                                                    | `java.lang.Class`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClassDeclaration(GroovyParser$ClassDeclarationContext)`      | `org.apache.groovy.parser.antlr4.AstBuilder`                           |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |            % | Samples | Location                                |
| -----: | ----: | -----------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandleImpl:289` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandleImpl:294` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.Class:4068` |

##### `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandles$Lookup:4063` |

##### `initValue()` (`org.codehaus.groovy.reflection.CachedClass$3`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codehaus.groovy.reflection.CachedClass$3:95` |

##### `declaredAnnotations()` (`java.lang.reflect.Executable`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.reflect.Executable:639` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |            % | Samples | Location                            |
| -----: | ----: | -----------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandle:479` |

##### `computeStartState(DFA, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1302` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.BinaryExpression`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codehaus.groovy.ast.expr.BinaryExpression:60` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.reflect.Array:78` |

##### `maybeCustomize()` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandle:1846` |

##### `checkCanSetAccessible(Class, Class, boolean)` (`java.lang.reflect.AccessibleObject`)

|  Change | Delta |      % | Samples | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.lang.reflect.AccessibleObject:343` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `<clinit>()` (`org.codehaus.groovy.ast.ClassHelper`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codehaus.groovy.ast.ClassHelper:146` |

##### `mismatch(byte[], int, byte[], int, int)` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.util.ArraysSupport:402` |

##### `equals(Object, Object)` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.Objects:64` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:635` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:636` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:580` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:585` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.DirectMethodHandle:236` |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.security.AccessController:778` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.Invokers:627` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:62` |

##### `initCEN()` (`jdk.nio.zipfs.ZipFileSystem`)

|  Change | Delta |             % | Samples | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.nio.zipfs.ZipFileSystem:1598` |

##### `coder()` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:4803` |

##### `isAssignable(Method, Method)` (`java.beans.PropertyDescriptor`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.beans.PropertyDescriptor:776` |

##### `<init>(XMLParserConfiguration)` (`com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser`)

|  Change | Delta |             % | Samples | Location                                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser:82` |

##### `iterate()` (`groovy.lang.MetaClassImpl$MethodIndexAction`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `groovy.lang.MetaClassImpl$MethodIndexAction:3878` |

##### `getTypeName()` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.Class:1810` |

##### `visitClassDeclaration(GroovyParser$ClassDeclarationContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.apache.groovy.parser.antlr4.AstBuilder:1229` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |     Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ----------: | ----------------------- | ------------------------ |
|  +9.4% |   +88 | 77.9% → 78.1% | 933 → 1,021 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  +8.0% |    +7 |          7.3% |     88 → 95 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  +8.0% |    +7 |          7.3% |     88 → 95 | `Parker::park`          | `libjvm.dylib`           |
|  +7.9% |    +7 |   7.4% → 7.3% |     89 → 96 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % |   Samples | Caller                           | Location       |
| ------: | ----: | ------------: | --------: | -------------------------------- | -------------- |
|  +11.3% |  +101 | 90.1% → 91.0% | 891 → 992 | `WorkerThread::run`              | `libjvm.dylib` |
|   +7.9% |    +7 |   9.0% → 8.8% |   89 → 96 | `os::signal_wait`                | `libjvm.dylib` |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location                  |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +300.0% |    +9 | 100.0% |  3 → 12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller           | Location       |
| -----: | ----: | -----------: | ------: | ---------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `Matcher::xform` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |      % | Samples | Caller                                   | Location                           |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                | Location       |
| ------: | ----: | -----: | ------: | --------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Caller                                                            | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

| Change | Delta |             % | Samples | Caller                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Node::Node` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `IdealKit::Bool`                  | `libjvm.dylib` |

##### `__vfprintf` (`libsystem_c.dylib`)

| Change | Delta |             % | Samples | Caller       | Location            |
| -----: | ----: | ------------: | ------: | ------------ | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_vsnprintf` | `libsystem_c.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller        | Location                 |
| ------: | ----: | -----: | ------: | ------------- | ------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `free_medium` | `libsystem_malloc.dylib` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `nmethod::check_dependency_on` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `DependencyContext::mark_dependent_nmethods` | `libjvm.dylib` |

##### `vframeStreamCommon::next` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location                          |
| -----: | ----: | ------------: | ------: | ------------------ | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getCallerClass()` | `jdk.internal.reflect.Reflection` |

##### `ConstantPool::klass_at_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `InterpreterRuntime::ldc` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                  | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `ValueRecorder<Metadata*>::maybe_find_index` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MacroAssembler::mov_metadata` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `ImmutableOopMapSet::find_slot_for_offset` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `nmethod::finalize_relocations` | `libjvm.dylib` |

##### `LinearScan::resolve_data_flow` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `IfTrueNode::Opcode` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::subsume_node`  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                        | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|    new |    +2 |   0.0% → 66.7% |   0 → 2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
| -50.0% |    -1 | 100.0% → 33.3% |   2 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `PhaseRenumberLive::PhaseRenumberLive` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Optimize` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIFG::re_insert`                          | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseChaitin::Simplify`                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseIFG::SquareUp`                           | `libjvm.dylib` |

##### `PhaseChaitin::Simplify` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

| Change | Delta |            % | Samples | Caller                                  | Location                                     |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeVirtual(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Caller              | Location                                |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `unreflect(Method)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `initValue()` (`org.codehaus.groovy.reflection.CachedClass$3`)

| Change | Delta |             % | Samples | Caller        | Location                                       |
| -----: | ----: | ------------: | ------: | ------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `initValue()` | `org.codehaus.groovy.reflection.CachedClass$3` |

##### `declaredAnnotations()` (`java.lang.reflect.Executable`)

| Change | Delta |             % | Samples | Caller                 | Location                       |
| -----: | ----: | ------------: | ------: | ---------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getAnnotation(Class)` | `java.lang.reflect.Executable` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |      % | Samples | Caller                           | Location                             |
| ------: | ----: | -----: | ------: | -------------------------------- | ------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % | Samples | Caller                                   | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

| Change | Delta |             % | Samples | Caller                   | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % | Samples | Caller                                           | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `computeStartState(DFA, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Caller                                                          | Location                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.BinaryExpression`)

| Change | Delta |             % | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |             % | Samples | Caller                              | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `maybeCustomize()` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller        | Location                                            |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `countDown()` | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `checkCanSetAccessible(Class, Class, boolean)` (`java.lang.reflect.AccessibleObject`)

|  Change | Delta |      % | Samples | Caller               | Location                             |
| ------: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `trySetAccessible()` | `java.lang.reflect.AccessibleObject` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Caller                    | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeMethodInfoSize()` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `<clinit>()` (`org.codehaus.groovy.ast.ClassHelper`)

| Change | Delta |             % | Samples | Caller       | Location                                             |
| -----: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<clinit>()` | `org.apache.groovy.ast.tools.ImmutablePropertyUtils` |

##### `mismatch(byte[], int, byte[], int, int)` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |             % | Samples | Caller                    | Location           |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `startsWith(String, int)` | `java.lang.String` |

##### `Node::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nmethod::do_unloading`                 | `libjvm.dylib` |

##### `PhaseIterGVN::remove_globally_dead_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `nmethod::oops_do_process_weak` | `libjvm.dylib` |

##### `ConnectionGraph::create_split_phi` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ConnectionGraph::split_memory_phi` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `MachNode::reloc` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseCCP::push_and` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses`               | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |

##### `MachNode::ideal_Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `BoolNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                  | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compile::disconnect_useless_nodes`                     | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::collect_potentially_useful_predicates` | `libjvm.dylib` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |            % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller           | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `SystemDictionary::resolve_instance_class_or_null` | `libjvm.dylib` |

##### `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LibraryIntrinsic::generate` | `libjvm.dylib` |

##### `cmpOpOper::num_edges` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate`        | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Matcher::match_tree`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::Label_Root`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `ThreadsSMRSupport::add_thread`          | `libjvm.dylib` |

##### `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                                            | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                            | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `nmethod::stub_begin` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciEnv::register_method` | `libjvm.dylib` |

##### `_platform_strcmp` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |            % | Samples | Caller                    | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `JavaCalls::call_helper`  | `libjvm.dylib`                                             |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `<clinit>()`              | `com.sun.org.apache.xerces.internal.impl.xs.XSConstraints` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `JVM_GetClassAccessFlags` | `libjvm.dylib`                                             |

##### `pthread_mutex_trylock` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SystemDictionary::resolve_instance_class_or_null` | `libjvm.dylib` |

##### `JavaFrameAnchor::make_walkable` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller            | Location       |
| ------: | ----: | ------------: | ------: | ----------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MHN_resolve_Mem` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `java_lang_String::create_from_unicode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java_lang_String::create_oop_from_unicode` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Node::is_block_proj` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCFG::PhaseCFG` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |

##### `MachNode::in_RegMask` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `LoopNode::is_valid_counted_loop` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |

##### `equals(Object, Object)` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Caller           | Location                               |
| ------: | ----: | ------------: | ------: | ---------------- | -------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                | Location            |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `put(Object, Object)` | `java.util.HashMap` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller        | Location                  |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `get(Object)` | `java.util.LinkedHashMap` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Caller                                | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change | Delta |             % | Samples | Caller                           | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `doPrivileged(PrivilegedAction)` | `java.security.AccessController` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Caller                                                                           | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % | Samples | Caller                                                                          | Location                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `initCEN()` (`jdk.nio.zipfs.ZipFileSystem`)

|  Change | Delta |             % | Samples | Caller                                     | Location                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(ZipFileSystemProvider, Path, Map)` | `jdk.nio.zipfs.ZipFileSystem` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|  Change | Delta |             % | Samples | Caller                             | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `coder()` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller     | Location           |
| ------: | ----: | ------------: | ------: | ---------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `length()` | `java.lang.String` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|  Change | Delta |             % | Samples | Caller                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isAssignable(Method, Method)` (`java.beans.PropertyDescriptor`)

|  Change | Delta |             % | Samples | Caller                                           | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(PropertyDescriptor, PropertyDescriptor)` | `java.beans.PropertyDescriptor` |

##### `<init>(XMLParserConfiguration)` (`com.sun.org.apache.xerces.internal.parsers.AbstractXMLDocumentParser`)

|  Change | Delta |             % | Samples | Caller                           | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(XMLParserConfiguration)` | `com.sun.org.apache.xerces.internal.parsers.AbstractSAXParser` |

##### `iterate()` (`groovy.lang.MetaClassImpl$MethodIndexAction`)

|  Change | Delta |             % | Samples | Caller                                | Location                    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `replaceWithMOPCalls(CachedMethod[])` | `groovy.lang.MetaClassImpl` |

##### `delegate(Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                   | Location                         |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `getTypeName()` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller                                         | Location                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `specificToGenericStringHeader(StringBuilder)` | `java.lang.reflect.Method` |

##### `guardWithCatch(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d4000`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001188800` |

##### `visitClassDeclaration(GroovyParser$ClassDeclarationContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitTypeDeclaration(GroovyParser$TypeDeclarationContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                       | Location                                            |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------- | --------------------------------------------------- |
|   +8.7% |  +194 | 83.3% → 83.6% | 2,238 → 2,432 | `_pthread_start`                               | `libsystem_pthread.dylib`                           |
|   +8.7% |  +194 | 83.3% → 83.6% | 2,238 → 2,432 | `thread_start`                                 | `libsystem_pthread.dylib`                           |
|   +8.7% |  +187 | 80.0% → 80.2% | 2,148 → 2,335 | `Thread::call_run`                             | `libjvm.dylib`                                      |
|   +8.7% |  +187 | 80.0% → 80.2% | 2,148 → 2,335 | `thread_native_entry`                          | `libjvm.dylib`                                      |
|   +9.1% |  +109 | 44.6% → 44.9% | 1,198 → 1,307 | `__psynch_cvwait`                              | `libsystem_kernel.dylib`                            |
|  +10.2% |  +101 | 36.8% → 37.5% |   989 → 1,090 | `semaphore_wait_trap`                          | `libsystem_kernel.dylib`                            |
|   +9.9% |   +92 | 34.8% → 35.3% |   934 → 1,026 | `PlatformMonitor::wait`                        | `libjvm.dylib`                                      |
|   +9.2% |   +84 | 33.9% → 34.2% |     911 → 995 | `WorkerThread::run`                            | `libjvm.dylib`                                      |
|   +8.6% |   +68 | 29.5% → 29.6% |     792 → 860 | `JavaThread::thread_main_inner`                | `libjvm.dylib`                                      |
|   +9.1% |   +64 | 26.1% → 26.3% |     701 → 765 | `Monitor::wait_without_safepoint_check`        | `libjvm.dylib`                                      |
|   +7.9% |   +28 | 13.2% → 13.1% |     354 → 382 | `CompileBroker::compiler_thread_loop`          | `libjvm.dylib`                                      |
|  +12.0% |   +28 |   8.7% → 9.0% |     233 → 261 | `Monitor::wait`                                | `libjvm.dylib`                                      |
|  +18.6% |   +26 |   5.2% → 5.7% |     140 → 166 | `CompileQueue::get`                            | `libjvm.dylib`                                      |
|   +7.9% |   +21 |          9.9% |     267 → 288 | `ConcurrentGCThread::run`                      | `libjvm.dylib`                                      |
| +500.0% |   +20 |   0.1% → 0.8% |        4 → 24 | `invoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|   +7.9% |   +14 |          6.6% |     178 → 192 | `JLI_Launch`                                   | `libjli.dylib`                                      |
|   +7.9% |   +14 |          6.6% |     178 → 192 | `main`                                         | `java`                                              |
| +185.7% |   +13 |   0.3% → 0.7% |        7 → 20 | `invoke(Object, Object, Object, long)`         | `java.lang.invoke.LambdaForm$MH`                    |
| +185.7% |   +13 |   0.3% → 0.7% |        7 → 20 | `linkToCallSite(Object, Object, long, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001335800` |
|  +25.5% |   +12 |   1.7% → 2.0% |       47 → 59 | `measureRuleProcessingTime(Rule, Closure)`     | `org.codenarc.analyzer.AbstractSourceAnalyzer`      |

##### Native

|  Change | Delta |             % |       Samples | Function                                                 | Location                  |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | ------------------------- |
|   +8.7% |  +194 | 83.3% → 83.6% | 2,238 → 2,432 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
|   +8.7% |  +194 | 83.3% → 83.6% | 2,238 → 2,432 | `thread_start`                                           | `libsystem_pthread.dylib` |
|   +8.7% |  +187 | 80.0% → 80.2% | 2,148 → 2,335 | `Thread::call_run`                                       | `libjvm.dylib`            |
|   +8.7% |  +187 | 80.0% → 80.2% | 2,148 → 2,335 | `thread_native_entry`                                    | `libjvm.dylib`            |
|   +9.1% |  +109 | 44.6% → 44.9% | 1,198 → 1,307 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
|  +10.2% |  +101 | 36.8% → 37.5% |   989 → 1,090 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
|   +9.9% |   +92 | 34.8% → 35.3% |   934 → 1,026 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
|   +9.2% |   +84 | 33.9% → 34.2% |     911 → 995 | `WorkerThread::run`                                      | `libjvm.dylib`            |
|   +8.6% |   +68 | 29.5% → 29.6% |     792 → 860 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
|   +9.1% |   +64 | 26.1% → 26.3% |     701 → 765 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
|  +12.0% |   +28 |   8.7% → 9.0% |     233 → 261 | `Monitor::wait`                                          | `libjvm.dylib`            |
|   +7.9% |   +21 |          9.9% |     267 → 288 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
|   +7.9% |   +14 |          6.6% |     178 → 192 | `JLI_Launch`                                             | `libjli.dylib`            |
|   +7.9% |   +14 |          6.6% |     178 → 192 | `main`                                                   | `java`                    |
|  +14.3% |   +12 |   3.1% → 3.3% |       84 → 96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
|  +12.9% |   +11 |   3.2% → 3.3% |       85 → 96 | `VMThread::wait_for_operation`                           | `libjvm.dylib`            |
| +900.0% |    +9 |  <0.1% → 0.3% |        1 → 10 | `Dict::Insert`                                           | `libjvm.dylib`            |
| +300.0% |    +9 |   0.1% → 0.4% |        3 → 12 | `__psynch_mutexwait`                                     | `libsystem_kernel.dylib`  |
| +300.0% |    +9 |   0.1% → 0.4% |        3 → 12 | `_pthread_mutex_firstfit_lock_slow`                      | `libsystem_pthread.dylib` |
|   +7.9% |    +7 |          3.3% |       89 → 96 | `VMThread::run`                                          | `libjvm.dylib`            |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                   | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|   +7.9% |   +28 | 13.2% → 13.1% | 354 → 382 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  +18.6% |   +26 |   5.2% → 5.7% | 140 → 166 | `CompileQueue::get`                        | `libjvm.dylib` |
| +800.0% |    +8 |  <0.1% → 0.3% |     1 → 9 | `Type::hashcons`                           | `libjvm.dylib` |
|     new |    +6 |   0.0% → 0.2% |     0 → 6 | `Type::cmp`                                | `libjvm.dylib` |
|  +25.0% |    +5 |   0.7% → 0.9% |   20 → 25 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  +23.8% |    +5 |   0.8% → 0.9% |   21 → 26 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| +250.0% |    +5 |   0.1% → 0.2% |     2 → 7 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
| +250.0% |    +5 |   0.1% → 0.2% |     2 → 7 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
|  +40.0% |    +4 |   0.4% → 0.5% |   10 → 14 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| +200.0% |    +4 |   0.1% → 0.2% |     2 → 6 | `PhaseOutput::fill_buffer`                 | `libjvm.dylib` |
|   +1.7% |    +3 |   6.7% → 6.3% | 179 → 182 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +33.3% |    +3 |   0.3% → 0.4% |    9 → 12 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
|  +23.1% |    +3 |          0.5% |   13 → 16 | `Matcher::match`                           | `libjvm.dylib` |
| +150.0% |    +3 |   0.1% → 0.2% |     2 → 5 | `NodeHash::hash_find_insert`               | `libjvm.dylib` |
| +100.0% |    +3 |   0.1% → 0.2% |     3 → 6 | `PhaseLive::compute`                       | `libjvm.dylib` |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  +42.9% |    +3 |          0.3% |    7 → 10 | `Compilation::emit_code_body`              | `libjvm.dylib` |
| +150.0% |    +3 |   0.1% → 0.2% |     2 → 5 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `ciMethod::get_method_at_bci`              | `libjvm.dylib` |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `Matcher::Label_Root`                      | `libjvm.dylib` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                           | Location                                                                |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------- |
| +500.0% |   +20 | 0.1% → 0.8% |  4 → 24 | `invoke(Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800`                     |
| +185.7% |   +13 | 0.3% → 0.7% |  7 → 20 | `invoke(Object, Object, Object, long)`             | `java.lang.invoke.LambdaForm$MH`                                        |
| +185.7% |   +13 | 0.3% → 0.7% |  7 → 20 | `linkToCallSite(Object, Object, long, Object)`     | `java.lang.invoke.LambdaForm$MH.0x0000007001335800`                     |
|  +25.0% |   +12 | 1.8% → 2.1% | 48 → 60 | `invokeVirtual(Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x000000700132cc00`                    |
| +171.4% |   +12 | 0.3% → 0.7% |  7 → 19 | `reinvoke(Object, Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001337800`                     |
|  +12.3% |    +8 | 2.4% → 2.5% | 65 → 73 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                        |
| +200.0% |    +8 | 0.1% → 0.4% |  4 → 12 | `visitMethods(GroovyClassVisitor)`                 | `org.codehaus.groovy.ast.ClassNode`                                     |
| +114.3% |    +8 | 0.3% → 0.5% |  7 → 15 | `unreflect(Method)`                                | `java.lang.invoke.MethodHandles$Lookup`                                 |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `park(boolean, long)`                              | `jdk.internal.misc.Unsafe`                                              |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `parkNanos(Object, long)`                          | `java.util.concurrent.locks.LockSupport`                                |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `await(long, TimeUnit)`                            | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `await(long)`                                      | `java.lang.ref.ReferenceQueue`                                          |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `remove0(long)`                                    | `java.lang.ref.ReferenceQueue`                                          |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `remove(long)`                                     | `java.lang.ref.ReferenceQueue`                                          |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `run()`                                            | `jdk.internal.ref.CleanerImpl`                                          |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `runWith(Object, Runnable)`                        | `java.lang.Thread`                                                      |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `run()`                                            | `java.lang.Thread`                                                      |
|   +8.0% |    +7 |        3.3% | 88 → 95 | `run()`                                            | `jdk.internal.misc.InnocuousThread`                                     |
|   +7.9% |    +7 |        3.3% | 89 → 96 | `wait0(long)`                                      | `java.lang.Object`                                                      |
|   +7.9% |    +7 |        3.3% | 89 → 96 | `wait(long)`                                       | `java.lang.Object`                                                      |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                        | Location                                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed |   -12 | 0.4% → 0.0% |  12 → 0 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib`                                                             |
|  -45.5% |   -10 | 0.8% → 0.4% | 22 → 12 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                                                                                 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                        |
|  -45.5% |   -10 | 0.8% → 0.4% | 22 → 12 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                                                                                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -45.5% |   -10 | 0.8% → 0.4% | 22 → 12 | `apply(Object, Object)`                                                                                                                                         | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228` |
|  -45.5% |   -10 | 0.8% → 0.4% | 22 → 12 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                                                                                         | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
| removed |    -8 | 0.3% → 0.0% |   8 → 0 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`                                                             |
| removed |    -7 | 0.3% → 0.0% |   7 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`                                                             |
|  -11.5% |    -6 | 1.9% → 1.6% | 52 → 46 | `PhaseChaitin::Register_Allocate`                                                                                                                               | `libjvm.dylib`                                                             |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`                                                             |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`                                                             |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`                                                             |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`                                                             |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`                                                             |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib`                                                             |
|  -11.4% |    -5 | 1.6% → 1.3% | 44 → 39 | `PhaseIdealLoop::optimize`                                                                                                                                      | `libjvm.dylib`                                                             |
|  -50.0% |    -5 | 0.4% → 0.2% |  10 → 5 | `PhaseChaitin::build_ifg_physical`                                                                                                                              | `libjvm.dylib`                                                             |
| removed |    -5 | 0.2% → 0.0% |   5 → 0 | `CodeCacheUnloadingTask::work`                                                                                                                                  | `libjvm.dylib`                                                             |
| removed |    -5 | 0.2% → 0.0% |   5 → 0 | `G1ParallelCleaningTask::work`                                                                                                                                  | `libjvm.dylib`                                                             |
|  -29.4% |    -5 | 0.6% → 0.4% | 17 → 12 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                                                                  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -29.4% |    -5 | 0.6% → 0.4% | 17 → 12 | `get()`                                                                                                                                                         | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`           |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                        | Location       |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |   -12 | 0.4% → 0.0% |  12 → 0 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib` |
| removed |    -8 | 0.3% → 0.0% |   8 → 0 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib` |
| removed |    -7 | 0.3% → 0.0% |   7 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib` |
| removed |    -6 | 0.2% → 0.0% |   6 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib` |
| removed |    -5 | 0.2% → 0.0% |   5 → 0 | `CodeCacheUnloadingTask::work`                                                                                                                                  | `libjvm.dylib` |
| removed |    -5 | 0.2% → 0.0% |   5 → 0 | `G1ParallelCleaningTask::work`                                                                                                                                  | `libjvm.dylib` |
|  -66.7% |    -4 | 0.2% → 0.1% |   6 → 2 | `WorkerThreads::run_task`                                                                                                                                       | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `G1YoungCollector::evacuate_initial_collection_set`                                                                                                             | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `G1YoungCollector::collect`                                                                                                                                     | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `G1CollectedHeap::do_collection_pause_at_safepoint_helper`                                                                                                      | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `VM_Operation::evaluate`                                                                                                                                        | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `VMThread::evaluate_operation`                                                                                                                                  | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `VMThread::inner_execute`                                                                                                                                       | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `VMThread::wait_until_executed`                                                                                                                                 | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `VMThread::execute`                                                                                                                                             | `libjvm.dylib` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                   | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------ | -------------- |
|  -11.5% |    -6 | 1.9% → 1.6% | 52 → 46 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  -11.4% |    -5 | 1.6% → 1.3% | 44 → 39 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  -50.0% |    -5 | 0.4% → 0.2% |  10 → 5 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `Node::is_CFG`                             | `libjvm.dylib` |
|  -57.1% |    -4 | 0.3% → 0.1% |   7 → 3 | `ConnectionGraph::compute_escape`          | `libjvm.dylib` |
|  -57.1% |    -4 | 0.3% → 0.1% |   7 → 3 | `ConnectionGraph::do_analysis`             | `libjvm.dylib` |
| removed |    -4 | 0.1% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_loop_tree`          | `libjvm.dylib` |
|   -3.7% |    -3 | 3.1% → 2.7% | 82 → 79 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless`   | `libjvm.dylib` |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `Compile::inline_incrementally`            | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `ciEnv::register_method`                   | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib` |
|  -42.9% |    -3 | 0.3% → 0.1% |   7 → 4 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  -50.0% |    -3 | 0.2% → 0.1% |   6 → 3 | `MemNode::all_controls_dominate`           | `libjvm.dylib` |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `InitializeNode::detect_init_independence` | `libjvm.dylib` |
| removed |    -3 | 0.1% → 0.0% |   3 → 0 | `InitializeNode::can_capture_store`        | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `ciObjectFactory::get_metadata`            | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `LinearScanWalker::alloc_free_reg`         | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `LinearScanWalker::activate_current`       | `libjvm.dylib` |
|  -60.0% |    -3 | 0.2% → 0.1% |   5 → 2 | `IntervalWalker::walk_to`                  | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                       | Location                                                                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -45.5% |   -10 |  0.8% → 0.4% | 22 → 12 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                        |
|  -45.5% |   -10 |  0.8% → 0.4% | 22 → 12 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -45.5% |   -10 |  0.8% → 0.4% | 22 → 12 | `apply(Object, Object)`                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228` |
|  -45.5% |   -10 |  0.8% → 0.4% | 22 → 12 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -29.4% |    -5 |  0.6% → 0.4% | 17 → 12 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -29.4% |    -5 |  0.6% → 0.4% | 17 → 12 | `get()`                                                                                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`           |
|  -29.4% |    -5 |  0.6% → 0.4% | 17 → 12 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)`                                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                            |
|  -29.4% |    -5 |  0.6% → 0.4% | 17 → 12 | `provide(Object)`                                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680` |
|  -33.3% |    -4 |  0.4% → 0.3% |  12 → 8 | `findMany(Collection, Iterator, Closure)`                                                      | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                         |
|  -33.3% |    -4 |  0.4% → 0.3% |  12 → 8 | `findAll(Collection, Closure)`                                                                 | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                         |
|  -33.3% |    -4 |  0.4% → 0.3% |  12 → 8 | `findAll(List, Closure)`                                                                       | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                         |
|  -33.3% |    -4 |  0.4% → 0.3% |  12 → 8 | `doMethodInvoke(Object, Object[])`                                                             | `org.codehaus.groovy.runtime.dgm$251`                                      |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                                | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext)`                                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                     |
|  -66.7% |    -4 |  0.2% → 0.1% |   6 → 2 | `compilationUnit()`                                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                             |
|  -66.7% |    -4 |  0.2% → 0.1% |   6 → 2 | `buildCST(PredictionMode)`                                                                     | `org.apache.groovy.parser.antlr4.AstBuilder`                               |
|  -66.7% |    -4 |  0.2% → 0.1% |   6 → 2 | `buildCST()`                                                                                   | `org.apache.groovy.parser.antlr4.AstBuilder`                               |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `methodType(Class, Class[], boolean)`                                                          | `java.lang.invoke.MethodType`                                              |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `memberDeclaration(int)`                                                                       | `org.apache.groovy.parser.antlr4.GroovyParser`                             |
|  -80.0% |    -4 | 0.2% → <0.1% |   5 → 1 | `classBodyDeclaration(int)`                                                                    | `org.apache.groovy.parser.antlr4.GroovyParser`                             |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Caller         | Location                  |
| -----: | ----: | -----: | ------------: | -------------- | ------------------------- |
|  +8.7% |  +194 | 100.0% | 2,238 → 2,432 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                | Location       |
| -----: | ----: | -----: | ------------: | --------------------- | -------------- |
|  +8.7% |  +187 | 100.0% | 2,148 → 2,335 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
|  +8.7% |  +187 | 100.0% | 2,148 → 2,335 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |     Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ----------: | ----------------------- | ------------------------ |
|  +9.4% |   +88 | 77.9% → 78.1% | 933 → 1,021 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  +8.0% |    +7 |          7.3% |     88 → 95 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  +8.0% |    +7 |          7.3% |     88 → 95 | `Parker::park`          | `libjvm.dylib`           |
|  +7.9% |    +7 |   7.4% → 7.3% |     89 → 96 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % |   Samples | Caller                           | Location       |
| ------: | ----: | ------------: | --------: | -------------------------------- | -------------- |
|  +11.3% |  +101 | 90.1% → 91.0% | 891 → 992 | `WorkerThread::run`              | `libjvm.dylib` |
|   +7.9% |    +7 |   9.0% → 8.8% |   89 → 96 | `os::signal_wait`                | `libjvm.dylib` |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------------- | -------------- |
|  +9.1% |   +64 | 75.1% → 74.6% | 701 → 765 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| +12.0% |   +28 | 24.9% → 25.4% | 233 → 261 | `Monitor::wait`                         | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +9.2% |   +84 | 100.0% | 911 → 995 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +8.6% |   +68 | 100.0% | 792 → 860 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                        | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------- |
| +14.3% |   +12 | 12.0% → 12.5% | 84 → 96 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| +12.9% |   +11 | 12.1% → 12.5% | 85 → 96 | `VMThread::wait_for_operation`                                | `libjvm.dylib` |
|  +7.9% |    +7 | 12.7% → 12.5% | 89 → 96 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
|  +7.9% |    +7 | 12.7% → 12.5% | 89 → 96 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
|  +7.9% |    +7 | 12.7% → 12.5% | 89 → 96 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
|  +7.9% |   +28 | 100.0% | 354 → 382 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Caller                            | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------- | -------------- |
|  +17.9% |   +25 | 60.1% → 63.2% | 140 → 165 | `CompileQueue::get`               | `libjvm.dylib` |
|   +7.9% |    +7 | 38.2% → 36.8% |   89 → 96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
| removed |    -4 |   1.7% → 0.0% |     4 → 0 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
| +18.6% |   +26 | 100.0% | 140 → 166 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +7.9% |   +21 | 100.0% | 267 → 288 | `Thread::call_run` | `libjvm.dylib` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7800`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|     new |   +24 | 0.0% → 100.0% |  0 → 24 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `guardWithCatch(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |      % |   Samples | Caller | Location |
| -----: | ----: | -----: | --------: | ------ | -------- |
|  +7.9% |   +14 | 100.0% | 178 → 192 | `main` | `java`   |

##### `main` (`java`)

| Change | Delta |     % | Samples | Caller       | Location       |
| -----: | ----: | ----: | ------: | ------------ | -------------- |
|  +7.9% |    +7 | 50.0% | 89 → 96 | `unknown`    | `<unknown>`    |
|  +7.9% |    +7 | 50.0% | 89 → 96 | `apple_main` | `libjli.dylib` |

##### `invoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |              % | Samples | Caller                                         | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +185.7% |   +13 |         100.0% |  7 → 20 | `linkToCallSite(Object, Object, long, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001335800` |
| +171.4% |   +12 | 100.0% → 95.0% |  7 → 19 | `reinvoke(Object, Object, Object, long)`       | `java.lang.invoke.LambdaForm$MH.0x0000007001337800` |
|     new |    +1 |    0.0% → 5.0% |   0 → 1 | `guard(Object, Object, Object, long)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001337c00` |

##### `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001335800`)

|  Change | Delta |      % | Samples | Caller                                     | Location                                       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------- |
| +185.7% |   +13 | 100.0% |  7 → 20 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % | Samples | Caller                                          | Location                                             |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| +25.5% |   +12 | 100.0% | 47 → 59 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700132cc00` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +14.3% |   +12 | 100.0% | 84 → 96 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `VMThread::wait_for_operation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| +12.9% |   +11 | 100.0% | 85 → 96 | `VMThread::run` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +800.0% |    +8 | 100.0% → 90.0% |   1 → 9 | `Type::hashcons`              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location                  |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +300.0% |    +9 | 100.0% |  3 → 12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
| +250.0% |    +5 | 66.7% → 58.3% |   2 → 7 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
| +300.0% |    +3 |         33.3% |   1 → 4 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |

##### `VMThread::run` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `Thread::call_run` | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `TypeInstPtr::remove_speculative`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `PhaseCCP::analyze`                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `Matcher::Label_Root`               | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `TypeInstPtr::xmeet_helper`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `TypeInterfaces::intersection_with` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |           % | Samples | Caller                   | Location       |
| -----: | ----: | ----------: | ------: | ------------------------ | -------------- |
| +25.0% |    +5 |      100.0% | 20 → 25 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 4.0% |   0 → 1 | `BoolNode::Ideal`        | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +50.0% |    +6 | 57.1% → 69.2% | 12 → 18 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -57.1% |    -4 | 33.3% → 11.5% |   7 → 3 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| +400.0% |    +4 |  4.8% → 19.2% |   1 → 5 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `PhaseMacroExpand::expand_macro_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +40.0% |    +4 | 100.0% | 10 → 14 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                | Location       |
| ------: | ----: | -----: | ------: | --------------------- | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
|  +1.7% |    +3 | 100.0% | 179 → 182 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +33.3% |    +3 | 100.0% |  9 → 12 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +23.1% |    +3 | 100.0% | 13 → 16 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `NonSafepointEmitter::emit_non_safepoint`        | `libjvm.dylib` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `IRScopeDebugInfo::record_debug_info`            | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseOutput::Process_OopMap_Node`               | `libjvm.dylib` |

##### `ciMethod::get_method_at_bci` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `LIRGenerator::profile_arguments` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Invoke::declared_type`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Parse::create_entry_map`         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Compile::call_generator`         | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                | Location       |
| ------: | ----: | -------------: | ------: | --------------------- | -------------- |
| +300.0% |    +3 |         100.0% |   1 → 4 | `Matcher::match_tree` | `libjvm.dylib` |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000700132cc00`)

| Change | Delta |      % | Samples | Caller                                   | Location                         |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------------------------- |
| +25.0% |   +12 | 100.0% | 48 → 60 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `reinvoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH.0x0000007001337800`)

|  Change | Delta |      % | Samples | Caller                   | Location                         |
| ------: | ----: | -----: | ------: | ------------------------ | -------------------------------- |
| +171.4% |   +12 | 100.0% |  7 → 19 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `delegate(Object, Object, Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

| Change | Delta |      % | Samples | Caller                                          | Location                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| +12.3% |    +8 | 100.0% | 65 → 73 | `guard(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700128a400` |
| +12.3% |    +8 | 100.0% | 65 → 73 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH`                    |

##### `visitMethods(GroovyClassVisitor)` (`org.codehaus.groovy.ast.ClassNode`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `visitContents(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode` |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |              % | Samples | Caller                                             | Location                                                  |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | --------------------------------------------------------- |
| +100.0% |    +7 | 100.0% → 93.3% |  7 → 14 | `correctClassForNameAndUnReflectOtherwise(Method)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new |    +1 |    0.0% → 6.7% |   0 → 1 | `cloneObject(Object)`                              | `org.apache.groovy.runtime.ObjectUtil`                    |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller                    | Location                                 |
| -----: | ----: | -----: | ------: | ------------------------- | ---------------------------------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Caller                  | Location                                                                |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change | Delta |      % | Samples | Caller        | Location                       |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % | Samples | Caller          | Location                       |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % | Samples | Caller         | Location                       |
| -----: | ----: | -----: | ------: | -------------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % | Samples | Caller  | Location                       |
| -----: | ----: | -----: | ------: | ------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change | Delta |      % | Samples | Caller                      | Location           |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change | Delta |      % | Samples | Caller  | Location           |
| -----: | ----: | -----: | ------: | ------- | ------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

| Change | Delta |      % | Samples | Caller  | Location                            |
| -----: | ----: | -----: | ------: | ------- | ----------------------------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `wait0(long)` (`java.lang.Object`)

| Change | Delta |      % | Samples | Caller       | Location           |
| -----: | ----: | -----: | ------: | ------------ | ------------------ |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

| Change | Delta |      % | Samples | Caller   | Location           |
| -----: | ----: | -----: | ------: | -------- | ------------------ |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `wait()` | `java.lang.Object` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |   -12 | 100.0% → 0.0% |  12 → 0 | `WorkerThread::run` | `libjvm.dylib` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change | Delta |      % | Samples | Caller                                                                          | Location                                        |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Caller                  | Location                                                                   |
| -----: | ----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `apply(Object, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228` |

##### `apply(Object, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228`)

| Change | Delta |      % | Samples | Caller                                                  | Location                                        |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                              | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -11.5% |    -6 | 100.0% | 52 → 46 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1RemSet::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1EvacuateRegionsTask::scan_roots` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
| -20.7% |    -6 | 65.9% → 59.0% | 29 → 23 | `Compile::Optimize`       | `libjvm.dylib` |
|  +6.7% |    +1 | 34.1% → 41.0% | 15 → 16 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ParallelCleaningTask::work` | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `WorkerThread::run` | `libjvm.dylib` |

##### `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Caller  | Location                                                         |
| -----: | ----: | -----: | ------: | ------- | ---------------------------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `get()` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |

##### `get()` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`)

| Change | Delta |      % | Samples | Caller                                                       | Location                                        |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `WorkerThreads::run_task` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                              | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------- | -------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `G1YoungCollector::evacuate_initial_collection_set` | `libjvm.dylib` |

##### `G1YoungCollector::evacuate_initial_collection_set` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1YoungCollector::collect` | `libjvm.dylib` |

##### `G1YoungCollector::collect` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                     | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1CollectedHeap::do_collection_pause_at_safepoint_helper` | `libjvm.dylib` |

##### `G1CollectedHeap::do_collection_pause_at_safepoint_helper` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                         | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | -------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `G1CollectedHeap::do_collection_pause_at_safepoint`            | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `G1CollectedHeap::start_concurrent_gc_for_metadata_allocation` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller          | Location       |
| ------: | ----: | ------------: | ------: | --------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::wait_until_executed` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VMThread::execute` | `libjvm.dylib` |

##### `VMThread::execute` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                              | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------- | -------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `G1CollectedHeap::attempt_allocation_slow`          | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CollectedHeap::satisfy_failed_metadata_allocation` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `ConnectionGraph::do_analysis` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
|  -3.7% |    -3 | 100.0% | 82 → 79 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `PhaseRenumberLive::PhaseRenumberLive`  | `libjvm.dylib` |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 100.0% |   1 → 2 | `Compile::Compile`                      | `libjvm.dylib` |

##### `Compile::inline_incrementally` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Compile::Optimize` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -66.7% |    -2 | 60.0% → 50.0% |   3 → 1 | `Compilation::compile_method` | `libjvm.dylib` |
| -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `PhaseOutput::install_code`   | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `InitializeNode::detect_init_independence` | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `LoadNode::split_through_phi`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `CmpPNode::sub`                            | `libjvm.dylib` |

##### `InitializeNode::detect_init_independence` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `InitializeNode::can_capture_store` | `libjvm.dylib` |

##### `InitializeNode::can_capture_store` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller             | Location       |
| ------: | ----: | ------------: | ------: | ------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `StoreNode::Ideal` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ciEnv::get_method_from_handle`        | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ciField::ciField`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciParametersTypeData::translate_from` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `LinearScanWalker::activate_current` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Caller            | Location                                                                   |
| -----: | ----: | -----: | ------: | ----------------- | -------------------------------------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `provide(Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680` |

##### `provide(Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680`)

| Change | Delta |      % | Samples | Caller                                          | Location                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `getAndPut(String, MemoizeCache$ValueProvider)` | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |

##### `findMany(Collection, Iterator, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change | Delta |      % | Samples | Caller                         | Location                                           |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `findAll(Collection, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `findAll(Collection, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change | Delta |      % | Samples | Caller                   | Location                                           |
| -----: | ----: | -----: | ------: | ------------------------ | -------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `findAll(List, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `findAll(List, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change | Delta |      % | Samples | Caller                             | Location                              |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `doMethodInvoke(Object, Object[])` | `org.codehaus.groovy.runtime.dgm$251` |

##### `doMethodInvoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$251`)

| Change | Delta |      % | Samples | Caller                                          | Location                                             |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |      % | Samples | Caller                                                 | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| -80.0% |    -4 | 100.0% |   5 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |            % | Samples | Caller                     | Location                                       |
| ------: | ----: | -----------: | ------: | -------------------------- | ---------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `nls()`                    | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `pathExpression()`         | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `expression(int)`          | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `memberDeclaration(int)`   | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `variableDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `compilationUnit()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller                     | Location                                     |
| -----: | ----: | -----: | ------: | -------------------------- | -------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `buildCST(PredictionMode)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `buildCST(PredictionMode)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |      % | Samples | Caller       | Location                                     |
| -----: | ----: | -----: | ------: | ------------ | -------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `buildCST()` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `buildCST()` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |      % | Samples | Caller       | Location                                     |
| -----: | ----: | -----: | ------: | ------------ | -------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `buildAST()` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |            % | Samples | Caller                          | Location                          |
| ------: | ----: | -----------: | ------: | ------------------------------- | --------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `canonicalize(MethodType, int)` | `java.lang.invoke.MethodTypeForm` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `dropParameterTypes(int, int)`  | `java.lang.invoke.MethodType`     |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `changeReturnType(Class)`       | `java.lang.invoke.MethodType`     |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `methodType(Class, Class[])`    | `java.lang.invoke.MethodType`     |

##### `memberDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller                      | Location                                       |
| -----: | ----: | -----: | ------: | --------------------------- | ---------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `classBodyDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classBodyDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller           | Location                                       |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `classBody(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |           % |       Samples | Callee                | Location       |
| -----: | ----: | ----------: | ------------: | --------------------- | -------------- |
|  +8.7% |  +187 |       96.0% | 2,148 → 2,335 | `thread_native_entry` | `libjvm.dylib` |
|  +7.9% |    +7 | 4.0% → 3.9% |       89 → 96 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
|  +8.7% |  +194 | 100.0% | 2,238 → 2,432 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                          | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|  +9.2% |   +84 | 42.4% → 42.6% | 911 → 995 | `WorkerThread::run`             | `libjvm.dylib` |
|  +8.6% |   +68 | 36.9% → 36.8% | 792 → 860 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  +7.9% |   +21 | 12.4% → 12.3% | 267 → 288 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  +7.9% |    +7 |          4.1% |   89 → 96 | `VMThread::run`                 | `libjvm.dylib` |
|  +7.9% |    +7 |          4.1% |   89 → 96 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
|  +8.7% |  +187 | 100.0% | 2,148 → 2,335 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee               | Location                  |
| ------: | ----: | ------------: | ----------: | -------------------- | ------------------------- |
|   +9.4% |   +88 | 99.9% → 99.5% | 933 → 1,021 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| +300.0% |    +3 |   0.1% → 0.4% |       1 → 4 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `__gettimeofday`     | `libsystem_kernel.dylib`  |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------------ |
|  +11.3% |  +101 | 97.8% → 99.7% | 891 → 992 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| removed |   -12 |   1.3% → 0.0% |    12 → 0 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| removed |    -5 |   0.5% → 0.0% |     5 → 0 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
|  +7.9% |   +28 | 44.7% → 44.4% | 354 → 382 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| +14.3% |   +12 | 10.6% → 11.2% |   84 → 96 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
|  +8.0% |    +7 | 11.1% → 11.0% |   88 → 95 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
|  +7.9% |    +7 |         11.2% |   89 → 96 | `signal_thread_entry`                                    | `libjvm.dylib` |
|  +7.9% |    +7 |         11.2% |   89 → 96 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
|  +9.1% |   +64 | 100.0% | 701 → 765 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
| +18.6% |   +26 | 39.5% → 43.5% | 140 → 166 | `CompileQueue::get`                        | `libjvm.dylib` |
|  +0.9% |    +2 | 60.5% → 56.5% | 214 → 216 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
| +12.0% |   +28 | 100.0% | 233 → 261 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                           | Location       |
| -----: | ----: | -------------: | --------: | -------------------------------- | -------------- |
| +17.9% |   +25 | 100.0% → 99.4% | 140 → 165 | `Monitor::wait`                  | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |     % | Samples | Callee                                  | Location       |
| -----: | ----: | ----: | ------: | --------------------------------------- | -------------- |
|  +7.9% |    +7 | 33.3% | 89 → 96 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
|  +7.9% |    +7 | 33.3% | 89 → 96 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
|  +7.9% |    +7 | 33.3% | 89 → 96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7800`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|     new |   +24 | 0.0% → 100.0% |  0 → 24 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -3 |  75.0% → 0.0% |   3 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125400` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % | Samples | Callee                       | Location       |
| -----: | ----: | ----: | ------: | ---------------------------- | -------------- |
|  +7.9% |    +7 | 50.0% | 89 → 96 | `CreateExecutionEnvironment` | `libjli.dylib` |
|  +7.9% |    +7 | 50.0% | 89 → 96 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
|  +7.9% |   +14 | 100.0% | 178 → 192 | `JLI_Launch` | `libjli.dylib` |

##### `invoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |              % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +171.4% |   +12 | 100.0% → 95.0% |  7 → 19 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |    +1 |    0.0% → 5.0% |   0 → 1 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |
|     new |    +1 |    0.0% → 5.0% |   0 → 1 | `invoke(Object)`                                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001089400`  |

##### `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001335800`)

|  Change | Delta |      % | Samples | Callee                                 | Location                         |
| ------: | ----: | -----: | ------: | -------------------------------------- | -------------------------------- |
| +185.7% |   +13 | 100.0% |  7 → 20 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| +185.7% |   +13 | 14.9% → 33.9% |  7 → 20 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001335800` |
|   -2.7% |    -1 | 78.7% → 61.0% | 37 → 36 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -33.3% |    -1 |   6.4% → 3.4% |   3 → 2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +14.3% |   +12 | 100.0% | 84 → 96 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `VMThread::wait_for_operation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +12.9% |   +11 | 100.0% | 85 → 96 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                  | Location       |
| -----: | ----: | -----------: | ------: | ----------------------- | -------------- |
|    new |    +6 | 0.0% → 60.0% |   0 → 6 | `Type::cmp`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `Dict::doubhash`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `TypeMetadataPtr::hash` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |      % | Samples | Callee               | Location                 |
| ------: | ----: | -----: | ------: | -------------------- | ------------------------ |
| +300.0% |    +9 | 100.0% |  3 → 12 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                         | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------- |
|  +12.9% |   +11 | 95.5% → 100.0% | 85 → 96 | `VMThread::wait_for_operation` | `libjvm.dylib` |
| removed |    -4 |    4.5% → 0.0% |   4 → 0 | `VMThread::inner_execute`      | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee         | Location       |
| ------: | ----: | -----: | ------: | -------------- | -------------- |
| +800.0% |    +8 | 100.0% |   1 → 9 | `Dict::Insert` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee            | Location       |
| -----: | ----: | -----------: | ------: | ----------------- | -------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `TypeOopPtr::eq`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `TypeLong::eq`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `TypeInstPtr::eq` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +2 | 10.0% → 16.0% |   2 → 4 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
|  -50.0% |    -2 |  20.0% → 8.0% |   4 → 2 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
|  -25.0% |    -1 | 20.0% → 12.0% |   4 → 3 | `LoadNode::Ideal`                           | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `CmpPNode::Ideal`                           | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `ConstraintCastNode::optimize_integer_cast` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  +25.0% |    +5 | 95.2% → 96.2% | 20 → 25 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `PhiNode::hash`               | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `StoreNode::hash`             | `libjvm.dylib` |

##### `PhaseMacroExpand::expand_macro_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| +400.0% |    +4 | 50.0% → 71.4% |   1 → 5 | `PhaseIterGVN::optimize`                     | `libjvm.dylib` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `PhaseMacroExpand::expand_allocate_common`   | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `PhaseMacroExpand::expand_subtypecheck_node` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee              | Location       |
| ------: | ----: | -----------: | ------: | ------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `NTarjan::DFS`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `NTarjan::COMPRESS` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| +200.0% |    +4 | 20.0% → 42.9% |   2 → 6 | `PhaseOutput::fill_buffer`      | `libjvm.dylib` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `MachNode::reloc`               | `libjvm.dylib` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `MachNode::ideal_Opcode`        | `libjvm.dylib` |
| +100.0% |    +2 | 20.0% → 28.6% |   2 → 4 | `PhaseOutput::BuildOopMaps`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `PhaseOutput::shorten_branches` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `NonSafepointEmitter::observe_instruction` | `libjvm.dylib` |
| +100.0% |    +1 | 50.0% → 33.3% |   1 → 2 | `PhaseOutput::Process_OopMap_Node`         | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `CodeBuffer::finalize_stubs`               | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `branchNode::emit`                         | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee              | Location       |
| -----: | ----: | -------------: | --------: | ------------------- | -------------- |
|  +0.6% |    +1 | 100.0% → 98.9% | 179 → 180 | `Compile::Compile`  | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.5% |     0 → 1 | `Compile::~Compile` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.5% |     0 → 1 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  +40.0% |    +2 | 55.6% → 58.3% |   5 → 7 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `Node::is_CFG`                              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `CmpPNode::Opcode`                          | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 12.5% |   0 → 2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  +50.0% |    +1 | 15.4% → 18.8% |   2 → 3 | `Matcher::find_shared`                        | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `RegionNode::Opcode`                          | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `Arena::contains`                             | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                  | Location       |
| -----: | ----: | -----------: | ------: | ----------------------- | -------------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `NodeHash::hash_insert` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ConNode::hash`         | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `IndexSet::initialize`   | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `PhaseLive::add_liveout` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee             | Location                   |
| ------: | ----: | ------------: | ------: | ------------------ | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_platform_memset` | `libsystem_platform.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                          | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|    new |    +2 |   0.0% → 20.0% |   0 → 2 | `Compilation::emit_code_epilog` | `libjvm.dylib` |
| +14.3% |    +1 | 100.0% → 80.0% |   7 → 8 | `LIR_Assembler::emit_code`      | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                                                                                   | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ValueRecorder<Metadata*>::add_handle`                                                                                                                   | `libjvm.dylib` |

##### `ciMethod::get_method_at_bci` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                         | Location        |
| ------: | ----: | -------------: | ------: | ------------------------------ | --------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `ciBytecodeStream::get_method` | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `tlv_get_addr`                 | `libdyld.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                 | Location                   |
| ------: | ----: | -------------: | ------: | ---------------------- | -------------------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `Matcher::Label_Root`  | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `_platform_memset`     | `libsystem_platform.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `LoadNode::match_edge` | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `Type::hashcons`       | `libjvm.dylib`             |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000700132cc00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------- |
|  +25.5% |   +12 | 97.9% → 98.3% | 47 → 59 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `addViolation(ASTNode, String)`            | `org.codenarc.rule.AbstractAstVisitor`         |
| +100.0% |    +1 |   2.1% → 3.3% |   1 → 2 | `super$3$applyTo(SourceCode, List)`        | `org.codenarc.rule.formatting.IndentationRule` |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `eachImportLine(SourceCode, Closure)`      | `org.codenarc.rule.imports.AbstractImportRule` |

##### `reinvoke(Object, Object, Object, long)` (`java.lang.invoke.LambdaForm$MH.0x0000007001337800`)

|  Change | Delta |           % | Samples | Callee                                 | Location                                            |
| ------: | ----: | ----------: | ------: | -------------------------------------- | --------------------------------------------------- |
| +171.4% |   +12 |      100.0% |  7 → 19 | `invoke(Object, Object, Object, long)` | `java.lang.invoke.LambdaForm$MH`                    |
|     new |    +1 | 0.0% → 5.3% |   0 → 1 | `guard(Object, Object, Object, long)`  | `java.lang.invoke.LambdaForm$MH.0x0000007001337c00` |

##### `delegate(Object, Object, Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------------- |
| +12.3% |    +8 | 100.0% | 65 → 73 | `guardWithCatch(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001289400` |
| +12.3% |    +8 | 100.0% | 65 → 73 | `guard(Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700128a400` |

##### `visitMethods(GroovyClassVisitor)` (`org.codehaus.groovy.ast.ClassNode`)

|  Change | Delta |              % | Samples | Callee                    | Location                               |
| ------: | ----: | -------------: | ------: | ------------------------- | -------------------------------------- |
| +175.0% |    +7 | 100.0% → 91.7% |  4 → 11 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |
|     new |    +1 |    0.0% → 8.3% |   0 → 1 | `getMethods()`            | `org.codehaus.groovy.ast.ClassNode`    |

##### `unreflect(Method)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |      % | Samples | Callee                                                                            | Location                                |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------- | --------------------------------------- |
| +114.3% |    +8 | 100.0% |  7 → 15 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Callee        | Location       |
| -----: | ----: | -----: | ------: | ------------- | -------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Callee                | Location                   |
| -----: | ----: | -----: | ------: | --------------------- | -------------------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change | Delta |      % | Samples | Callee                    | Location                                 |
| -----: | ----: | -----: | ------: | ------------------------- | ---------------------------------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % | Samples | Callee                  | Location                                                                |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------------------------------------- |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % | Samples | Callee        | Location                       |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % | Samples | Callee          | Location                       |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change | Delta |      % | Samples | Callee         | Location                       |
| -----: | ----: | -----: | ------: | -------------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change | Delta |      % | Samples | Callee  | Location                       |
| -----: | ----: | -----: | ------: | ------- | ------------------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

| Change | Delta |      % | Samples | Callee                      | Location           |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change | Delta |      % | Samples | Callee  | Location           |
| -----: | ----: | -----: | ------: | ------- | ------------------ |
|  +8.0% |    +7 | 100.0% | 88 → 95 | `run()` | `java.lang.Thread` |

##### `wait0(long)` (`java.lang.Object`)

| Change | Delta |      % | Samples | Callee            | Location       |
| -----: | ----: | -----: | ------: | ----------------- | -------------- |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

| Change | Delta |      % | Samples | Callee        | Location           |
| -----: | ----: | -----: | ------: | ------------- | ------------------ |
|  +7.9% |    +7 | 100.0% | 89 → 96 | `wait0(long)` | `java.lang.Object` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -8 | 66.7% → 0.0% |   8 → 0 | `G1EvacuateRegionsTask::scan_roots`        | `libjvm.dylib` |
| removed |    -4 | 33.3% → 0.0% |   4 → 0 | `G1RemSet::scan_collection_set_code_roots` | `libjvm.dylib` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |              % | Samples | Callee                | Location                                                                   |
| ------: | ----: | -------------: | ------: | --------------------- | -------------------------------------------------------------------------- |
|  -29.4% |    -5 | 77.3% → 100.0% | 17 → 12 | `provide(Object)`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680` |
| removed |    -2 |    9.1% → 0.0% |   2 → 0 | `put(Object, Object)` | `java.util.HashMap`                                                        |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `get()`               | `java.lang.ref.SoftReference`                                              |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `get(Object)`         | `java.util.LinkedHashMap`                                                  |

##### `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Callee                                          | Location                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `getAndPut(String, MemoizeCache$ValueProvider)` | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite` |

##### `apply(Object, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228`)

| Change | Delta |      % | Samples | Callee                                                                          | Location                                        |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Callee                  | Location                                                                   |
| -----: | ----: | -----: | ------: | ----------------------- | -------------------------------------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `apply(Object, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -6 | 75.0% → 0.0% |   6 → 0 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                            | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------- |
| removed |    -6 | 85.7% → 0.0% |   6 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  -50.0% |    -5 | 19.2% → 10.9% |  10 → 5 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
|  -42.9% |    -3 |  13.5% → 8.7% |   7 → 4 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| +100.0% |    +3 |  5.8% → 13.0% |   3 → 6 | `PhaseLive::compute`                       | `libjvm.dylib` |
| +300.0% |    +3 |   1.9% → 8.7% |   1 → 4 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
| +200.0% |    +2 |   1.9% → 6.5% |   1 → 3 | `PhaseChaitin::Simplify`                   | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | -------------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                 | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `G1ParScanThreadState::start_partial_objarray`                                                                               | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `void InstanceRefKlass::oop_oop_iterate_reverse<narrowOop, G1ScanEvacuatedObjClosure>`                                       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| -57.1% |    -4 |  15.9% → 7.7% |   7 → 3 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  -2.7% |    -1 | 84.1% → 92.3% | 37 → 36 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `PhaseChaitin::compute_initial_block_pressure`                     | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `MachNode::rematerialize`                                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `IndexSet::IndexSet`                                               | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                             | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `nmethod::do_unloading`                            | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `BarrierSetNMethod::set_guard_value`               | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ClassUnloadingContext::register_unlinked_nmethod` | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `CodeCacheUnloadingTask::work` | `libjvm.dylib` |

##### `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Callee                                                                                       | Location                                        |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `get()` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`)

| Change | Delta |      % | Samples | Callee                                                                                         | Location                                        |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `WorkerThreads::run_task` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                | Location                 |
| -----: | ----: | -----: | ------: | --------------------- | ------------------------ |
| -66.7% |    -4 | 100.0% |   6 → 2 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

##### `G1YoungCollector::evacuate_initial_collection_set` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `G1YoungCollector::collect` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                              | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1YoungCollector::evacuate_initial_collection_set` | `libjvm.dylib` |

##### `G1CollectedHeap::do_collection_pause_at_safepoint_helper` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1YoungCollector::collect` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `VM_G1CollectForAllocation::doit`       | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `VM_CollectForMetadataAllocation::doit` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::wait_until_executed` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee          | Location       |
| ------: | ----: | ------------: | ------: | --------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `Monitor::wait` | `libjvm.dylib` |

##### `VMThread::execute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `VMThread::wait_until_executed` | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  -66.7% |    -2 | 42.9% → 33.3% |   3 → 1 | `ConnectionGraph::split_unique_types`           | `libjvm.dylib` |
|  -50.0% |    -1 | 28.6% → 33.3% |   2 → 1 | `ConnectionGraph::complete_connection_graph`    | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `ConnectionGraph::add_call_node`                | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `ConnectionGraph::add_node_to_connection_graph` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `ConnectionGraph::has_ea_local_in_scope`        | `libjvm.dylib` |

##### `ConnectionGraph::do_analysis` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `ConnectionGraph::compute_escape` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee               | Location       |
| ------: | ----: | -----------: | ------: | -------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `RegionNode::is_CFG` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CProjNode::is_CFG`  | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Node::is_CFG`       | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -20.7% |    -6 | 35.4% → 29.1% | 29 → 23 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  +50.0% |    +6 | 14.6% → 22.8% | 12 → 18 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| +250.0% |    +5 |   2.4% → 8.9% |   2 → 7 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  -57.1% |    -4 |   8.5% → 3.8% |   7 → 3 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
| removed |    -3 |   3.7% → 0.0% |   3 → 0 | `Compile::inline_incrementally`        | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `Compile::identify_useful_nodes`    | `libjvm.dylib` |
| -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `Compile::disconnect_useless_nodes` | `libjvm.dylib` |

##### `Compile::inline_incrementally` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Compile::inline_incrementally_one`     | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                 | Location       |
| ------: | ----: | -------------: | ------: | ---------------------- | -------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `nmethod::new_nmethod` | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `nmethod::stub_begin`  | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  -60.0% |    -3 | 71.4% → 50.0% |   5 → 2 | `PhaseChaitin::elide_copy` | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `Arena::grow`              | `libjvm.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                   | Location       |
| ------: | ----: | -------------: | ------: | ------------------------ | -------------- |
|  -40.0% |    -2 | 83.3% → 100.0% |   5 → 3 | `Node::dominates`        | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `Unique_Node_List::push` | `libjvm.dylib` |

##### `InitializeNode::detect_init_independence` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `InitializeNode::can_capture_store` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `InitializeNode::detect_init_independence` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `LinearScanWalker::split_before_usage`          | `libjvm.dylib` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |

##### `LinearScanWalker::activate_current` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |      % | Samples | Callee  | Location                                                         |
| -----: | ----: | -----: | ------: | ------- | ---------------------------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `get()` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |

##### `provide(Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f680`)

| Change | Delta |      % | Samples | Callee                                                       | Location                                        |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `findMany(Collection, Iterator, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change | Delta |      % | Samples | Callee           | Location                                                     |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------------ |
| -33.3% |    -4 | 100.0% |  12 → 8 | `call(Object[])` | `org.codehaus.groovy.runtime.callsite.BooleanClosureWrapper` |

##### `findAll(Collection, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change | Delta |      % | Samples | Callee                                    | Location                                           |
| -----: | ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `findMany(Collection, Iterator, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `findAll(List, Closure)` (`org.codehaus.groovy.runtime.DefaultGroovyMethods`)

| Change | Delta |      % | Samples | Callee                         | Location                                           |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `findAll(Collection, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `doMethodInvoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$251`)

| Change | Delta |      % | Samples | Callee                   | Location                                           |
| -----: | ----: | -----: | ------: | ------------------------ | -------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `findAll(List, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |              % | Samples | Callee                                               | Location                                               |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------ |
| removed |    -3 |   60.0% → 0.0% |   3 → 0 | `execDFA(DFA, TokenStream, int, SimulatorState)`     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -50.0% |    -1 | 40.0% → 100.0% |   2 → 1 | `computeStartState(DFA, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |      % | Samples | Callee                                                          | Location                                               |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------ |
| -80.0% |    -4 | 100.0% |   5 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `compilationUnit()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |              % | Samples | Callee               | Location                                       |
| ------: | ----: | -------------: | ------: | -------------------- | ---------------------------------------------- |
|  -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `scriptStatements()` | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `nls()`              | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `buildCST(PredictionMode)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |      % | Samples | Callee              | Location                                       |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `compilationUnit()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `buildCST()` (`org.apache.groovy.parser.antlr4.AstBuilder`)

| Change | Delta |      % | Samples | Callee                     | Location                                     |
| -----: | ----: | -----: | ------: | -------------------------- | -------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `buildCST(PredictionMode)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Callee                              | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `memberDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |              % | Samples | Callee                                                 | Location                                               |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `methodDeclaration(int, int)`                          | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `fieldDeclaration()`                                   | `org.apache.groovy.parser.antlr4.GroovyParser`         |

##### `classBodyDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Callee                   | Location                                       |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `memberDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +11.3% |  +101 | 33.2% → 34.1% | 891 → 992 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  +15.1% |   +21 |   5.2% → 5.5% | 139 → 160 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  +14.3% |   +12 |   3.1% → 3.3% |   84 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  +12.9% |   +11 |   3.2% → 3.3% |   85 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|   +8.0% |    +7 |          3.3% |   88 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|   +8.0% |    +7 |          3.3% |   88 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|   +8.0% |    +7 |          3.2% |   87 → 94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|   +7.9% |    +7 |          3.3% |   89 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|   +8.0% |    +7 |          3.3% |   88 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
| +500.0% |    +5 |  <0.1% → 0.2% |     1 → 6 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                         |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                |
| +150.0% |    +3 |   0.1% → 0.2% |     2 → 5 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `Matcher::match_tree` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                     |
|  -57.1% |    -4 |  0.3% → 0.1% |   7 → 3 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThreads::run_task` (`libjvm.dylib`) ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                                                                |
|  -60.0% |    -3 |  0.2% → 0.1% |   5 → 2 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                     |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `sys_icache_invalidate` (`libsystem_platform.dylib`) ← `nmethod::oops_do_process_weak` (`libjvm.dylib`) ← `G1CodeBlobClosure::do_code_blob` ← `G1ScanAndCountCodeBlobClosure::do_code_blob` ← `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` ← `G1CodeRootSet::nmethods_do` ← `G1ScanCodeRootsClosure::do_heap_region` ← `G1CollectedHeap::par_iterate_regions_array` ← `G1RemSet::scan_collection_set_code_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                             |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Compile::identify_useful_nodes` (`libjvm.dylib`) ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                            |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `Node::dominates` (`libjvm.dylib`) ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                         |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`) ← `CompiledMethod::unload_nmethod_caches` ← `nmethod::do_unloading` ← `CodeCacheUnloadingTask::work` ← `G1ParallelCleaningTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `MachNode::reloc` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `MachNode::ideal_Opcode` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -2 |  0.1% → 0.0% |   2 → 0 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                        |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LibraryCallKit::inline_native_Class_query` (`libjvm.dylib`) ← `LibraryIntrinsic::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`) ← `PhaseIterGVN::add_users_to_worklist` ← `PhaseIterGVN::PhaseIterGVN` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                    |
|  -25.0% |    -1 |         0.1% |   4 → 3 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_CFG` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_block_proj` (`libjvm.dylib`) ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachNode::in_RegMask` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LoopNode::is_valid_counted_loop` (`libjvm.dylib`) ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                              |
