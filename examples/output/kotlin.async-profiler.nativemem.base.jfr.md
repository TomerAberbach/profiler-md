# Allocated native memory profile

Allocated 847 MiB over 5,809 samples (149 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 847 MiB |   5,809 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 768 MiB (90.7%) C2Compiler::compile_method at libjvm.dylib
│   └── 768 MiB (90.7%) Compile::Compile
│       ├── 412 MiB (48.7%) Compile::Optimize
│       │   ├── … 211 MiB (24.9%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │   │   ├── … 185 MiB (21.9%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 6.47 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 6.25 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 12.9 MiB (1.5%) 9 more callees, led by (0.5%) IdealLoopTree::loop_predication
│       │   ├── … 178 MiB (21.0%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │   │   ├── … 159 MiB (18.8%) malloc_hook at libasyncProfiler.dylib
│       │   │   ├── … 5.6 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
│       │   │   └── 13.4 MiB (1.6%) 10 more callees, led by (0.6%) Node_Array::grow
│       │   ├── 5.25 MiB (0.6%) PhaseIterGVN::optimize
│       │   │   └── 5.25 MiB (0.6%) PhaseIterGVN::transform_old
│       │   │       └── 5.25 MiB (0.6%) 5 more callees, led by (0.5%) NodeHash::hash_find_insert
│       │   └── 15.8 MiB (1.9%) 12 more callees, led by (0.5%) PhaseCCP::do_transform
│       ├── 340 MiB (40.2%) Compile::Code_Gen
│       │   ├── 284 MiB (33.5%) PhaseChaitin::Register_Allocate
│       │   │   ├── 222 MiB (26.2%) PhaseIFG::init
│       │   │   │   └── 222 MiB (26.2%) Arena::grow
│       │   │   │       └── 222 MiB (26.2%) Chunk::operator new
│       │   │   │           └── 222 MiB (26.2%) os::malloc
│       │   │   │               └── 222 MiB (26.2%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│       │   │   └── … 57.6 MiB (6.8%) malloc_hook at libasyncProfiler.dylib
│       │   ├── 50 MiB (5.9%) Matcher::match
│       │   │   ├── 31.4 MiB (3.7%) Matcher::xform
│       │   │   │   ├── … 22.1 MiB (2.6%) malloc_hook at libasyncProfiler.dylib
│       │   │   │   └── 9.28 MiB (1.1%) 6 more callees, led by (0.5%) Node::out_grow
│       │   │   └── … 15.2 MiB (1.8%) malloc_hook at libasyncProfiler.dylib
│       │   └── 6.37 MiB (0.8%) 5 more callees, led by (0.4%) PhaseCFG::do_global_code_motion
│       ├── … 8.5 MiB (1.0%) Parse::do_one_block at libjvm.dylib
│       │   └── 8.5 MiB (1.0%) 11 more callees, led by (0.4%) Parse::do_call
│       └── 5.97 MiB (0.7%) 7 more callees, led by (0.5%) PhaseRemoveUseless::PhaseRemoveUseless
└── 76.1 MiB (9.0%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
    └── 76.1 MiB (9.0%) run(String[])
        ├── … 60.5 MiB (7.1%) malloc_hook at libasyncProfiler.dylib
        └── … 10.2 MiB (1.2%) phaseBody(PipelineContext, PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
            └── 7.56 MiB (0.9%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
                └── 7.56 MiB (0.9%) executePhase(ConfigurationPipelineArtifact)
                    └── 7.56 MiB (0.9%) 7 more callees, led by (0.5%) resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector) at org.jetbrains.kotlin.fir.pipeline.FirUtilsKt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% |  847 MiB |   5,795 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   20 KiB |       4 | `calloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% | 2.31 KiB |      10 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 91.1% |  771 MiB |   5,309 | `os::malloc`                              | `libjvm.dylib`    |
|  7.6% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.2% | 9.89 MiB |     281 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.34 MiB |      43 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  299 KiB |      11 | `CCalloc`                                 | `libverify.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |   Size | Samples | Caller                       | Location          |
| ----: | -----: | ------: | ---------------------------- | ----------------- |
| 80.0% | 16 KiB |       2 | `make_class_info_from_name`  | `libverify.dylib` |
| 20.0% |  4 KiB |       2 | `VerifyClassForMajorVersion` | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.31 KiB |      10 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |    Size | Samples | Function                                   | Location                  |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 847 MiB |   5,795 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  91.1% | 771 MiB |   5,309 | `os::malloc`                               | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,073 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,073 | `Arena::grow`                              | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,111 | `Thread::call_run`                         | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,111 | `thread_native_entry`                      | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,111 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  91.0% | 771 MiB |   5,111 | `thread_start`                             | `libsystem_pthread.dylib` |
|  91.0% | 771 MiB |   5,097 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,097 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  91.0% | 771 MiB |   5,097 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  90.7% | 768 MiB |   5,005 | `Compile::Compile`                         | `libjvm.dylib`            |
|  90.7% | 768 MiB |   5,005 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  48.7% | 412 MiB |   2,630 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  46.2% | 391 MiB |   2,333 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  45.9% | 389 MiB |   2,311 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  45.9% | 389 MiB |   2,311 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  40.7% | 344 MiB |   1,535 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  40.2% | 340 MiB |   2,198 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  33.5% | 284 MiB |   1,627 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  847 MiB |   5,795 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  91.1% |  771 MiB |   5,309 | `os::malloc`                                                       | `libjvm.dylib`            |
|  91.0% |  771 MiB |   5,073 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  91.0% |  771 MiB |   5,073 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  91.0% |  771 MiB |   5,111 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  91.0% |  771 MiB |   5,111 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  91.0% |  771 MiB |   5,111 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  91.0% |  771 MiB |   5,111 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  91.0% |  771 MiB |   5,097 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   7.6% |   64 MiB |     128 | `readBytes`                                                        | `libjava.dylib`           |
|   7.5% | 63.1 MiB |     930 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   1.4% | 11.8 MiB |     197 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|   1.2% | 10.3 MiB |     123 | `Parse::do_one_block`                                              | `libjvm.dylib`            |
|   1.2% | 10.3 MiB |     123 | `Parse::do_all_blocks`                                             | `libjvm.dylib`            |
|   1.2% | 10.3 MiB |     123 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|   1.2% | 10.3 MiB |     123 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |
|   1.2% | 10.2 MiB |     423 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|   1.1% | 8.94 MiB |     111 | `Parse::do_call`                                                   | `libjvm.dylib`            |
|   0.9% |  7.5 MiB |      87 | `PredictedCallGenerator::generate`                                 | `libjvm.dylib`            |
|   0.7% | 5.88 MiB |      67 | `Type_Array::grow`                                                 | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 91.1% |  771 MiB |   5,309 | `os::malloc`                              | `libjvm.dylib`    |
|  7.6% |   64 MiB |     128 | `readBytes`                               | `libjava.dylib`   |
|  1.2% | 9.89 MiB |     281 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  0.2% | 1.34 MiB |      43 | `updatewindow`                            | `libzip.dylib`    |
| <0.1% |  299 KiB |      11 | `CCalloc`                                 | `libverify.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                      | Location       |
| ----: | ------: | ------: | --------------------------- | -------------- |
| 99.9% | 771 MiB |   5,073 | `Chunk::operator new`       | `libjvm.dylib` |
|  0.1% | 419 KiB |     222 | `AllocateHeap`              | `libjvm.dylib` |
| <0.1% |   840 B |       5 | `os::malloc`                | `libjvm.dylib` |
| <0.1% |   840 B |       5 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |
| <0.1% |   560 B |       7 | `AnyObj::operator new`      | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 771 MiB |   5,073 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 44.7% |  344 MiB |   1,535 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 28.8% |  222 MiB |   1,068 | `PhaseIFG::init`             | `libjvm.dylib` |
|  8.2% | 63.1 MiB |     930 | `Arena::Arealloc`            | `libjvm.dylib` |
|  7.5% | 57.6 MiB |     483 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.9% | 22.1 MiB |     130 | `Matcher::xform`             | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 771 MiB |   5,111 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 771 MiB |   5,111 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 771 MiB |   5,111 | `thread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 771 MiB |   5,097 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 771 MiB |   5,097 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 771 MiB |   5,097 | `Thread::call_run` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 768 MiB |   5,005 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 768 MiB |   5,005 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 412 MiB |   2,630 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 54.2% | 212 MiB |   1,335 | `Compile::Optimize`       | `libjvm.dylib` |
| 45.8% | 179 MiB |     998 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 389 MiB |   2,311 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 389 MiB |   2,311 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 344 MiB |   1,535 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 340 MiB |   2,198 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 284 MiB |   1,627 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Caller                        | Location                  |
| -----: | -----: | ------: | ----------------------------- | ------------------------- |
| 100.0% | 64 MiB |     128 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 56.0% | 35.3 MiB |     576 | `Node_Array::grow`               | `libjvm.dylib` |
| 10.5% | 6.63 MiB |     102 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  9.3% | 5.88 MiB |      67 | `Type_Array::grow`               | `libjvm.dylib` |
|  7.3% | 4.59 MiB |      45 | `Node::out_grow`                 | `libjvm.dylib` |
|  6.5% | 4.13 MiB |      37 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 11.8 MiB |     197 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 10.3 MiB |     123 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 10.3 MiB |     123 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 10.3 MiB |     123 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 96.0% | 9.88 MiB |     117 | `Compile::Compile`                     | `libjvm.dylib` |
| 64.4% | 6.63 MiB |      81 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 62.9% | 6.47 MiB |      87 | `Parse::do_call`                       | `libjvm.dylib` |
|  2.1% |  224 KiB |       4 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 10.2 MiB |     423 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 8.94 MiB |     111 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.2% | 7.44 MiB |      86 | `Parse::do_call`                       | `libjvm.dylib` |
| 55.4% | 4.16 MiB |      48 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  2.5% |  192 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 29.8% | 1.75 MiB |      23 | `PhaseValues::set_type_bottom`   | `libjvm.dylib` |
| 26.1% | 1.53 MiB |      14 | `IdealKit::delay_transform`      | `libjvm.dylib` |
| 14.4% |  864 KiB |       8 | `GraphKit::clone_map`            | `libjvm.dylib` |
|  6.9% |  416 KiB |       7 | `Parse::build_exits`             | `libjvm.dylib` |
|  6.4% |  384 KiB |       4 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 771 MiB |   5,309 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |   840 B |       5 | `os::malloc`  | `libjvm.dylib`           |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 771 MiB |   5,073 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 771 MiB |   5,073 | `Chunk::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% |  771 MiB |   5,097 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  <0.1% | 25.8 KiB |       7 | `WorkerThread::run`             | `libjvm.dylib` |
|  <0.1% | 21.4 KiB |       7 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 771 MiB |   5,111 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 771 MiB |   5,111 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 771 MiB |   5,111 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                        | Location       |
| ----: | -------: | ------: | ----------------------------- | -------------- |
| 99.7% |  768 MiB |   5,005 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  0.3% | 2.28 MiB |      90 | `Compiler::compile_method`    | `libjvm.dylib` |
| <0.1% |   32 KiB |       1 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| <0.1% |     31 B |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 771 MiB |   5,097 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 771 MiB |   5,097 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 53.6% |  412 MiB |   2,630 | `Compile::Optimize`                      | `libjvm.dylib` |
| 44.3% |  340 MiB |   2,198 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.3% | 9.88 MiB |     117 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.6% | 4.25 MiB |      41 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% | 1.06 MiB |      11 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 768 MiB |   5,005 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 51.4% |  212 MiB |   1,335 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 43.5% |  179 MiB |     998 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.3% | 5.25 MiB |      48 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  0.9% | 3.82 MiB |      72 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  0.8% | 3.21 MiB |      49 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                           | Location       |
| ----: | ------: | ------: | -------------------------------- | -------------- |
| 99.5% | 389 MiB |   2,311 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.5% |   2 MiB |      22 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 88.5% |  344 MiB |   1,535 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  3.0% | 11.8 MiB |     197 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  3.0% | 11.5 MiB |     193 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  1.6% | 6.21 MiB |     114 | `Arena::grow`                                                      | `libjvm.dylib` |
|  1.4% | 5.53 MiB |     104 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 389 MiB |   2,311 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 344 MiB |   1,535 | `Arena::grow` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 83.4% |  284 MiB |   1,627 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.7% |   50 MiB |     455 | `Matcher::match`                  | `libjvm.dylib` |
|  0.9% | 3.07 MiB |      52 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  0.5% | 1.86 MiB |      31 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  0.3% | 1.15 MiB |      24 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 78.1% |  222 MiB |   1,068 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 20.4% | 57.9 MiB |     492 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  1.0% | 2.75 MiB |      40 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.2% |  561 KiB |       9 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.2% |  448 KiB |       9 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `readBytes` (`libjava.dylib`)

|      % |   Size | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 64 MiB |     128 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 63.1 MiB |     930 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 11.8 MiB |     197 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 86.9% | 8.94 MiB |     111 | `Parse::do_call`            | `libjvm.dylib` |
| 26.1% | 2.69 MiB |      35 | `Parse::do_field_access`    | `libjvm.dylib` |
| 10.3% | 1.06 MiB |      12 | `Parse::do_one_bytecode`    | `libjvm.dylib` |
|  6.7% |  704 KiB |      10 | `Parse::return_current`     | `libjvm.dylib` |
|  4.3% |  448 KiB |       3 | `GraphKit::access_store_at` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 10.3 MiB |     123 | `Parse::do_one_block` | `libjvm.dylib` |
|   1.2% |  128 KiB |       3 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 10.3 MiB |     123 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   6.4% |  672 KiB |       4 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   5.5% |  576 KiB |      11 | `Parse::build_exits`      | `libjvm.dylib` |
|   0.3% |   32 KiB |       1 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 10.3 MiB |     123 | `Parse::Parse` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 96.6% | 9.89 MiB |     281 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  3.4% |  352 KiB |     142 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 83.2% | 7.44 MiB |      86 | `PredictedCallGenerator::generate`         | `libjvm.dylib` |
| 72.4% | 6.47 MiB |      87 | `ParseGenerator::generate`                 | `libjvm.dylib` |
|  5.6% |  512 KiB |       4 | `DirectCallGenerator::generate`            | `libjvm.dylib` |
|  2.4% |  224 KiB |       3 | `LibraryIntrinsic::generate`               | `libjvm.dylib` |
|  0.7% |   64 KiB |       2 | `LateInlineVirtualCallGenerator::generate` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                             | Location       |
| ----: | -------: | ------: | ---------------------------------- | -------------- |
| 88.3% | 6.63 MiB |      81 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 55.4% | 4.16 MiB |      48 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 11.7% |  896 KiB |       6 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
| 11.7% |  896 KiB |       6 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  6.7% |  512 KiB |       3 | `GraphKit::null_check_common`      | `libjvm.dylib` |

##### `Type_Array::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee            | Location       |
| -----: | -------: | ------: | ----------------- | -------------- |
| 100.0% | 5.88 MiB |      67 | `Arena::Arealloc` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.2% |  222 MiB |   1,068 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 21.9% |  185 MiB |     873 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18.8% |  159 MiB |     662 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                |
|  6.8% | 57.6 MiB |     483 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.5% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                |
|  2.6% | 22.1 MiB |     130 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.8% | 15.2 MiB |     126 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% | 6.47 MiB |     109 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.7% | 6.25 MiB |     109 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% |  5.6 MiB |      88 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  0.6% |  5.5 MiB |      11 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.6% | 5.06 MiB |      84 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% | 4.59 MiB |      45 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.5% | 4.25 MiB |      41 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% | 4.09 MiB |      36 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% | 3.78 MiB |      71 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 3.22 MiB |      58 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% | 2.99 MiB |      56 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 2.84 MiB |      47 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% | 2.75 MiB |      53 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                   |
