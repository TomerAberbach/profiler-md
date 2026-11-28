# Sampling profile

Collected 5,299 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 54.3% |   2,878 |
| Native            | 30.3% |   1,607 |
| Standard library  | 12.1% |     640 |
| Compiler          |  1.2% |      66 |
| Garbage collector |  1.1% |      60 |
| JIT               |  0.9% |      47 |
| Unknown           | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 5,020 samples (94.7%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 5,020 samples (94.7%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 4,405 samples (83.1%) doExec() at java.util.concurrent.ForkJoinTask
│       │   ├── … 4,366 samples (82.4%) exec() at java.util.concurrent.RecursiveTask
│       │   │   └── 4,364 samples (82.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── … 1,747 samples (33.0%, self 11.4%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   ├── 1,059 samples (20.0%, self 17.9%) accumulate(Double[], double[])
│       │   │       │   │   └── 109 samples (2.1%) doubleValue() at java.lang.Double
│       │   │       │   └── 80 samples (1.5%) get(int) at java.util.ArrayList
│       │   │       │       └── 79 samples (1.5%, self 3.0% globally) elementData(int)
│       │   │       ├── 1,688 samples (31.9%) computeDirectly(): Object at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   └── 1,688 samples (31.9%) computeDirectly(): Map
│       │   │       │       ├── 1,264 samples (23.9%, self 7.0%) findNearestCentroid()
│       │   │       │       │   ├── 836 samples (15.8%, self 15.6%) distance(Double[], Double[])
│       │   │       │       │   └── 58 samples (1.1%) 3 more callees, led by (1.0%) get(int) at java.util.ArrayList
│       │   │       │       └── 424 samples (8.0%, self 2.1%) collectClusters(int[])
│       │   │       │           ├── 160 samples (3.0%, self 2.5%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       │           │   └── 24 samples (0.5%) hash(Object)
│       │   │       │           ├── 104 samples (2.0%) add(Object) at java.util.ArrayList
│       │   │       │           │   └── 104 samples (2.0%, self 0.9%) add(Object, Object[], int)
│       │   │       │           │       └── 55 samples (1.0%) grow() …
│       │   │       │           └── 48 samples (0.9%) get(int) at java.util.ArrayList
│       │   │       │               ├── 29 samples (0.5%) elementData(int)
│       │   │       │               └── 19 samples (0.4%) checkIndex(int, int) at java.util.Objects
│       │   │       ├── … 308 samples (5.8%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │       │   ├── 219 samples (4.1%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7248
│       │   │       │   │   └── 219 samples (4.1%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   │       ├── 146 samples (2.8%) addAll(Collection) at java.util.ArrayList
│       │   │       │   │       │   ├── … 56 samples (1.1%, self 3.8% globally) forward_copy_longs
│       │   │       │   │       │   ├── … 10 samples (0.2%) _platform_bzero
│       │   │       │   │       │   └── 55 samples (1.0%) 2 more callees, led by (1.0%) arrayof_oop_disjoint_arraycopy
│       │   │       │   │       └── 73 samples (1.4%) <init>(Collection) at java.util.ArrayList …
│       │   │       │   ├── 52 samples (1.0%) arrayof_jint_disjoint_arraycopy …
│       │   │       │   └── 30 samples (0.6%) zero_blocks
│       │   │       └── 605 samples (11.4%) 11 more callees, led by (10.9%) join() at java.util.concurrent.ForkJoinTask
│       │   └── … 28 samples (0.5%) __psynch_cvsignal
│       └── 601 samples (11.3%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 563 samples (10.6%, self 21.3% globally) __psynch_cvwait
│           └── 27 samples (0.5%) parkUntil(long) at java.util.concurrent.locks.LockSupport …
└── 279 samples (5.3%) 5 more root frames, led by (4.3%) thread_start
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 21.3% |   1,129 | `__psynch_cvwait`                                         | `<unknown>`                                                |
| 17.9% |     950 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.6% |     824 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 11.4% |     605 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.0% |     370 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.8% |     200 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  3.0% |     157 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  2.5% |     135 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  2.2% |     116 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  2.1% |     111 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |      49 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  0.9% |      46 | `__psynch_cvsignal`                                       | `<unknown>`                                                |
|  0.8% |      42 | `zero_blocks`                                             | `<unknown>`                                                |
|  0.5% |      25 | `hash(Object)`                                            | `java.util.HashMap`                                        |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  0.4% |      22 | `checkIndex(int, int)`                                    | `java.util.Objects`                                        |
|  0.4% |      22 | `_platform_bzero`                                         | `<unknown>`                                                |
|  0.4% |      20 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |
|  0.4% |      20 | `__psynch_mutexwait`                                      | `<unknown>`                                                |
|  0.3% |      18 | `grow(int)`                                               | `java.util.ArrayList`                                      |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                                   | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 17.9% |     950 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.6% |     824 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 11.4% |     605 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.0% |     370 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.1% |     111 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       4 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% |       3 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       2 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `computeClusterAverages()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `lambda$run$0(int, List, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `add(double[], double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `<init>(JavaKMeans, Map)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Native

|     % | Samples | Function                                                                                                                                                              | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 21.3% |   1,129 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>` |
|  3.8% |     200 | `forward_copy_longs`                                                                                                                                                  | `<unknown>` |
|  0.9% |      46 | `__psynch_cvsignal`                                                                                                                                                   | `<unknown>` |
|  0.4% |      22 | `_platform_bzero`                                                                                                                                                     | `<unknown>` |
|  0.4% |      20 | `arrayof_jint_disjoint_arraycopy`                                                                                                                                     | `<unknown>` |
|  0.4% |      20 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>` |
|  0.3% |      18 | `semaphore_wait_trap`                                                                                                                                                 | `<unknown>` |
|  0.2% |      11 | `pthread_jit_write_protect_np`                                                                                                                                        | `<unknown>` |
|  0.1% |       7 | `_platform_memset`                                                                                                                                                    | `<unknown>` |
|  0.1% |       6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                      | `<unknown>` |
|  0.1% |       5 | `arrayof_oop_disjoint_arraycopy`                                                                                                                                      | `<unknown>` |
|  0.1% |       4 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                                  | `<unknown>` |
|  0.1% |       4 | `inflate_fast`                                                                                                                                                        | `<unknown>` |
|  0.1% |       3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
|  0.1% |       3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1MarkAndPushClosure*, oopDesc*, Klass*)`                         | `<unknown>` |
|  0.1% |       3 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)`          | `<unknown>` |
|  0.1% |       3 | `ObjArrayAllocator::initialize(HeapWordImpl**) const`                                                                                                                 | `<unknown>` |
|  0.1% |       3 | `tlv_get_addr`                                                                                                                                                        | `<unknown>` |
|  0.1% |       3 | `pthread_testcancel`                                                                                                                                                  | `<unknown>` |
|  0.1% |       3 | `pthread_dependency_wait_np.cold.3`                                                                                                                                   | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                  | Location                                      |
| ---: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 3.0% |     157 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| 2.5% |     135 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| 2.2% |     116 | `doubleValue()`                                           | `java.lang.Double`                            |
| 0.9% |      49 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| 0.5% |      25 | `hash(Object)`                                            | `java.util.HashMap`                           |
| 0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 0.4% |      22 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
| 0.3% |      18 | `grow(int)`                                               | `java.util.ArrayList`                         |
| 0.2% |       8 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| 0.1% |       6 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       5 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
| 0.1% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       4 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       4 | `get(int)`                                                | `java.util.ArrayList`                         |
| 0.1% |       4 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| 0.1% |       4 | `grow()`                                                  | `java.util.ArrayList`                         |
| 0.1% |       3 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       3 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| 0.1% |       3 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
| 0.1% |       3 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |

##### Compiler

|     % | Samples | Function                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------- |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`           | `<unknown>` |
|  0.1% |       3 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                 | `<unknown>` |
|  0.1% |       3 | `IndexSetIterator::advance_and_next()`                                            | `<unknown>` |
| <0.1% |       2 | `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)`                             | `<unknown>` |
| <0.1% |       2 | `ValueStack::values_do(ValueVisitor*)`                                            | `<unknown>` |
| <0.1% |       1 | `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)`                      | `<unknown>` |
| <0.1% |       1 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`  | `<unknown>` |
| <0.1% |       1 | `IfTrueNode::Opcode() const`                                                      | `<unknown>` |
| <0.1% |       1 | `PhaseIdealLoop::match_fill_loop(IdealLoopTree*, Node*&, Node*&, Node*&, Node*&)` | `<unknown>` |
| <0.1% |       1 | `ciObjectFactory::get_metadata(Metadata*)`                                        | `<unknown>` |
| <0.1% |       1 | `TypeOopPtr::cleanup_speculative() const`                                         | `<unknown>` |
| <0.1% |       1 | `Unique_Node_List::remove(Node*)`                                                 | `<unknown>` |
| <0.1% |       1 | `PhaseIterGVN::transform_old(Node*)`                                              | `<unknown>` |
| <0.1% |       1 | `PhaseCFG::implicit_null_check(Block*, Node*, Node*, int)`                        | `<unknown>` |
| <0.1% |       1 | `Node::rematerialize() const`                                                     | `<unknown>` |
| <0.1% |       1 | `PhiNode::Opcode() const`                                                         | `<unknown>` |
| <0.1% |       1 | `LIR_OpVisitState::visit(LIR_Op*)`                                                | `<unknown>` |
| <0.1% |       1 | `LinearScan::build_intervals()`                                                   | `<unknown>` |
| <0.1% |       1 | `LinearScanWalker::alloc_free_reg(Interval*)`                                     | `<unknown>` |
| <0.1% |       1 | `LoadINode::Opcode() const`                                                       | `<unknown>` |

##### Garbage collector

|     % | Samples | Function                                                                                             | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  0.3% |      14 | `G1FullGCMarker::mark_object(oopDesc*)`                                                              | `<unknown>` |
|  0.2% |       8 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)`                                                   | `<unknown>` |
|  0.1% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` | `<unknown>` |
|  0.1% |       5 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                       | `<unknown>` |
|  0.1% |       4 | `G1FullGCMarker::follow_object(oopDesc*)`                                                            | `<unknown>` |
|  0.1% |       3 | `G1BarrierSet::write_ref_array_work(MemRegion)`                                                      | `<unknown>` |
|  0.1% |       3 | `G1FullGCCompactTask::copy_object_to_new_location(oopDesc*)`                                         | `<unknown>` |
| <0.1% |       2 | `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const`         | `<unknown>` |
| <0.1% |       2 | `G1FullGCMarker::follow_marking_stacks()`                                                            | `<unknown>` |
| <0.1% |       2 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                      | `<unknown>` |
| <0.1% |       2 | `G1FullGCCompactTask::compact_region(HeapRegion*)`                                                   | `<unknown>` |
| <0.1% |       2 | `G1BarrierSet::invalidate(MemRegion)`                                                                | `<unknown>` |
| <0.1% |       1 | `G1CardTable::g1_mark_as_young(MemRegion const&)`                                                    | `<unknown>` |
| <0.1% |       1 | `G1Allocator::unsafe_max_tlab_alloc()`                                                               | `<unknown>` |
| <0.1% |       1 | `G1BarrierSetRuntime::write_ref_array_post_entry(HeapWordImpl**, unsigned long)`                     | `<unknown>` |
| <0.1% |       1 | `G1PreEvacuateCollectionSetBatchTask::G1PreEvacuateCollectionSetBatchTask()`                         | `<unknown>` |
| <0.1% |       1 | `HeapRegion::update_bot_for_block(HeapWordImpl**, HeapWordImpl**)`                                   | `<unknown>` |
| <0.1% |       1 | `G1FullGCCompactionPoint::forward(oopDesc*, unsigned long)`                                          | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 97.5% |   1,101 | `Parker::park(bool, long)`                  | `<unknown>` |
|  2.5% |      28 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     950 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     824 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                        | Location                                                  |
| -----: | ------: | ----------------------------- | --------------------------------------------------------- |
| 100.0% |     605 | `computeDirectly(): double[]` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     370 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 78.5% |     157 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 21.5% |      43 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     157 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     135 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 94.0% |     109 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  6.0% |       7 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     111 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      49 | `add(Object)` | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      46 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 71.4% |      30 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| 28.6% |      12 | `grow(int)`                         | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 96.0% |      24 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|  4.0% |       1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      24 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      22 | `get(int)` | `java.util.ArrayList` |

##### `_platform_bzero` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 95.5% |      21 | `MemAllocator::allocate() const`                       | `<unknown>` |
|  4.5% |       1 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 50.0% |      10 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 25.0% |       5 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| 25.0% |       5 | `grow(int)`                         | `java.util.ArrayList` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      20 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      18 | `grow()` | `java.util.ArrayList` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 72.2% |      13 | `WorkerThread::run()`                                | `<unknown>` |
| 22.2% |       4 | `GenericWaitBarrier::Cell::wait(int)`                | `<unknown>` |
|  5.6% |       1 | `WorkerThreads::run_task(WorkerTask*, unsigned int)` | `<unknown>` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 92.9% |      13 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                                                                                    | `<unknown>` |
|  7.1% |       1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 36.4% |       4 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |
| 18.2% |       2 | `JVM_IHashCode`                                         | `<unknown>` |
| 18.2% |       2 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`         | `<unknown>` |
|  9.1% |       1 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`    | `<unknown>` |
|  9.1% |       1 | `_new_array_Java`                                       | `<unknown>` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `G1RegionMarkStatsCache::add_live_words(oopDesc*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       8 | `G1FullGCMarker::mark_object(oopDesc*)` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 57.1% |       4 | `MemAllocator::allocate() const`                                               | `<unknown>` |
| 14.3% |       1 | `Unique_Node_List::push(Node*)`                                                | `<unknown>` |
| 14.3% |       1 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |
| 14.3% |       1 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`             | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.7% |       4 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |
| 33.3% |       2 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                                                                                           | `<unknown>` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       6 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller               | Location              |
| -----: | ------: | -------------------- | --------------------- |
| 100.0% |       5 | `addAll(Collection)` | `java.util.ArrayList` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       5 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` (`<unknown>`)

|      % | Samples | Caller                                                         | Location    |
| -----: | ------: | -------------------------------------------------------------- | ----------- |
| 100.0% |       4 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       4 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |       4 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 75.0% |       3 | `toArray()` | `java.util.ArrayList` |
| 25.0% |       1 | `grow(int)` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |       4 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `G1FullGCMarker::follow_object(oopDesc*)` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 75.0% |       3 | `G1FullGCMarker::publish_and_drain_oop_tasks()` | `<unknown>` |
| 25.0% |       1 | `G1FullGCMarker::follow_marking_stacks()`       | `<unknown>` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1MarkAndPushClosure*, oopDesc*, Klass*)` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 66.7% |       2 | `G1FullGCMarker::follow_marking_stacks()`       | `<unknown>` |
| 33.3% |       1 | `G1FullGCMarker::publish_and_drain_oop_tasks()` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       3 | `G1FullGCPrepareTask::work(unsigned int)` | `<unknown>` |

##### `ObjArrayAllocator::initialize(HeapWordImpl**) const` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       3 | `MemAllocator::allocate() const` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 33.3% |       1 | `ciInstanceKlass::compute_nonstatic_fields()` | `<unknown>` |
| 33.3% |       1 | `arrayof_oop_disjoint_arraycopy`              | `<unknown>` |
| 33.3% |       1 | `GraphBuilder::invoke(Bytecodes::Code)`       | `<unknown>` |

##### `pthread_testcancel` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       3 | `_pthread_cond_wait` | `<unknown>` |

##### `pthread_dependency_wait_np.cold.3` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       3 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       3 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |       3 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       3 | `grow(int)` | `java.util.ArrayList` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 33.3% |       1 | `PhaseChaitin::Select()`                                             | `<unknown>` |
| 33.3% |       1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |

##### `G1BarrierSet::write_ref_array_work(MemRegion)` (`<unknown>`)

|     % | Samples | Caller                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 66.7% |       2 | `addAll(Collection)`             | `java.util.ArrayList` |
| 33.3% |       1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |

##### `G1FullGCCompactTask::copy_object_to_new_location(oopDesc*)` (`<unknown>`)

|      % | Samples | Caller                                                         | Location    |
| -----: | ------: | -------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `G1FullGCCompactTask::G1CompactRegionClosure::apply(oopDesc*)` | `<unknown>` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Caller                               | Location                                                  |
| ----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 50.0% |       1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
| 50.0% |       1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       2 | `Node::replace_edge(Node*, Node*, PhaseGVN*)` | `<unknown>` |

##### `ValueStack::values_do(ValueVisitor*)` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       2 | `UseCountComputer::block_do(BlockBegin*)` | `<unknown>` |

##### `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       2 | `G1PrepareEvacuationTask::work(unsigned int)` | `<unknown>` |

##### `G1FullGCMarker::follow_marking_stacks()` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                                                                                           | `<unknown>` |
| 50.0% |       1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `G1FullGCCompactTask::compact_region(HeapRegion*)` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       2 | `G1FullGCCompactTask::work(unsigned int)` | `<unknown>` |

##### `G1BarrierSet::invalidate(MemRegion)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |       1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       1 | `BlockBegin::try_merge(ValueStack*, bool)` | `<unknown>` |

##### `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|      % | Samples | Caller                                           | Location    |
| -----: | ------: | ------------------------------------------------ | ----------- |
| 100.0% |       1 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `IfTrueNode::Opcode() const` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::match_fill_loop(IdealLoopTree*, Node*&, Node*&, Node*&, Node*&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseIdealLoop::do_intrinsify_fill()` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|      % | Samples | Caller                                              | Location    |
| -----: | ------: | --------------------------------------------------- | ----------- |
| 100.0% |       1 | `ciMethod::ensure_method_data(methodHandle const&)` | `<unknown>` |

##### `TypeOopPtr::cleanup_speculative() const` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `PhaseCCP::analyze()` | `<unknown>` |

##### `Unique_Node_List::remove(Node*)` (`<unknown>`)

|      % | Samples | Caller                                           | Location    |
| -----: | ------: | ------------------------------------------------ | ----------- |
| 100.0% |       1 | `PhaseIterGVN::remove_globally_dead_node(Node*)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       1 | `PhaseIterGVN::optimize()` | `<unknown>` |

##### `PhaseCFG::implicit_null_check(Block*, Node*, Node*, int)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `Node::rematerialize() const` (`<unknown>`)

|      % | Samples | Caller                                            | Location    |
| -----: | ------: | ------------------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` | `<unknown>` |

##### `PhiNode::Opcode() const` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       1 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |

##### `LIR_OpVisitState::visit(LIR_Op*)` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       1 | `LinearScan::build_intervals()` | `<unknown>` |

##### `LinearScan::build_intervals()` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       1 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       1 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `LoadINode::Opcode() const` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `Compile::Optimize()` | `<unknown>` |

##### `G1CardTable::g1_mark_as_young(MemRegion const&)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `MemAllocator::allocate() const` | `<unknown>` |

##### `G1Allocator::unsafe_max_tlab_alloc()` (`<unknown>`)

|      % | Samples | Caller                                                                         | Location    |
| -----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 100.0% |       1 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |

##### `G1BarrierSetRuntime::write_ref_array_post_entry(HeapWordImpl**, unsigned long)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `G1PreEvacuateCollectionSetBatchTask::G1PreEvacuateCollectionSetBatchTask()` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `G1YoungCollector::collect()` | `<unknown>` |

##### `HeapRegion::update_bot_for_block(HeapWordImpl**, HeapWordImpl**)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                       | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       1 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>` |

##### `G1FullGCCompactionPoint::forward(oopDesc*, unsigned long)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                       | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       1 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 94.7% |   5,020 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 94.7% |   5,020 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 83.4% |   4,417 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 83.2% |   4,407 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 83.1% |   4,405 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 82.7% |   4,384 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 82.7% |   4,383 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 80.0% |   4,237 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 79.9% |   4,236 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 75.5% |   3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 33.0% |   1,747 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.0% |   1,747 | `computeDirectly(): double[]`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.0% |   1,747 | `computeDirectly(): Object`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 31.9% |   1,688 | `computeDirectly(): Map`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 31.9% |   1,688 | `computeDirectly(): Object`                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 23.9% |   1,264 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 21.6% |   1,143 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 21.6% |   1,143 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 21.3% |   1,129 | `__psynch_cvwait`                                         | `<unknown>`                                                |
| 21.1% |   1,120 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 82.7% |   4,383 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 33.0% |   1,747 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 33.0% |   1,747 | `computeDirectly(): double[]`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 33.0% |   1,747 | `computeDirectly(): Object`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 31.9% |   1,688 | `computeDirectly(): Map`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 31.9% |   1,688 | `computeDirectly(): Object`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 23.9% |   1,264 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.0% |   1,059 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 16.0% |     847 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 16.0% |     847 | `computeDirectly(): Map`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 16.0% |     847 | `computeDirectly(): Object`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.9% |     842 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.8% |     836 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.8% |     517 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.8% |     517 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  8.0% |     424 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.1% |     325 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.1% |     323 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.1% |     323 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  5.8% |     309 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Native

|     % | Samples | Function                                                                       | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 21.3% |   1,129 | `__psynch_cvwait`                                                              | `<unknown>` |
| 21.1% |   1,119 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                        | `<unknown>` |
| 20.9% |   1,110 | `Parker::park(bool, long)`                                                     | `<unknown>` |
|  4.3% |     229 | `_pthread_start`                                                               | `<unknown>` |
|  4.3% |     229 | `thread_start`                                                                 | `<unknown>` |
|  4.3% |     228 | `Thread::call_run()`                                                           | `<unknown>` |
|  4.3% |     228 | `thread_native_entry(Thread*)`                                                 | `<unknown>` |
|  3.8% |     200 | `forward_copy_longs`                                                           | `<unknown>` |
|  3.3% |     177 | `arrayof_jint_disjoint_arraycopy`                                              | `<unknown>` |
|  2.2% |     114 | `WorkerThread::run()`                                                          | `<unknown>` |
|  1.8% |      96 | `JavaThread::thread_main_inner()`                                              | `<unknown>` |
|  1.1% |      57 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                | `<unknown>` |
|  1.0% |      53 | `arrayof_oop_disjoint_arraycopy`                                               | `<unknown>` |
|  1.0% |      51 | `_new_array_Java`                                                              | `<unknown>` |
|  0.9% |      48 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                           | `<unknown>` |
|  0.9% |      47 | `MemAllocator::allocate() const`                                               | `<unknown>` |
|  0.9% |      46 | `__psynch_cvsignal`                                                            | `<unknown>` |
|  0.9% |      46 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|  0.8% |      43 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                      | `<unknown>` |
|  0.6% |      30 | `PlatformMonitor::wait(unsigned long long)`                                    | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 94.7% |   5,020 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 94.7% |   5,020 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 83.4% |   4,417 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 83.2% |   4,407 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 83.1% |   4,405 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 82.7% |   4,384 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 80.0% |   4,237 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 79.9% |   4,236 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 75.5% |   3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 21.6% |   1,143 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 21.6% |   1,143 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 21.1% |   1,120 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| 20.6% |   1,093 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
| 11.3% |     601 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  9.8% |     517 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  5.9% |     312 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  5.8% |     309 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  3.5% |     183 | `get(int)`                                                | `java.util.ArrayList`                               |
|  3.2% |     167 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  3.0% |     160 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |

##### Compiler

|    % | Samples | Function                                                                                                | Location    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 1.8% |      95 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 1.6% |      85 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 1.3% |      69 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 1.3% |      69 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 0.6% |      30 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 0.5% |      29 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 0.3% |      17 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 0.3% |      17 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 0.3% |      17 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 0.3% |      17 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 0.3% |      14 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 0.3% |      14 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 0.2% |      13 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 0.2% |       9 | `CompileQueue::get(CompilerThread*)`                                                                    | `<unknown>` |
| 0.2% |       8 | `Compilation::build_hir()`                                                                              | `<unknown>` |
| 0.1% |       6 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                    | `<unknown>` |
| 0.1% |       6 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
| 0.1% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                       | `<unknown>` |
| 0.1% |       5 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                                        | `<unknown>` |
| 0.1% |       5 | `GraphBuilder::iterate_all_blocks(bool)`                                                                | `<unknown>` |

##### Garbage collector

|    % | Samples | Function                                                                                                                                                                                                                            | Location    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 0.9% |      48 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |
| 0.9% |      48 | `G1FullGCMarkTask::work(unsigned int)`                                                                                                                                                                                              | `<unknown>` |
| 0.5% |      28 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                                                                                                                     | `<unknown>` |
| 0.5% |      25 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                                                                                                                          | `<unknown>` |
| 0.5% |      25 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                                                                                                                 | `<unknown>` |
| 0.5% |      24 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                                                                                           | `<unknown>` |
| 0.4% |      23 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                                                                                                                             | `<unknown>` |
| 0.2% |      13 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                                                                                       | `<unknown>` |
| 0.2% |      11 | `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const`                                                                                                                                        | `<unknown>` |
| 0.2% |      11 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                                                                                                                                                      | `<unknown>` |
| 0.2% |      11 | `G1ParEvacuateFollowersClosure::offer_termination()`                                                                                                                                                                                | `<unknown>` |
| 0.2% |      10 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)`                                                                                               | `<unknown>` |
| 0.2% |       9 | `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)`                                                                                                                                                       | `<unknown>` |
| 0.2% |       8 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)`                                                                                                                                                                                  | `<unknown>` |
| 0.2% |       8 | `G1CollectedHeap::attempt_allocation(unsigned long, unsigned long, unsigned long*, bool)`                                                                                                                                           | `<unknown>` |
| 0.1% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)`                                                                                                                                | `<unknown>` |
| 0.1% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)`                                                                                                                                                    | `<unknown>` |
| 0.1% |       7 | `G1FullGCResetMetadataTask::work(unsigned int)`                                                                                                                                                                                     | `<unknown>` |
| 0.1% |       7 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                                                                                                                                                     | `<unknown>` |
| 0.1% |       5 | `G1FullGCPrepareTask::work(unsigned int)`                                                                                                                                                                                           | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   5,020 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,417 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   4,407 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   4,405 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  90.8% |   3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  25.9% |   1,143 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  25.2% |   1,110 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   4,384 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   4,383 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,237 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   4,236 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   3,999 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                        | Location                                                  |
| -----: | ------: | ----------------------------- | --------------------------------------------------------- |
| 100.0% |   1,747 | `computeDirectly(): double[]` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly(): double[]` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                      | Location                                                  |
| -----: | ------: | --------------------------- | --------------------------------------------------------- |
| 100.0% |   1,747 | `computeDirectly(): Object` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,747 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly(): Map` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                      | Location                                                   |
| -----: | ------: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |   1,688 | `computeDirectly(): Object` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,688 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   1,264 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,143 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 73.7% |     842 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 45.1% |     515 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `__psynch_cvwait` (`<unknown>`)

|     % | Samples | Caller                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 97.5% |   1,101 | `Parker::park(bool, long)`                  | `<unknown>` |
|  2.5% |      28 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Caller            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 97.6% |   1,093 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  2.4% |      27 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` (`<unknown>`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   1,119 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park(bool, long)` (`<unknown>`)

|      % | Samples | Caller                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |   1,110 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Caller                              | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
| 52.3% |     572 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 47.7% |     521 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |   1,059 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     847 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Map` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                      | Location                                               |
| -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 100.0% |     847 | `computeDirectly(): Object` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |     847 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     842 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     836 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |     601 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     517 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     517 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     517 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     424 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller                     | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 99.4% |     323 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |       2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |     323 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |     323 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     312 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |     309 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |     309 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     229 | `thread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |     228 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     228 | `_pthread_start` | `<unknown>` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 78.5% |     157 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 21.5% |      43 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Caller                   | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 43.7% |      80 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 30.1% |      55 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 26.2% |      48 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 65.0% |     115 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 29.4% |      52 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
|  5.6% |      10 | `grow(int)`                         | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 84.4% |     141 | `toArray()` | `java.util.ArrayList` |
| 15.6% |      26 | `grow(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     160 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `WorkerThread::run()` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     114 | `Thread::call_run()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      96 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      95 | `JavaThread::thread_main_inner()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |      85 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                                    | Location    |
| -----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 100.0% |      69 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                   | Location    |
| -----: | ------: | -------------------------------------------------------- | ----------- |
| 100.0% |      69 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` (`<unknown>`)

|      % | Samples | Caller           | Location                   |
| -----: | ------: | ---------------- | -------------------------- |
| 100.0% |      57 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller               | Location              |
| -----: | ------: | -------------------- | --------------------- |
| 100.0% |      53 | `addAll(Collection)` | `java.util.ArrayList` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Caller                    | Location                                                   |
| ----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 94.1% |      48 | `copyOf(Object[], int)`   | `java.util.Arrays`                                         |
|  3.9% |       2 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.0% |       1 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` (`<unknown>`)

|      % | Samples | Caller            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |      48 | `_new_array_Java` | `<unknown>` |

##### `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      48 | `G1FullGCMarkTask::work(unsigned int)` | `<unknown>` |

##### `G1FullGCMarkTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      48 | `WorkerThread::run()` | `<unknown>` |

##### `MemAllocator::allocate() const` (`<unknown>`)

|     % | Samples | Caller                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 93.6% |      44 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|  6.4% |       3 | `InstanceKlass::allocate_instance(JavaThread*)`                                | `<unknown>` |

##### `__psynch_cvsignal` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      46 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` (`<unknown>`)

|     % | Samples | Caller                                                    | Location    |
| ----: | ------: | --------------------------------------------------------- | ----------- |
| 91.3% |      42 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)` | `<unknown>` |
|  6.5% |       3 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`      | `<unknown>` |
|  2.2% |       1 | `_new_array_Java`                                         | `<unknown>` |

##### `InstanceKlass::allocate_objArray(int, int, JavaThread*)` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      43 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` | `<unknown>` |

##### `PlatformMonitor::wait(unsigned long long)` (`<unknown>`)

|     % | Samples | Caller                                                      | Location    |
| ----: | ------: | ----------------------------------------------------------- | ----------- |
| 70.0% |      21 | `Monitor::wait_without_safepoint_check(unsigned long long)` | `<unknown>` |
| 30.0% |       9 | `Monitor::wait(unsigned long long)`                         | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |      30 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |      29 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      28 | `WorkerThread::run()` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void()` (`<unknown>`)

|      % | Samples | Caller                                                                              | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| 100.0% |      25 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      25 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |

##### `G1FullGCMarker::follow_marking_stacks()` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      24 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 95.7% |      22 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                                                                                    | `<unknown>` |
|  4.3% |       1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |      17 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Caller                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      17 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 64.7% |      11 | `Compile::Optimize()`                                  | `<unknown>` |
| 35.3% |       6 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      17 | `Compile::Code_Gen()` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      14 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |      14 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      13 | `Compilation::compile_method()` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 69.2% |       9 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| 30.8% |       4 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>` |

##### `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` (`<unknown>`)

|     % | Samples | Caller                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 63.6% |       7 | `G1FullGCResetMetadataTask::work(unsigned int)` | `<unknown>` |
| 18.2% |       2 | `G1FullGCAdjustTask::work(unsigned int)`        | `<unknown>` |
| 18.2% |       2 | `G1PrepareEvacuationTask::work(unsigned int)`   | `<unknown>` |

##### `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |      11 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::offer_termination()` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      11 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      10 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       9 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)` (`<unknown>`)

|     % | Samples | Caller                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 88.9% |       8 | `G1CollectedHeap::attempt_allocation(unsigned long, unsigned long, unsigned long*, bool)` | `<unknown>` |
| 11.1% |       1 | `G1CollectedHeap::mem_allocate(unsigned long, bool*)`                                     | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `Compilation::compile_java_method()` | `<unknown>` |

##### `G1RegionMarkStatsCache::add_live_words(oopDesc*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       8 | `G1FullGCMarker::mark_object(oopDesc*)` | `<unknown>` |

##### `G1CollectedHeap::attempt_allocation(unsigned long, unsigned long, unsigned long*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                         | Location    |
| -----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 100.0% |       8 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` (`<unknown>`)

|      % | Samples | Caller                                                                                       | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` | `<unknown>` |

##### `G1FullGCResetMetadataTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       7 | `WorkerThread::run()` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 85.7% |       6 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                                                                                           | `<unknown>` |
| 14.3% |       1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|      % | Samples | Caller                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       6 | `Compile::Optimize()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|      % | Samples | Caller                                   | Location    |
| -----: | ------: | ---------------------------------------- | ----------- |
| 100.0% |       5 | `GraphBuilder::iterate_all_blocks(bool)` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks(bool)` (`<unknown>`)

|      % | Samples | Caller                                                                                | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       5 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                  | `<unknown>` |
|  40.0% |       2 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `G1FullGCPrepareTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       5 | `WorkerThread::run()` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 88.0% |   4,417 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| 12.0% |     601 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   5,020 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.8% |   4,407 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee      | Location                                      |
| -----: | ------: | ----------- | --------------------------------------------- |
| 100.0% |   4,405 | `doExec()`  | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       2 | `tryPoll()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.5% |   4,384 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 11.7% |     517 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.8% |      37 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,383 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.7% |   4,237 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 39.9% |   1,747 | `computeDirectly(): Object`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 38.5% |   1,688 | `computeDirectly(): Object`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 19.3% |     847 | `computeDirectly(): Object`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.4% |     323 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |   4,236 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       1 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 94.4% |   3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 27.0% |   1,143 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 12.3% |     521 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee                                 | Location                                      |
| -----: | ------: | -------------------------------------- | --------------------------------------------- |
| 100.0% |   3,999 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  <0.1% |       1 | `resolve_opt_virtual_call`             | `<unknown>`                                   |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                                                                        | Location                                                  |
| ----: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| 60.6% |   1,059 | `accumulate(Double[], double[])`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.6% |      80 | `get(int)`                                                                    | `java.util.ArrayList`                                     |
|  0.2% |       3 | `InterpreterRuntime::frequency_counter_overflow(JavaThread*, unsigned char*)` | `<unknown>`                                               |

##### `computeDirectly(): double[]` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |   1,747 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee                        | Location                                                  |
| -----: | ------: | ----------------------------- | --------------------------------------------------------- |
| 100.0% |   1,747 | `computeDirectly(): double[]` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly(): Map` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                   | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 74.9% |   1,264 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 25.1% |     424 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   1,688 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 66.1% |     836 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.4% |      55 | `get(int)`                     | `java.util.ArrayList`                                      |
|  0.2% |       2 | `_new_array_Java`              | `<unknown>`                                                |
|  0.1% |       1 | `SafepointBlob`                | `<unknown>`                                                |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 97.1% |   1,110 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  1.7% |      19 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,143 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 99.9% |   1,119 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |

##### `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` (`<unknown>`)

|     % | Samples | Callee                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------- | ----------- |
| 99.2% |   1,110 | `Parker::park(bool, long)`                                        | `<unknown>` |
|  0.4% |       4 | `pthread_jit_write_protect_np`                                    | `<unknown>` |
|  0.1% |       1 | `JavaThread::threadObj() const`                                   | `<unknown>` |
|  0.1% |       1 | `pthread_cond_wait`                                               | `<unknown>` |
|  0.1% |       1 | `JavaThreadParkedState::JavaThreadParkedState(JavaThread*, bool)` | `<unknown>` |

##### `Parker::park(bool, long)` (`<unknown>`)

|     % | Samples | Callee                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 99.2% |   1,101 | `__psynch_cvwait`                                      | `<unknown>` |
|  0.5% |       5 | `_pthread_cond_wait`                                   | `<unknown>` |
|  0.2% |       2 | `SafepointMechanism::process(JavaThread*, bool, bool)` | `<unknown>` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   1,093 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 10.3% |     109 | `doubleValue()` | `java.lang.Double` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.4% |     842 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.6% |       5 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Map` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     847 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     847 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     842 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 0.8% |       7 | `doubleValue()` | `java.lang.Double` |
| 0.6% |       5 | `SafepointBlob` | `<unknown>`        |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 95.2% |     572 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.5% |      27 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.6% |     515 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  0.2% |       1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     517 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     517 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 37.7% |     160 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 24.5% |     104 | `add(Object)`                       | `java.util.ArrayList` |
| 11.3% |      48 | `get(int)`                          | `java.util.ArrayList` |
|  0.2% |       1 | `_new_instance_Java`                | `<unknown>`           |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                               | Location                           |
| ----: | ------: | ------------------------------------ | ---------------------------------- |
| 96.0% |     312 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  3.4% |      11 | `<init>(Map)`                        | `java.util.HashMap`                |
|  0.6% |       2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     323 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |     323 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 99.0% |     309 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |     309 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 70.9% |     219 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7248` |
| 16.8% |      52 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  9.7% |      30 | `zero_blocks`                     | `<unknown>`                                                            |

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.6% |     228 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.4% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     229 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 50.0% |     114 | `WorkerThread::run()`             | `<unknown>` |
| 42.1% |      96 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  4.4% |      10 | `VMThread::run()`                 | `<unknown>` |
|  2.6% |       6 | `WatcherThread::run()`            | `<unknown>` |
|  0.9% |       2 | `ConcurrentGCThread::run()`       | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     228 | `Thread::call_run()` | `<unknown>` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Callee                 | Location              |
| ----: | ------: | ---------------------- | --------------------- |
| 85.8% |     157 | `elementData(int)`     | `java.util.ArrayList` |
| 12.0% |      22 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 88.7% |     157 | `forward_copy_longs` | `<unknown>` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 68.9% |     115 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 28.7% |      48 | `_new_array_Java`                 | `<unknown>` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Callee         | Location            |
| ----: | ------: | -------------- | ------------------- |
| 15.0% |      24 | `hash(Object)` | `java.util.HashMap` |
|  0.6% |       1 | `resize()`     | `java.util.HashMap` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 42.1% |      48 | `G1FullGCMarkTask::work(unsigned int)`          | `<unknown>` |
| 24.6% |      28 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 11.4% |      13 | `semaphore_wait_trap`                           | `<unknown>` |
|  6.1% |       7 | `G1FullGCResetMetadataTask::work(unsigned int)` | `<unknown>` |
|  4.4% |       5 | `G1FullGCPrepareTask::work(unsigned int)`       | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                                             | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------- | ----------- |
| 99.0% |      95 | `CompileBroker::compiler_thread_loop()`                                            | `<unknown>` |
|  1.0% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 89.5% |      85 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  9.5% |       9 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |
|  1.1% |       1 | `CompileTask::select_for_compilation()`                  | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 81.2% |      69 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 16.5% |      14 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  2.4% |       2 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 43.5% |      30 | `Compile::Optimize()`                 | `<unknown>` |
| 42.0% |      29 | `Compile::Code_Gen()`                 | `<unknown>` |
| 13.0% |       9 | `ParseGenerator::generate(JVMState*)` | `<unknown>` |
|  1.4% |       1 | `_platform_memset`                    | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |      69 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 80.7% |      46 | `__psynch_cvsignal`                       | `<unknown>` |
|  5.3% |       3 | `pthread_dependency_wait_np.cold.3`       | `<unknown>` |
|  3.5% |       2 | `pthread_jit_write_protect_np`            | `<unknown>` |
|  1.8% |       1 | `ThreadsListHandle::~ThreadsListHandle()` | `<unknown>` |
|  1.8% |       1 | `pthread_mutex_lock`                      | `<unknown>` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 81.1% |      43 | `forward_copy_longs`                                                             | `<unknown>` |
|  3.8% |       2 | `G1BarrierSet::invalidate(MemRegion)`                                            | `<unknown>` |
|  1.9% |       1 | `G1BarrierSet::write_ref_array_work(MemRegion)`                                  | `<unknown>` |
|  1.9% |       1 | `G1BarrierSetRuntime::write_ref_array_post_entry(HeapWordImpl**, unsigned long)` | `<unknown>` |
|  1.9% |       1 | `tlv_get_addr`                                                                   | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 94.1% |      48 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                           | `<unknown>` |
|  2.0% |       1 | `CardTableBarrierSet::on_slowpath_allocation_exit(JavaThread*, oopDesc*)`      | `<unknown>` |
|  2.0% |       1 | `pthread_jit_write_protect_np`                                                 | `<unknown>` |
|  2.0% |       1 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |

##### `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 89.6% |      43 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                      | `<unknown>` |
|  6.3% |       3 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|  2.1% |       1 | `pthread_jit_write_protect_np`                                                 | `<unknown>` |
|  2.1% |       1 | `ObjArrayKlass::array_klass(int, JavaThread*)`                                 | `<unknown>` |

##### `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 50.0% |      24 | `G1FullGCMarker::follow_marking_stacks()`                                                                                               | `<unknown>` |
| 31.3% |      15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                        | `<unknown>` |
| 10.4% |       5 | `TaskTerminator::offer_termination(TerminatorTerminator*)`                                                                              | `<unknown>` |
|  4.2% |       2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2(unsigned int, ObjArrayTask&)` | `<unknown>` |
|  2.1% |       1 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                                 | `<unknown>` |

##### `G1FullGCMarkTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                                                                                                              | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      48 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `MemAllocator::allocate() const` (`<unknown>`)

|     % | Samples | Callee                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 44.7% |      21 | `_platform_bzero`                                                              | `<unknown>` |
| 27.7% |      13 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |
|  8.5% |       4 | `_platform_memset`                                                             | `<unknown>` |
|  6.4% |       3 | `ObjArrayAllocator::initialize(HeapWordImpl**) const`                          | `<unknown>` |
|  4.3% |       2 | `ObjAllocator::initialize(HeapWordImpl**) const`                               | `<unknown>` |

##### `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 95.7% |      44 | `MemAllocator::allocate() const` | `<unknown>` |

##### `InstanceKlass::allocate_objArray(int, int, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                         | Location    |
| ----: | ------: | ------------------------------------------------------------------------------ | ----------- |
| 97.7% |      42 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|  2.3% |       1 | `Klass::check_array_allocation_length(int, int, JavaThread*)`                  | `<unknown>` |

##### `PlatformMonitor::wait(unsigned long long)` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 93.3% |      28 | `__psynch_cvwait`    | `<unknown>` |
|  6.7% |       2 | `_pthread_cond_wait` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 36.7% |      11 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 20.0% |       6 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 16.7% |       5 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
| 16.7% |       5 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  3.3% |       1 | `LoadINode::Opcode() const`                             | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 58.6% |      17 | `PhaseChaitin::Register_Allocate()`               | `<unknown>` |
| 13.8% |       4 | `Matcher::match()`                                | `<unknown>` |
| 10.3% |       3 | `PhaseOutput::Output()`                           | `<unknown>` |
|  6.9% |       2 | `PhaseCFG::do_global_code_motion()`               | `<unknown>` |
|  3.4% |       1 | `PhaseCFG::PhaseCFG(Arena*, RootNode*, Matcher&)` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| 89.3% |      25 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>` |
|  7.1% |       2 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`            | `<unknown>` |
|  3.6% |       1 | `G1ParScanThreadStateSet::state_for_worker(unsigned int)`                           | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 44.0% |      11 | `G1ParEvacuateFollowersClosure::offer_termination()`                                                                                  | `<unknown>` |
| 40.0% |      10 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| 16.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

|      % | Samples | Callee                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |      25 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `G1FullGCMarker::follow_marking_stacks()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                        | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 54.2% |      13 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                              | `<unknown>` |
| 25.0% |       6 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                                                               | `<unknown>` |
|  8.3% |       2 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1MarkAndPushClosure*, oopDesc*, Klass*)` | `<unknown>` |
|  4.2% |       1 | `G1FullGCMarker::follow_object(oopDesc*)`                                                                                                     | `<unknown>` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 34.8% |       8 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)` | `<unknown>` |
|  4.3% |       1 | `MarkBitMap::check_mark(HeapWordImpl**)`           | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 23.5% |       4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 17.6% |       3 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
|  5.9% |       1 | `IfTrueNode::Opcode() const`                                            | `<unknown>` |
|  5.9% |       1 | `PhaseIdealLoop::do_intrinsify_fill()`                                  | `<unknown>` |
|  5.9% |       1 | `PhaseIdealLoop::eliminate_useless_predicates()`                        | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |      17 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 35.3% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 17.6% |       3 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 11.8% |       2 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
|  5.9% |       1 | `PhaseChaitin::Simplify()`                         | `<unknown>` |
|  5.9% |       1 | `MachCallJavaNode::in_RegMask(unsigned int) const` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------- | ----------- |
| 92.9% |      13 | `Compilation::compile_java_method()`                                  | `<unknown>` |
|  7.1% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      14 | `Compilation::compile_method()` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 61.5% |       8 | `Compilation::build_hir()`      | `<unknown>` |
| 30.8% |       4 | `Compilation::emit_lir()`       | `<unknown>` |
|  7.7% |       1 | `Compilation::emit_code_body()` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 84.6% |      11 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                          | `<unknown>` |
|  7.7% |       1 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
|  7.7% |       1 | `fwd_copy_again`                                                                        | `<unknown>` |

##### `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` (`<unknown>`)

|     % | Samples | Callee                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 63.6% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` | `<unknown>` |
| 18.2% |       2 | `G1AdjustRegionClosure::do_heap_region(HeapRegion*)`                             | `<unknown>` |

##### `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` (`<unknown>`)

|     % | Samples | Callee                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 45.5% |       5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                    | `<unknown>` |
|  9.1% |       1 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>(G1HeapRegionAttr, narrowOop*, oopDesc*)` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::offer_termination()` (`<unknown>`)

|      % | Samples | Callee                                                     | Location    |
| -----: | ------: | ---------------------------------------------------------- | ----------- |
| 100.0% |      11 | `TaskTerminator::offer_termination(TerminatorTerminator*)` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 90.0% |       9 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| 10.0% |       1 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2(unsigned int, ScannerTask&)` | `<unknown>` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

|      % | Samples | Callee                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `Monitor::wait(unsigned long long)` | `<unknown>` |

##### `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)` (`<unknown>`)

|      % | Samples | Callee                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |       9 | `Mutex::lock(Thread*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 75.0% |       6 | `IR::IR(Compilation*, ciMethod*, int)` | `<unknown>` |
| 25.0% |       2 | `IR::compute_use_counts()`             | `<unknown>` |

##### `G1CollectedHeap::attempt_allocation(unsigned long, unsigned long, unsigned long*, bool)` (`<unknown>`)

|      % | Samples | Callee                                                                        | Location    |
| -----: | ------: | ----------------------------------------------------------------------------- | ----------- |
| 100.0% |       8 | `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` (`<unknown>`)

|      % | Samples | Callee                                                                                               | Location    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` | `<unknown>` |

##### `G1FullGCResetMetadataTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Callee                                                                                       | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                        | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 42.9% |       3 | `G1FullGCMarker::follow_object(oopDesc*)`                                                                                                     | `<unknown>` |
| 14.3% |       1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1MarkAndPushClosure*, oopDesc*, Klass*)` | `<unknown>` |
| 14.3% |       1 | `ClassLoaderData::oops_do(OopClosure*, int, bool)`                                                                                            | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|     % | Samples | Callee                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------- | ----------- |
| 83.3% |       5 | `GraphBuilder::iterate_all_blocks(bool)`                          | `<unknown>` |
| 16.7% |       1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|     % | Samples | Callee                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 16.7% |       1 | `Node::rematerialize() const`                    | `<unknown>` |
| 16.7% |       1 | `IndexSetIterator::advance_and_next()`           | `<unknown>` |
| 16.7% |       1 | `IndexSet::alloc_block_containing(unsigned int)` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|     % | Samples | Callee                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 80.0% |       4 | `GraphBuilder::invoke(Bytecodes::Code)`                                          | `<unknown>` |
| 20.0% |       1 | `BlockBegin::try_merge(ValueStack*, bool)`                                       | `<unknown>` |
| 20.0% |       1 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks(bool)` (`<unknown>`)

|      % | Samples | Callee                                           | Location    |
| -----: | ------: | ------------------------------------------------ | ----------- |
| 100.0% |       5 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `G1FullGCPrepareTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                                       | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       5 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.6% |     563 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.8% |     149 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.4% |     127 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.1% |     109 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.0% |     106 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.7% |      92 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.7% |      89 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.6% |      86 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% |      81 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
|  1.5% |      80 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |      78 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.2% |      66 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% |      61 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.2% |      61 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% |      54 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly(): double[]` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.9% |      50 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.9% |      47 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |      46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.9% |      46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |      43 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
