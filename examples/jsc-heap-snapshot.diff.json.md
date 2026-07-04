# Heap snapshot diff

Allocated 9.77 MB → 10.4 MB (+631 kB, +6.5%) across 142,769 → 144,697 nodes and 431,899 → 438,955 edges.

| Category | Change |    Delta |             % |              Size |           Nodes |
| -------- | -----: | -------: | ------------: | ----------------: | --------------: |
| internal |  +0.8% | +44.9 kB | 54.2% → 51.3% | 5.29 MB → 5.34 MB | 70,867 → 71,965 |
| code     | +31.1% |  +578 kB | 19.0% → 23.4% | 1.86 MB → 2.43 MB | 15,594 → 16,071 |
| object   |    ~0% |     +3 B |   7.6% → 7.2% |            745 kB |           8,886 |
| closure  |  +0.2% | +1.13 kB |   7.0% → 6.5% |   679 kB → 680 kB | 19,236 → 19,271 |
| string   |  +1.3% | +6.32 kB |   5.0% → 4.8% |   492 kB → 498 kB | 14,640 → 14,927 |
| native   |  +0.1% |   +444 B |   4.3% → 4.1% |   424 kB → 425 kB |   8,464 → 8,476 |
| built-in |    ~0% |    +65 B |   2.1% → 2.0% |            203 kB |           1,013 |
| array    |  +1.3% |   +848 B |   0.7% → 0.6% | 64.9 kB → 65.8 kB |   3,731 → 3,748 |
| regexp   |   0.0% |      0 B |          0.1% |           6.14 kB |             128 |
| unknown  |  +0.9% |    +38 B |         <0.1% | 4.24 kB → 4.28 kB |       120 → 122 |
| symbol   |   0.0% |      0 B |         <0.1% |            1.1 kB |              67 |
| number   |   0.0% |      0 B |         <0.1% |             383 B |              11 |
| bigint   |   0.0% |      0 B |         <0.1% |             238 B |              12 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

|  Change |    Delta |             % |              Size |       Instances | Constructor                  |
| ------: | -------: | ------------: | ----------------: | --------------: | ---------------------------- |
|     new |  +440 kB |   0.0% → 4.2% |      0 B → 440 kB |         0 → 122 | `FunctionCodeBlock`          |
|     new |  +131 kB |   0.0% → 1.3% |      0 B → 131 kB |         0 → 297 | `UnlinkedFunctionCodeBlock`  |
|  +34.7% |   +57 kB |   1.7% → 2.1% |   164 kB → 222 kB |   3,427 → 4,615 | `PropertyTable`              |
|   +0.2% | +3.58 kB | 15.2% → 14.3% | 1.48 MB → 1.49 MB | 11,598 → 11,626 | `FunctionExecutable`         |
|   +1.0% | +2.88 kB |   3.0% → 2.9% |   297 kB → 300 kB |   3,093 → 3,123 | `UnlinkedFunctionExecutable` |
|   +0.1% | +1.54 kB | 12.2% → 11.5% |           1.19 MB | 24,843 → 24,875 | `DOMAttributeGetterSetter`   |
|   +5.4% | +1.28 kB |          0.2% | 23.5 kB → 24.8 kB |       367 → 387 | `SymbolTable`                |
|   +0.2% | +1.13 kB |   6.9% → 6.5% |   674 kB → 675 kB | 19,091 → 19,126 | `Function`                   |
|  +14.8% |   +848 B |          0.1% | 5.71 kB → 6.56 kB |        92 → 109 | `Immutable Butterfly`        |
|   +0.6% |   +480 B |   0.8% → 0.7% | 74.2 kB → 74.6 kB |   1,228 → 1,236 | `JSLexicalEnvironment`       |
|     new |   +458 B |  0.0% → <0.1% |       0 B → 458 B |           0 → 1 | `UnlinkedProgramCodeBlock`   |
|   +0.1% |   +128 B |   1.2% → 1.1% |            114 kB |   3,559 → 3,563 | `CustomGetterSetter`         |
| +320.0% |    +96 B |         <0.1% |      30 B → 126 B |           1 → 4 | `WheelEvent`                 |
|  +77.9% |    +74 B |         <0.1% |      95 B → 169 B |           2 → 4 | `MouseEvent`                 |
|   +0.1% |    +64 B |   0.6% → 0.5% | 55.6 kB → 55.7 kB |   1,596 → 1,598 | `HashMapBucket`              |
|     ~0% |    +64 B |   1.7% → 1.6% |            170 kB |             761 | `Set`                        |
|  +75.9% |    +60 B |         <0.1% |      79 B → 139 B |           2 → 4 | `PointerEvent`               |
|   +6.8% |    +51 B |         <0.1% |     747 B → 798 B |         18 → 19 | `ShadowRoot`                 |
|  +17.6% |    +51 B |         <0.1% |     290 B → 341 B |         10 → 11 | `DocumentFragment`           |
|   +0.5% |    +48 B |          0.1% | 9.83 kB → 9.88 kB |       202 → 203 | `HTMLImageElement`           |

#### Progressions

Constructors with the largest decrease in self size.

| Change |    Delta |             % |             Size |       Instances | Constructor         |
| -----: | -------: | ------------: | ---------------: | --------------: | ------------------- |
|  -1.3% | -10.5 kB |   8.4% → 7.8% |  817 kB → 806 kB |   8,506 → 8,397 | `StructureRareData` |
|  -0.2% |  -5.6 kB | 27.6% → 25.9% | 2.7 MB → 2.69 MB | 24,070 → 24,020 | `Structure`         |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

| Change |    Delta |             % |              Size |       Instances | Constructor                  |
| -----: | -------: | ------------: | ----------------: | --------------: | ---------------------------- |
|    new |  +441 kB |   0.0% → 4.2% |      0 B → 441 kB |         0 → 122 | `FunctionCodeBlock`          |
| +15.2% |  +256 kB | 17.2% → 18.6% | 1.68 MB → 1.94 MB | 11,598 → 11,626 | `FunctionExecutable`         |
|    new |  +138 kB |   0.0% → 1.3% |      0 B → 138 kB |         0 → 297 | `UnlinkedFunctionCodeBlock`  |
| +32.7% | +97.2 kB |   3.0% → 3.8% |   297 kB → 394 kB |   3,093 → 3,123 | `UnlinkedFunctionExecutable` |
|  +2.6% | +84.6 kB | 33.5% → 32.3% | 3.27 MB → 3.36 MB | 19,091 → 19,126 | `Function`                   |
| +35.2% |   +57 kB |   1.7% → 2.1% |   162 kB → 219 kB |   3,427 → 4,615 | `PropertyTable`              |
|  +0.8% | +38.1 kB | 47.5% → 45.0% | 4.64 MB → 4.68 MB | 24,070 → 24,020 | `Structure`                  |
|  +1.4% | +35.1 kB | 25.5% → 24.3% |  2.5 MB → 2.53 MB |           5,787 | `Object`                     |
|  +1.0% | +16.7 kB | 16.4% → 15.6% |  1.6 MB → 1.62 MB |              22 | `Window`                     |
|  +3.8% | +13.5 kB |   3.6% → 3.5% |   350 kB → 364 kB |           1,549 | `GetterSetter`               |
|  +1.6% |  +7.9 kB |   5.2% → 5.0% |   507 kB → 515 kB |              11 | `InjectedScript`             |
|  +0.7% | +4.36 kB |   6.2% → 5.9% |   608 kB → 613 kB |              11 | `JSGlobalLexicalEnvironment` |
|  +1.0% | +4.13 kB |   4.3% → 4.1% |   421 kB → 425 kB |               9 | `JSModuleEnvironment`        |
| +46.4% | +3.15 kB |          0.1% | 6.79 kB → 9.95 kB |              11 | `Set Iterator`               |
|  +9.4% | +2.75 kB |          0.3% | 29.4 kB → 32.2 kB |              11 | `String`                     |
|  +1.0% |  +2.5 kB |   2.6% → 2.4% |   251 kB → 254 kB |             761 | `Set`                        |
|  +0.1% | +1.54 kB | 12.2% → 11.5% |           1.19 MB | 24,843 → 24,875 | `DOMAttributeGetterSetter`   |
|  +5.5% | +1.28 kB |          0.2% | 23.4 kB → 24.6 kB |       367 → 387 | `SymbolTable`                |
| +68.1% | +1.24 kB |         <0.1% | 1.82 kB → 3.06 kB |           2 → 4 | `MouseEvent`                 |
| +14.8% |   +848 B |          0.1% | 5.71 kB → 6.56 kB |        92 → 109 | `Immutable Butterfly`        |

#### Progressions

Constructors with the largest decrease in retained size.

| Change |    Delta |             % |              Size |     Instances | Constructor                |
| -----: | -------: | ------------: | ----------------: | ------------: | -------------------------- |
|  -6.5% | -36.4 kB |   5.7% → 5.0% |   557 kB → 521 kB | 1,228 → 1,236 | `JSLexicalEnvironment`     |
|  -1.0% |   -20 kB | 21.4% → 19.9% | 2.09 MB → 2.07 MB | 8,506 → 8,397 | `StructureRareData`        |
| -10.6% | -13.4 kB |   1.3% → 1.1% |   126 kB → 113 kB |             9 | `SkipForwardButton`        |
| -10.4% | -13.3 kB |   1.3% → 1.1% |   128 kB → 115 kB |             9 | `MuteButton`               |
| -10.6% |   -13 kB |   1.3% → 1.1% |   123 kB → 110 kB |             9 | `OverflowButton`           |
| -10.6% |   -13 kB |   1.3% → 1.1% |   123 kB → 110 kB |             9 | `SkipBackButton`           |
| -10.4% | -12.5 kB |   1.2% → 1.0% |   121 kB → 108 kB |             9 | `AirplayButton`            |
|  -7.2% | -12.2 kB |   1.7% → 1.5% |   170 kB → 158 kB |             9 | `MacOSInlineMediaControls` |
|  -9.5% | -9.47 kB |   1.0% → 0.9% |   99.5 kB → 90 kB |             9 | `TimeControl`              |
| -89.6% | -6.51 kB |  0.1% → <0.1% |   7.26 kB → 752 B |             1 | `qd`                       |
|  -9.3% |    -4 kB |          0.4% | 43.2 kB → 39.2 kB |             9 | `PlayPauseButton`          |
|  -3.6% | -3.12 kB |   0.9% → 0.8% |   87.1 kB → 84 kB |            18 | `Slider`                   |
|  -1.1% |  -2.6 kB |   2.3% → 2.2% |   228 kB → 225 kB |         1,009 | `FunctionRareData`         |
|  -5.7% | -2.14 kB |   0.4% → 0.3% | 37.9 kB → 35.8 kB |            27 | `MediaController`          |
|  -3.8% | -1.71 kB |   0.5% → 0.4% | 44.9 kB → 43.2 kB |            36 | `ControlsBar`              |
|  -4.7% |   -751 B |   0.2% → 0.1% | 15.8 kB → 15.1 kB |             9 | `AutoHideController`       |
| -15.2% |   -320 B |         <0.1% | 2.11 kB → 1.79 kB |            11 | `JSWindowProxy`            |
|  -9.9% |   -272 B |         <0.1% | 2.74 kB → 2.46 kB |             9 | `MacOSLayoutTraits`        |
|  -1.1% |   -256 B |          0.2% |   23 kB → 22.8 kB |            11 | `Math`                     |
|  -6.6% |   -224 B |         <0.1% | 3.37 kB → 3.15 kB |            22 | `HTMLDocument`             |
