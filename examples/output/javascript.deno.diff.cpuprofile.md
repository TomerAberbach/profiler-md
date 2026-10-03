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

|  Change |    Delta |            % |            Time | Samples | Function                          | Location                                                                                                                              |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| +437.2% | +18.41ms |  0.2% → 1.1% |  4.2ms → 22.6ms |  4 → 18 | `internIdentifier`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32276:28 → 33331:28` |
|  +80.1% | +13.51ms |  0.8% → 1.4% | 16.9ms → 30.4ms | 16 → 28 | `isTypeRelatedTo`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |
| +128.6% |  +9.66ms |  0.4% → 0.8% |  7.5ms → 17.2ms |  9 → 17 | `isDeeplyNestedType`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68771:30 → 70031:30` |
|  +35.8% |  +9.07ms |  1.2% → 1.6% | 25.3ms → 34.4ms | 33 → 42 | `instantiateTypeWorker`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  +60.0% |  +7.85ms |  0.6% → 1.0% | 13.1ms → 20.9ms | 12 → 18 | `createTypeReference`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61539:31 → 62794:31` |
| +210.4% |  +7.19ms |  0.2% → 0.5% |  3.4ms → 10.6ms |  8 → 14 | `isSimpleTypeRelatedTo`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |
|  +24.8% |  +6.52ms |  1.2% → 1.5% | 26.3ms → 32.9ms | 56 → 61 | `inferFromTypes`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
| +989.5% |  +6.21ms | <0.1% → 0.3% |   0.6ms → 6.8ms |   2 → 7 | `createIdentifier`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |
| +216.9% |  +5.37ms |  0.1% → 0.4% |   2.5ms → 7.8ms |   2 → 7 | `canHaveJSDoc`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:17852:22 → 18835:22` |
| +456.2% |  +5.36ms |  0.1% → 0.3% |   1.2ms → 6.5ms |   3 → 8 | `getIndexedAccessTypeOrUndefined` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |
|  +50.1% |  +5.27ms |  0.5% → 0.7% | 10.5ms → 15.8ms | 15 → 19 | `some`                            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
| +111.5% |  +4.75ms |  0.2% → 0.4% |   4.3ms → 9.0ms |   5 → 8 | `instantiateTypeWithAlias`        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |
|     new |  +4.66ms |  0.0% → 0.2% |     0ms → 4.7ms |   0 → 4 | `modifiersToFlags`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20637:26`            |
| +124.8% |  +4.33ms |  0.2% → 0.4% |   3.5ms → 7.8ms |   5 → 8 | `declareSymbol`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
|     new |  +4.03ms |  0.0% → 0.2% |     0ms → 4.0ms |   0 → 5 | `normalizePath`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9164:23`             |
| +106.0% |  +3.98ms |  0.2% → 0.4% |   3.8ms → 7.7ms |   3 → 7 | `instantiateType`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64996:27 → 66256:27` |
| +159.0% |  +3.82ms |  0.1% → 0.3% |   2.4ms → 6.2ms |   3 → 5 | `maybeTypeOfKind`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:80168:27 → 81463:27` |
|     new |  +3.81ms |  0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `normalizeSlashes`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9114:26`             |
|     new |  +3.76ms |  0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `(anonymous)`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68698:77 → 69958:77` |
|     new |  +3.75ms |  0.0% → 0.2% |     0ms → 3.8ms |   0 → 3 | `withJSDoc`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |

##### Standard library

| Change |   Delta |            % |            Time | Samples | Function               | Location                                        |
| -----: | ------: | -----------: | --------------: | ------: | ---------------------- | ----------------------------------------------- |
|    new | +3.51ms |  0.0% → 0.2% |     0ms → 3.5ms |   0 → 3 | `defineStatExtraProps` | `ext:deno_node/internal/fs/stat_utils.ts:26:30` |
|    new | +1.36ms |  0.0% → 0.1% |     0ms → 1.4ms |   0 → 1 | `CFISBIS`              | `ext:deno_node/internal/fs/stat_utils.ts:73:24` |
|    new | +1.25ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:539:8`     |
|    new | +1.25ms |  0.0% → 0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`          | `ext:deno_node/crypto.ts:1:32`                  |
|    new | +1.24ms |  0.0% → 0.1% |     0ms → 1.2ms |   0 → 1 | `readFileSync`         | `ext:deno_node/fs.ts:399:24`                    |
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

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                                                                                                                              |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
|  -72.0% | -12.88ms |  0.8% → 0.2% |  17.9ms → 5.0ms |  15 → 5 | `buildCustomError`                  | `ext:core/00_infra.js:94:28`                                                                                                          |
|  -18.9% | -12.60ms |  3.1% → 2.5% | 66.7ms → 54.1ms | 99 → 88 | `isRelatedTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -34.1% |  -6.42ms |  0.9% → 0.6% | 18.8ms → 12.4ms | 19 → 10 | `getObjectFlags`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -84.1% |  -6.35ms |  0.4% → 0.1% |   7.5ms → 1.2ms |   6 → 1 | `__export`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22:16`               |
|  -50.3% |  -6.13ms |  0.6% → 0.3% |  12.2ms → 6.1ms |  12 → 6 | `getMappedType`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| removed |  -6.07ms |  0.3% → 0.0% |     6.1ms → 0ms |   6 → 0 | `getNamedMembers`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|  -68.4% |  -5.97ms |  0.4% → 0.1% |   8.7ms → 2.8ms |  12 → 6 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
|  -94.1% |  -5.92ms | 0.3% → <0.1% |   6.3ms → 0.4ms |   7 → 2 | `isGenericMappedType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60070:31 → 61325:31` |
|  -49.6% |  -5.64ms |  0.5% → 0.3% |  11.4ms → 5.7ms |  10 → 6 | `getApparentType`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|   -8.0% |  -5.54ms |  3.2% → 3.0% | 69.2ms → 63.6ms | 86 → 81 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  -41.9% |  -5.37ms |  0.6% → 0.3% |  12.8ms → 7.5ms |  11 → 6 | `resolveObjectTypeMembers`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -34.8% |  -5.35ms |  0.7% → 0.5% | 15.4ms → 10.0ms |  14 → 8 | `op_fs_stat_sync`                   | `<unknown>`                                                                                                                           |
|  -26.4% |  -5.24ms |  0.9% → 0.7% | 19.9ms → 14.6ms | 38 → 33 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
| removed |  -5.04ms |  0.2% → 0.0% |     5.0ms → 0ms |   4 → 0 | `addMemberForKeyTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59951:39 → 61206:39` |
| removed |  -4.96ms |  0.2% → 0.0% |     5.0ms → 0ms |   4 → 0 | `(anonymous)`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64807:49 → 66062:49` |
|  -90.6% |  -4.92ms | 0.3% → <0.1% |   5.4ms → 0.5ms |   6 → 1 | `isOptionalDeclaration`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21963:31 → 22956:31` |
|  -51.9% |  -4.80ms |  0.4% → 0.2% |   9.2ms → 4.4ms |   8 → 6 | `getIdentifierToken`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12706:30 → 12836:30` |
|  -99.4% |  -4.50ms | 0.2% → <0.1% |  4.5ms → 28.0µs |   5 → 1 | `isFreshLiteralType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64408:30 → 65663:30` |
|  -53.4% |  -4.38ms |  0.4% → 0.2% |   8.2ms → 3.8ms |   9 → 4 | `getRelationKey`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -90.7% |  -4.36ms | 0.2% → <0.1% |   4.8ms → 0.4ms |   8 → 5 | `aggregateChildrenFlags`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:27454:32 → 28504:32` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                                                                                                                              |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
|  -18.9% | -12.60ms |  3.1% → 2.5% | 66.7ms → 54.1ms | 99 → 88 | `isRelatedTo`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|  -34.1% |  -6.42ms |  0.9% → 0.6% | 18.8ms → 12.4ms | 19 → 10 | `getObjectFlags`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -84.1% |  -6.35ms |  0.4% → 0.1% |   7.5ms → 1.2ms |   6 → 1 | `__export`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22:16`               |
|  -50.3% |  -6.13ms |  0.6% → 0.3% |  12.2ms → 6.1ms |  12 → 6 | `getMappedType`                     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| removed |  -6.07ms |  0.3% → 0.0% |     6.1ms → 0ms |   6 → 0 | `getNamedMembers`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:52485:27 → 53726:27` |
|  -68.4% |  -5.97ms |  0.4% → 0.1% |   8.7ms → 2.8ms |  12 → 6 | `createUnionOrIntersectionProperty` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
|  -94.1% |  -5.92ms | 0.3% → <0.1% |   6.3ms → 0.4ms |   7 → 2 | `isGenericMappedType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60070:31 → 61325:31` |
|  -49.6% |  -5.64ms |  0.5% → 0.3% |  11.4ms → 5.7ms |  10 → 6 | `getApparentType`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|   -8.0% |  -5.54ms |  3.2% → 3.0% | 69.2ms → 63.6ms | 86 → 81 | `recursiveTypeRelatedTo`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  -41.9% |  -5.37ms |  0.6% → 0.3% |  12.8ms → 7.5ms |  11 → 6 | `resolveObjectTypeMembers`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -26.4% |  -5.24ms |  0.9% → 0.7% | 19.9ms → 14.6ms | 38 → 33 | `structuredTypeRelatedToWorker`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43 → 68537:43` |
| removed |  -5.04ms |  0.2% → 0.0% |     5.0ms → 0ms |   4 → 0 | `addMemberForKeyTypeWorker`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59951:39 → 61206:39` |
| removed |  -4.96ms |  0.2% → 0.0% |     5.0ms → 0ms |   4 → 0 | `(anonymous)`                       | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64807:49 → 66062:49` |
|  -90.6% |  -4.92ms | 0.3% → <0.1% |   5.4ms → 0.5ms |   6 → 1 | `isOptionalDeclaration`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21963:31 → 22956:31` |
|  -51.9% |  -4.80ms |  0.4% → 0.2% |   9.2ms → 4.4ms |   8 → 6 | `getIdentifierToken`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12706:30 → 12836:30` |
|  -99.4% |  -4.50ms | 0.2% → <0.1% |  4.5ms → 28.0µs |   5 → 1 | `isFreshLiteralType`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64408:30 → 65663:30` |
|  -53.4% |  -4.38ms |  0.4% → 0.2% |   8.2ms → 3.8ms |   9 → 4 | `getRelationKey`                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -90.7% |  -4.36ms | 0.2% → <0.1% |   4.8ms → 0.4ms |   8 → 5 | `aggregateChildrenFlags`            | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:27454:32 → 28504:32` |
|  -92.4% |  -4.25ms | 0.2% → <0.1% |   4.6ms → 0.3ms |   5 → 1 | `checkExpression`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
|  -30.3% |  -3.93ms |  0.6% → 0.4% |  13.0ms → 9.0ms | 35 → 32 | `structuredTypeRelatedTo`           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67207:37 → 68467:37` |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function               | Location                                            |
| ------: | -------: | -----------: | -------------: | ------: | ---------------------- | --------------------------------------------------- |
|  -72.0% | -12.88ms |  0.8% → 0.2% | 17.9ms → 5.0ms |  15 → 5 | `buildCustomError`     | `ext:core/00_infra.js:94:28`                        |
|  -23.7% |  -2.15ms |  0.4% → 0.3% |  9.1ms → 6.9ms |   9 → 6 | `NotFound`             | `ext:runtime/01_errors.js:7:14`                     |
| removed |  -1.83ms |  0.1% → 0.0% |    1.8ms → 0ms |   2 → 0 | `encodeRealpathResult` | `ext:deno_node/fs.ts:116:32`                        |
|  -34.0% |  -1.28ms |  0.2% → 0.1% |  3.8ms → 2.5ms |   3 → 2 | `readFileMaybeDecode`  | `ext:deno_node/fs.ts:268:31`                        |
|  -13.2% |  -0.50ms |         0.2% |  3.8ms → 3.3ms |       3 | `SafeIterator`         | `ext:core/00_primordials.js:316:18`                 |
| removed |  -0.46ms | <0.1% → 0.0% |    0.5ms → 0ms |   1 → 0 | `value`                | `ext:deno_node/internal/fs/stat_utils.ts:30:14`     |
| removed |  -0.23ms | <0.1% → 0.0% |    0.2ms → 0ms |   1 → 0 | `FastBuffer`           | `ext:deno_node/internal/buffer.mjs:192:14`          |
|   -1.8% |  -0.02ms |         0.1% |  1.3ms → 1.2ms |       1 | `set`                  | `ext:deno_node/internal/fs/utils.mjs:554:8 → 569:8` |
|   -0.8% |  -0.01ms |         0.1% |          1.3ms |       1 | `dateFromMs`           | `ext:deno_node/internal/fs/utils.mjs:526:20`        |

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

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `internIdentifier` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:33331:28`)

|  Change |    Delta |             % |           Time | Samples | Location                                                                                                                        |
| ------: | -------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| +434.8% | +16.37ms | 89.4% → 89.0% | 3.8ms → 20.1ms |  3 → 16 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32277 → 33332` |
| +457.8% |  +2.04ms | 10.6% → 11.0% |  0.4ms → 2.5ms |   1 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32279 → 33334` |

##### `isTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67361:27`)

|  Change |   Delta |             % |            Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|     new | +6.31ms |  0.0% → 20.8% |     0ms → 6.3ms |   0 → 5 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67382`         |
|  +49.0% | +5.56ms | 67.2% → 55.6% | 11.3ms → 16.9ms |  9 → 15 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66135 → 67395` |
| +299.4% | +3.75ms |  7.4% → 16.5% |   1.3ms → 5.0ms |   1 → 4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66112 → 67372` |
| removed | -1.24ms |   7.4% → 0.0% |     1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66106`         |
| removed | -1.22ms |   7.2% → 0.0% |     1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66101`         |

##### `isDeeplyNestedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70031:30`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| +344.1% | +7.46ms | 28.8% → 56.0% | 2.2ms → 9.6ms |   2 → 8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68784 → 70044` |
| removed | -1.26ms |  16.7% → 0.0% |   1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68782`         |
|     new | +1.24ms |   0.0% → 7.2% |   0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70032`         |
|  +47.9% | +1.22ms | 33.8% → 21.9% | 2.5ms → 3.8ms |   2 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68771 → 70031` |
|     new | +0.99ms |   0.0% → 5.8% |   0ms → 1.0ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70033`         |

##### `instantiateTypeWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283:33`)

|  Change |   Delta |             % |            Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|  +89.5% | +9.01ms | 39.7% → 55.4% | 10.1ms → 19.1ms |  9 → 17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65039 → 66299` |
| removed | -2.52ms |   9.9% → 0.0% |     2.5ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65051`         |
|     new | +2.47ms |   0.0% → 7.2% |     0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66283`         |
| +996.4% | +1.92ms |   0.8% → 6.1% |   0.2ms → 2.1ms |   1 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65089 → 66349` |
|     new | +1.28ms |   0.0% → 3.7% |     0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66286`         |

##### `createTypeReference` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:62794:31`)

|   Change |   Delta |             % |            Time | Samples | Location                                                                                                                        |
| -------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|   +48.0% | +5.06ms | 80.5% → 74.5% | 10.5ms → 15.6ms |  9 → 13 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61541 → 62796` |
|   +65.3% | +1.60ms | 18.8% → 19.4% |   2.5ms → 4.1ms |   2 → 4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61544 → 62799` |
| +1262.8% | +1.19ms |   0.7% → 6.1% |   0.1ms → 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61540 → 62795` |

##### `isSimpleTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67312:33`)

|    Change |   Delta |            % |         Time | Samples | Location                                                                                                                        |
| --------: | ------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|       new | +2.53ms | 0.0% → 23.8% |  0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67313`         |
|       new | +2.47ms | 0.0% → 23.3% |  0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67312`         |
|       new | +1.24ms | 0.0% → 11.7% |  0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67351`         |
|       new | +0.73ms |  0.0% → 6.9% |  0ms → 0.7ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67354`         |
| -46800.0% | +0.47ms | -0.0% → 4.4% | -0ms → 0.5ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66096 → 67356` |

##### `inferFromTypes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71184:28`)

|  Change |   Delta |            % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|     new | +2.55ms |  0.0% → 7.8% |   0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71198`         |
|  -65.5% | -2.44ms | 14.2% → 3.9% | 3.7ms → 1.3ms |   3 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70032 → 71315` |
|     new | +1.27ms |  0.0% → 3.9% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71294`         |
|     new | +1.27ms |  0.0% → 3.9% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:71239`         |
| removed | -1.27ms |  4.8% → 0.0% |   1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69923`         |

##### `createIdentifier` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:24991:28`)

| Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
|    new | +2.51ms | 0.0% → 36.7% | 0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:25005` |
|    new | +1.26ms | 0.0% → 18.4% | 0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:24999` |
|    new | +1.25ms | 0.0% → 18.3% | 0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:24992` |
|    new | +0.90ms | 0.0% → 13.2% | 0ms → 0.9ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:24995` |

##### `canHaveJSDoc` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:18835:22`)

| Change |   Delta |              % |          Time | Samples | Location                                                                                                                        |
| -----: | ------: | -------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|    new | +2.86ms |   0.0% → 36.5% |   0ms → 2.9ms |   0 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:18835`         |
| +51.4% | +1.27ms | 100.0% → 47.8% | 2.5ms → 3.7ms |   2 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:17853 → 18836` |
|    new | +1.23ms |   0.0% → 15.7% |   0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:18905`         |

##### `getIndexedAccessTypeOrUndefined` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65149:43`)

| Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
|    new | +1.33ms | 0.0% → 20.4% | 0ms → 1.3ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65165` |
|    new | +1.26ms | 0.0% → 19.2% | 0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65157` |
|    new | +1.25ms | 0.0% → 19.2% | 0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65164` |
|    new | +0.90ms | 0.0% → 13.8% | 0ms → 0.9ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65153` |
|    new | +0.49ms |  0.0% → 7.4% | 0ms → 0.5ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65171` |

##### `some` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794:14`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                      |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------- |
|     new | +3.78ms |  0.0% → 23.9% |   0ms → 3.8ms |   0 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2794`        |
| +105.6% | +2.65ms | 23.9% → 32.7% | 2.5ms → 5.2ms |   3 → 6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2785 → 2798` |
| removed | -1.81ms |  17.2% → 0.0% |   1.8ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2782`        |
|  -31.4% | -1.73ms | 52.4% → 24.0% | 5.5ms → 3.8ms |   5 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2784 → 2797` |
|     new | +1.27ms |   0.0% → 8.0% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2806`        |

##### `instantiateTypeWithAlias` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66266:36`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| +155.9% | +4.98ms | 75.1% → 90.8% | 3.2ms → 8.2ms |   4 → 7 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65019 → 66279` |
| removed | -1.06ms |  24.9% → 0.0% |   1.1ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65008`         |
|     new | +0.83ms |   0.0% → 9.2% |   0ms → 0.8ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66280`         |

##### `modifiersToFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20637:26`)

| Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
|    new | +2.50ms | 0.0% → 53.6% | 0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20637` |
|    new | +1.26ms | 0.0% → 27.0% | 0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20639` |
|    new | +0.90ms | 0.0% → 19.3% | 0ms → 0.9ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20644` |

##### `declareSymbol` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46190:25`)

| Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|    new | +2.36ms |  0.0% → 30.3% |   0ms → 2.4ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46209`         |
| -50.7% | -1.28ms | 72.6% → 15.9% | 2.5ms → 1.2ms |   2 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:45005 → 46198` |
|    new | +1.27ms |  0.0% → 16.3% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46191`         |
|    new | +1.25ms |  0.0% → 16.0% |   0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46190`         |
|    new | +1.19ms |  0.0% → 15.2% |   0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:46256`         |

##### `normalizePath` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9164:23`)

| Change |   Delta |            % |        Time | Samples | Location                                                                                                               |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- |
|    new | +2.77ms | 0.0% → 68.8% | 0ms → 2.8ms |   0 → 4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9166` |
|    new | +1.26ms | 0.0% → 31.2% | 0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9165` |

##### `instantiateType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66256:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| +109.0% | +2.74ms | 67.1% → 68.1% | 2.5ms → 5.3ms |   2 → 5 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64997 → 66257` |
|     new | +1.25ms |  0.0% → 16.2% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66256`         |
|   -1.5% | -0.02ms | 32.9% → 15.7% |         1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65004 → 66264` |

##### `maybeTypeOfKind` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81463:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|     new | +2.49ms |  0.0% → 40.0% |   0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81463`         |
|     new | +2.49ms |  0.0% → 40.0% |   0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81470`         |
| removed | -1.29ms |  53.7% → 0.0% |   1.3ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:80174`         |
|  +11.5% | +0.13ms | 46.3% → 19.9% | 1.1ms → 1.2ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:80180 → 81475` |

##### `normalizeSlashes` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9114:26`)

| Change |   Delta |             % |        Time | Samples | Location                                                                                                               |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- |
|    new | +3.81ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:9115` |

##### `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69958:77`)

| Change |   Delta |             % |        Time | Samples | Location                                                                                                                |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
|    new | +3.76ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69958` |

##### `withJSDoc` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32743:21`)

| Change |   Delta |             % |        Time | Samples | Location                                                                                                                |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
|    new | +3.75ms | 0.0% → 100.0% | 0ms → 3.8ms |   0 → 3 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32748` |

##### `defineStatExtraProps` (`ext:deno_node/internal/fs/stat_utils.ts:26:30`)

| Change |   Delta |            % |        Time | Samples | Location                                     |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------------- |
|    new | +2.26ms | 0.0% → 64.3% | 0ms → 2.3ms |   0 → 2 | `ext:deno_node/internal/fs/stat_utils.ts:27` |
|    new | +1.25ms | 0.0% → 35.7% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/stat_utils.ts:71` |

##### `CFISBIS` (`ext:deno_node/internal/fs/stat_utils.ts:73:24`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1.36ms | 0.0% → 100.0% | 0ms → 1.4ms |   0 → 1 | `ext:deno_node/internal/fs/stat_utils.ts:74` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:539:8`)

| Change |   Delta |             % |        Time | Samples | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/internal/fs/utils.mjs:542` |

##### `(anonymous)` (`ext:deno_node/crypto.ts:1:32`)

| Change |   Delta |             % |        Time | Samples | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `ext:deno_node/crypto.ts:297` |

##### `readFileSync` (`ext:deno_node/fs.ts:399:24`)

| Change |   Delta |             % |        Time | Samples | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------- |
|    new | +1.24ms | 0.0% → 100.0% | 0ms → 1.2ms |   0 → 1 | `ext:deno_node/fs.ts:409` |

##### `getOptions` (`ext:deno_node/internal/fs/utils.mjs:363:27`)

| Change |   Delta |             % |        Time | Samples | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
|    new | +1.23ms | 0.0% → 100.0% | 0ms → 1.2ms |   0 → 1 | `ext:deno_node/internal/fs/utils.mjs:363` |

##### `compileFunction` (`ext:core/01_core.js:1100:22`)

| Change |   Delta |      % |            Time | Samples | Location                   |
| -----: | ------: | -----: | --------------: | ------: | -------------------------- |
|  +1.7% | +1.23ms | 100.0% | 71.4ms → 72.6ms | 57 → 58 | `ext:core/01_core.js:1106` |

##### `statSync` (`ext:deno_fs/30_fs.js:473:18`)

| Change |   Delta |             % |        Time | Samples | Location                   |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- |
|    new | +0.54ms | 0.0% → 100.0% | 0ms → 0.5ms |   0 → 1 | `ext:deno_fs/30_fs.js:475` |

##### `decodeUtf8` (`ext:deno_node/internal/buffer.mjs:706:20`)

| Change |   Delta |      % |  Time | Samples | Location                                |
| -----: | ------: | -----: | ----: | ------: | --------------------------------------- |
|  +6.8% | +0.08ms | 100.0% | 1.2ms |       1 | `ext:deno_node/internal/buffer.mjs:707` |

##### `op_url_get_serialization` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 101      |

##### `op_require_try_self` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.27ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 1370     |

##### `op_fs_read_file_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| +19.8% | +1.25ms | 100.0% | 6.3ms → 7.6ms |   5 → 6 | 409      |

##### `op_inspector_dispatch` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +0.70ms | 0.0% → 100.0% | 0ms → 0.7ms |   0 → 1 | 203      |

##### `buildCustomError` (`ext:core/00_infra.js:94:28`)

|  Change |   Delta |             % |           Time | Samples | Location                   |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------- |
|  -68.0% | -9.31ms | 76.6% → 87.6% | 13.7ms → 4.4ms |  11 → 4 | `ext:core/00_infra.js:105` |
| removed | -1.28ms |   7.2% → 0.0% |    1.3ms → 0ms |   1 → 0 | `ext:core/00_infra.js:115` |
| removed | -1.25ms |   7.0% → 0.0% |    1.3ms → 0ms |   1 → 0 | `ext:core/00_infra.js:108` |
|  -49.6% | -0.61ms |  6.9% → 12.4% |  1.2ms → 0.6ms |       1 | `ext:core/00_infra.js:95`  |
| removed | -0.42ms |   2.3% → 0.0% |    0.4ms → 0ms |   1 → 0 | `ext:core/00_infra.js:97`  |

##### `isRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753:25`)

|  Change |   Delta |             % |            Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|  -20.9% | -5.04ms | 36.1% → 35.2% | 24.1ms → 19.0ms | 21 → 17 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66510 → 67770` |
| removed | -2.51ms |   3.8% → 0.0% |     2.5ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66560`         |
| removed | -2.46ms |   3.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66518`         |
|  +86.8% | +2.16ms |   3.7% → 8.6% |   2.5ms → 4.7ms |   2 → 4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66493 → 67753` |
|  -81.3% | -2.02ms |   3.7% → 0.9% |   2.5ms → 0.5ms |   2 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66590 → 67850` |

##### `getObjectFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21225:24`)

| Change |   Delta |             % |            Time | Samples | Location                                                                                                                        |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| -64.7% | -4.43ms | 36.3% → 19.4% |   6.8ms → 2.4ms |   8 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20242 → 21225` |
| -16.6% | -1.99ms | 63.7% → 80.6% | 12.0ms → 10.0ms |  11 → 8 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:20243 → 21226` |

##### `__export` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22:16`)

| Change |   Delta |      % |          Time | Samples | Location                                                                                                             |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------- |
| -84.1% | -6.35ms | 100.0% | 7.5ms → 1.2ms |   6 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:24` |

##### `getMappedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65907:25`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -3.73ms | 30.6% → 0.0% | 3.7ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64683` |
| removed | -1.92ms | 15.7% → 0.0% | 1.9ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64677` |
|     new | +1.65ms | 0.0% → 27.1% | 0ms → 1.6ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65914` |
| removed | -1.26ms | 10.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64681` |
| removed | -0.78ms |  6.4% → 0.0% | 0.8ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64655` |

##### `getNamedMembers` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:53726:27`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -4.71ms | 77.6% → 0.0% | 4.7ms → 0ms |   4 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:52487` |
| removed | -1.36ms | 22.4% → 0.0% | 1.4ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:52492` |

##### `createUnionOrIntersectionProperty` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61753:45`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| removed | -3.24ms |  37.0% → 0.0% |   3.2ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60509`         |
| removed | -2.50ms |  28.6% → 0.0% |   2.5ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60511`         |
| removed | -1.32ms |  15.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60599`         |
|     new | +1.29ms |  0.0% → 46.7% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61801`         |
|  +30.8% | +0.30ms | 11.3% → 46.7% | 1.0ms → 1.3ms |       1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60512 → 61767` |

##### `isGenericMappedType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61325:31`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -2.52ms | 40.1% → 0.0% | 2.5ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60077` |
| removed | -2.05ms | 32.6% → 0.0% | 2.1ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60071` |
| removed | -0.53ms |  8.5% → 0.0% | 0.5ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60070` |

##### `getApparentType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61745:27`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| removed | -3.52ms |  31.0% → 0.0% |   3.5ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60490`         |
|  -43.1% | -3.25ms | 66.4% → 74.9% | 7.6ms → 4.3ms |   6 → 4 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60493 → 61748` |
|     new | +1.01ms |  0.0% → 17.5% |   0ms → 1.0ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61746`         |

##### `recursiveTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68323:36`)

|  Change |   Delta |             % |            Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|  -10.5% | -4.32ms | 59.3% → 57.7% | 41.0ms → 36.7ms | 37 → 35 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67076 → 68336` |
| removed | -4.12ms |   6.0% → 0.0% |     4.1ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67135`         |
|  -75.2% | -3.79ms |   7.3% → 2.0% |   5.0ms → 1.2ms |   4 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67063 → 68323` |
|     new | +2.52ms |   0.0% → 4.0% |     0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68383`         |
|     new | +2.52ms |   0.0% → 4.0% |     0ms → 2.5ms |   0 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68389`         |

##### `resolveObjectTypeMembers` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60465:36`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| +667.4% | +3.17ms |  3.7% → 48.9% | 0.5ms → 3.6ms |   1 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59245 → 60500` |
| removed | -2.48ms |  19.4% → 0.0% |   2.5ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59233`         |
| removed | -2.48ms |  19.3% → 0.0% |   2.5ms → 0ms |   2 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59234`         |
| removed | -1.25ms |   9.7% → 0.0% |   1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59247`         |
|  -33.0% | -1.24ms | 29.3% → 33.7% | 3.8ms → 2.5ms |   3 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59223 → 60478` |

##### `op_fs_stat_sync` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| -34.8% | -5.35ms | 100.0% | 15.4ms → 10.0ms |  14 → 8 | 474      |

##### `structuredTypeRelatedToWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68537:43`)

|  Change |   Delta |            % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| removed | -4.56ms | 22.9% → 0.0% |   4.6ms → 0ms |   4 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67753`         |
|  -84.5% | -1.93ms | 11.5% → 2.4% | 2.3ms → 0.4ms |       2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67764 → 69024` |
|     new | +1.27ms |  0.0% → 8.7% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68541`         |
|     new | +1.26ms |  0.0% → 8.6% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69026`         |
|     new | +1.24ms |  0.0% → 8.5% |   0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68653`         |

##### `addMemberForKeyTypeWorker` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:61206:39`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -1.28ms | 25.4% → 0.0% | 1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59961` |
| removed | -1.27ms | 25.3% → 0.0% | 1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59959` |
| removed | -1.25ms | 24.7% → 0.0% | 1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59972` |
| removed | -1.24ms | 24.6% → 0.0% | 1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59979` |

##### `(anonymous)` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:66062:49`)

|  Change |   Delta |             % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -4.96ms | 100.0% → 0.0% | 5.0ms → 0ms |   4 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64807` |

##### `isOptionalDeclaration` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:22956:31`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -2.70ms | 49.8% → 0.0% | 2.7ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21964` |
| removed | -1.25ms | 23.1% → 0.0% | 1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21967` |
| removed | -1.25ms | 23.0% → 0.0% | 1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:21969` |

##### `getIdentifierToken` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12836:30`)

| Change |   Delta |      % |          Time | Samples | Location                                                                                                                        |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| -51.9% | -4.80ms | 100.0% | 9.2ms → 4.4ms |   8 → 6 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:12711 → 12841` |

##### `isFreshLiteralType` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65663:30`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -3.13ms | 69.0% → 0.0% | 3.1ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64409` |
| removed | -1.26ms | 27.8% → 0.0% | 1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64408` |

##### `getRelationKey` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69989:26`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| removed | -4.36ms |  53.1% → 0.0% |   4.4ms → 0ms |   5 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68736`         |
|  -33.9% | -1.29ms | 46.2% → 65.5% | 3.8ms → 2.5ms |   3 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68730 → 69990` |
|     new | +1.27ms |  0.0% → 33.1% |   0ms → 1.3ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69995`         |

##### `aggregateChildrenFlags` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:28504:32`)

|  Change |   Delta |            % |        Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -3.79ms | 79.0% → 0.0% | 3.8ms → 0ms |   3 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:27456` |

##### `checkExpression` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:82771:27`)

|  Change |   Delta |            % |         Time | Samples | Location                                                                                                                |
| ------: | ------: | -----------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| removed | -1.27ms | 27.7% → 0.0% |  1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81487` |
| removed | -1.25ms | 27.3% → 0.0% |  1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81480` |
| removed | -1.12ms | 24.3% → 0.0% |  1.1ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81488` |
| removed | -0.03ms |  0.5% → 0.0% | 25.0µs → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:81482` |

##### `structuredTypeRelatedTo` (`/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68467:37`)

|  Change |   Delta |             % |          Time | Samples | Location                                                                                                                        |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
|  -74.1% | -3.73ms | 38.8% → 14.4% | 5.0ms → 1.3ms |   5 → 2 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67209 → 68469` |
| removed | -1.25ms |   9.7% → 0.0% |   1.3ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67247`         |
|     new | +1.25ms |  0.0% → 13.8% |   0ms → 1.2ms |   0 → 1 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68467`         |
| removed | -1.25ms |   9.6% → 0.0% |   1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67263`         |
| removed | -1.21ms |   9.3% → 0.0% |   1.2ms → 0ms |   1 → 0 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67238`         |

##### `NotFound` (`ext:runtime/01_errors.js:7:14`)

| Change |   Delta |      % |          Time | Samples | Location                     |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------- |
| -23.7% | -2.15ms | 100.0% | 9.1ms → 6.9ms |   9 → 6 | `ext:runtime/01_errors.js:8` |

##### `encodeRealpathResult` (`ext:deno_node/fs.ts:116:32`)

|  Change |   Delta |             % |        Time | Samples | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- |
| removed | -1.83ms | 100.0% → 0.0% | 1.8ms → 0ms |   2 → 0 | `ext:deno_node/fs.ts:117` |

##### `readFileMaybeDecode` (`ext:deno_node/fs.ts:268:31`)

| Change |   Delta |      % |          Time | Samples | Location                  |
| -----: | ------: | -----: | ------------: | ------: | ------------------------- |
| -34.0% | -1.28ms | 100.0% | 3.8ms → 2.5ms |   3 → 2 | `ext:deno_node/fs.ts:270` |

##### `SafeIterator` (`ext:core/00_primordials.js:316:18`)

| Change |   Delta |      % |          Time | Samples | Location                         |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------- |
| -13.2% | -0.50ms | 100.0% | 3.8ms → 3.3ms |       3 | `ext:core/00_primordials.js:318` |

##### `value` (`ext:deno_node/internal/fs/stat_utils.ts:30:14`)

|  Change |   Delta |             % |        Time | Samples | Location                                     |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -0.46ms | 100.0% → 0.0% | 0.5ms → 0ms |   1 → 0 | `ext:deno_node/internal/fs/stat_utils.ts:30` |

##### `FastBuffer` (`ext:deno_node/internal/buffer.mjs:192:14`)

|  Change |   Delta |             % |        Time | Samples | Location                                |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------- |
| removed | -0.23ms | 100.0% → 0.0% | 0.2ms → 0ms |   1 → 0 | `ext:deno_node/internal/buffer.mjs:193` |

##### `set` (`ext:deno_node/internal/fs/utils.mjs:569:8`)

| Change |   Delta |      % |          Time | Samples | Location                                        |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------- |
|  -1.8% | -0.02ms | 100.0% | 1.3ms → 1.2ms |       1 | `ext:deno_node/internal/fs/utils.mjs:555 → 570` |

##### `dateFromMs` (`ext:deno_node/internal/fs/utils.mjs:526:20`)

| Change |   Delta |      % |  Time | Samples | Location                                  |
| -----: | ------: | -----: | ----: | ------: | ----------------------------------------- |
|  -0.8% | -0.01ms | 100.0% | 1.3ms |       1 | `ext:deno_node/internal/fs/utils.mjs:527` |

##### `op_compile_function` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| -12.1% | -3.85ms | 100.0% | 31.8ms → 28.0ms | 25 → 22 | 1106     |

##### `op_require_real_path` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.36ms | 100.0% → 0.0% | 1.4ms → 0ms |   1 → 0 | 811      |

##### `op_fs_read_dir_sync` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | 121      |

##### `op_fs_realpath_sync` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| -45.7% | -1.10ms | 100.0% | 2.4ms → 1.3ms |   2 → 1 | 281      |

##### `op_node_encoding_slice` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| -34.4% | -0.88ms | 100.0% | 2.6ms → 1.7ms |       2 | 707      |

##### `op_require_read_file` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
|  -2.5% | -0.09ms | 100.0% | 3.8ms → 3.7ms |       3 | 1670     |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                           | Location                                                                                                                                |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
|   +2.0% | +33.79ms | 79.4% → 80.3% |     1.69s → 1.72s | 2,460 → 2,482 | `forEach`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|   +8.2% | +26.11ms | 14.9% → 15.9% | 317.3ms → 343.5ms |     476 → 492 | `signaturesRelatedTo`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68245:33 → 69505:33`   |
|  +11.6% | +25.56ms | 10.3% → 11.4% | 221.0ms → 246.6ms |     330 → 358 | `instantiateList`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64623:27 → 65878:27`   |
|  +11.7% | +25.30ms | 10.1% → 11.2% | 216.6ms → 241.9ms |     325 → 353 | `instantiateTypes`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:64640:28 → 65895:28`   |
|   +4.1% | +24.31ms | 27.6% → 28.5% | 588.6ms → 612.9ms |     668 → 682 | `getTypeOfSymbol`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:58408:27 → 59663:27`   |
|   +5.0% | +23.55ms | 22.0% → 22.9% | 470.6ms → 494.1ms |     738 → 752 | `structuredTypeRelatedTo`          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67207:37 → 68467:37`   |
|   +7.8% | +23.09ms | 13.9% → 14.9% | 297.8ms → 320.9ms |     451 → 465 | `signatureRelatedTo`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68375:32 → 69635:32`   |
|   +6.0% | +22.80ms | 17.7% → 18.6% | 377.2ms → 400.0ms |     542 → 552 | `propertiesRelatedTo`              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68073:33 → 69333:33`   |
|   +7.3% | +21.43ms | 13.8% → 14.7% | 295.4ms → 316.9ms |     449 → 461 | `compareSignaturesRelated`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65804:36 → 67064:36`   |
|   +4.5% | +21.21ms | 22.0% → 22.8% | 469.1ms → 490.3ms |     732 → 745 | `structuredTypeRelatedToWorker`    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:67277:43 → 68537:43`   |
| +181.7% | +21.20ms |   0.5% → 1.5% |   11.7ms → 32.9ms |       14 → 32 | `createIdentifier`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32283:28 → 33338:28`   |
|  +12.6% | +19.60ms |   7.3% → 8.2% | 156.0ms → 175.6ms |     301 → 322 | `getConditionalType`               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:63974:30 → 65229:30`   |
|   +5.9% | +19.48ms | 15.5% → 16.3% | 331.4ms → 350.9ms |     419 → 434 | `(anonymous)`                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123923:7 → 125505:7`   |
|   +5.9% | +19.48ms | 15.5% → 16.3% | 331.4ms → 350.9ms |     419 → 434 | `findSourceFileWorker`             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123984:32 → 125566:32` |
|   +5.9% | +19.48ms | 15.5% → 16.3% | 331.4ms → 350.9ms |     419 → 434 | `findSourceFile`                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123967:26 → 125549:26` |
|   +5.9% | +19.48ms | 15.5% → 16.3% | 331.4ms → 350.9ms |     419 → 434 | `getSourceFileFromReferenceWorker` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123879:44 → 125461:44` |
|   +5.9% | +19.48ms | 15.5% → 16.3% | 331.4ms → 350.9ms |     419 → 434 | `processSourceFile`                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |
|   +6.6% | +18.67ms | 13.2% → 14.0% | 281.8ms → 300.5ms |     365 → 379 | `processRootFile`                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |
|   +8.5% | +18.66ms | 10.3% → 11.1% | 220.3ms → 239.0ms |     311 → 325 | `(anonymous)`                      | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| +437.2% | +18.41ms |   0.2% → 1.1% |    4.2ms → 22.6ms |        4 → 18 | `internIdentifier`                 | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:32276:28 → 33331:28`   |

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
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `set`                          | `ext:deno_node/internal/fs/utils.mjs:539:8`     |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`                  | `ext:deno_node/crypto.ts:1:32`                  |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `(anonymous)`                  | `ext:deno_node/crypto.ts:1:1`                   |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `loadExtScript`                | `ext:core/01_core.js:951:25`                    |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `crypto`                       | `node:module:161:13`                            |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `get`                          | `node:module:212:9`                             |
|     new | +1.25ms |   0.0% → 0.1% |     0ms → 1.3ms |         0 → 1 | `loadNativeModule`             | `node:module:2019:26`                           |
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

| Change |    Delta |             % |              Time |   Samples | Function                                               | Location                                                                                                                              |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| -13.5% | -28.56ms |   9.9% → 8.5% | 211.3ms → 182.7ms | 207 → 180 | `applyToParameterTypes`                                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69472:33 → 70732:33` |
| -11.4% | -22.92ms |   9.4% → 8.3% | 200.8ms → 177.8ms | 189 → 169 | `inferFromContravariantTypes`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
| -11.4% | -22.92ms |   9.4% → 8.3% | 200.8ms → 177.8ms | 189 → 169 | `inferFromContravariantTypesIfStrictFunctionTypes`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |
| -10.8% | -21.00ms |   9.1% → 8.1% | 194.6ms → 173.6ms | 187 → 168 | `inferFromMatchingTypes`                               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
| -45.2% | -20.87ms |   2.2% → 1.2% |   46.1ms → 25.3ms |   41 → 22 | `op_fs_stat_sync`                                      | `<unknown>`                                                                                                                           |
| -28.5% | -18.94ms |   3.1% → 2.2% |   66.5ms → 47.5ms |   72 → 53 | `resolveTypeReferenceMembers`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |
| -10.7% | -17.95ms |   7.8% → 6.9% | 167.0ms → 149.1ms | 157 → 140 | `isTypeOrBaseIdenticalTo`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
| -36.6% | -17.38ms |   2.2% → 1.4% |   47.4ms → 30.0ms |   42 → 27 | `statSync`                                             | `ext:deno_fs/30_fs.js:473:18`                                                                                                         |
| -19.9% | -17.33ms |   4.1% → 3.2% |   86.9ms → 69.5ms |   97 → 80 | `getPropertyOfType`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| -12.5% | -16.79ms |   6.3% → 5.5% | 134.4ms → 117.6ms | 170 → 152 | `resolveStructuredTypeMembers`                         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  -6.9% | -16.47ms | 11.2% → 10.3% | 238.7ms → 222.3ms | 254 → 239 | `inferFromSignature`                                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70456:32 → 71739:32` |
| -50.5% | -15.53ms |   1.4% → 0.7% |   30.8ms → 15.2ms |   27 → 14 | `buildCustomError`                                     | `ext:core/00_infra.js:94:28`                                                                                                          |
|  -6.3% | -15.43ms | 11.4% → 10.6% | 243.3ms → 227.8ms | 262 → 248 | `inferFromSignatures`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70444:33 → 71727:33` |
| -15.0% | -14.85ms |   4.6% → 3.9% |   98.9ms → 84.1ms | 124 → 117 | `checkPropertyAccessExpressionOrQualifiedName`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
| -24.4% | -14.79ms |   2.8% → 2.1% |   60.7ms → 45.9ms |   68 → 50 | `resolveObjectTypeMembers`                             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -8.8% | -14.55ms |   7.7% → 7.0% | 165.4ms → 150.9ms | 160 → 147 | `isTypeIdenticalTo`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
|  -1.8% | -13.58ms | 34.5% → 33.6% | 737.4ms → 723.8ms | 816 → 800 | `checkDeferredNode`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  -1.8% | -13.58ms | 34.5% → 33.6% | 737.4ms → 723.8ms | 816 → 800 | `checkDeferredNodes`                                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|  -1.8% | -13.46ms | 34.4% → 33.4% | 733.7ms → 720.3ms | 810 → 793 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
| -36.3% | -11.61ms |   1.5% → 0.9% |   31.9ms → 20.3ms |   47 → 42 | `speculationHelper`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:31996:29 → 33051:29` |

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function                                               | Location                                                                                                                              |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| -13.5% | -28.56ms |   9.9% → 8.5% | 211.3ms → 182.7ms | 207 → 180 | `applyToParameterTypes`                                | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:69472:33 → 70732:33` |
| -11.4% | -22.92ms |   9.4% → 8.3% | 200.8ms → 177.8ms | 189 → 169 | `inferFromContravariantTypes`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70146:41 → 71429:41` |
| -11.4% | -22.92ms |   9.4% → 8.3% | 200.8ms → 177.8ms | 189 → 169 | `inferFromContravariantTypesIfStrictFunctionTypes`     | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |
| -10.8% | -21.00ms |   9.1% → 8.1% | 194.6ms → 173.6ms | 187 → 168 | `inferFromMatchingTypes`                               | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
| -28.5% | -18.94ms |   3.1% → 2.2% |   66.5ms → 47.5ms |   72 → 53 | `resolveTypeReferenceMembers`                          | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59264:39 → 60519:39` |
| -10.7% | -17.95ms |   7.8% → 6.9% | 167.0ms → 149.1ms | 157 → 140 | `isTypeOrBaseIdenticalTo`                              | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
| -19.9% | -17.33ms |   4.1% → 3.2% |   86.9ms → 69.5ms |   97 → 80 | `getPropertyOfType`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
| -12.5% | -16.79ms |   6.3% → 5.5% | 134.4ms → 117.6ms | 170 → 152 | `resolveStructuredTypeMembers`                         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  -6.9% | -16.47ms | 11.2% → 10.3% | 238.7ms → 222.3ms | 254 → 239 | `inferFromSignature`                                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70456:32 → 71739:32` |
|  -6.3% | -15.43ms | 11.4% → 10.6% | 243.3ms → 227.8ms | 262 → 248 | `inferFromSignatures`                                  | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:70444:33 → 71727:33` |
| -15.0% | -14.85ms |   4.6% → 3.9% |   98.9ms → 84.1ms | 124 → 117 | `checkPropertyAccessExpressionOrQualifiedName`         | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |
| -24.4% | -14.79ms |   2.8% → 2.1% |   60.7ms → 45.9ms |   68 → 50 | `resolveObjectTypeMembers`                             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|  -8.8% | -14.55ms |   7.7% → 7.0% | 165.4ms → 150.9ms | 160 → 147 | `isTypeIdenticalTo`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:65203:29 → 66463:29` |
|  -1.8% | -13.58ms | 34.5% → 33.6% | 737.4ms → 723.8ms | 816 → 800 | `checkDeferredNode`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  -1.8% | -13.58ms | 34.5% → 33.6% | 737.4ms → 723.8ms | 816 → 800 | `checkDeferredNodes`                                   | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|  -1.8% | -13.46ms | 34.4% → 33.4% | 733.7ms → 720.3ms | 810 → 793 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:79840:64 → 81135:64` |
| -36.3% | -11.61ms |   1.5% → 0.9% |   31.9ms → 20.3ms |   47 → 42 | `speculationHelper`                                    | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:31996:29 → 33051:29` |
|  -3.7% | -11.53ms | 14.5% → 13.8% | 308.9ms → 297.4ms |       384 | `checkPropertyAccessExpression`                        | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:75786:41 → 77069:41` |
| -34.9% | -11.33ms |   1.5% → 1.0% |   32.5ms → 21.2ms |   44 → 35 | `isWeakType`                                           | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:68592:22 → 69852:22` |
| -22.6% | -11.29ms |   2.3% → 1.8% |   50.0ms → 38.7ms |   44 → 34 | `statSync`                                             | `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/node_modules/typescript/lib/typescript.js:8602:22 → 8631:22`   |

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
