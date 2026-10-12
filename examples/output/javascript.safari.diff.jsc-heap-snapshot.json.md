# Heap snapshot diff

Held 10.4 MiB (+14.46 KiB, +0.1%) over 109,569 → 109,640 nodes and 307,833 → 307,962 edges.

| Category           | Change |       Delta |             % |                Size |           Nodes |
| ------------------ | -----: | ----------: | ------------: | ------------------: | --------------: |
| String             |    ~0% |      +527 B | 32.6% → 32.5% |            3.39 MiB | 19,395 → 19,426 |
| Code               |  +0.3% | +10.738 KiB | 28.8% → 28.9% |    3 MiB → 3.01 MiB | 16,245 → 16,246 |
| Object shape       |    ~0% |      +224 B |         12.5% |             1.3 MiB | 12,175 → 12,177 |
| Internal           |  +0.3% |  +2.953 KiB |          9.8% | 1.02 MiB → 1.03 MiB | 20,137 → 20,174 |
| Object             |   0.0% |         0 B |          8.6% |             920 KiB |          16,441 |
| Function           |    ~0% |       +37 B |          4.1% |             436 KiB |          13,484 |
| Array              |   0.0% |         0 B |          2.5% |             270 KiB |          11,204 |
| Regular expression |   0.0% |         0 B |          1.0% |             108 KiB |             453 |
| Symbol             |   0.0% |         0 B |         <0.1% |               448 B |              28 |
| Native             |   0.0% |         0 B |         <0.1% |               231 B |               7 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

#### Regressions

Constructors with the largest increase in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |           % |                Size |       Instances | Constructor         |
| -----: | ----------: | ----------: | ------------------: | --------------: | ------------------- |
|  +2.2% | +11.824 KiB | 5.0% → 5.1% |   533 KiB → 545 KiB |       162 → 165 | `FunctionCodeBlock` |
| +16.4% |  +2.968 KiB |        0.2% | 18.1 KiB → 21.1 KiB |       232 → 270 | `FunctionRareData`  |
|    ~0% |      +224 B |       12.5% |             1.3 MiB | 12,175 → 12,177 | `Structure`         |
|    ~0% |       +37 B |        4.1% |             434 KiB |          13,414 | `Function`          |

##### Code

| Change |       Delta |           % |              Size | Instances | Constructor         |
| -----: | ----------: | ----------: | ----------------: | --------: | ------------------- |
|  +2.2% | +11.824 KiB | 5.0% → 5.1% | 533 KiB → 545 KiB | 162 → 165 | `FunctionCodeBlock` |

##### Object shape

| Change |  Delta |     % |    Size |       Instances | Constructor |
| -----: | -----: | ----: | ------: | --------------: | ----------- |
|    ~0% | +224 B | 12.5% | 1.3 MiB | 12,175 → 12,177 | `Structure` |

##### Internal

| Change |      Delta |    % |                Size | Instances | Constructor        |
| -----: | ---------: | ---: | ------------------: | --------: | ------------------ |
| +16.4% | +2.968 KiB | 0.2% | 18.1 KiB → 21.1 KiB | 232 → 270 | `FunctionRareData` |

##### Function

| Change | Delta |    % |    Size | Instances | Constructor |
| -----: | ----: | ---: | ------: | --------: | ----------- |
|    ~0% | +37 B | 4.1% | 434 KiB |    13,414 | `Function`  |

#### Improvements

Constructors with the largest decrease in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

| Change |      Delta |     % |                Size |     Instances | Constructor                 |
| -----: | ---------: | ----: | ------------------: | ------------: | --------------------------- |
|  -0.1% | -1.085 KiB |  9.0% |   962 KiB → 961 KiB | 1,660 → 1,658 | `UnlinkedFunctionCodeBlock` |
|  -0.4% |      -16 B | <0.1% | 4.41 KiB → 4.39 KiB |     282 → 281 | `StructureChain`            |

##### Code

| Change |      Delta |    % |              Size |     Instances | Constructor                 |
| -----: | ---------: | ---: | ----------------: | ------------: | --------------------------- |
|  -0.1% | -1.085 KiB | 9.0% | 962 KiB → 961 KiB | 1,660 → 1,658 | `UnlinkedFunctionCodeBlock` |

##### Internal

| Change | Delta |     % |                Size | Instances | Constructor      |
| -----: | ----: | ----: | ------------------: | --------: | ---------------- |
|  -0.4% | -16 B | <0.1% | 4.41 KiB → 4.39 KiB | 282 → 281 | `StructureChain` |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's self size.

##### `FunctionCodeBlock`

| Change |       Delta |             % |                Size | Instances | Path                                                                                                                      |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| +45.7% | +24.755 KiB | 10.2% → 14.5% | 54.2 KiB → 78.9 KiB |   27 → 29 | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– <root>`                                                         |
| -13.6% | -18.419 KiB | 25.3% → 21.4% |   135 KiB → 117 KiB |   42 → 39 | `FunctionCodeBlock ←(several paths)– <root>`                                                                              |
| -13.0% | -14.376 KiB | 20.7% → 17.6% |  110 KiB → 95.9 KiB |   33 → 30 | `FunctionCodeBlock ← <root>`                                                                                              |
|    new |  +8.187 KiB |   0.0% → 1.5% |      0 B → 8.19 KiB |     0 → 2 | `FunctionCodeBlock ← FunctionExecutable ← Function ←.allWithImplicitReady– JSLexicalEnvironment ←(several paths)– <root>` |
|    new |    +7.5 KiB |   0.0% → 1.4% |       0 B → 7.5 KiB |     0 → 3 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←(several paths)– <root>`                           |

##### `FunctionRareData`

|  Change |      Delta |             % |               Size | Instances | Path                                                                                                                                |
| ------: | ---------: | ------------: | -----------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------- |
|  +17.6% | +1.015 KiB | 31.9% → 32.2% | 5.78 KiB → 6.8 KiB |   74 → 87 | `FunctionRareData ← Function ←(several paths)– <root>`                                                                              |
|  +33.3% |      +80 B |   1.3% → 1.5% |      240 B → 320 B |     3 → 4 | `FunctionRareData ← Function ←.init– Object ←(several paths)– <root>`                                                               |
| removed |      -80 B |   0.4% → 0.0% |         80 B → 0 B |     1 → 0 | `FunctionRareData ← Function ←.splitModuleKey– JSLexicalEnvironment ←(several paths)– <root>`                                       |
| removed |      -80 B |   0.4% → 0.0% |         80 B → 0 B |     1 → 0 | `FunctionRareData ← Function ←.declarator– Object ←.ext.testKitchen– Object ←(several paths)– <root>`                               |
| removed |      -80 B |   0.4% → 0.0% |         80 B → 0 B |     1 → 0 | `FunctionRareData ← Function ←.jar.js– Object ←.files– Object ←.script– Object ←.mediawiki.cookie– Object ←(several paths)– <root>` |

##### `Structure`

| Change |    Delta |           % |                Size | Instances | Path                                                     |
| -----: | -------: | ----------: | ------------------: | --------: | -------------------------------------------------------- |
|  +1.8% | +1,008 B | 4.2% → 4.3% |     56 KiB → 57 KiB | 512 → 521 | `Structure ←(several paths)– <root>`                     |
| +15.4% |   +672 B | 0.3% → 0.4% | 4.27 KiB → 4.92 KiB |   39 → 45 | `Structure ← Function ← Window ←(several paths)– <root>` |
|  -3.3% |   -560 B |        1.2% | 16.4 KiB → 15.9 KiB | 150 → 145 | `Structure ← <root>`                                     |
|  -1.7% |   -560 B |        2.4% | 32.2 KiB → 31.6 KiB | 294 → 289 | `Structure ← Window ←(several paths)– <root>`            |
| -35.7% |   -560 B |        0.1% |  1.53 KiB → 1,008 B |    14 → 9 | `Structure ← Function ← Window ← <root>`                 |

##### `Function`

| Change |      Delta |           % |                Size | Instances | Path                                                        |
| -----: | ---------: | ----------: | ------------------: | --------: | ----------------------------------------------------------- |
| +49.3% | +2.704 KiB | 1.3% → 1.9% | 5.48 KiB → 8.19 KiB | 163 → 253 | `Function ← Window ← <root>`                                |
|  +7.2% | +1.652 KiB | 5.3% → 5.7% |   23 KiB → 24.7 KiB | 711 → 762 | `Function ← Window ←(several paths)– <root>`                |
|  +1.3% |     +323 B |        5.7% | 24.6 KiB → 24.9 KiB | 734 → 743 | `Function ←(several paths)– <root>`                         |
| -23.0% |     -272 B | 0.3% → 0.2% |    1.16 KiB → 912 B |   35 → 27 | `Function ← GetterSetter ← Window ←(several paths)– <root>` |
| +28.8% |     +272 B | 0.2% → 0.3% |    944 B → 1.19 KiB |   28 → 36 | `Function ← GetterSetter ←(several paths)– <root>`          |

##### `UnlinkedFunctionCodeBlock`

| Change |      Delta |           % |                Size |     Instances | Path                                                                              |
| -----: | ---------: | ----------: | ------------------: | ------------: | --------------------------------------------------------------------------------- |
|  -0.2% | -1.175 KiB |       67.2% |   647 KiB → 646 KiB | 1,196 → 1,194 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>` |
|  +0.2% |      +92 B | 4.3% → 4.4% | 41.8 KiB → 41.9 KiB |            82 | `UnlinkedFunctionCodeBlock ←(several paths)– <root>`                              |

##### `StructureChain`

|  Change | Delta |           % |          Size | Instances | Path                                                                                                                                                        |
| ------: | ----: | ----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +12.5% | +16 B | 2.8% → 3.2% | 128 B → 144 B |     8 → 9 | `StructureChain ← Structure ← <root>`                                                                                                                       |
| +100.0% | +16 B | 0.4% → 0.7% |   16 B → 32 B |     1 → 2 | `StructureChain ← Structure ← Structure ← Structure ← Structure ← Structure ← Object ←.:– Object ←(several paths)– <root>`                                  |
|   -6.7% | -16 B | 5.3% → 5.0% | 240 B → 224 B |   15 → 14 | `StructureChain ← Structure ←(several paths)– <root>`                                                                                                       |
|  -50.0% | -16 B | 0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `StructureChain ← Structure ← EventFactory ←.eventFactory– JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>`             |
|  -50.0% | -16 B | 0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `StructureChain ← Structure ← ExposureLogTracker ←.exposureLogTracker– JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>` |

### Retained size

#### Regressions

Constructors with the largest increase in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size | Instances | Constructor            |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------- |
|  +2.2% | +44.456 KiB | 18.9% → 19.3% | 1.97 MiB → 2.01 MiB |     7,600 | `FunctionExecutable`   |
|  +3.2% | +25.972 KiB |   7.6% → 7.8% |   811 KiB → 837 KiB |     2,030 | `JSLexicalEnvironment` |
|  +0.7% | +20.129 KiB | 27.9% → 28.1% | 2.91 MiB → 2.93 MiB |    13,414 | `Function`             |
|  +6.7% | +13.175 KiB |   1.8% → 2.0% |   197 KiB → 210 KiB | 232 → 270 | `FunctionRareData`     |
|  +2.2% | +11.825 KiB |   5.0% → 5.1% |   535 KiB → 547 KiB | 162 → 165 | `FunctionCodeBlock`    |
|  +4.0% |      +560 B |          0.1% | 13.7 KiB → 14.2 KiB |        14 | `Node`                 |
|  +0.4% |      +256 B |          0.5% | 56.5 KiB → 56.7 KiB |        10 | `Element`              |
|  +0.3% |      +256 B |          0.8% | 83.3 KiB → 83.5 KiB |       205 | `HTMLElement`          |
|  +2.5% |      +160 B |          0.1% | 6.35 KiB → 6.51 KiB |        14 | `EventTarget`          |
|  +5.8% |      +144 B |         <0.1% | 2.44 KiB → 2.58 KiB |        23 | `HTMLHeadingElement`   |
|    ~0% |      +112 B |   4.3% → 4.2% |             454 KiB |       893 | `StructureRareData`    |
|  +0.3% |       +98 B |          0.3% | 32.2 KiB → 32.3 KiB |        20 | `Map`                  |
|  +1.2% |       +48 B |         <0.1% | 3.85 KiB → 3.89 KiB |         4 | `CharacterData`        |

##### Code

| Change |       Delta |             % |                Size | Instances | Constructor          |
| -----: | ----------: | ------------: | ------------------: | --------: | -------------------- |
|  +2.2% | +44.456 KiB | 18.9% → 19.3% | 1.97 MiB → 2.01 MiB |     7,600 | `FunctionExecutable` |
|  +2.2% | +11.825 KiB |   5.0% → 5.1% |   535 KiB → 547 KiB | 162 → 165 | `FunctionCodeBlock`  |

##### Internal

| Change |       Delta |           % |              Size | Instances | Constructor            |
| -----: | ----------: | ----------: | ----------------: | --------: | ---------------------- |
|  +3.2% | +25.972 KiB | 7.6% → 7.8% | 811 KiB → 837 KiB |     2,030 | `JSLexicalEnvironment` |
|  +6.7% | +13.175 KiB | 1.8% → 2.0% | 197 KiB → 210 KiB | 232 → 270 | `FunctionRareData`     |
|    ~0% |      +112 B | 4.3% → 4.2% |           454 KiB |       893 | `StructureRareData`    |

##### Object

| Change |  Delta |     % |                Size | Instances | Constructor          |
| -----: | -----: | ----: | ------------------: | --------: | -------------------- |
|  +4.0% | +560 B |  0.1% | 13.7 KiB → 14.2 KiB |        14 | `Node`               |
|  +0.4% | +256 B |  0.5% | 56.5 KiB → 56.7 KiB |        10 | `Element`            |
|  +0.3% | +256 B |  0.8% | 83.3 KiB → 83.5 KiB |       205 | `HTMLElement`        |
|  +2.5% | +160 B |  0.1% | 6.35 KiB → 6.51 KiB |        14 | `EventTarget`        |
|  +5.8% | +144 B | <0.1% | 2.44 KiB → 2.58 KiB |        23 | `HTMLHeadingElement` |
|  +0.3% |  +98 B |  0.3% | 32.2 KiB → 32.3 KiB |        20 | `Map`                |
|  +1.2% |  +48 B | <0.1% | 3.85 KiB → 3.89 KiB |         4 | `CharacterData`      |

##### Function

| Change |       Delta |             % |                Size | Instances | Constructor |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------- |
|  +0.7% | +20.129 KiB | 27.9% → 28.1% | 2.91 MiB → 2.93 MiB |    13,414 | `Function`  |

#### Improvements

Constructors with the largest decrease in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                 Size |       Instances | Constructor                  |
| -----: | ----------: | ------------: | -------------------: | --------------: | ---------------------------- |
|  -2.1% | -22.077 KiB |   9.7% → 9.5% | 1.01 MiB → 1,015 KiB |              14 | `Window`                     |
|  -0.2% |  -3.481 KiB | 17.8% → 17.7% |             1.85 MiB | 12,175 → 12,177 | `Structure`                  |
|    ~0% |  -1.354 KiB | 55.3% → 55.2% |             5.76 MiB |          11,833 | `Object`                     |
|  -0.1% |  -1.351 KiB |         15.6% |             1.62 MiB |           6,041 | `UnlinkedFunctionExecutable` |
|  -0.1% |  -1.261 KiB |         11.2% |             1.17 MiB |   1,660 → 1,658 | `UnlinkedFunctionCodeBlock`  |
|  -0.1% |      -708 B |          6.1% |    650 KiB → 649 KiB |           7,409 | `Array`                      |
|  -4.2% |      -160 B |         <0.1% |  3.71 KiB → 3.55 KiB |               1 | `Range`                      |
|  -0.1% |       -48 B |          0.4% |  43.5 KiB → 43.4 KiB |           1,330 | `DOMRect`                    |
|  -0.4% |       -16 B |         <0.1% |  4.41 KiB → 4.39 KiB |       282 → 281 | `StructureChain`             |

##### Code

| Change |      Delta |     % |     Size |     Instances | Constructor                  |
| -----: | ---------: | ----: | -------: | ------------: | ---------------------------- |
|  -0.1% | -1.351 KiB | 15.6% | 1.62 MiB |         6,041 | `UnlinkedFunctionExecutable` |
|  -0.1% | -1.261 KiB | 11.2% | 1.17 MiB | 1,660 → 1,658 | `UnlinkedFunctionCodeBlock`  |

##### Object shape

| Change |      Delta |             % |     Size |       Instances | Constructor |
| -----: | ---------: | ------------: | -------: | --------------: | ----------- |
|  -0.2% | -3.481 KiB | 17.8% → 17.7% | 1.85 MiB | 12,175 → 12,177 | `Structure` |

##### Internal

| Change | Delta |     % |                Size | Instances | Constructor      |
| -----: | ----: | ----: | ------------------: | --------: | ---------------- |
|  -0.4% | -16 B | <0.1% | 4.41 KiB → 4.39 KiB | 282 → 281 | `StructureChain` |

##### Object

| Change |       Delta |             % |                 Size | Instances | Constructor |
| -----: | ----------: | ------------: | -------------------: | --------: | ----------- |
|  -2.1% | -22.077 KiB |   9.7% → 9.5% | 1.01 MiB → 1,015 KiB |        14 | `Window`    |
|    ~0% |  -1.354 KiB | 55.3% → 55.2% |             5.76 MiB |    11,833 | `Object`    |
|  -4.2% |      -160 B |         <0.1% |  3.71 KiB → 3.55 KiB |         1 | `Range`     |
|  -0.1% |       -48 B |          0.4% |  43.5 KiB → 43.4 KiB |     1,330 | `DOMRect`   |

##### Array

| Change |  Delta |    % |              Size | Instances | Constructor |
| -----: | -----: | ---: | ----------------: | --------: | ----------- |
|  -0.1% | -708 B | 6.1% | 650 KiB → 649 KiB |     7,409 | `Array`     |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `FunctionExecutable`

|   Change |       Delta |            % |                Size | Instances | Path                                                                                                  |
| -------: | ----------: | -----------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------- |
|   +32.8% | +24.915 KiB |  3.8% → 4.9% |  76.1 KiB → 101 KiB | 149 → 150 | `FunctionExecutable ←(several paths)– <root>`                                                         |
|   +96.5% |     +12 KiB |  0.6% → 1.2% | 12.4 KiB → 24.4 KiB |  95 → 191 | `FunctionExecutable ← Function ← Window ← <root>`                                                     |
|   +82.7% |    +8.5 KiB |  0.5% → 0.9% | 10.3 KiB → 18.8 KiB |   65 → 73 | `FunctionExecutable ← FunctionRareData ← Function ←(several paths)– <root>`                           |
| +3800.0% |  +8.312 KiB | <0.1% → 0.4% |    224 B → 8.53 KiB |     1 → 2 | `FunctionExecutable ← Function ←.allWithImplicitReady– JSLexicalEnvironment ←(several paths)– <root>` |
| +2350.0% |   +5.14 KiB | <0.1% → 0.3% |    224 B → 5.36 KiB |     1 → 2 | `FunctionExecutable ← Function ←.anyFailed– JSLexicalEnvironment ←(several paths)– <root>`            |

##### `JSLexicalEnvironment`

|  Change |       Delta |             % |               Size | Instances | Path                                                                                             |
| ------: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------------------------------------------------------ |
|   +5.3% | +25.826 KiB | 60.3% → 61.5% |  489 KiB → 514 KiB | 203 → 204 | `JSLexicalEnvironment ←(several paths)– <root>`                                                  |
|  -48.7% |   -1.71 KiB |   0.4% → 0.2% | 3.52 KiB → 1.8 KiB |     2 → 1 | `JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>`            |
|     new |   +1.71 KiB |   0.0% → 0.2% |     0 B → 1.71 KiB |     0 → 1 | `JSLexicalEnvironment ←(several paths)– Object ←.testKitchen– Object ←(several paths)– <root>`   |
|  +90.6% |  +1.359 KiB |   0.2% → 0.3% | 1.5 KiB → 2.86 KiB |     1 → 2 | `JSLexicalEnvironment ← Function ←[2]– Array ←.c– JSLexicalEnvironment ←(several paths)– <root>` |
| removed |  -1.359 KiB |   0.2% → 0.0% |     1.36 KiB → 0 B |     1 → 0 | `JSLexicalEnvironment ← Function ←[2]– Array ←.p– JSLexicalEnvironment ←(several paths)– <root>` |

##### `Function`

|   Change |       Delta |             % |                Size | Instances | Path                                                                             |
| -------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------- |
|    +2.7% | +14.878 KiB | 18.2% → 18.6% |   543 KiB → 558 KiB | 734 → 743 | `Function ←(several paths)– <root>`                                              |
|   +54.4% | +13.435 KiB |   0.8% → 1.3% | 24.7 KiB → 38.1 KiB | 163 → 253 | `Function ← Window ← <root>`                                                     |
|    +8.8% | +10.067 KiB |   3.9% → 4.2% |   115 KiB → 125 KiB | 711 → 762 | `Function ← Window ←(several paths)– <root>`                                     |
| +3337.5% |  +8.343 KiB |  <0.1% → 0.3% |    256 B → 8.59 KiB |     1 → 2 | `Function ←.allWithImplicitReady– JSLexicalEnvironment ←(several paths)– <root>` |
| +2068.8% |  +5.171 KiB |  <0.1% → 0.2% |    256 B → 5.42 KiB |     1 → 2 | `Function ←.anyFailed– JSLexicalEnvironment ←(several paths)– <root>`            |

##### `FunctionRareData`

|  Change |      Delta |            % |              Size | Instances | Path                                                                                       |
| ------: | ---------: | -----------: | ----------------: | --------: | ------------------------------------------------------------------------------------------ |
|  +51.4% | +9.515 KiB | 9.4% → 13.3% | 18.5 KiB → 28 KiB |   74 → 87 | `FunctionRareData ← Function ←(several paths)– <root>`                                     |
|     new |  +4.89 KiB |  0.0% → 2.3% |    0 B → 4.89 KiB |     0 → 1 | `FunctionRareData ← Function ←.pathComponentsForAnchor– Window ←(several paths)– <root>`   |
| removed | -4.734 KiB |  2.4% → 0.0% |    4.73 KiB → 0 B |     1 → 0 | `FunctionRareData ← Function ←.hasClassMatchingRegexp– Window ←(several paths)– <root>`    |
|     new | +4.128 KiB |  0.0% → 2.0% |    0 B → 4.13 KiB |     0 → 1 | `FunctionRareData ← Function ← Window ←(several paths)– <root>`                            |
| removed | -3.375 KiB |  1.7% → 0.0% |    3.38 KiB → 0 B |     1 → 0 | `FunctionRareData ← Function ←.fontSizeFromComputedStyle– Window ←(several paths)– <root>` |

##### `FunctionCodeBlock`

| Change |       Delta |             % |               Size | Instances | Path                                                                                                                      |
| -----: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| +45.8% |  +24.79 KiB | 10.1% → 14.4% |  54.2 KiB → 79 KiB |   27 → 29 | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– <root>`                                                         |
| -13.6% | -18.453 KiB | 25.3% → 21.4% |  135 KiB → 117 KiB |   42 → 39 | `FunctionCodeBlock ←(several paths)– <root>`                                                                              |
| -14.7% | -16.763 KiB | 21.3% → 17.7% | 114 KiB → 96.9 KiB |   33 → 30 | `FunctionCodeBlock ← <root>`                                                                                              |
|    new |  +8.187 KiB |   0.0% → 1.5% |     0 B → 8.19 KiB |     0 → 2 | `FunctionCodeBlock ← FunctionExecutable ← Function ←.allWithImplicitReady– JSLexicalEnvironment ←(several paths)– <root>` |
|    new |    +7.5 KiB |   0.0% → 1.4% |      0 B → 7.5 KiB |     0 → 3 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←(several paths)– <root>`                           |

##### `Node`

| Change |  Delta |             % |                Size | Instances | Path                                     |
| -----: | -----: | ------------: | ------------------: | --------: | ---------------------------------------- |
|  +4.2% | +304 B | 51.2% → 51.4% | 7.01 KiB → 7.31 KiB |         4 | `Node ←(several paths)– <root>`          |
| +21.7% | +256 B |   8.4% → 9.9% |  1.15 KiB → 1.4 KiB |         5 | `Node ← Window ←(several paths)– <root>` |

##### `Element`

| Change |  Delta |             % |                Size | Instances | Path                               |
| -----: | -----: | ------------: | ------------------: | --------: | ---------------------------------- |
|  +0.8% | +256 B | 53.9% → 54.1% | 30.4 KiB → 30.7 KiB |         4 | `Element ←(several paths)– <root>` |

##### `HTMLElement`

| Change |  Delta |             % |                Size | Instances | Path                                   |
| -----: | -----: | ------------: | ------------------: | --------: | -------------------------------------- |
|  +0.9% | +256 B | 32.8% → 33.0% | 27.3 KiB → 27.6 KiB |         5 | `HTMLElement ←(several paths)– <root>` |

##### `EventTarget`

| Change |  Delta |             % |                Size | Instances | Path                                   |
| -----: | -----: | ------------: | ------------------: | --------: | -------------------------------------- |
|  +6.3% | +160 B | 39.0% → 40.4% | 2.47 KiB → 2.63 KiB |         7 | `EventTarget ←(several paths)– <root>` |

##### `HTMLHeadingElement`

| Change |  Delta |             % |          Size | Instances | Path                                          |
| -----: | -----: | ------------: | ------------: | --------: | --------------------------------------------- |
| +32.8% | +144 B | 17.6% → 22.1% | 439 B → 583 B |         2 | `HTMLHeadingElement ←(several paths)– <root>` |

##### `StructureRareData`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                 |
| ------: | ---------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| +219.6% |  +6.14 KiB |   0.6% → 2.0% |  2.8 KiB → 8.94 KiB |     5 → 7 | `StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– <root>`                             |
|  +12.3% | +6.031 KiB | 10.8% → 12.1% |   49 KiB → 55.1 KiB | 134 → 139 | `StructureRareData ← Structure ←(several paths)– <root>`                                                             |
|  -21.6% | -5.703 KiB |   5.8% → 4.6% | 26.4 KiB → 20.7 KiB |   66 → 58 | `StructureRareData ← Structure ← <root>`                                                                             |
|  -42.0% | -4.781 KiB |   2.5% → 1.5% | 11.4 KiB → 6.59 KiB |     8 → 6 | `StructureRareData ← Structure ← StructureRareData ← Structure ← <root>`                                             |
| removed | -4.375 KiB |   1.0% → 0.0% |      4.38 KiB → 0 B |     1 → 0 | `StructureRareData ← Structure ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← <root>` |

##### `Map`

| Change | Delta |             % |                Size | Instances | Path                           |
| -----: | ----: | ------------: | ------------------: | --------: | ------------------------------ |
|  +0.6% | +98 B | 53.9% → 54.1% | 17.4 KiB → 17.5 KiB |         7 | `Map ←(several paths)– <root>` |

##### `CharacterData`

| Change | Delta |      % |                Size | Instances | Path                                     |
| -----: | ----: | -----: | ------------------: | --------: | ---------------------------------------- |
|  +1.2% | +48 B | 100.0% | 3.85 KiB → 3.89 KiB |         4 | `CharacterData ←(several paths)– <root>` |

##### `Window`

| Change |       Delta |             % |              Size | Instances | Path                              |
| -----: | ----------: | ------------: | ----------------: | --------: | --------------------------------- |
|  -2.8% | -21.342 KiB | 73.5% → 73.0% | 762 KiB → 740 KiB |        11 | `Window ←(several paths)– <root>` |
|  -0.3% |      -752 B | 26.5% → 27.0% | 275 KiB → 274 KiB |         2 | `Window ← <root>`                 |

##### `Structure`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                 |
| ------: | ---------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------- |
|   +1.9% | +7.845 KiB | 21.3% → 21.8% |   404 KiB → 412 KiB | 512 → 521 | `Structure ←(several paths)– <root>`                                                                 |
|  -14.1% |  -7.09 KiB |   2.7% → 2.3% | 50.4 KiB → 43.3 KiB | 150 → 145 | `Structure ← <root>`                                                                                 |
| +255.7% | +5.953 KiB |   0.1% → 0.4% | 2.33 KiB → 8.28 KiB |     3 → 5 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– <root>` |
|  +16.2% | +5.718 KiB |   1.9% → 2.2% | 35.2 KiB → 40.9 KiB |   33 → 34 | `Structure ← StructureRareData ← Structure ←(several paths)– <root>`                                 |
|  -25.5% | -5.109 KiB |   1.1% → 0.8% |   20 KiB → 14.9 KiB |   21 → 17 | `Structure ← StructureRareData ← Structure ← <root>`                                                 |

##### `Object`

|  Change |       Delta |            % |                Size | Instances | Path                                                                      |
| ------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------- |
| +125.6% | +13.088 KiB |  0.2% → 0.4% | 10.4 KiB → 23.5 KiB |     1 → 2 | `Object ←.:– Object ←(several paths)– <root>`                             |
| removed | -13.088 KiB |  0.2% → 0.0% |      13.1 KiB → 0 B |     1 → 0 | `Object ←.filters– Object ←(several paths)– <root>`                       |
|  -40.5% |  -5.076 KiB |  0.2% → 0.1% | 12.5 KiB → 7.45 KiB |     5 → 3 | `Object ←.prototype– Function ←(several paths)– InjectedScript ← <root>`  |
| +204.4% |  +5.076 KiB | <0.1% → 0.1% | 2.48 KiB → 7.56 KiB |     1 → 3 | `Object ←.homeObject– Function ←(several paths)– InjectedScript ← <root>` |
|  -46.8% |  -4.054 KiB |         0.1% | 8.67 KiB → 4.62 KiB |     2 → 1 | `Object ←.tk– Object ←(several paths)– <root>`                            |

##### `UnlinkedFunctionExecutable`

|  Change |      Delta |             % |        Size | Instances | Path                                                                                                                                          |
| ------: | ---------: | ------------: | ----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   -0.1% | -1.351 KiB | 82.2% → 82.1% |    1.33 MiB |     3,207 | `UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                         |
| removed |     -384 B |  <0.1% → 0.0% | 384 B → 0 B |     4 → 0 | `UnlinkedFunctionExecutable ← FunctionExecutable ←(several paths)– Object ←.filters– Object ←(several paths)– <root>`                         |
|     new |     +384 B |  0.0% → <0.1% | 0 B → 384 B |     0 → 4 | `UnlinkedFunctionExecutable ← FunctionExecutable ←(several paths)– Object ←.:– Object ←(several paths)– <root>`                               |
| removed |      -96 B |  <0.1% → 0.0% |  96 B → 0 B |     1 → 0 | `UnlinkedFunctionExecutable ← FunctionExecutable ← Function ←.requestIdleCallbackInternal– Object ←(several paths)– <root>`                   |
| removed |      -96 B |  <0.1% → 0.0% |  96 B → 0 B |     1 → 0 | `UnlinkedFunctionExecutable ← FunctionExecutable ← Function ←.set– Object ←.scrollTop– Object ←.propHooks– Function ←(several paths)– <root>` |

##### `UnlinkedFunctionCodeBlock`

| Change |      Delta |     % |                Size |     Instances | Path                                                                                                                                       |
| -----: | ---------: | ----: | ------------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------ |
|  -0.1% | -1.351 KiB | 89.2% |            1.04 MiB | 1,196 → 1,194 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                          |
|  +0.2% |      +92 B |  3.5% | 42.3 KiB → 42.4 KiB |            82 | `UnlinkedFunctionCodeBlock ←(several paths)– <root>`                                                                                       |
|    ~0% |       +2 B | 23.6% |             282 KiB |           265 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>` |

##### `Array`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                                   |
| ------: | ---------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
|  +79.7% | +3.968 KiB |   0.8% → 1.4% | 4.98 KiB → 8.95 KiB |     1 → 2 | `Array ←.c– JSLexicalEnvironment ←(several paths)– <root>`                                                                             |
| removed | -3.968 KiB |   0.6% → 0.0% |      3.97 KiB → 0 B |     1 → 0 | `Array ←.p– JSLexicalEnvironment ←(several paths)– <root>`                                                                             |
|   -0.4% |     -530 B | 21.1% → 21.0% |             137 KiB |   52 → 51 | `Array ←(several paths)– <root>`                                                                                                       |
|   -2.4% |     -198 B |   1.3% → 1.2% | 8.13 KiB → 7.94 KiB |         2 | `Array ←.fns– JSLexicalEnvironment ←(several paths)– Object ←.postEdit– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>` |
| removed |     -104 B |  <0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `Array ←.colgroup– Object ←.wrapMap– JSLexicalEnvironment ←(several paths)– <root>`                                                    |

##### `Range`

|  Change |      Delta |             % |           Size | Instances | Path                                                  |
| ------: | ---------: | ------------: | -------------: | --------: | ----------------------------------------------------- |
| removed | -3.705 KiB | 100.0% → 0.0% | 3.71 KiB → 0 B |     1 → 0 | `Range ← Structure ← Window ←(several paths)– <root>` |
|     new | +3.548 KiB | 0.0% → 100.0% | 0 B → 3.55 KiB |     0 → 1 | `Range ←(several paths)– <root>`                      |

##### `DOMRect`

|  Change |  Delta |           % |        Size | Instances | Path                                           |
| ------: | -----: | ----------: | ----------: | --------: | ---------------------------------------------- |
| removed | -525 B | 1.2% → 0.0% | 525 B → 0 B |     1 → 0 | `DOMRect ← Structure ←(several paths)– <root>` |
|     new | +477 B | 0.0% → 1.1% | 0 B → 477 B |     0 → 1 | `DOMRect ←(several paths)– <root>`             |

##### `StructureChain`

|  Change | Delta |           % |          Size | Instances | Path                                                                                                                                                        |
| ------: | ----: | ----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +12.5% | +16 B | 2.8% → 3.2% | 128 B → 144 B |     8 → 9 | `StructureChain ← Structure ← <root>`                                                                                                                       |
| +100.0% | +16 B | 0.4% → 0.7% |   16 B → 32 B |     1 → 2 | `StructureChain ← Structure ← Structure ← Structure ← Structure ← Structure ← Object ←.:– Object ←(several paths)– <root>`                                  |
|   -6.7% | -16 B | 5.3% → 5.0% | 240 B → 224 B |   15 → 14 | `StructureChain ← Structure ←(several paths)– <root>`                                                                                                       |
|  -50.0% | -16 B | 0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `StructureChain ← Structure ← EventFactory ←.eventFactory– JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>`             |
|  -50.0% | -16 B | 0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `StructureChain ← Structure ← ExposureLogTracker ←.exposureLogTracker– JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>` |
