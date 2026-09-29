# Heap snapshot

Allocated 3.15 MiB across 67,919 nodes and 265,376 edges.

| Category            |     % |      Size |  Nodes |
| ------------------- | ----: | --------: | -----: |
| Native              | 31.3% | 1,009 KiB |  6,015 |
| Code                | 23.3% |   752 KiB | 17,311 |
| Internal            | 12.2% |   393 KiB | 10,808 |
| Array               | 10.1% |   326 KiB |  6,704 |
| String              |  7.6% |   247 KiB | 13,100 |
| Object shape        |  6.9% |   224 KiB |  3,784 |
| Function            |  4.4% |   143 KiB |  4,945 |
| Object              |  3.5% |   112 KiB |  2,730 |
| Number              |  0.5% |  17.5 KiB |  2,172 |
| Concatenated string |  0.2% |  5.49 KiB |    281 |
| Regular expression  | <0.1% |     588 B |     21 |
| Symbol              | <0.1% |      16 B |     17 |
| Synthetic           |  0.0% |       0 B |     31 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
| 17.2% |  554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
|  3.3% |  106 KiB |        10 | `system / JSArrayBufferData`  | `<unknown>` |
|  2.9% | 93.8 KiB |     1,500 | `SVGAnimatedLength`           | `<unknown>` |
|  2.4% | 78.5 KiB |     1,723 | `Object`                      | `<unknown>` |
|  1.8% |   58 KiB |     3,706 | `Array`                       | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`           | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`    | `<unknown>` |
|  1.0% | 32.9 KiB |       203 | `SVGCircleElement`            | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`           | `<unknown>` |
|  0.7% | 23.3 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  0.6% | 19.6 KiB |       112 | `SVGRectElement`              | `<unknown>` |
|  0.5% | 14.8 KiB |       429 | `system / Context`            | `<unknown>` |
|  0.4% | 14.5 KiB |       232 | `SVGAnimatedLengthList`       | `<unknown>` |
|  0.4% | 13.3 KiB |       103 | `SVGTitleElement`             | `<unknown>` |
|  0.3% | 10.5 KiB |        61 | `SVGTextElement`              | `<unknown>` |
|  0.3% | 9.84 KiB |       126 | `Text`                        | `<unknown>` |
|  0.2% | 7.96 KiB |        49 | `SVGLineElement`              | `<unknown>` |
|  0.2% | 5.32 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  0.2% | 5.23 KiB |       103 | `Date`                        | `<unknown>` |
|  0.1% | 3.63 KiB |        58 | `SVGAnimatedNumberList`       | `<unknown>` |

#### Categories

##### Native

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
| 17.2% |  554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
|  3.3% |  106 KiB |        10 | `system / JSArrayBufferData`  | `<unknown>` |
|  2.9% | 93.8 KiB |     1,500 | `SVGAnimatedLength`           | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`           | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`    | `<unknown>` |
|  1.0% | 32.9 KiB |       203 | `SVGCircleElement`            | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`           | `<unknown>` |
|  0.7% | 23.3 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  0.6% | 19.6 KiB |       112 | `SVGRectElement`              | `<unknown>` |
|  0.4% | 14.5 KiB |       232 | `SVGAnimatedLengthList`       | `<unknown>` |
|  0.4% | 13.3 KiB |       103 | `SVGTitleElement`             | `<unknown>` |
|  0.3% | 10.5 KiB |        61 | `SVGTextElement`              | `<unknown>` |
|  0.3% | 9.84 KiB |       126 | `Text`                        | `<unknown>` |
|  0.2% | 7.96 KiB |        49 | `SVGLineElement`              | `<unknown>` |
|  0.2% | 5.32 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  0.1% | 3.63 KiB |        58 | `SVGAnimatedNumberList`       | `<unknown>` |
|  0.1% |  3.2 KiB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.1% | 3.17 KiB |        58 | `SVGAnimatedEnumeration`      | `<unknown>` |
| <0.1% | 1.02 KiB |         4 | `Performance`                 | `<unknown>` |
| <0.1% |  1,016 B |        10 | `Window`                      | `<unknown>` |

##### Object

|     % |     Size | Instances | Constructor            | Location                                  |
| ----: | -------: | --------: | ---------------------- | ----------------------------------------- |
|  2.4% | 78.5 KiB |     1,723 | `Object`               | `<unknown>`                               |
|  0.5% | 14.8 KiB |       429 | `system / Context`     | `<unknown>`                               |
|  0.2% | 5.23 KiB |       103 | `Date`                 | `<unknown>`                               |
|  0.1% | 3.34 KiB |       107 | `Qd`                   | `node_modules/d3/dist/d3.min.js:2:140541` |
| <0.1% |  1,020 B |        37 | `Error`                | `<unknown>`                               |
| <0.1% |  1,008 B |        36 | `TypedArray`           | `<unknown>`                               |
| <0.1% |    784 B |        28 | `qe`                   | `node_modules/d3/dist/d3.min.js:2:34624`  |
| <0.1% |    708 B |        15 | `ArrayBuffer`          | `<unknown>`                               |
| <0.1% |    260 B |         5 | `T`                    | `node_modules/d3/dist/d3.min.js:2:3159`   |
| <0.1% |    224 B |        12 | `Map`                  | `<unknown>`                               |
| <0.1% |    144 B |         4 | `Ar`                   | `node_modules/d3/dist/d3.min.js:2:40001`  |
| <0.1% |    140 B |         5 | `ye`                   | `node_modules/d3/dist/d3.min.js:2:30261`  |
| <0.1% |    128 B |         6 | `Set`                  | `<unknown>`                               |
| <0.1% |    104 B |         4 | `Promise`              | `<unknown>`                               |
| <0.1% |    100 B |         4 | `WeakSet`              | `<unknown>`                               |
| <0.1% |    100 B |         4 | `WeakMap`              | `<unknown>`                               |
| <0.1% |     96 B |         4 | `Generator`            | `<unknown>`                               |
| <0.1% |     84 B |         3 | `Tag`                  | `<unknown>`                               |
| <0.1% |     84 B |         3 | `DisposableStack`      | `<unknown>`                               |
| <0.1% |     84 B |         3 | `AsyncDisposableStack` | `<unknown>`                               |

##### Array

|     % |   Size | Instances | Constructor      | Location    |
| ----: | -----: | --------: | ---------------- | ----------- |
|  1.8% | 58 KiB |     3,706 | `Array`          | `<unknown>` |
| <0.1% |  600 B |        10 | `Float64Array`   | `<unknown>` |
| <0.1% |   84 B |         3 | `Array Iterator` | `<unknown>` |
| <0.1% |   60 B |         1 | `Float32Array`   | `<unknown>` |
| <0.1% |   60 B |         1 | `Uint32Array`    | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `system / ExternalStringData` (`<unknown>`)

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 98.5% |  546 KiB |         1 | `.2 / backing_store // https://d3js.org v7.8.5 Copyright 2010-2023 Mi…`   |
|  1.3% | 7.04 KiB |         1 | `.2 / backing_store globalThis.buildAndRetainDom = (\n  data,\n  passes…` |
| <0.1% |     65 B |         1 | `.1 / backing_store http://127.0.0.1:52789/node_modules/d3/dist/d3.mi…`   |
| <0.1% |     47 B |         1 | `.1 / backing_store http://127.0.0.1:52789/workload.mjs`                  |
| <0.1% |     44 B |         1 | `.1 / backing_store puppeteer___ariaQuerySelectorAll`                     |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                              |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 96.7% | 103 KiB |         1 | `.backing_store ArrayBuffer ← .buffer Float32Array ← .e system / Context`                                                         |
|  1.9% |   2 KiB |         1 | `.backing_store ArrayBuffer ← .buffer Uint32Array ← .Au system / Context`                                                         |
|  0.2% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |
|  0.2% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
|  0.2% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |

##### `SVGAnimatedLength` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                               |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------- |
| 0.1% | 128 B |         2 | `[6] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% |  64 B |         1 | `[10] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |  64 B |         1 | `[8] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% |  64 B |         1 | `[7] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% |  64 B |         1 | `[5] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------- |
| 21.3% | 16.7 KiB |       100 | `.user Object ← .__retained Window / http://127.0.0.1:52789`                            |
| 15.6% | 12.3 KiB |        73 | `.user Object ← .retweeted_status Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.4% |    296 B |         2 | `(GC root)`                                                                             |
|  0.2% |    140 B |         1 | `.m system / Context`                                                                   |
|  0.2% |    140 B |         1 | `.x system / Context`                                                                   |

##### `Array` (`<unknown>`)

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.4% | 212 B |         8 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |  16 B |         1 | `.raw Array`                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |  16 B |         1 | `.transition_info system / AllocationSite ← .(Bootstrapper) system / FeedbackVector ← .value system / FeedbackCell ← .feedback_cell eachBefore (node_modules/d3/dist/d3.min.js:2:141773) ← .eachBefore Object`                                                                                                                                                                              |
| <0.1% |  16 B |         1 | `.transition_info system / AllocationSite ← .(Bootstrapper) system / FeedbackVector ← .value system / FeedbackCell ← .feedback_cell st (node_modules/d3/dist/d3.min.js:2:10707) ← .st system / Context`                                                                                                                                                                                     |
| <0.1% |  16 B |         1 | `.transition_info system / AllocationSite ← .(Bootstrapper) system / FeedbackVector ← .value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← . system / FeedbackVector ← .value system / FeedbackCell ← . system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell (anonymous) (node_modules/d3/dist/d3.min.js:2:231984) ← .forceLink Object` |

##### `SVGAnimatedString` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                                                        |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.1% | 3.12 KiB |        57 | `[5] SVGTitleElement ← [8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.1% |     56 B |         1 | `[5] SVGTitleElement ← [8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |     56 B |         1 | `[10] SVGCircleElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                        |
| 0.1% |     56 B |         1 | `[10] SVGCircleElement ← [7] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                 |
| 0.1% |     56 B |         1 | `[11] SVGLineElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |

##### `SVGAnimatedTransformList` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                                   |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 6.3% | 2.38 KiB |        38 | `[12] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 0.3% |    128 B |         2 | `[1] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                         |
| 0.2% |     64 B |         1 | `[12] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 0.2% |     64 B |         1 | `[12] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.2% |     64 B |         1 | `[10] SVGLineElement ← [7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `SVGCircleElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 48.9% | 16.1 KiB |        98 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                          |
|  0.5% |    168 B |         1 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    168 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    168 B |         1 | `[7] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.5% |    168 B |         1 | `[7] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGAnimatedNumber` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 11.8% | 2.88 KiB |        46 | `[11] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  0.3% |     64 B |         1 | `[6] SVGPathElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
|  0.3% |     64 B |         1 | `[6] SVGPathElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                    |
|  0.3% |     64 B |         1 | `[11] SVGRectElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |     64 B |         1 | `[9] SVGLineElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |

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
|  0.1% |     16 B |         1 | `[9] InternalNode ← [1] InternalNode ← [1] InternalNode`                                       |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                                                                                                            |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 29.7% | 4.41 KiB |         4 | `(GC root)`                                                                                                                                                                                                                                     |
|  1.3% |    192 B |         3 | `.context l (node_modules/d3/dist/d3.min.js:2:155044) ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:11875) ← .__axis SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.7% |    104 B |         1 | `.t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:11875) ← .__axis SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                        |
|  0.4% |     60 B |         1 | `.context t ← .Deferred Object`                                                                                                                                                                                                                 |
|  0.3% |     48 B |         1 | `.previous system / Context`                                                                                                                                                                                                                    |

##### `SVGAnimatedLengthList` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                                |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 64 B |         1 | `[8] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% | 64 B |         1 | `[6] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% | 64 B |         1 | `[5] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% | 64 B |         1 | `[8] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.4% | 64 B |         1 | `[7] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGTitleElement` (`<unknown>`)

|     % |   Size | Instances | Path                                                                                                                                  |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 97.6% | 13 KiB |        98 | `[8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.0% |  136 B |         1 | `[8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |  136 B |         1 | `[8] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.2% |   28 B |         1 | `(GC root)`                                                                                                                           |
|  0.1% |   16 B |         1 | `[8] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                                              |

##### `SVGTextElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 73.7% | 7.73 KiB |        43 | `[8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  8.6% |    920 B |         5 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  3.4% |    368 B |         2 | `[8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.7% |    184 B |         1 | `[5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |    184 B |         1 | `[6] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 4.8% | 480 B |         6 | `[14] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `SVGLineElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 92.8% | 7.39 KiB |        43 | `[7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  6.5% |    528 B |         3 | `[7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |     28 B |         1 | `(GC root)`                                                                                                      |
|  0.2% |     16 B |         1 | `[7] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                         |
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
|  1.0% |     52 B |         1 | `.__data__ SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |     52 B |         1 | `.Xg system / Context`                                                                                                 |
|  1.0% |     52 B |         1 | `.Gg system / Context`                                                                                                 |

##### `SVGAnimatedNumberList` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 44.8% | 1.63 KiB |        26 | `[9] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  6.9% |    256 B |         4 | `[9] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  3.4% |    128 B |         2 | `[9] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.7% |     64 B |         1 | `[9] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |     64 B |         1 | `[9] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Qd` (`node_modules/d3/dist/d3.min.js:2:140541`)

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 99.2% | 3.31 KiB |       106 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`     |
|  0.8% |     28 B |         1 | `.prototype Up (node_modules/d3/dist/d3.min.js:2:147114) ← .Up system / Context` |

##### `HTMLDocument` (`<unknown>`)

|     % |     Size | Instances | Path         |
| ----: | -------: | --------: | ------------ |
| 99.5% | 3.18 KiB |         2 | `(GC root)`  |
|  0.5% |     16 B |         1 | `.155 array` |

##### `SVGAnimatedEnumeration` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% | 280 B |         5 | `[11] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Performance` (`<unknown>`)

|     % |    Size | Instances | Path                                                     |
| ----: | ------: | --------: | -------------------------------------------------------- |
| 96.9% | 1,012 B |         2 | `(GC root)`                                              |
|  1.5% |    16 B |         1 | `[6] InternalNode ← [1] InternalNode ← [1] InternalNode` |
|  1.5% |    16 B |         1 | `.385 array`                                             |

##### `Error` (`<unknown>`)

|    % | Size | Instances | Path                         |
| ---: | ---: | --------: | ---------------------------- |
| 5.5% | 56 B |         2 | `.prototype SuppressedError` |
| 5.5% | 56 B |         2 | `.prototype SuspendError`    |
| 2.7% | 28 B |         1 | `.prototype AggregateError`  |
| 2.7% | 28 B |         1 | `.prototype SyntaxError`     |
| 2.7% | 28 B |         1 | `.prototype TypeError`       |

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

|    % | Size | Instances | Path                                                                                                              |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 3.6% | 28 B |         1 | `.um system / Context`                                                                                            |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlOrRd Object` |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlOrBr Object` |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlGnBu Object` |
| 3.6% | 28 B |         1 | `.r system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateYlGn Object`   |

##### `ArrayBuffer` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                 |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------------------------- |
| 7.3% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .Gh system / Context` |
| 7.3% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |
| 7.3% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |
| 7.3% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
| 7.3% | 52 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |

##### `Float64Array` (`<unknown>`)

|     % | Size | Instances | Path                                                                          |
| ----: | ---: | --------: | ----------------------------------------------------------------------------- |
| 10.0% | 60 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .Gh system / Context` |
| 10.0% | 60 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |
| 10.0% | 60 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |
| 10.0% | 60 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
| 10.0% | 60 B |         1 | `._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |

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

|     % | Size | Instances | Path                                                                                                                        |
| ----: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------- |
| 41.7% | 60 B |         1 | `.n system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:46615) ← .interpolateCubehelixDefault Object` |
| 19.4% | 28 B |         1 | `.am system / Context`                                                                                                      |
| 19.4% | 28 B |         1 | `.n system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:46615) ← .interpolateWarm Object`             |
| 19.4% | 28 B |         1 | `.n system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:46615) ← .interpolateCool Object`             |

##### `ye` (`node_modules/d3/dist/d3.min.js:2:30261`)

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 140 B |         5 | `(GC root)` |

##### `Set` (`<unknown>`)

|     % | Size | Instances | Path                                                           |
| ----: | ---: | --------: | -------------------------------------------------------------- |
| 65.6% | 84 B |         3 | `(GC root)`                                                    |
| 12.5% | 16 B |         1 | `.re system / Context`                                         |
| 12.5% | 16 B |         1 | `.ne system / Context`                                         |
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

##### `Tag` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `DisposableStack` (`<unknown>`)

|      % | Size | Instances | Path                         |
| -----: | ---: | --------: | ---------------------------- |
| 100.0% | 84 B |         3 | `.prototype DisposableStack` |

##### `AsyncDisposableStack` (`<unknown>`)

|      % | Size | Instances | Path                              |
| -----: | ---: | --------: | --------------------------------- |
| 100.0% | 84 B |         3 | `.prototype AsyncDisposableStack` |

##### `Array Iterator` (`<unknown>`)

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 84 B |         3 | `(GC root)` |

##### `Float32Array` (`<unknown>`)

|      % | Size | Instances | Path                  |
| -----: | ---: | --------: | --------------------- |
| 100.0% | 60 B |         1 | `.e system / Context` |

##### `Uint32Array` (`<unknown>`)

|      % | Size | Instances | Path                   |
| -----: | ---: | --------: | ---------------------- |
| 100.0% | 60 B |         1 | `.Au system / Context` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                       | Location    |
| ----: | -------: | --------: | --------------------------------- | ----------- |
| 33.7% | 1.06 MiB |     1,723 | `Object`                          | `<unknown>` |
| 20.1% |  648 KiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>` |
| 18.3% |  592 KiB |     3,706 | `Array`                           | `<unknown>` |
| 17.2% |  554 KiB |        47 | `system / ExternalStringData`     | `<unknown>` |
| 14.9% |  480 KiB |         4 | `SVGSVGElement`                   | `<unknown>` |
| 14.7% |  474 KiB |       160 | `SVGGElement`                     | `<unknown>` |
| 13.9% |  450 KiB |       429 | `system / Context`                | `<unknown>` |
|  3.7% |  120 KiB |       203 | `SVGCircleElement`                | `<unknown>` |
|  3.4% |  108 KiB |        15 | `ArrayBuffer`                     | `<unknown>` |
|  3.3% |  106 KiB |        10 | `system / JSArrayBufferData`      | `<unknown>` |
|  3.2% |  103 KiB |        37 | `SVGPathElement`                  | `<unknown>` |
|  3.2% |  103 KiB |         1 | `Float32Array`                    | `<unknown>` |
|  2.9% | 93.8 KiB |     1,500 | `SVGAnimatedLength`               | `<unknown>` |
|  2.6% | 83.8 KiB |       112 | `SVGRectElement`                  | `<unknown>` |
|  2.3% | 74.2 KiB |        10 | `Window`                          | `<unknown>` |
|  1.5% | 47.8 KiB |         1 | `Window / ://`                    | `<unknown>` |
|  1.4% | 45.5 KiB |        61 | `SVGTextElement`                  | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`               | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`        | `<unknown>` |
|  0.9% | 28.8 KiB |        49 | `SVGLineElement`                  | `<unknown>` |

#### Categories

##### Native

|     % |     Size | Instances | Constructor                   | Location    |
| ----: | -------: | --------: | ----------------------------- | ----------- |
| 17.2% |  554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
| 14.9% |  480 KiB |         4 | `SVGSVGElement`               | `<unknown>` |
| 14.7% |  474 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  3.7% |  120 KiB |       203 | `SVGCircleElement`            | `<unknown>` |
|  3.3% |  106 KiB |        10 | `system / JSArrayBufferData`  | `<unknown>` |
|  3.2% |  103 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  2.9% | 93.8 KiB |     1,500 | `SVGAnimatedLength`           | `<unknown>` |
|  2.6% | 83.8 KiB |       112 | `SVGRectElement`              | `<unknown>` |
|  2.3% | 74.2 KiB |        10 | `Window`                      | `<unknown>` |
|  1.4% | 45.5 KiB |        61 | `SVGTextElement`              | `<unknown>` |
|  1.2% | 38.6 KiB |       705 | `SVGAnimatedString`           | `<unknown>` |
|  1.2% | 37.8 KiB |       605 | `SVGAnimatedTransformList`    | `<unknown>` |
|  0.9% | 28.8 KiB |        49 | `SVGLineElement`              | `<unknown>` |
|  0.9% | 28.7 KiB |       103 | `SVGTitleElement`             | `<unknown>` |
|  0.8% | 24.3 KiB |       389 | `SVGAnimatedNumber`           | `<unknown>` |
|  0.4% | 14.5 KiB |       232 | `SVGAnimatedLengthList`       | `<unknown>` |
|  0.3% | 9.84 KiB |       126 | `Text`                        | `<unknown>` |
|  0.2% | 5.23 KiB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.1% | 3.63 KiB |        58 | `SVGAnimatedNumberList`       | `<unknown>` |
|  0.1% | 3.17 KiB |        58 | `SVGAnimatedEnumeration`      | `<unknown>` |

##### Object

|     % |     Size | Instances | Constructor                       | Location                                  |
| ----: | -------: | --------: | --------------------------------- | ----------------------------------------- |
| 33.7% | 1.06 MiB |     1,723 | `Object`                          | `<unknown>`                               |
| 20.1% |  648 KiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>`                               |
| 13.9% |  450 KiB |       429 | `system / Context`                | `<unknown>`                               |
|  3.4% |  108 KiB |        15 | `ArrayBuffer`                     | `<unknown>`                               |
|  1.5% | 47.8 KiB |         1 | `Window / ://`                    | `<unknown>`                               |
|  0.4% | 12.5 KiB |       107 | `Qd`                              | `node_modules/d3/dist/d3.min.js:2:140541` |
|  0.2% | 6.45 KiB |         1 | `Object / `                       | `<unknown>`                               |
|  0.2% | 5.91 KiB |        37 | `Error`                           | `<unknown>`                               |
|  0.2% | 5.64 KiB |         1 | `Document`                        | `<unknown>`                               |
|  0.2% | 5.23 KiB |        36 | `TypedArray`                      | `<unknown>`                               |
|  0.2% | 5.23 KiB |       103 | `Date`                            | `<unknown>`                               |
|  0.2% | 5.13 KiB |        12 | `Map`                             | `<unknown>`                               |
|  0.2% | 5.09 KiB |         3 | `Math`                            | `<unknown>`                               |
|  0.1% | 4.79 KiB |         3 | `console`                         | `<unknown>`                               |
|  0.1% | 4.64 KiB |         1 | `HTMLElement`                     | `<unknown>`                               |
|  0.1% | 4.48 KiB |         3 | `Intl.Locale`                     | `<unknown>`                               |
|  0.1% | 4.34 KiB |         3 | `String`                          | `<unknown>`                               |
|  0.1% | 4.02 KiB |         3 | `DataView`                        | `<unknown>`                               |
|  0.1% | 3.98 KiB |         5 | `ye`                              | `node_modules/d3/dist/d3.min.js:2:30261`  |
|  0.1% | 3.42 KiB |         1 | `Element`                         | `<unknown>`                               |

##### Array

|     % |     Size | Instances | Constructor      | Location    |
| ----: | -------: | --------: | ---------------- | ----------- |
| 18.3% |  592 KiB |     3,706 | `Array`          | `<unknown>` |
|  3.2% |  103 KiB |         1 | `Float32Array`   | `<unknown>` |
|  0.1% | 2.71 KiB |        10 | `Float64Array`   | `<unknown>` |
|  0.1% | 2.11 KiB |         1 | `Uint32Array`    | `<unknown>` |
| <0.1% |    528 B |         3 | `Array Iterator` | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.9% |  597 KiB |         1 | `.__retained Window / http://127.0.0.1:52789`                                                                                                  |
| 30.5% |  332 KiB |         4 | `(GC root)`                                                                                                                                    |
|  2.8% |   30 KiB |         1 | `.prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                                |
|  2.0% | 22.1 KiB |         1 | `.prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                                                                       |
|  1.1% | 11.8 KiB |         1 | `.__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `Window / http://127.0.0.1:52789` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 648 KiB |         1 | `(GC root)` |

##### `Array` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81.0% |  480 KiB |         1 | `.detached Object ← .__retained Window / http://127.0.0.1:52789`                                                                                                                             |
|  2.0% | 11.8 KiB |         1 | `.coordinates Object ← .__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                         |
|  1.7% | 10.2 KiB |         1 | `[1] Array ← .coordinates Object ← .__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`             |
|  1.7% | 10.2 KiB |         1 | `[0] Array ← [1] Array ← .coordinates Object ← .__data__ SVGPathElement ← [5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.4% | 8.13 KiB |         1 | `.coordinates Object ← .__data__ SVGPathElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                           |

##### `system / ExternalStringData` (`<unknown>`)

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 98.5% |  546 KiB |         1 | `.2 / backing_store // https://d3js.org v7.8.5 Copyright 2010-2023 Mi…`   |
|  1.3% | 7.04 KiB |         1 | `.2 / backing_store globalThis.buildAndRetainDom = (\n  data,\n  passes…` |
| <0.1% |     65 B |         1 | `.1 / backing_store http://127.0.0.1:52789/node_modules/d3/dist/d3.mi…`   |
| <0.1% |     47 B |         1 | `.1 / backing_store http://127.0.0.1:52789/workload.mjs`                  |
| <0.1% |     44 B |         1 | `.1 / backing_store puppeteer___ariaQuerySelectorAll`                     |

##### `SVGSVGElement` (`<unknown>`)

|     % |    Size | Instances | Path                                                                         |
| ----: | ------: | --------: | ---------------------------------------------------------------------------- |
| 99.8% | 480 KiB |         1 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.2% |   780 B |         1 | `(GC root)`                                                                  |
| <0.1% |    16 B |         1 | `[5] InternalNode ← [1] InternalNode ← [1] InternalNode`                     |
| <0.1% |    16 B |         1 | `.491 array`                                                                 |

##### `SVGGElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 70.5% |  334 KiB |        52 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
| 23.7% |  112 KiB |         1 | `[10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 20.9% |   99 KiB |         1 | `[11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.1% | 5.24 KiB |         3 | `[8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  0.2% | 1.12 KiB |         1 | `[3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `system / Context` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                          |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------- |
| 83.8% |  377 KiB |         4 | `(GC root)`                                                                                   |
|  1.3% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateInferno Object` |
|  1.3% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateMagma Object`   |
|  1.3% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolatePlasma Object`  |
|  1.3% | 6.05 KiB |         1 | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateViridis Object` |

##### `SVGCircleElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 52.7% | 63.2 KiB |        98 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                          |
|  0.5% |    660 B |         1 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    660 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |
|  0.5% |    564 B |         1 | `[7] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.5% |    564 B |         1 | `[7] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `ArrayBuffer` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 94.8% |  103 KiB |         1 | `.buffer Float32Array ← .e system / Context`                                                         |
|  1.9% | 2.05 KiB |         1 | `.buffer Uint32Array ← .Au system / Context`                                                         |
|  1.5% | 1.57 KiB |         3 | `(GC root)`                                                                                          |
|  0.3% |    308 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .Gh system / Context` |
|  0.3% |    308 B |         1 | `.buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .ih system / Context` |

##### `system / JSArrayBufferData` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                                                              |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 96.7% | 103 KiB |         1 | `.backing_store ArrayBuffer ← .buffer Float32Array ← .e system / Context`                                                         |
|  1.9% |   2 KiB |         1 | `.backing_store ArrayBuffer ← .buffer Uint32Array ← .Au system / Context`                                                         |
|  0.2% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .as system / Context` |
|  0.2% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .us system / Context` |
|  0.2% |   256 B |         1 | `.backing_store ArrayBuffer ← .buffer Float64Array ← ._partials T (node_modules/d3/dist/d3.min.js:2:3159) ← .rh system / Context` |

##### `SVGPathElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 82.2% | 84.8 KiB |        20 | `[11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 11.8% | 12.2 KiB |         1 | `[5] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.3% | 1.35 KiB |         1 | `[6] SVGGElement ← [11] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.4% |    456 B |         1 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                      |
|  0.4% |    456 B |         1 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |

##### `Float32Array` (`<unknown>`)

|      % |    Size | Instances | Path                  |
| -----: | ------: | --------: | --------------------- |
| 100.0% | 103 KiB |         1 | `.e system / Context` |

##### `SVGAnimatedLength` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                               |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------- |
| 0.1% | 128 B |         2 | `[6] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% |  64 B |         1 | `[10] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |  64 B |         1 | `[8] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% |  64 B |         1 | `[7] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
| 0.1% |  64 B |         1 | `[5] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |

##### `SVGRectElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 95.8% | 80.2 KiB |       105 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.9% | 1.62 KiB |         2 | `[3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.9% | 1.62 KiB |         2 | `[4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |    292 B |         1 | `(GC root)`                                                                                    |
| <0.1% |     16 B |         1 | `[9] InternalNode ← [1] InternalNode ← [1] InternalNode`                                       |

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
| 8.1% | 3.12 KiB |        57 | `[5] SVGTitleElement ← [8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.1% |     56 B |         1 | `[5] SVGTitleElement ← [8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.1% |     56 B |         1 | `[10] SVGCircleElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                                        |
| 0.1% |     56 B |         1 | `[10] SVGCircleElement ← [7] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                 |
| 0.1% |     56 B |         1 | `[11] SVGLineElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                        |

##### `SVGAnimatedTransformList` (`<unknown>`)

|    % |     Size | Instances | Path                                                                                                                                   |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 6.3% | 2.38 KiB |        38 | `[12] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 0.3% |    128 B |         2 | `[1] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                         |
| 0.2% |     64 B |         1 | `[12] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 0.2% |     64 B |         1 | `[12] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.2% |     64 B |         1 | `[10] SVGLineElement ← [7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |

##### `SVGLineElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 92.6% | 26.7 KiB |        43 | `[7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  6.5% | 1.86 KiB |         3 | `[7] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.8% |    244 B |         1 | `(GC root)`                                                                                                      |
|  0.1% |     16 B |         1 | `[7] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                         |
|  0.1% |     16 B |         1 | `.509 array`                                                                                                     |

##### `SVGTitleElement` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 97.4% | 27.9 KiB |        98 | `[8] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.0% |    292 B |         1 | `[8] SVGGElement ← [4] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |    292 B |         1 | `[8] SVGGElement ← [3] SVGGElement ← [10] SVGSVGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.5% |    148 B |         1 | `(GC root)`                                                                                                                           |
|  0.1% |     16 B |         1 | `[8] InternalNode ← [1] InternalNode ← [1] InternalNode`                                                                              |

##### `SVGAnimatedNumber` (`<unknown>`)

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 11.8% | 2.88 KiB |        46 | `[11] SVGRectElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  0.3% |     64 B |         1 | `[6] SVGPathElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |
|  0.3% |     64 B |         1 | `[6] SVGPathElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                    |
|  0.3% |     64 B |         1 | `[11] SVGRectElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  0.3% |     64 B |         1 | `[9] SVGLineElement ← [7] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`  |

##### `SVGAnimatedLengthList` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                                |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 64 B |         1 | `[8] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% | 64 B |         1 | `[6] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% | 64 B |         1 | `[5] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.4% | 64 B |         1 | `[8] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.4% | 64 B |         1 | `[7] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Qd` (`node_modules/d3/dist/d3.min.js:2:140541`)

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 98.8% | 12.4 KiB |       106 | `[0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`     |
|  1.2% |    148 B |         1 | `.prototype Up (node_modules/d3/dist/d3.min.js:2:147114) ← .Up system / Context` |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 4.8% | 480 B |         6 | `[14] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [3] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 0.8% |  80 B |         1 | `[14] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Object / ` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 6.45 KiB |         1 | `(GC root)` |

##### `Error` (`<unknown>`)

|    % |  Size | Instances | Path                         |
| ---: | ----: | --------: | ---------------------------- |
| 5.3% | 320 B |         2 | `.prototype SuppressedError` |
| 5.3% | 320 B |         2 | `.prototype SuspendError`    |
| 4.9% | 296 B |         1 | `.p system / Context`        |
| 2.6% | 160 B |         1 | `.prototype AggregateError`  |
| 2.6% | 160 B |         1 | `.prototype SyntaxError`     |

##### `Document` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 5.64 KiB |         1 | `(GC root)` |

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
|  1.0% |     52 B |         1 | `.__data__ SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.0% |     52 B |         1 | `.Xg system / Context`                                                                                                 |
|  1.0% |     52 B |         1 | `.Gg system / Context`                                                                                                 |

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

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 44.8% | 1.63 KiB |        26 | `[9] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  6.9% |    256 B |         4 | `[9] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
|  3.4% |    128 B |         2 | `[9] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
|  1.7% |     64 B |         1 | `[9] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
|  1.7% |     64 B |         1 | `[9] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

##### `Element` (`<unknown>`)

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 3.42 KiB |         1 | `(GC root)` |

##### `SVGAnimatedEnumeration` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% | 280 B |         5 | `[11] SVGTextElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                                     |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [8] SVGGElement ← [8] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789` |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [4] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |
| 1.7% |  56 B |         1 | `[11] SVGTextElement ← [5] SVGGElement ← [0] Array ← .detached Object ← .__retained Window / http://127.0.0.1:52789`                   |

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

|    % | Retained | Instances | Paths | Name          | Location                                  | Example path                                                                                                        |
| ---: | -------: | --------: | ----: | ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1.0% |   31 KiB |         1 |     1 | `Su`          | `node_modules/d3/dist/d3.min.js:2:82035`  | `.Su system / Context`                                                                                              |
| 0.8% | 24.3 KiB |         4 |     4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:186157` | `.interpolateInferno Object`                                                                                        |
| 0.7% |   23 KiB |         1 |     1 | `qu`          | `node_modules/d3/dist/d3.min.js:2:87903`  | `(GC root)`                                                                                                         |
| 0.7% | 21.6 KiB |         1 |     1 | `update`      | `node_modules/d3/dist/d3.min.js:2:82533`  | `.update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                    |
| 0.6% | 18.7 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113`  | `(GC root)`                                                                                                         |
| 0.4% | 12.9 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:231984` | `.forceLink Object`                                                                                                 |
| 0.4% | 12.7 KiB |         1 |     1 | `Lu`          | `node_modules/d3/dist/d3.min.js:2:94637`  | `.Delaunay Object`                                                                                                  |
| 0.4% | 11.8 KiB |        27 |    27 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:41766`  | `.interpolateBrBG Object`                                                                                           |
| 0.4% | 11.4 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:223060` | `.contourDensity Object`                                                                                            |
| 0.3% |   11 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:233399` | `.forceManyBody Object`                                                                                             |
| 0.3% |   11 KiB |         1 |     1 | `Q`           | `node_modules/d3/dist/d3.min.js:2:6993`   | `.bin Object`                                                                                                       |
| 0.3% | 9.69 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:230973` | `.forceCollide Object`                                                                                              |
| 0.3% | 9.39 KiB |        81 |    81 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:40205`  | `.o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object` |
| 0.3% | 8.99 KiB |         1 |     1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235388` | `.forceSimulation Object`                                                                                           |
| 0.3% |  8.4 KiB |         1 |     1 | `_init`       | `node_modules/d3/dist/d3.min.js:2:94865`  | `._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                         |
| 0.2% | 7.86 KiB |        14 |    14 | `safe`        | `extensions::SafeBuiltins:26:22`          | `.<symbol extensions::SafeBuiltins::Array> Window / http://127.0.0.1:52789`                                         |
| 0.2% | 7.48 KiB |        27 |     9 | `i`           | `node_modules/d3/dist/d3.min.js:2:159037` | `(GC root)`                                                                                                         |
| 0.2% | 7.39 KiB |         1 |     1 | `_init`       | `node_modules/d3/dist/d3.min.js:2:88246`  | `._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                            |
| 0.2% | 7.15 KiB |        44 |    20 | `(anonymous)` | `<unknown>`                               | `(GC root)`                                                                                                         |
| 0.2% | 6.95 KiB |         1 |     1 | `ed`          | `node_modules/d3/dist/d3.min.js:2:131060` | `.ed system / Context`                                                                                              |

### Retained

Nodes ranked by contribution to each function's retained size.

#### `Su` (`node_modules/d3/dist/d3.min.js:2:82035`)

|     % |     Self | Name                                 | Path                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.7% | 13.8 KiB | `(instruction stream for update)`    | `.instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                    |
|  8.9% | 2.75 KiB | `system / BytecodeArray`             | `.interpreter_data (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                      |
|  8.1% |  2.5 KiB | `(instruction stream for _legalize)` | `.instruction_stream (code for _legalize) ← .trusted_function_data _legalize ← .shared _legalize (node_modules/d3/dist/d3.min.js:2:85298) ← ._legalize Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                        |
|  6.2% | 1.93 KiB | `system / FeedbackVector`            | `.value system / FeedbackCell ← .feedback_cell update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                                                      |
|  2.8% |    892 B | `system / TrustedByteArray`          | `.relocation_info (instruction stream for update) ← .instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:186157`)

|    % |     Self | Name                | Path                                                                                                                                  |
| ---: | -------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateInferno Object` |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateMagma Object`   |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolatePlasma Object`  |
| 4.1% | 1.01 KiB | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateViridis Object` |
| 0.1% |     24 B | `system / Context`  | `.context (anonymous) (node_modules/d3/dist/d3.min.js:2:186157) ← .interpolateInferno Object`                                         |

#### `qu` (`node_modules/d3/dist/d3.min.js:2:87903`)

|     % |     Self | Name                                      | Path                                                                                                                                                                                                                                |
| ----: | -------: | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% | 4.56 KiB | `(instruction stream for _init)`          | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                             |
| 15.1% | 3.47 KiB | `(instruction stream for _clipSegment)`   | `.instruction_stream (code for _clipSegment) ← .trusted_function_data _clipSegment ← .shared _clipSegment (node_modules/d3/dist/d3.min.js:2:92064) ← ._clipSegment Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)` |
| 10.3% | 2.38 KiB | `(instruction stream for render)`         | `.instruction_stream (code for render) ← .trusted_function_data render ← .shared render (node_modules/d3/dist/d3.min.js:2:88990) ← .render Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                         |
|  3.9% |    908 B | `system / BytecodeArray`                  | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                               |
|  3.4% |    800 B | `(instruction stream for _renderSegment)` | `.instruction_stream (code for _renderSegment) ← .code _renderSegment (node_modules/d3/dist/d3.min.js:2:90138) ← ._renderSegment Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                   |

#### `update` (`node_modules/d3/dist/d3.min.js:2:82533`)

|     % |     Self | Name                              | Path                                                                                                                                                                                                                                                                                  |
| ----: | -------: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64.0% | 13.8 KiB | `(instruction stream for update)` | `.instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                    |
| 12.7% | 2.75 KiB | `system / BytecodeArray`          | `.interpreter_data (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                      |
|  8.9% | 1.93 KiB | `system / FeedbackVector`         | `.value system / FeedbackCell ← .feedback_cell update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                                                      |
|  4.0% |    892 B | `system / TrustedByteArray`       | `.relocation_info (instruction stream for update) ← .instruction_stream (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context` |
|  3.9% |    872 B | `system / TrustedByteArray`       | `.bytecode_offset_table (code for update) ← .trusted_function_data update ← .shared update (node_modules/d3/dist/d3.min.js:2:82533) ← .update Object ← .prototype Su (node_modules/d3/dist/d3.min.js:2:82035) ← .Su system / Context`                                                 |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|     % |     Self | Name                           | Path                                                                                                                                  |
| ----: | -------: | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 60.6% | 11.3 KiB | `code`                         | `.instruction_stream (code) ← .code (anonymous) (node_modules/d3/dist/d3.min.js:2:77113)`                                             |
| 24.6% |  4.6 KiB | `system / TrustedByteArray`    | `.<dummy> system / ProtectedFixedArray ← .deoptimization_data (code) ← .code (anonymous) (node_modules/d3/dist/d3.min.js:2:77113)`    |
| 12.0% | 2.25 KiB | `system / ProtectedFixedArray` | `.deoptimization_data (code) ← .code (anonymous) (node_modules/d3/dist/d3.min.js:2:77113)`                                            |
|  1.0% |    196 B | `system / TrustedByteArray`    | `.relocation_info code ← .instruction_stream (code) ← .code (anonymous) (node_modules/d3/dist/d3.min.js:2:77113)`                     |
|  0.9% |    168 B | `system / TrustedByteArray`    | `.(Builtins) system / ProtectedFixedArray ← .deoptimization_data (code) ← .code (anonymous) (node_modules/d3/dist/d3.min.js:2:77113)` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:231984`)

|     % |     Self | Name                         | Path                                                                              |
| ----: | -------: | ---------------------------- | --------------------------------------------------------------------------------- |
| 21.4% | 2.75 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .forceLink Object` |
| 15.3% | 1.97 KiB | `(instruction stream for l)` | `.instruction_stream (code for l) ← .trusted_function_data l ← .forceLink Object` |
|  4.6% |    608 B | `(instruction stream for p)` | `.instruction_stream (code for p) ← .trusted_function_data p ← .forceLink Object` |
|  4.6% |    608 B | `(instruction stream for d)` | `.instruction_stream (code for d) ← .trusted_function_data d ← .forceLink Object` |
|  3.2% |    424 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .forceLink Object`   |

#### `Lu` (`node_modules/d3/dist/d3.min.js:2:94637`)

|     % |     Self | Name                             | Path                                                                                                                                                                                                                                                                         |
| ----: | -------: | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35.9% | 4.56 KiB | `(instruction stream for _init)` | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                   |
|  7.2% |    936 B | `system / BytecodeArray`         | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                     |
|  6.5% |    848 B | `system / FeedbackVector`        | `.value system / FeedbackCell ← .feedback_cell _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                                                   |
|  6.4% |    832 B | `(BASELINE instruction stream)`  | `.instruction_stream (BASELINE code) ← .trusted_function_data (shared function info) ← .from Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                                                                                 |
|  3.0% |    392 B | `system / TrustedByteArray`      | `.relocation_info (instruction stream for _init) ← .instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:41766`)

|    % | Self | Name                | Path                                                                                                                                                                                                                    |
| ---: | ---: | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .u system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateBrBG Object` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateBrBG Object` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateBrBG Object` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .u system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolatePRGn Object` |
| 0.4% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolatePRGn Object` |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:223060`)

|     % |     Self | Name                         | Path                                                                                                                                                                                                       |
| ----: | -------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.2% | 2.88 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .contourDensity Object`                                                                                                                     |
|  5.5% |    648 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .contourDensity Object`                                                                                                                       |
|  4.1% |    480 B | `(instruction stream for v)` | `.instruction_stream (code for v) ← .trusted_function_data v ← .contourDensity Object`                                                                                                                     |
|  4.0% |    464 B | `system / FeedbackVector`    | `.value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell (anonymous) (node_modules/d3/dist/d3.min.js:2:223060) ← .contourDensity Object` |
|  2.5% |    292 B | `system / BytecodeArray`     | `.trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:223060) ← .contourDensity Object`                                                                   |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:233399`)

|     % |     Self | Name                         | Path                                                                                  |
| ----: | -------: | ---------------------------- | ------------------------------------------------------------------------------------- |
| 23.2% | 2.56 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .forceManyBody Object` |
| 13.0% | 1.44 KiB | `(instruction stream for l)` | `.instruction_stream (code for l) ← .trusted_function_data l ← .forceManyBody Object` |
|  7.6% |    864 B | `(instruction stream for f)` | `.instruction_stream (code for f) ← .trusted_function_data f ← .forceManyBody Object` |
|  6.8% |    768 B | `(instruction stream for s)` | `.instruction_stream (code for s) ← .trusted_function_data s ← .forceManyBody Object` |
|  4.7% |    536 B | `system / BytecodeArray`     | `.interpreter_data (code for h) ← .trusted_function_data h ← .forceManyBody Object`   |

#### `Q` (`node_modules/d3/dist/d3.min.js:2:6993`)

|     % |     Self | Name                         | Path                                                                                                                                                                                |
| ----: | -------: | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 59.5% | 6.56 KiB | `(instruction stream for r)` | `.instruction_stream (code for r) ← .trusted_function_data r ← .bin Object`                                                                                                         |
| 10.5% | 1.16 KiB | `system / BytecodeArray`     | `.interpreter_data (code for r) ← .trusted_function_data r ← .bin Object`                                                                                                           |
|  7.5% |    852 B | `system / FeedbackVector`    | `.value system / FeedbackCell ← .<dummy> system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell Q (node_modules/d3/dist/d3.min.js:2:6993) ← .bin Object` |
|  4.3% |    488 B | `system / TrustedByteArray`  | `.bytecode_offset_table (code for r) ← .trusted_function_data r ← .bin Object`                                                                                                      |
|  4.2% |    476 B | `system / TrustedByteArray`  | `.relocation_info (instruction stream for r) ← .instruction_stream (code for r) ← .trusted_function_data r ← .bin Object`                                                           |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:230973`)

|     % |     Self | Name                         | Path                                                                                 |
| ----: | -------: | ---------------------------- | ------------------------------------------------------------------------------------ |
| 18.1% | 1.75 KiB | `(instruction stream for g)` | `.instruction_stream (code for g) ← .trusted_function_data g ← .forceCollide Object` |
| 17.7% | 1.72 KiB | `(instruction stream for a)` | `.instruction_stream (code for a) ← .trusted_function_data a ← .forceCollide Object` |
|  7.7% |    768 B | `(instruction stream for c)` | `.instruction_stream (code for c) ← .trusted_function_data c ← .forceCollide Object` |
|  7.7% |    768 B | `(instruction stream for u)` | `.instruction_stream (code for u) ← .trusted_function_data u ← .forceCollide Object` |
|  4.3% |    428 B | `system / BytecodeArray`     | `.interpreter_data (code for g) ← .trusted_function_data g ← .forceCollide Object`   |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:40205`)

|    % | Self | Name                | Path                                                                                                                                                                                                                        |
| ---: | ---: | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object` |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object` |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .u system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateSpectral Object` |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .o system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateRdYlGn Object`   |
| 0.5% | 52 B | `(object elements)` | `.elements Array ← .t system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:40205) ← .a system / Context ← .context (anonymous) (node_modules/d3/dist/d3.min.js:2:41766) ← .interpolateRdYlGn Object`   |

#### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:235388`)

|     % |     Self | Name                         | Path                                                                                                                                                                                                           |
| ----: | -------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.8% | 1.69 KiB | `(instruction stream for h)` | `.instruction_stream (code for h) ← .trusted_function_data h ← .forceSimulation Object`                                                                                                                        |
| 17.4% | 1.56 KiB | `(instruction stream for d)` | `.instruction_stream (code for d) ← .trusted_function_data d ← .forceSimulation Object`                                                                                                                        |
|  3.3% |    304 B | `system / BytecodeArray`     | `.trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:235388) ← .forceSimulation Object`                                                                      |
|  3.0% |    276 B | `system / BytecodeArray`     | `.interpreter_data (code for d) ← .trusted_function_data d ← .forceSimulation Object`                                                                                                                          |
|  2.8% |    260 B | `system / FeedbackVector`    | `.value system / FeedbackCell ← .(GC roots) system / ClosureFeedbackCellArray ← .value system / FeedbackCell ← .feedback_cell (anonymous) (node_modules/d3/dist/d3.min.js:2:235388) ← .forceSimulation Object` |

#### `_init` (`node_modules/d3/dist/d3.min.js:2:94865`)

|     % |     Self | Name                             | Path                                                                                                                                                                                                                                                                         |
| ----: | -------: | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.3% | 4.56 KiB | `(instruction stream for _init)` | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                   |
| 10.9% |    936 B | `system / BytecodeArray`         | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                     |
|  9.9% |    848 B | `system / FeedbackVector`        | `.value system / FeedbackCell ← .feedback_cell _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                                                   |
|  4.6% |    392 B | `system / TrustedByteArray`      | `.relocation_info (instruction stream for _init) ← .instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object` |
|  4.1% |    356 B | `system / TrustedByteArray`      | `.bytecode_offset_table (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:94865) ← ._init Object ← .prototype Lu (node_modules/d3/dist/d3.min.js:2:94637) ← .Delaunay Object`                                                |

#### `safe` (`extensions::SafeBuiltins:26:22`)

|    % |  Self | Name                       | Path                                                                                                                                                  |
| ---: | ----: | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / http://127.0.0.1:52789`                       |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / ://`                                          |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / http://127.0.0.1:52789` |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://`                    |
| 1.9% | 152 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::String> Window / http://127.0.0.1:52789` |

#### `i` (`node_modules/d3/dist/d3.min.js:2:159037`)

|    % | Self | Name                     | Path                                                                                                                 |
| ---: | ---: | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 48 B | `(shared function info)` | `.shared (anonymous) (node_modules/d3/dist/d3.min.js:2:159886) ← .every i (node_modules/d3/dist/d3.min.js:2:159037)` |
| 0.6% | 48 B | `(shared function info)` | `.shared (anonymous) (node_modules/d3/dist/d3.min.js:2:162441) ← .every i (node_modules/d3/dist/d3.min.js:2:159037)` |
| 0.6% | 48 B | `(shared function info)` | `.shared (anonymous) (node_modules/d3/dist/d3.min.js:2:162824) ← .every i (node_modules/d3/dist/d3.min.js:2:159037)` |
| 0.4% | 28 B | `(anonymous)`            | `.every i (node_modules/d3/dist/d3.min.js:2:159037)`                                                                 |
| 0.4% | 28 B | `(anonymous)`            | `.count i (node_modules/d3/dist/d3.min.js:2:159037)`                                                                 |

#### `_init` (`node_modules/d3/dist/d3.min.js:2:88246`)

|     % |     Self | Name                             | Path                                                                                                                                                                                                                                                      |
| ----: | -------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61.7% | 4.56 KiB | `(instruction stream for _init)` | `.instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                                   |
| 12.0% |    908 B | `system / BytecodeArray`         | `.interpreter_data (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                                     |
|  9.8% |    740 B | `system / FeedbackVector`        | `.value system / FeedbackCell ← .feedback_cell _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                                                                   |
|  4.9% |    372 B | `system / TrustedByteArray`      | `.bytecode_offset_table (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)`                                                |
|  4.8% |    360 B | `system / TrustedByteArray`      | `.relocation_info (instruction stream for _init) ← .instruction_stream (code for _init) ← .trusted_function_data _init ← .shared _init (node_modules/d3/dist/d3.min.js:2:88246) ← ._init Object ← .prototype qu (node_modules/d3/dist/d3.min.js:2:87903)` |

#### `(anonymous)` (`<unknown>`)

|    % |  Self | Name                                                   | Path                                                                                                                |
| ---: | ----: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                      |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                      |
| 1.9% | 140 B | `system / DescriptorArray`                             | `.descriptors system / Map ← .map (anonymous)`                                                                      |
| 1.4% | 104 B | `(function anonymous(\n) {\nreturn () => typeof glob…` | `.source code ← .script (shared function info) ← .shared (anonymous) ← .6 array ← .table Map ← .L system / Context` |
| 1.1% |  80 B | `(object properties)`                                  | `.properties Object ← .prototype (anonymous) ← .puppeteer___ariaQuerySelectorAll Window / http://127.0.0.1:52789`   |

#### `ed` (`node_modules/d3/dist/d3.min.js:2:131060`)

|     % |     Self | Name                               | Path                                                                                                                                                                                                                                     |
| ----: | -------: | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.3% | 1.69 KiB | `(instruction stream for point)`   | `.instruction_stream (code for point) ← .trusted_function_data point ← .shared point (node_modules/d3/dist/d3.min.js:2:131561) ← .point Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131060) ← .ed system / Context`         |
|  4.2% |    300 B | `system / BytecodeArray`           | `.interpreter_data (code for point) ← .trusted_function_data point ← .shared point (node_modules/d3/dist/d3.min.js:2:131561) ← .point Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131060) ← .ed system / Context`           |
|  4.0% |    288 B | `(instruction stream for lineEnd)` | `.instruction_stream (code for lineEnd) ← .trusted_function_data lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:131507) ← .lineEnd Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131060) ← .ed system / Context` |
|  3.2% |    228 B | `system / FeedbackVector`          | `.value system / FeedbackCell ← .feedback_cell point (node_modules/d3/dist/d3.min.js:2:131561) ← .point Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131060) ← .ed system / Context`                                         |
|  2.7% |    192 B | `(instruction stream for result)`  | `.instruction_stream (code for result) ← .trusted_function_data result ← .shared result (node_modules/d3/dist/d3.min.js:2:131923) ← .result Object ← .prototype ed (node_modules/d3/dist/d3.min.js:2:131060) ← .ed system / Context`     |

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

|     % | Size | Value                   | Path                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ---: | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info (shared function info)`                                                                                                                                                                                                                                                                                                |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info)`                                                                                                                                                                                                                                                                                                                                |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← .second (concatenated string) ← .second (concatenated string) ← .second (concatenated string) ← .<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Read-only roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)` |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← .second (concatenated string) ← .second (concatenated string) ← .<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Read-only roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`                                 |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← .second (concatenated string) ← .<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Read-only roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`                                                                 |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← .<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Read-only roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`                                                                                                 |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Read-only roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`                                                                                                                                 |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:226006) ← .curveMonotoneX Object`                                                                                                                                                                                                                                       |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info eachBefore ← .shared eachBefore (node_modules/d3/dist/d3.min.js:2:141773) ← .eachBefore Object`                                                                                                                                                                                                                                                        |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Global handles) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Global handles) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                                                     |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Micro tasks) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                        |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Micro tasks) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                                                        |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Shareable object cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                             |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Shareable object cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                                             |
| <0.1% | 20 B | `(concatenated string)` | `.second (concatenated string) ← . system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Smi roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                          |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Smi roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                                                          |
| <0.1% | 20 B | `(concatenated string)` | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Startup object cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:269658) ← .treemap Object`                                                                                                               |
| <0.1% | 20 B | `(concatenated string)` | `.(Relocatable) system / ScopeInfo ← .forceSimulation Object`                                                                                                                                                                                                                                                                                                                                      |
| <0.1% | 20 B | `(concatenated string)` | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data alphaTarget ← .(Traced handles) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data (shared function info) ← .shared (anonymous) (node_modules/d3/dist/d3.min.js:2:235388) ← .forceSimulation Object`                                                                                      |
