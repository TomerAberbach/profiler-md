# Heap snapshot diff

Allocated 10.4 MiB (+14.46 KiB, +0.1%) across 109,569 → 109,640 nodes and 307,833 → 307,962 edges.

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

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

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

Constructors with the largest decrease in self size.

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

#### Instances

Instances with the largest change in contribution to each constructor's self size.

##### `FunctionCodeBlock`

| Change |       Delta |             % |               Size | Instances | Path                                                                         |
| -----: | ----------: | ------------: | -----------------: | --------: | ---------------------------------------------------------------------------- |
| -13.0% | -14.376 KiB | 20.7% → 17.6% | 110 KiB → 95.9 KiB |   33 → 30 | `<root>`                                                                     |
|  +5.7% | +11.507 KiB | 37.7% → 38.9% |  201 KiB → 212 KiB |   75 → 76 | `(GC root)`                                                                  |
|    new |  +8.187 KiB |   0.0% → 1.5% |     0 B → 8.19 KiB |     0 → 2 | `FunctionExecutable ← Function ← .allWithImplicitReady JSLexicalEnvironment` |
|    new |    +7.5 KiB |   0.0% → 1.4% |      0 B → 7.5 KiB |     0 → 3 | `FunctionExecutable ← FunctionRareData ← Function`                           |
|    new |  +5.015 KiB |   0.0% → 0.9% |     0 B → 5.02 KiB |     0 → 2 | `FunctionExecutable ← Function ← .anyFailed JSLexicalEnvironment`            |

##### `FunctionRareData`

|  Change |      Delta |             % |                Size | Instances | Path                                                      |
| ------: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------- |
|  +17.1% | +1.015 KiB | 32.8% → 33.0% | 5.94 KiB → 6.95 KiB |   76 → 89 | `Function`                                                |
|  +33.3% |      +80 B |   1.3% → 1.5% |       240 B → 320 B |     3 → 4 | `Function ← .init Object`                                 |
|  +14.3% |      +80 B |          3.0% |       560 B → 640 B |     7 → 8 | `Function ← <root>`                                       |
| removed |      -80 B |   0.4% → 0.0% |          80 B → 0 B |     1 → 0 | `Function ← .splitModuleKey JSLexicalEnvironment`         |
| removed |      -80 B |   0.4% → 0.0% |          80 B → 0 B |     1 → 0 | `Function ← .declarator Object ← .ext.testKitchen Object` |

##### `Structure`

| Change |      Delta |             % |                Size |     Instances | Path                         |
| -----: | ---------: | ------------: | ------------------: | ------------: | ---------------------------- |
|  +2.7% | +5.468 KiB | 15.0% → 15.5% |   200 KiB → 206 KiB | 1,832 → 1,882 | `(GC root)`                  |
| +15.4% |     +672 B |   0.3% → 0.4% | 4.27 KiB → 4.92 KiB |       39 → 45 | `Function ← Window`          |
|  -2.7% |     -560 B |          1.5% | 20.5 KiB → 19.9 KiB |     187 → 182 | `<root>`                     |
|  -1.7% |     -560 B |          2.4% | 32.2 KiB → 31.6 KiB |     294 → 289 | `Window`                     |
| -35.7% |     -560 B |          0.1% |  1.53 KiB → 1,008 B |        14 → 9 | `Function ← Window ← <root>` |

##### `Function`

| Change |      Delta |           % |                Size | Instances | Path                    |
| -----: | ---------: | ----------: | ------------------: | --------: | ----------------------- |
| +49.3% | +2.704 KiB | 1.3% → 1.9% | 5.48 KiB → 8.19 KiB | 163 → 253 | `Window ← <root>`       |
|  +7.2% | +1.652 KiB | 5.3% → 5.7% |   23 KiB → 24.7 KiB | 711 → 762 | `Window`                |
|  +1.9% |     +563 B | 6.7% → 6.8% |   29 KiB → 29.5 KiB | 867 → 883 | `(GC root)`             |
| -23.0% |     -272 B | 0.3% → 0.2% |    1.16 KiB → 912 B |   35 → 27 | `GetterSetter ← Window` |
| -66.7% |     -104 B |       <0.1% |        156 B → 52 B |     3 → 1 | `.RegExp Window`        |

##### `UnlinkedFunctionCodeBlock`

| Change |      Delta |     % |              Size |     Instances | Path        |
| -----: | ---------: | ----: | ----------------: | ------------: | ----------- |
|  -0.1% | -1.085 KiB | 96.5% | 929 KiB → 928 KiB | 1,647 → 1,645 | `(GC root)` |

##### `StructureChain`

|  Change | Delta |             % |          Size | Instances | Path                                                                                     |
| ------: | ----: | ------------: | ------------: | --------: | ---------------------------------------------------------------------------------------- |
|   -1.7% | -16 B | 21.3% → 21.0% | 960 B → 944 B |   60 → 59 | `(GC root)`                                                                              |
|  +12.5% | +16 B |   2.8% → 3.2% | 128 B → 144 B |     8 → 9 | `Structure ← <root>`                                                                     |
| +100.0% | +16 B |   0.4% → 0.7% |   16 B → 32 B |     1 → 2 | `Structure ← Structure ← Structure ← Structure ← Structure ← Object ← .: Object`         |
|  -50.0% | -16 B |   0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `Structure ← EventFactory ← .eventFactory JSLexicalEnvironment ← .tk Object`             |
|  -50.0% | -16 B |   0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `Structure ← ExposureLogTracker ← .exposureLogTracker JSLexicalEnvironment ← .tk Object` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

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

Constructors with the largest decrease in retained size.

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

#### Instances

Instances with the largest change in contribution to each constructor's retained size.

##### `FunctionExecutable`

|   Change |       Delta |            % |                Size | Instances | Path                                                    |
| -------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------- |
|   +28.3% | +27.625 KiB |  4.8% → 6.1% |  97.6 KiB → 125 KiB | 238 → 240 | `(GC root)`                                             |
|   +96.5% |     +12 KiB |  0.6% → 1.2% | 12.4 KiB → 24.4 KiB |  95 → 191 | `Function ← Window ← <root>`                            |
|   +80.0% |    +8.5 KiB |  0.5% → 0.9% | 10.6 KiB → 19.1 KiB |   67 → 75 | `FunctionRareData ← Function`                           |
| +3800.0% |  +8.312 KiB | <0.1% → 0.4% |    224 B → 8.53 KiB |     1 → 2 | `Function ← .allWithImplicitReady JSLexicalEnvironment` |
| +2350.0% |   +5.14 KiB | <0.1% → 0.3% |    224 B → 5.36 KiB |     1 → 2 | `Function ← .anyFailed JSLexicalEnvironment`            |

##### `JSLexicalEnvironment`

|  Change |       Delta |             % |               Size | Instances | Path                                             |
| ------: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------ |
|   +4.9% | +25.826 KiB | 65.2% → 66.3% |  529 KiB → 555 KiB | 239 → 240 | `(GC root)`                                      |
|  -48.7% |   -1.71 KiB |   0.4% → 0.2% | 3.52 KiB → 1.8 KiB |     2 → 1 | `.tk Object`                                     |
|     new |   +1.71 KiB |   0.0% → 0.2% |     0 B → 1.71 KiB |     0 → 1 | `.testKitchen Object`                            |
|  +90.6% |  +1.359 KiB |   0.2% → 0.3% | 1.5 KiB → 2.86 KiB |     1 → 2 | `Function ← [2] Array ← .c JSLexicalEnvironment` |
| removed |  -1.359 KiB |   0.2% → 0.0% |     1.36 KiB → 0 B |     1 → 0 | `Function ← [2] Array ← .p JSLexicalEnvironment` |

##### `Function`

|   Change |       Delta |             % |                Size | Instances | Path                                         |
| -------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------- |
|   +54.4% | +13.435 KiB |   0.8% → 1.3% | 24.7 KiB → 38.1 KiB | 163 → 253 | `Window ← <root>`                            |
|    +1.9% | +11.179 KiB | 19.3% → 19.5% |   574 KiB → 585 KiB | 867 → 883 | `(GC root)`                                  |
|    +8.8% | +10.067 KiB |   3.9% → 4.2% |   115 KiB → 125 KiB | 711 → 762 | `Window`                                     |
| +3337.5% |  +8.343 KiB |  <0.1% → 0.3% |    256 B → 8.59 KiB |     1 → 2 | `.allWithImplicitReady JSLexicalEnvironment` |
| +2068.8% |  +5.171 KiB |  <0.1% → 0.2% |    256 B → 5.42 KiB |     1 → 2 | `.anyFailed JSLexicalEnvironment`            |

##### `FunctionRareData`

|  Change |      Delta |            % |              Size | Instances | Path                                           |
| ------: | ---------: | -----------: | ----------------: | --------: | ---------------------------------------------- |
|  +50.1% | +9.515 KiB | 9.6% → 13.6% | 19 KiB → 28.5 KiB |   76 → 89 | `Function`                                     |
|     new |  +4.89 KiB |  0.0% → 2.3% |    0 B → 4.89 KiB |     0 → 1 | `Function ← .pathComponentsForAnchor Window`   |
| removed | -4.734 KiB |  2.4% → 0.0% |    4.73 KiB → 0 B |     1 → 0 | `Function ← .hasClassMatchingRegexp Window`    |
|     new | +4.128 KiB |  0.0% → 2.0% |    0 B → 4.13 KiB |     0 → 1 | `Function ← Window`                            |
| removed | -3.375 KiB |  1.7% → 0.0% |    3.38 KiB → 0 B |     1 → 0 | `Function ← .fontSizeFromComputedStyle Window` |

##### `FunctionCodeBlock`

| Change |       Delta |             % |               Size | Instances | Path                                                                         |
| -----: | ----------: | ------------: | -----------------: | --------: | ---------------------------------------------------------------------------- |
| -14.7% | -16.763 KiB | 21.3% → 17.7% | 114 KiB → 96.9 KiB |   33 → 30 | `<root>`                                                                     |
|  +5.7% | +11.508 KiB | 37.6% → 38.9% |  201 KiB → 213 KiB |   75 → 76 | `(GC root)`                                                                  |
|    new |  +8.187 KiB |   0.0% → 1.5% |     0 B → 8.19 KiB |     0 → 2 | `FunctionExecutable ← Function ← .allWithImplicitReady JSLexicalEnvironment` |
|    new |    +7.5 KiB |   0.0% → 1.4% |      0 B → 7.5 KiB |     0 → 3 | `FunctionExecutable ← FunctionRareData ← Function`                           |
|    new |  +5.015 KiB |   0.0% → 0.9% |     0 B → 5.02 KiB |     0 → 2 | `FunctionExecutable ← Function ← .anyFailed JSLexicalEnvironment`            |

##### `Node`

| Change |  Delta |             % |               Size | Instances | Path        |
| -----: | -----: | ------------: | -----------------: | --------: | ----------- |
|  +2.5% | +304 B | 88.0% → 86.7% |  12 KiB → 12.3 KiB |         7 | `(GC root)` |
| +21.7% | +256 B |   8.4% → 9.9% | 1.15 KiB → 1.4 KiB |         5 | `Window`    |

##### `Element`

| Change |  Delta |     % |                Size | Instances | Path        |
| -----: | -----: | ----: | ------------------: | --------: | ----------- |
|  +0.5% | +256 B | 97.1% | 54.9 KiB → 55.1 KiB |         7 | `(GC root)` |

##### `HTMLElement`

| Change |  Delta |             % |                Size | Instances | Path        |
| -----: | -----: | ------------: | ------------------: | --------: | ----------- |
|  +0.5% | +256 B | 57.4% → 57.5% | 47.8 KiB → 48.1 KiB |         8 | `(GC root)` |

##### `EventTarget`

| Change |  Delta |             % |                Size | Instances | Path        |
| -----: | -----: | ------------: | ------------------: | --------: | ----------- |
|  +6.3% | +160 B | 39.0% → 40.4% | 2.47 KiB → 2.63 KiB |         7 | `(GC root)` |

##### `HTMLHeadingElement`

| Change |  Delta |             % |             Size | Instances | Path        |
| -----: | -----: | ------------: | ---------------: | --------: | ----------- |
| +14.0% | +144 B | 41.0% → 44.2% | 1 KiB → 1.14 KiB |         4 | `(GC root)` |

##### `StructureRareData`

|  Change |       Delta |             % |                Size | Instances | Path                                                                                                                             |
| ------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
|  +60.3% | +39.078 KiB | 14.3% → 22.9% |  64.8 KiB → 104 KiB | 189 → 204 | `(GC root)`                                                                                                                      |
|  -21.1% |  -5.703 KiB |   6.0% → 4.7% |   27 KiB → 21.3 KiB |   72 → 64 | `Structure ← <root>`                                                                                                             |
|  -42.0% |  -4.781 KiB |   2.5% → 1.5% | 11.4 KiB → 6.59 KiB |     8 → 6 | `Structure ← StructureRareData ← Structure ← <root>`                                                                             |
| removed |  -4.375 KiB |   1.0% → 0.0% |      4.38 KiB → 0 B |     1 → 0 | `Structure ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← <root>`                                 |
| removed |  -4.171 KiB |   0.9% → 0.0% |      4.17 KiB → 0 B |     1 → 0 | `Structure ← StructureRareData ← Structure ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← <root>` |

##### `Map`

| Change | Delta |             % |                Size | Instances | Path        |
| -----: | ----: | ------------: | ------------------: | --------: | ----------- |
|  +0.6% | +98 B | 53.9% → 54.1% | 17.4 KiB → 17.5 KiB |         7 | `(GC root)` |

##### `CharacterData`

| Change | Delta |      % |                Size | Instances | Path        |
| -----: | ----: | -----: | ------------------: | --------: | ----------- |
|  +1.2% | +48 B | 100.0% | 3.85 KiB → 3.89 KiB |         4 | `(GC root)` |

##### `Window`

| Change |       Delta |             % |              Size | Instances | Path        |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------- |
|  -2.8% | -21.342 KiB | 73.5% → 73.0% | 762 KiB → 740 KiB |        11 | `(GC root)` |
|  -0.3% |      -752 B | 26.5% → 27.0% | 275 KiB → 274 KiB |         2 | `<root>`    |

##### `Structure`

| Change |       Delta |               % |                Size |     Instances | Path                                                                     |
| -----: | ----------: | --------------: | ------------------: | ------------: | ------------------------------------------------------------------------ |
|  +2.9% | +98.205 KiB | 176.8% → 182.3% | 3.27 MiB → 3.37 MiB | 1,832 → 1,882 | `(GC root)`                                                              |
|  -7.7% |   -7.09 KiB |     4.9% → 4.5% | 92.7 KiB → 85.6 KiB |     187 → 182 | `<root>`                                                                 |
| -25.5% |  -5.109 KiB |     1.1% → 0.8% |   20 KiB → 14.9 KiB |       21 → 17 | `StructureRareData ← Structure ← <root>`                                 |
| -43.2% |  -4.593 KiB |     0.6% → 0.3% | 10.6 KiB → 6.03 KiB |         5 → 4 | `StructureRareData ← Structure ← StructureRareData ← Structure ← <root>` |
|  -3.8% |  -4.517 KiB |     6.3% → 6.0% |   119 KiB → 114 KiB |     294 → 289 | `Window`                                                                 |

##### `Object`

|  Change |       Delta |            % |                Size | Instances | Path                            |
| ------: | ----------: | -----------: | ------------------: | --------: | ------------------------------- |
| +125.6% | +13.088 KiB |  0.2% → 0.4% | 10.4 KiB → 23.5 KiB |     1 → 2 | `.: Object`                     |
| removed | -13.088 KiB |  0.2% → 0.0% |      13.1 KiB → 0 B |     1 → 0 | `.filters Object`               |
|  -40.5% |  -5.076 KiB |  0.2% → 0.1% | 12.5 KiB → 7.45 KiB |     5 → 3 | `.prototype Function ← <root>`  |
| +204.4% |  +5.076 KiB | <0.1% → 0.1% | 2.48 KiB → 7.56 KiB |     1 → 3 | `.homeObject Function ← <root>` |
|  -46.8% |  -4.054 KiB |         0.1% | 8.67 KiB → 4.62 KiB |     2 → 1 | `.tk Object`                    |

##### `UnlinkedFunctionExecutable`

|  Change |      Delta |            % |        Size | Instances | Path                                                                                    |
| ------: | ---------: | -----------: | ----------: | --------: | --------------------------------------------------------------------------------------- |
|   -0.1% | -1.349 KiB |       110.9% |     1.8 MiB |     3,851 | `(GC root)`                                                                             |
| removed |     -384 B | <0.1% → 0.0% | 384 B → 0 B |     4 → 0 | `FunctionExecutable ← .filters Object`                                                  |
|     new |     +384 B | 0.0% → <0.1% | 0 B → 384 B |     0 → 4 | `FunctionExecutable ← .: Object`                                                        |
| removed |      -96 B | <0.1% → 0.0% |  96 B → 0 B |     1 → 0 | `FunctionExecutable ← Function ← .requestIdleCallbackInternal Object`                   |
| removed |      -96 B | <0.1% → 0.0% |  96 B → 0 B |     1 → 0 | `FunctionExecutable ← Function ← .set Object ← .scrollTop Object ← .propHooks Function` |

##### `UnlinkedFunctionCodeBlock`

| Change |      Delta |      % |     Size |     Instances | Path        |
| -----: | ---------: | -----: | -------: | ------------: | ----------- |
|  -0.1% | -1.259 KiB | 127.7% | 1.49 MiB | 1,647 → 1,645 | `(GC root)` |

##### `Array`

|  Change |      Delta |            % |                Size | Instances | Path                                                                         |
| ------: | ---------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------- |
|  +79.7% | +3.968 KiB |  0.8% → 1.4% | 4.98 KiB → 8.95 KiB |     1 → 2 | `.c JSLexicalEnvironment`                                                    |
| removed | -3.968 KiB |  0.6% → 0.0% |      3.97 KiB → 0 B |     1 → 0 | `.p JSLexicalEnvironment`                                                    |
|   -0.3% |     -530 B |        25.8% |   168 KiB → 167 KiB |   54 → 53 | `(GC root)`                                                                  |
|   -2.4% |     -198 B |  1.3% → 1.2% | 8.13 KiB → 7.94 KiB |         2 | `.fns JSLexicalEnvironment ← .postEdit Object ← .hooks JSLexicalEnvironment` |
| removed |     -104 B | <0.1% → 0.0% |         104 B → 0 B |     1 → 0 | `.colgroup Object ← .wrapMap JSLexicalEnvironment`                           |

##### `Range`

|  Change |      Delta |             % |           Size | Instances | Path                 |
| ------: | ---------: | ------------: | -------------: | --------: | -------------------- |
| removed | -3.705 KiB | 100.0% → 0.0% | 3.71 KiB → 0 B |     1 → 0 | `Structure ← Window` |
|     new | +3.548 KiB | 0.0% → 100.0% | 0 B → 3.55 KiB |     0 → 1 | `(GC root)`          |

##### `DOMRect`

| Change | Delta |           % |               Size | Instances | Path        |
| -----: | ----: | ----------: | -----------------: | --------: | ----------- |
|  -3.8% | -48 B | 2.9% → 2.8% | 1.25 KiB → 1.2 KiB |         2 | `(GC root)` |

##### `StructureChain`

|  Change | Delta |             % |          Size | Instances | Path                                                                                     |
| ------: | ----: | ------------: | ------------: | --------: | ---------------------------------------------------------------------------------------- |
|   -1.7% | -16 B | 21.3% → 21.0% | 960 B → 944 B |   60 → 59 | `(GC root)`                                                                              |
|  +12.5% | +16 B |   2.8% → 3.2% | 128 B → 144 B |     8 → 9 | `Structure ← <root>`                                                                     |
| +100.0% | +16 B |   0.4% → 0.7% |   16 B → 32 B |     1 → 2 | `Structure ← Structure ← Structure ← Structure ← Structure ← Object ← .: Object`         |
|  -50.0% | -16 B |   0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `Structure ← EventFactory ← .eventFactory JSLexicalEnvironment ← .tk Object`             |
|  -50.0% | -16 B |   0.7% → 0.4% |   32 B → 16 B |     2 → 1 | `Structure ← ExposureLogTracker ← .exposureLogTracker JSLexicalEnvironment ← .tk Object` |
