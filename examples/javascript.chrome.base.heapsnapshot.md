# Heap snapshot

Allocated 940 kB across 30,859 nodes and 137,199 edges.

| Category            |     % |    Size | Nodes |
| ------------------- | ----: | ------: | ----: |
| hidden              | 28.2% |  265 kB | 8,002 |
| object shape        | 17.2% |  162 kB | 2,500 |
| string              | 12.5% |  118 kB | 6,143 |
| array               | 11.7% |  110 kB |   369 |
| object              | 10.5% | 99.1 kB | 2,884 |
| closure             |  8.2% | 77.2 kB | 2,704 |
| native              |  7.8% | 73.3 kB |   952 |
| code                |  2.8% | 25.9 kB | 6,123 |
| number              |  0.6% | 5.78 kB |   933 |
| concatenated string |  0.4% | 4.04 kB |   202 |
| synthetic           |  0.0% |     0 B |    31 |
| symbol              |  0.0% |     0 B |    16 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                   | Location    |
| ----: | ------: | --------: | ----------------------------- | ----------- |
|  7.7% | 72.7 kB |     1,448 | `Object`                      | `<unknown>` |
|  1.8% | 16.9 kB |     1,059 | `Array`                       | `<unknown>` |
|  1.8% | 16.6 kB |       208 | `Text`                        | `<unknown>` |
|  1.3% |   12 kB |       100 | `<article class="status">`    | `<unknown>` |
|  1.3% |   12 kB |       100 | `<h2>`                        | `<unknown>` |
|  1.3% |   12 kB |       100 | `<p>`                         | `<unknown>` |
|  1.2% | 11.3 kB |       143 | `system / ExternalStringData` | `<unknown>` |
|  0.3% | 3.27 kB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.2% | 2.17 kB |        99 | `system / Context`            | `<unknown>` |
|  0.1% | 1.02 kB |        10 | `Window`                      | `<unknown>` |
|  0.1% | 1.01 kB |        36 | `Error`                       | `<unknown>` |
|  0.1% | 1.01 kB |        36 | `TypedArray`                  | `<unknown>` |
|  0.1% |   960 B |         8 | `<span class="hashtag">`      | `<unknown>` |
|  0.1% |   960 B |         1 | `Performance`                 | `<unknown>` |
|  0.1% |   800 B |         1 | `StyleEngine`                 | `<unknown>` |
| <0.1% |   400 B |         1 | `Navigator`                   | `<unknown>` |
| <0.1% |   328 B |         1 | `FontFaceSet`                 | `<unknown>` |
| <0.1% |   208 B |         1 | `ScriptedAnimationController` | `<unknown>` |
| <0.1% |   184 B |         1 | `DocumentTimeline`            | `<unknown>` |
| <0.1% |   184 B |         1 | `PerformanceNavigationTiming` | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object` (`<unknown>`)

|     % |    Size | Instances | Path                                                                      |
| ----: | ------: | --------: | ------------------------------------------------------------------------- |
| 23.6% | 17.1 kB |       100 | `.user Object ← .__retained Window / ://`                                 |
| 17.3% | 12.5 kB |        73 | `.user Object ← .retweeted_status Object ← .__retained Window / ://`      |
| 14.8% | 10.8 kB |       100 | `.__retained Window / ://`                                                |
| 10.5% | 7.62 kB |        73 | `.retweeted_status Object ← .__retained Window / ://`                     |
|  0.1% |    60 B |         1 | `[0] Array ← .media Object ← .entities Object ← .__retained Window / ://` |

##### `Array` (`<unknown>`)

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 0.3% | 48 B |         3 | `(GC root)`                                                                                       |
| 0.2% | 32 B |         2 | `.builtinTypes system / Context`                                                                  |
| 0.2% | 32 B |         2 | `.builtinToJSONs system / Context`                                                                |
| 0.1% | 16 B |         1 | `.statuses Object ← .data Object ← .__retained Window / ://`                                      |
| 0.1% | 16 B |         1 | `.urls Object ← .description Object ← .entities Object ← .user Object ← .__retained Window / ://` |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------- |
| 1.0% | 160 B |         2 | `[3] <h2> ← [3] <article class="status">`                                              |
| 0.5% |  80 B |         1 | `[3] <span class="hashtag"> ← [4] <article class="status"> ← .__retained Window / ://` |
| 0.5% |  80 B |         1 | `[3] <p> ← .__retained Window / ://`                                                   |
| 0.5% |  80 B |         1 | `[3] <p> ← [4] <article class="status">`                                               |
| 0.5% |  80 B |         1 | `[3] <p> ← [4] <article class="status"> ← .__retained Window / ://`                    |

##### `<article class="status">` (`<unknown>`)

|     % |    Size | Instances | Path                       |
| ----: | ------: | --------: | -------------------------- |
| 66.0% | 7.92 kB |        66 | `(GC root)`                |
| 34.0% | 4.08 kB |        34 | `.__retained Window / ://` |

##### `<h2>` (`<unknown>`)

|     % |    Size | Instances | Path                                                      |
| ----: | ------: | --------: | --------------------------------------------------------- |
| 66.0% | 7.92 kB |        66 | `[3] <article class="status">`                            |
| 34.0% | 4.08 kB |        34 | `[3] <article class="status"> ← .__retained Window / ://` |

##### `<p>` (`<unknown>`)

|     % |    Size | Instances | Path                                                      |
| ----: | ------: | --------: | --------------------------------------------------------- |
| 63.0% | 7.56 kB |        63 | `[4] <article class="status">`                            |
| 30.0% |  3.6 kB |        30 | `[4] <article class="status"> ← .__retained Window / ://` |
|  4.0% |   480 B |         4 | `.__retained Window / ://`                                |
|  3.0% |   360 B |         3 | `(GC root)`                                               |

##### `system / ExternalStringData` (`<unknown>`)

|    % |  Size | Instances | Path                                                                        |
| ---: | ----: | --------: | --------------------------------------------------------------------------- |
| 2.7% | 300 B |         1 | `.1 / backing_store @aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` |
| 2.6% | 294 B |         1 | `.1 / backing_store RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  |
| 2.6% | 292 B |         1 | `.1 / backing_store RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     |
| 2.6% | 292 B |         1 | `.1 / backing_store RT @assam_house: 泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働…`     |
| 2.6% | 292 B |         1 | `.1 / backing_store RT @oen_yakyu: ●継続試合（中京対崇徳）46回～　9時～\n　〈ラジオ中継〉\n　らじる…`   |

##### `HTMLDocument` (`<unknown>`)

|     % |    Size | Instances | Path         |
| ----: | ------: | --------: | ------------ |
| 99.5% | 3.25 kB |         2 | `(GC root)`  |
|  0.5% |    16 B |         1 | `.155 array` |

##### `system / Context` (`<unknown>`)

|    % | Size | Instances | Path                                                                                                                                                                                                   |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.1% | 88 B |         2 | `(GC root)`                                                                                                                                                                                            |
| 1.3% | 28 B |         1 | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://` |
| 1.3% | 28 B |         1 | `.<symbol extensions::SafeBuiltins::Object> Window / ://`                                                                                                                                              |
| 1.3% | 28 B |         1 | `.<symbol extensions::SafeBuiltins::Function> Window / ://`                                                                                                                                            |
| 1.3% | 28 B |         1 | `.<symbol extensions::SafeBuiltins::Array> Window / ://`                                                                                                                                               |

##### `Window` (`<unknown>`)

|     % |  Size | Instances | Path         |
| ----: | ----: | --------: | ------------ |
| 92.1% | 936 B |         5 | `(GC root)`  |
|  1.6% |  16 B |         1 | `.76 array`  |
|  1.6% |  16 B |         1 | `.77 array`  |
|  1.6% |  16 B |         1 | `.204 array` |
|  1.6% |  16 B |         1 | `.205 array` |

##### `Error` (`<unknown>`)

|    % | Size | Instances | Path                        |
| ---: | ---: | --------: | --------------------------- |
| 2.8% | 28 B |         1 | `.prototype AggregateError` |
| 2.8% | 28 B |         1 | `.prototype SyntaxError`    |
| 2.8% | 28 B |         1 | `.prototype TypeError`      |
| 2.8% | 28 B |         1 | `.prototype ReferenceError` |
| 2.8% | 28 B |         1 | `.prototype URIError`       |

##### `TypedArray` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 1.01 kB |        36 | `(GC root)` |

##### `<span class="hashtag">` (`<unknown>`)

|     % |  Size | Instances | Path                                                      |
| ----: | ----: | --------: | --------------------------------------------------------- |
| 50.0% | 480 B |         4 | `[4] <article class="status"> ← .__retained Window / ://` |
| 37.5% | 360 B |         3 | `[4] <article class="status">`                            |
| 12.5% | 120 B |         1 | `.__retained Window / ://`                                |

##### `Performance` (`<unknown>`)

|      % |  Size | Instances | Path                                                 |
| -----: | ----: | --------: | ---------------------------------------------------- |
| 100.0% | 960 B |         1 | `[1] InternalNode ← [10] InternalNode ← [23] Window` |

##### `StyleEngine` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 800 B |         1 | `[10] HTMLDocument` |

##### `Navigator` (`<unknown>`)

|      % |  Size | Instances | Path         |
| -----: | ----: | --------: | ------------ |
| 100.0% | 400 B |         1 | `[5] Window` |

##### `FontFaceSet` (`<unknown>`)

|      % |  Size | Instances | Path                                   |
| -----: | ----: | --------: | -------------------------------------- |
| 100.0% | 328 B |         1 | `[6] InternalNode ← [30] HTMLDocument` |

##### `ScriptedAnimationController` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 208 B |         1 | `[17] HTMLDocument` |

##### `DocumentTimeline` (`<unknown>`)

|      % |  Size | Instances | Path                |
| -----: | ----: | --------: | ------------------- |
| 100.0% | 184 B |         1 | `[21] HTMLDocument` |

##### `PerformanceNavigationTiming` (`<unknown>`)

|      % |  Size | Instances | Path                                                                   |
| -----: | ----: | --------: | ---------------------------------------------------------------------- |
| 100.0% | 184 B |         1 | `[4] Performance ← [1] InternalNode ← [10] InternalNode ← [23] Window` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                   | Location    |
| ----: | ------: | --------: | ----------------------------- | ----------- |
| 18.7% |  175 kB |         1 | `Window / ://`                | `<unknown>` |
| 17.5% |  164 kB |     1,448 | `Object`                      | `<unknown>` |
|  8.2% | 76.8 kB |        10 | `Window`                      | `<unknown>` |
|  5.7% | 53.6 kB |       100 | `<article class="status">`    | `<unknown>` |
|  4.1% | 38.7 kB |         1 | `Window / `                   | `<unknown>` |
|  3.7% | 35.1 kB |     1,059 | `Array`                       | `<unknown>` |
|  2.1% |   20 kB |       100 | `<h2>`                        | `<unknown>` |
|  2.1% |   20 kB |       100 | `<p>`                         | `<unknown>` |
|  1.8% | 16.6 kB |       208 | `Text`                        | `<unknown>` |
|  1.2% | 11.3 kB |       143 | `system / ExternalStringData` | `<unknown>` |
|  0.9% | 8.59 kB |         4 | `Map`                         | `<unknown>` |
|  0.7% |  6.6 kB |         1 | `Object / `                   | `<unknown>` |
|  0.6% | 5.72 kB |         1 | `Document`                    | `<unknown>` |
|  0.6% | 5.58 kB |         3 | `Math`                        | `<unknown>` |
|  0.6% | 5.47 kB |        36 | `Error`                       | `<unknown>` |
|  0.6% | 5.32 kB |         3 | `HTMLDocument`                | `<unknown>` |
|  0.5% | 5.04 kB |        36 | `TypedArray`                  | `<unknown>` |
|  0.5% |  4.9 kB |         3 | `console`                     | `<unknown>` |
|  0.5% | 4.56 kB |         3 | `Intl.Locale`                 | `<unknown>` |
|  0.5% | 4.44 kB |         3 | `String`                      | `<unknown>` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Window / ://` (`<unknown>`)

|      % |   Size | Instances | Path        |
| -----: | -----: | --------: | ----------- |
| 100.0% | 175 kB |         1 | `(GC root)` |

##### `Object` (`<unknown>`)

|     % |    Size | Instances | Path                                      |
| ----: | ------: | --------: | ----------------------------------------- |
| 95.5% |  157 kB |        15 | `.__retained Window / ://`                |
|  4.0% |  6.5 kB |         3 | `.prototype Date`                         |
|  3.2% | 5.22 kB |         3 | `(GC root)`                               |
|  0.7% | 1.18 kB |         1 | `.data Object ← .__retained Window / ://` |
|  0.7% |  1.1 kB |         1 | `.prototype CallSite`                     |

##### `Window` (`<unknown>`)

|     % |    Size | Instances | Path         |
| ----: | ------: | --------: | ------------ |
| 73.8% | 56.6 kB |         6 | `(GC root)`  |
| 13.0% |   10 kB |         1 | `.77 array`  |
| 13.0% |   10 kB |         1 | `.205 array` |
|  0.1% |    56 B |         1 | `.76 array`  |
|  0.1% |    56 B |         1 | `.204 array` |

##### `<article class="status">` (`<unknown>`)

|     % |    Size | Instances | Path                       |
| ----: | ------: | --------: | -------------------------- |
| 65.1% | 34.9 kB |        66 | `(GC root)`                |
| 34.9% | 18.7 kB |        34 | `.__retained Window / ://` |

##### `Window / ` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 38.7 kB |         1 | `(GC root)` |

##### `Array` (`<unknown>`)

|     % |    Size | Instances | Path                                                                                     |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------- |
| 15.5% | 5.46 kB |         3 | `(GC root)`                                                                              |
|  4.4% | 1.55 kB |         5 | `.media Object ← .entities Object ← .__retained Window / ://`                            |
|  1.2% |   424 B |         1 | `.statuses Object ← .data Object ← .__retained Window / ://`                             |
|  0.8% |   268 B |         1 | `.media Object ← .entities Object ← .retweeted_status Object ← .__retained Window / ://` |
|  0.8% |   264 B |         1 | `.user_mentions Object ← .entities Object ← .__retained Window / ://`                    |

##### `<h2>` (`<unknown>`)

|     % |    Size | Instances | Path                                                      |
| ----: | ------: | --------: | --------------------------------------------------------- |
| 66.0% | 13.2 kB |        66 | `[3] <article class="status">`                            |
| 34.0% |  6.8 kB |        34 | `[3] <article class="status"> ← .__retained Window / ://` |

##### `<p>` (`<unknown>`)

|     % |    Size | Instances | Path                                                      |
| ----: | ------: | --------: | --------------------------------------------------------- |
| 63.0% | 12.6 kB |        63 | `[4] <article class="status">`                            |
| 30.0% |    6 kB |        30 | `[4] <article class="status"> ← .__retained Window / ://` |
|  4.0% |   800 B |         4 | `.__retained Window / ://`                                |
|  3.0% |   600 B |         3 | `(GC root)`                                               |

##### `Text` (`<unknown>`)

|    % |  Size | Instances | Path                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------- |
| 1.0% | 160 B |         2 | `[3] <h2> ← [3] <article class="status">`                                              |
| 0.5% |  80 B |         1 | `[3] <span class="hashtag"> ← [4] <article class="status"> ← .__retained Window / ://` |
| 0.5% |  80 B |         1 | `[3] <p> ← .__retained Window / ://`                                                   |
| 0.5% |  80 B |         1 | `[3] <p> ← [4] <article class="status">`                                               |
| 0.5% |  80 B |         1 | `[3] <p> ← [4] <article class="status"> ← .__retained Window / ://`                    |

##### `system / ExternalStringData` (`<unknown>`)

|    % |  Size | Instances | Path                                                                        |
| ---: | ----: | --------: | --------------------------------------------------------------------------- |
| 2.7% | 300 B |         1 | `.1 / backing_store @aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` |
| 2.6% | 294 B |         1 | `.1 / backing_store RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  |
| 2.6% | 292 B |         1 | `.1 / backing_store RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     |
| 2.6% | 292 B |         1 | `.1 / backing_store RT @assam_house: 泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働…`     |
| 2.6% | 292 B |         1 | `.1 / backing_store RT @oen_yakyu: ●継続試合（中京対崇徳）46回～　9時～\n　〈ラジオ中継〉\n　らじる…`   |

##### `Map` (`<unknown>`)

|     % |    Size | Instances | Path                                      |
| ----: | ------: | --------: | ----------------------------------------- |
| 92.6% | 7.95 kB |         1 | `.byId Object ← .__retained Window / ://` |
|  7.4% |   636 B |         3 | `(GC root)`                               |

##### `Object / ` (`<unknown>`)

|      % |   Size | Instances | Path        |
| -----: | -----: | --------: | ----------- |
| 100.0% | 6.6 kB |         1 | `(GC root)` |

##### `Document` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 5.72 kB |         1 | `(GC root)` |

##### `Math` (`<unknown>`)

|     % |    Size | Instances | Path                 |
| ----: | ------: | --------: | -------------------- |
| 33.3% | 1.86 kB |         1 | `.Math Window / ://` |
| 33.3% | 1.86 kB |         1 | `.Math Object / `    |
| 33.3% | 1.86 kB |         1 | `.Math Window / `    |

##### `Error` (`<unknown>`)

|    % |  Size | Instances | Path                        |
| ---: | ----: | --------: | --------------------------- |
| 2.8% | 152 B |         1 | `.prototype AggregateError` |
| 2.8% | 152 B |         1 | `.prototype SyntaxError`    |
| 2.8% | 152 B |         1 | `.prototype TypeError`      |
| 2.8% | 152 B |         1 | `.prototype ReferenceError` |
| 2.8% | 152 B |         1 | `.prototype URIError`       |

##### `HTMLDocument` (`<unknown>`)

|     % |    Size | Instances | Path         |
| ----: | ------: | --------: | ------------ |
| 99.7% | 5.31 kB |         2 | `(GC root)`  |
|  0.3% |    16 B |         1 | `.155 array` |

##### `TypedArray` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 5.04 kB |        36 | `(GC root)` |

##### `console` (`<unknown>`)

|      % |   Size | Instances | Path        |
| -----: | -----: | --------: | ----------- |
| 100.0% | 4.9 kB |         3 | `(GC root)` |

##### `Intl.Locale` (`<unknown>`)

|      % |    Size | Instances | Path                |
| -----: | ------: | --------: | ------------------- |
| 100.0% | 4.56 kB |         3 | `.prototype Locale` |

##### `String` (`<unknown>`)

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 4.44 kB |         3 | `(GC root)` |

## Largest closures

Closures ranked by bytes that would be freed if the closure were garbage collected.

|    % | Retained | Instances | Paths | Name                   | Location                       | Example path                                                                                                      |
| ---: | -------: | --------: | ----: | ---------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 0.9% |  8.05 kB |        14 |    14 | `safe`                 | extensions::SafeBuiltins:26:22 | `.<symbol extensions::SafeBuiltins::Array> Window / ://`                                                          |
| 0.8% |   7.5 kB |         3 |     1 | `Date`                 | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.6% |  5.68 kB |         3 |     1 | `RegExp`               | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.5% |  5.16 kB |         3 |     1 | `Locale`               | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.4% |  4.12 kB |        76 |    76 | `(anonymous)`          | extensions::SafeBuiltins:10:36 | `.hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://` |
| 0.4% |  3.77 kB |        30 |     6 | `(anonymous)`          | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.4% |  3.52 kB |         3 |     1 | `CallSite`             | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.3% |  3.09 kB |         3 |     1 | `Object`               | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.3% |  2.99 kB |         3 |     1 | `DisposableStack`      | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.3% |  2.99 kB |         3 |     1 | `AsyncDisposableStack` | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.3% |   2.7 kB |         3 |     1 | `Number`               | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.3% |  2.52 kB |         3 |     1 | `Symbol`               | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |     2 kB |         3 |     3 | `v8BreakIterator`      | `<unknown>`                    | `.v8BreakIterator Intl ← .Intl Window / ://`                                                                      |
| 0.2% |  1.88 kB |         3 |     1 | `SharedArrayBuffer`    | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |  1.85 kB |         3 |     1 | `SuppressedError`      | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |  1.85 kB |         3 |     1 | `SuspendError`         | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |  1.84 kB |         3 |     1 | `DateTimeFormat`       | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |  1.84 kB |         3 |     1 | `NumberFormat`         | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |   1.7 kB |         3 |     1 | `EvalError`            | `<unknown>`                    | `(GC root)`                                                                                                       |
| 0.2% |   1.7 kB |         3 |     1 | `AggregateError`       | `<unknown>`                    | `(GC root)`                                                                                                       |

### Retained

Nodes ranked by contribution to each closure's retained size.

#### `safe` (extensions::SafeBuiltins:26:22)

|    % |  Self | Name                       | Path                                                                                                                               |
| ---: | ----: | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / ://`                       |
| 5.2% | 416 B | `(object properties)`      | `.properties safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Array> Window / `                          |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://` |
| 2.2% | 176 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / `    |
| 1.9% | 152 B | `system / DescriptorArray` | `.descriptors system / Map ← .map safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::String> Window / ://` |

#### `Date` (`<unknown>`)

|    % |  Self | Name                       | Path                                                        |
| ---: | ----: | -------------------------- | ----------------------------------------------------------- |
| 7.9% | 596 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype Date` |
| 7.9% | 596 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype Date` |
| 7.9% | 596 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype Date` |
| 1.4% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Date`                     |
| 1.4% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Date`                     |

#### `RegExp` (`<unknown>`)

|    % |  Self | Name                       | Path                                      |
| ---: | ----: | -------------------------- | ----------------------------------------- |
| 5.6% | 320 B | `system / DescriptorArray` | `.descriptors system / Map ← .map RegExp` |
| 5.6% | 320 B | `system / DescriptorArray` | `.descriptors system / Map ← .map RegExp` |
| 5.6% | 320 B | `system / DescriptorArray` | `.descriptors system / Map ← .map RegExp` |
| 0.8% |  48 B | `escape`                   | `.shared escape ← .escape RegExp`         |
| 0.8% |  48 B | `escape`                   | `.shared escape ← .escape RegExp`         |

#### `Locale` (`<unknown>`)

|    % |  Self | Name                       | Path                                                               |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------ |
| 7.4% | 380 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.Locale ← .prototype Locale` |
| 7.4% | 380 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.Locale ← .prototype Locale` |
| 7.4% | 380 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.Locale ← .prototype Locale` |
| 1.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Locale`                          |
| 1.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Locale`                          |

#### `(anonymous)` (extensions::SafeBuiltins:10:36)

|    % | Self | Name               | Path                                                                                                                                                                                                     |
| ---: | ---: | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / ://`   |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .exec safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::RegExp> Window / ://`             |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .captureStackTrace safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Error> Window / ://` |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .hasOwnProperty safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::Object> Window / `      |
| 0.7% | 28 B | `system / Context` | `.previous system / Context ← .context (anonymous) (extensions::SafeBuiltins:10:36) ← .exec safe (extensions::SafeBuiltins:26:22) ← .<symbol extensions::SafeBuiltins::RegExp> Window / `                |

#### `(anonymous)` (`<unknown>`)

|    % |  Self | Name                       | Path                                           |
| ---: | ----: | -------------------------- | ---------------------------------------------- |
| 3.7% | 140 B | `system / DescriptorArray` | `.descriptors system / Map ← .map (anonymous)` |
| 3.7% | 140 B | `system / DescriptorArray` | `.descriptors system / Map ← .map (anonymous)` |
| 3.7% | 140 B | `system / DescriptorArray` | `.descriptors system / Map ← .map (anonymous)` |
| 1.3% |  48 B | `(shared function info)`   | `.shared (anonymous) ← .get memory console`    |
| 1.3% |  48 B | `(shared function info)`   | `.shared (anonymous) ← .set memory console`    |

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
|  1.3% |  40 B | `system / Map`             | `.initial_map Object`                     |

#### `DisposableStack` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                            |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------- |
| 4.3% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack ← .prototype DisposableStack` |
| 4.3% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack ← .prototype DisposableStack` |
| 4.3% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack ← .prototype DisposableStack` |
| 2.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack`                              |
| 2.3% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DisposableStack`                              |

#### `AsyncDisposableStack` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                                      |
| ---: | ----: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 4.3% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack ← .prototype AsyncDisposableStack` |
| 4.3% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack ← .prototype AsyncDisposableStack` |
| 4.3% | 128 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AsyncDisposableStack ← .prototype AsyncDisposableStack` |
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
| 10.3% | 260 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol`                     |
| 10.3% | 260 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol`                     |
| 10.3% | 260 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol`                     |
|  3.7% |  92 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol ← .prototype Symbol` |
|  3.7% |  92 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Symbol ← .prototype Symbol` |

#### `v8BreakIterator` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                                                                |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 5.8% | 116 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / ://` |
| 5.8% | 116 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype v8BreakIterator ← .v8BreakIterator Intl ← .Intl Object / `    |
| 5.8% | 116 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Object ← .prototype v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / `    |
| 3.4% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map v8BreakIterator ← .v8BreakIterator Intl ← .Intl Window / ://`                     |
| 3.4% |  68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map v8BreakIterator ← .v8BreakIterator Intl ← .Intl Object / `                        |

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
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuppressedError`                              |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuppressedError` |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuppressedError`                              |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuppressedError` |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuppressedError` |

#### `SuspendError` (`<unknown>`)

|    % | Self | Name                       | Path                                                                         |
| ---: | ---: | -------------------------- | ---------------------------------------------------------------------------- |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuspendError`                              |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuspendError` |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map SuspendError`                              |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuspendError` |
| 3.7% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map SuspendError` |

#### `DateTimeFormat` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                               |
| ---: | ----: | -------------------------- | ---------------------------------------------------------------------------------- |
| 5.7% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.DateTimeFormat ← .prototype DateTimeFormat` |
| 5.7% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.DateTimeFormat ← .prototype DateTimeFormat` |
| 5.7% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.DateTimeFormat ← .prototype DateTimeFormat` |
| 4.4% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DateTimeFormat`                                  |
| 4.4% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map DateTimeFormat`                                  |

#### `NumberFormat` (`<unknown>`)

|    % |  Self | Name                       | Path                                                                           |
| ---: | ----: | -------------------------- | ------------------------------------------------------------------------------ |
| 5.7% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.NumberFormat ← .prototype NumberFormat` |
| 5.7% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.NumberFormat ← .prototype NumberFormat` |
| 5.7% | 104 B | `system / DescriptorArray` | `.descriptors system / Map ← .map Intl.NumberFormat ← .prototype NumberFormat` |
| 4.4% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map NumberFormat`                                |
| 4.4% |  80 B | `system / DescriptorArray` | `.descriptors system / Map ← .map NumberFormat`                                |

#### `EvalError` (`<unknown>`)

|    % | Self | Name                       | Path                                                                      |
| ---: | ---: | -------------------------- | ------------------------------------------------------------------------- |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map EvalError` |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map EvalError`                              |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map EvalError` |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map EvalError`                              |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map EvalError` |

#### `AggregateError` (`<unknown>`)

|    % | Self | Name                       | Path                                                                           |
| ---: | ---: | -------------------------- | ------------------------------------------------------------------------------ |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map AggregateError` |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AggregateError`                              |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map AggregateError` |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .map AggregateError`                              |
| 4.0% | 68 B | `system / DescriptorArray` | `.descriptors system / Map ← .back_pointer system / Map ← .map AggregateError` |

## Largest strings

Strings ranked by bytes allocated for them.

|     % |    Size | Value                                                    | Path        |
| ----: | ------: | -------------------------------------------------------- | ----------- |
|  0.3% | 3.22 kB | `(function() {\n'use strict';\nnative function Apply…`   | `(GC root)` |
| <0.1% |   332 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `(GC root)` |
| <0.1% |   332 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `(GC root)` |
| <0.1% |   332 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `(GC root)` |
| <0.1% |   328 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `(GC root)` |
| <0.1% |   324 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `(GC root)` |
| <0.1% |   312 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `(GC root)` |
| <0.1% |   304 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `(GC root)` |
| <0.1% |   300 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `(GC root)` |
| <0.1% |   296 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。\n9/13（土）「九州杯」今年も宜しくお願…`    | `(GC root)` |
| <0.1% |   292 B | `@samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印象☞平野から？！\n今の印…` | `(GC root)` |
| <0.1% |   292 B | `湯の街の元勃酩姦なんちゃら大　赤い犬の犬（外資系）　肥後で緑ナンバー屋さん勤め\nくだらないことしか…`    | `(GC root)` |
| <0.1% |   292 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `(GC root)` |
| <0.1% |   288 B | `家具（かぐ、Furniture）は、家財道具のうち家の中に据え置いて利用する比較的大型の道具類、ま…`     | `(GC root)` |
| <0.1% |   284 B | `●継続試合（中京対崇徳）46回～　9時～\n　〈ラジオ中継〉\n　らじる★らじる→大阪放送局を選択→N…`   | `(GC root)` |
| <0.1% |   280 B | `泉田新潟県知事は、東電の申請書提出を容認させられただけで、再稼働に必要な「同意」はまだ与えていませ…`     | `(GC root)` |
| <0.1% |   264 B | `ラウワン脱出→友達が家に連んで帰ってって言うから友達ん家に乗せて帰る(1度も行ったことない田舎道)…`     | `(GC root)` |
| <0.1% |   260 B | `自分なりに生きる人、最後まであきらめないの。でも、フォローありがとう…。@ringo_BDFFLO…`     | `(GC root)` |
| <0.1% |   260 B | `GパングのA型K月克己中尉の非公式botです。 主に七巻と八巻が中心の台詞をつぶやきます。 4/1…`     | `(GC root)` |
| <0.1% |   256 B | `福島第一原発の構内地図がこちら。\nhttp://t.co/ZkU4TZCGPG\nどう見ても、１号機…`   | `(GC root)` |
