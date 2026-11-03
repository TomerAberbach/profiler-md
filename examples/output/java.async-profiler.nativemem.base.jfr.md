# Allocated native memory profile

Allocated 167 MiB over 674 samples (254 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 167 MiB |     674 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 166 MiB (99.6%) thread_start at libsystem_pthread.dylib
    └── 166 MiB (99.6%) _pthread_start
        └── 166 MiB (99.6%) thread_native_entry at libjvm.dylib
            └── 166 MiB (99.6%) Thread::call_run
                ├── 108 MiB (64.8%) VMThread::run
                │   └── 108 MiB (64.8%) VMThread::inner_execute
                │       └── 108 MiB (64.8%) VMThread::evaluate_operation
                │           └── 108 MiB (64.8%) VM_Operation::evaluate
                │               └── 108 MiB (64.8%) VM_G1CollectFull::doit
                │                   └── 108 MiB (64.8%) G1CollectedHeap::do_full_collection
                │                       └── 108 MiB (64.7%) G1FullCollector::G1FullCollector
                │                           └── 108 MiB (64.7%) G1FullGCMarker::G1FullGCMarker
                │                               └── 108 MiB (64.7%) AllocateHeap
                │                                   └── 108 MiB (64.7%) os::malloc
                │                                       └── 108 MiB (64.7%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
                └── 58 MiB (34.8%) JavaThread::thread_main_inner
                    └── 58 MiB (34.8%) CompileBroker::compiler_thread_loop
                        └── 58 MiB (34.8%) CompileBroker::invoke_compiler_on_method
                            └── 58 MiB (34.7%) C2Compiler::compile_method
                                └── 58 MiB (34.7%) Compile::Compile
                                    ├── 36.3 MiB (21.7%) Compile::Optimize
                                    │   ├── 19.4 MiB (11.6%) PhaseIdealLoop::optimize
                                    │   │   └── 19.4 MiB (11.6%) PhaseIdealLoop::PhaseIdealLoop
                                    │   │       └── 19.4 MiB (11.6%) PhaseIdealLoop::build_and_optimize
                                    │   │           ├── 18.4 MiB (11.0%) PhaseIdealLoop::Dominators
                                    │   │           │   └── 18.4 MiB (11.0%) Arena::grow
                                    │   │           │       └── 18.4 MiB (11.0%) Chunk::operator new
                                    │   │           │           └── 18.4 MiB (11.0%) os::malloc
                                    │   │           │               └── 18.4 MiB (11.0%) malloc_hook at libasyncProfiler.dylib
                                    │   │           └── 192 KiB (0.1%) GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to
                                    │   └── … 16.3 MiB (9.8%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
                                    │       ├── … 15.3 MiB (9.2%) malloc_hook at libasyncProfiler.dylib
                                    │       └── 480 KiB (0.3%) Node_Array::grow
                                    └── 21 MiB (12.6%) Compile::Code_Gen
                                        ├── 18.8 MiB (11.3%) PhaseChaitin::Register_Allocate
                                        │   ├── … 17.5 MiB (10.5%) malloc_hook at libasyncProfiler.dylib
                                        │   └── … 1.12 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
                                        └── 2.17 MiB (1.3%) Matcher::match
                                            ├── … 1,017 KiB (0.6%) malloc_hook at libasyncProfiler.dylib
                                            └── 728 KiB (0.4%) Matcher::find_shared
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function       | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 167 MiB |     673 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   192 B |       1 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.7% |  166 MiB |     648 | `os::malloc`                              | `libjvm.dylib`  |
|  0.3% |  463 KiB |      21 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| <0.1% | 56.8 KiB |       4 | `readBytes`                               | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 192 B |       1 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% |  167 MiB |     673 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.7% |  166 MiB |     648 | `os::malloc`                               | `libjvm.dylib`            |
|  99.6% |  166 MiB |     624 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.6% |  166 MiB |     624 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.6% |  166 MiB |     624 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.6% |  166 MiB |     624 | `thread_start`                             | `libsystem_pthread.dylib` |
|  64.9% |  108 MiB |     126 | `AllocateHeap`                             | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VMThread::run`                            | `libjvm.dylib`            |
|  64.8% |  108 MiB |      78 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
|  64.8% |  108 MiB |      78 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |
|  64.7% |  108 MiB |      76 | `G1FullGCMarker::G1FullGCMarker`           | `libjvm.dylib`            |
|  64.7% |  108 MiB |      76 | `G1FullCollector::G1FullCollector`         | `libjvm.dylib`            |
|  34.8% | 58.1 MiB |     514 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  34.8% | 58.1 MiB |     514 | `Arena::grow`                              | `libjvm.dylib`            |
|  34.8% |   58 MiB |     515 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  34.8% |   58 MiB |     515 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  34.8% |   58 MiB |     515 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                              | Location                  |
| -----: | -------: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |  167 MiB |     673 | `malloc_hook`                         | `libasyncProfiler.dylib`  |
|  99.7% |  166 MiB |     648 | `os::malloc`                          | `libjvm.dylib`            |
|  99.6% |  166 MiB |     624 | `Thread::call_run`                    | `libjvm.dylib`            |
|  99.6% |  166 MiB |     624 | `thread_native_entry`                 | `libjvm.dylib`            |
|  99.6% |  166 MiB |     624 | `_pthread_start`                      | `libsystem_pthread.dylib` |
|  99.6% |  166 MiB |     624 | `thread_start`                        | `libsystem_pthread.dylib` |
|  64.9% |  108 MiB |     126 | `AllocateHeap`                        | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VM_Operation::evaluate`              | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VMThread::evaluate_operation`        | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VMThread::inner_execute`             | `libjvm.dylib`            |
|  64.8% |  108 MiB |     100 | `VMThread::run`                       | `libjvm.dylib`            |
|  64.8% |  108 MiB |      78 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib`            |
|  64.8% |  108 MiB |      78 | `VM_G1CollectFull::doit`              | `libjvm.dylib`            |
|  64.7% |  108 MiB |      76 | `G1FullGCMarker::G1FullGCMarker`      | `libjvm.dylib`            |
|  64.7% |  108 MiB |      76 | `G1FullCollector::G1FullCollector`    | `libjvm.dylib`            |
|  34.8% | 58.1 MiB |     514 | `Chunk::operator new`                 | `libjvm.dylib`            |
|  34.8% | 58.1 MiB |     514 | `Arena::grow`                         | `libjvm.dylib`            |
|  34.8% |   58 MiB |     515 | `JavaThread::thread_main_inner`       | `libjvm.dylib`            |
|   1.3% | 2.19 MiB |      61 | `Arena::Arealloc`                     | `libjvm.dylib`            |
|   0.4% |  608 KiB |      18 | `Parse::do_one_block`                 | `libjvm.dylib`            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.7% |  166 MiB |     648 | `os::malloc`                              | `libjvm.dylib`  |
|  0.3% |  463 KiB |      21 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| <0.1% | 56.8 KiB |       4 | `readBytes`                               | `libjava.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                 | Location       |
| ----: | -------: | ------: | ---------------------- | -------------- |
| 65.1% |  108 MiB |     126 | `AllocateHeap`         | `libjvm.dylib` |
| 34.9% | 58.1 MiB |     514 | `Chunk::operator new`  | `libjvm.dylib` |
| <0.1% | 32.5 KiB |       7 | `AnyObj::operator new` | `libjvm.dylib` |
| <0.1% |    256 B |       1 | `os::realloc`          | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 166 MiB |     624 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 166 MiB |     624 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 166 MiB |     624 | `thread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.8% | 108 MiB |      72 | `G1FullGCMarker::G1FullGCMarker`                                                                                                                                                                                                                         | `libjvm.dylib` |
|  0.1% |  64 KiB |       4 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache`                                                                                                                                                                                                         | `libjvm.dylib` |
|  0.1% |  64 KiB |       8 | `HeapRegionClaimer::HeapRegionClaimer`                                                                                                                                                                                                                   | `libjvm.dylib` |
| <0.1% |  55 KiB |       9 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |
| <0.1% |  44 KiB |       7 | `G1RemSetScanState::prepare`                                                                                                                                                                                                                             | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |     100 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |     100 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Caller          | Location       |
| -----: | ------: | ------: | --------------- | -------------- |
| 100.0% | 108 MiB |     100 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 108 MiB |     100 | `Thread::call_run` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      78 | `VM_G1CollectFull::doit` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      78 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      76 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      76 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 58.1 MiB |     514 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |      Size | Samples | Caller                       | Location       |
| ----: | --------: | ------: | ---------------------------- | -------------- |
| 58.1% |  33.7 MiB |     216 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 30.1% |  17.5 MiB |     131 | `PhaseIFG::init`             | `libjvm.dylib` |
|  3.8% |  2.19 MiB |      61 | `Arena::Arealloc`            | `libjvm.dylib` |
|  1.9% |  1.12 MiB |      24 | `PhaseLive::compute`         | `libjvm.dylib` |
|  1.7% | 1,017 KiB |      13 | `Matcher::xform`             | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                                | Location       |
| -----: | -----: | ------: | ------------------------------------- | -------------- |
| 100.0% | 58 MiB |     515 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |   Size | Samples | Caller                          | Location       |
| -----: | -----: | ------: | ------------------------------- | -------------- |
| 100.0% | 58 MiB |     515 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |   Size | Samples | Caller             | Location       |
| -----: | -----: | ------: | ------------------ | -------------- |
| 100.0% | 58 MiB |     515 | `Thread::call_run` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 64.3% | 1.41 MiB |      40 | `Node_Array::grow`         | `libjvm.dylib` |
| 11.4% |  256 KiB |       7 | `PhaseIdealLoop::set_idom` | `libjvm.dylib` |
|  8.6% |  192 KiB |       4 | `Type_Array::grow`         | `libjvm.dylib` |
|  4.3% |   96 KiB |       2 | `PhaseIterGVN::transform`  | `libjvm.dylib` |
|  4.3% | 95.9 KiB |       3 | `VectorSet::grow`          | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                 | Location       |
| -----: | ------: | ------: | ---------------------- | -------------- |
| 100.0% | 608 KiB |      18 | `Parse::do_all_blocks` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 166 MiB |     648 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 65.1% |  108 MiB |     100 | `VMThread::run`                 | `libjvm.dylib` |
| 34.9% |   58 MiB |     515 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% | 16.1 KiB |       2 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |
| <0.1% | 3.64 KiB |       7 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 166 MiB |     624 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 166 MiB |     624 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 166 MiB |     624 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 108 MiB |     126 | `os::malloc` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                            | Location       |
| ----: | ------: | ------: | --------------------------------- | -------------- |
| 99.9% | 108 MiB |      78 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  0.1% | 116 KiB |      22 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |     100 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |     100 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |     100 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                 | Location       |
| -----: | -------: | ------: | -------------------------------------- | -------------- |
| 100.0% |  108 MiB |      76 | `G1FullCollector::G1FullCollector`     | `libjvm.dylib` |
|  <0.1% | 8.02 KiB |       2 | `G1FullCollector::complete_collection` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      78 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                                           | Location       |
| ----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 99.9% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  0.1% |  64 KiB |       4 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 108 MiB |      76 | `G1FullGCMarker::G1FullGCMarker` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 58.1 MiB |     514 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 58.1 MiB |     514 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.9% |   58 MiB |     510 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.1% | 66.4 KiB |       5 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |   Size | Samples | Callee                                     | Location       |
| -----: | -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 58 MiB |     515 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |   Size | Samples | Callee                                | Location       |
| -----: | -----: | ------: | ------------------------------------- | -------------- |
| 100.0% | 58 MiB |     515 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.19 MiB |      61 | `Arena::grow` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                      | Location       |
| ----: | ------: | ------: | --------------------------- | -------------- |
| 94.7% | 576 KiB |      17 | `Parse::do_call`            | `libjvm.dylib` |
| 10.5% |  64 KiB |       2 | `Parse::array_store`        | `libjvm.dylib` |
| 10.5% |  64 KiB |       2 | `Parse::do_one_bytecode`    | `libjvm.dylib` |
| 10.5% |  64 KiB |       2 | `Parse::do_field_access`    | `libjvm.dylib` |
|  5.3% |  32 KiB |       1 | `GraphKit::access_store_at` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |      Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | --------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 64.7% |   108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 11.0% |  18.4 MiB |     114 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10.5% |  17.5 MiB |     131 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  9.2% |  15.3 MiB |     102 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.7% |  1.12 MiB |      24 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.6% | 1,017 KiB |      13 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% |   728 KiB |      13 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |   480 KiB |      12 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   224 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   192 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   192 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   160 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |   128 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |   103 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |    96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |    96 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |    96 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIterGVN::transform` ← `IfNode::Ideal_common` ← `IfNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |    96 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::create_new_if_for_predicate` ← `PhaseIdealLoop::loop_predication_impl_helper` ← `PhaseIdealLoop::loop_predication_impl` ← `IdealLoopTree::loop_predication` ← `IdealLoopTree::loop_predication` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |  95.9 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |  83.6 KiB |       1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`) ← `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000008010e7168`) ← `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`) ← `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x00000008010d97d8`) ← `applyArgument(String, Object, Option)` (`scopt.OptionDef`) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (`scopt.ORunner$`) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
