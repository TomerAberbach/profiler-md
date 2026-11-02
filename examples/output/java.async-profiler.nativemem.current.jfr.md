# Allocated native memory profile

Allocated 160 MiB over 638 samples (257 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 160 MiB |     638 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 159 MiB (99.4%) thread_start at libsystem_pthread.dylib
│   └── 159 MiB (99.4%) _pthread_start
│       └── 159 MiB (99.4%) thread_native_entry at libjvm.dylib
│           └── 159 MiB (99.4%) Thread::call_run
│               ├── 108 MiB (67.7%) VMThread::run
│               │   └── 108 MiB (67.7%) VMThread::inner_execute
│               │       └── 108 MiB (67.7%) VMThread::evaluate_operation
│               │           └── 108 MiB (67.7%) VM_Operation::evaluate
│               │               └── 108 MiB (67.6%) VM_G1CollectFull::doit
│               │                   └── 108 MiB (67.6%) G1CollectedHeap::do_full_collection
│               │                       └── 108 MiB (67.6%) G1FullCollector::G1FullCollector
│               │                           └── 108 MiB (67.6%) G1FullGCMarker::G1FullGCMarker
│               │                               └── 108 MiB (67.6%) AllocateHeap
│               │                                   └── 108 MiB (67.6%) os::malloc
│               │                                       └── 108 MiB (67.6%, self 100.0% globally) malloc_hook at libasyncProfiler.dylib
│               └── 50.7 MiB (31.7%) JavaThread::thread_main_inner
│                   └── 50.7 MiB (31.7%) CompileBroker::compiler_thread_loop
│                       └── 50.7 MiB (31.7%) CompileBroker::invoke_compiler_on_method
│                           └── 50.3 MiB (31.4%) C2Compiler::compile_method
│                               └── 50.3 MiB (31.4%) Compile::Compile
│                                   ├── 31.6 MiB (19.7%) Compile::Optimize
│                                   │   ├── 16.4 MiB (10.3%) PhaseIdealLoop::optimize
│                                   │   │   └── 16.3 MiB (10.2%) PhaseIdealLoop::PhaseIdealLoop
│                                   │   │       └── 16.3 MiB (10.2%) PhaseIdealLoop::build_and_optimize
│                                   │   │           └── 15.6 MiB (9.7%) PhaseIdealLoop::Dominators
│                                   │   │               └── 15.6 MiB (9.7%) Arena::grow
│                                   │   │                   └── 15.6 MiB (9.7%) Chunk::operator new
│                                   │   │                       └── 15.6 MiB (9.7%) os::malloc
│                                   │   │                           └── 15.6 MiB (9.7%) malloc_hook at libasyncProfiler.dylib
│                                   │   └── … 14.3 MiB (8.9%) malloc_hook at libasyncProfiler.dylib
│                                   └── 18.3 MiB (11.4%) Compile::Code_Gen
│                                       ├── 16.3 MiB (10.2%) PhaseChaitin::Register_Allocate
│                                       │   ├── 15.1 MiB (9.4%) PhaseIFG::init
│                                       │   │   └── 15.1 MiB (9.4%) Arena::grow
│                                       │   │       └── 15.1 MiB (9.4%) Chunk::operator new
│                                       │   │           └── 15.1 MiB (9.4%) os::malloc
│                                       │   │               └── 15.1 MiB (9.4%) malloc_hook at libasyncProfiler.dylib
│                                       │   └── … 871 KiB (0.5%) malloc_hook at libasyncProfiler.dylib
│                                       └── … 1.14 MiB (0.7%) malloc_hook at libasyncProfiler.dylib
└── … 736 KiB (0.4%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
```

## Hottest functions

### Self size

Functions with the most native bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |    Size | Samples | Function       | Location                 |
| -----: | ------: | ------: | -------------- | ------------------------ |
| 100.0% | 160 MiB |     637 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  <0.1% |   192 B |       1 | `realloc_hook` | `libasyncProfiler.dylib` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.4% |  159 MiB |     599 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% |  773 KiB |      29 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% |  128 KiB |       4 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% | 52.9 KiB |       3 | `readBytes`                               | `libjava.dylib` |
| <0.1% | 1.63 KiB |       2 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |  Size | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 192 B |       1 | `os::realloc` | `libjvm.dylib` |

### Total size

Functions with the most native bytes allocated within the function and its callees.

|      % |     Size | Samples | Function                                   | Location                  |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------- |
| 100.0% |  160 MiB |     637 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
|  99.4% |  159 MiB |     599 | `os::malloc`                               | `libjvm.dylib`            |
|  99.4% |  159 MiB |     580 | `Thread::call_run`                         | `libjvm.dylib`            |
|  99.4% |  159 MiB |     580 | `thread_native_entry`                      | `libjvm.dylib`            |
|  99.4% |  159 MiB |     580 | `_pthread_start`                           | `libsystem_pthread.dylib` |
|  99.4% |  159 MiB |     580 | `thread_start`                             | `libsystem_pthread.dylib` |
|  67.7% |  108 MiB |     127 | `AllocateHeap`                             | `libjvm.dylib`            |
|  67.7% |  108 MiB |      96 | `VMThread::inner_execute`                  | `libjvm.dylib`            |
|  67.7% |  108 MiB |      96 | `VMThread::run`                            | `libjvm.dylib`            |
|  67.7% |  108 MiB |      95 | `VM_Operation::evaluate`                   | `libjvm.dylib`            |
|  67.7% |  108 MiB |      95 | `VMThread::evaluate_operation`             | `libjvm.dylib`            |
|  67.6% |  108 MiB |      76 | `G1FullCollector::G1FullCollector`         | `libjvm.dylib`            |
|  67.6% |  108 MiB |      76 | `G1CollectedHeap::do_full_collection`      | `libjvm.dylib`            |
|  67.6% |  108 MiB |      76 | `VM_G1CollectFull::doit`                   | `libjvm.dylib`            |
|  67.6% |  108 MiB |      75 | `G1FullGCMarker::G1FullGCMarker`           | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     470 | `Chunk::operator new`                      | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     470 | `Arena::grow`                              | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     472 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     472 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     472 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Native

|      % |     Size | Samples | Function                                  | Location                  |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------- |
| 100.0% |  160 MiB |     637 | `malloc_hook`                             | `libasyncProfiler.dylib`  |
|  99.4% |  159 MiB |     599 | `os::malloc`                              | `libjvm.dylib`            |
|  99.4% |  159 MiB |     580 | `Thread::call_run`                        | `libjvm.dylib`            |
|  99.4% |  159 MiB |     580 | `thread_native_entry`                     | `libjvm.dylib`            |
|  99.4% |  159 MiB |     580 | `_pthread_start`                          | `libsystem_pthread.dylib` |
|  99.4% |  159 MiB |     580 | `thread_start`                            | `libsystem_pthread.dylib` |
|  67.7% |  108 MiB |     127 | `AllocateHeap`                            | `libjvm.dylib`            |
|  67.7% |  108 MiB |      96 | `VMThread::inner_execute`                 | `libjvm.dylib`            |
|  67.7% |  108 MiB |      96 | `VMThread::run`                           | `libjvm.dylib`            |
|  67.7% |  108 MiB |      95 | `VM_Operation::evaluate`                  | `libjvm.dylib`            |
|  67.7% |  108 MiB |      95 | `VMThread::evaluate_operation`            | `libjvm.dylib`            |
|  67.6% |  108 MiB |      76 | `G1FullCollector::G1FullCollector`        | `libjvm.dylib`            |
|  67.6% |  108 MiB |      76 | `G1CollectedHeap::do_full_collection`     | `libjvm.dylib`            |
|  67.6% |  108 MiB |      76 | `VM_G1CollectFull::doit`                  | `libjvm.dylib`            |
|  67.6% |  108 MiB |      75 | `G1FullGCMarker::G1FullGCMarker`          | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     470 | `Chunk::operator new`                     | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     470 | `Arena::grow`                             | `libjvm.dylib`            |
|  31.7% | 50.7 MiB |     472 | `JavaThread::thread_main_inner`           | `libjvm.dylib`            |
|   1.1% | 1.69 MiB |      49 | `Arena::Arealloc`                         | `libjvm.dylib`            |
|   0.5% |  792 KiB |      39 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`           |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location        |
| ----: | -------: | ------: | ----------------------------------------- | --------------- |
| 99.4% |  159 MiB |     599 | `os::malloc`                              | `libjvm.dylib`  |
|  0.5% |  773 KiB |      29 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
|  0.1% |  128 KiB |       4 | `updatewindow`                            | `libzip.dylib`  |
| <0.1% | 52.9 KiB |       3 | `readBytes`                               | `libjava.dylib` |
| <0.1% | 1.63 KiB |       2 | `Java_java_lang_ClassLoader_defineClass0` | `libjava.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                 | Location       |
| ----: | -------: | ------: | ---------------------- | -------------- |
| 68.1% |  108 MiB |     127 | `AllocateHeap`         | `libjvm.dylib` |
| 31.9% | 50.7 MiB |     470 | `Chunk::operator new`  | `libjvm.dylib` |
| <0.1% | 16.1 KiB |       2 | `AnyObj::operator new` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 159 MiB |     580 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Caller           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 159 MiB |     580 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Caller         | Location                  |
| -----: | ------: | ------: | -------------- | ------------------------- |
| 100.0% | 159 MiB |     580 | `thread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|     % |    Size | Samples | Caller                                           | Location       |
| ----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 99.8% | 108 MiB |      72 | `G1FullGCMarker::G1FullGCMarker`                 | `libjvm.dylib` |
|  0.1% |  72 KiB |       9 | `HeapRegionClaimer::HeapRegionClaimer`           | `libjvm.dylib` |
| <0.1% |  48 KiB |       3 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |
| <0.1% |  26 KiB |       4 | `G1RemSetScanState::prepare`                     | `libjvm.dylib` |
| <0.1% |  24 KiB |       3 | `G1EvacFailureRegions::pre_collection`           | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Caller          | Location       |
| -----: | ------: | ------: | --------------- | -------------- |
| 100.0% | 108 MiB |      96 | `VMThread::run` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Caller             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 108 MiB |      96 | `Thread::call_run` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::evaluate_operation` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      76 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      76 | `VM_G1CollectFull::doit` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      76 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Caller                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 50.7 MiB |     470 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 58.9% | 29.8 MiB |     210 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |
| 29.8% | 15.1 MiB |     119 | `PhaseIFG::init`             | `libjvm.dylib` |
|  3.3% | 1.69 MiB |      49 | `Arena::Arealloc`            | `libjvm.dylib` |
|  2.3% | 1.14 MiB |      15 | `Matcher::xform`             | `libjvm.dylib` |
|  1.7% |  871 KiB |      17 | `PhaseLive::compute`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 50.7 MiB |     472 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Caller                          | Location       |
| -----: | -------: | ------: | ------------------------------- | -------------- |
| 100.0% | 50.7 MiB |     472 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Caller             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 50.7 MiB |     472 | `Thread::call_run` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|     % |     Size | Samples | Caller                     | Location       |
| ----: | -------: | ------: | -------------------------- | -------------- |
| 68.5% | 1.16 MiB |      34 | `Node_Array::grow`         | `libjvm.dylib` |
|  9.3% |  160 KiB |       3 | `Block_Array::grow`        | `libjvm.dylib` |
|  7.4% |  128 KiB |       4 | `PhaseIdealLoop::set_idom` | `libjvm.dylib` |
|  3.7% |   64 KiB |       2 | `Node::out_grow`           | `libjvm.dylib` |
|  1.9% |   32 KiB |       1 | `PhaseCFG::build_cfg`      | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|      % |    Size | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% | 792 KiB |      39 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `os::malloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location                 |
| -----: | ------: | ------: | ------------- | ------------------------ |
| 100.0% | 159 MiB |     599 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 68.1% |  108 MiB |      96 | `VMThread::run`                 | `libjvm.dylib` |
| 31.9% | 50.7 MiB |     472 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| <0.1% | 8.06 KiB |       1 | `JavaThread::post_run`          | `libjvm.dylib` |
| <0.1% | 8.06 KiB |       1 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |
| <0.1% | 5.87 KiB |      10 | `WorkerThread::run`             | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 159 MiB |     580 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 159 MiB |     580 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 159 MiB |     580 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |    Size | Samples | Callee       | Location       |
| -----: | ------: | ------: | ------------ | -------------- |
| 100.0% | 108 MiB |     127 | `os::malloc` | `libjvm.dylib` |

##### `VMThread::inner_execute` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                         | Location       |
| -----: | ------: | ------: | ------------------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `VMThread::evaluate_operation` | `libjvm.dylib` |
|  <0.1% |    96 B |       1 | `outputStream::print`          | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                    | Location       |
| -----: | ------: | ------: | ------------------------- | -------------- |
| 100.0% | 108 MiB |      96 | `VMThread::inner_execute` | `libjvm.dylib` |

##### `VM_Operation::evaluate` (`libjvm.dylib`)

|     % |    Size | Samples | Callee                            | Location       |
| ----: | ------: | ------: | --------------------------------- | -------------- |
| 99.9% | 108 MiB |      76 | `VM_G1CollectFull::doit`          | `libjvm.dylib` |
|  0.1% | 122 KiB |      19 | `VM_G1CollectForAllocation::doit` | `libjvm.dylib` |

##### `VMThread::evaluate_operation` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                   | Location       |
| -----: | ------: | ------: | ------------------------ | -------------- |
| 100.0% | 108 MiB |      95 | `VM_Operation::evaluate` | `libjvm.dylib` |

##### `G1FullCollector::G1FullCollector` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                           | Location       |
| -----: | ------: | ------: | -------------------------------- | -------------- |
| 100.0% | 108 MiB |      75 | `G1FullGCMarker::G1FullGCMarker` | `libjvm.dylib` |
|  <0.1% |   976 B |       1 | `AllocateHeap`                   | `libjvm.dylib` |

##### `G1CollectedHeap::do_full_collection` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                             | Location       |
| -----: | ------: | ------: | ---------------------------------- | -------------- |
| 100.0% | 108 MiB |      76 | `G1FullCollector::G1FullCollector` | `libjvm.dylib` |

##### `VM_G1CollectFull::doit` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                | Location       |
| -----: | ------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 108 MiB |      76 | `G1CollectedHeap::do_full_collection` | `libjvm.dylib` |

##### `G1FullGCMarker::G1FullGCMarker` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                           | Location       |
| -----: | ------: | ------: | ------------------------------------------------ | -------------- |
| 100.0% | 108 MiB |      72 | `AllocateHeap`                                   | `libjvm.dylib` |
|  <0.1% |  48 KiB |       3 | `G1RegionMarkStatsCache::G1RegionMarkStatsCache` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 50.7 MiB |     470 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 50.7 MiB |     470 | `Chunk::operator new` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                       | Location       |
| ----: | -------: | ------: | ---------------------------- | -------------- |
| 99.2% | 50.3 MiB |     458 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.8% |  420 KiB |      14 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                     | Location       |
| -----: | -------: | ------: | ------------------------------------------ | -------------- |
| 100.0% | 50.7 MiB |     472 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% | 50.7 MiB |     472 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 1.69 MiB |      49 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 97.6% |  773 KiB |      29 | `malloc_hook`               | `libasyncProfiler.dylib` |
|  2.4% | 19.3 KiB |      10 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

## Hottest call stacks

Call stacks with the most native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 67.6% |  108 MiB |      72 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  9.7% | 15.6 MiB |     112 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  9.4% | 15.1 MiB |     119 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  8.9% | 14.3 MiB |      98 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.7% | 1.14 MiB |      15 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.5% |  871 KiB |      17 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |  334 KiB |       5 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  320 KiB |      10 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  256 KiB |       8 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  224 KiB |       7 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  192 KiB |       6 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  160 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  128 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  128 KiB |       3 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |  128 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `LinearScan::create_interval` ← `LinearScan::add_use` ← `LinearScan::build_intervals` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |  128 KiB |       4 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |   96 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |   96 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Block_Array::grow` ← `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% | 86.4 KiB |       2 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% | 83.7 KiB |       1 | `malloc_hook` (`libasyncProfiler.dylib`) ← `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`) ← `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`) ← `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7548`) ← `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`) ← `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x00000070010d8800`) ← `applyArgument(String, Object, Option)` (`scopt.OptionDef`) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (`scopt.ORunner$`) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
