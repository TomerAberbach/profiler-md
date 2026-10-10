# Allocated native memory profile

Allocated 1.6 GiB over 621,888 samples (2.7 KiB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| Native   | 100.0% | 1.6 GiB | 621,888 |

## Call tree

The call paths to the hottest functions by self size, merged into a tree of callers. Each frame shows the native bytes allocated in it and its callees, as a share of the profile and as a value. `[[n frames hidden]]` stands for the callers between two of them, whose share the line above it states. `n more branches` counts the callees on no such path, each standing for everything below it, and states their total and the largest of them. `(n% self across m call paths)` states the self size of a function across every call path to it, where the path drawn to it holds only part.

```
├── 1.4 GiB (87.4%) [[6 frames hidden in 2 sources]]
│   └── 1.4 GiB (87.2%) CompileBroker::invoke_compiler_on_method  libjvm.dylib
│       ├── 1.37 GiB (85.3%) C2Compiler::compile_method
│       │   └── 1.37 GiB (85.3%) Compile::Compile
│       │       ├── 609 MiB (37.1%) Compile::Code_Gen
│       │       │   ├── 470 MiB (28.6%) PhaseChaitin::Register_Allocate
│       │       │   │   ├── 335 MiB (20.4%) [[4 frames hidden in 1 source]]
│       │       │   │   │   └── 335 MiB (20.4%) malloc_hook  libasyncProfiler.dylib  (99.8% self across 138,975 call paths)
│       │       │   │   └── 135 MiB (8.2%) 9 more branches, hottest PhaseLive::compute
│       │       │   └── 139 MiB (8.5%) 9 more branches, hottest Matcher::match
│       │       └── 790 MiB (48.1%) 12 more branches, hottest Compile::Optimize
│       └── 31.6 MiB (1.9%) 6 more branches, hottest Compiler::compile_method
└── 202 MiB (12.3%) main(String[])  org.jetbrains.kotlin.preloading.Preloader
    └── 202 MiB (12.3%) run(String[])
        ├── 137 MiB (8.3%) [[25 frames hidden in 14 sources]]
        │   └── 121 MiB (7.4%) phaseBody(PipelineContext, PipelineArtifact)  org.jetbrains.kotlin.cli.pipeline.PipelinePhase
        │       ├── 83.7 MiB (5.1%) executePhase(PipelineArtifact)  org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase
        │       │   └── 83.7 MiB (5.1%) executePhase(ConfigurationPipelineArtifact)
        │       │       ├── 37.8 MiB (2.3%) [[2 frames hidden in 2 sources]]
        │       │       │   └── 28.6 MiB (1.7%) process(List)  org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor
        │       │       │       ├── 16.8 MiB (1.0%) processFile(FirFile)  org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor
        │       │       │       │   └── 16.8 MiB (1.0%) transform(FirTransformer, Object)  org.jetbrains.kotlin.fir.declarations.FirFile
        │       │       │       │       ├── 6.43 MiB (0.4%) [[69 frames hidden in 22 sources]]
        │       │       │       │       │   └── 197 KiB (<0.1%) realloc_hook  libasyncProfiler.dylib
        │       │       │       │       └── 10.4 MiB (0.6%) 9 more branches, hottest transformFile(FirFile, Object)  org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter
        │       │       │       └── 11.8 MiB (0.7%) 3 more branches, hottest process(Collection)  org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor
        │       │       ├── 20.4 MiB (1.2%) prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)
        │       │       │   ├── 3.53 MiB (0.2%) [[20 frames hidden in 12 sources]]
        │       │       │   │   └── 32 KiB (<0.1%) calloc_hook  libasyncProfiler.dylib
        │       │       │   └── 16.9 MiB (1.0%) 8 more branches, hottest prepareSessions$default(SessionConstructionUtils, List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4, int, Object)  org.jetbrains.kotlin.cli.common.SessionConstructionUtils
        │       │       └── 25.5 MiB (1.6%) 22 more branches, hottest createEnvironmentAndSources(CompilerConfiguration, Disposable, String)
        │       └── 37.7 MiB (2.3%) 5 more branches, hottest executePhase(PipelineArtifact)  org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
        └── 65 MiB (4.0%) 18 more branches, hottest preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)  org.jetbrains.kotlin.preloading.ClassPreloadingUtils
```

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

#### Categories

##### Native

|     % |     Size | Samples | Function       | Location                 |
| ----: | -------: | ------: | -------------- | ------------------------ |
| 99.8% |  1.6 GiB | 611,293 | `malloc_hook`  | `libasyncProfiler.dylib` |
|  0.1% | 2.15 MiB |   9,858 | `realloc_hook` | `libasyncProfiler.dylib` |
|  0.1% | 1.24 MiB |     737 | `calloc_hook`  | `libasyncProfiler.dylib` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `malloc_hook` (`libasyncProfiler.dylib`)

|     % |     Size | Samples | Caller                                    | Location          |
| ----: | -------: | ------: | ----------------------------------------- | ----------------- |
| 90.8% | 1.45 GiB | 546,928 | `os::malloc`                              | `libjvm.dylib`    |
|  4.0% | 65.8 MiB |  10,151 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`   |
|  3.9% | 64.1 MiB |     133 | `readBytes`                               | `libjava.dylib`   |
|  0.8% | 12.5 MiB |     401 | `updatewindow`                            | `libzip.dylib`    |
|  0.2% |  3.1 MiB |     550 | `CCalloc`                                 | `libverify.dylib` |

##### `realloc_hook` (`libasyncProfiler.dylib`)

|      % |     Size | Samples | Caller        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 2.15 MiB |   9,858 | `os::realloc` | `libjvm.dylib` |

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
| 99.8% |  1.6 GiB | 611,293 | `malloc_hook`                              | `libasyncProfiler.dylib`  |
| 90.6% | 1.45 GiB | 546,928 | `os::malloc`                               | `libjvm.dylib`            |
| 87.4% |  1.4 GiB | 132,875 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 87.4% |  1.4 GiB | 132,875 | `thread_start`                             | `libsystem_pthread.dylib` |
| 87.4% |  1.4 GiB | 132,722 | `Thread::call_run`                         | `libjvm.dylib`            |
| 87.4% |  1.4 GiB | 132,722 | `thread_native_entry`                      | `libjvm.dylib`            |
| 87.2% |  1.4 GiB | 106,412 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 87.2% |  1.4 GiB | 105,603 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 87.2% |  1.4 GiB | 105,326 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| 86.7% | 1.39 GiB |  18,004 | `Chunk::operator new`                      | `libjvm.dylib`            |
| 86.7% | 1.39 GiB |  17,937 | `Arena::grow`                              | `libjvm.dylib`            |
| 85.3% | 1.37 GiB |  27,142 | `Compile::Compile`                         | `libjvm.dylib`            |
| 85.3% | 1.37 GiB |  27,142 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| 45.0% |  739 MiB |   9,027 | `Compile::Optimize`                        | `libjvm.dylib`            |
| 40.9% |  671 MiB |   7,644 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib`            |
| 40.5% |  665 MiB |   7,529 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib`            |
| 40.5% |  665 MiB |   7,528 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib`            |
| 37.1% |  609 MiB |  15,087 | `Compile::Code_Gen`                        | `libjvm.dylib`            |
| 28.6% |  470 MiB |   4,816 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib`            |
| 28.2% |  462 MiB |   3,077 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`            |

#### Categories

##### Native

|     % |     Size | Samples | Function                                                           | Location                  |
| ----: | -------: | ------: | ------------------------------------------------------------------ | ------------------------- |
| 99.8% |  1.6 GiB | 611,293 | `malloc_hook`                                                      | `libasyncProfiler.dylib`  |
| 90.6% | 1.45 GiB | 546,928 | `os::malloc`                                                       | `libjvm.dylib`            |
| 87.4% |  1.4 GiB | 132,875 | `_pthread_start`                                                   | `libsystem_pthread.dylib` |
| 87.4% |  1.4 GiB | 132,875 | `thread_start`                                                     | `libsystem_pthread.dylib` |
| 87.4% |  1.4 GiB | 132,722 | `Thread::call_run`                                                 | `libjvm.dylib`            |
| 87.4% |  1.4 GiB | 132,722 | `thread_native_entry`                                              | `libjvm.dylib`            |
| 87.2% |  1.4 GiB | 106,412 | `JavaThread::thread_main_inner`                                    | `libjvm.dylib`            |
| 86.7% | 1.39 GiB |  18,004 | `Chunk::operator new`                                              | `libjvm.dylib`            |
| 86.7% | 1.39 GiB |  17,937 | `Arena::grow`                                                      | `libjvm.dylib`            |
| 13.8% |  227 MiB |   4,762 | `Arena::Arealloc`                                                  | `libjvm.dylib`            |
|  6.5% |  106 MiB | 268,898 | `Java_java_lang_ClassLoader_defineClass1`                          | `libjava.dylib`           |
|  3.9% | 64.1 MiB |     133 | `readBytes`                                                        | `libjava.dylib`           |
|  3.6% | 59.3 MiB | 459,732 | `AllocateHeap`                                                     | `libjvm.dylib`            |
|  2.8% | 45.4 MiB |     986 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib`            |
|  2.5% | 40.8 MiB | 248,047 | `KlassFactory::create_from_stream`                                 | `libjvm.dylib`            |
|  2.4% | 40.1 MiB | 259,142 | `jvm_define_class_common`                                          | `libjvm.dylib`            |
|  2.4% | 40.1 MiB | 259,142 | `JVM_DefineClassWithSource`                                        | `libjvm.dylib`            |
|  2.4% | 40.1 MiB | 259,132 | `SystemDictionary::resolve_class_from_stream`                      | `libjvm.dylib`            |
|  2.2% | 36.4 MiB |     887 | `Parse::Parse`                                                     | `libjvm.dylib`            |
|  2.2% | 36.4 MiB |     887 | `ParseGenerator::generate`                                         | `libjvm.dylib`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `os::malloc` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 1.45 GiB | 546,928 | `malloc_hook` | `libasyncProfiler.dylib` |
|   0.1% |  980 KiB |  11,894 | `os::malloc`  | `libjvm.dylib`           |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee                | Location       |
| -----: | ------: | ------: | --------------------- | -------------- |
| 100.0% | 1.4 GiB | 132,722 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |  56 KiB |     153 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % |    Size | Samples | Callee           | Location                  |
| -----: | ------: | ------: | ---------------- | ------------------------- |
| 100.0% | 1.4 GiB | 132,875 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                          | Location       |
| ----: | -------: | ------: | ------------------------------- | -------------- |
| 99.7% |  1.4 GiB | 106,412 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  0.2% | 2.39 MiB |  17,465 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.1% | 1.32 MiB |   8,544 | `VMThread::run`                 | `libjvm.dylib` |
| <0.1% | 90.2 KiB |      45 | `JavaThread::post_run`          | `libjvm.dylib` |
| <0.1% | 89.3 KiB |      33 | `ThreadsSMRSupport::smr_delete` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % |    Size | Samples | Callee             | Location       |
| -----: | ------: | ------: | ------------------ | -------------- |
| 100.0% | 1.4 GiB | 132,722 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                | Location       |
| -----: | -------: | ------: | ------------------------------------- | -------------- |
| 100.0% |  1.4 GiB | 105,603 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  <0.1% | 39.3 KiB |     809 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                                         | Location       |
| -----: | ------: | ------: | ---------------------------------------------- | -------------- |
| 100.0% | 1.4 GiB | 105,326 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  <0.1% | 139 KiB |     274 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  <0.1% |  24 KiB |       3 | `CompileQueue::get`                            | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                              | Location       |
| ----: | -------: | ------: | ----------------------------------- | -------------- |
| 97.8% | 1.37 GiB |  27,142 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  2.2% | 31.4 MiB |  65,561 | `Compiler::compile_method`          | `libjvm.dylib` |
| <0.1% |  184 KiB |  12,603 | `CompilationLog::log_compile`       | `libjvm.dylib` |
| <0.1% | 64.9 KiB |       3 | `ciEnv::ciEnv`                      | `libjvm.dylib` |
| <0.1% | 3.47 KiB |      12 | `JavaThread::push_jni_handle_block` | `libjvm.dylib` |

##### `Chunk::operator new` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 1.39 GiB |  18,004 | `os::malloc` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                | Location       |
| -----: | -------: | ------: | --------------------- | -------------- |
| 100.0% | 1.39 GiB |  17,937 | `Chunk::operator new` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                   | Location       |
| ----: | -------: | ------: | ---------------------------------------- | -------------- |
| 52.8% |  739 MiB |   9,027 | `Compile::Optimize`                      | `libjvm.dylib` |
| 43.6% |  609 MiB |  15,087 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  2.5% | 35.6 MiB |     871 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  0.8% | 11.3 MiB |     185 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.2% | 2.84 MiB |      52 | `NodeHash::NodeHash`                     | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % |     Size | Samples | Callee             | Location       |
| -----: | -------: | ------: | ------------------ | -------------- |
| 100.0% | 1.37 GiB |  27,142 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                 | Location       |
| ----: | -------: | ------: | -------------------------------------- | -------------- |
| 50.5% |  373 MiB |   4,518 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 40.3% |  298 MiB |   3,126 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  2.0% | 15.1 MiB |     349 | `PhaseCCP::do_transform`               | `libjvm.dylib` |
|  1.7% | 12.3 MiB |     218 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  1.6% | 11.7 MiB |     233 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                           | Location       |
| ----: | -------: | ------: | -------------------------------- | -------------- |
| 99.1% |  665 MiB |   7,529 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  0.9% | 6.01 MiB |     115 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % |    Size | Samples | Callee                               | Location       |
| -----: | ------: | ------: | ------------------------------------ | -------------- |
| 100.0% | 665 MiB |   7,528 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  <0.1% |  32 KiB |       1 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                                             | Location       |
| ----: | -------: | ------: | ------------------------------------------------------------------ | -------------- |
| 69.5% |  462 MiB |   3,077 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  7.0% | 46.3 MiB |   1,021 | `Node_Array::grow`                                                 | `libjvm.dylib` |
|  6.8% |   45 MiB |     981 | `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` | `libjvm.dylib` |
|  4.9% | 32.3 MiB |     624 | `Arena::grow`                                                      | `libjvm.dylib` |
|  4.7% |   31 MiB |     732 | `IdealLoopTree::loop_predication`                                  | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                            | Location       |
| ----: | -------: | ------: | --------------------------------- | -------------- |
| 77.1% |  470 MiB |   4,816 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.2% |  111 MiB |   1,769 | `Matcher::match`                  | `libjvm.dylib` |
|  1.9% | 11.6 MiB |     226 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.3% |  7.8 MiB |     492 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.0% | 6.34 MiB |     125 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                     | Location       |
| ----: | -------: | ------: | ------------------------------------------ | -------------- |
| 71.2% |  335 MiB |   2,839 | `PhaseIFG::init`                           | `libjvm.dylib` |
| 24.5% |  115 MiB |   1,517 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  1.9% | 8.85 MiB |     196 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  0.6% | 2.88 MiB |      59 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  0.5% | 2.53 MiB |      81 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 462 MiB |   3,077 | `Arena::grow` | `libjvm.dylib` |

##### `Arena::Arealloc` (`libjvm.dylib`)

|      % |    Size | Samples | Callee        | Location       |
| -----: | ------: | ------: | ------------- | -------------- |
| 100.0% | 227 MiB |   4,762 | `Arena::grow` | `libjvm.dylib` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % |     Size | Samples | Callee                      | Location                 |
| ----: | -------: | ------: | --------------------------- | ------------------------ |
| 62.1% | 65.8 MiB |  10,151 | `malloc_hook`               | `libasyncProfiler.dylib` |
| 37.9% | 40.1 MiB | 258,747 | `JVM_DefineClassWithSource` | `libjvm.dylib`           |

##### `readBytes` (`libjava.dylib`)

|      % |     Size | Samples | Callee        | Location                 |
| -----: | -------: | ------: | ------------- | ------------------------ |
| 100.0% | 64.1 MiB |     133 | `malloc_hook` | `libasyncProfiler.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|      % |     Size | Samples | Callee       | Location       |
| -----: | -------: | ------: | ------------ | -------------- |
| 100.0% | 59.3 MiB | 459,732 | `os::malloc` | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` (`libjvm.dylib`)

|      % |     Size | Samples | Callee        | Location       |
| -----: | -------: | ------: | ------------- | -------------- |
| 100.0% | 45.4 MiB |     986 | `Arena::grow` | `libjvm.dylib` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                        | Location       |
| ----: | -------: | ------: | --------------------------------------------- | -------------- |
| 85.7% |   35 MiB | 216,537 | `ClassFileParser::ClassFileParser`            | `libjvm.dylib` |
| 14.3% | 5.85 MiB |  31,595 | `ClassFileParser::create_instance_klass`      | `libjvm.dylib` |
| <0.1% | 1.64 KiB |       3 | `JfrEventClassTransformer::on_klass_creation` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                                        | Location       |
| -----: | -------: | ------: | --------------------------------------------- | -------------- |
| 100.0% | 40.1 MiB | 259,125 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
|  <0.1% |    994 B |      17 | `SymbolTable::do_add_if_needed`               | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|      % |     Size | Samples | Callee                    | Location       |
| -----: | -------: | ------: | ------------------------- | -------------- |
| 100.0% | 40.1 MiB | 259,142 | `jvm_define_class_common` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                                    | Location       |
| ----: | -------: | ------: | ----------------------------------------- | -------------- |
| 99.1% | 39.8 MiB | 238,650 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  0.8% |  348 KiB |  19,948 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |
| <0.1% | 16.6 KiB |     500 | `SystemDictionary::find_or_define_helper` | `libjvm.dylib` |
| <0.1% | 6.04 KiB |      34 | `ClassLoaderDataGraph::add`               | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % |     Size | Samples | Callee                    | Location       |
| ----: | -------: | ------: | ------------------------- | -------------- |
| 99.7% | 36.3 MiB |     864 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  7.5% | 2.72 MiB |      53 | `Parse::build_exits`      | `libjvm.dylib` |
|  2.3% |  864 KiB |      20 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|  2.1% |  800 KiB |      19 | `Parse::do_exits`         | `libjvm.dylib` |
|  1.3% |  480 KiB |      14 | `Parse::create_entry_map` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % |     Size | Samples | Callee         | Location       |
| -----: | -------: | ------: | -------------- | -------------- |
| 100.0% | 36.4 MiB |     887 | `Parse::Parse` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.4% |  335 MiB |   2,839 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 15.5% |  254 MiB |   1,774 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                             |
| 12.7% |  208 MiB |   1,303 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
|  6.9% |  114 MiB |   1,472 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.4% |   55 MiB |     110 | `malloc_hook` (`libasyncProfiler.dylib`) ← `readBytes` (`libjava.dylib`) ← `readBytes(byte[], int, int)` (`java.io.FileInputStream`) ← `read(byte[], int, int)` ← `fill()` (`java.io.BufferedInputStream`) ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `fill()` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  2.3% | 38.3 MiB |     405 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.8% | 29.5 MiB |     401 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Matcher::find_shared` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |   25 MiB |     596 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                   |
|  1.4% | 23.7 MiB |     556 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 21.3 MiB |     425 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                       |
|  1.3% | 21.3 MiB |     425 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `GrowableArrayWithAllocator<long, GrowableArray<long>>::expand_to` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                           |
|  1.0% | 16.9 MiB |     323 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                |
|  0.9% | 15.4 MiB |     301 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                            |
|  0.9% | 14.8 MiB |     340 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% | 11.5 MiB |     261 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% | 11.2 MiB |     183 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Compile::identify_useful_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 9.44 MiB |     224 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                    |
|  0.6% | 9.35 MiB |     153 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `NodeHash::hash_find_insert` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% | 9.31 MiB |     135 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node::out_grow` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 6.85 MiB |     159 | `malloc_hook` (`libasyncProfiler.dylib`) ← `os::malloc` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::split_thru_region` ← `PhaseIdealLoop::do_split_if` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                            |
