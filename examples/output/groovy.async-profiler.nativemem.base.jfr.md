# Allocated native memory profile

Allocated 1.06 GiB over 169,813 samples (6.56 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.06 GiB | 169,813 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1.04 GiB (98.0%) CompileBroker::invoke_compiler_on_method at libjvm.dylib
│   ├── 1.03 GiB (97.1%) C2Compiler::compile_method
│   │   └── 1.03 GiB (97.1%) Compile::Compile
│   │       ├── 605 MiB (55.6%) Compile::Optimize
│   │       │   ├── … 276 MiB (25.4%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │       │   │   ├── … 194 MiB (17.8%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 19.6 MiB (1.8%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 19.5 MiB (1.8%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 15 MiB (1.4%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 28.5 MiB (2.6%) 10 more callees, led by (1.0%) IdealLoopTree::loop_predication
│   │       │   ├── … 276 MiB (25.4%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │       │   │   ├── … 192 MiB (17.6%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 18.9 MiB (1.7%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── 18.7 MiB (1.7%) IdealLoopTree::loop_predication
│   │       │   │   │   └── … 18.7 MiB (1.7%) PhaseIdealLoop::loop_predication_impl at libjvm.dylib
│   │       │   │   │       └── 18.7 MiB (1.7%) 6 more callees, led by (1.0%) PhaseIdealLoop::loop_predication_impl_helper
│   │       │   │   ├── … 18.7 MiB (1.7%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 28.3 MiB (2.6%) 9 more callees, led by (0.9%) Arena::grow
│   │       │   └── 46.3 MiB (4.3%) 15 more callees, led by (0.9%) PhaseCCP::do_transform
│   │       ├── 422 MiB (38.8%) Compile::Code_Gen
│   │       │   ├── 327 MiB (30.0%) PhaseChaitin::Register_Allocate
│   │       │   │   ├── … 233 MiB (21.4%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│   │       │   │   ├── … 77.4 MiB (7.1%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 15.9 MiB (1.5%) 10 more callees, led by (0.8%) PhaseChaitin::Split
│   │       │   ├── 74.7 MiB (6.9%) Matcher::match
│   │       │   │   ├── 45.2 MiB (4.2%) Matcher::xform
│   │       │   │   │   ├── … 25.7 MiB (2.4%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   │   ├── 12.9 MiB (1.2%) Matcher::match_tree
│   │       │   │   │   │   └── 12.9 MiB (1.2%) 3 more callees, led by (0.8%) Matcher::ReduceInst
│   │       │   │   │   └── 6.63 MiB (0.6%) 5 more callees, led by (0.5%) Node::out_grow
│   │       │   │   ├── … 19.6 MiB (1.8%) malloc_hook at libasyncProfiler.dylib
│   │       │   │   └── 9.91 MiB (0.9%) 2 more callees, led by (0.7%) Node_Array::grow
│   │       │   └── 21 MiB (1.9%) 6 more callees, led by (0.8%) PhaseCFG::do_global_code_motion
│   │       ├── … 17 MiB (1.6%) Parse::do_one_block at libjvm.dylib
│   │       │   └── 17 MiB (1.6%) 18 more callees, led by (0.4%) Parse::do_field_access
│   │       └── 9.46 MiB (0.9%) 9 more callees, led by (0.6%) PhaseRemoveUseless::PhaseRemoveUseless
│   └── 10.3 MiB (0.9%) 5 more callees, led by (0.9%) Compiler::compile_method
├── … 10.2 MiB (0.9%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│   └── 10.2 MiB (0.9%) 138 more callees, led by (0.4%) invoke(Object, Object) at java.lang.invoke.LambdaForm$MH.0x00000004010d5000
└── 4.54 MiB (0.4%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function       | Location                 |
| -----: | -------: | ------: | -------------- | ------------------------ |
| 100.0% | 1.06 GiB | 168,923 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |  194 KiB |     845 | `realloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |  122 KiB |      45 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.2% | 1.05 GiB | 157,921 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.14 MiB |   1,175 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 194 KiB |     845 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                             | Location          |
| ----: | -------: | ------: | ---------------------------------- | ----------------- |
| 72.1% |   88 KiB |      11 | `make_class_info_from_name`        | `libverify.dylib` |
| 26.9% | 32.8 KiB |      22 | `VerifyClassForMajorVersion`       | `libverify.dylib` |
|  1.1% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib`    |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% | 1.06 GiB | 168,923 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.2% | 1.05 GiB | 157,921 | `os::malloc`                               | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,999 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,999 | `thread_start`                             | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,846 | `Thread::call_run`                         | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,846 | `thread_native_entry`                      | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  52,202 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  51,756 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  51,679 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,109 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,066 | `Arena::grow`                              | `libjvm.dylib`            |
|  97.1% | 1.03 GiB |  17,221 | `Compile::Compile`                         | `libjvm.dylib`            |
|  97.1% | 1.03 GiB |  17,221 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  55.6% |  605 MiB |   7,456 | `Compile::Optimize`                        | `libjvm.dylib`            |
|  51.3% |  558 MiB |   6,461 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
|  50.8% |  552 MiB |   6,363 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
|  50.8% |  552 MiB |   6,363 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
|  38.8% |  422 MiB |   7,964 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
|  35.4% |  385 MiB |   2,589 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |
|  30.0% |  327 MiB |   3,112 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                             | Location                  |
| -----: | -------: | ------: | -------------------------------------------------------------------- | ------------------------- |
| 100.0% | 1.06 GiB | 168,923 | `malloc_hook`                                                        | `libasyncProfiler.dylib`  |
|  99.2% | 1.05 GiB | 157,921 | `os::malloc`                                                         | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,999 | `_pthread_start`                                                     | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,999 | `thread_start`                                                       | `libsystem_pthread.dylib` |
|  98.1% | 1.04 GiB |  55,846 | `Thread::call_run`                                                   | `libjvm.dylib`            |
|  98.1% | 1.04 GiB |  55,846 | `thread_native_entry`                                                | `libjvm.dylib`            |
|  98.0% | 1.04 GiB |  52,202 | `JavaThread::thread_main_inner`                                      | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,109 | `Chunk::operator new`                                                | `libjvm.dylib`            |
|  97.9% | 1.04 GiB |  13,066 | `Arena::grow`                                                        | `libjvm.dylib`            |
|  15.5% |  168 MiB |   3,676 | `Arena::Arealloc`                                                    | `libjvm.dylib`            |
|   3.5% | 38.4 MiB |     866 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`   | `libjvm.dylib`            |
|   2.7% | 29.1 MiB |     719 | `IdealLoopTree::loop_predication`                                    | `libjvm.dylib`            |
|   1.9% | 20.5 MiB |     521 | `Parse::Parse`                                                       | `libjvm.dylib`            |
|   1.9% | 20.5 MiB |     521 | `ParseGenerator::generate`                                           | `libjvm.dylib`            |
|   1.9% | 20.5 MiB |     492 | `Parse::do_all_blocks`                                               | `libjvm.dylib`            |
|   1.9% | 20.3 MiB |     489 | `Parse::do_one_block`                                                | `libjvm.dylib`            |
|   1.7% | 18.6 MiB |     452 | `Parse::do_call`                                                     | `libjvm.dylib`            |
|   1.5% | 15.8 MiB |     397 | `PathFrequency::to`                                                  | `libjvm.dylib`            |
|   1.4% | 15.6 MiB |     389 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib`            |
|   1.4% | 15.2 MiB |     372 | `PredictedCallGenerator::generate`                                   | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.2% | 1.05 GiB | 157,921 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% | 5.92 MiB |   1,329 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 1.14 MiB |   1,175 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |
| <0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% |  313 KiB |   2,639 | `getStringPlatformChars0`                 | `libjava.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 98.7% | 1.04 GiB |  13,109 | `Chunk::operator new`    | `libjvm.dylib` |
|  1.1% | 12.2 MiB | 117,448 | `AllocateHeap`           | `libjvm.dylib` |
|  0.1% | 1.18 MiB |   3,860 | `os::malloc`             | `libjvm.dylib` |
|  0.1% |  916 KiB |       3 | `Unsafe_AllocateMemory0` | `libjvm.dylib` |
|  0.1% |  880 KiB |  10,485 | `AnyObj::operator new`   | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Caller         | Location                  |
| -----: | -------: | ------: | -------------- | ------------------------- |
| 100.0% | 1.04 GiB |  55,999 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.04 GiB |  55,846 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Caller           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.04 GiB |  55,846 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.04 GiB |  52,202 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 1.04 GiB |  51,756 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.04 GiB |  51,679 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 1.04 GiB |  13,066 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% | 48.7 KiB |      43 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 36.2% |  385 MiB |   2,589 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| 21.8% |  233 MiB |   1,799 | `PhaseIFG::init`                                                   | `libjvm.dylib` |
| 15.8% |  168 MiB |   3,676 | `Arena::Arealloc`                                                  | `libjvm.dylib` |
|  7.3% | 77.4 MiB |     896 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|  3.6% | 38.4 MiB |     866 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                       | Location       |
| -----: | -------: | ------: | ---------------------------- | -------------- |
| 100.0% | 1.03 GiB |  17,221 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 1.03 GiB |  17,221 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 605 MiB |   7,456 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                    | Location       |
| ----: | ------: | ------: | ------------------------- | -------------- |
| 50.1% | 280 MiB |   3,462 | `Compile::Optimize`       | `libjvm.dylib` |
| 49.9% | 279 MiB |   2,999 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 552 MiB |   6,363 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                     | Location       |
| -----: | ------: | ------: | -------------------------- | -------------- |
| 100.0% | 552 MiB |   6,363 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 422 MiB |   7,964 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 385 MiB |   2,589 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller              | Location       |
| -----: | ------: | ------: | ------------------- | -------------- |
| 100.0% | 327 MiB |   3,112 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 62.9% |  106 MiB |   2,359 | `Node_Array::grow`         | `libjvm.dylib` |
| 14.7% | 24.7 MiB |     548 | `PhaseIdealLoop::set_idom` | `libjvm.dylib` |
|  6.9% | 11.6 MiB |     205 | `Type_Array::grow`         | `libjvm.dylib` |
|  3.5% | 5.91 MiB |     112 | `Node::out_grow`           | `libjvm.dylib` |
|  2.4% | 4.03 MiB |      85 | `PhaseCFG::build_cfg`      | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                               | Location       |
| ----: | -------: | ------: | ---------------------------------------------------- | -------------- |
| 99.7% | 38.3 MiB |     863 | `PhaseIdealLoop::build_and_optimize`                 | `libjvm.dylib` |
|  0.3% |  128 KiB |       3 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                               | Location       |
| -----: | -------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 29.1 MiB |     719 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  45.6% | 13.3 MiB |     339 | `IdealLoopTree::loop_predication`    | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                     | Location       |
| -----: | -------: | ------: | -------------------------- | -------------- |
| 100.0% | 20.5 MiB |     521 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 97.3% | 19.9 MiB |     513 | `Compile::Compile`                     | `libjvm.dylib` |
| 71.5% | 14.7 MiB |     357 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 50.3% | 10.3 MiB |     216 | `Parse::do_call`                       | `libjvm.dylib` |
|  0.2% | 32.3 KiB |       2 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 20.5 MiB |     492 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                 | Location       |
| -----: | -------: | ------: | ---------------------- | -------------- |
| 100.0% | 20.3 MiB |     489 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 18.6 MiB |     452 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                             | Location       |
| ----: | -------: | ------: | -------------------------------------------------- | -------------- |
| 61.1% | 9.66 MiB |     230 | `PhaseIdealLoop::loop_predication_impl`            | `libjvm.dylib` |
| 38.9% | 6.16 MiB |     167 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Caller              | Location       |
| -----: | -------: | ------: | ------------------- | -------------- |
| 100.0% | 15.6 MiB |     389 | `PathFrequency::to` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.8% | 15.2 MiB |     371 | `Parse::do_call`                       | `libjvm.dylib` |
| 35.1% | 5.35 MiB |     139 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|  3.5% |  544 KiB |       6 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.05 GiB | 157,921 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 1.18 MiB |   3,860 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.04 GiB |  55,846 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.04 GiB |  55,999 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.9% | 1.04 GiB |  52,202 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% |  454 KiB |   1,216 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |  266 KiB |   2,330 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 22.9 KiB |      52 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| <0.1% | 16.4 KiB |       9 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.04 GiB |  55,846 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.04 GiB |  51,756 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 37.8 KiB |     446 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.04 GiB |  51,679 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |   36 KiB |      72 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |
|  <0.1% | 1.95 KiB |       2 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 99.0% | 1.03 GiB |  17,221 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  0.9% | 10.1 MiB |  28,654 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 97.9 KiB |       5 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 65.3 KiB |   5,795 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% |    888 B |       3 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.04 GiB |  13,109 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.04 GiB |  13,066 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 57.2% |  605 MiB |   7,456 | `Compile::Optimize`                      | `libjvm.dylib` |
| 40.0% |  422 MiB |   7,964 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  1.9% | 19.9 MiB |     513 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.7% | 6.94 MiB |     117 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 1.72 MiB |      42 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.03 GiB |  17,221 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                         | Location       |
| ----: | -------: | ------: | ------------------------------ | -------------- |
| 46.3% |  280 MiB |   3,462 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 46.1% |  279 MiB |   2,999 | `Compile::optimize_loops`      | `libjvm.dylib` |
|  1.7% | 10.2 MiB |     248 | `PhaseCCP::do_transform`       | `libjvm.dylib` |
|  1.6% | 9.53 MiB |     169 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  1.4% | 8.62 MiB |     178 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 98.9% |  552 MiB |   6,363 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.1% | 6.04 MiB |      98 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.8% |  385 MiB |   2,589 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  6.9% | 38.4 MiB |     867 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 38.3 MiB |     863 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.3% | 29.1 MiB |     719 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |
|  4.4% | 24.6 MiB |     510 | `Arena::grow`                                                      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 552 MiB |   6,363 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.3% |  327 MiB |   3,112 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.7% | 74.7 MiB |   1,175 | `Matcher::match`                  | `libjvm.dylib` |
|  2.1% | 8.94 MiB |     192 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 5.78 MiB |     346 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.2% | 4.86 MiB |     103 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 385 MiB |   2,589 | `Arena::grow` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 71.2% |  233 MiB |   1,799 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 23.9% | 78.2 MiB |     920 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.6% | 8.48 MiB |     222 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.8% |  2.5 MiB |      54 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  0.5% | 1.75 MiB |      33 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 168 MiB |   3,676 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 38.4 MiB |     866 | `Arena::grow` | `libjvm.dylib` |

##### `IdealLoopTree::loop_predication` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                  | Location       |
| -----: | -------: | ------: | --------------------------------------- | -------------- |
| 100.0% | 29.1 MiB |     719 | `PhaseIdealLoop::loop_predication_impl` | `libjvm.dylib` |
|  45.6% | 13.3 MiB |     339 | `IdealLoopTree::loop_predication`       | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 20.5 MiB |     492 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|   6.7% | 1.38 MiB |      29 | `Parse::build_exits`      | `libjvm.dylib` |
|   1.7% |  352 KiB |      11 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|   0.8% |  160 KiB |       4 | `Parse::do_exits`         | `libjvm.dylib` |
|   0.5% |   96 KiB |       2 | `Parse::merge_common`     | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 20.5 MiB |     521 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 98.9% | 20.3 MiB |     489 | `Parse::do_one_block`           | `libjvm.dylib` |
|  2.3% |  480 KiB |       9 | `Parse::ensure_phis_everywhere` | `libjvm.dylib` |
|  1.4% |  288 KiB |       5 | `Parse::merge_common`           | `libjvm.dylib` |
|  0.2% |   32 KiB |       1 | `Type_Array::grow`              | `libjvm.dylib` |
|  0.2% |   32 KiB |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                   | Location       |
| ----: | -------: | ------: | ------------------------ | -------------- |
| 91.5% | 18.6 MiB |     452 | `Parse::do_call`         | `libjvm.dylib` |
| 23.7% | 4.81 MiB |     111 | `Parse::do_field_access` | `libjvm.dylib` |
| 10.6% | 2.16 MiB |      45 | `Parse::do_if`           | `libjvm.dylib` |
|  9.6% | 1.94 MiB |      42 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.4% | 1.09 MiB |      10 | `Parse::do_exceptions`   | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                | Location       |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------- |
| 81.8% | 15.2 MiB |     371 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 55.5% | 10.3 MiB |     216 | `ParseGenerator::generate`                            | `libjvm.dylib` |
|  4.0% |  768 KiB |      16 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  1.7% |  324 KiB |      34 | `Compile::call_generator`                             | `libjvm.dylib` |
|  1.5% |  288 KiB |       9 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PathFrequency::to` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                               | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------- | -------------- |
| 98.4% | 15.6 MiB |     389 | `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` | `libjvm.dylib` |
|  1.6% |  256 KiB |       8 | `Node_Stack::grow`                                                   | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 15.6 MiB |     389 | `Arena::grow` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                               | Location       |
| ----: | -------: | ------: | ------------------------------------ | -------------- |
| 96.3% | 14.7 MiB |     357 | `ParseGenerator::generate`           | `libjvm.dylib` |
| 35.1% | 5.35 MiB |     139 | `PredictedCallGenerator::generate`   | `libjvm.dylib` |
|  3.3% |  512 KiB |      12 | `PreserveJVMState::PreserveJVMState` | `libjvm.dylib` |
|  2.5% |  384 KiB |      10 | `GraphKit::subtype_check_receiver`   | `libjvm.dylib` |
|  2.3% |  352 KiB |       8 | `GraphKit::null_check_common`        | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Compile::Compile` (`libjvm.dylib`) ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.4% |  233 MiB |   1,799 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                            |
| 17.8% |  194 MiB |   1,241 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                 |
| 17.6% |  192 MiB |   1,348 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                             |
|  7.1% | 77.4 MiB |     896 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen`                                                                                                                                                                                                                        |
|  2.4% | 25.7 MiB |     259 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                             |
|  1.8% | 19.6 MiB |     403 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                           |
|  1.8% | 19.6 MiB |     238 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                                       |
|  1.8% | 19.5 MiB |     401 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                       |
|  1.7% | 18.9 MiB |     466 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                   |
|  1.7% | 18.7 MiB |     460 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                       |
|  1.4% |   15 MiB |     305 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize`                                                                                                                                                |
|  0.9% | 10.1 MiB |     245 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize`                                                                                                                                                                                       |
|  0.9% |  9.6 MiB |     205 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`                                                                                                                                                                            |
|  0.7% | 7.69 MiB |     167 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                                       |
|  0.7% | 7.22 MiB |     120 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize`                                                                                                                                                                                         |
|  0.6% |    7 MiB |     147 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                    |
|  0.6% | 6.88 MiB |     115 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless`                                                                                                                                                                                  |
|  0.5% | 5.41 MiB |      98 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen`                                                                                                                                                                                                      |
|  0.4% | 4.81 MiB |     107 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<float, GrowableArray<float>>::expand_to` ← `PathFrequency::to` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` |
|  0.4% | 4.35 MiB |     112 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize`            |
