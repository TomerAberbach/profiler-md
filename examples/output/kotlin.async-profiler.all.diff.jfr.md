# Sampling profile diff

1,322 samples.

| Category | Change | Delta |             % |   Samples |
| -------- | -----: | ----: | ------------: | --------: |
| compiler |  -0.3% |    -2 | 46.4% → 46.3% | 614 → 612 |
| native   |  +1.6% |    +8 | 38.0% → 38.6% | 502 → 510 |
| ours     |  -4.4% |    -6 |  10.3% → 9.8% | 136 → 130 |
| stdlib   | +11.3% |    +6 |   4.0% → 4.5% |   53 → 59 |
| jit      | -35.3% |    -6 |   1.3% → 0.8% |   17 → 11 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                 | Location       |
| ------: | ----: | ----------: | ------: | ---------------------------------------- | -------------- |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `PhaseLive::add_liveout`                 | `libjvm.dylib` |
|  +31.3% |    +5 | 1.2% → 1.6% | 16 → 21 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `LinearScan::resolve_data_flow`          | `libjvm.dylib` |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseIdealLoop::build_loop_tree`        | `libjvm.dylib` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `RelocIterator::set_limits`              | `libjvm.dylib` |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `Type::hashcons`                         | `libjvm.dylib` |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `Node::dominates`                        | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::effective_degree`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Compile::remove_speculative_types`      | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `I2C/C2I adapters(0xb)`                  | `<unknown>`    |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `LinearScan::build_intervals`            | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `ValueStack::values_do`                  | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LinearScan::add_def`                    | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `RegionNode::Opcode`                     | `libjvm.dylib` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `PhaseCFG::schedule_pinned_nodes`        | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                    | Location                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | -------------------------------- |
|  -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib`                   |
|  -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib`                   |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `checkNotNullParameter(Object, String)`     | `kotlin.jvm.internal.Intrinsics` |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `Matcher::xform`                            | `libjvm.dylib`                   |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `PhaseIdealLoop::get_early_ctrl`            | `libjvm.dylib`                   |
|  -40.0% |    -4 | 0.8% → 0.5% |  10 → 6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Type::meet_helper`                         | `libjvm.dylib`                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Node::is_dead_loop_safe`                   | `libjvm.dylib`                   |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)`                    | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`                               | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::schedule_late`                   | `libjvm.dylib`                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIFG::SquareUp`                        | `libjvm.dylib`                   |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `Node::is_CFG`                              | `libjvm.dylib`                   |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib`                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `GraphBuilder::try_inline_full`             | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `GraphBuilder::append_with_bci`             | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LinearScan::eliminate_spill_moves`         | `libjvm.dylib`                   |
|  -25.0% |    -2 | 0.6% → 0.5% |   8 → 6 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib`                   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `NTarjan::DFS`                              | `libjvm.dylib`                   |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                                             | Location                                                                                       |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +2.0% |   +11 | 42.1% → 42.9% | 556 → 567 | `Compile::Compile`                                                                                                                                   | `libjvm.dylib`                                                                                 |
|   +7.3% |   +11 | 11.3% → 12.2% | 150 → 161 | `PhaseChaitin::Register_Allocate`                                                                                                                    | `libjvm.dylib`                                                                                 |
|  +21.3% |   +10 |   3.6% → 4.3% |   47 → 57 | `Compile::optimize_loops`                                                                                                                            | `libjvm.dylib`                                                                                 |
|   +1.6% |    +9 | 42.2% → 42.9% | 558 → 567 | `C2Compiler::compile_method`                                                                                                                         | `libjvm.dylib`                                                                                 |
|  +60.0% |    +9 |   1.1% → 1.8% |   15 → 24 | `DebugInformationRecorder::describe_scope`                                                                                                           | `libjvm.dylib`                                                                                 |
|  +13.2% |    +9 |   5.1% → 5.8% |   68 → 77 | `loadClass(String, boolean)`                                                                                                                         | `java.lang.ClassLoader`                                                                        |
|  +64.3% |    +9 |   1.1% → 1.7% |   14 → 23 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +64.3% |    +9 |   1.1% → 1.7% |   14 → 23 | `invoke(Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d280` |
| +128.6% |    +9 |   0.5% → 1.2% |    7 → 16 | `processFunctionsByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                 |
| +128.6% |    +9 |   0.5% → 1.2% |    7 → 16 | `invoke(FirScope, Name, Function1)`                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`   |
|  +21.6% |    +8 |   2.8% → 3.4% |   37 → 45 | `PhaseOutput::Output`                                                                                                                                | `libjvm.dylib`                                                                                 |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `PhaseIFG::effective_degree`                                                                                                                         | `libjvm.dylib`                                                                                 |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `PhaseIFG::Compute_Effective_Degree`                                                                                                                 | `libjvm.dylib`                                                                                 |
|  +61.5% |    +8 |   1.0% → 1.6% |   13 → 21 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +38.1% |    +8 |   1.6% → 2.2% |   21 → 29 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
| +100.0% |    +8 |   0.6% → 1.2% |    8 → 16 | `invoke(Object, Object, Object)`                                                                                                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`   |
| +100.0% |    +8 |   0.6% → 1.2% |    8 → 16 | `processFunctionsByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +38.1% |    +8 |   1.6% → 2.2% |   21 → 29 | `accept(IrVisitor, Object)`                                                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                                 |
|   +6.9% |    +7 |   7.6% → 8.2% | 101 → 108 | `PhaseIdealLoop::build_and_optimize`                                                                                                                 | `libjvm.dylib`                                                                                 |
|   +6.9% |    +7 |   7.6% → 8.2% | 101 → 108 | `PhaseIdealLoop::PhaseIdealLoop`                                                                                                                     | `libjvm.dylib`                                                                                 |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                                                                                                                     | Location                                                               |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
| -38.3% |   -18 |   3.6% → 2.2% |   47 → 29 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::compile_method`                                                                                                                                                | `libjvm.dylib`                                                         |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::Compilation`                                                                                                                                                   | `libjvm.dylib`                                                         |
|  -7.0% |   -16 | 17.2% → 16.0% | 228 → 212 | `Compilation::compile_java_method`                                                                                                                                           | `libjvm.dylib`                                                         |
|  -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `run(String[])`                                                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.preloading.Preloader`                            |
| -26.0% |   -13 |   3.8% → 2.8% |   50 → 37 | `Matcher::match`                                                                                                                                                             | `libjvm.dylib`                                                         |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                 |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                                                                                                                                   | `java.lang.reflect.Method`                                             |
| -28.9% |   -11 |   2.9% → 2.0% |   38 → 27 | `Matcher::xform`                                                                                                                                                             | `libjvm.dylib`                                                         |
|  -3.1% |   -11 | 27.2% → 26.4% | 360 → 349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                                                           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  -3.1% |   -11 | 27.2% → 26.4% | 360 → 349 | `doMain(CLICompiler, String[])`                                                                                                                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
| -19.6% |   -11 |   4.2% → 3.4% |   56 → 45 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                                                        | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`               |
| -22.9% |   -11 |   3.6% → 2.8% |   48 → 37 | `GraphBuilder::try_inline_full`                                                                                                                                              | `libjvm.dylib`                                                         |
| -15.6% |   -10 |   4.8% → 4.1% |   64 → 54 | `PhaseIterGVN::transform_old`                                                                                                                                                | `libjvm.dylib`                                                         |
|  -2.8% |   -10 | 27.1% → 26.3% | 358 → 348 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |

# Allocated heap profile diff

Allocated 25.5 MiB → 24.1 MiB (-1.459 MiB, -5.7%) over 1,362 samples → 1,351 samples (19.2 KiB → 18.2 KiB per sample).

| Category | Change |       Delta |             % |                Size |       Samples |
| -------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| stdlib   |  -6.4% |  -1.539 MiB | 93.8% → 93.1% |   24 MiB → 22.4 MiB | 1,051 → 1,025 |
| ours     |  +5.1% | +81.515 KiB |   6.2% → 6.9% | 1.57 MiB → 1.65 MiB |     311 → 326 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size | Samples | Function                                                    | Location                                                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  +23.8% |     +440 KiB |  7.1% → 9.3% |  1.8 MiB → 2.23 MiB | 82 → 97 | `clone()`                                                   | `java.lang.Object`                                                             |
| +434.2% | +343.609 KiB |  0.3% → 1.7% |  79.1 KiB → 423 KiB |   2 → 4 | `readBootstrapMethodsAttribute(int)`                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  +25.6% |  +54.929 KiB |  0.8% → 1.1% |   215 KiB → 270 KiB |       5 | `accept(ClassVisitor, Attribute[], int)`                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  +41.7% |  +41.609 KiB |  0.4% → 0.6% |  99.7 KiB → 141 KiB |   2 → 5 | `getBytes(int, int)`                                        | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping` |
|     new |  +19.453 KiB |  0.0% → 0.1% |      0 B → 19.5 KiB |   0 → 1 | `<init>(int)`                                               | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
| +133.3% |  +16.062 KiB | <0.1% → 0.1% |   12 KiB → 28.1 KiB |   3 → 7 | `<init>(InputStream)`                                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                               |
|     new |  +16.015 KiB |  0.0% → 0.1% |        0 B → 16 KiB |   0 → 1 | `enlarge(int)`                                              | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
|     new |  +14.796 KiB |  0.0% → 0.1% |      0 B → 14.8 KiB |   0 → 2 | `forceCapacity(int[], int, int)`                            | `it.unimi.dsi.fastutil.ints.IntArrays`                                         |
|     new |   +8.843 KiB | 0.0% → <0.1% |      0 B → 8.84 KiB |   0 → 1 | `<init>(CharSequence, Lexer)`                               | `com.intellij.lang.impl.TokenSequence$Builder`                                 |
|     new |   +2.562 KiB | 0.0% → <0.1% |      0 B → 2.56 KiB |   0 → 2 | `<init>(byte[], int, boolean)`                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
| +583.3% |   +1.093 KiB |        <0.1% |    192 B → 1.28 KiB |   1 → 4 | `toArray()`                                                 | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                |
|     new |   +1.015 KiB | 0.0% → <0.1% |      0 B → 1.02 KiB |   0 → 1 | `<init>()`                                                  | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`      |
|  +22.0% |       +912 B |        <0.1% | 4.05 KiB → 4.95 KiB | 38 → 41 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                              |
|     new |       +640 B | 0.0% → <0.1% |         0 B → 640 B |   0 → 1 | `stringsToBytes(String[])`                                  | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`              |
|  +41.9% |       +352 B |        <0.1% |    840 B → 1.16 KiB |  9 → 13 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                          |
| +450.0% |       +288 B |        <0.1% |        64 B → 352 B |  2 → 11 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                     |
|  +75.0% |       +288 B |        <0.1% |       384 B → 672 B |   4 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                |
|     new |       +224 B | 0.0% → <0.1% |         0 B → 224 B |   0 → 1 | `visitMethod(int, String, String, String, String[])`        | `org.jetbrains.org.objectweb.asm.ClassWriter`                                  |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |   2 → 5 | `getLabel()`                                                | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                               |
|     new |       +144 B | 0.0% → <0.1% |         0 B → 144 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                      |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                                                                                                                                                                                                                                                            | Location                                                                     |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `java.io.ByteArrayOutputStream`                                              |
|  -36.8% | -435.531 KiB |   4.5% → 3.0% |  1.16 MiB → 749 KiB |     8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`            |
|  -89.3% |  -29.304 KiB |  0.1% → <0.1% |  32.8 KiB → 3.5 KiB |    10 → 9 | `copyOf(Object[], int)`                                                                                                                                                                                                                                                                                                                             | `java.util.Arrays`                                                           |
|  -95.8% |   -4.312 KiB |         <0.1% |     4.5 KiB → 192 B |     4 → 6 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `java.util.ArrayList`                                                        |
|  -86.4% |   -2.234 KiB |         <0.1% |    2.59 KiB → 360 B |    7 → 13 | `newInstance(OutputStream, int)`                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                            |
| removed |   -1.093 KiB |  <0.1% → 0.0% |      1.09 KiB → 0 B |     2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                                                                                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`              |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `com.fasterxml.aalto.util.XmlCharTypes`                                      |
|  -90.0% |       -504 B |         <0.1% |        560 B → 56 B |    10 → 1 | `ensureCapacity()`                                                                                                                                                                                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                      |
|  -19.0% |       -256 B |         <0.1% | 1.31 KiB → 1.06 KiB |   42 → 34 | `iterator()`                                                                                                                                                                                                                                                                                                                                        | `java.util.ArrayList`                                                        |
|  -83.3% |       -160 B |         <0.1% |        192 B → 32 B |     6 → 1 | `<init>(String)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.name.FqName`                                           |
|  -64.3% |       -144 B |         <0.1% |        224 B → 80 B |    14 → 5 | `box-impl(List)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                |
| removed |       -136 B |  <0.1% → 0.0% |         136 B → 0 B |     1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Property$1`                          |
|  -80.0% |       -128 B |         <0.1% |        160 B → 32 B |     5 → 1 | `getTypeInternal(String, int, int)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.org.objectweb.asm.Type`                                       |
|  -83.3% |       -120 B |         <0.1% |        144 B → 24 B |     6 → 1 | `to(Object, Object)`                                                                                                                                                                                                                                                                                                                                | `kotlin.TuplesKt`                                                            |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |     1 → 0 | `createCopyForFirProperty(FirPropertySymbol, FirProperty, ConeClassLikeLookupTag, FirSession, FirDeclarationOrigin, boolean, ConeSimpleKotlinType, List, ConeKotlinType, List, ConeKotlinType, Modality, Visibility, Visibility, DeferredCallableCopyReturnType, KtSourceElement, FirBackingField, ConeKotlinType, DeferredCallableCopyReturnType)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`              |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |     1 → 0 | `buildPartial()`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$Builder`                    |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `allocateStartMarker()`                                                                                                                                                                                                                                                                                                                             | `com.intellij.lang.impl.MarkerPool`                                          |
|  -41.4% |        -96 B |         <0.1% |       232 B → 136 B |     4 → 2 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)`                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
|  -40.0% |        -96 B |         <0.1% |       240 B → 144 B |     5 → 3 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                        |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `<init>()`                                                                                                                                                                                                                                                                                                                                          | `java.util.HashSet`                                                          |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                                                           | Location                                                                                                 |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|   +6.3% | +522.984 KiB | 31.9% → 35.9% | 8.14 MiB → 8.65 MiB | 348 → 353 | `toByteArray()`                                                                                                                                    | `java.io.ByteArrayOutputStream`                                                                          |
|  +23.8% |     +440 KiB |   7.1% → 9.3% |  1.8 MiB → 2.23 MiB |   82 → 97 | `clone()`                                                                                                                                          | `java.lang.Object`                                                                                       |
| +437.4% | +346.171 KiB |   0.3% → 1.7% |  79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[], int, boolean)`                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +437.4% | +346.171 KiB |   0.3% → 1.7% |  79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[], int, int)`                                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +437.4% | +346.171 KiB |   0.3% → 1.7% |  79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[])`                                                                                                                                   | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +434.2% | +343.609 KiB |   0.3% → 1.7% |  79.1 KiB → 423 KiB |     2 → 4 | `readBootstrapMethodsAttribute(int)`                                                                                                               | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                           |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `invoke(FirScope, Name, Function1)`                                                                                                                | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`             |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `invoke(Object, Object, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`             |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                      |
| +190.4% | +265.578 KiB |   0.5% → 1.6% |   139 KiB → 405 KiB | 212 → 195 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                 |
| +203.0% | +263.023 KiB |   0.5% → 1.6% |   130 KiB → 393 KiB | 169 → 151 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| +200.7% | +262.648 KiB |   0.5% → 1.6% |   131 KiB → 393 KiB | 186 → 172 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                          |
| +200.7% | +262.648 KiB |   0.5% → 1.6% |   131 KiB → 393 KiB | 186 → 172 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)`                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                          |
| +215.8% | +262.398 KiB |   0.5% → 1.6% |   122 KiB → 384 KiB |   76 → 63 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                      |
| +199.8% | +262.289 KiB |   0.5% → 1.6% |   131 KiB → 394 KiB | 190 → 175 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +199.8% | +262.289 KiB |   0.5% → 1.6% |   131 KiB → 394 KiB | 190 → 175 | `transformNamedFunction(FirNamedFunction, Object)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +194.7% | +262.078 KiB |   0.5% → 1.6% |   135 KiB → 397 KiB | 215 → 195 | `processFile(FirFile)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                      |
| +195.4% | +261.312 KiB |   0.5% → 1.6% |   134 KiB → 395 KiB | 203 → 185 | `transformChildren(FirTransformer, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                 |
| +195.9% | +261.234 KiB |   0.5% → 1.6% |   133 KiB → 395 KiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                                              | Location                                                                                                 |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|  -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`          | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|  -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `run(String[])`                                                                       | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
|  -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `main(String[])`                                                                      | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB |     342 → 322 | `<init>(int)`                                                                         | `java.io.ByteArrayOutputStream`                                                                          |
| -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |       20 → 17 | `getNextEntry()`                                                                      | `java.util.zip.ZipInputStream`                                                                           |
| -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |       36 → 21 | `put(Object, Object)`                                                                 | `java.util.HashMap`                                                                                      |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `invoke(Object)`                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000007001396000`             |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                        |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray(LargeDynamicMappedBuffer, ZipEntryDescription)`                  | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                        |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray(ZipEntryDescription)`                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`                                             |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray()`                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`                                         |
| -29.5% | -378.203 KiB |   4.9% → 3.7% |  1.25 MiB → 906 KiB |       11 → 12 | `withMappedRange(long, long, Function1)`                                              | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`                                   |
| -29.5% | -378.203 KiB |   4.9% → 3.7% |  1.25 MiB → 906 KiB |       11 → 12 | `withMappedRangeFrom(long, Function1)`                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`                                   |
| -21.3% |  -277.75 KiB |   5.0% → 4.2% |    1.27 MiB → 1 MiB |        12 → 9 | `contentsToByteArray(boolean)`                                                        | `com.intellij.openapi.vfs.VirtualFile`                                                                   |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformArguments(FirTransformer, Object)`                                          | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformChildren(FirTransformer, Object)`                                           | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformElement(FirElement, Object)`                                                | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformArgumentList(FirArgumentList, Object)`                                      | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                       |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transform(FirTransformer, Object)`                                                   | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                   |
