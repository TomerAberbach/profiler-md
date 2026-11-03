# Allocated native memory profile

Allocated 933 MiB over 6,086 samples (157 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 933 MiB |   6,086 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 858 MiB (91.9%) thread_start at libsystem_pthread.dylib
│   └── 858 MiB (91.9%) _pthread_start
│       └── 858 MiB (91.9%) thread_native_entry at libjvm.dylib
│           └── 858 MiB (91.9%) Thread::call_run
│               └── 858 MiB (91.9%) JavaThread::thread_main_inner
│                   └── 858 MiB (91.9%) CompileBroker::compiler_thread_loop
│                       └── 858 MiB (91.9%) CompileBroker::invoke_compiler_on_method
│                           └── 855 MiB (91.6%) C2Compiler::compile_method
│                               └── 855 MiB (91.6%) Compile::Compile
│                                   ├── 435 MiB (46.7%) Compile::Optimize
│                                   │   ├── … 216 MiB (23.2%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│                                   │   │   ├── … 189 MiB (20.3%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   ├── … 6.16 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   └── 21 MiB (2.2%) 8 more callees, led by (0.6%) Node_Array::grow
│                                   │   ├── … 194 MiB (20.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│                                   │   │   ├── … 168 MiB (18.1%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   ├── … 6.6 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   └── 18.5 MiB (2.0%) 10 more callees, led by (0.6%) Node_Array::grow
│                                   │   └── 22.5 MiB (2.4%) 14 more callees, led by (0.5%) PhaseIterGVN::optimize
│                                   ├── 400 MiB (42.9%) Compile::Code_Gen
│                                   │   ├── 334 MiB (35.8%) PhaseChaitin::Register_Allocate
│                                   │   │   ├── … 258 MiB (27.7%) os::malloc at libjvm.dylib
│                                   │   │   │   └── 258 MiB (27.7%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│                                   │   │   ├── … 69.1 MiB (7.4%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   └── 4.04 MiB (0.4%) PhaseChaitin::Split
│                                   │   ├── 57 MiB (6.1%) Matcher::match
│                                   │   │   ├── 36.4 MiB (3.9%) Matcher::xform
│                                   │   │   │   ├── … 26.3 MiB (2.8%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   │   └── 10.1 MiB (1.1%) 5 more callees, led by (0.6%) Node::out_grow
│                                   │   │   ├── … 15.8 MiB (1.7%) malloc_hook at libasyncProfiler.dylib
│                                   │   │   └── 4.81 MiB (0.5%) 2 more callees, led by (0.4%) Node_Array::grow
│                                   │   └── 9.25 MiB (1.0%) 5 more callees, led by (0.5%) PhaseCFG::do_global_code_motion
│                                   ├── … 9.63 MiB (1.0%) Parse::do_one_block at libjvm.dylib
│                                   │   └── 9.63 MiB (1.0%) 13 more callees, led by (0.4%) Parse::do_field_access
│                                   └── … 6.06 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
└── 75.1 MiB (8.0%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 75.1 MiB (8.0%) run(String[])
        ├── … 60.5 MiB (6.5%) malloc_hook at libasyncProfiler.dylib
        └── … 6.78 MiB (0.7%) executePhase(ConfigurationPipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
            └── 6.78 MiB (0.7%) 5 more callees, led by (0.4%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% |  933 MiB |   6,076 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   34 KiB |       5 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% | 1.33 KiB |       5 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 92.0% |  858 MiB |   5,620 | `os::malloc`                              | `libjvm.dylib`    |
|  6.9% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  0.9% | 8.61 MiB |     243 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.47 MiB |      47 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  302 KiB |      12 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |   Size | Samples | Caller                       | Location          |
| ----: | -----: | ------: | ---------------------------- | ----------------- |
| 94.1% | 32 KiB |       4 | `make_class_info_from_name`  | `libverify.dylib` |
|  5.9% |  2 KiB |       1 | `VerifyClassForMajorVersion` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.33 KiB |       5 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |    Size | Samples | Function                                   | Location                  |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 933 MiB |   6,076 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  92.0% | 858 MiB |   5,620 | `os::malloc`                               | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,361 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,361 | `Arena::grow`                              | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,401 | `Thread::call_run`                         | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,401 | `thread_native_entry`                      | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,401 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  91.9% | 858 MiB |   5,401 | `thread_start`                             | `libsystem_pthread.dylib` |
|  91.9% | 858 MiB |   5,389 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,389 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  91.9% | 858 MiB |   5,388 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  91.6% | 855 MiB |   5,283 | `Compile::Compile`                         | `libjvm.dylib`            |
|  91.6% | 855 MiB |   5,283 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  46.7% | 435 MiB |   2,722 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  44.3% | 413 MiB |   2,408 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  43.9% | 410 MiB |   2,376 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  43.9% | 410 MiB |   2,376 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  42.9% | 400 MiB |   2,353 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  38.3% | 357 MiB |   1,498 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  35.8% | 334 MiB |   1,725 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  933 MiB |   6,076 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  92.0% |  858 MiB |   5,620 | `os::malloc`                                                       | `libjvm.dylib`            |
|  91.9% |  858 MiB |   5,361 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  91.9% |  858 MiB |   5,361 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  91.9% |  858 MiB |   5,401 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  91.9% |  858 MiB |   5,401 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  91.9% |  858 MiB |   5,401 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  91.9% |  858 MiB |   5,401 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  91.9% |  858 MiB |   5,389 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   8.0% | 74.6 MiB |   1,019 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   6.9% |   64 MiB |     128 | `readBytes`                                                        | `libjava.dylib`           |
|   1.4% | 12.9 MiB |     195 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.3% | 12.1 MiB |     144 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.3% | 12.1 MiB |     144 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.3% | 12.1 MiB |     144 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.3% | 12.1 MiB |     144 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.2% |   11 MiB |     134 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   1.1% | 9.85 MiB |     112 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   1.0% | 9.04 MiB |     415 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|   0.8% | 7.28 MiB |      72 | `Type_Array::grow`                                                 | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 92.0% |  858 MiB |   5,620 | `os::malloc`                              | `libjvm.dylib`    |
|  6.9% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  0.9% | 8.61 MiB |     243 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.47 MiB |      47 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  302 KiB |      12 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 99.9% |  858 MiB |   5,361 | `Chunk::operator new`       | `libjvm.dylib` |
|  0.1% |  682 KiB |     242 | `AllocateHeap`              | `libjvm.dylib` |
| <0.1% | 8.84 KiB |      11 | `AnyObj::operator new`      | `libjvm.dylib` |
| <0.1% |    816 B |       4 | `os::malloc`                | `libjvm.dylib` |
| <0.1% |    816 B |       4 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 858 MiB |   5,361 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 41.7% |  357 MiB |   1,498 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 30.1% |  258 MiB |   1,106 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.7% | 74.6 MiB |   1,019 | `Arena::Arealloc`            | `libjvm.dylib` |
|  8.1% | 69.1 MiB |     516 | `PhaseLive::compute`         | `libjvm.dylib` |
|  3.1% | 26.3 MiB |     142 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 858 MiB |   5,401 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 858 MiB |   5,401 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 858 MiB |   5,401 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 858 MiB |   5,389 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 858 MiB |   5,389 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 858 MiB |   5,388 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 855 MiB |   5,283 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 855 MiB |   5,283 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 435 MiB |   2,722 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 52.8% | 218 MiB |   1,361 | `Compile::Optimize`       | `libjvm.dylib` |
| 47.2% | 195 MiB |   1,047 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 410 MiB |   2,376 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 410 MiB |   2,376 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 400 MiB |   2,353 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 357 MiB |   1,498 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 334 MiB |   1,725 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 55.8% | 41.6 MiB |     620 | `Node_Array::grow`               | `libjvm.dylib` |
| 11.1% | 8.28 MiB |     128 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.8% | 7.28 MiB |      72 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.4% |  5.5 MiB |      52 | `Node::out_grow`                 | `libjvm.dylib` |
|  4.7% |  3.5 MiB |      30 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Caller                        | Location                  |
| -----: | -----: | ------: | ----------------------------- | ------------------------- |
| 100.0% | 64 MiB |     128 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                               | Location       |
| ----: | -------: | ------: | ---------------------------------------------------- | -------------- |
| 99.0% | 12.8 MiB |     193 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  1.0% |  128 KiB |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 12.1 MiB |     144 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 12.1 MiB |     144 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 12.1 MiB |     144 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 96.9% | 11.8 MiB |     140 | `Compile::Compile`                     | `libjvm.dylib` |
| 80.2% | 9.72 MiB |     109 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 74.2% |    9 MiB |     104 | `Parse::do_call`                       | `libjvm.dylib` |
|  1.5% |  192 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                | Location       |
| -----: | -----: | ------: | --------------------- | -------------- |
| 100.0% | 11 MiB |     134 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 98.7% | 9.72 MiB |     110 | `Parse::do_call`                       | `libjvm.dylib` |
| 56.8% | 5.59 MiB |      60 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  2.5% |  256 KiB |       3 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 9.04 MiB |     415 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 24.9% | 1.81 MiB |      20 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 22.3% | 1.63 MiB |      13 | `IdealKit::delay_transform`    | `libjvm.dylib` |
| 17.6% | 1.28 MiB |      11 | `GraphKit::clone_map`          | `libjvm.dylib` |
|  9.9% |  736 KiB |       8 | `Parse::build_exits`           | `libjvm.dylib` |
|  6.4% |  480 KiB |       4 | `GraphKit::set_all_memory`     | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 858 MiB |   5,620 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |   816 B |       4 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 858 MiB |   5,361 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 858 MiB |   5,361 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  858 MiB |   5,389 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% |  126 KiB |       5 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% | 6.65 KiB |       7 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 858 MiB |   5,401 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 858 MiB |   5,401 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 858 MiB |   5,401 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  858 MiB |   5,388 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 8.06 KiB |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 858 MiB |   5,389 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.7% |  855 MiB |   5,283 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.3% | 2.81 MiB |     103 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |   32 KiB |       1 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| <0.1% |     28 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 50.9% |  435 MiB |   2,722 | `Compile::Optimize`                      | `libjvm.dylib` |
| 46.8% |  400 MiB |   2,353 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.4% | 11.8 MiB |     140 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 6.06 MiB |      49 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% | 1.06 MiB |      13 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 855 MiB |   5,283 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 50.0% |  218 MiB |   1,361 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 44.8% |  195 MiB |   1,047 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.1% | 4.91 MiB |      52 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.0% | 4.41 MiB |      76 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  0.9% |  3.8 MiB |      50 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.2% |  410 MiB |   2,376 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.8% | 3.22 MiB |      32 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.2% |  357 MiB |   1,498 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.1% | 12.8 MiB |     193 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.8% | 11.3 MiB |     180 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  2.1% | 8.48 MiB |     154 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.4% | 5.75 MiB |     114 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 410 MiB |   2,376 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.5% |  334 MiB |   1,725 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.2% |   57 MiB |     472 | `Matcher::match`                  | `libjvm.dylib` |
|  1.1% | 4.21 MiB |      66 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.6% | 2.48 MiB |      37 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.5% | 2.13 MiB |      41 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 357 MiB |   1,498 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 77.3% |  258 MiB |   1,106 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 20.8% | 69.5 MiB |     529 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  1.2% | 4.04 MiB |      51 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.3% |  885 KiB |      12 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.2% |  800 KiB |      13 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 74.6 MiB |   1,019 | `Arena::grow` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 64 MiB |     128 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 12.9 MiB |     195 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 91.0% |   11 MiB |     134 | `Parse::do_call`         | `libjvm.dylib` |
| 27.8% | 3.38 MiB |      38 | `Parse::do_field_access` | `libjvm.dylib` |
|  5.9% |  736 KiB |       7 | `Parse::do_if`           | `libjvm.dylib` |
|  4.9% |  608 KiB |       5 | `Parse::do_checkcast`    | `libjvm.dylib` |
|  4.9% |  608 KiB |       5 | `Parse::return_current`  | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 12.1 MiB |     144 | `Parse::do_one_block` | `libjvm.dylib` |
|   0.8% |   96 KiB |       3 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 12.1 MiB |     144 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  12.6% | 1.53 MiB |      20 | `Parse::build_exits`      | `libjvm.dylib` |
|   4.1% |  512 KiB |       4 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.5% |   64 KiB |       1 | `Parse::merge_common`     | `libjvm.dylib` |
|   0.3% |   32 KiB |       1 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 12.1 MiB |     144 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 88.1% | 9.72 MiB |     110 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 81.6% |    9 MiB |     104 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  9.9% | 1.09 MiB |       9 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  0.8% |   96 KiB |       2 | `Compile::call_generator`                  | `libjvm.dylib` |
|  0.6% |   64 KiB |       1 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 98.7% | 9.72 MiB |     109 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 56.8% | 5.59 MiB |      60 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  6.3% |  640 KiB |       3 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
|  2.9% |  288 KiB |       4 | `GraphKit::null_check_common`      | `libjvm.dylib` |
|  2.5% |  256 KiB |       5 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 95.2% | 8.61 MiB |     243 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  4.8% |  441 KiB |     172 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 7.28 MiB |      72 | `Arena::Arealloc` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.7% |  258 MiB |   1,106 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 20.3% |  189 MiB |     843 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18.1% |  168 MiB |     655 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                |
|  7.4% | 69.1 MiB |     516 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.9% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
|  2.8% | 26.3 MiB |     142 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.7% | 15.8 MiB |     126 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% |  6.6 MiB |      86 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  0.7% | 6.16 MiB |     107 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% | 6.06 MiB |      49 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.6% | 5.75 MiB |      81 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% | 5.56 MiB |      99 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% |  5.5 MiB |      11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.6% | 5.47 MiB |      51 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.5% | 4.71 MiB |      84 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.5% | 4.34 MiB |      74 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 4.13 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% |    4 MiB |      56 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 3.76 MiB |      70 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 2.66 MiB |      45 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                   |
