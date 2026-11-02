# Allocated native memory profile diff

Allocated 855 MiB → 826 MiB (-29.59 MiB, -3.5%) over 5,805 → 5,573 samples (151 KiB → 152 KiB per sample).

| Category | Change |      Delta |      % |              Size |       Samples |
| -------- | -----: | ---------: | -----: | ----------------: | ------------: |
| Native   |  -3.5% | -29.59 MiB | 100.0% | 855 MiB → 826 MiB | 5,805 → 5,573 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 778 MiB → 747 MiB (91.0% → 90.4%) Compile::Compile at libjvm.dylib
│   ├── 403 MiB → 392 MiB (47.1% → 47.4%) Compile::Optimize
│   │   ├── 206 MiB → 198 MiB (24.0%) PhaseIdealLoop::optimize
│   │   │   └── 205 MiB → 197 MiB (23.9%) PhaseIdealLoop::PhaseIdealLoop
│   │   │       └── 205 MiB → 197 MiB (23.9%) PhaseIdealLoop::build_and_optimize
│   │   │           ├── … 179 MiB → 172 MiB (20.9% → 20.8%) malloc_hook at libasyncProfiler.dylib
│   │   │           ├── … 6.53 MiB → 5.53 MiB (0.8% → 0.7%) malloc_hook at libasyncProfiler.dylib
│   │   │           └── 19.3 MiB → 19.4 MiB (2.3%) 9 more callees, led by (0.7% → 0.6%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
│   │   ├── … 176 MiB → 173 MiB (20.6% → 21.0%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │   ├── … 155 MiB → 151 MiB (18.2% → 18.3%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 6.19 MiB → 6.13 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 5.56 MiB → 5.5 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 8.7 MiB → 10.9 MiB (1.0% → 1.3%) 10 more callees, led by (0.4%) Arena::grow
│   │   └── 19.7 MiB → 19 MiB (2.3%) 15 more callees, led by (0.6% → 0.5%) PhaseIterGVN::optimize
│   ├── 358 MiB → 339 MiB (41.8% → 41.1%) Compile::Code_Gen
│   │   ├── 299 MiB → 284 MiB (34.9% → 34.4%) PhaseChaitin::Register_Allocate
│   │   │   ├── 235 MiB → 222 MiB (27.5% → 26.9%) PhaseIFG::init
│   │   │   │   └── 235 MiB → 222 MiB (27.5% → 26.9%) Arena::grow
│   │   │   │       └── 235 MiB → 222 MiB (27.5% → 26.9%) Chunk::operator new
│   │   │   │           └── 235 MiB → 222 MiB (27.5% → 26.9%) os::malloc
│   │   │   │               └── 235 MiB → 222 MiB (27.5% → 26.9%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 58.3 MiB → 55.9 MiB (6.8%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 5.35 MiB → 6.05 MiB (0.6% → 0.7%) 8 more callees, led by (0.3% → 0.4%) PhaseChaitin::Split
│   │   ├── 51.5 MiB → 48.3 MiB (6.0% → 5.8%) Matcher::match
│   │   │   ├── 31 MiB → 30.2 MiB (3.6% → 3.7%) Matcher::xform
│   │   │   │   ├── … 22.3 MiB → 21.7 MiB (2.6%) malloc_hook at libasyncProfiler.dylib
│   │   │   │   └── 8.69 MiB → 8.5 MiB (1.0%) 6 more callees, led by (0.5%) Node::out_grow
│   │   │   ├── … 15.9 MiB → 14.1 MiB (1.9% → 1.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 4.59 MiB → 3.94 MiB (0.5%) 2 more callees, led by (0.4%) Node_Array::grow
│   │   └── 7.25 MiB → 6.87 MiB (0.8%) 6 more callees, led by (0.4%) PhaseCFG::do_global_code_motion
│   ├── … 10.2 MiB → 9.06 MiB (1.2% → 1.1%) Parse::do_one_block at libjvm.dylib
│   │   └── 10.2 MiB → 9.06 MiB (1.2% → 1.1%) 14 more callees, led by (0.4% → 0.3%) Parse::do_call
│   └── 5.47 MiB → 6.03 MiB (0.6% → 0.7%) 4 more callees, led by (0.5% → 0.6%) PhaseRemoveUseless::PhaseRemoveUseless
└── 74.5 MiB → 75.7 MiB (8.7% → 9.2%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 74.5 MiB → 75.7 MiB (8.7% → 9.2%) run(String[])
        ├── … 60.5 MiB (7.1% → 7.3%) malloc_hook at libasyncProfiler.dylib
        └── … 8.58 MiB → 9.71 MiB (1.0% → 1.2%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 6.2 MiB → 6.78 MiB (0.7% → 0.8%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 6.2 MiB → 6.78 MiB (0.7% → 0.8%) executePhase(ConfigurationPipelineArtifact)
                    └── 6.2 MiB → 6.78 MiB (0.7% → 0.8%) 9 more callees, led by (0.3% → 0.4%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |  Delta |     % |                Size | Samples | Function       | Location                 |
| -----: | -----: | ----: | ------------------: | ------: | -------------- | ------------------------ |
| +17.1% | +394 B | <0.1% | 2.25 KiB → 2.63 KiB | 10 → 11 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |       Delta |      % |              Size |       Samples | Function      | Location                 |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | ------------------------ |
|  -3.5% | -29.554 MiB | 100.0% | 855 MiB → 826 MiB | 5,786 → 5,560 | `malloc_hook` | `libasyncProfiler.dylib` |
| -69.8% | -36.982 KiB |  <0.1% |   53 KiB → 16 KiB |         9 → 2 | `calloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `realloc_hook` (`libasyncProfiler.dylib`)

| Change |  Delta |      % |                Size | Samples | Caller        | Location       |
| -----: | -----: | -----: | ------------------: | ------: | ------------- | -------------- |
| +17.1% | +394 B | 100.0% | 2.25 KiB → 2.63 KiB | 10 → 11 | `os::realloc` | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |        Delta |             % |                Size |       Samples | Caller                                    | Location          |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|  -4.0% |  -30.954 MiB | 91.4% → 90.9% |   781 MiB → 750 MiB | 5,317 → 5,053 | `os::malloc`                              | `libjvm.dylib`    |
| +57.9% |     +704 KiB |   0.1% → 0.2% | 1.19 MiB → 1.88 MiB |       38 → 60 | `updatewindow`                            | `libzip.dylib`    |
|  +7.1% | +608.463 KiB |   1.0% → 1.1% | 8.32 MiB → 8.91 MiB |     262 → 286 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| +37.0% | +103.265 KiB |         <0.1% |   279 KiB → 382 KiB |       11 → 13 | `CCalloc`                                 | `libverify.dylib` |
|    new |  +48.189 KiB |  0.0% → <0.1% |      0 B → 48.2 KiB |         0 → 1 | `writeBytes`                              | `libjava.dylib`   |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|  Change |      Delta |              % |            Size | Samples | Caller                       | Location          |
| ------: | ---------: | -------------: | --------------: | ------: | ---------------------------- | ----------------- |
|  -66.7% |    -32 KiB | 90.6% → 100.0% | 48 KiB → 16 KiB |   6 → 2 | `make_class_info_from_name`  | `libverify.dylib` |
| removed | -4.982 KiB |    9.4% → 0.0% |  4.98 KiB → 0 B |   3 → 0 | `VerifyClassForMajorVersion` | `libverify.dylib` |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |           % |                Size |   Samples | Function                                                                                           | Location                                                |
| ------: | ---------: | ----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +140.9% | +1.937 MiB | 0.2% → 0.4% | 1.38 MiB → 3.31 MiB |   24 → 32 | `PhaseIdealLoop::do_unroll`                                                                        | `libjvm.dylib`                                          |
|  +64.3% |  +1.91 MiB | 0.3% → 0.6% | 2.97 MiB → 4.88 MiB |   58 → 59 | `IdealLoopTree::iteration_split`                                                                   | `libjvm.dylib`                                          |
|  +68.3% | +1.687 MiB | 0.3% → 0.5% | 2.47 MiB → 4.16 MiB |        46 | `IdealLoopTree::iteration_split_impl`                                                              | `libjvm.dylib`                                          |
|  +14.1% | +1.327 MiB | 1.1% → 1.3% | 9.39 MiB → 10.7 MiB | 513 → 550 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +12.3% | +1.269 MiB | 1.2% → 1.4% | 10.3 MiB → 11.6 MiB | 528 → 571 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  +12.2% | +1.262 MiB | 1.2% → 1.4% | 10.3 MiB → 11.6 MiB | 526 → 567 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  +11.7% | +1.207 MiB | 1.2% → 1.4% | 10.3 MiB → 11.6 MiB | 524 → 565 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +11.7% | +1.207 MiB | 1.2% → 1.4% | 10.3 MiB → 11.6 MiB | 524 → 565 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +11.7% | +1.207 MiB | 1.2% → 1.4% | 10.3 MiB → 11.6 MiB | 524 → 565 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400`    |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`     |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|  +11.6% | +1.206 MiB | 1.2% → 1.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
|   +1.6% | +1.163 MiB | 8.7% → 9.2% | 74.5 MiB → 75.7 MiB | 663 → 705 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
|   +1.6% | +1.163 MiB | 8.7% → 9.2% | 74.5 MiB → 75.7 MiB | 663 → 705 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
|  +12.7% | +1.146 MiB | 1.1% → 1.2% | 9.05 MiB → 10.2 MiB | 472 → 511 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                               | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`    |

##### Native

|      Change |        Delta |            % |                Size |   Samples | Function                                                                               | Location        |
| ----------: | -----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------------------------- | --------------- |
|      +64.3% |    +1.91 MiB |  0.3% → 0.6% | 2.97 MiB → 4.88 MiB |   58 → 59 | `IdealLoopTree::iteration_split`                                                       | `libjvm.dylib`  |
|      +68.3% |   +1.687 MiB |  0.3% → 0.5% | 2.47 MiB → 4.16 MiB |        46 | `IdealLoopTree::iteration_split_impl`                                                  | `libjvm.dylib`  |
|      +57.9% |     +704 KiB |  0.1% → 0.2% | 1.19 MiB → 1.88 MiB |   38 → 60 | `updatewindow`                                                                         | `libzip.dylib`  |
|      +57.9% |     +704 KiB |  0.1% → 0.2% | 1.19 MiB → 1.88 MiB |   38 → 60 | `inflate`                                                                              | `libzip.dylib`  |
|      +57.9% |     +704 KiB |  0.1% → 0.2% | 1.19 MiB → 1.88 MiB |   38 → 60 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                        | `libzip.dylib`  |
|      +50.0% | +672.046 KiB |         0.2% | 1.31 MiB → 1.97 MiB |   19 → 22 | `G1BarrierSetC2::post_barrier`                                                         | `libjvm.dylib`  |
|     +285.7% | +640.078 KiB | <0.1% → 0.1% |   224 KiB → 864 KiB |     3 → 8 | `PreserveJVMState::PreserveJVMState`                                                   | `libjvm.dylib`  |
|    +1701.3% | +544.023 KiB | <0.1% → 0.1% |    32 KiB → 576 KiB |     1 → 5 | `Parse::do_exits`                                                                      | `libjvm.dylib`  |
|    +1030.3% | +516.117 KiB | <0.1% → 0.1% |  50.1 KiB → 566 KiB |   20 → 21 | `nmethod::nmethod`                                                                     | `libjvm.dylib`  |
|     +589.9% |  +484.14 KiB | <0.1% → 0.1% |  82.1 KiB → 566 KiB |        21 | `nmethod::new_nmethod`                                                                 | `libjvm.dylib`  |
|      +15.6% | +426.175 KiB |  0.3% → 0.4% | 2.66 MiB → 3.08 MiB | 101 → 107 | `Compiler::compile_method`                                                             | `libjvm.dylib`  |
|       +4.6% | +416.098 KiB |  1.0% → 1.1% | 8.78 MiB → 9.18 MiB | 407 → 448 | `Java_java_lang_ClassLoader_defineClass1`                                              | `libjava.dylib` |
|         new |     +401 KiB | 0.0% → <0.1% |       0 B → 401 KiB |     0 → 4 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` | `libjvm.dylib`  |
| +1283150.0% | +400.984 KiB |        <0.1% |      32 B → 401 KiB |     2 → 5 | `G1CodeRootSetHashTable::insert`                                                       | `libjvm.dylib`  |
| +1283150.0% | +400.984 KiB |        <0.1% |      32 B → 401 KiB |     2 → 5 | `nmethod::oops_do`                                                                     | `libjvm.dylib`  |
| +2559900.0% | +399.984 KiB |        <0.1% |      16 B → 400 KiB |     1 → 3 | `G1CollectedHeap::register_nmethod`                                                    | `libjvm.dylib`  |
|      +94.1% | +346.566 KiB | <0.1% → 0.1% |   368 KiB → 715 KiB | 200 → 215 | `AllocateHeap`                                                                         | `libjvm.dylib`  |
|     +100.0% | +320.007 KiB | <0.1% → 0.1% |   320 KiB → 640 KiB |     6 → 4 | `Parse::return_current`                                                                | `libjvm.dylib`  |
|       +5.1% | +288.046 KiB |  0.6% → 0.7% | 5.53 MiB → 5.81 MiB | 112 → 120 | `IdealLoopTree::loop_predication`                                                      | `libjvm.dylib`  |
|      +58.3% | +224.062 KiB | <0.1% → 0.1% |   384 KiB → 608 KiB |    9 → 13 | `Invariance::clone_nodes`                                                              | `libjvm.dylib`  |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |              Size |       Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ----------------: | ------------: | ------------------------------------------ | ------------------------- |
|  -4.0% |  -31.27 MiB | 91.3% → 90.8% | 781 MiB → 750 MiB | 5,097 → 4,820 | `Arena::grow`                              | `libjvm.dylib`            |
|  -4.0% |  -31.26 MiB | 91.3% → 90.8% | 781 MiB → 750 MiB | 5,097 → 4,821 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  -4.0% | -31.103 MiB | 91.0% → 90.4% | 778 MiB → 747 MiB | 5,008 → 4,729 | `Compile::Compile`                         | `libjvm.dylib`            |
|  -4.0% | -31.103 MiB | 91.0% → 90.4% | 778 MiB → 747 MiB | 5,008 → 4,729 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  -4.0% | -30.954 MiB | 91.4% → 90.9% | 781 MiB → 750 MiB | 5,317 → 5,053 | `os::malloc`                               | `libjvm.dylib`            |
|  -3.9% | -30.694 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,111 → 4,837 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  -3.9% | -30.694 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,111 → 4,837 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  -3.9% | -30.687 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,110 → 4,837 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  -3.9% | -30.679 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,128 → 4,852 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  -3.9% | -30.679 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,128 → 4,852 | `thread_start`                             | `libsystem_pthread.dylib` |
|  -3.9% | -30.671 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,127 → 4,852 | `Thread::call_run`                         | `libjvm.dylib`            |
|  -3.9% | -30.671 MiB | 91.3% → 90.8% | 780 MiB → 750 MiB | 5,127 → 4,852 | `thread_native_entry`                      | `libjvm.dylib`            |
|  -3.5% | -29.554 MiB |        100.0% | 855 MiB → 826 MiB | 5,786 → 5,560 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  -5.2% | -18.597 MiB | 41.8% → 41.1% | 358 MiB → 339 MiB | 2,214 → 2,066 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  -5.0% | -15.011 MiB | 34.9% → 34.4% | 299 MiB → 284 MiB | 1,660 → 1,556 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |
|  -5.6% | -13.098 MiB | 27.5% → 26.9% | 235 MiB → 222 MiB | 1,093 → 1,006 | `PhaseIFG::init`                           | `libjvm.dylib`            |
|  -3.4% | -11.392 MiB |         39.1% | 334 MiB → 323 MiB | 1,467 → 1,430 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  -2.8% | -11.146 MiB | 47.1% → 47.4% | 403 MiB → 392 MiB | 2,575 → 2,479 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  -2.7% | -10.381 MiB | 44.8% → 45.1% | 383 MiB → 373 MiB | 2,306 → 2,221 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  -2.7% | -10.256 MiB | 44.5% → 44.9% | 381 MiB → 370 MiB | 2,285 → 2,201 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |

##### Native

| Change |        Delta |             % |                Size |       Samples | Function                                                           | Location                  |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | ------------------------- |
|  -4.0% |   -31.27 MiB | 91.3% → 90.8% |   781 MiB → 750 MiB | 5,097 → 4,820 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  -4.0% |   -31.26 MiB | 91.3% → 90.8% |   781 MiB → 750 MiB | 5,097 → 4,821 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  -4.0% |  -30.954 MiB | 91.4% → 90.9% |   781 MiB → 750 MiB | 5,317 → 5,053 | `os::malloc`                                                       | `libjvm.dylib`            |
|  -3.9% |  -30.694 MiB | 91.3% → 90.8% |   780 MiB → 750 MiB | 5,111 → 4,837 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|  -3.9% |  -30.679 MiB | 91.3% → 90.8% |   780 MiB → 750 MiB | 5,128 → 4,852 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  -3.9% |  -30.679 MiB | 91.3% → 90.8% |   780 MiB → 750 MiB | 5,128 → 4,852 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  -3.9% |  -30.671 MiB | 91.3% → 90.8% |   780 MiB → 750 MiB | 5,127 → 4,852 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  -3.9% |  -30.671 MiB | 91.3% → 90.8% |   780 MiB → 750 MiB | 5,127 → 4,852 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  -3.5% |  -29.554 MiB |        100.0% |   855 MiB → 826 MiB | 5,786 → 5,560 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
| -19.4% |   -2.359 MiB |   1.4% → 1.2% | 12.2 MiB → 9.81 MiB |     163 → 123 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
| -19.1% |   -2.328 MiB |   1.4% → 1.2% | 12.2 MiB → 9.85 MiB |     163 → 124 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
| -15.8% |   -1.921 MiB |   1.4% → 1.2% | 12.2 MiB → 10.3 MiB |     163 → 127 | `Parse::Parse`                                                     | `libjvm.dylib`            |
| -15.8% |   -1.921 MiB |   1.4% → 1.2% | 12.2 MiB → 10.3 MiB |     163 → 127 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
| -14.7% |   -1.546 MiB |   1.2% → 1.1% | 10.5 MiB → 8.97 MiB |     147 → 112 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|  -2.1% |   -1.375 MiB |   7.5% → 7.6% | 64.5 MiB → 63.1 MiB |     919 → 848 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
| -14.8% |   -1.281 MiB |   1.0% → 0.9% | 8.66 MiB → 7.38 MiB |      120 → 92 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|  -6.6% | -800.437 KiB |   1.4% → 1.3% | 11.9 MiB → 11.1 MiB |     201 → 168 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
| -69.7% | -736.007 KiB |  0.1% → <0.1% |  1.03 MiB → 320 KiB |        11 → 8 | `Parse::build_exits`                                               | `libjvm.dylib`            |
| -60.6% | -640.078 KiB |  0.1% → <0.1% |  1.03 MiB → 416 KiB |         8 → 3 | `DirectCallGenerator::generate`                                    | `libjvm.dylib`            |
| -47.4% | -576.015 KiB |          0.1% |  1.19 MiB → 640 KiB |        15 → 9 | `G1BarrierSetC2::pre_barrier`                                      | `libjvm.dylib`            |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseIdealLoop::do_unroll` (`libjvm.dylib`)

|  Change |      Delta |      % |                Size | Samples | Caller                                | Location       |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------- | -------------- |
| +140.9% | +1.937 MiB | 100.0% | 1.38 MiB → 3.31 MiB | 24 → 32 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

| Change |      Delta |             % |                Size | Samples | Caller                               | Location       |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------------------------------ | -------------- |
| +64.3% |  +1.91 MiB |        100.0% | 2.97 MiB → 4.88 MiB | 58 → 59 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| +64.2% | +1.785 MiB | 93.7% → 93.6% | 2.78 MiB → 4.57 MiB | 53 → 50 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

| Change |      Delta |      % |                Size | Samples | Caller                           | Location       |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------- | -------------- |
| +68.3% | +1.687 MiB | 100.0% | 2.47 MiB → 4.16 MiB |      46 | `IdealLoopTree::iteration_split` | `libjvm.dylib` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                   | Location                                      |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| +14.1% | +1.327 MiB | 100.0% | 9.39 MiB → 10.7 MiB | 513 → 550 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |                Size |   Samples | Caller           | Location                                               |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------- | ------------------------------------------------------ |
| +12.3% | +1.269 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 528 → 571 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |                Size |   Samples | Caller                          | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------- | ------------------------------------------------------- |
| +12.2% | +1.262 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 526 → 567 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |      Delta |      % |                Size |   Samples | Caller                                         | Location                                      |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
| +11.7% | +1.207 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 524 → 565 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                 | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +11.7% | +1.207 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 524 → 565 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                                                             | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +11.7% | +1.207 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 524 → 565 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change |      Delta |      % |                Size |   Samples | Caller           | Location                                     |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------- | -------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |      Delta |      % |                Size |   Samples | Caller                         | Location                                             |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------ | ---------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008400`)

| Change |      Delta |      % |                Size |   Samples | Caller                           | Location                                            |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------------- | --------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change |      Delta |      % |                Size |   Samples | Caller                                           | Location                           |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------ | ---------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |      Delta |      % |                Size |   Samples | Caller                         | Location                                          |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |                Size |   Samples | Caller                     | Location                                          |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------- | ------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |                Size |   Samples | Caller                     | Location                   |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------- | -------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |      Delta |            % |                Size |   Samples | Caller                     | Location                                    |
| -----: | ---------: | -----------: | ------------------: | --------: | -------------------------- | ------------------------------------------- |
| +11.6% | +1.206 MiB |       100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `run(String[])`            | `org.jetbrains.kotlin.preloading.Preloader` |
|    new | +3.463 KiB | 0.0% → <0.1% |      0 B → 3.46 KiB |     0 → 1 | `getEnumConstantsShared()` | `java.lang.Class`                           |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |      Delta |      % |                Size |   Samples | Caller           | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------- | ------------------------------------------- |
|  +1.6% | +1.163 MiB | 100.0% | 74.5 MiB → 75.7 MiB | 663 → 705 | `main(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |      Delta |      % |                Size |   Samples | Caller                                         | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
| +12.7% | +1.146 MiB | 100.0% | 9.05 MiB → 10.2 MiB | 472 → 511 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `updatewindow` (`libzip.dylib`)

| Change |    Delta |      % |                Size | Samples | Caller    | Location       |
| -----: | -------: | -----: | ------------------: | ------: | --------- | -------------- |
| +57.9% | +704 KiB | 100.0% | 1.19 MiB → 1.88 MiB | 38 → 60 | `inflate` | `libzip.dylib` |

##### `inflate` (`libzip.dylib`)

| Change |    Delta |      % |                Size | Samples | Caller                                          | Location       |
| -----: | -------: | -----: | ------------------: | ------: | ----------------------------------------------- | -------------- |
| +57.9% | +704 KiB | 100.0% | 1.19 MiB → 1.88 MiB | 38 → 60 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

| Change |    Delta |      % |                Size | Samples | Caller                                                        | Location                 |
| -----: | -------: | -----: | ------------------: | ------: | ------------------------------------------------------------- | ------------------------ |
| +57.9% | +704 KiB | 100.0% | 1.19 MiB → 1.88 MiB | 38 → 60 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------- | -------------- |
| +50.0% | +672.046 KiB | 100.0% | 1.31 MiB → 1.97 MiB | 19 → 22 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Caller                             | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | ---------------------------------- | -------------- |
| +499.9% | +320.015 KiB | 28.6% → 44.4% | 64 KiB → 384 KiB |   1 → 2 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|     new | +256.046 KiB |  0.0% → 29.6% |    0 B → 256 KiB |   0 → 3 | `Parse::array_addressing`          | `libjvm.dylib` |
| +200.0% |  +64.015 KiB | 14.3% → 11.1% |  32 KiB → 96 KiB |   1 → 2 | `Parse::do_ifnull`                 | `libjvm.dylib` |

##### `Parse::do_exits` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller         | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | -------------- | -------------- |
| +1701.3% | +544.023 KiB | 100.0% | 32 KiB → 576 KiB |   1 → 5 | `Parse::Parse` | `libjvm.dylib` |

##### `nmethod::nmethod` (`libjvm.dylib`)

|   Change |        Delta |      % |               Size | Samples | Caller                 | Location       |
| -------: | -----------: | -----: | -----------------: | ------: | ---------------------- | -------------- |
| +1030.3% | +516.117 KiB | 100.0% | 50.1 KiB → 566 KiB | 20 → 21 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change |       Delta |      % |               Size | Samples | Caller                   | Location       |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------------ | -------------- |
| +589.9% | +484.14 KiB | 100.0% | 82.1 KiB → 566 KiB |      21 | `ciEnv::register_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------------------ | -------------- |
| +15.6% | +426.175 KiB | 100.0% | 2.66 MiB → 3.08 MiB | 101 → 107 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |        Delta |      % |                Size |   Samples | Caller                                                                          | Location                |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------- | ----------------------- |
|  +4.6% | +416.098 KiB | 100.0% | 8.78 MiB → 9.18 MiB | 407 → 448 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` (`libjvm.dylib`)

| Change |    Delta |             % |          Size | Samples | Caller                           | Location       |
| -----: | -------: | ------------: | ------------: | ------: | -------------------------------- | -------------- |
|    new | +401 KiB | 0.0% → 100.0% | 0 B → 401 KiB |   0 → 4 | `G1CodeRootSetHashTable::insert` | `libjvm.dylib` |

##### `G1CodeRootSetHashTable::insert` (`libjvm.dylib`)

|      Change |        Delta |      % |           Size | Samples | Caller             | Location       |
| ----------: | -----------: | -----: | -------------: | ------: | ------------------ | -------------- |
| +1283150.0% | +400.984 KiB | 100.0% | 32 B → 401 KiB |   2 → 5 | `nmethod::oops_do` | `libjvm.dylib` |

##### `nmethod::oops_do` (`libjvm.dylib`)

|      Change |        Delta |             % |            Size | Samples | Caller                                      | Location       |
| ----------: | -----------: | ------------: | --------------: | ------: | ------------------------------------------- | -------------- |
| +2559900.0% | +399.984 KiB | 50.0% → 99.7% |  16 B → 400 KiB |   1 → 3 | `G1CollectedHeap::register_nmethod`         | `libjvm.dylib` |
|    +6400.0% |       +1 KiB |  50.0% → 0.3% | 16 B → 1.02 KiB |   1 → 2 | `G1NmethodProcessor::do_regular_processing` | `libjvm.dylib` |

##### `G1CollectedHeap::register_nmethod` (`libjvm.dylib`)

|      Change |        Delta |      % |           Size | Samples | Caller             | Location       |
| ----------: | -----------: | -----: | -------------: | ------: | ------------------ | -------------- |
| +2559900.0% | +399.984 KiB | 100.0% | 16 B → 400 KiB |   1 → 3 | `nmethod::nmethod` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|   Change |        Delta |             % |                Size |   Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| -------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|      new |     +401 KiB |  0.0% → 56.1% |       0 B → 401 KiB |     0 → 4 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog`                                                                                                                                                                   | `libjvm.dylib` |
|   -64.1% | -170.027 KiB | 72.1% → 13.3% |  265 KiB → 95.4 KiB | 130 → 144 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|  +104.2% |  +52.179 KiB | 13.6% → 14.3% |  50.1 KiB → 102 KiB |   19 → 16 | `ImmutableOopMapBuilder::build`                                                                                                                                                                                                                          | `libjvm.dylib` |
| +1564.0% |  +42.031 KiB |   0.7% → 6.3% | 2.69 KiB → 44.7 KiB |     4 → 6 | `G1MonotonicArena::new_segment`                                                                                                                                                                                                                          | `libjvm.dylib` |
|      new |      +16 KiB |   0.0% → 2.2% |        0 B → 16 KiB |     0 → 1 | `ConcurrentHashTable<Dictionary::Config, (MEMFLAGS)1>::internal_grow_prolog`                                                                                                                                                                             | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller                | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| +100.0% | +320.007 KiB | 100.0% | 320 KiB → 640 KiB |   6 → 4 | `Parse::do_one_block` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------ | -------------- |
|  +5.1% | +288.046 KiB |        100.0% | 5.53 MiB → 5.81 MiB | 112 → 120 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| +10.0% | +223.984 KiB | 39.5% → 41.4% | 2.19 MiB → 2.41 MiB |   46 → 45 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `Invariance::clone_nodes` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                                         | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------------------------------------- | -------------- |
| +58.3% | +224.062 KiB | 100.0% | 384 KiB → 608 KiB |  9 → 13 | `PhaseIdealLoop::loop_predication_impl_helper` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Caller                       | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | ---------------------------- | -------------- |
|  -5.6% | -13.098 MiB | 30.1% → 29.6% |   235 MiB → 222 MiB | 1,093 → 1,006 | `PhaseIFG::init`             | `libjvm.dylib` |
|  -3.4% | -11.392 MiB | 42.8% → 43.1% |   334 MiB → 323 MiB | 1,467 → 1,430 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
|  -4.1% |  -2.366 MiB |          7.5% | 58.3 MiB → 55.9 MiB |     469 → 447 | `PhaseLive::compute`         | `libjvm.dylib` |
| -11.0% |  -1.745 MiB |   2.0% → 1.9% | 15.9 MiB → 14.1 MiB |     134 → 104 | `Matcher::find_shared`       | `libjvm.dylib` |
|  -2.1% |  -1.375 MiB |   8.3% → 8.4% | 64.5 MiB → 63.1 MiB |     919 → 848 | `Arena::Arealloc`            | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |      Delta |            % |              Size |       Samples | Caller         | Location       |
| -----: | ---------: | -----------: | ----------------: | ------------: | -------------- | -------------- |
|  -4.0% | -31.27 MiB |       100.0% | 781 MiB → 750 MiB | 5,097 → 4,820 | `Arena::grow`  | `libjvm.dylib` |
|    new | +9.976 KiB | 0.0% → <0.1% |    0 B → 9.98 KiB |         0 → 1 | `Arena::Arena` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                       | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------------------------- | -------------- |
|  -4.0% | -31.103 MiB | 100.0% | 778 MiB → 747 MiB | 5,008 → 4,729 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------------ | -------------- |
|  -4.0% | -31.103 MiB | 100.0% | 778 MiB → 747 MiB | 5,008 → 4,729 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |        Delta |            % |              Size |       Samples | Caller                      | Location       |
| -----: | -----------: | -----------: | ----------------: | ------------: | --------------------------- | -------------- |
|  -4.0% |   -31.26 MiB |        99.9% | 781 MiB → 750 MiB | 5,097 → 4,821 | `Chunk::operator new`       | `libjvm.dylib` |
| +94.1% | +346.566 KiB | <0.1% → 0.1% | 368 KiB → 715 KiB |     200 → 215 | `AllocateHeap`              | `libjvm.dylib` |
| -96.2% |  -23.953 KiB |        <0.1% |  24.9 KiB → 960 B |            12 | `AnyObj::operator new`      | `libjvm.dylib` |
| -69.5% |  -10.429 KiB |        <0.1% | 15 KiB → 4.58 KiB |         5 → 3 | `os::malloc`                | `libjvm.dylib` |
| -69.5% |  -10.429 KiB |        <0.1% | 15 KiB → 4.58 KiB |         5 → 3 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                          | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------- | -------------- |
|  -3.9% | -30.694 MiB | 100.0% | 780 MiB → 750 MiB | 5,111 → 4,837 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -3.9% | -30.694 MiB | 100.0% | 780 MiB → 750 MiB | 5,111 → 4,837 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------- | -------------- |
|  -3.9% | -30.687 MiB | 100.0% | 780 MiB → 750 MiB | 5,110 → 4,837 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller         | Location                  |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------- | ------------------------- |
|  -3.9% | -30.679 MiB | 100.0% | 780 MiB → 750 MiB | 5,128 → 4,852 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
|  -3.9% | -30.671 MiB | 100.0% | 780 MiB → 750 MiB | 5,127 → 4,852 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller           | Location                  |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------------- | ------------------------- |
|  -3.9% | -30.671 MiB | 100.0% | 780 MiB → 750 MiB | 5,127 → 4,852 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |        Delta |             % |                Size |       Samples | Caller                                    | Location          |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|  -4.0% |  -30.954 MiB | 91.4% → 90.9% |   781 MiB → 750 MiB | 5,317 → 5,053 | `os::malloc`                              | `libjvm.dylib`    |
| +57.9% |     +704 KiB |   0.1% → 0.2% | 1.19 MiB → 1.88 MiB |       38 → 60 | `updatewindow`                            | `libzip.dylib`    |
|  +7.1% | +608.463 KiB |   1.0% → 1.1% | 8.32 MiB → 8.91 MiB |     262 → 286 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| +37.0% | +103.265 KiB |         <0.1% |   279 KiB → 382 KiB |       11 → 13 | `CCalloc`                                 | `libverify.dylib` |
|    new |  +48.189 KiB |  0.0% → <0.1% |      0 B → 48.2 KiB |         0 → 1 | `writeBytes`                              | `libjava.dylib`   |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -5.2% | -18.597 MiB | 100.0% | 358 MiB → 339 MiB | 2,214 → 2,066 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
|  -5.0% | -15.011 MiB | 100.0% | 299 MiB → 284 MiB | 1,660 → 1,556 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                            | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------------------- | -------------- |
|  -5.6% | -13.098 MiB | 100.0% | 235 MiB → 222 MiB | 1,093 → 1,006 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  -3.4% | -11.392 MiB | 100.0% | 334 MiB → 323 MiB | 1,467 → 1,430 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -2.8% | -11.146 MiB | 100.0% | 403 MiB → 392 MiB | 2,575 → 2,479 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |      Delta |             % |              Size |       Samples | Caller                    | Location       |
| -----: | ---------: | ------------: | ----------------: | ------------: | ------------------------- | -------------- |
|  -3.6% | -7.366 MiB | 53.7% → 53.2% | 206 MiB → 198 MiB | 1,332 → 1,254 | `Compile::Optimize`       | `libjvm.dylib` |
|  -1.7% | -3.015 MiB | 46.3% → 46.8% | 178 MiB → 174 MiB |     974 → 967 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                           | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------------- | -------------- |
|  -2.7% | -10.256 MiB | 100.0% | 381 MiB → 370 MiB | 2,285 → 2,201 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                 | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------- | -------------- |
| -19.4% | -2.359 MiB | 100.0% | 12.2 MiB → 9.81 MiB | 163 → 123 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
| -19.1% | -2.328 MiB | 100.0% | 12.2 MiB → 9.85 MiB | 163 → 124 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                     | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| -15.8% | -1.921 MiB | 100.0% | 12.2 MiB → 10.3 MiB | 163 → 127 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
| -16.0% |   -1.921 MiB | 98.7% → 98.5% |   12 MiB → 10.1 MiB | 161 → 124 | `Compile::Compile`                     | `libjvm.dylib` |
| -16.9% |   -1.312 MiB | 63.9% → 63.1% | 7.78 MiB → 6.47 MiB |  113 → 86 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  -6.3% | -448.062 KiB | 57.3% → 63.7% | 6.97 MiB → 6.53 MiB |   97 → 83 | `Parse::do_call`                       | `libjvm.dylib` |
| -20.0% |      -32 KiB |   1.3% → 1.2% |   160 KiB → 128 KiB |         2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------- | -------------- |
| -14.7% | -1.546 MiB | 100.0% | 10.5 MiB → 8.97 MiB | 147 → 112 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                           | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------- | -------------- |
| -29.5% |   -1.187 MiB |   6.2% → 4.5% | 4.03 MiB → 2.84 MiB |   41 → 28 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| +13.9% | +959.921 KiB | 10.4% → 12.1% | 6.72 MiB → 7.66 MiB |       115 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|    new | +704.078 KiB |   0.0% → 1.1% |       0 B → 704 KiB |     0 → 5 | `PhaseIterGVN::transform`        | `libjvm.dylib` |
| -35.7% | -640.156 KiB |   2.7% → 1.8% | 1.75 MiB → 1.13 MiB |   25 → 15 | `PhaseCFG::build_cfg`            | `libjvm.dylib` |
|  -1.4% | -544.625 KiB | 56.9% → 57.3% | 36.7 MiB → 36.2 MiB | 568 → 523 | `Node_Array::grow`               | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

| Change |       Delta |              % |                Size |  Samples | Caller                                 | Location       |
| -----: | ----------: | -------------: | ------------------: | -------: | -------------------------------------- | -------------- |
| -15.2% |  -1.312 MiB | 100.0% → 99.6% | 8.66 MiB → 7.34 MiB | 120 → 91 | `Parse::do_call`                       | `libjvm.dylib` |
| -18.1% |    -992 KiB |  61.7% → 59.3% | 5.34 MiB → 4.38 MiB |  68 → 58 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|    new | +32.015 KiB |    0.0% → 0.4% |        0 B → 32 KiB |    0 → 1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |              % |              Size |   Samples | Caller                                               | Location       |
| -----: | -----------: | -------------: | ----------------: | --------: | ---------------------------------------------------- | -------------- |
|  -7.6% | -928.453 KiB | 100.0% → 98.9% | 11.9 MiB → 11 MiB | 201 → 167 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|    new | +128.015 KiB |    0.0% → 1.1% |     0 B → 128 KiB |     0 → 1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller         | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------- | -------------- |
| -69.7% | -736.007 KiB | 100.0% | 1.03 MiB → 320 KiB |  11 → 8 | `Parse::Parse` | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                             | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
| -95.7% | -704.062 KiB |  69.7% → 7.7% |  736 KiB → 32 KiB |   5 → 1 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| +20.0% |  +63.984 KiB | 30.3% → 92.3% | 320 KiB → 384 KiB |   3 → 2 | `Parse::do_call`                   | `libjvm.dylib` |

##### `G1BarrierSetC2::pre_barrier` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------------- | -------------- |
| -47.4% | -576.015 KiB | 100.0% | 1.19 MiB → 640 KiB |  15 → 9 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseIdealLoop::do_unroll` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                                  | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------- | -------------- |
| +130.3% |   +1.343 MiB | 75.0% → 71.7% | 1.03 MiB → 2.38 MiB | 17 → 22 | `PhaseIdealLoop::clone_loop`                            | `libjvm.dylib` |
| +200.0% | +640.062 KiB | 22.7% → 28.3% |   320 KiB → 960 KiB |  6 → 10 | `PhaseIdealLoop::update_main_loop_assertion_predicates` | `libjvm.dylib` |
| removed |  -32.015 KiB |   2.3% → 0.0% |        32 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::register_new_node`                     | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                                | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------------- | -------------- |
| +64.2% |   +1.785 MiB | 93.7% → 93.6% | 2.78 MiB → 4.57 MiB | 53 → 50 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
| +68.3% |   +1.687 MiB | 83.2% → 85.2% | 2.47 MiB → 4.16 MiB |      46 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| +44.5% | +228.015 KiB | 16.8% → 14.8% |   512 KiB → 740 KiB | 12 → 13 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                  | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------- |
| +140.9% |   +1.937 MiB | 55.7% → 79.7% | 1.38 MiB → 3.31 MiB | 24 → 32 | `PhaseIdealLoop::do_unroll`             | `libjvm.dylib` |
|  -17.9% | -160.093 KiB | 35.4% → 17.3% |   896 KiB → 736 KiB | 17 → 11 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |
| removed |  -64.015 KiB |   2.5% → 0.0% |        64 KiB → 0 B |   1 → 0 | `PhaseIdealLoop::do_peeling`            | `libjvm.dylib` |
|  -50.0% |  -32.015 KiB |   2.5% → 0.8% |     64 KiB → 32 KiB |   2 → 1 | `PhaseIdealLoop::do_unswitching`        | `libjvm.dylib` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                                          | Location                                                 |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------- | -------------------------------------------------------- |
|  +12.4% |   +1.135 MiB | 97.8% → 96.3% | 9.19 MiB → 10.3 MiB | 482 → 520 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler`            |
|  +92.8% | +196.396 KiB |   2.2% → 3.7% |   212 KiB → 408 KiB |        30 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt`            |
| removed |       -180 B |  <0.1% → 0.0% |         180 B → 0 B |     1 → 0 | `loadClass(String)`                                             | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change |      Delta |              % |                Size |   Samples | Callee                                                                                             | Location                                                   |
| ------: | ---------: | -------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +12.2% | +1.262 MiB | 100.0% → 99.9% | 10.3 MiB → 11.6 MiB | 526 → 567 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
|     new | +5.872 KiB |   0.0% → <0.1% |      0 B → 5.87 KiB |     0 → 1 | `<clinit>()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |
|     new | +1.474 KiB |   0.0% → <0.1% |      0 B → 1.47 KiB |     0 → 1 | `setValue(String)`                                                                                 | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |
| removed |     -160 B |   <0.1% → 0.0% |         160 B → 0 B |     1 → 0 | `InterpreterRuntime::resolve_from_cache`                                                           | `libjvm.dylib`                                             |
| +110.0% |     +132 B |          <0.1% |       120 B → 252 B |     1 → 2 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`           |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|    Change |       Delta |              % |                Size |   Samples | Callee                                                 | Location                                                |
| --------: | ----------: | -------------: | ------------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|    +11.7% |  +1.207 MiB | 100.0% → 99.5% | 10.3 MiB → 11.6 MiB | 524 → 565 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +16711.0% | +56.138 KiB |   <0.1% → 0.5% |    344 B → 56.5 KiB |         2 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                                                               | Location                                                                |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|  +14.1% |   +1.327 MiB | 90.8% → 92.8% | 9.39 MiB → 10.7 MiB | 513 → 550 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  -17.0% | -155.712 KiB |   8.6% → 6.4% |   916 KiB → 760 KiB |     4 → 5 | `loadClass(String)`                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                |
| +412.4% |  +29.426 KiB |   0.1% → 0.3% | 7.13 KiB → 36.6 KiB |     2 → 4 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |
|   +6.5% |   +3.571 KiB |          0.5% | 54.7 KiB → 58.2 KiB |     5 → 6 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |      Delta |      % |                Size |   Samples | Callee                                                   | Location                                      |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| +11.7% | +1.207 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 524 → 565 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |                Size |   Samples | Callee                                         | Location                                      |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
| +11.7% | +1.207 MiB | 100.0% | 10.3 MiB → 11.6 MiB | 524 → 565 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change |       Delta |              % |                Size |   Samples | Callee                          | Location                                                |
| -----: | ----------: | -------------: | ------------------: | --------: | ------------------------------- | ------------------------------------------------------- |
| +12.3% |  +1.269 MiB | 99.4% → 100.0% | 10.3 MiB → 11.6 MiB | 528 → 571 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -99.9% | -63.921 KiB |   0.6% → <0.1% |       64 KiB → 80 B |     2 → 1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |      Delta |      % |                Size |   Samples | Callee           | Location                                               |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------- | ------------------------------------------------------ |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008400`)

| Change |      Delta |      % |                Size |   Samples | Callee           | Location                                     |
| -----: | ---------: | -----: | ------------------: | --------: | ---------------- | -------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change |      Delta |      % |                Size |   Samples | Callee                         | Location                                             |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------ | ---------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |      Delta |      % |                Size |   Samples | Callee                           | Location                                            |
| -----: | ---------: | -----: | ------------------: | --------: | -------------------------------- | --------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |                Size |   Samples | Callee                                           | Location                           |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------ | ---------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |                Size |   Samples | Callee                         | Location                                          |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------------- |
| +11.6% | +1.206 MiB | 100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |      Delta |            % |                Size |   Samples | Callee                     | Location                                          |
| -----: | ---------: | -----------: | ------------------: | --------: | -------------------------- | ------------------------------------------------- |
| +11.6% | +1.206 MiB |       100.0% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new | +3.463 KiB | 0.0% → <0.1% |      0 B → 3.46 KiB |     0 → 1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|    Change |       Delta |             % |                Size |   Samples | Callee                                                                       | Location                                                 |
| --------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
|    +11.6% |  +1.206 MiB | 14.0% → 15.4% | 10.4 MiB → 11.6 MiB | 530 → 572 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                               |
|    -98.6% | -36.009 KiB |         <0.1% |    36.5 KiB → 520 B |     1 → 2 | `getMethod(String, Class[])`                                                 | `java.lang.Class`                                        |
|       ~0% | -29.984 KiB | 86.0% → 84.6% |   64.1 MiB → 64 MiB |       130 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`   |
| +14948.7% | +22.189 KiB |         <0.1% |    152 B → 22.3 KiB |         1 | `loadClass(String)`                                                          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|   removed |      -480 B |  <0.1% → 0.0% |         480 B → 0 B |     1 → 0 | `stream()`                                                                   | `java.util.Collection`                                   |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |      Delta |      % |                Size |   Samples | Callee          | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | --------------- | ------------------------------------------- |
|  +1.6% | +1.163 MiB | 100.0% | 74.5 MiB → 75.7 MiB | 663 → 705 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |      Delta |            % |                Size |   Samples | Callee                                                     | Location                                                    |
| -----: | ---------: | -----------: | ------------------: | --------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| +12.6% | +1.143 MiB |       100.0% | 9.05 MiB → 10.2 MiB | 472 → 510 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
|    new | +2.699 KiB | 0.0% → <0.1% |       0 B → 2.7 KiB |     0 → 1 | `loadClass(String)`                                        | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`    |

##### `updatewindow` (`libzip.dylib`)

| Change |    Delta |      % |                Size | Samples | Callee        | Location                 |
| -----: | -------: | -----: | ------------------: | ------: | ------------- | ------------------------ |
| +57.9% | +704 KiB | 100.0% | 1.19 MiB → 1.88 MiB | 38 → 60 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `inflate` (`libzip.dylib`)

| Change |    Delta |      % |                Size | Samples | Callee         | Location       |
| -----: | -------: | -----: | ------------------: | ------: | -------------- | -------------- |
| +57.9% | +704 KiB | 100.0% | 1.19 MiB → 1.88 MiB | 38 → 60 | `updatewindow` | `libzip.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

| Change |    Delta |      % |                Size | Samples | Callee    | Location       |
| -----: | -------: | -----: | ------------------: | ------: | --------- | -------------- |
| +57.9% | +704 KiB | 100.0% | 1.19 MiB → 1.88 MiB | 38 → 60 | `inflate` | `libzip.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------ | -------------- |
| +127.3% | +448.046 KiB | 26.2% → 39.7% | 352 KiB → 800 KiB |   5 → 8 | `IdealKit::if_then`            | `libjvm.dylib` |
|  -78.6% | -352.031 KiB |  33.3% → 4.8% |  448 KiB → 96 KiB |   4 → 2 | `G1BarrierSetC2::g1_mark_card` | `libjvm.dylib` |
| +157.1% | +351.992 KiB | 16.7% → 28.6% | 224 KiB → 576 KiB |   4 → 6 | `IdealKit::end_if`             | `libjvm.dylib` |
| +399.9% | +256.015 KiB |  4.8% → 15.9% |  64 KiB → 320 KiB |   1 → 2 | `IdealKit::transform`          | `libjvm.dylib` |
|  -85.7% | -192.007 KiB |  16.7% → 1.6% |  224 KiB → 32 KiB |   4 → 1 | `IdealKit::load`               | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Callee                | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| +285.7% | +640.078 KiB | 100.0% | 224 KiB → 864 KiB |   3 → 8 | `GraphKit::clone_map` | `libjvm.dylib` |

##### `Parse::do_exits` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                        | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | -------------- |
|     new | +416.007 KiB |  0.0% → 72.2% | 0 B → 416 KiB |   0 → 3 | `GraphKit::clone_map`         | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 22.2% | 0 B → 128 KiB |   0 → 1 | `GraphKit::insert_mem_bar`    | `libjvm.dylib` |
| removed |  -31.976 KiB | 100.0% → 0.0% |  32 KiB → 0 B |   1 → 0 | `MergeMemNode::set_memory_at` | `libjvm.dylib` |
|     new |  +31.976 KiB |   0.0% → 5.6% |  0 B → 32 KiB |   0 → 1 | `JVMState::clone_shallow`     | `libjvm.dylib` |

##### `nmethod::nmethod` (`libjvm.dylib`)

|      Change |        Delta |              % |               Size | Samples | Callee                              | Location       |
| ----------: | -----------: | -------------: | -----------------: | ------: | ----------------------------------- | -------------- |
| +2559900.0% | +399.984 KiB |  <0.1% → 70.6% |     16 B → 400 KiB |   1 → 3 | `G1CollectedHeap::register_nmethod` | `libjvm.dylib` |
|     +231.9% | +116.132 KiB | 100.0% → 29.4% | 50.1 KiB → 166 KiB | 19 → 18 | `CompiledMethod::CompiledMethod`    | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|   Change |        Delta |              % |               Size | Samples | Callee                                | Location       |
| -------: | -----------: | -------------: | -----------------: | ------: | ------------------------------------- | -------------- |
| +1030.3% | +516.117 KiB | 61.0% → 100.0% | 50.1 KiB → 566 KiB | 20 → 21 | `nmethod::nmethod`                    | `libjvm.dylib` |
|  removed |  -31.976 KiB |   39.0% → 0.0% |       32 KiB → 0 B |   1 → 0 | `CodeBuffer::finalize_oop_references` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| +15.6% | +426.175 KiB | 100.0% | 2.66 MiB → 3.08 MiB | 101 → 107 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                      | Location                 |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------- | ------------------------ |
|  +7.1% | +608.463 KiB | 94.8% → 97.1% | 8.32 MiB → 8.91 MiB | 262 → 286 | `malloc_hook`               | `libasyncProfiler.dylib` |
| -41.1% | -192.365 KiB |   5.2% → 2.9% |   468 KiB → 275 KiB | 145 → 162 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` (`libjvm.dylib`)

| Change |    Delta |             % |          Size | Samples | Callee         | Location       |
| -----: | -------: | ------------: | ------------: | ------: | -------------- | -------------- |
|    new | +401 KiB | 0.0% → 100.0% | 0 B → 401 KiB |   0 → 4 | `AllocateHeap` | `libjvm.dylib` |

##### `G1CodeRootSetHashTable::insert` (`libjvm.dylib`)

| Change |    Delta |              % |          Size | Samples | Callee                                                                                                                                                                                                                                                                                                                                           | Location       |
| -----: | -------: | -------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
|    new | +401 KiB |  0.0% → 100.0% | 0 B → 401 KiB |   0 → 4 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog`                                                                                                                                                                                                                                                           | `libjvm.dylib` |
| -50.0% |    -16 B | 100.0% → <0.1% |   32 B → 16 B |   2 → 1 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `nmethod::oops_do` (`libjvm.dylib`)

|      Change |        Delta |      % |           Size | Samples | Callee                           | Location       |
| ----------: | -----------: | -----: | -------------: | ------: | -------------------------------- | -------------- |
| +1283150.0% | +400.984 KiB | 100.0% | 32 B → 401 KiB |   2 → 5 | `G1CodeRootSetHashTable::insert` | `libjvm.dylib` |

##### `G1CollectedHeap::register_nmethod` (`libjvm.dylib`)

|      Change |        Delta |      % |           Size | Samples | Callee             | Location       |
| ----------: | -----------: | -----: | -------------: | ------: | ------------------ | -------------- |
| +2559900.0% | +399.984 KiB | 100.0% | 16 B → 400 KiB |   1 → 3 | `nmethod::oops_do` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |   Samples | Callee       | Location       |
| -----: | -----------: | -----: | ----------------: | --------: | ------------ | -------------- |
| +94.1% | +346.566 KiB | 100.0% | 368 KiB → 715 KiB | 200 → 215 | `os::malloc` | `libjvm.dylib` |

##### `Parse::return_current` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
| +499.8% |     +320 KiB | 20.0% → 60.0% |  64 KiB → 384 KiB |       2 | `Type_Array::grow`               | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 20.0% |     0 B → 128 KiB |   0 → 1 | `PhiNode::slice_memory`          | `libjvm.dylib` |
|  -42.9% |  -96.031 KiB | 70.0% → 20.0% | 224 KiB → 128 KiB |   3 → 1 | `Parse::call_register_finalizer` | `libjvm.dylib` |
| removed |  -31.976 KiB |  10.0% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node::add_req`                  | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
|  +5.1% | +288.046 KiB |        100.0% | 5.53 MiB → 5.81 MiB | 112 → 120 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
| +10.0% | +223.984 KiB | 39.5% → 41.4% | 2.19 MiB → 2.41 MiB |   46 → 45 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Invariance::clone_nodes` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------ | -------------- |
| +58.3% | +224.062 KiB | 100.0% | 384 KiB → 608 KiB |  9 → 13 | `Node_Array::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee                | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
|  -4.0% | -31.27 MiB | 100.0% | 781 MiB → 750 MiB | 5,097 → 4,820 | `Chunk::operator new` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee       | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------ | -------------- |
|  -4.0% | -31.26 MiB | 100.0% | 781 MiB → 750 MiB | 5,097 → 4,821 | `os::malloc` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size |       Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | -----------------: | ------------: | ------------------------------ | -------------- |
|   -5.2% |  -18.597 MiB | 46.0% → 45.4% |  358 MiB → 339 MiB | 2,214 → 2,066 | `Compile::Code_Gen`            | `libjvm.dylib` |
|   -2.8% |  -11.146 MiB | 51.8% → 52.4% |  403 MiB → 392 MiB | 2,575 → 2,479 | `Compile::Optimize`            | `libjvm.dylib` |
|  -16.0% |   -1.921 MiB |   1.5% → 1.4% |  12 MiB → 10.1 MiB |     161 → 124 | `ParseGenerator::generate`     | `libjvm.dylib` |
| +116.7% | +672.125 KiB |   0.1% → 0.2% | 576 KiB → 1.22 MiB |        7 → 15 | `NodeHash::NodeHash`           | `libjvm.dylib` |
|  -87.5% | -224.015 KiB |         <0.1% |   256 KiB → 32 KiB |         2 → 1 | `Compile::inline_string_calls` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -4.0% | -31.103 MiB | 100.0% | 778 MiB → 747 MiB | 5,008 → 4,729 | `Compile::Compile` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee        | Location                 |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | ------------------------ |
|  -4.0% | -30.954 MiB | 100.0% | 781 MiB → 750 MiB | 5,317 → 5,053 | `malloc_hook` | `libasyncProfiler.dylib` |
| -69.5% | -10.429 KiB |  <0.1% | 15 KiB → 4.58 KiB |         5 → 3 | `os::malloc`  | `libjvm.dylib`           |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change |       Delta |            % |              Size |       Samples | Callee                                         | Location       |
| ------: | ----------: | -----------: | ----------------: | ------------: | ---------------------------------------------- | -------------- |
|   -3.9% | -30.687 MiB |       100.0% | 780 MiB → 750 MiB | 5,110 → 4,837 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| removed |  -8.062 KiB | <0.1% → 0.0% |    8.06 KiB → 0 B |         1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------- | -------------- |
|  -3.9% | -30.694 MiB | 100.0% | 780 MiB → 750 MiB | 5,111 → 4,837 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                        | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------- | -------------- |
|  -4.0% |  -31.103 MiB | 99.7% → 99.6% |   778 MiB → 747 MiB | 5,008 → 4,729 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| +15.6% | +426.175 KiB |   0.3% → 0.4% | 2.66 MiB → 3.08 MiB |     101 → 107 | `Compiler::compile_method`    | `libjvm.dylib` |
| -60.5% |        -23 B |         <0.1% |         38 B → 15 B |             1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|  Change |       Delta |            % |              Size |       Samples | Callee                | Location       |
| ------: | ----------: | -----------: | ----------------: | ------------: | --------------------- | -------------- |
|   -3.9% | -30.671 MiB |       100.0% | 780 MiB → 750 MiB | 5,127 → 4,852 | `thread_native_entry` | `libjvm.dylib` |
| removed |  -8.062 KiB | <0.1% → 0.0% |    8.06 KiB → 0 B |         1 → 0 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee           | Location                  |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------------- | ------------------------- |
|  -3.9% | -30.679 MiB | 100.0% | 780 MiB → 750 MiB | 5,128 → 4,852 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|   Change |       Delta |            % |                Size |       Samples | Callee                          | Location       |
| -------: | ----------: | -----------: | ------------------: | ------------: | ------------------------------- | -------------- |
|    -3.9% | -30.694 MiB |       100.0% |   780 MiB → 750 MiB | 5,111 → 4,837 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +1287.9% | +43.367 KiB |        <0.1% | 3.37 KiB → 46.7 KiB |        10 → 9 | `WorkerThread::run`             | `libjvm.dylib` |
|   -83.7% | -12.968 KiB |        <0.1% | 15.5 KiB → 2.53 KiB |             5 | `VMThread::run`                 | `libjvm.dylib` |
|  removed |  -8.062 KiB | <0.1% → 0.0% |      8.06 KiB → 0 B |         1 → 0 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |
|      new |  +1.277 KiB | 0.0% → <0.1% |      0 B → 1.28 KiB |         0 → 1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -3.9% | -30.671 MiB | 100.0% | 780 MiB → 750 MiB | 5,127 → 4,852 | `Thread::call_run` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|   Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|    -5.0% |  -15.011 MiB | 83.6% → 83.7% |   299 MiB → 284 MiB | 1,660 → 1,556 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|    -6.2% |   -3.206 MiB | 14.4% → 14.2% | 51.5 MiB → 48.3 MiB |     432 → 397 | `Matcher::match`                  | `libjvm.dylib` |
|   -23.6% | -469.593 KiB |   0.5% → 0.4% | 1.94 MiB → 1.48 MiB |       29 → 22 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|   -21.3% | -407.851 KiB |   0.5% → 0.4% | 1.87 MiB → 1.47 MiB |       36 → 26 | `PhaseOutput::Output`             | `libjvm.dylib` |
| +2932.2% | +248.546 KiB |  <0.1% → 0.1% |  8.48 KiB → 257 KiB |         1 → 2 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                     | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | -------------- |
|   -5.6% |  -13.098 MiB | 78.6% → 78.1% |   235 MiB → 222 MiB | 1,093 → 1,006 | `PhaseIFG::init`                           | `libjvm.dylib` |
|   -4.5% |   -2.616 MiB | 19.6% → 19.7% |   58.6 MiB → 56 MiB |     480 → 450 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  +16.0% | +426.132 KiB |   0.9% → 1.1% | 2.59 MiB → 3.01 MiB |       37 → 43 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| +150.0% | +383.718 KiB |   0.1% → 0.2% |   256 KiB → 640 KiB |        8 → 20 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  -10.7% |  -96.062 KiB |          0.3% |   896 KiB → 800 KiB |       15 → 11 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  -5.6% | -13.098 MiB | 100.0% | 235 MiB → 222 MiB | 1,093 → 1,006 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  -3.4% | -11.392 MiB | 100.0% | 334 MiB → 323 MiB | 1,467 → 1,430 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------- | -------------- |
|  -3.6% |   -7.366 MiB | 51.0% → 50.6% |   206 MiB → 198 MiB | 1,332 → 1,254 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  -1.7% |   -3.015 MiB | 44.1% → 44.6% |   178 MiB → 174 MiB |     974 → 967 | `Compile::optimize_loops`              | `libjvm.dylib` |
| -15.9% | -864.093 KiB |   1.3% → 1.1% | 5.31 MiB → 4.47 MiB |       50 → 44 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| +69.4% | +800.203 KiB |   0.3% → 0.5% | 1.13 MiB → 1.91 MiB |       18 → 31 | `Compile::remove_speculative_types`    | `libjvm.dylib` |
| -19.7% | -625.015 KiB |   0.8% → 0.6% |  3.1 MiB → 2.48 MiB |       54 → 42 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |     % |                Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ----: | ------------------: | ------------: | -------------------------------- | -------------- |
|  -2.7% |  -10.225 MiB | 99.4% |   381 MiB → 370 MiB | 2,285 → 2,202 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  -6.5% | -160.031 KiB |  0.6% | 2.41 MiB → 2.25 MiB |       21 → 19 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                             | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | -------------- |
|  -3.4% |  -11.392 MiB | 87.8% → 87.2% |   334 MiB → 323 MiB | 1,467 → 1,430 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| +64.3% |    +1.91 MiB |   0.8% → 1.3% | 2.97 MiB → 4.88 MiB |       58 → 59 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib` |
|  -8.8% |   -1.062 MiB |   3.2% → 3.0% |   12.1 MiB → 11 MiB |     196 → 165 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  -7.6% | -928.453 KiB |   3.1% → 3.0% |   11.9 MiB → 11 MiB |     201 → 167 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
| +18.8% | +768.117 KiB |   1.0% → 1.3% | 3.99 MiB → 4.74 MiB |       63 → 73 | `PhaseIdealLoop::split_if_with_blocks`                             | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Callee                   | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------ | -------------- |
|  -14.7% |   -1.546 MiB | 86.4% → 91.4% | 10.5 MiB → 8.97 MiB | 147 → 112 | `Parse::do_call`         | `libjvm.dylib` |
|  -14.6% | -448.125 KiB | 24.6% → 26.1% |    3 MiB → 2.56 MiB |   41 → 28 | `Parse::do_field_access` | `libjvm.dylib` |
| +100.0% | +320.007 KiB |   2.6% → 6.4% |   320 KiB → 640 KiB |     6 → 4 | `Parse::return_current`  | `libjvm.dylib` |
|  -66.7% | -256.031 KiB |   3.1% → 1.3% |   384 KiB → 128 KiB |     4 → 2 | `Parse::do_checkcast`    | `libjvm.dylib` |
|  +29.2% | +223.984 KiB |   6.2% → 9.9% |   768 KiB → 992 KiB |    8 → 12 | `Parse::do_if`           | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |      Delta |              % |                Size |   Samples | Callee                | Location       |
| -----: | ---------: | -------------: | ------------------: | --------: | --------------------- | -------------- |
| -19.4% | -2.359 MiB | 100.0% → 99.7% | 12.2 MiB → 9.81 MiB | 163 → 123 | `Parse::do_one_block` | `libjvm.dylib` |
| -50.0% |    -32 KiB |    0.5% → 0.3% |     64 KiB → 32 KiB |         1 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|   Change |        Delta |              % |                Size |   Samples | Callee                    | Location       |
| -------: | -----------: | -------------: | ------------------: | --------: | ------------------------- | -------------- |
|   -19.1% |   -2.328 MiB | 100.0% → 96.0% | 12.2 MiB → 9.85 MiB | 163 → 124 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   -69.7% | -736.007 KiB |    8.5% → 3.0% |  1.03 MiB → 320 KiB |    11 → 8 | `Parse::build_exits`      | `libjvm.dylib` |
|   -90.5% | -608.031 KiB |    5.4% → 0.6% |    672 KiB → 64 KiB |     8 → 1 | `GraphKit::set_map_clone` | `libjvm.dylib` |
| +1701.3% | +544.023 KiB |    0.3% → 5.5% |    32 KiB → 576 KiB |     1 → 5 | `Parse::do_exits`         | `libjvm.dylib` |
|      new |  +64.031 KiB |    0.0% → 0.6% |        0 B → 64 KiB |     0 → 2 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee         | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | -------------- | -------------- |
| -15.8% | -1.921 MiB | 100.0% | 12.2 MiB → 10.3 MiB | 163 → 127 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                                                | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ----------------------------------------------------- | -------------- |
|  -15.2% |   -1.312 MiB | 82.3% → 81.9% | 8.66 MiB → 7.34 MiB | 120 → 91 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
|   -6.3% | -448.062 KiB | 66.3% → 72.8% | 6.97 MiB → 6.53 MiB |  97 → 83 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| removed | -207.804 KiB |   1.9% → 0.0% |       208 KiB → 0 B |    6 → 0 | `Compile::call_generator`                             | `libjvm.dylib` |
| removed |  -95.992 KiB |   0.9% → 0.0% |        96 KiB → 0 B |    2 → 0 | `Compile::optimize_inlining`                          | `libjvm.dylib` |
| removed |  -64.015 KiB |   0.6% → 0.0% |        64 KiB → 0 B |    1 → 0 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  -2.1% | -1.375 MiB | 100.0% | 64.5 MiB → 63.1 MiB | 919 → 848 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------ | -------------- |
|  -16.9% |   -1.312 MiB | 89.9% → 87.7% | 7.78 MiB → 6.47 MiB | 113 → 86 | `ParseGenerator::generate`           | `libjvm.dylib` |
|  -18.1% |     -992 KiB | 61.7% → 59.3% | 5.34 MiB → 4.38 MiB |  68 → 58 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  -95.7% | -704.062 KiB |   8.3% → 0.4% |    736 KiB → 32 KiB |    5 → 1 | `DirectCallGenerator::generate`      | `libjvm.dylib` |
|  -41.9% | -416.007 KiB |  11.2% → 7.6% |   992 KiB → 576 KiB |   10 → 7 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
| +499.9% | +320.015 KiB |   0.7% → 5.1% |    64 KiB → 384 KiB |    1 → 2 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  -6.6% | -800.437 KiB | 100.0% | 11.9 MiB → 11.1 MiB | 201 → 168 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::build_exits` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                     | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------- | -------------- |
| removed | -544.062 KiB |  51.5% → 0.0% |     544 KiB → 0 B |   4 → 0 | `GraphKit::set_all_memory` | `libjvm.dylib` |
|  -45.4% | -159.984 KiB | 33.3% → 60.0% | 352 KiB → 192 KiB |   4 → 5 | `Type_Array::grow`         | `libjvm.dylib` |
| removed |  -64.015 KiB |   6.1% → 0.0% |      64 KiB → 0 B |   1 → 0 | `Node_Array::grow`         | `libjvm.dylib` |
|  +50.0% |  +32.015 KiB |  6.1% → 30.0% |   64 KiB → 96 KiB |   1 → 2 | `GraphKit::clone_map`      | `libjvm.dylib` |
|     new |  +32.015 KiB |  0.0% → 10.0% |      0 B → 32 KiB |   0 → 1 | `Node::Node`               | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
|  -60.9% | -448.046 KiB | 69.7% → 69.2% | 736 KiB → 288 KiB |   5 → 2 | `GraphKit::set_results_for_java_call` | `libjvm.dylib` |
| removed | -256.015 KiB |  24.2% → 0.0% |     256 KiB → 0 B |   1 → 0 | `GraphKit::set_all_memory`            | `libjvm.dylib` |
| +299.9% |      +96 KiB |  3.0% → 30.8% |  32 KiB → 128 KiB |       1 | `GraphKit::set_edges_for_java_call`   | `libjvm.dylib` |
| removed |  -32.015 KiB |   3.0% → 0.0% |      32 KiB → 0 B |   1 → 0 | `ciMethod::get_method_at_bci`         | `libjvm.dylib` |

##### `G1BarrierSetC2::pre_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  -52.4% | -351.984 KiB | 55.3% → 50.0% | 672 KiB → 320 KiB |   8 → 4 | `IdealKit::if_then`              | `libjvm.dylib` |
| removed | -288.046 KiB |  23.7% → 0.0% |     288 KiB → 0 B |   3 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 20.0% |     0 B → 128 KiB |   0 → 1 | `GraphKit::sync_kit`             | `libjvm.dylib` |
|     new |  +96.031 KiB |  0.0% → 15.0% |      0 B → 96 KiB |   0 → 2 | `IdealKit::end_if`               | `libjvm.dylib` |
| removed |  -64.015 KiB |   5.3% → 0.0% |      64 KiB → 0 B |   1 → 0 | `Node::Node`                     | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |            % |                Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +21.8% | +678.054 KiB |         0.4% |  3.04 MiB → 3.7 MiB | 50 → 61 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +116.7% | +672.125 KiB |         0.1% |  576 KiB → 1.22 MiB |  7 → 15 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::NodeHash`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +65.5% | +608.171 KiB |  0.1% → 0.2% |   928 KiB → 1.5 MiB | 15 → 26 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::remove_speculative_types` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +544.046 KiB |  0.0% → 0.1% |       0 B → 544 KiB |   0 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIterGVN::transform` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +30.8% | +514.453 KiB |  0.2% → 0.3% | 1.63 MiB → 2.14 MiB | 18 → 28 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +30.8% | +512.117 KiB |  0.2% → 0.3% | 1.63 MiB → 2.13 MiB | 26 → 36 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +175.0% | +448.062 KiB | <0.1% → 0.1% |   256 KiB → 704 KiB |   2 → 6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_DEF` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +13.4% | +416.046 KiB |         0.4% | 3.03 MiB → 3.44 MiB | 50 → 53 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +384.031 KiB | 0.0% → <0.1% |       0 B → 384 KiB |   0 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::clone_assertion_predicate_and_initialize` ← `PhaseIdealLoop::update_main_loop_assertion_predicates` ← `PhaseIdealLoop::do_unroll` ← `IdealLoopTree::iteration_split_impl` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +300.0% |     +384 KiB | <0.1% → 0.1% |   128 KiB → 512 KiB |       1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::process_for_post_loop_opts_igvn` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +150.0% | +383.718 KiB | <0.1% → 0.1% |   256 KiB → 640 KiB |  8 → 20 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +42.3% | +352.062 KiB |         0.1% |  832 KiB → 1.16 MiB |  7 → 11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +320.062 KiB | 0.0% → <0.1% |       0 B → 320 KiB |   0 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseIdealLoop::split_thru_phi` ← `PhaseIdealLoop::split_if_with_blocks_post` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +500.0% | +320.046 KiB |        <0.1% |    64 KiB → 384 KiB |   1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::register_new_node_with_optimizer` ← `BarrierSetC2::obj_allocate` ← `PhaseMacroExpand::expand_allocate_common` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +256.062 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::split_AddP` ← `ConnectionGraph::split_unique_types` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +30.8% | +256.046 KiB |         0.1% |  832 KiB → 1.06 MiB |   5 → 8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +200.0% | +256.046 KiB |        <0.1% |   128 KiB → 384 KiB |   1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::remove_speculative_types` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `Parse::return_current` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `PreserveJVMState::PreserveJVMState` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +256.015 KiB | 0.0% → <0.1% |       0 B → 256 KiB |   0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `IdealKit::delay_transform` ← `IdealKit::do_memory_merge` ← `IdealKit::goto_` ← `IdealKit::end_if` ← `G1BarrierSetC2::post_barrier` ← `ModRefBarrierSetC2::store_at_resolved` ← `BarrierSetC2::store_at` ← `GraphKit::access_store_at` ← `Parse::do_put_xxx` ← `Parse::do_field_access` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` |

### Improvements

Call stacks with the largest decrease in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -5.6% |  -13.098 MiB | 27.5% → 26.9% |   235 MiB → 222 MiB | 1,093 → 1,006 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                       |
|   -3.8% |   -6.817 MiB | 20.9% → 20.8% |   179 MiB → 172 MiB |     842 → 807 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                        |
|   -2.9% |   -4.575 MiB | 18.2% → 18.3% |   155 MiB → 151 MiB |     625 → 623 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                            |
|   -4.1% |   -2.366 MiB |          6.8% | 58.3 MiB → 55.9 MiB |     469 → 447 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                   |
|  -11.0% |   -1.745 MiB |   1.9% → 1.7% | 15.9 MiB → 14.1 MiB |     134 → 104 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                  |
|  -24.5% |   -1.125 MiB |   0.5% → 0.4% | 4.59 MiB → 3.47 MiB |       42 → 33 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                    |
|  -15.3% |       -1 MiB |   0.8% → 0.7% | 6.53 MiB → 5.53 MiB |      117 → 89 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                              |
|  -14.8% |  -864.25 KiB |   0.7% → 0.6% | 5.72 MiB → 4.88 MiB |      106 → 85 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                  |
|  -18.6% | -704.203 KiB |          0.4% |    3.69 MiB → 3 MiB |       56 → 43 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                  |
|  -35.7% | -640.156 KiB |   0.2% → 0.1% | 1.75 MiB → 1.13 MiB |       25 → 15 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseCFG::build_cfg` ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                           |
|   -2.8% | -631.523 KiB |          2.6% | 22.3 MiB → 21.7 MiB |           122 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                        |
|  -30.0% | -480.078 KiB |   0.2% → 0.1% | 1.56 MiB → 1.09 MiB |        13 → 8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                           |
|  -75.2% | -406.593 KiB |  0.1% → <0.1% |   540 KiB → 134 KiB |        10 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseOutput::fill_buffer` ← `PhaseOutput::Output` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                         |
|  -38.7% | -384.046 KiB |          0.1% |   992 KiB → 608 KiB |       14 → 11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize`                                                                                                                                                                                                                                              |
|  -78.6% | -352.015 KiB |  0.1% → <0.1% |    448 KiB → 96 KiB |         3 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::transform` ← `gen_subtype_check_compare` ← `Phase::gen_subtype_check` ← `PhaseMacroExpand::expand_subtypecheck_node` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize`                                                                                                                                                     |
|  -66.7% | -320.078 KiB |  0.1% → <0.1% |   480 KiB → 160 KiB |         8 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::inline_incrementally_cleanup` ← `Compile::Optimize`                                                                                                                                                                                                                                             |
| removed | -288.062 KiB |  <0.1% → 0.0% |       288 KiB → 0 B |         4 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::clone_loop` ← `PhaseIdealLoop::create_reserve_version_of_loop` ← `CountedLoopReserveKit::create_reserve` ← `CountedLoopReserveKit::CountedLoopReserveKit` ← `SuperWord::output` ← `SuperWord::transform_loop` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` |
| removed | -288.031 KiB |  <0.1% → 0.0% |       288 KiB → 0 B |         2 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `PhaseValues::set_type_bottom` ← `PhaseIterGVN::register_new_node_with_optimizer` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                           |
|  -39.6% | -287.312 KiB |          0.1% |   726 KiB → 439 KiB |        13 → 9 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Compile::final_graph_reshaping` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                           |
|   -7.4% | -274.765 KiB |          0.4% | 3.61 MiB → 3.34 MiB |       69 → 62 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                       |
