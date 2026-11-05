# Sampling profile

Collected 1,510 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 54.9% |     829 |
| Native            | 27.1% |     409 |
| Standard library  | 16.0% |     242 |
| Ours              |  1.1% |      16 |
| JIT               |  0.9% |      13 |
| Garbage collector |  0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,081 samples (71.6%) Thread::call_run at libjvm.dylib
│   ├── 1,021 samples (67.6%) JavaThread::thread_main_inner
│   │   └── 1,020 samples (67.5%) CompileBroker::compiler_thread_loop
│   │       ├── 1,011 samples (67.0%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 856 samples (56.7%) C2Compiler::compile_method
│   │       │   │   └── 855 samples (56.6%) Compile::Compile
│   │       │   │       ├── 409 samples (27.1%) Compile::Code_Gen
│   │       │   │       │   ├── 232 samples (15.4%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 54 samples (3.6%, self 2.5%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 16 samples (1.1%) 8 more callees, led by (0.3%) MachNode::rematerialize
│   │       │   │       │   │   ├── 41 samples (2.7%, self 1.3%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   └── 22 samples (1.5%) 7 more callees, led by (0.4%) IndexSetIterator::advance_and_next
│   │       │   │       │   │   ├── 28 samples (1.9%, self 0.7%) PhaseLive::compute
│   │       │   │       │   │   │   └── 17 samples (1.1%, self 0.7%) PhaseLive::add_liveout
│   │       │   │       │   │   │       └── 2 samples (0.1%, self 1.7% globally) tlv_get_addr at libdyld.dylib
│   │       │   │       │   │   ├── … 6 samples (0.4%, self 1.7% globally) IndexSetIterator::advance_and_next at libjvm.dylib
│   │       │   │       │   │   └── 97 samples (6.4%) 23 more callees, led by (1.3%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   └── 177 samples (11.7%) 8 more callees, led by (4.0%) Matcher::match
│   │       │   │       ├── 349 samples (23.1%) Compile::Optimize
│   │       │   │       │   ├── 105 samples (7.0%) PhaseIdealLoop::optimize
│   │       │   │       │   │   ├── 82 samples (5.4%) PhaseIdealLoop::PhaseIdealLoop
│   │       │   │       │   │   │   └── 82 samples (5.4%) PhaseIdealLoop::build_and_optimize
│   │       │   │       │   │   │       ├── 34 samples (2.3%, self 0.7%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   │   │       │   └── 23 samples (1.5%) 2 more callees, led by (1.5%) PhaseIdealLoop::build_loop_late_post_work
│   │       │   │       │   │   │       └── 48 samples (3.2%) 15 more callees, led by (0.7%) PhaseIdealLoop::Dominators
│   │       │   │       │   │   └── 23 samples (1.5%) PhaseIterGVN::optimize …
│   │       │   │       │   ├── … 84 samples (5.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │       │   │       │   │   ├── 12 samples (0.8%, self 0.7%) PhaseIdealLoop::Dominators
│   │       │   │       │   │   └── 72 samples (4.8%) 15 more callees, led by (1.5%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   └── 153 samples (10.1%) 14 more callees, led by (4.6%) PhaseIterGVN::optimize
│   │       │   │       └── 97 samples (6.4%) 7 more callees, led by (5.2%) ParseGenerator::generate
│   │       │   └── 154 samples (10.2%) 5 more callees, led by (9.9%) Compiler::compile_method
│   │       └── … 6 samples (0.4%) __psynch_cvwait at libsystem_kernel.dylib
│   └── 60 samples (4.0%) 4 more callees, led by (3.5%) WorkerThread::run
├── … 402 samples (26.6%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000f8010a1800
│   └── 396 samples (26.2%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x000000f801088800
│       ├── … 283 samples (18.7%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│       │   └── 283 samples (18.7%) 5 more callees, led by (15.0%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│       └── … 110 samples (7.3%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface …
└── 22 samples (1.5%) 6 more root frames, led by (0.8%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 2.5% |      38 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.7% |      26 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.7% |      25 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.3% |      19 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.1% |      17 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`             |
| 1.1% |      17 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`             |
| 1.1% |      16 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.1% |      16 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
| 0.9% |      13 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
| 0.9% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      12 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `libjvm.dylib`             |
| 0.8% |      12 | `Unique_Node_List::remove`                                                                                                                               | `libjvm.dylib`             |
| 0.8% |      12 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`             |
| 0.7% |      11 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.7% |      11 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`             |
| 0.7% |      10 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.7% |      10 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.7% |      10 | `PhaseOutput::BuildOopMaps`                                                                                                                              | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                             | Location       |
| ---: | ------: | ---------------------------------------------------- | -------------- |
| 2.5% |      38 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| 1.7% |      26 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| 1.3% |      19 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| 1.1% |      17 | `PhaseIdealLoop::build_loop_late`                    | `libjvm.dylib` |
| 1.1% |      17 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| 0.9% |      14 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| 0.9% |      13 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
| 0.8% |      12 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| 0.8% |      12 | `Unique_Node_List::remove`                           | `libjvm.dylib` |
| 0.8% |      12 | `Node::dominates`                                    | `libjvm.dylib` |
| 0.7% |      11 | `PhaseLive::add_liveout`                             | `libjvm.dylib` |
| 0.7% |      10 | `PhaseOutput::BuildOopMaps`                          | `libjvm.dylib` |
| 0.7% |      10 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| 0.7% |      10 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| 0.6% |       9 | `Type::cmp`                                          | `libjvm.dylib` |
| 0.6% |       9 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
| 0.5% |       8 | `PhaseIterGVN::add_users_to_worklist`                | `libjvm.dylib` |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
| 0.5% |       7 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| 0.5% |       7 | `PhaseOutput::fill_buffer`                           | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 1.7% |      25 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.1% |      16 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 1.1% |      16 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.9% |      13 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 0.8% |      12 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 0.7% |      11 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.7% |      10 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.7% |      10 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| 0.6% |       9 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.5% |       8 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.5% |       8 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       6 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                    | `libjvm.dylib`             |
| 0.4% |       6 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.3% |       5 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.3% |       4 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       4 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.3% |       4 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| 0.3% |       4 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| 0.2% |       3 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`             |

##### Standard library

|    % | Samples | Function                                                                                    | Location                                               |
| ---: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 0.5% |       8 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                        |
| 0.5% |       8 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                              |
| 0.3% |       5 | `cast(Object)`                                                                              | `java.lang.Class`                                      |
| 0.3% |       4 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                        |
| 0.2% |       3 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800`   |
| 0.2% |       3 | `getNode(Object)`                                                                           | `java.util.HashMap`                                    |
| 0.2% |       3 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                    |
| 0.1% |       2 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`           |
| 0.1% |       2 | `insertParameterTypes(int, Class[])`                                                        | `java.lang.invoke.MethodType`                          |
| 0.1% |       2 | `resize()`                                                                                  | `java.util.HashMap`                                    |
| 0.1% |       2 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1000`    |
| 0.1% |       2 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                        | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| 0.1% |       2 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                             | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.1% |       2 | `expression(int)`                                                                           | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| 0.1% |       2 | `lambdaFormEditor(LambdaForm)`                                                              | `java.lang.invoke.LambdaFormEditor`                    |
| 0.1% |       2 | `removeStaleReferences()`                                                                   | `jdk.internal.util.ReferencedKeyMap`                   |
| 0.1% |       2 | `equals(LambdaFormEditor$TransformKey)`                                                     | `java.lang.invoke.LambdaFormEditor$Transform`          |
| 0.1% |       2 | `RemoveQEQuoting()`                                                                         | `java.util.regex.Pattern`                              |
| 0.1% |       2 | `equals(ATNConfig)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`          |
| 0.1% |       2 | `speciesData()`                                                                             | `java.lang.invoke.BoundMethodHandle$Species_LL`        |

##### Ours

|    % | Samples | Function                                          | Location                                                                                 |
| ---: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0.1% |       1 | `<init>(SourceCode)`                              | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.1% |       1 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.1% |       1 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
| 0.1% |       1 | `visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.ClassReferenceAstVisitor`                                             |
| 0.1% |       1 | `<init>()`                                        | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`                    |
| 0.1% |       1 | `isNotAnInterface(ClassNode)`                     | `org.gmetrics.metric.AbstractMetric`                                                     |
| 0.1% |       1 | `getName()`                                       | `org.codenarc.rule.groovyism.ExplicitCallToPutAtMethodRule`                              |
| 0.1% |       1 | `getName()`                                       | `org.codenarc.rule.unnecessary.UnnecessaryBigDecimalInstantiationRule`                   |
| 0.1% |       1 | `visitMethodEx(MethodNode)`                       | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`                           |
| 0.1% |       1 | `getSuppressionsByLineNumber(ModuleNode)`         | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |
| 0.1% |       1 | `<init>()`                                        | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                    |
| 0.1% |       1 | `isFinalVariableDeclaration(Object)`              | `org.gmetrics.metric.abc.AbcAstVisitor`                                                  |
| 0.1% |       1 | `<init>()`                                        | `org.codenarc.rule.unnecessary.UnnecessaryBigIntegerInstantiationAstVisitor`             |
| 0.1% |       1 | `getAstVisitorClass()`                            | `org.codenarc.rule.basic.EmptyTryBlockRule`                                              |
| 0.1% |       1 | `getSourceCode()`                                 | `org.codenarc.rule.AbstractAstVisitor`                                                   |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       8 | `java.lang.reflect.Array:78` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `java.lang.Class:4068` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 75.0% |       3 | `java.lang.invoke.MethodHandle:479` |
| 25.0% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       1 | `java.util.HashMap:577` |
| 33.3% |       1 | `java.util.HashMap:576` |
| 33.3% |       1 | `java.util.HashMap:587` |

##### `equals(Object, Object)` (`java.util.Objects`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `java.util.Objects:64` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

|     % | Samples | Location                          |
| ----: | ------: | --------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodType:504` |
| 50.0% |       1 | `java.lang.invoke.MethodType:500` |

##### `resize()` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:711` |
| 50.0% |       1 | `java.util.HashMap:684` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|     % | Samples | Location                                                  |
| ----: | ------: | --------------------------------------------------------- |
| 50.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:174` |
| 50.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:175` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       2 | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator:370` |

##### `expression(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|     % | Samples | Location                                            |
| ----: | ------: | --------------------------------------------------- |
| 50.0% |       1 | `org.apache.groovy.parser.antlr4.GroovyParser:9095` |
| 50.0% |       1 | `org.apache.groovy.parser.antlr4.GroovyParser:9060` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       2 | `java.lang.invoke.LambdaFormEditor:61` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       1 | `jdk.internal.util.ReferencedKeyMap:338` |
| 50.0% |       1 | `jdk.internal.util.ReferencedKeyMap:343` |

##### `equals(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor$Transform`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       2 | `java.lang.invoke.LambdaFormEditor$Transform:111` |

##### `RemoveQEQuoting()` (`java.util.regex.Pattern`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 50.0% |       1 | `java.util.regex.Pattern:1828` |
| 50.0% |       1 | `java.util.regex.Pattern:1831` |

##### `equals(ATNConfig)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|     % | Samples | Location                                          |
| ----: | ------: | ------------------------------------------------- |
| 50.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:375` |
| 50.0% |       1 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig:374` |

##### `<init>(SourceCode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:29` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitorRule:77` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.ClassReferenceAstVisitor:107` |

##### `isNotAnInterface(ClassNode)` (`org.gmetrics.metric.AbstractMetric`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `org.gmetrics.metric.AbstractMetric:60` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ParameterReassignmentAstVisitor`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor:44` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:120` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor:42` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor:50` |

##### `isFinalVariableDeclaration(Object)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.gmetrics.metric.abc.AbcAstVisitor:176` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryBigIntegerInstantiationAstVisitor`)

|      % | Samples | Location                                                                        |
| -----: | ------: | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryBigIntegerInstantiationAstVisitor:34` |

##### `getSourceCode()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:193` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      38 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 23.1% |       6 | `PhaseIFG::re_insert`                          | `libjvm.dylib` |
| 23.1% |       6 | `PhaseChaitin::build_ifg_physical`             | `libjvm.dylib` |
| 11.5% |       3 | `PhaseIFG::effective_degree`                   | `libjvm.dylib` |
| 11.5% |       3 | `PhaseIFG::SquareUp`                           | `libjvm.dylib` |
|  7.7% |       2 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                              | Location       |
| ---: | ------: | ----------------------------------- | -------------- |
| 8.0% |       2 | `ImmutableOopMap::ImmutableOopMap`  | `libjvm.dylib` |
| 8.0% |       2 | `GraphBuilder::append_with_bci`     | `libjvm.dylib` |
| 8.0% |       2 | `TypeInterfaces::intersection_with` | `libjvm.dylib` |
| 8.0% |       2 | `PhaseLive::add_liveout`            | `libjvm.dylib` |
| 4.0% |       1 | `InstanceKlass::find_local_field`   | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 37.5% |       6 | `JVM_NewArray`                              | `libjvm.dylib` |
| 12.5% |       2 | `jni_GetObjectClass`                        | `libjvm.dylib` |
|  6.3% |       1 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib` |
|  6.3% |       1 | `JVM_Clone`                                 | `libjvm.dylib` |
|  6.3% |       1 | `JVM_GetCallerClass`                        | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      16 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 92.3% |      12 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.7% |       1 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 61.5% |       8 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 38.5% |       5 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      12 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 91.7% |      11 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
|  8.3% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 91.7% |      11 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  8.3% |       1 | `Node::remove_dead_region`                | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      12 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      11 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |      11 | `PhaseLive::compute` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 80.0% |       8 | `nmethod::oops_do_process_weak`             | `libjvm.dylib` |
| 10.0% |       1 | `InlineCacheBuffer::create_transition_stub` | `libjvm.dylib` |
| 10.0% |       1 | `nmethod::nmethod`                          | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      10 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      10 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       9 | `Dict::Insert` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 66.7% |       6 | `PhaseCFG::global_code_motion`    | `libjvm.dylib` |
| 22.2% |       2 | `PhaseCFG::schedule_late`         | `libjvm.dylib` |
| 11.1% |       1 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       9 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 62.5% |       5 | `PhaseIterGVN::transform_old`         | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIterGVN::add_users_to_worklist` | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIterGVN::PhaseIterGVN`          | `libjvm.dylib` |
| 12.5% |       1 | `Node::set_req_X`                     | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 12.5% |       1 | `LinearScan::do_linear_scan`                  | `libjvm.dylib` |
| 12.5% |       1 | `ConstantPool::allocate`                      | `libjvm.dylib` |
| 12.5% |       1 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
| 12.5% |       1 | `LinearScan::compute_debug_info_for_scope`    | `libjvm.dylib` |
| 12.5% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       8 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                        | Location                                            |
| ----: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 12.5% |       1 | `linkToTargetMethod(Object, Object)`          | `java.lang.invoke.Invokers$Holder`                  |
| 12.5% |       1 | `invoke(Object, int)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f801031400` |
| 12.5% |       1 | `invoke(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000f80109b800` |
| 12.5% |       1 | `invoke(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000f801370c00` |
| 12.5% |       1 | `invoke(Object, Object, Object, long)`        | `java.lang.invoke.LambdaForm$MH.0x000000f801365400` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       8 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000f80102b400` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       7 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       6 | `KlassCleaningTask::work` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       5 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 50.0% |       2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| 50.0% |       2 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 75.0% |       3 | `ciObjectFactory::get_symbol`           | `libjvm.dylib` |
| 25.0% |       1 | `AnnotationCollector::annotation_index` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       4 | `free_medium` | `libsystem_malloc.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 75.0% |       3 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
| 25.0% |       1 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |       4 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

|      % | Samples | Caller                                         | Location       |
| -----: | ------: | ---------------------------------------------- | -------------- |
| 100.0% |       3 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f801088800`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f80108e000` |
| 33.3% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1800` |
| 33.3% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010d6000` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |       3 | `get(Object)` | `java.util.LinkedHashMap` |

##### `equals(Object, Object)` (`java.util.Objects`)

|     % | Samples | Caller                       | Location                               |
| ----: | ------: | ---------------------------- | -------------------------------------- |
| 66.7% |       2 | `equals(Object)`             | `jdk.internal.util.StrongReferenceKey` |
| 33.3% |       1 | `equalsArrayList(ArrayList)` | `java.util.ArrayList`                  |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80102ac00` |

##### `insertParameterTypes(int, Class[])` (`java.lang.invoke.MethodType`)

|     % | Samples | Caller                                             | Location                         |
| ----: | ------: | -------------------------------------------------- | -------------------------------- |
| 50.0% |       1 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles` |
| 50.0% |       1 | `asCollectorType(Class, int, int)`                 | `java.lang.invoke.MethodType`    |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010a1000`)

|     % | Samples | Caller                        | Location                                            |
| ----: | ------: | ----------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010d2000` |
| 50.0% |       1 | `invoke(Object, int, int)`    | `java.lang.invoke.LambdaForm$MH.0x000000f8013af800` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       2 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                 | Location                                               |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       2 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `expression(int)` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|     % | Samples | Caller                | Location                                       |
| ----: | ------: | --------------------- | ---------------------------------------------- |
| 50.0% |       1 | `commandExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |
| 50.0% |       1 | `elementValue()`      | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `lambdaFormEditor(LambdaForm)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Caller     | Location                      |
| -----: | ------: | ---------- | ----------------------------- |
| 100.0% |       2 | `editor()` | `java.lang.invoke.LambdaForm` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

|      % | Samples | Caller        | Location                             |
| -----: | ------: | ------------- | ------------------------------------ |
| 100.0% |       2 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `equals(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor$Transform`)

|      % | Samples | Caller                                      | Location                            |
| -----: | ------: | ------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `getInCache(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor` |

##### `RemoveQEQuoting()` (`java.util.regex.Pattern`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       2 | `compile()` | `java.util.regex.Pattern` |

##### `equals(ATNConfig)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|      % | Samples | Caller           | Location                                      |
| -----: | ------: | ---------------- | --------------------------------------------- |
| 100.0% |       2 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `speciesData()` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

|      % | Samples | Caller         | Location                             |
| -----: | ------: | -------------- | ------------------------------------ |
| 100.0% |       2 | `fieldCount()` | `java.lang.invoke.BoundMethodHandle` |

##### `<init>(SourceCode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                             | Location                                     |
| -----: | ------: | ---------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801097c00` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % | Samples | Caller                    | Location                                          |
| -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `<init>()` (`org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isNotAnInterface(ClassNode)` (`org.gmetrics.metric.AbstractMetric`)

|      % | Samples | Caller                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801097c00` |

##### `getName()` (`org.codenarc.rule.groovyism.ExplicitCallToPutAtMethodRule`)

|      % | Samples | Caller                   | Location                                    |
| -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getName()` (`org.codenarc.rule.unnecessary.UnnecessaryBigDecimalInstantiationRule`)

|      % | Samples | Caller                   | Location                                    |
| -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ParameterReassignmentAstVisitor`)

|      % | Samples | Caller                    | Location                               |
| -----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |       1 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`)

|      % | Samples | Caller                  | Location                                                |
| -----: | ------: | ----------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isFinalVariableDeclaration(Object)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|      % | Samples | Caller                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801030400` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryBigIntegerInstantiationAstVisitor`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getAstVisitorClass()` (`org.codenarc.rule.basic.EmptyTryBlockRule`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor()` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getSourceCode()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 71.7% |   1,082 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| 71.7% |   1,082 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| 71.6% |   1,081 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| 71.6% |   1,081 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| 67.6% |   1,021 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| 67.5% |   1,020 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| 67.0% |   1,011 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| 56.7% |     856 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| 56.6% |     855 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| 27.1% |     409 | `Compile::Code_Gen`                                                                           | `libjvm.dylib`                                       |
| 26.9% |     406 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 26.8% |     405 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 26.8% |     405 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800` |
| 26.8% |     404 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 26.7% |     403 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1800`  |
| 26.7% |     403 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 26.6% |     402 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa000`  |
| 26.6% |     402 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800`  |
| 26.6% |     402 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f8010aac00`  |
| 26.2% |     396 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000f801094400` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 67.5% |   1,020 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 67.0% |   1,011 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 56.7% |     856 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 56.6% |     855 | `Compile::Compile`                         | `libjvm.dylib` |
| 27.1% |     409 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 23.1% |     349 | `Compile::Optimize`                        | `libjvm.dylib` |
| 15.4% |     232 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 13.0% |     196 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 11.0% |     166 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 11.0% |     166 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  9.9% |     150 | `Compilation::compile_method`              | `libjvm.dylib` |
|  9.9% |     150 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  9.3% |     140 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  7.5% |     113 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  7.0% |     105 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  6.0% |      91 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  4.0% |      60 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  4.0% |      60 | `Matcher::match`                           | `libjvm.dylib` |
|  3.8% |      57 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
|  3.6% |      54 | `PhaseChaitin::Split`                      | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                    | Location                  |
| ----: | ------: | ------------------------------------------- | ------------------------- |
| 71.7% |   1,082 | `_pthread_start`                            | `libsystem_pthread.dylib` |
| 71.7% |   1,082 | `thread_start`                              | `libsystem_pthread.dylib` |
| 71.6% |   1,081 | `Thread::call_run`                          | `libjvm.dylib`            |
| 71.6% |   1,081 | `thread_native_entry`                       | `libjvm.dylib`            |
| 67.6% |   1,021 | `JavaThread::thread_main_inner`             | `libjvm.dylib`            |
|  9.9% |     150 | `Compiler::compile_method`                  | `libjvm.dylib`            |
|  5.3% |      80 | `Parse::Parse`                              | `libjvm.dylib`            |
|  5.3% |      80 | `ParseGenerator::generate`                  | `libjvm.dylib`            |
|  5.2% |      79 | `Parse::do_one_block`                       | `libjvm.dylib`            |
|  5.2% |      79 | `Parse::do_all_blocks`                      | `libjvm.dylib`            |
|  4.7% |      71 | `Parse::do_call`                            | `libjvm.dylib`            |
|  3.5% |      53 | `WorkerThread::run`                         | `libjvm.dylib`            |
|  3.0% |      45 | `PredictedCallGenerator::generate`          | `libjvm.dylib`            |
|  2.3% |      34 | `IRScope::IRScope`                          | `libjvm.dylib`            |
|  2.3% |      34 | `IR::IR`                                    | `libjvm.dylib`            |
|  2.1% |      31 | `G1EvacuateRegionsBaseTask::work`           | `libjvm.dylib`            |
|  2.0% |      30 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`            |
|  2.0% |      30 | `JVM_FillInStackTrace`                      | `libjvm.dylib`            |
|  2.0% |      30 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib`           |
|  1.7% |      25 | `tlv_get_addr`                              | `libdyld.dylib`           |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 26.8% |     405 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 26.8% |     405 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800` |
| 26.8% |     404 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 26.7% |     403 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1800`  |
| 26.7% |     403 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 26.6% |     402 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa000`  |
| 26.6% |     402 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800`  |
| 26.6% |     402 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f8010aac00`  |
| 26.2% |     396 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000f801094400` |
| 26.0% |     393 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8010a9800`  |
| 26.0% |     393 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 26.0% |     393 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f8010c6800`  |
| 26.0% |     393 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f8010c7400`  |
| 26.0% |     392 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f80108e000`  |
| 26.0% |     392 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 25.8% |     389 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801098400`  |
| 25.8% |     389 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f801099c00`  |
| 25.8% |     389 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000f80109a000`  |
| 25.8% |     389 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                           |
| 25.8% |     389 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`        |

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 26.9% |     406 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| 26.0% |     393 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| 25.6% |     386 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| 21.5% |     324 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 21.4% |     323 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 21.4% |     323 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 21.0% |     317 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 20.5% |     309 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 15.8% |     238 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 11.1% |     168 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  9.1% |     137 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
|  7.3% |     110 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  5.5% |      83 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  3.5% |      53 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  3.2% |      48 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  3.0% |      45 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  2.8% |      43 | `<init>(String)`                                 | `org.codenarc.ruleset.XmlFileRuleSet`                                       |
|  2.8% |      43 | `loadRuleSetFile(String)`                        | `org.codenarc.ruleset.RuleSetUtil`                                          |
|  2.8% |      43 | `doCall(Object)`                                 | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |
|  2.8% |      43 | `createInitialRuleSetFromFiles()`                | `org.codenarc.CodeNarcRunner`                                               |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,082 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,081 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,081 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,021 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   1,020 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   1,011 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     856 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     855 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     409 | `Compile::Compile` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                          | Location                                             |
| -----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     405 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800` |
|   0.5% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801088c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f801088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.5% |     403 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1800` |
| 96.8% |     392 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f80108e000` |
| 82.5% |     334 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8010d6000` |
| 80.7% |     327 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8012b3400` |
| 55.3% |     224 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8013b6400` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |     404 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  71.8% |     290 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   0.7% |       3 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|   0.7% |       3 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     403 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   7.9% |      32 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                     | Location                                                                   |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |     403 | `main(String[])`                           | `org.codenarc.CodeNarc`                                                    |
|  82.1% |     331 | `execute()`                                | `org.codenarc.CodeNarcRunner`                                              |
|  80.1% |     323 | `processDirectory(String, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  43.7% |     176 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  37.2% |     150 | `doCall(Object)`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800` |
|  87.8% |     353 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aac00` |
|  97.8% |     393 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f8010c7400` |
|  94.0% |     378 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f8010d5000` |
|  50.0% |     201 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f8010abc00` |
|  15.2% |      61 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f8010da400` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010aac00`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800` |
|  87.8% |     353 | `delegate(Object, Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f801094400`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.2% |     393 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f8010a9800` |
| 78.3% |     310 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010d4400` |
|  2.5% |      10 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f8010c9400` |
|  2.3% |       9 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8012bd800` |
|  1.5% |       6 | `invoke(Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH.0x000000f80135f400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     393 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa000` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     393 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010c6800` |
|   1.5% |       6 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010d5400` |
|   1.5% |       6 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801110800` |
|   0.5% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010c7800` |
|   0.5% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801121c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010c6800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     393 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010c7400`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     393 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     393 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f80108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     392 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   0.3% |       1 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f801099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 98.7% |     387 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 11.7% |      46 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 11.0% |      43 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| 11.0% |      43 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |
| 10.7% |      42 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f801098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     389 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801099c00` |
|  10.3% |      40 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f801099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     389 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000f80109a000` |
|  99.2% |     386 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80109bc00` |
|  19.0% |      74 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f80109a000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     389 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f801099c00` |
|  10.5% |      41 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   3.3% |      13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                               | Location                                                         |
| -----: | ------: | ------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |     389 | `invoke(Object, Object[])`           | `org.codehaus.groovy.reflection.CachedMethod`                    |
|   3.6% |      14 | `doInvoke(Object, Object[], Method)` | `org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

|      % | Samples | Caller                             | Location                 |
| -----: | ------: | ---------------------------------- | ------------------------ |
| 100.0% |     389 | `doMethodInvoke(Object, Object[])` | `groovy.lang.MetaMethod` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |     386 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     349 | `Compile::Compile` | `libjvm.dylib` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                    | Location                                             |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 100.0% |     324 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801094c00` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     323 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                     |
| -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% |     323 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                                  | Location                                             |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     317 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f8011c9400` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     309 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801094400` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     238 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f80135c000` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     232 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 53.6% |     105 | `Compile::Optimize`       | `libjvm.dylib` |
| 46.4% |      91 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     168 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     166 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     166 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     150 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     150 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     150 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     140 | `Compilation::compile_method` | `libjvm.dylib` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Caller                                    | Location                                             |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 100.0% |     137 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801094c00` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 61.1% |      69 | `Compile::Optimize`                        | `libjvm.dylib` |
| 26.5% |      30 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  7.1% |       8 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|  2.7% |       3 | `Compile::remove_speculative_types`        | `libjvm.dylib` |
|  1.8% |       2 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 93.6% |     103 | `applyTo(SourceCode)`               | `org.codenarc.rule.AbstractRule`                         |
|  5.5% |       6 | `super$3$applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  0.9% |       1 | `super$3$applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |     105 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|   1.0% |       1 | `IfNode::Ideal_common`   | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      91 | `Compile::Optimize` | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Caller                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 94.0% |      78 | `applyTo(SourceCode, List)`               | `org.codenarc.rule.AbstractAstVisitorRule`           |
|  4.8% |       4 | `applyVisitor(AstVisitor, SourceCode)`    | `org.codenarc.rule.AbstractSharedAstVisitorRule`     |
|  1.2% |       1 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801125400` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      80 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 97.5% |      78 | `Compile::Compile`                     | `libjvm.dylib` |
| 53.8% |      43 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 50.0% |      40 | `Parse::do_call`                       | `libjvm.dylib` |
|  1.3% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      79 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      79 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      71 | `Parse::do_one_block` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      60 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      60 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      57 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      54 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      53 | `Thread::call_run` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      53 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |      48 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801097c00` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                                 | Location       |
| -----: | ------: | -------------------------------------- | -------------- |
| 100.0% |      45 | `Parse::do_call`                       | `libjvm.dylib` |
|  33.3% |      15 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
|   2.2% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller                             | Location                            |
| -----: | ------: | ---------------------------------- | ----------------------------------- |
| 100.0% |      45 | `visitMethods(GroovyClassVisitor)` | `org.codehaus.groovy.ast.ClassNode` |

##### `<init>(String)` (`org.codenarc.ruleset.XmlFileRuleSet`)

|      % | Samples | Caller                             | Location                                     |
| -----: | ------: | ---------------------------------- | -------------------------------------------- |
| 100.0% |      43 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `loadRuleSetFile(String)` (`org.codenarc.ruleset.RuleSetUtil`)

|     % | Samples | Caller                             | Location                                     |
| ----: | ------: | ---------------------------------- | -------------------------------------------- |
| 72.1% |      31 | `invokeStatic(Object, Object)`     | `java.lang.invoke.DirectMethodHandle$Holder` |
| 27.9% |      12 | `invokeStaticInit(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      43 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `createInitialRuleSetFromFiles()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |      43 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      34 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      34 | `Compilation::build_hir` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      31 | `WorkerThread::run` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      30 | `JVM_FillInStackTrace`                     | `libjvm.dylib` |
|  93.3% |      28 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location        |
| -----: | ------: | ------------------------------------------- | --------------- |
| 100.0% |      30 | `Java_java_lang_Throwable_fillInStackTrace` | `libjava.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Caller                  | Location              |
| -----: | ------: | ----------------------- | --------------------- |
| 100.0% |      30 | `fillInStackTrace(int)` | `java.lang.Throwable` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                              | Location       |
| ---: | ------: | ----------------------------------- | -------------- |
| 8.0% |       2 | `ImmutableOopMap::ImmutableOopMap`  | `libjvm.dylib` |
| 8.0% |       2 | `GraphBuilder::append_with_bci`     | `libjvm.dylib` |
| 8.0% |       2 | `TypeInterfaces::intersection_with` | `libjvm.dylib` |
| 8.0% |       2 | `PhaseLive::add_liveout`            | `libjvm.dylib` |
| 4.0% |       1 | `InstanceKlass::find_local_field`   | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |   1,081 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,082 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 94.4% |   1,021 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.9% |      53 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.3% |       3 | `WatcherThread::run`            | `libjvm.dylib` |
|  0.2% |       2 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.2% |       2 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,081 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.9% |   1,020 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.1% |       1 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 99.1% |   1,011 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  0.8% |       8 | `CompileQueue::get`                        | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                             | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 84.7% |     856 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| 14.8% |     150 | `Compiler::compile_method`    | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::~ciEnv`               | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::ciEnv`                | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.9% |     855 | `Compile::Compile`  | `libjvm.dylib` |
|  0.1% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 47.8% |     409 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 40.8% |     349 | `Compile::Optimize`                      | `libjvm.dylib` |
|  9.1% |      78 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.1% |       9 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  0.6% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 56.7% |     232 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| 14.7% |      60 | `Matcher::match`                     | `libjvm.dylib` |
| 13.2% |      54 | `PhaseOutput::Output`                | `libjvm.dylib` |
| 11.0% |      45 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |
|  1.7% |       7 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.3% |     403 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  0.5% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.2% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 99.8% |     404 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 13.8% |      56 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.2% |       1 | `linkToTargetMethod(Object, Object)`                    | `java.lang.invoke.Invokers$Holder`              |
|  0.2% |       1 | `I2C/C2I adapters(0xbb)`                                | `<unknown>`                                     |
|  0.2% |       1 | `setTarget(MethodHandle)`                               | `java.lang.invoke.MutableCallSite`              |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     405 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  77.3% |     313 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 97.3% |     393 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010c7400` |
| 95.5% |     386 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80109bc00` |
| 93.6% |     378 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010d5000` |
| 80.4% |     325 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8012bcc00` |
| 80.0% |     323 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8012b1000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     403 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800` |
|   1.5% |       6 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     403 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1800` |
|   0.2% |       1 | `guard(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000f8010aac00` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 97.8% |     393 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f8010a9800`  |
| 97.8% |     393 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f8010c6800`  |
| 80.6% |     324 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801094c00` |
| 44.0% |     177 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f8010d4c00`  |
| 12.9% |      52 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f801121c00`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa000` |
| 100.0% |     402 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f8010aac00` |
|  38.8% |     156 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8013b6800` |
|   9.5% |      38 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f801350c00` |
|   8.0% |      32 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8010a1800` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     402 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800` |
|  87.8% |     353 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f8010c6c00` |
|   0.2% |       1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa400` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f801094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 81.6% |     323 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 78.0% |     309 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 16.9% |      67 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 14.1% |      56 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 10.6% |      42 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     393 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801094400` |
|   0.5% |       2 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000f801031800`  |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                        | Location                                                  |
| -----: | ------: | --------------------------------------------- | --------------------------------------------------------- |
| 100.0% |     393 | `execute(String[])`                           | `org.codenarc.CodeNarc`                                   |
|   1.0% |       4 | `super$3$visitBlockStatement(BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`      |
|   0.5% |       2 | `parseArgs(String[])`                         | `org.codenarc.CodeNarc`                                   |
|   0.5% |       2 | `calculateFunctions(Collection)`              | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult` |
|   0.5% |       2 | `writeTitle(Writer)`                          | `org.codenarc.report.TextReportWriter`                    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010c6800`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     393 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f8010c7400`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     393 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f8010aa800` |
|  83.5% |     328 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                             | Location                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| 98.5% |     387 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
|  0.8% |       3 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |       2 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801634800` |
|  0.3% |       1 | `setProperty(Object, Class, Object, String)`       | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f80108e000`)

|      % | Samples | Callee                                                                                          | Location                                             |
| -----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     392 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000f801088800` |
|   1.3% |       5 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f801031800`  |
|   0.5% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     392 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80108e000` |
|   4.8% |      19 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f80109b400` |
|   3.3% |      13 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000f80109a000` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f801098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 99.2% |     386 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f80102b000` |
| 12.9% |      50 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.9% |      50 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f801105400` |
| 11.6% |      45 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.8% |      11 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f8010c9400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f801099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     389 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801098400` |
| 100.0% |     389 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f80109a000` |
|   1.3% |       5 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f80122c800` |
|   0.3% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f80108e000` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f80109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     389 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801099c00` |
|  10.3% |      40 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.5% |       2 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f801098c00` |
|   0.3% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f80109b800` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.5% |     387 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  1.0% |       4 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

|      % | Samples | Callee                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |     389 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 85.8% |     331 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| 11.9% |      46 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  2.3% |       9 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 30.1% |     105 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| 26.1% |      91 | `Compile::optimize_loops`      | `libjvm.dylib` |
| 19.8% |      69 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|  6.0% |      21 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
|  5.4% |      19 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.7% |     323 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.7% |     322 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| 98.5% |     318 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.6% |       2 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     323 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 97.5% |     309 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  2.2% |       7 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 79.6% |     246 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 17.8% |      55 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  1.9% |       6 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  0.6% |       2 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 73.9% |     176 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 16.8% |      40 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000f801362c00` |
|  5.5% |      13 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  2.5% |       6 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000f80135f000` |
|  0.8% |       2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 23.3% |      54 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 17.7% |      41 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.1% |      28 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  8.6% |      20 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  7.8% |      18 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.7% |     166 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 15.3% |      30 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 89.3% |     150 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.7% |      18 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.3% |      57 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.5% |      29 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 13.9% |      23 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  9.6% |      16 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  5.4% |       9 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     166 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 93.3% |     140 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  6.7% |      10 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     150 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     150 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location        |
| ----: | ------: | ------------------------------ | --------------- |
| 42.9% |      60 | `Compilation::emit_lir`        | `libjvm.dylib`  |
| 32.1% |      45 | `Compilation::build_hir`       | `libjvm.dylib`  |
| 23.6% |      33 | `Compilation::emit_code_body`  | `libjvm.dylib`  |
|  0.7% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib`  |
|  0.7% |       1 | `tlv_get_addr`                 | `libdyld.dylib` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                |
| ----: | ------: | --------------------------- | ------------------------------------------------------- |
| 75.2% |     103 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.4% |       6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`          |
|  3.6% |       5 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule` |
|  2.9% |       4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`        |
|  2.2% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.TrailingWhitespaceRule`   |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 92.9% |     105 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  0.9% |       1 | `CProjNode::hash`             | `libjvm.dylib` |
|  0.9% |       1 | `CmpPNode::sub`               | `libjvm.dylib` |
|  0.9% |       1 | `ProjNode::Value`             | `libjvm.dylib` |
|  0.9% |       1 | `StoreCMNode::hash`           | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 70.9% |      78 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 17.3% |      19 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  7.3% |       8 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.7% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.9% |       1 | `getAstVisitor()`       | `org.codenarc.rule.dry.DuplicateNumberLiteralRule`      |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 17.1% |      18 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  9.5% |      10 | `IfNode::Ideal`              | `libjvm.dylib` |
|  8.6% |       9 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  7.6% |       8 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  6.7% |       7 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      91 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                          |
| ----: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| 68.7% |      57 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                 |
| 20.5% |      17 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`           |
|  2.4% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`   |
|  1.2% |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.basic.EmptyClassAstVisitor`                    |
|  1.2% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 98.8% |      79 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  3.8% |       3 | `ciMethod::method_data`   | `libjvm.dylib` |
|  1.3% |       1 | `Parse::init_blocks`      | `libjvm.dylib` |
|  1.3% |       1 | `Parse::create_entry_map` | `libjvm.dylib` |
|  1.3% |       1 | `Parse::build_exits`      | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      80 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 89.9% |      71 | `Parse::do_call`         | `libjvm.dylib` |
| 17.7% |      14 | `Parse::do_field_access` | `libjvm.dylib` |
|  6.3% |       5 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.1% |       4 | `Parse::do_if`           | `libjvm.dylib` |
|  3.8% |       3 | `Parse::do_new`          | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      79 | `Parse::do_one_block` | `libjvm.dylib` |
|   1.3% |       1 | `Parse::merge_common` | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                                                | Location       |
| ----: | ------: | ----------------------------------------------------- | -------------- |
| 63.4% |      45 | `PredictedCallGenerator::generate`                    | `libjvm.dylib` |
| 56.3% |      40 | `ParseGenerator::generate`                            | `libjvm.dylib` |
| 25.4% |      18 | `Compile::call_generator`                             | `libjvm.dylib` |
|  4.2% |       3 | `GraphKit::record_profiled_arguments_for_speculation` | `libjvm.dylib` |
|  4.2% |       3 | `LibraryIntrinsic::generate`                          | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 75.0% |      45 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 25.0% |      15 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.7% |      46 | `Matcher::xform`                              | `libjvm.dylib` |
| 10.0% |       6 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  3.3% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  3.3% |       2 | `ProjNode::Opcode`                            | `libjvm.dylib` |
|  1.7% |       1 | `CheckCastPPNode::Opcode`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 64.9% |      37 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  1.8% |       1 | `CmpLNode::Opcode`                          | `libjvm.dylib` |
|  1.8% |       1 | `CmpPNode::Opcode`                          | `libjvm.dylib` |
|  1.8% |       1 | `ProjNode::Opcode`                          | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|    % | Samples | Callee                              | Location       |
| ---: | ------: | ----------------------------------- | -------------- |
| 7.4% |       4 | `MachNode::rematerialize`           | `libjvm.dylib` |
| 5.6% |       3 | `PhaseChaitin::split_DEF`           | `libjvm.dylib` |
| 5.6% |       3 | `PhaseChaitin::split_Rematerialize` | `libjvm.dylib` |
| 3.7% |       2 | `branchNode::is_block_proj`         | `libjvm.dylib` |
| 1.9% |       1 | `PhaseChaitin::split_USE`           | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 58.5% |      31 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |
| 15.1% |       8 | `KlassCleaningTask::work`         | `libjvm.dylib` |
| 15.1% |       8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib` |
|  9.4% |       5 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib` |
|  1.9% |       1 | `G1ClearBitMapTask::work`         | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 98.1% |      52 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.9% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f8010c8800` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee              | Location                                                               |
| ----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 89.6% |      43 | `init()`            | `org.codenarc.analyzer.SuppressionAnalyzer`                            |
|  2.1% |       1 | `wrong_method_stub` | `<unknown>`                                                            |
|  2.1% |       1 | `getName()`         | `org.codenarc.rule.groovyism.ExplicitCallToPutAtMethodRule`            |
|  2.1% |       1 | `getName()`         | `org.codenarc.rule.unnecessary.UnnecessaryBigDecimalInstantiationRule` |
|  2.1% |       1 | `append(String)`    | `java.lang.StringBuilder`                                              |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 95.6% |      43 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 33.3% |      15 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  4.4% |       2 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  2.2% |       1 | `GraphKit::null_check_common`      | `libjvm.dylib` |
|  2.2% |       1 | `GraphKit::type_check_receiver`    | `libjvm.dylib` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                     |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------------- |
| 75.6% |      34 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  4.4% |       2 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`            |
|  2.2% |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.NoDoubleAstVisitor`                            |
|  2.2% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                |
|  2.2% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |

##### `<init>(String)` (`org.codenarc.ruleset.XmlFileRuleSet`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.7% |      42 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  2.3% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `loadRuleSetFile(String)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      43 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      43 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `createInitialRuleSetFromFiles()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      43 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 97.1% |      33 | `GraphBuilder::GraphBuilder`      | `libjvm.dylib` |
|  2.9% |       1 | `ciMethod::has_balanced_monitors` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      34 | `IRScope::IRScope` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 45.2% |      14 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| 41.9% |      13 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |
| 12.9% |       4 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 93.3% |      28 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| 16.7% |       5 | `frame::sender_for_compiled_frame`         | `libjvm.dylib` |
| 16.7% |       5 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
|  3.3% |       1 | `Method::bcp_from`                         | `libjvm.dylib` |
|  3.3% |       1 | `frame::sender_raw`                        | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

|      % | Samples | Callee                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      30 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |      30 | `JVM_FillInStackTrace` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |      38 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                           |
| 1.3% |      19 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                              |
| 0.8% |      12 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                         |
| 0.7% |      11 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                     |
| 0.7% |      11 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                 |
| 0.7% |      11 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                            |
| 0.7% |      10 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                 |
| 0.7% |      10 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                            |
| 0.7% |      10 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                |
| 0.6% |       9 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |       9 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                           |
| 0.5% |       7 | `sys_icache_invalidate` (`libsystem_platform.dylib`) ← `nmethod::oops_do_process_weak` (`libjvm.dylib`) ← `G1CodeBlobClosure::do_code_blob` ← `G1ScanAndCountCodeBlobClosure::do_code_blob` ← `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` ← `G1CodeRootSet::nmethods_do` ← `G1ScanCodeRootsClosure::do_heap_region` ← `G1CollectedHeap::par_iterate_regions_array` ← `G1RemSet::scan_collection_set_code_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                        |
| 0.5% |       7 | `PhaseOutput::fill_buffer` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |       6 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`libjvm.dylib`) ← `KlassCleaningTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |       6 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                              |
| 0.4% |       6 | `Node_Backward_Iterator::next` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                 |
| 0.4% |       6 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                 |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                |
