# Sampling profile

Collected 1,966 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 49.0% |     963 |
| Native           | 33.9% |     667 |
| Standard library | 15.2% |     299 |
| Ours             |  1.2% |      24 |
| JIT              |  0.7% |      13 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 1,425 samples (72.5%) Thread::call_run at libjvm.dylib
│   ├── 1,361 samples (69.2%) JavaThread::thread_main_inner
│   │   └── 1,359 samples (69.1%) CompileBroker::compiler_thread_loop
│   │       ├── 1,217 samples (61.9%) CompileBroker::invoke_compiler_on_method
│   │       │   ├── 1,000 samples (50.9%) C2Compiler::compile_method
│   │       │   │   └── 996 samples (50.7%) Compile::Compile
│   │       │   │       ├── 500 samples (25.4%) Compile::Code_Gen
│   │       │   │       │   ├── 273 samples (13.9%) PhaseChaitin::Register_Allocate
│   │       │   │       │   │   ├── 58 samples (3.0%, self 2.1%) PhaseChaitin::Split
│   │       │   │       │   │   │   └── 17 samples (0.9%) 7 more callees, led by (0.3%) MachNode::rematerialize
│   │       │   │       │   │   ├── 50 samples (2.5%, self 1.5%) PhaseChaitin::build_ifg_physical
│   │       │   │       │   │   │   ├── 5 samples (0.3%, self 1.1% globally) IndexSetIterator::advance_and_next
│   │       │   │       │   │   │   └── 16 samples (0.8%) 10 more callees, led by (0.2%) PhaseChaitin::compute_initial_block_pressure
│   │       │   │       │   │   ├── 13 samples (0.7%) PhaseAggressiveCoalesce::insert_copies
│   │       │   │       │   │   └── 150 samples (7.6%) 25 more callees, led by (1.6%) PhaseChaitin::post_allocate_copy_removal
│   │       │   │       │   ├── 89 samples (4.5%) Matcher::match
│   │       │   │       │   │   ├── 70 samples (3.6%, self 0.9%) Matcher::xform
│   │       │   │       │   │   │   ├── 28 samples (1.4%) Matcher::match_tree
│   │       │   │       │   │   │   │   ├── … 1 sample (0.1%, self 1.3% globally) tlv_get_addr at libdyld.dylib
│   │       │   │       │   │   │   │   └── 18 samples (0.9%) 4 more callees, led by (0.7%) Matcher::Label_Root
│   │       │   │       │   │   │   └── 15 samples (0.8%) Arena::contains
│   │       │   │       │   │   └── 19 samples (1.0%) 6 more callees, led by (0.4%) Matcher::specialize_generic_vector_operands
│   │       │   │       │   └── 138 samples (7.0%) 8 more callees, led by (3.2%) PhaseCFG::do_global_code_motion
│   │       │   │       ├── 370 samples (18.8%) Compile::Optimize
│   │       │   │       │   ├── … 91 samples (4.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│   │       │   │       │   │   ├── 16 samples (0.8%, self 0.6%) PhaseIdealLoop::build_loop_early
│   │       │   │       │   │   └── 75 samples (3.8%) 19 more callees, led by (1.3%) PhaseIdealLoop::build_loop_late
│   │       │   │       │   └── 273 samples (13.9%) 14 more callees, led by (5.9%) PhaseIdealLoop::optimize
│   │       │   │       └── 126 samples (6.4%) 7 more callees, led by (5.8%) ParseGenerator::generate
│   │       │   └── 217 samples (11.0%) 8 more callees, led by (10.2%) Compiler::compile_method
│   │       └── … 134 samples (6.8%) PlatformMonitor::wait at libjvm.dylib
│   │           ├── 124 samples (6.3%, self 7.0% globally) __psynch_cvwait at libsystem_kernel.dylib
│   │           └── … 8 samples (0.4%, self 2.7% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   └── 64 samples (3.3%) 4 more callees, led by (2.6%) WorkerThread::run
├── 512 samples (26.0%) main(String[]) at org.codenarc.CodeNarc
│   └── … 499 samples (25.4%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│       ├── … 354 samples (18.0%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│       │   └── 353 samples (18.0%) 4 more callees, led by (13.6%) invokeExact_MT(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│       └── … 143 samples (7.3%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface …
└── 26 samples (1.3%) 6 more root frames, led by (0.9%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                    | Location                  |
| ---: | ------: | ------------------------------------------- | ------------------------- |
| 7.0% |     137 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`  |
| 2.7% |      54 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`  |
| 2.1% |      41 | `PhaseChaitin::Split`                       | `libjvm.dylib`            |
| 1.5% |      29 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`            |
| 1.3% |      26 | `tlv_get_addr`                              | `libdyld.dylib`           |
| 1.1% |      21 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib`            |
| 1.0% |      20 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib`            |
| 1.0% |      19 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`            |
| 1.0% |      19 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib` |
| 0.9% |      18 | `Matcher::xform`                            | `libjvm.dylib`            |
| 0.9% |      18 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib`            |
| 0.9% |      18 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`            |
| 0.9% |      17 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib`            |
| 0.8% |      16 | `Node::dominates`                           | `libjvm.dylib`            |
| 0.8% |      15 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib`            |
| 0.8% |      15 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib`            |
| 0.8% |      15 | `Arena::contains`                           | `libjvm.dylib`            |
| 0.7% |      13 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib`            |
| 0.6% |      12 | `ciObjectFactory::get_metadata`             | `libjvm.dylib`            |
| 0.6% |      11 | `InstanceKlass::find_method_index`          | `libjvm.dylib`            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 2.1% |      41 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 1.5% |      29 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 1.1% |      21 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 1.0% |      20 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 1.0% |      19 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.9% |      18 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.9% |      18 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.9% |      17 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.8% |      16 | `Node::dominates`                           | `libjvm.dylib` |
| 0.8% |      15 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.8% |      15 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.7% |      13 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.6% |      12 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.6% |      11 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.5% |      10 | `PhaseIterGVN::add_users_to_worklist`       | `libjvm.dylib` |
| 0.5% |       9 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| 0.5% |       9 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| 0.5% |       9 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.4% |       8 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| 0.4% |       8 | `LinearScanWalker::alloc_free_reg`          | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 7.0% |     137 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 2.7% |      54 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 1.3% |      26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.0% |      19 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.9% |      18 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| 0.8% |      15 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.6% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.5% |      10 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 0.5% |      10 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
| 0.4% |       8 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.4% |       8 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.4% |       8 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| 0.4% |       8 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| 0.4% |       7 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| 0.4% |       7 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.3% |       6 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.3% |       5 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.3% |       5 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
| 0.3% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |

##### Standard library

|    % | Samples | Function                                                                                    | Location                                                                             |
| ---: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 0.4% |       8 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                                                      |
| 0.4% |       7 | `cast(Object)`                                                                              | `java.lang.Class`                                                                    |
| 0.2% |       4 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                                                            |
| 0.2% |       3 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`                                             |
| 0.2% |       3 | `checkCustomized(MethodHandle)`                                                             | `java.lang.invoke.Invokers`                                                          |
| 0.2% |       3 | `apply(Object)`                                                                             | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector$$Lambda.0x0000007001092b30` |
| 0.2% |       3 | `getInCache(LambdaFormEditor$TransformKey)`                                                 | `java.lang.invoke.LambdaFormEditor`                                                  |
| 0.1% |       2 | `checkName(String)`                                                                         | `java.lang.ClassLoader`                                                              |
| 0.1% |       2 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                                                      |
| 0.1% |       2 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                      |
| 0.1% |       2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`                                 |
| 0.1% |       2 | `getNode(Object)`                                                                           | `java.util.HashMap`                                                                  |
| 0.1% |       2 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`                                         |
| 0.1% |       2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000`                                  |
| 0.1% |       2 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`                                         |
| 0.1% |       2 | `setGuards(Object)`                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                            |
| 0.1% |       2 | `maybeCustomize()`                                                                          | `java.lang.invoke.MethodHandle`                                                      |
| 0.1% |       2 | `makeGuardWithTestForm(MethodType)`                                                         | `java.lang.invoke.MethodHandleImpl`                                                  |
| 0.1% |       2 | `copyWithExtendL(MethodType, LambdaForm, Object)`                                           | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`                                  |
| 0.1% |       2 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001130c00`                                  |

##### Ours

|    % | Samples | Function                                                     | Location                                                              |
| ---: | ------: | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| 0.1% |       2 | `collectViolations(SourceCode, RuleSet)`                     | `org.codenarc.analyzer.AbstractSourceAnalyzer`                        |
| 0.1% |       2 | `checkAssignmentWithinDeclaration(BinaryExpression, String)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`          |
| 0.1% |       1 | `<init>()`                                                   | `org.codenarc.rule.groovyism.ExplicitCallToAndMethodRule`             |
| 0.1% |       1 | `init()`                                                     | `org.codenarc.source.AbstractSourceCode`                              |
| 0.1% |       1 | `getAstVisitor()`                                            | `org.codenarc.rule.AbstractAstVisitorRule`                            |
| 0.1% |       1 | `calculateFunctions(Collection)`                             | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`             |
| 0.1% |       1 | `visitVariableExpression(VariableExpression)`                | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |
| 0.1% |       1 | `visitClassEx(ClassNode)`                                    | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
| 0.1% |       1 | `addViolationIfDoubleQuoted(ConstantExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`          |
| 0.1% |       1 | `isMethodCallOnObject(Expression, String)`                   | `org.codenarc.util.AstUtil`                                           |
| 0.1% |       1 | `getMetaClass()`                                             | `org.codenarc.rule.convention.NoJavaUtilDateRule`                     |
| 0.1% |       1 | `visitMethod(MethodNode)`                                    | `org.codenarc.rule.naming.FactoryMethodNameAstVisitor`                |
| 0.1% |       1 | `getMetaClass()`                                             | `org.codenarc.rule.dry.DuplicateStringLiteralRule`                    |
| 0.1% |       1 | `getRegex()`                                                 | `org.codenarc.rule.naming.FactoryMethodNameRule`                      |
| 0.1% |       1 | `checkStatementIndent(Statement, BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
| 0.1% |       1 | `visitClass(ClassNode)`                                      | `org.codenarc.rule.AbstractFieldVisitor`                              |
| 0.1% |       1 | `isNotNullCheck(Object)`                                     | `org.codenarc.util.AstUtil`                                           |
| 0.1% |       1 | `<init>()`                                                   | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`               |
| 0.1% |       1 | `<init>()`                                                   | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`         |
| 0.1% |       1 | `removeAnyViolationsForSameLine(int)`                        | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`        |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       7 | `java.lang.Class:4068` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       4 | `java.lang.reflect.Array:78` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:936` |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:941` |
| 33.3% |       1 | `java.util.concurrent.ConcurrentHashMap:937` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Location                        |
| ----: | ------: | ------------------------------- |
| 33.3% |       1 | `java.lang.invoke.Invokers:627` |
| 33.3% |       1 | `java.lang.invoke.Invokers:626` |
| 33.3% |       1 | `java.lang.invoke.Invokers:623` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:383` |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:395` |
| 33.3% |       1 | `java.lang.invoke.LambdaFormEditor:396` |

##### `checkName(String)` (`java.lang.ClassLoader`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       2 | `java.lang.ClassLoader:1155` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:479` |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:480` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Location                                            |
| ----: | ------: | --------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:370` |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:376` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.util.HashMap:576` |

##### `setGuards(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:932` |
| 50.0% |       1 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector:958` |

##### `maybeCustomize()` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Location                             |
| ----: | ------: | ------------------------------------ |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:1846` |
| 50.0% |       1 | `java.lang.invoke.MethodHandle:1843` |

##### `makeGuardWithTestForm(MethodType)` (`java.lang.invoke.MethodHandleImpl`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:841` |
| 50.0% |       1 | `java.lang.invoke.MethodHandleImpl:789` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `checkAssignmentWithinDeclaration(BinaryExpression, String)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       2 | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor:195` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:91` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitorRule:79` |

##### `calculateFunctions(Collection)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult:56` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor:84` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:93` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:49` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `org.codenarc.util.AstUtil:272` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.FactoryMethodNameAstVisitor`)

|      % | Samples | Location                                                  |
| -----: | ------: | --------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.naming.FactoryMethodNameAstVisitor:41` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:305` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractFieldVisitor:40` |

##### `isNotNullCheck(Object)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `org.codenarc.util.AstUtil:907` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor:128` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     137 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      54 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      41 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      29 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                          | Location       |
| ---: | ------: | ------------------------------- | -------------- |
| 7.7% |       2 | `CollectedHeap::array_allocate` | `libjvm.dylib` |
| 3.8% |       1 | `loadPNode::loadPNode`          | `libjvm.dylib` |
| 3.8% |       1 | `ciInstance::field_value_impl`  | `libjvm.dylib` |
| 3.8% |       1 | `Matcher::ReduceInst`           | `libjvm.dylib` |
| 3.8% |       1 | `GraphKit::uncommon_trap`       | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 23.8% |       5 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 19.0% |       4 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| 19.0% |       4 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
|  4.8% |       1 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
|  4.8% |       1 | `PhaseIFG::re_insert`              | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      20 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 94.7% |      18 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
|  5.3% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 26.3% |       5 | `JVM_NewArray`            | `libjvm.dylib` |
| 21.1% |       4 | `InterpreterRuntime::ldc` | `libjvm.dylib` |
| 10.5% |       2 | `MHN_init_Mem`            | `libjvm.dylib` |
|  5.3% |       1 | `JVM_Clone`               | `libjvm.dylib` |
|  5.3% |       1 | `jni_IsAssignableFrom`    | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      18 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      18 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      18 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      16 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 93.3% |      14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  6.7% |       1 | `PhaseIdealLoop::PhaseIdealLoop`     | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      15 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 25.0% |       3 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| 16.7% |       2 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 16.7% |       2 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |
| 16.7% |       2 | `ciMethod::ensure_method_data`         | `libjvm.dylib` |
|  8.3% |       1 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      11 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 54.5% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 45.5% |       5 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 30.0% |       3 | `IfNode::Ideal_common`        | `libjvm.dylib` |
| 30.0% |       3 | `PhaseIterGVN::PhaseIterGVN`  | `libjvm.dylib` |
| 20.0% |       2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 10.0% |       1 | `RegionNode::Ideal`           | `libjvm.dylib` |
| 10.0% |       1 | `Node::set_req_X`             | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 30.0% |       3 | `PhaseChaitin::Register_Allocate`             | `libjvm.dylib` |
| 10.0% |       1 | `MergeMemNode::MergeMemNode`                  | `libjvm.dylib` |
| 10.0% |       1 | `ConNode::make`                               | `libjvm.dylib` |
| 10.0% |       1 | `Compile::remove_speculative_types`           | `libjvm.dylib` |
| 10.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 90.0% |       9 | `ciObjectFactory::get_symbol`           | `libjvm.dylib` |
| 10.0% |       1 | `AnnotationCollector::annotation_index` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 77.8% |       7 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 22.2% |       2 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 87.5% |       7 | `PhaseLive::compute`              | `libjvm.dylib` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                                | Location                  |
| -----: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |       8 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 87.5% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| 12.5% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       8 | `free_medium` | `libsystem_malloc.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       8 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                                            | Location                                            |
| ----: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 12.5% |       1 | `invoke(Object, int)`                             | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| 12.5% |       1 | `copyWithExtendL(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`  |
| 12.5% |       1 | `invoke(Object, Object, Object, long)`            | `java.lang.invoke.LambdaForm$MH.0x0000007001368000` |
| 12.5% |       1 | `invokeVirtual(Object, Object, Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.5% |       1 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 85.7% |       6 | `Type::hashcons`              | `libjvm.dylib` |
| 14.3% |       1 | `Compile::flatten_alias_type` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                  | Location            |
| ----: | ------: | ----------------------- | ------------------- |
| 14.3% |       1 | `__vfprintf`            | `libsystem_c.dylib` |
| 14.3% |       1 | `Node::add_req`         | `libjvm.dylib`      |
| 14.3% |       1 | `PhaseOutput::Output`   | `libjvm.dylib`      |
| 14.3% |       1 | `Node::out_grow`        | `libjvm.dylib`      |
| 14.3% |       1 | `CodeSection::relocate` | `libjvm.dylib`      |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       7 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 66.7% |       4 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 33.3% |       2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 60.0% |       3 | `nmethod::nmethod`                             | `libjvm.dylib` |
| 20.0% |       1 | `CompiledIC::set_to_monomorphic`               | `libjvm.dylib` |
| 20.0% |       1 | `CompiledDirectStaticCall::set_to_interpreted` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 60.0% |       3 | `WorkerThread::run`              | `libjvm.dylib` |
| 40.0% |       2 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 80.0% |       4 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 20.0% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       4 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|     % | Samples | Caller                         | Location                                 |
| ----: | ------: | ------------------------------ | ---------------------------------------- |
| 66.7% |       2 | `getNoCheckStale(Object)`      | `jdk.internal.util.ReferencedKeyMap`     |
| 33.3% |       1 | `getOrDefault(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|     % | Samples | Caller                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 33.3% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 33.3% |       1 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
| 33.3% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011c8400` |

##### `apply(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector$$Lambda.0x0000007001092b30`)

|      % | Samples | Caller           | Location                                 |
| -----: | ------: | ---------------- | ---------------------------------------- |
| 100.0% |       3 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|     % | Samples | Caller                                       | Location                            |
| ----: | ------: | -------------------------------------------- | ----------------------------------- |
| 66.7% |       2 | `addArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| 33.3% |       1 | `collectArgumentsForm(int, MethodType)`      | `java.lang.invoke.LambdaFormEditor` |

##### `checkName(String)` (`java.lang.ClassLoader`)

|     % | Samples | Caller                                     | Location                |
| ----: | ------: | ------------------------------------------ | ----------------------- |
| 50.0% |       1 | `findBootstrapClassOrNull(String)`         | `java.lang.ClassLoader` |
| 50.0% |       1 | `preDefineClass(String, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                           | Location                                  |
| ----: | ------: | -------------------------------- | ----------------------------------------- |
| 50.0% |       1 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle`      |
| 50.0% |       1 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.DelegatingMethodHandle` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                        | Location                                        |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       2 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 50.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070013bb400` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                | Location                  |
| ----: | ------: | --------------------- | ------------------------- |
| 50.0% |       1 | `containsKey(Object)` | `java.util.HashMap`       |
| 50.0% |       1 | `get(Object)`         | `java.util.LinkedHashMap` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5400` |
| 50.0% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070014e9400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d5000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       2 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `setGuards(Object)` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|     % | Samples | Caller                | Location                                                  |
| ----: | ------: | --------------------- | --------------------------------------------------------- |
| 50.0% |       1 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 50.0% |       1 | `castAndSetGuards()`  | `org.codehaus.groovy.vmplugin.v8.Selector$CastSelector`   |

##### `maybeCustomize()` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller        | Location                                            |
| -----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% |       2 | `countDown()` | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `makeGuardWithTestForm(MethodType)` (`java.lang.invoke.MethodHandleImpl`)

|      % | Samples | Caller                                                        | Location                            |
| -----: | ------: | ------------------------------------------------------------- | ----------------------------------- |
| 100.0% |       2 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandleImpl` |

##### `copyWithExtendL(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

|     % | Samples | Caller                                                                    | Location                            |
| ----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| 50.0% |       1 | `asCollector(int, Class, int)`                                            | `java.lang.invoke.MethodHandle`     |
| 50.0% |       1 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001130c00`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |       2 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `checkAssignmentWithinDeclaration(BinaryExpression, String)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|      % | Samples | Caller                                          | Location                                     |
| -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToAndMethodRule`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `calculateFunctions(Collection)` (`org.gmetrics.metric.abc.result.AggregateAbcMetricResult`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitVariableExpression(VariableExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|      % | Samples | Caller                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.VariableExpression` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|      % | Samples | Caller                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Caller                                 | Location                                     |
| -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getMetaClass()` (`org.codenarc.rule.convention.NoJavaUtilDateRule`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.naming.FactoryMethodNameAstVisitor`)

|      % | Samples | Caller                  | Location                                  |
| -----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor` |

##### `getMetaClass()` (`org.codenarc.rule.dry.DuplicateStringLiteralRule`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getRegex()` (`org.codenarc.rule.naming.FactoryMethodNameRule`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Caller                                          | Location                                     |
| -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `isNotNullCheck(Object)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       1 | `unknown` | `<unknown>` |

##### `<init>()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       1 | `unknown` | `<unknown>` |

##### `<init>()` (`org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`)

|      % | Samples | Caller                     | Location                                     |
| -----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `removeAnyViolationsForSameLine(int)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|      % | Samples | Caller                               | Location                                             |
| -----: | ------: | ------------------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `invokeSpecial(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x00000070013d2800` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 72.6% |   1,428 | `_pthread_start`                                                                              | `libsystem_pthread.dylib`                            |
| 72.6% |   1,428 | `thread_start`                                                                                | `libsystem_pthread.dylib`                            |
| 72.5% |   1,426 | `thread_native_entry`                                                                         | `libjvm.dylib`                                       |
| 72.5% |   1,425 | `Thread::call_run`                                                                            | `libjvm.dylib`                                       |
| 69.2% |   1,361 | `JavaThread::thread_main_inner`                                                               | `libjvm.dylib`                                       |
| 69.1% |   1,359 | `CompileBroker::compiler_thread_loop`                                                         | `libjvm.dylib`                                       |
| 61.9% |   1,217 | `CompileBroker::invoke_compiler_on_method`                                                    | `libjvm.dylib`                                       |
| 50.9% |   1,000 | `C2Compiler::compile_method`                                                                  | `libjvm.dylib`                                       |
| 50.7% |     997 | `Compile::Compile`                                                                            | `libjvm.dylib`                                       |
| 26.0% |     512 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 25.9% |     510 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 25.8% |     508 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 25.8% |     507 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 25.6% |     503 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 25.6% |     503 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 25.5% |     501 | `Compile::Code_Gen`                                                                           | `libjvm.dylib`                                       |
| 25.5% |     501 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 25.5% |     501 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 25.5% |     501 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 24.9% |     490 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 69.1% |   1,359 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 61.9% |   1,217 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 50.9% |   1,000 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 50.7% |     997 | `Compile::Compile`                         | `libjvm.dylib` |
| 25.5% |     501 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 18.8% |     370 | `Compile::Optimize`                        | `libjvm.dylib` |
| 13.9% |     273 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 10.8% |     213 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 10.2% |     200 | `Compilation::compile_method`              | `libjvm.dylib` |
| 10.2% |     200 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  9.6% |     188 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  9.5% |     187 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  9.2% |     181 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  7.0% |     138 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.5% |     109 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  5.0% |      99 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  4.9% |      97 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|  4.5% |      89 | `Matcher::match`                           | `libjvm.dylib` |
|  4.2% |      83 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  3.7% |      73 | `Compilation::emit_lir`                    | `libjvm.dylib` |

##### Native

|     % | Samples | Function                            | Location                  |
| ----: | ------: | ----------------------------------- | ------------------------- |
| 72.6% |   1,428 | `_pthread_start`                    | `libsystem_pthread.dylib` |
| 72.6% |   1,428 | `thread_start`                      | `libsystem_pthread.dylib` |
| 72.5% |   1,426 | `thread_native_entry`               | `libjvm.dylib`            |
| 72.5% |   1,425 | `Thread::call_run`                  | `libjvm.dylib`            |
| 69.2% |   1,361 | `JavaThread::thread_main_inner`     | `libjvm.dylib`            |
| 10.3% |     202 | `Compiler::compile_method`          | `libjvm.dylib`            |
|  7.5% |     147 | `PlatformMonitor::wait`             | `libjvm.dylib`            |
|  7.0% |     137 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
|  6.9% |     136 | `Monitor::wait`                     | `libjvm.dylib`            |
|  5.9% |     116 | `Parse::Parse`                      | `libjvm.dylib`            |
|  5.9% |     116 | `ParseGenerator::generate`          | `libjvm.dylib`            |
|  5.7% |     113 | `Parse::do_all_blocks`              | `libjvm.dylib`            |
|  5.7% |     112 | `Parse::do_one_block`               | `libjvm.dylib`            |
|  5.4% |     106 | `Parse::do_call`                    | `libjvm.dylib`            |
|  3.7% |      73 | `PredictedCallGenerator::generate`  | `libjvm.dylib`            |
|  3.3% |      65 | `IRScope::IRScope`                  | `libjvm.dylib`            |
|  3.3% |      65 | `IR::IR`                            | `libjvm.dylib`            |
|  2.7% |      54 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`  |
|  2.7% |      54 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
|  2.6% |      52 | `WorkerThread::run`                 | `libjvm.dylib`            |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 25.9% |     510 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 25.8% |     508 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 25.8% |     507 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 25.6% |     503 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 25.6% |     503 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 25.5% |     501 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 25.5% |     501 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 25.5% |     501 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 24.9% |     490 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 24.7% |     486 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 24.7% |     486 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 24.7% |     485 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 24.6% |     483 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 24.6% |     483 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 24.6% |     483 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400`  |
| 24.5% |     481 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 24.5% |     481 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 24.5% |     481 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 24.1% |     474 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                           |
| 24.1% |     474 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 26.0% |     512 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| 24.6% |     483 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| 24.1% |     473 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| 19.3% |     380 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 19.3% |     379 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 19.2% |     378 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 19.0% |     374 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 18.5% |     363 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 14.8% |     291 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  9.9% |     194 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  8.3% |     163 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
|  6.4% |     126 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  5.0% |      99 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  3.1% |      60 | `buildRuleSet()`                                 | `org.codenarc.CodeNarcRunner`                                               |
|  3.0% |      59 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                             |
|  3.0% |      59 | `<init>(String)`                                 | `org.codenarc.ruleset.XmlFileRuleSet`                                       |
|  3.0% |      59 | `loadRuleSetFile(String)`                        | `org.codenarc.ruleset.RuleSetUtil`                                          |
|  3.0% |      59 | `doCall(Object)`                                 | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |
|  3.0% |      59 | `createInitialRuleSetFromFiles()`                | `org.codenarc.CodeNarcRunner`                                               |
|  3.0% |      59 | `createInitialRuleSet()`                         | `org.codenarc.CodeNarcRunner`                                               |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   1,428 | `thread_start` | `libsystem_pthread.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,426 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   1,425 | `thread_native_entry` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,361 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |   1,359 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   1,217 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |   1,000 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 99.9% |     996 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  0.1% |       1 | `OptoRuntime::generate_stub` | `libjvm.dylib` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.6% |     508 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.4% |       7 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.0% |     503 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 95.3% |     484 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 78.1% |     397 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d6000` |
| 76.0% |     386 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b3400` |
| 53.9% |     274 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013bb000` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |     507 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  68.8% |     349 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   1.2% |       6 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|   1.0% |       5 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     503 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   8.3% |      42 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                     | Location                                                                   |
| -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------- |
| 100.0% |     503 | `main(String[])`                           | `org.codenarc.CodeNarc`                                                    |
|  78.7% |     396 | `execute()`                                | `org.codenarc.CodeNarcRunner`                                              |
|  75.1% |     378 | `processDirectory(String, RuleSet)`        | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  40.4% |     203 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  35.6% |     179 | `doCall(Object)`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     501 | `Compile::Compile` | `libjvm.dylib` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     501 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  84.4% |     423 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     501 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  96.4% |     483 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  92.4% |     463 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000` |
|  49.7% |     249 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
|  15.0% |      75 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001120800` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     501 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  84.4% |     423 | `delegate(Object, Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.0% |     485 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
| 74.1% |     363 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d4400` |
|  1.8% |       9 | `invoke(Object, Object, long)`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001362000` |
|  1.4% |       7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9400` |
|  1.4% |       7 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000070012c1400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     486 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   0.4% |       2 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 97.5% |     474 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 13.4% |      65 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 12.1% |      59 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| 12.1% |      59 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |
|  9.9% |      48 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     485 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     483 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800` |
|   2.9% |      14 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5400` |
|   0.8% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|   0.8% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001110800` |
|   0.6% |       3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001121c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Caller                                           | Location                                            |
| -----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 100.0% |     483 | `guardWithCatch(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
|   0.2% |       1 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     483 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     483 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     481 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|   9.6% |      46 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     481 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|  98.3% |     473 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|  21.6% |     104 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     481 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  10.4% |      50 | `delegate(Object, Object)`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   2.1% |      10 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Caller                               | Location                                                         |
| ----: | ------: | ------------------------------------ | ---------------------------------------------------------------- |
| 99.8% |     473 | `invoke(Object, Object[])`           | `org.codehaus.groovy.reflection.CachedMethod`                    |
|  1.7% |       8 | `doInvoke(Object, Object[], Method)` | `org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite` |
|  0.2% |       1 | `getEnumConstantsShared()`           | `java.lang.Class`                                                |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.8% |     473 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 13.5% |      64 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
|  0.4% |       2 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |     473 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                    | Location                                             |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 100.0% |     380 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                     |
| -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% |     379 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     378 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Caller                                                  | Location                                             |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     374 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011c9400` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     370 | `Compile::Compile` | `libjvm.dylib` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     363 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Caller                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     291 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000700135cc00` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |     273 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 54.5% |     116 | `Compile::Optimize`       | `libjvm.dylib` |
| 45.5% |      97 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 99.5% |     201 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  0.5% |       1 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     200 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     200 | `Compiler::compile_method` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     194 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     188 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     187 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     181 | `Compilation::compile_method` | `libjvm.dylib` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Caller                                    | Location                                             |
| -----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 100.0% |     163 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 91.8% |     135 | `Monitor::wait`                         | `libjvm.dylib` |
|  8.2% |      12 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     138 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     137 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.3% |     135 | `CompileQueue::get`        | `libjvm.dylib` |
|  0.7% |       1 | `ConcurrentGCThread::stop` | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 92.1% |     116 | `applyTo(SourceCode)`               | `org.codenarc.rule.AbstractRule`                         |
|  5.6% |       7 | `super$3$applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  2.4% |       3 | `super$3$applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `Parse::Parse` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     116 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 99.1% |     115 | `Compile::Compile`                     | `libjvm.dylib` |
| 61.2% |      71 | `PredictedCallGenerator::generate`     | `libjvm.dylib` |
| 56.0% |      65 | `Parse::do_call`                       | `libjvm.dylib` |
|  0.9% |       1 | `CallGenerator::do_late_inline_helper` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     113 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |     112 | `Parse::do_all_blocks` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 62.4% |      68 | `Compile::Optimize`                    | `libjvm.dylib` |
| 21.1% |      23 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 14.7% |      16 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  1.8% |       2 | `Compile::remove_speculative_types`    | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     106 | `Parse::do_one_block` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      99 | `PhaseIterGVN::optimize`  | `libjvm.dylib` |
|   1.0% |       1 | `StrIntrinsicNode::Ideal` | `libjvm.dylib` |
|   1.0% |       1 | `IfNode::Ideal_common`    | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Caller                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 96.0% |      95 | `applyTo(SourceCode, List)`               | `org.codenarc.rule.AbstractAstVisitorRule`           |
|  3.0% |       3 | `applyVisitor(AstVisitor, SourceCode)`    | `org.codenarc.rule.AbstractSharedAstVisitorRule`     |
|  1.0% |       1 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125400` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      97 | `Compile::Optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      89 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      83 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      73 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      73 | `Parse::do_call`                   | `libjvm.dylib` |
|  42.5% |      31 | `PredictedCallGenerator::generate` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |      65 | `IR::IR` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      65 | `Compilation::build_hir` | `libjvm.dylib` |

##### `buildRuleSet()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |      60 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      59 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(String)` (`org.codenarc.ruleset.XmlFileRuleSet`)

|      % | Samples | Caller                             | Location                                     |
| -----: | ------: | ---------------------------------- | -------------------------------------------- |
| 100.0% |      59 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `loadRuleSetFile(String)` (`org.codenarc.ruleset.RuleSetUtil`)

|     % | Samples | Caller                             | Location                                     |
| ----: | ------: | ---------------------------------- | -------------------------------------------- |
| 69.5% |      41 | `invokeStatic(Object, Object)`     | `java.lang.invoke.DirectMethodHandle$Holder` |
| 30.5% |      18 | `invokeStaticInit(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `doCall(Object)` (`org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |      59 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `createInitialRuleSetFromFiles()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |      59 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `createInitialRuleSet()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Caller                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |      59 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      54 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                                | Location                  |
| ----: | ------: | ------------------------------------- | ------------------------- |
| 40.7% |      22 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |
| 38.9% |      21 | `Mutex::lock`                         | `libjvm.dylib`            |
| 14.8% |       8 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
|  5.6% |       3 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      52 | `Thread::call_run` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |   1,426 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       2 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,428 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 99.9% |   1,425 | `Thread::call_run`                      | `libjvm.dylib` |
|  0.1% |       1 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 95.5% |   1,361 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  3.6% |      52 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.4% |       5 | `WatcherThread::run`            | `libjvm.dylib` |
|  0.4% |       5 | `VMThread::run`                 | `libjvm.dylib` |
|  0.1% |       2 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 99.9% |   1,359 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  0.1% |       2 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 89.6% |   1,217 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| 10.2% |     138 | `CompileQueue::get`                            | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::init_compiler_runtime`         | `libjvm.dylib` |
|  0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
|  0.1% |       1 | `Compiler::compile_method`                     | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 82.2% |   1,000 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| 16.5% |     201 | `Compiler::compile_method`    | `libjvm.dylib` |
|  0.4% |       5 | `CompilationLog::log_compile` | `libjvm.dylib` |
|  0.4% |       5 | `ciEnv::ciEnv`                | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::~ciEnv`               | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     996 | `Compile::Compile`  | `libjvm.dylib` |
|  0.3% |       3 | `Compile::~Compile` | `libjvm.dylib` |
|  0.1% |       1 | `Chunk::next_chop`  | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.3% |     501 | `Compile::Code_Gen`            | `libjvm.dylib` |
| 37.1% |     370 | `Compile::Optimize`            | `libjvm.dylib` |
| 11.5% |     115 | `ParseGenerator::generate`     | `libjvm.dylib` |
|  0.4% |       4 | `CallGenerator::for_inline`    | `libjvm.dylib` |
|  0.2% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 98.2% |     503 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  1.4% |       7 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.4% |       2 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 99.4% |     507 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 17.6% |      90 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.2% |       1 | `setTarget(MethodHandle)`                               | `java.lang.invoke.MutableCallSite`              |
|  0.2% |       1 | `bypassCache(Boolean, Object[])`                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     508 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  76.4% |     388 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 95.3% |     483 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
| 93.3% |     473 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 91.3% |     463 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000` |
| 74.8% |     379 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b1000` |
| 73.4% |     372 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012bd000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     503 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|   0.6% |       3 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     503 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|   0.2% |       1 | `guard(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 54.5% |     273 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.8% |      89 | `Matcher::match`                  | `libjvm.dylib` |
| 12.4% |      62 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 11.8% |      59 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  1.4% |       7 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 96.8% |     485 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 96.4% |     483 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 75.8% |     380 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 42.5% |     213 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00`  |
| 14.8% |      74 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001121c00`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     501 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     501 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  36.3% |     182 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013bb400` |
|   8.4% |      42 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|   7.2% |      36 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700135c800` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     501 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  84.4% |     423 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.4% |       2 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 77.1% |     378 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 74.1% |     363 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 22.0% |     108 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 12.0% |      59 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |
| 11.0% |      54 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.6% |     484 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.6% |       8 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|  1.4% |       7 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     486 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   4.9% |      24 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |
|   2.1% |      10 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     485 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|   0.2% |       1 | `collector(Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                                      | Location                                                     |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |     483 | `execute(String[])`                                         | `org.codenarc.CodeNarc`                                      |
|   0.8% |       4 | `parseArgs(String[])`                                       | `org.codenarc.CodeNarc`                                      |
|   0.8% |       4 | `calculateFunctions(Collection)`                            | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`    |
|   0.6% |       3 | `super$2$visitMethodCallExpression(MethodCallExpression)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`           |
|   0.6% |       3 | `super$3$visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Callee                                  | Location                                             |
| -----: | ------: | --------------------------------------- | ---------------------------------------------------- |
| 100.0% |     483 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   0.2% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     483 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  80.3% |     388 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.2% |       1 | `invoke(Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| 98.1% |     474 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
|  1.0% |       5 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  0.4% |       2 | `linkToCallSite(Object, Object, int, int, Object)`               | `java.lang.invoke.LambdaForm$MH.0x0000007001634c00` |
|  0.2% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`              |
|  0.2% |       1 | `invokeClosure(Object, Object[])`                                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 98.3% |     473 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 13.3% |      64 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.9% |      62 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
| 12.7% |      61 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  2.7% |      13 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     481 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     481 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|   1.0% |       5 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700122c800` |
|   0.4% |       2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   0.4% |       2 | `maybeStopCounting(Object)`      | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     481 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  10.0% |      48 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.4% |       2 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001098c00` |
|   0.2% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.8% |     473 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.4% |       2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                                |
| ----: | ------: | ------------------------- | ------------------------------------------------------- |
| 99.8% |     473 | `execute()`               | `org.codenarc.CodeNarcRunner`                           |
| 12.4% |      59 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`                           |
|  0.6% |       3 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter`              |
|  0.2% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                                 |
|  0.2% |       1 | `createMetric()`          | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor` |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.7% |     396 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| 13.7% |      65 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  2.5% |      12 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.7% |     379 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.7% |     378 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.7% |     377 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| 98.9% |     374 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.5% |       2 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 97.1% |     363 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  2.7% |      10 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.3% |       1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 31.4% |     116 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 26.2% |      97 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 18.4% |      68 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  6.2% |      23 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  5.9% |      22 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 82.4% |     299 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 14.6% |      53 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  2.5% |       9 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 69.8% |     203 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 21.3% |      62 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001365800` |
|  3.4% |      10 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000007001361c00` |
|  3.4% |      10 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.4% |       4 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 21.2% |      58 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 18.3% |      50 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 11.4% |      31 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  9.9% |      27 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  7.7% |      21 | `PhaseLive::compute`                       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.3% |     188 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 10.8% |      23 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  0.9% |       2 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 99.0% |     200 | `Compilation::Compilation`                     | `libjvm.dylib` |
|  0.5% |       1 | `ExceptionHandlerTable::ExceptionHandlerTable` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 90.5% |     181 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  9.5% |      19 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     200 | `Compilation::compile_method` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 92.3% |     179 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  7.7% |      15 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 99.5% |     187 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|  0.5% |       1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 31.6% |      59 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 18.7% |      35 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 12.8% |      24 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 11.8% |      22 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  6.4% |      12 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 45.9% |      83 | `Compilation::build_hir`       | `libjvm.dylib` |
| 40.3% |      73 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 12.7% |      23 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.1% |       2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                              |
| ----: | ------: | --------------------------- | ----------------------------------------------------- |
| 71.2% |     116 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`            |
|  4.3% |       7 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`        |
|  3.7% |       6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`          |
|  2.5% |       4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`      |
|  2.5% |       4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSamePackageRule` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 93.2% |     137 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  5.4% |       8 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|  1.4% |       2 | `__gettimeofday`     | `libsystem_kernel.dylib`  |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 97.8% |     135 | `Monitor::wait`                  | `libjvm.dylib` |
|  1.4% |       2 | `Mutex::lock`                    | `libjvm.dylib` |
|  0.7% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 99.3% |     135 | `PlatformMonitor::wait`          | `libjvm.dylib` |
|  0.7% |       1 | `JavaFrameAnchor::make_walkable` | `libjvm.dylib` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 75.4% |      95 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 15.9% |      20 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.4% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  1.6% |       2 | `getAst()`              | `org.codenarc.source.AbstractSourceCode`                |
|  1.6% |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 97.4% |     113 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  4.3% |       5 | `Parse::build_exits`      | `libjvm.dylib` |
|  2.6% |       3 | `Parse::do_exits`         | `libjvm.dylib` |
|  1.7% |       2 | `ciMethod::method_data`   | `libjvm.dylib` |
|  0.9% |       1 | `GraphKit::set_map_clone` | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |     116 | `Parse::Parse` | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 99.1% |     112 | `Parse::do_one_block`      | `libjvm.dylib` |
|  0.9% |       1 | `Parse::merge_common`      | `libjvm.dylib` |
|  0.9% |       1 | `Parse::do_one_bytecode`   | `libjvm.dylib` |
|  0.9% |       1 | `BarrierSetC2::ideal_node` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 94.6% |     106 | `Parse::do_call`         | `libjvm.dylib` |
| 18.8% |      21 | `Parse::do_field_access` | `libjvm.dylib` |
|  5.4% |       6 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  2.7% |       3 | `Parse::return_current`  | `libjvm.dylib` |
|  2.7% |       3 | `Parse::do_checkcast`    | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 90.8% |      99 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.8% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  0.9% |       1 | `SubNode::Value`                          | `libjvm.dylib` |
|  0.9% |       1 | `TypeTuple::make`                         | `libjvm.dylib` |
|  0.9% |       1 | `PhiNode::Ideal`                          | `libjvm.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 68.9% |      73 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
| 61.3% |      65 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 26.4% |      28 | `Compile::call_generator`          | `libjvm.dylib` |
|  6.6% |       7 | `LibraryIntrinsic::generate`       | `libjvm.dylib` |
|  2.8% |       3 | `GraphKit::kill_dead_locals`       | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 11.1% |      11 | `RegionNode::Ideal`          | `libjvm.dylib` |
| 10.1% |      10 | `IfNode::Ideal`              | `libjvm.dylib` |
|  9.1% |       9 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  8.1% |       8 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  7.1% |       7 | `PhiNode::Ideal`             | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 65.7% |      65 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
| 11.1% |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  8.1% |       8 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  4.0% |       4 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  2.0% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`   |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      97 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 78.7% |      70 | `Matcher::xform`                              | `libjvm.dylib` |
|  9.0% |       8 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  7.9% |       7 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  1.1% |       1 | `DecodeNNode::Opcode`                         | `libjvm.dylib` |
|  1.1% |       1 | `PhiNode::Opcode`                             | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 78.3% |      65 | `IR::IR`                                     | `libjvm.dylib` |
|  8.4% |       7 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  3.6% |       3 | `IR::compute_code`                           | `libjvm.dylib` |
|  3.6% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  2.4% |       2 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 80.8% |      59 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| 16.4% |      12 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|  1.4% |       1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `PredictedCallGenerator::generate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 97.3% |      71 | `ParseGenerator::generate`         | `libjvm.dylib` |
| 42.5% |      31 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  4.1% |       3 | `GraphKit::subtype_check_receiver` | `libjvm.dylib` |
|  2.7% |       2 | `GraphKit::null_check_common`      | `libjvm.dylib` |
|  1.4% |       1 | `GraphKit::GraphKit`               | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      65 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      65 | `IRScope::IRScope` | `libjvm.dylib` |

##### `buildRuleSet()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 98.3% |      59 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  1.7% |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(String)` (`org.codenarc.ruleset.XmlFileRuleSet`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `loadRuleSetFile(String)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `createInitialRuleSetFromFiles()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `createInitialRuleSet()` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      54 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 50.0% |      26 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 19.2% |      10 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
| 11.5% |       6 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  7.7% |       4 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
|  5.8% |       3 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.3% |     124 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get`                                                                                                                                                                                                                                                                |
| 2.1% |      41 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                              |
| 1.5% |      29 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                 |
| 0.9% |      18 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                                    |
| 0.9% |      17 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                            |
| 0.8% |      15 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                   |
| 0.8% |      15 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                                |
| 0.7% |      13 | `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`) ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                 |
| 0.7% |      13 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                           |
| 0.7% |      13 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                               |
| 0.6% |      11 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                  |
| 0.5% |       9 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                         |
| 0.5% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                                               |
| 0.4% |       8 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `_pthread_cond_wait` ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get`                                                                                                                                                                    |
| 0.4% |       8 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                    |
| 0.4% |       8 | `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`) ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` |
| 0.4% |       8 | `LinearScan::build_intervals` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                            |
| 0.4% |       7 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                   |
| 0.4% |       7 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                                    |
| 0.4% |       7 | `Node_Backward_Iterator::next` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method`                                                                                                                                                    |
