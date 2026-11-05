# Allocated native memory profile

Allocated 162 MiB over 675 samples (247 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 162 MiB |     675 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 162 MiB (99.6%) thread_start at libsystem_pthread.dylib
    └── 162 MiB (99.6%) _pthread_start
        └── 162 MiB (99.6%) thread_native_entry at libjvm.dylib
            └── 162 MiB (99.6%) Thread::call_run
                ├── 108 MiB (66.6%) VMThread::run
                │   └── 108 MiB (66.6%) VMThread::inner_execute
                │       └── 108 MiB (66.6%) VMThread::evaluate_operation
                │           └── 108 MiB (66.6%) VM_Operation::evaluate
                │               └── 108 MiB (66.5%) VM_G1CollectFull::doit
                │                   └── 108 MiB (66.5%) G1CollectedHeap::do_full_collection
                │                       └── 108 MiB (66.5%) G1FullCollector::G1FullCollector
                │                           └── 108 MiB (66.5%) G1FullGCMarker::G1FullGCMarker
                │                               └── 108 MiB (66.5%) AllocateHeap
                │                                   └── 108 MiB (66.5%) os::malloc
                │                                       └── 108 MiB (66.5%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
                └── 53.6 MiB (33.0%) JavaThread::thread_main_inner
                    └── 53.6 MiB (33.0%) CompileBroker::compiler_thread_loop
                        └── 53.6 MiB (33.0%) CompileBroker::invoke_compiler_on_method
                            └── 53.4 MiB (32.8%) C2Compiler::compile_method
                                └── 53.4 MiB (32.8%) Compile::Compile
                                    ├── 35.8 MiB (22.0%) Compile::Optimize
                                    │   ├── 20.8 MiB (12.8%) PhaseIdealLoop::optimize
                                    │   │   └── 20.8 MiB (12.8%) PhaseIdealLoop::PhaseIdealLoop
                                    │   │       └── 20.8 MiB (12.8%) PhaseIdealLoop::build_and_optimize
                                    │   │           ├── 19.7 MiB (12.1%) PhaseIdealLoop::Dominators
                                    │   │           │   └── 19.7 MiB (12.1%) Arena::grow
                                    │   │           │       └── 19.7 MiB (12.1%) Chunk::operator new
                                    │   │           │           └── 19.7 MiB (12.1%) os::malloc
                                    │   │           │               └── 19.7 MiB (12.1%) malloc_hook at libasyncProfiler.dylib
                                    │   │           ├── 288 KiB (0.2%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
                                    │   │           └── 256 KiB (0.2%) Node_Array::grow
                                    │   └── … 13.9 MiB (8.6%) Chunk::operator new at libjvm.dylib
                                    │       └── 13.9 MiB (8.6%) os::malloc
                                    │           └── 13.9 MiB (8.6%) malloc_hook at libasyncProfiler.dylib
                                    └── 16.9 MiB (10.4%) Compile::Code_Gen
                                        ├── 15 MiB (9.2%) PhaseChaitin::Register_Allocate
                                        │   ├── … 13.4 MiB (8.2%) malloc_hook at libasyncProfiler.dylib
                                        │   └── … 1.37 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
                                        └── 1.88 MiB (1.2%) Matcher::match
                                            └── … 1.04 MiB (0.6%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function       | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 162 MiB |     674 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   192 B |       1 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |    Size | Samples | Caller                                    | Location        |
| ----: | ------: | ------: | ----------------------------------------- | --------------- |
| 99.6% | 162 MiB |     642 | `os::malloc`                              | `libjvm.dylib`  |
|  0.3% | 468 KiB |      25 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 123 KiB |       7 | `readBytes`                               | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 192 B |       1 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% |  162 MiB |     674 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.6% |  162 MiB |     642 | `os::malloc`                               | `libjvm.dylib`            |
|  99.6% |  162 MiB |     622 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.6% |  162 MiB |     622 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.6% |  162 MiB |     622 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.6% |  162 MiB |     622 | `thread_start`                             | `libsystem_pthread.dylib` |
|  66.6% |  108 MiB |     124 | `AllocateHeap`                             | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VMThread::run`                            | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `G1FullGCMarker::G1FullGCMarker`           | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `G1FullCollector::G1FullCollector`         | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |
|  33.0% | 53.7 MiB |     513 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  33.0% | 53.6 MiB |     511 | `Arena::grow`                              | `libjvm.dylib`            |
|  33.0% | 53.6 MiB |     515 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  33.0% | 53.6 MiB |     515 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  33.0% | 53.6 MiB |     515 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                  | Location                  |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 100.0% |  162 MiB |     674 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
|  99.6% |  162 MiB |     642 | `os::malloc`                              | `libjvm.dylib`            |
|  99.6% |  162 MiB |     622 | `Thread::call_run`                        | `libjvm.dylib`            |
|  99.6% |  162 MiB |     622 | `thread_native_entry`                     | `libjvm.dylib`            |
|  99.6% |  162 MiB |     622 | `_pthread_start`                          | `libsystem_pthread.dylib` |
|  99.6% |  162 MiB |     622 | `thread_start`                            | `libsystem_pthread.dylib` |
|  66.6% |  108 MiB |     124 | `AllocateHeap`                            | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
|  66.6% |  108 MiB |      95 | `VMThread::run`                           | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
|  66.5% |  108 MiB |      74 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
|  33.0% | 53.7 MiB |     513 | `Chunk::operator new`                     | `libjvm.dylib`            |
|  33.0% | 53.6 MiB |     511 | `Arena::grow`                             | `libjvm.dylib`            |
|  33.0% | 53.6 MiB |     515 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
|   1.7% | 2.72 MiB |      83 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|   0.3% |  517 KiB |      31 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |    Size | Samples | Caller                                    | Location        |
| ----: | ------: | ------: | ----------------------------------------- | --------------- |
| 99.6% | 162 MiB |     642 | `os::malloc`                              | `libjvm.dylib`  |
|  0.3% | 468 KiB |      25 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% | 123 KiB |       7 | `readBytes`                               | `libjava.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                 | Location       |
| ----: | -------: | ------: | ---------------------- | -------------- |
| 66.9% |  108 MiB |     124 | `AllocateHeap`         | `libjvm.dylib` |
| 33.1% | 53.7 MiB |     513 | `Chunk::operator new`  | `libjvm.dylib` |
| <0.1% |  8.3 KiB |       4 | `AnyObj::operator new` | `libjvm.dylib` |
| <0.1% |     18 B |       1 | `os::strdup`           | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 162 MiB |     622 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 162 MiB |     622 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 162 MiB |     622 | `thread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.8% |  108 MiB |      72 | `G1FullGCMarker::G1FullGCMarker`                                                                                                                                                                                                                         | `libjvm.dylib` |
|  0.1% |   72 KiB |       9 | `HeapRegionClaimer::HeapRegionClaimer`                                                                                                                                                                                                                   | `libjvm.dylib` |
| <0.1% | 48.7 KiB |       7 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
| <0.1% |   34 KiB |       5 | `G1RemSetScanState::prepare`                                                                                                                                                                                                                             | `libjvm.dylib` |
| <0.1% |   32 KiB |       4 | `G1EvacFailureRegions::pre_collection`                                                                                                                                                                                                                   | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Caller          | Location       |
| -----: | ------: | ------: | --------------- | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `Thread::call_run` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      74 | `VM_G1CollectFull::doit` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      74 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 53.6 MiB |     511 | `Arena::grow`  | `libjvm.dylib` |
|  <0.1% |   20 KiB |       2 | `Arena::Arena` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 62.6% | 33.6 MiB |     224 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 24.9% | 13.4 MiB |     113 | `PhaseIFG::init`             | `libjvm.dylib` |
|  5.1% | 2.72 MiB |      83 | `Arena::Arealloc`            | `libjvm.dylib` |
|  2.6% | 1.37 MiB |      30 | `PhaseLive::compute`         | `libjvm.dylib` |
|  1.9% | 1.04 MiB |      12 | `Matcher::xform`             | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 53.6 MiB |     515 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 53.6 MiB |     515 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 53.6 MiB |     515 | `Thread::call_run` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 64.4% | 1.75 MiB |      54 | `Node_Array::grow`         | `libjvm.dylib` |
|  8.0% |  224 KiB |       7 | `PhaseIdealLoop::set_idom` | `libjvm.dylib` |
|  6.9% |  192 KiB |       5 | `Block_Array::grow`        | `libjvm.dylib` |
|  4.6% |  128 KiB |       4 | `Type_Array::grow`         | `libjvm.dylib` |
|  4.6% |  128 KiB |       4 | `Node::out_grow`           | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |    Size | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 517 KiB |      31 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 162 MiB |     642 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 66.9% |  108 MiB |      95 | `VMThread::run`                 | `libjvm.dylib` |
| 33.1% | 53.6 MiB |     515 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% | 15.4 KiB |      11 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 8.06 KiB |       1 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 162 MiB |     622 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 162 MiB |     622 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 162 MiB |     622 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 108 MiB |     124 | `os::malloc` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                            | Location       |
| ----: | ------: | ------: | --------------------------------- | -------------- |
| 99.9% | 108 MiB |      74 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  0.1% | 142 KiB |      21 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                           | Location       |
| -----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 100.0% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  <0.1% |  32 KiB |       2 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1FullGCMarker::G1FullGCMarker` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 53.7 MiB |     513 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 53.6 MiB |     511 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.5% | 53.4 MiB |     503 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.5% |  260 KiB |      12 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 53.6 MiB |     515 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 53.6 MiB |     515 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.72 MiB |      83 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 90.6% |  468 KiB |      25 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  9.4% | 48.5 KiB |       6 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 66.5% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run`                                                                                                                                                                                                                                                                               |
| 12.1% | 19.7 MiB |     131 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                      |
|  8.6% | 13.9 MiB |      93 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                          |
|  8.2% | 13.4 MiB |     113 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                     |
|  0.8% | 1.37 MiB |      30 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                 |
|  0.6% | 1.04 MiB |      12 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                      |
|  0.3% |  416 KiB |      13 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                |
|  0.2% |  288 KiB |       9 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                |
|  0.2% |  256 KiB |       8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                |
|  0.2% |  256 KiB |       8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                            |
|  0.1% |  192 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                              |
|  0.1% |  160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                    |
|  0.1% |  160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                             |
|  0.1% |  160 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                           |
|  0.1% |  122 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                |
|  0.1% |   96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                |
|  0.1% |   96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Invariance::clone_nodes` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|  0.1% |   96 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIterGVN::transform` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                      |
|  0.1% | 95.9 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `LinearScan::create_interval` ← `LinearScan::add_use` ← `LinearScan::build_intervals` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                      |
| <0.1% |   64 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                     |
