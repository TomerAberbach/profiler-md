# CPU profile diff

Took 2.13s → 2.15s (+17.97ms, +0.8%) over 2,912 samples → 2,926 samples (733.3µs → 736.0µs per sample).

| Category           |  Change |    Delta |             % |              Time |       Samples |
| ------------------ | ------: | -------: | ------------: | ----------------: | ------------: |
| Third-party        |   +1.4% | +25.53ms | 84.1% → 84.6% |     1.79s → 1.82s | 2,651 → 2,668 |
| Standard library   |   -5.3% |  -7.39ms |   6.5% → 6.1% | 139.7ms → 132.3ms |       96 → 88 |
| Garbage collector  |   +2.8% |  +3.39ms |   5.7% → 5.8% | 122.0ms → 125.4ms |      98 → 102 |
| Native             |  -13.8% | -10.04ms |   3.4% → 2.9% |   72.8ms → 62.8ms |       63 → 58 |
| Regular expression |  +71.9% |  +2.26ms |   0.1% → 0.3% |     3.1ms → 5.4ms |         3 → 5 |
| Unknown            | +229.0% |  +2.95ms |   0.1% → 0.2% |     1.3ms → 4.2ms |         1 → 4 |
| Ours               |     new |  +1.26ms |   0.0% → 0.1% |       0ms → 1.3ms |         0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                          | Location                                                                                                                   |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| +437.2% | +18.41ms |  0.2% → 1.1% |  4.2ms → 22.6ms |  4 → 18 | `internIdentifier`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33331:28` |
|  +80.1% | +13.51ms |  0.8% → 1.4% | 16.9ms → 30.4ms | 16 → 28 | `isTypeRelatedTo`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27` |
| +128.6% |  +9.66ms |  0.4% → 0.8% |  7.5ms → 17.2ms |  9 → 17 | `isDeeplyNestedType`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031:30` |
|  +35.8% |  +9.07ms |  1.2% → 1.6% | 25.3ms → 34.4ms | 33 → 42 | `instantiateTypeWorker`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33` |
|  +60.0% |  +7.85ms |  0.6% → 1.0% | 13.1ms → 20.9ms | 12 → 18 | `createTypeReference`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31` |
| +210.4% |  +7.19ms |  0.2% → 0.5% |  3.4ms → 10.6ms |  8 → 14 | `isSimpleTypeRelatedTo`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67312:33` |
|  +24.8% |  +6.52ms |  1.2% → 1.5% | 26.3ms → 32.9ms | 56 → 61 | `inferFromTypes`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28` |
| +989.5% |  +6.21ms | <0.1% → 0.3% |   0.6ms → 6.8ms |   2 → 7 | `createIdentifier`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:24991:28` |
| +216.9% |  +5.37ms |  0.1% → 0.4% |   2.5ms → 7.8ms |   2 → 7 | `canHaveJSDoc`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:18835:22` |
| +456.2% |  +5.36ms |  0.1% → 0.3% |   1.2ms → 6.5ms |   3 → 8 | `getIndexedAccessTypeOrUndefined` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65149:43` |
|  +50.1% |  +5.27ms |  0.5% → 0.7% | 10.5ms → 15.8ms | 15 → 19 | `some`                            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794:14`  |
| +111.5% |  +4.75ms |  0.2% → 0.4% |   4.3ms → 9.0ms |   5 → 8 | `instantiateTypeWithAlias`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66266:36` |
|     new |  +4.66ms |  0.0% → 0.2% |     0ms → 4.7ms |   0 → 4 | `modifiersToFlags`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20637:26` |
| +124.8% |  +4.33ms |  0.2% → 0.4% |   3.5ms → 7.8ms |   5 → 8 | `declareSymbol`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46190:25` |
|     new |  +4.20ms |  0.0% → 0.2% |     0ms → 4.2ms |   0 → 4 | `(anonymous)`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:53423:20` |
|     new |  +4.03ms |  0.0% → 0.2% |     0ms → 4.0ms |   0 → 5 | `normalizePath`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9164:23`  |
| +106.0% |  +3.98ms |  0.2% → 0.4% |   3.8ms → 7.7ms |   3 → 7 | `instantiateType`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66256:27` |
| +159.0% |  +3.82ms |  0.1% → 0.3% |   2.4ms → 6.2ms |   3 → 5 | `maybeTypeOfKind`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81463:27` |
|     new |  +3.81ms |  0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `normalizeSlashes`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9114:26`  |
|     new |  +3.76ms |  0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `(anonymous)`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69958:77` |

##### Standard library

| Change |   Delta |            % |            Time | Samples | Function               | Location                                        |
| -----: | ------: | -----------: | --------------: | ------: | ---------------------- | ----------------------------------------------- |
|    new | +3.51ms |  0.0% → 0.2% |     0ms → 3.5ms |   0 → 3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|    new | +1.36ms |  0.0% → 0.1% |     0ms → 1.4ms |   0 → 1 | `CFISBIS`              | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|    new | +1.25ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`          | `ext:deno_node/crypto.ts:1:32`                  |
|    new | +1.24ms |  0.0% → 0.1% |     0ms → 1.2ms |   0 → 1 | `readFileSync`         | `ext:deno_node/fs.ts:399:24`                    |
|    new | +1.24ms |  0.0% → 0.1% |     0ms → 1.2ms |   0 → 1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:569:8`     |
|    new | +1.23ms |  0.0% → 0.1% |     0ms → 1.2ms |   0 → 1 | `getOptions`           | `ext:deno_node/internal/fs/utils.mjs:363:27`    |
|  +1.7% | +1.23ms |  3.3% → 3.4% | 71.4ms → 72.6ms | 57 → 58 | `compileFunction`      | `ext:core/01_core.js:1100:22`                   |
|    new | +0.54ms | 0.0% → <0.1% |     0ms → 0.5ms |   0 → 1 | `statSync`             | `ext:deno_fs/30_fs.js:473:18`                   |
|  +1.0% | +0.27ms |         1.2% | 26.3ms → 26.6ms |       1 | `post`                 | `ext:deno_node/inspector.js:179:7`              |
|  +6.8% | +0.08ms |         0.1% |           1.2ms |       1 | `decodeUtf8`           | `ext:deno_node/internal/buffer.mjs:706:20`      |

##### Garbage collector

| Change |   Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
|  +2.8% | +3.39ms | 5.7% → 5.8% | 122.0ms → 125.4ms | 98 → 102 | `(garbage collector)` | `<unknown>` |

##### Native

| Change |   Delta |            % |          Time | Samples | Function                   | Location    |
| -----: | ------: | -----------: | ------------: | ------: | -------------------------- | ----------- |
|    new | +1.27ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `op_url_get_serialization` | `<unknown>` |
|    new | +1.27ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `op_require_try_self`      | `<unknown>` |
| +19.8% | +1.25ms |  0.3% → 0.4% | 6.3ms → 7.6ms |   5 → 6 | `op_fs_read_file_sync`     | `<unknown>` |
|    new | +0.70ms | 0.0% → <0.1% |   0ms → 0.7ms |   0 → 1 | `op_inspector_dispatch`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                                                                                                                   |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
|  -72.0% | -12.88ms |  0.8% → 0.2% |  17.9ms → 5.0ms |  15 → 5 | `buildCustomError`                  | `ext:core/00_infra.js:94:28`                                                                                               |
|  -18.9% | -12.60ms |  3.1% → 2.5% | 66.7ms → 54.1ms | 99 → 88 | `isRelatedTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25` |
|  -34.1% |  -6.42ms |  0.9% → 0.6% | 18.8ms → 12.4ms | 19 → 10 | `getObjectFlags`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225:24` |
|  -84.1% |  -6.35ms |  0.4% → 0.1% |   7.5ms → 1.2ms |   6 → 1 | `__export`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22:16`    |
|  -50.3% |  -6.13ms |  0.6% → 0.3% |  12.2ms → 6.1ms |  12 → 6 | `getMappedType`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65907:25` |
| removed |  -6.07ms |  0.3% → 0.0% |     6.1ms → 0ms |   6 → 0 | `getNamedMembers`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:53726:27` |
|  -68.4% |  -5.97ms |  0.4% → 0.1% |   8.7ms → 2.8ms |  12 → 6 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61753:45` |
|  -94.1% |  -5.92ms | 0.3% → <0.1% |   6.3ms → 0.4ms |   7 → 2 | `isGenericMappedType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61325:31` |
|  -49.6% |  -5.64ms |  0.5% → 0.3% |  11.4ms → 5.7ms |  10 → 6 | `getApparentType`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61745:27` |
|   -8.0% |  -5.54ms |  3.2% → 3.0% | 69.2ms → 63.6ms | 86 → 81 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36` |
|  -41.9% |  -5.37ms |  0.6% → 0.3% |  12.8ms → 7.5ms |  11 → 6 | `resolveObjectTypeMembers`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60465:36` |
|  -34.8% |  -5.35ms |  0.7% → 0.5% | 15.4ms → 10.0ms |  14 → 8 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                |
|  -26.4% |  -5.24ms |  0.9% → 0.7% | 19.9ms → 14.6ms | 38 → 33 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43` |
| removed |  -5.04ms |  0.2% → 0.0% |     5.0ms → 0ms |   4 → 0 | `addMemberForKeyTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61206:39` |
|  -90.6% |  -4.92ms | 0.3% → <0.1% |   5.4ms → 0.5ms |   6 → 1 | `isOptionalDeclaration`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22956:31` |
|  -51.9% |  -4.80ms |  0.4% → 0.2% |   9.2ms → 4.4ms |   8 → 6 | `getIdentifierToken`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12836:30` |
|  -99.4% |  -4.50ms | 0.2% → <0.1% |  4.5ms → 28.0µs |   5 → 1 | `isFreshLiteralType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65663:30` |
|  -53.4% |  -4.38ms |  0.4% → 0.2% |   8.2ms → 3.8ms |   9 → 4 | `getRelationKey`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69989:26` |
|  -90.7% |  -4.36ms | 0.2% → <0.1% |   4.8ms → 0.4ms |   8 → 5 | `aggregateChildrenFlags`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:28504:32` |
|  -92.4% |  -4.25ms | 0.2% → <0.1% |   4.6ms → 0.3ms |   5 → 1 | `checkExpression`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82771:27` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                                                                                                                   |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
|  -18.9% | -12.60ms |  3.1% → 2.5% | 66.7ms → 54.1ms | 99 → 88 | `isRelatedTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25` |
|  -34.1% |  -6.42ms |  0.9% → 0.6% | 18.8ms → 12.4ms | 19 → 10 | `getObjectFlags`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225:24` |
|  -84.1% |  -6.35ms |  0.4% → 0.1% |   7.5ms → 1.2ms |   6 → 1 | `__export`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22:16`    |
|  -50.3% |  -6.13ms |  0.6% → 0.3% |  12.2ms → 6.1ms |  12 → 6 | `getMappedType`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65907:25` |
| removed |  -6.07ms |  0.3% → 0.0% |     6.1ms → 0ms |   6 → 0 | `getNamedMembers`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:53726:27` |
|  -68.4% |  -5.97ms |  0.4% → 0.1% |   8.7ms → 2.8ms |  12 → 6 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61753:45` |
|  -94.1% |  -5.92ms | 0.3% → <0.1% |   6.3ms → 0.4ms |   7 → 2 | `isGenericMappedType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61325:31` |
|  -49.6% |  -5.64ms |  0.5% → 0.3% |  11.4ms → 5.7ms |  10 → 6 | `getApparentType`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61745:27` |
|   -8.0% |  -5.54ms |  3.2% → 3.0% | 69.2ms → 63.6ms | 86 → 81 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36` |
|  -41.9% |  -5.37ms |  0.6% → 0.3% |  12.8ms → 7.5ms |  11 → 6 | `resolveObjectTypeMembers`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60465:36` |
|  -26.4% |  -5.24ms |  0.9% → 0.7% | 19.9ms → 14.6ms | 38 → 33 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43` |
| removed |  -5.04ms |  0.2% → 0.0% |     5.0ms → 0ms |   4 → 0 | `addMemberForKeyTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61206:39` |
|  -90.6% |  -4.92ms | 0.3% → <0.1% |   5.4ms → 0.5ms |   6 → 1 | `isOptionalDeclaration`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22956:31` |
|  -51.9% |  -4.80ms |  0.4% → 0.2% |   9.2ms → 4.4ms |   8 → 6 | `getIdentifierToken`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12836:30` |
|  -99.4% |  -4.50ms | 0.2% → <0.1% |  4.5ms → 28.0µs |   5 → 1 | `isFreshLiteralType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65663:30` |
|  -53.4% |  -4.38ms |  0.4% → 0.2% |   8.2ms → 3.8ms |   9 → 4 | `getRelationKey`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69989:26` |
|  -90.7% |  -4.36ms | 0.2% → <0.1% |   4.8ms → 0.4ms |   8 → 5 | `aggregateChildrenFlags`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:28504:32` |
|  -92.4% |  -4.25ms | 0.2% → <0.1% |   4.6ms → 0.3ms |   5 → 1 | `checkExpression`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82771:27` |
|  -30.3% |  -3.93ms |  0.6% → 0.4% |  13.0ms → 9.0ms | 35 → 32 | `structuredTypeRelatedTo`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68467:37` |
|  -75.8% |  -3.93ms |  0.2% → 0.1% |   5.2ms → 1.3ms |   5 → 1 | `getAliasId`                        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62776:22` |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function               | Location                                        |
| ------: | -------: | -----------: | -------------: | ------: | ---------------------- | ----------------------------------------------- |
|  -72.0% | -12.88ms |  0.8% → 0.2% | 17.9ms → 5.0ms |  15 → 5 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                    |
|  -23.7% |  -2.15ms |  0.4% → 0.3% |  9.1ms → 6.9ms |   9 → 6 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                 |
| removed |  -1.83ms |  0.1% → 0.0% |    1.8ms → 0ms |   2 → 0 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`                    |
|  -34.0% |  -1.28ms |  0.2% → 0.1% |  3.8ms → 2.5ms |   3 → 2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                    |
|  -13.2% |  -0.50ms |         0.2% |  3.8ms → 3.3ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`             |
| removed |  -0.46ms | <0.1% → 0.0% |    0.5ms → 0ms |   1 → 0 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:30:14` |
| removed |  -0.23ms | <0.1% → 0.0% |    0.2ms → 0ms |   1 → 0 | `FastBuffer`           | `ext:deno_node/internal/buffer.mjs:192:14`      |
|   -0.8% |  -0.01ms |         0.1% |          1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`    |
|   -0.5% |  -0.01ms |         0.1% |          1.3ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`     |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function                 | Location    |
| ------: | ------: | ----------: | --------------: | ------: | ------------------------ | ----------- |
|  -34.8% | -5.35ms | 0.7% → 0.5% | 15.4ms → 10.0ms |  14 → 8 | `op_fs_stat_sync`        | `<unknown>` |
|  -12.1% | -3.85ms | 1.5% → 1.3% | 31.8ms → 28.0ms | 25 → 22 | `op_compile_function`    | `<unknown>` |
| removed | -1.36ms | 0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `op_require_real_path`   | `<unknown>` |
| removed | -1.26ms | 0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_fs_read_dir_sync`    | `<unknown>` |
|  -45.7% | -1.10ms |        0.1% |   2.4ms → 1.3ms |   2 → 1 | `op_fs_realpath_sync`    | `<unknown>` |
|  -34.4% | -0.88ms |        0.1% |   2.6ms → 1.7ms |       2 | `op_node_encoding_slice` | `<unknown>` |
|   -8.1% | -0.65ms | 0.4% → 0.3% |   7.9ms → 7.3ms | 10 → 13 | `(program)`              | `<unknown>` |
|   -2.5% | -0.09ms |        0.2% |   3.8ms → 3.7ms |       3 | `op_require_read_file`   | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

|    Change |     Delta |             % |              Time |       Samples | Function              | Location                                                                                                                    |
| --------: | --------: | ------------: | ----------------: | ------------: | --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
|       new |   +1.456s |  0.0% → 67.6% |       0ms → 1.45s |     0 → 2,152 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124967:37` |
|       new |   +1.453s |  0.0% → 67.5% |       0ms → 1.45s |     0 → 2,144 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124899:76` |
|       new | +350.91ms |  0.0% → 16.3% |     0ms → 350.9ms |       0 → 434 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125505:7`  |
| +20895.4% | +260.77ms |  0.1% → 12.2% |   1.2ms → 262.0ms |       1 → 347 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123071:10` |
|       new | +238.98ms |  0.0% → 11.1% |     0ms → 239.0ms |       0 → 325 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124028:24` |
| +20777.8% | +210.69ms |  <0.1% → 9.8% |   1.0ms → 211.7ms |       3 → 365 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:83533:27`  |
| +13673.5% | +104.19ms |  <0.1% → 4.9% |   0.8ms → 105.0ms |       1 → 264 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46417:21`  |
|  +7285.6% |  +94.35ms |   0.1% → 4.4% |    1.3ms → 95.6ms |       3 → 101 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66062:49`  |
| +25273.4% |  +91.24ms |  <0.1% → 4.3% |    0.4ms → 91.6ms |       3 → 103 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:37111:56`  |
|       new |  +74.81ms |   0.0% → 3.5% |      0ms → 74.8ms |        0 → 82 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125782:35` |
| +47760.8% |  +68.30ms |  <0.1% → 3.2% |    0.1ms → 68.4ms |       1 → 122 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81757:12`  |
|       new |  +61.51ms |   0.0% → 2.9% |      0ms → 61.5ms |        0 → 54 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:124077:30` |
|  +2418.3% |  +51.24ms |   0.1% → 2.5% |    2.1ms → 53.4ms |        2 → 53 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:45501:66`  |
|       new |  +50.92ms |   0.0% → 2.4% |      0ms → 50.9ms |        0 → 56 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:125932:42` |
| +11763.8% |  +41.29ms |  <0.1% → 1.9% |    0.4ms → 41.6ms |       1 → 102 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:80900:39`  |
|  +3184.3% |  +39.90ms |   0.1% → 1.9% |    1.3ms → 41.2ms |        1 → 55 | `(anonymous)`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:38259:63`  |
|     +2.0% |  +33.79ms | 79.4% → 80.3% |     1.69s → 1.72s | 2,460 → 2,482 | `forEach`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2378:17`   |
|     +8.2% |  +26.11ms | 14.9% → 15.9% | 317.3ms → 343.5ms |     476 → 492 | `signaturesRelatedTo` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69505:33`  |
|    +11.6% |  +25.56ms | 10.3% → 11.4% | 221.0ms → 246.6ms |     330 → 358 | `instantiateList`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65878:27`  |
|    +11.7% |  +25.30ms | 10.1% → 11.2% | 216.6ms → 241.9ms |     325 → 353 | `instantiateTypes`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65895:28`  |

##### Standard library

|  Change |   Delta |             % |            Time |       Samples | Function                       | Location                                        |
| ------: | ------: | ------------: | --------------: | ------------: | ------------------------------ | ----------------------------------------------- |
|   +0.4% | +8.79ms | 92.1% → 91.8% |   1.96s → 1.97s | 2,687 → 2,688 | `processTicksAndRejections`    | `ext:core/01_core.js:356:37`                    |
|   +0.4% | +7.72ms | 92.1% → 91.7% |   1.96s → 1.97s |         2,686 | `drainTicks`                   | `ext:core/01_core.js:425:22`                    |
|   +0.4% | +7.36ms | 92.1% → 91.7% |   1.96s → 1.97s | 2,685 → 2,684 | `__drainNextTickAndMacrotasks` | `ext:core/01_core.js:479:40`                    |
| +239.8% | +6.09ms |   0.1% → 0.4% |   2.5ms → 8.6ms |         2 → 7 | `CFISBIS`                      | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
| +186.4% | +4.74ms |   0.1% → 0.3% |   2.5ms → 7.3ms |         2 → 6 | `convertFileInfoToStats`       | `ext:deno_node/internal/fs/stat_utils.ts:6:39`  |
|     new | +3.51ms |   0.0% → 0.2% |     0ms → 3.5ms |         0 → 3 | `defineStatExtraProps`         | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|     new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `getSerialization`             | `ext:deno_web/00_url.js:97:26`                  |
|     new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `URL`                          | `ext:deno_web/00_url.js:716:14`                 |
|     new | +1.27ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `pathToFileURL`                | `ext:deno_node/url.ts:1337:27`                  |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`                  | `ext:deno_node/crypto.ts:1:32`                  |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`                  | `ext:deno_node/crypto.ts:1:1`                   |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `loadExtScript`                | `ext:core/01_core.js:951:25`                    |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `crypto`                       | `node:module:161:13`                            |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `get`                          | `node:module:212:9`                             |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `loadNativeModule`             | `node:module:2019:26`                           |
|     new | +1.24ms |   0.0% → 0.1% |     0ms → 1.2ms |         0 → 1 | `set`                          | `ext:deno_node/internal/fs/utils.mjs:569:8`     |
|     new | +1.23ms |   0.0% → 0.1% |     0ms → 1.2ms |         0 → 1 | `getOptions`                   | `ext:deno_node/internal/fs/utils.mjs:363:27`    |
|  +48.1% | +1.22ms |   0.1% → 0.2% |   2.5ms → 3.8ms |         2 → 3 | `Stats`                        | `ext:deno_node/internal/fs/utils.mjs:650:22`    |
|   +9.6% | +0.99ms |          0.5% | 10.3ms → 11.3ms |             9 | `readFileSync`                 | `ext:deno_node/fs.ts:399:24`                    |
|   +3.7% | +0.97ms |   1.2% → 1.3% | 26.3ms → 27.3ms |         1 → 2 | `post`                         | `ext:deno_node/inspector.js:179:7`              |

##### Garbage collector

| Change |   Delta |           % |              Time |  Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | -------: | --------------------- | ----------- |
|  +2.8% | +3.39ms | 5.7% → 5.8% | 122.0ms → 125.4ms | 98 → 102 | `(garbage collector)` | `<unknown>` |

##### Native

| Change |   Delta |             % |          Time |       Samples | Function                   | Location    |
| -----: | ------: | ------------: | ------------: | ------------: | -------------------------- | ----------- |
|  +0.4% | +8.53ms | 90.9% → 90.5% |         1.94s | 2,687 → 2,689 | `op_run_microtasks`        | `<unknown>` |
|    new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `op_url_get_serialization` | `<unknown>` |
|    new | +1.27ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `op_require_try_self`      | `<unknown>` |
| +19.8% | +1.25ms |   0.3% → 0.4% | 6.3ms → 7.6ms |         5 → 6 | `op_fs_read_file_sync`     | `<unknown>` |
|    new | +1.25ms |   0.0% → 0.1% |   0ms → 1.3ms |         0 → 1 | `op_load_ext_script`       | `<unknown>` |
|    new | +0.70ms |  0.0% → <0.1% |   0ms → 0.7ms |         0 → 1 | `op_inspector_dispatch`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                                           | Location                                                                                                                    |
| ------: | --------: | ------------: | ----------------: | --------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| -100.0% |   -1.446s | 67.8% → <0.1% |     1.44s → 0.5ms | 2,147 → 2 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88601:25`  |
|  -99.9% |   -1.446s |  67.8% → 0.1% |     1.44s → 1.2ms | 2,142 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88408:21`  |
|  -99.6% | -330.17ms |  15.5% → 0.1% |   331.4ms → 1.3ms |   419 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:91913:2`   |
|  -99.9% | -245.32ms | 11.5% → <0.1% |   245.6ms → 0.3ms |   334 → 3 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:86821:14`  |
|  -99.4% | -219.10ms |  10.3% → 0.1% |   220.3ms → 1.2ms |   311 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88210:27`  |
|  -99.9% | -214.82ms | 10.1% → <0.1% |   215.0ms → 0.2ms |   360 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:77956:67`  |
|  -99.7% |  -90.11ms |  4.2% → <0.1% |    90.4ms → 0.3ms |   102 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:35588:59`  |
|  -98.5% |  -88.58ms |   4.2% → 0.1% |    89.9ms → 1.3ms |    94 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65224:87`  |
|  -84.5% |  -80.84ms |   4.5% → 0.7% |   95.7ms → 14.8ms |  262 → 33 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46416:21`  |
|  -99.2% |  -67.65ms |  3.2% → <0.1% |    68.2ms → 0.5ms |    77 → 3 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:118089:63` |
|  -98.1% |  -61.43ms |   2.9% → 0.1% |    62.6ms → 1.2ms |    55 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:88212:23`  |
|  -98.4% |  -60.62ms |  2.9% → <0.1% |    61.6ms → 1.0ms |   118 → 2 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:77928:55`  |
|  -99.8% |  -47.51ms |  2.2% → <0.1% |    47.6ms → 0.1ms |    53 → 2 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:118091:84` |
|  -90.2% |  -46.56ms |   2.4% → 0.2% |    51.6ms → 5.1ms |    52 → 4 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:43556:38`  |
|  -98.1% |  -39.66ms |  1.9% → <0.1% |    40.4ms → 0.8ms |    99 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75523:43`  |
|  -97.2% |  -33.61ms |  1.6% → <0.1% |    34.6ms → 1.0ms |    47 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:37781:49`  |
|  -96.4% |  -33.32ms |   1.6% → 0.1% |    34.6ms → 1.3ms |    47 → 1 | `(anonymous)`                                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22201:60`  |
|  -13.5% |  -28.56ms |   9.9% → 8.5% | 211.3ms → 182.7ms | 207 → 180 | `applyToParameterTypes`                            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70732:33`  |
|  -11.4% |  -22.92ms |   9.4% → 8.3% | 200.8ms → 177.8ms | 189 → 169 | `inferFromContravariantTypes`                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71429:41`  |
|  -11.4% |  -22.92ms |   9.4% → 8.3% | 200.8ms → 177.8ms | 189 → 169 | `inferFromContravariantTypesIfStrictFunctionTypes` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71434:62`  |

##### Standard library

|  Change |    Delta |           % |              Time |  Samples | Function               | Location                        |
| ------: | -------: | ----------: | ----------------: | -------: | ---------------------- | ------------------------------- |
|  -36.6% | -17.38ms | 2.2% → 1.4% |   47.4ms → 30.0ms |  42 → 27 | `statSync`             | `ext:deno_fs/30_fs.js:473:18`   |
|  -50.5% | -15.53ms | 1.4% → 0.7% |   30.8ms → 15.2ms |  27 → 14 | `buildCustomError`     | `ext:core/00_infra.js:94:28`    |
|   -8.5% | -11.59ms | 6.4% → 5.8% | 136.0ms → 124.4ms | 108 → 99 | `(anonymous)`          | `node:module:1050:24`           |
|   -8.5% | -11.59ms | 6.4% → 5.8% | 136.0ms → 124.4ms | 108 → 99 | `(anonymous)`          | `node:module:1525:36`           |
|   -8.5% | -11.59ms | 6.4% → 5.8% | 136.0ms → 124.4ms | 108 → 99 | `require`              | `node:module:1752:35`           |
|  -22.6% | -11.29ms | 2.3% → 1.8% |   50.0ms → 38.7ms |  44 → 34 | `statSync`             | `ext:deno_node/fs.ts:97:20`     |
|   -7.6% | -10.23ms | 6.3% → 5.8% | 134.6ms → 124.4ms | 107 → 99 | `(anonymous)`          | `node:module:1653:37`           |
|   -7.6% | -10.23ms | 6.3% → 5.8% | 134.6ms → 124.4ms | 107 → 99 | `(anonymous)`          | `node:module:1438:33`           |
|   -7.6% | -10.23ms | 6.3% → 5.8% | 134.6ms → 124.4ms | 107 → 99 | `loadMaybeCjs`         | `node:module:1669:22`           |
|   -7.8% | -10.13ms | 6.1% → 5.5% | 129.6ms → 119.5ms | 103 → 95 | `(anonymous)`          | `node:module:1622:37`           |
|  -69.2% |  -2.94ms | 0.2% → 0.1% |     4.3ms → 1.3ms |    4 → 1 | `realpathSyncImpl`     | `ext:deno_node/fs.ts:148:28`    |
|  -69.2% |  -2.94ms | 0.2% → 0.1% |     4.3ms → 1.3ms |    4 → 1 | `realpathSync_native`  | `ext:deno_node/fs.ts:164:53`    |
|   -2.5% |  -2.62ms | 4.8% → 4.7% | 103.2ms → 100.6ms |  82 → 80 | `compileFunction`      | `ext:core/01_core.js:1100:22`   |
|  -23.7% |  -2.15ms | 0.4% → 0.3% |     9.1ms → 6.9ms |    9 → 6 | `NotFound`             | `ext:runtime/01_errors.js:7:14` |
|  -23.7% |  -2.15ms | 0.4% → 0.3% |     9.1ms → 6.9ms |    9 → 6 | `(anonymous)`          | `ext:core/00_infra.js:127:37`   |
| removed |  -1.83ms | 0.1% → 0.0% |       1.8ms → 0ms |    2 → 0 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`    |
|  -37.8% |  -1.51ms | 0.2% → 0.1% |     4.0ms → 2.5ms |    4 → 2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`    |
| removed |  -1.36ms | 0.1% → 0.0% |       1.4ms → 0ms |    1 → 0 | `toRealPath`           | `node:module:806:20`            |
| removed |  -1.36ms | 0.1% → 0.0% |       1.4ms → 0ms |    1 → 0 | `tryFile`              | `node:module:763:17`            |
| removed |  -1.36ms | 0.1% → 0.0% |       1.4ms → 0ms |    1 → 0 | `tryPackage`           | `node:module:768:20`            |

##### Native

|  Change |    Delta |           % |            Time | Samples | Function                 | Location    |
| ------: | -------: | ----------: | --------------: | ------: | ------------------------ | ----------- |
|  -45.2% | -20.87ms | 2.2% → 1.2% | 46.1ms → 25.3ms | 41 → 22 | `op_fs_stat_sync`        | `<unknown>` |
|  -12.1% |  -3.85ms | 1.5% → 1.3% | 31.8ms → 28.0ms | 25 → 22 | `op_compile_function`    | `<unknown>` |
| removed |  -1.36ms | 0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `op_require_real_path`   | `<unknown>` |
| removed |  -1.26ms | 0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `op_fs_read_dir_sync`    | `<unknown>` |
|  -45.7% |  -1.10ms |        0.1% |   2.4ms → 1.3ms |   2 → 1 | `op_fs_realpath_sync`    | `<unknown>` |
|  -34.4% |  -0.88ms |        0.1% |   2.6ms → 1.7ms |       2 | `op_node_encoding_slice` | `<unknown>` |
|   -8.1% |  -0.65ms | 0.4% → 0.3% |   7.9ms → 7.3ms | 10 → 13 | `(program)`              | `<unknown>` |
|   -2.5% |  -0.09ms |        0.2% |   3.8ms → 3.7ms |       3 | `op_require_read_file`   | `<unknown>` |
