# Sampling profile diff

Collected 1,966 → 1,624 samples (-342 samples, -17.4%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         | -10.4% |  -100 | 49.0% → 53.1% | 963 → 863 |
| Native           | -30.4% |  -203 | 33.9% → 28.6% | 667 → 464 |
| Standard library | -10.0% |   -30 | 15.2% → 16.6% | 299 → 269 |
| Ours             | -58.3% |   -14 |   1.2% → 0.6% |   24 → 10 |
| JIT              | +38.5% |    +5 |   0.7% → 1.1% |   13 → 18 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 1,425 → 1,151 samples (72.5% → 70.9%) Thread::call_run at libjvm.dylib
│   ├── 1,361 → 1,066 samples (69.2% → 65.6%) JavaThread::thread_main_inner
│   │   └── 1,359 → 1,065 samples (69.1% → 65.6%) CompileBroker::compiler_thread_loop
│   │       ├── 1,217 → 1,049 samples (61.9% → 64.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 1,000 → 864 samples (50.9% → 53.2%) C2Compiler::compile_method
│   │       │   │   └── 996 → 864 samples (50.7% → 53.2%) Compile::Compile
│   │       │   │       ├── 500 → 412 samples (25.4%) Compile::Code_Gen
│   │       │   │       │   ├── 273 → 233 samples (13.9% → 14.3%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 50 → 47 samples (2.5% → 2.9%, self 1.5%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 5 → 1 sample (0.3% → 0.1%, self 1.1% → 0.7% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   │   └── 16 → 21 samples (0.8% → 1.3%) 12 more callees, led by (0.1% → 0.4%) PhaseChaitin::remove_bound_register_from_interfering_live_ranges
│   │       │   │       │   │   ├── 58 → 38 samples (3.0% → 2.3%, self 2.1% → 1.6%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 17 → 12 samples (0.9% → 0.7%) 12 more callees, led by (0.3% → 0.2%) MachNode::rematerialize
│   │       │   │       │   │   └── 163 → 147 samples (8.3% → 9.1%) 40 more callees, led by (1.6% → 1.3%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 227 → 179 samples (11.5% → 11.0%) 10 more callees, led by (4.5% → 4.2%) Matcher::match
│   │       │   │       ├── 370 → 331 samples (18.8% → 20.4%) Compile::Optimize
│   │       │   │       │   ├── 116 → 97 samples (5.9% → 6.0%) PhaseIdealLoop::optimize
│   │       │   │       │   │   ├── 96 → 77 samples (4.9% → 4.7%) PhaseIdealLoop::PhaseIdealLoop
│   │       │   │       │   │   │   └── 96 → 77 samples (4.9% → 4.7%) PhaseIdealLoop::build_and_optimize
│   │       │   │       │   │   │       ├── 34 → 18 samples (1.7% → 1.1%, self 0.7% → 0.2%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   │   │       │   └── 21 → 15 samples (1.1% → 0.9%) 5 more callees, led by (0.9% → 0.8%) PhaseIdealLoop::build_loop_late_post_work
│   │       │   │       │   │   │       └── 62 → 58 samples (3.2% → 3.6%) 22 more callees, led by (0.8% → 0.9%) PhaseIdealLoop::Dominators
│   │       │   │       │   │   └── 20 samples (1.0% → 1.2%) PhaseIterGVN::optimize …
│   │       │   │       │   ├── … 91 → 87 samples (4.6% → 5.4%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │       │   │       │   │   ├── 25 → 27 samples (1.3% → 1.7%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   │   │   └── 14 → 21 samples (0.7% → 1.3%, self 1.0% → 0.5% globally) PhaseIdealLoop::build_loop_late_post_work
│   │       │   │       │   │   │       └── 3 → 10 samples (0.2% → 0.6%) PhaseIdealLoop::get_late_ctrl_with_anti_dep
│   │       │   │       │   │   └── 66 → 59 samples (3.4% → 3.6%) 23 more callees, led by (1.1% → 1.4%) PhaseIdealLoop::split_if_with_blocks
│   │       │   │       │   └── 157 → 139 samples (8.0% → 8.6%) 15 more callees, led by (3.5% → 3.3%) PhaseIterGVN::optimize
│   │       │   │       └── 126 → 121 samples (6.4% → 7.5%) 9 more callees, led by (5.8% → 6.7%) ParseGenerator::generate
│   │       │   └── 217 → 185 samples (11.0% → 11.4%) 9 more callees, led by (10.2% → 10.7%) Compiler::compile_method
│   │       └── … 134 → 15 samples (6.8% → 0.9%) PlatformMonitor::wait at libjvm.dylib
│   │           ├── 124 → 11 samples (6.3% → 0.7%, self 7.0% → 1.2% globally) __psynch_cvwait at libsystem_kernel.dylib
│   │           └── … 8 → 2 samples (0.4% → 0.1%, self 2.7% → 1.4% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   └── 64 → 85 samples (3.3% → 5.2%) 4 more callees, led by (2.6% → 5.0%) WorkerThread::run
├── 512 → 447 samples (26.0% → 27.5%) main(String[]) at org.codenarc.CodeNarc
│   └── 503 → 444 samples (25.6% → 27.3%) linkToCallSite(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│       └── … 502 → 444 samples (25.5% → 27.3%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH
│           └── 498 → 438 samples (25.3% → 27.0%) 27 more callees, led by (8.9% → 9.2%) invokeSpecial(Object, Object, Object) at java.lang.invoke.DirectMethodHandle$Holder
└── 26 → 25 samples (1.3% → 1.5%) 8 more root frames, led by (0.9%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                                            |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| +400.0% |    +8 | 0.1% → 0.6% |  2 → 10 | `I2C/C2I adapters`                                                                                                                                       | `<unknown>`                                         |
|  +87.5% |    +7 | 0.4% → 0.9% |  8 → 15 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`                                      |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`                                      |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib`                          |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                      |
| +250.0% |    +5 | 0.1% → 0.4% |   2 → 7 | `Compile::disconnect_useless_nodes`                                                                                                                      | `libjvm.dylib`                                      |
| +100.0% |    +5 | 0.3% → 0.6% |  5 → 10 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`                            |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `PhaseCFG::schedule_pinned_nodes`                                                                                                                        | `libjvm.dylib`                                      |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `collector(Object, Object)`                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000301031800` |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`                                 |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `RegMask::is_misaligned_pair`                                                                                                                            | `libjvm.dylib`                                      |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseChaitin::merge_multidefs`                                                                                                                          | `libjvm.dylib`                                      |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                                                                                                            | `libjvm.dylib`                                      |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `TypeInterfaces::eq`                                                                                                                                     | `libjvm.dylib`                                      |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `compare_immediate_pair`                                                                                                                                 | `libjvm.dylib`                                      |
|     new |    +4 | 0.0% → 0.2% |   0 → 4 | `Node::latency`                                                                                                                                          | `libjvm.dylib`                                      |
|     new |    +4 | 0.0% → 0.2% |   0 → 4 | `equals(Object)`                                                                                                                                         | `java.lang.String`                                  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre`                                                                                                               | `libjvm.dylib`                                      |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                                                                                     | `libjvm.dylib`                                      |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `Node::replace_edge`                                                                                                                                     | `libjvm.dylib`                                      |

##### Compiler

|  Change | Delta |           % | Samples | Function                                             | Location       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | -------------- |
|  +87.5% |    +7 | 0.4% → 0.9% |  8 → 15 | `PhaseLive::add_liveout`                             | `libjvm.dylib` |
| +250.0% |    +5 | 0.1% → 0.4% |   2 → 7 | `Compile::disconnect_useless_nodes`                  | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `PhaseCFG::schedule_pinned_nodes`                    | `libjvm.dylib` |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `RegMask::is_misaligned_pair`                        | `libjvm.dylib` |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseChaitin::merge_multidefs`                      | `libjvm.dylib` |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`        | `libjvm.dylib` |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `TypeInterfaces::eq`                                 | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.2% |   0 → 4 | `Node::latency`                                      | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre`           | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `Node::replace_edge`                                 | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `MergeMemNode::Ideal`                                | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `AddPNode::bottom_type`                              | `libjvm.dylib` |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `Matcher::pd_clone_node`                             | `libjvm.dylib` |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `Matcher::find_shared`                               | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `TypeInstPtr::hash`                                  | `libjvm.dylib` |
|  +60.0% |    +3 | 0.3% → 0.5% |   5 → 8 | `MultiNode::is_CFG`                                  | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `IndexSet::alloc_block_containing`                   | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `TypeOopPtr::eq`                                     | `libjvm.dylib` |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `LinearScan::assign_reg_num`                         | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| +100.0% |    +5 | 0.3% → 0.6% |  5 → 10 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `compare_immediate_pair`                                                                                                                                 | `libjvm.dylib`             |
|  +37.5% |    +3 | 0.4% → 0.7% |  8 → 11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                          | `libjvm.dylib`             |
|  +16.7% |    +3 | 0.9% → 1.3% | 18 → 21 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `ValueRecorder<Metadata*>::maybe_find_index`                                                                                                             | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ObjArrayAllocator::initialize`                                                                                                                          | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `semaphore_signal_trap`                                                                                                                                  | `libsystem_kernel.dylib`   |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `OopRecorder::find_index`                                                                                                                                | `libjvm.dylib`             |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `G1CardSet::add_to_howl`                                                                                                                                 | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ClassFileParser::parse_constant_pool_entries`                                                                                                           | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `SymbolTable::do_add_if_needed`                                                                                                                          | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `State::_sub_Op_LoadB`                                                                                                                                   | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `__ultoa`                                                                                                                                                | `libsystem_c.dylib`        |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `collector(Object, Object)`                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000301031800`       |
|     new |    +4 | 0.0% → 0.2% |   0 → 4 | `equals(Object)`                                                                                              | `java.lang.String`                                        |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `getMetaClass()`                                                                                              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`              |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `bindTo(Object)`                                                                                              | `java.lang.invoke.MethodHandle`                           |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `methodType(Class, Class[], boolean)`                                                                         | `java.lang.invoke.MethodType`                             |
|  +50.0% |    +2 | 0.2% → 0.4% |   4 → 6 | `invoke(Object, Object, Object)`                                                                              | `java.lang.invoke.LambdaForm$MH`                          |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `newArray(Class, int)`                                                                                        | `java.lang.reflect.Array`                                 |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `<clinit>()`                                                                                                  | `java.lang.invoke.LambdaForm$MH`                          |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `getRoot()`                                                                                                   | `java.lang.reflect.Method`                                |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `<init>(int, Object, Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap$Node`             |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `wrapSink(Sink)`                                                                                              | `java.util.stream.AbstractPipeline`                       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `<init>(MutableCallSite, Class, String, IndyInterface$CallType, Boolean, Boolean, Boolean, Object[])`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `valueConversion(Class, Class, boolean, boolean)`                                                             | `java.lang.invoke.MethodHandleImpl`                       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `invokeInterface(Object, Object, Object)`                                                                     | `java.lang.invoke.DirectMethodHandle$Holder`              |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `internalMemberName(Object)`                                                                                  | `java.lang.invoke.DirectMethodHandle`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadClassOrNull(String, boolean)`                                                                            | `jdk.internal.loader.BuiltinClassLoader`                  |

##### Ours

| Change | Delta |           % | Samples | Function                                                    | Location                                                                      |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule`               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.formatting.LineLengthRule`                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getCompilerPhase()`                                        | `org.codenarc.rule.AbstractRule`                                              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getMetaClass()`                                            | `org.codenarc.rule.unnecessary.UnnecessarySetterRule`                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `haveTheSameConstantOrLiteralValue(Expression, Expression)` | `org.codenarc.rule.dry.DryUtil`                                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getMetaClass()`                                            | `org.codenarc.rule.basic.ConstantTernaryExpressionRule`                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `setCallbackFunction(Closure)`                              | `org.codenarc.rule.design.CollectionReturnTracker`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                                  | `org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor` |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +400.0% |    +8 | 0.1% → 0.6% |  2 → 10 | `I2C/C2I adapters`       | `<unknown>` |
| +100.0% |    +1 |        0.1% |   1 → 2 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |  Samples | Function                                                                                               | Location                   |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
|  -86.1% |  -118 | 7.0% → 1.2% | 137 → 19 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`   |
|  -57.4% |   -31 | 2.7% → 1.4% |  54 → 23 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`   |
|  -36.6% |   -15 | 2.1% → 1.6% |  41 → 26 | `PhaseChaitin::Split`                                                                                  | `libjvm.dylib`             |
|  -55.0% |   -11 | 1.0% → 0.6% |   20 → 9 | `PhaseIdealLoop::build_loop_late`                                                                      | `libjvm.dylib`             |
|  -57.9% |   -11 | 1.0% → 0.5% |   19 → 8 | `PhaseIdealLoop::build_loop_late_post_work`                                                            | `libjvm.dylib`             |
|  -47.6% |   -10 | 1.1% → 0.7% |  21 → 11 | `IndexSetIterator::advance_and_next`                                                                   | `libjvm.dylib`             |
|  -60.0% |    -9 | 0.8% → 0.4% |   15 → 6 | `Arena::contains`                                                                                      | `libjvm.dylib`             |
|  -23.1% |    -6 | 1.3% → 1.2% |  26 → 20 | `tlv_get_addr`                                                                                         | `libdyld.dylib`            |
|  -54.5% |    -6 | 0.6% → 0.3% |   11 → 5 | `Compile::identify_useful_nodes`                                                                       | `libjvm.dylib`             |
|  -33.3% |    -5 | 0.8% → 0.6% |  15 → 10 | `PhaseChaitin::gather_lrg_masks`                                                                       | `libjvm.dylib`             |
|  -62.5% |    -5 | 0.4% → 0.2% |    8 → 3 | `__psynch_mutexdrop`                                                                                   | `libsystem_kernel.dylib`   |
|  -71.4% |    -5 | 0.4% → 0.1% |    7 → 2 | `Node::pinned`                                                                                         | `libjvm.dylib`             |
|  -71.4% |    -5 | 0.4% → 0.1% |    7 → 2 | `_platform_memmove`                                                                                    | `libsystem_platform.dylib` |
|  -29.4% |    -5 | 0.9% → 0.7% |  17 → 12 | `PhaseChaitin::elide_copy`                                                                             | `libjvm.dylib`             |
| removed |    -5 | 0.3% → 0.0% |    5 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| removed |    -4 | 0.2% → 0.0% |    4 → 0 | `PhaseCFG::schedule_late`                                                                              | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Compile::find_alias_type`                                                                             | `libjvm.dylib`             |
|  -22.2% |    -4 |        0.9% |  18 → 14 | `Matcher::xform`                                                                                       | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `MachNode::rematerialize`                                                                              | `libjvm.dylib`             |
|  -44.4% |    -4 | 0.5% → 0.3% |    9 → 5 | `PhaseChaitin::post_allocate_copy_removal`                                                             | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |           % | Samples | Function                                    | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | -------------- |
|  -36.6% |   -15 | 2.1% → 1.6% | 41 → 26 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
|  -55.0% |   -11 | 1.0% → 0.6% |  20 → 9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
|  -57.9% |   -11 | 1.0% → 0.5% |  19 → 8 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  -47.6% |   -10 | 1.1% → 0.7% | 21 → 11 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
|  -54.5% |    -6 | 0.6% → 0.3% |  11 → 5 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
|  -33.3% |    -5 | 0.8% → 0.6% | 15 → 10 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
|  -71.4% |    -5 | 0.4% → 0.1% |   7 → 2 | `Node::pinned`                              | `libjvm.dylib` |
|  -29.4% |    -5 | 0.9% → 0.7% | 17 → 12 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `PhaseCFG::schedule_late`                   | `libjvm.dylib` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `Compile::find_alias_type`                  | `libjvm.dylib` |
|  -22.2% |    -4 |        0.9% | 18 → 14 | `Matcher::xform`                            | `libjvm.dylib` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `MachNode::rematerialize`                   | `libjvm.dylib` |
|  -44.4% |    -4 | 0.5% → 0.3% |   9 → 5 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
|  -44.4% |    -4 | 0.5% → 0.3% |   9 → 5 | `PhaseLive::compute`                        | `libjvm.dylib` |
|  -66.7% |    -4 | 0.3% → 0.1% |   6 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `Type::meet_helper`                         | `libjvm.dylib` |
|  -66.7% |    -4 | 0.3% → 0.1% |   6 → 2 | `PhaseCFG::schedule_local`                  | `libjvm.dylib` |
|  -66.7% |    -4 | 0.3% → 0.1% |   6 → 2 | `PhaseIFG::remove_node`                     | `libjvm.dylib` |
| removed |    -4 | 0.2% → 0.0% |   4 → 0 | `RegionNode::is_unreachable_from_root`      | `libjvm.dylib` |
|  -50.0% |    -4 | 0.4% → 0.2% |   8 → 4 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |

##### Native

|  Change | Delta |           % |  Samples | Function                                                                                               | Location                   |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
|  -86.1% |  -118 | 7.0% → 1.2% | 137 → 19 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`   |
|  -57.4% |   -31 | 2.7% → 1.4% |  54 → 23 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`   |
|  -60.0% |    -9 | 0.8% → 0.4% |   15 → 6 | `Arena::contains`                                                                                      | `libjvm.dylib`             |
|  -23.1% |    -6 | 1.3% → 1.2% |  26 → 20 | `tlv_get_addr`                                                                                         | `libdyld.dylib`            |
|  -62.5% |    -5 | 0.4% → 0.2% |    8 → 3 | `__psynch_mutexdrop`                                                                                   | `libsystem_kernel.dylib`   |
|  -71.4% |    -5 | 0.4% → 0.1% |    7 → 2 | `_platform_memmove`                                                                                    | `libsystem_platform.dylib` |
| removed |    -5 | 0.3% → 0.0% |    5 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -50.0% |    -4 | 0.4% → 0.2% |    8 → 4 | `posix_madvise`                                                                                        | `libsystem_kernel.dylib`   |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `Dictionary::find`                                                                                     | `libjvm.dylib`             |
|  -42.9% |    -3 | 0.4% → 0.2% |    7 → 4 | `Dict::Insert`                                                                                         | `libjvm.dylib`             |
|  -30.0% |    -3 | 0.5% → 0.4% |   10 → 7 | `vmSymbols::find_sid`                                                                                  | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Symbol::decrement_refcount`                                                                           | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `stringStream::write`                                                                                  | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.2% → 0.1% |    4 → 1 | `resource_allocate_bytes`                                                                              | `libjvm.dylib`             |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `Arena::Arealloc`                                                                                      | `libjvm.dylib`             |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `Chunk::chop`                                                                                          | `libjvm.dylib`             |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `Dependencies::DepStream::check_new_klass_dependency`                                                  | `libjvm.dylib`             |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `MachOper::num_edges`                                                                                  | `libjvm.dylib`             |
|  -50.0% |    -2 | 0.2% → 0.1% |    4 → 2 | `trampoline_stub_Relocation::get_trampoline_for`                                                       | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.2% → 0.1% |    3 → 1 | `read`                                                                                                 | `libsystem_kernel.dylib`   |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                | Location                                                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `apply(Object)`                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector$$Lambda.0x0000007001092b30` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `checkName(String)`                                     | `java.lang.ClassLoader`                                                              |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                      |
|   -8.7% |    -2 | 1.2% → 1.3% | 23 → 21 | `invoke(Object, Object)`                                | `java.lang.invoke.LambdaForm$MH`                                                     |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `get(Object)`                                           | `java.util.concurrent.ConcurrentHashMap`                                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object)`                 | `java.lang.invoke.DirectMethodHandle$Holder`                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `maybeCustomize()`                                      | `java.lang.invoke.MethodHandle`                                                      |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `checkCustomized(MethodHandle)`                         | `java.lang.invoke.Invokers`                                                          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `invokeInterface(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH`                                                    |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `makeGuardWithTestForm(MethodType)`                     | `java.lang.invoke.MethodHandleImpl`                                                  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `copyWithExtendL(MethodType, LambdaForm, Object)`       | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`                                  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `call(Object, Object[])`                                | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`                             |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `resize()`                                              | `java.util.HashMap`                                                                  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `match(Matcher, int, CharSequence)`                     | `java.util.regex.Pattern$CharPropertyGreedy`                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object)`                  | `java.lang.invoke.DirectMethodHandle$Holder`                                         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `next()`                                                | `java.util.ArrayList$Itr`                                                            |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `getExactSizeIfKnown()`                                 | `java.util.Spliterator`                                                              |
|  -28.6% |    -2 | 0.4% → 0.3% |   7 → 5 | `cast(Object)`                                          | `java.lang.Class`                                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(MethodType)`                                    | `java.lang.invoke.LambdaForm$NamedFunction`                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `loadClassOrNull(String)`                               | `jdk.internal.loader.BuiltinClassLoader`                                             |

##### Ours

|  Change | Delta |           % | Samples | Function                                                     | Location                                                              |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `checkAssignmentWithinDeclaration(BinaryExpression, String)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                   | `org.codenarc.rule.groovyism.ExplicitCallToAndMethodRule`             |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `collectViolations(SourceCode, RuleSet)`                     | `org.codenarc.analyzer.AbstractSourceAnalyzer`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getAstVisitor()`                                            | `org.codenarc.rule.AbstractAstVisitorRule`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `calculateFunctions(Collection)`                             | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitVariableExpression(VariableExpression)`                | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)`                                    | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `addViolationIfDoubleQuoted(ConstantExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isMethodCallOnObject(Expression, String)`                   | `org.codenarc.util.AstUtil`                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                             | `org.codenarc.rule.convention.NoJavaUtilDateRule`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                                    | `org.codenarc.rule.naming.FactoryMethodNameAstVisitor`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                             | `org.codenarc.rule.dry.DuplicateStringLiteralRule`                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getRegex()`                                                 | `org.codenarc.rule.naming.FactoryMethodNameRule`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkStatementIndent(Statement, BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitClass(ClassNode)`                                      | `org.codenarc.rule.AbstractFieldVisitor`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isNotNullCheck(Object)`                                     | `org.codenarc.util.AstUtil`                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                   | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                                                   | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `removeAnyViolationsForSameLine(int)`                        | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `$getCallSiteArray()`                                        | `org.gmetrics.result.MetricResultBuilder$_calculateTotal_closure2`    |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -75.0% |    -3 | 0.2% → 0.1% |   4 → 1 | `vtable stub` | `<unknown>` |
| -25.0% |    -1 |        0.2% |   4 → 3 | `itable stub` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `equals(Object)` (`java.lang.String`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `java.lang.String:1850` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `java.lang.String:1852` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |            % | Samples | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:568` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:581` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |            % | Samples | Location                                                    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1795` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1708` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1709` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1759` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1785` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.lang.invoke.MethodHandle:1618` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change | Delta |            % | Samples | Location                          |
| -----: | ----: | -----------: | ------: | --------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `java.lang.invoke.MethodType:374` |

##### `getNode(Object)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Location                |
| -----: | ----: | -------------: | ------: | ----------------------- |
|    new |    +2 |   0.0% → 50.0% |   0 → 2 | `java.util.HashMap:580` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `java.util.HashMap:576` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `java.util.HashMap:577` |

##### `equals(Object, Object)` (`java.util.Objects`)

|  Change | Delta |      % | Samples | Location               |
| ------: | ----: | -----: | ------: | ---------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.Objects:64` |

##### `getRoot()` (`java.lang.reflect.Method`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.reflect.Method:72` |

##### `<init>(int, Object, Object)` (`java.util.concurrent.ConcurrentHashMap$Node`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ConcurrentHashMap$Node:634` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |            % | Samples | Location                                |
| -----: | ----: | -----------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.stream.AbstractPipeline:546` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.stream.AbstractPipeline:547` |

##### `<init>(MutableCallSite, Class, String, IndyInterface$CallType, Boolean, Boolean, Boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |            % | Samples | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:518` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:523` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.invoke.MethodHandleImpl:408` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.invoke.DirectMethodHandle:327` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.loader.BuiltinClassLoader:681` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule:35` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.LineLengthRule`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.formatting.LineLengthRule:45` |

##### `getCompilerPhase()` (`org.codenarc.rule.AbstractRule`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.AbstractRule:119` |

##### `haveTheSameConstantOrLiteralValue(Expression, Expression)` (`org.codenarc.rule.dry.DryUtil`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.rule.dry.DryUtil:65` |

##### `checkName(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.ClassLoader:1155` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |            % | Samples | Location                                            |
| ------: | ----: | -----------: | ------: | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:370` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:376` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:936` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:937` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:941` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:940` |

##### `maybeCustomize()` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Location                             |
| ------: | ----: | -----------: | ------: | ------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:1843` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:1846` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |            % | Samples | Location                        |
| ------: | ----: | -----------: | ------: | ------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.lang.invoke.Invokers:623` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.lang.invoke.Invokers:626` |

##### `makeGuardWithTestForm(MethodType)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:789` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:841` |

##### `call(Object, Object[])` (`org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite:36` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:684` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:744` |

##### `match(Matcher, int, CharSequence)` (`java.util.regex.Pattern$CharPropertyGreedy`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.regex.Pattern$CharPropertyGreedy:4472` |

##### `next()` (`java.util.ArrayList$Itr`)

|  Change | Delta |            % | Samples | Location                       |
| ------: | ----: | -----------: | ------: | ------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.ArrayList$Itr:1049` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.ArrayList$Itr:1053` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.Spliterator:414` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| -28.6% |    -2 | 100.0% |   7 → 5 | `java.lang.Class:4068` |

##### `<init>(MethodType)` (`java.lang.invoke.LambdaForm$NamedFunction`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaForm$NamedFunction:1106` |

##### `loadClassOrNull(String)` (`jdk.internal.loader.BuiltinClassLoader`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.loader.BuiltinClassLoader:700` |

##### `checkAssignmentWithinDeclaration(BinaryExpression, String)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor:195` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractAstVisitorRule:79` |

##### `calculateFunctions(Collection)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult:56` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor:84` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.IndentationAstVisitor:93` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:49` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.util.AstUtil:272` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.FactoryMethodNameAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.naming.FactoryMethodNameAstVisitor:41` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.formatting.IndentationAstVisitor:305` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.AbstractFieldVisitor:40` |

##### `isNotNullCheck(Object)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.util.AstUtil:907` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor:128` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `getArgumentsAndReturnSizes(String)`                                                         | `groovyjarjarasm.asm.Type`                             |
| +100.0% |    +1 | 50.0% → 20.0% |   1 → 2 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH`                       |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)`                                              | `java.lang.invoke.DirectMethodHandle$Holder`           |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                                                     | `org.codenarc.analyzer.AbstractSourceAnalyzer`         |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| +100.0% |    +7 | 87.5% → 93.3% |  7 → 14 | `PhaseLive::compute` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                          | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
| +100.0% |    +5 | 100.0% → 90.9% |  5 → 10 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|     new |    +1 |    0.0% → 9.1% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|     new |    +6 |  0.0% → 54.5% |   0 → 6 | `nmethod::oops_do_process_weak`                | `libjvm.dylib` |
|  +33.3% |    +1 | 60.0% → 36.4% |   3 → 4 | `nmethod::nmethod`                             | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `CompiledIC::set_to_monomorphic`               | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `CompiledDirectStaticCall::set_to_interpreted` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `CodeBuffer::copy_code_to`                     | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +150.0% |    +6 | 80.0% → 90.9% |  4 → 10 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +200.0% |    +6 | 60.0% → 90.0% |   3 → 9 | `WorkerThread::run`              | `libjvm.dylib` |
|  -50.0% |    -1 | 40.0% → 10.0% |   2 → 1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000301031800`)

|  Change | Delta |              % | Samples | Caller                           | Location                         |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------------------------- |
| +400.0% |    +4 | 100.0% → 83.3% |   1 → 5 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `bsearch` (`libsystem_c.dylib`)

|  Change | Delta |      % | Samples | Caller                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `RegMask::is_misaligned_pair` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                      | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% → 83.3% |   2 → 5 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseIdealLoop::ctrl_of_use_out_of_loop`   | `libjvm.dylib` |

##### `TypeInterfaces::eq` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                   | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 60.0% |   1 → 3 | `TypeInstPtr::eq`                                        | `libjvm.dylib` |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `TypePtr::MeetResult TypePtr::meet_instptr<TypeInstPtr>` | `libjvm.dylib` |

##### `compare_immediate_pair` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location            |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------- |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `bsearch`                        | `libsystem_c.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `encoding_for_logical_immediate` | `libjvm.dylib`      |

##### `Node::latency` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Scheduling::AddNodeToBundle`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseCFG::global_code_motion`      | `libjvm.dylib` |

##### `equals(Object)` (`java.lang.String`)

| Change | Delta |            % | Samples | Caller                              | Location                                 |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `computeIfAbsent(Object, Function)` | `java.util.concurrent.ConcurrentHashMap` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `indexOf(Object)`                   | `java.util.Arrays$ArrayList`             |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `indexOfRange(Object, int, int)`    | `java.util.ArrayList`                    |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `matches(Method, String, Class[])`  | `java.lang.PublicMethods$Key`            |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                        | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +33.3% |    +1 | 100.0% → 66.7% |   3 → 4 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `Node::replace_edge` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                    | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `GraphKit::null_check_common`             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `GraphKit::gen_instanceof`                | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `AddPNode::bottom_type` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `StoreNode::make`            | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MemNode::adr_type`          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Matcher::Label_Root`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseCCP::analyze`          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `BarrierSetC2::obj_allocate` | `libjvm.dylib` |

##### `Matcher::pd_clone_node` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                 | Location       |
| ------: | ----: | -------------: | ------: | ---------------------- | -------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `Matcher::find_shared` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `Matcher::match`       | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `Matcher::match` | `libjvm.dylib` |

##### `TypeInstPtr::hash` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller              | Location       |
| -----: | ----: | -----------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhiNode::hash`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Type::hashcons`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypeInstPtr::hash` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| +150.0% |    +3 | 40.0% → 62.5% |   2 → 5 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `ProjNode::is_uncommon_trap_proj`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |

##### `IndexSet::alloc_block_containing` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseChaitin::Select`             | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |

##### `TypeOopPtr::eq` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller         | Location       |
| ------: | ----: | -------------: | ------: | -------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `Type::cmp`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `Dict::Insert` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                            | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | -------------- |
|  +57.1% |    +4 | 87.5% → 100.0% |  7 → 11 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| +200.0% |    +2 | 33.3% → 50.0% |   1 → 3 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `G1ParEvacuateFollowersClosure::do_void`                            | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +16.7% |    +3 | 100.0% | 18 → 21 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `ValueRecorder<Metadata*>::maybe_find_index` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                    | Location       |
| ------: | ----: | -----: | ------: | ------------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `OopRecorder::find_index` | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `MemAllocator::allocate`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `WorkerThreads::run_task`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GenericWaitBarrier::Cell::disarm` | `libjvm.dylib` |

##### `OopRecorder::find_index` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                    | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LIR_Assembler::const2reg`                | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `NonSafepointEmitter::emit_non_safepoint` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                         | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |

##### `G1CardSet::add_to_howl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1CardSet::add_card` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `SymbolTable::do_add_if_needed` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `JVM_FindClassFromCaller` | `libjvm.dylib` |

##### `State::_sub_Op_LoadB` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller       | Location       |
| -----: | ----: | ------------: | ------: | ------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `State::DFA` | `libjvm.dylib` |

##### `__ultoa` (`libsystem_c.dylib`)

| Change | Delta |             % | Samples | Caller       | Location            |
| -----: | ----: | ------------: | ------: | ------------ | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `__vfprintf` | `libsystem_c.dylib` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |             % | Samples | Caller                | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |            % | Samples | Caller                           | Location                         |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +300.0% |    +3 | 50.0% → 80.0% |   1 → 4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller              | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |              % | Samples | Caller                                                                    | Location                            |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `dropParameterTypes(int, int)`                                            | `java.lang.invoke.MethodType`       |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| +200.0% |    +2 | 25.0% → 50.0% |   1 → 3 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH`                    |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `guard(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                | Location                  |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------- |
| +200.0% |    +2 | 50.0% → 75.0% |   1 → 3 | `get(Object)`         | `java.util.LinkedHashMap` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `containsKey(Object)` | `java.util.HashMap`       |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `get(Object)`         | `java.util.HashMap`       |

##### `equals(Object, Object)` (`java.util.Objects`)

|  Change | Delta |      % | Samples | Caller           | Location                               |
| ------: | ----: | -----: | ------: | ---------------- | -------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |             % | Samples | Caller                    | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `<clinit>()` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % | Samples | Caller                                                                                               | Location                |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader` |

##### `getRoot()` (`java.lang.reflect.Method`)

| Change | Delta |            % | Samples | Caller                      | Location                          |
| -----: | ----: | -----------: | ------: | --------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `declaredAnnotations()`     | `java.lang.reflect.Executable`    |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getRoot(AccessibleObject)` | `java.lang.reflect.ReflectAccess` |

##### `<init>(int, Object, Object)` (`java.util.concurrent.ConcurrentHashMap$Node`)

| Change | Delta |             % | Samples | Caller                            | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `<init>(MutableCallSite, Class, String, IndyInterface$CallType, Boolean, Boolean, Boolean, Object[])` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location                                   |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `getSelector(MutableCallSite, Class, String, int, boolean, boolean, boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.Selector` |

##### `valueConversion(Class, Class, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Caller                                                              | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invokeInterface(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                           | Location                         |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `internalMemberName(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |            % | Samples | Caller                                  | Location                                             |
| -----: | ----: | -----------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeStatic(Object, Object, int)`     | `java.lang.invoke.LambdaForm$DMH.0x000000030102b400` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change | Delta |             % | Samples | Caller                       | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule`)

| Change | Delta |             % | Samples | Caller                | Location                         |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.LineLengthRule`)

| Change | Delta |             % | Samples | Caller                | Location                         |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `getCompilerPhase()` (`org.codenarc.rule.AbstractRule`)

| Change | Delta |             % | Samples | Caller                                 | Location                         |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `validateAstCompilerPhase(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `getMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessarySetterRule`)

| Change | Delta |             % | Samples | Caller                               | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isSameMetaClass(MetaClass, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |

##### `haveTheSameConstantOrLiteralValue(Expression, Expression)` (`org.codenarc.rule.dry.DryUtil`)

| Change | Delta |             % | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getMetaClass()` (`org.codenarc.rule.basic.ConstantTernaryExpressionRule`)

| Change | Delta |             % | Samples | Caller              | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `setCallbackFunction(Closure)` (`org.codenarc.rule.design.CollectionReturnTracker`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                          | Location                                     |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                  | Location       |
| -----: | ----: | -----: | -------: | ----------------------- | -------------- |
| -86.1% |  -118 | 100.0% | 137 → 19 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -57.4% |   -31 | 100.0% | 54 → 23 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -36.6% |   -15 | 100.0% | 41 → 26 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -55.0% |   -11 | 100.0% |  20 → 9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| -61.1% |   -11 | 94.7% → 87.5% |  18 → 7 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
|  -80.0% |    -4 |  23.8% → 9.1% |   5 → 1 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  -50.0% |    -2 | 19.0% → 18.2% |   4 → 2 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|  -25.0% |    -1 | 19.0% → 27.3% |   4 → 3 | `PhaseChaitin::Select`                                             | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_virtual`                                  | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -60.0% |    -9 | 100.0% |  15 → 6 | `Matcher::xform` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |           % | Samples | Caller                               | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `loadPNode::loadPNode`               | `libjvm.dylib` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `ciInstance::field_value_impl`       | `libjvm.dylib` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `Matcher::ReduceInst`                | `libjvm.dylib` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `GraphKit::uncommon_trap`            | `libjvm.dylib` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_invoke` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| -66.7% |    -4 | 54.5% → 40.0% |   6 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| -40.0% |    -2 | 45.5% → 60.0% |   5 → 3 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -33.3% |    -5 | 100.0% | 15 → 10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location                  |
| -----: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `Node::pinned` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -50.0% |    -2 | 57.1% → 100.0% |   4 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion`       | `libjvm.dylib` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                  | Location            |
| ------: | ----: | -----------: | ------: | ----------------------- | ------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `__vfprintf`            | `libsystem_c.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `Node::add_req`         | `libjvm.dylib`      |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `Node::out_grow`        | `libjvm.dylib`      |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `CodeSection::relocate` | `libjvm.dylib`      |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `nmethod::nmethod`      | `libjvm.dylib`      |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -29.4% |    -5 | 100.0% | 17 → 12 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------- | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Compile::find_alias_type` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `ConnectionGraph::create_split_phi` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `ConnectionGraph::find_inst_mem`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::can_alias`                | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `MemNode::can_see_stored_value`     | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `MemNode::Ideal_common`             | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -22.2% |    -4 | 100.0% | 18 → 14 | `Matcher::match` | `libjvm.dylib` |

##### `MachNode::rematerialize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `PhaseChaitin::Split`              | `libjvm.dylib` |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Type::meet_helper` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `PhiNode::Value`           | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ClearArrayNode::Identity` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIFG::remove_node` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `PhaseChaitin::Simplify` | `libjvm.dylib` |

##### `RegionNode::is_unreachable_from_root` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `RegionNode::is_unreachable_region` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |     % | Samples | Caller                           | Location       |
| -----: | ----: | ----: | ------: | -------------------------------- | -------------- |
| -50.0% |    -3 | 75.0% |   6 → 3 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| -50.0% |    -1 | 25.0% |   2 → 1 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller        | Location                 |
| -----: | ----: | -----: | ------: | ------------- | ------------------------ |
| -50.0% |    -4 | 100.0% |   8 → 4 | `free_medium` | `libsystem_malloc.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                       | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | -------------- |
|  -75.0% |    -3 | 66.7% → 50.0% |   4 → 1 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl`                              | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  -66.7% |    -4 | 85.7% → 50.0% |   6 → 2 | `Type::hashcons`              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `TypePtr::interfaces`         | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -33.3% |    -3 | 90.0% → 85.7% |   9 → 6 | `ciObjectFactory::get_symbol`           | `libjvm.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `AnnotationCollector::annotation_index` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `ciKlass::ciKlass`                      | `libjvm.dylib` |

##### `Symbol::decrement_refcount` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ciObjectFactory::remove_symbols` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Verifier::verify`                | `libjvm.dylib` |

##### `stringStream::write` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `outputStream::print`                          | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java_lang_invoke_MethodType::print_signature` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `BlockListBuilder::make_block_at`    | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `DataLayout::data_in`                | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `LIR_List::LIR_List`                 | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller            | Location       |
| ------: | ----: | -----------: | ------: | ----------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::dominates` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::out_grow`  | `libjvm.dylib` |

##### `Chunk::chop` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Arena::destruct_contents` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Dependencies::DepStream::check_new_klass_dependency` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Dependencies::validate_dependencies` | `libjvm.dylib` |

##### `MachOper::num_edges` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseOutput::scratch_emit_size` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `MachNode::in_RegMask`           | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `read` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller      | Location        |
| -----: | ----: | -----: | ------: | ----------- | --------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `readBytes` | `libjava.dylib` |

##### `apply(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector$$Lambda.0x0000007001092b30`)

|  Change | Delta |             % | Samples | Caller           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `checkName(String)` (`java.lang.ClassLoader`)

|  Change | Delta |            % | Samples | Caller                                     | Location                |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `findBootstrapClassOrNull(String)`         | `java.lang.ClassLoader` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `preDefineClass(String, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % | Samples | Caller                                                                                        | Location                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|  -22.2% |    -4 | 78.3% → 66.7% | 18 → 14 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +2 |   0.0% → 9.5% |   0 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `delegate(Object, Object)`               | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |              % | Samples | Caller                         | Location                                 |
| ------: | ----: | -------------: | ------: | ------------------------------ | ---------------------------------------- |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `getNoCheckStale(Object)`      | `jdk.internal.util.ReferencedKeyMap`     |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `getOrDefault(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                           | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `maybeCustomize()` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Caller        | Location                                            |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `countDown()` | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Caller                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH`   |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH`   |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeInterface(Object, Object)` (`java.lang.invoke.LambdaForm$DMH`)

|  Change | Delta |            % | Samples | Caller                           | Location                         |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH` |

##### `makeGuardWithTestForm(MethodType)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Caller                                                        | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `copyWithExtendL(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

|  Change | Delta |            % | Samples | Caller                                                                    | Location                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `asCollector(int, Class, int)`                                            | `java.lang.invoke.MethodHandle`     |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `call(Object, Object[])` (`org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`)

|  Change | Delta |            % | Samples | Caller                                    | Location                                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | -------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `defaultCall(CallSite, Object, Object[])` | `org.codehaus.groovy.runtime.callsite.CallSiteArray`                 |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object[])`                | `org.codehaus.groovy.runtime.callsite.BooleanReturningMethodInvoker` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `match(Matcher, int, CharSequence)` (`java.util.regex.Pattern$CharPropertyGreedy`)

|  Change | Delta |            % | Samples | Caller                              | Location                                        |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ----------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `match(int, int)`                   | `java.util.regex.Matcher`                       |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `match(Matcher, int, CharSequence)` | `java.util.regex.Pattern$BmpCharPropertyGreedy` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                   | Location                         |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `next()` (`java.util.ArrayList$Itr`)

|  Change | Delta |            % | Samples | Caller                                                                                       | Location                                               |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `visitBlockStatement(BlockStatement)`                                                        | `org.codehaus.groovy.ast.CodeVisitorSupport`           |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|  Change | Delta |            % | Samples | Caller                                  | Location                            |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `copyIntoWithCancel(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `exactOutputSizeIfKnown(Spliterator)`   | `java.util.stream.AbstractPipeline` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |      % | Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| -28.6% |    -2 | 100.0% |   7 → 5 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(MethodType)` (`java.lang.invoke.LambdaForm$NamedFunction`)

|  Change | Delta |             % | Samples | Caller                         | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(MethodType, Object[])` | `java.lang.invoke.LambdaForm$Name` |

##### `loadClassOrNull(String)` (`jdk.internal.loader.BuiltinClassLoader`)

|  Change | Delta |             % | Samples | Caller                             | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `checkAssignmentWithinDeclaration(BinaryExpression, String)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToAndMethodRule`)

|  Change | Delta |             % | Samples | Caller                     | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % | Samples | Caller                                          | Location                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Caller                      | Location                                   |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `calculateFunctions(Collection)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|  Change | Delta |             % | Samples | Caller                     | Location                                          |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Caller                  | Location                               |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                  | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getMetaClass()` (`org.codenarc.rule.convention.NoJavaUtilDateRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.FactoryMethodNameAstVisitor`)

|  Change | Delta |             % | Samples | Caller                  | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor` |

##### `getMetaClass()` (`org.codenarc.rule.dry.DuplicateStringLiteralRule`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getRegex()` (`org.codenarc.rule.naming.FactoryMethodNameRule`)

|  Change | Delta |             % | Samples | Caller                          | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|  Change | Delta |             % | Samples | Caller                      | Location                                   |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `isNotNullCheck(Object)` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Caller    | Location    |
| ------: | ----: | ------------: | ------: | --------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unknown` | `<unknown>` |

##### `<init>()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`)

|  Change | Delta |             % | Samples | Caller    | Location    |
| ------: | ----: | ------------: | ------: | --------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unknown` | `<unknown>` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`)

|  Change | Delta |             % | Samples | Caller                     | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change | Delta |             % | Samples | Caller                               | Location                          |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH` |

##### `$getCallSiteArray()` (`org.gmetrics.result.MetricResultBuilder$_calculateTotal_closure2`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Object, Object)` | `org.gmetrics.result.MetricResultBuilder$_calculateTotal_closure2` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                   |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `isValidExactMethod(Class[], CachedClass[])`    | `org.codehaus.groovy.reflection.ParameterTypes`       |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `equals(Object, Object)`                        | `java.util.Objects`                                   |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `evaluate(Spliterator, boolean, IntFunction)`   | `java.util.stream.AbstractPipeline`                   |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `getReachableTarget(Transition, int)`           | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | --------------------------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                       |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `getMetaClassUnderLock()`                         | `org.codehaus.groovy.reflection.ClassInfo`                |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `binarySort(Object[], int, int, int, Comparator)` | `java.util.TimSort`                                       |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `accept(Object)`                                  | `java.util.stream.ReferencePipeline$3$1`                  |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `setGuards(Object)`                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|   Change | Delta |            % |   Samples | Function                                            | Location                                                                   |
| -------: | ----: | -----------: | --------: | --------------------------------------------------- | -------------------------------------------------------------------------- |
|   +55.8% |   +29 |  2.6% → 5.0% |   52 → 81 | `WorkerThread::run`                                 | `libjvm.dylib`                                                             |
|   +92.3% |   +24 |  1.3% → 3.1% |   26 → 50 | `G1EvacuateRegionsBaseTask::work`                   | `libjvm.dylib`                                                             |
|   +87.0% |   +20 |  1.2% → 2.6% |   23 → 43 | `Compilation::emit_code_body`                       | `libjvm.dylib`                                                             |
|  +200.0% |   +12 |  0.3% → 1.1% |    6 → 18 | `TypePtr::xmeet`                                    | `libjvm.dylib`                                                             |
|    +6.2% |   +12 | 9.9% → 12.7% | 194 → 206 | `doCall(Object)`                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|   +70.6% |   +12 |  0.9% → 1.8% |   17 → 29 | `LIR_Assembler::emit_lir_list`                      | `libjvm.dylib`                                                             |
|   +66.7% |   +12 |  0.9% → 1.8% |   18 → 30 | `LIR_Assembler::emit_code`                          | `libjvm.dylib`                                                             |
|  +275.0% |   +11 |  0.2% → 0.9% |    4 → 15 | `TypeInstPtr::xmeet_helper`                         | `libjvm.dylib`                                                             |
|  +220.0% |   +11 |  0.3% → 1.0% |    5 → 16 | `DebugInformationRecorder::describe_scope`          | `libjvm.dylib`                                                             |
|  +275.0% |   +11 |  0.2% → 0.9% |    4 → 15 | `addExceptionHandler()`                             | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                  |
|  +275.0% |   +11 |  0.2% → 0.9% |    4 → 15 | `catchException(MethodHandle, Class, MethodHandle)` | `java.lang.invoke.MethodHandles`                                           |
|   +76.9% |   +10 |  0.7% → 1.4% |   13 → 23 | `G1ParScanThreadState::do_copy_to_survivor_space`   | `libjvm.dylib`                                                             |
|   +52.6% |   +10 |  1.0% → 1.8% |   19 → 29 | `G1ParScanThreadState::trim_queue_to_threshold`     | `libjvm.dylib`                                                             |
|   +50.0% |   +10 |  1.0% → 1.8% |   20 → 30 | `G1EvacuateRegionsTask::scan_roots`                 | `libjvm.dylib`                                                             |
|  +250.0% |   +10 |  0.2% → 0.9% |    4 → 14 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`       | `libjvm.dylib`                                                             |
| +1000.0% |   +10 |  0.1% → 0.7% |    1 → 11 | `bsearch`                                           | `libsystem_c.dylib`                                                        |
|   +50.0% |    +9 |  0.9% → 1.7% |   18 → 27 | `Dict::Insert`                                      | `libjvm.dylib`                                                             |
|   +45.0% |    +9 |  1.0% → 1.8% |   20 → 29 | `Type::hashcons`                                    | `libjvm.dylib`                                                             |
|  +450.0% |    +9 |  0.1% → 0.7% |    2 → 11 | `I2C/C2I adapters`                                  | `<unknown>`                                                                |
|  +450.0% |    +9 |  0.1% → 0.7% |    2 → 11 | `encoding_for_logical_immediate`                    | `libjvm.dylib`                                                             |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                           | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ | -------------- |
|  +87.0% |   +20 | 1.2% → 2.6% | 23 → 43 | `Compilation::emit_code_body`                                      | `libjvm.dylib` |
| +200.0% |   +12 | 0.3% → 1.1% |  6 → 18 | `TypePtr::xmeet`                                                   | `libjvm.dylib` |
|  +70.6% |   +12 | 0.9% → 1.8% | 17 → 29 | `LIR_Assembler::emit_lir_list`                                     | `libjvm.dylib` |
|  +66.7% |   +12 | 0.9% → 1.8% | 18 → 30 | `LIR_Assembler::emit_code`                                         | `libjvm.dylib` |
| +275.0% |   +11 | 0.2% → 0.9% |  4 → 15 | `TypeInstPtr::xmeet_helper`                                        | `libjvm.dylib` |
| +220.0% |   +11 | 0.3% → 1.0% |  5 → 16 | `DebugInformationRecorder::describe_scope`                         | `libjvm.dylib` |
| +250.0% |   +10 | 0.2% → 0.9% |  4 → 14 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                      | `libjvm.dylib` |
|  +45.0% |    +9 | 1.0% → 1.8% | 20 → 29 | `Type::hashcons`                                                   | `libjvm.dylib` |
| +133.3% |    +8 | 0.3% → 0.9% |  6 → 14 | `LIR_Assembler::add_call_info`                                     | `libjvm.dylib` |
| +160.0% |    +8 | 0.3% → 0.8% |  5 → 13 | `Compilation::emit_code_epilog`                                    | `libjvm.dylib` |
|     new |    +8 | 0.0% → 0.5% |   0 → 8 | `Node::latency`                                                    | `libjvm.dylib` |
| +350.0% |    +7 | 0.1% → 0.6% |   2 → 9 | `Node::remove_dead_region`                                         | `libjvm.dylib` |
| +350.0% |    +7 | 0.1% → 0.6% |   2 → 9 | `Assembler::operand_valid_for_logical_immediate`                   | `libjvm.dylib` |
| +140.0% |    +7 | 0.3% → 0.7% |  5 → 12 | `LIR_Assembler::emit_slow_case_stubs`                              | `libjvm.dylib` |
| +300.0% |    +6 | 0.1% → 0.5% |   2 → 8 | `Compile::disconnect_useless_nodes`                                | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `ConstraintCastNode::Value`                                        | `libjvm.dylib` |
|  +55.6% |    +5 | 0.5% → 0.9% |  9 → 14 | `Type::cmp`                                                        | `libjvm.dylib` |
| +250.0% |    +5 | 0.1% → 0.4% |   2 → 7 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `LIR_Assembler::record_non_safepoint_debug_info`                   | `libjvm.dylib` |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `GraphKit::gen_instanceof`                                         | `libjvm.dylib` |

##### Native

|   Change | Delta |           % | Samples | Function                                                                                                                                                        | Location            |
| -------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
|   +55.8% |   +29 | 2.6% → 5.0% | 52 → 81 | `WorkerThread::run`                                                                                                                                             | `libjvm.dylib`      |
|   +92.3% |   +24 | 1.3% → 3.1% | 26 → 50 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib`      |
|   +76.9% |   +10 | 0.7% → 1.4% | 13 → 23 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib`      |
|   +52.6% |   +10 | 1.0% → 1.8% | 19 → 29 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`      |
|   +50.0% |   +10 | 1.0% → 1.8% | 20 → 30 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`      |
| +1000.0% |   +10 | 0.1% → 0.7% |  1 → 11 | `bsearch`                                                                                                                                                       | `libsystem_c.dylib` |
|   +50.0% |    +9 | 0.9% → 1.7% | 18 → 27 | `Dict::Insert`                                                                                                                                                  | `libjvm.dylib`      |
|  +450.0% |    +9 | 0.1% → 0.7% |  2 → 11 | `encoding_for_logical_immediate`                                                                                                                                | `libjvm.dylib`      |
|  +133.3% |    +8 | 0.3% → 0.9% |  6 → 14 | `G1ParEvacuateFollowersClosure::do_void`                                                                                                                        | `libjvm.dylib`      |
|  +133.3% |    +8 | 0.3% → 0.9% |  6 → 14 | `G1EvacuateRegionsTask::evacuate_live_objects`                                                                                                                  | `libjvm.dylib`      |
|      new |    +8 | 0.0% → 0.5% |   0 → 8 | `G1CodeBlobClosure::do_code_blob`                                                                                                                               | `libjvm.dylib`      |
|   +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`      |
|   +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`      |
|   +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`      |
|   +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`      |
|   +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`      |
|  +233.3% |    +7 | 0.2% → 0.6% |  3 → 10 | `IRScopeDebugInfo::record_debug_info`                                                                                                                           | `libjvm.dylib`      |
|  +140.0% |    +7 | 0.3% → 0.7% |  5 → 12 | `CodeEmitInfo::record_debug_info`                                                                                                                               | `libjvm.dylib`      |
|      new |    +7 | 0.0% → 0.4% |   0 → 7 | `nmethod::oops_do_process_weak`                                                                                                                                 | `libjvm.dylib`      |
|  +300.0% |    +6 | 0.1% → 0.5% |   2 → 8 | `Parse::adjust_map_after_if`                                                                                                                                    | `libjvm.dylib`      |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                        | Location                                                                                     |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| +275.0% |   +11 | 0.2% → 0.9% |  4 → 15 | `addExceptionHandler()`                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                    |
| +275.0% |   +11 | 0.2% → 0.9% |  4 → 15 | `catchException(MethodHandle, Class, MethodHandle)`             | `java.lang.invoke.MethodHandles`                                                             |
| +233.3% |    +7 | 0.2% → 0.6% |  3 → 10 | `makeGuardWithCatch(MethodHandle, Class, MethodHandle)`         | `java.lang.invoke.MethodHandleImpl`                                                          |
| +233.3% |    +7 | 0.2% → 0.6% |  3 → 10 | `bindTo(Object)`                                                | `java.lang.invoke.MethodHandle`                                                              |
|  +60.0% |    +6 | 0.5% → 1.0% | 10 → 16 | `asType(MethodType)`                                            | `java.lang.invoke.MethodHandle`                                                              |
| +300.0% |    +6 | 0.1% → 0.5% |   2 → 8 | `callCurrent(GroovyObject, Object[])`                           | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`                                     |
| +300.0% |    +6 | 0.1% → 0.5% |   2 → 8 | `invoke(Object, Object[])`                                      | `org.codehaus.groovy.runtime.dgm$207`                                                        |
| +100.0% |    +5 | 0.3% → 0.6% |  5 → 10 | `methodType(Class, Class[], boolean)`                           | `java.lang.invoke.MethodType`                                                                |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `getTargetBeanDescriptor()`                                     | `java.beans.Introspector`                                                                    |
|  +38.5% |    +5 | 0.7% → 1.1% | 13 → 18 | `memberDeclaration(int)`                                        | `org.apache.groovy.parser.antlr4.GroovyParser`                                               |
|  +38.5% |    +5 | 0.7% → 1.1% | 13 → 18 | `classBodyDeclaration(int)`                                     | `org.apache.groovy.parser.antlr4.GroovyParser`                                               |
| +166.7% |    +5 | 0.2% → 0.5% |   3 → 8 | `invoke(Object, Object[])`                                      | `org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce` |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `getClassInfo(Class)`                                           | `org.codehaus.groovy.reflection.ClassInfo`                                                   |
| +100.0% |    +4 | 0.2% → 0.5% |   4 → 8 | `getTargetPropertyInfo()`                                       | `java.beans.Introspector`                                                                    |
| +100.0% |    +4 | 0.2% → 0.5% |   4 → 8 | `findCustomizerClass(Class)`                                    | `java.beans.Introspector`                                                                    |
|  +23.5% |    +4 | 0.9% → 1.3% | 17 → 21 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                       |
|  +23.5% |    +4 | 0.9% → 1.3% | 17 → 21 | `adaptivePredict(TokenStream, int, ParserRuleContext)`          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                       |
|  +22.2% |    +4 | 0.9% → 1.4% | 18 → 22 | `scriptStatements()`                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                                               |
|  +28.6% |    +4 | 0.7% → 1.1% | 14 → 18 | `classBody(int)`                                                | `org.apache.groovy.parser.antlr4.GroovyParser`                                               |
|  +28.6% |    +4 | 0.7% → 1.1% | 14 → 18 | `classDeclaration()`                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                                               |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                | Location                                                                            |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|   +6.2% |   +12 | 9.9% → 12.7% | 194 → 206 | `doCall(Object)`                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
| +175.0% |    +7 |  0.2% → 0.7% |    4 → 11 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
| +350.0% |    +7 |  0.1% → 0.6% |     2 → 9 | `visitClass(ClassNode)`                                 | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                             |
|   +3.7% |    +6 | 8.3% → 10.4% | 163 → 169 | `applyTo(SourceCode)`                                   | `org.codenarc.rule.AbstractRule`                                                    |
| +300.0% |    +6 |  0.1% → 0.5% |     2 → 8 | `doCall(Object)`                                        | `org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`      |
| +300.0% |    +6 |  0.1% → 0.5% |     2 → 8 | `addMethodsToMetricResults(SourceCode, ClassNode, Map)` | `org.gmetrics.metric.AbstractMethodMetric`                                          |
| +250.0% |    +5 |  0.1% → 0.4% |     2 → 7 | `calculate(MethodNode, SourceCode)`                     | `org.gmetrics.metric.abc.AbcMetric`                                                 |
|     new |    +4 |  0.0% → 0.2% |     0 → 4 | `getMethodCallExpressions()`                            | `org.codenarc.source.AbstractSourceCode`                                            |
| +150.0% |    +3 |  0.1% → 0.3% |     2 → 5 | `eachImportLine(SourceCode, Closure)`                   | `org.codenarc.rule.imports.AbstractImportRule`                                      |
| +300.0% |    +3 |  0.1% → 0.2% |     1 → 4 | `getAstVisitor(SourceCode)`                             | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                                   |
| +200.0% |    +2 |  0.1% → 0.2% |     1 → 3 | `setRuleProperties(Node, Rule)`                         | `org.codenarc.ruleset.XmlReaderRuleSet`                                             |
|  +66.7% |    +2 |  0.2% → 0.3% |     3 → 5 | `applyVisitor(AstVisitor, SourceCode)`                  | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                    |
|  +50.0% |    +2 |  0.2% → 0.4% |     4 → 6 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.ImportFromSamePackageRule`                               |
| +200.0% |    +2 |  0.1% → 0.2% |     1 → 3 | `<init>(String, boolean)`                               | `org.codenarc.util.WildcardPattern`                                                 |
| +200.0% |    +2 |  0.1% → 0.2% |     1 → 3 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                           |
| +100.0% |    +2 |  0.1% → 0.2% |     2 → 4 | `applyTo(SourceCode, List)`                             | `org.codenarc.rule.imports.DuplicateImportRule`                                     |
| +200.0% |    +2 |  0.1% → 0.2% |     1 → 3 | `doCall(Object)`                                        | `org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3` |
| +200.0% |    +2 |  0.1% → 0.2% |     1 → 3 | `collectAllPrivateFields(ModuleNode)`                   | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                                   |
|     new |    +2 |  0.0% → 0.1% |     0 → 2 | `visitBinaryExpression(BinaryExpression)`               | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor`                                 |
|     new |    +2 |  0.0% → 0.1% |     0 → 2 | `methodReturnsCollection(MethodNode)`                   | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`        |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +450.0% |    +9 | 0.1% → 0.7% |  2 → 11 | `I2C/C2I adapters`       | `<unknown>` |
| +100.0% |    +1 |        0.1% |   1 → 2 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                                                      | Location                                             |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -21.7% |  -295 | 69.2% → 65.6% | 1,361 → 1,066 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| -21.6% |  -294 | 69.1% → 65.6% | 1,359 → 1,065 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| -19.3% |  -276 | 72.6% → 70.9% | 1,428 → 1,152 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| -19.3% |  -276 | 72.6% → 70.9% | 1,428 → 1,152 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| -19.3% |  -275 | 72.5% → 70.9% | 1,426 → 1,151 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| -19.2% |  -274 | 72.5% → 70.9% | 1,425 → 1,151 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| -13.8% |  -168 | 61.9% → 64.6% | 1,217 → 1,049 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| -13.6% |  -136 | 50.9% → 53.2% |   1,000 → 864 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| -13.3% |  -133 | 50.7% → 53.2% |     997 → 864 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| -84.4% |  -124 |   7.5% → 1.4% |      147 → 23 | `PlatformMonitor::wait`                                                                       | `libjvm.dylib`                                       |
| -88.4% |  -122 |   7.0% → 1.0% |      138 → 16 | `CompileQueue::get`                                                                           | `libjvm.dylib`                                       |
| -89.0% |  -121 |   6.9% → 0.9% |      136 → 15 | `Monitor::wait`                                                                               | `libjvm.dylib`                                       |
| -86.1% |  -118 |   7.0% → 1.2% |      137 → 19 | `__psynch_cvwait`                                                                             | `libsystem_kernel.dylib`                             |
| -17.8% |   -89 | 25.5% → 25.4% |     501 → 412 | `Compile::Code_Gen`                                                                           | `libjvm.dylib`                                       |
| -12.7% |   -65 | 26.0% → 27.5% |     512 → 447 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| -12.4% |   -63 | 25.9% → 27.5% |     510 → 447 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| -12.4% |   -63 | 25.8% → 27.4% |     508 → 445 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH`                     |
| -12.4% |   -63 | 25.8% → 27.4% |     508 → 445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| -12.4% |   -63 | 25.8% → 27.3% |     507 → 444 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| -11.7% |   -59 | 25.6% → 27.3% |     503 → 444 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH`                     |

##### Compiler

| Change | Delta |             % |       Samples | Function                                    | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------- | -------------- |
| -21.6% |  -294 | 69.1% → 65.6% | 1,359 → 1,065 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| -13.8% |  -168 | 61.9% → 64.6% | 1,217 → 1,049 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| -13.6% |  -136 | 50.9% → 53.2% |   1,000 → 864 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| -13.3% |  -133 | 50.7% → 53.2% |     997 → 864 | `Compile::Compile`                          | `libjvm.dylib` |
| -88.4% |  -122 |   7.0% → 1.0% |      138 → 16 | `CompileQueue::get`                         | `libjvm.dylib` |
| -17.8% |   -89 | 25.5% → 25.4% |     501 → 412 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| -14.7% |   -40 | 13.9% → 14.3% |     273 → 233 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| -10.5% |   -39 | 18.8% → 20.4% |     370 → 331 | `Compile::Optimize`                         | `libjvm.dylib` |
| -43.4% |   -36 |   4.2% → 2.9% |       83 → 47 | `Compilation::build_hir`                    | `libjvm.dylib` |
| -47.7% |   -31 |   3.3% → 2.1% |       65 → 34 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| -56.6% |   -30 |   2.7% → 1.4% |       53 → 23 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| -49.2% |   -30 |   3.1% → 1.9% |       61 → 31 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| -48.4% |   -30 |   3.2% → 2.0% |       62 → 32 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| -13.5% |   -27 | 10.2% → 10.7% |     200 → 173 | `Compilation::compile_method`               | `libjvm.dylib` |
| -37.1% |   -26 |   3.6% → 2.7% |       70 → 44 | `Matcher::xform`                            | `libjvm.dylib` |
| -57.8% |   -26 |   2.3% → 1.2% |       45 → 19 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |
| -57.8% |   -26 |   2.3% → 1.2% |       45 → 19 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
| -13.0% |   -26 | 10.2% → 10.7% |     200 → 174 | `Compilation::Compilation`                  | `libjvm.dylib` |
| -12.8% |   -24 |  9.6% → 10.1% |     188 → 164 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
| -12.3% |   -23 |  9.5% → 10.1% |     187 → 164 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |

##### Native

| Change | Delta |             % |       Samples | Function                            | Location                  |
| -----: | ----: | ------------: | ------------: | ----------------------------------- | ------------------------- |
| -21.7% |  -295 | 69.2% → 65.6% | 1,361 → 1,066 | `JavaThread::thread_main_inner`     | `libjvm.dylib`            |
| -19.3% |  -276 | 72.6% → 70.9% | 1,428 → 1,152 | `_pthread_start`                    | `libsystem_pthread.dylib` |
| -19.3% |  -276 | 72.6% → 70.9% | 1,428 → 1,152 | `thread_start`                      | `libsystem_pthread.dylib` |
| -19.3% |  -275 | 72.5% → 70.9% | 1,426 → 1,151 | `thread_native_entry`               | `libjvm.dylib`            |
| -19.2% |  -274 | 72.5% → 70.9% | 1,425 → 1,151 | `Thread::call_run`                  | `libjvm.dylib`            |
| -84.4% |  -124 |   7.5% → 1.4% |      147 → 23 | `PlatformMonitor::wait`             | `libjvm.dylib`            |
| -89.0% |  -121 |   6.9% → 0.9% |      136 → 15 | `Monitor::wait`                     | `libjvm.dylib`            |
| -86.1% |  -118 |   7.0% → 1.2% |      137 → 19 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
| -57.4% |   -31 |   2.7% → 1.4% |       54 → 23 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`  |
| -57.4% |   -31 |   2.7% → 1.4% |       54 → 23 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
| -47.7% |   -31 |   3.3% → 2.1% |       65 → 34 | `IRScope::IRScope`                  | `libjvm.dylib`            |
| -47.7% |   -31 |   3.3% → 2.1% |       65 → 34 | `IR::IR`                            | `libjvm.dylib`            |
| -13.9% |   -28 | 10.3% → 10.7% |     202 → 174 | `Compiler::compile_method`          | `libjvm.dylib`            |
| -65.2% |   -15 |   1.2% → 0.5% |        23 → 8 | `ThreadCritical::ThreadCritical`    | `libjvm.dylib`            |
| -13.2% |   -14 |   5.4% → 5.7% |      106 → 92 | `Parse::do_call`                    | `libjvm.dylib`            |
| -61.9% |   -13 |   1.1% → 0.5% |        21 → 8 | `Mutex::lock`                       | `libjvm.dylib`            |
| -15.1% |   -11 |   3.7% → 3.8% |       73 → 62 | `PredictedCallGenerator::generate`  | `libjvm.dylib`            |
| -55.0% |   -11 |   1.0% → 0.6% |        20 → 9 | `Chunk::operator new`               | `libjvm.dylib`            |
| -52.6% |   -10 |   1.0% → 0.6% |        19 → 9 | `Arena::grow`                       | `libjvm.dylib`            |
| -60.0% |    -9 |   0.8% → 0.4% |        15 → 6 | `Arena::contains`                   | `libjvm.dylib`            |

##### Standard library

| Change | Delta |             % |   Samples | Function                                                                                      | Location                                             |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -12.4% |   -63 | 25.9% → 27.5% | 510 → 447 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| -12.4% |   -63 | 25.8% → 27.4% | 508 → 445 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH`                     |
| -12.4% |   -63 | 25.8% → 27.4% | 508 → 445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| -12.4% |   -63 | 25.8% → 27.3% | 507 → 444 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| -11.7% |   -59 | 25.6% → 27.3% | 503 → 444 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH`                     |
| -11.7% |   -59 | 25.6% → 27.3% | 503 → 444 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| -11.8% |   -59 | 25.5% → 27.2% | 501 → 442 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000`  |
| -11.8% |   -59 | 25.5% → 27.2% | 501 → 442 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800`  |
| -11.8% |   -59 | 25.5% → 27.2% | 501 → 442 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00`  |
| -11.8% |   -58 | 24.9% → 26.6% | 490 → 432 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH`                    |
| -11.5% |   -56 | 24.7% → 26.5% | 486 → 430 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| -10.8% |   -52 | 24.5% → 26.4% | 481 → 429 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH`                     |
| -10.8% |   -52 | 24.5% → 26.4% | 481 → 429 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH`                     |
| -10.8% |   -52 | 24.5% → 26.4% | 481 → 429 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH`                     |
| -10.8% |   -51 | 24.1% → 26.0% | 474 → 423 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                           |
| -10.4% |   -50 | 24.6% → 26.7% | 483 → 433 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| -10.6% |   -50 | 24.1% → 26.0% | 473 → 423 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -10.6% |   -50 | 24.1% → 26.0% | 473 → 423 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -10.6% |   -50 | 24.1% → 26.0% | 473 → 423 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`        |
| -10.6% |   -50 | 24.1% → 26.0% | 473 → 423 | `doMethodInvoke(Object, Object[])`                                                            | `groovy.lang.MetaMethod`                             |

##### Ours

| Change | Delta |             % |   Samples | Function                                         | Location                                                                    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| -12.7% |   -65 | 26.0% → 27.5% | 512 → 447 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| -10.4% |   -50 | 24.6% → 26.7% | 483 → 433 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| -10.1% |   -48 | 24.1% → 26.2% | 473 → 425 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
|  -6.7% |   -25 | 19.0% → 21.5% | 374 → 349 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -6.3% |   -24 | 19.3% → 21.9% | 380 → 356 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -6.1% |   -23 | 19.3% → 21.9% | 379 → 356 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -6.1% |   -23 | 19.2% → 21.9% | 378 → 355 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -5.5% |   -20 | 18.5% → 21.1% | 363 → 343 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -23.7% |   -14 |   3.0% → 2.8% |   59 → 45 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                             |
| -23.7% |   -14 |   3.0% → 2.8% |   59 → 45 | `<init>(String)`                                 | `org.codenarc.ruleset.XmlFileRuleSet`                                       |
| -23.3% |   -14 |   3.1% → 2.8% |   60 → 46 | `buildRuleSet()`                                 | `org.codenarc.CodeNarcRunner`                                               |
| -22.0% |   -13 |   3.0% → 2.8% |   59 → 46 | `loadRuleSetFile(String)`                        | `org.codenarc.ruleset.RuleSetUtil`                                          |
| -22.0% |   -13 |   3.0% → 2.8% |   59 → 46 | `doCall(Object)`                                 | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |
| -22.0% |   -13 |   3.0% → 2.8% |   59 → 46 | `createInitialRuleSetFromFiles()`                | `org.codenarc.CodeNarcRunner`                                               |
| -22.0% |   -13 |   3.0% → 2.8% |   59 → 46 | `createInitialRuleSet()`                         | `org.codenarc.CodeNarcRunner`                                               |
| -22.4% |   -13 |   3.0% → 2.8% |   58 → 45 | `<init>(Reader)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet`                                     |
| -23.9% |   -11 |   2.3% → 2.2% |   46 → 35 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`          |
| -23.9% |   -11 |   2.3% → 2.2% |   46 → 35 | `loadRuleElements(Node)`                         | `org.codenarc.ruleset.XmlReaderRuleSet`                                     |
| -33.3% |   -10 |   1.5% → 1.2% |   30 → 20 | `assertClassImplementsRuleInterface(Class)`      | `org.codenarc.ruleset.RuleSetUtil`                                          |
|  -3.4% |   -10 | 14.8% → 17.3% | 291 → 281 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -75.0% |    -3 | 0.2% → 0.1% |   4 → 1 | `vtable stub` | `<unknown>` |
| -25.0% |    -1 |        0.2% |   4 → 3 | `itable stub` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +55.8% |   +29 | 100.0% | 52 → 81 | `Thread::call_run` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +92.3% |   +24 | 100.0% | 26 → 50 | `WorkerThread::run` | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +87.0% |   +20 | 100.0% | 23 → 43 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `TypePtr::xmeet` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +133.3% |    +4 | 50.0% → 38.9% |   3 → 7 | `TypeOopPtr::filter_helper`                | `libjvm.dylib` |
|     new |    +3 |  0.0% → 16.7% |   0 → 3 | `TypeInstPtr::xmeet_helper`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `GraphKit::cast_not_null`                  | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `GraphKit::record_profile_for_speculation` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `GraphKit::subtype_check_receiver`         | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |      % |   Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------------------------------------- |
|  +6.2% |   +12 | 100.0% | 194 → 206 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| +70.6% |   +12 | 100.0% | 17 → 29 | `LIR_Assembler::emit_code` | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +66.7% |   +12 | 100.0% | 18 → 30 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `TypeInstPtr::xmeet_helper` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +275.0% |   +11 | 100.0% |  4 → 15 | `TypePtr::xmeet` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
| +500.0% |    +5 | 20.0% → 37.5% |   1 → 6 | `IRScopeDebugInfo::record_debug_info`            | `libjvm.dylib` |
| +150.0% |    +3 | 40.0% → 31.3% |   2 → 5 | `NonSafepointEmitter::emit_non_safepoint`        | `libjvm.dylib` |
| +300.0% |    +3 | 20.0% → 25.0% |   1 → 4 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |

##### `addExceptionHandler()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change | Delta |      % | Samples | Caller                | Location                                                  |
| ------: | ----: | -----: | ------: | --------------------- | --------------------------------------------------------- |
| +275.0% |   +11 | 100.0% |  4 → 15 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `catchException(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandles`)

|  Change | Delta |              % | Samples | Caller                                    | Location                                                  |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | --------------------------------------------------------- |
| +400.0% |   +12 | 75.0% → 100.0% |  3 → 15 | `addExceptionHandler()`                   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `setMetaClassCallHandleIfNeeded(boolean)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                          | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
| +69.2% |    +9 | 100.0% → 95.7% | 13 → 22 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 4.3% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
|  +23.1% |    +3 | 68.4% → 55.2% | 13 → 16 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
| +100.0% |    +3 | 15.8% → 20.7% |   3 → 6 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |
| +200.0% |    +2 |  5.3% → 10.3% |   1 → 3 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.4% |   0 → 1 | `G1ParEvacuateFollowersClosure::do_void`                            | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.4% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)2, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +50.0% |   +10 | 100.0% | 20 → 30 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                      | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | -------------- |
| +225.0% |    +9 | 100.0% → 92.9% |  4 → 13 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|     new |    +1 |    0.0% → 7.1% |   0 → 1 | `PhaseIdealLoop::ctrl_of_use_out_of_loop`   | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|   Change | Delta |      % | Samples | Caller                           | Location       |
| -------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +1000.0% |   +10 | 100.0% |  1 → 11 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  +47.1% |    +8 | 94.4% → 92.6% | 17 → 25 | `Type::hashcons`              | `libjvm.dylib` |
|     new |    +2 |   0.0% → 7.4% |   0 → 2 | `TypePtr::interfaces`         | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|     new |    +5 |  0.0% → 17.2% |   0 → 5 | `TypeInstPtr::xmeet_helper`          | `libjvm.dylib` |
| removed |    -3 |  15.0% → 0.0% |   3 → 0 | `TypePtr::interfaces`                | `libjvm.dylib` |
| +100.0% |    +3 | 15.0% → 20.7% |   3 → 6 | `TypeInstPtr::add_offset`            | `libjvm.dylib` |
|     new |    +2 |   0.0% → 6.9% |   0 → 2 | `ConvI2LNode::Value`                 | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `TypeInstKlassPtr::as_instance_type` | `libjvm.dylib` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `getArgumentsAndReturnSizes(String)`                                                         | `groovyjarjarasm.asm.Type`                             |
| +100.0% |    +1 | 50.0% → 18.2% |   1 → 2 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH`                       |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)`                                              | `java.lang.invoke.DirectMethodHandle$Holder`           |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `collectViolations(SourceCode, RuleSet)`                                                     | `org.codenarc.analyzer.AbstractSourceAnalyzer`         |

##### `encoding_for_logical_immediate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                           | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | -------------- |
| +300.0% |    +6 | 100.0% → 72.7% |   2 → 8 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 18.2% |   0 → 2 | `Assembler::andw`                                | `libjvm.dylib` |
|     new |    +1 |    0.0% → 9.1% |   0 → 1 | `Assembler::eor`                                 | `libjvm.dylib` |

##### `LIR_Assembler::add_call_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| +500.0% |    +5 | 16.7% → 42.9% |   1 → 6 | `CounterOverflowStub::emit_code`   | `libjvm.dylib` |
| +150.0% |    +3 | 33.3% → 35.7% |   2 → 5 | `LIR_Assembler::call`              | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `LIR_Assembler::ic_call`           | `libjvm.dylib` |
|  -50.0% |    -1 |  33.3% → 7.1% |   2 → 1 | `ImplicitNullCheckStub::emit_code` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `SimpleExceptionStub::emit_code`   | `libjvm.dylib` |

##### `Compilation::emit_code_epilog` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +6 | 0.0% → 75.0% |   0 → 6 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `Scheduling::AddNodeToBundle`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `PhaseCFG::global_code_motion`      | `libjvm.dylib` |

##### `Node::remove_dead_region` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                      | Location       |
| ------: | ----: | -------------: | ------: | --------------------------- | -------------- |
| +200.0% |    +4 | 100.0% → 66.7% |   2 → 6 | `CallStaticJavaNode::Ideal` | `libjvm.dylib` |
|     new |    +3 |   0.0% → 33.3% |   0 → 3 | `IfNode::Ideal_common`      | `libjvm.dylib` |

##### `Assembler::operand_valid_for_logical_immediate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| +200.0% |    +2 | 50.0% → 33.3% |   1 → 3 | `MacroAssembler::mov_immediate64`            | `libjvm.dylib` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `MacroAssembler::mov_immediate32`            | `libjvm.dylib` |
| +100.0% |    +1 | 50.0% → 22.2% |   1 → 2 | `State::_sub_Op_ConL`                        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `State::_sub_Op_ConI`                        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `LIRGenerator::increment_event_counter_impl` | `libjvm.dylib` |

##### `LIR_Assembler::emit_slow_case_stubs` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                          | Location       |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +140.0% |    +7 | 100.0% |  5 → 12 | `Compilation::emit_code_epilog` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `ConstraintCastNode::Value` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 50.0% |   1 → 3 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseCCP::analyze`              | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
|     new |    +3 |   0.0% → 50.0% |   0 → 3 | `LIR_Assembler::process_debug_info`        | `libjvm.dylib` |
| +100.0% |    +1 | 100.0% → 33.3% |   1 → 2 | `LIR_Assembler::add_call_info`             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `LIR_Assembler::add_debug_info_for_branch` | `libjvm.dylib` |

##### `GraphKit::gen_instanceof` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `Parse::do_instanceof` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                         | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| +133.3% |    +8 | 100.0% |  6 → 14 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +133.3% |    +8 | 100.0% |  6 → 14 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `G1CodeBlobClosure::do_code_blob` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +6 | 0.0% → 75.0% |   0 → 6 | `G1ScanAndCountCodeBlobClosure::do_code_blob` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 25.0% |   0 → 2 | `frame::oops_code_blob_do`                    | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1RemSet::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1EvacuateRegionsTask::scan_roots` | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +233.3% |    +7 |        100.0% |  3 → 10 | `CodeEmitInfo::record_debug_info`     | `libjvm.dylib` |
| +600.0% |    +6 | 33.3% → 70.0% |   1 → 7 | `IRScopeDebugInfo::record_debug_info` | `libjvm.dylib` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +140.0% |    +7 | 100.0% |  5 → 12 | `LIR_Assembler::add_call_info` | `libjvm.dylib` |

##### `nmethod::oops_do_process_weak` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `G1CodeBlobClosure::do_code_blob` | `libjvm.dylib` |

##### `Parse::adjust_map_after_if` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller             | Location       |
| ------: | ----: | -------------: | ------: | ------------------ | -------------- |
| +250.0% |    +5 | 100.0% → 87.5% |   2 → 7 | `Parse::do_if`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `Parse::do_ifnull` | `libjvm.dylib` |

##### `makeGuardWithCatch(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |      % | Samples | Caller                                              | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------------------------- | -------------------------------- |
| +233.3% |    +7 | 100.0% |  3 → 10 | `catchException(MethodHandle, Class, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |              % | Samples | Caller                                                                    | Location                                                  |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------- | --------------------------------------------------------- |
|    new |    +3 |   0.0% → 30.0% |   0 → 3 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                       |
| +33.3% |    +1 | 100.0% → 40.0% |   3 → 4 | `setGuards(Object)`                                                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `arrayConstructor(Class)`                                                 | `java.lang.invoke.MethodHandles`                          |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `setHandleForMetaMethod()`                                                | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `setMetaClassCallHandleIfNeeded(boolean)`                                 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `asType(MethodType)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller                                                                                           | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
|    new |    +2 |  0.0% → 12.5% |   0 → 2 | `explicitCastArguments(MethodHandle, MethodType)`                                                | `java.lang.invoke.MethodHandles`                        |
|    new |    +2 |  0.0% → 12.5% |   0 → 2 | `makeGuardWithCatch(MethodHandle, Class, MethodHandle)`                                          | `java.lang.invoke.MethodHandleImpl`                     |
| +12.5% |    +1 | 80.0% → 56.3% |   8 → 9 | `asSpreader(int, Class, int)`                                                                    | `java.lang.invoke.MethodHandle`                         |
| -50.0% |    -1 |  20.0% → 6.3% |   2 → 1 | `make(MutableCallSite, Class, String, int, MethodType, boolean, boolean, boolean, MethodHandle)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`         |
|    new |    +1 |   0.0% → 6.3% |   0 → 1 | `handleBoolean()`                                                                                | `org.codehaus.groovy.vmplugin.v8.Selector$CastSelector` |

##### `callCurrent(GroovyObject, Object[])` (`org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`)

|  Change | Delta |             % | Samples | Caller                                                 | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +500.0% |    +5 | 50.0% → 75.0% |   1 → 6 | `callCurrent(GroovyObject, Object, Object)`            | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| +100.0% |    +1 | 50.0% → 25.0% |   1 → 2 | `defaultCallCurrent(CallSite, GroovyObject, Object[])` | `org.codehaus.groovy.runtime.callsite.CallSiteArray`    |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$207`)

|  Change | Delta |      % | Samples | Caller                     | Location                                                                                     |
| ------: | ----: | -----: | ------: | -------------------------- | -------------------------------------------------------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `invoke(Object, Object[])` | `org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |            % | Samples | Caller                                                                    | Location                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
|     new |    +3 | 0.0% → 30.0% |   0 → 3 | `changeReturnType(Class)`                                                 | `java.lang.invoke.MethodType`       |
|     new |    +2 | 0.0% → 20.0% |   0 → 2 | `canonicalize(MethodType, int)`                                           | `java.lang.invoke.MethodTypeForm`   |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `methodType(Class, Class[])`                                              | `java.lang.invoke.MethodType`       |
|     new |    +1 | 0.0% → 10.0% |   0 → 1 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `getTargetBeanDescriptor()` (`java.beans.Introspector`)

|  Change | Delta |      % | Samples | Caller          | Location                  |
| ------: | ----: | -----: | ------: | --------------- | ------------------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `getBeanInfo()` | `java.beans.Introspector` |

##### `memberDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller                      | Location                                       |
| -----: | ----: | -----: | ------: | --------------------------- | ---------------------------------------------- |
| +38.5% |    +5 | 100.0% | 13 → 18 | `classBodyDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classBodyDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller           | Location                                       |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------------- |
| +38.5% |    +5 | 100.0% | 13 → 18 | `classBody(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce`)

|  Change | Delta |      % | Samples | Caller                   | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------ | --------------------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `call(Object, Object[])` | `org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite` |

##### `getClassInfo(Class)` (`org.codehaus.groovy.reflection.ClassInfo`)

| Change | Delta |            % | Samples | Caller                           | Location                                                      |
| -----: | ----: | -----------: | ------: | -------------------------------- | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `getCachedClass(Class)`          | `org.codehaus.groovy.reflection.ReflectionCache`              |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `getMetaClass(Class)`            | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `bypassCache(Boolean, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`               |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|  Change | Delta |      % | Samples | Caller          | Location                  |
| ------: | ----: | -----: | ------: | --------------- | ------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `getBeanInfo()` | `java.beans.Introspector` |

##### `findCustomizerClass(Class)` (`java.beans.Introspector`)

|  Change | Delta |      % | Samples | Caller                      | Location                  |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `getTargetBeanDescriptor()` | `java.beans.Introspector` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |      % | Samples | Caller                                                 | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| +23.5% |    +4 | 100.0% | 17 → 21 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |           % | Samples | Caller                     | Location                                       |
| ------: | ----: | ----------: | ------: | -------------------------- | ---------------------------------------------- |
|     new |    +2 | 0.0% → 9.5% |   0 → 2 | `blockStatement()`         | `org.apache.groovy.parser.antlr4.GroovyParser` |
|     new |    +2 | 0.0% → 9.5% |   0 → 2 | `variableDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 5.9% → 0.0% |   1 → 0 | `nls()`                    | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 5.9% → 0.0% |   1 → 0 | `sep()`                    | `org.apache.groovy.parser.antlr4.GroovyParser` |
| removed |    -1 | 5.9% → 0.0% |   1 → 0 | `annotation()`             | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `scriptStatements()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller              | Location                                       |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------- |
| +22.2% |    +4 | 100.0% | 18 → 22 | `compilationUnit()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classBody(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller               | Location                                       |
| -----: | ----: | -----: | ------: | -------------------- | ---------------------------------------------- |
| +28.6% |    +4 | 100.0% | 14 → 18 | `classDeclaration()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `classDeclaration()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Caller              | Location                                       |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------- |
| +28.6% |    +4 | 100.0% | 14 → 18 | `typeDeclaration()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change | Delta |      % | Samples | Caller                | Location                         |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|  Change | Delta |      % | Samples | Caller                      | Location                                   |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------------------------ |
| +350.0% |    +7 | 100.0% |   2 → 9 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

| Change | Delta |      % |   Samples | Caller                                    | Location                          |
| -----: | ----: | -----: | --------: | ----------------------------------------- | --------------------------------- |
|  +3.7% |    +6 | 100.0% | 163 → 169 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`)

|  Change | Delta |      % | Samples | Caller                                  | Location                                     |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

|  Change | Delta |      % | Samples | Caller                                                  | Location                                             |
| ------: | ----: | -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000030118a000` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |      % | Samples | Caller                                          | Location                          |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `getMethodCallExpressions()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller                  | Location                                                |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

|  Change | Delta |      % | Samples | Caller                                          | Location                          |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | --------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `getAstVisitor(SourceCode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

|  Change | Delta |      % | Samples | Caller                      | Location                                         |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `setRuleProperties(Node, Rule)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|  Change | Delta |      % | Samples | Caller                                          | Location                                     |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

| Change | Delta |      % | Samples | Caller                      | Location                                         |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------------------------ |
| +66.7% |    +2 | 100.0% |   3 → 5 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.ImportFromSamePackageRule`)

| Change | Delta |      % | Samples | Caller                | Location                         |
| -----: | ----: | -----: | ------: | --------------------- | -------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change | Delta |              % | Samples | Caller                                  | Location                                             |
| ------: | ----: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `newInvokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000030126b800` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `<init>(String)`                        | `org.codenarc.util.WildcardPattern`                  |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.BlankLineBeforePackageRule`)

|  Change | Delta |      % | Samples | Caller                | Location                         |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.DuplicateImportRule`)

|  Change | Delta |      % | Samples | Caller                | Location                         |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3`)

|  Change | Delta |      % | Samples | Caller                                  | Location                                     |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `collectAllPrivateFields(ModuleNode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

|  Change | Delta |      % | Samples | Caller                                  | Location                                     |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

| Change | Delta |             % | Samples | Caller                     | Location                                        |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `methodReturnsCollection(MethodNode)` (`org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`)

| Change | Delta |             % | Samples | Caller                         | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                          | Location                                     |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
| -21.7% |  -295 | 100.0% | 1,361 → 1,066 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------------: | ------------------------------- | -------------- |
| -21.6% |  -294 | 100.0% | 1,359 → 1,065 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Caller         | Location                  |
| -----: | ----: | -----: | ------------: | -------------- | ------------------------- |
| -19.3% |  -276 | 100.0% | 1,428 → 1,152 | `thread_start` | `libsystem_pthread.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
| -19.3% |  -275 | 100.0% | 1,426 → 1,151 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                | Location       |
| -----: | ----: | -----: | ------------: | --------------------- | -------------- |
| -19.2% |  -274 | 100.0% | 1,425 → 1,151 | `thread_native_entry` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------------: | ------------------------------------- | -------------- |
| -13.8% |  -168 | 100.0% | 1,217 → 1,049 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ----------: | ------------------------------------------ | -------------- |
| -13.6% |  -136 | 100.0% | 1,000 → 864 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Caller                       | Location       |
| ------: | ----: | -------------: | --------: | ---------------------------- | -------------- |
|  -13.3% |  -132 | 99.9% → 100.0% | 996 → 864 | `C2Compiler::compile_method` | `libjvm.dylib` |
| removed |    -1 |    0.1% → 0.0% |     1 → 0 | `OptoRuntime::generate_stub` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | -------: | --------------------------------------- | -------------- |
| -88.9% |  -120 | 91.8% → 65.2% | 135 → 15 | `Monitor::wait`                         | `libjvm.dylib` |
| -33.3% |    -4 |  8.2% → 34.8% |   12 → 8 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                                | Location       |
| -----: | ----: | -----: | -------: | ------------------------------------- | -------------- |
| -88.4% |  -122 | 100.0% | 138 → 16 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Caller                     | Location       |
| ------: | ----: | -------------: | -------: | -------------------------- | -------------- |
|  -88.9% |  -120 | 99.3% → 100.0% | 135 → 15 | `CompileQueue::get`        | `libjvm.dylib` |
| removed |    -1 |    0.7% → 0.0% |    1 → 0 | `ConcurrentGCThread::stop` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                  | Location       |
| -----: | ----: | -----: | -------: | ----------------------- | -------------- |
| -86.1% |  -118 | 100.0% | 137 → 19 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -17.8% |   -89 | 100.0% | 501 → 412 | `Compile::Compile` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |           % |   Samples | Caller                                                                                          | Location                                             |
| -----: | ----: | ----------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -12.4% |   -63 |       99.6% | 508 → 445 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| -71.4% |    -5 | 1.4% → 0.4% |     7 → 2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088c00` |
|    new |    +1 | 0.0% → 0.2% |     0 → 1 | `unknown`                                                                                       | `<unknown>`                                          |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % |   Samples | Caller                                   | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
| -12.6% |   -64 | 99.8% → 99.6% | 507 → 443 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| -11.5% |   -56 | 95.7% → 96.6% | 486 → 430 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| -10.8% |   -52 | 94.5% → 96.2% | 480 → 428 | `guardWithCatch(Object, Object)`         | `java.lang.invoke.LambdaForm$MH`                    |
| -41.0% |   -16 |   7.7% → 5.2% |   39 → 23 | `reinvoke(Object, Object)`               | `java.lang.invoke.LambdaForm$MH`                    |
| -17.1% |    -7 |   8.1% → 7.6% |   41 → 34 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301088800`)

| Change | Delta |             % |   Samples | Caller                                           | Location                         |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | -------------------------------- |
| -11.7% |   -59 | 99.0% → 99.8% | 503 → 444 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH` |
| -11.0% |   -53 | 95.3% → 96.9% | 484 → 431 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH` |
|  -7.3% |   -28 | 76.0% → 80.4% | 386 → 358 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
|  -6.5% |   -26 | 78.1% → 83.4% | 397 → 371 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH` |
| -13.1% |    -8 | 12.0% → 11.9% |   61 → 53 | `invoke(Object, Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % |   Samples | Caller                                                                                           | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| -12.4% |   -63 |        100.0% | 507 → 444 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  -6.3% |   -22 | 68.8% → 73.6% | 349 → 327 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| -66.7% |    -4 |   1.2% → 0.5% |     6 → 2 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
| -40.0% |    -2 |   1.0% → 0.7% |     5 → 3 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % |   Samples | Caller                                           | Location                                            |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
| -11.7% |   -59 |        100.0% | 503 → 444 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| -11.8% |   -59 | 99.6% → 99.5% | 501 → 442 | `guardWithCatch(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000` |
| -10.4% |   -49 | 93.8% → 95.3% | 472 → 423 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  +1.2% |    +3 | 51.1% → 58.6% | 257 → 260 | `reinvoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
| -50.0% |    -2 |   0.8% → 0.5% |     4 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH`                    |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller              | Location       |
| -----: | ----: | -----: | --------: | ------------------- | -------------- |
| -14.7% |   -40 | 100.0% | 273 → 233 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -10.5% |   -39 | 100.0% | 370 → 331 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -43.4% |   -36 | 100.0% | 83 → 47 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -47.7% |   -31 | 100.0% | 65 → 34 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| -56.6% |   -30 | 100.0% | 53 → 23 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -49.2% |   -30 | 100.0% | 61 → 31 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| -48.4% |   -30 |        100.0% | 62 → 32 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
| -48.6% |   -18 | 59.7% → 59.4% | 37 → 19 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -13.5% |   -27 | 100.0% | 200 → 173 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -37.1% |   -26 | 100.0% | 70 → 44 | `Matcher::match` | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -57.8% |   -26 | 100.0% | 45 → 19 | `GraphBuilder::try_inline` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| -57.8% |   -26 |        100.0% | 45 → 19 | `GraphBuilder::invoke`                   | `libjvm.dylib` |
| -69.6% |   -16 | 51.1% → 36.8% |  23 → 7 | `GraphBuilder::try_method_handle_inline` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -13.0% |   -26 | 100.0% | 200 → 174 | `Compiler::compile_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -12.8% |   -24 | 100.0% | 188 → 164 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                           | Location       |
| -----: | ----: | -----: | --------: | -------------------------------- | -------------- |
| -12.3% |   -23 | 100.0% | 187 → 164 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -57.4% |   -31 | 100.0% | 54 → 23 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
| -63.6% |   -14 | 40.7% → 34.8% |  22 → 8 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
| -61.9% |   -13 | 38.9% → 34.8% |  21 → 8 | `Mutex::lock`                         | `libjvm.dylib`            |
| -75.0% |    -6 |  14.8% → 8.7% |   8 → 2 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
| +66.7% |    +2 |  5.6% → 21.7% |   3 → 5 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller   | Location       |
| -----: | ----: | -----: | ------: | -------- | -------------- |
| -47.7% |   -31 | 100.0% | 65 → 34 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -47.7% |   -31 | 100.0% | 65 → 34 | `Compilation::build_hir` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Caller                                     | Location       |
| ------: | ----: | -------------: | --------: | ------------------------------------------ | -------------- |
|  -13.4% |   -27 | 99.5% → 100.0% | 201 → 174 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
| -58.8% |   -10 | 73.9% → 87.5% |  17 → 7 | `Chunk::operator new` | `libjvm.dylib` |
| -83.3% |    -5 | 26.1% → 12.5% |   6 → 1 | `Chunk::chop`         | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                | Location       |
| -----: | ----: | -----: | -------: | --------------------- | -------------- |
| -13.2% |   -14 | 100.0% | 106 → 92 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -75.0% |    -3 | 19.0% → 12.5% |   4 → 1 | `InstanceKlass::add_to_hierarchy_impl` | `libjvm.dylib` |
|  -60.0% |    -3 | 23.8% → 25.0% |   5 → 2 | `CompileBroker::compile_method_base`   | `libjvm.dylib` |
| removed |    -2 |   9.5% → 0.0% |   2 → 0 | `ciMethod::find_monomorphic_target`    | `libjvm.dylib` |
| removed |    -2 |   9.5% → 0.0% |   2 → 0 | `CompileQueue::get`                    | `libjvm.dylib` |
|  -20.0% |    -1 | 23.8% → 50.0% |   5 → 4 | `ciMethod::ciMethod`                   | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| -15.1% |   -11 |        100.0% | 73 → 62 | `Parse::do_call`                   | `libjvm.dylib` |
| -35.5% |   -11 | 42.5% → 32.3% | 31 → 20 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller         | Location       |
| ------: | ----: | -------------: | ------: | -------------- | -------------- |
|  -50.0% |    -9 | 90.0% → 100.0% |  18 → 9 | `Arena::grow`  | `libjvm.dylib` |
| removed |    -1 |    5.0% → 0.0% |   1 → 0 | `Arena::Arena` | `libjvm.dylib` |
| removed |    -1 |    5.0% → 0.0% |   1 → 0 | `ciEnv::ciEnv` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  -66.7% |    -2 | 15.8% → 11.1% |   3 → 1 | `Matcher::Label_Root`      | `libjvm.dylib` |
| +200.0% |    +2 |  5.3% → 33.3% |   1 → 3 | `BacktraceBuilder::expand` | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `Matcher::match_tree`      | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `Arena::Arealloc`          | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `Node::out_grow`           | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location       |
| -----: | ----: | -----: | ------: | ---------------- | -------------- |
| -60.0% |    -9 | 100.0% |  15 → 6 | `Matcher::xform` | `libjvm.dylib` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % |   Samples | Caller                              | Location                                         |
| -----: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------ |
| -11.7% |   -59 |        100.0% | 503 → 444 | `main(String[])`                    | `org.codenarc.CodeNarc`                          |
|  -7.8% |   -31 | 78.7% → 82.2% | 396 → 365 | `execute()`                         | `org.codenarc.CodeNarcRunner`                    |
|  -5.8% |   -22 | 75.1% → 80.2% | 378 → 356 | `processDirectory(String, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |
| -23.7% |   -14 | 11.7% → 10.1% |   59 → 45 | `doCall(Object)`                    | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`  |
| -23.7% |   -14 | 11.7% → 10.1% |   59 → 45 | `<init>(String)`                    | `org.codenarc.ruleset.XmlFileRuleSet`            |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa000`)

| Change | Delta |             % |   Samples | Caller                             | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
| -11.8% |   -59 |        100.0% | 501 → 442 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|  -9.0% |   -38 | 84.4% → 87.1% | 423 → 385 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa800`)

| Change | Delta |      % |   Samples | Caller                          | Location                                            |
| -----: | ----: | -----: | --------: | ------------------------------- | --------------------------------------------------- |
| -11.8% |   -59 | 100.0% | 501 → 442 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00` |
| -11.8% |   -59 | 100.0% | 501 → 442 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH`                    |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aac00`)

|  Change | Delta |             % |   Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
|  -11.8% |   -59 |        100.0% | 501 → 442 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|   -9.0% |   -38 | 84.4% → 87.1% | 423 → 385 | `delegate(Object, Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH`)

| Change | Delta |             % |   Samples | Caller                                           | Location                                            |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
| -11.5% |   -56 | 99.0% → 99.3% | 485 → 429 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH`                    |
|  -5.5% |   -20 | 74.1% → 79.4% | 363 → 343 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010d4000` |
|  -4.0% |   -12 | 61.2% → 66.7% | 300 → 288 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH`                    |
| -88.9% |    -8 |   1.8% → 0.2% |     9 → 1 | `invoke(Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH`                    |
| +57.1% |    +4 |   1.4% → 2.5% |    7 → 11 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH`                    |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % |   Samples | Caller                   | Location                                 |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------- |
|  -9.9% |   -47 | 97.5% → 99.3% | 474 → 427 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| -23.1% |   -15 | 13.4% → 11.6% |   65 → 50 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| -22.0% |   -13 | 12.1% → 10.7% |   59 → 46 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| -22.0% |   -13 | 12.1% → 10.7% |   59 → 46 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |
| -12.5% |    -6 |   9.9% → 9.8% |   48 → 42 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |            % |   Samples | Caller                     | Location                                         |
| -----: | ----: | -----------: | --------: | -------------------------- | ------------------------------------------------ |
| -10.8% |   -52 |       100.0% | 481 → 429 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH`                 |
|  -6.5% |    -3 | 9.6% → 10.0% |   46 → 43 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |      % |   Samples | Caller                   | Location                         |
| -----: | ----: | -----: | --------: | ------------------------ | -------------------------------- |
| -10.8% |   -52 | 100.0% | 481 → 429 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH` |
| -10.8% |   -52 | 100.0% | 481 → 429 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |           % |   Samples | Caller                           | Location                           |
| -----: | ----: | ----------: | --------: | -------------------------------- | ---------------------------------- |
| -10.8% |   -52 |      100.0% | 481 → 429 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH`   |
| +30.0% |    +3 | 2.1% → 3.0% |   10 → 13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |              % |   Samples | Caller                               | Location                                                         |
| ------: | ----: | -------------: | --------: | ------------------------------------ | ---------------------------------------------------------------- |
|  -10.6% |   -50 | 99.8% → 100.0% | 473 → 423 | `invoke(Object, Object[])`           | `org.codehaus.groovy.reflection.CachedMethod`                    |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `getEnumConstantsShared()`           | `java.lang.Class`                                                |
|  +12.5% |    +1 |    1.7% → 2.1% |     8 → 9 | `doInvoke(Object, Object[], Method)` | `org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |      % |   Samples | Caller                           | Location                         |
| -----: | ----: | -----: | --------: | -------------------------------- | -------------------------------- |
| -10.4% |   -50 | 100.0% | 483 → 433 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
| -10.6% |   -50 | 100.0% | 473 → 423 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| -10.6% |   -50 | 100.0% | 473 → 423 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Caller                             | Location                 |
| -----: | ----: | -----: | --------: | ---------------------------------- | ------------------------ |
| -10.6% |   -50 | 100.0% | 473 → 423 | `doMethodInvoke(Object, Object[])` | `groovy.lang.MetaMethod` |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

|  Change | Delta |           % |   Samples | Caller                                                              | Location                                                                             |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
|  -10.6% |   -50 |      100.0% | 473 → 423 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`   | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`                             |
|  -29.0% |    -9 | 6.6% → 5.2% |   31 → 22 | `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl`                                                          |
|  -88.9% |    -8 | 1.9% → 0.2% |     9 → 1 | `invokeVirtual(Object, Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$DMH`                                                    |
|     new |    +2 | 0.0% → 0.5% |     0 → 2 | `setProperty(Class, Object, String, Object, boolean, boolean)`      | `groovy.lang.MetaClassImpl`                                                          |
| +100.0% |    +1 | 0.2% → 0.5% |     1 → 2 | `getProperty(Object)`                                               | `org.codehaus.groovy.runtime.metaclass.MethodMetaProperty$GetBeanMethodMetaProperty` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |      % |   Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------------------------------------- |
| -10.4% |   -50 | 100.0% | 483 → 433 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % |   Samples | Caller                          | Location                                     |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------------------------------------- |
| -10.1% |   -48 | 100.0% | 473 → 425 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |   Samples | Caller                                                  | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------------------------------- | ---------------------------------------------------- |
|  -6.7% |   -25 | 100.0% | 374 → 349 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000030118a000` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |   Samples | Caller                                    | Location                          |
| -----: | ----: | -----: | --------: | ----------------------------------------- | --------------------------------- |
|  -6.3% |   -24 | 100.0% | 380 → 356 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |   Samples | Caller                                          | Location                                     |
| -----: | ----: | -----: | --------: | ----------------------------------------------- | -------------------------------------------- |
|  -6.1% |   -23 | 100.0% | 379 → 356 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

| Change | Delta |      % |   Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------------------------------------- |
|  -6.1% |   -23 | 100.0% | 378 → 355 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % |   Samples | Caller                                          | Location                          |
| -----: | ----: | -----: | --------: | ----------------------------------------------- | --------------------------------- |
|  -5.5% |   -20 | 100.0% | 363 → 343 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)

| Change | Delta |      % | Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| -23.7% |   -14 | 100.0% | 59 → 45 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(String)` (`org.codenarc.ruleset.XmlFileRuleSet`)

| Change | Delta |      % | Samples | Caller                             | Location                                     |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------------------------------------- |
| -23.7% |   -14 | 100.0% | 59 → 45 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `buildRuleSet()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % | Samples | Caller                          | Location                                     |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------------------------------------- |
| -23.3% |   -14 | 100.0% | 60 → 46 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `loadRuleSetFile(String)` (`org.codenarc.ruleset.RuleSetUtil`)

| Change | Delta |             % | Samples | Caller                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
| -22.0% |    -9 | 69.5% → 69.6% | 41 → 32 | `invokeStatic(Object, Object)`     | `java.lang.invoke.DirectMethodHandle$Holder` |
| -22.2% |    -4 | 30.5% → 30.4% | 18 → 14 | `invokeStaticInit(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`)

| Change | Delta |      % | Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `createInitialRuleSetFromFiles()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % | Samples | Caller                          | Location                                     |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `createInitialRuleSet()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % | Samples | Caller                          | Location                                     |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

| Change | Delta |      % | Samples | Caller                             | Location                                     |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------------------------------------- |
| -22.4% |   -13 | 100.0% | 58 → 45 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

| Change | Delta |      % | Samples | Caller                                  | Location                                     |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| -23.9% |   -11 | 100.0% | 46 → 35 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `loadRuleElements(Node)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

| Change | Delta |      % | Samples | Caller                                  | Location                          |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------------------- |
| -23.9% |   -11 | 100.0% | 46 → 35 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

| Change | Delta |      % | Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| -33.3% |   -10 | 100.0% | 30 → 20 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000030102a000` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % |   Samples | Caller                                          | Location                          |
| -----: | ----: | -----: | --------: | ----------------------------------------------- | --------------------------------- |
|  -3.4% |   -10 | 100.0% | 291 → 281 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                   |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `isValidExactMethod(Class[], CachedClass[])`    | `org.codehaus.groovy.reflection.ParameterTypes`       |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `equals(Object, Object)`                        | `java.util.Objects`                                   |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `evaluate(Spliterator, boolean, IntFunction)`   | `java.util.stream.AbstractPipeline`                   |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `getReachableTarget(Transition, int)`           | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | --------------------------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                       |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `getMetaClassUnderLock()`                         | `org.codehaus.groovy.reflection.ClassInfo`                |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `binarySort(Object[], int, int, int, Comparator)` | `java.util.TimSort`                                       |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `accept(Object)`                                  | `java.util.stream.ReferencePipeline$3$1`                  |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `setGuards(Object)`                               | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
|  +92.3% |   +24 | 50.0% → 61.7% | 26 → 50 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| +200.0% |    +6 |  5.8% → 11.1% |   3 → 9 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  -40.0% |    -4 |  19.2% → 7.4% |  10 → 6 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  +50.0% |    +2 |   7.7% → 7.4% |   4 → 6 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  +33.3% |    +2 |  11.5% → 9.9% |   6 → 8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|  +50.0% |   +10 | 76.9% → 60.0% | 20 → 30 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| +133.3% |    +8 | 23.1% → 28.0% |  6 → 14 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
|     new |    +6 |  0.0% → 12.0% |   0 → 6 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  +66.7% |   +12 | 78.3% → 69.8% | 18 → 30 | `LIR_Assembler::emit_code`      | `libjvm.dylib` |
| +160.0% |    +8 | 21.7% → 30.2% |  5 → 13 | `Compilation::emit_code_epilog` | `libjvm.dylib` |

##### `TypePtr::xmeet` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +275.0% |   +11 | 66.7% → 83.3% |  4 → 15 | `TypeInstPtr::xmeet_helper`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `TypeInstPtr::remove_speculative` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |             % |   Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | --------: | ---------------------------------------- | ---------------------------------- |
|  +4.5% |    +8 | 92.3% → 90.8% | 179 → 187 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| +26.7% |    +4 |   7.7% → 9.2% |   15 → 19 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|     new |    +3 |  0.0% → 10.3% |   0 → 3 | `LIR_Assembler::emit_profile_type` | `libjvm.dylib` |
|  +50.0% |    +2 | 23.5% → 20.7% |   4 → 6 | `LIR_Assembler::emit_call`         | `libjvm.dylib` |
|  -50.0% |    -2 |  23.5% → 6.9% |   4 → 2 | `LIR_OpTypeCheck::emit_code`       | `libjvm.dylib` |
|     new |    +2 |   0.0% → 6.9% |   0 → 2 | `LIR_Assembler::logic_op`          | `libjvm.dylib` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `LIR_Assembler::emit_op1`          | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  +70.6% |   +12 | 94.4% → 96.7% | 17 → 29 | `LIR_Assembler::emit_lir_list` | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `LIR_OpProfileType::emit_code` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `LIR_OpProfileCall::emit_code` | `libjvm.dylib` |

##### `TypeInstPtr::xmeet_helper` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                   | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | -------------- |
|     new |    +5 |  0.0% → 33.3% |   0 → 5 | `Type::hashcons`                                         | `libjvm.dylib` |
|     new |    +3 |  0.0% → 20.0% |   0 → 3 | `TypePtr::xmeet`                                         | `libjvm.dylib` |
| +200.0% |    +2 | 25.0% → 20.0% |   1 → 3 | `TypeInterfaces::union_with`                             | `libjvm.dylib` |
| +100.0% |    +1 | 25.0% → 13.3% |   1 → 2 | `TypeInterfaces::intersection_with`                      | `libjvm.dylib` |
| +100.0% |    +1 | 25.0% → 13.3% |   1 → 2 | `TypePtr::MeetResult TypePtr::meet_instptr<TypeInstPtr>` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                   | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +150.0% |    +6 | 80.0% → 62.5% |  4 → 10 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib` |
|     new |    +3 |  0.0% → 18.8% |   0 → 3 | `OopRecorder::find_index`                                                                                                                                | `libjvm.dylib` |

##### `addExceptionHandler()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change | Delta |              % | Samples | Callee                                              | Location                                                         |
| ------: | ----: | -------------: | ------: | --------------------------------------------------- | ---------------------------------------------------------------- |
| +400.0% |   +12 | 75.0% → 100.0% |  3 → 15 | `catchException(MethodHandle, Class, MethodHandle)` | `java.lang.invoke.MethodHandles`                                 |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `<clinit>()`                                        | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |

##### `catchException(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandles`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------------------------------- |
| +233.3% |    +7 | 75.0% → 66.7% |  3 → 10 | `makeGuardWithCatch(MethodHandle, Class, MethodHandle)`          | `java.lang.invoke.MethodHandleImpl` |
| +400.0% |    +4 | 25.0% → 33.3% |   1 → 5 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` | `java.lang.invoke.MethodHandles`    |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  +57.1% |    +4 | 53.8% → 47.8% |  7 → 11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `G1ParScanThreadState::start_partial_objarray`                                                                               | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  +69.2% |    +9 | 68.4% → 75.9% | 13 → 22 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `fwd_copy_again`                                                                                                             | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +53.8% |    +7 | 65.0% → 66.7% | 13 → 20 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| +42.9% |    +3 | 35.0% → 33.3% |  7 → 10 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                               | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------------------- |
|     new |    +3 | 0.0% → 21.4% |   0 → 3 | `MemNode::adr_type`                                  | `libjvm.dylib`             |
|     new |    +2 | 0.0% → 14.3% |   0 → 2 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib`             |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `_platform_memset`                                   | `libsystem_platform.dylib` |
|     new |    +1 |  0.0% → 7.1% |   0 → 1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib`             |
|     new |    +1 |  0.0% → 7.1% |   0 → 1 | `VectorSet::grow`                                    | `libjvm.dylib`             |

##### `bsearch` (`libsystem_c.dylib`)

| Change | Delta |            % | Samples | Callee                   | Location       |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------- |
|    new |    +5 | 0.0% → 45.5% |   0 → 5 | `compare_immediate_pair` | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
|  +55.6% |    +5 | 50.0% → 51.9% |  9 → 14 | `Type::cmp`              | `libjvm.dylib` |
| +200.0% |    +2 |  5.6% → 11.1% |   1 → 3 | `TypeInstPtr::hash`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `TypeInstKlassPtr::hash` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `Dict::doubhash`         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `Type::uhash`            | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  +47.1% |    +8 | 85.0% → 86.2% | 17 → 25 | `Dict::Insert`        | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `TypeNarrowPtr::hash` | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `TypeFunc::hash`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.4% |   0 → 1 | `TypeInstPtr::eq`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.4% |   0 → 1 | `TypeInt::hash`       | `libjvm.dylib` |

##### `I2C/C2I adapters` (`<unknown>`)

| Change | Delta |           % | Samples | Callee                                  | Location       |
| -----: | ----: | ----------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 9.1% |   0 → 1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

##### `encoding_for_logical_immediate` (`libjvm.dylib`)

|   Change | Delta |              % | Samples | Callee                   | Location            |
| -------: | ----: | -------------: | ------: | ------------------------ | ------------------- |
| +1000.0% |   +10 | 50.0% → 100.0% |  1 → 11 | `bsearch`                | `libsystem_c.dylib` |
|  removed |    -1 |   50.0% → 0.0% |   1 → 0 | `compare_immediate_pair` | `libjvm.dylib`      |

##### `LIR_Assembler::add_call_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
| +140.0% |    +7 | 83.3% → 85.7% |  5 → 12 | `CodeEmitInfo::record_debug_info`                | `libjvm.dylib` |
| +100.0% |    +1 | 16.7% → 14.3% |   1 → 2 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |

##### `Compilation::emit_code_epilog` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| +140.0% |    +7 | 100.0% → 92.3% |  5 → 12 | `LIR_Assembler::emit_slow_case_stubs`   | `libjvm.dylib` |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `LIR_Assembler::emit_exception_entries` | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `methodOper::num_edges`              | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `Node::pipeline`                     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `compI_reg_immIAddSubNode::pipeline` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `checkCastPPNode::pipeline`          | `libjvm.dylib` |

##### `Node::remove_dead_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| +200.0% |    +2 | 50.0% → 33.3% |   1 → 3 | `Node::set_req`                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist`     | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `Unique_Node_List::remove`                | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `NodeHash::hash_delete`                   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `BarrierSetC2::enqueue_useful_gc_barrier` | `libjvm.dylib` |

##### `Assembler::operand_valid_for_logical_immediate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| +300.0% |    +6 | 100.0% → 88.9% |   2 → 8 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `LIR_Assembler::emit_slow_case_stubs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +6 | 60.0% → 75.0% |   3 → 9 | `CounterOverflowStub::emit_code`   | `libjvm.dylib` |
|  -50.0% |    -1 |  40.0% → 8.3% |   2 → 1 | `ImplicitNullCheckStub::emit_code` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `SimpleExceptionStub::emit_code`   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `RangeCheckStub::emit_code`        | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `Node::has_special_unique_user` | `libjvm.dylib` |

##### `ConstraintCastNode::Value` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                      | Location       |
| ------: | ----: | -------------: | ------: | --------------------------- | -------------- |
| +400.0% |    +4 | 100.0% → 83.3% |   1 → 5 | `TypeOopPtr::filter_helper` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee            | Location       |
| ------: | ----: | ------------: | ------: | ----------------- | -------------- |
| +200.0% |    +2 | 11.1% → 21.4% |   1 → 3 | `TypeOopPtr::eq`  | `libjvm.dylib` |
| +100.0% |    +1 | 11.1% → 14.3% |   1 → 2 | `TypeInstPtr::eq` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `RegMask::Size`                      | `libjvm.dylib` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| +300.0% |    +3 | 100.0% → 66.7% |   1 → 4 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `GraphKit::gen_instanceof` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                               | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `GraphKit::null_check_oop`                           | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `GraphKit::record_profiled_receiver_for_speculation` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Node::replace_edge`                                 | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| +100.0% |    +5 | 83.3% → 71.4% |  5 → 10 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
| +200.0% |    +2 | 16.7% → 21.4% |   1 → 3 | `G1ParScanThreadState::steal_and_trim_queue`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`    | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +133.3% |    +8 | 100.0% |  6 → 14 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `G1CodeBlobClosure::do_code_blob` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +7 | 0.0% → 87.5% |   0 → 7 | `nmethod::oops_do_process_weak`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `nmethod::oops_do_process_strong` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                                                                            | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------- | -------------- |
| +23.1% |    +3 | 100.0% → 80.0% | 13 → 16 | `G1ParScanThreadState::trim_queue_to_threshold`                                                   | `libjvm.dylib` |
|    new |    +1 |    0.0% → 5.0% |   0 → 1 | `HeapWordImpl** HeapRegion::oops_on_memregion_iterate<G1ScanCardClosure, true>`                   | `libjvm.dylib` |
|    new |    +1 |    0.0% → 5.0% |   0 → 1 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 5.0% |   0 → 1 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1ScanCardClosure>`                         | `libjvm.dylib` |
|    new |    +1 |    0.0% → 5.0% |   0 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                 | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +53.8% |    +7 | 100.0% | 13 → 20 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| +600.0% |    +6 | 33.3% → 70.0% |   1 → 7 | `IRScopeDebugInfo::record_debug_info`           | `libjvm.dylib` |
| +500.0% |    +5 | 33.3% → 60.0% |   1 → 6 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
| +100.0% |    +2 | 66.7% → 40.0% |   2 → 4 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
| +233.3% |    +7 | 60.0% → 83.3% |  3 → 10 | `IRScopeDebugInfo::record_debug_info`            | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `TemplateInterpreter::bytecode_should_reexecute` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `OopMap::deep_copy`                              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `OopMap::OopMap`                                 | `libjvm.dylib` |

##### `nmethod::oops_do_process_weak` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                      | Location                   |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | -------------------------- |
|    new |    +6 | 0.0% → 85.7% |   0 → 6 | `sys_icache_invalidate`                     | `libsystem_platform.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `G1NmethodProcessor::do_regular_processing` | `libjvm.dylib`             |

##### `Parse::adjust_map_after_if` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +400.0% |    +4 | 50.0% → 62.5% |   1 → 5 | `GraphKit::uncommon_trap`        | `libjvm.dylib` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `GraphKit::add_parse_predicate`  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `GraphKit::add_parse_predicates` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::find_edge`                | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Parse::sharpen_type_after_if`   | `libjvm.dylib` |

##### `makeGuardWithCatch(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Callee                                                                         | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------- |
| +100.0% |    +2 | 66.7% → 40.0% |   2 → 4 | `makeGuardWithCatchForm(MethodType)`                                           | `java.lang.invoke.MethodHandleImpl`          |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `changeReturnType(Class)`                                                      | `java.lang.invoke.MethodType`                |
|     new |    +2 |  0.0% → 20.0% |   0 → 2 | `asType(MethodType)`                                                           | `java.lang.invoke.MethodHandle`              |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `unboxResultHandle(Class)`                                                     | `java.lang.invoke.MethodHandleImpl`          |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |              % | Samples | Callee                       | Location                        |
| ------: | ----: | -------------: | ------: | ---------------------------- | ------------------------------- |
| +133.3% |    +4 | 100.0% → 70.0% |   3 → 7 | `bindArgumentL(int, Object)` | `java.lang.invoke.MethodHandle` |

##### `asType(MethodType)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |              % | Samples | Callee                       | Location                        |
| -----: | ----: | -------------: | ------: | ---------------------------- | ------------------------------- |
| +30.0% |    +3 | 100.0% → 81.3% | 10 → 13 | `asTypeUncached(MethodType)` | `java.lang.invoke.MethodHandle` |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `resolve_opt_virtual_call`   | `<unknown>`                     |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `asTypeCached(MethodType)`   | `java.lang.invoke.MethodHandle` |

##### `callCurrent(GroovyObject, Object[])` (`org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`)

|  Change | Delta |      % | Samples | Callee                                                            | Location                                                 |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$207`)

|  Change | Delta |      % | Samples | Callee                | Location                                           |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `each(List, Closure)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change | Delta |     % | Samples | Callee                              | Location                      |
| ------: | ----: | ----: | ------: | ----------------------------------- | ----------------------------- |
| +100.0% |    +3 | 60.0% |   3 → 6 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `getTargetBeanDescriptor()` (`java.beans.Introspector`)

|  Change | Delta |              % | Samples | Callee                       | Location                    |
| ------: | ----: | -------------: | ------: | ---------------------------- | --------------------------- |
| +100.0% |    +4 | 100.0% → 88.9% |   4 → 8 | `findCustomizerClass(Class)` | `java.beans.Introspector`   |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `<init>(Class, Class)`       | `java.beans.BeanDescriptor` |

##### `memberDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |            % | Samples | Callee                                                 | Location                                               |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 16.7% |   0 → 3 | `fieldDeclaration()`                                   | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|    new |    +1 |  0.0% → 5.6% |   0 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +1 |  0.0% → 5.6% |   0 → 1 | `modifiersOpt()`                                       | `org.apache.groovy.parser.antlr4.GroovyParser`         |

##### `classBodyDeclaration(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Callee                   | Location                                       |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------- |
| +38.5% |    +5 | 100.0% | 13 → 18 | `memberDeclaration(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce`)

|  Change | Delta |              % | Samples | Callee                     | Location                              |
| ------: | ----: | -------------: | ------: | -------------------------- | ------------------------------------- |
| +300.0% |    +6 | 66.7% → 100.0% |   2 → 8 | `invoke(Object, Object[])` | `org.codehaus.groovy.runtime.dgm$207` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `invoke(Object, Object[])` | `org.codehaus.groovy.runtime.dgm$242` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `invoke(Object, Object[])` | `org.codehaus.groovy.runtime.dgm$205` |

##### `getClassInfo(Class)` (`org.codehaus.groovy.reflection.ClassInfo`)

| Change | Delta |            % | Samples | Callee       | Location               |
| -----: | ----: | -----------: | ------: | ------------ | ---------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `get(Class)` | `java.lang.ClassValue` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|  Change | Delta |            % | Samples | Callee                                         | Location                                                       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------------------------------------------------------- |
| +100.0% |    +2 |        50.0% |   2 → 4 | `getProperties()`                              | `com.sun.beans.introspect.ClassInfo`                           |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `addPropertyDescriptors(PropertyDescriptor[])` | `java.beans.Introspector`                                      |
| +100.0% |    +1 |        25.0% |   1 → 2 | `processPropertyDescriptors()`                 | `java.beans.Introspector`                                      |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `<init>(Map$Entry, boolean)`                   | `java.beans.PropertyDescriptor`                                |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `next()`                                       | `java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet$1` |

##### `findCustomizerClass(Class)` (`java.beans.Introspector`)

| Change | Delta |              % | Samples | Callee                           | Location                           |
| -----: | ----: | -------------: | ------: | -------------------------------- | ---------------------------------- |
| +75.0% |    +3 | 100.0% → 87.5% |   4 → 7 | `findClass(String, ClassLoader)` | `com.sun.beans.finder.ClassFinder` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Callee                                                        | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------ |
| +20.0% |    +3 | 88.2% → 85.7% | 15 → 18 | `execDFA(DFA, TokenStream, int, SimulatorState)`              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|    new |    +1 |   0.0% → 4.8% |   0 → 1 | `getStartState(DFA, TokenStream, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |      % | Samples | Callee                                                          | Location                                               |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------ |
| +23.5% |    +4 | 100.0% | 17 → 21 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `scriptStatements()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |              % | Samples | Callee                                                 | Location                                               |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| +16.7% |    +3 | 100.0% → 95.5% | 18 → 21 | `scriptStatement()`                                    | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|    new |    +1 |    0.0% → 4.5% |   0 → 1 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `classBody(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |              % | Samples | Callee                                                 | Location                                               |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
|  +38.5% |    +5 | 92.9% → 100.0% | 13 → 18 | `classBodyDeclaration(int)`                            | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `classDeclaration()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |      % | Samples | Callee           | Location                                       |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------------- |
| +28.6% |    +4 | 100.0% | 14 → 18 | `classBody(int)` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|  Change | Delta |             % | Samples | Callee                                 | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------------- |
| +300.0% |    +3 | 25.0% → 36.4% |   1 → 4 | `getAstVisitor(SourceCode)`            | `org.codenarc.rule.unused.UnusedPrivateFieldRule`  |
|  +66.7% |    +2 | 75.0% → 45.5% |   3 → 5 | `applyVisitor(AstVisitor, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`   |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `getAstVisitor(SourceCode)`            | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

| Change | Delta |            % | Samples | Callee                                            | Location                                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 44.4% |   0 → 4 | `getMethodCallExpressions()`                      | `org.codenarc.source.AbstractSourceCode`                            |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.ConsecutiveLiteralAppendsAstVisitor` |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.BooleanGetBooleanAstVisitor`               |
|    new |    +1 | 0.0% → 11.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`        |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % |   Samples | Callee                      | Location                                                 |
| ------: | ----: | ------------: | --------: | --------------------------- | -------------------------------------------------------- |
| +175.0% |    +7 |   2.5% → 6.5% |    4 → 11 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  -71.4% |    -5 |   4.3% → 1.2% |     7 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|   +2.6% |    +3 | 71.2% → 70.4% | 116 → 119 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  +50.0% |    +2 |   2.5% → 3.6% |     4 → 6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSamePackageRule`    |
|  -50.0% |    -2 |   2.5% → 1.2% |     4 → 2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`)

|  Change | Delta |      % | Samples | Callee                                      | Location                                                |
| ------: | ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `callCurrent(GroovyObject, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`)

|  Change | Delta |      % | Samples | Callee                 | Location                                                |
| ------: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `call(Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `calculate(MethodNode, SourceCode)` (`org.gmetrics.metric.abc.AbcMetric`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                                 |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------------------- |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `callConstructor(Object, Object)`                         | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`  |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `call(Object, Object)`                                    | `org.codehaus.groovy.ast.GroovyClassVisitor$visitMethod` |
| +100.0% |    +1 | 50.0% → 28.6% |   1 → 2 | `callConstructor(Object, Object, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`  |

##### `getMethodCallExpressions()` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Callee                           | Location                           |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

| Change | Delta |            % | Samples | Callee                                | Location                           |
| -----: | ----: | -----------: | ------: | ------------------------------------- | ---------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `linkToCallSite(Object, int, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor(SourceCode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `loadClass(String)`                      | `java.lang.ClassLoader`            |

##### `setRuleProperties(Node, Rule)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

| Change | Delta |      % | Samples | Callee                  | Location                               |
| -----: | ----: | -----: | ------: | ----------------------- | -------------------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.ImportFromSamePackageRule`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|  Change | Delta |      % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.BlankLineBeforePackageRule`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.imports.DuplicateImportRule`)

|  Change | Delta |      % | Samples | Callee                                           | Location                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3`)

| Change | Delta |            % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ---------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectAllPrivateFields(ModuleNode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

|  Change | Delta |      % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

| Change | Delta |            % | Samples | Callee                                                        | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |

##### `methodReturnsCollection(MethodNode)` (`org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`)

| Change | Delta |             % | Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |     % |       Samples | Callee                                | Location       |
| -----: | ----: | ----: | ------------: | ------------------------------------- | -------------- |
| -21.6% |  -294 | 99.9% | 1,359 → 1,065 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
| -50.0% |    -1 |  0.1% |         2 → 1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------- | -------------- |
|  -13.8% |  -168 | 89.6% → 98.5% | 1,217 → 1,049 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  -88.4% |  -122 |  10.2% → 1.5% |      138 → 16 | `CompileQueue::get`                            | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `Compiler::compile_method`                     | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |     % |       Samples | Callee                | Location       |
| -----: | ----: | ----: | ------------: | --------------------- | -------------- |
| -19.3% |  -275 | 99.9% | 1,426 → 1,151 | `thread_native_entry` | `libjvm.dylib` |
| -50.0% |    -1 |  0.1% |         2 → 1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
| -19.3% |  -276 | 100.0% | 1,428 → 1,152 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|  Change | Delta |              % |       Samples | Callee                                  | Location       |
| ------: | ----: | -------------: | ------------: | --------------------------------------- | -------------- |
|  -19.2% |  -274 | 99.9% → 100.0% | 1,425 → 1,151 | `Thread::call_run`                      | `libjvm.dylib` |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------- | -------------- |
|  -21.7% |  -295 | 95.5% → 92.6% | 1,361 → 1,066 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  +55.8% |   +29 |   3.6% → 7.0% |       52 → 81 | `WorkerThread::run`             | `libjvm.dylib` |
|  -80.0% |    -4 |   0.4% → 0.1% |         5 → 1 | `WatcherThread::run`            | `libjvm.dylib` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  -40.0% |    -2 |   0.4% → 0.3% |         5 → 3 | `VMThread::run`                 | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ----------: | ------------------------------- | -------------- |
|  -13.6% |  -136 | 82.2% → 82.4% | 1,000 → 864 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  -13.4% |   -27 | 16.5% → 16.6% |   201 → 174 | `Compiler::compile_method`      | `libjvm.dylib` |
|     new |    +5 |   0.0% → 0.5% |       0 → 5 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  -60.0% |    -3 |   0.4% → 0.2% |       5 → 2 | `CompilationLog::log_compile`   | `libjvm.dylib` |
| removed |    -2 |   0.2% → 0.0% |       2 → 0 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee              | Location       |
| ------: | ----: | -------------: | --------: | ------------------- | -------------- |
|  -13.3% |  -132 | 99.6% → 100.0% | 996 → 864 | `Compile::Compile`  | `libjvm.dylib` |
| removed |    -3 |    0.3% → 0.0% |     3 → 0 | `Compile::~Compile` | `libjvm.dylib` |
| removed |    -1 |    0.1% → 0.0% |     1 → 0 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | -------------- |
|  -17.8% |   -89 | 50.3% → 47.7% | 501 → 412 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  -10.5% |   -39 | 37.1% → 38.3% | 370 → 331 | `Compile::Optimize`                      | `libjvm.dylib` |
|   -6.1% |    -7 | 11.5% → 12.5% | 115 → 108 | `ParseGenerator::generate`               | `libjvm.dylib` |
| +250.0% |    +5 |   0.2% → 0.8% |     2 → 7 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `ciMethod::ensure_method_data`           | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee               | Location                  |
| -----: | ----: | ------------: | -------: | -------------------- | ------------------------- |
| -86.1% |  -118 | 93.2% → 82.6% | 137 → 19 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| -75.0% |    -6 |   5.4% → 8.7% |    8 → 2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                           | Location       |
| ------: | ----: | ------------: | -------: | -------------------------------- | -------------- |
|  -88.9% |  -120 | 97.8% → 93.8% | 135 → 15 | `Monitor::wait`                  | `libjvm.dylib` |
| removed |    -2 |   1.4% → 0.0% |    2 → 0 | `Mutex::lock`                    | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |    1 → 0 | `CompilationPolicy::select_task` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.3% |    0 → 1 | `methodHandle::operator=`        | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Callee                           | Location       |
| ------: | ----: | -------------: | -------: | -------------------------------- | -------------- |
|  -88.9% |  -120 | 99.3% → 100.0% | 135 → 15 | `PlatformMonitor::wait`          | `libjvm.dylib` |
| removed |    -1 |    0.7% → 0.0% |    1 → 0 | `JavaFrameAnchor::make_walkable` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -14.7% |   -40 | 54.5% → 56.6% | 273 → 233 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| -22.5% |   -20 | 17.8% → 16.7% |   89 → 69 | `Matcher::match`                  | `libjvm.dylib` |
| -20.3% |   -12 | 11.8% → 11.4% |   59 → 47 | `PhaseOutput::Output`             | `libjvm.dylib` |
| -16.1% |   -10 | 12.4% → 12.6% |   62 → 52 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| -28.6% |    -2 |   1.4% → 1.2% |     7 → 5 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

| Change | Delta |             % |   Samples | Callee                                                           | Location                               |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------- | -------------------------------------- |
| -11.7% |   -59 | 98.2% → 99.3% | 503 → 444 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
| -71.4% |    -5 |   1.4% → 0.4% |     7 → 2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
| -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % |   Samples | Callee                                                  | Location                                        |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------- | ----------------------------------------------- |
| -12.4% |   -63 | 99.4% → 99.3% | 507 → 444 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| -16.7% |   -15 | 17.6% → 16.8% |   90 → 75 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -11.8% |   -59 | 98.6% → 99.3% | 501 → 442 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800`  |
| -11.0% |   -53 | 95.3% → 96.9% | 484 → 431 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| -10.8% |   -52 | 94.7% → 96.4% | 481 → 429 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH`                     |
| -10.1% |   -48 | 93.1% → 95.5% | 473 → 425 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -9.0% |   -38 | 82.9% → 86.1% | 421 → 383 | `delegate(Object, Object, Object)`                                                          | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000301088800`)

| Change | Delta |             % |   Samples | Callee                                                                                           | Location                                        |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| -12.4% |   -63 |        100.0% | 508 → 445 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  -8.8% |   -34 | 76.4% → 79.6% | 388 → 354 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|    new |    +2 |   0.0% → 0.4% |     0 → 2 | `invokeBasic(Object[])`                                                                          | `java.lang.invoke.MethodHandle`                 |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |              % |   Samples | Callee                                     | Location                         |
| ------: | ----: | -------------: | --------: | ------------------------------------------ | -------------------------------- |
|  -12.6% |   -64 | 100.0% → 99.8% | 507 → 443 | `invoke(Object, Object)`                   | `java.lang.invoke.LambdaForm$MH` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `invokeBasic(Object[])`                    | `java.lang.invoke.MethodHandle`  |
|     new |    +1 |    0.0% → 0.2% |     0 → 1 | `checkExactType(MethodHandle, MethodType)` | `java.lang.invoke.Invokers`      |
|     new |    +1 |    0.0% → 0.2% |     0 → 1 | `_invokeBasic`                             | `<unknown>`                      |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -11.7% |   -59 |        100.0% | 503 → 444 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000301088800` |
| -11.5% |   -56 | 96.4% → 96.6% | 485 → 429 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH`                    |
| -10.4% |   -50 | 96.0% → 97.5% | 483 → 433 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| -10.4% |   -49 | 93.8% → 95.3% | 472 → 423 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| -33.7% |   -34 | 20.1% → 15.1% |  101 → 67 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH`                    |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -34.5% |   -20 | 21.2% → 16.3% | 58 → 38 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| -32.3% |   -10 |  11.4% → 9.0% | 31 → 21 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| -58.3% |    -7 |   4.4% → 2.1% |  12 → 5 | `PhaseChaitin::Simplify`                   | `libjvm.dylib` |
| -22.2% |    -6 |   9.9% → 9.0% | 27 → 21 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| -57.1% |    -4 |   2.6% → 1.3% |   7 → 3 | `PhaseChaitin::build_ifg_virtual`          | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | -------: | ------------------------------------------ | -------------- |
| -16.4% |   -19 | 31.4% → 29.3% | 116 → 97 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| -20.6% |   -14 | 18.4% → 16.3% |  68 → 54 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| -43.5% |   -10 |   6.2% → 3.9% |  23 → 13 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|    new |    +5 |   0.0% → 1.5% |    0 → 5 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  -2.1% |    -2 | 26.2% → 28.7% |  97 → 95 | `Compile::optimize_loops`                  | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -47.7% |   -31 | 78.3% → 72.3% | 65 → 34 | `IR::IR`                                     | `libjvm.dylib` |
|  -66.7% |    -2 |   3.6% → 2.1% |   3 → 1 | `IR::compute_code`                           | `libjvm.dylib` |
| removed |    -2 |   2.4% → 0.0% |   2 → 0 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |
|  -14.3% |    -1 |  8.4% → 12.8% |   7 → 6 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `Invoke::visit`                              | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| -48.4% |   -30 | 95.4% → 94.1% | 62 → 32 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
| -33.3% |    -1 |   4.6% → 5.9% |   3 → 2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|  -57.8% |   -26 | 84.9% → 82.6% | 45 → 19 | `GraphBuilder::try_inline`                     | `libjvm.dylib` |
|  -33.3% |    -4 | 22.6% → 34.8% |  12 → 8 | `ciBytecodeStream::get_method`                 | `libjvm.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci`                | `libjvm.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `ciMethod::find_monomorphic_target`            | `libjvm.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `ciBytecodeStream::get_declared_method_holder` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  -56.6% |   -30 | 86.9% → 74.2% | 53 → 23 | `GraphBuilder::invoke`        | `libjvm.dylib` |
|  -63.6% |    -7 | 18.0% → 12.9% |  11 → 4 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|  -75.0% |    -3 |   6.6% → 3.2% |   4 → 1 | `GraphBuilder::method_return` | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `ExceptionObject::visit`      | `libjvm.dylib` |
| +100.0% |    +1 |   1.6% → 6.5% |   1 → 2 | `BlockBegin::try_merge`       | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| -49.2% |   -30 | 98.4% → 96.9% | 61 → 31 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 3.1% |   0 → 1 | `GraphBuilder::method_return`               | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                             | Location       |
| -----: | ----: | ------------: | --------: | ---------------------------------- | -------------- |
| -12.2% |   -22 | 90.5% → 91.9% | 181 → 159 | `Compilation::compile_java_method` | `libjvm.dylib` |
| -31.6% |    -6 |   9.5% → 7.5% |   19 → 13 | `ciEnv::register_method`           | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.6% |     0 → 1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  -35.7% |   -10 | 40.0% → 40.9% | 28 → 18 | `Matcher::match_tree` | `libjvm.dylib` |
|  -60.0% |    -9 | 21.4% → 13.6% |  15 → 6 | `Arena::contains`     | `libjvm.dylib` |
|  -66.7% |    -2 |   4.3% → 2.3% |   3 → 1 | `Matcher::match_sfpt` | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `CallNode::match`     | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ConPNode::Opcode`    | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
|  -48.6% |   -18 | 82.2% → 100.0% | 37 → 19 | `GraphBuilder::iterate_all_blocks`      | `libjvm.dylib` |
|  -80.0% |    -4 |   11.1% → 5.3% |   5 → 1 | `ciMethod::ensure_method_data`          | `libjvm.dylib` |
|  -42.9% |    -3 |  15.6% → 21.1% |   7 → 4 | `GraphBuilder::push_scope`              | `libjvm.dylib` |
| removed |    -1 |    2.2% → 0.0% |   1 → 0 | `DirectiveSet::should_inline`           | `libjvm.dylib` |
|  -50.0% |    -1 |    4.4% → 5.3% |   2 → 1 | `GraphBuilder::args_list_for_profiling` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| -57.8% |   -26 |        100.0% | 45 → 19 | `GraphBuilder::try_inline_full`          | `libjvm.dylib` |
| -65.2% |   -15 | 51.1% → 42.1% |  23 → 8 | `GraphBuilder::try_method_handle_inline` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                        | Location       |
| -----: | ----: | -------------: | --------: | ----------------------------- | -------------- |
| -13.5% |   -27 | 100.0% → 99.4% | 200 → 173 | `Compilation::compile_method` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `Dependencies::initialize`    | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                               | Location       |
| ------: | ----: | -------------: | --------: | ------------------------------------ | -------------- |
|  -12.3% |   -23 | 99.5% → 100.0% | 187 → 164 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -23.7% |   -14 | 31.6% → 27.4% | 59 → 45 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| removed |    -3 |   1.6% → 0.0% |   3 → 0 | `Node::is_CFG`                         | `libjvm.dylib` |
| +150.0% |    +3 |   1.1% → 3.0% |   2 → 5 | `MultiNode::is_CFG`                    | `libjvm.dylib` |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `PhiNode::pinned`                      | `libjvm.dylib` |
|   -5.7% |    -2 | 18.7% → 20.1% | 35 → 33 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |      % | Samples | Callee               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
| -57.4% |   -31 | 100.0% | 54 → 23 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -47.7% |   -31 | 100.0% | 65 → 34 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -47.7% |   -31 | 100.0% | 65 → 34 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                         | Location       |
| ------: | ----: | -------------: | --------: | ---------------------------------------------- | -------------- |
|  -13.0% |   -26 | 99.0% → 100.0% | 200 → 174 | `Compilation::Compilation`                     | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `ExceptionHandlerTable::ExceptionHandlerTable` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                              | Location                  |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------------- |
|  -63.6% |   -14 | 95.7% → 100.0% |  22 → 8 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
| removed |    -1 |    4.3% → 0.0% |   1 → 0 | `pthread_self`                      | `libsystem_pthread.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | -------------- |
|  -16.9% |   -11 | 61.3% → 58.7% | 65 → 54 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  -15.1% |   -11 | 68.9% → 67.4% | 73 → 62 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
|  -25.0% |    -7 | 26.4% → 22.8% | 28 → 21 | `Compile::call_generator`                             | `libjvm.dylib` |
|  -57.1% |    -4 |   6.6% → 3.3% |   7 → 3 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
| +300.0% |    +3 |   0.9% → 4.3% |   1 → 4 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -61.9% |   -13 | 100.0% |  21 → 8 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -15.5% |   -11 | 97.3% → 96.8% | 71 → 60 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  -35.5% |   -11 | 42.5% → 32.3% | 31 → 20 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `GraphKit::GraphKit`               | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ciMethod::get_method_at_bci`      | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location                  |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------- |
|  -58.8% |   -10 | 85.0% → 77.8% |  17 → 7 | `ThreadCritical::ThreadCritical`  | `libjvm.dylib`            |
| removed |    -2 |  10.0% → 0.0% |   2 → 0 | `ThreadCritical::~ThreadCritical` | `libjvm.dylib`            |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `pthread_self`                    | `libsystem_pthread.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                | Location       |
| -----: | ----: | -------------: | ------: | --------------------- | -------------- |
| -50.0% |    -9 | 94.7% → 100.0% |  18 → 9 | `Chunk::operator new` | `libjvm.dylib` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |           % |   Samples | Callee                           | Location                                            |
| ------: | ----: | ----------: | --------: | -------------------------------- | --------------------------------------------------- |
|  -11.7% |   -59 |      100.0% | 503 → 444 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `guard(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa000`)

|  Change | Delta |             % |   Samples | Callee                                    | Location                                     |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | -------------------------------------------- |
|  -11.8% |   -59 |        100.0% | 501 → 442 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH`             |
|   -6.3% |   -24 | 75.8% → 80.5% | 380 → 356 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH`            |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH`            |
|  -25.0% |    -1 |   0.8% → 0.7% |     4 → 3 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aa800`)

|  Change | Delta |             % |   Samples | Callee                                   | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
|  -11.8% |   -59 |        100.0% | 501 → 442 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa000` |
|  -11.8% |   -59 |        100.0% | 501 → 442 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000003010aac00` |
|   +1.2% |    +3 | 51.3% → 58.8% | 257 → 260 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `maybeStopCounting(Object)`              | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000003010aac00`)

| Change | Delta |             % |   Samples | Callee                             | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
| -11.8% |   -59 |        100.0% | 501 → 442 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010aa800` |
|  -9.0% |   -38 | 84.4% → 87.1% | 423 → 385 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH`                    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH`)

| Change | Delta |             % |   Samples | Callee                                     | Location                                       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | ---------------------------------------------- |
| -23.1% |   -25 | 22.0% → 19.2% |  108 → 83 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |
|  -6.1% |   -23 | 77.1% → 82.2% | 378 → 355 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$1076`         |
|  -5.5% |   -20 | 74.1% → 79.4% | 363 → 343 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| -23.7% |   -14 | 12.0% → 10.4% |   59 → 45 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$1008`         |
|  -3.4% |   -10 | 59.4% → 65.0% | 291 → 281 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |           % |   Samples | Callee                   | Location                         |
| -----: | ----: | ----------: | --------: | ------------------------ | -------------------------------- |
| -11.5% |   -56 |      100.0% | 486 → 430 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
| +30.0% |    +3 | 2.1% → 3.0% |   10 → 13 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % |   Samples | Callee                            | Location                                     |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------------------------------------- |
| -10.8% |   -52 |         99.8% | 480 → 428 | `invoke(Object, Object)`          | `java.lang.invoke.LambdaForm$MH`             |
| -21.9% |   -14 | 13.3% → 11.7% |   64 → 50 | `invokeVirtual(Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder` |
| -19.7% |   -12 | 12.7% → 11.4% |   61 → 49 | `invokeSpecial(Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder` |
| -40.0% |    -2 |   1.0% → 0.7% |     5 → 3 | `invokeInterface(Object, Object)` | `java.lang.invoke.LambdaForm$DMH`            |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |           % |   Samples | Callee                           | Location                                            |
| ------: | ----: | ----------: | --------: | -------------------------------- | --------------------------------------------------- |
|  -10.8% |   -52 |      100.0% | 481 → 429 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH`                    |
|  -10.8% |   -52 |      100.0% | 481 → 429 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH`                    |
|  -41.0% |   -16 | 8.1% → 5.4% |   39 → 23 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -3 | 0.6% → 0.0% |     3 → 0 | `maybeStopCounting(Object)`      | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `getTarget()`                    | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |           % |   Samples | Callee                     | Location                         |
| ------: | ----: | ----------: | --------: | -------------------------- | -------------------------------- |
|  -10.8% |   -52 |      100.0% | 481 → 429 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
| +133.3% |    +4 | 0.6% → 1.6% |     3 → 7 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |              % |   Samples | Callee                     | Location                                          |
| -----: | ----: | -------------: | --------: | -------------------------- | ------------------------------------------------- |
| -10.6% |   -50 | 99.8% → 100.0% | 473 → 423 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |           % |   Samples | Callee                                                      | Location                                                     |
| ------: | ----: | ----------: | --------: | ----------------------------------------------------------- | ------------------------------------------------------------ |
|  -10.4% |   -50 |      100.0% | 483 → 433 | `execute(String[])`                                         | `org.codenarc.CodeNarc`                                      |
| removed |    -4 | 0.8% → 0.0% |     4 → 0 | `calculateFunctions(Collection)`                            | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`    |
| removed |    -3 | 0.6% → 0.0% |     3 → 0 | `super$2$visitMethodCallExpression(MethodCallExpression)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`           |
|  -66.7% |    -2 | 0.6% → 0.2% |     3 → 1 | `super$3$visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  -66.7% |    -2 | 0.6% → 0.2% |     3 → 1 | `writeTitle(Writer)`                                        | `org.codenarc.report.TextReportWriter`                       |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |              % |   Samples | Callee                                                           | Location                                            |
| -----: | ----: | -------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| -10.4% |   -49 | 99.8% → 100.0% | 472 → 423 | `invokeExact_MT(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  -6.3% |   -25 |  83.3% → 87.2% | 394 → 369 | `invokeExact_MT(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000301121400` |
|  -6.4% |   -24 |  79.5% → 83.2% | 376 → 352 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000030103c000` |
| -40.0% |    -2 |    1.1% → 0.7% |     5 → 3 | `invokeExact_MT(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|  Change | Delta |           % |   Samples | Callee                         | Location                                          |
| ------: | ----: | ----------: | --------: | ------------------------------ | ------------------------------------------------- |
|  -10.6% |   -50 |      100.0% | 473 → 423 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `checkReceiver(Object)`        | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Callee                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| -10.6% |   -50 | 100.0% | 473 → 423 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

| Change | Delta |           % |   Samples | Callee                     | Location                                              |
| -----: | ----: | ----------: | --------: | -------------------------- | ----------------------------------------------------- |
| -10.6% |   -50 |      100.0% | 473 → 423 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod`         |
| -88.9% |    -8 | 1.9% → 0.2% |     9 → 1 | `invoke(Object, Object[])` | `org.codehaus.groovy.runtime.dgmimpl.NumberNumberDiv` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|  Change | Delta |             % |   Samples | Callee                                                           | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------- |
|   -9.9% |   -47 | 98.1% → 98.6% | 474 → 427 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`              |
|  -20.0% |    -1 |   1.0% → 0.9% |     5 → 4 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `invokeClosure(Object, Object[])`                                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |             % |   Samples | Callee                                           | Location                               |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | -------------------------------------- |
|  -7.8% |   -31 | 83.7% → 85.9% | 396 → 365 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`     |
| -23.1% |   -15 | 13.7% → 11.8% |   65 → 50 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`     |
| -25.0% |    -3 |   2.5% → 2.1% |    12 → 9 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`     |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `findMethodHandleType(Class, Class[])`           | `java.lang.invoke.MethodHandleNatives` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |             % |   Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  -5.5% |   -20 | 97.1% → 98.3% | 363 → 343 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -50.0% |    -5 |   2.7% → 1.4% |    10 → 5 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change | Delta |              % |   Samples | Callee                                           | Location                           |
| ------: | ----: | -------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|   -6.1% |   -23 | 99.7% → 100.0% | 379 → 356 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change | Delta |              % |   Samples | Callee                                           | Location                           |
| ------: | ----: | -------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|   -5.8% |   -22 | 99.7% → 100.0% | 378 → 356 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |    0.0% → 0.3% |     0 → 1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

| Change | Delta |             % |   Samples | Callee                                                   | Location                           |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | ---------------------------------- |
|  -6.7% |   -25 | 98.9% → 98.3% | 374 → 349 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  -6.1% |   -23 |         99.7% | 377 → 354 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| -50.0% |    -1 |   0.5% → 0.3% |     2 → 1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % |   Samples | Callee                                                               | Location                                                                   |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -4.3% |   -13 | 82.4% → 83.4% | 299 → 286 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| -66.7% |    -6 |   2.5% → 0.9% |     9 → 3 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  -5.7% |    -3 |         14.6% |   53 → 50 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `I2C/C2I adapters`                                                   | `<unknown>`                                                                |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -23.7% |   -14 | 100.0% | 59 → 45 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(String)` (`org.codenarc.ruleset.XmlFileRuleSet`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -23.7% |   -14 | 100.0% | 59 → 45 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `buildRuleSet()` (`org.codenarc.CodeNarcRunner`)

|  Change | Delta |              % | Samples | Callee                                   | Location                           |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | ---------------------------------- |
|  -22.0% |   -13 | 98.3% → 100.0% | 59 → 46 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `loadRuleSetFile(String)` (`org.codenarc.ruleset.RuleSetUtil`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `createInitialRuleSetFromFiles()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `createInitialRuleSet()` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % | Samples | Callee                           | Location                           |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------- |
| -22.0% |   -13 | 100.0% | 59 → 46 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

| Change | Delta |             % | Samples | Callee                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| -21.8% |   -12 | 94.8% → 95.6% | 55 → 43 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| -33.3% |    -1 |   5.2% → 4.4% |   3 → 2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

| Change | Delta |             % | Samples | Callee                                           | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| -29.4% |   -10 | 73.9% → 68.6% | 34 → 24 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| -25.0% |    -2 | 17.4% → 17.1% |   8 → 6 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| +25.0% |    +1 |  8.7% → 14.3% |   4 → 5 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `loadRuleElements(Node)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

| Change | Delta |      % | Samples | Callee                                   | Location                           |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| -23.9% |   -11 | 100.0% | 46 → 35 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| -33.3% |   -10 | 100.0% | 30 → 20 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000003010c8400` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % |   Samples | Callee                                         | Location                                                             |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | -------------------------------------------------------------------- |
|   +5.9% |   +12 | 69.8% → 76.5% | 203 → 215 | `linkToCallSite(Object, Object, Object)`       | `java.lang.invoke.Invokers$Holder`                                   |
|  -14.5% |    -9 | 21.3% → 18.9% |   62 → 53 | `linkToCallSite(Object, Object, long, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000301332c00`                  |
|  -80.0% |    -8 |   3.4% → 0.7% |    10 → 2 | `linkToCallSite(Object, long, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000030132f000`                  |
|  -50.0% |    -2 |   1.4% → 0.7% |     4 → 2 | `linkToCallSite(long, long, Object)`           | `java.lang.invoke.Invokers$Holder`                                   |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `longUnbox(Object)`                            | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +7 | 0.4% → 0.9% |  7 → 14 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                       |
| +200.0% |    +6 | 0.2% → 0.6% |   3 → 9 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `Compile::disconnect_useless_nodes` (`libjvm.dylib`) ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `RegMask::is_misaligned_pair` (`libjvm.dylib`) ← `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +5 | 0.0% → 0.3% |   0 → 5 | `sys_icache_invalidate` (`libsystem_platform.dylib`) ← `nmethod::oops_do_process_weak` (`libjvm.dylib`) ← `G1CodeBlobClosure::do_code_blob` ← `G1ScanAndCountCodeBlobClosure::do_code_blob` ← `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` ← `G1CodeRootSet::nmethods_do` ← `G1ScanCodeRootsClosure::do_heap_region` ← `G1CollectedHeap::par_iterate_regions_array` ← `G1RemSet::scan_collection_set_code_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                       |
| +100.0% |    +4 | 0.2% → 0.5% |   4 → 8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `PhaseChaitin::merge_multidefs` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                       |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                                                          |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `Matcher::find_shared` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `PhaseIdealLoop::get_early_ctrl` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                              |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `PhaseChaitin::raise_pressure` (`libjvm.dylib`) ← `PhaseChaitin::compute_initial_block_pressure` ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                  |
| +300.0% |    +3 | 0.1% → 0.2% |   1 → 4 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                        |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `LinearScan::assign_reg_num` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`) ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`) ← `G1ParScanThreadState::trim_queue_to_threshold` ← `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` ← `ClassLoaderData::oops_do` ← `G1CLDScanClosure::do_cld` ← `ClassLoaderDataGraph::roots_cld_do` ← `G1RootProcessor::process_java_roots` ← `G1RootProcessor::evacuate_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                     |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::pinned` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`) ← `DebugInformationRecorder::describe_scope` ← `NonSafepointEmitter::emit_non_safepoint` ← `NonSafepointEmitter::observe_instruction` ← `PhaseOutput::fill_buffer` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                       |
|  +28.6% |    +2 | 0.4% → 0.6% |   7 → 9 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                 |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `PhaseIterGVN::transform_old` (`libjvm.dylib`) ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                     |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change | Delta |           % |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -91.1% |  -113 | 6.3% → 0.7% | 124 → 11 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                |
|  -36.6% |   -15 | 2.1% → 1.6% |  41 → 26 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                              |
|  -76.9% |   -10 | 0.7% → 0.2% |   13 → 3 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                               |
|  -69.2% |    -9 | 0.7% → 0.2% |   13 → 4 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|  -60.0% |    -9 | 0.8% → 0.4% |   15 → 6 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                |
|  -75.0% |    -6 | 0.4% → 0.1% |    8 → 2 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `_pthread_cond_wait` ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                    |
|  -33.3% |    -5 | 0.8% → 0.6% |  15 → 10 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                   |
|  -29.4% |    -5 | 0.9% → 0.7% |  17 → 12 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                            |
| removed |    -4 | 0.2% → 0.0% |    4 → 0 | `PhaseCFG::schedule_late` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                         |
|  -13.8% |    -4 |        1.5% |  29 → 25 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                 |
|  -22.2% |    -4 |        0.9% |  18 → 14 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                    |
|  -36.4% |    -4 | 0.6% → 0.4% |   11 → 7 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                  |
|  -44.4% |    -4 | 0.5% → 0.3% |    9 → 5 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                         |
|  -44.4% |    -4 | 0.5% → 0.3% |    9 → 5 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                               |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                  |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                          |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `PhaseIFG::remove_node` (`libjvm.dylib`) ← `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                 |
|  -66.7% |    -4 | 0.3% → 0.1% |    6 → 2 | `PhaseCFG::schedule_local` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                        |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run`                                                                                                                                                                                                                        |
| removed |    -4 | 0.2% → 0.0% |    4 → 0 | `__psynch_mutexdrop` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_unlock_slow` (`libsystem_pthread.dylib`) ← `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                         |
