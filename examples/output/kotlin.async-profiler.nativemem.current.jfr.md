# Allocated native memory profile

Allocated 826 MiB over 5,573 samples (152 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 826 MiB |   5,573 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 747 MiB (90.4%) C2Compiler::compile_method at libjvm.dylib
│   └── 747 MiB (90.4%) Compile::Compile
│       ├── 392 MiB (47.4%) Compile::Optimize
│       │   ├── 198 MiB (24.0%) PhaseIdealLoop::optimize
│       │   │   └── 197 MiB (23.9%) PhaseIdealLoop::PhaseIdealLoop
│       │   │       └── 197 MiB (23.9%) PhaseIdealLoop::build_and_optimize
│       │   │           ├── … 172 MiB (20.8%) malloc_hook at libasyncProfiler.dylib
│       │   │           ├── … 5.53 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │           └── 19.4 MiB (2.3%) 8 more callees, led by (0.6%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
│       │   ├── … 173 MiB (21.0%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │   │   ├── … 151 MiB (18.3%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 6.13 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 5.5 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 10.9 MiB (1.3%) 8 more callees, led by (0.4%) Arena::grow
│       │   └── 19 MiB (2.3%) 13 more callees, led by (0.5%) PhaseIterGVN::optimize
│       ├── 339 MiB (41.1%) Compile::Code_Gen
│       │   ├── 284 MiB (34.4%) PhaseChaitin::Register_Allocate
│       │   │   ├── 222 MiB (26.9%) PhaseIFG::init
│       │   │   │   └── 222 MiB (26.9%) Arena::grow
│       │   │   │       └── 222 MiB (26.9%) Chunk::operator new
│       │   │   │           └── 222 MiB (26.9%) os::malloc
│       │   │   │               └── 222 MiB (26.9%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 55.9 MiB (6.8%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 6.05 MiB (0.7%) 7 more callees, led by (0.4%) PhaseChaitin::Split
│       │   ├── 48.3 MiB (5.8%) Matcher::match
│       │   │   ├── 30.2 MiB (3.7%) Matcher::xform
│       │   │   │   ├── … 21.7 MiB (2.6%) malloc_hook at libasyncProfiler.dylib
│       │   │   │   └── 8.5 MiB (1.0%) 6 more callees, led by (0.5%) Node::out_grow
│       │   │   └── … 14.1 MiB (1.7%) malloc_hook at libasyncProfiler.dylib
│       │   └── 6.87 MiB (0.8%) 6 more callees, led by (0.4%) PhaseCFG::do_global_code_motion
│       ├── … 9.06 MiB (1.1%) Parse::do_one_block at libjvm.dylib
│       │   └── 9.06 MiB (1.1%) 11 more callees, led by (0.3%) Parse::do_call
│       └── 6.03 MiB (0.7%) 4 more callees, led by (0.6%) PhaseRemoveUseless::PhaseRemoveUseless
└── 75.7 MiB (9.2%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 75.7 MiB (9.2%) run(String[])
        ├── … 60.5 MiB (7.3%) malloc_hook at libasyncProfiler.dylib
        └── … 9.71 MiB (1.2%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 6.78 MiB (0.8%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 6.78 MiB (0.8%) executePhase(ConfigurationPipelineArtifact)
                    └── 6.78 MiB (0.8%) 7 more callees, led by (0.4%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% |  826 MiB |   5,560 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   16 KiB |       2 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% | 2.63 KiB |      11 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 90.9% |  750 MiB |   5,053 | `os::malloc`                              | `libjvm.dylib`    |
|  7.8% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.1% | 8.91 MiB |     286 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.88 MiB |      60 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  382 KiB |      13 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |   Size | Samples | Caller                      | Location          |
| -----: | -----: | ------: | --------------------------- | ----------------- |
| 100.0% | 16 KiB |       2 | `make_class_info_from_name` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.63 KiB |      11 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |    Size | Samples | Function                                   | Location                  |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 826 MiB |   5,560 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  90.9% | 750 MiB |   5,053 | `os::malloc`                               | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,852 | `Thread::call_run`                         | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,852 | `thread_native_entry`                      | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,852 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  90.8% | 750 MiB |   4,852 | `thread_start`                             | `libsystem_pthread.dylib` |
|  90.8% | 750 MiB |   4,837 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,837 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,837 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,821 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  90.8% | 750 MiB |   4,820 | `Arena::grow`                              | `libjvm.dylib`            |
|  90.4% | 747 MiB |   4,729 | `Compile::Compile`                         | `libjvm.dylib`            |
|  90.4% | 747 MiB |   4,729 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  47.4% | 392 MiB |   2,479 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  45.1% | 373 MiB |   2,221 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  44.9% | 370 MiB |   2,202 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  44.9% | 370 MiB |   2,201 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  41.1% | 339 MiB |   2,066 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  39.1% | 323 MiB |   1,430 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  34.4% | 284 MiB |   1,556 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  826 MiB |   5,560 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  90.9% |  750 MiB |   5,053 | `os::malloc`                                                       | `libjvm.dylib`            |
|  90.8% |  750 MiB |   4,852 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  90.8% |  750 MiB |   4,852 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  90.8% |  750 MiB |   4,852 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  90.8% |  750 MiB |   4,852 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  90.8% |  750 MiB |   4,837 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|  90.8% |  750 MiB |   4,821 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  90.8% |  750 MiB |   4,820 | `Arena::grow`                                                      | `libjvm.dylib`            |
|   7.8% |   64 MiB |     128 | `readBytes`                                                        | `libjava.dylib`           |
|   7.6% | 63.1 MiB |     848 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.3% | 11.1 MiB |     168 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.2% | 10.3 MiB |     127 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.2% | 10.3 MiB |     127 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.2% | 9.85 MiB |     124 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.2% | 9.81 MiB |     123 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.1% | 9.18 MiB |     448 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|   1.1% | 8.97 MiB |     112 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   0.9% | 7.38 MiB |      92 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.8% | 6.22 MiB |      64 | `Type_Array::grow`                                                 | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 90.9% |  750 MiB |   5,053 | `os::malloc`                              | `libjvm.dylib`    |
|  7.8% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.1% | 8.91 MiB |     286 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.88 MiB |      60 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  382 KiB |      13 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.9% |  750 MiB |   4,821 | `Chunk::operator new`         | `libjvm.dylib` |
|  0.1% |  715 KiB |     215 | `AllocateHeap`                | `libjvm.dylib` |
| <0.1% | 4.58 KiB |       3 | `os::malloc`                  | `libjvm.dylib` |
| <0.1% | 4.58 KiB |       3 | `JvmtiEnv::GetClassMethods`   | `libjvm.dylib` |
| <0.1% | 1.28 KiB |       1 | `os::read_image_release_file` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 750 MiB |   4,852 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 750 MiB |   4,852 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 750 MiB |   4,852 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 750 MiB |   4,837 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 750 MiB |   4,837 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 750 MiB |   4,837 | `Thread::call_run` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% |  750 MiB |   4,820 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% | 9.98 KiB |       1 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 43.1% |  323 MiB |   1,430 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 29.6% |  222 MiB |   1,006 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.4% | 63.1 MiB |     848 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.5% | 55.9 MiB |     447 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.9% | 21.7 MiB |     122 | `Matcher::xform`             | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 747 MiB |   4,729 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 747 MiB |   4,729 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 392 MiB |   2,479 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 53.2% | 198 MiB |   1,254 | `Compile::Optimize`       | `libjvm.dylib` |
| 46.8% | 174 MiB |     967 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 370 MiB |   2,202 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 370 MiB |   2,201 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 339 MiB |   2,066 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 323 MiB |   1,430 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 284 MiB |   1,556 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Caller                        | Location                  |
| -----: | -----: | ------: | ----------------------------- | ------------------------- |
| 100.0% | 64 MiB |     128 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 57.3% | 36.2 MiB |     523 | `Node_Array::grow`               | `libjvm.dylib` |
| 12.1% | 7.66 MiB |     115 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.9% | 6.22 MiB |      64 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.0% | 4.44 MiB |      42 | `Node::out_grow`                 | `libjvm.dylib` |
|  4.5% | 2.84 MiB |      28 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                                               | Location       |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------- |
| 98.9% |  11 MiB |     167 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  1.1% | 128 KiB |       1 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 10.3 MiB |     127 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 98.5% | 10.1 MiB |     124 | `Compile::Compile`                     | `libjvm.dylib` |
| 63.7% | 6.53 MiB |      83 | `Parse::do_call`                       | `libjvm.dylib` |
| 63.1% | 6.47 MiB |      86 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  1.2% |  128 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 9.85 MiB |     124 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 9.81 MiB |     123 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 9.18 MiB |     448 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 8.97 MiB |     112 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.6% | 7.34 MiB |      91 | `Parse::do_call`                       | `libjvm.dylib` |
| 59.3% | 4.38 MiB |      58 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  0.4% |   32 KiB |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 23.6% | 1.47 MiB |      17 | `PhaseValues::set_type_bottom`   | `libjvm.dylib` |
| 23.1% | 1.44 MiB |      11 | `GraphKit::clone_map`            | `libjvm.dylib` |
| 22.1% | 1.38 MiB |      12 | `IdealKit::delay_transform`      | `libjvm.dylib` |
|  6.0% |  384 KiB |       2 | `Parse::return_current`          | `libjvm.dylib` |
|  5.5% |  352 KiB |       5 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% |  750 MiB |   5,053 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% | 4.58 KiB |       3 | `os::malloc`  | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  750 MiB |   4,837 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% | 46.7 KiB |       9 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% | 2.53 KiB |       5 | `VMThread::run`                 | `libjvm.dylib` |
|  <0.1% | 1.28 KiB |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 750 MiB |   4,852 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 750 MiB |   4,852 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 750 MiB |   4,852 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.6% |  747 MiB |   4,729 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.4% | 3.08 MiB |     107 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |     15 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 750 MiB |   4,837 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 750 MiB |   4,837 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 750 MiB |   4,821 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 750 MiB |   4,820 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.4% |  392 MiB |   2,479 | `Compile::Optimize`                      | `libjvm.dylib` |
| 45.4% |  339 MiB |   2,066 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.4% | 10.1 MiB |     124 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 4.78 MiB |      43 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.22 MiB |      15 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 747 MiB |   4,729 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 50.6% |  198 MiB |   1,254 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 44.6% |  174 MiB |     967 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.1% | 4.47 MiB |      44 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.9% | 3.47 MiB |      54 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  0.7% | 2.89 MiB |      42 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.4% |  370 MiB |   2,202 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.6% | 2.25 MiB |      19 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 370 MiB |   2,201 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 87.2% |  323 MiB |   1,430 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.0% |   11 MiB |     165 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  3.0% |   11 MiB |     167 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  1.9% | 7.04 MiB |     123 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.6% | 5.81 MiB |     120 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.7% |  284 MiB |   1,556 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.2% | 48.3 MiB |     397 | `Matcher::match`                  | `libjvm.dylib` |
|  1.0% | 3.35 MiB |      54 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.4% | 1.48 MiB |      22 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.4% | 1.47 MiB |      26 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 323 MiB |   1,430 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 78.1% |  222 MiB |   1,006 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 19.7% |   56 MiB |     450 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  1.1% | 3.01 MiB |      43 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.4% | 1.05 MiB |      15 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.3% |  800 KiB |      11 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 64 MiB |     128 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 63.1 MiB |     848 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 11.1 MiB |     168 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                    | Location       |
| ----: | -------: | ------: | ------------------------- | -------------- |
| 96.0% | 9.85 MiB |     124 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  5.5% |  576 KiB |       5 | `Parse::do_exits`         | `libjvm.dylib` |
|  3.0% |  320 KiB |       8 | `Parse::build_exits`      | `libjvm.dylib` |
|  0.6% |   64 KiB |       2 | `Parse::create_entry_map` | `libjvm.dylib` |
|  0.6% |   64 KiB |       1 | `GraphKit::set_map_clone` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 10.3 MiB |     127 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                | Location       |
| ----: | -------: | ------: | --------------------- | -------------- |
| 99.7% | 9.81 MiB |     123 | `Parse::do_one_block` | `libjvm.dylib` |
|  0.3% |   32 KiB |       1 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 91.4% | 8.97 MiB |     112 | `Parse::do_call`         | `libjvm.dylib` |
| 26.1% | 2.56 MiB |      28 | `Parse::do_field_access` | `libjvm.dylib` |
|  9.9% |  992 KiB |      12 | `Parse::do_if`           | `libjvm.dylib` |
|  8.0% |  800 KiB |       8 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  7.0% |  704 KiB |      11 | `Parse::array_load`      | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 97.1% | 8.91 MiB |     286 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  2.9% |  275 KiB |     162 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 81.9% | 7.34 MiB |      91 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 72.8% | 6.53 MiB |      83 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  4.2% |  384 KiB |       2 | `DirectCallGenerator::generate`            | `libjvm.dylib` |
|  2.4% |  224 KiB |       6 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  0.7% |   64 KiB |       2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 87.7% | 6.47 MiB |      86 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 59.3% | 4.38 MiB |      58 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  9.3% |  704 KiB |       4 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
|  7.6% |  576 KiB |       7 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  5.9% |  448 KiB |       3 | `GraphKit::null_check_common`      | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 6.22 MiB |      64 | `Arena::Arealloc` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.9% |  222 MiB |   1,006 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 20.8% |  172 MiB |     807 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18.3% |  151 MiB |     623 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                |
|  6.8% | 55.9 MiB |     447 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.7% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
|  2.6% | 21.7 MiB |     122 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.7% | 14.1 MiB |     104 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% | 6.13 MiB |      82 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  0.7% | 5.53 MiB |      89 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.7% |  5.5 MiB |      76 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% |  5.5 MiB |      11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.6% | 4.88 MiB |      85 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.6% | 4.78 MiB |      43 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 4.28 MiB |      38 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |  3.7 MiB |      61 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% | 3.47 MiB |      33 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% | 3.44 MiB |      53 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 3.34 MiB |      62 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% |    3 MiB |      43 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% |  2.5 MiB |      38 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                   |
