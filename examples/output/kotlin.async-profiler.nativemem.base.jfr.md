# Allocated native memory profile

Allocated 701 MiB over 4,944 samples (145 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 701 MiB |   4,944 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 626 MiB (89.3%) CompileBroker::invoke_compiler_on_method at libjvm.dylib
│   ├── 623 MiB (88.8%) C2Compiler::compile_method
│   │   └── 623 MiB (88.8%) Compile::Compile
│   │       ├── 332 MiB (47.3%) Compile::Optimize
│   │       │   ├── 169 MiB (24.2%) PhaseIdealLoop::optimize
│   │       │   │   └── 168 MiB (23.9%) PhaseIdealLoop::PhaseIdealLoop
│   │       │   │       └── 168 MiB (23.9%) PhaseIdealLoop::build_and_optimize
│   │       │   │           ├── … 148 MiB (21.0%) malloc_hook at libasyncProfiler.dylib
│   │       │   │           ├── … 5.13 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│   │       │   │           └── 15.1 MiB (2.2%) 9 more callees, led by (0.6%) Node_Array::grow
│   │       │   ├── … 146 MiB (20.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │       │   │   ├── … 130 MiB (18.6%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 4.75 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 10.9 MiB (1.6%) 10 more callees, led by (0.7%) Node_Array::grow
│   │       │   └── 15.1 MiB (2.1%) 14 more callees, led by (0.5%) PhaseIterGVN::optimize
│   │       ├── 279 MiB (39.7%) Compile::Code_Gen
│   │       │   ├── 235 MiB (33.5%) PhaseChaitin::Register_Allocate
│   │       │   │   ├── … 187 MiB (26.7%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 43.9 MiB (6.3%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 3.65 MiB (0.5%) 5 more callees, led by (0.3%) PhaseChaitin::Split
│   │       │   ├── 38.5 MiB (5.5%) Matcher::match
│   │       │   │   ├── 23.9 MiB (3.4%) Matcher::xform
│   │       │   │   │   ├── … 16.7 MiB (2.4%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   │   └── 7.22 MiB (1.0%) 5 more callees, led by (0.6%) Matcher::match_tree
│   │       │   │   ├── … 10.6 MiB (1.5%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 4 MiB (0.6%) 3 more callees, led by (0.5%) Node_Array::grow
│   │       │   └── 5.3 MiB (0.8%) 5 more callees, led by (0.3%) PhaseCFG::do_global_code_motion
│   │       ├── … 6.91 MiB (1.0%) Parse::do_one_block at libjvm.dylib
│   │       │   └── 6.91 MiB (1.0%) 12 more callees, led by (0.3%) Parse::do_call
│   │       └── 4.25 MiB (0.6%) 4 more callees, led by (0.4%) PhaseRemoveUseless::PhaseRemoveUseless
│   └── … 3.69 MiB (0.5%) Compilation::compile_method at libjvm.dylib
│       └── 3.69 MiB (0.5%) 3 more callees, led by (0.5%) Compilation::compile_java_method
└── 74.6 MiB (10.6%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 74.6 MiB (10.6%) run(String[])
        ├── … 60.5 MiB (8.6%) read(byte[], int, int) at java.util.zip.InflaterInputStream
        │   └── … 60.5 MiB (8.6%) malloc_hook at libasyncProfiler.dylib
        └── … 8.78 MiB (1.3%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 6.36 MiB (0.9%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 6.36 MiB (0.9%) executePhase(ConfigurationPipelineArtifact)
                    └── 6.36 MiB (0.9%) 7 more callees, led by (0.5%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% |  701 MiB |   4,928 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% | 29.1 KiB |       7 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% | 2.15 KiB |       9 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 89.4% |  627 MiB |   4,465 | `os::malloc`                              | `libjvm.dylib`    |
|  9.1% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.2% | 8.62 MiB |     259 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.44 MiB |      46 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |   88 KiB |       9 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                             | Location          |
| ----: | -------: | ------: | ---------------------------------- | ----------------- |
| 82.5% |   24 KiB |       3 | `make_class_info_from_name`        | `libverify.dylib` |
| 17.1% | 4.98 KiB |       3 | `VerifyClassForMajorVersion`       | `libverify.dylib` |
|  0.4% |    112 B |       1 | `Java_java_util_zip_Inflater_init` | `libzip.dylib`    |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.15 KiB |       9 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |    Size | Samples | Function                                   | Location                  |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 701 MiB |   4,928 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  89.4% | 627 MiB |   4,465 | `os::malloc`                               | `libjvm.dylib`            |
|  89.3% | 627 MiB |   4,244 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  89.3% | 627 MiB |   4,243 | `Arena::grow`                              | `libjvm.dylib`            |
|  89.3% | 626 MiB |   4,270 | `Thread::call_run`                         | `libjvm.dylib`            |
|  89.3% | 626 MiB |   4,270 | `thread_native_entry`                      | `libjvm.dylib`            |
|  89.3% | 626 MiB |   4,270 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  89.3% | 626 MiB |   4,270 | `thread_start`                             | `libsystem_pthread.dylib` |
|  89.3% | 626 MiB |   4,263 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  89.3% | 626 MiB |   4,263 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  89.3% | 626 MiB |   4,263 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  88.8% | 623 MiB |   4,131 | `Compile::Compile`                         | `libjvm.dylib`            |
|  88.8% | 623 MiB |   4,131 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  47.3% | 332 MiB |   2,159 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  45.1% | 317 MiB |   1,939 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  44.7% | 314 MiB |   1,907 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  44.7% | 314 MiB |   1,907 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  39.7% | 279 MiB |   1,813 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  39.6% | 278 MiB |   1,258 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  33.5% | 235 MiB |   1,355 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  701 MiB |   4,928 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  89.4% |  627 MiB |   4,465 | `os::malloc`                                                       | `libjvm.dylib`            |
|  89.3% |  627 MiB |   4,244 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  89.3% |  627 MiB |   4,243 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  89.3% |  626 MiB |   4,270 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  89.3% |  626 MiB |   4,270 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  89.3% |  626 MiB |   4,270 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  89.3% |  626 MiB |   4,270 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  89.3% |  626 MiB |   4,263 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   9.1% |   64 MiB |     128 | `readBytes`                                                        | `libjava.dylib`           |
|   7.3% | 50.9 MiB |     761 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.4% | 9.88 MiB |     164 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.3% | 8.97 MiB |     421 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|   1.2% |  8.2 MiB |     111 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.2% |  8.2 MiB |     111 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.2% |  8.2 MiB |     111 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.2% |  8.2 MiB |     111 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   0.9% |  6.6 MiB |      94 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   0.7% | 4.88 MiB |      51 | `Type_Array::grow`                                                 | `libjvm.dylib`            |
|   0.7% | 4.88 MiB |      71 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 89.4% |  627 MiB |   4,465 | `os::malloc`                              | `libjvm.dylib`    |
|  9.1% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.2% | 8.62 MiB |     259 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.44 MiB |      46 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |   88 KiB |       9 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 99.9% |  627 MiB |   4,244 | `Chunk::operator new`       | `libjvm.dylib` |
|  0.1% |  424 KiB |     204 | `AllocateHeap`              | `libjvm.dylib` |
| <0.1% | 8.33 KiB |       9 | `os::malloc`                | `libjvm.dylib` |
| <0.1% | 8.33 KiB |       9 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |
| <0.1% |    480 B |       6 | `AnyObj::operator new`      | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Caller         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 627 MiB |   4,243 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% | 1,000 B |       1 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 44.3% |  278 MiB |   1,257 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 29.8% |  187 MiB |     911 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.1% | 50.9 MiB |     761 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.0% | 43.9 MiB |     376 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.7% | 16.7 MiB |     108 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 626 MiB |   4,270 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 626 MiB |   4,270 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 626 MiB |   4,270 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 626 MiB |   4,263 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 626 MiB |   4,263 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 626 MiB |   4,263 | `Thread::call_run` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 623 MiB |   4,131 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 623 MiB |   4,131 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 332 MiB |   2,159 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 53.5% | 169 MiB |   1,095 | `Compile::Optimize`       | `libjvm.dylib` |
| 46.5% | 147 MiB |     844 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 314 MiB |   1,907 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 314 MiB |   1,907 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 279 MiB |   1,813 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 278 MiB |   1,258 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 235 MiB |   1,355 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Caller                        | Location                  |
| -----: | -----: | ------: | ----------------------------- | ------------------------- |
| 100.0% | 64 MiB |     128 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 59.2% | 30.2 MiB |     507 | `Node_Array::grow`               | `libjvm.dylib` |
| 10.6% | 5.41 MiB |      90 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.6% | 4.88 MiB |      51 | `Type_Array::grow`               | `libjvm.dylib` |
|  6.0% | 3.03 MiB |      24 | `Node::out_grow`                 | `libjvm.dylib` |
|  4.9% |  2.5 MiB |      23 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 9.88 MiB |     164 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 8.97 MiB |     421 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                 | Location       |
| -----: | ------: | ------: | ---------------------- | -------------- |
| 100.0% | 8.2 MiB |     111 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |    Size | Samples | Caller         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 8.2 MiB |     111 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 8.2 MiB |     111 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 99.2% | 8.13 MiB |     110 | `Compile::Compile`                 | `libjvm.dylib` |
| 56.8% | 4.66 MiB |      72 | `Parse::do_call`                   | `libjvm.dylib` |
| 54.9% |  4.5 MiB |      69 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 6.6 MiB |      94 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 35.3% | 1.72 MiB |      22 | `PhaseValues::set_type_bottom` | `libjvm.dylib` |
| 27.6% | 1.34 MiB |      12 | `GraphKit::clone_map`          | `libjvm.dylib` |
| 10.3% |  512 KiB |       6 | `IdealKit::delay_transform`    | `libjvm.dylib` |
|  8.3% |  416 KiB |       3 | `Parse::ensure_memory_phi`     | `libjvm.dylib` |
|  7.7% |  384 KiB |       2 | `GraphKit::set_all_memory`     | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                 | Location       |
| -----: | -------: | ------: | -------------------------------------- | -------------- |
| 100.0% | 4.88 MiB |      71 | `Parse::do_call`                       | `libjvm.dylib` |
|  52.6% | 2.56 MiB |      40 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|   1.3% |   64 KiB |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% |  627 MiB |   4,465 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% | 8.33 KiB |       9 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 627 MiB |   4,244 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 627 MiB |   4,243 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  626 MiB |   4,263 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% | 87.1 KiB |       4 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% | 3.03 KiB |       3 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 626 MiB |   4,270 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 626 MiB |   4,270 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 626 MiB |   4,270 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.4% |  623 MiB |   4,131 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.6% | 3.69 MiB |     132 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 626 MiB |   4,263 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 626 MiB |   4,263 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 53.3% |  332 MiB |   2,159 | `Compile::Optimize`                      | `libjvm.dylib` |
| 44.7% |  279 MiB |   1,813 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.3% | 8.13 MiB |     110 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% |    3 MiB |      34 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.03 MiB |      12 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 623 MiB |   4,131 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 51.1% |  169 MiB |   1,095 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 44.4% |  147 MiB |     844 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.1% | 3.72 MiB |      36 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.8% | 2.57 MiB |      50 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  0.8% | 2.55 MiB |      41 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.1% |  314 MiB |   1,907 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.9% | 2.81 MiB |      32 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 88.5% |  278 MiB |   1,258 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.1% | 9.88 MiB |     164 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  2.8% | 8.91 MiB |     158 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  1.5% | 4.59 MiB |      83 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.4% | 4.25 MiB |      87 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 314 MiB |   1,907 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 84.3% |  235 MiB |   1,355 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 13.8% | 38.5 MiB |     368 | `Matcher::match`                  | `libjvm.dylib` |
|  0.8% | 2.15 MiB |      33 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.6% | 1.61 MiB |      22 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.5% |  1.3 MiB |      26 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 278 MiB |   1,257 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `NTarjan::DFS` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                           | Location       |
| ----: | -------: | ------: | ------------------------------------------------ | -------------- |
| 79.6% |  187 MiB |     911 | `PhaseIFG::init`                                 | `libjvm.dylib` |
| 18.8% | 44.2 MiB |     383 | `PhaseLive::compute`                             | `libjvm.dylib` |
|  0.8% | 1.91 MiB |      31 | `PhaseChaitin::Split`                            | `libjvm.dylib` |
|  0.4% |  896 KiB |      12 | `PhaseAggressiveCoalesce::insert_copies`         | `libjvm.dylib` |
|  0.1% |  359 KiB |       6 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 64 MiB |     128 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 50.9 MiB |     761 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 9.88 MiB |     164 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 96.2% | 8.62 MiB |     259 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  3.8% |  352 KiB |     162 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 80.6% |  6.6 MiB |      94 | `Parse::do_call`         | `libjvm.dylib` |
| 19.1% | 1.56 MiB |      25 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.0% |  672 KiB |       6 | `Parse::do_checkcast`    | `libjvm.dylib` |
|  7.2% |  608 KiB |       8 | `Parse::do_if`           | `libjvm.dylib` |
|  6.1% |  512 KiB |       5 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 8.2 MiB |     111 | `Parse::do_one_block` | `libjvm.dylib` |
|   5.3% | 448 KiB |       4 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 8.2 MiB |     111 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   5.3% | 448 KiB |       6 | `Parse::build_exits`      | `libjvm.dylib` |
|   3.1% | 256 KiB |       5 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   1.1% |  96 KiB |       2 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |    Size | Samples | Callee         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 8.2 MiB |     111 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 73.8% | 4.88 MiB |      71 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 70.5% | 4.66 MiB |      72 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  7.6% |  512 KiB |       5 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  6.2% |  416 KiB |       3 | `DirectCallGenerator::generate`    | `libjvm.dylib` |
|  2.5% |  168 KiB |       4 | `Compile::call_generator`          | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 4.88 MiB |      51 | `Arena::Arealloc` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 92.3% |  4.5 MiB |      69 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 52.6% | 2.56 MiB |      40 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  9.6% |  480 KiB |       5 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  5.1% |  256 KiB |       1 | `GraphKit::type_check_receiver`      | `libjvm.dylib` |
|  3.8% |  192 KiB |       4 | `GraphKit::null_check_common`        | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.7% |  187 MiB |     911 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 21.0% |  148 MiB |     699 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18.6% |  130 MiB |     558 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                |
|  7.8% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
|  6.3% | 43.9 MiB |     376 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.4% | 16.7 MiB |     108 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.5% | 10.6 MiB |      95 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% |  5.5 MiB |      11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.7% | 5.13 MiB |      86 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% | 4.75 MiB |      78 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  0.7% | 4.56 MiB |      70 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% | 4.35 MiB |      88 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.5% | 3.25 MiB |      44 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 3.13 MiB |      31 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% | 3.03 MiB |      24 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |    3 MiB |      34 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% | 2.53 MiB |      49 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% |  2.5 MiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                      |
|  0.3% | 2.33 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 2.26 MiB |      42 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                               |
