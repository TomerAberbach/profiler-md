# Heap snapshot

Allocated 1011 KiB across 33,183 nodes and 145,158 edges.

| Category            |     % |     Size | Nodes |
| ------------------- | ----: | -------: | ----: |
| Internal            | 28.3% |  286 KiB | 9,074 |
| Object shape        | 16.1% |  163 KiB | 2,580 |
| String              | 13.5% |  136 KiB | 6,591 |
| Array               | 12.3% |  124 KiB | 1,453 |
| Object              |  8.0% |   81 KiB | 1,857 |
| Function            |  7.9% | 79.5 KiB | 2,849 |
| Native              |  7.5% |   76 KiB |   995 |
| Code                |  5.5% | 55.7 KiB | 6,594 |
| Number              |  0.6% | 5.65 KiB |   934 |
| Concatenated string |  0.4% | 4.06 KiB |   208 |
| Regular expression  | <0.1% |     28 B |     1 |
| Synthetic           |  0.0% |      0 B |    31 |
| Symbol              |  0.0% |      0 B |    16 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
|  7.0% | 71.3 KiB |     1,464 | `Object`                      | `<unknown>` |
|  1.6% | 16.6 KiB |     1,060 | `Array`                       | `<unknown>` |
|  1.6% | 16.3 KiB |       208 | `Text`                        | `<unknown>` |
|  1.3% | 13.3 KiB |       154 | `system / ExternalStringData` | `<unknown>` |
|  1.2% | 11.7 KiB |       100 | `<p>`                         | `<unknown>` |
|  1.2% | 11.7 KiB |       100 | `<article class="status">`    | `<unknown>` |
|  1.2% | 11.7 KiB |       100 | `<h2>`                        | `<unknown>` |
|  0.3% |  3.2 KiB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.3% | 2.65 KiB |       113 | `system / Context`            | `<unknown>` |
|  0.1% |   1020 B |        37 | `Error`                       | `<unknown>` |
|  0.1% |   1016 B |        10 | `Window`                      | `<unknown>` |
|  0.1% |   1008 B |        36 | `TypedArray`                  | `<unknown>` |
|  0.1% |    968 B |         1 | `Performance`                 | `<unknown>` |
|  0.1% |    960 B |         8 | `<span class="hashtag">`      | `<unknown>` |
|  0.1% |    824 B |         1 | `StyleEngine`                 | `<unknown>` |
| <0.1% |    416 B |         1 | `JSModuleScript`              | `<unknown>` |
| <0.1% |    400 B |         1 | `Navigator`                   | `<unknown>` |
| <0.1% |    328 B |         1 | `FontFaceSet`                 | `<unknown>` |
| <0.1% |    304 B |         2 | `PerformanceResourceTiming`   | `<unknown>` |
| <0.1% |    212 B |         3 | `MutationObserver`            | `<unknown>` |

#### Categories

##### Object

|     % |     Size | Instances | Constructor        | Location           |
| ----: | -------: | --------: | ------------------ | ------------------ |
|  7.0% | 71.3 KiB |     1,464 | `Object`           | `<unknown>`        |
|  0.3% | 2.65 KiB |       113 | `system / Context` | `<unknown>`        |
|  0.1% |   1020 B |        37 | `Error`            | `<unknown>`        |
|  0.1% |   1008 B |        36 | `TypedArray`       | `<unknown>`        |
| <0.1% |    176 B |         5 | `Generator`        | `workload.mjs:1:1` |
| <0.1% |    132 B |         6 | `Map`              | `<unknown>`        |
| <0.1% |    116 B |         5 | `Set`              | `<unknown>`        |
| <0.1% |    104 B |         4 | `Promise`          | `<unknown>`        |
| <0.1% |    100 B |         4 | `WeakSet`          | `<unknown>`        |
| <0.1% |    100 B |         4 | `WeakMap`          | `<unknown>`        |
| <0.1% |     84 B |         3 | `AsyncGenerator`   | `<unknown>`        |
| <0.1% |     84 B |         3 | `Map Iterator`     | `<unknown>`        |
| <0.1% |     84 B |         3 | `Set Iterator`     | `<unknown>`        |
| <0.1% |     84 B |         3 | `String Iterator`  | `<unknown>`        |
| <0.1% |     84 B |         3 | `JSON`             | `<unknown>`        |
| <0.1% |     84 B |         3 | `Tag`              | `<unknown>`        |
| <0.1% |     84 B |         3 | `Math`             | `<unknown>`        |
| <0.1% |     84 B |         3 | `Reflect`          | `<unknown>`        |
| <0.1% |     84 B |         3 | `Intl`             | `<unknown>`        |
| <0.1% |     84 B |         3 | `Atomics`          | `<unknown>`        |

##### Native

|     % |     Size | Instances | Constructor                                  | Location    |
| ----: | -------: | --------: | -------------------------------------------- | ----------- |
|  1.6% | 16.3 KiB |       208 | `Text`                                       | `<unknown>` |
|  1.3% | 13.3 KiB |       154 | `system / ExternalStringData`                | `<unknown>` |
|  1.2% | 11.7 KiB |       100 | `<p>`                                        | `<unknown>` |
|  1.2% | 11.7 KiB |       100 | `<article class="status">`                   | `<unknown>` |
|  1.2% | 11.7 KiB |       100 | `<h2>`                                       | `<unknown>` |
|  0.3% |  3.2 KiB |         3 | `HTMLDocument`                               | `<unknown>` |
|  0.1% |   1016 B |        10 | `Window`                                     | `<unknown>` |
|  0.1% |    968 B |         1 | `Performance`                                | `<unknown>` |
|  0.1% |    960 B |         8 | `<span class="hashtag">`                     | `<unknown>` |
|  0.1% |    824 B |         1 | `StyleEngine`                                | `<unknown>` |
| <0.1% |    416 B |         1 | `JSModuleScript`                             | `<unknown>` |
| <0.1% |    400 B |         1 | `Navigator`                                  | `<unknown>` |
| <0.1% |    328 B |         1 | `FontFaceSet`                                | `<unknown>` |
| <0.1% |    304 B |         2 | `PerformanceResourceTiming`                  | `<unknown>` |
| <0.1% |    212 B |         3 | `MutationObserver`                           | `<unknown>` |
| <0.1% |    208 B |         1 | `ScriptedAnimationController`                | `<unknown>` |
| <0.1% |    192 B |         1 | `NavigationHistoryEntry`                     | `<unknown>` |
| <0.1% |    184 B |         1 | `DocumentTimeline`                           | `<unknown>` |
| <0.1% |    184 B |         1 | `<script type="module" src="/workload.mjs">` | `<unknown>` |
| <0.1% |    184 B |         1 | `PerformanceNavigationTiming`                | `<unknown>` |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
|  1.6% | 16.6 KiB |     1,060 | `Array`          | `<unknown>` |
| <0.1% |     84 B |         3 | `Array Iterator` | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 23.5% | 16.7 KiB |       100 | `.user Object ← .__retained Window / http://127.0.0.1:52789`                                 |
| 17.2% | 12.3 KiB |        73 | `.user Object ← .retweeted_status Object ← .__retained Window / http://127.0.0.1:52789`      |
| 14.7% | 10.5 KiB |       100 | `.__retained Window / http://127.0.0.1:52789`                                                |
| 10.4% | 7.45 KiB |        73 | `.retweeted_status Object ← .__retained Window / http://127.0.0.1:52789`                     |
|  0.1% |     60 B |         1 | `[0] Array ← .media Object ← .entities Object ← .__retained Window / http://127.0.0.1:52789` |

##### `Array` (`<unknown>`)

|    % | Size | Instances | Path                                                                            |
| ---: | ---: | --------: | ------------------------------------------------------------------------------- |
| 0.2% | 32 B |         2 | `(GC root)`                                                                     |
| 0.2% | 32 B |         2 | `.builtinTypes system / Context`                                                |
| 0.2% | 32 B |         2 | `.builtinToJSONs system / Context`                                              |
| 0.1% | 16 B |         1 | `.ie system / Context`                                                          |
| 0.1% | 16 B |         1 | `.statuses Object ← .data Object ← .__retained Window / http://127.0.0.1:52789` |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 1.0% | 160 B |         2 | `[3] <p> ← [4] <article class="status">`                                                |
| 1.0% | 160 B |         2 | `[3] <h2> ← [3] <article class="status">`                                               |
| 0.5% |  80 B |         1 | `[3] <p> ← .__retained Window / http://127.0.0.1:52789`                                 |
| 0.5% |  80 B |         1 | `[3] <h2> ← [3] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |
| 0.5% |  80 B |         1 | `[3] <p> ← [4] <article class="status"> ← .__retained Window / http://127.0.0.1:52789`  |

##### `system / ExternalStringData` (`<unknown>`)

|     % |     Size | Instances | Path                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------- |
| 15.3% | 2.04 KiB |         1 | `.2 / backing_store globalThis.buildAndRetainDom = (\n  data,\n  passes…`   |
|  2.2% |    300 B |         1 | `.1 / backing_store @aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` |
|  2.2% |    294 B |         1 | `.1 / backing_store RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  |
|  2.1% |    292 B |         1 | `.1 / backing_store RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     |
|  2.1% |    292 B |         1 | `.1 / backing_store RT @assam_house: 泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働…`     |

##### `<p>` (`<unknown>`)

|     % |     Size | Instances | Path                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------- |
| 63.0% | 7.38 KiB |        63 | `[4] <article class="status">`                                               |
| 30.0% | 3.52 KiB |        30 | `[4] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |
|  4.0% |    480 B |         4 | `.__retained Window / http://127.0.0.1:52789`                                |
|  3.0% |    360 B |         3 | `(GC root)`                                                                  |

##### `<article class="status">` (`<unknown>`)

|     % |     Size | Instances | Path                                          |
| ----: | -------: | --------: | --------------------------------------------- |
| 66.0% | 7.73 KiB |        66 | `(GC root)`                                   |
| 34.0% | 3.98 KiB |        34 | `.__retained Window / http://127.0.0.1:52789` |

##### `<h2>` (`<unknown>`)

|     % |     Size | Instances | Path                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------- |
| 66.0% | 7.73 KiB |        66 | `[3] <article class="status">`                                               |
| 34.0% | 3.98 KiB |        34 | `[3] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |

##### `HTMLDocument` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 99.5% | 3.18 KiB |         2 | `(GC root)`  |
|  0.5% |     16 B |         1 | `.155 array` |

##### `system / Context` (`<unknown>`)

|     % |  Size | Instances | Path                                  |
| ----: | ----: | --------: | ------------------------------------- |
| 10.3% | 280 B |         3 | `(GC root)`                           |
|  2.2% |  60 B |         1 | `.context t ← .Deferred Object`       |
|  1.3% |  36 B |         1 | `.context M ← .M system / Context`    |
|  1.2% |  32 B |         1 | `.context y ← .MutationPoller Object` |
|  1.2% |  32 B |         1 | `.context S ← .IntervalPoller Object` |

##### `Error` (`<unknown>`)

|    % | Size | Instances | Path                        |
| ---: | ---: | --------: | --------------------------- |
| 2.7% | 28 B |         1 | `.prototype AggregateError` |
| 2.7% | 28 B |         1 | `.prototype SyntaxError`    |
| 2.7% | 28 B |         1 | `.prototype TypeError`      |
| 2.7% | 28 B |         1 | `.prototype ReferenceError` |
| 2.7% | 28 B |         1 | `.prototype URIError`       |

##### `Window` (`<unknown>`)

|     % |  Size | Instances | Path         |
| ----: | ----: | --------: | ------------ |
| 92.1% | 936 B |         5 | `(GC root)`  |
|  1.6% |  16 B |         1 | `.76 array`  |
|  1.6% |  16 B |         1 | `.77 array`  |
|  1.6% |  16 B |         1 | `.204 array` |
|  1.6% |  16 B |         1 | `.205 array` |

##### `TypedArray` (`<unknown>`)

|      % |   Size | Instances | Path        |
| -----: | -----: | --------: | ----------- |
| 100.0% | 1008 B |        36 | `(GC root)` |

##### `Performance` (`<unknown>`)

|      % |  Size | Instances | Path                                                |
| -----: | ----: | --------: | --------------------------------------------------- |
| 100.0% | 968 B |         1 | `[1] InternalNode ← [5] InternalNode ← [24] Window` |

##### `<span class="hashtag">` (`<unknown>`)

|     % |  Size | Instances | Path                                                                         |
| ----: | ----: | --------: | ---------------------------------------------------------------------------- |
| 50.0% | 480 B |         4 | `[4] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |
| 37.5% | 360 B |         3 | `[4] <article class="status">`                                               |
| 12.5% | 120 B |         1 | `.__retained Window / http://127.0.0.1:52789`                                |

##### `StyleEngine` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 824 B |         1 | `[11] HTMLDocument` |

##### `JSModuleScript` (`<unknown>`)

|      % |  Size | Instances | Path                                                     |
| -----: | ----: | --------: | -------------------------------------------------------- |
| 100.0% | 416 B |         1 | `[1] InternalNode ← [3] InternalNode ← [1] InternalNode` |

##### `Navigator` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 400 B |         1 | `[5] Window` |

##### `FontFaceSet` (`<unknown>`)

|      % |  Size | Instances | Path                                   |
| -----: | ----: | --------: | -------------------------------------- |
| 100.0% | 328 B |         1 | `[2] InternalNode ← [31] HTMLDocument` |

##### `PerformanceResourceTiming` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                     |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------- |
| 50.0% | 152 B |         1 | `[1] InternalNode ← [3] Performance ← [1] InternalNode ← [5] InternalNode ← [24] Window` |
| 50.0% | 152 B |         1 | `[2] InternalNode ← [3] Performance ← [1] InternalNode ← [5] InternalNode ← [24] Window` |

##### `MutationObserver` (`<unknown>`)

|     % |  Size | Instances | Path                   |
| ----: | ----: | --------: | ---------------------- |
| 79.2% | 168 B |         1 | `.se system / Context` |
| 13.2% |  28 B |         1 | `(GC root)`            |
|  7.5% |  16 B |         1 | `.375 array`           |

##### `ScriptedAnimationController` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 208 B |         1 | `[18] HTMLDocument` |

##### `NavigationHistoryEntry` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 192 B |         1 | `[6] Window` |

##### `DocumentTimeline` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 184 B |         1 | `[22] HTMLDocument` |

##### `<script type="module" src="/workload.mjs">` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 184 B |         1 | `[1] <head>` |

##### `PerformanceNavigationTiming` (`<unknown>`)

|      % |  Size | Instances | Path                                                                  |
| -----: | ----: | --------: | --------------------------------------------------------------------- |
| 100.0% | 184 B |         1 | `[5] Performance ← [1] InternalNode ← [5] InternalNode ← [24] Window` |

##### `Generator` (`workload.mjs:1:1`)

|     % |  Size | Instances | Path                                      |
| ----: | ----: | --------: | ----------------------------------------- |
| 93.2% | 164 B |         4 | `(GC root)`                               |
|  6.8% |  12 B |         1 | `.__proto__ Generator (workload.mjs:1:1)` |

##### `Map` (`<unknown>`)

|     % | Size | Instances | Path                                                         |
| ----: | ---: | --------: | ------------------------------------------------------------ |
| 63.6% | 84 B |         3 | `(GC root)`                                                  |
| 12.1% | 16 B |         1 | `.L system / Context`                                        |
| 12.1% | 16 B |         1 | `.#e v ← .customQuerySelectors Object`                       |
| 12.1% | 16 B |         1 | `.byId Object ← .__retained Window / http://127.0.0.1:52789` |

##### `Set` (`<unknown>`)

|     % | Size | Instances | Path                   |
| ----: | ---: | --------: | ---------------------- |
| 72.4% | 84 B |         3 | `(GC root)`            |
| 13.8% | 16 B |         1 | `.re system / Context` |
| 13.8% | 16 B |         1 | `.ne system / Context` |

##### `Promise` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 104 B |         4 | `(GC root)` |

##### `WeakSet` (`<unknown>`)

|     % | Size | Instances | Path                  |
| ----: | ---: | --------: | --------------------- |
| 56.0% | 56 B |         2 | `.prototype WeakSet`  |
| 28.0% | 28 B |         1 | `(GC root)`           |
| 16.0% | 16 B |         1 | `.W system / Context` |

##### `WeakMap` (`<unknown>`)

|     % | Size | Instances | Path                  |
| ----: | ---: | --------: | --------------------- |
| 56.0% | 56 B |         2 | `.prototype WeakMap`  |
| 28.0% | 28 B |         1 | `(GC root)`           |
| 16.0% | 16 B |         1 | `.I system / Context` |

##### `AsyncGenerator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `Map Iterator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `Set Iterator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `String Iterator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `JSON` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `Tag` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `Math` (`<unknown>`)

|     % | Size | Instances | Path                                    |
| ----: | ---: | --------: | --------------------------------------- |
| 33.3% | 28 B |         1 | `.Math Window / http://127.0.0.1:52789` |
| 33.3% | 28 B |         1 | `.Math Window / ://`                    |
| 33.3% | 28 B |         1 | `.Math Object / `                       |

##### `Reflect` (`<unknown>`)

|     % | Size | Instances | Path                                       |
| ----: | ---: | --------: | ------------------------------------------ |
| 33.3% | 28 B |         1 | `.Reflect Window / http://127.0.0.1:52789` |
| 33.3% | 28 B |         1 | `.Reflect Window / ://`                    |
| 33.3% | 28 B |         1 | `.Reflect Object / `                       |

##### `Intl` (`<unknown>`)

|     % | Size | Instances | Path                                    |
| ----: | ---: | --------: | --------------------------------------- |
| 33.3% | 28 B |         1 | `.Intl Window / http://127.0.0.1:52789` |
| 33.3% | 28 B |         1 | `.Intl Window / ://`                    |
| 33.3% | 28 B |         1 | `.Intl Object / `                       |

##### `Atomics` (`<unknown>`)

|     % | Size | Instances | Path                                       |
| ----: | ---: | --------: | ------------------------------------------ |
| 33.3% | 28 B |         1 | `.Atomics Window / http://127.0.0.1:52789` |
| 33.3% | 28 B |         1 | `.Atomics Window / ://`                    |
| 33.3% | 28 B |         1 | `.Atomics Object / `                       |

##### `Array Iterator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                       | Location    |
| ----: | -------: | --------: | --------------------------------- | ----------- |
| 19.0% |  192 KiB |     1,464 | `Object`                          | `<unknown>` |
| 18.2% |  184 KiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>` |
|  7.5% | 75.8 KiB |        10 | `Window`                          | `<unknown>` |
|  5.2% | 52.3 KiB |       100 | `<article class="status">`        | `<unknown>` |
|  4.7% | 47.8 KiB |         1 | `Window / ://`                    | `<unknown>` |
|  3.4% | 34.4 KiB |     1,060 | `Array`                           | `<unknown>` |
|  1.9% | 19.5 KiB |       100 | `<p>`                             | `<unknown>` |
|  1.9% | 19.5 KiB |       100 | `<h2>`                            | `<unknown>` |
|  1.6% | 16.3 KiB |       208 | `Text`                            | `<unknown>` |
|  1.3% | 13.3 KiB |       154 | `system / ExternalStringData`     | `<unknown>` |
|  1.1% | 10.9 KiB |       113 | `system / Context`                | `<unknown>` |
|  0.9% | 8.88 KiB |         6 | `Map`                             | `<unknown>` |
|  0.6% | 6.45 KiB |         1 | `Object / `                       | `<unknown>` |
|  0.6% | 5.91 KiB |        37 | `Error`                           | `<unknown>` |
|  0.6% | 5.64 KiB |         1 | `Document`                        | `<unknown>` |
|  0.5% | 5.45 KiB |         3 | `Math`                            | `<unknown>` |
|  0.5% | 5.23 KiB |         3 | `HTMLDocument`                    | `<unknown>` |
|  0.5% |  5.2 KiB |        36 | `TypedArray`                      | `<unknown>` |
|  0.5% | 4.79 KiB |         3 | `console`                         | `<unknown>` |
|  0.4% | 4.48 KiB |         3 | `Intl.Locale`                     | `<unknown>` |

#### Categories

##### Object

|     % |     Size | Instances | Constructor                       | Location    |
| ----: | -------: | --------: | --------------------------------- | ----------- |
| 19.0% |  192 KiB |     1,464 | `Object`                          | `<unknown>` |
| 18.2% |  184 KiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>` |
|  4.7% | 47.8 KiB |         1 | `Window / ://`                    | `<unknown>` |
|  1.1% | 10.9 KiB |       113 | `system / Context`                | `<unknown>` |
|  0.9% | 8.88 KiB |         6 | `Map`                             | `<unknown>` |
|  0.6% | 6.45 KiB |         1 | `Object / `                       | `<unknown>` |
|  0.6% | 5.91 KiB |        37 | `Error`                           | `<unknown>` |
|  0.6% | 5.64 KiB |         1 | `Document`                        | `<unknown>` |
|  0.5% | 5.45 KiB |         3 | `Math`                            | `<unknown>` |
|  0.5% |  5.2 KiB |        36 | `TypedArray`                      | `<unknown>` |
|  0.5% | 4.79 KiB |         3 | `console`                         | `<unknown>` |
|  0.4% | 4.48 KiB |         3 | `Intl.Locale`                     | `<unknown>` |
|  0.4% | 4.34 KiB |         3 | `String`                          | `<unknown>` |
|  0.4% | 4.02 KiB |         3 | `DataView`                        | `<unknown>` |
|  0.3% | 3.42 KiB |         3 | `HTMLElement`                     | `<unknown>` |
|  0.3% | 3.42 KiB |         1 | `Element`                         | `<unknown>` |
|  0.3% | 3.06 KiB |         3 | `Intl`                            | `<unknown>` |
|  0.2% | 2.24 KiB |         3 | `Atomics`                         | `<unknown>` |
|  0.2% | 2.21 KiB |         3 | `DisposableStack`                 | `<unknown>` |
|  0.2% | 2.21 KiB |         3 | `AsyncDisposableStack`            | `<unknown>` |

##### Native

|     % |     Size | Instances | Constructor                                  | Location    |
| ----: | -------: | --------: | -------------------------------------------- | ----------- |
|  7.5% | 75.8 KiB |        10 | `Window`                                     | `<unknown>` |
|  5.2% | 52.3 KiB |       100 | `<article class="status">`                   | `<unknown>` |
|  1.9% | 19.5 KiB |       100 | `<p>`                                        | `<unknown>` |
|  1.9% | 19.5 KiB |       100 | `<h2>`                                       | `<unknown>` |
|  1.6% | 16.3 KiB |       208 | `Text`                                       | `<unknown>` |
|  1.3% | 13.3 KiB |       154 | `system / ExternalStringData`                | `<unknown>` |
|  0.5% | 5.23 KiB |         3 | `HTMLDocument`                               | `<unknown>` |
|  0.3% | 3.03 KiB |       283 | `InternalNode`                               | `<unknown>` |
|  0.2% | 1.56 KiB |         8 | `<span class="hashtag">`                     | `<unknown>` |
|  0.2% | 1.56 KiB |         1 | `Performance`                                | `<unknown>` |
|  0.1% |    944 B |         1 | `StyleEngine`                                | `<unknown>` |
|  0.1% |    680 B |         1 | `Modulator`                                  | `<unknown>` |
|  0.1% |    556 B |         3 | `MutationObserver`                           | `<unknown>` |
| <0.1% |    416 B |         1 | `JSModuleScript`                             | `<unknown>` |
| <0.1% |    400 B |         1 | `Navigator`                                  | `<unknown>` |
| <0.1% |    400 B |         1 | `<head>`                                     | `<unknown>` |
| <0.1% |    368 B |         1 | `Navigation`                                 | `<unknown>` |
| <0.1% |    328 B |         1 | `FontFaceSet`                                | `<unknown>` |
| <0.1% |    304 B |         2 | `PerformanceResourceTiming`                  | `<unknown>` |
| <0.1% |    296 B |         1 | `<script type="module" src="/workload.mjs">` | `<unknown>` |

##### Array

|    % |     Size | Instances | Constructor      | Location    |
| ---: | -------: | --------: | ---------------- | ----------- |
| 3.4% | 34.4 KiB |     1,060 | `Array`          | `<unknown>` |
| 0.1% |    528 B |         3 | `Array Iterator` | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                          |
| ----: | -------: | --------: | --------------------------------------------- |
| 74.0% |  142 KiB |         6 | `.__retained Window / http://127.0.0.1:52789` |
| 18.9% | 36.3 KiB |         4 | `(GC root)`                                   |
|  3.3% | 6.38 KiB |         3 | `.prototype Date`                             |
|  0.9% | 1.64 KiB |         1 | `.prototype t ← .Deferred Object`             |
|  0.7% | 1.44 KiB |         1 | `.prototype w ← .RAFPoller Object`            |

##### `Window / http://127.0.0.1:52789` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 184 KiB |         1 | `(GC root)` |

##### `Window` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 74.0% | 56.1 KiB |         6 | `(GC root)`  |
| 12.9% | 9.79 KiB |         1 | `.77 array`  |
| 12.9% | 9.79 KiB |         1 | `.205 array` |
|  0.1% |     56 B |         1 | `.76 array`  |
|  0.1% |     56 B |         1 | `.204 array` |

##### `<article class="status">` (`<unknown>`)

|     % |     Size | Instances | Path                                          |
| ----: | -------: | --------: | --------------------------------------------- |
| 65.1% | 34.1 KiB |        66 | `(GC root)`                                   |
| 34.9% | 18.2 KiB |        34 | `.__retained Window / http://127.0.0.1:52789` |

##### `Window / ://` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 47.8 KiB |         1 | `(GC root)` |

##### `Array` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------- |
| 15.6% | 5.36 KiB |         3 | `(GC root)`                                                                                                 |
|  4.4% | 1.51 KiB |         5 | `.media Object ← .entities Object ← .__retained Window / http://127.0.0.1:52789`                            |
|  1.2% |    424 B |         1 | `.statuses Object ← .data Object ← .__retained Window / http://127.0.0.1:52789`                             |
|  0.8% |    268 B |         1 | `.media Object ← .entities Object ← .retweeted_status Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.7% |    264 B |         1 | `.user_mentions Object ← .entities Object ← .__retained Window / http://127.0.0.1:52789`                    |

##### `<p>` (`<unknown>`)

|     % |     Size | Instances | Path                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------- |
| 63.0% | 12.3 KiB |        63 | `[4] <article class="status">`                                               |
| 30.0% | 5.86 KiB |        30 | `[4] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |
|  4.0% |    800 B |         4 | `.__retained Window / http://127.0.0.1:52789`                                |
|  3.0% |    600 B |         3 | `(GC root)`                                                                  |

##### `<h2>` (`<unknown>`)

|     % |     Size | Instances | Path                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------- |
| 66.0% | 12.9 KiB |        66 | `[3] <article class="status">`                                               |
| 34.0% | 6.64 KiB |        34 | `[3] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 1.0% | 160 B |         2 | `[3] <p> ← [4] <article class="status">`                                                |
| 1.0% | 160 B |         2 | `[3] <h2> ← [3] <article class="status">`                                               |
| 0.5% |  80 B |         1 | `[3] <p> ← .__retained Window / http://127.0.0.1:52789`                                 |
| 0.5% |  80 B |         1 | `[3] <h2> ← [3] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |
| 0.5% |  80 B |         1 | `[3] <p> ← [4] <article class="status"> ← .__retained Window / http://127.0.0.1:52789`  |

##### `system / ExternalStringData` (`<unknown>`)

|     % |     Size | Instances | Path                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------- |
| 15.3% | 2.04 KiB |         1 | `.2 / backing_store globalThis.buildAndRetainDom = (\n  data,\n  passes…`   |
|  2.2% |    300 B |         1 | `.1 / backing_store @aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` |
|  2.2% |    294 B |         1 | `.1 / backing_store RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  |
|  2.1% |    292 B |         1 | `.1 / backing_store RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     |
|  2.1% |    292 B |         1 | `.1 / backing_store RT @assam_house: 泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働…`     |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                  |
| ----: | -------: | --------: | ------------------------------------- |
| 74.2% | 8.11 KiB |         3 | `(GC root)`                           |
|  4.0% |    452 B |         1 | `.context t ← .Deferred Object`       |
|  1.9% |    212 B |         1 | `.context M ← .M system / Context`    |
|  0.9% |     96 B |         1 | `.context y ← .MutationPoller Object` |
|  0.9% |     96 B |         1 | `.context S ← .IntervalPoller Object` |

##### `Map` (`<unknown>`)

|     % |     Size | Instances | Path                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------ |
| 86.1% | 7.64 KiB |         1 | `.byId Object ← .__retained Window / http://127.0.0.1:52789` |
|  7.0% |    636 B |         3 | `(GC root)`                                                  |
|  5.9% |    532 B |         1 | `.L system / Context`                                        |
|  1.0% |     92 B |         1 | `.#e v ← .customQuerySelectors Object`                       |

##### `Object / ` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 6.45 KiB |         1 | `(GC root)` |

##### `Error` (`<unknown>`)

|    % |  Size | Instances | Path                        |
| ---: | ----: | --------: | --------------------------- |
| 4.9% | 296 B |         1 | `.p system / Context`       |
| 2.6% | 160 B |         1 | `.prototype AggregateError` |
| 2.6% | 160 B |         1 | `.prototype SyntaxError`    |
| 2.6% | 160 B |         1 | `.prototype TypeError`      |
| 2.6% | 160 B |         1 | `.prototype ReferenceError` |

##### `Document` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 5.64 KiB |         1 | `(GC root)` |

##### `Math` (`<unknown>`)

|     % |     Size | Instances | Path                                    |
| ----: | -------: | --------: | --------------------------------------- |
| 33.3% | 1.82 KiB |         1 | `.Math Window / http://127.0.0.1:52789` |
| 33.3% | 1.82 KiB |         1 | `.Math Window / ://`                    |
| 33.3% | 1.82 KiB |         1 | `.Math Object / `                       |

##### `HTMLDocument` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 99.7% | 5.21 KiB |         2 | `(GC root)`  |
|  0.3% |     16 B |         1 | `.155 array` |

##### `TypedArray` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 5.2 KiB |        36 | `(GC root)` |

##### `console` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.79 KiB |         3 | `(GC root)` |

##### `Intl.Locale` (`<unknown>`)

|      % |     Size | Instances | Path                |
| -----: | -------: | --------: | ------------------- |
| 100.0% | 4.48 KiB |         3 | `.prototype Locale` |

##### `String` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.34 KiB |         3 | `(GC root)` |

##### `DataView` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.02 KiB |         3 | `(GC root)` |

##### `HTMLElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                     |
| ----: | -------: | --------: | -------------------------------------------------------- |
| 99.1% | 3.39 KiB |         1 | `(GC root)`                                              |
|  0.5% |     16 B |         1 | `[6] InternalNode ← [1] InternalNode ← [1] InternalNode` |
|  0.5% |     16 B |         1 | `.441 array`                                             |

##### `Element` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 3.42 KiB |         1 | `(GC root)` |

##### `Intl` (`<unknown>`)

|     % |     Size | Instances | Path                                    |
| ----: | -------: | --------: | --------------------------------------- |
| 33.3% | 1.02 KiB |         1 | `.Intl Window / http://127.0.0.1:52789` |
| 33.3% | 1.02 KiB |         1 | `.Intl Window / ://`                    |
| 33.3% | 1.02 KiB |         1 | `.Intl Object / `                       |

##### `InternalNode` (`<unknown>`)

|     % |     Size | Instances | Path                                  |
| ----: | -------: | --------: | ------------------------------------- |
| 61.1% | 1.85 KiB |         1 | `[24] Window`                         |
| 51.5% | 1.56 KiB |         1 | `[5] InternalNode ← [24] Window`      |
| 25.0% |    776 B |         1 | `(GC root)`                           |
| 25.0% |    776 B |         1 | `[1] InternalNode`                    |
| 21.9% |    680 B |         1 | `[3] InternalNode ← [1] InternalNode` |

##### `Atomics` (`<unknown>`)

|     % |  Size | Instances | Path                                       |
| ----: | ----: | --------: | ------------------------------------------ |
| 33.3% | 764 B |         1 | `.Atomics Window / http://127.0.0.1:52789` |
| 33.3% | 764 B |         1 | `.Atomics Window / ://`                    |
| 33.3% | 764 B |         1 | `.Atomics Object / `                       |

##### `DisposableStack` (`<unknown>`)

|      % |     Size | Instances | Path                         |
| -----: | -------: | --------: | ---------------------------- |
| 100.0% | 2.21 KiB |         3 | `.prototype DisposableStack` |

##### `AsyncDisposableStack` (`<unknown>`)

|      % |     Size | Instances | Path                              |
| -----: | -------: | --------: | --------------------------------- |
| 100.0% | 2.21 KiB |         3 | `.prototype AsyncDisposableStack` |

##### `<span class="hashtag">` (`<unknown>`)

|     % |  Size | Instances | Path                                                                         |
| ----: | ----: | --------: | ---------------------------------------------------------------------------- |
| 50.0% | 800 B |         4 | `[4] <article class="status"> ← .__retained Window / http://127.0.0.1:52789` |
| 37.5% | 600 B |         3 | `[4] <article class="status">`                                               |
| 12.5% | 200 B |         1 | `.__retained Window / http://127.0.0.1:52789`                                |

##### `Performance` (`<unknown>`)

|      % |     Size | Instances | Path                                                |
| -----: | -------: | --------: | --------------------------------------------------- |
| 100.0% | 1.56 KiB |         1 | `[1] InternalNode ← [5] InternalNode ← [24] Window` |

##### `StyleEngine` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 944 B |         1 | `[11] HTMLDocument` |

##### `Modulator` (`<unknown>`)

|      % |  Size | Instances | Path                                                     |
| -----: | ----: | --------: | -------------------------------------------------------- |
| 100.0% | 680 B |         1 | `[1] InternalNode ← [3] InternalNode ← [1] InternalNode` |

##### `MutationObserver` (`<unknown>`)

|     % |  Size | Instances | Path                   |
| ----: | ----: | --------: | ---------------------- |
| 61.9% | 344 B |         1 | `.se system / Context` |
| 35.3% | 196 B |         1 | `(GC root)`            |
|  2.9% |  16 B |         1 | `.375 array`           |

##### `Array Iterator` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 528 B |         3 | `(GC root)` |

##### `JSModuleScript` (`<unknown>`)

|      % |  Size | Instances | Path                                                     |
| -----: | ----: | --------: | -------------------------------------------------------- |
| 100.0% | 416 B |         1 | `[1] InternalNode ← [3] InternalNode ← [1] InternalNode` |

##### `Navigator` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 400 B |         1 | `[5] Window` |

##### `<head>` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 400 B |         1 | `(GC root)` |

##### `Navigation` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 368 B |         1 | `[6] Window` |

##### `FontFaceSet` (`<unknown>`)

|      % |  Size | Instances | Path                                   |
| -----: | ----: | --------: | -------------------------------------- |
| 100.0% | 328 B |         1 | `[2] InternalNode ← [31] HTMLDocument` |

##### `PerformanceResourceTiming` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                     |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------- |
| 50.0% | 152 B |         1 | `[1] InternalNode ← [3] Performance ← [1] InternalNode ← [5] InternalNode ← [24] Window` |
| 50.0% | 152 B |         1 | `[2] InternalNode ← [3] Performance ← [1] InternalNode ← [5] InternalNode ← [24] Window` |

##### `<script type="module" src="/workload.mjs">` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 296 B |         1 | `[1] <head>` |

## Largest functions

Functions ranked by bytes that would be freed if the function were garbage collected.

|    % | Retained | Instances | Paths | Name                   | Location                         | Example path                                                                                                                         |
| ---: | -------: | --------: | ----: | ---------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 0.8% | 7.86 KiB |        14 |    14 | `safe`                 | `extensions::SafeBuiltins:26:22` | `.<symbol extensions::SafeBuiltins::Array> Window / http://127.0.0.1:52789`                                                          |
| 0.7% | 7.35 KiB |         3 |     1 | `Date`                 | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.7% |  7.1 KiB |        44 |    20 | `(anonymous)`          | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.5% | 5.47 KiB |         3 |     1 | `RegExp`               | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.5% | 5.06 KiB |         3 |     1 | `Locale`               | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.4% | 4.02 KiB |        76 |    76 | `(anonymous)`          | `extensions::SafeBuiltins:10:36` | `.hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / http://127.0.0.1:52789` |
| 0.4% |  3.8 KiB |         2 |     2 | `t`                    | `<unknown>`                      | `.Deferred Object`                                                                                                                   |
| 0.3% | 3.46 KiB |         3 |     1 | `CallSite`             | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.3% | 2.99 KiB |         3 |     1 | `Object`               | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.3% | 2.94 KiB |         3 |     1 | `DisposableStack`      | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.3% | 2.94 KiB |         3 |     1 | `AsyncDisposableStack` | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.3% | 2.64 KiB |         3 |     1 | `Number`               | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.2% | 2.48 KiB |         3 |     1 | `Symbol`               | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.2% | 2.19 KiB |         1 |     1 | `w`                    | `<unknown>`                      | `.RAFPoller Object`                                                                                                                  |
| 0.2% | 1.98 KiB |         3 |     3 | `v8BreakIterator`      | `<unknown>`                      | `.v8BreakIterator Intl ← .Intl Window / http://127.0.0.1:52789`                                                                      |
| 0.2% | 1.86 KiB |         3 |     1 | `SharedArrayBuffer`    | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.2% | 1.83 KiB |         3 |     1 | `SuppressedError`      | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.2% | 1.83 KiB |         3 |     1 | `SuspendError`         | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.2% | 1.82 KiB |         3 |     1 | `DateTimeFormat`       | `<unknown>`                      | `(GC root)`                                                                                                                          |
| 0.2% | 1.82 KiB |         3 |     1 | `NumberFormat`         | `<unknown>`                      | `(GC root)`                                                                                                                          |

### Retained

Nodes ranked by contribution to each function's retained size.

#### `safe` (`extensions::SafeBuiltins:26:22`)

|    % |  Self | Name                       | Path                                                                                                                                                  |
| ---: | ----: | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / http://127.0.0.1:52789`                       |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / ://`                                          |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / http://127.0.0.1:52789` |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://`                    |
| 1.9% | 152 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::String> Window / http://127.0.0.1:52789` |

#### `Date` (`<unknown>`)

|    % |  Self | Name                       | Path                                                        |
| ---: | ----: | -------------------------- | ----------------------------------------------------------- |
| 7.9% | 596 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype Date` |
| 7.9% | 596 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype Date` |
| 7.9% | 596 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype Date` |
| 1.4% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Date`                     |
| 1.4% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Date`                     |

#### `(anonymous)` (`<unknown>`)

|    % |  Self | Name                                                   | Path                                                                                                                                               |
| ---: | ----: | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                                                     |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                                                     |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                                                     |
| 1.4% | 104 B | `(function anonymous(\n) {\nreturn () => typeof glob…` | `.first (concatenated string) ← .source code ← .script (shared function info) ← .shared (anonymous) ← .6 array ← .table Map ← .L system / Context` |
| 1.1% |  80 B | `(object properties)`                                  | `.properties Object ← .prototype (anonymous) ← .puppeteer___ariaQuerySelectorAll Window / http://127.0.0.1:52789`                                  |

#### `RegExp` (`<unknown>`)

|    % |  Self | Name                       | Path                                      |
| ---: | ----: | -------------------------- | ----------------------------------------- |
| 5.7% | 320 B | `system / DescriptorArray` | `.descriptors system / Map ← .map RegExp` |
| 5.7% | 320 B | `system / DescriptorArray` | `.descriptors system / Map ← .map RegExp` |
| 5.7% | 320 B | `system / DescriptorArray` | `.descriptors system / Map ← .map RegExp` |
| 0.9% |  48 B | `escape`                   | `.shared escape ← .escape RegExp`         |
| 0.9% |  48 B | `escape`                   | `.shared escape ← .escape RegExp`         |

#### `Locale` (`<unknown>`)

|    % |  Self | Name                       | Path                                                               |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------ |
| 7.3% | 380 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.Locale ← .prototype Locale` |
| 7.3% | 380 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.Locale ← .prototype Locale` |
| 7.3% | 380 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.Locale ← .prototype Locale` |
| 1.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Locale`                          |
| 1.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Locale`                          |

#### `(anonymous)` (`extensions::SafeBuiltins:10:36`)

|    % | Self | Name               | Path                                                                                                                                                                                                                        |
| ---: | ---: | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / http://127.0.0.1:52789`   |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .exec safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::RegExp> Window / http://127.0.0.1:52789`             |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .captureStackTrace safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Error> Window / http://127.0.0.1:52789` |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://`                      |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .exec safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::RegExp> Window / ://`                                |

#### `t` (`<unknown>`)

|    % |  Self | Name                     | Path                                                                                                                                                                                                                           |
| ---: | ----: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5.8% | 224 B | `(object properties)`    | `.properties Object ← .prototype t ← .Deferred Object`                                                                                                                                                                         |
| 4.0% | 156 B | `system / BytecodeArray` | `.trusted_function_data t ← .shared t ← .<symbol> t ← .Deferred Object`                                                                                                                                                        |
| 4.0% | 156 B | `system / BytecodeArray` | `.trusted_function_data t ← .shared t ← .Deferred Object`                                                                                                                                                                      |
| 3.9% | 152 B | `system / BytecodeArray` | `.trusted_function_data (shared function info) ← . (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data valueOrThrow ← .shared valueOrThrow ← .valueOrThrow Object ← .prototype t ← .Deferred Object` |
| 3.0% | 116 B | `system / ScopeInfo`     | `.Deferred Object`                                                                                                                                                                                                             |

#### `CallSite` (`<unknown>`)

|    % |  Self | Name                       | Path                                                            |
| ---: | ----: | -------------------------- | --------------------------------------------------------------- |
| 8.4% | 296 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype CallSite` |
| 8.4% | 296 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype CallSite` |
| 8.4% | 296 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype CallSite` |
| 1.1% |  40 B | `system / Map`             | `.initial_map CallSite`                                         |
| 1.1% |  40 B | `system / Map`             | `.map Object ← .prototype CallSite`                             |

#### `Object` (`<unknown>`)

|     % |  Self | Name                       | Path                                      |
| ----: | ----: | -------------------------- | ----------------------------------------- |
| 10.8% | 332 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object` |
| 10.8% | 332 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object` |
| 10.8% | 332 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object` |
|  1.3% |  40 B | `system / Map`             | `.map Object`                             |
|  1.3% |  40 B | `system / Map`             | `.map Object`                             |

#### `DisposableStack` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                            |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------- |
| 4.2% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack ← .prototype DisposableStack` |
| 4.2% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack ← .prototype DisposableStack` |
| 4.2% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack ← .prototype DisposableStack` |
| 2.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack`                              |
| 2.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack`                              |

#### `AsyncDisposableStack` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                                      |
| ---: | ----: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 4.2% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack ← .prototype AsyncDisposableStack` |
| 4.2% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack ← .prototype AsyncDisposableStack` |
| 4.2% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack ← .prototype AsyncDisposableStack` |
| 2.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack`                                   |
| 2.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack`                                   |

#### `Number` (`<unknown>`)

|    % |  Self | Name                       | Path                                                          |
| ---: | ----: | -------------------------- | ------------------------------------------------------------- |
| 8.7% | 236 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Number`                     |
| 8.7% | 236 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Number`                     |
| 8.7% | 236 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Number`                     |
| 3.9% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Number ← .prototype Number` |
| 3.9% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Number ← .prototype Number` |

#### `Symbol` (`<unknown>`)

|     % |  Self | Name                       | Path                                                          |
| ----: | ----: | -------------------------- | ------------------------------------------------------------- |
| 10.2% | 260 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol`                     |
| 10.2% | 260 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol`                     |
| 10.2% | 260 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol`                     |
|  3.6% |  92 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol ← .prototype Symbol` |
|  3.6% |  92 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol ← .prototype Symbol` |

#### `w` (`<unknown>`)

|     % |  Self | Name                       | Path                                                                                                 |
| ----: | ----: | -------------------------- | ---------------------------------------------------------------------------------------------------- |
| 10.2% | 228 B | `system / BytecodeArray`   | `.trusted_function_data start ← .shared start ← .start Object ← .prototype w ← .RAFPoller Object`    |
| 10.0% | 224 B | `(object properties)`      | `.properties Object ← .prototype w ← .RAFPoller Object`                                              |
|  6.4% | 144 B | `system / BytecodeArray`   | `.trusted_function_data stop ← .shared stop ← .stop Object ← .prototype w ← .RAFPoller Object`       |
|  3.6% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map w ← .RAFPoller Object`                                             |
|  3.4% |  76 B | `system / BytecodeArray`   | `.trusted_function_data result ← .shared result ← .result Object ← .prototype w ← .RAFPoller Object` |

#### `v8BreakIterator` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                                                                                   |
| ---: | ----: | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 5.7% | 116 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / http://127.0.0.1:52789` |
| 5.7% | 116 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / ://`                    |
| 5.7% | 116 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype v8BreakIterator ← .v8BreakIterator Intl ← .Intl Object / `                       |
| 3.4% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / http://127.0.0.1:52789`                     |
| 3.4% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / ://`                                        |

#### `SharedArrayBuffer` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                                |
| ---: | ----: | -------------------------- | ----------------------------------------------------------------------------------- |
| 5.5% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SharedArrayBuffer ← .prototype SharedArrayBuffer` |
| 5.5% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SharedArrayBuffer ← .prototype SharedArrayBuffer` |
| 5.5% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SharedArrayBuffer ← .prototype SharedArrayBuffer` |
| 4.2% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SharedArrayBuffer`                                |
| 4.2% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SharedArrayBuffer`                                |

#### `SuppressedError` (`<unknown>`)

|    % | Self | Name                       | Path                                                                            |
| ---: | ---: | -------------------------- | ------------------------------------------------------------------------------- |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuppressedError`                              |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuppressedError` |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuppressedError`                              |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuppressedError` |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuppressedError` |

#### `SuspendError` (`<unknown>`)

|    % | Self | Name                       | Path                                                                         |
| ---: | ---: | -------------------------- | ---------------------------------------------------------------------------- |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuspendError`                              |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuspendError` |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuspendError`                              |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuspendError` |
| 3.6% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuspendError` |

#### `DateTimeFormat` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                               |
| ---: | ----: | -------------------------- | ---------------------------------------------------------------------------------- |
| 5.6% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.DateTimeFormat ← .prototype DateTimeFormat` |
| 5.6% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.DateTimeFormat ← .prototype DateTimeFormat` |
| 5.6% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.DateTimeFormat ← .prototype DateTimeFormat` |
| 4.3% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DateTimeFormat`                                  |
| 4.3% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DateTimeFormat`                                  |

#### `NumberFormat` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                           |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------ |
| 5.6% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.NumberFormat ← .prototype NumberFormat` |
| 5.6% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.NumberFormat ← .prototype NumberFormat` |
| 5.6% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.NumberFormat ← .prototype NumberFormat` |
| 4.3% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map NumberFormat`                                |
| 4.3% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map NumberFormat`                                |

## Largest strings

Strings ranked by bytes allocated for them.

### Categories

#### String

|     % |     Size | Value                                                    | Path                                            |
| ----: | -------: | -------------------------------------------------------- | ----------------------------------------------- |
|  0.9% | 9.54 KiB | `(() => {\n      const module = {};\n      "use stri…`   | `.source code`                                  |
|  0.3% | 3.15 KiB | `(function() {\n'use strict';\nnative function Apply…`   | `(GC root)`                                     |
|  0.2% | 1.72 KiB | `(function addPageBinding(type, name, prefix) {\n  …`    | `.source code ← .script (shared function info)` |
| <0.1% |    332 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `(GC root)`                                     |
| <0.1% |    332 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `(GC root)`                                     |
| <0.1% |    332 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `(GC root)`                                     |
| <0.1% |    328 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `(GC root)`                                     |
| <0.1% |    324 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `(GC root)`                                     |
| <0.1% |    312 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `(GC root)`                                     |
| <0.1% |    304 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `(GC root)`                                     |
| <0.1% |    300 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `(GC root)`                                     |
| <0.1% |    296 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `(GC root)`                                     |
| <0.1% |    292 B | `湯の街の元勃酩姦なんちゃら大　赤い犬の犬（外資系）　肥後で緑ナンバー屋さん勤め\nくだらないことしか…`    | `(GC root)`                                     |
| <0.1% |    292 B | `@samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印象☞平野から？！\n今の印…` | `(GC root)`                                     |
| <0.1% |    292 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `(GC root)`                                     |
| <0.1% |    288 B | `家具（かぐ、Furniture）は、家財道具のうち家の中に据え置いて利用する比較的大型の道具類、ま…`     | `(GC root)`                                     |
| <0.1% |    284 B | `●継続試合（中京対崇徳）46回～　9時～\n　〈ラジオ中継〉\n　らじる★らじる→大阪放送局を選択→N…`   | `(GC root)`                                     |
| <0.1% |    280 B | `泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働に必要な「同意」はまだ与えていませ…`     | `(GC root)`                                     |
| <0.1% |    264 B | `ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1度も行ったことない田舎道)…`     | `(GC root)`                                     |
| <0.1% |    260 B | `GパングのA型K月克己中尉の非公式botです。 主に七巻と八巻が中心の台詞をつぶやきます。 4/1…`     | `(GC root)`                                     |

#### Concatenated string

|     % | Size | Value                   | Path                                                                                                                                                                                                                      |
| ----: | ---: | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithPreparseData ← .trusted_function_data (shared function info)`                                                                                                                        |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info get ← .(Compilation cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data J ← .shared J ← .J system / Context` |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info get ← .(Compilation cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data J ← .shared J ← .J system / Context`                                 |
| <0.1% | 20 B | `(concatenated string)` | `.source code ← .script (shared function info) ← .shared (anonymous) ← .6 array ← .table Map ← .L system / Context`                                                                                                       |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .124 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.124 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                    |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data stringify`                                                                                                                                  |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info)`                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .67 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.67 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .70 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.70 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .73 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.73 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .76 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.76 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .79 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.79 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.first (concatenated string) ← .82 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.82 array ← .table Map ← .byId Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                                     |
