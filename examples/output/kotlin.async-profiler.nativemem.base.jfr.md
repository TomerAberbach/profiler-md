# Allocated native memory profile

Allocated 1.57 GiB over 625,321 samples (2.64 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.57 GiB | 625,321 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.8% | 1.57 GiB | 614,723 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% | 2.15 MiB |   9,861 | `realloc_hook` | `libasyncProfiler.dylib` |
|  0.1% | 1.24 MiB |     737 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 90.6% | 1.42 GiB | 548,882 | `os::malloc`                              | `libjvm.dylib`    |
|  4.1% | 65.8 MiB |  10,151 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  4.0% | 64.1 MiB |     133 | `readBytes`                               | `libjava.dylib`   |
|  0.8% | 12.5 MiB |     401 | `updatewindow`                            | `libzip.dylib`    |
|  0.2% | 3.08 MiB |     538 | `CCalloc`                                 | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.15 MiB |   9,861 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                             | Location          |
| ----: | -------: | ------: | ---------------------------------- | ----------------- |
| 70.3% |  896 KiB |     112 | `make_class_info_from_name`        | `libverify.dylib` |
| 26.2% |  334 KiB |     224 | `VerifyClassForMajorVersion`       | `libverify.dylib` |
|  3.4% | 43.9 KiB |     401 | `Java_java_util_zip_Inflater_init` | `libzip.dylib`    |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                  |
| ----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 99.8% | 1.57 GiB | 614,723 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 90.4% | 1.42 GiB | 548,882 | `os::malloc`                               | `libjvm.dylib`            |
| 87.2% | 1.37 GiB | 134,727 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 87.2% | 1.37 GiB | 134,727 | `thread_start`                             | `libsystem_pthread.dylib` |
| 87.2% | 1.37 GiB | 134,574 | `Thread::call_run`                         | `libjvm.dylib`            |
| 87.2% | 1.37 GiB | 134,574 | `thread_native_entry`                      | `libjvm.dylib`            |
| 87.0% | 1.37 GiB | 108,736 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 87.0% | 1.37 GiB | 107,917 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 87.0% | 1.37 GiB | 107,661 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 86.5% | 1.36 GiB |  17,307 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 86.5% | 1.36 GiB |  17,251 | `Arena::grow`                              | `libjvm.dylib`            |
| 85.7% | 1.35 GiB |  26,868 | `Compile::Compile`                         | `libjvm.dylib`            |
| 85.7% | 1.35 GiB |  26,868 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 45.1% |  727 MiB |   8,863 | `Compile::Optimize`                        | `libjvm.dylib`            |
| 40.9% |  659 MiB |   7,461 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
| 40.5% |  653 MiB |   7,350 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
| 40.5% |  653 MiB |   7,349 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
| 37.6% |  607 MiB |  15,069 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
| 29.0% |  468 MiB |   4,789 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |
| 28.6% |  461 MiB |   3,079 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                                                                                                                                                                                                                                 | Location                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 99.8% | 1.57 GiB | 614,723 | `malloc_hook`                                                                                                                                                                                                                                            | `libasyncProfiler.dylib`  |
| 90.4% | 1.42 GiB | 548,882 | `os::malloc`                                                                                                                                                                                                                                             | `libjvm.dylib`            |
| 87.2% | 1.37 GiB | 134,727 | `_pthread_start`                                                                                                                                                                                                                                         | `libsystem_pthread.dylib` |
| 87.2% | 1.37 GiB | 134,727 | `thread_start`                                                                                                                                                                                                                                           | `libsystem_pthread.dylib` |
| 87.2% | 1.37 GiB | 134,574 | `Thread::call_run`                                                                                                                                                                                                                                       | `libjvm.dylib`            |
| 87.2% | 1.37 GiB | 134,574 | `thread_native_entry`                                                                                                                                                                                                                                    | `libjvm.dylib`            |
| 87.0% | 1.37 GiB | 108,736 | `JavaThread::thread_main_inner`                                                                                                                                                                                                                          | `libjvm.dylib`            |
| 86.5% | 1.36 GiB |  17,307 | `Chunk::operator new`                                                                                                                                                                                                                                    | `libjvm.dylib`            |
| 86.5% | 1.36 GiB |  17,251 | `Arena::grow`                                                                                                                                                                                                                                            | `libjvm.dylib`            |
| 13.8% |  223 MiB |   4,726 | `Arena::Arealloc`                                                                                                                                                                                                                                        | `libjvm.dylib`            |
|  6.6% |  106 MiB | 268,881 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                                                                                                                                | `libjava.dylib`           |
|  4.0% | 64.1 MiB |     133 | `readBytes`                                                                                                                                                                                                                                              | `libjava.dylib`           |
|  3.7% | 59.3 MiB | 462,399 | `AllocateHeap`                                                                                                                                                                                                                                           | `libjvm.dylib`            |
|  2.7% | 43.9 MiB |     983 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`                                                                                                                                                                                       | `libjvm.dylib`            |
|  2.5% | 40.7 MiB | 248,023 | `KlassFactory::create_from_stream`                                                                                                                                                                                                                       | `libjvm.dylib`            |
|  2.5% | 40.1 MiB | 259,125 | `jvm_define_class_common`                                                                                                                                                                                                                                | `libjvm.dylib`            |
|  2.5% | 40.1 MiB | 259,125 | `JVM_DefineClassWithSource`                                                                                                                                                                                                                              | `libjvm.dylib`            |
|  2.5% | 40.1 MiB | 259,115 | `SystemDictionary::resolve_class_from_stream`                                                                                                                                                                                                            | `libjvm.dylib`            |
|  2.2% | 36.2 MiB | 205,575 | `SymbolTable::do_add_if_needed`                                                                                                                                                                                                                          | `libjvm.dylib`            |
|  2.2% |   36 MiB | 205,570 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.42 GiB | 548,882 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  980 KiB |  11,894 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.37 GiB | 134,574 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.37 GiB | 134,727 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.7% | 1.37 GiB | 108,736 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  0.2% | 2.46 MiB |  16,922 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% | 1.32 MiB |   8,625 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |   82 KiB |      41 | `JavaThread::post_run`          | `libjvm.dylib` |
| <0.1% | 81.2 KiB |      30 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.37 GiB | 134,574 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.37 GiB | 107,917 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 39.5 KiB |     819 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.37 GiB | 107,661 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |  129 KiB |     254 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   16 KiB |       2 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.5% | 1.35 GiB |  26,868 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  1.5% | 20.7 MiB |  68,186 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  184 KiB |  12,589 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 33.9 KiB |       3 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 3.18 KiB |      11 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.36 GiB |  17,307 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.36 GiB |  17,251 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.7% |  727 MiB |   8,863 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.9% |  607 MiB |  15,069 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  2.3% | 31.3 MiB |     750 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% | 11.4 MiB |     187 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.88 MiB |      51 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.35 GiB |  26,868 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 50.6% |  368 MiB |   4,423 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 40.0% |  291 MiB |   3,038 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  2.1% |   15 MiB |     356 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  1.7% | 12.3 MiB |     218 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  1.6% |   12 MiB |     250 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                           | Location       |
| ----: | ------: | ------: | -------------------------------- | -------------- |
| 99.1% | 653 MiB |   7,350 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.9% | 6.1 MiB |     111 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 653 MiB |   7,349 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 70.6% |  461 MiB |   3,079 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  6.9% | 45.4 MiB |   1,028 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.7% | 43.8 MiB |     982 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  4.6% | 30.1 MiB |     580 | `Arena::grow`                                                      | `libjvm.dylib` |
|  4.5% | 29.3 MiB |     685 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.1% |  468 MiB |   4,789 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.4% |  112 MiB |   1,761 | `Matcher::match`                  | `libjvm.dylib` |
|  1.9% | 11.5 MiB |     227 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.1% |  6.8 MiB |     481 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.1% | 6.45 MiB |     131 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 71.2% |  333 MiB |   2,877 | `PhaseIFG::init`                           | `libjvm.dylib` |
| 24.6% |  115 MiB |   1,502 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  2.1% | 9.61 MiB |     182 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.6% | 2.87 MiB |      92 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  0.5% | 2.53 MiB |      55 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 461 MiB |   3,079 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 223 MiB |   4,726 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 62.1% | 65.8 MiB |  10,151 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 37.9% | 40.1 MiB | 258,730 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `readBytes` (`libjava.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 64.1 MiB |     133 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 59.3 MiB | 462,399 | `os::malloc` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 43.9 MiB |     983 | `Arena::grow` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 85.6% | 34.8 MiB | 216,513 | `ClassFileParser::ClassFileParser`            | `libjvm.dylib` |
| 14.4% | 5.86 MiB |  31,595 | `ClassFileParser::create_instance_klass`      | `libjvm.dylib` |
| <0.1% | 1.64 KiB |       3 | `JfrEventClassTransformer::on_klass_creation` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                        | Location       |
| -----: | -------: | ------: | --------------------------------------------- | -------------- |
| 100.0% | 40.1 MiB | 259,108 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  <0.1% |    994 B |      17 | `SymbolTable::do_add_if_needed`               | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 40.1 MiB | 259,125 | `jvm_define_class_common` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                    | Location       |
| ----: | -------: | ------: | ----------------------------------------- | -------------- |
| 99.1% | 39.7 MiB | 238,633 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  0.8% |  348 KiB |  19,948 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |
| <0.1% | 16.6 KiB |     500 | `SystemDictionary::find_or_define_helper` | `libjvm.dylib` |
| <0.1% | 6.04 KiB |      34 | `ClassLoaderDataGraph::add`               | `libjvm.dylib` |

##### `SymbolTable::do_add_if_needed` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                                                                                                                                                                                                                                                   | Location       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.4% |  36 MiB | 205,570 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|  0.6% | 217 KiB |       5 | `Arena::grow`                                                                                                                                                                                                                                            | `libjvm.dylib` |

##### `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` (`libjvm.dylib`)

|      % |   Size | Samples | Callee         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 36 MiB | 205,570 | `AllocateHeap` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.7% |  333 MiB |   2,877 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 15.8% |  255 MiB |   1,786 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                             |
| 12.8% |  206 MiB |   1,293 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
|  7.1% |  115 MiB |   1,496 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.4% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  2.4% | 39.1 MiB |     413 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.9% |   30 MiB |     405 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |   25 MiB |     605 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                   |
|  1.5% | 23.5 MiB |     560 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 20.4 MiB |     423 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 20.4 MiB |     422 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                           |
|  1.0% | 15.6 MiB |     294 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                |
|  0.9% | 14.7 MiB |     348 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  0.9% | 14.5 MiB |     286 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% | 11.8 MiB |     266 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% | 11.3 MiB |     185 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 9.94 MiB |     233 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                    |
|  0.6% | 9.38 MiB |     157 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |  9.1 MiB |     140 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% | 7.31 MiB |     168 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                            |
