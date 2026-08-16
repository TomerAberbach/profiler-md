# Allocated native memory profile

Allocated 1.56 GiB over 617,888 samples (2.64 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.56 GiB | 617,888 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.8% | 1.55 GiB | 607,294 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% | 2.15 MiB |   9,857 | `realloc_hook` | `libasyncProfiler.dylib` |
|  0.1% | 1.24 MiB |     737 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 90.5% |  1.4 GiB | 541,458 | `os::malloc`                              | `libjvm.dylib`    |
|  4.1% | 65.8 MiB |  10,151 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  4.0% | 64.1 MiB |     133 | `readBytes`                               | `libjava.dylib`   |
|  0.8% | 12.5 MiB |     401 | `updatewindow`                            | `libzip.dylib`    |
|  0.2% | 3.08 MiB |     538 | `CCalloc`                                 | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.15 MiB |   9,857 | `os::realloc` | `libjvm.dylib` |

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
| 99.8% | 1.55 GiB | 607,294 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 90.3% |  1.4 GiB | 541,458 | `os::malloc`                               | `libjvm.dylib`            |
| 87.1% | 1.35 GiB | 127,220 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 87.1% | 1.35 GiB | 127,220 | `thread_start`                             | `libsystem_pthread.dylib` |
| 87.1% | 1.35 GiB | 127,067 | `Thread::call_run`                         | `libjvm.dylib`            |
| 87.1% | 1.35 GiB | 127,067 | `thread_native_entry`                      | `libjvm.dylib`            |
| 86.8% | 1.35 GiB | 108,034 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 86.8% | 1.35 GiB | 107,222 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 86.8% | 1.35 GiB | 106,942 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 86.4% | 1.34 GiB |  17,548 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 86.3% | 1.34 GiB |  17,479 | `Arena::grow`                              | `libjvm.dylib`            |
| 85.1% | 1.32 GiB |  26,681 | `Compile::Compile`                         | `libjvm.dylib`            |
| 85.1% | 1.32 GiB |  26,681 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 44.6% |  710 MiB |   8,774 | `Compile::Optimize`                        | `libjvm.dylib`            |
| 40.4% |  644 MiB |   7,367 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
| 40.0% |  638 MiB |   7,256 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
| 40.0% |  638 MiB |   7,256 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
| 37.5% |  597 MiB |  14,961 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
| 28.8% |  459 MiB |   4,736 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |
| 28.4% |  452 MiB |   3,016 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                                                                                                                                                                                                                                 | Location                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 99.8% | 1.55 GiB | 607,294 | `malloc_hook`                                                                                                                                                                                                                                            | `libasyncProfiler.dylib`  |
| 90.3% |  1.4 GiB | 541,458 | `os::malloc`                                                                                                                                                                                                                                             | `libjvm.dylib`            |
| 87.1% | 1.35 GiB | 127,220 | `_pthread_start`                                                                                                                                                                                                                                         | `libsystem_pthread.dylib` |
| 87.1% | 1.35 GiB | 127,220 | `thread_start`                                                                                                                                                                                                                                           | `libsystem_pthread.dylib` |
| 87.1% | 1.35 GiB | 127,067 | `Thread::call_run`                                                                                                                                                                                                                                       | `libjvm.dylib`            |
| 87.1% | 1.35 GiB | 127,067 | `thread_native_entry`                                                                                                                                                                                                                                    | `libjvm.dylib`            |
| 86.8% | 1.35 GiB | 108,034 | `JavaThread::thread_main_inner`                                                                                                                                                                                                                          | `libjvm.dylib`            |
| 86.4% | 1.34 GiB |  17,548 | `Chunk::operator new`                                                                                                                                                                                                                                    | `libjvm.dylib`            |
| 86.3% | 1.34 GiB |  17,479 | `Arena::grow`                                                                                                                                                                                                                                            | `libjvm.dylib`            |
| 13.6% |  217 MiB |   4,707 | `Arena::Arealloc`                                                                                                                                                                                                                                        | `libjvm.dylib`            |
|  6.7% |  106 MiB | 268,875 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                                                                                                                                | `libjava.dylib`           |
|  4.0% | 64.1 MiB |     133 | `readBytes`                                                                                                                                                                                                                                              | `libjava.dylib`           |
|  3.7% | 58.9 MiB | 454,880 | `AllocateHeap`                                                                                                                                                                                                                                           | `libjvm.dylib`            |
|  2.8% | 44.2 MiB |   1,019 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`                                                                                                                                                                                       | `libjvm.dylib`            |
|  2.6% | 40.9 MiB | 248,020 | `KlassFactory::create_from_stream`                                                                                                                                                                                                                       | `libjvm.dylib`            |
|  2.5% | 40.3 MiB | 259,119 | `jvm_define_class_common`                                                                                                                                                                                                                                | `libjvm.dylib`            |
|  2.5% | 40.3 MiB | 259,119 | `JVM_DefineClassWithSource`                                                                                                                                                                                                                              | `libjvm.dylib`            |
|  2.5% | 40.3 MiB | 259,109 | `SystemDictionary::resolve_class_from_stream`                                                                                                                                                                                                            | `libjvm.dylib`            |
|  2.3% | 36.2 MiB | 205,574 | `SymbolTable::do_add_if_needed`                                                                                                                                                                                                                          | `libjvm.dylib`            |
|  2.3% |   36 MiB | 205,571 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.4 GiB | 541,458 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 980 KiB |  11,894 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.35 GiB | 127,067 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.35 GiB | 127,220 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.7% | 1.35 GiB | 108,034 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  0.1% | 2.07 MiB |  10,188 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% | 1.32 MiB |   8,546 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% | 90.2 KiB |      45 | `JavaThread::post_run`          | `libjvm.dylib` |
| <0.1% | 89.3 KiB |      33 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.35 GiB | 127,067 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.35 GiB | 107,222 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 39.4 KiB |     812 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.35 GiB | 106,942 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |  141 KiB |     278 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |   16 KiB |       2 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.0% | 1.32 GiB |  26,681 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  2.0% | 27.6 MiB |  67,737 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  227 KiB |      10 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |  182 KiB |  12,499 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 3.47 KiB |      12 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.34 GiB |  17,548 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.34 GiB |  17,479 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.4% |  710 MiB |   8,774 | `Compile::Optimize`                      | `libjvm.dylib` |
| 44.1% |  597 MiB |  14,961 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  2.3% | 31.8 MiB |     776 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% | 10.9 MiB |     182 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.81 MiB |      50 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.32 GiB |  26,681 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 49.9% |  354 MiB |   4,285 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 40.8% |  290 MiB |   3,082 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  2.0% | 14.5 MiB |     352 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  1.6% | 11.7 MiB |     247 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  1.6% | 11.1 MiB |     208 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.1% |  638 MiB |   7,256 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.9% | 6.11 MiB |     111 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 70.8% |  452 MiB |   3,016 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  7.1% | 45.4 MiB |   1,059 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 43.9 MiB |   1,016 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  4.4% |   28 MiB |     557 | `Arena::grow`                                                      | `libjvm.dylib` |
|  3.7% | 23.7 MiB |     580 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 638 MiB |   7,256 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 76.8% |  459 MiB |   4,736 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.5% |  110 MiB |   1,802 | `Matcher::match`                  | `libjvm.dylib` |
|  1.8% |   11 MiB |     219 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% | 8.32 MiB |     524 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.1% | 6.32 MiB |     128 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 71.3% |  327 MiB |   2,837 | `PhaseIFG::init`                           | `libjvm.dylib` |
| 24.8% |  114 MiB |   1,507 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  1.7% | 7.94 MiB |     173 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.6% | 2.69 MiB |      57 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  0.5% | 2.31 MiB |      74 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee         | Location       |
| -----: | ------: | ------: | -------------- | -------------- |
| 100.0% | 452 MiB |   3,014 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |  64 KiB |       2 | `NTarjan::DFS` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 217 MiB |   4,707 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 62.1% | 65.8 MiB |  10,151 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 37.9% | 40.2 MiB | 258,724 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `readBytes` (`libjava.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 64.1 MiB |     133 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 58.9 MiB | 454,880 | `os::malloc` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 44.2 MiB |   1,019 | `Arena::grow` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 85.7% |   35 MiB | 216,508 | `ClassFileParser::ClassFileParser`            | `libjvm.dylib` |
| 14.4% | 5.87 MiB |  31,597 | `ClassFileParser::create_instance_klass`      | `libjvm.dylib` |
| <0.1% | 1.64 KiB |       3 | `JfrEventClassTransformer::on_klass_creation` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                        | Location       |
| -----: | -------: | ------: | --------------------------------------------- | -------------- |
| 100.0% | 40.3 MiB | 259,102 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  <0.1% |    994 B |      17 | `SymbolTable::do_add_if_needed`               | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 40.3 MiB | 259,119 | `jvm_define_class_common` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                    | Location       |
| ----: | -------: | ------: | ----------------------------------------- | -------------- |
| 99.1% | 39.9 MiB | 238,627 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  0.8% |  348 KiB |  19,948 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |
| <0.1% | 16.6 KiB |     500 | `SystemDictionary::find_or_define_helper` | `libjvm.dylib` |
| <0.1% | 6.04 KiB |      34 | `ClassLoaderDataGraph::add`               | `libjvm.dylib` |

##### `SymbolTable::do_add_if_needed` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                                                                                                                                                                                                                                                   | Location       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.6% |  36 MiB | 205,571 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|  0.4% | 153 KiB |       3 | `Arena::grow`                                                                                                                                                                                                                                            | `libjvm.dylib` |

##### `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` (`libjvm.dylib`)

|      % |   Size | Samples | Callee         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 36 MiB | 205,571 | `AllocateHeap` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.5% |  327 MiB |   2,837 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 15.5% |  247 MiB |   1,730 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                             |
| 12.9% |  205 MiB |   1,284 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
|  7.1% |  113 MiB |   1,482 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.5% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  2.4% | 37.9 MiB |     400 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.8% | 29.2 MiB |     399 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% | 24.7 MiB |     614 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                   |
|  1.5% | 23.2 MiB |     572 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 20.8 MiB |     445 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 20.7 MiB |     444 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                           |
|  0.9% | 14.6 MiB |     284 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                |
|  0.9% | 14.3 MiB |     344 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% | 13.4 MiB |     273 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% | 11.5 MiB |     258 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% | 10.8 MiB |     180 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 9.69 MiB |     228 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                    |
|  0.5% | 8.69 MiB |     154 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
|  0.5% | 7.66 MiB |     124 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 6.56 MiB |     157 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                            |
