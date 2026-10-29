# Sampling profile

Collected 3,123 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 44.4% |   1,386 |
| Native            | 35.4% |   1,104 |
| Standard library  | 18.1% |     565 |
| JIT               |  1.1% |      35 |
| Ours              |  1.0% |      32 |
| Garbage collector | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 2,128 samples (68.1%) Thread::call_run at libjvm.dylib
│   ├── 2,018 samples (64.6%) JavaThread::thread_main_inner
│   │   └── 2,014 samples (64.5%) CompileBroker::compiler_thread_loop
│   │       ├── 1,862 samples (59.6%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 1,526 samples (48.9%) C2Compiler::compile_method
│   │       │   │   └── 1,520 samples (48.7%) Compile::Compile
│   │       │   │       ├── 725 samples (23.2%) Compile::Code_Gen
│   │       │   │       │   ├── 371 samples (11.9%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 78 samples (2.5%, self 1.0%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 5 samples (0.2%, self 0.9% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   │   └── 41 samples (1.3%) 18 more callees, led by (0.3%) PhaseChaitin::compute_initial_block_pressure
│   │       │   │       │   │   ├── 65 samples (2.1%, self 1.4%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 21 samples (0.7%) 12 more callees, led by (0.2%) MachNode::rematerialize
│   │       │   │       │   │   ├── 43 samples (1.4%, self 1.0%) PhaseChaitin::gather_lrg_masks
│   │       │   │       │   │   └── 185 samples (5.9%) 33 more callees, led by (1.3%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 354 samples (11.3%) 10 more callees, led by (4.2%) Matcher::match
│   │       │   │       ├── 545 samples (17.5%) Compile::Optimize
│   │       │   │       │   └── 544 samples (17.4%) 16 more callees, led by (4.8%) PhaseIdealLoop::optimize
│   │       │   │       └── 250 samples (8.0%) 8 more callees, led by (6.9%) ParseGenerator::generate
│   │       │   └── 336 samples (10.8%) 7 more callees, led by (9.8%) Compiler::compile_method
│   │       └── … 144 samples (4.6%) PlatformMonitor::wait at libjvm.dylib
│   │           └── 135 samples (4.3%, self 5.5% globally) __psynch_cvwait at libsystem_kernel.dylib
│   └── 110 samples (3.5%) 4 more callees, led by (2.6%) WorkerThread::run
├── … 954 samples (30.5%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x00000008010a1800
│   └── … 940 samples (30.1%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000000801088800
│       ├── … 663 samples (21.2%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│       │   └── 662 samples (21.2%) 6 more callees, led by (17.4%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│       └── … 271 samples (8.7%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│           ├── 212 samples (6.8%) fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])
│           │   ├── 183 samples (5.9%) setCallSiteTarget() at org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector
│           │   │   ├── … 97 samples (3.1%) make(byte, Class, MemberName, Class) at java.lang.invoke.DirectMethodHandle
│           │   │   │   └── … 92 samples (2.9%) resolve(MemberName, Class, int, boolean) at java.lang.invoke.MethodHandleNatives
│           │   │   │       └── … 74 samples (2.4%, self 0.6%) java_lang_Throwable::fill_in_stack_trace at libjvm.dylib
│           │   │   │           ├── … 16 samples (0.5%) Arena::grow at libjvm.dylib
│           │   │   │           │   └── … 15 samples (0.5%, self 4.1% globally) __psynch_mutexwait at libsystem_kernel.dylib
│           │   │   │           └── 9 samples (0.3%) frame::sender_for_compiled_frame
│           │   │   └── 71 samples (2.3%) 8 more callees, led by (0.8%) setGuards(Object)
│           │   └── 29 samples (0.9%) 3 more callees, led by (0.5%) setCallSiteTarget() at org.codehaus.groovy.vmplugin.v8.Selector$CastSelector
│           └── 59 samples (1.9%) 3 more callees, led by (1.8%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
└── 36 samples (1.2%) 9 more root frames, led by (0.5%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                   | Location                        |
| ---: | ------: | ------------------------------------------ | ------------------------------- |
| 5.5% |     172 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`        |
| 4.1% |     128 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib`        |
| 1.6% |      49 | `tlv_get_addr`                             | `libdyld.dylib`                 |
| 1.4% |      44 | `PhaseChaitin::Split`                      | `libjvm.dylib`                  |
| 1.0% |      32 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib`                  |
| 1.0% |      31 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib`                  |
| 0.9% |      27 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib`                  |
| 0.8% |      25 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`                  |
| 0.8% |      24 | `Node::dominates`                          | `libjvm.dylib`                  |
| 0.8% |      24 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib`                  |
| 0.7% |      23 | `PhaseIdealLoop::build_loop_early`         | `libjvm.dylib`                  |
| 0.7% |      22 | `invokeBasic(Object[])`                    | `java.lang.invoke.MethodHandle` |
| 0.6% |      20 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib`                  |
| 0.6% |      20 | `ciObjectFactory::get_metadata`            | `libjvm.dylib`                  |
| 0.6% |      20 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib`       |
| 0.6% |      19 | `cast(Object)`                             | `java.lang.Class`               |
| 0.5% |      16 | `Node_Backward_Iterator::next`             | `libjvm.dylib`                  |
| 0.5% |      16 | `Arena::contains`                          | `libjvm.dylib`                  |
| 0.5% |      16 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib`                  |
| 0.5% |      16 | `PhaseOutput::BuildOopMaps`                | `libjvm.dylib`                  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                             | Location       |
| ---: | ------: | ---------------------------------------------------- | -------------- |
| 1.4% |      44 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| 1.0% |      32 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| 1.0% |      31 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| 0.9% |      27 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| 0.8% |      24 | `Node::dominates`                                    | `libjvm.dylib` |
| 0.8% |      24 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
| 0.7% |      23 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| 0.6% |      20 | `PhaseIdealLoop::build_loop_late`                    | `libjvm.dylib` |
| 0.6% |      20 | `ciObjectFactory::get_metadata`                      | `libjvm.dylib` |
| 0.5% |      16 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
| 0.5% |      16 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| 0.5% |      16 | `PhaseOutput::BuildOopMaps`                          | `libjvm.dylib` |
| 0.4% |      14 | `PhaseIdealLoop::split_if_with_blocks`               | `libjvm.dylib` |
| 0.4% |      13 | `PhaseIterGVN::transform_old`                        | `libjvm.dylib` |
| 0.4% |      13 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| 0.4% |      13 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| 0.4% |      12 | `Compile::identify_useful_nodes`                     | `libjvm.dylib` |
| 0.4% |      12 | `Node::is_CFG`                                       | `libjvm.dylib` |
| 0.4% |      12 | `PhaseIterGVN::add_users_to_worklist`                | `libjvm.dylib` |
| 0.4% |      11 | `RegionNode::is_unreachable_from_root`               | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 5.5% |     172 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 4.1% |     128 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.6% |      49 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 0.8% |      25 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.6% |      20 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.5% |      16 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.5% |      16 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.5% |      16 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.5% |      15 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.5% |      15 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.4% |      14 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.4% |      12 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.4% |      11 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.3% |      10 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.3% |      10 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| 0.3% |      10 | `__psynch_cvbroad`                                                                                                                                       | `libsystem_kernel.dylib`   |
| 0.3% |      10 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       9 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.3% |       9 | `BacktraceBuilder::push`                                                                                                                                 | `libjvm.dylib`             |
| 0.3% |       8 | `nmethod::is_unloading`                                                                                                                                  | `libjvm.dylib`             |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                               |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 0.7% |      22 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                        |
| 0.6% |      19 | `cast(Object)`                                                                                                | `java.lang.Class`                                      |
| 0.5% |      16 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                              |
| 0.4% |      11 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.2% |       6 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.MethodHandle`                        |
| 0.2% |       6 | `getInCache(LambdaFormEditor$TransformKey)`                                                                   | `java.lang.invoke.LambdaFormEditor`                    |
| 0.2% |       6 | `collector(Object, Object, Object)`                                                                           | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`    |
| 0.2% |       5 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`   |
| 0.2% |       5 | `equals(Object)`                                                                                              | `java.lang.String`                                     |
| 0.1% |       4 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                    |
| 0.1% |       4 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`    |
| 0.1% |       4 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000080109ac00`    |
| 0.1% |       4 | `invokeSpecial(Object, Object, Object)`                                                                       | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       4 | `equals(Object, Object)`                                                                                      | `java.util.Objects`                                    |
| 0.1% |       4 | `isValidExactMethod(Class[], CachedClass[])`                                                                  | `org.codehaus.groovy.reflection.ParameterTypes`        |
| 0.1% |       4 | `invokeStatic(Object, Object, Object)`                                                                        | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       4 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000080109a400`    |
| 0.1% |       3 | `initialize()`                                                                                                | `groovy.lang.MetaClassImpl`                            |
| 0.1% |       3 | `invoke(Object, Object, Object)`                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`    |
| 0.1% |       3 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`           |

##### JIT

|     % | Samples | Function                    | Location    |
| ----: | ------: | --------------------------- | ----------- |
|  0.2% |       7 | `I2C/C2I adapters(0xb)`     | `<unknown>` |
|  0.2% |       7 | `itable stub`               | `<unknown>` |
|  0.2% |       6 | `vtable stub`               | `<unknown>` |
|  0.2% |       5 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
|  0.1% |       2 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |
|  0.1% |       2 | `I2C/C2I adapters(0xbba)`   | `<unknown>` |
|  0.1% |       2 | `I2C/C2I adapters(0xba)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbb)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xab)`    | `<unknown>` |
| <0.1% |       1 | `zero_blocks`               | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |

##### Ours

|     % | Samples | Function                                                  | Location                                                                       |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  0.1% |       3 | `collectViolations(SourceCode, RuleSet)`                  | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|  0.1% |       3 | `getAstVisitor()`                                         | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
|  0.1% |       2 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.naming.MethodNameAstVisitor`                                |
|  0.1% |       2 | `getSuppressionsByLineNumber(ModuleNode)`                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  0.1% |       2 | `getSourceCode()`                                         | `org.codenarc.rule.AbstractAstVisitor`                                         |
| <0.1% |       1 | `<init>()`                                                | `org.codenarc.rule.basic.BigDecimalInstantiationRule`                          |
| <0.1% |       1 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.AbstractAstVisitor`                                         |
| <0.1% |       1 | `getLines()`                                              | `org.codenarc.source.AbstractSourceCode`                                       |
| <0.1% |       1 | `visitClassComplete(ClassNode)`                           | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                |
| <0.1% |       1 | `<init>(String)`                                          | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                   |
| <0.1% |       1 | `eachImportLine(SourceCode, Closure)`                     | `org.codenarc.rule.imports.AbstractImportRule`                                 |
| <0.1% |       1 | `isChainedAppend(MethodCallExpression)`                   | `org.codenarc.rule.unnecessary.ConsecutiveLiteralAppendsAstVisitor`            |
| <0.1% |       1 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| <0.1% |       1 | `<init>()`                                                | `org.codenarc.rule.unnecessary.UnnecessaryDoubleInstantiationAstVisitor`       |
| <0.1% |       1 | `<init>()`                                                | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
| <0.1% |       1 | `visitClassEx(ClassNode)`                                 | `org.codenarc.rule.naming.PackageNameAstVisitor`                               |
| <0.1% |       1 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor`                            |
| <0.1% |       1 | `visitMethodEx(MethodNode)`                               | `org.codenarc.rule.naming.ParameterNameAstVisitor`                             |
| <0.1% |       1 | `isMethodCall(MethodCallExpression, List, List, Integer)` | `org.codenarc.util.AstUtil`                                                    |
| <0.1% |       1 | `packageNameForImport(ImportNode)`                        | `org.codenarc.util.ImportUtil`                                                 |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      19 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |      16 | `java.lang.reflect.Array:78` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 27.3% |       3 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1701` |
| 18.2% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1754` |
| 18.2% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1738` |
|  9.1% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1847` |
|  9.1% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:1809` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 66.7% |       4 | `java.lang.invoke.MethodHandle:479` |
| 33.3% |       2 | `java.lang.invoke.MethodHandle:480` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 33.3% |       2 | `java.lang.invoke.LambdaFormEditor:403` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:396` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:391` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:397` |
| 16.7% |       1 | `java.lang.invoke.LambdaFormEditor:383` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 60.0% |       3 | `java.lang.String:1850` |
| 20.0% |       1 | `java.lang.String:1847` |
| 20.0% |       1 | `java.lang.String:1852` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `java.util.HashMap:587` |
| 25.0% |       1 | `java.util.HashMap:580` |
| 25.0% |       1 | `java.util.HashMap:582` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|     % | Samples | Location                                               |
| ----: | ------: | ------------------------------------------------------ |
| 50.0% |       2 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:78` |
| 25.0% |       1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:86` |
| 25.0% |       1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:63` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       4 | `java.util.Objects:64` |

##### `isValidExactMethod(Class[], CachedClass[])` (`org.codehaus.groovy.reflection.ParameterTypes`)

|     % | Samples | Location                                            |
| ----: | ------: | --------------------------------------------------- |
| 75.0% |       3 | `org.codehaus.groovy.reflection.ParameterTypes:245` |
| 25.0% |       1 | `org.codehaus.groovy.reflection.ParameterTypes:244` |

##### `initialize()` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       3 | `groovy.lang.MetaClassImpl:3440` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       3 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 66.7% |       2 | `org.codenarc.rule.AbstractAstVisitorRule:81` |
| 33.3% |       1 | `org.codenarc.rule.AbstractAstVisitorRule:77` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.MethodNameAstVisitor`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       1 | `org.codenarc.rule.naming.MethodNameAstVisitor:51` |
| 50.0% |       1 | `org.codenarc.rule.naming.MethodNameAstVisitor:50` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Location                                        |
| ----: | ------: | ----------------------------------------------- |
| 50.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:144` |
| 50.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:130` |

##### `getSourceCode()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       2 | `org.codenarc.rule.AbstractAstVisitor:193` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:149` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:63` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor:62` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor:46` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.imports.AbstractImportRule:48` |

##### `isChainedAppend(MethodCallExpression)` (`org.codenarc.rule.unnecessary.ConsecutiveLiteralAppendsAstVisitor`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.ConsecutiveLiteralAppendsAstVisitor:54` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:205` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryDoubleInstantiationAstVisitor`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryDoubleInstantiationAstVisitor:34` |

##### `<init>()` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor:42` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.naming.PackageNameAstVisitor`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.naming.PackageNameAstVisitor:56` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor:49` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.naming.ParameterNameAstVisitor:58` |

##### `isMethodCall(MethodCallExpression, List, List, Integer)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `org.codenarc.util.AstUtil:365` |

##### `packageNameForImport(ImportNode)` (`org.codenarc.util.ImportUtil`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `org.codenarc.util.ImportUtil:38` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 99.4% |     171 | `PlatformMonitor::wait` | `libjvm.dylib` |
|  0.6% |       1 | `PlatformEvent::park`   | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |     128 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                           | Location       |
| ---: | ------: | -------------------------------- | -------------- |
| 6.1% |       3 | `TypeInstPtr::add_offset`        | `libjvm.dylib` |
| 4.1% |       2 | `Type::hashcons`                 | `libjvm.dylib` |
| 4.1% |       2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`    |
| 4.1% |       2 | `CollectedHeap::array_allocate`  | `libjvm.dylib` |
| 2.0% |       1 | `TypeAryPtr::add_offset`         | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      44 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      32 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      31 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 18.5% |       5 | `PhaseChaitin::build_ifg_physical`             | `libjvm.dylib` |
| 14.8% |       4 | `PhaseIFG::re_insert`                          | `libjvm.dylib` |
| 14.8% |       4 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |
| 14.8% |       4 | `PhaseLive::add_liveout`                       | `libjvm.dylib` |
| 11.1% |       3 | `PhaseIFG::SquareUp`                           | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      25 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      24 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 91.7% |      22 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  8.3% |       2 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      23 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                          | Location                                             |
| ----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 13.6% |       3 | `invokeSpecial(Object, Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  9.1% |       2 | `invoke(Object, int)`                           | `java.lang.invoke.LambdaForm$MH.0x0000000801031400`  |
|  9.1% |       2 | `invokeExact_MT(Object, Object, Object)`        | `java.lang.invoke.Invokers$Holder`                   |
|  9.1% |       2 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000080109a400`  |
|  9.1% |       2 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      20 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 25.0% |       5 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
| 15.0% |       3 | `ciEnv::get_klass_by_index_impl`                   | `libjvm.dylib` |
| 15.0% |       3 | `ciObjectFactory::get`                             | `libjvm.dylib` |
| 10.0% |       2 | `ciReceiverTypeData::translate_receiver_data_from` | `libjvm.dylib` |
| 10.0% |       2 | `ciObjectFactory::create_new_metadata`             | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 20.0% |       4 | `JVM_IsArrayClass`        | `libjvm.dylib` |
| 15.0% |       3 | `JVM_NewArray`            | `libjvm.dylib` |
| 10.0% |       2 | `InterpreterRuntime::ldc` | `libjvm.dylib` |
| 10.0% |       2 | `JVM_Clone`               | `libjvm.dylib` |
| 10.0% |       2 | `JVM_GetCallerClass`      | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|     % | Samples | Caller                                  | Location                                     |
| ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 94.7% |      18 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|  5.3% |       1 | `convert(Object, Class, boolean)`       | `sun.invoke.util.Wrapper`                    |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 62.5% |      10 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 37.5% |       6 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      16 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      16 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 68.8% |      11 | `WorkerThread::run`              | `libjvm.dylib` |
| 25.0% |       4 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  6.3% |       1 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 56.3% |       9 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 43.8% |       7 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |      16 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 13.3% |       2 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|  6.7% |       1 | `Compile::copy_node_notes_to`                 | `libjvm.dylib` |
|  6.7% |       1 | `PhaseChaitin::Register_Allocate`             | `libjvm.dylib` |
|  6.7% |       1 | `CodeBuffer::copy_code_to`                    | `libjvm.dylib` |
|  6.7% |       1 | `RootNode::RootNode`                          | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 80.0% |      12 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 13.3% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |
|  6.7% |       1 | `InstanceKlass::initialize_impl`        | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      14 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      13 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |      13 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 66.7% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 33.3% |       4 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 41.7% |       5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| 16.7% |       2 | `RegionNode::is_unreachable_region`  | `libjvm.dylib` |
|  8.3% |       1 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |
|  8.3% |       1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
|  8.3% |       1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 41.7% |       5 | `PhaseIterGVN::transform_old`         | `libjvm.dylib` |
| 25.0% |       3 | `PhaseIterGVN::PhaseIterGVN`          | `libjvm.dylib` |
|  8.3% |       1 | `PhaseIdealLoop::do_unroll`           | `libjvm.dylib` |
|  8.3% |       1 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
|  8.3% |       1 | `RegionNode::Ideal`                   | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 58.3% |       7 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 41.7% |       5 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `RegionNode::is_unreachable_from_root` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |      11 | `RegionNode::is_unreachable_region` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 18.2% |       2 | `Node::out_grow`           | `libjvm.dylib` |
| 18.2% |       2 | `Node_Array::grow`         | `libjvm.dylib` |
| 18.2% |       2 | `Node::add_prec`           | `libjvm.dylib` |
|  9.1% |       1 | `Compile::find_alias_type` | `libjvm.dylib` |
|  9.1% |       1 | `Node::clone`              | `libjvm.dylib` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 90.9% |      10 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  9.1% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 80.0% |       8 | `ciObjectFactory::get_symbol`           | `libjvm.dylib` |
| 10.0% |       1 | `AnnotationCollector::annotation_index` | `libjvm.dylib` |
| 10.0% |       1 | `JavaClasses::get_injected`             | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.0% |       9 | `Type::hashcons`                 | `libjvm.dylib` |
| 10.0% |       1 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 90.0% |       9 | `CompileBroker::create_compile_task` | `libjvm.dylib` |
| 10.0% |       1 | `VMThread::wait_until_executed`      | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       9 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       9 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `nmethod::is_unloading` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 87.5% |       7 | `DependencyContext::add_dependent_nmethod` | `libjvm.dylib` |
| 12.5% |       1 | `nmethodBucket::next_not_unloading`        | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                     | Location                                                           |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------------------ |
| 14.3% |       1 | `reinvoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010ca800`                |
| 14.3% |       1 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`                       |
| 14.3% |       1 | `visitEnd()`                               | `jdk.internal.org.objectweb.asm.MethodVisitor`                     |
| 14.3% |       1 | `doPhaseOperation(CompilationUnit)`        | `org.codehaus.groovy.control.CompilationUnit$ISourceUnitOperation` |
| 14.3% |       1 | `getDeclaration(ASTNode, SourceCode)`      | `org.codenarc.util.AstUtil`                                        |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                        | Location                                                  |
| ----: | ------: | ----------------------------- | --------------------------------------------------------- |
| 14.3% |       1 | `getMetaClass()`              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 14.3% |       1 | `begin(long)`                 | `java.util.stream.Sink$ChainedReference`                  |
| 14.3% |       1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`                       |
| 14.3% |       1 | `accept(Object)`              | `java.util.stream.ReferencePipeline$3$1`                  |
| 14.3% |       1 | `isRuleSuppressed(Rule)`      | `org.codenarc.analyzer.SuppressionAnalyzer`               |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       6 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                            | Location                            |
| ----: | ------: | ------------------------------------------------- | ----------------------------------- |
| 33.3% |       2 | `addArgumentForm(int, LambdaForm$BasicType)`      | `java.lang.invoke.LambdaFormEditor` |
| 16.7% |       1 | `filterArgumentForm(int, LambdaForm$BasicType)`   | `java.lang.invoke.LambdaFormEditor` |
| 16.7% |       1 | `bindArgumentForm(int)`                           | `java.lang.invoke.LambdaFormEditor` |
| 16.7% |       1 | `filterReturnForm(LambdaForm$BasicType, boolean)` | `java.lang.invoke.LambdaFormEditor` |
| 16.7% |       1 | `collectArgumentsForm(int, MethodType)`           | `java.lang.invoke.LambdaFormEditor` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1000`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 66.7% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 33.3% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010ab000` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 16.7% |       1 | `isGenericGetMethod(MetaMethod)` | `groovy.lang.MetaClassImpl`                               |
| 16.7% |       1 | `hash(Object)`                   | `java.util.HashMap`                                       |
| 16.7% |       1 | `getAstVisitor()`                | `org.codenarc.rule.AbstractAstVisitorRule`                |
| 16.7% |       1 | `callGetProperty(Object)`        | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`   |
| 16.7% |       1 | `setCallSiteTarget()`            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 60.0% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 20.0% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c8400` |
| 20.0% |       1 | `invoke(Object, long, long)`     | `java.lang.invoke.LambdaForm$MH.0x000000080135c800` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 60.0% |       3 | `matches(Method, String, Class[])`  | `java.lang.PublicMethods$Key`            |
| 40.0% |       2 | `computeIfAbsent(Object, Function)` | `java.util.concurrent.ConcurrentHashMap` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                      | Location                                                   |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------- |
| 20.0% |       1 | `fieldAccessor(Field, MethodHandle, MethodHandle, boolean)` | `jdk.internal.reflect.MethodHandleObjectFieldAccessorImpl` |
| 20.0% |       1 | `callConstructor(Object, Object, Object, Object, Object)`   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`    |
| 20.0% |       1 | `invoke(Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801383400`        |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 50.0% |       2 | `get(Object)` | `java.util.LinkedHashMap` |
| 50.0% |       2 | `get(Object)` | `java.util.HashMap`       |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller                                                                          | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       4 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080109ac00`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       4 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       4 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Caller           | Location                               |
| -----: | ------: | ---------------- | -------------------------------------- |
| 100.0% |       4 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `isValidExactMethod(Class[], CachedClass[])` (`org.codehaus.groovy.reflection.ParameterTypes`)

|      % | Samples | Caller                   | Location                                        |
| -----: | ------: | ------------------------ | ----------------------------------------------- |
| 100.0% |       4 | `isValidMethod(Class[])` | `org.codehaus.groovy.reflection.ParameterTypes` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 25.0% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109b800` |
| 25.0% |       1 | `invoke(Object, Object, long)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801361800` |
| 25.0% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00` |
| 25.0% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008011c5400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080109a400`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 75.0% |       3 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |
| 25.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008013ae000` |

##### `initialize()` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |       3 | `getMetaClass()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1800`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       3 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801089400` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       3 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 50.0% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080162c400` |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|     % | Samples | Caller                           | Location                                      |
| ----: | ------: | -------------------------------- | --------------------------------------------- |
| 50.0% |       1 | `eachLine(Reader, int, Closure)` | `org.codehaus.groovy.runtime.IOGroovyMethods` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|     % | Samples | Caller                             | Location                                            |
| ----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `getNodeText(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil`                         |
| 50.0% |       1 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x00000008015b7800` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.MethodNameAstVisitor`)

|      % | Samples | Caller                  | Location                                  |
| -----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |       2 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getSourceCode()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801440c00` |

##### `I2C/C2I adapters(0xab)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008014c5000` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% |       1 | `optimize(Pattern$Node)` | `java.util.regex.Pattern$BnM` |

##### `<init>()` (`org.codenarc.rule.basic.BigDecimalInstantiationRule`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                             | Location                            |
| -----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% |       1 | `visitMethods(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Caller                            | Location                                             |
| -----: | ------: | --------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeInterface(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801029c00` |

##### `visitClassComplete(ClassNode)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % | Samples | Caller     | Location                                                       |
| -----: | ------: | ---------- | -------------------------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.codenarc.rule.groovyism.ExplicitCallToOrMethodAstVisitor` |

##### `eachImportLine(SourceCode, Closure)` (`org.codenarc.rule.imports.AbstractImportRule`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000080135c000` |

##### `isChainedAppend(MethodCallExpression)` (`org.codenarc.rule.unnecessary.ConsecutiveLiteralAppendsAstVisitor`)

|      % | Samples | Caller                         | Location                                     |
| -----: | ------: | ------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryDoubleInstantiationAstVisitor`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.naming.PackageNameAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

|      % | Samples | Caller                     | Location                                        |
| -----: | ------: | -------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

|      % | Samples | Caller                    | Location                               |
| -----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `isMethodCall(MethodCallExpression, List, List, Integer)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Caller                                           | Location                    |
| -----: | ------: | ------------------------------------------------ | --------------------------- |
| 100.0% |       1 | `isMethodCall(MethodCallExpression, List, List)` | `org.codenarc.util.AstUtil` |

##### `packageNameForImport(ImportNode)` (`org.codenarc.util.ImportUtil`)

|      % | Samples | Caller                         | Location                                     |
| -----: | ------: | ------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 68.2% |   2,129 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| 68.2% |   2,129 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| 68.1% |   2,128 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| 68.1% |   2,128 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| 64.6% |   2,018 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| 64.5% |   2,014 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| 59.6% |   1,862 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| 48.9% |   1,526 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| 48.7% |   1,520 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| 30.7% |     959 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 30.7% |     958 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 30.7% |     958 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 30.6% |     956 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| 30.5% |     954 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| 30.5% |     954 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 30.5% |     953 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
| 30.5% |     953 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
| 30.5% |     953 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
| 30.3% |     947 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
| 30.2% |     943 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 64.5% |   2,014 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 59.6% |   1,862 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 48.9% |   1,526 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 48.7% |   1,520 | `Compile::Compile`                         | `libjvm.dylib` |
| 23.2% |     725 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 17.5% |     545 | `Compile::Optimize`                        | `libjvm.dylib` |
| 11.9% |     371 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  9.8% |     305 | `Compilation::compile_method`              | `libjvm.dylib` |
|  9.8% |     305 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  9.5% |     296 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  8.8% |     275 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  8.2% |     256 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  8.2% |     256 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  5.8% |     182 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  5.4% |     169 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.8% |     151 | `CompileQueue::get`                        | `libjvm.dylib` |
|  4.7% |     147 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  4.2% |     132 | `Matcher::match`                           | `libjvm.dylib` |
|  3.7% |     115 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  3.4% |     107 | `Matcher::xform`                           | `libjvm.dylib` |

##### Native

|     % | Samples | Function                            | Location                  |
| ----: | ------: | ----------------------------------- | ------------------------- |
| 68.2% |   2,129 | `_pthread_start`                    | `libsystem_pthread.dylib` |
| 68.2% |   2,129 | `thread_start`                      | `libsystem_pthread.dylib` |
| 68.1% |   2,128 | `Thread::call_run`                  | `libjvm.dylib`            |
| 68.1% |   2,128 | `thread_native_entry`               | `libjvm.dylib`            |
| 64.6% |   2,018 | `JavaThread::thread_main_inner`     | `libjvm.dylib`            |
|  9.8% |     307 | `Compiler::compile_method`          | `libjvm.dylib`            |
|  6.9% |     215 | `Parse::Parse`                      | `libjvm.dylib`            |
|  6.9% |     215 | `ParseGenerator::generate`          | `libjvm.dylib`            |
|  6.7% |     209 | `Parse::do_all_blocks`              | `libjvm.dylib`            |
|  6.6% |     206 | `Parse::do_one_block`               | `libjvm.dylib`            |
|  5.8% |     181 | `Parse::do_call`                    | `libjvm.dylib`            |
|  5.8% |     180 | `PlatformMonitor::wait`             | `libjvm.dylib`            |
|  5.5% |     172 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
|  4.8% |     150 | `Monitor::wait`                     | `libjvm.dylib`            |
|  4.1% |     129 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
|  4.1% |     128 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`  |
|  4.0% |     125 | `PredictedCallGenerator::generate`  | `libjvm.dylib`            |
|  3.0% |      94 | `IR::IR`                            | `libjvm.dylib`            |
|  3.0% |      93 | `IRScope::IRScope`                  | `libjvm.dylib`            |
|  2.9% |      90 | `JVM_FillInStackTrace`              | `libjvm.dylib`            |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 30.7% |     959 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 30.7% |     958 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 30.6% |     956 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| 30.5% |     954 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
| 30.5% |     954 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 30.5% |     953 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
| 30.5% |     953 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
| 30.5% |     953 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
| 30.3% |     947 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
| 30.2% |     943 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |
| 30.2% |     943 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 30.2% |     943 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
| 30.2% |     942 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 30.2% |     942 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800`  |
| 30.2% |     942 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400`  |
| 30.1% |     940 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
| 30.1% |     940 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
| 30.1% |     940 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
| 30.0% |     937 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 30.0% |     936 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                   |

##### JIT

|     % | Samples | Function                    | Location    |
| ----: | ------: | --------------------------- | ----------- |
|  0.2% |       7 | `I2C/C2I adapters(0xb)`     | `<unknown>` |
|  0.2% |       7 | `itable stub`               | `<unknown>` |
|  0.2% |       6 | `vtable stub`               | `<unknown>` |
|  0.2% |       5 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
|  0.1% |       2 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |
|  0.1% |       2 | `I2C/C2I adapters(0xbba)`   | `<unknown>` |
|  0.1% |       2 | `I2C/C2I adapters(0xba)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbaaa)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbb)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xab)`    | `<unknown>` |
| <0.1% |       1 | `zero_blocks`               | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 30.7% |     958 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| 30.2% |     942 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| 29.9% |     935 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| 27.4% |     855 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 27.3% |     854 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 27.3% |     854 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 27.2% |     848 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 26.8% |     836 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 22.5% |     704 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 15.9% |     497 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 14.2% |     442 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 10.5% |     328 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  8.1% |     253 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  4.4% |     138 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  2.8% |      88 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  2.6% |      82 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  2.6% |      81 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
|  2.6% |      80 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  2.5% |      78 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
|  1.8% |      55 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                  |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   2,129 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,128 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,128 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,018 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   2,014 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   1,862 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |   1,526 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |   1,520 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.7% |     956 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|  0.3% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088c00` |
|  0.2% |       2 | `unknown`                                                                                       | `<unknown>`                                          |
|  0.1% |       1 | `invoke(Object, Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x0000000801350400`  |
|  0.1% |       1 | `invoke(Object, Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x00000008013ae400`  |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                                                                                           | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 99.9% |     957 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| 83.1% |     796 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  1.1% |      11 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |
|  0.8% |       8 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.8% |     954 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| 98.4% |     941 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
| 90.9% |     869 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010d6000` |
| 90.4% |     864 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008012b3400` |
| 73.6% |     704 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008013b7000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     954 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   6.0% |      57 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                     | Location                                                                   |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |     954 | `main(String[])`                           | `org.codenarc.CodeNarc`                                                    |
|  91.1% |     869 | `execute()`                                | `org.codenarc.CodeNarcRunner`                                              |
|  89.5% |     854 | `processDirectory(String, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  54.2% |     517 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  48.7% |     465 | `doCall(Object)`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     953 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  93.4% |     890 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     953 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00` |
|  98.8% |     942 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
|  96.9% |     923 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000008010d5000` |
|  58.4% |     557 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
|  10.6% |     101 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000008010da400` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aac00`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     953 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  93.5% |     891 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801094400`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.6% |     943 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800` |
| 88.4% |     837 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d4400` |
|  1.9% |      18 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801404400` |
|  1.7% |      16 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010c9400` |
|  1.2% |      11 | `invoke(Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH.0x000000080135f400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     943 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   0.4% |       4 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 99.4% |     937 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
|  8.6% |      81 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |
|  5.4% |      51 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
|  5.1% |      48 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
|  5.1% |      48 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     943 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     942 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800` |
|   1.6% |      15 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d5400` |
|   1.4% |      13 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801110800` |
|   0.5% |       5 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7800` |
|   0.5% |       5 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801121c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c6800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     942 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7400`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     942 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     942 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     940 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
|   9.5% |      89 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     940 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |
|  99.5% |     935 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00` |
|  10.3% |      97 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080109a000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     940 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
|  10.5% |      99 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   2.3% |      22 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 90.8% |     851 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008012c5800` |
| 50.6% |     474 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008013ae400` |
| 19.0% |     178 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7c00` |
|  7.7% |      72 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801350400` |
|  2.7% |      25 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                             | Location                                                                          |
| -----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |     936 | `invokeImpl(Object, Object[])`                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                                 |
|   0.1% |       1 | `reflect_invoke_V(MethodHandle, Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod$$InjectedInvoker.0x0000000801121400` |
|   0.1% |       1 | `invokeWithArguments(Object[])`                    | `java.lang.invoke.MethodHandle`                                                   |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |     935 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                    | Location                                             |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 100.0% |     855 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094c00` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     854 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                     |
| -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% |     854 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                                  | Location                                             |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     848 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000008011c9400` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     836 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     725 | `Compile::Compile` | `libjvm.dylib` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     704 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000080135c000` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     545 | `Compile::Compile` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     497 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Caller                                    | Location                                             |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 100.0% |     442 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094c00` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     371 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 94.5% |     310 | `applyTo(SourceCode)`               | `org.codenarc.rule.AbstractRule`                         |
|  4.0% |      13 | `super$3$applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  1.5% |       5 | `super$3$applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     307 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     305 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     305 | `Compiler::compile_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.3% |     149 | `Compile::Optimize`       | `libjvm.dylib` |
| 49.7% |     147 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     275 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     256 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     256 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Caller                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 96.0% |     243 | `applyTo(SourceCode, List)`               | `org.codenarc.rule.AbstractAstVisitorRule`           |
|  2.4% |       6 | `applyVisitor(AstVisitor, SourceCode)`    | `org.codenarc.rule.AbstractSharedAstVisitorRule`     |
|  1.6% |       4 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801125400` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     215 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     215 | `Compile::Compile`                 | `libjvm.dylib` |
|  55.8% |     120 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  40.9% |      88 | `Parse::do_call`                   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     209 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |     206 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 65.4% |     119 | `Compile::Optimize`                        | `libjvm.dylib` |
| 19.8% |      36 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  9.9% |      18 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  2.7% |       5 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  2.2% |       4 | `Compile::remove_speculative_types`        | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     181 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 82.8% |     149 | `Monitor::wait`                         | `libjvm.dylib` |
| 17.2% |      31 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 99.4% |     171 | `PlatformMonitor::wait` | `libjvm.dylib` |
|  0.6% |       1 | `PlatformEvent::park`   | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |     169 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|   0.6% |       1 | `IfNode::Ideal_common`   | `libjvm.dylib` |
|   0.6% |       1 | `split_if`               | `libjvm.dylib` |
|   0.6% |       1 | `SubINode::Ideal`        | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     151 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 96.7% |     145 | `CompileQueue::get`               | `libjvm.dylib` |
|  2.7% |       4 | `VMThread::wait_until_executed`   | `libjvm.dylib` |
|  0.7% |       1 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     147 | `Compile::Optimize` | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                             | Location                            |
| -----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% |     138 | `visitMethods(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     132 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                | Location                  |
| ----: | ------: | ------------------------------------- | ------------------------- |
| 65.9% |      85 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
| 21.7% |      28 | `Mutex::lock`                         | `libjvm.dylib`            |
|  6.2% |       8 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |
|  5.4% |       7 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
|  0.8% |       1 | `PlatformEvent::unpark`               | `libjvm.dylib`            |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |     128 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     125 | `Parse::do_call`                   | `libjvm.dylib` |
|  28.0% |      35 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |     115 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |     107 | `Matcher::match` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      94 | `Compilation::build_hir` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      93 | `IR::IR`                   | `libjvm.dylib` |
|   1.1% |       1 | `GraphBuilder::push_scope` | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location        |
| -----: | ------: | ------------------------------------------- | --------------- |
| 100.0% |      90 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      88 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |      82 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801097c00` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Caller                            | Location                                             |
| ----: | ------: | --------------------------------- | ---------------------------------------------------- |
| 96.3% |      78 | `init()`                          | `org.codenarc.analyzer.SuppressionAnalyzer`          |
|  2.5% |       2 | `applyTo(SourceCode, List)`       | `org.codenarc.rule.AbstractAstVisitorRule`           |
|  1.2% |       1 | `invokeInterface(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801029c00` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                   | Location                                    |
| -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% |      80 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |      78 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |      55 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                     | Location                                                           |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------------------ |
| 14.3% |       1 | `reinvoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010ca800`                |
| 14.3% |       1 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`                       |
| 14.3% |       1 | `visitEnd()`                               | `jdk.internal.org.objectweb.asm.MethodVisitor`                     |
| 14.3% |       1 | `doPhaseOperation(CompilationUnit)`        | `org.codehaus.groovy.control.CompilationUnit$ISourceUnitOperation` |
| 14.3% |       1 | `getDeclaration(ASTNode, SourceCode)`      | `org.codenarc.util.AstUtil`                                        |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                        | Location                                                  |
| ----: | ------: | ----------------------------- | --------------------------------------------------------- |
| 14.3% |       1 | `getMetaClass()`              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 14.3% |       1 | `begin(long)`                 | `java.util.stream.Sink$ChainedReference`                  |
| 14.3% |       1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`                       |
| 14.3% |       1 | `accept(Object)`              | `java.util.stream.ReferencePipeline$3$1`                  |
| 14.3% |       1 | `isRuleSuppressed(Rule)`      | `org.codenarc.analyzer.SuppressionAnalyzer`               |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 16.7% |       1 | `isGenericGetMethod(MetaMethod)` | `groovy.lang.MetaClassImpl`                               |
| 16.7% |       1 | `hash(Object)`                   | `java.util.HashMap`                                       |
| 16.7% |       1 | `getAstVisitor()`                | `org.codenarc.rule.AbstractAstVisitorRule`                |
| 16.7% |       1 | `callGetProperty(Object)`        | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`   |
| 16.7% |       1 | `setCallSiteTarget()`            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                      | Location                                                   |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------- |
| 20.0% |       1 | `fieldAccessor(Field, MethodHandle, MethodHandle, boolean)` | `jdk.internal.reflect.MethodHandleObjectFieldAccessorImpl` |
| 20.0% |       1 | `callConstructor(Object, Object, Object, Object, Object)`   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`    |
| 20.0% |       1 | `invoke(Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801383400`        |

##### `I2C/C2I adapters(0xbbbbb)` (`<unknown>`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 50.0% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080162c400` |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|     % | Samples | Caller                           | Location                                      |
| ----: | ------: | -------------------------------- | --------------------------------------------- |
| 50.0% |       1 | `eachLine(Reader, int, Closure)` | `org.codehaus.groovy.runtime.IOGroovyMethods` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|     % | Samples | Caller                             | Location                                            |
| ----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `getNodeText(ASTNode, SourceCode)` | `org.codenarc.util.AstUtil`                         |
| 50.0% |       1 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x00000008015b7800` |

##### `I2C/C2I adapters(0xbaaa)` (`<unknown>`)

|      % | Samples | Caller                            | Location           |
| -----: | ------: | --------------------------------- | ------------------ |
| 100.0% |       1 | `spliterator(Object[], int, int)` | `java.util.Arrays` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801440c00` |

##### `I2C/C2I adapters(0xab)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008014c5000` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% |       1 | `optimize(Pattern$Node)` | `java.util.regex.Pattern$BnM` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   2,128 | `thread_native_entry` | `libjvm.dylib` |
|  <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,129 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 94.8% |   2,018 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  3.9% |      82 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.6% |      13 | `WatcherThread::run`            | `libjvm.dylib` |
|  0.4% |       8 | `VMThread::run`                 | `libjvm.dylib` |
|  0.3% |       7 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,128 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 99.8% |   2,014 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  0.1% |       3 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| <0.1% |       1 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 92.5% |   1,862 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  7.5% |     151 | `CompileQueue::get`                            | `libjvm.dylib` |
| <0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 82.0% |   1,526 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 16.5% |     307 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.6% |      11 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.4% |       8 | `CompilationLog::log_compile`   | `libjvm.dylib` |
|  0.3% |       5 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 99.6% |   1,520 | `Compile::Compile`                       | `libjvm.dylib` |
|  0.2% |       3 | `Compile::~Compile`                      | `libjvm.dylib` |
|  0.1% |       1 | `Chunk::next_chop`                       | `libjvm.dylib` |
|  0.1% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% |       1 | `Type_Array::grow`                       | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 47.7% |     725 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 35.9% |     545 | `Compile::Optimize`                      | `libjvm.dylib` |
| 14.1% |     215 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.0% |      15 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.7% |      11 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                                                     | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 99.8% |     957 | `invokeExact_MT(Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                               |
| 12.0% |     115 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|  0.4% |       4 | `bypassCache(Boolean, Object[])`                                                           | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|  0.2% |       2 | `setTarget(MethodHandle)`                                                                  | `java.lang.invoke.MutableCallSite`                               |
|  0.1% |       1 | `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.6% |     954 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.3% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.1% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 98.3% |     942 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
| 97.6% |     935 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00` |
| 96.3% |     923 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d5000` |
| 89.1% |     854 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008012b1000` |
| 88.5% |     848 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008012bd000` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     956 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  87.7% |     838 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.1% |       1 | `resolve_static_call`                                                                            | `<unknown>`                                     |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     954 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|   1.2% |      11 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     954 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 99.0% |     943 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
| 98.8% |     942 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800`  |
| 89.7% |     855 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094c00` |
| 54.2% |     517 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010d4c00`  |
|  8.9% |      85 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008012d4800`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     953 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000` |
| 100.0% |     953 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00` |
|  51.4% |     490 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008013b7400` |
|   7.5% |      71 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801350c00` |
|   6.0% |      57 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     953 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  93.4% |     890 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.4% |       4 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00` |
|   0.2% |       2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000008010aa400` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 90.2% |     854 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 88.3% |     836 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 15.6% |     148 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
|  9.8% |      93 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
|  4.9% |      46 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.8% |     941 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|  0.8% |       8 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`  |
|  0.3% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     943 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
|   3.9% |      37 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109b400` |
|   2.3% |      22 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     943 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
|   0.2% |       2 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`  |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                                    | Location                                           |
| -----: | ------: | --------------------------------------------------------- | -------------------------------------------------- |
| 100.0% |     942 | `execute(String[])`                                       | `org.codenarc.CodeNarc`                            |
|   0.5% |       5 | `super$2$visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |
|   0.4% |       4 | `parseArgs(String[])`                                     | `org.codenarc.CodeNarc`                            |
|   0.4% |       4 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |
|   0.3% |       3 | `validate(Source)`                                        | `javax.xml.validation.Validator`                   |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c6800`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     942 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7400`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     942 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
|  91.9% |     866 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                             | Location                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| 99.5% |     937 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
|  0.4% |       4 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% |       1 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801630800` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 99.5% |     935 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
| 10.0% |      94 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
|  6.0% |      56 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  5.7% |      54 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  1.7% |      16 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000008010c9400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     940 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801098400` |
| 100.0% |     940 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |
|   0.5% |       5 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080122c800` |
|   0.4% |       4 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
|   0.1% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801018800` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     940 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00` |
|  10.0% |      94 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.7% |       7 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000080109a400` |
|   0.1% |       1 | `invokeBasic(Object[])`    | `java.lang.invoke.MethodHandle`                     |
|   0.1% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801098c00` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee           | Location                                                                    |
| ----: | ------: | ---------------- | --------------------------------------------------------------------------- |
| 91.1% |     854 | `doCall(Object)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 53.0% |     497 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  9.4% |      88 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  5.1% |      48 | `doCall(Object)` | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |
|  4.9% |      46 | `doCall(Object)` | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                             |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 90.9% |     851 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008012c5800` |
| 51.0% |     477 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008013ae400` |
| 19.0% |     178 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7c00` |
|  7.8% |      73 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801350400` |
|  2.5% |      23 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801110800` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 92.9% |     869 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  5.5% |      51 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  1.6% |      15 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.9% |     854 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.1% |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                                            |
| ----: | ------: | -------------------------------------------------------- | --------------------------------------------------- |
| 99.9% |     853 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 99.4% |     849 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% |       2 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% |       1 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010c8800` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     854 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.6% |     836 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.4% |      12 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 87.6% |     732 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 11.0% |      92 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  1.1% |       9 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 51.2% |     371 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 18.2% |     132 | `Matcher::match`                  | `libjvm.dylib` |
| 13.8% |     100 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 12.8% |      93 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.7% |      12 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 73.4% |     517 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 19.7% |     139 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801362c00` |
|  3.3% |      23 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.7% |      12 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000080135f000` |
|  0.9% |       6 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 27.3% |     149 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 27.0% |     147 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 21.8% |     119 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  6.4% |      35 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  4.4% |      24 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 93.6% |     465 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  6.2% |      31 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.2% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                     |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                              |
| ----: | ------: | --------------------------- | ----------------------------------------------------- |
| 70.1% |     310 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`            |
|  4.3% |      19 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`          |
|  3.6% |      16 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.DuplicateImportRule`       |
|  3.6% |      16 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`      |
|  3.4% |      15 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSamePackageRule` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 21.0% |      78 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 17.5% |      65 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 11.6% |      43 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
| 10.8% |      40 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  8.6% |      32 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 74.1% |     243 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 16.8% |      55 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  3.7% |      12 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  3.4% |      11 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.6% |       2 | `getAst()`              | `org.codenarc.source.AbstractSourceCode`                |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.3% |     305 | `Compilation::Compilation` | `libjvm.dylib` |
|  0.7% |       2 | `Chunk::next_chop`         | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 90.2% |     275 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  7.9% |      24 | `ciEnv::register_method`           | `libjvm.dylib` |
|  1.0% |       3 | `Dependencies::assert_common_1`    | `libjvm.dylib` |
|  0.3% |       1 | `Dependencies::initialize`         | `libjvm.dylib` |
|  0.3% |       1 | `nmethod::new_nmethod`             | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     305 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 86.5% |     256 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.2% |      36 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  1.4% |       4 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 41.8% |     115 | `Compilation::build_hir`       | `libjvm.dylib` |
| 37.8% |     104 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 19.3% |      53 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.1% |       3 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 28.9% |      74 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 19.5% |      50 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 12.5% |      32 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 12.1% |      31 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  5.9% |      15 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     256 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                        |
| ----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 66.8% |     169 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
| 12.3% |      31 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`         |
|  7.1% |      18 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
|  2.0% |       5 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor` |
|  1.6% |       4 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.design.StatelessSingletonAstVisitor`         |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location        |
| ----: | ------: | ------------------------------- | --------------- |
| 97.2% |     209 | `Parse::do_all_blocks`          | `libjvm.dylib`  |
|  3.7% |       8 | `Parse::do_exits`               | `libjvm.dylib`  |
|  1.4% |       3 | `Dependencies::assert_common_1` | `libjvm.dylib`  |
|  0.5% |       1 | `Parse::init_blocks`            | `libjvm.dylib`  |
|  0.5% |       1 | `tlv_get_addr`                  | `libdyld.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     215 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 98.6% |     206 | `Parse::do_one_block`     | `libjvm.dylib` |
|  1.0% |       2 | `Parse::do_one_bytecode`  | `libjvm.dylib` |
|  0.5% |       1 | `Parse::merge_common`     | `libjvm.dylib` |
|  0.5% |       1 | `GraphKit::clean_stack`   | `libjvm.dylib` |
|  0.5% |       1 | `GraphKit::uncommon_trap` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 87.9% |     181 | `Parse::do_call`         | `libjvm.dylib` |
| 15.5% |      32 | `Parse::do_field_access` | `libjvm.dylib` |
|  8.3% |      17 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  7.3% |      15 | `Parse::do_if`           | `libjvm.dylib` |
|  4.9% |      10 | `Parse::do_checkcast`    | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 92.9% |     169 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  0.5% |       1 | `TypeInt::singleton`          | `libjvm.dylib` |
|  0.5% |       1 | `PhiNode::Ideal`              | `libjvm.dylib` |
|  0.5% |       1 | `RootNode::Ideal`             | `libjvm.dylib` |
|  0.5% |       1 | `LoadBNode::Value`            | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 69.1% |     125 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 48.6% |      88 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 22.1% |      40 | `Compile::call_generator`                             | `libjvm.dylib` |
|  5.0% |       9 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |
|  4.4% |       8 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 95.0% |     171 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  3.9% |       7 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|  1.1% |       2 | `__gettimeofday`     | `libsystem_kernel.dylib`  |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 12.4% |      21 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 10.1% |      17 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  9.5% |      16 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  8.9% |      15 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  7.1% |      12 | `LoadNode::Ideal`            | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location                  |
| ----: | ------: | ------------------------------------- | ------------------------- |
| 96.0% |     145 | `Monitor::wait`                       | `libjvm.dylib`            |
|  2.0% |       3 | `CompilationPolicy::select_task`      | `libjvm.dylib`            |
|  1.3% |       2 | `Mutex::lock`                         | `libjvm.dylib`            |
|  0.7% |       1 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                                                                        | Location       |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 99.3% |     149 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  0.7% |       1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     147 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                    |
| ----: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
| 74.6% |     103 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  5.8% |       8 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|  2.2% |       3 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|  2.2% |       3 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
|  1.4% |       2 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor`                   |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 81.1% |     107 | `Matcher::xform`                              | `libjvm.dylib` |
|  6.8% |       9 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  4.5% |       6 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  1.5% |       2 | `PhiNode::Opcode`                             | `libjvm.dylib` |
|  0.8% |       1 | `ParmNode::Opcode`                            | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|     % | Samples | Callee               | Location                 |
| ----: | ------: | -------------------- | ------------------------ |
| 99.2% |     128 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 96.0% |     120 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 28.0% |      35 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  2.4% |       3 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |
|  2.4% |       3 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  0.8% |       1 | `GraphKit::null_check_common`      | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 81.7% |      94 | `IR::IR`                                     | `libjvm.dylib` |
|  8.7% |      10 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  4.3% |       5 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  2.6% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  0.9% |       1 | `IR::split_critical_edges`                   | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 63.6% |      68 | `Matcher::match_tree`    | `libjvm.dylib` |
| 15.0% |      16 | `Arena::contains`        | `libjvm.dylib` |
|  3.7% |       4 | `Node::clone`            | `libjvm.dylib` |
|  3.7% |       4 | `Matcher::match_sfpt`    | `libjvm.dylib` |
|  0.9% |       1 | `InitializeNode::Opcode` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 98.9% |      93 | `IRScope::IRScope`           | `libjvm.dylib` |
|  1.1% |       1 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      93 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |
|   1.1% |       1 | `XHandlers::XHandlers`       | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 95.6% |      86 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`            |
|  2.2% |       2 | `Chunk::next_chop`                         | `libjvm.dylib`            |
|  1.1% |       1 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 98.9% |      87 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.1% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c8800` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee           | Location                                    |
| ----: | ------: | ---------------- | ------------------------------------------- |
| 97.6% |      80 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  1.2% |       1 | `append(String)` | `java.lang.StringBuilder`                   |
|  1.2% |       1 | `itable stub`    | `<unknown>`                                 |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      81 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                                    | Location                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 97.5% |      78 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  2.5% |       2 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 85.9% |      67 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  6.4% |       5 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  6.4% |       5 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.3% |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee          | Location          |
| ----: | ------: | --------------- | ----------------- |
| 92.7% |      51 | `newInstance()` | `java.lang.Class` |
|  1.8% |       1 | `vtable stub`   | `<unknown>`       |

##### `I2C/C2I adapters(0xbaaa)` (`<unknown>`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.3% |     135 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                  |
| 1.4% |      44 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                |
| 1.0% |      32 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                   |
| 1.0% |      31 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                     |
| 0.7% |      22 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                              |
| 0.5% |      16 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                  |
| 0.5% |      16 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                      |
| 0.5% |      15 | `Node::dominates` (`libjvm.dylib`) ← `MemNode::all_controls_dominate` ← `InitializeNode::detect_init_independence` ← `InitializeNode::can_capture_store` ← `StoreNode::Ideal` ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                  |
| 0.4% |      14 | `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                |
| 0.4% |      13 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                 |
| 0.4% |      12 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                |
| 0.4% |      12 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run`                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |      11 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                             |
| 0.4% |      11 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                      |
| 0.4% |      11 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                    |
| 0.4% |      11 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% |      11 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
| 0.3% |      10 | `PhaseIterGVN::transform_old` (`libjvm.dylib`) ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                 |
| 0.3% |      10 | `Node_Backward_Iterator::next` (`libjvm.dylib`) ← `PhaseCFG::schedule_late` ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                          |
| 0.3% |      10 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                     |
