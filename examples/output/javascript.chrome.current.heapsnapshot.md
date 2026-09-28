# Heap snapshot

Allocated 3.03 MiB across 67,887 nodes and 264,933 edges.

| Category            |     % |     Size |  Nodes |
| ------------------- | ----: | -------: | -----: |
| Native              | 29.2% |  907 KiB |  6,014 |
| Code                | 23.6% |  732 KiB | 17,296 |
| Internal            | 12.7% |  393 KiB | 10,803 |
| Array               | 10.5% |  325 KiB |  6,702 |
| String              |  8.0% |  247 KiB | 13,110 |
| Object shape        |  7.2% |  223 KiB |  3,780 |
| Function            |  4.6% |  143 KiB |  4,936 |
| Object              |  3.6% |  112 KiB |  2,726 |
| Number              |  0.6% | 17.5 KiB |  2,170 |
| Concatenated string |  0.2% | 5.49 KiB |    281 |
| Regular expression  | <0.1% |    588 B |     21 |
| Symbol              | <0.1% |     16 B |     17 |
| Synthetic           |  0.0% |      0 B |     31 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
| 17.8% |  554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
|  3.0% | 93.8 KiB |     1,500 | `SVGAnimatedLength`           | `<unknown>` |
|  2.5% | 78.5 KiB |     1,723 | `Object`                      | `<unknown>` |
|  1.9% |   58 KiB |     3,705 | `Array`                       | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`           | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`    | `<unknown>` |
|  1.1% | 32.9 KiB |       203 | `SVGCircleElement`            | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`           | `<unknown>` |
|  0.7% | 23.3 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  0.6% | 19.6 KiB |       112 | `SVGRectElement`              | `<unknown>` |
|  0.5% | 14.7 KiB |       426 | `system / Context`            | `<unknown>` |
|  0.5% | 14.5 KiB |       232 | `SVGAnimatedLengthList`       | `<unknown>` |
|  0.4% | 13.3 KiB |       103 | `SVGTitleElement`             | `<unknown>` |
|  0.3% | 10.5 KiB |        61 | `SVGTextElement`              | `<unknown>` |
|  0.3% | 9.84 KiB |       126 | `Text`                        | `<unknown>` |
|  0.3% | 7.96 KiB |        49 | `SVGLineElement`              | `<unknown>` |
|  0.2% | 5.32 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  0.2% | 5.23 KiB |       103 | `Date`                        | `<unknown>` |
|  0.1% | 3.63 KiB |        58 | `SVGAnimatedNumberList`       | `<unknown>` |
|  0.1% | 3.47 KiB |         9 | `system / JSArrayBufferData`  | `<unknown>` |

#### Categories

##### Native

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
| 17.8% |  554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
|  3.0% | 93.8 KiB |     1,500 | `SVGAnimatedLength`           | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`           | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`    | `<unknown>` |
|  1.1% | 32.9 KiB |       203 | `SVGCircleElement`            | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`           | `<unknown>` |
|  0.7% | 23.3 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  0.6% | 19.6 KiB |       112 | `SVGRectElement`              | `<unknown>` |
|  0.5% | 14.5 KiB |       232 | `SVGAnimatedLengthList`       | `<unknown>` |
|  0.4% | 13.3 KiB |       103 | `SVGTitleElement`             | `<unknown>` |
|  0.3% | 10.5 KiB |        61 | `SVGTextElement`              | `<unknown>` |
|  0.3% | 9.84 KiB |       126 | `Text`                        | `<unknown>` |
|  0.3% | 7.96 KiB |        49 | `SVGLineElement`              | `<unknown>` |
|  0.2% | 5.32 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  0.1% | 3.63 KiB |        58 | `SVGAnimatedNumberList`       | `<unknown>` |
|  0.1% | 3.47 KiB |         9 | `system / JSArrayBufferData`  | `<unknown>` |
|  0.1% |  3.2 KiB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.1% | 3.17 KiB |        58 | `SVGAnimatedEnumeration`      | `<unknown>` |
| <0.1% | 1.02 KiB |         4 | `Performance`                 | `<unknown>` |
| <0.1% |  1,016 B |        10 | `Window`                      | `<unknown>` |

##### Object

|     % |     Size | Instances | Constructor        | Location                                  |
| ----: | -------: | --------: | ------------------ | ----------------------------------------- |
|  2.5% | 78.5 KiB |     1,723 | `Object`           | `<unknown>`                               |
|  0.5% | 14.7 KiB |       426 | `system / Context` | `<unknown>`                               |
|  0.2% | 5.23 KiB |       103 | `Date`             | `<unknown>`                               |
|  0.1% | 3.34 KiB |       107 | `Qd`               | `node_modules/d3/dist/d3.min.js:2:140522` |
| <0.1% |  1,020 B |        37 | `Error`            | `<unknown>`                               |
| <0.1% |  1,008 B |        36 | `TypedArray`       | `<unknown>`                               |
| <0.1% |    784 B |        28 | `qe`               | `node_modules/d3/dist/d3.min.js:2:34624`  |
| <0.1% |    656 B |        14 | `ArrayBuffer`      | `<unknown>`                               |
| <0.1% |    260 B |         5 | `T`                | `node_modules/d3/dist/d3.min.js:2:3159`   |
| <0.1% |    224 B |        12 | `Map`              | `<unknown>`                               |
| <0.1% |    144 B |         4 | `Ar`               | `node_modules/d3/dist/d3.min.js:2:40001`  |
| <0.1% |    140 B |         5 | `ye`               | `node_modules/d3/dist/d3.min.js:2:30261`  |
| <0.1% |    128 B |         6 | `Set`              | `<unknown>`                               |
| <0.1% |    104 B |         4 | `Promise`          | `<unknown>`                               |
| <0.1% |    100 B |         4 | `WeakSet`          | `<unknown>`                               |
| <0.1% |    100 B |         4 | `WeakMap`          | `<unknown>`                               |
| <0.1% |     96 B |         4 | `Generator`        | `<unknown>`                               |
| <0.1% |     84 B |         3 | `AsyncGenerator`   | `<unknown>`                               |
| <0.1% |     84 B |         3 | `Map Iterator`     | `<unknown>`                               |
| <0.1% |     84 B |         3 | `Set Iterator`     | `<unknown>`                               |

##### Array

|     % |   Size | Instances | Constructor      | Location    |
| ----: | -----: | --------: | ---------------- | ----------- |
|  1.9% | 58 KiB |     3,705 | `Array`          | `<unknown>` |
| <0.1% |  600 B |        10 | `Float64Array`   | `<unknown>` |
| <0.1% |   84 B |         3 | `Array Iterator` | `<unknown>` |
| <0.1% |   60 B |         1 | `Uint32Array`    | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `system / ExternalStringData` (`<unknown>`)

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 98.5% |  546 KiB |         1 | `.2 / backing_store // https://d3js.org v7.9.0 Copyright 2010-2023 Mi…`   |
|  1.3% | 7.04 KiB |         1 | `.2 / backing_store globalThis.buildAndRetainDom = (\n  data,\n  passes…` |
| <0.1% |     65 B |         1 | `.1 / backing_store http://127.0.0.1:52789/node_modules/d3/dist/d3.mi…`   |
| <0.1% |     47 B |         1 | `.1 / backing_store http://127.0.0.1:52789/workload.mjs`                  |
| <0.1% |     44 B |         1 | `.1 / backing_store puppeteer___ariaQuerySelectorAll`                     |

##### `SVGAnimatedLength` (`<unknown>`)

|    % | Size | Instances | Path                                                                                               |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------- |
| 0.1% | 64 B |         1 | `[7] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% | 64 B |         1 | `[6] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% | 64 B |         1 | `[5] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% | 64 B |         1 | `[10] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% | 64 B |         1 | `[9] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------- |
| 21.3% | 16.7 KiB |       100 | `.user Object ← .__retained Window / http://127.0.0.1:52789`                            |
| 15.6% | 12.3 KiB |        73 | `.user Object ← .retweeted_status Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.4% |    296 B |         2 | `(GC root)`                                                                             |
|  0.2% |    140 B |         1 | `.m system / Context`                                                                   |
|  0.2% |    140 B |         1 | `.x system / Context`                                                                   |

##### `Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                 |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.4% | 228 B |         9 | `(GC root)`                                                                                                                                                                                                                                                                          |
| <0.1% |  16 B |         1 | `.transition_info system / AllocationSite ← .(Bootstrapper) system / FeedbackVector ← .value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell xv (node_modules/d3/dist/d3.min.js:2:167919) ← .xv system / Context` |
| <0.1% |  16 B |         1 | `.transition_info system / AllocationSite ← .(Thread manager) system / FeedbackVector ← .value system / FeedbackCell ← .feedback_cell M (node_modules/d3/dist/d3.min.js:2:2921)`                                                                                                     |
| <0.1% |  16 B |         1 | `.transition_info system / AllocationSite ← .(Strong root list) system / FeedbackVector ← .value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell F (node_modules/d3/dist/d3.min.js:2:4882) ← .F system / Context` |
| <0.1% |  16 B |         1 | `.raw Array`                                                                                                                                                                                                                                                                         |

##### `SVGAnimatedString` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                                                        |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.7% | 2.95 KiB |        54 | `[5] SVGTitleElement ← [8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.1% |     56 B |         1 | `[5] SVGTitleElement ← [8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |     56 B |         1 | `[5] SVGTitleElement ← [8] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |     56 B |         1 | `[8] SVGPathElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                           |
| 0.1% |     56 B |         1 | `[10] SVGCircleElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                        |

##### `SVGAnimatedTransformList` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                 |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 7.3% | 2.75 KiB |        44 | `[12] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.2% |     64 B |         1 | `[12] SVGRectElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.2% |     64 B |         1 | `[12] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.2% |     64 B |         1 | `[7] SVGPathElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.2% |     64 B |         1 | `[5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                       |

##### `SVGCircleElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 48.9% | 16.1 KiB |        98 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                          |
|  0.5% |    168 B |         1 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    168 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    168 B |         1 | `[7] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.5% |    168 B |         1 | `[7] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGAnimatedNumber` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 2.5 KiB |        40 | `[11] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                    |
|  0.3% |    64 B |         1 | `[9] SVGLineElement ← [7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |    64 B |         1 | `[6] SVGPathElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  0.3% |    64 B |         1 | `[2] SVGPathElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  0.3% |    64 B |         1 | `[11] SVGRectElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                  |

##### `SVGGElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 30.0% | 6.98 KiB |        47 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  1.9% |    456 B |         3 | `[8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  0.6% |    152 B |         1 | `[11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  0.6% |    152 B |         1 | `[3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.6% |    152 B |         1 | `[10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGRectElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 96.0% | 18.9 KiB |       105 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.8% |    368 B |         2 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.8% |    368 B |         2 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.1% |     28 B |         1 | `(GC root)`                                                                                    |
|  0.1% |     16 B |         1 | `[7] InternalNode ← [1] InternalNode ← [1] InternalNode`                                       |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                                                                                                            |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.2% | 4.45 KiB |         5 | `(GC root)`                                                                                                                                                                                                                                     |
|  1.3% |    192 B |         3 | `.context l (node_modules/d3/dist/d3.min.js:2:155023) ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:11875) ← .__axis SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |    148 B |         2 | `.t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:11875) ← .__axis SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                        |
|  0.4% |     60 B |         1 | `.context t ← .Deferred Object`                                                                                                                                                                                                                 |
|  0.3% |     44 B |         1 | `.d3 Window / http://127.0.0.1:52789`                                                                                                                                                                                                           |

##### `SVGAnimatedLengthList` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 128 B |         2 | `[8] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.4% |  64 B |         1 | `[8] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% |  64 B |         1 | `[6] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% |  64 B |         1 | `[6] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.4% |  64 B |         1 | `[7] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGTitleElement` (`<unknown>`)

|     % |   Size | Instances | Path                                                                                                                                  |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 97.6% | 13 KiB |        98 | `[8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.0% |  136 B |         1 | `[8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |  136 B |         1 | `[8] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.2% |   28 B |         1 | `(GC root)`                                                                                                                           |
|  0.1% |   16 B |         1 | `[12] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                                             |

##### `SVGTextElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 73.7% | 7.73 KiB |        43 | `[8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  8.6% |    920 B |         5 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  3.4% |    368 B |         2 | `[8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.7% |    184 B |         1 | `[5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |    184 B |         1 | `[6] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                      |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% | 560 B |         7 | `[14] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
| 2.4% | 240 B |         3 | `[14] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`    |
| 2.4% | 240 B |         3 | `[14] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
| 0.8% |  80 B |         1 | `[6] SVGTitleElement ← [8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `SVGLineElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 92.8% | 7.39 KiB |        43 | `[7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  6.5% |    528 B |         3 | `[7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |     28 B |         1 | `(GC root)`                                                                                                      |
|  0.2% |     16 B |         1 | `[8] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                         |
|  0.2% |     16 B |         1 | `.509 array`                                                                                                     |

##### `SVGPathElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 58.7% | 3.13 KiB |        20 | `[11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  5.9% |    320 B |         2 | `[7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  2.9% |    160 B |         1 | `[6] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  2.9% |    160 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  2.9% |    160 B |         1 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |

##### `Date` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                   |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 97.1% | 5.08 KiB |       100 | `.created Object ← .__retained Window / http://127.0.0.1:52789`                                                        |
|  1.0% |     52 B |         1 | `.Xg system / Context`                                                                                                 |
|  1.0% |     52 B |         1 | `.Gg system / Context`                                                                                                 |
|  1.0% |     52 B |         1 | `.__data__ SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `SVGAnimatedNumberList` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                  |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 384 B |         6 | `[9] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                              |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 57.7% | 2 KiB |         1 | `.backing_store ArrayBuffer ← .buffer Uint32Array ← .Au system / Context`                                                         |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |

##### `Qd` (`node_modules/d3/dist/d3.min.js:2:140522`)

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 99.2% | 3.31 KiB |       106 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`     |
|  0.8% |     28 B |         1 | `.prototype Up (node_modules/d3/dist/d3.min.js:2:147093) ← .Up system / Context` |

##### `HTMLDocument` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 99.5% | 3.18 KiB |         2 | `(GC root)`  |
|  0.5% |     16 B |         1 | `.155 array` |

##### `SVGAnimatedEnumeration` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                   |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 17.2% | 560 B |        10 | `[11] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  5.2% | 168 B |         3 | `[11] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  3.4% | 112 B |         2 | `[11] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.7% |  56 B |         1 | `[11] SVGTextElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  56 B |         1 | `[11] SVGTextElement ← [6] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Performance` (`<unknown>`)

|     % |    Size | Instances | Path                                                     |
| ----: | ------: | --------: | -------------------------------------------------------- |
| 96.9% | 1,012 B |         2 | `(GC root)`                                              |
|  1.5% |    16 B |         1 | `[2] InternalNode ← [1] InternalNode ← [1] InternalNode` |
|  1.5% |    16 B |         1 | `.385 array`                                             |

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

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 1,008 B |        36 | `(GC root)` |

##### `qe` (`node_modules/d3/dist/d3.min.js:2:34624`)

|    % | Size | Instances | Path                                                                                                                                                    |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.6% | 28 B |         1 | `.cm system / Context`                                                                                                                                  |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlOrRd Object ← .d3 Window / http://127.0.0.1:52789` |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlOrBr Object ← .d3 Window / http://127.0.0.1:52789` |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlGnBu Object ← .d3 Window / http://127.0.0.1:52789` |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlGn Object ← .d3 Window / http://127.0.0.1:52789`   |

##### `ArrayBuffer` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                 |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------------------------- |
| 7.9% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .Gh system / Context` |
| 7.9% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |
| 7.9% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |
| 7.9% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
| 7.9% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |

##### `Float64Array` (`<unknown>`)

|     % | Size | Instances | Path                   |
| ----: | ---: | --------: | ---------------------- |
| 10.0% | 60 B |         1 | `.xu system / Context` |
| 10.0% | 60 B |         1 | `.mu system / Context` |
| 10.0% | 60 B |         1 | `.wu system / Context` |
| 10.0% | 60 B |         1 | `.bu system / Context` |
| 10.0% | 60 B |         1 | `._u system / Context` |

##### `T` (`node_modules/d3/dist/d3.min.js:2:3159`)

|     % | Size | Instances | Path                   |
| ----: | ---: | --------: | ---------------------- |
| 20.0% | 52 B |         1 | `.us system / Context` |
| 20.0% | 52 B |         1 | `.rh system / Context` |
| 20.0% | 52 B |         1 | `.Gh system / Context` |
| 20.0% | 52 B |         1 | `.ih system / Context` |
| 20.0% | 52 B |         1 | `.as system / Context` |

##### `Map` (`<unknown>`)

|     % | Size | Instances | Path                                                                                                                               |
| ----: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 37.5% | 84 B |         3 | `(GC root)`                                                                                                                        |
|  7.1% | 16 B |         1 | `._intern InternMap (node_modules/d3/dist/d3.min.js:2:3622) ← .hashtagCounts Object ← .__retained Window / http://127.0.0.1:52789` |
|  7.1% | 16 B |         1 | `.s system / Context`                                                                                                              |
|  7.1% | 16 B |         1 | `.h system / Context`                                                                                                              |
|  7.1% | 16 B |         1 | `.p system / Context`                                                                                                              |

##### `Ar` (`node_modules/d3/dist/d3.min.js:2:40001`)

|     % | Size | Instances | Path                                                                                                                                                              |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.7% | 60 B |         1 | `.n system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:46615) ← .interpolateCubehelixDefault Object ← .d3 Window / http://127.0.0.1:52789` |
| 19.4% | 28 B |         1 | `.um system / Context`                                                                                                                                            |
| 19.4% | 28 B |         1 | `.n system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:46615) ← .interpolateWarm Object ← .d3 Window / http://127.0.0.1:52789`             |
| 19.4% | 28 B |         1 | `.n system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:46615) ← .interpolateCool Object ← .d3 Window / http://127.0.0.1:52789`             |

##### `ye` (`node_modules/d3/dist/d3.min.js:2:30261`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 140 B |         5 | `(GC root)` |

##### `Set` (`<unknown>`)

|     % | Size | Instances | Path                                                           |
| ----: | ---: | --------: | -------------------------------------------------------------- |
| 65.6% | 84 B |         3 | `(GC root)`                                                    |
| 12.5% | 16 B |         1 | `.ne system / Context`                                         |
| 12.5% | 16 B |         1 | `.re system / Context`                                         |
|  9.4% | 12 B |         1 | `.prototype InternSet (node_modules/d3/dist/d3.min.js:2:3943)` |

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

##### `Generator` (`<unknown>`)

|     % | Size | Instances | Path                                      |
| ----: | ---: | --------: | ----------------------------------------- |
| 87.5% | 84 B |         3 | `(GC root)`                               |
| 12.5% | 12 B |         1 | `.__proto__ Generator (workload.mjs:1:1)` |

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

##### `Array Iterator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `Uint32Array` (`<unknown>`)

|      % | Size | Instances | Path                   |
| -----: | ---: | --------: | ---------------------- |
| 100.0% | 60 B |         1 | `.Au system / Context` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                       | Location    |
| ----: | -------: | --------: | --------------------------------- | ----------- |
| 49.4% |  1.5 MiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>` |
| 35.1% | 1.07 MiB |     1,723 | `Object`                          | `<unknown>` |
| 19.1% |  593 KiB |     3,705 | `Array`                           | `<unknown>` |
| 17.8% |  554 KiB |        47 | `system / ExternalStringData`     | `<unknown>` |
| 15.5% |  483 KiB |         4 | `SVGSVGElement`                   | `<unknown>` |
| 15.3% |  476 KiB |       160 | `SVGGElement`                     | `<unknown>` |
| 11.2% |  347 KiB |       426 | `system / Context`                | `<unknown>` |
|  3.9% |  120 KiB |       203 | `SVGCircleElement`                | `<unknown>` |
|  3.4% |  105 KiB |        37 | `SVGPathElement`                  | `<unknown>` |
|  3.0% | 93.8 KiB |     1,500 | `SVGAnimatedLength`               | `<unknown>` |
|  2.7% | 83.8 KiB |       112 | `SVGRectElement`                  | `<unknown>` |
|  2.4% | 74.2 KiB |        10 | `Window`                          | `<unknown>` |
|  1.5% | 47.8 KiB |         1 | `Window / ://`                    | `<unknown>` |
|  1.5% | 45.5 KiB |        61 | `SVGTextElement`                  | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`               | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`        | `<unknown>` |
|  0.9% | 28.8 KiB |        49 | `SVGLineElement`                  | `<unknown>` |
|  0.9% | 28.7 KiB |       103 | `SVGTitleElement`                 | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`               | `<unknown>` |
|  0.5% | 14.5 KiB |       232 | `SVGAnimatedLengthList`           | `<unknown>` |

#### Categories

##### Native

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
| 17.8% |  554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
| 15.5% |  483 KiB |         4 | `SVGSVGElement`               | `<unknown>` |
| 15.3% |  476 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  3.9% |  120 KiB |       203 | `SVGCircleElement`            | `<unknown>` |
|  3.4% |  105 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  3.0% | 93.8 KiB |     1,500 | `SVGAnimatedLength`           | `<unknown>` |
|  2.7% | 83.8 KiB |       112 | `SVGRectElement`              | `<unknown>` |
|  2.4% | 74.2 KiB |        10 | `Window`                      | `<unknown>` |
|  1.5% | 45.5 KiB |        61 | `SVGTextElement`              | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`           | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`    | `<unknown>` |
|  0.9% | 28.8 KiB |        49 | `SVGLineElement`              | `<unknown>` |
|  0.9% | 28.7 KiB |       103 | `SVGTitleElement`             | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`           | `<unknown>` |
|  0.5% | 14.5 KiB |       232 | `SVGAnimatedLengthList`       | `<unknown>` |
|  0.3% | 9.84 KiB |       126 | `Text`                        | `<unknown>` |
|  0.2% | 5.23 KiB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.1% | 3.63 KiB |        58 | `SVGAnimatedNumberList`       | `<unknown>` |
|  0.1% | 3.47 KiB |         9 | `system / JSArrayBufferData`  | `<unknown>` |
|  0.1% | 3.17 KiB |        58 | `SVGAnimatedEnumeration`      | `<unknown>` |

##### Object

|     % |     Size | Instances | Constructor                       | Location                                  |
| ----: | -------: | --------: | --------------------------------- | ----------------------------------------- |
| 49.4% |  1.5 MiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>`                               |
| 35.1% | 1.07 MiB |     1,723 | `Object`                          | `<unknown>`                               |
| 11.2% |  347 KiB |       426 | `system / Context`                | `<unknown>`                               |
|  1.5% | 47.8 KiB |         1 | `Window / ://`                    | `<unknown>`                               |
|  0.4% | 12.5 KiB |       107 | `Qd`                              | `node_modules/d3/dist/d3.min.js:2:140522` |
|  0.2% | 6.45 KiB |         1 | `Object / `                       | `<unknown>`                               |
|  0.2% | 5.91 KiB |        37 | `Error`                           | `<unknown>`                               |
|  0.2% | 5.64 KiB |         1 | `Document`                        | `<unknown>`                               |
|  0.2% |  5.6 KiB |        14 | `ArrayBuffer`                     | `<unknown>`                               |
|  0.2% | 5.23 KiB |        36 | `TypedArray`                      | `<unknown>`                               |
|  0.2% | 5.23 KiB |       103 | `Date`                            | `<unknown>`                               |
|  0.2% | 5.13 KiB |        12 | `Map`                             | `<unknown>`                               |
|  0.2% | 5.09 KiB |         3 | `Math`                            | `<unknown>`                               |
|  0.2% | 4.79 KiB |         3 | `console`                         | `<unknown>`                               |
|  0.1% | 4.64 KiB |         1 | `HTMLElement`                     | `<unknown>`                               |
|  0.1% | 4.48 KiB |         3 | `Intl.Locale`                     | `<unknown>`                               |
|  0.1% | 4.34 KiB |         3 | `String`                          | `<unknown>`                               |
|  0.1% | 4.02 KiB |         3 | `DataView`                        | `<unknown>`                               |
|  0.1% | 3.98 KiB |         5 | `ye`                              | `node_modules/d3/dist/d3.min.js:2:30261`  |
|  0.1% | 3.42 KiB |         1 | `Element`                         | `<unknown>`                               |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
| 19.1% |  593 KiB |     3,705 | `Array`          | `<unknown>` |
|  0.1% | 2.71 KiB |        10 | `Float64Array`   | `<unknown>` |
|  0.1% | 2.11 KiB |         1 | `Uint32Array`    | `<unknown>` |
| <0.1% |    528 B |         3 | `Array Iterator` | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Window / http://127.0.0.1:52789` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 1.5 MiB |         1 | `(GC root)` |

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                            |
| ----: | -------: | --------: | ------------------------------------------------------------------------------- |
| 55.0% |  600 KiB |         1 | `.__retained Window / http://127.0.0.1:52789`                                   |
| 23.9% |  261 KiB |         1 | `.d3 Window / http://127.0.0.1:52789`                                           |
|  5.2% | 56.6 KiB |         2 | `(GC root)`                                                                     |
|  2.7% |   30 KiB |         1 | `.prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context` |
|  2.0% | 22.1 KiB |         1 | `.prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                        |

##### `Array` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81.3% |  482 KiB |         1 | `.detached Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                             |
|  2.0% | 11.8 KiB |         1 | `.coordinates Object ← .__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                         |
|  1.7% | 10.2 KiB |         1 | `[1] Array ← .coordinates Object ← .__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`             |
|  1.7% | 10.2 KiB |         1 | `[0] Array ← [1] Array ← .coordinates Object ← .__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.4% | 8.13 KiB |         1 | `.coordinates Object ← .__data__ SVGPathElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                           |

##### `system / ExternalStringData` (`<unknown>`)

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 98.5% |  546 KiB |         1 | `.2 / backing_store // https://d3js.org v7.9.0 Copyright 2010-2023 Mi…`   |
|  1.3% | 7.04 KiB |         1 | `.2 / backing_store globalThis.buildAndRetainDom = (\n  data,\n  passes…` |
| <0.1% |     65 B |         1 | `.1 / backing_store http://127.0.0.1:52789/node_modules/d3/dist/d3.mi…`   |
| <0.1% |     47 B |         1 | `.1 / backing_store http://127.0.0.1:52789/workload.mjs`                  |
| <0.1% |     44 B |         1 | `.1 / backing_store puppeteer___ariaQuerySelectorAll`                     |

##### `SVGSVGElement` (`<unknown>`)

|     % |    Size | Instances | Path                                                                         |
| ----: | ------: | --------: | ---------------------------------------------------------------------------- |
| 99.8% | 482 KiB |         1 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.2% |   780 B |         1 | `(GC root)`                                                                  |
| <0.1% |    16 B |         1 | `[4] InternalNode ← [1] InternalNode ← [1] InternalNode`                     |
| <0.1% |    16 B |         1 | `.491 array`                                                                 |

##### `SVGGElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 70.2% |  334 KiB |        52 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
| 23.6% |  112 KiB |         1 | `[10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 21.3% |  101 KiB |         1 | `[11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.1% | 5.24 KiB |         3 | `[8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  0.2% | 1.12 KiB |         1 | `[3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| 79.0% |  274 KiB |         3 | `(GC root)`                                                                                                                         |
|  1.7% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateInferno Object ← .d3 Window / http://127.0.0.1:52789` |
|  1.7% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateMagma Object ← .d3 Window / http://127.0.0.1:52789`   |
|  1.7% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolatePlasma Object ← .d3 Window / http://127.0.0.1:52789`  |
|  1.7% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateViridis Object ← .d3 Window / http://127.0.0.1:52789` |

##### `SVGCircleElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 52.7% | 63.2 KiB |        98 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                          |
|  0.5% |    660 B |         1 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    660 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    564 B |         1 | `[7] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.5% |    564 B |         1 | `[7] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGPathElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 82.9% | 87.5 KiB |        21 | `[11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 11.6% | 12.2 KiB |         1 | `[5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.3% | 1.35 KiB |         1 | `[6] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.4% |    456 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  0.4% |    456 B |         1 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |

##### `SVGAnimatedLength` (`<unknown>`)

|    % | Size | Instances | Path                                                                                               |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------- |
| 0.1% | 64 B |         1 | `[7] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% | 64 B |         1 | `[6] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% | 64 B |         1 | `[5] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% | 64 B |         1 | `[10] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% | 64 B |         1 | `[9] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |

##### `SVGRectElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 95.8% | 80.2 KiB |       105 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.9% | 1.62 KiB |         2 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.9% | 1.62 KiB |         2 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |    292 B |         1 | `(GC root)`                                                                                    |
| <0.1% |     16 B |         1 | `[7] InternalNode ← [1] InternalNode ← [1] InternalNode`                                       |

##### `Window` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 73.5% | 54.5 KiB |         6 | `(GC root)`  |
| 13.2% | 9.79 KiB |         1 | `.77 array`  |
| 13.2% | 9.79 KiB |         1 | `.205 array` |
|  0.1% |     56 B |         1 | `.76 array`  |
|  0.1% |     56 B |         1 | `.204 array` |

##### `Window / ://` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 47.8 KiB |         1 | `(GC root)` |

##### `SVGTextElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 19.9% | 9.07 KiB |        11 | `[8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  3.6% | 1.65 KiB |         2 | `[8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.9% |    876 B |         1 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  1.9% |    876 B |         1 | `[6] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.8% |    844 B |         1 | `[5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGAnimatedString` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                                                        |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.7% | 2.95 KiB |        54 | `[5] SVGTitleElement ← [8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.1% |     56 B |         1 | `[5] SVGTitleElement ← [8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |     56 B |         1 | `[5] SVGTitleElement ← [8] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |     56 B |         1 | `[8] SVGPathElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                           |
| 0.1% |     56 B |         1 | `[10] SVGCircleElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                        |

##### `SVGAnimatedTransformList` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                 |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 7.3% | 2.75 KiB |        44 | `[12] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.2% |     64 B |         1 | `[12] SVGRectElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.2% |     64 B |         1 | `[12] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.2% |     64 B |         1 | `[7] SVGPathElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.2% |     64 B |         1 | `[5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                       |

##### `SVGLineElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 92.6% | 26.7 KiB |        43 | `[7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  6.5% | 1.86 KiB |         3 | `[7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.8% |    244 B |         1 | `(GC root)`                                                                                                      |
|  0.1% |     16 B |         1 | `[8] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                         |
|  0.1% |     16 B |         1 | `.509 array`                                                                                                     |

##### `SVGTitleElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 97.4% | 27.9 KiB |        98 | `[8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.0% |    292 B |         1 | `[8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |    292 B |         1 | `[8] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.5% |    148 B |         1 | `(GC root)`                                                                                                                           |
|  0.1% |     16 B |         1 | `[12] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                                             |

##### `SVGAnimatedNumber` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 2.5 KiB |        40 | `[11] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                    |
|  0.3% |    64 B |         1 | `[9] SVGLineElement ← [7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |    64 B |         1 | `[6] SVGPathElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  0.3% |    64 B |         1 | `[2] SVGPathElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  0.3% |    64 B |         1 | `[11] SVGRectElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                  |

##### `SVGAnimatedLengthList` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 128 B |         2 | `[8] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.4% |  64 B |         1 | `[8] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% |  64 B |         1 | `[6] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% |  64 B |         1 | `[6] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.4% |  64 B |         1 | `[7] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Qd` (`node_modules/d3/dist/d3.min.js:2:140522`)

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 98.8% | 12.4 KiB |       106 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`     |
|  1.2% |    148 B |         1 | `.prototype Up (node_modules/d3/dist/d3.min.js:2:147093) ← .Up system / Context` |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                      |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% | 560 B |         7 | `[14] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
| 2.4% | 240 B |         3 | `[14] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`    |
| 2.4% | 240 B |         3 | `[14] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
| 0.8% |  80 B |         1 | `[6] SVGTitleElement ← [8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

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

##### `ArrayBuffer` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 36.6% | 2.05 KiB |         1 | `.buffer Uint32Array ← .Au system / Context`                                                         |
| 28.1% | 1.57 KiB |         3 | `(GC root)`                                                                                          |
|  5.4% |    308 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .Gh system / Context` |
|  5.4% |    308 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |
|  5.4% |    308 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |

##### `HTMLDocument` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 99.7% | 5.21 KiB |         2 | `(GC root)`  |
|  0.3% |     16 B |         1 | `.155 array` |

##### `TypedArray` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 5.23 KiB |        36 | `(GC root)` |

##### `Date` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                   |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 97.1% | 5.08 KiB |       100 | `.created Object ← .__retained Window / http://127.0.0.1:52789`                                                        |
|  1.0% |     52 B |         1 | `.Xg system / Context`                                                                                                 |
|  1.0% |     52 B |         1 | `.Gg system / Context`                                                                                                 |
|  1.0% |     52 B |         1 | `.__data__ SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `Map` (`<unknown>`)

|     % |     Size | Instances | Path                  |
| ----: | -------: | --------: | --------------------- |
| 42.7% | 2.19 KiB |         1 | `(GC root)`           |
|  9.8% |    512 B |         1 | `.L system / Context` |
|  9.4% |    492 B |         1 | `.y system / Context` |
|  8.6% |    452 B |         1 | `._ system / Context` |
|  5.6% |    292 B |         1 | `.h system / Context` |

##### `Math` (`<unknown>`)

|     % |     Size | Instances | Path                                    |
| ----: | -------: | --------: | --------------------------------------- |
| 35.7% | 1.82 KiB |         1 | `.Math Window / ://`                    |
| 35.7% | 1.82 KiB |         1 | `.Math Object / `                       |
| 28.6% | 1.46 KiB |         1 | `.Math Window / http://127.0.0.1:52789` |

##### `console` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.79 KiB |         3 | `(GC root)` |

##### `HTMLElement` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.64 KiB |         1 | `(GC root)` |

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

##### `ye` (`node_modules/d3/dist/d3.min.js:2:30261`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 3.98 KiB |         5 | `(GC root)` |

##### `SVGAnimatedNumberList` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                  |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 384 B |         6 | `[9] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  64 B |         1 | `[9] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                              |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 57.7% | 2 KiB |         1 | `.backing_store ArrayBuffer ← .buffer Uint32Array ← .Au system / Context`                                                         |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |
|  7.2% | 256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |

##### `Element` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 3.42 KiB |         1 | `(GC root)` |

##### `SVGAnimatedEnumeration` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                   |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 17.2% | 560 B |        10 | `[11] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  5.2% | 168 B |         3 | `[11] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  3.4% | 112 B |         2 | `[11] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.7% |  56 B |         1 | `[11] SVGTextElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |  56 B |         1 | `[11] SVGTextElement ← [6] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Float64Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                          |
| ----: | ----: | --------: | ----------------------------------------------------------------------------- |
| 13.3% | 368 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .Gh system / Context` |
| 13.3% | 368 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |
| 13.3% | 368 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |
| 13.3% | 368 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
| 13.3% | 368 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |

##### `Uint32Array` (`<unknown>`)

|      % |     Size | Instances | Path                   |
| -----: | -------: | --------: | ---------------------- |
| 100.0% | 2.11 KiB |         1 | `.Au system / Context` |

##### `Array Iterator` (`<unknown>`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 528 B |         3 | `(GC root)` |

## Largest functions

Functions ranked by bytes that would be freed if the function were garbage collected.

|    % | Retained | Instances | Paths | Name          | Location                                  | Example path                                                                                                                                              |
| ---: | -------: | --------: | ----: | ------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 30.9 KiB |         1 |     1 | `Su`          | `node_modules/d3/dist/d3.min.js:2:82034`  | `.Su system / Context`                                                                                                                                    |
| 0.8% | 24.3 KiB |         4 |     4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:186206` | `.interpolateInferno Object ← .d3 Window / http://127.0.0.1:52789`                                                                                        |
| 0.8% |   24 KiB |         1 |     1 | `iu`          | `node_modules/d3/dist/d3.min.js:2:76774`  | `(GC root)`                                                                                                                                               |
| 0.7% |   23 KiB |         1 |     1 | `qu`          | `node_modules/d3/dist/d3.min.js:2:87884`  | `(GC root)`                                                                                                                                               |
| 0.7% | 21.6 KiB |         1 |     1 | `update`      | `node_modules/d3/dist/d3.min.js:2:82523`  | `.update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                          |
| 0.4% | 12.9 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:232033` | `.forceLink Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                 |
| 0.4% | 12.7 KiB |         1 |     1 | `Lu`          | `node_modules/d3/dist/d3.min.js:2:94618`  | `.Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                  |
| 0.4% | 11.8 KiB |        27 |    27 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:41766`  | `.interpolateBrBG Object ← .d3 Window / http://127.0.0.1:52789`                                                                                           |
| 0.4% | 11.4 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:223109` | `.contourDensity Object ← .d3 Window / http://127.0.0.1:52789`                                                                                            |
| 0.4% |   11 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:233448` | `.forceManyBody Object ← .d3 Window / http://127.0.0.1:52789`                                                                                             |
| 0.4% |   11 KiB |         1 |     1 | `Q`           | `node_modules/d3/dist/d3.min.js:2:6993`   | `.bin Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                       |
| 0.3% | 9.69 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:231022` | `.forceCollide Object ← .d3 Window / http://127.0.0.1:52789`                                                                                              |
| 0.3% | 9.39 KiB |        81 |    81 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:40205`  | `.o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.3% | 8.99 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235437` | `.forceSimulation Object ← .d3 Window / http://127.0.0.1:52789`                                                                                           |
| 0.3% |  8.4 KiB |         1 |     1 | `_init`       | `node_modules/d3/dist/d3.min.js:2:94846`  | `._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                         |
| 0.3% | 7.86 KiB |        14 |    14 | `safe`        | `extensions::SafeBuiltins:26:22`          | `.<symbol extensions::SafeBuiltins::Array> Window / http://127.0.0.1:52789`                                                                               |
| 0.2% | 7.48 KiB |        27 |     9 | `i`           | `node_modules/d3/dist/d3.min.js:2:159016` | `(GC root)`                                                                                                                                               |
| 0.2% | 7.39 KiB |         1 |     1 | `_init`       | `node_modules/d3/dist/d3.min.js:2:88227`  | `._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                                                                                  |
| 0.2% | 7.15 KiB |        44 |    20 | `(anonymous)` | `<unknown>`                               | `(GC root)`                                                                                                                                               |
| 0.2% | 6.95 KiB |         1 |     1 | `ed`          | `node_modules/d3/dist/d3.min.js:2:131041` | `.ed system / Context`                                                                                                                                    |

### Retained

Nodes ranked by contribution to each function's retained size.

#### `Su` (`node_modules/d3/dist/d3.min.js:2:82034`)

|     % |     Self | Name                                 | Path                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.8% | 13.8 KiB | `(instruction stream for update)`    | `.instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                    |
|  8.9% | 2.74 KiB | `system / BytecodeArray`             | `.interpreter_data (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                      |
|  8.1% |  2.5 KiB | `(instruction stream for _legalize)` | `.instruction_stream (code for _legalize) ← .trusted_function_data _legalize ← .shared _legalize (node_modules/d3/dist/d3.min.js:2:85279) ← ._legalize Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                        |
|  6.2% | 1.91 KiB | `system / FeedbackVector`            | `.value system / FeedbackCell ← .feedback_cell update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                                                      |
|  2.8% |    892 B | `system / TrustedByteArray`          | `.relocation_info (instruction stream for update) ← .instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:186206`)

|    % |     Self | Name                | Path                                                                                                                                                                        |
| ---: | -------: | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateInferno Object ← .d3 Window / http://127.0.0.1:52789` |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateMagma Object ← .d3 Window / http://127.0.0.1:52789`   |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolatePlasma Object ← .d3 Window / http://127.0.0.1:52789`  |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateViridis Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.1% |     24 B | `system / Context`  | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186206) ← .interpolateInferno Object ← .d3 Window / http://127.0.0.1:52789`                                         |

#### `iu` (`node_modules/d3/dist/d3.min.js:2:76774`)

|     % |     Self | Name                            | Path                                                                                  |
| ----: | -------: | ------------------------------- | ------------------------------------------------------------------------------------- |
| 20.2% | 4.84 KiB | `(BASELINE instruction stream)` | `.instruction_stream (BASELINE code) ← .trusted_function_data (shared function info)` |
| 12.2% | 2.94 KiB | `(instruction stream for p)`    | `.instruction_stream (code for p) ← .trusted_function_data p`                         |
|  4.7% | 1.13 KiB | `(BASELINE instruction stream)` | `.instruction_stream (BASELINE code) ← .trusted_function_data (shared function info)` |
|  4.7% | 1.13 KiB | `(instruction stream for o)`    | `.instruction_stream (code for o) ← .trusted_function_data o`                         |
|  3.5% |    864 B | `(BASELINE instruction stream)` | `.instruction_stream (BASELINE code) ← .trusted_function_data (shared function info)` |

#### `qu` (`node_modules/d3/dist/d3.min.js:2:87884`)

|     % |     Self | Name                                      | Path                                                                                                                                                                                                                                |
| ----: | -------: | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 4.56 KiB | `(instruction stream for _init)`          | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                             |
| 15.1% | 3.47 KiB | `(instruction stream for _clipSegment)`   | `.instruction_stream (code for _clipSegment) ← .trusted_function_data _clipSegment ← .shared _clipSegment (node_modules/d3/dist/d3.min.js:2:92045) ← ._clipSegment Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)` |
| 10.3% | 2.38 KiB | `(instruction stream for render)`         | `.instruction_stream (code for render) ← .trusted_function_data render ← .shared render (node_modules/d3/dist/d3.min.js:2:88971) ← .render Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                         |
|  3.9% |    908 B | `system / BytecodeArray`                  | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                               |
|  3.4% |    800 B | `(instruction stream for _renderSegment)` | `.instruction_stream (code for _renderSegment) ← .code _renderSegment (node_modules/d3/dist/d3.min.js:2:90119) ← ._renderSegment Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                                   |

#### `update` (`node_modules/d3/dist/d3.min.js:2:82523`)

|     % |     Self | Name                              | Path                                                                                                                                                                                                                                                                                  |
| ----: | -------: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64.1% | 13.8 KiB | `(instruction stream for update)` | `.instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                    |
| 12.7% | 2.74 KiB | `system / BytecodeArray`          | `.interpreter_data (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                      |
|  8.8% | 1.91 KiB | `system / FeedbackVector`         | `.value system / FeedbackCell ← .feedback_cell update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                                                      |
|  4.0% |    892 B | `system / TrustedByteArray`       | `.relocation_info (instruction stream for update) ← .instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context` |
|  3.9% |    868 B | `system / TrustedByteArray`       | `.bytecode_offset_table (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82523) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82034) ← .Su system / Context`                                                 |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:232033`)

|     % |     Self | Name                         | Path                                                                                                                    |
| ----: | -------: | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 21.4% | 2.75 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .forceLink Object ← .d3 Window / http://127.0.0.1:52789` |
| 15.3% | 1.97 KiB | `(instruction stream for l)` | `.instruction_stream (code for l) ← .trusted_function_data l ← .forceLink Object ← .d3 Window / http://127.0.0.1:52789` |
|  4.6% |    608 B | `(instruction stream for p)` | `.instruction_stream (code for p) ← .trusted_function_data p ← .forceLink Object ← .d3 Window / http://127.0.0.1:52789` |
|  4.6% |    608 B | `(instruction stream for d)` | `.instruction_stream (code for d) ← .trusted_function_data d ← .forceLink Object ← .d3 Window / http://127.0.0.1:52789` |
|  3.2% |    424 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .forceLink Object ← .d3 Window / http://127.0.0.1:52789`   |

#### `Lu` (`node_modules/d3/dist/d3.min.js:2:94618`)

|     % |     Self | Name                             | Path                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 35.9% | 4.56 KiB | `(instruction stream for _init)` | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                   |
|  7.2% |    936 B | `system / BytecodeArray`         | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                     |
|  6.5% |    848 B | `system / FeedbackVector`        | `.value system / FeedbackCell ← .feedback_cell _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                                                   |
|  6.4% |    832 B | `(BASELINE instruction stream)`  | `.instruction_stream (BASELINE code) ← .trusted_function_data (shared function info) ← .from Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                                 |
|  3.0% |    392 B | `system / TrustedByteArray`      | `.relocation_info (instruction stream for _init) ← .instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:41766`)

|    % | Self | Name                | Path                                                                                                                                                                                                                                                          |
| ---: | ---: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .u system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateBrBG Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateBrBG Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateBrBG Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .u system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolatePRGn Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolatePRGn Object ← .d3 Window / http://127.0.0.1:52789` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:223109`)

|     % |     Self | Name                         | Path                                                                                                                                                                                                                                             |
| ----: | -------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 25.2% | 2.88 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .contourDensity Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                                     |
|  5.5% |    648 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .contourDensity Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                                       |
|  4.1% |    480 B | `(instruction stream for v)` | `.instruction_stream (code for v) ← .trusted_function_data v ← .contourDensity Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                                     |
|  4.0% |    464 B | `system / FeedbackVector`    | `.value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell (anonymous) (node_modules/d3/dist/d3.min.js:2:223109) ← .contourDensity Object ← .d3 Window / http://127.0.0.1:52789` |
|  2.5% |    292 B | `system / BytecodeArray`     | `.trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:223109) ← .contourDensity Object ← .d3 Window / http://127.0.0.1:52789`                                                                   |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:233448`)

|     % |     Self | Name                         | Path                                                                                                                        |
| ----: | -------: | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 23.2% | 2.56 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .forceManyBody Object ← .d3 Window / http://127.0.0.1:52789` |
| 13.0% | 1.44 KiB | `(instruction stream for l)` | `.instruction_stream (code for l) ← .trusted_function_data l ← .forceManyBody Object ← .d3 Window / http://127.0.0.1:52789` |
|  7.6% |    864 B | `(instruction stream for f)` | `.instruction_stream (code for f) ← .trusted_function_data f ← .forceManyBody Object ← .d3 Window / http://127.0.0.1:52789` |
|  6.8% |    768 B | `(instruction stream for s)` | `.instruction_stream (code for s) ← .trusted_function_data s ← .forceManyBody Object ← .d3 Window / http://127.0.0.1:52789` |
|  4.7% |    536 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .forceManyBody Object ← .d3 Window / http://127.0.0.1:52789`   |

#### `Q` (`node_modules/d3/dist/d3.min.js:2:6993`)

|     % |     Self | Name                         | Path                                                                                                                                                                                                                      |
| ----: | -------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 59.5% | 6.56 KiB | `(instruction stream for r)` | `.instruction_stream (code for r) ← .trusted_function_data r ← .bin Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                         |
| 10.5% | 1.16 KiB | `system / BytecodeArray`     | `.interpreter_data (code for r) ← .trusted_function_data r ← .bin Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                           |
|  7.5% |    852 B | `system / FeedbackVector`    | `.value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell Q (node_modules/d3/dist/d3.min.js:2:6993) ← .bin Object ← .d3 Window / http://127.0.0.1:52789` |
|  4.3% |    488 B | `system / TrustedByteArray`  | `.bytecode_offset_table (code for r) ← .trusted_function_data r ← .bin Object ← .d3 Window / http://127.0.0.1:52789`                                                                                                      |
|  4.2% |    476 B | `system / TrustedByteArray`  | `.relocation_info (instruction stream for r) ← .instruction_stream (code for r) ← .trusted_function_data r ← .bin Object ← .d3 Window / http://127.0.0.1:52789`                                                           |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:231022`)

|     % |     Self | Name                         | Path                                                                                                                       |
| ----: | -------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 18.1% | 1.75 KiB | `(instruction stream for g)` | `.instruction_stream (code for g) ← .trusted_function_data g ← .forceCollide Object ← .d3 Window / http://127.0.0.1:52789` |
| 17.7% | 1.72 KiB | `(instruction stream for a)` | `.instruction_stream (code for a) ← .trusted_function_data a ← .forceCollide Object ← .d3 Window / http://127.0.0.1:52789` |
|  7.7% |    768 B | `(instruction stream for c)` | `.instruction_stream (code for c) ← .trusted_function_data c ← .forceCollide Object ← .d3 Window / http://127.0.0.1:52789` |
|  7.7% |    768 B | `(instruction stream for u)` | `.instruction_stream (code for u) ← .trusted_function_data u ← .forceCollide Object ← .d3 Window / http://127.0.0.1:52789` |
|  4.3% |    428 B | `system / BytecodeArray`     | `.interpreter_data (code for g) ← .trusted_function_data g ← .forceCollide Object ← .d3 Window / http://127.0.0.1:52789`   |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:40205`)

|    % | Self | Name                | Path                                                                                                                                                                                                                                                              |
| ---: | ---: | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .u system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object ← .d3 Window / http://127.0.0.1:52789` |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateRdYlGn Object ← .d3 Window / http://127.0.0.1:52789`   |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateRdYlGn Object ← .d3 Window / http://127.0.0.1:52789`   |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235437`)

|     % |     Self | Name                         | Path                                                                                                                                                                            |
| ----: | -------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.8% | 1.69 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .forceSimulation Object ← .d3 Window / http://127.0.0.1:52789`                                                   |
| 17.4% | 1.56 KiB | `(instruction stream for d)` | `.instruction_stream (code for d) ← .trusted_function_data d ← .forceSimulation Object ← .d3 Window / http://127.0.0.1:52789`                                                   |
|  3.3% |    304 B | `system / BytecodeArray`     | `.trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:235437) ← .forceSimulation Object ← .d3 Window / http://127.0.0.1:52789` |
|  3.0% |    276 B | `system / BytecodeArray`     | `.interpreter_data (code for d) ← .trusted_function_data d ← .forceSimulation Object ← .d3 Window / http://127.0.0.1:52789`                                                     |
|  2.8% |    260 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .forceSimulation Object ← .d3 Window / http://127.0.0.1:52789`                                                     |

#### `_init` (`node_modules/d3/dist/d3.min.js:2:94846`)

|     % |     Self | Name                             | Path                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.3% | 4.56 KiB | `(instruction stream for _init)` | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                   |
| 10.9% |    936 B | `system / BytecodeArray`         | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                     |
|  9.9% |    848 B | `system / FeedbackVector`        | `.value system / FeedbackCell ← .feedback_cell _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                                                   |
|  4.6% |    392 B | `system / TrustedByteArray`      | `.relocation_info (instruction stream for _init) ← .instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789` |
|  4.1% |    356 B | `system / TrustedByteArray`      | `.bytecode_offset_table (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94846) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94618) ← .Delaunay Object ← .d3 Window / http://127.0.0.1:52789`                                                |

#### `safe` (`extensions::SafeBuiltins:26:22`)

|    % |  Self | Name                       | Path                                                                                                                                                  |
| ---: | ----: | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / http://127.0.0.1:52789`                       |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / ://`                                          |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / http://127.0.0.1:52789` |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://`                    |
| 1.9% | 152 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::String> Window / http://127.0.0.1:52789` |

#### `i` (`node_modules/d3/dist/d3.min.js:2:159016`)

|    % | Self | Name                     | Path                                                                                                                 |
| ---: | ---: | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 48 B | `(shared function info)` | `.shared (anonymous) (node_modules/d3/dist/d3.min.js:2:162803) ← .every i (node_modules/d3/dist/d3.min.js:2:159016)` |
| 0.6% | 48 B | `(shared function info)` | `.shared (anonymous) (node_modules/d3/dist/d3.min.js:2:162420) ← .every i (node_modules/d3/dist/d3.min.js:2:159016)` |
| 0.6% | 48 B | `(shared function info)` | `.shared (anonymous) (node_modules/d3/dist/d3.min.js:2:159865) ← .every i (node_modules/d3/dist/d3.min.js:2:159016)` |
| 0.4% | 28 B | `(anonymous)`            | `.every i (node_modules/d3/dist/d3.min.js:2:159016)`                                                                 |
| 0.4% | 28 B | `(anonymous)`            | `.count i (node_modules/d3/dist/d3.min.js:2:159016)`                                                                 |

#### `_init` (`node_modules/d3/dist/d3.min.js:2:88227`)

|     % |     Self | Name                             | Path                                                                                                                                                                                                                                                      |
| ----: | -------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61.7% | 4.56 KiB | `(instruction stream for _init)` | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                                                   |
| 12.0% |    908 B | `system / BytecodeArray`         | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                                                     |
|  9.8% |    740 B | `system / FeedbackVector`        | `.value system / FeedbackCell ← .feedback_cell _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                                                                                   |
|  4.9% |    372 B | `system / TrustedByteArray`      | `.bytecode_offset_table (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)`                                                |
|  4.8% |    360 B | `system / TrustedByteArray`      | `.relocation_info (instruction stream for _init) ← .instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88227) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87884)` |

#### `(anonymous)` (`<unknown>`)

|    % |  Self | Name                                                   | Path                                                                                                                |
| ---: | ----: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                      |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                      |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                      |
| 1.4% | 104 B | `(function anonymous(\n) {\nreturn () => typeof glob…` | `.source code ← .script (shared function info) ← .shared (anonymous) ← .6 array ← .table Map ← .L system / Context` |
| 1.1% |  80 B | `(object properties)`                                  | `.properties Object ← .prototype (anonymous) ← .puppeteer___ariaQuerySelectorAll Window / http://127.0.0.1:52789`   |

#### `ed` (`node_modules/d3/dist/d3.min.js:2:131041`)

|     % |     Self | Name                               | Path                                                                                                                                                                                                                                     |
| ----: | -------: | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.3% | 1.69 KiB | `(instruction stream for point)`   | `.instruction_stream (code for point) ← .trusted_function_data point ← .shared point (node_modules/d3/dist/d3.min.js:2:131542) ← .point Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131041) ← .ed system / Context`         |
|  4.2% |    300 B | `system / BytecodeArray`           | `.interpreter_data (code for point) ← .trusted_function_data point ← .shared point (node_modules/d3/dist/d3.min.js:2:131542) ← .point Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131041) ← .ed system / Context`           |
|  4.0% |    288 B | `(instruction stream for lineEnd)` | `.instruction_stream (code for lineEnd) ← .trusted_function_data lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:131488) ← .lineEnd Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131041) ← .ed system / Context` |
|  3.2% |    228 B | `system / FeedbackVector`          | `.value system / FeedbackCell ← .feedback_cell point (node_modules/d3/dist/d3.min.js:2:131542) ← .point Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131041) ← .ed system / Context`                                         |
|  2.7% |    192 B | `(instruction stream for result)`  | `.instruction_stream (code for result) ← .trusted_function_data result ← .shared result (node_modules/d3/dist/d3.min.js:2:131904) ← .result Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131041) ← .ed system / Context`     |

## Largest strings

Strings ranked by bytes allocated for them.

### Categories

#### String

|     % |     Size | Value                                                    | Path                                            |
| ----: | -------: | -------------------------------------------------------- | ----------------------------------------------- |
|  0.3% | 9.54 KiB | `(() => {\n      const module = {};\n      "use stri…`   | `.source code`                                  |
|  0.1% | 3.15 KiB | `(function() {\n'use strict';\nnative function Apply…`   | `(GC root)`                                     |
|  0.1% | 1.72 KiB | `(function addPageBinding(type, name, prefix) {\n  …`    | `.source code ← .script (shared function info)` |
| <0.1% |    332 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `(GC root)`                                     |
| <0.1% |    332 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `(GC root)`                                     |
| <0.1% |    332 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `(GC root)`                                     |
| <0.1% |    328 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `(GC root)`                                     |
| <0.1% |    324 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `(GC root)`                                     |
| <0.1% |    312 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `(GC root)`                                     |
| <0.1% |    304 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `(GC root)`                                     |
| <0.1% |    300 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `(GC root)`                                     |
| <0.1% |    300 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `(GC root)`                                     |
| <0.1% |    296 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `(GC root)`                                     |
| <0.1% |    296 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `(GC root)`                                     |
| <0.1% |    292 B | `RT @oen_yakyu: ●継続試合（中京対崇徳）46回～　9時～\n　〈ラジオ中継〉\n　らじる…`   | `(GC root)`                                     |
| <0.1% |    292 B | `湯の街の元勃酩姦なんちゃら大　赤い犬の犬（外資系）　肥後で緑ナンバー屋さん勤め\nくだらないことしか…`    | `(GC root)`                                     |
| <0.1% |    292 B | `@kohecyan3 \n名前:上野滉平\n呼び方:うえの\n呼ばれ方:ずるかわ\n第一印象:過剰な俺イケ…` | `(GC root)`                                     |
| <0.1% |    292 B | `RT @omo_kko: ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1…`     | `(GC root)`                                     |
| <0.1% |    292 B | `@samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印象☞平野から？！\n今の印…` | `(GC root)`                                     |
| <0.1% |    292 B | `RT @assam_house: 泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働…`     | `(GC root)`                                     |

#### Concatenated string

|     % | Size | Value                   | Path                                                                                                                                                                                                                                                                                                           |
| ----: | ---: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data formatBody`                                                                                                                                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data formatRows`                                                                                                                                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info (shared function info)`                                                                                                                                                                                                            |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info)`                                                                                                                                                                                                                                            |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info appendChild ← .shared appendChild (node_modules/d3/dist/d3.min.js:2:21447) ← .appendChild Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context`                                                                                  |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info insertBefore ← .shared insertBefore (node_modules/d3/dist/d3.min.js:2:21520) ← .insertBefore Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context`                                               |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info insertBefore ← .shared insertBefore (node_modules/d3/dist/d3.min.js:2:21520) ← .insertBefore Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context`                                                                               |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info querySelector ← .shared querySelector (node_modules/d3/dist/d3.min.js:2:21587) ← .querySelector Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context`                                            |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info querySelector ← .shared querySelector (node_modules/d3/dist/d3.min.js:2:21587) ← .querySelector Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context`                                                                            |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← .<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data querySelectorAll ← .shared querySelectorAll (node_modules/d3/dist/d3.min.js:2:21654) ← .querySelectorAll Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context` |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data querySelectorAll ← .shared querySelectorAll (node_modules/d3/dist/d3.min.js:2:21654) ← .querySelectorAll Object ← .prototype nn (node_modules/d3/dist/d3.min.js:2:17115) ← .nn system / Context`                                 |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithPreparseData ← .trusted_function_data selectChild ← .shared selectChild (node_modules/d3/dist/d3.min.js:2:22920)`                                                                                                                                                         |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← .<dummy> system / UncompiledDataWithPreparseData ← .trusted_function_data selectChildren ← .shared selectChildren (node_modules/d3/dist/d3.min.js:2:23073)`                                                                                                                   |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithPreparseData ← .trusted_function_data selectChildren ← .shared selectChildren (node_modules/d3/dist/d3.min.js:2:23073)`                                                                                                                                                   |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data formatHex8 ← .shared formatHex8 (node_modules/d3/dist/d3.min.js:2:36010) ← .formatHex8 Object`                                                                                                                                   |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data formatHex8 ← .shared formatHex8 (node_modules/d3/dist/d3.min.js:2:36595) ← .formatHex8 ye (node_modules/d3/dist/d3.min.js:2:30261)`                                                                                              |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data transition ← .shared transition (node_modules/d3/dist/d3.min.js:2:54138) ← .transition Object`                                                                                                                                   |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithPreparseData ← .trusted_function_data styleTween ← .shared styleTween (node_modules/d3/dist/d3.min.js:2:56166) ← .styleTween Object`                                                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithPreparseData ← .trusted_function_data easeVarying ← .shared easeVarying (node_modules/d3/dist/d3.min.js:2:58036) ← .easeVarying Object`                                                                                                                                   |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:60686) ← .transition Object`                                                                                                                      |
