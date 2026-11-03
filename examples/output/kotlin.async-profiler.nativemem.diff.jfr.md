# Allocated native memory profile diff

Allocated 701 MiB → 933 MiB (+231.644 MiB, +33.0%) over 4,944 → 6,086 samples (145 KiB → 157 KiB per sample).

| Category | Change |        Delta |      % |              Size |       Samples |
| -------- | -----: | -----------: | -----: | ----------------: | ------------: |
| Native   | +33.0% | +231.644 MiB | 100.0% | 701 MiB → 933 MiB | 4,944 → 6,086 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 626 MiB → 858 MiB (89.3% → 91.9%) CompileBroker::compiler_thread_loop at libjvm.dylib
│   └── 626 MiB → 858 MiB (89.3% → 91.9%) CompileBroker::invoke_compiler_on_method
│       ├── 623 MiB → 855 MiB (88.8% → 91.6%) C2Compiler::compile_method
│       │   └── 623 MiB → 855 MiB (88.8% → 91.6%) Compile::Compile
│       │       ├── 332 MiB → 435 MiB (47.3% → 46.7%) Compile::Optimize
│       │       │   ├── 169 MiB → 218 MiB (24.2% → 23.4%) PhaseIdealLoop::optimize
│       │       │   │   └── 168 MiB → 216 MiB (23.9% → 23.2%) PhaseIdealLoop::PhaseIdealLoop
│       │       │   │       └── 168 MiB → 216 MiB (23.9% → 23.2%) PhaseIdealLoop::build_and_optimize
│       │       │   │           ├── … 148 MiB → 189 MiB (21.0% → 20.3%) malloc_hook at libasyncProfiler.dylib
│       │       │   │           ├── … 5.13 MiB → 6.16 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │       │   │           └── 15.1 MiB → 21 MiB (2.2%) 9 more callees, led by (0.6%) Node_Array::grow
│       │       │   ├── … 146 MiB → 194 MiB (20.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │   ├── … 130 MiB → 168 MiB (18.6% → 18.1%) malloc_hook at libasyncProfiler.dylib
│       │       │   │   ├── … 4.75 MiB → 6.6 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │       │   │   └── 10.9 MiB → 18.5 MiB (1.6% → 2.0%) 10 more callees, led by (0.7% → 0.6%) Node_Array::grow
│       │       │   └── 15.1 MiB → 22.5 MiB (2.1% → 2.4%) 15 more callees, led by (0.5%) PhaseIterGVN::optimize
│       │       ├── 279 MiB → 400 MiB (39.7% → 42.9%) Compile::Code_Gen
│       │       │   ├── 235 MiB → 334 MiB (33.5% → 35.8%) PhaseChaitin::Register_Allocate
│       │       │   │   ├── … 187 MiB → 258 MiB (26.7% → 27.7%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│       │       │   │   ├── … 43.9 MiB → 69.1 MiB (6.3% → 7.4%) malloc_hook at libasyncProfiler.dylib
│       │       │   │   └── 3.65 MiB → 6.39 MiB (0.5% → 0.7%) 7 more callees, led by (0.3% → 0.4%) PhaseChaitin::Split
│       │       │   ├── 38.5 MiB → 57 MiB (5.5% → 6.1%) Matcher::match
│       │       │   │   ├── 23.9 MiB → 36.4 MiB (3.4% → 3.9%) Matcher::xform
│       │       │   │   │   ├── … 16.7 MiB → 26.3 MiB (2.4% → 2.8%) malloc_hook at libasyncProfiler.dylib
│       │       │   │   │   └── 7.22 MiB → 10.1 MiB (1.0% → 1.1%) 5 more callees, led by (0.6% → 0.5%) Matcher::match_tree
│       │       │   │   ├── … 10.6 MiB → 15.8 MiB (1.5% → 1.7%) malloc_hook at libasyncProfiler.dylib
│       │       │   │   └── 4 MiB → 4.81 MiB (0.6% → 0.5%) 3 more callees, led by (0.5% → 0.4%) Node_Array::grow
│       │       │   └── 5.3 MiB → 9.25 MiB (0.8% → 1.0%) 5 more callees, led by (0.3% → 0.5%) PhaseCFG::do_global_code_motion
│       │       ├── … 6.91 MiB → 9.63 MiB (1.0%) Parse::do_one_block at libjvm.dylib
│       │       │   └── 6.91 MiB → 9.63 MiB (1.0%) 14 more callees, led by (0.3%) Parse::do_call
│       │       └── 4.25 MiB → 7.47 MiB (0.6% → 0.8%) 6 more callees, led by (0.4% → 0.6%) PhaseRemoveUseless::PhaseRemoveUseless
│       └── 3.69 MiB → 2.84 MiB (0.5% → 0.3%) 3 more callees, led by (0.5% → 0.3%) Compiler::compile_method
└── 74.6 MiB → 75.1 MiB (10.6% → 8.0%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 74.6 MiB → 75.1 MiB (10.6% → 8.0%) run(String[])
        ├── … 60.5 MiB → 60.6 MiB (8.6% → 6.5%) read(byte[], int, int) at java.util.zip.InflaterInputStream
        │   └── … 60.5 MiB (8.6% → 6.5%) malloc_hook at libasyncProfiler.dylib
        └── … 8.78 MiB → 8.92 MiB (1.3% → 1.0%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 6.36 MiB → 6.78 MiB (0.9% → 0.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 6.36 MiB → 6.78 MiB (0.9% → 0.7%) executePhase(ConfigurationPipelineArtifact)
                    └── 6.36 MiB → 6.78 MiB (0.9% → 0.7%) 7 more callees, led by (0.5% → 0.4%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |       Delta |      % |              Size |       Samples | Function      | Location                 |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | ------------------------ |
| +33.0% | +231.64 MiB | 100.0% | 701 MiB → 933 MiB | 4,928 → 6,076 | `malloc_hook` | `libasyncProfiler.dylib` |
| +16.9% |  +4.908 KiB |  <0.1% | 29.1 KiB → 34 KiB |         7 → 5 | `calloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |  Delta |     % |                Size | Samples | Function       | Location                 |
| -----: | -----: | ----: | ------------------: | ------: | -------------- | ------------------------ |
| -38.0% | -835 B | <0.1% | 2.15 KiB → 1.33 KiB |   9 → 5 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Caller          | Location          |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------- | ----------------- |
|  +36.9% | +231.436 MiB | 89.4% → 92.0% |   627 MiB → 858 MiB | 4,465 → 5,620 | `os::malloc`    | `libjvm.dylib`    |
| +242.8% | +213.734 KiB |         <0.1% |    88 KiB → 302 KiB |        9 → 12 | `CCalloc`       | `libverify.dylib` |
|   +2.2% |      +32 KiB |          0.2% | 1.44 MiB → 1.47 MiB |       46 → 47 | `updatewindow`  | `libzip.dylib`    |
| removed |  -16.936 KiB |  <0.1% → 0.0% |      16.9 KiB → 0 B |         1 → 0 | `writeBytes`    | `libjava.dylib`   |
|  -18.2% |  -13.984 KiB |         <0.1% | 76.9 KiB → 62.9 KiB |        11 → 9 | `inflateInit2_` | `libzip.dylib`    |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|  Change |      Delta |             % |             Size | Samples | Caller                             | Location          |
| ------: | ---------: | ------------: | ---------------: | ------: | ---------------------------------- | ----------------- |
|  +33.3% |     +8 KiB | 82.5% → 94.1% |  24 KiB → 32 KiB |   3 → 4 | `make_class_info_from_name`        | `libverify.dylib` |
|  -59.9% | -2.982 KiB |  17.1% → 5.9% | 4.98 KiB → 2 KiB |   3 → 1 | `VerifyClassForMajorVersion`       | `libverify.dylib` |
| removed |     -112 B |   0.4% → 0.0% |      112 B → 0 B |   1 → 0 | `Java_java_util_zip_Inflater_init` | `libzip.dylib`    |

##### `realloc_hook` (`libasyncProfiler.dylib`)

| Change |  Delta |      % |                Size | Samples | Caller        | Location       |
| -----: | -----: | -----: | ------------------: | ------: | ------------- | -------------- |
| -38.0% | -835 B | 100.0% | 2.15 KiB → 1.33 KiB |   9 → 5 | `os::realloc` | `libjvm.dylib` |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |              Size |       Samples | Function                                   | Location                  |
| -----: | -----------: | ------------: | ----------------: | ------------: | ------------------------------------------ | ------------------------- |
| +37.3% | +232.136 MiB | 88.8% → 91.6% | 623 MiB → 855 MiB | 4,131 → 5,283 | `Compile::Compile`                         | `libjvm.dylib`            |
| +37.3% | +232.136 MiB | 88.8% → 91.6% | 623 MiB → 855 MiB | 4,131 → 5,283 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| +33.0% |  +231.64 MiB |        100.0% | 701 MiB → 933 MiB | 4,928 → 6,076 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| +36.9% | +231.436 MiB | 89.4% → 92.0% | 627 MiB → 858 MiB | 4,465 → 5,620 | `os::malloc`                               | `libjvm.dylib`            |
| +36.9% | +231.332 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,270 → 5,401 | `Thread::call_run`                         | `libjvm.dylib`            |
| +36.9% | +231.332 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,270 → 5,401 | `thread_native_entry`                      | `libjvm.dylib`            |
| +36.9% | +231.332 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,270 → 5,401 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| +36.9% | +231.332 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,270 → 5,401 | `thread_start`                             | `libsystem_pthread.dylib` |
| +36.9% |  +231.29 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,263 → 5,389 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| +36.9% |  +231.29 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,263 → 5,389 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| +36.9% | +231.282 MiB | 89.3% → 91.9% | 626 MiB → 858 MiB | 4,263 → 5,388 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| +36.9% | +231.185 MiB | 89.3% → 91.9% | 627 MiB → 858 MiB | 4,243 → 5,361 | `Arena::grow`                              | `libjvm.dylib`            |
| +36.9% | +231.184 MiB | 89.3% → 91.9% | 627 MiB → 858 MiB | 4,244 → 5,361 | `Chunk::operator new`                      | `libjvm.dylib`            |
| +43.6% | +121.526 MiB | 39.7% → 42.9% | 279 MiB → 400 MiB | 1,813 → 2,353 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
| +31.3% | +103.772 MiB | 47.3% → 46.7% | 332 MiB → 435 MiB | 2,159 → 2,722 | `Compile::Optimize`                        | `libjvm.dylib`            |
| +42.2% |  +99.085 MiB | 33.5% → 35.8% | 235 MiB → 334 MiB | 1,355 → 1,725 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |
| +30.4% |  +96.297 MiB | 45.1% → 44.3% | 317 MiB → 413 MiB | 1,939 → 2,408 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
| +30.6% |   +95.89 MiB | 44.7% → 43.9% | 314 MiB → 410 MiB | 1,907 → 2,376 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
| +30.6% |   +95.89 MiB | 44.7% → 43.9% | 314 MiB → 410 MiB | 1,907 → 2,376 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
| +28.6% |  +79.592 MiB | 39.6% → 38.3% | 278 MiB → 357 MiB | 1,258 → 1,498 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

##### Native

|  Change |        Delta |             % |                Size |       Samples | Function                                                           | Location                  |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | ------------------------- |
|  +33.0% |  +231.64 MiB |        100.0% |   701 MiB → 933 MiB | 4,928 → 6,076 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  +36.9% | +231.436 MiB | 89.4% → 92.0% |   627 MiB → 858 MiB | 4,465 → 5,620 | `os::malloc`                                                       | `libjvm.dylib`            |
|  +36.9% | +231.332 MiB | 89.3% → 91.9% |   626 MiB → 858 MiB | 4,270 → 5,401 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  +36.9% | +231.332 MiB | 89.3% → 91.9% |   626 MiB → 858 MiB | 4,270 → 5,401 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  +36.9% | +231.332 MiB | 89.3% → 91.9% |   626 MiB → 858 MiB | 4,270 → 5,401 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  +36.9% | +231.332 MiB | 89.3% → 91.9% |   626 MiB → 858 MiB | 4,270 → 5,401 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  +36.9% |  +231.29 MiB | 89.3% → 91.9% |   626 MiB → 858 MiB | 4,263 → 5,389 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|  +36.9% | +231.185 MiB | 89.3% → 91.9% |   627 MiB → 858 MiB | 4,243 → 5,361 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  +36.9% | +231.184 MiB | 89.3% → 91.9% |   627 MiB → 858 MiB | 4,244 → 5,361 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  +46.5% |  +23.691 MiB |   7.3% → 8.0% | 50.9 MiB → 74.6 MiB |   761 → 1,019 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
| +101.9% |   +4.969 MiB |   0.7% → 1.1% | 4.88 MiB → 9.85 MiB |      71 → 112 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|  +67.1% |    +4.43 MiB |   0.9% → 1.2% |    6.6 MiB → 11 MiB |      94 → 134 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|  +48.0% |    +3.93 MiB |   1.2% → 1.3% |  8.2 MiB → 12.1 MiB |     111 → 144 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|  +48.0% |    +3.93 MiB |   1.2% → 1.3% |  8.2 MiB → 12.1 MiB |     111 → 144 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|  +48.0% |    +3.93 MiB |   1.2% → 1.3% |  8.2 MiB → 12.1 MiB |     111 → 144 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|  +48.0% |    +3.93 MiB |   1.2% → 1.3% |  8.2 MiB → 12.1 MiB |     111 → 144 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|  +30.4% |       +3 MiB |          1.4% | 9.88 MiB → 12.9 MiB |     164 → 195 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
| +113.0% |   +2.507 MiB |   0.3% → 0.5% | 2.22 MiB → 4.73 MiB |       40 → 60 | `IdealLoopTree::iteration_split_impl`                              | `libjvm.dylib`            |
|  +49.4% |   +2.406 MiB |   0.7% → 0.8% | 4.88 MiB → 7.28 MiB |       51 → 72 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|  +79.3% |   +2.355 MiB |   0.4% → 0.6% | 2.97 MiB → 5.32 MiB |       51 → 70 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib`            |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |            % |                Size |   Samples | Function                                      | Location       |
| ------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------- | -------------- |
|  -31.9% |   -1.126 MiB |  0.5% → 0.3% | 3.53 MiB → 2.41 MiB |  111 → 71 | `Compilation::compile_java_method`            | `libjvm.dylib` |
|  -24.0% | -905.884 KiB |  0.5% → 0.3% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compilation::compile_method`                 | `libjvm.dylib` |
|  -24.0% | -905.884 KiB |  0.5% → 0.3% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compilation::Compilation`                    | `libjvm.dylib` |
|  -24.0% | -905.884 KiB |  0.5% → 0.3% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compiler::compile_method`                    | `libjvm.dylib` |
|  -66.7% |     -704 KiB | 0.1% → <0.1% |  1.03 MiB → 352 KiB |     9 → 4 | `PreserveJVMState::PreserveJVMState`          | `libjvm.dylib` |
|  -51.7% |  -574.89 KiB |  0.2% → 0.1% |  1.09 MiB → 538 KiB |   34 → 16 | `Compilation::build_hir`                      | `libjvm.dylib` |
| removed | -512.046 KiB |  0.1% → 0.0% |       512 KiB → 0 B |     3 → 0 | `RangeCheckNode::Ideal`                       | `libjvm.dylib` |
|  -73.2% | -479.671 KiB | 0.1% → <0.1% |   656 KiB → 176 KiB |    22 → 7 | `GraphBuilder::try_inline_full`               | `libjvm.dylib` |
|  -73.2% | -479.671 KiB | 0.1% → <0.1% |   656 KiB → 176 KiB |    22 → 7 | `GraphBuilder::try_inline`                    | `libjvm.dylib` |
|  -42.5% | -476.062 KiB |  0.2% → 0.1% |  1.09 MiB → 644 KiB |   15 → 11 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib` |
|  -42.5% | -476.062 KiB |  0.2% → 0.1% |  1.09 MiB → 644 KiB |   15 → 11 | `PhaseIdealLoop::do_unswitching`              | `libjvm.dylib` |
|  -49.8% | -474.921 KiB |         0.1% |   953 KiB → 478 KiB |   29 → 15 | `GraphBuilder::GraphBuilder`                  | `libjvm.dylib` |
|  -49.8% | -474.921 KiB |         0.1% |   953 KiB → 478 KiB |   29 → 15 | `IRScope::IRScope`                            | `libjvm.dylib` |
|  -49.8% | -474.921 KiB |         0.1% |   953 KiB → 478 KiB |   29 → 15 | `IR::IR`                                      | `libjvm.dylib` |
|  -63.6% | -448.093 KiB | 0.1% → <0.1% |   704 KiB → 256 KiB |     7 → 1 | `GraphKit::maybe_cast_profiled_receiver`      | `libjvm.dylib` |
|  -82.3% | -448.015 KiB | 0.1% → <0.1% |    544 KiB → 96 KiB |     4 → 3 | `Parse::ensure_memory_phi`                    | `libjvm.dylib` |
|  -21.2% | -444.437 KiB |  0.3% → 0.2% | 2.05 MiB → 1.62 MiB |   63 → 43 | `Compilation::emit_lir`                       | `libjvm.dylib` |
|  -59.1% |  -416.07 KiB | 0.1% → <0.1% |   704 KiB → 288 KiB |     8 → 6 | `PhaseIdealLoop::split_thru_phi`              | `libjvm.dylib` |
|  -70.6% | -384.085 KiB | 0.1% → <0.1% |   544 KiB → 160 KiB |     6 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre`    | `libjvm.dylib` |
|  -66.7% | -384.062 KiB | 0.1% → <0.1% |   576 KiB → 192 KiB |     7 → 3 | `GraphKit::gen_subtype_check`                 | `libjvm.dylib` |

##### Native

|  Change |        Delta |            % |                Size |   Samples | Function                              | Location       |
| ------: | -----------: | -----------: | ------------------: | --------: | ------------------------------------- | -------------- |
|  -24.0% | -905.884 KiB |  0.5% → 0.3% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compiler::compile_method`            | `libjvm.dylib` |
|  -66.7% |     -704 KiB | 0.1% → <0.1% |  1.03 MiB → 352 KiB |     9 → 4 | `PreserveJVMState::PreserveJVMState`  | `libjvm.dylib` |
|  -49.8% | -474.921 KiB |         0.1% |   953 KiB → 478 KiB |   29 → 15 | `IRScope::IRScope`                    | `libjvm.dylib` |
|  -49.8% | -474.921 KiB |         0.1% |   953 KiB → 478 KiB |   29 → 15 | `IR::IR`                              | `libjvm.dylib` |
|  -82.3% | -448.015 KiB | 0.1% → <0.1% |    544 KiB → 96 KiB |     4 → 3 | `Parse::ensure_memory_phi`            | `libjvm.dylib` |
|  -68.7% | -352.031 KiB | 0.1% → <0.1% |   512 KiB → 160 KiB |     5 → 3 | `Parse::do_instanceof`                | `libjvm.dylib` |
|  -84.6% | -351.992 KiB | 0.1% → <0.1% |    416 KiB → 64 KiB |     3 → 1 | `DirectCallGenerator::generate`       | `libjvm.dylib` |
|  -64.7% | -351.984 KiB | 0.1% → <0.1% |   544 KiB → 192 KiB |     4 → 5 | `Parse::merge_memory_edges`           | `libjvm.dylib` |
|  -52.6% | -320.023 KiB | 0.1% → <0.1% |   608 KiB → 288 KiB |     6 → 7 | `Parse::merge_common`                 | `libjvm.dylib` |
|  -61.5% | -229.976 KiB | 0.1% → <0.1% |   374 KiB → 144 KiB |    10 → 4 | `CodeEmitInfo::record_debug_info`     | `libjvm.dylib` |
|  -60.0% | -192.046 KiB |        <0.1% |   320 KiB → 128 KiB |     4 → 1 | `BarrierSetC2::store_at_resolved`     | `libjvm.dylib` |
| removed | -192.031 KiB | <0.1% → 0.0% |       192 KiB → 0 B |     2 → 0 | `Parse::array_store`                  | `libjvm.dylib` |
|  -68.3% | -176.607 KiB |        <0.1% |  258 KiB → 81.8 KiB |    12 → 8 | `break_stack_range`                   | `<unknown>`    |
|  -19.0% | -127.906 KiB |         0.1% |   672 KiB → 544 KiB |     7 → 8 | `Parse::array_addressing`             | `libjvm.dylib` |
| removed |  -96.031 KiB | <0.1% → 0.0% |        96 KiB → 0 B |     2 → 0 | `split_if`                            | `libjvm.dylib` |
| removed |  -95.929 KiB | <0.1% → 0.0% |      95.9 KiB → 0 B |     3 → 0 | `MoveResolver::resolve_mappings`      | `libjvm.dylib` |
| removed |  -95.929 KiB | <0.1% → 0.0% |      95.9 KiB → 0 B |     3 → 0 | `IR::split_critical_edges`            | `libjvm.dylib` |
|  -56.2% |   -82.07 KiB |        <0.1% |    146 KiB → 64 KiB |     4 → 2 | `ImplicitNullCheckStub::emit_code`    | `libjvm.dylib` |
|  -41.6% |  -79.929 KiB |        <0.1% |   192 KiB → 112 KiB |     6 → 3 | `IRScopeDebugInfo::record_debug_info` | `libjvm.dylib` |
|  -42.8% |  -71.906 KiB |        <0.1% |    168 KiB → 96 KiB |     4 → 2 | `InlineTree::ok_to_inline`            | `libjvm.dylib` |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Compile` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller                       | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------------- | -------------- |
| +37.3% | +232.136 MiB | 100.0% | 623 MiB → 855 MiB | 4,131 → 5,283 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------------------------ | -------------- |
| +37.3% | +232.136 MiB | 100.0% | 623 MiB → 855 MiB | 4,131 → 5,283 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Caller          | Location          |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------- | ----------------- |
|  +36.9% | +231.436 MiB | 89.4% → 92.0% |   627 MiB → 858 MiB | 4,465 → 5,620 | `os::malloc`    | `libjvm.dylib`    |
| +242.8% | +213.734 KiB |         <0.1% |    88 KiB → 302 KiB |        9 → 12 | `CCalloc`       | `libverify.dylib` |
|   +2.2% |      +32 KiB |          0.2% | 1.44 MiB → 1.47 MiB |       46 → 47 | `updatewindow`  | `libzip.dylib`    |
| removed |  -16.936 KiB |  <0.1% → 0.0% |      16.9 KiB → 0 B |         1 → 0 | `writeBytes`    | `libjava.dylib`   |
|  -18.2% |  -13.984 KiB |         <0.1% | 76.9 KiB → 62.9 KiB |        11 → 9 | `inflateInit2_` | `libzip.dylib`    |

##### `os::malloc` (`libjvm.dylib`)

|   Change |        Delta |     % |              Size |       Samples | Caller                      | Location       |
| -------: | -----------: | ----: | ----------------: | ------------: | --------------------------- | -------------- |
|   +36.9% | +231.184 MiB | 99.9% | 627 MiB → 858 MiB | 4,244 → 5,361 | `Chunk::operator new`       | `libjvm.dylib` |
|   +60.8% | +257.917 KiB |  0.1% | 424 KiB → 682 KiB |     204 → 242 | `AllocateHeap`              | `libjvm.dylib` |
| +1786.7% |   +8.375 KiB | <0.1% |  480 B → 8.84 KiB |        6 → 11 | `AnyObj::operator new`      | `libjvm.dylib` |
|   -90.4% |   -7.531 KiB | <0.1% |  8.33 KiB → 816 B |         9 → 4 | `os::malloc`                | `libjvm.dylib` |
|   -90.4% |   -7.531 KiB | <0.1% |  8.33 KiB → 816 B |         9 → 4 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller                | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
| +36.9% | +231.332 MiB | 100.0% | 626 MiB → 858 MiB | 4,270 → 5,401 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller           | Location                  |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------- | ------------------------- |
| +36.9% | +231.332 MiB | 100.0% | 626 MiB → 858 MiB | 4,270 → 5,401 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller         | Location                  |
| -----: | -----------: | -----: | ----------------: | ------------: | -------------- | ------------------------- |
| +36.9% | +231.332 MiB | 100.0% | 626 MiB → 858 MiB | 4,270 → 5,401 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                          | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------- | -------------- |
| +36.9% | +231.29 MiB | 100.0% | 626 MiB → 858 MiB | 4,263 → 5,389 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
| +36.9% | +231.29 MiB | 100.0% | 626 MiB → 858 MiB | 4,263 → 5,389 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller                                | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------------------- | -------------- |
| +36.9% | +231.282 MiB | 100.0% | 626 MiB → 858 MiB | 4,263 → 5,388 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Caller                       | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | ---------------------------- | -------------- |
| +28.7% | +79.623 MiB | 44.3% → 41.7% |   278 MiB → 357 MiB | 1,257 → 1,498 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| +38.0% | +70.999 MiB | 29.8% → 30.1% |   187 MiB → 258 MiB |   911 → 1,106 | `PhaseIFG::init`             | `libjvm.dylib` |
| +57.3% | +25.159 MiB |   7.0% → 8.1% | 43.9 MiB → 69.1 MiB |     376 → 516 | `PhaseLive::compute`         | `libjvm.dylib` |
| +46.5% | +23.691 MiB |   8.1% → 8.7% | 50.9 MiB → 74.6 MiB |   761 → 1,019 | `Arena::Arealloc`            | `libjvm.dylib` |
| +57.6% |  +9.599 MiB |   2.7% → 3.1% | 16.7 MiB → 26.3 MiB |     108 → 142 | `Matcher::xform`             | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change |        Delta |            % |              Size |       Samples | Caller         | Location       |
| ------: | -----------: | -----------: | ----------------: | ------------: | -------------- | -------------- |
|  +36.9% | +231.185 MiB |       100.0% | 627 MiB → 858 MiB | 4,243 → 5,361 | `Arena::grow`  | `libjvm.dylib` |
| removed |     -1,000 B | <0.1% → 0.0% |     1,000 B → 0 B |         1 → 0 | `Arena::Arena` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
| +43.6% | +121.526 MiB | 100.0% | 279 MiB → 400 MiB | 1,813 → 2,353 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
| +31.3% | +103.772 MiB | 100.0% | 332 MiB → 435 MiB | 2,159 → 2,722 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
| +42.2% | +99.085 MiB | 100.0% | 235 MiB → 334 MiB | 1,355 → 1,725 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |       Delta |             % |              Size |       Samples | Caller                    | Location       |
| -----: | ----------: | ------------: | ----------------: | ------------: | ------------------------- | -------------- |
| +28.6% |  +48.53 MiB | 53.5% → 52.8% | 169 MiB → 218 MiB | 1,095 → 1,361 | `Compile::Optimize`       | `libjvm.dylib` |
| +32.4% | +47.766 MiB | 46.5% → 47.2% | 147 MiB → 195 MiB |   844 → 1,047 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                           | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | -------------------------------- | -------------- |
| +30.6% | +95.89 MiB | 100.0% | 314 MiB → 410 MiB | 1,907 → 2,376 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                     | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
| +30.6% | +95.89 MiB | 100.0% | 314 MiB → 410 MiB | 1,907 → 2,376 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
| +28.6% | +79.592 MiB | 100.0% | 278 MiB → 357 MiB | 1,258 → 1,498 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |             % |                Size |   Samples | Caller                     | Location       |
| -----: | ---------: | ------------: | ------------------: | --------: | -------------------------- | -------------- |
| +38.0% | +11.47 MiB | 59.2% → 55.8% | 30.2 MiB → 41.6 MiB | 507 → 620 | `Node_Array::grow`         | `libjvm.dylib` |
| +53.2% | +2.875 MiB | 10.6% → 11.1% | 5.41 MiB → 8.28 MiB |  90 → 128 | `PhaseIdealLoop::set_idom` | `libjvm.dylib` |
| +81.4% | +2.469 MiB |   6.0% → 7.4% |  3.03 MiB → 5.5 MiB |   24 → 52 | `Node::out_grow`           | `libjvm.dylib` |
| +49.4% | +2.406 MiB |   9.6% → 9.8% | 4.88 MiB → 7.28 MiB |   51 → 72 | `Type_Array::grow`         | `libjvm.dylib` |
| +64.5% |  +1.25 MiB |   3.8% → 4.3% | 1.94 MiB → 3.19 MiB |   19 → 27 | `Block_Array::grow`        | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |              % |                Size |  Samples | Caller                                 | Location       |
| ------: | -----------: | -------------: | ------------------: | -------: | -------------------------------------- | -------------- |
|  +99.4% |   +4.844 MiB | 100.0% → 98.7% | 4.88 MiB → 9.72 MiB | 71 → 110 | `Parse::do_call`                       | `libjvm.dylib` |
| +118.3% |   +3.031 MiB |  52.6% → 56.8% | 2.56 MiB → 5.59 MiB |  40 → 60 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| +300.0% | +192.031 KiB |    1.3% → 2.5% |    64 KiB → 256 KiB |    1 → 3 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

| Change |     Delta |      % |             Size |  Samples | Caller                | Location       |
| -----: | --------: | -----: | ---------------: | -------: | --------------------- | -------------- |
| +67.1% | +4.43 MiB | 100.0% | 6.6 MiB → 11 MiB | 94 → 134 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |     Delta |      % |               Size |   Samples | Caller                 | Location       |
| -----: | --------: | -----: | -----------------: | --------: | ---------------------- | -------------- |
| +48.0% | +3.93 MiB | 100.0% | 8.2 MiB → 12.1 MiB | 111 → 144 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |     Delta |      % |               Size |   Samples | Caller         | Location       |
| -----: | --------: | -----: | -----------------: | --------: | -------------- | -------------- |
| +48.0% | +3.93 MiB | 100.0% | 8.2 MiB → 12.1 MiB | 111 → 144 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |     Delta |      % |               Size |   Samples | Caller                     | Location       |
| -----: | --------: | -----: | -----------------: | --------: | -------------------------- | -------------- |
| +48.0% | +3.93 MiB | 100.0% | 8.2 MiB → 12.1 MiB | 111 → 144 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |   Samples | Caller                                 | Location       |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------- | -------------- |
| +116.0% |   +5.219 MiB | 54.9% → 80.2% |  4.5 MiB → 9.72 MiB |  69 → 109 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  +93.3% |   +4.344 MiB | 56.8% → 74.2% |    4.66 MiB → 9 MiB |  72 → 104 | `Parse::do_call`                       | `libjvm.dylib` |
|  +44.5% |   +3.618 MiB | 99.2% → 96.9% | 8.13 MiB → 11.8 MiB | 110 → 140 | `Compile::Compile`                     | `libjvm.dylib` |
|     new | +192.031 KiB |   0.0% → 1.5% |       0 B → 192 KiB |     0 → 2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |        Delta |              % |                Size |   Samples | Caller                                               | Location       |
| -----: | -----------: | -------------: | ------------------: | --------: | ---------------------------------------------------- | -------------- |
| +29.1% |   +2.875 MiB | 100.0% → 99.0% | 9.88 MiB → 12.8 MiB | 164 → 193 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|    new | +128.031 KiB |    0.0% → 1.0% |       0 B → 128 KiB |     0 → 2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

|  Change |      Delta |      % |                Size | Samples | Caller                           | Location       |
| ------: | ---------: | -----: | ------------------: | ------: | -------------------------------- | -------------- |
| +113.0% | +2.507 MiB | 100.0% | 2.22 MiB → 4.73 MiB | 40 → 60 | `IdealLoopTree::iteration_split` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Caller                         | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------ | -------------- |
| +225.0% |   +1.125 MiB | 10.3% → 22.3% | 512 KiB → 1.63 MiB |  6 → 13 | `IdealKit::delay_transform`    | `libjvm.dylib` |
| +283.3% | +544.093 KiB |   3.8% → 9.9% |  192 KiB → 736 KiB |   2 → 8 | `Parse::build_exits`           | `libjvm.dylib` |
| +599.9% | +384.031 KiB |   1.3% → 6.0% |   64 KiB → 448 KiB |   1 → 3 | `Parse::return_current`        | `libjvm.dylib` |
|  -76.9% |     -320 KiB |   8.3% → 1.3% |   416 KiB → 96 KiB |       3 | `Parse::ensure_memory_phi`     | `libjvm.dylib` |
|     new | +256.015 KiB |   0.0% → 3.4% |      0 B → 256 KiB |   0 → 1 | `Parse::sharpen_type_after_if` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

| Change |      Delta |             % |                Size | Samples | Caller                               | Location       |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------------------------------ | -------------- |
| +79.3% | +2.355 MiB |        100.0% | 2.97 MiB → 5.32 MiB | 51 → 70 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| +78.4% |  +2.23 MiB | 95.8% → 95.3% | 2.84 MiB → 5.07 MiB | 48 → 64 | `IdealLoopTree::iteration_split`     | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |  Samples | Caller                        | Location       |
| -----: | ---------: | -----: | ------------------: | -------: | ----------------------------- | -------------- |
| -31.9% | -1.126 MiB | 100.0% | 3.53 MiB → 2.41 MiB | 111 → 71 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Caller                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| -24.0% | -905.884 KiB | 100.0% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Caller                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| -24.0% | -905.884 KiB | 100.0% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------------------ | -------------- |
| -24.0% | -905.884 KiB | 100.0% | 3.69 MiB → 2.81 MiB | 132 → 103 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                             | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
| removed |     -480 KiB |  45.5% → 0.0% |     480 KiB → 0 B |   5 → 0 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  -60.0% | -192.031 KiB | 30.3% → 36.4% | 320 KiB → 128 KiB |   3 → 1 | `Parse::do_if`                     | `libjvm.dylib` |
|  -25.0% |  -63.984 KiB | 24.2% → 54.5% | 256 KiB → 192 KiB |   1 → 2 | `Parse::array_addressing`          | `libjvm.dylib` |
|     new |  +32.015 KiB |   0.0% → 9.1% |      0 B → 32 KiB |   0 → 1 | `Parse::do_ifnull`                 | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

| Change |       Delta |      % |               Size | Samples | Caller                             | Location       |
| -----: | ----------: | -----: | -----------------: | ------: | ---------------------------------- | -------------- |
| -51.7% | -574.89 KiB | 100.0% | 1.09 MiB → 538 KiB | 34 → 16 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `RangeCheckNode::Ideal` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Caller                        | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | -------------- |
| removed | -512.046 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   3 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                     | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------- | -------------- |
| -73.2% | -479.671 KiB | 100.0% | 656 KiB → 176 KiB |  22 → 7 | `GraphBuilder::try_inline` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                 | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------------- | -------------- |
| -73.2% | -479.671 KiB | 100.0% | 656 KiB → 176 KiB |  22 → 7 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `PhaseIdealLoop::create_slow_version_of_loop` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                           | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------- | -------------- |
| -42.5% | -476.062 KiB | 100.0% | 1.09 MiB → 644 KiB | 15 → 11 | `PhaseIdealLoop::do_unswitching` | `libjvm.dylib` |

##### `PhaseIdealLoop::do_unswitching` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                                | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
| -90.9% | -320.046 KiB |  31.4% → 5.0% |  352 KiB → 32 KiB |   4 → 1 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
| -20.3% | -156.015 KiB | 68.6% → 95.0% | 768 KiB → 612 KiB | 11 → 10 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller             | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------ | -------------- |
| -49.8% | -474.921 KiB | 100.0% | 953 KiB → 478 KiB | 29 → 15 | `IRScope::IRScope` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller   | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | -------- | -------------- |
| -49.8% | -474.921 KiB | 100.0% | 953 KiB → 478 KiB | 29 → 15 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                   | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------ | -------------- |
| -49.8% | -474.921 KiB | 100.0% | 953 KiB → 478 KiB | 29 → 15 | `Compilation::build_hir` | `libjvm.dylib` |

##### `GraphKit::maybe_cast_profiled_receiver` (`libjvm.dylib`)

|  Change |        Delta |              % |          Size | Samples | Caller                     | Location       |
| ------: | -----------: | -------------: | ------------: | ------: | -------------------------- | -------------- |
| removed | -448.062 KiB |   63.6% → 0.0% | 448 KiB → 0 B |   4 → 0 | `GraphKit::gen_instanceof` | `libjvm.dylib` |
|     ~0% |        -32 B | 36.4% → 100.0% |       256 KiB |   3 → 1 | `GraphKit::gen_checkcast`  | `libjvm.dylib` |

##### `Parse::ensure_memory_phi` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Caller                      | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | --------------------------- | -------------- |
| -82.3% | -448.015 KiB | 100.0% | 544 KiB → 96 KiB |   4 → 3 | `Parse::merge_memory_edges` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                             | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------------- | -------------- |
| -21.2% | -444.437 KiB | 100.0% | 2.05 MiB → 1.62 MiB | 63 → 43 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_thru_phi` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Caller                                      | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------- | -------------- |
| -70.6% | -384.085 KiB | 77.3% → 55.5% | 544 KiB → 160 KiB |   6 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
| -20.0% |  -31.984 KiB | 22.7% → 44.5% | 160 KiB → 128 KiB |   2 → 3 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                                 | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------- | -------------- |
| -70.6% | -384.085 KiB | 100.0% | 544 KiB → 160 KiB |   6 → 3 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `GraphKit::gen_subtype_check` (`libjvm.dylib`)

|  Change |        Delta |            % |             Size | Samples | Caller                             | Location       |
| ------: | -----------: | -----------: | ---------------: | ------: | ---------------------------------- | -------------- |
| removed | -416.046 KiB | 72.2% → 0.0% |    416 KiB → 0 B |   3 → 0 | `GraphKit::gen_checkcast`          | `libjvm.dylib` |
| +299.9% |  +96.015 KiB | 5.6% → 66.7% | 32 KiB → 128 KiB |   1 → 2 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
| removed |  -64.031 KiB | 11.1% → 0.0% |     64 KiB → 0 B |   2 → 0 | `Parse::catch_inline_exceptions`   | `libjvm.dylib` |

##### `Parse::do_instanceof` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| -68.7% | -352.031 KiB | 100.0% | 512 KiB → 160 KiB |   5 → 3 | `Parse::do_one_block` | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Caller                             | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | -------------- |
| removed | -416.007 KiB | 100.0% → 0.0% | 416 KiB → 0 B |   3 → 0 | `Parse::do_call`                   | `libjvm.dylib` |
|     new |  +64.015 KiB | 0.0% → 100.0% |  0 B → 64 KiB |   0 → 1 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::merge_memory_edges` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| -64.7% | -351.984 KiB | 100.0% | 544 KiB → 192 KiB |   4 → 5 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::merge_common` (`libjvm.dylib`)

| Change |        Delta |             % |             Size | Samples | Caller                   | Location       |
| -----: | -----------: | ------------: | ---------------: | ------: | ------------------------ | -------------- |
| -78.6% | -352.015 KiB | 73.7% → 33.3% | 448 KiB → 96 KiB |   4 → 3 | `Parse::do_all_blocks`   | `libjvm.dylib` |
|    new |  +64.015 KiB |  0.0% → 22.2% |     0 B → 64 KiB |   0 → 1 | `Parse::Parse`           | `libjvm.dylib` |
| -40.0% |      -64 KiB | 26.3% → 33.3% | 160 KiB → 96 KiB |       2 | `Parse::do_if`           | `libjvm.dylib` |
|    new |  +31.976 KiB |  0.0% → 11.1% |     0 B → 32 KiB |   0 → 1 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                         | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------ | -------------- |
| -61.5% | -229.976 KiB | 100.0% | 374 KiB → 144 KiB |  10 → 4 | `LIR_Assembler::add_call_info` | `libjvm.dylib` |

##### `BarrierSetC2::store_at_resolved` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------------------- | -------------- |
| -60.0% | -192.046 KiB | 100.0% | 320 KiB → 128 KiB |   4 → 1 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `Parse::array_store` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | -------------- |
| removed | -192.031 KiB | 100.0% → 0.0% | 192 KiB → 0 B |   2 → 0 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Caller               | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | -------------------- | -------------- |
| removed | -192.031 KiB |   28.6% → 0.0% |     192 KiB → 0 B |   2 → 0 | `Parse::array_store` | `libjvm.dylib` |
|  +13.4% |  +64.125 KiB | 71.4% → 100.0% | 480 KiB → 544 KiB |   5 → 8 | `Parse::array_load`  | `libjvm.dylib` |

##### `split_if` (`libjvm.dylib`)

|  Change |       Delta |             % |         Size | Samples | Caller                 | Location       |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------- | -------------- |
| removed | -96.031 KiB | 100.0% → 0.0% | 96 KiB → 0 B |   2 → 0 | `IfNode::Ideal_common` | `libjvm.dylib` |

##### `MoveResolver::resolve_mappings` (`libjvm.dylib`)

|  Change |       Delta |            % |         Size | Samples | Caller                          | Location       |
| ------: | ----------: | -----------: | -----------: | ------: | ------------------------------- | -------------- |
| removed | -63.953 KiB | 66.7% → 0.0% | 64 KiB → 0 B |   2 → 0 | `LinearScan::resolve_data_flow` | `libjvm.dylib` |
| removed | -31.976 KiB | 33.3% → 0.0% | 32 KiB → 0 B |   1 → 0 | `LinearScanWalker::insert_move` | `libjvm.dylib` |

##### `IR::split_critical_edges` (`libjvm.dylib`)

|  Change |       Delta |             % |           Size | Samples | Caller                   | Location       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------ | -------------- |
| removed | -95.929 KiB | 100.0% → 0.0% | 95.9 KiB → 0 B |   3 → 0 | `Compilation::build_hir` | `libjvm.dylib` |

##### `ImplicitNullCheckStub::emit_code` (`libjvm.dylib`)

| Change |      Delta |      % |             Size | Samples | Caller                                | Location       |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------- | -------------- |
| -56.2% | -82.07 KiB | 100.0% | 146 KiB → 64 KiB |   4 → 2 | `LIR_Assembler::emit_slow_case_stubs` | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

|  Change |       Delta |             % |              Size | Samples | Caller                                | Location       |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------------------------------- | -------------- |
|  -41.6% | -79.929 KiB |        100.0% | 192 KiB → 112 KiB |   6 → 3 | `CodeEmitInfo::record_debug_info`     | `libjvm.dylib` |
| +150.3% | +48.054 KiB | 16.7% → 71.4% |   32 KiB → 80 KiB |   1 → 2 | `IRScopeDebugInfo::record_debug_info` | `libjvm.dylib` |

##### `InlineTree::ok_to_inline` (`libjvm.dylib`)

| Change |       Delta |      % |             Size | Samples | Caller                    | Location       |
| -----: | ----------: | -----: | ---------------: | ------: | ------------------------- | -------------- |
| -42.8% | -71.906 KiB | 100.0% | 168 KiB → 96 KiB |   4 → 2 | `Compile::call_generator` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Compile::Compile` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  +43.6% | +121.526 MiB | 44.7% → 46.8% |   279 MiB → 400 MiB | 1,813 → 2,353 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  +31.3% | +103.772 MiB | 53.3% → 50.9% |   332 MiB → 435 MiB | 2,159 → 2,722 | `Compile::Optimize`                      | `libjvm.dylib` |
|  +44.5% |   +3.618 MiB |   1.3% → 1.4% | 8.13 MiB → 11.8 MiB |     110 → 140 | `ParseGenerator::generate`               | `libjvm.dylib` |
| +102.1% |   +3.062 MiB |   0.5% → 0.7% |    3 MiB → 6.06 MiB |       34 → 49 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  +66.7% | +128.015 KiB |         <0.1% |   192 KiB → 320 KiB |         2 → 3 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
| +37.3% | +232.136 MiB | 100.0% | 623 MiB → 855 MiB | 4,131 → 5,283 | `Compile::Compile` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee        | Location                 |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------- | ------------------------ |
| +36.9% | +231.436 MiB | 100.0% | 627 MiB → 858 MiB | 4,465 → 5,620 | `malloc_hook` | `libasyncProfiler.dylib` |
| -90.4% |   -7.531 KiB |  <0.1% |  8.33 KiB → 816 B |         9 → 4 | `os::malloc`  | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change |       Delta |      % |                Size |       Samples | Callee                          | Location       |
| ------: | ----------: | -----: | ------------------: | ------------: | ------------------------------- | -------------- |
|  +36.9% | +231.29 MiB | 100.0% |   626 MiB → 858 MiB | 4,263 → 5,389 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  +44.6% | +38.812 KiB |  <0.1% |  87.1 KiB → 126 KiB |         4 → 5 | `WorkerThread::run`             | `libjvm.dylib` |
| +119.3% |  +3.617 KiB |  <0.1% | 3.03 KiB → 6.65 KiB |         3 → 7 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
| +36.9% | +231.332 MiB | 100.0% | 626 MiB → 858 MiB | 4,270 → 5,401 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
| +36.9% | +231.332 MiB | 100.0% | 626 MiB → 858 MiB | 4,270 → 5,401 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee           | Location                  |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------- | ------------------------- |
| +36.9% | +231.332 MiB | 100.0% | 626 MiB → 858 MiB | 4,270 → 5,401 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |        Delta |            % |              Size |       Samples | Callee                                         | Location       |
| -----: | -----------: | -----------: | ----------------: | ------------: | ---------------------------------------------- | -------------- |
| +36.9% | +231.282 MiB |       100.0% | 626 MiB → 858 MiB | 4,263 → 5,388 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|    new |   +8.062 KiB | 0.0% → <0.1% |    0 B → 8.06 KiB |         0 → 1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------- | -------------- |
| +36.9% | +231.29 MiB | 100.0% | 626 MiB → 858 MiB | 4,263 → 5,389 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                        | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------- | -------------- |
| +37.3% | +232.136 MiB | 99.4% → 99.7% |   623 MiB → 855 MiB | 4,131 → 5,283 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| -24.0% | -905.884 KiB |   0.6% → 0.3% | 3.69 MiB → 2.81 MiB |     132 → 103 | `Compiler::compile_method`    | `libjvm.dylib` |
|    new |  +31.976 KiB |  0.0% → <0.1% |        0 B → 32 KiB |         0 → 1 | `ciEnv::ciEnv`                | `libjvm.dylib` |
|    new |        +28 B |  0.0% → <0.1% |          0 B → 28 B |         0 → 1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee                | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
| +36.9% | +231.185 MiB | 100.0% | 627 MiB → 858 MiB | 4,243 → 5,361 | `Chunk::operator new` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Callee       | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------ | -------------- |
| +36.9% | +231.184 MiB | 100.0% | 627 MiB → 858 MiB | 4,244 → 5,361 | `os::malloc` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
| +42.2% |  +99.085 MiB | 84.3% → 83.5% |   235 MiB → 334 MiB | 1,355 → 1,725 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| +48.1% |  +18.493 MiB | 13.8% → 14.2% |   38.5 MiB → 57 MiB |     368 → 472 | `Matcher::match`                  | `libjvm.dylib` |
| +95.6% |   +2.056 MiB |   0.8% → 1.1% | 2.15 MiB → 4.21 MiB |       33 → 66 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| +54.6% |  +896.89 KiB |          0.6% | 1.61 MiB → 2.48 MiB |       22 → 37 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
| +63.3% | +845.757 KiB |          0.5% |  1.3 MiB → 2.13 MiB |       26 → 41 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Callee                                 | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | -------------------------------------- | -------------- |
| +28.6% |  +48.53 MiB | 51.1% → 50.0% |   169 MiB → 218 MiB | 1,095 → 1,361 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| +32.4% | +47.766 MiB | 44.4% → 44.8% |   147 MiB → 195 MiB |   844 → 1,047 | `Compile::optimize_loops`              | `libjvm.dylib` |
| +71.9% |  +1.846 MiB |   0.8% → 1.0% | 2.57 MiB → 4.41 MiB |       50 → 76 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
| +57.3% |  +1.269 MiB |   0.7% → 0.8% | 2.22 MiB → 3.49 MiB |       37 → 58 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
| +49.2% |  +1.251 MiB |   0.8% → 0.9% |  2.55 MiB → 3.8 MiB |       41 → 50 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |     Samples | Callee                                           | Location       |
| ------: | -----------: | ------------: | ------------------: | ----------: | ------------------------------------------------ | -------------- |
|  +38.0% |  +70.999 MiB | 79.6% → 77.3% |   187 MiB → 258 MiB | 911 → 1,106 | `PhaseIFG::init`                                 | `libjvm.dylib` |
|  +57.4% |  +25.347 MiB | 18.8% → 20.8% | 44.2 MiB → 69.5 MiB |   383 → 529 | `PhaseLive::compute`                             | `libjvm.dylib` |
| +112.0% |   +2.135 MiB |   0.8% → 1.2% | 1.91 MiB → 4.04 MiB |     31 → 51 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
| +158.1% | +542.171 KiB |   0.1% → 0.3% |   343 KiB → 885 KiB |      6 → 12 | `PhaseRegAlloc::alloc_node_regs`                 | `libjvm.dylib` |
|  +38.9% |  +139.39 KiB |          0.1% |   359 KiB → 498 KiB |       6 → 7 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | -------------- |
| +30.6% |   +95.89 MiB | 99.1% → 99.2% |   314 MiB → 410 MiB | 1,907 → 2,376 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| +14.4% | +416.078 KiB |   0.9% → 0.8% | 2.81 MiB → 3.22 MiB |            32 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Callee                                                             | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------ | -------------- |
| +28.6% | +79.592 MiB | 88.5% → 87.2% |   278 MiB → 357 MiB | 1,258 → 1,498 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| +84.6% |  +3.886 MiB |   1.5% → 2.1% | 4.59 MiB → 8.48 MiB |      83 → 154 | `Arena::grow`                                                      | `libjvm.dylib` |
| +29.1% |  +2.875 MiB |          3.1% | 9.88 MiB → 12.8 MiB |     164 → 193 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
| +27.0% |  +2.406 MiB |          2.8% | 8.91 MiB → 11.3 MiB |     158 → 180 | `Node_Array::grow`                                                 | `libjvm.dylib` |
| +79.3% |  +2.355 MiB |   0.9% → 1.3% | 2.97 MiB → 5.32 MiB |       51 → 70 | `IdealLoopTree::iteration_split`                                   | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee                               | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
| +30.6% | +95.89 MiB | 100.0% | 314 MiB → 410 MiB | 1,907 → 2,376 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change |       Delta |            % |              Size |       Samples | Callee         | Location       |
| ------: | ----------: | -----------: | ----------------: | ------------: | -------------- | -------------- |
|  +28.7% | +79.623 MiB |       100.0% | 278 MiB → 357 MiB | 1,257 → 1,498 | `Arena::grow`  | `libjvm.dylib` |
| removed | -31.976 KiB | <0.1% → 0.0% |      32 KiB → 0 B |         1 → 0 | `NTarjan::DFS` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |     Samples | Callee        | Location       |
| -----: | ----------: | -----: | ------------------: | ----------: | ------------- | -------------- |
| +46.5% | +23.691 MiB | 100.0% | 50.9 MiB → 74.6 MiB | 761 → 1,019 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------ | -------------- |
| +116.0% |   +5.219 MiB | 92.3% → 98.7% |  4.5 MiB → 9.72 MiB | 69 → 109 | `ParseGenerator::generate`           | `libjvm.dylib` |
| +118.3% |   +3.031 MiB | 52.6% → 56.8% | 2.56 MiB → 5.59 MiB |  40 → 60 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
| removed |     -480 KiB |   9.6% → 0.0% |       480 KiB → 0 B |    5 → 0 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
| +150.0% | +384.031 KiB |   5.1% → 6.3% |   256 KiB → 640 KiB |    1 → 3 | `GraphKit::type_check_receiver`      | `libjvm.dylib` |
| +100.0% | +128.031 KiB |   2.6% → 2.5% |   128 KiB → 256 KiB |    3 → 5 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                             | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ---------------------------------- | -------------- |
|  +99.4% |   +4.844 MiB | 73.8% → 88.1% | 4.88 MiB → 9.72 MiB | 71 → 110 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  +93.3% |   +4.344 MiB | 70.5% → 81.6% |    4.66 MiB → 9 MiB | 72 → 104 | `ParseGenerator::generate`         | `libjvm.dylib` |
| +118.7% | +608.062 KiB |   7.6% → 9.9% |  512 KiB → 1.09 MiB |    5 → 9 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
| removed | -416.007 KiB |   6.2% → 0.0% |       416 KiB → 0 B |    3 → 0 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  -42.8% |  -71.906 KiB |   2.5% → 0.8% |    168 KiB → 96 KiB |    4 → 2 | `Compile::call_generator`          | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                   | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------ | -------------- |
|  +67.1% |    +4.43 MiB | 80.6% → 91.0% |    6.6 MiB → 11 MiB | 94 → 134 | `Parse::do_call`         | `libjvm.dylib` |
| +116.0% |   +1.812 MiB | 19.1% → 27.8% | 1.56 MiB → 3.38 MiB |  25 → 38 | `Parse::do_field_access` | `libjvm.dylib` |
| +374.9% | +480.031 KiB |   1.5% → 4.9% |   128 KiB → 608 KiB |    3 → 5 | `Parse::return_current`  | `libjvm.dylib` |
|  -68.7% | -352.031 KiB |   6.1% → 1.3% |   512 KiB → 160 KiB |    5 → 3 | `Parse::do_instanceof`   | `libjvm.dylib` |
| removed | -192.031 KiB |   2.3% → 0.0% |       192 KiB → 0 B |    2 → 0 | `Parse::array_store`     | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |        Delta |           % |               Size |   Samples | Callee                | Location       |
| -----: | -----------: | ----------: | -----------------: | --------: | --------------------- | -------------- |
| +48.0% |    +3.93 MiB |      100.0% | 8.2 MiB → 12.1 MiB | 111 → 144 | `Parse::do_one_block` | `libjvm.dylib` |
| -78.6% | -352.015 KiB | 5.3% → 0.8% |   448 KiB → 96 KiB |     4 → 3 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change |        Delta |            % |               Size |   Samples | Callee                    | Location       |
| ------: | -----------: | -----------: | -----------------: | --------: | ------------------------- | -------------- |
|  +48.0% |    +3.93 MiB |       100.0% | 8.2 MiB → 12.1 MiB | 111 → 144 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| +250.0% |   +1.093 MiB | 5.3% → 12.6% | 448 KiB → 1.53 MiB |    6 → 20 | `Parse::build_exits`      | `libjvm.dylib` |
| +100.0% | +255.984 KiB |  3.1% → 4.1% |  256 KiB → 512 KiB |     5 → 4 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|  -66.7% |  -64.015 KiB |  1.1% → 0.3% |    96 KiB → 32 KiB |     2 → 1 | `Parse::create_entry_map` | `libjvm.dylib` |
|     new |  +64.015 KiB |  0.0% → 0.5% |       0 B → 64 KiB |     0 → 1 | `Parse::merge_common`     | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

| Change |     Delta |      % |               Size |   Samples | Callee         | Location       |
| -----: | --------: | -----: | -----------------: | --------: | -------------- | -------------- |
| +48.0% | +3.93 MiB | 100.0% | 8.2 MiB → 12.1 MiB | 111 → 144 | `Parse::Parse` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

| Change |  Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | -----: | -----: | ------------------: | --------: | ------------- | -------------- |
| +30.4% | +3 MiB | 100.0% | 9.88 MiB → 12.9 MiB | 164 → 195 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split_impl` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                                  | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | --------------------------------------- | -------------- |
| +281.4% |   +2.375 MiB | 38.0% → 68.1% | 864 KiB → 3.22 MiB | 18 → 36 | `PhaseIdealLoop::do_unroll`             | `libjvm.dylib` |
|  +68.0% | +544.093 KiB | 35.2% → 27.8% | 800 KiB → 1.31 MiB | 12 → 18 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |
|  -90.9% | -320.046 KiB |  15.5% → 0.7% |   352 KiB → 32 KiB |   4 → 1 | `PhaseIdealLoop::do_unswitching`        | `libjvm.dylib` |
|  -83.3% | -160.046 KiB |   8.5% → 0.7% |   192 KiB → 32 KiB |   4 → 1 | `PhaseIdealLoop::partial_peel`          | `libjvm.dylib` |
|     new |  +63.992 KiB |   0.0% → 1.3% |       0 B → 64 KiB |   0 → 2 | `PhaseIdealLoop::do_range_check`        | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |      Delta |      % |                Size | Samples | Callee            | Location       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | -------------- |
| +49.4% | +2.406 MiB | 100.0% | 4.88 MiB → 7.28 MiB | 51 → 72 | `Arena::Arealloc` | `libjvm.dylib` |

##### `IdealLoopTree::iteration_split` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                                | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------- | -------------- |
| +113.0% |   +2.507 MiB | 74.7% → 88.8% | 2.22 MiB → 4.73 MiB | 40 → 60 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |
|  +78.4% |    +2.23 MiB | 95.8% → 95.3% | 2.84 MiB → 5.07 MiB | 48 → 64 | `IdealLoopTree::iteration_split`      | `libjvm.dylib` |
|  -20.3% | -156.015 KiB | 25.3% → 11.2% |   768 KiB → 612 KiB | 11 → 10 | `PhaseIdealLoop::do_unswitching`      | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size | Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------ | -------------- |
|  -51.7% |  -574.89 KiB | 30.8% → 21.8% |  1.09 MiB → 538 KiB | 34 → 16 | `Compilation::build_hir`       | `libjvm.dylib` |
|  -21.2% | -444.437 KiB | 58.0% → 67.1% | 2.05 MiB → 1.62 MiB | 63 → 43 | `Compilation::emit_lir`        | `libjvm.dylib` |
|  -33.0% | -134.046 KiB | 11.2% → 11.0% |   406 KiB → 272 KiB |  12 → 9 | `Compilation::emit_code_body`  | `libjvm.dylib` |
| +104.4% |        +94 B |         <0.1% |        90 B → 184 B |   2 → 3 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |  Samples | Callee                                               | Location       |
| ------: | -----------: | ------------: | ------------------: | -------: | ---------------------------------------------------- | -------------- |
|  -31.9% |   -1.126 MiB | 95.7% → 85.8% | 3.53 MiB → 2.41 MiB | 111 → 71 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| +215.2% | +279.375 KiB |  3.4% → 14.2% |   130 KiB → 409 KiB |  20 → 32 | `ciEnv::register_method`                             | `libjvm.dylib` |
| removed |  -31.976 KiB |   0.8% → 0.0% |        32 KiB → 0 B |    1 → 0 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee                        | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ----------------------------- | -------------- |
| -24.0% | -905.884 KiB | 100.0% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
| -24.0% | -905.884 KiB | 100.0% | 3.69 MiB → 2.81 MiB | 132 → 103 | `Compilation::Compilation` | `libjvm.dylib` |

##### `PreserveJVMState::PreserveJVMState` (`libjvm.dylib`)

| Change |    Delta |      % |               Size | Samples | Callee                | Location       |
| -----: | -------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| -66.7% | -704 KiB | 100.0% | 1.03 MiB → 352 KiB |   9 → 4 | `GraphKit::clone_map` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                             | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
|  -49.8% | -474.921 KiB | 85.6% → 88.9% | 953 KiB → 478 KiB | 29 → 15 | `IR::IR`                           | `libjvm.dylib` |
| removed |  -95.929 KiB |   8.6% → 0.0% |    95.9 KiB → 0 B |   3 → 0 | `IR::split_critical_edges`         | `libjvm.dylib` |
| removed |  -63.953 KiB |   5.7% → 0.0% |      64 KiB → 0 B |   2 → 0 | `IR::eliminate_null_checks`        | `libjvm.dylib` |
|     new |  +59.914 KiB |  0.0% → 11.1% |    0 B → 59.9 KiB |   0 → 1 | `RangeCheckElimination::eliminate` | `libjvm.dylib` |

##### `RangeCheckNode::Ideal` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                 | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- | -------------- |
| removed | -512.046 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   3 → 0 | `IfNode::Ideal_common` | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                             | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | ---------------------------------- | -------------- |
|  -76.9% | -319.822 KiB | 63.4% → 54.5% | 416 KiB → 95.9 KiB |  14 → 3 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|  -85.7% | -191.859 KiB | 34.1% → 18.2% |   224 KiB → 32 KiB |   7 → 1 | `GraphBuilder::push_scope`         | `libjvm.dylib` |
| removed |  -63.953 KiB |   9.8% → 0.0% |       64 KiB → 0 B |   2 → 0 | `Arena::grow`                      | `libjvm.dylib` |
| removed |  -31.976 KiB |   4.9% → 0.0% |       32 KiB → 0 B |   1 → 0 | `GraphBuilder::append_with_bci`    | `libjvm.dylib` |
| removed |  -31.976 KiB |   4.9% → 0.0% |       32 KiB → 0 B |   1 → 0 | `GraphBuilder::profile_invocation` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                          | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------- | -------------- |
| -73.2% | -479.671 KiB | 100.0% | 656 KiB → 176 KiB |  22 → 7 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `PhaseIdealLoop::create_slow_version_of_loop` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                       | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------------- | -------------- |
| -67.5% | -540.093 KiB | 71.4% → 40.4% | 800 KiB → 260 KiB |  11 → 5 | `PhaseIdealLoop::clone_loop` | `libjvm.dylib` |
| +25.0% |  +64.031 KiB | 22.9% → 49.7% | 256 KiB → 320 KiB |   3 → 5 | `PhaseIdealLoop::set_idom`   | `libjvm.dylib` |

##### `PhaseIdealLoop::do_unswitching` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Callee                                        | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------------------- | -------------- |
| -42.5% | -476.062 KiB | 100.0% | 1.09 MiB → 644 KiB | 15 → 11 | `PhaseIdealLoop::create_slow_version_of_loop` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                               | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------- |
| -55.8% | -383.742 KiB | 72.2% → 63.6% | 688 KiB → 304 KiB | 23 → 11 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
| -34.4% |  -91.179 KiB | 27.8% → 36.4% | 265 KiB → 174 KiB |   6 → 4 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                       | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------------------- | -------------- |
| -49.8% | -474.921 KiB | 100.0% | 953 KiB → 478 KiB | 29 → 15 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee             | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------ | -------------- |
| -49.8% | -474.921 KiB | 100.0% | 953 KiB → 478 KiB | 29 → 15 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphKit::maybe_cast_profiled_receiver` (`libjvm.dylib`)

|  Change |        Delta |              % |              Size | Samples | Callee                          | Location       |
| ------: | -----------: | -------------: | ----------------: | ------: | ------------------------------- | -------------- |
|  -52.9% | -288.062 KiB | 77.3% → 100.0% | 544 KiB → 256 KiB |   5 → 1 | `GraphKit::type_check_receiver` | `libjvm.dylib` |
| removed | -160.031 KiB |   22.7% → 0.0% |     160 KiB → 0 B |   2 → 0 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::ensure_memory_phi` (`libjvm.dylib`)

|  Change |        Delta |              % |             Size | Samples | Callee             | Location       |
| ------: | -----------: | -------------: | ---------------: | ------: | ------------------ | -------------- |
|  -76.9% |     -320 KiB | 76.5% → 100.0% | 416 KiB → 96 KiB |       3 | `Type_Array::grow` | `libjvm.dylib` |
| removed | -128.015 KiB |   23.5% → 0.0% |    128 KiB → 0 B |   1 → 0 | `PhiNode::make`    | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Callee                       | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------- | -------------- |
| -36.8% |  -223.71 KiB | 29.0% → 23.2% |   608 KiB → 384 KiB | 19 → 10 | `BlockList::iterate_forward` | `libjvm.dylib` |
| -14.8% | -220.726 KiB | 71.0% → 76.8% | 1.46 MiB → 1.24 MiB | 44 → 33 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_thru_phi` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                    | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------------- | -------------- |
| removed | -288.062 KiB |  40.9% → 0.0% |     288 KiB → 0 B |   4 → 0 | `PhaseIdealLoop::register_new_node`       | `libjvm.dylib` |
| removed | -256.031 KiB |  36.4% → 0.0% |     256 KiB → 0 B |   2 → 0 | `Node_Array::grow`                        | `libjvm.dylib` |
| +100.0% | +128.062 KiB | 18.2% → 88.9% | 128 KiB → 256 KiB |   1 → 5 | `Type_Array::grow`                        | `libjvm.dylib` |
| removed |  -32.015 KiB |   4.5% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Node::clone`                             | `libjvm.dylib` |
|     new |  +31.976 KiB |  0.0% → 11.1% |      0 B → 32 KiB |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                           | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------- | -------------- |
| -70.6% | -384.085 KiB | 100.0% | 544 KiB → 160 KiB |   6 → 3 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `GraphKit::gen_subtype_check` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  -60.0% |     -192 KiB | 55.6% → 66.7% | 320 KiB → 128 KiB |       2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| removed | -160.031 KiB |  27.8% → 0.0% |     160 KiB → 0 B |   2 → 0 | `Node::Node`                     | `libjvm.dylib` |
|  -33.3% |  -32.031 KiB | 16.7% → 33.3% |   96 KiB → 64 KiB |   3 → 1 | `GraphKit::create_and_xform_if`  | `libjvm.dylib` |

##### `Parse::do_instanceof` (`libjvm.dylib`)

| Change |        Delta |              % |              Size | Samples | Callee                          | Location       |
| -----: | -----------: | -------------: | ----------------: | ------: | ------------------------------- | -------------- |
| -75.0% | -384.046 KiB | 100.0% → 80.0% | 512 KiB → 128 KiB |   5 → 2 | `GraphKit::gen_instanceof`      | `libjvm.dylib` |
|    new |  +32.015 KiB |   0.0% → 20.0% |      0 B → 32 KiB |   0 → 1 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |

##### `DirectCallGenerator::generate` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Callee                                | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ------------------------------------- | -------------- |
| -84.6% | -351.992 KiB | 100.0% | 416 KiB → 64 KiB |   3 → 1 | `GraphKit::set_results_for_java_call` | `libjvm.dylib` |

##### `Parse::merge_memory_edges` (`libjvm.dylib`)

| Change |        Delta |              % |             Size | Samples | Callee                           | Location       |
| -----: | -----------: | -------------: | ---------------: | ------: | -------------------------------- | -------------- |
| -82.3% | -448.015 KiB | 100.0% → 50.0% | 544 KiB → 96 KiB |   4 → 3 | `Parse::ensure_memory_phi`       | `libjvm.dylib` |
|    new |  +96.031 KiB |   0.0% → 50.0% |     0 B → 96 KiB |   0 → 2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `Parse::merge_common` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------------- | -------------- |
|  -64.7% | -351.984 KiB | 89.5% → 66.7% | 544 KiB → 192 KiB |   4 → 5 | `Parse::merge_memory_edges`      | `libjvm.dylib` |
|     new |  +64.015 KiB |  0.0% → 22.2% |      0 B → 64 KiB |   0 → 1 | `Node::Node`                     | `libjvm.dylib` |
| removed |  -32.015 KiB |   5.3% → 0.0% |      32 KiB → 0 B |   1 → 0 | `Type_Array::grow`               | `libjvm.dylib` |
| removed |  -32.015 KiB |   5.3% → 0.0% |      32 KiB → 0 B |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|     new |  +31.976 KiB |  0.0% → 11.1% |      0 B → 32 KiB |   0 → 1 | `Parse::ensure_phi`              | `libjvm.dylib` |

##### `CodeEmitInfo::record_debug_info` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                                    | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ----------------------------------------- | -------------- |
| -82.4% | -150.046 KiB | 48.7% → 22.2% |  182 KiB → 32 KiB |   4 → 1 | `DebugInformationRecorder::add_safepoint` | `libjvm.dylib` |
| -41.6% |  -79.929 KiB | 51.3% → 77.8% | 192 KiB → 112 KiB |   6 → 3 | `IRScopeDebugInfo::record_debug_info`     | `libjvm.dylib` |

##### `BarrierSetC2::store_at_resolved` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                      | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------- | -------------- |
| -60.0% | -192.046 KiB | 100.0% | 320 KiB → 128 KiB |   4 → 1 | `GraphKit::store_to_memory` | `libjvm.dylib` |

##### `Parse::array_store` (`libjvm.dylib`)

|  Change |        Delta |             % |          Size | Samples | Callee                    | Location       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- | -------------- |
| removed | -192.031 KiB | 100.0% → 0.0% | 192 KiB → 0 B |   2 → 0 | `Parse::array_addressing` | `libjvm.dylib` |

##### `break_stack_range` (`<unknown>`)

|  Change |       Delta |            % |            Size | Samples | Callee                                                                                             | Location                                                                                             |
| ------: | ----------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  -99.9% | -65.147 KiB | 25.2% → 0.1% | 65.2 KiB → 86 B |       1 | `createBuiltInsAndSymbolTable(Fir2IrComponentsStorage, Fir2IrSyntheticIrBuiltinsSymbolsContainer)` | `org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline`                                                   |
| removed | -38.297 KiB | 14.8% → 0.0% |  38.3 KiB → 0 B |   1 → 0 | `newBuilder()`                                                                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                    |
| removed | -31.976 KiB | 12.4% → 0.0% |    32 KiB → 0 B |   1 → 0 | `getEffectiveVisibility()`                                                                         | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedDeclarationStatusWithLazyEffectiveVisibility` |
|     new |  +28.25 KiB | 0.0% → 34.5% |  0 B → 28.3 KiB |   0 → 1 | `getFirValueParameter()`                                                                           | `org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter`                                              |
| removed | -21.659 KiB |  8.4% → 0.0% |  21.7 KiB → 0 B |   1 → 0 | `interceptExpressionBuilding(KtSourceElement, Function0)`                                          | `org.jetbrains.kotlin.fir.builder.DestructuringContext`                                              |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | -------------- |
|  -71.4% | -159.992 KiB | 33.3% → 11.8% |  224 KiB → 64 KiB |   3 → 1 | `GraphKit::array_element_address`    | `libjvm.dylib` |
|     new |  +64.015 KiB |  0.0% → 11.8% |      0 B → 64 KiB |   0 → 1 | `GraphKit::null_check_common`        | `libjvm.dylib` |
|  -25.0% |  -63.984 KiB | 38.1% → 35.3% | 256 KiB → 192 KiB |   1 → 2 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
| +100.0% |  +32.015 KiB |  4.8% → 11.8% |   32 KiB → 64 KiB |   1 → 2 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
|     ~0% |        +40 B | 23.8% → 29.4% |           160 KiB |       2 | `GraphKit::uncommon_trap`            | `libjvm.dylib` |

##### `split_if` (`libjvm.dylib`)

|  Change |       Delta |             % |         Size | Samples | Callee        | Location       |
| ------: | ----------: | ------------: | -----------: | ------: | ------------- | -------------- |
| removed | -96.031 KiB | 100.0% → 0.0% | 96 KiB → 0 B |   2 → 0 | `Node::clone` | `libjvm.dylib` |

##### `MoveResolver::resolve_mappings` (`libjvm.dylib`)

|  Change |       Delta |             % |           Size | Samples | Callee        | Location       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------- | -------------- |
| removed | -95.929 KiB | 100.0% → 0.0% | 95.9 KiB → 0 B |   3 → 0 | `Arena::grow` | `libjvm.dylib` |

##### `IR::split_critical_edges` (`libjvm.dylib`)

|  Change |       Delta |             % |           Size | Samples | Callee                             | Location       |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------- | -------------- |
| removed | -95.929 KiB | 100.0% → 0.0% | 95.9 KiB → 0 B |   3 → 0 | `BlockBegin::insert_block_between` | `libjvm.dylib` |

##### `ImplicitNullCheckStub::emit_code` (`libjvm.dylib`)

| Change |        Delta |              % |             Size | Samples | Callee                                        | Location       |
| -----: | -----------: | -------------: | ---------------: | ------: | --------------------------------------------- | -------------- |
| -78.1% | -114.046 KiB | 100.0% → 50.0% | 146 KiB → 32 KiB |   4 → 1 | `LIR_Assembler::add_call_info`                | `libjvm.dylib` |
|    new |  +31.976 KiB |   0.0% → 50.0% |     0 B → 32 KiB |   0 → 1 | `Compilation::add_exception_handlers_for_pco` | `libjvm.dylib` |

##### `IRScopeDebugInfo::record_debug_info` (`libjvm.dylib`)

|  Change |       Delta |             % |             Size | Samples | Callee                                          | Location       |
| ------: | ----------: | ------------: | ---------------: | ------: | ----------------------------------------------- | -------------- |
|  -75.0% | -96.007 KiB | 66.7% → 28.6% | 128 KiB → 32 KiB |   4 → 1 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
| +150.3% | +48.054 KiB | 16.7% → 71.4% |  32 KiB → 80 KiB |   1 → 2 | `IRScopeDebugInfo::record_debug_info`           | `libjvm.dylib` |
|  +25.1% | +16.078 KiB | 33.3% → 71.4% |  64 KiB → 80 KiB |       2 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |

##### `InlineTree::ok_to_inline` (`libjvm.dylib`)

|  Change |       Delta |              % |             Size | Samples | Callee                                     | Location       |
| ------: | ----------: | -------------: | ---------------: | ------: | ------------------------------------------ | -------------- |
|  -29.4% | -39.929 KiB | 81.0% → 100.0% | 136 KiB → 96 KiB |   3 → 2 | `ciMethod::get_flow_analysis`              | `libjvm.dylib` |
| removed | -31.976 KiB |   19.0% → 0.0% |     32 KiB → 0 B |   1 → 0 | `InlineTree::build_inline_tree_for_callee` | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |     Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | -----------: | ------------: | ------------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +38.0% |  +70.999 MiB | 26.7% → 27.7% |   187 MiB → 258 MiB | 911 → 1,106 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                 |
|  +28.0% |  +41.344 MiB | 21.0% → 20.3% |   148 MiB → 189 MiB |   699 → 843 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                  |
|  +29.4% |  +38.279 MiB | 18.6% → 18.1% |   130 MiB → 168 MiB |   558 → 655 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                      |
|  +57.3% |  +25.159 MiB |   6.3% → 7.4% | 43.9 MiB → 69.1 MiB |   376 → 516 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                             |
|  +57.6% |   +9.599 MiB |   2.4% → 2.8% | 16.7 MiB → 26.3 MiB |   108 → 142 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                  |
|  +48.8% |   +5.173 MiB |   1.5% → 1.7% | 10.6 MiB → 15.8 MiB |    95 → 126 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| +102.1% |   +3.062 MiB |   0.4% → 0.6% |    3 MiB → 6.06 MiB |     34 → 49 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                       |
| +108.6% |   +2.455 MiB |   0.3% → 0.5% | 2.26 MiB → 4.71 MiB |     42 → 84 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                     |
|  +80.4% |   +2.437 MiB |   0.4% → 0.6% | 3.03 MiB → 5.47 MiB |     24 → 51 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                           |
|  +38.8% |   +1.843 MiB |          0.7% |  4.75 MiB → 6.6 MiB |     78 → 86 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                |
|  +71.6% |   +1.812 MiB |   0.4% → 0.5% | 2.53 MiB → 4.34 MiB |     49 → 74 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                            |
| +184.0% |   +1.514 MiB |   0.1% → 0.3% |  842 KiB → 2.34 MiB |      9 → 28 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen`                                                                                                                                                                                                 |
|  +61.4% |   +1.431 MiB |   0.3% → 0.4% | 2.33 MiB → 3.76 MiB |     41 → 70 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                 |
|  +28.1% |   +1.218 MiB |          0.6% | 4.35 MiB → 5.56 MiB |     88 → 99 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                        |
|  +26.0% |   +1.187 MiB |   0.7% → 0.6% | 4.56 MiB → 5.75 MiB |     70 → 81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                            |
|  +20.1% |   +1.031 MiB |          0.7% | 5.13 MiB → 6.16 MiB |    86 → 107 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                            |
|  +74.4% |       +1 MiB |   0.2% → 0.3% | 1.34 MiB → 2.34 MiB |     23 → 43 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  +32.0% |       +1 MiB |          0.4% | 3.13 MiB → 4.13 MiB |     31 → 41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                              |
|  +96.3% | +832.234 KiB |   0.1% → 0.2% |  864 KiB → 1.66 MiB |     14 → 29 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize`                                                                                                                                                                                                           |
|  +44.1% |  +832.14 KiB |          0.3% | 1.84 MiB → 2.66 MiB |     36 → 45 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                         |

### Improvements

Call stacks with the largest decrease in native bytes allocated in their leaf frame.

|  Change |        Delta |            % |              Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | -----------: | -----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -61.4% | -377.326 KiB | 0.1% → <0.1% | 615 KiB → 238 KiB |   6 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int)` ← `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String, boolean)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `loadClass(String)` ← `<init>(FirSession, ScopeSession, List, Fir2IrExtensions, Fir2IrConfiguration, Fir2IrVisibilityConverter, Fir2IrCommonMemberStorage, Map, KotlinMangler$IrMangler, KotlinBuiltIns, IrSpecialAnnotationsProvider, FirProviderWithGeneratedFiles, Fir2IrSyntheticIrBuiltinsSymbolsContainer, SymbolRemapper)` (`org.jetbrains.kotlin.fir.backend.Fir2IrComponentsStorage`) ← `runFir2IrConversion()` (`org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline`) ← `convertToIrAndActualize()` ← `convertToIrAndActualize-MT2kVtw(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1)` (`org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`) ← `convertToIrAndActualize-MT2kVtw$default(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1, int, Object)` ← `convertToIrAndActualizeForJvm-_I1IR-w(List, Fir2IrExtensions, CompilerConfiguration, BaseDiagnosticsCollector, Collection)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `executePhase(JvmFrontendPipelineArtifact, List)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`) ← `executePhase(JvmFrontendPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  -55.0% | -352.015 KiB | 0.1% → <0.1% | 640 KiB → 288 KiB |   3 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -39.1% | -288.062 KiB | 0.1% → <0.1% | 736 KiB → 448 KiB |   8 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -256.046 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   3 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::register_new_node` ← `PhaseIdealLoop::split_thru_phi` ← `PhaseIdealLoop::split_if_with_blocks_pre` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `GraphKit::set_map_clone` ← `Parse::throw_to_exit` ← `Parse::do_exceptions` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `PreserveJVMState::PreserveJVMState` ← `Parse::do_if` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `PreserveJVMState::PreserveJVMState` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `PreserveJVMState::PreserveJVMState` ← `Parse::array_addressing` ← `Parse::array_load` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::make_slow_call_ex` ← `GraphKit::set_results_for_java_call` ← `DirectCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `Parse::ensure_memory_phi` ← `Parse::merge_memory_edges` ← `Parse::merge_common` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::type_check_receiver` ← `GraphKit::maybe_cast_profiled_receiver` ← `GraphKit::gen_instanceof` ← `Parse::do_instanceof` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::set_all_memory` ← `GraphKit::new_array` ← `LibraryCallKit::inline_array_copyOf` ← `LibraryIntrinsic::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::gen_subtype_check` ← `GraphKit::gen_checkcast` ← `Parse::do_checkcast` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -256.015 KiB | <0.1% → 0.0% |     256 KiB → 0 B |   1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIterGVN::transform` ← `IfNode::Ideal_common` ← `RangeCheckNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -77.8% | -224.093 KiB |        <0.1% |  288 KiB → 64 KiB |   8 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::try_merge_identical_ifs` ← `PhaseIdealLoop::split_if_with_blocks_post` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -46.2% | -192.046 KiB | 0.1% → <0.1% | 416 KiB → 224 KiB |   7 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::split_AddP` ← `ConnectionGraph::split_unique_types` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -85.7% | -192.031 KiB |        <0.1% |  224 KiB → 32 KiB |   3 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -192.031 KiB | <0.1% → 0.0% |     192 KiB → 0 B |   2 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_slow_version_of_loop` ← `PhaseIdealLoop::do_unswitching` ← `IdealLoopTree::iteration_split_impl` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -42.9% | -192.015 KiB | 0.1% → <0.1% | 448 KiB → 256 KiB |   3 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -20.0% | -160.062 KiB |         0.1% | 800 KiB → 640 KiB |  12 → 8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `PhaseRenumberLive::PhaseRenumberLive` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
