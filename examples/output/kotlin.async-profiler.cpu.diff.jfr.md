# Sampling profile diff

1,307 samples → 1,331 samples (+24 samples, +1.8%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   +1.5% |    +9 | 46.1% → 45.9% | 602 → 611 |
| Native            |   -0.4% |    -2 | 38.7% → 37.9% | 506 → 504 |
| Ours              |   +0.7% |    +1 | 10.4% → 10.3% | 136 → 137 |
| Standard library  |  +25.5% |   +13 |   3.9% → 4.8% |   51 → 64 |
| JIT               |  +36.4% |    +4 |   0.8% → 1.1% |   11 → 15 |
| Garbage collector | removed |    -1 |   0.1% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical`              | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `PhaseIdealLoop::Dominators`                    | `libjvm.dylib` |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy`                      | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`                         | `<unknown>`    |
| +133.3% |    +4 | 0.2% → 0.5% |   3 → 7 | `Matcher::xform`                                | `libjvm.dylib` |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `MachSpillCopyNode::ideal_reg`                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `GraphBuilder::invoke`                          | `libjvm.dylib` |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Type::cmp`                                     | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses`           | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `Node::disconnect_inputs`                       | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `IndexSet::initialize`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `LinearScan::init_compute_oop_maps`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::insert_anti_dependences`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `TypeOopPtr::eq`                                | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhiNode::pinned`                               | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Scheduling::AddNodeToBundle`                   | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                           | Location       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------- |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                | `libjvm.dylib` |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib` |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `GraphBuilder::iterate_bytecodes_for_block`        | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `Node_Array::insert`                               | `libjvm.dylib` |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `Unique_Node_List::remove`                         | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseIterGVN::transform_old`                      | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `RegMask::is_aligned_pairs`                        | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `OopMapSort::sort`                                 | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node_Backward_Iterator::next`                     | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `IndexSet::IndexSet`                               | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`                          | `<unknown>`    |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `LIR_OpVisitState::visit`                          | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `PhaseCCP::push_child_nodes_to_worklist`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `PhaseAggressiveCoalesce::insert_copies`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `BlockBegin::iterate_preorder`                     | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +3300.0% |   +66 |   0.2% → 5.1% |    2 → 68 | `invoke()`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090` |
|    +9.1% |   +25 | 21.0% → 22.5% | 275 → 300 | `Compile::Code_Gen`                                                                                                                           | `libjvm.dylib`                                                                                                            |
|    +2.7% |   +21 | 60.6% → 61.1% | 792 → 813 | `CompileBroker::invoke_compiler_on_method`                                                                                                    | `libjvm.dylib`                                                                                                            |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                                                                                                |
|    +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|   +10.2% |   +17 | 12.7% → 13.7% | 166 → 183 | `PhaseChaitin::Register_Allocate`                                                                                                             | `libjvm.dylib`                                                                                                            |
|    +3.1% |   +17 | 42.0% → 42.5% | 549 → 566 | `Compile::Compile`                                                                                                                            | `libjvm.dylib`                                                                                                            |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                                    | Location                                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -95.2% |   -59 | 4.7% → 0.2% |  62 → 3 | `invoke()`                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016ab9b8` |
|  -47.6% |   -10 | 1.6% → 0.8% | 21 → 11 | `ciBytecodeStream::get_method`                                                                                              | `libjvm.dylib`                                                                                                            |
|  -58.8% |   -10 | 1.3% → 0.5% |  17 → 7 | `PhaseGVN::transform_no_reclaim`                                                                                            | `libjvm.dylib`                                                                                                            |
|  -40.9% |    -9 | 1.7% → 1.0% | 22 → 13 | `ciObjectFactory::get_metadata`                                                                                             | `libjvm.dylib`                                                                                                            |
|  -50.0% |    -8 | 1.2% → 0.6% |  16 → 8 | `ciObjectFactory::create_new_metadata`                                                                                      | `libjvm.dylib`                                                                                                            |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, Attribute[], int)`                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, int)`                                                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                  | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `LIRGenerator::state_for`                                                                                                   | `libjvm.dylib`                                                                                                            |
|  -53.8% |    -7 | 1.0% → 0.5% |  13 → 6 | `ciMethod::ciMethod`                                                                                                        | `libjvm.dylib`                                                                                                            |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `readMethod(ClassVisitor, Context, int)`                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                     | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                                                      |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `incorporate(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)`                                               | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                          |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                                                                                         | `libjvm.dylib`                                                                                                            |
|  -35.3% |    -6 | 1.3% → 0.8% | 17 → 11 | `PhaseCCP::analyze`                                                                                                         | `libjvm.dylib`                                                                                                            |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`                                                                                        | `libjvm.dylib`                                                                                                            |
|  -33.3% |    -6 | 1.4% → 0.9% | 18 → 12 | `PhaseChaitin::Select`                                                                                                      | `libjvm.dylib`                                                                                                            |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[])`              | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
