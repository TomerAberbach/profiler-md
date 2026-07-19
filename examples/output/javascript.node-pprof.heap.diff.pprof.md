# Heap profile diff

Allocated 927 MiB → 732 MiB (-195.207 MiB, -21.1%) over 10,093,789 samples → 7,784,774 samples (96.3 B → 98.6 B per sample).

| Category    | Change |        Delta |             % |              Size |               Samples |
| ----------- | -----: | -----------: | ------------: | ----------------: | --------------------: |
| third-party | -19.0% | -134.978 MiB | 76.8% → 78.8% | 712 MiB → 577 MiB | 8,842,365 → 6,943,710 |
| stdlib      | -28.0% |  -60.229 MiB | 23.2% → 21.2% | 215 MiB → 155 MiB |   1,251,424 → 841,064 |

Hidden functions account for 100.0% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |           % |              Size |           Samples | Function               | Location                                    |
| -----: | ----------: | ----------: | ----------------: | ----------------: | ---------------------- | ------------------------------------------- |
|    new | +23.503 MiB | 0.0% → 3.2% |    0 B → 23.5 MiB |       0 → 220,047 | `parseIdentifierName`  | `node_modules/typescript/lib/typescript.js` |
| +56.5% |    +6.5 MiB | 1.2% → 2.5% | 11.5 MiB → 18 MiB | 107,683 → 168,546 | `createIdentifier`     | `node_modules/typescript/lib/typescript.js` |
| +11.5% |      +3 MiB | 2.8% → 4.0% |   26 MiB → 29 MiB | 169,039 → 187,880 | `instantiateSignature` | `node_modules/typescript/lib/typescript.js` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |               Samples | Function                   | Location                                    |
| ------: | -----------: | ------------: | ------------------: | --------------------: | -------------------------- | ------------------------------------------- |
| removed |  -46.506 MiB |   5.0% → 0.0% |      46.5 MiB → 0 B |           435,406 → 0 | `createBaseIdentifierNode` | `node_modules/typescript/lib/typescript.js` |
|  -35.6% |  -24.004 MiB |   7.3% → 5.9% | 67.5 MiB → 43.5 MiB |     763,246 → 571,780 | `Map`                      | `<unknown>`                                 |
|  -20.0% |  -24.001 MiB | 12.9% → 13.1% |    120 MiB → 96 MiB | 1,999,948 → 1,720,054 | `instantiateSymbol`        | `node_modules/typescript/lib/typescript.js` |
|  -21.2% |  -18.325 MiB |          9.3% | 86.4 MiB → 68.1 MiB |       46,472 → 30,875 | `set`                      | `<unknown>`                                 |
|  -31.9% |     -7.5 MiB |   2.5% → 2.2% |   23.5 MiB → 16 MiB |     171,131 → 116,516 | `createBaseNode`           | `node_modules/typescript/lib/typescript.js` |
|  -17.4% |       -6 MiB |   3.7% → 3.9% | 34.5 MiB → 28.5 MiB |     573,008 → 427,885 | `declareSymbol`            | `node_modules/typescript/lib/typescript.js` |
|  -21.8% |       -6 MiB |   3.0% → 2.9% | 27.5 MiB → 21.5 MiB |     660,864 → 515,589 | `createNodeArray`          | `node_modules/typescript/lib/typescript.js` |
|  -12.0% |   -2.999 MiB |   2.7% → 3.0% |     25 MiB → 22 MiB |     203,768 → 166,631 | `instantiateAnonymousType` | `node_modules/typescript/lib/typescript.js` |
| removed | -512.015 KiB |   0.1% → 0.0% |       512 KiB → 0 B |             5,958 → 0 | `createProgram`            | `node_modules/typescript/lib/typescript.js` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |      Delta |           % |                Size |           Samples | Function              | Location                                    |
| -----: | ---------: | ----------: | ------------------: | ----------------: | --------------------- | ------------------------------------------- |
| +59.4% | +9.596 MiB | 1.7% → 3.5% | 16.2 MiB → 25.8 MiB | 145,137 → 220,616 | `parseIdentifierName` | `node_modules/typescript/lib/typescript.js` |
| +12.6% | +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB |   92,999 → 88,994 | `require`             | `node:internal/modules/helpers`             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |               Samples | Function                           | Location                                    |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ---------------------------------- | ------------------------------------------- |
|  -21.5% | -155.179 MiB | 77.9% → 77.5% |   723 MiB → 567 MiB | 7,813,936 → 5,868,039 | `typeCheckProject`                 | `tsc-workload.mjs`                          |
|  -21.5% |  -154.68 MiB | 77.5% → 77.0% |   718 MiB → 564 MiB | 7,728,122 → 5,802,917 | `(anonymous)`                      | `datadog-pprof-heap.mjs:1:1`                |
|  -22.5% | -100.872 MiB | 48.4% → 47.5% |   449 MiB → 348 MiB | 4,946,952 → 3,593,223 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
|  -20.8% |  -55.972 MiB | 29.1% → 29.2% |   270 MiB → 214 MiB | 2,922,784 → 2,243,751 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
| removed |  -46.506 MiB |   5.0% → 0.0% |      46.5 MiB → 0 B |           435,406 → 0 | `createBaseIdentifierNode`         | `node_modules/typescript/lib/typescript.js` |
|  -60.1% |  -27.963 MiB |   5.0% → 2.5% | 46.5 MiB → 18.5 MiB |     430,763 → 168,556 | `createIdentifier`                 | `node_modules/typescript/lib/typescript.js` |
|  -19.8% |  -24.001 MiB | 13.0% → 13.3% |    121 MiB → 97 MiB | 2,021,794 → 1,741,900 | `instantiateSymbol`                | `node_modules/typescript/lib/typescript.js` |
|  -34.7% |  -23.457 MiB |   7.3% → 6.0% | 67.5 MiB → 44.1 MiB |     763,246 → 571,790 | `Map`                              | `<unknown>`                                 |
|  -33.8% |  -23.008 MiB |   7.3% → 6.1% |     68 MiB → 45 MiB |     892,692 → 596,421 | `declareSymbol`                    | `node_modules/typescript/lib/typescript.js` |
|  -21.2% |  -18.325 MiB |          9.3% | 86.4 MiB → 68.1 MiB |       46,472 → 30,875 | `set`                              | `<unknown>`                                 |
|  -31.9% |     -7.5 MiB |   2.5% → 2.2% |   23.5 MiB → 16 MiB |     171,131 → 116,516 | `createBaseNode`                   | `node_modules/typescript/lib/typescript.js` |
|  -21.8% |       -6 MiB |   3.0% → 2.9% | 27.5 MiB → 21.5 MiB |     660,864 → 515,589 | `createNodeArray`                  | `node_modules/typescript/lib/typescript.js` |
|  -15.1% |   -3.999 MiB |   2.9% → 3.1% | 26.5 MiB → 22.5 MiB |     232,896 → 168,192 | `instantiateAnonymousType`         | `node_modules/typescript/lib/typescript.js` |
|   -1.1% | -512.257 KiB |   4.7% → 5.9% |   44 MiB → 43.5 MiB |     448,585 → 438,701 | `instantiateSignature`             | `node_modules/typescript/lib/typescript.js` |
|   -0.5% |   -2.437 KiB |          0.1% |   514 KiB → 512 KiB |          163 → 16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
