# Heap snapshot diff

Allocated 1.53 MB (+1.5 kB, +0.1%) across 16,635 → 16,649 nodes and 45,015 → 45,184 edges.

| Category | Change |   Delta |             % |            Size |         Nodes |
| -------- | -----: | ------: | ------------: | --------------: | ------------: |
| code     |   0.0% |     0 B | 42.6% → 42.5% |          649 kB |         2,762 |
| string   |  +0.0% |    +1 B |         23.9% |          364 kB |         6,250 |
| internal |  +0.5% | +1.5 kB | 20.1% → 20.2% | 307 kB → 309 kB | 3,121 → 3,135 |
| object   |   0.0% |     0 B |          6.6% |          100 kB |         1,400 |
| closure  |   0.0% |     0 B |          4.4% |         66.7 kB |         1,813 |
| array    |   0.0% |     0 B |          1.2% |         18.4 kB |         1,112 |
| unknown  |   0.0% |     0 B |          1.0% |         15.3 kB |            34 |
| built-in |   0.0% |     0 B |          0.1% |         1.48 kB |            47 |
| symbol   |   0.0% |     0 B |          0.1% |         1.25 kB |            78 |
| native   |   0.0% |     0 B |          0.0% |           699 B |            11 |
| regexp   |   0.0% |     0 B |          0.0% |           352 B |             4 |
| bigint   |   0.0% |     0 B |          0.0% |            50 B |             2 |
| number   |   0.0% |     0 B |          0.0% |            34 B |             1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |    Delta |             % |              Size |     Instances | Constructor     |
| -----: | -------: | ------------: | ----------------: | ------------: | --------------- |
|  +0.7% | +1.46 kB | 13.3% → 13.4% |   203 kB → 205 kB | 1,816 → 1,829 | `Structure`     |
|  +0.3% |    +48 B |          1.2% | 18.7 kB → 18.8 kB |     390 → 391 | `PropertyTable` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|   Change |    Delta |             % |              Size |     Instances | Constructor                 |
| -------: | -------: | ------------: | ----------------: | ------------: | --------------------------- |
|   +23.2% | +22.5 kB |   6.4% → 7.8% |  96.9 kB → 119 kB |           121 | `UnlinkedFunctionCodeBlock` |
|    +3.9% | +6.88 kB | 11.4% → 11.9% |   175 kB → 181 kB |           931 | `FunctionExecutable`        |
|    +6.4% |  +4.5 kB |   4.6% → 4.9% |   70 kB → 74.5 kB |           653 | `NativeExecutable`          |
|    +0.5% |  +1.5 kB |         18.0% |   274 kB → 276 kB |           122 | `FunctionCodeBlock`         |
|   +39.2% | +1.45 kB |   0.2% → 0.3% |  3.7 kB → 5.15 kB |            77 | `symbol`                    |
| +1753.8% |  +1.4 kB |   0.0% → 0.1% |    80 B → 1.48 kB |             2 | `Stats`                     |
|    +0.2% | +1.34 kB | 46.1% → 46.2% |   704 kB → 705 kB | 1,816 → 1,829 | `Structure`                 |
|   +21.5% | +1.33 kB |   0.4% → 0.5% | 6.18 kB → 7.51 kB |           147 | `GetterSetter`              |
|    +0.7% | +1.13 kB |  9.9% → 10.0% |   151 kB → 153 kB |         1,734 | `Function`                  |
| +4666.7% |   +840 B |   0.0% → 0.1% |      18 B → 858 B |             1 | `Float32ArrayPrototype`     |
| +4466.7% |   +804 B |   0.0% → 0.1% |      18 B → 822 B |             1 | `BigUint64ArrayPrototype`   |
| +4366.7% |   +786 B |   0.0% → 0.1% |      18 B → 804 B |             1 | `BigInt64ArrayPrototype`    |
|  +404.1% |   +586 B |          0.0% |     145 B → 731 B |             2 | `StringDecoder`             |
|   +46.1% |   +584 B |          0.1% | 1.27 kB → 1.85 kB |             2 | `NodeJSFS`                  |
|    +4.3% |   +331 B |          0.5% | 7.66 kB → 7.99 kB |            70 | `AsyncFunction`             |
|  +142.9% |   +190 B |          0.0% |     133 B → 323 B |             2 | `AsyncGeneratorFunction`    |
|    +5.5% |   +128 B |          0.2% | 2.34 kB → 2.46 kB |             4 | `JSModuleEnvironment`       |
|  +238.0% |   +119 B |          0.0% |      50 B → 169 B |             2 | `Iterator`                  |
|  +410.5% |    +78 B |          0.0% |       19 B → 97 B |             1 | `Symbol`                    |
|  +304.3% |    +70 B |          0.0% |       23 B → 93 B |             1 | `WebAssembly`               |

#### Progressions

Constructors with the largest decrease in retained size.

|  Change |    Delta |            % |              Size | Instances | Constructor                  |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------- |
| -100.0% | -1.35 MB | 88.7% → 0.0% |   1.35 MB → 496 B |        13 | `StructureChain`             |
|  -81.4% |  -638 kB | 51.4% → 9.5% |   783 kB → 146 kB |     1,373 | `Object`                     |
|  -53.3% | -31.5 kB |  3.9% → 1.8% | 59.1 kB → 27.6 kB |       185 | `SymbolTable`                |
|  -50.3% | -28.9 kB |  3.8% → 1.9% | 57.4 kB → 28.5 kB |     1,077 | `Array`                      |
|  -49.7% | -20.4 kB |  2.7% → 1.3% |   41 kB → 20.6 kB |       105 | `StructureRareData`          |
|  -52.4% | -16.5 kB |  2.1% → 1.0% |   31.5 kB → 15 kB |       170 | `JSLexicalEnvironment`       |
|  -36.2% | -10.4 kB |  1.9% → 1.2% | 28.8 kB → 18.4 kB |        10 | `Cell Butterfly`             |
|   -7.5% | -8.64 kB |  7.5% → 7.0% |   115 kB → 106 kB |       925 | `UnlinkedFunctionExecutable` |
|   -3.4% | -2.08 kB |  4.1% → 3.9% | 61.9 kB → 59.8 kB | 390 → 391 | `PropertyTable`              |
|  -49.5% | -1.76 kB |  0.2% → 0.1% |  3.56 kB → 1.8 kB |        34 | `SparseArrayValueMap`        |
|  -33.5% | -1.39 kB |  0.3% → 0.2% | 4.14 kB → 2.75 kB |        46 | `CustomGetterSetter`         |
|   -4.0% |   -709 B |  1.2% → 1.1% | 17.8 kB → 17.1 kB |       210 | `FunctionRareData`           |
|  -83.0% |   -635 B |  0.1% → 0.0% |     765 B → 130 B |         4 | `JSAsyncGeneratorFunction`   |
|  -73.8% |   -395 B |         0.0% |     535 B → 140 B |         3 | `Set`                        |
|  -42.1% |   -256 B |         0.0% |     608 B → 352 B |         4 | `RegExp`                     |
|  -60.1% |   -193 B |         0.0% |     321 B → 128 B |         4 | `JSSourceCode`               |
|  -48.2% |   -145 B |         0.0% |     301 B → 156 B |         3 | `ReadableStream`             |
|  -69.2% |   -144 B |         0.0% |      208 B → 64 B |         1 | `JSGlobalLexicalEnvironment` |
|  -56.0% |   -130 B |         0.0% |     232 B → 102 B |         3 | `GeneratorFunction`          |
|  -34.5% |   -112 B |         0.0% |     325 B → 213 B |         1 | `Process`                    |
