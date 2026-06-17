# Sampling profile diff

1,307 samples → 1,331 samples (+24 samples, +1.8%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +1.2% |   +15 | 98.9% → 98.3% | 1,293 → 1,308 |
| stdlib   | +64.3% |    +9 |   1.1% → 1.7% |       14 → 23 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                   | Location                       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| +157.1% |   +11 | 0.5% → 1.4% |  7 → 18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>()` | libjvm.dylib                   |
|  +38.1% |    +8 | 1.6% → 2.2% | 21 → 29 | `SymbolTable::do_lookup()`                                                                                                                                 | libjvm.dylib                   |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed()`                                                                                                          | libjvm.dylib                   |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical()`                                                                                                                       | libjvm.dylib                   |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `trampoline_stub_Relocation::get_trampoline_for()`                                                                                                         | libjvm.dylib                   |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `PhaseIdealLoop::Dominators()`                                                                                                                             | libjvm.dylib                   |
|  +23.8% |    +5 | 1.6% → 2.0% | 21 → 26 | `tlv_get_addr()`                                                                                                                                           | libdyld.dylib                  |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy()`                                                                                                                               | libjvm.dylib                   |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)()`                                                                                                                                  | `<unknown>`                    |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `ClassFileParser::skip_over_field_signature()`                                                                                                             | libjvm.dylib                   |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::xform()`                                                                                                                                         | libjvm.dylib                   |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split()`                                                                                                                                    | libjvm.dylib                   |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `sys_icache_invalidate()`                                                                                                                                  | libsystem_platform.dylib       |
| +200.0% |    +4 | 0.2% → 0.5% |   2 → 6 | `fwd_copy_again()`                                                                                                                                         | libjvm.dylib                   |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `sanitizeStackTrace(Throwable)`                                                                                                                            | kotlin.jvm.internal.Intrinsics |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MachSpillCopyNode::ideal_reg()`                                                                                                                           | libjvm.dylib                   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GraphBuilder::invoke()`                                                                                                                                   | libjvm.dylib                   |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout()`                                                                                                                                 | libjvm.dylib                   |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Type::cmp()`                                                                                                                                              | libjvm.dylib                   |
|  +60.0% |    +3 | 0.4% → 0.6% |   5 → 8 | `_platform_memmove()`                                                                                                                                      | libsystem_platform.dylib       |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                | Location                 |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------- | ------------------------ |
|  -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `__psynch_cvwait()`                                                                     | libsystem_kernel.dylib   |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG()`                                                                   | libjvm.dylib             |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next()`                                                  | libjvm.dylib             |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `GraphBuilder::iterate_bytecodes_for_block()`                                           | libjvm.dylib             |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `_platform_memset()`                                                                    | libsystem_platform.dylib |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `LinearScan::build_intervals()`                                                         | libjvm.dylib             |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Node_Array::insert()`                                                                  | libjvm.dylib             |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `Unique_Node_List::remove()`                                                            | libjvm.dylib             |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `semaphore_wait_trap()`                                                                 | libsystem_kernel.dylib   |
|   -7.4% |    -4 | 4.1% → 3.8% | 54 → 50 | `inflate_fast()`                                                                        | libzip.dylib             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `_platform_memcmp()`                                                                    | libsystem_platform.dylib |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseIterGVN::transform_old()`                                                         | libjvm.dylib             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `_platform_memchr()`                                                                    | libsystem_platform.dylib |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::partial_latency_of_defs()`                                                   | libjvm.dylib             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `RegMask::is_aligned_pairs()`                                                           | libjvm.dylib             |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `DebugInformationRecorder::describe_scope()`                                            | libjvm.dylib             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `NullCheckEliminator::iterate_one()`                                                    | libjvm.dylib             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Dictionary::find()`                                                                    | libjvm.dylib             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_range()` | libjvm.dylib             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `OopMapSort::sort()`                                                                    | libjvm.dylib             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                                           | Location                                                                                                                                                                     |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |  +360 |  0.0% → 27.0% |   0 → 360 | `invokeStatic(Object, Object)`                                                                     | java.lang.invoke.LambdaForm$DMH.0x000000a801008000                                                                                                                           |
|    new |  +360 |  0.0% → 27.0% |   0 → 360 | `invoke(Object, Object, Object)`                                                                   | java.lang.invoke.LambdaForm$MH.0x000000a801009400                                                                                                                            |
|    new |   +96 |   0.0% → 7.2% |    0 → 96 | `invoke()`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016566d0                                                      |
|    new |   +68 |   0.0% → 5.1% |    0 → 68 | `invoke()`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090                                                      |
|  +9.1% |   +25 | 21.0% → 22.5% | 275 → 300 | `Compile::Code_Gen()`                                                                              | libjvm.dylib                                                                                                                                                                 |
|    new |   +24 |   0.0% → 1.8% |    0 → 24 | `invoke()`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x000000a8016b3538                                             |
|    new |   +23 |   0.0% → 1.7% |    0 → 23 | `invoke()`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer$$Lambda.0x000000a801656908 |
|  +2.7% |   +21 | 60.6% → 61.1% | 792 → 813 | `CompileBroker::invoke_compiler_on_method()`                                                       | libjvm.dylib                                                                                                                                                                 |
|  +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                                                                        |
|  +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                    | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                                                                        |
|  +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                                                                                                         |
|  +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                                                                                   |
|  +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | java.lang.invoke.Invokers$Holder                                                                                                                                             |
|  +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invokeImpl(Object, Object[])`                                                                     | jdk.internal.reflect.DirectMethodHandleAccessor                                                                                                                              |
|  +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                         | jdk.internal.reflect.DirectMethodHandleAccessor                                                                                                                              |
|  +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                         | java.lang.reflect.Method                                                                                                                                                     |
|  +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | org.jetbrains.kotlin.cli.common.CLICompiler                                                                                                                                  |
|  +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | org.jetbrains.kotlin.cli.common.CLICompiler                                                                                                                                  |
|  +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                     | org.jetbrains.kotlin.cli.common.CLICompiler                                                                                                                                  |
|  +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                                                                        |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                       | Location                                                                                                                                                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -341 | 26.1% → 0.0% | 341 → 0 | `invokeStatic(Object, Object)`                                                 | java.lang.invoke.LambdaForm$DMH.0x000000e801008000                                                                                                                           |
| removed |  -341 | 26.1% → 0.0% | 341 → 0 | `invoke(Object, Object, Object)`                                               | java.lang.invoke.LambdaForm$MH.0x000000e801009400                                                                                                                            |
| removed |   -88 |  6.7% → 0.0% |  88 → 0 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e8016566d0                                                      |
| removed |   -62 |  4.7% → 0.0% |  62 → 0 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e8016b3090                                                      |
| removed |   -22 |  1.7% → 0.0% |  22 → 0 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x000000e8016b3538                                             |
| removed |   -20 |  1.5% → 0.0% |  20 → 0 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer$$Lambda.0x000000e801656908 |
| removed |   -18 |  1.4% → 0.0% |  18 → 0 | `invoke(Object)`                                                               | org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000e80166fc20                                                                                 |
| removed |   -17 |  1.3% → 0.0% |  17 → 0 | `analyzeInternal(ConePostponedResolvedAtom, boolean, CollectionLiteralBounds)` | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$$Lambda.0x000000e801682258                                                                                       |
| removed |   -17 |  1.3% → 0.0% |  17 → 0 | `invoke(Object)`                                                               | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x000000e8016836b0                                                                              |
|  -21.9% |   -14 |  4.9% → 3.8% | 64 → 50 | `Parse::Parse()`                                                               | libjvm.dylib                                                                                                                                                                 |
|  -21.9% |   -14 |  4.9% → 3.8% | 64 → 50 | `ParseGenerator::generate()`                                                   | libjvm.dylib                                                                                                                                                                 |
| removed |   -14 |  1.1% → 0.0% |  14 → 0 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e801686e60                                                      |
| removed |   -14 |  1.1% → 0.0% |  14 → 0 | `invoke()`                                                                     | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x000000e801686c28                                                                    |
|  -19.7% |   -12 |  4.7% → 3.7% | 61 → 49 | `Parse::do_one_block()`                                                        | libjvm.dylib                                                                                                                                                                 |
| removed |   -12 |  0.9% → 0.0% |  12 → 0 | `invoke(Object, Object)`                                                       | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$$Lambda.0x000000e801472078                                                                    |
|  -18.0% |   -11 |  4.7% → 3.8% | 61 → 50 | `Parse::do_all_blocks()`                                                       | libjvm.dylib                                                                                                                                                                 |
|  -62.5% |   -10 |  1.2% → 0.5% |  16 → 6 | `LinkResolver::resolve_static_call()`                                          | libjvm.dylib                                                                                                                                                                 |
|  -47.6% |   -10 |  1.6% → 0.8% | 21 → 11 | `ciBytecodeStream::get_method()`                                               | libjvm.dylib                                                                                                                                                                 |
|  -58.8% |   -10 |  1.3% → 0.5% |  17 → 7 | `PhaseGVN::transform_no_reclaim()`                                             | libjvm.dylib                                                                                                                                                                 |
| removed |   -10 |  0.8% → 0.0% |  10 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`         | java.lang.invoke.LambdaForm$DMH.0x000000e801230000                                                                                                                           |
