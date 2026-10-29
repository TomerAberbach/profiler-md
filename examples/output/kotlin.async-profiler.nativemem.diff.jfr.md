# Allocated native memory profile diff

Allocated 847 MiB → 830 MiB (-17.158 MiB, -2.0%) over 5,809 → 5,631 samples (149 KiB → 151 KiB per sample).

| Category | Change |       Delta |      % |              Size |       Samples |
| -------- | -----: | ----------: | -----: | ----------------: | ------------: |
| Native   |  -2.0% | -17.158 MiB | 100.0% | 847 MiB → 830 MiB | 5,809 → 5,631 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 768 MiB → 752 MiB (90.7% → 90.6%) Compile::Compile at libjvm.dylib
│   ├── 412 MiB → 397 MiB (48.7% → 47.8%) Compile::Optimize
│   │   ├── … 211 MiB → 206 MiB (24.9% → 24.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │   ├── … 185 MiB → 179 MiB (21.9% → 21.6%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 6.25 MiB → 6.66 MiB (0.7% → 0.8%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 6.47 MiB → 5.72 MiB (0.8% → 0.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 12.9 MiB → 14.1 MiB (1.5% → 1.7%) 9 more callees, led by (0.5% → 0.6%) IdealLoopTree::loop_predication
│   │   ├── … 178 MiB → 169 MiB (21.0% → 20.3%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │   ├── … 159 MiB → 150 MiB (18.8% → 18.0%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 5.6 MiB → 5.31 MiB (0.7% → 0.6%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 13.4 MiB → 13.6 MiB (1.6%) 10 more callees, led by (0.6% → 0.5%) Node_Array::grow
│   │   ├── 5.25 MiB → 5.44 MiB (0.6% → 0.7%) PhaseIterGVN::optimize
│   │   │   └── 5.25 MiB → 5.44 MiB (0.6% → 0.7%) PhaseIterGVN::transform_old
│   │   │       └── 5.25 MiB → 5.44 MiB (0.6% → 0.7%) 8 more callees, led by (0.5%) NodeHash::hash_find_insert
│   │   └── 15.8 MiB → 14.9 MiB (1.9% → 1.8%) 13 more callees, led by (0.5% → 0.4%) PhaseCCP::do_transform
│   ├── 340 MiB (40.2% → 40.9%) Compile::Code_Gen
│   │   ├── 284 MiB → 285 MiB (33.5% → 34.3%) PhaseChaitin::Register_Allocate
│   │   │   ├── 222 MiB → 223 MiB (26.2% → 26.9%) PhaseIFG::init
│   │   │   │   └── 222 MiB → 223 MiB (26.2% → 26.9%) Arena::grow
│   │   │   │       └── 222 MiB → 223 MiB (26.2% → 26.9%) Chunk::operator new
│   │   │   │           └── 222 MiB → 223 MiB (26.2% → 26.9%) os::malloc
│   │   │   │               └── 222 MiB → 223 MiB (26.2% → 26.9%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 57.6 MiB → 56.6 MiB (6.8%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 4.18 MiB → 4.94 MiB (0.5% → 0.6%) 6 more callees, led by (0.3% → 0.4%) PhaseChaitin::Split
│   │   ├── 50 MiB → 48.1 MiB (5.9% → 5.8%) Matcher::match
│   │   │   ├── 31.4 MiB → 31.3 MiB (3.7% → 3.8%) Matcher::xform
│   │   │   │   ├── … 22.1 MiB → 22.6 MiB (2.6% → 2.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   │   └── 9.28 MiB → 8.75 MiB (1.1%) 6 more callees, led by (0.5% → 0.6%) Node::out_grow
│   │   │   └── … 15.2 MiB → 13.6 MiB (1.8% → 1.6%) malloc_hook at libasyncProfiler.dylib
│   │   └── 6.37 MiB → 7.04 MiB (0.8%) 6 more callees, led by (0.4% → 0.3%) PhaseCFG::do_global_code_motion
│   ├── … 8.5 MiB → 8.23 MiB (1.0%) Parse::do_one_block at libjvm.dylib
│   │   └── 8.5 MiB → 8.23 MiB (1.0%) 14 more callees, led by (0.4% → 0.5%) Parse::do_call
│   └── 5.97 MiB → 5.66 MiB (0.7%) 7 more callees, led by (0.5%) PhaseRemoveUseless::PhaseRemoveUseless
└── 76.1 MiB → 74.7 MiB (9.0%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 76.1 MiB → 74.7 MiB (9.0%) run(String[])
        ├── … 60.5 MiB (7.1% → 7.3%) malloc_hook at libasyncProfiler.dylib
        └── … 10.2 MiB → 8.52 MiB (1.2% → 1.0%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 7.56 MiB → 6.11 MiB (0.9% → 0.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 7.56 MiB → 6.11 MiB (0.9% → 0.7%) executePhase(ConfigurationPipelineArtifact)
                    └── 7.56 MiB → 6.11 MiB (0.9% → 0.7%) 9 more callees, led by (0.5% → 0.4%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

|  Change |       Delta |     % |            Size | Samples | Function      | Location                 |
| ------: | ----------: | ----: | --------------: | ------: | ------------- | ------------------------ |
| +154.9% | +30.982 KiB | <0.1% | 20 KiB → 51 KiB |   4 → 8 | `calloc_hook` | `libasyncProfiler.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |       Delta |      % |              Size |       Samples | Function       | Location                 |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------- | ------------------------ |
|  -2.0% | -17.187 MiB | 100.0% | 847 MiB → 830 MiB | 5,795 → 5,619 | `malloc_hook`  | `libasyncProfiler.dylib` |
| -67.6% |  -1.564 KiB |  <0.1% |  2.31 KiB → 768 B |        10 → 4 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `calloc_hook` (`libasyncProfiler.dylib`)

|  Change |      Delta |             % |             Size | Samples | Caller                       | Location          |
| ------: | ---------: | ------------: | ---------------: | ------: | ---------------------------- | ----------------- |
| +200.0% |    +32 KiB | 80.0% → 94.2% |  16 KiB → 48 KiB |   2 → 6 | `make_class_info_from_name`  | `libverify.dylib` |
|  -25.4% | -1.017 KiB |  20.0% → 5.8% | 4 KiB → 2.98 KiB |       2 | `VerifyClassForMajorVersion` | `libverify.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |        Delta |            % |                Size |       Samples | Caller                                    | Location          |
| -----: | -----------: | -----------: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|  -2.0% |   -15.79 MiB |        91.1% |   771 MiB → 756 MiB | 5,309 → 5,150 | `os::malloc`                              | `libjvm.dylib`    |
| -12.5% |   -1.233 MiB |  1.2% → 1.0% | 9.89 MiB → 8.66 MiB |     281 → 266 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| -51.9% | -155.132 KiB |        <0.1% |   299 KiB → 144 KiB |       11 → 10 | `CCalloc`                                 | `libverify.dylib` |
|  -2.3% |      -32 KiB |         0.2% | 1.34 MiB → 1.31 MiB |       43 → 42 | `updatewindow`                            | `libzip.dylib`    |
|    new |  +26.425 KiB | 0.0% → <0.1% |      0 B → 26.4 KiB |         0 → 1 | `writeBytes`                              | `libjava.dylib`   |

##### `realloc_hook` (`libasyncProfiler.dylib`)

| Change |      Delta |      % |             Size | Samples | Caller        | Location       |
| -----: | ---------: | -----: | ---------------: | ------: | ------------- | -------------- |
| -67.6% | -1.564 KiB | 100.0% | 2.31 KiB → 768 B |  10 → 4 | `os::realloc` | `libjvm.dylib` |

### Total size

#### Regressions

Functions with the largest increase in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                               | Location       |
| -------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------------------------------------------------- | -------------- |
|   +99.9% |    +1.15 MiB |   0.1% → 0.3% |  1.15 MiB → 2.3 MiB |       24 → 44 | `PhaseOutput::Output`                                                                  | `libjvm.dylib` |
|    +0.5% |   +1.012 MiB | 26.2% → 26.9% |   222 MiB → 223 MiB | 1,068 → 1,022 | `PhaseIFG::init`                                                                       | `libjvm.dylib` |
|    +0.2% | +647.679 KiB | 33.5% → 34.3% |   284 MiB → 285 MiB | 1,627 → 1,561 | `PhaseChaitin::Register_Allocate`                                                      | `libjvm.dylib` |
|   +16.8% | +548.117 KiB |          0.4% | 3.19 MiB → 3.73 MiB |       51 → 56 | `Compile::grow_node_notes`                                                             | `libjvm.dylib` |
|   +22.1% | +516.505 KiB |          0.3% | 2.28 MiB → 2.78 MiB |       90 → 96 | `Compilation::compile_method`                                                          | `libjvm.dylib` |
|   +22.1% | +516.505 KiB |          0.3% | 2.28 MiB → 2.78 MiB |       90 → 96 | `Compilation::Compilation`                                                             | `libjvm.dylib` |
|   +22.1% | +516.505 KiB |          0.3% | 2.28 MiB → 2.78 MiB |       90 → 96 | `Compiler::compile_method`                                                             | `libjvm.dylib` |
|  +145.5% |  +512.14 KiB |  <0.1% → 0.1% |   352 KiB → 864 KiB |        5 → 14 | `PhaseIdealLoop::fix_body_edges`                                                       | `libjvm.dylib` |
|  +113.4% | +475.449 KiB |  <0.1% → 0.1% |   419 KiB → 895 KiB |     222 → 219 | `AllocateHeap`                                                                         | `libjvm.dylib` |
| +1299.5% | +416.046 KiB |  <0.1% → 0.1% |    32 KiB → 448 KiB |         1 → 4 | `BuildCutout::BuildCutout`                                                             | `libjvm.dylib` |
|  +295.2% | +390.539 KiB |  <0.1% → 0.1% |   132 KiB → 523 KiB |       27 → 26 | `nmethod::new_nmethod`                                                                 | `libjvm.dylib` |
|  +295.2% | +390.539 KiB |  <0.1% → 0.1% |   132 KiB → 523 KiB |       27 → 26 | `ciEnv::register_method`                                                               | `libjvm.dylib` |
|  +295.1% | +390.515 KiB |  <0.1% → 0.1% |   132 KiB → 523 KiB |       27 → 25 | `nmethod::nmethod`                                                                     | `libjvm.dylib` |
| +2060.4% | +371.515 KiB |         <0.1% |    18 KiB → 390 KiB |         4 → 8 | `G1CodeRootSetHashTable::insert`                                                       | `libjvm.dylib` |
| +2060.4% | +371.515 KiB |         <0.1% |    18 KiB → 390 KiB |         4 → 8 | `nmethod::oops_do`                                                                     | `libjvm.dylib` |
| +2063.9% |   +371.5 KiB |         <0.1% |    18 KiB → 390 KiB |         2 → 5 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` | `libjvm.dylib` |
| +2039.1% | +367.031 KiB |         <0.1% |    18 KiB → 385 KiB |         2 → 5 | `G1CollectedHeap::register_nmethod`                                                    | `libjvm.dylib` |
|  +551.5% | +352.718 KiB |         <0.1% |    64 KiB → 417 KiB |        2 → 10 | `PhaseOutput::BuildOopMaps`                                                            | `libjvm.dylib` |
|   +62.5% | +320.109 KiB |          0.1% |   512 KiB → 832 KiB |        9 → 16 | `PhaseIdealLoop::insert_post_loop`                                                     | `libjvm.dylib` |
|   +41.7% | +320.109 KiB |          0.1% |  768 KiB → 1.06 MiB |       11 → 18 | `PhaseIdealLoop::insert_pre_post_loops`                                                | `libjvm.dylib` |

##### Native

|   Change |        Delta |            % |                Size |   Samples | Function                                                                               | Location       |
| -------: | -----------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------------------------- | -------------- |
|   +22.1% | +516.505 KiB |         0.3% | 2.28 MiB → 2.78 MiB |   90 → 96 | `Compiler::compile_method`                                                             | `libjvm.dylib` |
|  +113.4% | +475.449 KiB | <0.1% → 0.1% |   419 KiB → 895 KiB | 222 → 219 | `AllocateHeap`                                                                         | `libjvm.dylib` |
| +1299.5% | +416.046 KiB | <0.1% → 0.1% |    32 KiB → 448 KiB |     1 → 4 | `BuildCutout::BuildCutout`                                                             | `libjvm.dylib` |
|  +295.2% | +390.539 KiB | <0.1% → 0.1% |   132 KiB → 523 KiB |   27 → 26 | `nmethod::new_nmethod`                                                                 | `libjvm.dylib` |
|  +295.1% | +390.515 KiB | <0.1% → 0.1% |   132 KiB → 523 KiB |   27 → 25 | `nmethod::nmethod`                                                                     | `libjvm.dylib` |
| +2060.4% | +371.515 KiB |        <0.1% |    18 KiB → 390 KiB |     4 → 8 | `G1CodeRootSetHashTable::insert`                                                       | `libjvm.dylib` |
| +2060.4% | +371.515 KiB |        <0.1% |    18 KiB → 390 KiB |     4 → 8 | `nmethod::oops_do`                                                                     | `libjvm.dylib` |
| +2063.9% |   +371.5 KiB |        <0.1% |    18 KiB → 390 KiB |     2 → 5 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` | `libjvm.dylib` |
| +2039.1% | +367.031 KiB |        <0.1% |    18 KiB → 385 KiB |     2 → 5 | `G1CollectedHeap::register_nmethod`                                                    | `libjvm.dylib` |
|  +100.0% | +256.078 KiB | <0.1% → 0.1% |   256 KiB → 512 KiB |    6 → 11 | `Invariance::clone_nodes`                                                              | `libjvm.dylib` |
|  +114.3% | +256.062 KiB | <0.1% → 0.1% |   224 KiB → 480 KiB |     3 → 7 | `LibraryIntrinsic::generate`                                                           | `libjvm.dylib` |
|  +199.9% |     +256 KiB |        <0.1% |   128 KiB → 384 KiB |         3 | `Parse::do_instanceof`                                                                 | `libjvm.dylib` |
|    +4.0% | +224.085 KiB |         0.7% | 5.53 MiB → 5.75 MiB | 104 → 112 | `IdealLoopTree::loop_predication`                                                      | `libjvm.dylib` |
|  +699.8% | +224.031 KiB |        <0.1% |    32 KiB → 256 KiB |     1 → 3 | `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to`               | `libjvm.dylib` |
|  +699.8% | +224.031 KiB |        <0.1% |    32 KiB → 256 KiB |     1 → 3 | `SuperWord::dependence_graph`                                                          | `libjvm.dylib` |
|  +699.8% | +224.031 KiB |        <0.1% |    32 KiB → 256 KiB |     1 → 3 | `SuperWord::SLP_extract`                                                               | `libjvm.dylib` |
|  +140.0% | +224.007 KiB |        <0.1% |   160 KiB → 384 KiB |     3 → 6 | `Parse::array_addressing`                                                              | `libjvm.dylib` |
|  +140.0% | +224.007 KiB |        <0.1% |   160 KiB → 384 KiB |     3 → 6 | `Parse::array_load`                                                                    | `libjvm.dylib` |
|   +28.9% | +208.062 KiB |         0.1% |   720 KiB → 928 KiB |   11 → 15 | `IdealLoopTree::counted_loop`                                                          | `libjvm.dylib` |
|   +16.2% |     +192 KiB |  0.1% → 0.2% | 1.16 MiB → 1.34 MiB |        24 | `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to`     | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in native bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size |       Samples | Function                                   | Location                  |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | ------------------------- |
|  -2.0% | -17.187 MiB |        100.0% |   847 MiB → 830 MiB | 5,795 → 5,619 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  -2.1% | -16.256 MiB | 91.0% → 90.9% |   771 MiB → 755 MiB | 5,073 → 4,917 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  -2.1% | -16.256 MiB | 91.0% → 90.9% |   771 MiB → 755 MiB | 5,073 → 4,917 | `Arena::grow`                              | `libjvm.dylib`            |
|  -2.1% |  -16.16 MiB | 90.7% → 90.6% |   768 MiB → 752 MiB | 5,005 → 4,849 | `Compile::Compile`                         | `libjvm.dylib`            |
|  -2.1% |  -16.16 MiB | 90.7% → 90.6% |   768 MiB → 752 MiB | 5,005 → 4,849 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  -2.0% |  -15.79 MiB |         91.1% |   771 MiB → 756 MiB | 5,309 → 5,150 | `os::malloc`                               | `libjvm.dylib`            |
|  -2.0% | -15.687 MiB |         91.0% |   771 MiB → 755 MiB | 5,097 → 4,946 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  -2.0% | -15.687 MiB |         91.0% |   771 MiB → 755 MiB | 5,097 → 4,946 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  -2.0% | -15.687 MiB |         91.0% |   771 MiB → 755 MiB | 5,097 → 4,946 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  -2.0% | -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `Thread::call_run`                         | `libjvm.dylib`            |
|  -2.0% | -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `thread_native_entry`                      | `libjvm.dylib`            |
|  -2.0% | -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  -2.0% | -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `thread_start`                             | `libsystem_pthread.dylib` |
|  -4.4% | -15.273 MiB | 40.7% → 39.7% |   344 MiB → 329 MiB | 1,535 → 1,449 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  -3.7% | -15.048 MiB | 48.7% → 47.8% |   412 MiB → 397 MiB | 2,630 → 2,547 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  -3.7% | -14.533 MiB | 45.9% → 45.1% |   389 MiB → 375 MiB | 2,311 → 2,247 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  -3.7% | -14.533 MiB | 45.9% → 45.1% |   389 MiB → 375 MiB | 2,311 → 2,247 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  -3.7% | -14.346 MiB | 46.2% → 45.4% |   391 MiB → 377 MiB | 2,333 → 2,272 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  -5.3% |  -9.458 MiB | 21.2% → 20.5% |   179 MiB → 170 MiB |     998 → 946 | `Compile::optimize_loops`                  | `libjvm.dylib`            |
|  -6.0% |  -3.815 MiB |   7.5% → 7.1% | 63.1 MiB → 59.3 MiB |     930 → 869 | `Arena::Arealloc`                          | `libjvm.dylib`            |

##### Native

| Change |        Delta |             % |                Size |       Samples | Function                                  | Location                  |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------- | ------------------------- |
|  -2.0% |  -17.187 MiB |        100.0% |   847 MiB → 830 MiB | 5,795 → 5,619 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
|  -2.1% |  -16.256 MiB | 91.0% → 90.9% |   771 MiB → 755 MiB | 5,073 → 4,917 | `Chunk::operator new`                     | `libjvm.dylib`            |
|  -2.1% |  -16.256 MiB | 91.0% → 90.9% |   771 MiB → 755 MiB | 5,073 → 4,917 | `Arena::grow`                             | `libjvm.dylib`            |
|  -2.0% |   -15.79 MiB |         91.1% |   771 MiB → 756 MiB | 5,309 → 5,150 | `os::malloc`                              | `libjvm.dylib`            |
|  -2.0% |  -15.687 MiB |         91.0% |   771 MiB → 755 MiB | 5,097 → 4,946 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
|  -2.0% |  -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `Thread::call_run`                        | `libjvm.dylib`            |
|  -2.0% |  -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `thread_native_entry`                     | `libjvm.dylib`            |
|  -2.0% |  -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `_pthread_start`                          | `libsystem_pthread.dylib` |
|  -2.0% |  -15.676 MiB |         91.0% |   771 MiB → 755 MiB | 5,111 → 4,961 | `thread_start`                            | `libsystem_pthread.dylib` |
|  -6.0% |   -3.815 MiB |   7.5% → 7.1% | 63.1 MiB → 59.3 MiB |     930 → 869 | `Arena::Arealloc`                         | `libjvm.dylib`            |
| -11.5% |   -1.179 MiB |   1.2% → 1.1% | 10.2 MiB → 9.06 MiB |     423 → 407 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |
| -85.3% | -928.164 KiB |  0.1% → <0.1% |  1.06 MiB → 160 KiB |        12 → 4 | `Parse::do_one_bytecode`                  | `libjvm.dylib`            |
| -96.0% | -768.109 KiB |  0.1% → <0.1% |    800 KiB → 32 KiB |         8 → 1 | `Parse::do_ifnull`                        | `libjvm.dylib`            |
| -10.1% | -608.078 KiB |   0.7% → 0.6% | 5.88 MiB → 5.28 MiB |       67 → 62 | `Type_Array::grow`                        | `libjvm.dylib`            |
| -19.5% | -512.046 KiB |   0.3% → 0.2% | 2.56 MiB → 2.06 MiB |       28 → 25 | `ModRefBarrierSetC2::store_at_resolved`   | `libjvm.dylib`            |
| -18.3% | -480.031 KiB |          0.3% | 2.56 MiB → 2.09 MiB |       28 → 26 | `BarrierSetC2::store_at`                  | `libjvm.dylib`            |
| -42.4% | -448.062 KiB |          0.1% |  1.03 MiB → 608 KiB |       14 → 10 | `G1BarrierSetC2::post_barrier`            | `libjvm.dylib`            |
|  -4.2% | -440.476 KiB |          1.2% | 10.3 MiB → 9.85 MiB |     123 → 138 | `Parse::do_one_block`                     | `libjvm.dylib`            |
|  -3.9% |  -408.46 KiB |          1.2% | 10.3 MiB → 9.88 MiB |     123 → 139 | `Parse::do_all_blocks`                    | `libjvm.dylib`            |
|  -3.9% |  -408.46 KiB |          1.2% | 10.3 MiB → 9.88 MiB |     123 → 139 | `Parse::Parse`                            | `libjvm.dylib`            |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change |     Delta |      % |               Size | Samples | Caller              | Location       |
| -----: | --------: | -----: | -----------------: | ------: | ------------------- | -------------- |
| +99.9% | +1.15 MiB | 100.0% | 1.15 MiB → 2.3 MiB | 24 → 44 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                            | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | --------------------------------- | -------------- |
|  +0.5% | +1.012 MiB | 100.0% | 222 MiB → 223 MiB | 1,068 → 1,022 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change |        Delta |      % |              Size |       Samples | Caller              | Location       |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------- | -------------- |
|  +0.2% | +647.679 KiB | 100.0% | 284 MiB → 285 MiB | 1,627 → 1,561 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::grow_node_notes` (`libjvm.dylib`)

| Change |        Delta |             % |                Size | Samples | Caller                                 | Location       |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------- | -------------- |
| +23.9% | +205.984 KiB | 26.4% → 28.0% |  862 KiB → 1.04 MiB | 16 → 15 | `Compile::copy_node_notes_to`          | `libjvm.dylib` |
| +77.4% | +178.054 KiB |  7.0% → 10.7% |   230 KiB → 408 KiB |   6 → 7 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  +6.3% | +132.062 KiB | 64.6% → 58.8% | 2.06 MiB → 2.19 MiB | 27 → 31 | `Node::Node`                           | `libjvm.dylib` |
| +50.0% |  +32.015 KiB |   2.0% → 2.5% |     64 KiB → 96 KiB |   2 → 3 | `Matcher::xform`                       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------- |
| +22.1% | +516.505 KiB | 100.0% | 2.28 MiB → 2.78 MiB | 90 → 96 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------- |
| +22.1% | +516.505 KiB | 100.0% | 2.28 MiB → 2.78 MiB | 90 → 96 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------ | -------------- |
| +22.1% | +516.505 KiB | 100.0% | 2.28 MiB → 2.78 MiB | 90 → 96 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::fix_body_edges` (`libjvm.dylib`)

|  Change |       Delta |      % |              Size | Samples | Caller                       | Location       |
| ------: | ----------: | -----: | ----------------: | ------: | ---------------------------- | -------------- |
| +145.5% | +512.14 KiB | 100.0% | 352 KiB → 864 KiB |  5 → 14 | `PhaseIdealLoop::clone_loop` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|   Change |       Delta |             % |                Size |   Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| -------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| +2063.9% |  +371.5 KiB |  4.3% → 43.5% |    18 KiB → 390 KiB |     2 → 5 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog`                                                                                                                                                                   | `libjvm.dylib` |
|   +25.4% | +56.699 KiB | 53.2% → 31.3% |   223 KiB → 280 KiB | 129 → 134 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|   +67.4% |  +55.46 KiB | 19.6% → 15.4% |  82.3 KiB → 138 KiB |   24 → 20 | `ImmutableOopMapBuilder::build`                                                                                                                                                                                                                          | `libjvm.dylib` |
|   +95.9% | +24.703 KiB |   6.1% → 5.6% | 25.8 KiB → 50.5 KiB |     5 → 7 | `G1MonotonicArena::new_segment`                                                                                                                                                                                                                          | `libjvm.dylib` |
|  removed | -10.562 KiB |   2.5% → 0.0% |      10.6 KiB → 0 B |     1 → 0 | `G1CollectionSetChooser::build`                                                                                                                                                                                                                          | `libjvm.dylib` |

##### `BuildCutout::BuildCutout` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller                        | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ----------------------------- | -------------- |
| +1299.5% | +416.046 KiB | 100.0% | 32 KiB → 448 KiB |   1 → 4 | `GraphKit::null_check_common` | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller                   | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------ | -------------- |
| +295.2% | +390.539 KiB | 100.0% | 132 KiB → 523 KiB | 27 → 26 | `ciEnv::register_method` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change |       Delta |              % |             Size | Samples | Caller                        | Location       |
| ------: | ----------: | -------------: | ---------------: | ------: | ----------------------------- | -------------- |
| +522.2% | +438.82 KiB | 63.5% → 100.0% | 84 KiB → 523 KiB | 24 → 26 | `Compilation::compile_method` | `libjvm.dylib` |
| removed | -48.281 KiB |   36.5% → 0.0% |   48.3 KiB → 0 B |   3 → 0 | `PhaseOutput::install_code`   | `libjvm.dylib` |

##### `nmethod::nmethod` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller                 | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------- | -------------- |
| +295.1% | +390.515 KiB | 100.0% | 132 KiB → 523 KiB | 27 → 25 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `G1CodeRootSetHashTable::insert` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller             | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ------------------ | -------------- |
| +2060.4% | +371.515 KiB | 100.0% | 18 KiB → 390 KiB |   4 → 8 | `nmethod::oops_do` | `libjvm.dylib` |

##### `nmethod::oops_do` (`libjvm.dylib`)

|    Change |        Delta |             % |             Size | Samples | Caller                                      | Location       |
| --------: | -----------: | ------------: | ---------------: | ------: | ------------------------------------------- | -------------- |
|  +2039.1% | +367.031 KiB | 99.8% → 98.8% | 18 KiB → 385 KiB |   2 → 5 | `G1CollectedHeap::register_nmethod`         | `libjvm.dylib` |
| +14350.0% |   +4.484 KiB |   0.2% → 1.2% |  32 B → 4.52 KiB |   2 → 3 | `G1NmethodProcessor::do_regular_processing` | `libjvm.dylib` |

##### `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` (`libjvm.dylib`)

|   Change |      Delta |      % |             Size | Samples | Caller                           | Location       |
| -------: | ---------: | -----: | ---------------: | ------: | -------------------------------- | -------------- |
| +2063.9% | +371.5 KiB | 100.0% | 18 KiB → 390 KiB |   2 → 5 | `G1CodeRootSetHashTable::insert` | `libjvm.dylib` |

##### `G1CollectedHeap::register_nmethod` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Caller             | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ------------------ | -------------- |
| +2039.1% | +367.031 KiB | 100.0% | 18 KiB → 385 KiB |   2 → 5 | `nmethod::nmethod` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | --------------------- | -------------- |
| +551.5% | +352.718 KiB | 100.0% | 64 KiB → 417 KiB |  2 → 10 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseIdealLoop::insert_post_loop` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------------------- | -------------- |
| +62.5% | +320.109 KiB | 100.0% | 512 KiB → 832 KiB |  9 → 16 | `PhaseIdealLoop::insert_pre_post_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::insert_pre_post_loops` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                                | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------- | -------------- |
| +41.7% | +320.109 KiB | 100.0% | 768 KiB → 1.06 MiB | 11 → 18 | `IdealLoopTree::iteration_split_impl` | `libjvm.dylib` |

##### `Invariance::clone_nodes` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller                                         | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------------------------------- | -------------- |
| +100.0% | +256.078 KiB | 100.0% | 256 KiB → 512 KiB |  6 → 11 | `PhaseIdealLoop::loop_predication_impl_helper` | `libjvm.dylib` |

##### `LibraryIntrinsic::generate` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller           | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------- | -------------- |
| +114.3% | +256.062 KiB | 100.0% | 224 KiB → 480 KiB |   3 → 7 | `Parse::do_call` | `libjvm.dylib` |

##### `Parse::do_instanceof` (`libjvm.dylib`)

|  Change |    Delta |      % |              Size | Samples | Caller                | Location       |
| ------: | -------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| +199.9% | +256 KiB | 100.0% | 128 KiB → 384 KiB |       3 | `Parse::do_one_block` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                               | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------ | -------------- |
| +37.0% | +544.101 KiB | 26.0% → 34.2% | 1.44 MiB → 1.97 MiB |   30 → 39 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |
|  +4.0% | +224.085 KiB |        100.0% | 5.53 MiB → 5.75 MiB | 104 → 112 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                        | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ----------------------------- | -------------- |
| +699.8% | +224.031 KiB | 100.0% | 32 KiB → 256 KiB |   1 → 3 | `SuperWord::dependence_graph` | `libjvm.dylib` |

##### `SuperWord::dependence_graph` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                   | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ------------------------ | -------------- |
| +699.8% | +224.031 KiB | 100.0% | 32 KiB → 256 KiB |   1 → 3 | `SuperWord::SLP_extract` | `libjvm.dylib` |

##### `SuperWord::SLP_extract` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Caller                      | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | --------------------------- | -------------- |
| +699.8% | +224.031 KiB | 100.0% | 32 KiB → 256 KiB |   1 → 3 | `SuperWord::transform_loop` | `libjvm.dylib` |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller              | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------- | -------------- |
| +140.0% | +224.007 KiB | 100.0% | 160 KiB → 384 KiB |   3 → 6 | `Parse::array_load` | `libjvm.dylib` |

##### `Parse::array_load` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Caller                | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | --------------------- | -------------- |
| +140.0% | +224.007 KiB | 100.0% | 160 KiB → 384 KiB |   3 → 6 | `Parse::do_one_block` | `libjvm.dylib` |

##### `IdealLoopTree::counted_loop` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Caller                               | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------ | -------------- |
| +28.9% | +208.062 KiB | 100.0% | 720 KiB → 928 KiB | 11 → 15 | `IdealLoopTree::counted_loop`        | `libjvm.dylib` |
| +28.9% | +208.062 KiB | 100.0% | 720 KiB → 928 KiB | 11 → 15 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Caller                                   | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------------- | -------------- |
|  +30.0% | +192.015 KiB | 54.1% → 60.5% | 640 KiB → 832 KiB | 11 → 12 | `PhaseChaitin::new_lrg`                  | `libjvm.dylib` |
|  -38.5% | -160.062 KiB | 35.1% → 18.6% | 416 KiB → 256 KiB |  10 → 6 | `PhaseCFG::partial_latency_of_defs`      | `libjvm.dylib` |
| +125.0% | +160.046 KiB | 10.8% → 20.9% | 128 KiB → 288 KiB |   3 → 6 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `malloc_hook` (`libasyncProfiler.dylib`)

| Change |        Delta |            % |                Size |       Samples | Caller                                    | Location          |
| -----: | -----------: | -----------: | ------------------: | ------------: | ----------------------------------------- | ----------------- |
|  -2.0% |   -15.79 MiB |        91.1% |   771 MiB → 756 MiB | 5,309 → 5,150 | `os::malloc`                              | `libjvm.dylib`    |
| -12.5% |   -1.233 MiB |  1.2% → 1.0% | 9.89 MiB → 8.66 MiB |     281 → 266 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
| -51.9% | -155.132 KiB |        <0.1% |   299 KiB → 144 KiB |       11 → 10 | `CCalloc`                                 | `libverify.dylib` |
|  -2.3% |      -32 KiB |         0.2% | 1.34 MiB → 1.31 MiB |       43 → 42 | `updatewindow`                            | `libzip.dylib`    |
|    new |  +26.425 KiB | 0.0% → <0.1% |      0 B → 26.4 KiB |         0 → 1 | `writeBytes`                              | `libjava.dylib`   |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller        | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  -2.1% | -16.256 MiB | 100.0% | 771 MiB → 755 MiB | 5,073 → 4,917 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |             % |                Size |       Samples | Caller                               | Location       |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------ | -------------- |
|  -4.4% | -15.273 MiB | 44.7% → 43.6% |   344 MiB → 329 MiB | 1,535 → 1,449 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |
|  -6.0% |  -3.815 MiB |   8.2% → 7.9% | 63.1 MiB → 59.3 MiB |     930 → 869 | `Arena::Arealloc`                    | `libjvm.dylib` |
| +27.9% |  +1.734 MiB |   0.8% → 1.1% | 6.21 MiB → 7.94 MiB |     114 → 147 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| -10.4% |  -1.583 MiB |   2.0% → 1.8% | 15.2 MiB → 13.6 MiB |     126 → 112 | `Matcher::find_shared`               | `libjvm.dylib` |
|  +0.5% |  +1.012 MiB | 28.8% → 29.5% |   222 MiB → 223 MiB | 1,068 → 1,022 | `PhaseIFG::init`                     | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                       | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ---------------------------- | -------------- |
|  -2.1% | -16.16 MiB | 100.0% | 768 MiB → 752 MiB | 5,005 → 4,849 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Caller                                     | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------------------------------ | -------------- |
|  -2.1% | -16.16 MiB | 100.0% | 768 MiB → 752 MiB | 5,005 → 4,849 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change |        Delta |     % |              Size |       Samples | Caller                      | Location       |
| ------: | -----------: | ----: | ----------------: | ------------: | --------------------------- | -------------- |
|   -2.1% |  -16.256 MiB | 99.9% | 771 MiB → 755 MiB | 5,073 → 4,917 | `Chunk::operator new`       | `libjvm.dylib` |
| +113.4% | +475.449 KiB |  0.1% | 419 KiB → 895 KiB |     222 → 219 | `AllocateHeap`              | `libjvm.dylib` |
| +140.0% |   +1.148 KiB | <0.1% |  840 B → 1.97 KiB |         5 → 4 | `os::malloc`                | `libjvm.dylib` |
| +140.0% |   +1.148 KiB | <0.1% |  840 B → 1.97 KiB |         5 → 4 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |
|  +28.6% |       +160 B | <0.1% |     560 B → 720 B |         7 → 9 | `AnyObj::operator new`      | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------- | -------------- |
|  -2.0% | -15.687 MiB | 100.0% | 771 MiB → 755 MiB | 5,097 → 4,946 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                          | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------- | -------------- |
|  -2.0% | -15.687 MiB | 100.0% | 771 MiB → 755 MiB | 5,097 → 4,946 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -2.0% | -15.687 MiB | 100.0% | 771 MiB → 755 MiB | 5,097 → 4,946 | `Thread::call_run` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
|  -2.0% | -15.676 MiB | 100.0% | 771 MiB → 755 MiB | 5,111 → 4,961 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller           | Location                  |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------------- | ------------------------- |
|  -2.0% | -15.676 MiB | 100.0% | 771 MiB → 755 MiB | 5,111 → 4,961 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller         | Location                  |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------- | ------------------------- |
|  -2.0% | -15.676 MiB | 100.0% | 771 MiB → 755 MiB | 5,111 → 4,961 | `thread_start` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  -4.4% | -15.273 MiB | 100.0% | 344 MiB → 329 MiB | 1,535 → 1,449 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -3.7% | -15.048 MiB | 100.0% | 412 MiB → 397 MiB | 2,630 → 2,547 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                           | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------------- | -------------- |
|  -3.7% | -14.533 MiB | 100.0% | 389 MiB → 375 MiB | 2,311 → 2,247 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Caller                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | -------------------------- | -------------- |
|  -3.7% | -14.533 MiB | 100.0% | 389 MiB → 375 MiB | 2,311 → 2,247 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |      Delta |             % |              Size |       Samples | Caller                    | Location       |
| -----: | ---------: | ------------: | ----------------: | ------------: | ------------------------- | -------------- |
|  -5.3% | -9.458 MiB | 45.8% → 45.0% | 179 MiB → 170 MiB |     998 → 946 | `Compile::optimize_loops` | `libjvm.dylib` |
|  -2.3% | -4.888 MiB | 54.2% → 55.0% | 212 MiB → 207 MiB | 1,335 → 1,326 | `Compile::Optimize`       | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |   Samples | Caller              | Location       |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------- | -------------- |
|  -5.3% | -9.458 MiB | 100.0% | 179 MiB → 170 MiB | 998 → 946 | `Compile::Optimize` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Caller                           | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------- | -------------- |
|  -4.6% |   -1.625 MiB | 56.0% → 56.8% | 35.3 MiB → 33.7 MiB | 576 → 534 | `Node_Array::grow`               | `libjvm.dylib` |
| -23.5% | -992.125 KiB |   6.5% → 5.3% | 4.13 MiB → 3.16 MiB |   37 → 29 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
| -10.1% | -608.078 KiB |   9.3% → 8.9% | 5.88 MiB → 5.28 MiB |   67 → 62 | `Type_Array::grow`               | `libjvm.dylib` |
| -30.8% | -256.031 KiB |   1.3% → 0.9% |   832 KiB → 576 KiB |     5 → 3 | `PhaseIterGVN::transform`        | `libjvm.dylib` |
| -16.7% | -256.015 KiB |   2.4% → 2.1% |  1.5 MiB → 1.25 MiB |   24 → 23 | `PhaseCFG::build_cfg`            | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |      Delta |      % |                Size |   Samples | Caller                                                                          | Location                |
| -----: | ---------: | -----: | ------------------: | --------: | ------------------------------------------------------------------------------- | ----------------------- |
| -11.5% | -1.179 MiB | 100.0% | 10.2 MiB → 9.06 MiB | 423 → 407 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | -------------- |
| -85.3% | -928.164 KiB | 100.0% | 1.06 MiB → 160 KiB |  12 → 4 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Parse::do_ifnull` (`libjvm.dylib`)

| Change |        Delta |      % |             Size | Samples | Caller                   | Location       |
| -----: | -----------: | -----: | ---------------: | ------: | ------------------------ | -------------- |
| -96.0% | -768.109 KiB | 100.0% | 800 KiB → 32 KiB |   8 → 1 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |        Delta |             % |               Size | Samples | Caller                           | Location       |
| -----: | -----------: | ------------: | -----------------: | ------: | -------------------------------- | -------------- |
| -38.8% | -608.062 KiB | 26.1% → 17.8% | 1.53 MiB → 960 KiB | 14 → 10 | `IdealKit::delay_transform`      | `libjvm.dylib` |
|    new | +320.031 KiB |   0.0% → 5.9% |      0 B → 320 KiB |   0 → 2 | `GraphKit::uncommon_trap`        | `libjvm.dylib` |
|    new | +256.031 KiB |   0.0% → 4.7% |      0 B → 256 KiB |   0 → 2 | `GraphKit::make_slow_call_ex`    | `libjvm.dylib` |
| -63.6% | -224.015 KiB |   5.9% → 2.4% |  352 KiB → 128 KiB |   4 → 3 | `Parse::return_current`          | `libjvm.dylib` |
| -50.0% | -192.031 KiB |   6.4% → 3.6% |  384 KiB → 192 KiB |   4 → 2 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `ModRefBarrierSetC2::store_at_resolved` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                   | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------ | -------------- |
| -19.5% | -512.046 KiB | 100.0% | 2.56 MiB → 2.06 MiB | 28 → 25 | `BarrierSetC2::store_at` | `libjvm.dylib` |

##### `BarrierSetC2::store_at` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Caller                      | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------- | -------------- |
| -18.3% | -480.031 KiB | 100.0% | 2.56 MiB → 2.09 MiB | 28 → 26 | `GraphKit::access_store_at` | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

| Change |        Delta |      % |               Size | Samples | Caller                                  | Location       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------------------- | -------------- |
| -42.4% | -448.062 KiB | 100.0% | 1.03 MiB → 608 KiB | 14 → 10 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |        Delta |      % |                Size |   Samples | Caller                 | Location       |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------- | -------------- |
|  -4.2% | -440.476 KiB | 100.0% | 10.3 MiB → 9.85 MiB | 123 → 138 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |   Samples | Caller         | Location       |
| -----: | ----------: | -----: | ------------------: | --------: | -------------- | -------------- |
|  -3.9% | -408.46 KiB | 100.0% | 10.3 MiB → 9.88 MiB | 123 → 139 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |       Delta |      % |                Size |   Samples | Caller                     | Location       |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------- | -------------- |
|  -3.9% | -408.46 KiB | 100.0% | 10.3 MiB → 9.88 MiB | 123 → 139 | `ParseGenerator::generate` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                      | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | --------------------------- | -------------- |
| +551.5% | +352.718 KiB |  5.4% → 17.7% |   64 KiB → 417 KiB |  2 → 10 | `PhaseOutput::BuildOopMaps` | `libjvm.dylib` |
|     new | +320.046 KiB |  0.0% → 13.6% |      0 B → 320 KiB |   0 → 3 | `Scheduling::DoScheduling`  | `libjvm.dylib` |
| +113.5% | +272.695 KiB | 20.4% → 21.8% |  240 KiB → 513 KiB |  5 → 10 | `PhaseOutput::fill_buffer`  | `libjvm.dylib` |
|  +26.6% | +232.585 KiB | 74.2% → 47.0% | 875 KiB → 1.08 MiB | 17 → 21 | `Scheduling::Scheduling`    | `libjvm.dylib` |

##### `PhaseIFG::init` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  +0.5% | +1.012 MiB | 100.0% | 222 MiB → 223 MiB | 1,068 → 1,022 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                     | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | -------------- |
|   -2.0% |   -1.132 MiB | 20.4% → 19.9% | 57.9 MiB → 56.7 MiB |     492 → 464 | `PhaseLive::compute`                       | `libjvm.dylib` |
|   +0.5% |   +1.012 MiB | 78.1% → 78.3% |   222 MiB → 223 MiB | 1,068 → 1,022 | `PhaseIFG::init`                           | `libjvm.dylib` |
|  +64.3% | +288.046 KiB |   0.2% → 0.3% |   448 KiB → 736 KiB |        9 → 12 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|   +6.8% | +191.968 KiB |          1.0% | 2.75 MiB → 2.94 MiB |       40 → 38 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| +600.0% | +191.859 KiB |  <0.1% → 0.1% |    32 KiB → 224 KiB |         1 → 7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compile::grow_node_notes` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee        | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- | -------------- |
| +16.8% | +548.117 KiB | 100.0% | 3.19 MiB → 3.73 MiB | 51 → 56 | `Arena::grow` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change |       Delta |             % |               Size | Samples | Callee                             | Location       |
| ------: | ----------: | ------------: | -----------------: | ------: | ---------------------------------- | -------------- |
| +522.2% | +438.82 KiB |  3.6% → 18.3% |   84 KiB → 523 KiB | 24 → 26 | `ciEnv::register_method`           | `libjvm.dylib` |
|   +3.5% | +77.685 KiB | 96.4% → 81.7% | 2.2 MiB → 2.27 MiB | 66 → 70 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee                        | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------- | -------------- |
| +22.1% | +516.505 KiB | 100.0% | 2.28 MiB → 2.78 MiB | 90 → 96 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee                     | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------- |
| +22.1% | +516.505 KiB | 100.0% | 2.28 MiB → 2.78 MiB | 90 → 96 | `Compilation::Compilation` | `libjvm.dylib` |

##### `PhaseIdealLoop::fix_body_edges` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                       | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------- | -------------- |
| +171.4% | +384.125 KiB | 63.6% → 70.4% | 224 KiB → 608 KiB |  4 → 12 | `PhaseIdealLoop::set_idom`   | `libjvm.dylib` |
|     new | +128.015 KiB |  0.0% → 14.8% |     0 B → 128 KiB |   0 → 1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size |   Samples | Callee       | Location       |
| ------: | -----------: | -----: | ----------------: | --------: | ------------ | -------------- |
| +113.4% | +475.449 KiB | 100.0% | 419 KiB → 895 KiB | 222 → 219 | `os::malloc` | `libjvm.dylib` |

##### `BuildCutout::BuildCutout` (`libjvm.dylib`)

| Change |        Delta |            % |          Size | Samples | Callee                           | Location       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------- | -------------- |
|    new | +256.015 KiB | 0.0% → 57.1% | 0 B → 256 KiB |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|    new | +128.015 KiB | 0.0% → 28.6% | 0 B → 128 KiB |   0 → 1 | `Node::Node`                     | `libjvm.dylib` |
|    new |  +32.015 KiB |  0.0% → 7.1% |  0 B → 32 KiB |   0 → 1 | `GraphKit::clone_map`            | `libjvm.dylib` |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change |        Delta |            % |              Size | Samples | Callee                                 | Location       |
| ------: | -----------: | -----------: | ----------------: | ------: | -------------------------------------- | -------------- |
| +295.1% | +390.515 KiB |       100.0% | 132 KiB → 523 KiB | 27 → 25 | `nmethod::nmethod`                     | `libjvm.dylib` |
|     new |        +24 B | 0.0% → <0.1% |        0 B → 24 B |   0 → 1 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Callee                 | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ---------------------- | -------------- |
| +295.2% | +390.539 KiB | 100.0% | 132 KiB → 523 KiB | 27 → 26 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `nmethod::nmethod` (`libjvm.dylib`)

|   Change |        Delta |             % |              Size | Samples | Callee                              | Location       |
| -------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------- | -------------- |
| +2039.1% | +367.031 KiB | 13.6% → 73.6% |  18 KiB → 385 KiB |   2 → 5 | `G1CollectedHeap::register_nmethod` | `libjvm.dylib` |
|   +20.5% |  +23.484 KiB | 86.4% → 26.4% | 114 KiB → 138 KiB | 25 → 20 | `CompiledMethod::CompiledMethod`    | `libjvm.dylib` |

##### `G1CodeRootSetHashTable::insert` (`libjvm.dylib`)

|   Change |      Delta |              % |             Size | Samples | Callee                                                                                                                                                                                                                                                                                                                                           | Location       |
| -------: | ---------: | -------------: | ---------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| +2063.9% | +371.5 KiB | 99.8% → 100.0% | 18 KiB → 390 KiB |   2 → 5 | `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog`                                                                                                                                                                                                                                                           | `libjvm.dylib` |
|   +50.0% |      +16 B |   0.2% → <0.1% |      32 B → 48 B |   2 → 3 | `bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_insert_get<G1CodeRootSetHashTable::HashTableLookUp, bool ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::insert<G1CodeRootSetHashTable::HashTableLookUp>(Thread*, G1CodeRootSetHashTable::HashTableLookUp&, nmethod* const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `nmethod::oops_do` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Callee                           | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | -------------------------------- | -------------- |
| +2060.4% | +371.515 KiB | 100.0% | 18 KiB → 390 KiB |   4 → 8 | `G1CodeRootSetHashTable::insert` | `libjvm.dylib` |

##### `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` (`libjvm.dylib`)

|   Change |      Delta |      % |             Size | Samples | Callee         | Location       |
| -------: | ---------: | -----: | ---------------: | ------: | -------------- | -------------- |
| +2063.9% | +371.5 KiB | 100.0% | 18 KiB → 390 KiB |   2 → 5 | `AllocateHeap` | `libjvm.dylib` |

##### `G1CollectedHeap::register_nmethod` (`libjvm.dylib`)

|   Change |        Delta |      % |             Size | Samples | Callee             | Location       |
| -------: | -----------: | -----: | ---------------: | ------: | ------------------ | -------------- |
| +2039.1% | +367.031 KiB | 100.0% | 18 KiB → 385 KiB |   2 → 5 | `nmethod::oops_do` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Callee        | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ------------- | -------------- |
| +551.5% | +352.718 KiB | 100.0% | 64 KiB → 417 KiB |  2 → 10 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseIdealLoop::insert_post_loop` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                       | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------------------- | -------------- |
| +62.5% | +320.109 KiB | 100.0% | 512 KiB → 832 KiB |  9 → 16 | `PhaseIdealLoop::clone_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::insert_pre_post_loops` (`libjvm.dylib`)

| Change |        Delta |             % |              Size | Samples | Callee                             | Location       |
| -----: | -----------: | ------------: | ----------------: | ------: | ---------------------------------- | -------------- |
| +62.5% | +320.109 KiB | 66.7% → 76.5% | 512 KiB → 832 KiB |  9 → 16 | `PhaseIdealLoop::insert_post_loop` | `libjvm.dylib` |

##### `Invariance::clone_nodes` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Callee             | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------ | -------------- |
| +100.0% | +256.078 KiB | 100.0% | 256 KiB → 512 KiB |  6 → 11 | `Node_Array::grow` | `libjvm.dylib` |

##### `LibraryIntrinsic::generate` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                                            | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------- | -------------- |
| +125.0% | +160.046 KiB | 57.1% → 60.0% | 128 KiB → 288 KiB |   1 → 4 | `LibraryCallKit::inline_reference_get`            | `libjvm.dylib` |
| +399.9% | +128.015 KiB | 14.3% → 33.3% |  32 KiB → 160 KiB |   1 → 2 | `LibraryCallKit::try_to_inline`                   | `libjvm.dylib` |
| removed |  -64.015 KiB |  28.6% → 0.0% |      64 KiB → 0 B |   1 → 0 | `LibraryCallKit::inline_array_copyOf`             | `libjvm.dylib` |
|     new |  +32.015 KiB |   0.0% → 6.7% |      0 B → 32 KiB |   0 → 1 | `LibraryCallKit::inline_preconditions_checkIndex` | `libjvm.dylib` |

##### `Parse::do_instanceof` (`libjvm.dylib`)

|  Change |    Delta |      % |              Size | Samples | Callee                     | Location       |
| ------: | -------: | -----: | ----------------: | ------: | -------------------------- | -------------- |
| +199.9% | +256 KiB | 100.0% | 128 KiB → 384 KiB |       3 | `GraphKit::gen_instanceof` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                                  | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------- | -------------- |
| +37.0% | +544.101 KiB | 26.0% → 34.2% | 1.44 MiB → 1.97 MiB |   30 → 39 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |
|  +4.0% | +224.085 KiB |        100.0% | 5.53 MiB → 5.75 MiB | 104 → 112 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Callee        | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ------------- | -------------- |
| +699.8% | +224.031 KiB | 100.0% | 32 KiB → 256 KiB |   1 → 3 | `Arena::grow` | `libjvm.dylib` |

##### `SuperWord::dependence_graph` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Callee                                                                   | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| +699.8% | +224.031 KiB | 100.0% | 32 KiB → 256 KiB |   1 → 3 | `GrowableArrayWithAllocator<DepMem*, GrowableArray<DepMem*>>::expand_to` | `libjvm.dylib` |

##### `SuperWord::SLP_extract` (`libjvm.dylib`)

|  Change |        Delta |      % |             Size | Samples | Callee                        | Location       |
| ------: | -----------: | -----: | ---------------: | ------: | ----------------------------- | -------------- |
| +699.8% | +224.031 KiB | 100.0% | 32 KiB → 256 KiB |   1 → 3 | `SuperWord::dependence_graph` | `libjvm.dylib` |

##### `Parse::array_addressing` (`libjvm.dylib`)

|  Change |        Delta |            % |          Size | Samples | Callee                               | Location       |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------ | -------------- |
|     new | +224.046 KiB | 0.0% → 58.3% | 0 B → 224 KiB |   0 → 3 | `GraphKit::null_check_common`        | `libjvm.dylib` |
| removed |  -32.015 KiB | 20.0% → 0.0% |  32 KiB → 0 B |   1 → 0 | `GraphKit::uncommon_trap`            | `libjvm.dylib` |
|     new |  +31.976 KiB |  0.0% → 8.3% |  0 B → 32 KiB |   0 → 1 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |

##### `Parse::array_load` (`libjvm.dylib`)

|  Change |        Delta |      % |              Size | Samples | Callee                    | Location       |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------------- | -------------- |
| +140.0% | +224.007 KiB | 100.0% | 160 KiB → 384 KiB |   3 → 6 | `Parse::array_addressing` | `libjvm.dylib` |

##### `IdealLoopTree::counted_loop` (`libjvm.dylib`)

| Change |        Delta |      % |              Size | Samples | Callee                            | Location       |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------------- | -------------- |
| +28.9% | +208.062 KiB | 100.0% | 720 KiB → 928 KiB | 11 → 15 | `PhaseIdealLoop::is_counted_loop` | `libjvm.dylib` |
| +28.9% | +208.062 KiB | 100.0% | 720 KiB → 928 KiB | 11 → 15 | `IdealLoopTree::counted_loop`     | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` (`libjvm.dylib`)

| Change |    Delta |      % |                Size | Samples | Callee        | Location       |
| -----: | -------: | -----: | ------------------: | ------: | ------------- | -------------- |
| +16.2% | +192 KiB | 100.0% | 1.16 MiB → 1.34 MiB |      24 | `Arena::grow` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee       | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------ | -------------- |
|  -2.1% | -16.256 MiB | 100.0% | 771 MiB → 755 MiB | 5,073 → 4,917 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
|  -2.1% | -16.256 MiB | 100.0% | 771 MiB → 755 MiB | 5,073 → 4,917 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                   | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------- | -------------- |
|  -3.7% |  -15.048 MiB | 53.6% → 52.8% |   412 MiB → 397 MiB | 2,630 → 2,547 | `Compile::Optimize`                      | `libjvm.dylib` |
|  -0.2% | -633.984 KiB | 44.3% → 45.2% |             340 MiB | 2,198 → 2,109 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  -1.8% | -184.398 KiB |          1.3% |  9.88 MiB → 9.7 MiB |     117 → 137 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  -3.7% |     -160 KiB |   0.6% → 0.5% | 4.25 MiB → 4.09 MiB |            41 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  -8.8% |  -96.031 KiB |          0.1% |  1.06 MiB → 992 KiB |        11 → 9 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -2.1% | -16.16 MiB | 100.0% | 768 MiB → 752 MiB | 5,005 → 4,849 | `Compile::Compile` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change |      Delta |      % |              Size |       Samples | Callee        | Location                 |
| ------: | ---------: | -----: | ----------------: | ------------: | ------------- | ------------------------ |
|   -2.0% | -15.79 MiB | 100.0% | 771 MiB → 756 MiB | 5,309 → 5,150 | `malloc_hook` | `libasyncProfiler.dylib` |
| +140.0% | +1.148 KiB |  <0.1% |  840 B → 1.97 KiB |         5 → 4 | `os::malloc`  | `libjvm.dylib`           |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change |        Delta |             % |                Size |       Samples | Callee                        | Location       |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------- | -------------- |
|   -2.1% |   -16.16 MiB | 99.7% → 99.6% |   768 MiB → 752 MiB | 5,005 → 4,849 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  +22.1% | +516.505 KiB |   0.3% → 0.4% | 2.28 MiB → 2.78 MiB |       90 → 96 | `Compiler::compile_method`    | `libjvm.dylib` |
| removed |  -31.976 KiB |  <0.1% → 0.0% |        32 KiB → 0 B |         1 → 0 | `ciEnv::ciEnv`                | `libjvm.dylib` |
|  -12.9% |         -4 B |         <0.1% |         31 B → 27 B |             1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                                     | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------------ | -------------- |
|  -2.0% | -15.687 MiB | 100.0% | 771 MiB → 755 MiB | 5,097 → 4,946 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------- | -------------- |
|  -2.0% | -15.687 MiB | 100.0% | 771 MiB → 755 MiB | 5,097 → 4,946 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change |       Delta |            % |                Size |       Samples | Callee                          | Location       |
| ------: | ----------: | -----------: | ------------------: | ------------: | ------------------------------- | -------------- |
|   -2.0% | -15.687 MiB |       100.0% |   771 MiB → 755 MiB | 5,097 → 4,946 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +113.1% | +29.187 KiB |        <0.1% |   25.8 KiB → 55 KiB |        7 → 10 | `WorkerThread::run`             | `libjvm.dylib` |
|  -92.7% | -19.796 KiB |        <0.1% | 21.4 KiB → 1.57 KiB |         7 → 4 | `VMThread::run`                 | `libjvm.dylib` |
|     new |      +2 KiB | 0.0% → <0.1% |         0 B → 2 KiB |         0 → 1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee             | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------ | -------------- |
|  -2.0% | -15.676 MiB | 100.0% | 771 MiB → 755 MiB | 5,111 → 4,961 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------------- | -------------- |
|  -2.0% | -15.676 MiB | 100.0% | 771 MiB → 755 MiB | 5,111 → 4,961 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee           | Location                  |
| -----: | ----------: | -----: | ----------------: | ------------: | ---------------- | ------------------------- |
|  -2.0% | -15.676 MiB | 100.0% | 771 MiB → 755 MiB | 5,111 → 4,961 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee        | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------- | -------------- |
|  -4.4% | -15.273 MiB | 100.0% | 344 MiB → 329 MiB | 1,535 → 1,449 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                                     | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | -------------- |
|  -5.3% |   -9.458 MiB | 43.5% → 42.7% |   179 MiB → 170 MiB |     998 → 946 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  -2.3% |   -4.888 MiB | 51.4% → 52.1% |   212 MiB → 207 MiB | 1,335 → 1,326 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| -18.0% | -702.515 KiB |   0.9% → 0.8% | 3.82 MiB → 3.13 MiB |       72 → 55 | `PhaseCCP::do_transform`                   | `libjvm.dylib` |
| -77.8% | -448.046 KiB |  0.1% → <0.1% |   576 KiB → 128 KiB |         6 → 3 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
| -50.0% | -320.078 KiB |   0.2% → 0.1% |   640 KiB → 320 KiB |         9 → 4 | `Compile::inline_incrementally_cleanup`    | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |       Samples | Callee                            | Location       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------- | -------------- |
|  -4.4% |  -15.273 MiB | 88.5% → 87.9% |   344 MiB → 329 MiB | 1,535 → 1,449 | `PhaseIdealLoop::Dominators`      | `libjvm.dylib` |
| +27.9% |   +1.734 MiB |   1.6% → 2.1% | 6.21 MiB → 7.94 MiB |     114 → 147 | `Arena::grow`                     | `libjvm.dylib` |
| -12.5% |   -1.437 MiB |   3.0% → 2.7% | 11.5 MiB → 10.1 MiB |     193 → 169 | `Node_Array::grow`                | `libjvm.dylib` |
|  -9.7% | -313.609 KiB |          0.8% | 3.16 MiB → 2.85 MiB |       56 → 48 | `IdealLoopTree::iteration_split`  | `libjvm.dylib` |
|  +4.0% | +224.085 KiB |   1.4% → 1.5% | 5.53 MiB → 5.75 MiB |     104 → 112 | `IdealLoopTree::loop_predication` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change |       Delta |      % |              Size |       Samples | Callee                               | Location       |
| -----: | ----------: | -----: | ----------------: | ------------: | ------------------------------------ | -------------- |
|  -3.7% | -14.533 MiB | 100.0% | 389 MiB → 375 MiB | 2,311 → 2,247 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change |        Delta |             % |              Size |       Samples | Callee                           | Location       |
| -----: | -----------: | ------------: | ----------------: | ------------: | -------------------------------- | -------------- |
|  -3.7% |  -14.533 MiB | 99.5% → 99.4% | 389 MiB → 375 MiB | 2,311 → 2,247 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  +9.4% | +192.007 KiB |   0.5% → 0.6% |  2 MiB → 2.19 MiB |       22 → 25 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change |      Delta |      % |              Size |   Samples | Callee                     | Location       |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------- | -------------- |
|  -5.3% | -9.458 MiB | 100.0% | 179 MiB → 170 MiB | 998 → 946 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

| Change |      Delta |      % |                Size |   Samples | Callee        | Location       |
| -----: | ---------: | -----: | ------------------: | --------: | ------------- | -------------- |
|  -6.0% | -3.815 MiB | 100.0% | 63.1 MiB → 59.3 MiB | 930 → 869 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

| Change |       Delta |             % |                Size |   Samples | Callee                      | Location                 |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------- | ------------------------ |
| -12.5% |  -1.233 MiB | 96.6% → 95.6% | 9.89 MiB → 8.66 MiB | 281 → 266 | `malloc_hook`               | `libasyncProfiler.dylib` |
| +15.6% | +55.074 KiB |   3.4% → 4.4% |   352 KiB → 407 KiB | 142 → 141 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

|  Change |        Delta |             % |             Size | Samples | Callee                           | Location       |
| ------: | -----------: | ------------: | ---------------: | ------: | -------------------------------- | -------------- |
|  -96.0% | -768.109 KiB | 73.5% → 20.0% | 800 KiB → 32 KiB |   8 → 1 | `Parse::do_ifnull`               | `libjvm.dylib` |
| removed |  -64.015 KiB |   5.9% → 0.0% |     64 KiB → 0 B |   1 → 0 | `Node::Node`                     | `libjvm.dylib` |
| removed |  -64.015 KiB |   5.9% → 0.0% |     64 KiB → 0 B |   1 → 0 | `GraphKit::null_check_oop`       | `libjvm.dylib` |
| removed |  -32.015 KiB |   2.9% → 0.0% |     32 KiB → 0 B |   1 → 0 | `GraphKit::null_check_common`    | `libjvm.dylib` |
|  -25.0% |  -31.984 KiB | 11.8% → 60.0% | 128 KiB → 96 KiB |   1 → 2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `Parse::do_ifnull` (`libjvm.dylib`)

|  Change |        Delta |             % |            Size | Samples | Callee                               | Location       |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------------------------ | -------------- |
| removed | -384.046 KiB |  48.0% → 0.0% |   384 KiB → 0 B |   3 → 0 | `PhaseGVN::transform_no_reclaim`     | `libjvm.dylib` |
| removed | -128.015 KiB |  16.0% → 0.0% |   128 KiB → 0 B |   1 → 0 | `GraphKit::create_and_xform_if`      | `libjvm.dylib` |
| removed | -128.015 KiB |  16.0% → 0.0% |   128 KiB → 0 B |   1 → 0 | `Node::Node`                         | `libjvm.dylib` |
| removed |  -96.031 KiB |  12.0% → 0.0% |    96 KiB → 0 B |   2 → 0 | `Parse::adjust_map_after_if`         | `libjvm.dylib` |
|  -50.0% |      -32 KiB | 8.0% → 100.0% | 64 KiB → 32 KiB |       1 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

| Change |        Delta |      % |                Size | Samples | Callee            | Location       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | -------------- |
| -10.1% | -608.078 KiB | 100.0% | 5.88 MiB → 5.28 MiB | 67 → 62 | `Arena::Arealloc` | `libjvm.dylib` |

##### `ModRefBarrierSetC2::store_at_resolved` (`libjvm.dylib`)

|  Change |        Delta |             % |               Size | Samples | Callee                            | Location       |
| ------: | -----------: | ------------: | -----------------: | ------: | --------------------------------- | -------------- |
|  -42.4% | -448.062 KiB | 40.2% → 28.8% | 1.03 MiB → 608 KiB | 14 → 10 | `G1BarrierSetC2::post_barrier`    | `libjvm.dylib` |
|  -12.5% |  -191.96 KiB | 58.5% → 63.6% | 1.5 MiB → 1.31 MiB |      13 | `G1BarrierSetC2::pre_barrier`     | `libjvm.dylib` |
| +399.7% | +127.976 KiB |   1.2% → 7.6% |   32 KiB → 160 KiB |   1 → 2 | `BarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `BarrierSetC2::store_at` (`libjvm.dylib`)

| Change |        Delta |              % |                Size | Samples | Callee                                  | Location       |
| -----: | -----------: | -------------: | ------------------: | ------: | --------------------------------------- | -------------- |
| -19.5% | -512.046 KiB | 100.0% → 98.5% | 2.56 MiB → 2.06 MiB | 28 → 25 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |
|    new |  +32.015 KiB |    0.0% → 1.5% |        0 B → 32 KiB |   0 → 1 | `BarrierSetC2::store_at_resolved`       | `libjvm.dylib` |

##### `G1BarrierSetC2::post_barrier` (`libjvm.dylib`)

|  Change |        Delta |             % |              Size | Samples | Callee                         | Location       |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------ | -------------- |
| removed | -256.031 KiB |  24.2% → 0.0% |     256 KiB → 0 B |   2 → 0 | `IdealKit::load`               | `libjvm.dylib` |
|  -50.0% | -128.015 KiB | 24.2% → 21.1% | 256 KiB → 128 KiB |   4 → 3 | `G1BarrierSetC2::g1_mark_card` | `libjvm.dylib` |
|  -66.7% | -128.007 KiB | 18.2% → 10.5% |  192 KiB → 64 KiB |   4 → 1 | `IdealKit::end_if`             | `libjvm.dylib` |
|  +14.3% |  +32.015 KiB | 21.2% → 42.1% | 224 KiB → 256 KiB |   3 → 4 | `IdealKit::if_then`            | `libjvm.dylib` |
|     new |  +31.976 KiB |   0.0% → 5.3% |      0 B → 32 KiB |   0 → 1 | `GraphKit::sync_kit`           | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

| Change |        Delta |             % |                Size |   Samples | Callee                      | Location       |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------- | -------------- |
| -85.3% | -928.164 KiB |  10.3% → 1.6% |  1.06 MiB → 160 KiB |    12 → 4 | `Parse::do_one_bytecode`    | `libjvm.dylib` |
| -85.7% | -384.031 KiB |   4.3% → 0.6% |    448 KiB → 64 KiB |     3 → 1 | `GraphKit::access_store_at` | `libjvm.dylib` |
| -12.8% |  -352.07 KiB | 26.1% → 23.8% | 2.69 MiB → 2.34 MiB |   35 → 33 | `Parse::do_field_access`    | `libjvm.dylib` |
|  -3.4% | -312.335 KiB | 86.9% → 87.6% | 8.94 MiB → 8.63 MiB | 111 → 125 | `Parse::do_call`            | `libjvm.dylib` |
| -36.4% | -256.109 KiB |   6.7% → 4.4% |   704 KiB → 448 KiB |    10 → 8 | `Parse::return_current`     | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

| Change |        Delta |              % |                Size |   Samples | Callee                          | Location       |
| -----: | -----------: | -------------: | ------------------: | --------: | ------------------------------- | -------------- |
|  -4.2% | -440.476 KiB | 100.0% → 99.7% | 10.3 MiB → 9.85 MiB | 123 → 138 | `Parse::do_one_block`           | `libjvm.dylib` |
| -50.0% |  -64.031 KiB |    1.2% → 0.6% |    128 KiB → 64 KiB |     3 → 1 | `Parse::merge_common`           | `libjvm.dylib` |
|    new |  +32.015 KiB |    0.0% → 0.3% |        0 B → 32 KiB |     0 → 1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

| Change |       Delta |           % |                Size |   Samples | Callee                    | Location       |
| -----: | ----------: | ----------: | ------------------: | --------: | ------------------------- | -------------- |
|  -3.9% | -408.46 KiB |      100.0% | 10.3 MiB → 9.88 MiB | 123 → 139 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| +27.8% |    +160 KiB | 5.5% → 7.3% |   576 KiB → 736 KiB |        11 | `Parse::build_exits`      | `libjvm.dylib` |
|  -4.8% | -31.984 KiB | 6.4% → 6.3% |   672 KiB → 640 KiB |     4 → 5 | `GraphKit::set_map_clone` | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in native bytes allocated in their leaf frame.

Common call stack: `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     +0.5% |   +1.012 MiB | 26.2% → 26.9% |   222 MiB → 223 MiB | 1,068 → 1,022 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    +29.0% | +956.046 KiB |   0.4% → 0.5% | 3.22 MiB → 4.15 MiB |       58 → 79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    +26.8% | +819.914 KiB |   0.4% → 0.5% | 2.99 MiB → 3.79 MiB |       56 → 68 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     +2.1% | +480.937 KiB |   2.6% → 2.7% | 22.1 MiB → 22.6 MiB |     130 → 142 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     +6.5% | +416.093 KiB |   0.7% → 0.8% | 6.25 MiB → 6.66 MiB |     109 → 115 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +19150.0% |     +383 KiB |         <0.1% |     2 KiB → 385 KiB |         1 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::internal_grow_prolog` ← `G1CodeRootSetHashTable::insert` ← `nmethod::oops_do` ← `G1CollectedHeap::register_nmethod` ← `nmethod::nmethod` ← `nmethod::new_nmethod` ← `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +551.5% | +352.718 KiB |         <0.1% |    64 KiB → 417 KiB |        2 → 10 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseOutput::BuildOopMaps` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    +73.3% | +352.062 KiB |          0.1% |   480 KiB → 832 KiB |        8 → 12 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|   +999.7% | +320.046 KiB |         <0.1% |    32 KiB → 352 KiB |         1 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst_Interior` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|       new | +320.046 KiB |  0.0% → <0.1% |       0 B → 320 KiB |         0 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `Scheduling::anti_do_def` ← `Scheduling::ComputeRegisterAntidependencies` ← `Scheduling::DoScheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    +90.0% | +288.031 KiB |  <0.1% → 0.1% |   320 KiB → 608 KiB |         5 → 7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_DEF` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    +28.6% | +256.078 KiB |          0.1% |  896 KiB → 1.13 MiB |       17 → 22 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +200.0% | +256.078 KiB |         <0.1% |   128 KiB → 384 KiB |         1 → 6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<unsigned int, GrowableArray<unsigned int>>::expand_to` ← `PhaseChaitin::new_lrg` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|   +266.6% | +256.062 KiB |         <0.1% |    96 KiB → 352 KiB |         2 → 6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `ConnectionGraph::split_AddP` ← `ConnectionGraph::split_unique_types` ← `ConnectionGraph::compute_escape` ← `ConnectionGraph::do_analysis` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|       new | +256.062 KiB |  0.0% → <0.1% |       0 B → 256 KiB |         0 → 4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Compile::grow_node_notes` ← `Node::Node` ← `PhaseCFG::build_cfg` ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    +34.8% | +256.046 KiB |          0.1% |   736 KiB → 992 KiB |       10 → 13 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +100.0% | +256.015 KiB |  <0.1% → 0.1% |   256 KiB → 512 KiB |         1 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `GraphKit::set_map_clone` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|       new | +256.015 KiB |  0.0% → <0.1% |       0 B → 256 KiB |         0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::gen_subtype_check` ← `GraphKit::subtype_check_receiver` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|       new | +256.015 KiB |  0.0% → <0.1% |       0 B → 256 KiB |         0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `IdealKit::delay_transform` ← `IdealKit::make_label` ← `IdealKit::end_if` ← `G1BarrierSetC2::pre_barrier` ← `ModRefBarrierSetC2::store_at_resolved` ← `BarrierSetC2::store_at` ← `GraphKit::access_store_at` ← `Parse::do_put_xxx` ← `Parse::do_field_access` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` |
|       new | +256.015 KiB |  0.0% → <0.1% |       0 B → 256 KiB |         0 → 1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::uncommon_trap` ← `GraphKit::maybe_cast_profiled_receiver` ← `GraphKit::gen_instanceof` ← `Parse::do_instanceof` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Improvements

Call stacks with the largest decrease in native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change |        Delta |             % |                Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -5.8% |   -9.143 MiB | 18.8% → 18.0% |   159 MiB → 150 MiB | 662 → 624 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   -3.3% |    -6.13 MiB | 21.9% → 21.6% |   185 MiB → 179 MiB | 873 → 825 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -10.4% |   -1.583 MiB |   1.8% → 1.6% | 15.2 MiB → 13.6 MiB | 126 → 112 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   -1.7% |   -1.007 MiB |          6.8% | 57.6 MiB → 56.6 MiB | 483 → 459 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -11.6% |  -768.14 KiB |   0.8% → 0.7% | 6.47 MiB → 5.72 MiB | 109 → 100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -18.2% | -704.265 KiB |          0.4% | 3.78 MiB → 3.09 MiB |   71 → 54 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -13.6% | -704.234 KiB |   0.6% → 0.5% | 5.06 MiB → 4.38 MiB |   84 → 69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -25.8% | -544.007 KiB |          0.2% | 2.06 MiB → 1.53 MiB |   33 → 30 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -37.5% | -480.062 KiB |          0.1% |  1.25 MiB → 800 KiB |   15 → 11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -59.1% | -416.046 KiB |  0.1% → <0.1% |   704 KiB → 288 KiB |     5 → 2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_USE` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -11.4% | -320.171 KiB |          0.3% | 2.75 MiB → 2.44 MiB |   53 → 42 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -62.5% | -320.062 KiB |  0.1% → <0.1% |   512 KiB → 192 KiB |     7 → 3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::inline_incrementally_cleanup` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   -5.0% | -288.171 KiB |   0.7% → 0.6% |  5.6 MiB → 5.31 MiB |   88 → 77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -69.2% |     -288 KiB |         <0.1% |   416 KiB → 128 KiB |         3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::process_for_post_loop_opts_igvn` ← `Compile::Optimize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -16.7% | -256.015 KiB |          0.2% |  1.5 MiB → 1.25 MiB |   24 → 23 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseCFG::build_cfg` ← `PhaseCFG::PhaseCFG` ← `Compile::Code_Gen`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |     1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `IdealKit::delay_transform` ← `IdealKit::if_then` ← `G1BarrierSetC2::pre_barrier` ← `ModRefBarrierSetC2::store_at_resolved` ← `BarrierSetC2::store_at` ← `GraphKit::access_store_at` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |     1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Type_Array::grow` ← `GraphKit::clone_map` ← `GraphKit::set_map_clone` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |     1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::make_runtime_call` ← `GraphKit::uncommon_trap` ← `GraphKit::null_check_common` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |     1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `Parse::do_ifnull` ← `Parse::do_one_bytecode` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -256.015 KiB |  <0.1% → 0.0% |       256 KiB → 0 B |     1 → 0 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseGVN::transform_no_reclaim` ← `GraphKit::gen_subtype_check` ← `GraphKit::subtype_check_receiver` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
