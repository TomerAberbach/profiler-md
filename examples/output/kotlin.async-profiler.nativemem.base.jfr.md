# Allocated native memory profile

Allocated 855 MiB over 5,805 samples (151 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 855 MiB |   5,805 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 778 MiB (91.0%) C2Compiler::compile_method at libjvm.dylib
│   └── 778 MiB (91.0%) Compile::Compile
│       ├── 403 MiB (47.1%) Compile::Optimize
│       │   ├── 206 MiB (24.0%) PhaseIdealLoop::optimize
│       │   │   └── 205 MiB (23.9%) PhaseIdealLoop::PhaseIdealLoop
│       │   │       └── 205 MiB (23.9%) PhaseIdealLoop::build_and_optimize
│       │   │           ├── … 179 MiB (20.9%) malloc_hook at libasyncProfiler.dylib
│       │   │           ├── … 6.53 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
│       │   │           ├── … 5.72 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │           └── 13.5 MiB (1.6%) 8 more callees, led by (0.5%) IdealLoopTree::loop_predication
│       │   ├── … 176 MiB (20.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │   │   ├── … 155 MiB (18.2%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 6.19 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 5.56 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 8.7 MiB (1.0%) 10 more callees, led by (0.4%) Arena::grow
│       │   └── 19.7 MiB (2.3%) 15 more callees, led by (0.6%) PhaseIterGVN::optimize
│       ├── 358 MiB (41.8%) Compile::Code_Gen
│       │   ├── 299 MiB (34.9%) PhaseChaitin::Register_Allocate
│       │   │   ├── 235 MiB (27.5%) PhaseIFG::init
│       │   │   │   └── 235 MiB (27.5%) Arena::grow
│       │   │   │       └── 235 MiB (27.5%) Chunk::operator new
│       │   │   │           └── 235 MiB (27.5%) os::malloc
│       │   │   │               └── 235 MiB (27.5%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 58.3 MiB (6.8%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 5.35 MiB (0.6%) 7 more callees, led by (0.3%) PhaseChaitin::Split
│       │   ├── 51.5 MiB (6.0%) Matcher::match
│       │   │   ├── 31 MiB (3.6%) Matcher::xform
│       │   │   │   ├── … 22.3 MiB (2.6%) malloc_hook at libasyncProfiler.dylib
│       │   │   │   └── 8.69 MiB (1.0%) 5 more callees, led by (0.5%) Node::out_grow
│       │   │   ├── … 15.9 MiB (1.9%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 4.59 MiB (0.5%) 2 more callees, led by (0.4%) Node_Array::grow
│       │   └── 7.25 MiB (0.8%) 5 more callees, led by (0.4%) PhaseCFG::do_global_code_motion
│       ├── … 10.2 MiB (1.2%) Parse::do_one_block at libjvm.dylib
│       │   └── 10.2 MiB (1.2%) 14 more callees, led by (0.4%) Parse::do_call
│       └── 5.47 MiB (0.6%) 4 more callees, led by (0.5%) PhaseRemoveUseless::PhaseRemoveUseless
└── 74.5 MiB (8.7%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 74.5 MiB (8.7%) run(String[])
        ├── … 60.5 MiB (7.1%) malloc_hook at libasyncProfiler.dylib
        └── … 6.2 MiB (0.7%) executePhase(ConfigurationPipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
            └── 6.2 MiB (0.7%) 8 more callees, led by (0.3%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% |  855 MiB |   5,786 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   53 KiB |       9 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% | 2.25 KiB |      10 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 91.4% |  781 MiB |   5,317 | `os::malloc`                              | `libjvm.dylib`    |
|  7.5% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.0% | 8.32 MiB |     262 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.1% | 1.19 MiB |      38 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  279 KiB |      11 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                       | Location          |
| ----: | -------: | ------: | ---------------------------- | ----------------- |
| 90.6% |   48 KiB |       6 | `make_class_info_from_name`  | `libverify.dylib` |
|  9.4% | 4.98 KiB |       3 | `VerifyClassForMajorVersion` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.25 KiB |      10 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |    Size | Samples | Function                                   | Location                  |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 855 MiB |   5,786 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  91.4% | 781 MiB |   5,317 | `os::malloc`                               | `libjvm.dylib`            |
|  91.3% | 781 MiB |   5,097 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  91.3% | 781 MiB |   5,097 | `Arena::grow`                              | `libjvm.dylib`            |
|  91.3% | 780 MiB |   5,128 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  91.3% | 780 MiB |   5,128 | `thread_start`                             | `libsystem_pthread.dylib` |
|  91.3% | 780 MiB |   5,127 | `Thread::call_run`                         | `libjvm.dylib`            |
|  91.3% | 780 MiB |   5,127 | `thread_native_entry`                      | `libjvm.dylib`            |
|  91.3% | 780 MiB |   5,111 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  91.3% | 780 MiB |   5,111 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  91.3% | 780 MiB |   5,110 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  91.0% | 778 MiB |   5,008 | `Compile::Compile`                         | `libjvm.dylib`            |
|  91.0% | 778 MiB |   5,008 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  47.1% | 403 MiB |   2,575 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  44.8% | 383 MiB |   2,306 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  44.5% | 381 MiB |   2,285 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  44.5% | 381 MiB |   2,285 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  41.8% | 358 MiB |   2,214 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  39.1% | 334 MiB |   1,467 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  34.9% | 299 MiB |   1,660 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  855 MiB |   5,786 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  91.4% |  781 MiB |   5,317 | `os::malloc`                                                       | `libjvm.dylib`            |
|  91.3% |  781 MiB |   5,097 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  91.3% |  781 MiB |   5,097 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  91.3% |  780 MiB |   5,128 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  91.3% |  780 MiB |   5,128 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  91.3% |  780 MiB |   5,127 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  91.3% |  780 MiB |   5,127 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  91.3% |  780 MiB |   5,111 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   7.5% | 64.5 MiB |     919 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   7.5% |   64 MiB |     128 | `readBytes`                                                        | `libjava.dylib`           |
|   1.4% | 12.2 MiB |     163 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.4% | 12.2 MiB |     163 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.4% | 12.2 MiB |     163 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.4% | 12.2 MiB |     163 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.4% | 11.9 MiB |     201 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.2% | 10.5 MiB |     147 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.0% | 8.78 MiB |     407 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|   1.0% | 8.66 MiB |     120 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.8% | 6.47 MiB |      63 | `Type_Array::grow`                                                 | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 91.4% |  781 MiB |   5,317 | `os::malloc`                              | `libjvm.dylib`    |
|  7.5% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.0% | 8.32 MiB |     262 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.1% | 1.19 MiB |      38 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  279 KiB |      11 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 99.9% |  781 MiB |   5,097 | `Chunk::operator new`       | `libjvm.dylib` |
| <0.1% |  368 KiB |     200 | `AllocateHeap`              | `libjvm.dylib` |
| <0.1% | 24.9 KiB |      12 | `AnyObj::operator new`      | `libjvm.dylib` |
| <0.1% |   15 KiB |       5 | `os::malloc`                | `libjvm.dylib` |
| <0.1% |   15 KiB |       5 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 781 MiB |   5,097 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 42.8% |  334 MiB |   1,467 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 30.1% |  235 MiB |   1,093 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.3% | 64.5 MiB |     919 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.5% | 58.3 MiB |     469 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.9% | 22.3 MiB |     122 | `Matcher::xform`             | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 780 MiB |   5,128 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 780 MiB |   5,127 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 780 MiB |   5,127 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 780 MiB |   5,111 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 780 MiB |   5,111 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 780 MiB |   5,110 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 778 MiB |   5,008 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 778 MiB |   5,008 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 403 MiB |   2,575 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 53.7% | 206 MiB |   1,332 | `Compile::Optimize`       | `libjvm.dylib` |
| 46.3% | 178 MiB |     974 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 381 MiB |   2,285 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 381 MiB |   2,285 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 358 MiB |   2,214 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 334 MiB |   1,467 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 299 MiB |   1,660 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 56.9% | 36.7 MiB |     568 | `Node_Array::grow`               | `libjvm.dylib` |
| 10.4% | 6.72 MiB |     115 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
| 10.0% | 6.47 MiB |      63 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.0% |  4.5 MiB |      36 | `Node::out_grow`                 | `libjvm.dylib` |
|  6.2% | 4.03 MiB |      41 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Caller                        | Location                  |
| -----: | -----: | ------: | ----------------------------- | ------------------------- |
| 100.0% | 64 MiB |     128 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 12.2 MiB |     163 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 12.2 MiB |     163 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 12.2 MiB |     163 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 98.7% |   12 MiB |     161 | `Compile::Compile`                     | `libjvm.dylib` |
| 63.9% | 7.78 MiB |     113 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 57.3% | 6.97 MiB |      97 | `Parse::do_call`                       | `libjvm.dylib` |
|  1.3% |  160 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 11.9 MiB |     201 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 10.5 MiB |     147 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 8.78 MiB |     407 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                             | Location       |
| -----: | -------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 8.66 MiB |     120 | `Parse::do_call`                   | `libjvm.dylib` |
|  61.7% | 5.34 MiB |      68 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 32.9% | 2.13 MiB |      21 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 17.4% | 1.13 MiB |      11 | `IdealKit::delay_transform`    | `libjvm.dylib` |
| 14.5% |  960 KiB |       9 | `GraphKit::clone_map`          | `libjvm.dylib` |
| 10.6% |  704 KiB |       4 | `GraphKit::set_all_memory`     | `libjvm.dylib` |
|  5.3% |  352 KiB |       4 | `Parse::build_exits`           | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 781 MiB |   5,317 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  15 KiB |       5 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 781 MiB |   5,097 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 781 MiB |   5,097 | `Chunk::operator new` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% |  780 MiB |   5,127 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% | 8.06 KiB |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 780 MiB |   5,128 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  780 MiB |   5,111 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% | 15.5 KiB |       5 | `VMThread::run`                 | `libjvm.dylib` |
|  <0.1% | 8.06 KiB |       1 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |
|  <0.1% | 3.37 KiB |      10 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 780 MiB |   5,127 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  780 MiB |   5,110 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 8.06 KiB |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 780 MiB |   5,111 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.7% |  778 MiB |   5,008 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.3% | 2.66 MiB |     101 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |     38 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 51.8% |  403 MiB |   2,575 | `Compile::Optimize`                      | `libjvm.dylib` |
| 46.0% |  358 MiB |   2,214 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.5% |   12 MiB |     161 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 4.66 MiB |      48 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% |  576 KiB |       7 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 778 MiB |   5,008 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 51.0% |  206 MiB |   1,332 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 44.1% |  178 MiB |     974 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  1.3% | 5.31 MiB |      50 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  0.8% | 3.11 MiB |      52 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  0.8% |  3.1 MiB |      54 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  381 MiB |   2,285 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 2.41 MiB |      21 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.8% |  334 MiB |   1,467 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.2% | 12.1 MiB |     196 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  3.1% | 11.9 MiB |     201 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  1.7% | 6.65 MiB |     119 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.5% | 5.53 MiB |     112 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 381 MiB |   2,285 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.6% |  299 MiB |   1,660 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.4% | 51.5 MiB |     432 | `Matcher::match`                  | `libjvm.dylib` |
|  0.9% | 3.21 MiB |      50 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.5% | 1.94 MiB |      29 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.5% | 1.87 MiB |      36 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 334 MiB |   1,467 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |      Size | Samples | Callee                                   | Location       |
| ----: | --------: | ------: | ---------------------------------------- | -------------- |
| 78.6% |   235 MiB |   1,093 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 19.6% |  58.6 MiB |     480 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  0.9% |  2.59 MiB |      37 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.3% | 1,009 KiB |      15 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.3% |   896 KiB |      15 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 64.5 MiB |     919 | `Arena::grow` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 64 MiB |     128 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 86.4% | 10.5 MiB |     147 | `Parse::do_call`         | `libjvm.dylib` |
| 24.6% |    3 MiB |      41 | `Parse::do_field_access` | `libjvm.dylib` |
|  6.9% |  864 KiB |      11 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  6.2% |  768 KiB |       8 | `Parse::do_if`           | `libjvm.dylib` |
|  4.4% |  544 KiB |      10 | `Parse::array_load`      | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 12.2 MiB |     163 | `Parse::do_one_block` | `libjvm.dylib` |
|   0.5% |   64 KiB |       1 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 12.2 MiB |     163 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   8.5% | 1.03 MiB |      11 | `Parse::build_exits`      | `libjvm.dylib` |
|   5.4% |  672 KiB |       8 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.3% |   32 KiB |       1 | `Parse::do_exits`         | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 12.2 MiB |     163 | `Parse::Parse` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 11.9 MiB |     201 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 82.3% | 8.66 MiB |     120 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 66.3% | 6.97 MiB |      97 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  3.0% |  320 KiB |       3 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  1.9% |  208 KiB |       6 | `Compile::call_generator`          | `libjvm.dylib` |
|  1.5% |  160 KiB |       3 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 94.8% | 8.32 MiB |     262 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  5.2% |  468 KiB |     145 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 89.9% | 7.78 MiB |     113 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 61.7% | 5.34 MiB |      68 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 11.2% |  992 KiB |      10 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  9.0% |  800 KiB |       5 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
|  8.3% |  736 KiB |       5 | `DirectCallGenerator::generate`    | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 6.47 MiB |      63 | `Arena::Arealloc` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.5% |  235 MiB |   1,093 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 20.9% |  179 MiB |     842 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18.2% |  155 MiB |     625 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                |
|  6.8% | 58.3 MiB |     469 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.4% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
|  2.6% | 22.3 MiB |     122 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% | 15.9 MiB |     134 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% | 6.53 MiB |     117 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.7% | 6.19 MiB |      95 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  0.7% | 5.72 MiB |     106 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% | 5.56 MiB |      79 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% |  5.5 MiB |      11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.5% | 4.63 MiB |      47 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 4.59 MiB |      42 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% | 4.34 MiB |      31 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 3.69 MiB |      56 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 3.61 MiB |      69 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% | 3.04 MiB |      50 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% | 3.03 MiB |      50 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |  2.5 MiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                      |
