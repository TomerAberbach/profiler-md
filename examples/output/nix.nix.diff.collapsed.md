# Sampling profile diff

Collected 1,047 samples → 588 samples (-459 samples, -43.8%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Ours             | -43.9% |  -371 |         80.8% | 846 → 475 |
| Native           | -42.5% |   -71 | 16.0% → 16.3% |  167 → 96 |
| Unknown          | -44.0% |   -11 |          2.4% |   25 → 14 |
| Standard library | -66.7% |    -6 |   0.9% → 0.5% |     9 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                            | Location                                                          |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
| +100.0% |    +7 | 0.7% → 2.4% |  7 → 14 | `getRes`                            | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
| +700.0% |    +7 | 0.1% → 1.4% |   1 → 8 | `optionalString`                    | `pkgs/development/haskell-modules/generic-builder.nix:822:11`     |
|     new |    +5 | 0.0% → 0.9% |   0 → 5 | `(anonymous)`                       | `lib/customisation.nix:423:26`                                    |
| +300.0% |    +3 | 0.1% → 0.7% |   1 → 4 | `(anonymous)`                       | `lib/attrsets.nix:1188:31`                                        |
| +200.0% |    +2 | 0.1% → 0.5% |   1 → 3 | `(anonymous)`                       | `lib/modules.nix:882:13`                                          |
| +200.0% |    +2 | 0.1% → 0.5% |   1 → 3 | `(anonymous)`                       | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`        |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `(anonymous)`                       | `lib/customisation.nix:363:14`                                    |
|  +66.7% |    +2 | 0.3% → 0.9% |   3 → 5 | `(anonymous)`                       | `lib/strings.nix:567:47`                                          |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `(anonymous)`                       | `lib/lists.nix:347:29`                                            |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `hasDeniedUnfreeLicense`            | `pkgs/stdenv/generic/check-meta.nix:447:13`                       |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `makeDerivationArgument`            | `pkgs/stdenv/generic/make-derivation.nix:966:23`                  |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `optionalString`                    | `pkgs/stdenv/generic/make-derivation.nix:658:28`                  |
| +200.0% |    +2 | 0.1% → 0.5% |   1 → 3 | `primop unsafeDiscardStringContext` | `lib/strings.nix:2904:7`                                          |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `(anonymous)`                       | `lib/modules.nix:1190:11`                                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`                       | `lib/modules.nix:1209:19`                                         |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `(anonymous)`                       | `lib/modules.nix:881:13`                                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`                       | `lib/modules.nix:1253:22`                                         |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `(anonymous)`                       | `lib/modules.nix:791:11`                                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`                       | `lib/modules.nix:1431:31`                                         |
|  +33.3% |    +1 | 0.3% → 0.7% |   3 → 4 | `(anonymous)`                       | `lib/modules.nix:537:34`                                          |

##### Ours

|  Change | Delta |           % | Samples | Function                 | Location                                                          |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +100.0% |    +7 | 0.7% → 2.4% |  7 → 14 | `getRes`                 | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
| +700.0% |    +7 | 0.1% → 1.4% |   1 → 8 | `optionalString`         | `pkgs/development/haskell-modules/generic-builder.nix:822:11`     |
|     new |    +5 | 0.0% → 0.9% |   0 → 5 | `(anonymous)`            | `lib/customisation.nix:423:26`                                    |
| +300.0% |    +3 | 0.1% → 0.7% |   1 → 4 | `(anonymous)`            | `lib/attrsets.nix:1188:31`                                        |
| +200.0% |    +2 | 0.1% → 0.5% |   1 → 3 | `(anonymous)`            | `lib/modules.nix:882:13`                                          |
| +200.0% |    +2 | 0.1% → 0.5% |   1 → 3 | `(anonymous)`            | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`        |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `(anonymous)`            | `lib/customisation.nix:363:14`                                    |
|  +66.7% |    +2 | 0.3% → 0.9% |   3 → 5 | `(anonymous)`            | `lib/strings.nix:567:47`                                          |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `(anonymous)`            | `lib/lists.nix:347:29`                                            |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `hasDeniedUnfreeLicense` | `pkgs/stdenv/generic/check-meta.nix:447:13`                       |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `makeDerivationArgument` | `pkgs/stdenv/generic/make-derivation.nix:966:23`                  |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `optionalString`         | `pkgs/stdenv/generic/make-derivation.nix:658:28`                  |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `(anonymous)`            | `lib/modules.nix:1190:11`                                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`            | `lib/modules.nix:1209:19`                                         |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `(anonymous)`            | `lib/modules.nix:881:13`                                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`            | `lib/modules.nix:1253:22`                                         |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `(anonymous)`            | `lib/modules.nix:791:11`                                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`            | `lib/modules.nix:1431:31`                                         |
|  +33.3% |    +1 | 0.3% → 0.7% |   3 → 4 | `(anonymous)`            | `lib/modules.nix:537:34`                                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `(anonymous)`            | `lib/modules.nix:2050:25`                                         |

##### Native

|  Change | Delta |           % | Samples | Function                            | Location                                          |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ------------------------------------------------- |
| +200.0% |    +2 | 0.1% → 0.5% |   1 → 3 | `primop unsafeDiscardStringContext` | `lib/strings.nix:2904:7`                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop concatMap`                  | `lib/modules.nix:495:26`                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop filter`                     | `lib/modules.nix:572:29`                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop map`                        | `lib/modules.nix:778:9`                           |
|  +50.0% |    +1 | 0.2% → 0.5% |   2 → 3 | `primop map`                        | `lib/modules.nix:1426:18`                         |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `primop toString`                   | `lib/modules.nix:676:17`                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop attrValues`                 | `lib/attrsets.nix:1084:30`                        |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop isBool`                     | `lib/modules.nix:1380:10`                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop map`                        | `lib/strings.nix:606:28`                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop map`                        | `pkgs/stdenv/generic/make-derivation.nix:858:13`  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop toString`                   | `lib/strings.nix:1203:16`                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop elemAt`                     | `lib/lists.nix:141:48`                            |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop isString`                   | `pkgs/stdenv/generic/make-derivation.nix:1009:14` |
| +100.0% |    +1 | 0.1% → 0.3% |   1 → 2 | `primop any`                        | `pkgs/stdenv/generic/make-derivation.nix:519:7`   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop any`                        | `pkgs/stdenv/generic/make-derivation.nix:519:42`  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop isAttrs`                    | `lib/attrsets.nix:1188:14`                        |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop removeAttrs`                | `pkgs/stdenv/generic/make-derivation.nix:967:9`   |
|  +50.0% |    +1 | 0.2% → 0.5% |   2 → 3 | `primop head`                       | `pkgs/build-support/fetchurl/default.nix:318:50`  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop readDir`                    | `pkgs/top-level/by-name-overlay.nix:36:9`         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `primop import`                     | `nixos/lib/utils.nix:566:15`                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function              | Location                                                      |
| ------: | ----: | -----------: | -------: | --------------------- | ------------------------------------------------------------- |
|  -80.0% |  -128 | 15.3% → 5.4% | 160 → 32 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:582:18`              |
|  -63.6% |   -49 |  7.4% → 4.8% |  77 → 28 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:631:18`              |
|  -70.6% |   -48 |  6.5% → 3.4% |  68 → 20 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                     |
|  -63.6% |   -21 |  3.2% → 2.0% |  33 → 12 | `makeCMakeFlags`      | `pkgs/stdenv/generic/make-derivation.nix:970:24`              |
|  -87.5% |   -21 |  2.3% → 0.5% |   24 → 3 | `(anonymous)`         | `pkgs/build-support/buildenv/default.nix:113:30`              |
|  -79.2% |   -19 |  2.3% → 0.9% |   24 → 5 | `mergeEqualOption`    | `lib/modules.nix:1254:11`                                     |
|  -56.7% |   -17 |  2.9% → 2.2% |  30 → 13 | `optionals`           | `pkgs/stdenv/generic/make-derivation.nix:542:26`              |
|  -30.6% |   -15 |  4.7% → 5.8% |  49 → 34 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:563:18`              |
|  -44.0% |   -11 |         2.4% |  25 → 14 | `(anonymous)`         | `<unknown>`                                                   |
|  -90.0% |    -9 |  1.0% → 0.2% |   10 → 1 | `optionalString`      | `pkgs/development/haskell-modules/generic-builder.nix:686:11` |
|  -17.4% |    -8 |  4.4% → 6.5% |  46 → 38 | `applyModuleArgs`     | `lib/modules.nix:705:56`                                      |
|  -77.8% |    -7 |  0.9% → 0.3% |    9 → 2 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:983:18`              |
|  -37.5% |    -6 |  1.5% → 1.7% |  16 → 10 | `mkCrate`             | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`         |
|  -83.3% |    -5 |  0.6% → 0.2% |    6 → 1 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`                |
|  -50.0% |    -5 |  1.0% → 0.9% |   10 → 5 | `primop dirOf`        | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`    |
|  -57.1% |    -4 |  0.7% → 0.5% |    7 → 3 | `(anonymous)`         | `<nix/fetchurl.nix>:41:1`                                     |
|  -33.3% |    -3 |  0.9% → 1.0% |    9 → 6 | `binaryMerge`         | `lib/attrsets.nix:1623:11`                                    |
| removed |    -3 |  0.3% → 0.0% |    3 → 0 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:236:14`              |
|  -23.1% |    -3 |  1.2% → 1.7% |  13 → 10 | `makeMesonFlags`      | `pkgs/stdenv/generic/make-derivation.nix:971:24`              |
| removed |    -3 |  0.3% → 0.0% |    3 → 0 | `(anonymous)`         | `nixos/lib/systemd-unit-options.nix:503:56`                   |

##### Ours

|  Change | Delta |            % |  Samples | Function              | Location                                                      |
| ------: | ----: | -----------: | -------: | --------------------- | ------------------------------------------------------------- |
|  -80.0% |  -128 | 15.3% → 5.4% | 160 → 32 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:582:18`              |
|  -63.6% |   -49 |  7.4% → 4.8% |  77 → 28 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:631:18`              |
|  -63.6% |   -21 |  3.2% → 2.0% |  33 → 12 | `makeCMakeFlags`      | `pkgs/stdenv/generic/make-derivation.nix:970:24`              |
|  -87.5% |   -21 |  2.3% → 0.5% |   24 → 3 | `(anonymous)`         | `pkgs/build-support/buildenv/default.nix:113:30`              |
|  -79.2% |   -19 |  2.3% → 0.9% |   24 → 5 | `mergeEqualOption`    | `lib/modules.nix:1254:11`                                     |
|  -56.7% |   -17 |  2.9% → 2.2% |  30 → 13 | `optionals`           | `pkgs/stdenv/generic/make-derivation.nix:542:26`              |
|  -30.6% |   -15 |  4.7% → 5.8% |  49 → 34 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:563:18`              |
|  -90.0% |    -9 |  1.0% → 0.2% |   10 → 1 | `optionalString`      | `pkgs/development/haskell-modules/generic-builder.nix:686:11` |
|  -17.4% |    -8 |  4.4% → 6.5% |  46 → 38 | `applyModuleArgs`     | `lib/modules.nix:705:56`                                      |
|  -77.8% |    -7 |  0.9% → 0.3% |    9 → 2 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:983:18`              |
|  -37.5% |    -6 |  1.5% → 1.7% |  16 → 10 | `mkCrate`             | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`         |
|  -33.3% |    -3 |  0.9% → 1.0% |    9 → 6 | `binaryMerge`         | `lib/attrsets.nix:1623:11`                                    |
| removed |    -3 |  0.3% → 0.0% |    3 → 0 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:236:14`              |
|  -23.1% |    -3 |  1.2% → 1.7% |  13 → 10 | `makeMesonFlags`      | `pkgs/stdenv/generic/make-derivation.nix:971:24`              |
| removed |    -3 |  0.3% → 0.0% |    3 → 0 | `(anonymous)`         | `nixos/lib/systemd-unit-options.nix:503:56`                   |
|  -75.0% |    -3 |  0.4% → 0.2% |    4 → 1 | `filter`              | `lib/sources.nix:152:16`                                      |
| removed |    -3 |  0.3% → 0.0% |    3 → 0 | `toCommand`           | `pkgs/development/libraries/mesa/default.nix:129:15`          |
|  -42.9% |    -3 |         0.7% |    7 → 4 | `concatMapStringsSep` | `pkgs/development/haskell-modules/generic-builder.nix:865:13` |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `(anonymous)`         | `lib/modules.nix:732:10`                                      |
|  -66.7% |    -2 |  0.3% → 0.2% |    3 → 1 | `foldl'`              | `lib/modules.nix:1012:5`                                      |

##### Native

|  Change | Delta |           % | Samples | Function              | Location                                                      |
| ------: | ----: | ----------: | ------: | --------------------- | ------------------------------------------------------------- |
|  -70.6% |   -48 | 6.5% → 3.4% | 68 → 20 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                     |
|  -83.3% |    -5 | 0.6% → 0.2% |   6 → 1 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`                |
|  -50.0% |    -5 | 1.0% → 0.9% |  10 → 5 | `primop dirOf`        | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`    |
|  -40.0% |    -2 |        0.5% |   5 → 3 | `primop length`       | `lib/modules.nix:886:34`                                      |
|  -50.0% |    -2 | 0.4% → 0.3% |   4 → 2 | `primop mapAttrs`     | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop toString`     | `pkgs/development/haskell-modules/generic-builder.nix:698:49` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop concatLists`  | `lib/modules.nix:527:24`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop concatMap`    | `lib/modules.nix:1189:26`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop map`          | `lib/modules.nix:1351:7`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop zipAttrsWith` | `lib/modules.nix:831:37`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop mapAttrs`     | `lib/modules.nix:724:19`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop mapAttrs`     | `lib/modules.nix:1340:11`                                     |
|  -50.0% |    -1 |        0.2% |   2 → 1 | `primop seq`          | `lib/modules.nix:378:17`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop length`       | `lib/modules.nix:886:12`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop import`       | `pkgs/stdenv/linux/default.nix:122:19`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop foldl'`       | `pkgs/development/compilers/gcc/default.nix:203:1`            |
|  -33.3% |    -1 |        0.3% |   3 → 2 | `primop all`          | `lib/modules.nix:1253:17`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop map`          | `pkgs/build-support/buildenv/default.nix:113:25`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop match`        | `lib/strings.nix:901:8`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop isAttrs`      | `pkgs/stdenv/generic/make-derivation.nix:990:12`              |

##### Unknown

| Change | Delta |    % | Samples | Function      | Location    |
| -----: | ----: | ---: | ------: | ------------- | ----------- |
| -44.0% |   -11 | 2.4% | 25 → 14 | `(anonymous)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                     | Location                                                       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------------------------------------------------------- |
|  +75.0% |    +9 |  1.1% → 3.6% | 12 → 21 | `primop filter`                              | `nixos/modules/security/pam.nix:920:24`                        |
|  +75.0% |    +9 |  1.1% → 3.6% | 12 → 21 | `primop sort`                                | `nixos/modules/security/pam.nix:914:21`                        |
|  +75.0% |    +9 |  1.1% → 3.6% | 12 → 21 | `primop map`                                 | `nixos/modules/security/pam.nix:906:17`                        |
|  +66.7% |    +8 |  1.1% → 3.4% | 12 → 20 | `(anonymous)`                                | `nixos/modules/security/pam.nix:920:38`                        |
|  +66.7% |    +8 |  1.1% → 3.4% | 12 → 20 | `(anonymous)`                                | `nixos/modules/security/pam.nix:920:32`                        |
|  +10.8% |    +7 | 6.2% → 12.2% | 65 → 72 | `(anonymous)`                                | `lib/modules.nix:1209:19`                                      |
|  +28.0% |    +7 |  2.4% → 5.4% | 25 → 32 | `primop derivationStrict:pypa-build-hook.sh` | `«nix-internal»/derivation-internal.nix:37:12`                 |
|  +46.7% |    +7 |  1.4% → 3.7% | 15 → 22 | `__functor`                                  | `lib/customisation.nix:864:7`                                  |
| +700.0% |    +7 |  0.1% → 1.4% |   1 → 8 | `optionalString`                             | `pkgs/development/haskell-modules/generic-builder.nix:822:11`  |
|  +43.8% |    +7 |  1.5% → 3.9% | 16 → 23 | `(anonymous)`                                | `nixos/modules/security/pam.nix:1807:49`                       |
|  +43.8% |    +7 |  1.5% → 3.9% | 16 → 23 | `primop concatStringsSep`                    | `nixos/modules/security/pam.nix:905:15`                        |
| +140.0% |    +7 |  0.5% → 2.0% |  5 → 12 | `formatRules`                                | `nixos/modules/security/pam.nix:929:15`                        |
|  +43.8% |    +7 |  1.5% → 3.9% | 16 → 23 | `writeText`                                  | `nixos/modules/security/pam.nix:1807:20`                       |
|  +17.1% |    +6 |  3.3% → 7.0% | 35 → 41 | `(anonymous)`                                | `lib/modules.nix:881:13`                                       |
|  +16.7% |    +6 |  3.4% → 7.1% | 36 → 42 | `primop filter`                              | `lib/modules.nix:880:25`                                       |
| +150.0% |    +6 |  0.4% → 1.7% |  4 → 10 | `primop intersectAttrs`                      | `pkgs/stdenv/generic/make-derivation.nix:987:29`               |
|  +13.5% |    +5 |  3.5% → 7.1% | 37 → 42 | `primop length`                              | `lib/modules.nix:886:12`                                       |
|     new |    +5 |  0.0% → 0.9% |   0 → 5 | `(anonymous)`                                | `lib/customisation.nix:423:26`                                 |
|  +55.6% |    +5 |  0.9% → 2.4% |  9 → 14 | `(anonymous)`                                | `nixos/modules/system/activation/top-level.nix:43:7`           |
|  +83.3% |    +5 |  0.6% → 1.9% |  6 → 11 | `(anonymous)`                                | `nixos/modules/system/activation/activatable-system.nix:82:73` |

##### Ours

|  Change | Delta |            % | Samples | Function                 | Location                                                              |
| ------: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------------------------- |
|  +66.7% |    +8 |  1.1% → 3.4% | 12 → 20 | `(anonymous)`            | `nixos/modules/security/pam.nix:920:38`                               |
|  +66.7% |    +8 |  1.1% → 3.4% | 12 → 20 | `(anonymous)`            | `nixos/modules/security/pam.nix:920:32`                               |
|  +10.8% |    +7 | 6.2% → 12.2% | 65 → 72 | `(anonymous)`            | `lib/modules.nix:1209:19`                                             |
|  +46.7% |    +7 |  1.4% → 3.7% | 15 → 22 | `__functor`              | `lib/customisation.nix:864:7`                                         |
| +700.0% |    +7 |  0.1% → 1.4% |   1 → 8 | `optionalString`         | `pkgs/development/haskell-modules/generic-builder.nix:822:11`         |
|  +43.8% |    +7 |  1.5% → 3.9% | 16 → 23 | `(anonymous)`            | `nixos/modules/security/pam.nix:1807:49`                              |
| +140.0% |    +7 |  0.5% → 2.0% |  5 → 12 | `formatRules`            | `nixos/modules/security/pam.nix:929:15`                               |
|  +43.8% |    +7 |  1.5% → 3.9% | 16 → 23 | `writeText`              | `nixos/modules/security/pam.nix:1807:20`                              |
|  +17.1% |    +6 |  3.3% → 7.0% | 35 → 41 | `(anonymous)`            | `lib/modules.nix:881:13`                                              |
|     new |    +5 |  0.0% → 0.9% |   0 → 5 | `(anonymous)`            | `lib/customisation.nix:423:26`                                        |
|  +55.6% |    +5 |  0.9% → 2.4% |  9 → 14 | `(anonymous)`            | `nixos/modules/system/activation/top-level.nix:43:7`                  |
|  +83.3% |    +5 |  0.6% → 1.9% |  6 → 11 | `(anonymous)`            | `nixos/modules/system/activation/activatable-system.nix:82:73`        |
| +200.0% |    +4 |  0.2% → 1.0% |   2 → 6 | `(anonymous)`            | `lib/modules.nix:925:40`                                              |
| +100.0% |    +4 |  0.4% → 1.4% |   4 → 8 | `(anonymous)`            | `lib/attrsets.nix:662:70`                                             |
| +100.0% |    +4 |  0.4% → 1.4% |   4 → 8 | `(anonymous)`            | `lib/customisation.nix:866:9`                                         |
|  +30.8% |    +4 |  1.2% → 2.9% | 13 → 17 | `mkDerivation`           | `lib/customisation.nix:867:11`                                        |
| +100.0% |    +4 |  0.4% → 1.4% |   4 → 8 | `functor`                | `pkgs/development/interpreters/python/python-packages-base.nix:71:20` |
|  +40.0% |    +4 |  1.0% → 2.4% | 10 → 14 | `(anonymous)`            | `nixos/modules/services/networking/ssh/sshd.nix:944:168`              |
|  +44.4% |    +4 |  0.9% → 2.2% |  9 → 13 | `(anonymous)`            | `nixos/modules/services/networking/ssh/sshd.nix:904:59`               |
| +100.0% |    +4 |  0.4% → 1.4% |   4 → 8 | `makeDerivationArgument` | `pkgs/stdenv/generic/make-derivation.nix:966:23`                      |

##### Native

|  Change | Delta |            % |   Samples | Function                                                | Location                                                              |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------- | --------------------------------------------------------------------- |
|  +75.0% |    +9 |  1.1% → 3.6% |   12 → 21 | `primop filter`                                         | `nixos/modules/security/pam.nix:920:24`                               |
|  +75.0% |    +9 |  1.1% → 3.6% |   12 → 21 | `primop sort`                                           | `nixos/modules/security/pam.nix:914:21`                               |
|  +75.0% |    +9 |  1.1% → 3.6% |   12 → 21 | `primop map`                                            | `nixos/modules/security/pam.nix:906:17`                               |
|  +28.0% |    +7 |  2.4% → 5.4% |   25 → 32 | `primop derivationStrict:pypa-build-hook.sh`            | `«nix-internal»/derivation-internal.nix:37:12`                        |
|  +43.8% |    +7 |  1.5% → 3.9% |   16 → 23 | `primop concatStringsSep`                               | `nixos/modules/security/pam.nix:905:15`                               |
|  +16.7% |    +6 |  3.4% → 7.1% |   36 → 42 | `primop filter`                                         | `lib/modules.nix:880:25`                                              |
| +150.0% |    +6 |  0.4% → 1.7% |    4 → 10 | `primop intersectAttrs`                                 | `pkgs/stdenv/generic/make-derivation.nix:987:29`                      |
|  +13.5% |    +5 |  3.5% → 7.1% |   37 → 42 | `primop length`                                         | `lib/modules.nix:886:12`                                              |
|   +4.0% |    +4 | 9.6% → 17.7% | 100 → 104 | `primop isAttrs`                                        | `lib/customisation.nix:174:12`                                        |
|  +21.1% |    +4 |  1.8% → 3.9% |   19 → 23 | `primop derivationStrict:python3.13-wheel-0.46.1`       | `«nix-internal»/derivation-internal.nix:37:12`                        |
| +100.0% |    +4 |  0.4% → 1.4% |     4 → 8 | `primop derivationStrict:bash-5.3p9`                    | `«nix-internal»/derivation-internal.nix:37:12`                        |
|  +40.0% |    +4 |  1.0% → 2.4% |   10 → 14 | `primop concatStringsSep`                               | `nixos/modules/services/networking/ssh/sshd.nix:894:9`                |
|  +40.0% |    +4 |  1.0% → 2.4% |   10 → 14 | `primop isString`                                       | `lib/modules.nix:1253:27`                                             |
|  +57.1% |    +4 |  0.7% → 1.9% |    7 → 11 | `primop derivationStrict:libfido2-1.17.0`               | `«nix-internal»/derivation-internal.nix:37:12`                        |
|  +44.4% |    +4 |  0.9% → 2.2% |    9 → 13 | `primop derivationStrict:openssh-10.3p1`                | `«nix-internal»/derivation-internal.nix:37:12`                        |
|  +66.7% |    +4 |  0.6% → 1.7% |    6 → 10 | `primop derivationStrict:systemd-minimal-libs-260.1`    | `«nix-internal»/derivation-internal.nix:37:12`                        |
| +100.0% |    +4 |  0.4% → 1.4% |     4 → 8 | `primop derivationStrict:switch-to-configuration-0.1.0` | `«nix-internal»/derivation-internal.nix:37:12`                        |
|  +33.3% |    +3 |  0.9% → 2.0% |    9 → 12 | `primop seq`                                            | `lib/modules.nix:403:19`                                              |
| +150.0% |    +3 |  0.2% → 0.9% |     2 → 5 | `primop derivationStrict:binutils-2.46`                 | `«nix-internal»/derivation-internal.nix:37:12`                        |
|  +60.0% |    +3 |  0.5% → 1.4% |     5 → 8 | `primop isAttrs`                                        | `pkgs/development/interpreters/python/python-packages-base.nix:46:10` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                   | Location                                              |
| -----: | ----: | ------------: | --------: | -------------------------- | ----------------------------------------------------- |
| -46.3% |  -445 | 91.8% → 87.8% | 961 → 516 | `(anonymous)`              | `lib/attrsets.nix:1188:85`                            |
| -46.3% |  -445 | 91.8% → 87.8% | 961 → 516 | `primop addErrorContext`   | `lib/modules.nix:1147:15`                             |
| -47.2% |  -445 | 90.0% → 84.5% | 942 → 497 | `primop getAttr`           | `«nix-internal»/derivation-internal.nix:50:17`        |
| -45.7% |  -427 | 89.2% → 86.2% | 934 → 507 | `(anonymous)`              | `<unknown>`                                           |
| -47.6% |  -413 | 82.8% → 77.2% | 867 → 454 | `primop addErrorContext`   | `lib/modules.nix:1227:11`                             |
| -47.6% |  -413 | 82.8% → 77.2% | 867 → 454 | `primop isAttrs`           | `lib/modules.nix:1228:15`                             |
| -55.1% |  -408 | 70.8% → 56.6% | 741 → 333 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| -55.1% |  -408 | 70.7% → 56.5% | 740 → 332 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| -55.1% |  -408 | 70.7% → 56.5% | 740 → 332 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| -48.2% |  -407 | 80.6% → 74.3% | 844 → 437 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| -48.2% |  -407 | 80.6% → 74.3% | 844 → 437 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| -48.2% |  -407 | 80.6% → 74.3% | 844 → 437 | `primop head`              | `lib/attrsets.nix:1714:13`                            |
| -57.9% |  -360 | 59.4% → 44.6% | 622 → 262 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| -57.9% |  -360 | 59.4% → 44.6% | 622 → 262 | `primop mapAttrs`          | `lib/types.nix:1025:21`                               |
| -57.2% |  -359 | 60.0% → 45.7% | 628 → 269 | `(anonymous)`              | `lib/attrsets.nix:662:60`                             |
| -57.1% |  -359 | 60.1% → 45.9% | 629 → 270 | `(anonymous)`              | `lib/attrsets.nix:662:53`                             |
| -57.1% |  -359 | 60.1% → 45.9% | 629 → 270 | `primop filter`            | `lib/attrsets.nix:662:45`                             |
| -57.0% |  -359 | 60.2% → 46.1% | 630 → 271 | `primop removeAttrs`       | `lib/attrsets.nix:662:28`                             |
| -58.8% |  -354 | 57.5% → 42.2% | 602 → 248 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |
| -60.2% |  -354 | 56.2% → 39.8% | 588 → 234 | `mkDerivation`             | `nixos/modules/system/activation/top-level.nix:58:16` |

##### Ours

| Change | Delta |             % |   Samples | Function                   | Location                                              |
| -----: | ----: | ------------: | --------: | -------------------------- | ----------------------------------------------------- |
| -46.3% |  -445 | 91.8% → 87.8% | 961 → 516 | `(anonymous)`              | `lib/attrsets.nix:1188:85`                            |
| -55.1% |  -408 | 70.8% → 56.6% | 741 → 333 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| -55.1% |  -408 | 70.7% → 56.5% | 740 → 332 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| -55.1% |  -408 | 70.7% → 56.5% | 740 → 332 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| -48.2% |  -407 | 80.6% → 74.3% | 844 → 437 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| -48.2% |  -407 | 80.6% → 74.3% | 844 → 437 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| -57.9% |  -360 | 59.4% → 44.6% | 622 → 262 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| -57.2% |  -359 | 60.0% → 45.7% | 628 → 269 | `(anonymous)`              | `lib/attrsets.nix:662:60`                             |
| -57.1% |  -359 | 60.1% → 45.9% | 629 → 270 | `(anonymous)`              | `lib/attrsets.nix:662:53`                             |
| -58.8% |  -354 | 57.5% → 42.2% | 602 → 248 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |
| -60.2% |  -354 | 56.2% → 39.8% | 588 → 234 | `mkDerivation`             | `nixos/modules/system/activation/top-level.nix:58:16` |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `(anonymous)`              | `lib/modules.nix:1136:35`                             |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `(anonymous)`              | `lib/trivial.nix:1211:22`                             |
| -58.5% |  -353 | 57.6% → 42.5% | 603 → 250 | `mkDerivationSimple`       | `pkgs/stdenv/generic/make-derivation.nix:308:22`      |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `(anonymous)`              | `nixos/modules/services/x11/xserver.nix:968:13`       |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `(anonymous)`              | `nixos/modules/system/activation/top-level.nix:71:8`  |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `filterAttrs`              | `nixos/modules/config/shells-environment.nix:94:11`   |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `optionalString`           | `nixos/modules/services/x11/xserver.nix:967:13`       |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `toFunction`               | `pkgs/stdenv/generic/make-derivation.nix:225:55`      |
| -69.0% |  -171 | 23.7% → 13.1% |  248 → 77 | `check`                    | `lib/modules.nix:1253:27`                             |

##### Native

| Change | Delta |             % |   Samples | Function                                | Location                                               |
| -----: | ----: | ------------: | --------: | --------------------------------------- | ------------------------------------------------------ |
| -46.3% |  -445 | 91.8% → 87.8% | 961 → 516 | `primop addErrorContext`                | `lib/modules.nix:1147:15`                              |
| -47.2% |  -445 | 90.0% → 84.5% | 942 → 497 | `primop getAttr`                        | `«nix-internal»/derivation-internal.nix:50:17`         |
| -47.6% |  -413 | 82.8% → 77.2% | 867 → 454 | `primop addErrorContext`                | `lib/modules.nix:1227:11`                              |
| -47.6% |  -413 | 82.8% → 77.2% | 867 → 454 | `primop isAttrs`                        | `lib/modules.nix:1228:15`                              |
| -48.2% |  -407 | 80.6% → 74.3% | 844 → 437 | `primop head`                           | `lib/attrsets.nix:1714:13`                             |
| -57.9% |  -360 | 59.4% → 44.6% | 622 → 262 | `primop mapAttrs`                       | `lib/types.nix:1025:21`                                |
| -57.1% |  -359 | 60.1% → 45.9% | 629 → 270 | `primop filter`                         | `lib/attrsets.nix:662:45`                              |
| -57.0% |  -359 | 60.2% → 46.1% | 630 → 271 | `primop removeAttrs`                    | `lib/attrsets.nix:662:28`                              |
| -60.2% |  -353 | 56.0% → 39.6% | 586 → 233 | `primop derivationStrict:system-path`   | `«nix-internal»/derivation-internal.nix:37:12`         |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `primop mapAttrs`                       | `nixos/modules/config/shells-environment.nix:93:9`     |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `primop derivationStrict:xkb-validated` | `«nix-internal»/derivation-internal.nix:37:12`         |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `primop concatStringsSep`               | `nixos/modules/system/activation/top-level.nix:376:22` |
| -60.1% |  -353 | 56.1% → 39.8% | 587 → 234 | `primop isFunction`                     | `lib/trivial.nix:1131:8`                               |
| -69.0% |  -171 | 23.7% → 13.1% |  248 → 77 | `primop toString`                       | `lib/types.nix:695:41`                                 |
| -69.0% |  -171 | 23.7% → 13.1% |  248 → 77 | `primop substring`                      | `lib/types.nix:695:26`                                 |
| -64.1% |  -166 | 24.7% → 15.8% |  259 → 93 | `primop all`                            | `lib/modules.nix:1253:17`                              |
| -78.9% |  -142 |  17.2% → 6.5% |  180 → 38 | `primop elemAt`                         | `lib/lists.nix:347:43`                                 |
| -70.9% |  -141 |  19.0% → 9.9% |  199 → 58 | `primop map`                            | `pkgs/build-support/buildenv/default.nix:113:25`       |
| -78.3% |  -141 |  17.2% → 6.6% |  180 → 39 | `primop filter`                         | `lib/types.nix:724:21`                                 |
| -78.3% |  -141 |  17.2% → 6.6% |  180 → 39 | `primop map`                            | `lib/types.nix:743:21`                                 |

##### Unknown

| Change | Delta |             % |   Samples | Function      | Location    |
| -----: | ----: | ------------: | --------: | ------------- | ----------- |
| -45.7% |  -427 | 89.2% → 86.2% | 934 → 507 | `(anonymous)` | `<unknown>` |
