# Sampling profile diff

Collected 1,266 samples → 974 samples (-292 samples, -23.1%).

| Category         | Change | Delta |             % |     Samples |
| ---------------- | -----: | ----: | ------------: | ----------: |
| Ours             | -22.4% |  -229 | 80.7% → 81.4% | 1,022 → 793 |
| Native           | -30.8% |   -60 | 15.4% → 13.9% |   195 → 135 |
| Unknown          | -11.1% |    -5 |   3.6% → 4.1% |     45 → 40 |
| Standard library | +50.0% |    +2 |   0.3% → 0.6% |       4 → 6 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function           | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ------------------ | -------------------------------------------------------------------------------------------------------- |
|     new |    +9 | 0.0% → 0.9% |   0 → 9 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1939:20`                                          |
| +500.0% |    +5 | 0.1% → 0.6% |   1 → 6 | `makeOutputChecks` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35`                 |
|     new |    +4 | 0.0% → 0.4% |   0 → 4 | `primop elemAt`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:141:48`                                           |
| +100.0% |    +4 | 0.3% → 0.8% |   4 → 8 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`                 |
|  +57.1% |    +4 | 0.6% → 1.1% |  7 → 11 | `optionalString`   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:686:11`    |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `getOutput`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:48`                                         |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `primop map`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:13`                 |
|  +13.0% |    +3 | 1.8% → 2.7% | 23 → 26 | `mkCrate`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5`            |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `(anonymous)`      | `<nix/fetchurl.nix>:41:1`                                                                                |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:563:13`         |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop any`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                        |
|  +28.6% |    +2 | 0.6% → 0.9% |   7 → 9 | `primop dirOf`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`       |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop mapAttrs`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1006:9`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop head`      | `«nix-internal»/derivation-internal.nix:60:2`                                                            |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop toString`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:698:49`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `escapeOptionPart` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/options.nix:825:9`                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `mergeOptionDecls` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:888:40`                                         |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`       |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `functor`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/cpython/default.nix:323:9` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop lessThan`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2910:28`                                        |

##### Ours

|  Change | Delta |           % | Samples | Function           | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ------------------ | -------------------------------------------------------------------------------------------------------- |
|     new |    +9 | 0.0% → 0.9% |   0 → 9 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1939:20`                                          |
| +500.0% |    +5 | 0.1% → 0.6% |   1 → 6 | `makeOutputChecks` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35`                 |
| +100.0% |    +4 | 0.3% → 0.8% |   4 → 8 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`                 |
|  +57.1% |    +4 | 0.6% → 1.1% |  7 → 11 | `optionalString`   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:686:11`    |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `getOutput`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:48`                                         |
|  +13.0% |    +3 | 1.8% → 2.7% | 23 → 26 | `mkCrate`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5`            |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:563:13`         |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `escapeOptionPart` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/options.nix:825:9`                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `mergeOptionDecls` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:888:40`                                         |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`       |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `functor`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/cpython/default.nix:323:9` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `buildPkgDb`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:726:13`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:591:44`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:881:13`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:878:19`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:19`                                        |
|  +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1145:5`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:296:12`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`                                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:743:26`                                           |

##### Native

|  Change | Delta |           % | Samples | Function              | Location                                                                                              |
| ------: | ----: | ----------: | ------: | --------------------- | ----------------------------------------------------------------------------------------------------- |
|     new |    +4 | 0.0% → 0.4% |   0 → 4 | `primop elemAt`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:141:48`                                        |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `primop map`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:13`              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop any`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                     |
|  +28.6% |    +2 | 0.6% → 0.9% |   7 → 9 | `primop dirOf`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`    |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop mapAttrs`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1006:9`              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop head`         | `«nix-internal»/derivation-internal.nix:60:2`                                                         |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop toString`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:698:49` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop lessThan`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2910:28`                                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop zipAttrsWith` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:844:30`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop concatMap`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:495:26`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop elem`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:497:27`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop elemAt`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:43`                                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop elemAt`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1522:14`                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop length`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:886:12`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop isAttrs`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:14`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop isAttrs`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:423:17`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop filter`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:45`                                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop any`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:519:42`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop listToAttrs`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:404:12`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop catAttrs`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:37`                                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function              | Location                                                                                                  |
| ------: | ----: | ------------: | --------: | --------------------- | --------------------------------------------------------------------------------------------------------- |
|  -67.2% |   -45 |   5.3% → 2.3% |   67 → 22 | `primop functionArgs` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1109:86`                                         |
|  -48.3% |   -29 |   4.7% → 3.2% |   60 → 31 | `applyModuleArgs`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:705:56`                                          |
|  -26.0% |   -25 |   7.6% → 7.3% |   96 → 71 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:18`                  |
|  -24.7% |   -22 |   7.0% → 6.9% |   89 → 67 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:563:18`                  |
|  -35.7% |   -20 |   4.4% → 3.7% |   56 → 36 | `makeCMakeFlags`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:970:24`                  |
|  -86.4% |   -19 |   1.7% → 0.3% |    22 → 3 | `primop mapAttrs`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`        |
|   -8.7% |   -13 | 11.8% → 14.0% | 149 → 136 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`                  |
|  -58.8% |   -10 |   1.3% → 0.7% |    17 → 7 | `binaryMerge`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:11`                                        |
| removed |   -10 |   0.8% → 0.0% |    10 → 0 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:1901:20`                                           |
|  -50.0% |    -9 |   1.4% → 0.9% |    18 → 9 | `filter`              | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/misc/documentation.nix:126:13`                     |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:18`                                          |
|  -88.9% |    -8 |   0.7% → 0.1% |     9 → 1 | `getOutput`           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/linux/default.nix:773:16`                            |
|  -11.1% |    -5 |   3.6% → 4.1% |   45 → 40 | `(anonymous)`         | `<unknown>`                                                                                               |
|  -71.4% |    -5 |   0.6% → 0.2% |     7 → 2 | `extends`             | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:331:16`                                     |
|  -83.3% |    -5 |   0.5% → 0.1% |     6 → 1 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/doc/manual/default.nix:112:55`                             |
|  -10.3% |    -4 |   3.1% → 3.6% |   39 → 35 | `optionals`           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:542:26`                  |
|  -42.9% |    -3 |   0.6% → 0.4% |     7 → 4 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`                                                            |
|  -30.0% |    -3 |   0.8% → 0.7% |    10 → 7 | `getRes`              | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
|  -60.0% |    -3 |   0.4% → 0.2% |     5 → 2 | `optionalString`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/default.nix:144:11`                          |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `optionalString`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:761:11`          |

##### Ours

|  Change | Delta |             % |   Samples | Function          | Location                                                                                                  |
| ------: | ----: | ------------: | --------: | ----------------- | --------------------------------------------------------------------------------------------------------- |
|  -48.3% |   -29 |   4.7% → 3.2% |   60 → 31 | `applyModuleArgs` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:705:56`                                          |
|  -26.0% |   -25 |   7.6% → 7.3% |   96 → 71 | `(anonymous)`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:18`                  |
|  -24.7% |   -22 |   7.0% → 6.9% |   89 → 67 | `(anonymous)`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:563:18`                  |
|  -35.7% |   -20 |   4.4% → 3.7% |   56 → 36 | `makeCMakeFlags`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:970:24`                  |
|   -8.7% |   -13 | 11.8% → 14.0% | 149 → 136 | `(anonymous)`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`                  |
|  -58.8% |   -10 |   1.3% → 0.7% |    17 → 7 | `binaryMerge`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:11`                                        |
| removed |   -10 |   0.8% → 0.0% |    10 → 0 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:1901:20`                                           |
|  -50.0% |    -9 |   1.4% → 0.9% |    18 → 9 | `filter`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/misc/documentation.nix:126:13`                     |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `(anonymous)`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:18`                                          |
|  -88.9% |    -8 |   0.7% → 0.1% |     9 → 1 | `getOutput`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/linux/default.nix:773:16`                            |
|  -71.4% |    -5 |   0.6% → 0.2% |     7 → 2 | `extends`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:331:16`                                     |
|  -83.3% |    -5 |   0.5% → 0.1% |     6 → 1 | `(anonymous)`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/doc/manual/default.nix:112:55`                             |
|  -10.3% |    -4 |   3.1% → 3.6% |   39 → 35 | `optionals`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:542:26`                  |
|  -30.0% |    -3 |   0.8% → 0.7% |    10 → 7 | `getRes`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
|  -60.0% |    -3 |   0.4% → 0.2% |     5 → 2 | `optionalString`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/default.nix:144:11`                          |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `optionalString`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:761:11`          |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/tools/text/gnugrep/default.nix:26:9`                        |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `functor`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/pkg-config-wrapper/default.nix:131:15`        |
|  -42.9% |    -3 |   0.6% → 0.4% |     7 → 4 | `optionalString`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:835:9`      |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `functor`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:18`                                            |

##### Native

|  Change | Delta |           % | Samples | Function                            | Location                                                                                                |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -67.2% |   -45 | 5.3% → 2.3% | 67 → 22 | `primop functionArgs`               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1109:86`                                       |
|  -86.4% |   -19 | 1.7% → 0.3% |  22 → 3 | `primop mapAttrs`                   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`      |
|  -42.9% |    -3 | 0.6% → 0.4% |   7 → 4 | `primop getAttr`                    | `«nix-internal»/derivation-internal.nix:50:17`                                                          |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop map`                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop import`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:200:12`                |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `primop unsafeDiscardStringContext` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2911:7`                                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop elemAt`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:288:52`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop map`                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1351:7`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop length`                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:60`                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop genList`                    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:20`                                          |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `primop mapAttrs`                   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:802:13`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop concatLists`                | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:24`                                        |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `primop concatMap`                  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1434:18`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop filter`                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:880:25`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop addErrorContext`            | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:726:9`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop addErrorContext`            | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop addErrorContext`            | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop all`                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:8`                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop import`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/pkgs-lib/default.nix:8:13`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop substring`                  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/tinycc/mes.nix:32:19` |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -11.1% |    -5 | 3.6% → 4.1% | 45 → 40 | `(anonymous)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|    Change | Delta |            % | Samples | Function                                               | Location                                                                                                  |
| --------: | ----: | -----------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
|  +6950.0% |  +139 | 0.2% → 14.5% | 2 → 141 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:551:20`                    |
|  +6950.0% |  +139 | 0.2% → 14.5% | 2 → 141 | `optional`                                             | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:556:14`                    |
|  +1466.7% |  +132 | 0.7% → 14.5% | 9 → 141 | `primop concatLists`                                   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:555:11`                    |
|       new |  +113 | 0.0% → 11.6% | 0 → 113 | `primop derivationStrict:gnome-shell-50.2`             | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
| +10000.0% |  +100 | 0.1% → 10.4% | 1 → 101 | `primop concatStringsSep`                              | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5`                                           |
|       new |   +88 |  0.0% → 9.0% |  0 → 88 | `primop derivationStrict:evolution-data-server-3.60.2` | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +66 |  0.0% → 6.8% |  0 → 66 | `primop derivationStrict:firefox-152.0.3`              | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop sub`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:29`                                           |
|       new |   +48 |  0.0% → 4.9% |  0 → 48 | `primop derivationStrict:firefox-unwrapped-152.0.3`    | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +47 |  0.0% → 4.8% |  0 → 47 | `primop derivationStrict:nginx-1.30.3`                 | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +41 |  0.0% → 4.2% |  0 → 41 | `primop derivationStrict:mesa-26.1.3`                  | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +33 |  0.0% → 3.4% |  0 → 33 | `primop lessThan`                                      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2910:28`                                         |
|       new |   +33 |  0.0% → 3.4% |  0 → 33 | `primop derivationStrict:qt5compat-6.11.1`             | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +31 |  0.0% → 3.2% |  0 → 31 | `primop stringLength`                                  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2910:8`                                          |
|       new |   +30 |  0.0% → 3.1% |  0 → 30 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/default.nix:79:18` |
|       new |   +29 |  0.0% → 3.0% |  0 → 29 | `primop derivationStrict:qtbase-6.11.1`                | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|  +2800.0% |   +28 |  0.1% → 3.0% |  1 → 29 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/all-packages.nix:4275:5`                          |
|       new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop derivationStrict:systemd-260.2`                | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|       new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop concatMap`                                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:7`                                           |
|       new |   +28 |  0.0% → 2.9% |  0 → 28 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/config/nsswitch.nix:24:16`                         |

##### Ours

|   Change | Delta |            % | Samples | Function           | Location                                                                                                               |
| -------: | ----: | -----------: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| +6950.0% |  +139 | 0.2% → 14.5% | 2 → 141 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:551:20`                                 |
| +6950.0% |  +139 | 0.2% → 14.5% | 2 → 141 | `optional`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:556:14`                                 |
|      new |   +30 |  0.0% → 3.1% |  0 → 30 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/default.nix:79:18`              |
| +2800.0% |   +28 |  0.1% → 3.0% |  1 → 29 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/all-packages.nix:4275:5`                                       |
|      new |   +28 |  0.0% → 2.9% |  0 → 28 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/config/nsswitch.nix:24:16`                                      |
|      new |   +27 |  0.0% → 2.8% |  0 → 27 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/2.nix:109:18`                   |
|      new |   +26 |  0.0% → 2.7% |  0 → 26 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/stage0-posix/kaem/default.nix:45:16` |
|      new |   +12 |  0.0% → 1.2% |  0 → 12 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:378:5`                                                        |
|      new |   +12 |  0.0% → 1.2% |  0 → 12 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd/initrd.nix:706:15`                          |
|      new |   +12 |  0.0% → 1.2% |  0 → 12 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:351:12`             |
|  +200.0% |    +6 |  0.2% → 0.9% |   3 → 9 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:849:21`                                                       |
|   +55.6% |    +5 |  0.7% → 1.4% |  9 → 14 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`                               |
|   +22.7% |    +5 |  1.7% → 2.8% | 22 → 27 | `extendDerivation` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1015:5`                               |
|  +500.0% |    +5 |  0.1% → 0.6% |   1 → 6 | `optionalString`   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2492:32`                                                      |
|  +500.0% |    +5 |  0.1% → 0.6% |   1 → 6 | `makeOutputChecks` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35`                               |
|  +100.0% |    +5 |  0.4% → 1.0% |  5 → 10 | `optionalString`   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/kernel.nix:411:13`                                  |
|      new |    +5 |  0.0% → 0.5% |   0 → 5 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/compilers/rust/cargo-auditable-cargo-wrapper.nix:35:11`      |
|      new |    +5 |  0.0% → 0.5% |   0 → 5 | `hasSuffix`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:21`         |
|      new |    +5 |  0.0% → 0.5% |   0 → 5 | `optionals`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:10`         |
|      new |    +5 |  0.0% → 0.5% |   0 → 5 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:588:14`             |

##### Native

|    Change | Delta |            % | Samples | Function                                               | Location                                                                               |
| --------: | ----: | -----------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
|  +1466.7% |  +132 | 0.7% → 14.5% | 9 → 141 | `primop concatLists`                                   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:555:11` |
|       new |  +113 | 0.0% → 11.6% | 0 → 113 | `primop derivationStrict:gnome-shell-50.2`             | `«nix-internal»/derivation-internal.nix:37:12`                                         |
| +10000.0% |  +100 | 0.1% → 10.4% | 1 → 101 | `primop concatStringsSep`                              | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5`                        |
|       new |   +88 |  0.0% → 9.0% |  0 → 88 | `primop derivationStrict:evolution-data-server-3.60.2` | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +66 |  0.0% → 6.8% |  0 → 66 | `primop derivationStrict:firefox-152.0.3`              | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop sub`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:29`                        |
|       new |   +48 |  0.0% → 4.9% |  0 → 48 | `primop derivationStrict:firefox-unwrapped-152.0.3`    | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +47 |  0.0% → 4.8% |  0 → 47 | `primop derivationStrict:nginx-1.30.3`                 | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +41 |  0.0% → 4.2% |  0 → 41 | `primop derivationStrict:mesa-26.1.3`                  | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +33 |  0.0% → 3.4% |  0 → 33 | `primop lessThan`                                      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2910:28`                      |
|       new |   +33 |  0.0% → 3.4% |  0 → 33 | `primop derivationStrict:qt5compat-6.11.1`             | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +31 |  0.0% → 3.2% |  0 → 31 | `primop stringLength`                                  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2910:8`                       |
|       new |   +29 |  0.0% → 3.0% |  0 → 29 | `primop derivationStrict:qtbase-6.11.1`                | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop derivationStrict:systemd-260.2`                | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop concatMap`                                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:7`                        |
|       new |   +22 |  0.0% → 2.3% |  0 → 22 | `primop derivationStrict:libxml2-2.15.3`               | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +20 |  0.0% → 2.1% |  0 → 20 | `primop derivationStrict:fish-4.8.0`                   | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +16 |  0.0% → 1.6% |  0 → 16 | `primop derivationStrict:mutter-50.2`                  | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +13 |  0.0% → 1.3% |  0 → 13 | `primop derivationStrict:systemd-minimal-libs-260.2`   | `«nix-internal»/derivation-internal.nix:37:12`                                         |
|       new |   +13 |  0.0% → 1.3% |  0 → 13 | `primop derivationStrict:gdm-50.1`                     | `«nix-internal»/derivation-internal.nix:37:12`                                         |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |     Samples | Function                               | Location                                                                                      |
| ------: | ----: | ------------: | ----------: | -------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -23.0% |  -254 | 87.3% → 87.4% | 1,105 → 851 | `(anonymous)`                          | `<unknown>`                                                                                   |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `primop addErrorContext`               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15`                             |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `(anonymous)`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85`                            |
|  -21.2% |  -238 | 88.9% → 91.1% | 1,125 → 887 | `primop getAttr`                       | `«nix-internal»/derivation-internal.nix:50:17`                                                |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `(anonymous)`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/default.nix:21:12`                             |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop addErrorContext`               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                             |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `checkAssertWarn`                      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:26` |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop isAttrs`                       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15`                             |
|  -23.6% |  -235 | 78.5% → 77.9% |   994 → 759 | `primop head`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1719:13`                            |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop filter`                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:46`                              |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop map`                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:26`                              |
|  -49.8% |  -161 | 25.5% → 16.6% |   323 → 162 | `(anonymous)`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`                              |
|  -28.2% |  -158 | 44.2% → 41.3% |   560 → 402 | `primop any`                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                             |
| removed |  -153 |  12.1% → 0.0% |     153 → 0 | `primop derivationStrict:nginx-1.30.2` | `«nix-internal»/derivation-internal.nix:37:12`                                                |
|  -99.3% |  -143 |  11.4% → 0.1% |     144 → 1 | `(anonymous)`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:539:46`        |
|  -99.3% |  -143 |  11.4% → 0.1% |     144 → 1 | `primop concatLists`                   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:543:26`        |
|  -99.3% |  -143 |  11.4% → 0.1% |     144 → 1 | `optional`                             | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:538:11`        |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11`                             |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`                             |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop concatMap`                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1189:26`                             |

##### Ours

|  Change | Delta |             % |     Samples | Function              | Location                                                                                                    |
| ------: | ----: | ------------: | ----------: | --------------------- | ----------------------------------------------------------------------------------------------------------- |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85`                                          |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/default.nix:21:12`                                           |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `checkAssertWarn`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:26`               |
|  -49.8% |  -161 | 25.5% → 16.6% |   323 → 162 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`                                            |
|  -99.3% |  -143 |  11.4% → 0.1% |     144 → 1 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:539:46`                      |
|  -99.3% |  -143 |  11.4% → 0.1% |     144 → 1 | `optional`            | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:538:11`                      |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11`                                           |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`                                           |
|  -27.4% |  -128 | 37.0% → 34.9% |   468 → 340 | `dischargeProperties` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:80`                                           |
| removed |  -114 |   9.0% → 0.0% |     114 → 0 | `makeSearchPath`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:606:5`                                             |
|  -64.5% |  -111 |  13.6% → 6.3% |    172 → 61 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18` |
|  -64.2% |  -111 |  13.7% → 6.4% |    173 → 62 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:19:5`  |
|  -64.5% |  -111 |  13.6% → 6.3% |    172 → 61 | `svcUser`             | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:20:5`  |
|  -65.2% |  -107 |  13.0% → 5.9% |    164 → 57 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-unit-options.nix:489:16`                         |
|  -11.2% |   -74 | 52.3% → 60.4% |   662 → 588 | `fold'`               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:143:5`                                               |
|  -11.2% |   -74 | 52.2% → 60.3% |   661 → 587 | `foldr`               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1051:33`                                           |
|  -11.2% |   -74 | 52.2% → 60.3% |   661 → 587 | `showWarnings`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:200:7`                                             |
|  -13.7% |   -72 | 41.5% → 46.6% |   526 → 454 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:60`                                           |
|  -13.6% |   -72 | 41.9% → 47.1% |   531 → 459 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:53`                                           |
|  -13.4% |   -70 | 41.4% → 46.6% |   524 → 454 | `filterAttrs`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:1019:17`                                             |

##### Native

|  Change | Delta |             % |     Samples | Function                                               | Location                                                                                                    |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `primop addErrorContext`                               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15`                                           |
|  -21.2% |  -238 | 88.9% → 91.1% | 1,125 → 887 | `primop getAttr`                                       | `«nix-internal»/derivation-internal.nix:50:17`                                                              |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop addErrorContext`                               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                                           |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop isAttrs`                                       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15`                                           |
|  -23.6% |  -235 | 78.5% → 77.9% |   994 → 759 | `primop head`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1719:13`                                          |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop filter`                                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:46`                                            |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop map`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:26`                                            |
|  -28.2% |  -158 | 44.2% → 41.3% |   560 → 402 | `primop any`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                           |
| removed |  -153 |  12.1% → 0.0% |     153 → 0 | `primop derivationStrict:nginx-1.30.2`                 | `«nix-internal»/derivation-internal.nix:37:12`                                                              |
|  -99.3% |  -143 |  11.4% → 0.1% |     144 → 1 | `primop concatLists`                                   | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd.nix:543:26`                      |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop concatMap`                                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1189:26`                                           |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop length`                                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1424:8`                                            |
|  -27.7% |  -130 | 37.1% → 34.9% |   470 → 340 | `primop map`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`                                           |
|  -27.5% |  -129 | 37.0% → 34.9% |   469 → 340 | `primop addErrorContext`                               | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`                                           |
| removed |  -127 |  10.0% → 0.0% |     127 → 0 | `primop derivationStrict:gnome-shell-50.1`             | `«nix-internal»/derivation-internal.nix:37:12`                                                              |
| removed |  -115 |   9.1% → 0.0% |     115 → 0 | `primop concatStringsSep`                              | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:20`                                            |
|  -39.9% |  -112 | 22.2% → 17.4% |   281 → 169 | `primop isBool`                                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1380:10`                                           |
|  -64.2% |  -111 |  13.7% → 6.4% |    173 → 62 | `primop all`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:18:15` |
| removed |  -102 |   8.1% → 0.0% |     102 → 0 | `primop derivationStrict:libxml2-2.15.2`               | `«nix-internal»/derivation-internal.nix:37:12`                                                              |
| removed |   -98 |   7.7% → 0.0% |      98 → 0 | `primop derivationStrict:evolution-data-server-3.60.1` | `«nix-internal»/derivation-internal.nix:37:12`                                                              |

##### Unknown

| Change | Delta |             % |     Samples | Function      | Location    |
| -----: | ----: | ------------: | ----------: | ------------- | ----------- |
| -23.0% |  -254 | 87.3% → 87.4% | 1,105 → 851 | `(anonymous)` | `<unknown>` |
