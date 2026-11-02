# Allocated native memory profile

Allocated 156 MiB over 609 samples (262 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 156 MiB |     609 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 155 MiB (99.5%) thread_start at libsystem_pthread.dylib
    └── 155 MiB (99.5%) _pthread_start
        └── 155 MiB (99.5%) thread_native_entry at libjvm.dylib
            └── 155 MiB (99.5%) Thread::call_run
                ├── 108 MiB (69.4%) VMThread::run
                │   └── 108 MiB (69.4%) VMThread::inner_execute
                │       └── 108 MiB (69.4%) VMThread::evaluate_operation
                │           └── 108 MiB (69.4%) VM_Operation::evaluate
                │               └── 108 MiB (69.3%) VM_G1CollectFull::doit
                │                   └── 108 MiB (69.3%) G1CollectedHeap::do_full_collection
                │                       └── 108 MiB (69.3%) G1FullCollector::G1FullCollector
                │                           └── 108 MiB (69.3%) G1FullGCMarker::G1FullGCMarker
                │                               └── 108 MiB (69.3%) AllocateHeap
                │                                   └── 108 MiB (69.3%) os::malloc
                │                                       └── 108 MiB (69.3%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
                └── 46.9 MiB (30.1%) JavaThread::thread_main_inner
                    └── 46.9 MiB (30.1%) CompileBroker::compiler_thread_loop
                        └── 46.9 MiB (30.1%) CompileBroker::invoke_compiler_on_method
                            └── 46.8 MiB (30.0%) C2Compiler::compile_method
                                └── 46.8 MiB (30.0%) Compile::Compile
                                    ├── 31.6 MiB (20.3%) Compile::Optimize
                                    │   ├── 16.7 MiB (10.7%) PhaseIdealLoop::optimize
                                    │   │   └── 16.7 MiB (10.7%) PhaseIdealLoop::PhaseIdealLoop
                                    │   │       └── 16.7 MiB (10.7%) PhaseIdealLoop::build_and_optimize
                                    │   │           ├── 15.6 MiB (10.0%) PhaseIdealLoop::Dominators
                                    │   │           │   └── 15.6 MiB (10.0%) Arena::grow
                                    │   │           │       └── 15.6 MiB (10.0%) Chunk::operator new
                                    │   │           │           └── 15.6 MiB (10.0%) os::malloc
                                    │   │           │               └── 15.6 MiB (10.0%) malloc_hook at libasyncProfiler.dylib
                                    │   │           └── 416 KiB (0.3%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
                                    │   └── … 13.9 MiB (8.9%) Chunk::operator new at libjvm.dylib
                                    │       └── 13.9 MiB (8.9%) os::malloc
                                    │           └── 13.9 MiB (8.9%) malloc_hook at libasyncProfiler.dylib
                                    └── 14.6 MiB (9.4%) Compile::Code_Gen
                                        ├── 12.8 MiB (8.2%) PhaseChaitin::Register_Allocate
                                        │   ├── … 11.5 MiB (7.4%) malloc_hook at libasyncProfiler.dylib
                                        │   └── … 1.11 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
                                        └── 1.77 MiB (1.1%) Matcher::match
                                            └── 1.37 MiB (0.9%) Matcher::xform
                                                └── 791 KiB (0.5%) Arena::grow
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function       | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 156 MiB |     606 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   896 B |       3 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.6% |  155 MiB |     580 | `os::malloc`                              | `libjvm.dylib`  |
|  0.3% |  539 KiB |      22 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| <0.1% |   64 KiB |       2 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% | 21.5 KiB |       1 | `readBytes`                               | `libjava.dylib` |
| <0.1% | 1.74 KiB |       1 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 896 B |       3 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% |  156 MiB |     606 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.6% |  155 MiB |     580 | `os::malloc`                               | `libjvm.dylib`            |
|  99.5% |  155 MiB |     555 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.5% |  155 MiB |     555 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.5% |  155 MiB |     555 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.5% |  155 MiB |     555 | `thread_start`                             | `libsystem_pthread.dylib` |
|  69.4% |  108 MiB |     125 | `AllocateHeap`                             | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VMThread::run`                            | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `G1FullGCMarker::G1FullGCMarker`           | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `G1FullCollector::G1FullCollector`         | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |
|  30.2% |   47 MiB |     450 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  30.2% |   47 MiB |     450 | `Arena::grow`                              | `libjvm.dylib`            |
|  30.1% | 46.9 MiB |     448 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  30.1% | 46.9 MiB |     448 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  30.1% | 46.9 MiB |     448 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  156 MiB |     606 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.6% |  155 MiB |     580 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.5% |  155 MiB |     555 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.5% |  155 MiB |     555 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.5% |  155 MiB |     555 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.5% |  155 MiB |     555 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  69.4% |  108 MiB |     125 | `AllocateHeap`                                                     | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VM_Operation::evaluate`                                           | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VMThread::evaluate_operation`                                     | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VMThread::inner_execute`                                          | `libjvm.dylib`            |
|  69.4% |  108 MiB |      99 | `VMThread::run`                                                    | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `G1FullGCMarker::G1FullGCMarker`                                   | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `G1FullCollector::G1FullCollector`                                 | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `G1CollectedHeap::do_full_collection`                              | `libjvm.dylib`            |
|  69.3% |  108 MiB |      75 | `VM_G1CollectFull::doit`                                           | `libjvm.dylib`            |
|  30.2% |   47 MiB |     450 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  30.2% |   47 MiB |     450 | `Arena::grow`                                                      | `libjvm.dylib`            |
|  30.1% | 46.9 MiB |     448 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|   1.0% | 1.63 MiB |      49 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   0.4% |  640 KiB |      16 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.6% |  155 MiB |     580 | `os::malloc`                              | `libjvm.dylib`  |
|  0.3% |  539 KiB |      22 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| <0.1% |   64 KiB |       2 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% | 21.5 KiB |       1 | `readBytes`                               | `libjava.dylib` |
| <0.1% | 1.74 KiB |       1 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 69.7% |  108 MiB |     125 | `AllocateHeap`              | `libjvm.dylib` |
| 30.3% |   47 MiB |     450 | `Chunk::operator new`       | `libjvm.dylib` |
| <0.1% | 16.3 KiB |       4 | `AnyObj::operator new`      | `libjvm.dylib` |
| <0.1% |     56 B |       1 | `os::malloc`                | `libjvm.dylib` |
| <0.1% |     56 B |       1 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 155 MiB |     555 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 155 MiB |     555 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 155 MiB |     555 | `thread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.8% |  108 MiB |      72 | `G1FullGCMarker::G1FullGCMarker`                                                                                                                                                                                                                         | `libjvm.dylib` |
|  0.1% |   88 KiB |      11 | `HeapRegionClaimer::HeapRegionClaimer`                                                                                                                                                                                                                   | `libjvm.dylib` |
| <0.1% |   48 KiB |       3 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache`                                                                                                                                                                                                         | `libjvm.dylib` |
| <0.1% | 42.6 KiB |      12 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
| <0.1% |   32 KiB |       4 | `G1EvacFailureRegions::pre_collection`                                                                                                                                                                                                                   | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      99 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      99 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Caller          | Location       |
| -----: | ------: | ------: | --------------- | -------------- |
| 100.0% | 108 MiB |      99 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 108 MiB |      99 | `Thread::call_run` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      75 | `VM_G1CollectFull::doit` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      75 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |   Size | Samples | Caller        | Location       |
| -----: | -----: | ------: | ------------- | -------------- |
| 100.0% | 47 MiB |     450 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 62.8% | 29.5 MiB |     205 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 24.5% | 11.5 MiB |      92 | `PhaseIFG::init`             | `libjvm.dylib` |
|  3.5% | 1.63 MiB |      49 | `Arena::Arealloc`            | `libjvm.dylib` |
|  2.4% | 1.11 MiB |      22 | `PhaseLive::compute`         | `libjvm.dylib` |
|  1.6% |  791 KiB |      12 | `Matcher::xform`             | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 46.9 MiB |     448 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 46.9 MiB |     448 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 46.9 MiB |     448 | `Thread::call_run` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 67.3% | 1.09 MiB |      34 | `Node_Array::grow`               | `libjvm.dylib` |
|  7.7% |  128 KiB |       4 | `Block_Array::grow`              | `libjvm.dylib` |
|  7.7% |  128 KiB |       3 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  7.7% |  128 KiB |       4 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  5.8% |   96 KiB |       2 | `Type_Array::grow`               | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 640 KiB |      16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 155 MiB |     580 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |    56 B |       1 | `os::malloc`  | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 69.7% |  108 MiB |      99 | `VMThread::run`                 | `libjvm.dylib` |
| 30.3% | 46.9 MiB |     448 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% | 9.16 KiB |       7 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 8.06 KiB |       1 | `JavaThread::post_run`          | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 155 MiB |     555 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 155 MiB |     555 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 155 MiB |     555 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 108 MiB |     125 | `os::malloc` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                            | Location       |
| ----: | ------: | ------: | --------------------------------- | -------------- |
| 99.9% | 108 MiB |      75 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  0.1% | 157 KiB |      24 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      99 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      99 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      99 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                           | Location       |
| -----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 100.0% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  <0.1% |  48 KiB |       3 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1FullGCMarker::G1FullGCMarker` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |   Size | Samples | Callee       | Location       |
| -----: | -----: | ------: | ------------ | -------------- |
| 100.0% | 47 MiB |     450 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |   Size | Samples | Callee                | Location       |
| -----: | -----: | ------: | --------------------- | -------------- |
| 100.0% | 47 MiB |     450 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.6% | 46.8 MiB |     442 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.3% |  160 KiB |       5 | `Compiler::compile_method`   | `libjvm.dylib` |
|  0.1% |   32 KiB |       1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 46.9 MiB |     448 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 46.9 MiB |     448 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.63 MiB |      49 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 640 KiB |      16 | `Arena::grow` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 69.3% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 10.0% | 15.6 MiB |     105 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.9% | 13.9 MiB |     100 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  7.4% | 11.5 MiB |      92 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% | 1.11 MiB |      22 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% |  791 KiB |      12 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% |  416 KiB |      10 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  321 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  320 KiB |       9 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |  224 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  192 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  192 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |  160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |  128 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |   96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% | 86.4 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000d001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000d001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% | 83.6 KiB |       1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`) ← `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x000000d0010e7168`) ← `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`) ← `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x000000d0010d97d8`) ← `applyArgument(String, Object, Option)` (`scopt.OptionDef`) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (`scopt.ORunner$`) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000d001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000d001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| <0.1% | 72.8 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   64 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::insert_proj` ← `PhaseChaitin::split_DEF` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
