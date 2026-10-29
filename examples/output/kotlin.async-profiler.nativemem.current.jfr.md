# Allocated native memory profile

Allocated 830 MiB over 5,631 samples (151 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 830 MiB |   5,631 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 752 MiB (90.6%) Compile::Compile at libjvm.dylib
│   ├── 397 MiB (47.8%) Compile::Optimize
│   │   ├── … 206 MiB (24.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │   ├── … 179 MiB (21.6%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 6.66 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 5.72 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 14.1 MiB (1.7%) 8 more callees, led by (0.6%) IdealLoopTree::loop_predication
│   │   ├── … 169 MiB (20.3%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │   ├── … 150 MiB (18.0%) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 5.31 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 13.6 MiB (1.6%) 10 more callees, led by (0.5%) Node_Array::grow
│   │   ├── 5.44 MiB (0.7%) PhaseIterGVN::optimize
│   │   │   └── 5.44 MiB (0.7%) PhaseIterGVN::transform_old
│   │   │       └── 5.44 MiB (0.7%) 6 more callees, led by (0.5%) NodeHash::hash_find_insert
│   │   └── 14.9 MiB (1.8%) 12 more callees, led by (0.4%) ConnectionGraph::do_analysis
│   ├── 340 MiB (40.9%) Compile::Code_Gen
│   │   ├── 285 MiB (34.3%) PhaseChaitin::Register_Allocate
│   │   │   ├── 223 MiB (26.9%) PhaseIFG::init
│   │   │   │   └── 223 MiB (26.9%) Arena::grow
│   │   │   │       └── 223 MiB (26.9%) Chunk::operator new
│   │   │   │           └── 223 MiB (26.9%) os::malloc
│   │   │   │               └── 223 MiB (26.9%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│   │   │   ├── … 56.6 MiB (6.8%) malloc_hook at libasyncProfiler.dylib
│   │   │   └── 4.94 MiB (0.6%) 6 more callees, led by (0.4%) PhaseChaitin::Split
│   │   ├── 48.1 MiB (5.8%) Matcher::match
│   │   │   ├── 31.3 MiB (3.8%) Matcher::xform
│   │   │   │   ├── … 22.6 MiB (2.7%) malloc_hook at libasyncProfiler.dylib
│   │   │   │   └── 8.75 MiB (1.1%) 5 more callees, led by (0.6%) Node::out_grow
│   │   │   └── … 13.6 MiB (1.6%) malloc_hook at libasyncProfiler.dylib
│   │   └── 7.04 MiB (0.8%) 5 more callees, led by (0.3%) PhaseCFG::do_global_code_motion
│   ├── … 8.23 MiB (1.0%) Parse::do_one_block at libjvm.dylib
│   │   └── 8.23 MiB (1.0%) 14 more callees, led by (0.5%) Parse::do_call
│   └── 5.66 MiB (0.7%) 6 more callees, led by (0.5%) PhaseRemoveUseless::PhaseRemoveUseless
└── 74.7 MiB (9.0%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 74.7 MiB (9.0%) run(String[])
        ├── … 60.5 MiB (7.3%) malloc_hook at libasyncProfiler.dylib
        └── … 8.52 MiB (1.0%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 6.11 MiB (0.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 6.11 MiB (0.7%) executePhase(ConfigurationPipelineArtifact)
                    └── 6.11 MiB (0.7%) 7 more callees, led by (0.4%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function       | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 830 MiB |   5,619 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  51 KiB |       8 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   768 B |       4 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 91.1% |  756 MiB |   5,150 | `os::malloc`                              | `libjvm.dylib`    |
|  7.7% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.0% | 8.66 MiB |     266 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.31 MiB |      42 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  144 KiB |      10 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                       | Location          |
| ----: | -------: | ------: | ---------------------------- | ----------------- |
| 94.2% |   48 KiB |       6 | `make_class_info_from_name`  | `libverify.dylib` |
|  5.8% | 2.98 KiB |       2 | `VerifyClassForMajorVersion` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 768 B |       4 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |    Size | Samples | Function                                   | Location                  |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 830 MiB |   5,619 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  91.1% | 756 MiB |   5,150 | `os::malloc`                               | `libjvm.dylib`            |
|  91.0% | 755 MiB |   4,961 | `Thread::call_run`                         | `libjvm.dylib`            |
|  91.0% | 755 MiB |   4,961 | `thread_native_entry`                      | `libjvm.dylib`            |
|  91.0% | 755 MiB |   4,961 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  91.0% | 755 MiB |   4,961 | `thread_start`                             | `libsystem_pthread.dylib` |
|  91.0% | 755 MiB |   4,946 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  91.0% | 755 MiB |   4,946 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  91.0% | 755 MiB |   4,946 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  90.9% | 755 MiB |   4,917 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  90.9% | 755 MiB |   4,917 | `Arena::grow`                              | `libjvm.dylib`            |
|  90.6% | 752 MiB |   4,849 | `Compile::Compile`                         | `libjvm.dylib`            |
|  90.6% | 752 MiB |   4,849 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  47.8% | 397 MiB |   2,547 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  45.4% | 377 MiB |   2,272 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  45.1% | 375 MiB |   2,247 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  45.1% | 375 MiB |   2,247 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  40.9% | 340 MiB |   2,109 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  39.7% | 329 MiB |   1,449 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  34.3% | 285 MiB |   1,561 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  830 MiB |   5,619 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  91.1% |  756 MiB |   5,150 | `os::malloc`                                                       | `libjvm.dylib`            |
|  91.0% |  755 MiB |   4,961 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  91.0% |  755 MiB |   4,961 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  91.0% |  755 MiB |   4,961 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  91.0% |  755 MiB |   4,961 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  91.0% |  755 MiB |   4,946 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|  90.9% |  755 MiB |   4,917 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  90.9% |  755 MiB |   4,917 | `Arena::grow`                                                      | `libjvm.dylib`            |
|   7.7% |   64 MiB |     128 | `readBytes`                                                        | `libjava.dylib`           |
|   7.1% | 59.3 MiB |     869 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.4% |   12 MiB |     192 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.2% | 9.88 MiB |     139 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.2% | 9.88 MiB |     139 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.2% | 9.88 MiB |     139 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.2% | 9.85 MiB |     138 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.1% | 9.06 MiB |     407 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|   1.0% | 8.63 MiB |     125 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   0.9% | 7.47 MiB |     100 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.7% | 5.75 MiB |     112 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 91.1% |  756 MiB |   5,150 | `os::malloc`                              | `libjvm.dylib`    |
|  7.7% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.0% | 8.66 MiB |     266 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.31 MiB |      42 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  144 KiB |      10 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 99.9% |  755 MiB |   4,917 | `Chunk::operator new`       | `libjvm.dylib` |
|  0.1% |  895 KiB |     219 | `AllocateHeap`              | `libjvm.dylib` |
| <0.1% | 1.97 KiB |       4 | `os::malloc`                | `libjvm.dylib` |
| <0.1% | 1.97 KiB |       4 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |
| <0.1% |    720 B |       9 | `AnyObj::operator new`      | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 755 MiB |   4,961 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 755 MiB |   4,961 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 755 MiB |   4,961 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 755 MiB |   4,946 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 755 MiB |   4,946 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 755 MiB |   4,946 | `Thread::call_run` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 755 MiB |   4,917 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 43.6% |  329 MiB |   1,449 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 29.5% |  223 MiB |   1,022 | `PhaseIFG::init`             | `libjvm.dylib` |
|  7.9% | 59.3 MiB |     869 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.5% | 56.6 MiB |     459 | `PhaseLive::compute`         | `libjvm.dylib` |
|  3.0% | 22.6 MiB |     142 | `Matcher::xform`             | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 752 MiB |   4,849 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 752 MiB |   4,849 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 397 MiB |   2,547 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 55.0% | 207 MiB |   1,326 | `Compile::Optimize`       | `libjvm.dylib` |
| 45.0% | 170 MiB |     946 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 375 MiB |   2,247 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 375 MiB |   2,247 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 340 MiB |   2,109 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 329 MiB |   1,449 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 285 MiB |   1,561 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Caller                        | Location                  |
| -----: | -----: | ------: | ----------------------------- | ------------------------- |
| 100.0% | 64 MiB |     128 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 56.8% | 33.7 MiB |     534 | `Node_Array::grow`               | `libjvm.dylib` |
| 10.8% | 6.38 MiB |     111 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  8.9% | 5.28 MiB |      62 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.9% | 4.66 MiB |      41 | `Node::out_grow`                 | `libjvm.dylib` |
|  5.3% | 3.16 MiB |      29 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                               | Location       |
| -----: | -----: | ------: | ------------------------------------ | -------------- |
| 100.0% | 12 MiB |     192 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 9.88 MiB |     139 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 9.88 MiB |     139 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 98.1% |  9.7 MiB |     137 | `Compile::Compile`                 | `libjvm.dylib` |
| 68.9% | 6.81 MiB |      92 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 60.1% | 5.94 MiB |      90 | `Parse::do_call`                   | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 9.85 MiB |     138 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 9.06 MiB |     407 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 8.63 MiB |     125 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.2% | 7.41 MiB |      99 | `Parse::do_call`                       | `libjvm.dylib` |
| 53.6% |    4 MiB |      60 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  2.5% |  192 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 5.75 MiB |     112 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  34.2% | 1.97 MiB |      39 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% |  756 MiB |   5,150 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% | 1.97 KiB |       4 | `os::malloc`  | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  755 MiB |   4,946 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% |   55 KiB |      10 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% |    2 KiB |       1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  <0.1% | 1.57 KiB |       4 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 755 MiB |   4,961 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 755 MiB |   4,961 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 755 MiB |   4,961 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.6% |  752 MiB |   4,849 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.4% | 2.78 MiB |      96 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |     27 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 755 MiB |   4,946 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 755 MiB |   4,946 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 755 MiB |   4,917 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 755 MiB |   4,917 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.8% |  397 MiB |   2,547 | `Compile::Optimize`                      | `libjvm.dylib` |
| 45.2% |  340 MiB |   2,109 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.3% |  9.7 MiB |     137 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% | 4.09 MiB |      41 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% |  992 KiB |       9 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 752 MiB |   4,849 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 52.1% |  207 MiB |   1,326 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 42.7% |  170 MiB |     946 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  1.4% | 5.44 MiB |      53 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  0.9% | 3.45 MiB |      50 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  0.8% | 3.16 MiB |      48 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  375 MiB |   2,247 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 2.19 MiB |      25 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.9% |  329 MiB |   1,449 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.2% |   12 MiB |     192 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.7% | 10.1 MiB |     169 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.1% | 7.94 MiB |     147 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.5% | 5.75 MiB |     112 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 375 MiB |   2,247 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.8% |  285 MiB |   1,561 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.2% | 48.1 MiB |     421 | `Matcher::match`                  | `libjvm.dylib` |
|  0.8% | 2.65 MiB |      43 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.7% |  2.3 MiB |      44 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  0.5% | 1.74 MiB |      31 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 329 MiB |   1,449 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                           | Location       |
| ----: | -------: | ------: | ------------------------------------------------ | -------------- |
| 78.3% |  223 MiB |   1,022 | `PhaseIFG::init`                                 | `libjvm.dylib` |
| 19.9% | 56.7 MiB |     464 | `PhaseLive::compute`                             | `libjvm.dylib` |
|  1.0% | 2.94 MiB |      38 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
|  0.3% |  736 KiB |      12 | `PhaseAggressiveCoalesce::insert_copies`         | `libjvm.dylib` |
|  0.2% |  563 KiB |      10 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 64 MiB |     128 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 59.3 MiB |     869 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |   Size | Samples | Callee        | Location       |
| -----: | -----: | ------: | ------------- | -------------- |
| 100.0% | 12 MiB |     192 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.7% | 9.85 MiB |     138 | `Parse::do_one_block`           | `libjvm.dylib` |
|  0.6% |   64 KiB |       1 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.3% |   32 KiB |       1 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 9.88 MiB |     139 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   7.3% |  736 KiB |      11 | `Parse::build_exits`      | `libjvm.dylib` |
|   6.3% |  640 KiB |       5 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.3% |   32 KiB |       1 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 9.88 MiB |     139 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 87.6% | 8.63 MiB |     125 | `Parse::do_call`         | `libjvm.dylib` |
| 23.8% | 2.34 MiB |      33 | `Parse::do_field_access` | `libjvm.dylib` |
|  4.4% |  448 KiB |       8 | `Parse::return_current`  | `libjvm.dylib` |
|  3.8% |  384 KiB |       6 | `Parse::array_load`      | `libjvm.dylib` |
|  3.8% |  384 KiB |       3 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 95.6% | 8.66 MiB |     266 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  4.4% |  407 KiB |     141 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 85.8% | 7.41 MiB |      99 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 68.8% | 5.94 MiB |      90 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  5.4% |  480 KiB |       7 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  5.1% |  448 KiB |       3 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  2.6% |  232 KiB |       6 | `Compile::call_generator`          | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 91.2% | 6.81 MiB |      92 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 53.6% |    4 MiB |      60 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 10.9% |  832 KiB |       6 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
| 10.5% |  800 KiB |       5 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
|  5.9% |  448 KiB |       3 | `GraphKit::null_check_common`      | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 5.75 MiB |     112 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  34.2% | 1.97 MiB |      39 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.9% |  223 MiB |   1,022 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 21.6% |  179 MiB |     825 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18.0% |  150 MiB |     624 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                |
|  6.8% | 56.6 MiB |     459 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.6% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
|  2.7% | 22.6 MiB |     142 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.6% | 13.6 MiB |     112 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% | 6.66 MiB |     115 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% | 5.72 MiB |     100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.7% |  5.5 MiB |      11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.6% | 5.31 MiB |      77 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  0.6% | 4.63 MiB |      40 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.5% | 4.38 MiB |      69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% | 4.31 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% | 4.15 MiB |      79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.5% | 4.09 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 3.79 MiB |      68 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% | 3.09 MiB |      54 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% | 2.75 MiB |      45 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |  2.5 MiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                      |
