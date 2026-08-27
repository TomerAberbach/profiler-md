# Allocated native memory profile

Allocated 1.62 GiB over 611,917 samples (2.77 KiB per sample).

| Category |      % |     Size | Samples |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.62 GiB | 611,917 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.8% | 1.61 GiB | 601,319 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% | 2.15 MiB |   9,861 | `realloc_hook` | `libasyncProfiler.dylib` |
|  0.1% | 1.24 MiB |     737 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 90.9% | 1.47 GiB | 536,996 | `os::malloc`                              | `libjvm.dylib`    |
|  4.0% | 65.8 MiB |  10,152 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  3.9% | 64.1 MiB |     133 | `readBytes`                               | `libjava.dylib`   |
|  0.8% | 12.5 MiB |     401 | `updatewindow`                            | `libzip.dylib`    |
|  0.2% | 3.02 MiB |     506 | `CCalloc`                                 | `libverify.dylib` |

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
| 99.8% | 1.61 GiB | 601,319 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 90.7% | 1.47 GiB | 536,996 | `os::malloc`                               | `libjvm.dylib`            |
| 87.6% | 1.42 GiB | 122,760 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 87.6% | 1.42 GiB | 122,760 | `thread_start`                             | `libsystem_pthread.dylib` |
| 87.5% | 1.42 GiB | 122,607 | `Thread::call_run`                         | `libjvm.dylib`            |
| 87.5% | 1.42 GiB | 122,607 | `thread_native_entry`                      | `libjvm.dylib`            |
| 87.3% | 1.41 GiB | 103,007 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 87.3% | 1.41 GiB | 102,196 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 87.3% | 1.41 GiB | 101,943 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 86.9% | 1.41 GiB |  18,007 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 86.9% | 1.41 GiB |  17,942 | `Arena::grow`                              | `libjvm.dylib`            |
| 85.6% | 1.38 GiB |  26,558 | `Compile::Compile`                         | `libjvm.dylib`            |
| 85.6% | 1.38 GiB |  26,558 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 45.1% |  747 MiB |   9,111 | `Compile::Optimize`                        | `libjvm.dylib`            |
| 40.8% |  675 MiB |   7,644 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
| 40.3% |  668 MiB |   7,513 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
| 40.3% |  668 MiB |   7,513 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
| 37.4% |  620 MiB |  14,477 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
| 28.5% |  473 MiB |   4,655 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |
| 28.1% |  466 MiB |   3,047 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                                                                                                                                                                                                                                 | Location                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 99.8% | 1.61 GiB | 601,319 | `malloc_hook`                                                                                                                                                                                                                                            | `libasyncProfiler.dylib`  |
| 90.7% | 1.47 GiB | 536,996 | `os::malloc`                                                                                                                                                                                                                                             | `libjvm.dylib`            |
| 87.6% | 1.42 GiB | 122,760 | `_pthread_start`                                                                                                                                                                                                                                         | `libsystem_pthread.dylib` |
| 87.6% | 1.42 GiB | 122,760 | `thread_start`                                                                                                                                                                                                                                           | `libsystem_pthread.dylib` |
| 87.5% | 1.42 GiB | 122,607 | `Thread::call_run`                                                                                                                                                                                                                                       | `libjvm.dylib`            |
| 87.5% | 1.42 GiB | 122,607 | `thread_native_entry`                                                                                                                                                                                                                                    | `libjvm.dylib`            |
| 87.3% | 1.41 GiB | 103,007 | `JavaThread::thread_main_inner`                                                                                                                                                                                                                          | `libjvm.dylib`            |
| 86.9% | 1.41 GiB |  18,007 | `Chunk::operator new`                                                                                                                                                                                                                                    | `libjvm.dylib`            |
| 86.9% | 1.41 GiB |  17,942 | `Arena::grow`                                                                                                                                                                                                                                            | `libjvm.dylib`            |
| 14.1% |  233 MiB |   4,877 | `Arena::Arealloc`                                                                                                                                                                                                                                        | `libjvm.dylib`            |
|  6.4% |  106 MiB | 268,897 | `Java_java_lang_ClassLoader_defineClass1`                                                                                                                                                                                                                | `libjava.dylib`           |
|  3.9% | 64.1 MiB |     133 | `readBytes`                                                                                                                                                                                                                                              | `libjava.dylib`           |
|  3.5% | 58.6 MiB | 449,851 | `AllocateHeap`                                                                                                                                                                                                                                           | `libjvm.dylib`            |
|  2.8% |   46 MiB |   1,006 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to`                                                                                                                                                                                       | `libjvm.dylib`            |
|  2.5% | 40.9 MiB | 248,047 | `KlassFactory::create_from_stream`                                                                                                                                                                                                                       | `libjvm.dylib`            |
|  2.4% | 40.2 MiB | 259,140 | `jvm_define_class_common`                                                                                                                                                                                                                                | `libjvm.dylib`            |
|  2.4% | 40.2 MiB | 259,140 | `JVM_DefineClassWithSource`                                                                                                                                                                                                                              | `libjvm.dylib`            |
|  2.4% | 40.2 MiB | 259,129 | `SystemDictionary::resolve_class_from_stream`                                                                                                                                                                                                            | `libjvm.dylib`            |
|  2.2% | 36.2 MiB | 205,577 | `SymbolTable::do_add_if_needed`                                                                                                                                                                                                                          | `libjvm.dylib`            |
|  2.2% |   36 MiB | 205,574 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.47 GiB | 536,996 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  980 KiB |  11,894 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.42 GiB | 122,607 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |   56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |     Size | Samples | Callee           | Location                  |
| -----: | -------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.42 GiB | 122,760 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.7% | 1.41 GiB | 103,007 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  0.1% |  2.1 MiB |  10,512 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% | 1.39 MiB |   8,777 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% |   82 KiB |      41 | `JavaThread::post_run`          | `libjvm.dylib` |
| <0.1% | 81.2 KiB |      30 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.42 GiB | 122,607 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 1.41 GiB | 102,196 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 39.4 KiB |     811 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.41 GiB | 101,943 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% |  128 KiB |     252 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% | 8.02 KiB |       1 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.0% | 1.38 GiB |  26,558 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  2.0% | 28.2 MiB |  62,825 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  385 KiB |      13 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% |  183 KiB |  12,531 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 3.18 KiB |      11 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.41 GiB |  18,007 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.41 GiB |  17,942 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.7% |  747 MiB |   9,111 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.8% |  620 MiB |  14,477 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  2.4% |   34 MiB |     811 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% |   11 MiB |     182 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.75 MiB |      52 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.38 GiB |  26,558 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 49.7% |  371 MiB |   4,470 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 40.7% |  304 MiB |   3,174 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  2.1% | 15.7 MiB |     368 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  1.7% | 12.9 MiB |     262 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  1.6% | 12.3 MiB |     216 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 98.9% |  668 MiB |   7,513 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  1.1% | 7.15 MiB |     131 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.8% |  466 MiB |   3,047 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  7.1% | 47.1 MiB |   1,042 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.9% | 45.8 MiB |   1,004 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  5.0% | 33.5 MiB |     669 | `Arena::grow`                                                      | `libjvm.dylib` |
|  3.9% | 26.1 MiB |     616 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 668 MiB |   7,513 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 76.2% |  473 MiB |   4,655 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.7% |  116 MiB |   1,849 | `Matcher::match`                  | `libjvm.dylib` |
|  2.0% | 12.5 MiB |     250 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.5% | 9.36 MiB |     537 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.1% | 7.12 MiB |     142 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 70.8% |  335 MiB |   2,728 | `PhaseIFG::init`                         | `libjvm.dylib` |
| 25.0% |  118 MiB |   1,482 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  2.1% | 9.86 MiB |     213 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.5% |  2.5 MiB |      44 | `PhaseRegAlloc::alloc_node_regs`         | `libjvm.dylib` |
|  0.5% | 2.41 MiB |      54 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                 | Location       |
| -----: | ------: | ------: | ---------------------- | -------------- |
| 100.0% | 466 MiB |   3,046 | `Arena::grow`          | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `VectorSet::VectorSet` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 233 MiB |   4,877 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 62.1% | 65.8 MiB |  10,152 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 37.9% | 40.2 MiB | 258,745 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `readBytes` (`libjava.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 64.1 MiB |     133 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 58.6 MiB | 449,851 | `os::malloc` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |   Size | Samples | Callee        | Location       |
| -----: | -----: | ------: | ------------- | -------------- |
| 100.0% | 46 MiB |   1,006 | `Arena::grow` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 85.7% |   35 MiB | 216,531 | `ClassFileParser::ClassFileParser`            | `libjvm.dylib` |
| 14.3% | 5.86 MiB |  31,601 | `ClassFileParser::create_instance_klass`      | `libjvm.dylib` |
| <0.1% | 1.64 KiB |       3 | `JfrEventClassTransformer::on_klass_creation` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 99.9% | 40.2 MiB | 259,122 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `Arena::grow`                                 | `libjvm.dylib` |
| <0.1% |    994 B |      17 | `SymbolTable::do_add_if_needed`               | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 40.2 MiB | 259,140 | `jvm_define_class_common` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                    | Location       |
| ----: | -------: | ------: | ----------------------------------------- | -------------- |
| 99.1% | 39.8 MiB | 238,645 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  0.8% |  348 KiB |  19,950 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |
| <0.1% | 16.6 KiB |     500 | `SystemDictionary::find_or_define_helper` | `libjvm.dylib` |
| <0.1% | 6.04 KiB |      34 | `ClassLoaderDataGraph::add`               | `libjvm.dylib` |

##### `SymbolTable::do_add_if_needed` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                                                                                                                                                                                                                                                   | Location       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.6% |  36 MiB | 205,574 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|  0.4% | 153 KiB |       3 | `Arena::grow`                                                                                                                                                                                                                                            | `libjvm.dylib` |

##### `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` (`libjvm.dylib`)

|      % |   Size | Samples | Callee         | Location       |
| -----: | -----: | ------: | -------------- | -------------- |
| 100.0% | 36 MiB | 205,574 | `AllocateHeap` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.2% |  335 MiB |   2,728 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 15.3% |  253 MiB |   1,748 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                             |
| 12.8% |  213 MiB |   1,298 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
|  7.1% |  118 MiB |   1,465 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.3% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  2.3% | 38.3 MiB |     385 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.8% | 30.2 MiB |     394 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% | 25.4 MiB |     604 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                   |
|  1.5% | 24.1 MiB |     566 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 21.7 MiB |     438 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 21.7 MiB |     438 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                           |
|  1.1% | 17.5 MiB |     341 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                |
|  1.0% |   16 MiB |     328 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                            |
|  0.9% | 15.3 MiB |     356 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% | 11.7 MiB |     251 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% | 10.9 MiB |     177 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 9.66 MiB |     217 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                    |
|  0.6% |  9.6 MiB |     157 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |  9.6 MiB |     145 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 7.22 MiB |     168 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                            |
