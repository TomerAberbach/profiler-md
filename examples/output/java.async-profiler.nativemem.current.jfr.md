# Allocated native memory profile

Allocated 259 MiB over 88,868 samples (2.98 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 259 MiB |  88,868 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 245 MiB (94.6%) Thread::call_run at libjvm.dylib
│   ├── … 128 MiB (49.6%) CompileBroker::invoke_compiler_on_method at libjvm.dylib
│   │   ├── 127 MiB (49.0%) C2Compiler::compile_method
│   │   │   └── 127 MiB (49.0%) Compile::Compile
│   │   │       ├── 74.4 MiB (28.7%) Compile::Optimize
│   │   │       │   ├── … 38.3 MiB (14.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │       │   │   ├── … 29.9 MiB (11.6%) malloc_hook at libasyncProfiler.dylib
│   │   │       │   │   └── 8.33 MiB (3.2%) 10 more callees, led by (0.8%) Node_Array::grow
│   │   │       │   ├── … 32.5 MiB (12.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │   │       │   │   ├── … 26.8 MiB (10.4%) malloc_hook at libasyncProfiler.dylib
│   │   │       │   │   └── 5.72 MiB (2.2%) 9 more callees, led by (0.7%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
│   │   │       │   └── 2.95 MiB (1.1%) 11 more callees, led by (0.3%) PhaseIterGVN::optimize
│   │   │       ├── 47.4 MiB (18.3%) Compile::Code_Gen
│   │   │       │   ├── 37.2 MiB (14.4%) PhaseChaitin::Register_Allocate
│   │   │       │   │   ├── … 29.3 MiB (11.3%) malloc_hook at libasyncProfiler.dylib
│   │   │       │   │   ├── … 6.29 MiB (2.4%) malloc_hook at libasyncProfiler.dylib
│   │   │       │   │   └── 896 KiB (0.3%) PhaseChaitin::Split
│   │   │       │   └── 9.86 MiB (3.8%) Matcher::match
│   │   │       │       ├── 6.79 MiB (2.6%) Matcher::xform
│   │   │       │       │   ├── … 3.3 MiB (1.3%) malloc_hook at libasyncProfiler.dylib
│   │   │       │       │   └── 2.94 MiB (1.1%) Matcher::match_tree
│   │   │       │       │       └── 2.94 MiB (1.1%) 2 more callees, led by (0.7%) Matcher::Label_Root
│   │   │       │       └── 3.07 MiB (1.2%) 3 more callees, led by (0.8%) Matcher::find_shared
│   │   │       └── … 3.12 MiB (1.2%) Parse::do_one_block at libjvm.dylib
│   │   │           └── 3.12 MiB (1.2%) 13 more callees, led by (0.5%) Parse::do_call
│   │   └── 1.58 MiB (0.6%) 4 more callees, led by (0.6%) Compiler::compile_method
│   ├── … 114 MiB (44.0%) VM_Operation::evaluate at libjvm.dylib
│   │   ├── … 108 MiB (41.7%, self 99.9% globally) malloc_hook at libasyncProfiler.dylib
│   │   └── … 4.98 MiB (1.9%) G1YoungCollector::collect at libjvm.dylib
│   │       ├── 2.8 MiB (1.1%) G1YoungCollector::pre_evacuate_collection_set
│   │       │   └── 2.8 MiB (1.1%) 6 more callees, led by (0.6%) G1RemSetScanState::prepare
│   │       └── 1.23 MiB (0.5%) G1YoungCollector::post_evacuate_collection_set
│   └── 2.45 MiB (0.9%) 6 more callees, led by (0.8%) WorkerThread::run
├── … 11.6 MiB (4.5%) main(String[]) at org.renaissance.harness.RenaissanceSuite
│   ├── 10.2 MiB (3.9%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
│   │   ├── … 3.12 MiB (1.2%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
│   │   │   └── 3.12 MiB (1.2%) 14 more callees, led by (1.1%) toCsvRows(Function) at org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter
│   │   └── 6.08 MiB (2.3%) 24 more callees, led by (0.7%) <clinit>() at scala.Predef$
│   └── 1.4 MiB (0.5%) 2 more callees, led by (0.5%) loadClass(String) at java.lang.ClassLoader
└── 627 KiB (0.2%) break_deopt
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.9% |  259 MiB |  88,119 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% |  153 KiB |     737 | `realloc_hook` | `libasyncProfiler.dylib` |
| <0.1% | 1.31 KiB |      12 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 96.9% |  251 MiB |  85,594 | `os::malloc`                              | `libjvm.dylib`  |
|  2.5% | 6.37 MiB |     847 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.4% |  962 KiB |      68 | `readBytes`                               | `libjava.dylib` |
|  0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
|  0.1% |  214 KiB |     282 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |    Size | Samples | Caller        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 153 KiB |     737 | `os::realloc` | `libjvm.dylib` |

##### `calloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller                             | Location       |
| -----: | -------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 1.31 KiB |      12 | `Java_java_util_zip_Inflater_init` | `libzip.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|     % |    Size | Samples | Function                                   | Location                  |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------- |
| 99.9% | 259 MiB |  88,119 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 96.8% | 251 MiB |  85,594 | `os::malloc`                               | `libjvm.dylib`            |
| 94.6% | 245 MiB |  36,611 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 94.6% | 245 MiB |  36,611 | `thread_start`                             | `libsystem_pthread.dylib` |
| 94.6% | 245 MiB |  36,458 | `Thread::call_run`                         | `libjvm.dylib`            |
| 94.6% | 245 MiB |  36,458 | `thread_native_entry`                      | `libjvm.dylib`            |
| 49.6% | 128 MiB |  11,084 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 49.6% | 128 MiB |  10,856 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 49.6% | 128 MiB |  10,757 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 49.4% | 128 MiB |   2,096 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 49.3% | 128 MiB |   2,025 | `Arena::grow`                              | `libjvm.dylib`            |
| 49.0% | 127 MiB |   2,812 | `Compile::Compile`                         | `libjvm.dylib`            |
| 49.0% | 127 MiB |   2,812 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 46.9% | 121 MiB |  71,381 | `AllocateHeap`                             | `libjvm.dylib`            |
| 44.0% | 114 MiB |  10,293 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
| 44.0% | 114 MiB |  10,293 | `VMThread::run`                            | `libjvm.dylib`            |
| 44.0% | 114 MiB |  10,123 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
| 44.0% | 114 MiB |  10,123 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
| 42.1% | 109 MiB |   2,749 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
| 42.1% | 109 MiB |   2,749 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|     % |     Size | Samples | Function                                  | Location                  |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 99.9% |  259 MiB |  88,119 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
| 96.8% |  251 MiB |  85,594 | `os::malloc`                              | `libjvm.dylib`            |
| 94.6% |  245 MiB |  36,611 | `_pthread_start`                          | `libsystem_pthread.dylib` |
| 94.6% |  245 MiB |  36,611 | `thread_start`                            | `libsystem_pthread.dylib` |
| 94.6% |  245 MiB |  36,458 | `Thread::call_run`                        | `libjvm.dylib`            |
| 94.6% |  245 MiB |  36,458 | `thread_native_entry`                     | `libjvm.dylib`            |
| 49.6% |  128 MiB |  11,084 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
| 49.4% |  128 MiB |   2,096 | `Chunk::operator new`                     | `libjvm.dylib`            |
| 49.3% |  128 MiB |   2,025 | `Arena::grow`                             | `libjvm.dylib`            |
| 46.9% |  121 MiB |  71,381 | `AllocateHeap`                            | `libjvm.dylib`            |
| 44.0% |  114 MiB |  10,293 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
| 44.0% |  114 MiB |  10,293 | `VMThread::run`                           | `libjvm.dylib`            |
| 44.0% |  114 MiB |  10,123 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
| 44.0% |  114 MiB |  10,123 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
| 42.1% |  109 MiB |   2,749 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
| 42.1% |  109 MiB |   2,749 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
| 42.0% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
| 41.9% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  5.8% | 15.1 MiB |     445 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|  3.5% | 9.18 MiB |  23,794 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 96.9% |  251 MiB |  85,594 | `os::malloc`                              | `libjvm.dylib`  |
|  2.5% | 6.37 MiB |     847 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.4% |  962 KiB |      68 | `readBytes`                               | `libjava.dylib` |
|  0.1% |  384 KiB |      12 | `updatewindow`                            | `libzip.dylib`  |
|  0.1% |  214 KiB |     282 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 51.0% |  128 MiB |   2,096 | `Chunk::operator new`       | `libjvm.dylib` |
| 48.4% |  121 MiB |  71,381 | `AllocateHeap`              | `libjvm.dylib` |
|  0.4% | 1.02 MiB |   5,844 | `AnyObj::operator new`      | `libjvm.dylib` |
|  0.1% |  383 KiB |   2,128 | `os::malloc`                | `libjvm.dylib` |
|  0.1% |  277 KiB |   2,068 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 245 MiB |  36,611 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 245 MiB |  36,458 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 245 MiB |  36,458 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 128 MiB |  11,084 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                          | Location       |
| -----: | ------: | ------: | ------------------------------- | -------------- |
| 100.0% | 128 MiB |  10,856 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 128 MiB |  10,757 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|     % |     Size | Samples | Caller         | Location       |
| ----: | -------: | ------: | -------------- | -------------- |
| 99.9% |  128 MiB |   2,025 | `Arena::grow`  | `libjvm.dylib` |
|  0.1% | 76.8 KiB |      71 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 44.4% | 56.7 MiB |     540 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
| 22.9% | 29.3 MiB |     341 | `PhaseIFG::init`                                                   | `libjvm.dylib` |
| 11.8% | 15.1 MiB |     445 | `Arena::Arealloc`                                                  | `libjvm.dylib` |
|  4.9% | 6.29 MiB |     143 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|  3.1% | 3.91 MiB |     115 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                       | Location       |
| -----: | ------: | ------: | ---------------------------- | -------------- |
| 100.0% | 127 MiB |   2,812 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                     | Location       |
| -----: | ------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 127 MiB |   2,812 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 89.0% |  108 MiB |      72 | `G1FullGCMarker::G1FullGCMarker`                                                                                                                                                                                                                         | `libjvm.dylib` |
|  2.0% |  2.4 MiB |  15,225 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|  1.7% | 2.02 MiB |     258 | `HeapRegionClaimer::HeapRegionClaimer`                                                                                                                                                                                                                   | `libjvm.dylib` |
|  1.3% | 1.53 MiB |     468 | `G1RemSetScanState::prepare`                                                                                                                                                                                                                             | `libjvm.dylib` |
|  0.7% |  868 KiB |   2,076 | `G1ParScanThreadState::G1ParScanThreadState`                                                                                                                                                                                                             | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Caller          | Location       |
| -----: | ------: | ------: | --------------- | -------------- |
| 100.0% | 114 MiB |  10,293 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 114 MiB |  10,293 | `Thread::call_run` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 114 MiB |  10,123 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 114 MiB |  10,123 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 109 MiB |   2,749 | `VM_G1CollectFull::doit` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 109 MiB |   2,749 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 109 MiB |     312 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 109 MiB |     108 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 62.4% | 9.44 MiB |     279 | `Node_Array::grow`         | `libjvm.dylib` |
| 12.6% | 1.91 MiB |      55 | `PhaseIdealLoop::set_idom` | `libjvm.dylib` |
|  6.2% |  960 KiB |      26 | `Type_Array::grow`         | `libjvm.dylib` |
|  4.1% |  640 KiB |      20 | `VectorSet::grow`          | `libjvm.dylib` |
|  3.9% |  608 KiB |      17 | `Block_Array::grow`        | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |     Size | Samples | Caller                                                                          | Location                |
| -----: | -------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 9.18 MiB |  23,794 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 251 MiB |  85,594 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% | 383 KiB |   2,128 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 245 MiB |  36,458 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 245 MiB |  36,611 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 52.4% |  128 MiB |  11,084 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 46.6% |  114 MiB |  10,293 | `VMThread::run`                 | `libjvm.dylib` |
|  0.8% | 2.03 MiB |  14,271 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% |  198 KiB |     117 | `JavaThread::post_run`          | `libjvm.dylib` |
|  0.1% |  195 KiB |      72 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 245 MiB |  36,458 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% |  128 MiB |  10,856 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 6.74 KiB |     228 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                         | Location       |
| -----: | -------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |  128 MiB |  10,757 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 49.6 KiB |      98 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |  1,000 B |       1 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 98.8% |  127 MiB |   2,812 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  1.2% | 1.53 MiB |   6,481 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% | 34.9 KiB |       4 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 15.6 KiB |   1,456 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 1.16 KiB |       4 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 128 MiB |   2,096 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 128 MiB |   2,025 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 58.7% | 74.4 MiB |   1,074 | `Compile::Optimize`                      | `libjvm.dylib` |
| 37.4% | 47.4 MiB |   1,317 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  2.9% | 3.69 MiB |     126 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.5% |  704 KiB |      19 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% |  320 KiB |      10 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 127 MiB |   2,812 | `Compile::Compile` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 121 MiB |  71,381 | `os::malloc` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                         | Location       |
| -----: | -------: | ------: | ------------------------------ | -------------- |
| 100.0% |  114 MiB |  10,123 | `VMThread::evaluate_operation` | `libjvm.dylib` |
|  <0.1% | 8.16 KiB |      87 | `outputStream::print`          | `libjvm.dylib` |
|  <0.1% |    498 B |      83 | `SafepointSynchronize::begin`  | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 114 MiB |  10,293 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 95.6% |  109 MiB |   2,749 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  4.4% | 4.98 MiB |   7,313 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |
| <0.1% |    976 B |      61 | `VM_HandshakeAllThreads::doit`    | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 114 MiB |  10,123 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 99.7% |  109 MiB |     312 | `G1FullCollector::G1FullCollector`     | `libjvm.dylib` |
|  0.2% |  200 KiB |     386 | `G1FullCollector::collect`             | `libjvm.dylib` |
|  0.1% | 79.6 KiB |   2,051 | `G1FullCollector::complete_collection` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 109 MiB |   2,749 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                             | Location       |
| ----: | -------: | ------: | -------------------------------------------------- | -------------- |
| 99.8% |  109 MiB |     108 | `G1FullGCMarker::G1FullGCMarker`                   | `libjvm.dylib` |
|  0.1% |  165 KiB |     100 | `AllocateHeap`                                     | `libjvm.dylib` |
| <0.1% |   12 KiB |      88 | `G1FullGCCompactionPoint::G1FullGCCompactionPoint` | `libjvm.dylib` |
| <0.1% | 9.28 KiB |       4 | `PreservedMarksSet::init`                          | `libjvm.dylib` |
| <0.1% | 8.25 KiB |       4 | `G1BiasedMappedArrayBase::create_new_base_array`   | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                                           | Location       |
| ----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 99.5% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  0.5% | 576 KiB |      36 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 15.1 MiB |     445 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 69.4% | 6.37 MiB |     847 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 30.6% | 2.81 MiB |  22,947 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.7% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                            |
| 11.6% | 29.9 MiB |     286 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                   |
| 11.3% | 29.3 MiB |     341 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                  |
| 10.4% | 26.8 MiB |     254 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                       |
|  2.4% | 6.29 MiB |     143 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                              |
|  1.3% |  3.3 MiB |      52 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                   |
|  0.8% | 2.19 MiB |      67 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                         |
|  0.8% | 2.13 MiB |      65 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.8% | 2.01 MiB |      43 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                             |
|  0.7% | 1.78 MiB |      50 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|  0.7% | 1.75 MiB |      49 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                             |
|  0.6% | 1.53 MiB |     468 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1RemSetScanState::prepare` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                 |
|  0.5% | 1.25 MiB |      40 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                           |
|  0.4% |    1 MiB |      30 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                             |
|  0.3% |  868 KiB |   2,076 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1ParScanThreadState::G1ParScanThreadState` ← `G1ParScanThreadStateSet::state_for_worker` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                          |
|  0.3% |  768 KiB |      23 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                          |
|  0.3% |  704 KiB |      21 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                             |
|  0.2% |  624 KiB |      78 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1EvacFailureRegions::pre_collection` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.2% |  624 KiB |      78 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                       |
|  0.2% |  624 KiB |      78 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1RemSet::merge_heap_roots` ← `G1YoungCollector::evacuate_initial_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`    |
