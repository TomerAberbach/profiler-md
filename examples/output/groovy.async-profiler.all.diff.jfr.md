# Sampling profile diff

Collected 6,237 samples → 8,604 samples (+2,367 samples, +38.0%).

| Category          | Change |  Delta |             % |       Samples |
| ----------------- | -----: | -----: | ------------: | ------------: |
| Compiler          | +25.9% |   +682 | 42.2% → 38.5% | 2,632 → 3,314 |
| Native            | +68.0% | +1,300 | 30.6% → 37.3% | 1,911 → 3,211 |
| Standard library  | +24.5% |   +377 | 24.6% → 22.2% | 1,536 → 1,913 |
| Ours              |  -2.0% |     -2 |   1.6% → 1.1% |       99 → 97 |
| JIT               | +17.9% |    +10 |   0.9% → 0.8% |       56 → 66 |
| Garbage collector |   0.0% |      0 |         <0.1% |             3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |            % |   Samples | Function                                                                                    | Location                                             |
| -------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +793.0% |  +341 |  0.7% → 4.5% |  43 → 384 | `__psynch_cvwait`                                                                           | `libsystem_kernel.dylib`                             |
|  +583.0% |  +274 |  0.8% → 3.7% |  47 → 321 | `__psynch_mutexwait`                                                                        | `libsystem_kernel.dylib`                             |
| +1083.3% |   +65 |  0.1% → 0.8% |    6 → 71 | `semaphore_wait_trap`                                                                       | `libsystem_kernel.dylib`                             |
|   +68.6% |   +35 |  0.8% → 1.0% |   51 → 86 | `_platform_memmove`                                                                         | `libsystem_platform.dylib`                           |
|   +57.7% |   +30 |  0.8% → 1.0% |   52 → 82 | `java_lang_Throwable::fill_in_stack_trace`                                                  | `libjvm.dylib`                                       |
| +2700.0% |   +27 | <0.1% → 0.3% |    1 → 28 | `swtch_pri`                                                                                 | `libsystem_kernel.dylib`                             |
|  +109.5% |   +23 |  0.3% → 0.5% |   21 → 44 | `MachNode::rematerialize`                                                                   | `libjvm.dylib`                                       |
|   +37.7% |   +23 |         1.0% |   61 → 84 | `IndexSetIterator::advance_and_next`                                                        | `libjvm.dylib`                                       |
|   +91.7% |   +22 |  0.4% → 0.5% |   24 → 46 | `PhaseChaitin::gather_lrg_masks`                                                            | `libjvm.dylib`                                       |
|   +19.6% |   +22 |  1.8% → 1.6% | 112 → 134 | `Node::dominates`                                                                           | `libjvm.dylib`                                       |
|   +20.2% |   +20 |  1.6% → 1.4% |  99 → 119 | `pthread_jit_write_protect_np`                                                              | `libsystem_pthread.dylib`                            |
|  +142.9% |   +20 |  0.2% → 0.4% |   14 → 34 | `nmethod::is_unloading`                                                                     | `libjvm.dylib`                                       |
|   +15.8% |   +19 |  1.9% → 1.6% | 120 → 139 | `PhaseChaitin::Split`                                                                       | `libjvm.dylib`                                       |
|   +28.4% |   +19 |  1.1% → 1.0% |   67 → 86 | `Arena::contains`                                                                           | `libjvm.dylib`                                       |
|  +105.9% |   +18 |  0.3% → 0.4% |   17 → 35 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
|   +45.0% |   +18 |  0.6% → 0.7% |   40 → 58 | `PhaseAggressiveCoalesce::insert_copies`                                                    | `libjvm.dylib`                                       |
|   +68.0% |   +17 |  0.4% → 0.5% |   25 → 42 | `PhaseChaitin::elide_copy`                                                                  | `libjvm.dylib`                                       |
|   +55.2% |   +16 |         0.5% |   29 → 45 | `PhaseIdealLoop::build_loop_early`                                                          | `libjvm.dylib`                                       |
|   +17.2% |   +16 |  1.5% → 1.3% |  93 → 109 | `cast(Object)`                                                                              | `java.lang.Class`                                    |
|   +68.2% |   +15 |         0.4% |   22 → 37 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### Compiler

|  Change | Delta |           % |   Samples | Function                                 | Location       |
| ------: | ----: | ----------: | --------: | ---------------------------------------- | -------------- |
| +109.5% |   +23 | 0.3% → 0.5% |   21 → 44 | `MachNode::rematerialize`                | `libjvm.dylib` |
|  +37.7% |   +23 |        1.0% |   61 → 84 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|  +91.7% |   +22 | 0.4% → 0.5% |   24 → 46 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  +19.6% |   +22 | 1.8% → 1.6% | 112 → 134 | `Node::dominates`                        | `libjvm.dylib` |
|  +15.8% |   +19 | 1.9% → 1.6% | 120 → 139 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  +45.0% |   +18 | 0.6% → 0.7% |   40 → 58 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  +68.0% |   +17 | 0.4% → 0.5% |   25 → 42 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
|  +55.2% |   +16 |        0.5% |   29 → 45 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| +100.0% |   +14 | 0.2% → 0.3% |   14 → 28 | `MultiNode::is_CFG`                      | `libjvm.dylib` |
|  +19.7% |   +13 | 1.1% → 0.9% |   66 → 79 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|  +50.0% |   +12 |        0.4% |   24 → 36 | `PhaseIdealLoop::Dominators`             | `libjvm.dylib` |
|  +91.7% |   +11 | 0.2% → 0.3% |   12 → 23 | `PhaseIdealLoop::split_if_with_blocks`   | `libjvm.dylib` |
|  +64.7% |   +11 |        0.3% |   17 → 28 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
|  +29.4% |   +10 |        0.5% |   34 → 44 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
| +125.0% |   +10 | 0.1% → 0.2% |    8 → 18 | `PhaseIterGVN::transform_old`            | `libjvm.dylib` |
|  +64.3% |    +9 | 0.2% → 0.3% |   14 → 23 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
|     new |    +9 | 0.0% → 0.1% |     0 → 9 | `RegMask::is_aligned_pairs`              | `libjvm.dylib` |
|  +72.7% |    +8 |        0.2% |   11 → 19 | `Matcher::match_tree`                    | `libjvm.dylib` |
|  +21.6% |    +8 | 0.6% → 0.5% |   37 → 45 | `PhaseLive::compute`                     | `libjvm.dylib` |
|  +53.3% |    +8 | 0.2% → 0.3% |   15 → 23 | `NodeHash::hash_find_insert`             | `libjvm.dylib` |

##### Native

|   Change | Delta |            % |  Samples | Function                                   | Location                   |
| -------: | ----: | -----------: | -------: | ------------------------------------------ | -------------------------- |
|  +793.0% |  +341 |  0.7% → 4.5% | 43 → 384 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`   |
|  +583.0% |  +274 |  0.8% → 3.7% | 47 → 321 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib`   |
| +1083.3% |   +65 |  0.1% → 0.8% |   6 → 71 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`   |
|   +68.6% |   +35 |  0.8% → 1.0% |  51 → 86 | `_platform_memmove`                        | `libsystem_platform.dylib` |
|   +57.7% |   +30 |  0.8% → 1.0% |  52 → 82 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`             |
| +2700.0% |   +27 | <0.1% → 0.3% |   1 → 28 | `swtch_pri`                                | `libsystem_kernel.dylib`   |
|   +20.2% |   +20 |  1.6% → 1.4% | 99 → 119 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib`  |
|  +142.9% |   +20 |  0.2% → 0.4% |  14 → 34 | `nmethod::is_unloading`                    | `libjvm.dylib`             |
|   +28.4% |   +19 |  1.1% → 1.0% |  67 → 86 | `Arena::contains`                          | `libjvm.dylib`             |
|  +125.0% |   +15 |  0.2% → 0.3% |  12 → 27 | `resource_allocate_bytes`                  | `libjvm.dylib`             |
|   +16.3% |   +14 |  1.4% → 1.2% | 86 → 100 | `RegisterMap::RegisterMap`                 | `libjvm.dylib`             |
|   +73.3% |   +11 |  0.2% → 0.3% |  15 → 26 | `posix_madvise`                            | `libsystem_kernel.dylib`   |
|  +500.0% |   +10 | <0.1% → 0.1% |   2 → 12 | `JVM_NewArray`                             | `libjvm.dylib`             |
|  +100.0% |   +10 |         0.2% |  10 → 20 | `nmethodBucket::next_not_unloading`        | `libjvm.dylib`             |
|  +900.0% |    +9 | <0.1% → 0.1% |   1 → 10 | `nmethod::metadata_at`                     | `libjvm.dylib`             |
|  +450.0% |    +9 | <0.1% → 0.1% |   2 → 11 | `ClassLoaderData::is_alive`                | `libjvm.dylib`             |
|   +32.0% |    +8 |         0.4% |  25 → 33 | `InstanceKlass::find_method_index`         | `libjvm.dylib`             |
|   +88.9% |    +8 |  0.1% → 0.2% |   9 → 17 | `PcDescContainer::find_pc_desc_internal`   | `libjvm.dylib`             |
|   +50.0% |    +7 |         0.2% |  14 → 21 | `Dict::Insert`                             | `libjvm.dylib`             |
|   +22.6% |    +7 |  0.5% → 0.4% |  31 → 38 | `frame::sender_for_compiled_frame`         | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                                                                                    | Location                                                  |
| ------: | ----: | -----------: | -------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| +105.9% |   +18 |  0.3% → 0.4% |  17 → 35 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800`      |
|  +17.2% |   +16 |  1.5% → 1.3% | 93 → 109 | `cast(Object)`                                                                                              | `java.lang.Class`                                         |
|  +68.2% |   +15 |         0.4% |  22 → 37 | `invokeVirtual(Object, Object)`                                                                             | `java.lang.invoke.DirectMethodHandle$Holder`              |
|  +81.3% |   +13 |         0.3% |  16 → 29 | `invokeStatic(Object, Object, Object)`                                                                      | `java.lang.invoke.DirectMethodHandle$Holder`              |
|  +91.7% |   +11 |  0.2% → 0.3% |  12 → 23 | `equals(Object)`                                                                                            | `java.lang.String`                                        |
| +250.0% |   +10 |  0.1% → 0.2% |   4 → 14 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                             | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
| +100.0% |    +8 |  0.1% → 0.2% |   8 → 16 | `getInCache(LambdaFormEditor$TransformKey)`                                                                 | `java.lang.invoke.LambdaFormEditor`                       |
| +400.0% |    +8 | <0.1% → 0.1% |   2 → 10 | `isNullConversion(Class, Class, boolean)`                                                                   | `sun.invoke.util.VerifyType`                              |
|     new |    +7 |  0.0% → 0.1% |    0 → 7 | `invoke(Object)`                                                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401089400`       |
|  +58.3% |    +7 |         0.2% |  12 → 19 | `equals(Object, Object)`                                                                                    | `java.util.Objects`                                       |
| +233.3% |    +7 | <0.1% → 0.1% |   3 → 10 | `afterNodeAccess(HashMap$Node)`                                                                             | `java.util.LinkedHashMap`                                 |
|  +22.2% |    +6 |         0.4% |  27 → 33 | `collector(Object, Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000004010a8c00`       |
| +500.0% |    +5 | <0.1% → 0.1% |    1 → 6 | `correctCoerce()`                                                                                           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +500.0% |    +5 | <0.1% → 0.1% |    1 → 6 | `hasNext()`                                                                                                 | `java.util.LinkedList$ListItr`                            |
|     new |    +5 |  0.0% → 0.1% |    0 → 5 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`                 |
|  +71.4% |    +5 |         0.1% |   7 → 12 | `getMethods(Class, String)`                                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
| +250.0% |    +5 | <0.1% → 0.1% |    2 → 7 | `internalMemberName(Object)`                                                                                | `java.lang.invoke.DirectMethodHandle`                     |
|     new |    +4 | 0.0% → <0.1% |    0 → 4 | `bindArgumentL(int, Object)`                                                                                | `java.lang.invoke.BoundMethodHandle`                      |
|     new |    +4 | 0.0% → <0.1% |    0 → 4 | `invokeExact_MT(Object, Object, Object)`                                                                    | `java.lang.invoke.Invokers$Holder`                        |
|     new |    +4 | 0.0% → <0.1% |    0 → 4 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`            | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |

##### Ours

| Change | Delta |            % | Samples | Function                                                  | Location                                                                              |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → <0.1% |   0 → 4 | `<init>()`                                                | `org.codenarc.rule.AbstractAstVisitor`                                                |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitClass(ClassNode)`                                   | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                               |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `isReady()`                                               | `org.codenarc.rule.AbstractRule`                                                      |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `getMetaClass()`                                          | `org.codenarc.rule.dry.DuplicateNumberLiteralRule`                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isRuleSuppressed(Rule)`                                  | `org.codenarc.analyzer.SuppressionAnalyzer`                                           |
| +50.0% |    +1 |        <0.1% |   2 → 3 | `collectViolations(SourceCode, RuleSet)`                  | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                          | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`           | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getMetric()`                                             | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `calculate(MethodNode, SourceCode)`                       | `org.gmetrics.metric.abc.AbcMetric`                                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitor(SourceCode)`                               | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `handleExpressionContainingOperation(Expression)`         | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                 | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitParameters(Parameter[])`                            | `org.codenarc.rule.convention.NoDefAstVisitor`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`         | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$3$visitBlockStatement(BlockStatement)`             | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                                                  |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  -12.4% |   -14 |  1.8% → 1.2% | 113 → 99 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                           |
|  -83.3% |   -10 | 0.2% → <0.1% |   12 → 2 | `invoke(Object, Object)`                                                                                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000040102ac00`       |
|  -50.0% |    -7 |  0.2% → 0.1% |   14 → 7 | `Node::rematerialize`                                                                                                                                    | `libjvm.dylib`                                            |
|  -60.0% |    -6 | 0.2% → <0.1% |   10 → 4 | `setGuards(Object)`                                                                                                                                      | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -66.7% |    -6 | 0.1% → <0.1% |    9 → 3 | `ConnectionGraph::compute_escape`                                                                                                                        | `libjvm.dylib`                                            |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `checkCanSetAccessible(Class, Class, boolean)`                                                                                                           | `java.lang.reflect.AccessibleObject`                      |
|  -85.7% |    -6 | 0.1% → <0.1% |    7 → 1 | `PhaseCCP::transform_once`                                                                                                                               | `libjvm.dylib`                                            |
|  -66.7% |    -6 | 0.1% → <0.1% |    9 → 3 | `MergeMemNode::Ideal`                                                                                                                                    | `libjvm.dylib`                                            |
|  -41.7% |    -5 |  0.2% → 0.1% |   12 → 7 | `LinearScan::assign_reg_num`                                                                                                                             | `libjvm.dylib`                                            |
|   -9.3% |    -5 |  0.9% → 0.6% |  54 → 49 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                            |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `I2C/C2I adapters(0xbbbb)`                                                                                                                               | `<unknown>`                                               |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `Scheduling::ComputeUseCount`                                                                                                                            | `libjvm.dylib`                                            |
| removed |    -5 |  0.1% → 0.0% |    5 → 0 | `LinearScan::compute_debug_info_for_scope`                                                                                                               | `libjvm.dylib`                                            |
|  -62.5% |    -5 | 0.1% → <0.1% |    8 → 3 | `IfFalseNode::Opcode`                                                                                                                                    | `libjvm.dylib`                                            |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `equals(Object)`                                                                                                                                         | `java.lang.invoke.MethodType`                             |
|  -27.8% |    -5 |  0.3% → 0.2% |  18 → 13 | `Node::is_CFG`                                                                                                                                           | `libjvm.dylib`                                            |
|  -21.7% |    -5 |  0.4% → 0.2% |  23 → 18 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`                                            |
|  -71.4% |    -5 | 0.1% → <0.1% |    7 → 2 | `PhaseIFG::remove_node`                                                                                                                                  | `libjvm.dylib`                                            |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `ConnectionGraph::find_inst_mem`                                                                                                                         | `libjvm.dylib`                                            |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                    | `libjvm.dylib`                                            |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
|  -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `Node::rematerialize`                            | `libjvm.dylib` |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `ConnectionGraph::compute_escape`                | `libjvm.dylib` |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `PhaseCCP::transform_once`                       | `libjvm.dylib` |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `MergeMemNode::Ideal`                            | `libjvm.dylib` |
|  -41.7% |    -5 |  0.2% → 0.1% |  12 → 7 | `LinearScan::assign_reg_num`                     | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `Scheduling::ComputeUseCount`                    | `libjvm.dylib` |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `LinearScan::compute_debug_info_for_scope`       | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `IfFalseNode::Opcode`                            | `libjvm.dylib` |
|  -27.8% |    -5 |  0.3% → 0.2% | 18 → 13 | `Node::is_CFG`                                   | `libjvm.dylib` |
|  -21.7% |    -5 |  0.4% → 0.2% | 23 → 18 | `PhaseLive::add_liveout`                         | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `PhaseIFG::remove_node`                          | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `ConnectionGraph::find_inst_mem`                 | `libjvm.dylib` |
|  -50.0% |    -4 | 0.1% → <0.1% |   8 → 4 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `TypeInstPtr::make`                              | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `ConnectionGraph::add_fields_to_worklist`        | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `BlockBegin::iterate_preorder`                   | `libjvm.dylib` |
|  -10.3% |    -3 |  0.5% → 0.3% | 29 → 26 | `PhaseChaitin::post_allocate_copy_removal`       | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `MultiNode::hash`                                | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `Node::needs_anti_dependence_check`              | `libjvm.dylib` |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `TypeInstPtr::eq`                                | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                  |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  -12.4% |   -14 |  1.8% → 1.2% | 113 → 99 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`           |
|   -9.3% |    -5 |  0.9% → 0.6% |  54 → 49 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                    | `libjvm.dylib`            |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `SymbolTable::lookup_only`                                                                                                                               | `libjvm.dylib`            |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `InstanceKlass::allocate_objArray`                                                                                                                       | `libjvm.dylib`            |
|  -40.0% |    -4 |  0.2% → 0.1% |   10 → 6 | `nmethod::metadata_addr_at`                                                                                                                              | `libjvm.dylib`            |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `stub:pthread_jit_write_protect_np`                                                                                                                      | `libjvm.dylib`            |
|  -19.0% |    -4 |  0.3% → 0.2% |  21 → 17 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`       |
|  -75.0% |    -3 | 0.1% → <0.1% |    4 → 1 | `pthread_mutex_trylock`                                                                                                                                  | `libsystem_pthread.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |    4 → 1 | `CollectedHeap::array_allocate`                                                                                                                          | `libjvm.dylib`            |
|  -15.0% |    -3 |  0.3% → 0.2% |  20 → 17 | `frame::sender_raw`                                                                                                                                      | `libjvm.dylib`            |
|  -75.0% |    -3 | 0.1% → <0.1% |    4 → 1 | `Interval::add_use_pos`                                                                                                                                  | `libjvm.dylib`            |
|  -42.9% |    -3 | 0.1% → <0.1% |    7 → 4 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`            |
| removed |    -3 | <0.1% → 0.0% |    3 → 0 | `JfrResolution::on_runtime_resolution`                                                                                                                   | `libjvm.dylib`            |
| removed |    -3 | <0.1% → 0.0% |    3 → 0 | `CodeEmitInfo::interpreter_frame_size`                                                                                                                   | `libjvm.dylib`            |
| removed |    -3 | <0.1% → 0.0% |    3 → 0 | `_kernelrpc_mach_port_deallocate_trap`                                                                                                                   | `libsystem_kernel.dylib`  |
| removed |    -3 | <0.1% → 0.0% |    3 → 0 | `PhiResolver::create_node`                                                                                                                               | `libjvm.dylib`            |
|  -75.0% |    -3 | 0.1% → <0.1% |    4 → 1 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                        | `libjvm.dylib`            |
|  -50.0% |    -2 | 0.1% → <0.1% |    4 → 2 | `nmethod::oops_do`                                                                                                                                       | `libjvm.dylib`            |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `SystemDictionary::resolve_instance_class_or_null`                                                                                                       | `libjvm.dylib`            |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                | Location                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  -83.3% |   -10 | 0.2% → <0.1% |  12 → 2 | `invoke(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x000000040102ac00`       |
|  -60.0% |    -6 | 0.2% → <0.1% |  10 → 4 | `setGuards(Object)`                                                                     | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -6 |  0.1% → 0.0% |   6 → 0 | `checkCanSetAccessible(Class, Class, boolean)`                                          | `java.lang.reflect.AccessibleObject`                      |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `equals(Object)`                                                                        | `java.lang.invoke.MethodType`                             |
|  -17.4% |    -4 |  0.4% → 0.2% | 23 → 19 | `<init>(MethodType, LambdaForm)`                                                        | `java.lang.invoke.MethodHandle`                           |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `delegate(Object, Object)`                                                              | `java.lang.invoke.DelegatingMethodHandle$Holder`          |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `transform(ATNState, PredictionContext, SemanticContext, boolean, LexerActionExecutor)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`             |
|   -5.1% |    -4 |  1.3% → 0.9% | 78 → 74 | `newInstance(Class, int)`                                                               | `java.lang.reflect.Array`                                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `<init>()`                                                                              | `java.math.MutableBigInteger`                             |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `find(int, Object, Class)`                                                              | `java.util.HashMap$TreeNode`                              |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                     | `java.lang.invoke.MethodHandleImpl`                       |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `setCallSiteTarget()`                                                                   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `guard(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000401098400`       |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `guardWithCatch(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x00000004010abc00`       |
|  -30.0% |    -3 |  0.2% → 0.1% |  10 → 7 | `type()`                                                                                | `java.lang.invoke.MethodHandle`                           |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `coerceArgumentsToClasses(Object[])`                                                    | `org.codehaus.groovy.reflection.ParameterTypes`           |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `convertToTypeArray(Object[])`                                                          | `org.codehaus.groovy.runtime.MetaClassHelper`             |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `getKey()`                                                                              | `java.util.HashMap$Node`                                  |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `genericMethodType(int)`                                                                | `java.lang.invoke.MethodType`                             |

##### Ours

|  Change | Delta |            % | Samples | Function                                                         | Location                                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `checkNode(ASTNode)`                                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitBlockStatement(BlockStatement)`                            | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`                   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getCompilerPhase()`                                             | `org.codenarc.rule.AbstractRule`                                                  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `writeViolation(Writer, Violation, String)`                      | `org.codenarc.report.TextReportWriter`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `init()`                                                         | `org.codenarc.source.AbstractSourceCode`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAst()`                                                       | `org.codenarc.source.AbstractSourceCode`                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `$getStaticMetaClass()`                                          | `org.codenarc.rule.formatting.MissingBlankLineBeforeAnnotatedFieldRuleAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                                 | `org.codenarc.rule.naming.ClassNameSameAsSuperclassRule`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codenarc.rule.basic.RemoveAllOnSelfAstVisitor`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addViolationIfDuplicate(Expression, boolean)`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference)`                              | `org.codenarc.rule.basic.DeadCodeAstVisitor$_visitBlockStatement_closure1`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `sourceViolatesLineLengthRule(String)`                           | `org.codenarc.rule.formatting.LineLengthRule`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processSourceLine(String, int)`                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(MetricResult, Map)`                                      | `org.gmetrics.result.ClassMetricResult`                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkForViolations(ASTNode)`                                    | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call(Object, Object)`                                           | `org.gmetrics.util.AstUtil$isClosureField`                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getLineNumber()`                                                | `org.codenarc.rule.Violation`                                                     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change |  Delta |             % |       Samples | Function                                         | Location                                            |
| -----: | -----: | ------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|    new | +2,622 |  0.0% → 30.5% |     0 → 2,622 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000004015a2000` |
|    new | +2,612 |  0.0% → 30.4% |     0 → 2,612 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000004015a5000` |
|    new | +2,612 |  0.0% → 30.4% |     0 → 2,612 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000004015a4c00` |
|    new | +2,500 |  0.0% → 29.1% |     0 → 2,500 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000401268800` |
|    new | +2,445 |  0.0% → 28.4% |     0 → 2,445 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000040136c800` |
|    new | +2,398 |  0.0% → 27.9% |     0 → 2,398 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000040163ac00` |
|    new | +2,398 |  0.0% → 27.9% |     0 → 2,398 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000040163a800` |
|    new | +2,010 |  0.0% → 23.4% |     0 → 2,010 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000004017c1c00` |
|    new | +1,891 |  0.0% → 22.0% |     0 → 1,891 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000040136cc00` |
|    new | +1,835 |  0.0% → 21.3% |     0 → 1,835 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000401363800` |
| +42.8% | +1,601 | 60.0% → 62.1% | 3,742 → 5,343 | `_pthread_start`                                 | `libsystem_pthread.dylib`                           |
| +42.8% | +1,601 | 60.0% → 62.1% | 3,742 → 5,343 | `thread_start`                                   | `libsystem_pthread.dylib`                           |
| +42.8% | +1,600 | 60.0% → 62.1% | 3,742 → 5,342 | `Thread::call_run`                               | `libjvm.dylib`                                      |
| +42.8% | +1,600 | 60.0% → 62.1% | 3,742 → 5,342 | `thread_native_entry`                            | `libjvm.dylib`                                      |
| +38.8% | +1,343 | 55.4% → 55.8% | 3,457 → 4,800 | `JavaThread::thread_main_inner`                  | `libjvm.dylib`                                      |
| +38.9% | +1,340 | 55.3% → 55.6% | 3,448 → 4,788 | `CompileBroker::compiler_thread_loop`            | `libjvm.dylib`                                      |
| +31.9% | +1,087 | 54.6% → 52.2% | 3,407 → 4,494 | `CompileBroker::invoke_compiler_on_method`       | `libjvm.dylib`                                      |
| +31.8% |   +873 | 44.1% → 42.1% | 2,749 → 3,622 | `C2Compiler::compile_method`                     | `libjvm.dylib`                                      |
| +31.5% |   +864 | 44.0% → 41.9% | 2,744 → 3,608 | `Compile::Compile`                               | `libjvm.dylib`                                      |
| +30.5% |   +748 | 39.3% → 37.2% | 2,454 → 3,202 | `main(String[])`                                 | `org.codenarc.CodeNarc`                             |

##### Compiler

|  Change |  Delta |             % |       Samples | Function                                    | Location       |
| ------: | -----: | ------------: | ------------: | ------------------------------------------- | -------------- |
|  +38.9% | +1,340 | 55.3% → 55.6% | 3,448 → 4,788 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +31.9% | +1,087 | 54.6% → 52.2% | 3,407 → 4,494 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  +31.8% |   +873 | 44.1% → 42.1% | 2,749 → 3,622 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  +31.5% |   +864 | 44.0% → 41.9% | 2,744 → 3,608 | `Compile::Compile`                          | `libjvm.dylib` |
|  +31.7% |   +414 | 20.9% → 20.0% | 1,306 → 1,720 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  +26.7% |   +289 | 17.3% → 15.9% | 1,082 → 1,371 | `Compile::Optimize`                         | `libjvm.dylib` |
| +597.6% |   +245 |   0.7% → 3.3% |      41 → 286 | `CompileQueue::get`                         | `libjvm.dylib` |
|  +23.3% |   +178 | 12.2% → 10.9% |     763 → 941 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  +26.8% |   +173 |  10.3% → 9.5% |     645 → 818 | `Compilation::compile_method`               | `libjvm.dylib` |
|  +26.8% |   +173 |  10.4% → 9.5% |     646 → 819 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  +30.5% |   +153 |   8.0% → 7.6% |     501 → 654 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  +23.2% |   +130 |   9.0% → 8.0% |     561 → 691 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  +32.0% |   +119 |   6.0% → 5.7% |     372 → 491 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  +26.7% |   +112 |   6.7% → 6.2% |     419 → 531 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  +32.1% |   +112 |   5.6% → 5.4% |     349 → 461 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  +26.3% |   +110 |   6.7% → 6.1% |     418 → 528 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  +45.2% |    +98 |   3.5% → 3.7% |     217 → 315 | `Matcher::match`                            | `libjvm.dylib` |
|  +57.6% |    +91 |   2.5% → 2.9% |     158 → 249 | `Matcher::xform`                            | `libjvm.dylib` |
|  +53.1% |    +85 |   2.6% → 2.8% |     160 → 245 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  +48.8% |    +84 |   2.8% → 3.0% |     172 → 256 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |

##### Native

|  Change |  Delta |             % |       Samples | Function                                                    | Location                  |
| ------: | -----: | ------------: | ------------: | ----------------------------------------------------------- | ------------------------- |
|  +42.8% | +1,601 | 60.0% → 62.1% | 3,742 → 5,343 | `_pthread_start`                                            | `libsystem_pthread.dylib` |
|  +42.8% | +1,601 | 60.0% → 62.1% | 3,742 → 5,343 | `thread_start`                                              | `libsystem_pthread.dylib` |
|  +42.8% | +1,600 | 60.0% → 62.1% | 3,742 → 5,342 | `Thread::call_run`                                          | `libjvm.dylib`            |
|  +42.8% | +1,600 | 60.0% → 62.1% | 3,742 → 5,342 | `thread_native_entry`                                       | `libjvm.dylib`            |
|  +38.8% | +1,343 | 55.4% → 55.8% | 3,457 → 4,800 | `JavaThread::thread_main_inner`                             | `libjvm.dylib`            |
| +666.0% |   +353 |   0.8% → 4.7% |      53 → 406 | `PlatformMonitor::wait`                                     | `libjvm.dylib`            |
| +793.0% |   +341 |   0.7% → 4.5% |      43 → 384 | `__psynch_cvwait`                                           | `libsystem_kernel.dylib`  |
| +587.2% |   +276 |   0.8% → 3.8% |      47 → 323 | `_pthread_mutex_firstfit_lock_slow`                         | `libsystem_pthread.dylib` |
| +583.0% |   +274 |   0.8% → 3.7% |      47 → 321 | `__psynch_mutexwait`                                        | `libsystem_kernel.dylib`  |
| +630.8% |   +246 |   0.6% → 3.3% |      39 → 285 | `Monitor::wait`                                             | `libjvm.dylib`            |
|  +74.0% |   +196 |   4.2% → 5.4% |     265 → 461 | `WorkerThread::run`                                         | `libjvm.dylib`            |
|  +27.9% |   +180 |  10.4% → 9.6% |     646 → 826 | `Compiler::compile_method`                                  | `libjvm.dylib`            |
| +926.3% |   +176 |   0.3% → 2.3% |      19 → 195 | `ThreadCritical::ThreadCritical`                            | `libjvm.dylib`            |
|  +44.2% |   +157 |   5.7% → 6.0% |     355 → 512 | `Parse::do_one_block`                                       | `libjvm.dylib`            |
|  +44.2% |   +157 |   5.7% → 6.0% |     355 → 512 | `Parse::do_all_blocks`                                      | `libjvm.dylib`            |
|  +42.5% |   +154 |   5.8% → 6.0% |     362 → 516 | `Parse::Parse`                                              | `libjvm.dylib`            |
|  +42.5% |   +154 |   5.8% → 6.0% |     362 → 516 | `ParseGenerator::generate`                                  | `libjvm.dylib`            |
|  +41.6% |   +143 |   5.5% → 5.7% |     344 → 487 | `Parse::do_call`                                            | `libjvm.dylib`            |
|  +44.8% |   +124 |   4.4% → 4.7% |     277 → 401 | `MemAllocator::allocate`                                    | `libjvm.dylib`            |
|  +47.7% |   +124 |   4.2% → 4.5% |     260 → 384 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`            |

##### Standard library

| Change |  Delta |             % |       Samples | Function                                                                                      | Location                                             |
| -----: | -----: | ------------: | ------------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +2,622 |  0.0% → 30.5% |     0 → 2,622 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000004015a2000`  |
|    new | +2,612 |  0.0% → 30.4% |     0 → 2,612 | `invoke(Object, Object, Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x00000004015a5000`  |
|    new | +2,612 |  0.0% → 30.4% |     0 → 2,612 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000004015a4c00`  |
|    new | +2,500 |  0.0% → 29.1% |     0 → 2,500 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000401268800`  |
|    new | +2,445 |  0.0% → 28.4% |     0 → 2,445 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`  |
|    new | +2,398 |  0.0% → 27.9% |     0 → 2,398 | `invoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000040163ac00`  |
|    new | +2,398 |  0.0% → 27.9% |     0 → 2,398 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000040163a800`  |
|    new | +2,010 |  0.0% → 23.4% |     0 → 2,010 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000004017c1c00`  |
|    new | +1,891 |  0.0% → 22.0% |     0 → 1,891 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000040136cc00`  |
|    new | +1,835 |  0.0% → 21.3% |     0 → 1,835 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000401363800`  |
| +30.5% |   +747 | 39.3% → 37.2% | 2,451 → 3,198 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| +30.5% |   +747 | 39.3% → 37.2% | 2,453 → 3,200 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| +30.4% |   +746 | 39.4% → 37.2% | 2,457 → 3,203 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| +30.4% |   +745 | 39.3% → 37.1% | 2,450 → 3,195 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000004010a9400`  |
| +30.4% |   +745 | 39.3% → 37.1% | 2,450 → 3,195 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| +30.4% |   +745 | 39.2% → 37.1% | 2,448 → 3,193 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000004010abc00`  |
| +30.4% |   +745 | 39.2% → 37.1% | 2,448 → 3,193 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010ac400`  |
| +30.4% |   +745 | 39.2% → 37.1% | 2,448 → 3,193 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000004010ac800`  |
| +30.3% |   +739 | 39.1% → 37.0% | 2,441 → 3,180 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000401092800` |
| +30.4% |   +736 | 38.9% → 36.7% | 2,424 → 3,160 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000401096800`  |

##### Ours

| Change | Delta |             % |       Samples | Function                                         | Location                                                                    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| +30.5% |  +748 | 39.3% → 37.2% | 2,454 → 3,202 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| +30.2% |  +736 | 39.1% → 36.9% | 2,439 → 3,175 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| +30.2% |  +731 | 38.8% → 36.6% | 2,421 → 3,152 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| +30.2% |  +685 | 36.3% → 34.3% | 2,266 → 2,951 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.2% |  +685 | 36.3% → 34.3% | 2,265 → 2,950 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.2% |  +684 | 36.3% → 34.3% | 2,265 → 2,949 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| +30.2% |  +682 | 36.2% → 34.1% | 2,256 → 2,938 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +30.0% |  +674 | 36.0% → 34.0% | 2,248 → 2,922 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +31.9% |  +585 | 29.4% → 28.1% | 1,836 → 2,421 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +29.5% |  +423 | 23.0% → 21.6% | 1,436 → 1,859 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +26.3% |  +340 | 20.7% → 19.0% | 1,294 → 1,634 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| +28.2% |  +307 | 17.4% → 16.2% | 1,087 → 1,394 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +28.3% |  +290 | 16.4% → 15.3% | 1,023 → 1,313 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +23.9% |  +195 | 13.1% → 11.8% |   817 → 1,012 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +27.1% |   +83 |   4.9% → 4.5% |     306 → 389 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| +28.1% |   +78 |   4.5% → 4.1% |     278 → 356 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +27.7% |   +76 |   4.4% → 4.1% |     274 → 350 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| +27.5% |   +75 |   4.4% → 4.0% |     273 → 348 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| +27.3% |   +75 |   4.4% → 4.1% |     275 → 350 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +36.5% |   +27 |          1.2% |      74 → 101 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |            % | Samples | Function                                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| -45.5% |   -10 |  0.4% → 0.1% | 22 → 12 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |
| -53.3% |    -8 |  0.2% → 0.1% |  15 → 7 | `MethodLiveness::BasicBlock::get_liveness_at`    | `libjvm.dylib` |
|  -8.8% |    -7 |  1.3% → 0.8% | 80 → 73 | `LIR_Assembler::emit_code`                       | `libjvm.dylib` |
| -38.9% |    -7 |  0.3% → 0.1% | 18 → 11 | `MethodLiveness::get_liveness_at`                | `libjvm.dylib` |
| -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `LIR_Assembler::const2reg`                       | `libjvm.dylib` |
| -24.1% |    -7 |  0.5% → 0.3% | 29 → 22 | `PhaseCCP::do_transform`                         | `libjvm.dylib` |
| -25.0% |    -7 |  0.4% → 0.2% | 28 → 21 | `ciEnv::get_klass_by_name_impl`                  | `libjvm.dylib` |
| -50.0% |    -7 |  0.2% → 0.1% |  14 → 7 | `Node::rematerialize`                            | `libjvm.dylib` |
| -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `PhaseCCP::transform_once`                       | `libjvm.dylib` |
| -77.8% |    -7 | 0.1% → <0.1% |   9 → 2 | `ConnectionGraph::add_field_uses_to_worklist`    | `libjvm.dylib` |
|  -7.8% |    -6 |  1.2% → 0.8% | 77 → 71 | `LIR_Assembler::emit_lir_list`                   | `libjvm.dylib` |
| -40.0% |    -6 |  0.2% → 0.1% |  15 → 9 | `LIR_Assembler::process_debug_info`              | `libjvm.dylib` |
| -37.5% |    -6 |  0.3% → 0.1% | 16 → 10 | `ProjNode::is_uncommon_trap_proj`                | `libjvm.dylib` |
| -35.3% |    -6 |  0.3% → 0.1% | 17 → 11 | `PhaseChaitin::merge_multidefs`                  | `libjvm.dylib` |
| -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `Scheduling::ComputeUseCount`                    | `libjvm.dylib` |
| -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `IfFalseNode::Opcode`                            | `libjvm.dylib` |
| -27.8% |    -5 |  0.3% → 0.2% | 18 → 13 | `Node::is_CFG`                                   | `libjvm.dylib` |
| -17.2% |    -5 |  0.5% → 0.3% | 29 → 24 | `TypeInstPtr::make`                              | `libjvm.dylib` |
| -13.9% |    -5 |  0.6% → 0.4% | 36 → 31 | `ConnectionGraph::split_unique_types`            | `libjvm.dylib` |
| -16.7% |    -4 |  0.4% → 0.2% | 24 → 20 | `BlockBegin::iterate_preorder`                   | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location        |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|  -12.4% |   -14 |  1.8% → 1.2% | 113 → 99 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib` |
|  -10.9% |    -6 |  0.9% → 0.6% |  55 → 49 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`  |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`  |
|  -83.3% |    -5 | 0.1% → <0.1% |    6 → 1 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                    | `libjvm.dylib`  |
|  -62.5% |    -5 | 0.1% → <0.1% |    8 → 3 | `G1CMRootRegionScanTask::work`                                                                                                                           | `libjvm.dylib`  |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `ClassVerifier::verify_class`                                                                                                                            | `libjvm.dylib`  |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `Verifier::verify`                                                                                                                                       | `libjvm.dylib`  |
|  -26.7% |    -4 |  0.2% → 0.1% |  15 → 11 | `arrayof_oop_disjoint_arraycopy`                                                                                                                         | `<unknown>`     |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `CodeEmitInfo::interpreter_frame_size`                                                                                                                   | `libjvm.dylib`  |
|  -40.0% |    -4 |  0.2% → 0.1% |   10 → 6 | `nmethod::metadata_addr_at`                                                                                                                              | `libjvm.dylib`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `stub:pthread_jit_write_protect_np`                                                                                                                      | `libjvm.dylib`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `Runtime1::new_type_array`                                                                                                                               | `libjvm.dylib`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `new_type_array Runtime1 stub`                                                                                                                           | `<unknown>`     |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `PhiResolver::create_node`                                                                                                                               | `libjvm.dylib`  |
|  -57.1% |    -4 | 0.1% → <0.1% |    7 → 3 | `G1ConcurrentMark::scan_root_region`                                                                                                                     | `libjvm.dylib`  |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                                                                              | `libjvm.dylib`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `IdealLoopTree::reassociate`                                                                                                                             | `libjvm.dylib`  |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `IdealLoopTree::reassociate_invariants`                                                                                                                  | `libjvm.dylib`  |
|  -17.6% |    -3 |  0.3% → 0.2% |  17 → 14 | `SubstitutionResolver::block_do`                                                                                                                         | `libjvm.dylib`  |
|  -25.0% |    -3 |  0.2% → 0.1% |   12 → 9 | `nmethod::oops_do`                                                                                                                                       | `libjvm.dylib`  |

##### Standard library

|  Change |  Delta |            % |   Samples | Function                                          | Location                                             |
| ------: | -----: | -----------: | --------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed | -2,013 | 32.3% → 0.0% | 2,013 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000040159e000`  |
| removed | -2,004 | 32.1% → 0.0% | 2,004 → 0 | `invoke(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000004015a1000`  |
| removed | -2,004 | 32.1% → 0.0% | 2,004 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004015a0c00`  |
| removed | -1,898 | 30.4% → 0.0% | 1,898 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040126c800`  |
| removed | -1,867 | 29.9% → 0.0% | 1,867 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040136c400`  |
| removed | -1,843 | 29.5% → 0.0% | 1,843 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401639800`  |
| removed | -1,842 | 29.5% → 0.0% | 1,842 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040163a400`  |
| removed | -1,522 | 24.4% → 0.0% | 1,522 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017bfc00`  |
| removed | -1,467 | 23.5% → 0.0% | 1,467 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`  |
| removed | -1,420 | 22.8% → 0.0% | 1,420 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000000401363400`  |
| removed |   -260 |  4.2% → 0.0% |   260 → 0 | `invoke(Object, Object, Object, long)`            | `java.lang.invoke.LambdaForm$MH.0x000000040136cc00`  |
| removed |   -199 |  3.2% → 0.0% |   199 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c0800`  |
|  -94.1% |   -144 |  2.5% → 0.1% |   153 → 9 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c5000`  |
| removed |    -77 |  1.2% → 0.0% |    77 → 0 | `invokeVirtual(Object, Object, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x0000000401335000` |
| removed |    -76 |  1.2% → 0.0% |    76 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000401334800`  |
| removed |    -64 |  1.0% → 0.0% |    64 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401334c00`  |
| removed |    -64 |  1.0% → 0.0% |    64 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401403000`  |
| removed |    -62 |  1.0% → 0.0% |    62 → 0 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000040126c400` |
| removed |    -62 |  1.0% → 0.0% |    62 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401402000`  |
| removed |    -61 |  1.0% → 0.0% |    61 → 0 | `invoke(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000000401904800`  |

##### Ours

|  Change | Delta |            % | Samples | Function                                                    | Location                                                                     |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -81.8% |    -9 | 0.2% → <0.1% |  11 → 2 | `visitBlockStatement(BlockStatement)`                       | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor`             |
|  -47.1% |    -8 |  0.3% → 0.1% |  17 → 9 | `super$3$visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -47.1% |    -8 |  0.3% → 0.1% |  17 → 9 | `visitDeclarationExpression(DeclarationExpression)`         | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                     |
|  -37.5% |    -6 |  0.3% → 0.1% | 16 → 10 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                     |
|  -13.3% |    -6 |  0.7% → 0.5% | 45 → 39 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                     |
| removed |    -6 |  0.1% → 0.0% |   6 → 0 | `visitMethodComplete(MethodNode)`                           | `org.codenarc.rule.convention.PublicMethodsBeforeNonPublicMethodsAstVisitor` |
|  -42.9% |    -6 |  0.2% → 0.1% |  14 → 8 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
|  -26.1% |    -6 |  0.4% → 0.2% | 23 → 17 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                   |
|  -14.3% |    -5 |  0.6% → 0.3% | 35 → 30 | `visitConstructorOrMethod(MethodNode, boolean)`             | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -23.8% |    -5 |  0.3% → 0.2% | 21 → 16 | `visitMethodCallExpression(MethodCallExpression)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                     |
|  -45.5% |    -5 |  0.2% → 0.1% |  11 → 6 | `visitClassComplete(ClassNode)`                             | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`            |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.convention.ParameterReassignmentAstVisitor`               |
|  -44.4% |    -4 |         0.1% |   9 → 5 | `hasOpeningBraceOnSameLine(MethodNode)`                     | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                     |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `visitConstructorCallExpression(ConstructorCallExpression)` | `org.codenarc.rule.AbstractConstructorCallAstVisitor`                        |
|  -12.1% |    -4 |  0.5% → 0.3% | 33 → 29 | `visitBinaryExpression(BinaryExpression)`                   | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                 |
|  -16.7% |    -4 |  0.4% → 0.2% | 24 → 20 | `eachImportLine(SourceCode, Closure)`                       | `org.codenarc.rule.imports.AbstractImportRule`                               |
|  -20.0% |    -4 |  0.3% → 0.2% | 20 → 16 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.imports.DuplicateImportRule`                              |
|  -26.7% |    -4 |  0.2% → 0.1% | 15 → 11 | `applyTo(SourceCode, List)`                                 | `org.codenarc.rule.imports.ImportFromSamePackageRule`                        |
|  -30.8% |    -4 |  0.2% → 0.1% |  13 → 9 | `visitMethodEx(MethodNode)`                                 | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`             |

# Allocated heap profile diff

Allocated 12 GiB → 11.9 GiB (-111.392 MiB, -0.9%) over 24,506 samples → 24,284 samples (512 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  -0.9% | -113.892 MiB | 99.2% | 11.9 GiB → 11.8 GiB | 24,311 → 24,084 |
| Ours             |  +2.6% |   +2.499 MiB |  0.8% |  97.5 MiB → 100 MiB |       195 → 200 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |       Samples | Function                                                                                      | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +210.3% | +203.999 MiB |  0.8% → 2.5% |    97 MiB → 301 MiB |     194 → 602 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`             |
|  +28.1% |  +38.499 MiB |  1.1% → 1.4% |   137 MiB → 175 MiB |     274 → 351 | `valueOf(long)`                                                                               | `java.lang.Long`                                           |
|  +13.3% |  +30.499 MiB |  1.9% → 2.1% |   229 MiB → 260 MiB |     459 → 520 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                              |
|  +50.0% |  +21.999 MiB |  0.4% → 0.5% |     44 MiB → 66 MiB |      88 → 132 | `compile(String)`                                                                             | `java.util.regex.Pattern`                                  |
|   +2.8% |  +17.999 MiB |  5.2% → 5.4% |   633 MiB → 651 MiB | 1,267 → 1,303 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  +26.6% |  +14.499 MiB |  0.4% → 0.6% |   54.5 MiB → 69 MiB |     109 → 138 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                         |
|  +11.8% |  +13.999 MiB |  1.0% → 1.1% |   119 MiB → 133 MiB |     238 → 266 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
|  +34.6% |  +13.499 MiB |  0.3% → 0.4% |   39 MiB → 52.5 MiB |      78 → 105 | `getParameterTypes()`                                                                         | `java.lang.reflect.Method`                                 |
|  +10.3% |  +12.999 MiB |  1.0% → 1.1% |   126 MiB → 139 MiB |     252 → 278 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                              |
|   +3.8% |  +10.499 MiB |  2.2% → 2.3% |   274 MiB → 285 MiB |     549 → 570 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                         |
|  +34.0% |   +8.999 MiB |  0.2% → 0.3% | 26.5 MiB → 35.5 MiB |       53 → 71 | `<init>()`                                                                                    | `java.util.ArrayDeque`                                     |
|  +15.3% |   +7.499 MiB |  0.4% → 0.5% |   49 MiB → 56.5 MiB |      98 → 113 | `createEntryListArray(int)`                                                                   | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
|  +48.3% |   +6.999 MiB |  0.1% → 0.2% | 14.5 MiB → 21.5 MiB |       29 → 43 | `join(PredictionContext, PredictionContext)`                                                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  +17.6% |   +6.499 MiB |  0.3% → 0.4% |   37 MiB → 43.5 MiB |       74 → 87 | `asSpreader(int, Class, int)`                                                                 | `java.lang.invoke.MethodHandle`                            |
|  +15.0% |   +5.999 MiB |  0.3% → 0.4% |     40 MiB → 46 MiB |       80 → 92 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.LinkedHashMap`                                  |
|  +36.4% |   +5.999 MiB |  0.1% → 0.2% | 16.5 MiB → 22.5 MiB |       33 → 45 | `removeRealReceiver(Object[])`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector`                 |
|  +75.0% |   +5.999 MiB |         0.1% |      8 MiB → 14 MiB |       16 → 28 | `isCase(Object, Object)`                                                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`        |
| +110.0% |   +5.499 MiB | <0.1% → 0.1% |    5 MiB → 10.5 MiB |       10 → 21 | `collectViolations(SourceCode, RuleSet)`                                                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`             |
|  +37.0% |   +4.999 MiB |  0.1% → 0.2% | 13.5 MiB → 18.5 MiB |       27 → 37 | `toString()`                                                                                  | `java.lang.StringBuilder`                                  |
|   +9.9% |   +4.999 MiB |  0.4% → 0.5% | 50.5 MiB → 55.5 MiB |     101 → 111 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                                  |

##### Standard library

|  Change |        Delta |           % |                Size |       Samples | Function                                                                                      | Location                                                   |
| ------: | -----------: | ----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +210.3% | +203.999 MiB | 0.8% → 2.5% |    97 MiB → 301 MiB |     194 → 602 | `make(MethodType, LambdaForm, Object)`                                                        | `java.lang.invoke.BoundMethodHandle$Species_L`             |
|  +28.1% |  +38.499 MiB | 1.1% → 1.4% |   137 MiB → 175 MiB |     274 → 351 | `valueOf(long)`                                                                               | `java.lang.Long`                                           |
|  +13.3% |  +30.499 MiB | 1.9% → 2.1% |   229 MiB → 260 MiB |     459 → 520 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                              |
|  +50.0% |  +21.999 MiB | 0.4% → 0.5% |     44 MiB → 66 MiB |      88 → 132 | `compile(String)`                                                                             | `java.util.regex.Pattern`                                  |
|   +2.8% |  +17.999 MiB | 5.2% → 5.4% |   633 MiB → 651 MiB | 1,267 → 1,303 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  +26.6% |  +14.499 MiB | 0.4% → 0.6% |   54.5 MiB → 69 MiB |     109 → 138 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                         |
|  +11.8% |  +13.999 MiB | 1.0% → 1.1% |   119 MiB → 133 MiB |     238 → 266 | `make(MethodType, LambdaForm, Object, Object, Object)`                                        | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
|  +34.6% |  +13.499 MiB | 0.3% → 0.4% |   39 MiB → 52.5 MiB |      78 → 105 | `getParameterTypes()`                                                                         | `java.lang.reflect.Method`                                 |
|  +10.3% |  +12.999 MiB | 1.0% → 1.1% |   126 MiB → 139 MiB |     252 → 278 | `<init>()`                                                                                    | `java.math.MutableBigInteger`                              |
|   +3.8% |  +10.499 MiB | 2.2% → 2.3% |   274 MiB → 285 MiB |     549 → 570 | `copyOfRange(Object[], int, int)`                                                             | `java.util.Arrays`                                         |
|  +34.0% |   +8.999 MiB | 0.2% → 0.3% | 26.5 MiB → 35.5 MiB |       53 → 71 | `<init>()`                                                                                    | `java.util.ArrayDeque`                                     |
|  +15.3% |   +7.499 MiB | 0.4% → 0.5% |   49 MiB → 56.5 MiB |      98 → 113 | `createEntryListArray(int)`                                                                   | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
|  +48.3% |   +6.999 MiB | 0.1% → 0.2% | 14.5 MiB → 21.5 MiB |       29 → 43 | `join(PredictionContext, PredictionContext)`                                                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  +17.6% |   +6.499 MiB | 0.3% → 0.4% |   37 MiB → 43.5 MiB |       74 → 87 | `asSpreader(int, Class, int)`                                                                 | `java.lang.invoke.MethodHandle`                            |
|  +15.0% |   +5.999 MiB | 0.3% → 0.4% |     40 MiB → 46 MiB |       80 → 92 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.LinkedHashMap`                                  |
|  +36.4% |   +5.999 MiB | 0.1% → 0.2% | 16.5 MiB → 22.5 MiB |       33 → 45 | `removeRealReceiver(Object[])`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector`                 |
|  +75.0% |   +5.999 MiB |        0.1% |      8 MiB → 14 MiB |       16 → 28 | `isCase(Object, Object)`                                                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`        |
|  +37.0% |   +4.999 MiB | 0.1% → 0.2% | 13.5 MiB → 18.5 MiB |       27 → 37 | `toString()`                                                                                  | `java.lang.StringBuilder`                                  |
|   +9.9% |   +4.999 MiB | 0.4% → 0.5% | 50.5 MiB → 55.5 MiB |     101 → 111 | `matcher(CharSequence)`                                                                       | `java.util.regex.Pattern`                                  |
|  +52.6% |   +4.999 MiB |        0.1% |  9.5 MiB → 14.5 MiB |       19 → 29 | `create(ATNState, int, PredictionContext, SemanticContext, LexerActionExecutor)`              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |       Delta |            % |                Size |       Samples | Function                                                               | Location                                           |
| -----: | ----------: | -----------: | ------------------: | ------------: | ---------------------------------------------------------------------- | -------------------------------------------------- |
| -17.6% | -37.499 MiB |  1.7% → 1.4% |   213 MiB → 176 MiB |     427 → 352 | `compile()`                                                            | `java.util.regex.Pattern`                          |
|  -3.9% | -30.499 MiB |  6.4% → 6.2% |   788 MiB → 757 MiB | 1,576 → 1,515 | `makeImpl(Class, Class[], boolean)`                                    | `java.lang.invoke.MethodType`                      |
| -87.1% | -30.499 MiB | 0.3% → <0.1% |    35 MiB → 4.5 MiB |        70 → 9 | `tuple(Object, Object)`                                                | `groovy.lang.Tuple`                                |
| -10.3% | -26.999 MiB |  2.1% → 1.9% |   261 MiB → 234 MiB |     522 → 468 | `of(byte, int, int)`                                                   | `java.lang.invoke.LambdaFormEditor$TransformKey`   |
| -10.1% | -25.499 MiB |  2.1% → 1.9% |   252 MiB → 227 MiB |     505 → 454 | `divideAndRemainderKnuth(BigInteger)`                                  | `java.math.BigInteger`                             |
|  -6.0% | -20.999 MiB |  2.8% → 2.7% |   347 MiB → 326 MiB |     695 → 653 | `newArray(Class, int)`                                                 | `java.lang.reflect.Array`                          |
|  -8.4% | -20.499 MiB |  2.0% → 1.9% |   245 MiB → 225 MiB |     491 → 450 | `newNode(int, Object, Object, HashMap$Node)`                           | `java.util.HashMap`                                |
|  -8.5% | -19.999 MiB |  1.9% → 1.8% |   236 MiB → 216 MiB |     472 → 432 | `allocateInstance(Object)`                                             | `java.lang.invoke.DirectMethodHandle`              |
|  -6.5% | -19.499 MiB |  2.5% → 2.3% |   300 MiB → 281 MiB |     601 → 562 | `stream(Spliterator, boolean)`                                         | `java.util.stream.StreamSupport`                   |
| -69.8% | -14.999 MiB |  0.2% → 0.1% |  21.5 MiB → 6.5 MiB |       43 → 13 | `<init>(Object, Object)`                                               | `groovy.lang.Tuple2`                               |
|  -9.6% | -14.499 MiB |  1.2% → 1.1% |   150 MiB → 136 MiB |     301 → 272 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLL` |
|  -4.1% | -14.499 MiB |  2.9% → 2.8% |   357 MiB → 342 MiB |     714 → 685 | `make(MethodType, LambdaForm, Object, Object)`                         | `java.lang.invoke.BoundMethodHandle$Species_LL`    |
| -23.1% | -12.499 MiB |  0.4% → 0.3% |   54 MiB → 41.5 MiB |      108 → 83 | `unreflect(Method)`                                                    | `java.lang.invoke.MethodHandles$Lookup`            |
| -26.4% | -11.999 MiB |  0.4% → 0.3% | 45.5 MiB → 33.5 MiB |       91 → 67 | `grow(int)`                                                            | `java.util.ArrayList`                              |
| -15.1% | -11.499 MiB |  0.6% → 0.5% |   76 MiB → 64.5 MiB |     152 → 129 | `listIterator(int)`                                                    | `java.util.LinkedList`                             |
| -30.3% | -11.499 MiB |  0.3% → 0.2% |   38 MiB → 26.5 MiB |       76 → 53 | `<init>(Reader, int)`                                                  | `java.io.BufferedReader`                           |
| -25.9% | -10.999 MiB |         0.3% | 42.5 MiB → 31.5 MiB |       85 → 63 | `opWrapSink(int, Sink)`                                                | `java.util.stream.ReferencePipeline$3`             |
| -12.7% | -10.499 MiB |  0.7% → 0.6% |   82.5 MiB → 72 MiB |     165 → 144 | `iterator()`                                                           | `java.util.ArrayList`                              |
| -19.4% |  -9.999 MiB |  0.4% → 0.3% | 51.5 MiB → 41.5 MiB |      103 → 83 | `RemoveQEQuoting()`                                                    | `java.util.regex.Pattern`                          |
| -13.8% |  -9.499 MiB |  0.6% → 0.5% |   69 MiB → 59.5 MiB |     138 → 119 | `divideOneWord(int, MutableBigInteger)`                                | `java.math.MutableBigInteger`                      |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|     Change |        Delta |             % |               Size |    Samples | Function                                          | Location                                             |
| ---------: | -----------: | ------------: | -----------------: | ---------: | ------------------------------------------------- | ---------------------------------------------------- |
|        new |  +10.042 GiB |  0.0% → 84.7% |       0 B → 10 GiB | 0 → 20,567 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000004015a2000`  |
|        new |  +10.037 GiB |  0.0% → 84.6% |       0 B → 10 GiB | 0 → 20,556 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004015a4c00`  |
|        new |  +10.036 GiB |  0.0% → 84.6% |       0 B → 10 GiB | 0 → 20,555 | `invoke(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000004015a5000`  |
|        new |   +9.239 GiB |  0.0% → 77.9% |     0 B → 9.24 GiB | 0 → 18,922 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040163ac00`  |
|        new |   +9.239 GiB |  0.0% → 77.9% |     0 B → 9.24 GiB | 0 → 18,922 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000040163a800`  |
|        new |   +8.485 GiB |  0.0% → 71.6% |     0 B → 8.49 GiB | 0 → 17,376 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`  |
|        new |   +8.421 GiB |  0.0% → 71.0% |     0 B → 8.42 GiB | 0 → 17,246 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000401268800`  |
|        new |   +7.713 GiB |  0.0% → 65.0% |     0 B → 7.71 GiB | 0 → 15,797 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c1c00`  |
|        new |   +5.782 GiB |  0.0% → 48.8% |     0 B → 5.78 GiB | 0 → 11,840 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000040136cc00`  |
|        new |   +5.281 GiB |  0.0% → 44.5% |     0 B → 5.28 GiB | 0 → 10,815 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000000401363800`  |
| +298300.0% |   +1.456 GiB | <0.1% → 12.3% | 512 KiB → 1.46 GiB |  1 → 2,984 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c2800`  |
|        new |   +1.105 GiB |   0.0% → 9.3% |     0 B → 1.11 GiB |  0 → 2,265 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c7000`  |
|        new |   +1.076 GiB |   0.0% → 9.1% |     0 B → 1.08 GiB |  0 → 2,204 | `invoke(Object, Object, Object, long)`            | `java.lang.invoke.LambdaForm$MH.0x000000040136d000`  |
|        new | +510.999 MiB |   0.0% → 4.2% |      0 B → 511 MiB |  0 → 1,022 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401330800`  |
|        new | +487.499 MiB |   0.0% → 4.0% |      0 B → 487 MiB |    0 → 975 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000401330400`  |
|        new | +441.499 MiB |   0.0% → 3.6% |      0 B → 441 MiB |    0 → 883 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000040140ec00`  |
|        new | +438.499 MiB |   0.0% → 3.6% |      0 B → 438 MiB |    0 → 877 | `invoke(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000040186d400`  |
|        new | +438.499 MiB |   0.0% → 3.6% |      0 B → 438 MiB |    0 → 877 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017fe800`  |
|        new | +438.499 MiB |   0.0% → 3.6% |      0 B → 438 MiB |    0 → 877 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401268400` |
|        new | +438.499 MiB |   0.0% → 3.6% |      0 B → 438 MiB |    0 → 877 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401400800`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |            % |            Size |    Samples | Function                                          | Location                                             |
| ------: | -----------: | -----------: | --------------: | ---------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed |   -10.05 GiB | 84.0% → 0.0% |  10.1 GiB → 0 B | 20,583 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000040159e000`  |
| removed |  -10.044 GiB | 83.9% → 0.0% |    10 GiB → 0 B | 20,572 → 0 | `invoke(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x00000004015a1000`  |
| removed |  -10.044 GiB | 83.9% → 0.0% |    10 GiB → 0 B | 20,572 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004015a0c00`  |
| removed |   -9.262 GiB | 77.4% → 0.0% |  9.26 GiB → 0 B | 18,969 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401639800`  |
| removed |   -9.262 GiB | 77.4% → 0.0% |  9.26 GiB → 0 B | 18,969 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040163a400`  |
| removed |   -8.545 GiB | 71.4% → 0.0% |  8.55 GiB → 0 B | 17,500 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040136c400`  |
| removed |   -8.539 GiB | 71.4% → 0.0% |  8.54 GiB → 0 B | 17,487 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000040126c800`  |
| removed |   -7.708 GiB | 64.4% → 0.0% |  7.71 GiB → 0 B | 15,788 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017bfc00`  |
| removed |   -5.812 GiB | 48.6% → 0.0% |  5.81 GiB → 0 B | 11,901 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`  |
| removed |   -5.317 GiB | 44.4% → 0.0% |  5.32 GiB → 0 B | 10,889 → 0 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000000401363400`  |
| removed |   -1.441 GiB | 12.0% → 0.0% |  1.44 GiB → 0 B |  2,952 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c0800`  |
|  -99.5% |   -1.094 GiB | 9.2% → <0.1% | 1.1 GiB → 6 MiB | 2,253 → 12 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017c5000`  |
| removed |   -1.065 GiB |  8.9% → 0.0% |  1.07 GiB → 0 B |  2,182 → 0 | `invoke(Object, Object, Object, long)`            | `java.lang.invoke.LambdaForm$MH.0x000000040136cc00`  |
| removed | -540.498 MiB |  4.4% → 0.0% |   540 MiB → 0 B |  1,081 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000401334800`  |
| removed | -504.999 MiB |  4.1% → 0.0% |   505 MiB → 0 B |  1,010 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401334c00`  |
| removed | -493.499 MiB |  4.0% → 0.0% |   493 MiB → 0 B |    987 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401403000`  |
| removed | -491.499 MiB |  4.0% → 0.0% |   491 MiB → 0 B |    983 → 0 | `invoke(Object, Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x0000000401904800`  |
| removed | -491.499 MiB |  4.0% → 0.0% |   491 MiB → 0 B |    983 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000004017fc400`  |
| removed | -491.499 MiB |  4.0% → 0.0% |   491 MiB → 0 B |    983 → 0 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000040126c400` |
| removed | -491.499 MiB |  4.0% → 0.0% |   491 MiB → 0 B |    983 → 0 | `invoke(Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000401402000`  |

# Lock contention profile diff

Blocked 2.3ms → 4.2ms (+1.90ms, +84.0%) over 35 contentions → 32 contentions (64.7µs → 130.1µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +84.0% | +1.90ms | 100.0% | 2.3ms → 4.2ms |     35 → 32 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| +194.4% | +0.96ms | 21.8% → 34.9% | 0.5ms → 1.5ms |     18 → 14 | `poll()`             | `java.lang.ref.NativeReferenceQueue` |
|  +53.1% | +0.94ms | 78.2% → 65.1% | 1.8ms → 2.7ms |     17 → 18 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|   Change |   Delta |             % |           Time | Contentions | Function                                                                                         | Location                                                                    |
| -------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| +3374.8% | +1.15ms |  1.5% → 28.4% | 34.0µs → 1.2ms |       1 → 4 | `reinvoke(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x0000000401289c00`                         |
|      new | +1.04ms |  0.0% → 25.0% |    0ms → 1.0ms |      0 → 10 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000401268800`                         |
|      new | +1.04ms |  0.0% → 25.0% |    0ms → 1.0ms |      0 → 10 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`                         |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `get(Object)`                                                                                    | `jdk.internal.util.ReferencedKeyMap`                                        |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `get(Object)`                                                                                    | `jdk.internal.util.ReferencedKeySet`                                        |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                             |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000000401093000`                        |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000004010d3400`                         |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `collectViolations(SourceCode, RuleSet)`                                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `processFile(String, DirectoryResults, RuleSet)`                                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invokeSpecial(Object, Object, Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$DMH.0x000000040118a800`                        |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `doCall(Object)`                                                                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `eachFile(File, FileType, Closure)`                                                              | `org.codehaus.groovy.runtime.ResourceGroovyMethods`                         |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `eachFile(File, Closure)`                                                                        | `org.codehaus.groovy.runtime.ResourceGroovyMethods`                         |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `doMethodInvoke(Object, Object[])`                                                               | `org.codehaus.groovy.runtime.dgm$1076`                                      |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `processDirectory(String, RuleSet)`                                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000401282400`                         |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `analyze(RuleSet)`                                                                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `poll()`                                                                                         | `java.lang.ref.NativeReferenceQueue`                                        |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `removeStaleReferences()`                                                                        | `jdk.internal.util.ReferencedKeyMap`                                        |

##### Standard library

|   Change |   Delta |             % |           Time | Contentions | Function                                                                                         | Location                                             |
| -------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| +3374.8% | +1.15ms |  1.5% → 28.4% | 34.0µs → 1.2ms |       1 → 4 | `reinvoke(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x0000000401289c00`  |
|      new | +1.04ms |  0.0% → 25.0% |    0ms → 1.0ms |      0 → 10 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000401268800`  |
|      new | +1.04ms |  0.0% → 25.0% |    0ms → 1.0ms |      0 → 10 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`  |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `get(Object)`                                                                                    | `jdk.internal.util.ReferencedKeyMap`                 |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `get(Object)`                                                                                    | `jdk.internal.util.ReferencedKeySet`                 |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invokeInterface(Object, Object, Object)`                                                        | `java.lang.invoke.LambdaForm$DMH.0x0000000401093000` |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000004010d3400`  |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invokeSpecial(Object, Object, Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$DMH.0x000000040118a800` |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `eachFile(File, FileType, Closure)`                                                              | `org.codehaus.groovy.runtime.ResourceGroovyMethods`  |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `eachFile(File, Closure)`                                                                        | `org.codehaus.groovy.runtime.ResourceGroovyMethods`  |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `doMethodInvoke(Object, Object[])`                                                               | `org.codehaus.groovy.runtime.dgm$1076`               |
|  +216.2% | +0.99ms | 20.3% → 34.9% |  0.5ms → 1.5ms |     17 → 14 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000401282400`  |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `poll()`                                                                                         | `java.lang.ref.NativeReferenceQueue`                 |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `removeStaleReferences()`                                                                        | `jdk.internal.util.ReferencedKeyMap`                 |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `makeImpl(Class, Class[], boolean)`                                                              | `java.lang.invoke.MethodType`                        |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`      | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
|  +194.4% | +0.96ms | 21.8% → 34.9% |  0.5ms → 1.5ms |     18 → 14 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000401092000`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |            % |          Time | Contentions | Function                                                                                       | Location                                                  |
| ------: | ------: | -----------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| removed | -0.46ms | 20.4% → 0.0% |   0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000040126c800`       |
| removed | -0.46ms | 20.3% → 0.0% |   0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x00000004015a1000`       |
| removed | -0.46ms | 20.3% → 0.0% |   0.5ms → 0ms |      17 → 0 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x00000004015a0c00`       |
| removed | -0.46ms | 20.3% → 0.0% |   0.5ms → 0ms |      17 → 0 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000040159e000`       |
| removed | -0.43ms | 18.9% → 0.0% |   0.4ms → 0ms |      16 → 0 | `invoke(Object, Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000040136c400`       |
| removed | -0.41ms | 18.1% → 0.0% |   0.4ms → 0ms |      15 → 0 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000401639800`       |
| removed | -0.41ms | 18.1% → 0.0% |   0.4ms → 0ms |      15 → 0 | `invoke(Object, Object, Object, Object)`                                                       | `java.lang.invoke.LambdaForm$MH.0x000000040163a400`       |
| removed | -0.31ms | 13.7% → 0.0% |   0.3ms → 0ms |      12 → 0 | `invoke(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x00000004017bfc00`       |
| removed | -0.21ms |  9.4% → 0.0% |   0.2ms → 0ms |       9 → 0 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000040136c800`       |
|  -56.5% | -0.18ms | 14.2% → 3.4% | 0.3ms → 0.1ms |      12 → 4 | `setGuards(Object)`                                                                            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed | -0.17ms |  7.6% → 0.0% |   0.2ms → 0ms |       7 → 0 | `invoke(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000000401363400`       |
| removed | -0.15ms |  6.5% → 0.0% |   0.1ms → 0ms |       5 → 0 | `invoke(Object, Object, Object, long)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000040136cc00`       |
|  -68.4% | -0.12ms |  8.0% → 1.4% | 0.2ms → 0.1ms |       8 → 1 | `dropParameterTypes(int, int)`                                                                 | `java.lang.invoke.MethodType`                             |
| removed | -0.12ms |  5.3% → 0.0% |   0.1ms → 0ms |       3 → 0 | `guardWithTest(MethodHandle, MethodHandle)`                                                    | `java.lang.invoke.SwitchPoint`                            |
|  -61.5% | -0.09ms |  6.6% → 1.4% |         0.1ms |       7 → 1 | `bindArgumentType(BoundMethodHandle, int, LambdaForm$BasicType)`                               | `java.lang.invoke.LambdaFormEditor`                       |
|  -61.5% | -0.09ms |  6.6% → 1.4% |         0.1ms |       7 → 1 | `bindArgumentL(BoundMethodHandle, int, Object)`                                                | `java.lang.invoke.LambdaFormEditor`                       |
|  -61.5% | -0.09ms |  6.6% → 1.4% |         0.1ms |       7 → 1 | `bindArgumentL(int, Object)`                                                                   | `java.lang.invoke.BoundMethodHandle`                      |
|  -61.5% | -0.09ms |  6.6% → 1.4% |         0.1ms |       7 → 1 | `bindArgumentL(int, Object)`                                                                   | `java.lang.invoke.MethodHandle`                           |
|  -61.5% | -0.09ms |  6.6% → 1.4% |         0.1ms |       7 → 1 | `bindTo(Object)`                                                                               | `java.lang.invoke.MethodHandle`                           |
|  -57.7% | -0.09ms |  7.0% → 1.6% | 0.2ms → 0.1ms |       6 → 2 | `access$000(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`           |
