# Sampling profile diff

2,694 samples → 2,710 samples (+16 samples, +0.6%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +0.6% |   +15 | 99.8% → 99.7% | 2,688 → 2,703 |
| stdlib   | +16.7% |    +1 |   0.2% → 0.3% |         6 → 7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                                 | Location                                                      |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|   +0.9% |   +11 | 47.8% → 48.0% | 1,289 → 1,300 | `__psynch_cvwait()`                                                                                      | libsystem_kernel.dylib                                        |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `I2C/C2I adapters(0xbb)()`                                                                               | `<unknown>`                                                   |
| +300.0% |    +3 |   0.0% → 0.1% |         1 → 4 | `tlv_get_addr()`                                                                                         | libdyld.dylib                                                 |
| +300.0% |    +3 |   0.0% → 0.1% |         1 → 4 | `LinearScanWalker::free_collect_inactive_fixed()`                                                        | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseChaitin::build_ifg_physical()`                                                                     | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `Matcher::Label_Root()`                                                                                  | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `Node::remove_dead_region()`                                                                             | libjvm.dylib                                                  |
| +200.0% |    +2 |   0.0% → 0.1% |         1 → 3 | `PhaseChaitin::gather_lrg_masks()`                                                                       | libjvm.dylib                                                  |
|  +50.0% |    +2 |   0.1% → 0.2% |         4 → 6 | `SymbolTable::do_lookup()`                                                                               | libjvm.dylib                                                  |
| +200.0% |    +2 |   0.0% → 0.1% |         1 → 3 | `inflate_table()`                                                                                        | libzip.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `SymbolTable::lookup_shared()`                                                                           | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>()` | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `sys_icache_invalidate()`                                                                                | libsystem_platform.dylib                                      |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `checkAssertions()`                                                                                      | org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `RegionNode::is_unreachable_from_root()`                                                                 | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal()`                                                   | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseIdealLoop::compute_lca_of_uses()`                                                                  | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `Node::dominates()`                                                                                      | libjvm.dylib                                                  |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges()`                                     | libjvm.dylib                                                  |
|     new |    +1 |          0.0% |         0 → 1 | `PhaseCFG::remove_empty_blocks()`                                                                        | libjvm.dylib                                                  |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                         | Location                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ------------------------ |
|  -60.0% |    -3 |   0.2% → 0.1% |     5 → 2 | `IndexSetIterator::advance_and_next()`                                                           | libjvm.dylib             |
|  -66.7% |    -2 |   0.1% → 0.0% |     3 → 1 | `PhaseChaitin::post_allocate_copy_removal()`                                                     | libjvm.dylib             |
|  -66.7% |    -2 |   0.1% → 0.0% |     3 → 1 | `PhaseIdealLoop::build_loop_early()`                                                             | libjvm.dylib             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `Type::cmp()`                                                                                    | libjvm.dylib             |
|  -66.7% |    -2 |   0.1% → 0.0% |     3 → 1 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>()` | libjvm.dylib             |
|  -50.0% |    -2 |          0.1% |     4 → 2 | `InstanceKlass::find_method_index()`                                                             | libjvm.dylib             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `MethodData::initialize_data()`                                                                  | libjvm.dylib             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `LinearScan::build_intervals()`                                                                  | libjvm.dylib             |
|  -66.7% |    -2 |   0.1% → 0.0% |     3 → 1 | `_platform_memset()`                                                                             | libsystem_platform.dylib |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `ValueRecorder<Metadata*>::maybe_find_index()`                                                   | libjvm.dylib             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `LinearScanWalker::free_collect_inactive_any()`                                                  | libjvm.dylib             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `inflate()`                                                                                      | libzip.dylib             |
|   -0.1% |    -1 | 36.3% → 36.1% | 979 → 978 | `semaphore_wait_trap()`                                                                          | libsystem_kernel.dylib   |
| removed |    -1 |          0.0% |     1 → 0 | `PhaseChaitin::build_ifg_virtual()`                                                              | libjvm.dylib             |
|  -50.0% |    -1 |   0.1% → 0.0% |     2 → 1 | `Node::clone()`                                                                                  | libjvm.dylib             |
|  -16.7% |    -1 |          0.2% |     6 → 5 | `PhaseChaitin::Split()`                                                                          | libjvm.dylib             |
| removed |    -1 |          0.0% |     1 → 0 | `TypeTuple::hash()`                                                                              | libjvm.dylib             |
|  -50.0% |    -1 |   0.1% → 0.0% |     2 → 1 | `Dict::Insert()`                                                                                 | libjvm.dylib             |
| removed |    -1 |          0.0% |     1 → 0 | `posix_madvise()`                                                                                | libsystem_kernel.dylib   |
| removed |    -1 |          0.0% |     1 → 0 | `IndexSet::initialize()`                                                                         | libjvm.dylib             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                         | Location                                                                                                                         |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
|     new |   +74 |   0.0% → 2.7% |        0 → 74 | `invokeStatic(Object, Object)`                   | java.lang.invoke.LambdaForm$DMH.0x0000000501008000                                                                               |
|     new |   +74 |   0.0% → 2.7% |        0 → 74 | `invoke(Object, Object, Object)`                 | java.lang.invoke.LambdaForm$MH.0x0000000501009400                                                                                |
|     new |   +20 |   0.0% → 0.7% |        0 → 20 | `invoke()`                                       | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000000501655e10          |
|     new |   +14 |   0.0% → 0.5% |        0 → 14 | `invoke()`                                       | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000005016b22e8          |
|   +0.5% |   +11 | 82.9% → 82.8% | 2,234 → 2,245 | `_pthread_start()`                               | libsystem_pthread.dylib                                                                                                          |
|   +0.5% |   +11 | 82.9% → 82.8% | 2,234 → 2,245 | `thread_start()`                                 | libsystem_pthread.dylib                                                                                                          |
|   +0.9% |   +11 | 47.8% → 48.0% | 1,289 → 1,300 | `__psynch_cvwait()`                              | libsystem_kernel.dylib                                                                                                           |
|   +0.5% |   +10 | 79.4% → 79.3% | 2,140 → 2,150 | `Thread::call_run()`                             | libjvm.dylib                                                                                                                     |
|   +0.5% |   +10 | 79.4% → 79.3% | 2,140 → 2,150 | `thread_native_entry()`                          | libjvm.dylib                                                                                                                     |
|   +0.9% |    +9 | 37.6% → 37.7% | 1,012 → 1,021 | `PlatformMonitor::wait()`                        | libjvm.dylib                                                                                                                     |
|  +24.2% |    +8 |   1.2% → 1.5% |       33 → 41 | `Compile::Optimize()`                            | libjvm.dylib                                                                                                                     |
|  +80.0% |    +8 |   0.4% → 0.7% |       10 → 18 | `PhaseIterGVN::transform_old()`                  | libjvm.dylib                                                                                                                     |
|  +80.0% |    +8 |   0.4% → 0.7% |       10 → 18 | `PhaseIterGVN::optimize()`                       | libjvm.dylib                                                                                                                     |
|   +1.1% |    +8 | 27.4% → 27.5% |     737 → 745 | `Monitor::wait_without_safepoint_check()`        | libjvm.dylib                                                                                                                     |
|  +43.8% |    +7 |   0.6% → 0.8% |       16 → 23 | `PhaseIdealLoop::optimize()`                     | libjvm.dylib                                                                                                                     |
| +350.0% |    +7 |   0.1% → 0.3% |         2 → 9 | `ciEnv::register_method()`                       | libjvm.dylib                                                                                                                     |
| +200.0% |    +6 |   0.1% → 0.3% |         3 → 9 | `ClassFileParser::parse_constant_pool_entries()` | libjvm.dylib                                                                                                                     |
|     new |    +6 |   0.0% → 0.2% |         0 → 6 | `invoke()`                                       | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x00000005016b2790 |
|   +5.1% |    +5 |   3.6% → 3.8% |      98 → 103 | `Compile::Compile()`                             | libjvm.dylib                                                                                                                     |
|   +5.1% |    +5 |   3.6% → 3.8% |      98 → 103 | `C2Compiler::compile_method()`                   | libjvm.dylib                                                                                                                     |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                    | Location                                                                                                                |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |   -74 | 2.7% → 0.0% |  74 → 0 | `invokeStatic(Object, Object)`                                                                              | java.lang.invoke.LambdaForm$DMH.0x000000f801008000                                                                      |
| removed |   -74 | 2.7% → 0.0% |  74 → 0 | `invoke(Object, Object, Object)`                                                                            | java.lang.invoke.LambdaForm$MH.0x000000f801009400                                                                       |
| removed |   -20 | 0.7% → 0.0% |  20 → 0 | `invoke()`                                                                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f801655e10 |
| removed |   -14 | 0.5% → 0.0% |  14 → 0 | `invoke()`                                                                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f8016b22e8 |
|  -22.2% |   -10 | 1.7% → 1.3% | 45 → 35 | `Compilation::compile_java_method()`                                                                        | libjvm.dylib                                                                                                            |
|  -29.2% |    -7 | 0.9% → 0.6% | 24 → 17 | `Compilation::emit_lir()`                                                                                   | libjvm.dylib                                                                                                            |
|  -63.6% |    -7 | 0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_bytecodes_for_block()`                                                               | libjvm.dylib                                                                                                            |
|  -63.6% |    -7 | 0.4% → 0.1% |  11 → 4 | `GraphBuilder::iterate_all_blocks()`                                                                        | libjvm.dylib                                                                                                            |
|  -31.6% |    -6 | 0.7% → 0.5% | 19 → 13 | `LinearScan::do_linear_scan()`                                                                              | libjvm.dylib                                                                                                            |
|  -54.5% |    -6 | 0.4% → 0.2% |  11 → 5 | `GraphBuilder::GraphBuilder()`                                                                              | libjvm.dylib                                                                                                            |
|  -54.5% |    -6 | 0.4% → 0.2% |  11 → 5 | `IRScope::IRScope()`                                                                                        | libjvm.dylib                                                                                                            |
|  -54.5% |    -6 | 0.4% → 0.2% |  11 → 5 | `IR::IR()`                                                                                                  | libjvm.dylib                                                                                                            |
|  -54.5% |    -6 | 0.4% → 0.2% |  11 → 5 | `accept(IrVisitor, Object)`                                                                                 | org.jetbrains.kotlin.ir.expressions.IrBlockBody                                                                         |
|  -17.2% |    -5 | 1.1% → 0.9% | 29 → 24 | `PhaseChaitin::Register_Allocate()`                                                                         | libjvm.dylib                                                                                                            |
|  -83.3% |    -5 | 0.2% → 0.0% |   6 → 1 | `Dict::Insert()`                                                                                            | libjvm.dylib                                                                                                            |
|  -83.3% |    -5 | 0.2% → 0.0% |   6 → 1 | `Type::hashcons()`                                                                                          | libjvm.dylib                                                                                                            |
|  -62.5% |    -5 | 0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline_full()`                                                                           | libjvm.dylib                                                                                                            |
|  -62.5% |    -5 | 0.3% → 0.1% |   8 → 3 | `GraphBuilder::try_inline()`                                                                                | libjvm.dylib                                                                                                            |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler                                                          |
|  -38.5% |    -5 | 0.5% → 0.3% |  13 → 8 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                        | org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask                                                    |
