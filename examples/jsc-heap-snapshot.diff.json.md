# Heap snapshot diff

Allocated 9.77 MB → 10.4 MB (+631 kB, +6.5%) across 142,769 → 144,697 nodes and 431,399 → 437,047 edges.

| Category | Change |    Delta |    Base | Current |           Nodes |
| -------- | -----: | -------: | ------: | ------: | --------------: |
| internal |  +0.8% | +44.9 kB | 5.29 MB | 5.34 MB | 70,867 → 71,965 |
| code     | +31.1% |  +578 kB | 1.86 MB | 2.43 MB | 15,594 → 16,071 |
| object   |  +0.0% |     +3 B |  745 kB |  745 kB |   8,886 → 8,886 |
| closure  |  +0.2% | +1.13 kB |  679 kB |  680 kB | 19,236 → 19,271 |
| string   |  +1.3% | +6.32 kB |  492 kB |  498 kB | 14,640 → 14,927 |
| native   |  +0.1% |   +444 B |  424 kB |  425 kB |   8,464 → 8,476 |
| built-in |  +0.0% |    +65 B |  203 kB |  203 kB |   1,013 → 1,013 |
| array    |  +1.3% |   +848 B | 64.9 kB | 65.8 kB |   3,731 → 3,748 |
| regexp   |   0.0% |      0 B | 6.14 kB | 6.14 kB |       128 → 128 |
| unknown  |  +0.9% |    +38 B | 4.24 kB | 4.28 kB |       120 → 122 |
| symbol   |   0.0% |      0 B |  1.1 kB |  1.1 kB |         67 → 67 |
| number   |   0.0% |      0 B |   383 B |   383 B |         11 → 11 |
| bigint   |   0.0% |      0 B |   238 B |   238 B |         12 → 12 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

|  Change |    Delta |    Base | Current |       Instances | Constructor                  |
| ------: | -------: | ------: | ------: | --------------: | ---------------------------- |
|     new |  +440 kB |     0 B |  440 kB |         0 → 122 | `FunctionCodeBlock`          |
|     new |  +131 kB |     0 B |  131 kB |         0 → 297 | `UnlinkedFunctionCodeBlock`  |
|  +34.7% |   +57 kB |  164 kB |  222 kB |   3,427 → 4,615 | `PropertyTable`              |
|   +0.2% | +3.58 kB | 1.48 MB | 1.49 MB | 11,598 → 11,626 | `FunctionExecutable`         |
|   +1.0% | +2.88 kB |  297 kB |  300 kB |   3,093 → 3,123 | `UnlinkedFunctionExecutable` |
|   +0.1% | +1.54 kB | 1.19 MB | 1.19 MB | 24,843 → 24,875 | `DOMAttributeGetterSetter`   |
|   +5.4% | +1.28 kB | 23.5 kB | 24.8 kB |       367 → 387 | `SymbolTable`                |
|   +0.2% | +1.13 kB |  674 kB |  675 kB | 19,091 → 19,126 | `Function`                   |
|  +14.8% |   +848 B | 5.71 kB | 6.56 kB |        92 → 109 | `Immutable Butterfly`        |
|   +0.6% |   +480 B | 74.2 kB | 74.6 kB |   1,228 → 1,236 | `JSLexicalEnvironment`       |
|     new |   +458 B |     0 B |   458 B |           0 → 1 | `UnlinkedProgramCodeBlock`   |
|   +0.1% |   +128 B |  114 kB |  114 kB |   3,559 → 3,563 | `CustomGetterSetter`         |
| +320.0% |    +96 B |    30 B |   126 B |           1 → 4 | `WheelEvent`                 |
|  +77.9% |    +74 B |    95 B |   169 B |           2 → 4 | `MouseEvent`                 |
|   +0.1% |    +64 B | 55.6 kB | 55.7 kB |   1,596 → 1,598 | `HashMapBucket`              |
|   +0.0% |    +64 B |  170 kB |  170 kB |       761 → 761 | `Set`                        |
|  +75.9% |    +60 B |    79 B |   139 B |           2 → 4 | `PointerEvent`               |
|   +6.8% |    +51 B |   747 B |   798 B |         18 → 19 | `ShadowRoot`                 |
|  +17.6% |    +51 B |   290 B |   341 B |         10 → 11 | `DocumentFragment`           |
|   +0.5% |    +48 B | 9.83 kB | 9.88 kB |       202 → 203 | `HTMLImageElement`           |

#### Progressions

Constructors with the largest decrease in self size.

| Change |    Delta |   Base | Current |       Instances | Constructor         |
| -----: | -------: | -----: | ------: | --------------: | ------------------- |
|  -1.3% | -10.5 kB | 817 kB |  806 kB |   8,506 → 8,397 | `StructureRareData` |
|  -0.2% |  -5.6 kB | 2.7 MB | 2.69 MB | 24,070 → 24,020 | `Structure`         |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|   Change |    Delta |    Base | Current |       Instances | Constructor                 |
| -------: | -------: | ------: | ------: | --------------: | --------------------------- |
|  +586.9% |  +386 kB | 65.8 kB |  452 kB |   1,549 → 1,549 | `GetterSetter`              |
|  +129.8% |  +358 kB |  276 kB |  634 kB |   1,228 → 1,236 | `JSLexicalEnvironment`      |
|      new |  +320 kB |     0 B |  320 kB |         0 → 297 | `UnlinkedFunctionCodeBlock` |
|      new |  +292 kB |     0 B |  292 kB |         0 → 122 | `FunctionCodeBlock`         |
| +7785.7% |  +175 kB | 2.25 kB |  177 kB |         11 → 11 | `Intl.DurationFormat`       |
|  +817.5% |  +135 kB | 16.6 kB |  152 kB |       128 → 128 | `RegExp`                    |
|   +21.1% |  +128 kB |  607 kB |  735 kB |   3,427 → 4,615 | `PropertyTable`             |
|  +420.4% |  +125 kB | 29.8 kB |  155 kB |       554 → 554 | `HTMLSpanElement`           |
|    +9.8% |  +123 kB | 1.26 MB | 1.38 MB | 19,091 → 19,126 | `Function`                  |
| +1306.1% |  +123 kB |  9.4 kB |  132 kB |       137 → 137 | `SVGGElement`               |
|   +94.0% |  +104 kB |  111 kB |  215 kB |   3,618 → 3,618 | `Array`                     |
|  +242.5% | +56.3 kB | 23.2 kB | 79.6 kB |       521 → 521 | `DOMRect`                   |
|  +610.8% | +52.8 kB | 8.64 kB | 61.4 kB |         42 → 42 | `HTMLUListElement`          |
|   +68.2% |   +48 kB | 70.3 kB |  118 kB |       729 → 729 | `pe`                        |
|   +35.6% | +35.2 kB |   99 kB |  134 kB |       863 → 863 | `NativeExecutable`          |
|   +34.6% | +34.8 kB |  101 kB |  135 kB |   1,009 → 1,009 | `FunctionRareData`          |
|    +0.9% | +23.8 kB | 2.69 MB | 2.72 MB | 24,070 → 24,020 | `Structure`                 |
|  +951.4% | +19.5 kB | 2.05 kB | 21.5 kB |         22 → 22 | `Callee`                    |
|   +57.3% | +14.8 kB | 25.9 kB | 40.7 kB |       420 → 420 | `HTMLAnchorElement`         |
|  +630.1% | +14.8 kB | 2.35 kB | 17.2 kB |         32 → 32 | `MutationObserver`          |

#### Progressions

Constructors with the largest decrease in retained size.

| Change |    Delta |    Base | Current |       Instances | Constructor                  |
| -----: | -------: | ------: | ------: | --------------: | ---------------------------- |
| -21.4% |  -546 kB | 2.55 MB |    2 MB | 11,598 → 11,626 | `FunctionExecutable`         |
| -18.4% |  -403 kB | 2.19 MB | 1.79 MB | 24,843 → 24,875 | `DOMAttributeGetterSetter`   |
| -61.3% |  -163 kB |  265 kB |  103 kB |   1,596 → 1,598 | `HashMapBucket`              |
| -89.1% |  -118 kB |  133 kB | 14.5 kB |       202 → 203 | `HTMLImageElement`           |
| -41.2% |  -115 kB |  279 kB |  164 kB |   3,559 → 3,563 | `CustomGetterSetter`         |
| -99.6% |  -107 kB |  108 kB |   421 B |           9 → 9 | `JSSourceCode`               |
| -46.5% | -99.5 kB |  214 kB |  115 kB |   1,697 → 1,697 | `HTMLDivElement`             |
| -65.3% |   -97 kB |  148 kB | 51.5 kB |   1,130 → 1,130 | `Text`                       |
| -97.6% | -76.6 kB | 78.5 kB | 1.91 kB |         10 → 11 | `DocumentFragment`           |
| -96.2% | -76.6 kB | 79.6 kB | 3.06 kB |         18 → 18 | `HTMLLinkElement`            |
| -85.4% | -75.5 kB | 88.3 kB | 12.9 kB |         54 → 54 | `DOMPoint`                   |
|  -8.6% | -49.1 kB |  569 kB |  520 kB |   5,787 → 5,787 | `Object`                     |
| -92.6% | -15.5 kB | 16.7 kB | 1.24 kB |         22 → 22 | `InjectedScriptHost`         |
| -48.4% | -14.1 kB | 29.2 kB |   15 kB |       271 → 271 | `SVGLineElement`             |
| -90.6% | -13.5 kB | 14.9 kB | 1.41 kB |         21 → 21 | `HTMLHtmlElement`            |
| -95.8% | -13.3 kB | 13.9 kB |   576 B |           9 → 9 | `ScrubbingSupport`           |
|  -2.6% | -12.4 kB |  480 kB |  467 kB |   3,093 → 3,123 | `UnlinkedFunctionExecutable` |
| -86.1% | -11.6 kB | 13.5 kB | 1.87 kB |           9 → 9 | `SeekForwardSupport`         |
| -86.6% | -11.4 kB | 13.1 kB | 1.76 kB |           9 → 9 | `StatusSupport`              |
| -83.7% | -10.8 kB | 12.9 kB |  2.1 kB |           9 → 9 | `SkipForwardSupport`         |
