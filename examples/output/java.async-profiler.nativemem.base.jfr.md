# Allocated native memory profile

Allocated 168 MiB over 691 samples (248 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 168 MiB |     691 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 167 MiB (99.5%) thread_start at libsystem_pthread.dylib
    └── 167 MiB (99.5%) _pthread_start
        └── 167 MiB (99.5%) thread_native_entry at libjvm.dylib
            └── 167 MiB (99.5%) Thread::call_run
                ├── 108 MiB (64.5%) VMThread::run
                │   └── 108 MiB (64.5%) VMThread::inner_execute
                │       └── 108 MiB (64.5%) VMThread::evaluate_operation
                │           └── 108 MiB (64.5%) VM_Operation::evaluate
                │               └── 108 MiB (64.5%) VM_G1CollectFull::doit
                │                   └── 108 MiB (64.5%) G1CollectedHeap::do_full_collection
                │                       └── 108 MiB (64.5%) G1FullCollector::G1FullCollector
                │                           └── 108 MiB (64.5%) G1FullGCMarker::G1FullGCMarker
                │                               └── 108 MiB (64.5%) AllocateHeap
                │                                   └── 108 MiB (64.5%) os::malloc
                │                                       └── 108 MiB (64.5%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
                └── 58.6 MiB (35.0%) JavaThread::thread_main_inner
                    └── 58.6 MiB (35.0%) CompileBroker::compiler_thread_loop
                        └── 58.6 MiB (35.0%) CompileBroker::invoke_compiler_on_method
                            └── 58.5 MiB (34.9%) C2Compiler::compile_method
                                └── 58.5 MiB (34.9%) Compile::Compile
                                    ├── 35.4 MiB (21.2%) Compile::Optimize
                                    │   ├── 18.9 MiB (11.3%) PhaseIdealLoop::optimize
                                    │   │   └── 18.9 MiB (11.3%) PhaseIdealLoop::PhaseIdealLoop
                                    │   │       └── 18.9 MiB (11.3%) PhaseIdealLoop::build_and_optimize
                                    │   │           ├── … 17.7 MiB (10.6%) Chunk::operator new at libjvm.dylib
                                    │   │           │   └── 17.7 MiB (10.6%) os::malloc
                                    │   │           │       └── 17.7 MiB (10.6%) malloc_hook at libasyncProfiler.dylib
                                    │   │           └── 512 KiB (0.3%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
                                    │   └── … 15.5 MiB (9.2%) os::malloc at libjvm.dylib
                                    │       └── 15.5 MiB (9.2%) malloc_hook at libasyncProfiler.dylib
                                    └── 22.5 MiB (13.4%) Compile::Code_Gen
                                        ├── 19.9 MiB (11.9%) PhaseChaitin::Register_Allocate
                                        │   ├── 18 MiB (10.7%) PhaseIFG::init
                                        │   │   └── 18 MiB (10.7%) Arena::grow
                                        │   │       └── 18 MiB (10.7%) Chunk::operator new
                                        │   │           └── 18 MiB (10.7%) os::malloc
                                        │   │               └── 18 MiB (10.7%) malloc_hook at libasyncProfiler.dylib
                                        │   └── … 1.63 MiB (1.0%) malloc_hook at libasyncProfiler.dylib
                                        └── 2.51 MiB (1.5%) Matcher::match
                                            └── … 1.39 MiB (0.8%) malloc_hook at libasyncProfiler.dylib
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function      | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 168 MiB |     691 | `malloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.6% |  167 MiB |     661 | `os::malloc`                              | `libjvm.dylib`  |
|  0.4% |  612 KiB |      25 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| <0.1% | 34.3 KiB |       2 | `readBytes`                               | `libjava.dylib` |
| <0.1% |   32 KiB |       1 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% | 6.99 KiB |       1 | `inflateInit2_`                           | `libzip.dylib`  |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% |  168 MiB |     691 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.6% |  167 MiB |     661 | `os::malloc`                               | `libjvm.dylib`            |
|  99.5% |  167 MiB |     637 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.5% |  167 MiB |     637 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.5% |  167 MiB |     637 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.5% |  167 MiB |     637 | `thread_start`                             | `libsystem_pthread.dylib` |
|  64.6% |  108 MiB |     128 | `AllocateHeap`                             | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VMThread::run`                            | `libjvm.dylib`            |
|  64.5% |  108 MiB |      75 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
|  64.5% |  108 MiB |      75 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |
|  64.5% |  108 MiB |      74 | `G1FullCollector::G1FullCollector`         | `libjvm.dylib`            |
|  64.5% |  108 MiB |      73 | `G1FullGCMarker::G1FullGCMarker`           | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     532 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     532 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     532 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     530 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     530 | `Arena::grow`                              | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                                           | Location                  |
| -----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 100.0% |  168 MiB |     691 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
|  99.6% |  167 MiB |     661 | `os::malloc`                                                       | `libjvm.dylib`            |
|  99.5% |  167 MiB |     637 | `Thread::call_run`                                                 | `libjvm.dylib`            |
|  99.5% |  167 MiB |     637 | `thread_native_entry`                                              | `libjvm.dylib`            |
|  99.5% |  167 MiB |     637 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
|  99.5% |  167 MiB |     637 | `thread_start`                                                     | `libsystem_pthread.dylib` |
|  64.6% |  108 MiB |     128 | `AllocateHeap`                                                     | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VM_Operation::evaluate`                                           | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VMThread::evaluate_operation`                                     | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VMThread::inner_execute`                                          | `libjvm.dylib`            |
|  64.5% |  108 MiB |      92 | `VMThread::run`                                                    | `libjvm.dylib`            |
|  64.5% |  108 MiB |      75 | `G1CollectedHeap::do_full_collection`                              | `libjvm.dylib`            |
|  64.5% |  108 MiB |      75 | `VM_G1CollectFull::doit`                                           | `libjvm.dylib`            |
|  64.5% |  108 MiB |      74 | `G1FullCollector::G1FullCollector`                                 | `libjvm.dylib`            |
|  64.5% |  108 MiB |      73 | `G1FullGCMarker::G1FullGCMarker`                                   | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     532 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     530 | `Chunk::operator new`                                              | `libjvm.dylib`            |
|  35.0% | 58.6 MiB |     530 | `Arena::grow`                                                      | `libjvm.dylib`            |
|   1.1% | 1.78 MiB |      52 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|   0.4% |  768 KiB |      23 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.6% |  167 MiB |     661 | `os::malloc`                              | `libjvm.dylib`  |
|  0.4% |  612 KiB |      25 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| <0.1% | 34.3 KiB |       2 | `readBytes`                               | `libjava.dylib` |
| <0.1% |   32 KiB |       1 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% | 6.99 KiB |       1 | `inflateInit2_`                           | `libzip.dylib`  |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                      | Location       |
| ----: | -------: | ------: | --------------------------- | -------------- |
| 64.9% |  108 MiB |     128 | `AllocateHeap`              | `libjvm.dylib` |
| 35.1% | 58.6 MiB |     530 | `Chunk::operator new`       | `libjvm.dylib` |
| <0.1% | 16.1 KiB |       2 | `AnyObj::operator new`      | `libjvm.dylib` |
| <0.1% |    144 B |       1 | `os::malloc`                | `libjvm.dylib` |
| <0.1% |    144 B |       1 | `JvmtiEnv::GetClassMethods` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 167 MiB |     637 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 167 MiB |     637 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 167 MiB |     637 | `thread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.8% |  108 MiB |      72 | `G1FullGCMarker::G1FullGCMarker`                                                                                                                                                                                                                         | `libjvm.dylib` |
|  0.1% | 56.2 KiB |       9 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
|  0.1% |   56 KiB |       7 | `G1RemSetScanState::prepare`                                                                                                                                                                                                                             | `libjvm.dylib` |
| <0.1% |   48 KiB |       6 | `HeapRegionClaimer::HeapRegionClaimer`                                                                                                                                                                                                                   | `libjvm.dylib` |
| <0.1% | 19.6 KiB |       6 | `Deoptimization::fetch_unroll_info_helper`                                                                                                                                                                                                               | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      92 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      92 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Caller          | Location       |
| -----: | ------: | ------: | --------------- | -------------- |
| 100.0% | 108 MiB |      92 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 108 MiB |      92 | `Thread::call_run` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      75 | `VM_G1CollectFull::doit` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      75 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      73 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 58.6 MiB |     532 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 58.6 MiB |     532 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 58.6 MiB |     532 | `Thread::call_run` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 58.6 MiB |     530 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 56.7% | 33.2 MiB |     223 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 30.6% |   18 MiB |     131 | `PhaseIFG::init`             | `libjvm.dylib` |
|  3.0% | 1.78 MiB |      52 | `Arena::Arealloc`            | `libjvm.dylib` |
|  2.8% | 1.63 MiB |      33 | `PhaseLive::compute`         | `libjvm.dylib` |
|  2.4% | 1.39 MiB |      16 | `Matcher::xform`             | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                           | Location       |
| ----: | ------: | ------: | -------------------------------- | -------------- |
| 52.6% | 960 KiB |      28 | `Node_Array::grow`               | `libjvm.dylib` |
| 12.3% | 224 KiB |       6 | `Block_Array::grow`              | `libjvm.dylib` |
| 10.5% | 192 KiB |       6 | `PhaseIdealLoop::set_idom`       | `libjvm.dylib` |
|  5.3% |  96 KiB |       2 | `PhaseIterGVN::transform`        | `libjvm.dylib` |
|  5.3% |  96 KiB |       2 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 768 KiB |      23 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 167 MiB |     661 | `malloc_hook` | `libasyncProfiler.dylib` |
|  <0.1% |   144 B |       1 | `os::malloc`  | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 64.8% |  108 MiB |      92 | `VMThread::run`                 | `libjvm.dylib` |
| 35.1% | 58.6 MiB |     532 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% | 12.8 KiB |      11 | `WorkerThread::run`             | `libjvm.dylib` |
| <0.1% | 8.06 KiB |       1 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |
| <0.1% |     40 B |       1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 167 MiB |     637 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 167 MiB |     637 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 167 MiB |     637 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 108 MiB |     128 | `os::malloc` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                            | Location       |
| ----: | ------: | ------: | --------------------------------- | -------------- |
| 99.9% | 108 MiB |      75 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  0.1% | 116 KiB |      17 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      92 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      92 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      92 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      74 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |
|  <0.1% |   8 KiB |       1 | `G1FullCollector::collect`         | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 108 MiB |      73 | `G1FullGCMarker::G1FullGCMarker` | `libjvm.dylib` |
|  <0.1% |  16 KiB |       1 | `AllocateHeap`                   | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                           | Location       |
| -----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 100.0% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  <0.1% |  16 KiB |       1 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.7% | 58.5 MiB |     525 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.3% |  163 KiB |       7 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 58.6 MiB |     532 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 58.6 MiB |     532 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 58.6 MiB |     530 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 58.6 MiB |     530 | `Chunk::operator new` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.78 MiB |      52 | `Arena::grow` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 768 KiB |      23 | `Arena::grow` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 64.5% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 10.7% |   18 MiB |     131 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10.6% | 17.7 MiB |     118 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  9.2% | 15.5 MiB |     105 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 1.63 MiB |      33 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.8% | 1.39 MiB |      16 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% |  572 KiB |      10 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |  512 KiB |      16 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  256 KiB |       7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  224 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |  160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  160 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  128 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |   96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseMacroExpand::expand_macro_nodes` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |   96 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIterGVN::transform` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% | 83.6 KiB |       1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`) ← `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x000000c0010e7168`) ← `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`) ← `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x000000c0010d97d8`) ← `applyArgument(String, Object, Option)` (`scopt.OptionDef`) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (`scopt.ORunner$`) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000c001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| <0.1% | 82.2 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000c001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <0.1% |   73 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseCFG::build_dominator_tree` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
