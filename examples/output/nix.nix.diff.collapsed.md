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

|  Change | Delta |           % | Samples | Function              | Location                                                                                                                                                                                                    |
| ------: | ----: | ----------: | ------: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 0.1% → 0.6% |   1 → 6 | `makeOutputChecks`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:867:35 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35`                           |
|     new |    +4 | 0.0% → 0.4% |   0 → 4 | `primop elemAt`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:141:48 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:141:48`                                                                               |
| +100.0% |    +4 | 0.3% → 0.8% |   4 → 8 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:983:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`                           |
|  +57.1% |    +4 | 0.6% → 1.1% |  7 → 11 | `optionalString`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/development/haskell-modules/generic-builder.nix:686:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:686:11` |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `getOutput`           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:86 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:48`                                                                           |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `primop map`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:631:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:13`                           |
|  +13.0% |    +3 | 1.8% → 2.7% | 23 → 26 | `mkCrate`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `(anonymous)`         | `<nix/fetchurl.nix>:41:1`                                                                                                                                                                                   |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/trivial-builders/default.nix:563:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:563:13`           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop any`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                                                         |
|  +28.6% |    +2 | 0.6% → 0.9% |   7 → 9 | `primop dirOf`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`       |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop mapAttrs`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1006:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1006:9`                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop head`         | `«nix-internal»/derivation-internal.nix:60:2`                                                                                                                                                               |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop toString`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/development/haskell-modules/generic-builder.nix:698:49 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:698:49` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `escapeOptionPart`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/options.nix:825:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/options.nix:825:9`                                                                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `mergeOptionDecls`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:888:40 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:888:40`                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `(anonymous)`         | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`                                                                                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `functor`             | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/cpython/default.nix:323:9`                                                                                                    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `buildPkgDb`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:726:13`                                                                                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop zipAttrsWith` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:844:30 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:844:30`                                                                           |

##### Ours

|  Change | Delta |           % | Samples | Function           | Location                                                                                                                                                                                                    |
| ------: | ----: | ----------: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 0.1% → 0.6% |   1 → 6 | `makeOutputChecks` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:867:35 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35`                           |
| +100.0% |    +4 | 0.3% → 0.8% |   4 → 8 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:983:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`                           |
|  +57.1% |    +4 | 0.6% → 1.1% |  7 → 11 | `optionalString`   | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/development/haskell-modules/generic-builder.nix:686:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:686:11` |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `getOutput`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:86 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:48`                                                                           |
|  +13.0% |    +3 | 1.8% → 2.7% | 23 → 26 | `mkCrate`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/trivial-builders/default.nix:563:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:563:13`           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `escapeOptionPart` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/options.nix:825:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/options.nix:825:9`                                                                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `mergeOptionDecls` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:888:40 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:888:40`                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`                                                                                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `functor`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/cpython/default.nix:323:9`                                                                                                    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `buildPkgDb`       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:726:13`                                                                                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:881:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:881:13`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:878:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:878:19`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:19`                                                                         |
|  +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1145:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1145:5`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:296:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:296:12`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1204:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`                                                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:743:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:743:26`                                                                               |
|  +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:423:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:423:26`                                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:363:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:363:14`                                                               |

##### Native

|  Change | Delta |           % | Samples | Function              | Location                                                                                                                                                                                                    |
| ------: | ----: | ----------: | ------: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |    +4 | 0.0% → 0.4% |   0 → 4 | `primop elemAt`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:141:48 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:141:48`                                                                               |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `primop map`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:631:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:13`                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop any`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                                                         |
|  +28.6% |    +2 | 0.6% → 0.9% |   7 → 9 | `primop dirOf`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`       |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop mapAttrs`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1006:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1006:9`                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `primop head`         | `«nix-internal»/derivation-internal.nix:60:2`                                                                                                                                                               |
| +100.0% |    +2 | 0.2% → 0.4% |   2 → 4 | `primop toString`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/development/haskell-modules/generic-builder.nix:698:49 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:698:49` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop zipAttrsWith` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:844:30 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:844:30`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop concatMap`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:495:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:495:26`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop elem`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:497:27 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:497:27`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop elemAt`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:347:43 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:43`                                                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop length`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:886:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:886:12`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop isAttrs`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:14`                                                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop filter`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:45 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:45`                                                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop any`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:519:42 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:519:42`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop listToAttrs`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:404:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:404:12`                                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop catAttrs`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:527:37 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:37`                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop isNull`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/check-meta.nix:725:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/check-meta.nix:728:8`                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `primop isNull`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/check-meta.nix:726:10 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/check-meta.nix:729:10`                                     |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `primop removeAttrs`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:650:25 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:650:25`                           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function              | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -67.2% |   -45 |   5.3% → 2.3% |   67 → 22 | `primop functionArgs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/trivial.nix:1109:86 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1109:86`                                                                                 |
|  -48.3% |   -29 |   4.7% → 3.2% |   60 → 31 | `applyModuleArgs`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:705:56 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:705:56`                                                                                   |
|  -26.0% |   -25 |   7.6% → 7.3% |   96 → 71 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:631:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:18`                                   |
|  -24.7% |   -22 |   7.0% → 6.9% |   89 → 67 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:563:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:563:18`                                   |
|  -35.7% |   -20 |   4.4% → 3.7% |   56 → 36 | `makeCMakeFlags`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:970:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:970:24`                                   |
|  -86.4% |   -19 |   1.7% → 0.3% |    22 → 3 | `primop mapAttrs`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`               |
|   -8.7% |   -13 | 11.8% → 14.0% | 149 → 136 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:582:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`                                   |
|  -58.8% |   -10 |   1.3% → 0.7% |    17 → 7 | `binaryMerge`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1623:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:11`                                                                               |
|  -50.0% |    -9 |   1.4% → 0.9% |    18 → 9 | `filter`              | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/misc/documentation.nix:126:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/misc/documentation.nix:126:13`                                         |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:47`                                                                                                                                                    |
|  -88.9% |    -8 |   0.7% → 0.1% |     9 → 1 | `getOutput`           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/linux/default.nix:773:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/linux/default.nix:773:16`                                                       |
|  -11.1% |    -5 |   3.6% → 4.1% |   45 → 40 | `(anonymous)`         | `<unknown>`                                                                                                                                                                                                         |
|  -71.4% |    -5 |   0.6% → 0.2% |     7 → 2 | `extends`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/fixed-points.nix:331:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:331:16`                                                                         |
|  -83.3% |    -5 |   0.5% → 0.1% |     6 → 1 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/doc/manual/default.nix:112:55 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/doc/manual/default.nix:112:55`                                                         |
|  -10.3% |    -4 |   3.1% → 3.6% |   39 → 35 | `optionals`           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:542:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:542:26`                                   |
|  -42.9% |    -3 |   0.6% → 0.4% |     7 → 4 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                                                                      |
|  -30.0% |    -3 |   0.8% → 0.7% |    10 → 7 | `getRes`              | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
|  -60.0% |    -3 |   0.4% → 0.2% |     5 → 2 | `optionalString`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/default.nix:144:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/default.nix:144:11`                                                   |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `optionalString`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/trivial-builders/default.nix:761:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:761:11`                   |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/tools/text/gnugrep/default.nix:26:9`                                                                                                                                  |

##### Ours

|  Change | Delta |             % |   Samples | Function          | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -48.3% |   -29 |   4.7% → 3.2% |   60 → 31 | `applyModuleArgs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:705:56 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:705:56`                                                                                   |
|  -26.0% |   -25 |   7.6% → 7.3% |   96 → 71 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:631:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:18`                                   |
|  -24.7% |   -22 |   7.0% → 6.9% |   89 → 67 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:563:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:563:18`                                   |
|  -35.7% |   -20 |   4.4% → 3.7% |   56 → 36 | `makeCMakeFlags`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:970:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:970:24`                                   |
|   -8.7% |   -13 | 11.8% → 14.0% | 149 → 136 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:582:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`                                   |
|  -58.8% |   -10 |   1.3% → 0.7% |    17 → 7 | `binaryMerge`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1623:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:11`                                                                               |
|  -50.0% |    -9 |   1.4% → 0.9% |    18 → 9 | `filter`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/misc/documentation.nix:126:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/misc/documentation.nix:126:13`                                         |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:47`                                                                                                                                                    |
|  -88.9% |    -8 |   0.7% → 0.1% |     9 → 1 | `getOutput`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/linux/default.nix:773:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/linux/default.nix:773:16`                                                       |
|  -71.4% |    -5 |   0.6% → 0.2% |     7 → 2 | `extends`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/fixed-points.nix:331:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:331:16`                                                                         |
|  -83.3% |    -5 |   0.5% → 0.1% |     6 → 1 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/doc/manual/default.nix:112:55 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/doc/manual/default.nix:112:55`                                                         |
|  -10.3% |    -4 |   3.1% → 3.6% |   39 → 35 | `optionals`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:542:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:542:26`                                   |
|  -30.0% |    -3 |   0.8% → 0.7% |    10 → 7 | `getRes`          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
|  -60.0% |    -3 |   0.4% → 0.2% |     5 → 2 | `optionalString`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/default.nix:144:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/default.nix:144:11`                                                   |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `optionalString`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/trivial-builders/default.nix:761:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:761:11`                   |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/tools/text/gnugrep/default.nix:26:9`                                                                                                                                  |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `functor`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/pkg-config-wrapper/default.nix:131:15`                                                                                                                  |
|  -42.9% |    -3 |   0.6% → 0.4% |     7 → 4 | `optionalString`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/development/haskell-modules/generic-builder.nix:835:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:835:9`           |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `functor`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:113:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:18`                                                                                       |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `(anonymous)`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:31 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:31`                                                                               |

##### Native

|  Change | Delta |           % | Samples | Function                            | Location                                                                                                                                                                                              |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -67.2% |   -45 | 5.3% → 2.3% | 67 → 22 | `primop functionArgs`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/trivial.nix:1109:86 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1109:86`                                                                   |
|  -86.4% |   -19 | 1.7% → 0.3% |  22 → 3 | `primop mapAttrs`                   | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19` |
|  -42.9% |    -3 | 0.6% → 0.4% |   7 → 4 | `primop getAttr`                    | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                                                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop map`                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1191:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`                                                                   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop import`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:200:12`                                                                                                              |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `primop unsafeDiscardStringContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:2904:7 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2911:7`                                                                     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `primop elemAt`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:288:52`                                                                                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop map`                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1351:7 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1351:7`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop length`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:347:60 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:60`                                                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop genList`                    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:347:20 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:20`                                                                         |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `primop mapAttrs`                   | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:802:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:802:13`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop concatLists`                | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:527:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:24`                                                                     |
|  -33.3% |    -1 |        0.2% |   3 → 2 | `primop concatMap`                  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1434:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1434:18`                                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop filter`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:880:25 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:880:25`                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop addErrorContext`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:726:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:726:9`                                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop addErrorContext`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1227:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop addErrorContext`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1200:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`                                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop removeAttrs`                | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:658:20`                                                                                                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop all`                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:113:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:8`                                                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `primop isAttrs`                    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1804:12`                                                                                                                                    |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -11.1% |    -5 | 3.6% → 4.1% | 45 → 40 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `makeOutputChecks` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35`)

| Change | Delta |            % | Samples | Caller                                              | Location                                       |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `primop derivationStrict:patch-ev.c`                | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `primop derivationStrict:nginx.conf`                | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `primop derivationStrict:docbook-xml-4.4.zip`       | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `primop derivationStrict:lazy-options.json`         | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `primop derivationStrict:crate-cfg-if-1.0.4.tar.gz` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop elemAt` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:141:48`)

| Change | Delta |             % | Samples | Caller              | Location                                                                                                                                    |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `composeExtensions` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/fixed-points.nix:346:17 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:346:17` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`)

|  Change | Delta |            % | Samples | Caller                                                  | Location                                                                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `primop derivationStrict:bootstrap-stage3-stdenv-linux` | `«nix-internal»/derivation-internal.nix:37:12`                                                 |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `primop derivationStrict:stdenv-linux`                  | `«nix-internal»/derivation-internal.nix:37:12`                                                 |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `primop derivationStrict:xonsh-0.23.7`                  | `«nix-internal»/derivation-internal.nix:37:12`                                                 |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `primop toString`                                       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/rust/import-cargo-lock.nix:318:28` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `primop derivationStrict:asciidoc-10.2.1`               | `«nix-internal»/derivation-internal.nix:37:12`                                                 |

##### `optionalString` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:686:11`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:tasty-quickcheck-0.11.1` | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:nothunks-0.3.1`          | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:vector-stream-0.1.0.1`   | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:serialise-0.2.6.1`       | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:http-client-tls-0.3.6.4` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `getOutput` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:48`)

| Change | Delta |             % | Samples | Caller                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `primop map` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:13`)

|  Change | Delta |            % | Samples | Caller                                                 | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `primop derivationStrict:opusfile-0.12`                | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `primop derivationStrict:bison-3.8.2`                  | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `primop derivationStrict:libavif-1.4.1`                | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `primop derivationStrict:perl5.42.0-DBD-SQLite-1.74`   | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `primop derivationStrict:perl5.42.0-File-BaseDir-0.09` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `mkCrate` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/rust/import-cargo-lock.nix:156:5`)

| Change | Delta |      % | Samples | Caller            | Location                                                                                                                                                                                      |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `primop toString` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/rust/import-cargo-lock.nix:318:28 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/rust/import-cargo-lock.nix:318:28` |

##### `(anonymous)` (`<nix/fetchurl.nix>:41:1`)

|  Change | Delta |              % | Samples | Caller          | Location                                                                                                                                                                |
| ------: | ----: | -------------: | ------: | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `primop import` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/fetchurl/boot.nix:41:1 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/fetchurl/boot.nix:41:1` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `primop import` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/stage0-posix/hex0.nix:22:15`                                                          |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:563:13`)

| Change | Delta |            % | Samples | Caller                                         | Location                                       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `primop derivationStrict:nixos-help`           | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `primop derivationStrict:nodejs-24.16.0`       | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `primop derivationStrict:unicode-emoji-17.0.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop any` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`)

| Change | Delta |            % | Samples | Caller                   | Location                                                                                                                            |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1147:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `(anonymous)`            | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`                                                                    |

##### `primop dirOf` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:abtol-builder`           | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:vprintf-builder`         | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:__buffered_read-builder` | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:getdents-builder`        | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:execv-builder`           | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop mapAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1006:9`)

|  Change | Delta |      % | Samples | Caller        | Location                                                                                                                                                                          |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1071:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1071:8` |

##### `primop head` (`«nix-internal»/derivation-internal.nix:60:2`)

| Change | Delta |            % | Samples | Caller        | Location                                                                                                                                                                          |
| -----: | ----: | -----------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1071:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1071:8` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `(anonymous)` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:28:17`                                                                                |

##### `primop toString` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:698:49`)

|  Change | Delta |            % | Samples | Caller                                                  | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `primop derivationStrict:hedgehog-1.5`                  | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `primop derivationStrict:pandoc-server-0.1.0.11`        | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `primop derivationStrict:ansi-wl-pprint-1.0.2`          | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `primop derivationStrict:optparse-applicative-0.18.1.0` | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `primop derivationStrict:network-uri-2.6.4.2`           | `«nix-internal»/derivation-internal.nix:37:12` |

##### `escapeOptionPart` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/options.nix:825:9`)

| Change | Delta |             % | Samples | Caller                    | Location                                                                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `primop concatStringsSep` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/options.nix:831:6 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/options.nix:831:6` |

##### `mergeOptionDecls` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:888:40`)

| Change | Delta |             % | Samples | Caller            | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `fixupOptionType` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:888:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:888:19` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:26:18`)

| Change | Delta |            % | Samples | Caller                                                  | Location                                                                                                  |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `primop derivationStrict:bootstrap-stage0-stdenv-linux` | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getRes`                                                | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |

##### `functor` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/cpython/default.nix:323:9`)

| Change | Delta |            % | Samples | Caller                                            | Location                                       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `primop derivationStrict:python3-minimal-3.13.13` | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `primop derivationStrict:python3-3.13.13`         | `«nix-internal»/derivation-internal.nix:37:12` |

##### `buildPkgDb` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:726:13`)

| Change | Delta |            % | Samples | Caller                                         | Location                                       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `primop derivationStrict:random-1.2.1.3`       | `«nix-internal»/derivation-internal.nix:37:12` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `primop derivationStrict:text-iso8601-0.1.1.1` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop zipAttrsWith` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:844:30`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop length` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1222:9 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1222:9` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:881:13`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop filter` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:880:25 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:880:25` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:878:19`)

| Change | Delta |             % | Samples | Caller       | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop all` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:812:16` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:19`)

| Change | Delta |             % | Samples | Caller       | Location                                                                                                                            |
| -----: | ----: | ------------: | ------: | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop any` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1145:5`)

| Change | Delta |      % | Samples | Caller            | Location                                                                                                                          |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `evalOptionValue` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:891:30 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:891:30` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:296:12`)

| Change | Delta |             % | Samples | Caller       | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop seq` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:402:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:402:18` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`)

| Change | Delta |             % | Samples | Caller       | Location                                                                                                                            |
| -----: | ----: | ------------: | ------: | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop any` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:743:26`)

| Change | Delta |             % | Samples | Caller                    | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:376:22` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:423:26`)

| Change | Delta |      % | Samples | Caller               | Location                                                                                                                                      |
| -----: | ----: | -----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `primop listToAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:404:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:404:12` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:363:14`)

| Change | Delta |             % | Samples | Caller         | Location                                                                                                                                    |
| -----: | ----: | ------------: | ------: | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isDerivation` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:366:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:366:8` |

##### `primop concatMap` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:495:26`)

| Change | Delta |             % | Samples | Caller        | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop elem` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:497:27 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:497:27` |

##### `primop elem` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:497:27`)

| Change | Delta |             % | Samples | Caller       | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isDisabled` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:568:39 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:568:39` |

##### `primop elemAt` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:43`)

| Change | Delta |             % | Samples | Caller           | Location                                                                                                                            |
| -----: | ----: | ------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop isAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1228:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15` |

##### `primop length` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:886:12`)

| Change | Delta |             % | Samples | Caller        | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:930:25 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:930:25` |

##### `primop isAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:14`)

| Change | Delta |             % | Samples | Caller        | Location                                                                   |
| -----: | ----: | ------------: | ------: | ------------- | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(anonymous)` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-lib.nix:812:45` |

##### `primop filter` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:45`)

| Change | Delta |             % | Samples | Caller               | Location                                                                                                                            |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop removeAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:28 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:28` |

##### `primop any` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:519:42`)

| Change | Delta |             % | Samples | Caller                   | Location                                                                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `makeDerivationArgument` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:966:23 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:966:23` |

##### `primop listToAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:404:12`)

| Change | Delta |             % | Samples | Caller             | Location                                                                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `extendDerivation` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1015:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1015:5` |

##### `primop catAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:37`)

| Change | Delta |             % | Samples | Caller               | Location                                                                                                                          |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop concatLists` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:527:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:24` |

##### `primop isNull` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/check-meta.nix:728:8`)

| Change | Delta |             % | Samples | Caller        | Location                                                                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:983:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18` |

##### `primop isNull` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/check-meta.nix:729:10`)

| Change | Delta |             % | Samples | Caller        | Location                                                                                                                                                                          |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:983:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18` |

##### `primop removeAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:650:25`)

|  Change | Delta |      % | Samples | Caller                   | Location                                                                                                                                                                          |
| ------: | ----: | -----: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `makeDerivationArgument` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:966:23 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:966:23` |

##### `primop functionArgs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1109:86`)

| Change | Delta |      % | Samples | Caller        | Location                                                                                                                                      |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| -67.2% |   -45 | 100.0% | 67 → 22 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:310:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:310:15` |

##### `applyModuleArgs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:705:56`)

| Change | Delta |      % | Samples | Caller                      | Location                                                                                                                          |
| -----: | ----: | -----: | ------: | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| -48.3% |   -29 | 100.0% | 60 → 31 | `applyModuleArgsIfFunction` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:450:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:450:13` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:18`)

|  Change | Delta |           % | Samples | Caller                                                        | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
|  -75.0% |    -3 | 4.2% → 1.4% |   4 → 1 | `primop derivationStrict:autoreconf-hook`                     | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -3 | 3.1% → 0.0% |   3 → 0 | `primop derivationStrict:python3.13-afdko-4.0.2`              | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +3 | 0.0% → 4.2% |   0 → 3 | `primop derivationStrict:quickcheck-instances-0.3.33`         | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -2 | 2.1% → 0.0% |   2 → 0 | `primop derivationStrict:python3.13-flake8-7.3.0`             | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -2 | 2.1% → 0.0% |   2 → 0 | `primop derivationStrict:python3.13-importlib-metadata-9.0.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:563:18`)

|  Change | Delta |           % | Samples | Caller                                            | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| removed |    -2 | 2.2% → 0.0% |   2 → 0 | `primop derivationStrict:bash-5.3p9`              | `«nix-internal»/derivation-internal.nix:37:12` |
|  -66.7% |    -2 | 3.4% → 1.5% |   3 → 1 | `primop derivationStrict:asciidoc-10.2.1`         | `«nix-internal»/derivation-internal.nix:37:12` |
|  -66.7% |    -2 | 3.4% → 1.5% |   3 → 1 | `primop derivationStrict:python3.13-build-1.4.4`  | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -2 | 2.2% → 0.0% |   2 → 0 | `primop derivationStrict:openssl-3.6.2`           | `«nix-internal»/derivation-internal.nix:37:12` |
|  -66.7% |    -2 | 3.4% → 1.5% |   3 → 1 | `primop derivationStrict:python3.13-xonsh-0.23.7` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `makeCMakeFlags` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:970:24`)

|  Change | Delta |           % | Samples | Caller                                                        | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
|     new |    +2 | 0.0% → 5.6% |   0 → 2 | `primop derivationStrict:bootstrap-stage4-gcc-wrapper-15.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 1.8% → 0.0% |   1 → 0 | `primop derivationStrict:bootstrap-stage2-gcc-wrapper-15.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 1.8% → 0.0% |   1 → 0 | `primop derivationStrict:gtk-doc-1.35.1`                      | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 1.8% → 0.0% |   1 → 0 | `primop derivationStrict:krb5-1.22.1`                         | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 1.8% → 0.0% |   1 → 0 | `primop derivationStrict:python3.13-bootstrap-build-1.4.4`    | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop mapAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`)

|  Change | Delta |              % | Samples | Caller                                                   | Location                                                                                              |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  -85.7% |   -18 | 95.5% → 100.0% |  21 → 3 | `primop derivationStrict:minimal-bootstrap-test-builder` | `«nix-internal»/derivation-internal.nix:37:12`                                                        |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `optionalString`                                         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/minimal-bootstrap/default.nix:416:14` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`)

|  Change | Delta |           % | Samples | Caller                                        | Location                                       |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | ---------------------------------------------- |
| removed |    -4 | 2.7% → 0.0% |   4 → 0 | `primop derivationStrict:gcc-15.2.0`          | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -4 | 2.7% → 0.0% |   4 → 0 | `primop derivationStrict:systemd-260.1`       | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -4 | 2.7% → 0.0% |   4 → 0 | `primop derivationStrict:ffmpeg-headless-8.1` | `«nix-internal»/derivation-internal.nix:37:12` |
|  -80.0% |    -4 | 3.4% → 0.7% |   5 → 1 | `primop derivationStrict:aeson-2.2.4.1`       | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -4 | 2.7% → 0.0% |   4 → 0 | `primop derivationStrict:mutter-50.1`         | `«nix-internal»/derivation-internal.nix:37:12` |

##### `binaryMerge` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:11`)

| Change | Delta |             % | Samples | Caller        | Location                                                                                                                              |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| -77.8% |    -7 | 52.9% → 28.6% |   9 → 2 | `binaryMerge` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1623:52 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:52` |
| -37.5% |    -3 | 47.1% → 71.4% |   8 → 5 | `binaryMerge` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1623:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1628:11` |

##### `filter` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/misc/documentation.nix:126:13`)

| Change | Delta |      % | Samples | Caller        | Location                                                                                                                                                                    |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -50.0% |    -9 | 100.0% |  18 → 9 | `primop path` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/misc/documentation.nix:122:27 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/misc/documentation.nix:122:27` |

##### `(anonymous)` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:47`)

|  Change | Delta |             % | Samples | Caller                    | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `primop concatStringsSep` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:20` |

##### `getOutput` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/linux/default.nix:773:16`)

| Change | Delta |      % | Samples | Caller                                 | Location                                       |
| -----: | ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------- |
| -88.9% |    -8 | 100.0% |   9 → 1 | `primop derivationStrict:stdenv-linux` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                                                        | Location                                                                                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 4.4% → 0.0% |   2 → 0 | `primop derivationStrict:libtool-2.5.4`                       | `«nix-internal»/derivation-internal.nix:37:12`                                                                                    |
| removed |    -2 | 4.4% → 0.0% |   2 → 0 | `primop concatLists`                                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/pam.nix:124:22`                                                   |
|  -33.3% |    -1 | 6.7% → 5.0% |   3 → 2 | `primop concatLists`                                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:944:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:944:11` |
| removed |    -1 | 2.2% → 0.0% |   1 → 0 | `primop derivationStrict:bootstrap-stage1-gcc-wrapper-15.2.0` | `«nix-internal»/derivation-internal.nix:37:12`                                                                                    |
| removed |    -1 | 2.2% → 0.0% |   1 → 0 | `primop derivationStrict:nginx-1.30.2`                        | `«nix-internal»/derivation-internal.nix:37:12`                                                                                    |

##### `extends` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:331:16`)

|  Change | Delta |              % | Samples | Caller                  | Location                                                                                                                                            |
| ------: | ----: | -------------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -66.7% |    -4 | 85.7% → 100.0% |   6 → 2 | `extends`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/fixed-points.nix:331:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/fixed-points.nix:331:16`         |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `primop intersectAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/top-level/stage.nix:157:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/stage.nix:157:26` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/doc/manual/default.nix:112:55`)

| Change | Delta |      % | Samples | Caller                    | Location                                                                                                                        |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `primop concatStringsSep` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:263:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:262:5` |

##### `optionals` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:542:26`)

|  Change | Delta |           % | Samples | Caller                                           | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | ---------------------------------------------- |
| removed |    -1 | 2.6% → 0.0% |   1 → 0 | `primop derivationStrict:python-setup-hook.sh`   | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 2.6% → 0.0% |   1 → 0 | `primop derivationStrict:expect-5.45.4`          | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 2.6% → 0.0% |   1 → 0 | `primop derivationStrict:serde-1.0.228`          | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 2.6% → 0.0% |   1 → 0 | `primop derivationStrict:pythoncheck.sh`         | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 2.6% → 0.0% |   1 → 0 | `primop derivationStrict:windows-targets-0.52.6` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|  Change | Delta |            % | Samples | Caller                                                 | Location                                                                                                                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:mes-0.27.1-builder`           | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                          |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `primop derivationStrict:gnu-config-2024-01-01`        | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                          |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:asciidoc-10.2.1`              | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                          |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `primop derivationStrict:postgresql-and-plugins-16.14` | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                          |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `optionalString`                                       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/os-specific/linux/busybox/default.nix:178:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/busybox/default.nix:185:19` |

##### `getRes` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`)

| Change | Delta |      % | Samples | Caller                    | Location                                                                                                                        |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| -30.0% |    -3 | 100.0% |  10 → 7 | `primop concatStringsSep` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:263:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:262:5` |

##### `optionalString` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/default.nix:144:11`)

|  Change | Delta |            % | Samples | Caller                                 | Location                                       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | ---------------------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `primop derivationStrict:stdenv-linux` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/trivial-builders/default.nix:761:11`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `primop derivationStrict:ensure-newer-sources-hook`       | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `primop derivationStrict:pkgs-config-setup-hook`          | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `primop derivationStrict:cargo-install-hook.sh`           | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `primop derivationStrict:pypa-build-hook.sh`              | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `primop derivationStrict:python-remove-bin-bytecode-hook` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/tools/text/gnugrep/default.nix:26:9`)

|  Change | Delta |             % | Samples | Caller                                 | Location                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ---------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `primop derivationStrict:gnugrep-3.12` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `functor` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/build-support/pkg-config-wrapper/default.nix:131:15`)

|  Change | Delta |             % | Samples | Caller                                              | Location                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `primop derivationStrict:pkg-config-wrapper-0.29.2` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/haskell-modules/generic-builder.nix:835:9`)

|  Change | Delta |            % | Samples | Caller                                              | Location                                       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:hadrian-9.10.3`            | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:base16-bytestring-1.0.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:tasty-golden-2.3.6`        | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:conduit-extra-1.3.8`       | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `primop derivationStrict:memory-0.18.0`             | `«nix-internal»/derivation-internal.nix:37:12` |

##### `functor` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:18`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                                                                      |
| ------: | ----: | ------------: | ------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:113:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:13` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:31`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                                                                          |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:296:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:296:12` |

##### `primop map` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1190:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11` |

##### `primop import` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:200:12`)

|  Change | Delta |            % | Samples | Caller                                                             | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | ---------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `primop derivationStrict:bash-5.3p9`                               | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `primop derivationStrict:update-autotools-gnu-config-scripts-hook` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop unsafeDiscardStringContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:2911:7`)

| Change | Delta |      % | Samples | Caller        | Location                                                                                                                                                                          |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:682:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:682:13` |

##### `primop elemAt` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:288:52`)

|  Change | Delta |             % | Samples | Caller    | Location                                                         |
| ------: | ----: | ------------: | ------: | --------- | ---------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `atDepth` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:290:5` |

##### `primop map` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1351:7`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                                                                          |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:839:17 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:839:17` |

##### `primop length` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:60`)

|  Change | Delta |             % | Samples | Caller           | Location                                                                                                                      |
| ------: | ----: | ------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `primop genList` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:347:20 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:20` |

##### `primop genList` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:20`)

|  Change | Delta |             % | Samples | Caller  | Location                                                                                                                          |
| ------: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `imap1` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:533:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:533:11` |

##### `primop mapAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:802:13`)

| Change | Delta |      % | Samples | Caller        | Location                                                                                                                          |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:791:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:791:11` |

##### `primop concatLists` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:24`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                                                          |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `primop concatLists` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:527:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:527:24` |

##### `primop concatMap` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1434:18`)

| Change | Delta |      % | Samples | Caller       | Location                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `primop any` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14` |

##### `primop filter` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:880:25`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                                                          |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `primop length` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:886:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:886:12` |

##### `primop addErrorContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:726:9`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                         |
| ------: | ----: | ------------: | ------: | ------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/config/console.nix:275:6` |

##### `primop addErrorContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1147:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15` |

##### `primop addErrorContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`)

|  Change | Delta |             % | Samples | Caller       | Location                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `primop map` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1191:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11` |

##### `primop removeAttrs` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:658:20`)

|  Change | Delta |             % | Samples | Caller              | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unifyModuleSyntax` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:449:11` |

##### `primop all` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:113:8`)

|  Change | Delta |             % | Samples | Caller              | Location                                                                                                                      |
| ------: | ----: | ------------: | ------: | ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkDefsForError` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:742:25 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:742:25` |

##### `primop isAttrs` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1804:12`)

|  Change | Delta |             % | Samples | Caller       | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `matchAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1803:14` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |            % | Samples | Function                                               | Location                                                                                                  |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
|    new |  +113 | 0.0% → 11.6% | 0 → 113 | `primop derivationStrict:gnome-shell-50.2`             | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |  +101 | 0.0% → 10.4% | 0 → 101 | `primop concatStringsSep`                              | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5`                                           |
|    new |   +88 |  0.0% → 9.0% |  0 → 88 | `primop derivationStrict:evolution-data-server-3.60.2` | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +66 |  0.0% → 6.8% |  0 → 66 | `primop derivationStrict:firefox-152.0.3`              | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +57 |  0.0% → 5.9% |  0 → 57 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:217:16`                               |
|    new |   +57 |  0.0% → 5.9% |  0 → 57 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:242:1`                                |
|    new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop length`                                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:19`                                           |
|    new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop sub`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:29`                                           |
|    new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop genList`                                       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1131:5`                                            |
|    new |   +48 |  0.0% → 4.9% |  0 → 48 | `primop derivationStrict:firefox-unwrapped-152.0.3`    | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +47 |  0.0% → 4.8% |  0 → 47 | `primop derivationStrict:nginx-1.30.3`                 | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +41 |  0.0% → 4.2% |  0 → 41 | `primop derivationStrict:mesa-26.1.3`                  | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +33 |  0.0% → 3.4% |  0 → 33 | `primop derivationStrict:qt5compat-6.11.1`             | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +30 |  0.0% → 3.1% |  0 → 30 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/default.nix:79:18` |
|    new |   +29 |  0.0% → 3.0% |  0 → 29 | `primop derivationStrict:qtbase-6.11.1`                | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop derivationStrict:systemd-260.2`                | `«nix-internal»/derivation-internal.nix:37:12`                                                            |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:27`                                          |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:18`                                          |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop concatMap`                                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:7`                                           |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `(anonymous)`                                          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/config/nsswitch.nix:24:16`                         |

##### Ours

|  Change | Delta |           % | Samples | Function           | Location                                                                                                                                                                          |
| ------: | ----: | ----------: | ------: | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |   +57 | 0.0% → 5.9% |  0 → 57 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:217:16`                                                                                                       |
|     new |   +57 | 0.0% → 5.9% |  0 → 57 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:242:1`                                                                                                        |
|     new |   +30 | 0.0% → 3.1% |  0 → 30 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/default.nix:79:18`                                                                         |
|     new |   +28 | 0.0% → 2.9% |  0 → 28 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:27`                                                                                                                  |
|     new |   +28 | 0.0% → 2.9% |  0 → 28 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:18`                                                                                                                  |
|     new |   +28 | 0.0% → 2.9% |  0 → 28 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/config/nsswitch.nix:24:16`                                                                                                 |
|     new |   +27 | 0.0% → 2.8% |  0 → 27 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/2.nix:109:18`                                                                              |
|     new |   +26 | 0.0% → 2.7% |  0 → 26 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/stage0-posix/kaem/default.nix:45:16`                                                            |
|     new |   +12 | 0.0% → 1.2% |  0 → 12 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:378:5`                                                                                                                   |
|     new |   +12 | 0.0% → 1.2% |  0 → 12 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd/initrd.nix:706:15`                                                                                     |
|     new |   +12 | 0.0% → 1.2% |  0 → 12 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:351:12`                                                                        |
| +200.0% |    +6 | 0.2% → 0.9% |   3 → 9 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:849:21 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:849:21`                                                 |
|  +55.6% |    +5 | 0.7% → 1.4% |  9 → 14 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:983:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18` |
|  +22.7% |    +5 | 1.7% → 2.8% | 22 → 27 | `extendDerivation` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1015:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1015:5` |
| +500.0% |    +5 | 0.1% → 0.6% |   1 → 6 | `makeOutputChecks` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:867:35 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:867:35` |
| +100.0% |    +5 | 0.4% → 1.0% |  5 → 10 | `optionalString`   | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/boot/kernel.nix:411:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/kernel.nix:411:13`       |
|     new |    +5 | 0.0% → 0.5% |   0 → 5 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:813:11`                                                                                                                  |
|     new |    +5 | 0.0% → 0.5% |   0 → 5 | `(anonymous)`      | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/compilers/rust/cargo-auditable-cargo-wrapper.nix:35:11`                                                                 |
|     new |    +5 | 0.0% → 0.5% |   0 → 5 | `hasSuffix`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:21`                                                                    |
|     new |    +5 | 0.0% → 0.5% |   0 → 5 | `optionals`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:10`                                                                    |

##### Native

| Change | Delta |            % | Samples | Function                                               | Location                                                        |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------ | --------------------------------------------------------------- |
|    new |  +113 | 0.0% → 11.6% | 0 → 113 | `primop derivationStrict:gnome-shell-50.2`             | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |  +101 | 0.0% → 10.4% | 0 → 101 | `primop concatStringsSep`                              | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |
|    new |   +88 |  0.0% → 9.0% |  0 → 88 | `primop derivationStrict:evolution-data-server-3.60.2` | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +66 |  0.0% → 6.8% |  0 → 66 | `primop derivationStrict:firefox-152.0.3`              | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop length`                                        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:19` |
|    new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop sub`                                           | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:29` |
|    new |   +51 |  0.0% → 5.2% |  0 → 51 | `primop genList`                                       | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1131:5`  |
|    new |   +48 |  0.0% → 4.9% |  0 → 48 | `primop derivationStrict:firefox-unwrapped-152.0.3`    | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +47 |  0.0% → 4.8% |  0 → 47 | `primop derivationStrict:nginx-1.30.3`                 | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +41 |  0.0% → 4.2% |  0 → 41 | `primop derivationStrict:mesa-26.1.3`                  | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +33 |  0.0% → 3.4% |  0 → 33 | `primop derivationStrict:qt5compat-6.11.1`             | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +29 |  0.0% → 3.0% |  0 → 29 | `primop derivationStrict:qtbase-6.11.1`                | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop derivationStrict:systemd-260.2`                | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +28 |  0.0% → 2.9% |  0 → 28 | `primop concatMap`                                     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:7` |
|    new |   +22 |  0.0% → 2.3% |  0 → 22 | `primop derivationStrict:libxml2-2.15.3`               | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +20 |  0.0% → 2.1% |  0 → 20 | `primop derivationStrict:fish-4.8.0`                   | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +16 |  0.0% → 1.6% |  0 → 16 | `primop derivationStrict:mutter-50.2`                  | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +13 |  0.0% → 1.3% |  0 → 13 | `primop derivationStrict:systemd-minimal-libs-260.2`   | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +13 |  0.0% → 1.3% |  0 → 13 | `primop derivationStrict:gdm-50.1`                     | `«nix-internal»/derivation-internal.nix:37:12`                  |
|    new |   +11 |  0.0% → 1.1% |  0 → 11 | `primop derivationStrict:glibc-2.42-67`                | `«nix-internal»/derivation-internal.nix:37:12`                  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |     Samples | Function                               | Location                                                                                                                                                                                    |
| ------: | ----: | ------------: | ----------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -23.0% |  -254 | 87.3% → 87.4% | 1,105 → 851 | `(anonymous)`                          | `<unknown>`                                                                                                                                                                                 |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `primop addErrorContext`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1147:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15`                                                         |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `(anonymous)`                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:85 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85`                                                       |
|  -21.2% |  -238 | 88.9% → 91.1% | 1,125 → 887 | `primop getAttr`                       | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                                              |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `(anonymous)`                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/default.nix:21:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/default.nix:21:12`                                                         |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop addErrorContext`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1227:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                                                         |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `checkAssertWarn`                      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/activation/top-level.nix:78:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:26` |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop isAttrs`                       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1228:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15`                                                         |
|  -23.6% |  -235 | 78.5% → 77.9% |   994 → 759 | `primop head`                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1714:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1719:13`                                                       |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop filter`                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:46 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:46`                                                           |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop map`                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:26`                                                           |
|  -49.8% |  -161 | 25.5% → 16.6% |   323 → 162 | `(anonymous)`                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:54 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`                                                           |
|  -28.2% |  -158 | 44.2% → 41.3% |   560 → 402 | `primop any`                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                                         |
| removed |  -153 |  12.1% → 0.0% |     153 → 0 | `primop derivationStrict:nginx-1.30.2` | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                              |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1190:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11`                                                         |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1204:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`                                                         |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop concatMap`                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1189:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1189:26`                                                         |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop length`                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1424:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1424:8`                                                           |
|  -27.7% |  -130 | 37.1% → 34.9% |   470 → 340 | `primop map`                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1191:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`                                                         |
|  -27.5% |  -129 | 37.0% → 34.9% |   469 → 340 | `primop addErrorContext`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1200:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`                                                         |

##### Ours

|  Change | Delta |             % |     Samples | Function              | Location                                                                                                                                                                                                                |
| ------: | ----: | ------------: | ----------: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:85 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85`                                                                                   |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/default.nix:21:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/default.nix:21:12`                                                                                     |
|  -23.7% |  -236 | 78.5% → 77.8% |   994 → 758 | `checkAssertWarn`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/activation/top-level.nix:78:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:26`                             |
|  -49.8% |  -161 | 25.5% → 16.6% |   323 → 162 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:54 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`                                                                                       |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1190:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11`                                                                                     |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1204:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`                                                                                     |
|  -27.4% |  -128 | 37.0% → 34.9% |   468 → 340 | `dischargeProperties` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1200:80 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:80`                                                                                     |
| removed |  -114 |   9.0% → 0.0% |     114 → 0 | `makeSearchPath`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:606:5`                                                                                                                                                         |
|  -64.5% |  -111 |  13.6% → 6.3% |    172 → 61 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18` |
|  -64.2% |  -111 |  13.7% → 6.4% |    173 → 62 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:19:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:19:5`   |
|  -64.5% |  -111 |  13.6% → 6.3% |    172 → 61 | `svcUser`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:20:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:20:5`   |
|  -65.2% |  -107 |  13.0% → 5.9% |    164 → 57 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/lib/systemd-unit-options.nix:489:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-unit-options.nix:489:16`                                                 |
| removed |   -78 |   6.2% → 0.0% |      78 → 0 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:47`                                                                                                                                                        |
|  -11.2% |   -74 | 52.3% → 60.4% |   662 → 588 | `fold'`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:143:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:143:5`                                                                                             |
|  -11.2% |   -74 | 52.2% → 60.3% |   661 → 587 | `foldr`               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/trivial.nix:1051:33 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1051:33`                                                                                     |
|  -11.2% |   -74 | 52.2% → 60.3% |   661 → 587 | `showWarnings`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:200:7 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:200:7`                                                                                         |
|  -13.7% |   -72 | 41.5% → 46.6% |   526 → 454 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:60 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:60`                                                                                     |
|  -13.6% |   -72 | 41.9% → 47.1% |   531 → 459 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:53 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:53`                                                                                     |
|  -13.4% |   -70 | 41.4% → 46.6% |   524 → 454 | `filterAttrs`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:1019:17 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:1019:17`                                                                                         |
| removed |   -69 |   5.5% → 0.0% |      69 → 0 | `(anonymous)`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/top-level/default.nix:217:10`                                                                                                                                             |

##### Native

|  Change | Delta |             % |     Samples | Function                                               | Location                                                                                                                                                                                                                |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -21.8% |  -251 | 90.8% → 92.3% | 1,150 → 899 | `primop addErrorContext`                               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1147:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15`                                                                                     |
|  -21.2% |  -238 | 88.9% → 91.1% | 1,125 → 887 | `primop getAttr`                                       | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                                                                          |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop addErrorContext`                               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1227:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                                                                                     |
|  -23.2% |  -236 | 80.4% → 80.3% | 1,018 → 782 | `primop isAttrs`                                       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1228:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15`                                                                                     |
|  -23.6% |  -235 | 78.5% → 77.9% |   994 → 759 | `primop head`                                          | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1714:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1719:13`                                                                                   |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop filter`                                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:46 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:46`                                                                                       |
|  -48.6% |  -162 | 26.3% → 17.6% |   333 → 171 | `primop map`                                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:26`                                                                                       |
|  -28.2% |  -158 | 44.2% → 41.3% |   560 → 402 | `primop any`                                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                                                                                     |
| removed |  -153 |  12.1% → 0.0% |     153 → 0 | `primop derivationStrict:nginx-1.30.2`                 | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                                                          |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop concatMap`                                     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1189:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1189:26`                                                                                     |
|  -27.8% |  -131 | 37.2% → 34.9% |   471 → 340 | `primop length`                                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1424:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1424:8`                                                                                       |
|  -27.7% |  -130 | 37.1% → 34.9% |   470 → 340 | `primop map`                                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1191:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`                                                                                     |
|  -27.5% |  -129 | 37.0% → 34.9% |   469 → 340 | `primop addErrorContext`                               | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1200:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`                                                                                     |
| removed |  -127 |  10.0% → 0.0% |     127 → 0 | `primop derivationStrict:gnome-shell-50.1`             | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                                                          |
| removed |  -115 |   9.1% → 0.0% |     115 → 0 | `primop concatStringsSep`                              | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:20`                                                                                                                                                        |
|  -39.9% |  -112 | 22.2% → 17.4% |   281 → 169 | `primop isBool`                                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1380:10 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1380:10`                                                                                     |
|  -64.2% |  -111 |  13.7% → 6.4% |    173 → 62 | `primop all`                                           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:18:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:18:15` |
| removed |  -102 |   8.1% → 0.0% |     102 → 0 | `primop derivationStrict:libxml2-2.15.2`               | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                                                          |
| removed |   -98 |   7.7% → 0.0% |      98 → 0 | `primop derivationStrict:evolution-data-server-3.60.1` | `«nix-internal»/derivation-internal.nix:37:12`                                                                                                                                                                          |
| removed |   -84 |   6.6% → 0.0% |      84 → 0 | `primop length`                                        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:1125:11`                                                                                                                                                         |

##### Unknown

| Change | Delta |             % |     Samples | Function      | Location    |
| -----: | ----: | ------------: | ----------: | ------------- | ----------- |
| -23.0% |  -254 | 87.3% → 87.4% | 1,105 → 851 | `(anonymous)` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `primop derivationStrict:gnome-shell-50.2` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |  +110 | 0.0% → 97.3% | 0 → 110 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +2 |  0.0% → 1.8% |   0 → 2 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |
|    new |    +1 |  0.0% → 0.9% |   0 → 1 | `getSchemaPath`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/by-name/gn/gnome-shell/package.nix:206:11` |

##### `primop concatStringsSep` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5`)

| Change | Delta |            % | Samples | Callee             | Location                                                         |
| -----: | ----: | -----------: | ------: | ------------------ | ---------------------------------------------------------------- |
|    new |   +70 | 0.0% → 69.3% |  0 → 70 | `primop getAttr`   | `«nix-internal»/derivation-internal.nix:50:17`                   |
|    new |   +28 | 0.0% → 27.7% |  0 → 28 | `primop concatMap` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:7`  |
|    new |    +3 |  0.0% → 3.0% |   0 → 3 | `getOutput`        | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:48` |

##### `primop derivationStrict:evolution-data-server-3.60.2` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                           |
| -----: | ----: | -----------: | ------: | ---------------- | -------------------------------------------------------------------------------------------------- |
|    new |   +86 | 0.0% → 97.7% |  0 → 86 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                                     |
|    new |    +1 |  0.0% → 1.1% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`           |
|    new |    +1 |  0.0% → 1.1% |   0 → 1 | `optionalString` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/by-name/ev/evolution-data-server/package.nix:168:17` |

##### `primop derivationStrict:firefox-152.0.3` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                                   |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------------------- |
|    new |   +48 | 0.0% → 72.7% |  0 → 48 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                                             |
|    new |   +12 | 0.0% → 18.2% |  0 → 12 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:351:12` |
|    new |    +5 |  0.0% → 7.6% |   0 → 5 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:588:14` |
|    new |    +1 |  0.0% → 1.5% |   0 → 1 | `primop map`     | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:589:21` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:217:16`)

| Change | Delta |             % | Samples | Callee  | Location                                                                |
| -----: | ----: | ------------: | ------: | ------- | ----------------------------------------------------------------------- |
|    new |   +57 | 0.0% → 100.0% |  0 → 57 | `dfold` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/booter.nix:165:10` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:242:1`)

| Change | Delta |             % | Samples | Callee        | Location                                                                    |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------------- |
|    new |   +57 | 0.0% → 100.0% |  0 → 57 | `(anonymous)` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/top-level/default.nix:217:16` |

##### `primop length` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:19`)

| Change | Delta |             % | Samples | Callee          | Location                                                         |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------------------- |
|    new |   +51 | 0.0% → 100.0% |  0 → 51 | `filterModules` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:591:17` |

##### `primop sub` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:29`)

| Change | Delta |             % | Samples | Callee          | Location                                                        |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------- |
|    new |   +51 | 0.0% → 100.0% |  0 → 51 | `primop length` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:19` |

##### `primop genList` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1131:5`)

| Change | Delta |             % | Samples | Callee       | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------ | --------------------------------------------------------------- |
|    new |   +51 | 0.0% → 100.0% |  0 → 51 | `primop sub` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:1129:29` |

##### `primop derivationStrict:firefox-unwrapped-152.0.3` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                          |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------- |
|    new |   +46 | 0.0% → 95.8% |  0 → 46 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                                    |
|    new |    +1 |  0.0% → 2.1% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`          |
|    new |    +1 |  0.0% → 2.1% |   0 → 1 | `enableFeature`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/build-support/build-mozilla-mach/default.nix:509:6` |

##### `primop derivationStrict:nginx-1.30.3` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +24 | 0.0% → 51.1% |  0 → 24 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |   +21 | 0.0% → 44.7% |  0 → 21 | `(anonymous)`    | `<unknown>`                                                                              |
|    new |    +2 |  0.0% → 4.3% |   0 → 2 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |

##### `primop derivationStrict:mesa-26.1.3` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +40 | 0.0% → 97.6% |  0 → 40 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +1 |  0.0% → 2.4% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |

##### `primop derivationStrict:qt5compat-6.11.1` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |             % | Samples | Callee           | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------- |
|    new |   +33 | 0.0% → 100.0% |  0 → 33 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/default.nix:79:18`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |   +30 | 0.0% → 100.0% |  0 → 30 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `primop derivationStrict:qtbase-6.11.1` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                                    |
| -----: | ----: | -----------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------------- |
|    new |   +27 | 0.0% → 93.1% |  0 → 27 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                                              |
|    new |    +2 |  0.0% → 6.9% |   0 → 2 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:631:18`                    |
|    new |    +1 |  0.0% → 3.4% |   0 → 1 | `makeMesonFlags` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:971:24`                    |
|    new |    +1 |  0.0% → 3.4% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18`                    |
|    new |    +1 |  0.0% → 3.4% |   0 → 1 | `optionalString` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/libraries/qt-6/modules/qtbase/default.nix:256:15` |

##### `primop derivationStrict:systemd-260.2` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +27 | 0.0% → 96.4% |  0 → 27 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +1 |  0.0% → 3.6% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:27`)

| Change | Delta |             % | Samples | Callee       | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------ | ----------------------------------------------------------------- |
|    new |   +28 | 0.0% → 100.0% |  0 → 28 | `primop all` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1253:17` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:18`)

| Change | Delta |             % | Samples | Callee        | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------- | ---------------------------------------------------------------- |
|    new |   +28 | 0.0% → 100.0% |  0 → 28 | `(anonymous)` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:27` |

##### `primop concatMap` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:7`)

| Change | Delta |             % | Samples | Callee        | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------- | ---------------------------------------------------------------- |
|    new |   +28 | 0.0% → 100.0% |  0 → 28 | `(anonymous)` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:613:18` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/config/nsswitch.nix:24:16`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |   +28 | 0.0% → 100.0% |  0 → 28 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/bash/2.nix:109:18`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |   +27 | 0.0% → 100.0% |  0 → 27 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/os-specific/linux/minimal-bootstrap/stage0-posix/kaem/default.nix:45:16`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |   +26 | 0.0% → 100.0% |  0 → 26 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:378:5`)

| Change | Delta |            % | Samples | Callee               | Location                                                               |
| -----: | ----: | -----------: | ------: | -------------------- | ---------------------------------------------------------------------- |
|    new |    +8 | 0.0% → 66.7% |   0 → 8 | `primop removeAttrs` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:317:22` |
|    new |    +5 | 0.0% → 41.7% |   0 → 5 | `makeOverridable`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:322:7`  |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd/initrd.nix:706:15`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |   +12 | 0.0% → 100.0% |  0 → 12 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/applications/networking/browsers/firefox/wrapper.nix:351:12`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |   +12 | 0.0% → 100.0% |  0 → 12 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:849:21`)

|  Change | Delta |              % | Samples | Callee                   | Location                                                                                                                              |
| ------: | ----: | -------------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| +350.0% |    +7 | 66.7% → 100.0% |   2 → 9 | `(anonymous)`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:85 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:726:9`                                                                       |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:983:18`)

|  Change | Delta |             % | Samples | Callee          | Location                                                                                                                                                                |
| ------: | ----: | ------------: | ------: | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 11.1% → 14.3% |   1 → 2 | `primop isNull` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/check-meta.nix:726:10 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/check-meta.nix:729:10` |

##### `extendDerivation` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1015:5`)

| Change | Delta |             % | Samples | Callee               | Location                                                                                                                                      |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +17.6% |    +3 | 77.3% → 74.1% | 17 → 20 | `primop listToAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/customisation.nix:404:12 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/customisation.nix:404:12` |

##### `optionalString` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/kernel.nix:411:13`)

|  Change | Delta |             % | Samples | Callee           | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------- |
| +125.0% |    +5 | 80.0% → 90.0% |   4 → 9 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:813:11`)

| Change | Delta |            % | Samples | Callee           | Location                                                         |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `primop isAttrs` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:817:11` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/compilers/rust/cargo-auditable-cargo-wrapper.nix:35:11`)

| Change | Delta |             % | Samples | Callee                    | Location                                                        |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `primop concatStringsSep` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:612:5` |

##### `hasSuffix` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:21`)

| Change | Delta |             % | Samples | Callee            | Location                                                         |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `primop lessThan` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/strings.nix:869:18` |

##### `optionals` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:10`)

| Change | Delta |             % | Samples | Callee      | Location                                                                                                       |
| -----: | ----: | ------------: | ------: | ----------- | -------------------------------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `hasSuffix` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/development/interpreters/python/mk-python-derivation.nix:320:21` |

##### `primop derivationStrict:libxml2-2.15.3` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +15 | 0.0% → 68.2% |  0 → 15 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +6 | 0.0% → 27.3% |   0 → 6 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/linux/default.nix:718:17`           |
|    new |    +1 |  0.0% → 4.5% |   0 → 1 | `primop import`  | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:199:12` |

##### `primop derivationStrict:fish-4.8.0` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +18 | 0.0% → 90.0% |  0 → 18 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +1 |  0.0% → 5.0% |   0 → 1 | `makeCMakeFlags` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:970:24` |
|    new |    +1 |  0.0% → 5.0% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:563:18` |

##### `primop derivationStrict:mutter-50.2` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +14 | 0.0% → 87.5% |  0 → 14 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +2 | 0.0% → 12.5% |   0 → 2 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |

##### `primop derivationStrict:systemd-minimal-libs-260.2` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |             % | Samples | Callee           | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------- |
|    new |   +13 | 0.0% → 100.0% |  0 → 13 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `primop derivationStrict:gdm-50.1` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
|    new |   +12 | 0.0% → 92.3% |  0 → 12 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
|    new |    +1 |  0.0% → 7.7% |   0 → 1 | `(anonymous)`    | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |

##### `primop derivationStrict:glibc-2.42-67` (`«nix-internal»/derivation-internal.nix:37:12`)

| Change | Delta |             % | Samples | Callee           | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------- |
|    new |   +11 | 0.0% → 100.0% |  0 → 11 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `(anonymous)` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee               | Location                                                                                                                                                                            |
| -----: | ----: | ------------: | --------: | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -23.2% |  -232 | 90.3% → 90.0% | 998 → 766 | `(anonymous)`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:85 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85`                                               |
| -74.3% |   -84 |  10.2% → 3.4% |  113 → 29 | `primop isString`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:1009:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/pkgs/stdenv/generic/make-derivation.nix:1009:14` |
| -31.0% |   -18 |   5.2% → 4.7% |   58 → 40 | `primop map`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:947:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:947:15`                                                   |
| -33.3% |   -17 |   4.6% → 4.0% |   51 → 34 | `(anonymous)`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:930:25 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:930:25`                                                   |
| -29.6% |   -16 |   4.9% → 4.5% |   54 → 38 | `primop concatLists` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:944:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:944:11`                                                   |

##### `primop addErrorContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15`)

| Change | Delta |             % |     Samples | Callee                   | Location                                                                                                                            |
| -----: | ----: | ------------: | ----------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -23.2% |  -235 | 88.0% → 86.4% | 1,012 → 777 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1227:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11` |
| -28.3% |  -145 | 44.6% → 40.9% |   513 → 368 | `primop any`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14` |
| -13.6% |   -71 | 45.5% → 50.3% |   523 → 452 | `primop mapAttrs`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/types.nix:1025:21 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:1025:21`     |
| -14.8% |   -67 | 39.5% → 43.0% |   454 → 387 | `(anonymous)`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1136:35 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1136:35` |
| -16.5% |   -35 | 18.4% → 19.7% |   212 → 177 | `primop all`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1253:17 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1253:17` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85`)

| Change | Delta |      % |     Samples | Callee                   | Location                                                                                                                            |
| -----: | ----: | -----: | ----------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -21.8% |  -251 | 100.0% | 1,150 → 899 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1147:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1147:15` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|  Change | Delta |            % | Samples | Callee                                                 | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| removed |  -153 | 13.6% → 0.0% | 153 → 0 | `primop derivationStrict:nginx-1.30.2`                 | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |  -127 | 11.3% → 0.0% | 127 → 0 | `primop derivationStrict:gnome-shell-50.1`             | `«nix-internal»/derivation-internal.nix:37:12` |
|     new |  +113 | 0.0% → 12.7% | 0 → 113 | `primop derivationStrict:gnome-shell-50.2`             | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |  -102 |  9.1% → 0.0% | 102 → 0 | `primop derivationStrict:libxml2-2.15.2`               | `«nix-internal»/derivation-internal.nix:37:12` |
| removed |   -98 |  8.7% → 0.0% |  98 → 0 | `primop derivationStrict:evolution-data-server-3.60.1` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/default.nix:21:12`)

| Change | Delta |      % |   Samples | Callee        | Location                                                                                                                              |
| -----: | ----: | -----: | --------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| -23.7% |  -236 | 100.0% | 994 → 758 | `primop head` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1714:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1719:13` |

##### `primop addErrorContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`)

| Change | Delta |      % |     Samples | Callee           | Location                                                                                                                            |
| -----: | ----: | -----: | ----------: | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| -23.2% |  -236 | 100.0% | 1,018 → 782 | `primop isAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1228:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15` |

##### `checkAssertWarn` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:26`)

| Change | Delta |             % |   Samples | Callee         | Location                                                                                                                          |
| -----: | ----: | ------------: | --------: | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| -48.6% |  -162 | 33.5% → 22.6% | 333 → 171 | `primop map`   | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:26` |
| -11.2% |   -74 | 66.5% → 77.4% | 661 → 587 | `showWarnings` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:200:7 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:200:7`   |

##### `primop isAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1228:15`)

|  Change | Delta |             % |   Samples | Callee                    | Location                                                                                                                                                                                      |
| ------: | ----: | ------------: | --------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -23.7% |  -236 | 97.6% → 96.9% | 994 → 758 | `checkAssertWarn`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/activation/top-level.nix:78:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:26`   |
|  -15.4% |   -73 | 46.7% → 51.4% | 475 → 402 | `primop getAttr`          | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                                                |
|  -14.8% |   -67 | 44.6% → 49.5% | 454 → 387 | `primop concatStringsSep` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/activation/top-level.nix:376:22 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:376:22` |
|  -16.1% |   -19 | 11.6% → 12.7% |  118 → 99 | `primop elemAt`           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:347:43 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:350:43`                                                                 |
| +166.7% |    +5 |   0.3% → 1.0% |     3 → 8 | `(anonymous)`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:849:21 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:849:21`                                                             |

##### `primop head` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1719:13`)

| Change | Delta |      % |   Samples | Callee        | Location    |
| -----: | ----: | -----: | --------: | ------------- | ----------- |
| -23.6% |  -235 | 100.0% | 994 → 759 | `(anonymous)` | `<unknown>` |

##### `primop filter` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:46`)

| Change | Delta |             % |   Samples | Callee        | Location                                                                                                                                                                                    |
| -----: | ----: | ------------: | --------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -49.8% |  -161 | 97.0% → 94.7% | 323 → 162 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:54 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`                                                           |
| -10.0% |    -1 |   3.0% → 5.3% |    10 → 9 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/activation/top-level.nix:78:54 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:78:54` |

##### `primop map` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:26`)

| Change | Delta |      % |   Samples | Callee          | Location                                                                                                                          |
| -----: | ----: | -----: | --------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| -48.6% |  -162 | 100.0% | 333 → 171 | `primop filter` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/asserts.nix:195:46 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:46` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:195:54`)

|  Change | Delta |             % |  Samples | Callee                 | Location                                                                                                                                                                                                                |
| ------: | ----: | ------------: | -------: | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -64.2% |  -111 | 53.6% → 38.3% | 173 → 62 | `primop all`           | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:18:15 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:18:15` |
| removed |   -36 |  11.1% → 0.0% |   36 → 0 | `makeSearchPathOutput` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/config/nsswitch.nix:24:16`                                                                                                                                       |
|     new |   +28 |  0.0% → 17.3% |   0 → 28 | `(anonymous)`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/config/nsswitch.nix:24:16`                                                                                                                                       |
|  -36.9% |   -24 | 20.1% → 25.3% |  65 → 41 | `primop getAttr`       | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                                                                          |
|  -36.1% |   -13 | 11.1% → 14.2% |  36 → 23 | `primop match`         | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/services/networking/ssh/sshd.nix:944:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/services/networking/ssh/sshd.nix:944:14`                         |

##### `primop any` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`)

| Change | Delta |             % |   Samples | Callee             | Location                                                                                                                            |
| -----: | ----: | ------------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -27.8% |  -131 | 84.1% → 84.6% | 471 → 340 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1204:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24` |
| -34.0% |   -35 | 18.4% → 16.9% |  103 → 68 | `(anonymous)`      | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:19 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:19` |
| -50.0% |    -3 |   1.1% → 0.7% |     6 → 3 | `primop concatMap` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1434:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1434:18` |

##### `primop derivationStrict:nginx-1.30.2` (`«nix-internal»/derivation-internal.nix:37:12`)

|  Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| removed |  -101 | 66.0% → 0.0% | 101 → 0 | `(anonymous)`    | `<unknown>`                                                                              |
| removed |   -50 | 32.7% → 0.0% |  50 → 0 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
| removed |    -2 |  1.3% → 0.0% |   2 → 0 | `(anonymous)`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11`)

| Change | Delta |              % |   Samples | Callee       | Location                                                                                                                            |
| -----: | ----: | -------------: | --------: | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -27.7% |  -130 | 99.8% → 100.0% | 470 → 340 | `primop map` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1191:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1204:24`)

| Change | Delta |      % |   Samples | Callee          | Location                                                                                                                          |
| -----: | ----: | -----: | --------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| -27.8% |  -131 | 100.0% | 471 → 340 | `primop length` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1424:8 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1424:8` |

##### `primop concatMap` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1189:26`)

| Change | Delta |      % |   Samples | Callee        | Location                                                                                                                            |
| -----: | ----: | -----: | --------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| -27.8% |  -131 | 100.0% | 471 → 340 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1190:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1190:11` |

##### `primop length` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1424:8`)

| Change | Delta |      % |   Samples | Callee             | Location                                                                                                                            |
| -----: | ----: | -----: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -27.8% |  -131 | 100.0% | 471 → 340 | `primop concatMap` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1189:26 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1189:26` |

##### `primop map` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1191:11`)

| Change | Delta |              % |   Samples | Callee                   | Location                                                                                                                            |
| -----: | ----: | -------------: | --------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| -27.5% |  -129 | 99.8% → 100.0% | 469 → 340 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1200:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14` |

##### `primop addErrorContext` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:14`)

| Change | Delta |              % |   Samples | Callee                | Location                                                                                                                            |
| -----: | ----: | -------------: | --------: | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| -27.4% |  -128 | 99.8% → 100.0% | 468 → 340 | `dischargeProperties` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1200:80 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:80` |

##### `dischargeProperties` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1200:80`)

|  Change | Delta |             % |   Samples | Callee                 | Location                                                                                                                                                          |
| ------: | ----: | ------------: | --------: | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -51.4% |  -114 | 47.4% → 31.8% | 222 → 108 | `primop getAttr`       | `«nix-internal»/derivation-internal.nix:50:17`                                                                                                                    |
|  -40.6% |  -114 | 60.0% → 49.1% | 281 → 167 | `primop isBool`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1380:10 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1380:10`                               |
|     new |   +12 |   0.0% → 3.5% |    0 → 12 | `(anonymous)`          | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/boot/systemd/initrd.nix:706:15`                                                                     |
| removed |   -11 |   2.4% → 0.0% |    11 → 0 | `makeSearchPathOutput` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/boot/systemd/initrd.nix:695:15`                                                                     |
|  -40.0% |    -6 |   3.2% → 2.6% |    15 → 9 | `writeText`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/pam.nix:1807:20 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/pam.nix:1807:20` |

##### `makeSearchPath` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:606:5`)

|  Change | Delta |             % | Samples | Callee                    | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------------- |
| removed |  -114 | 100.0% → 0.0% | 114 → 0 | `primop concatStringsSep` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:20` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18`)

| Change | Delta |      % |  Samples | Callee        | Location                                                                                                                              |
| -----: | ----: | -----: | -------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| -64.5% |  -111 | 100.0% | 172 → 61 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:85 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:19:5`)

| Change | Delta |             % |  Samples | Callee    | Location                                                                                                                                                                                                              |
| -----: | ----: | ------------: | -------: | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -64.5% |  -111 | 99.4% → 98.4% | 172 → 61 | `svcUser` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:20:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:20:5` |

##### `svcUser` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:20:5`)

| Change | Delta |      % |  Samples | Callee        | Location                                                                                                                                                                                                                |
| -----: | ----: | -----: | -------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -64.5% |  -111 | 100.0% | 172 → 61 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-unit-options.nix:489:16`)

| Change | Delta |      % |  Samples | Callee        | Location                                                                                                                              |
| -----: | ----: | -----: | -------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| -65.2% |  -107 | 100.0% | 164 → 57 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:1188:85 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:1193:85` |

##### `(anonymous)` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:47`)

|  Change | Delta |            % | Samples | Callee           | Location                                       |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------- |
| removed |   -73 | 93.6% → 0.0% |  73 → 0 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `fold'` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:143:5`)

| Change | Delta |             % |   Samples | Callee          | Location                                                                                                                                                                                    |
| -----: | ----: | ------------: | --------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -14.9% |   -68 | 68.7% → 65.8% | 455 → 387 | `mkDerivation`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/activation/top-level.nix:58:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/system/activation/top-level.nix:58:16` |
|  -3.4% |    -7 | 31.4% → 34.2% | 208 → 201 | `primop length` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:140:13 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:140:13`                                                               |

##### `foldr` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1051:33`)

| Change | Delta |      % |   Samples | Callee  | Location                                                                                                                    |
| -----: | ----: | -----: | --------: | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| -11.2% |   -74 | 100.0% | 661 → 587 | `fold'` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:143:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/lists.nix:143:5` |

##### `showWarnings` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/asserts.nix:200:7`)

| Change | Delta |      % |   Samples | Callee  | Location                                                                                                                            |
| -----: | ----: | -----: | --------: | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| -11.2% |   -74 | 100.0% | 661 → 587 | `foldr` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/trivial.nix:1051:33 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/trivial.nix:1051:33` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:60`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                                                                                                              |
| -----: | ----: | ------------: | --------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| -13.8% |   -71 | 98.1% → 98.0% | 516 → 445 | `primop addErrorContext` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1227:11 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1227:11`                   |
| -20.0% |    -1 |   1.0% → 0.9% |     5 → 4 | `(anonymous)`            | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:70 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:70`                   |
| +33.3% |    +1 |   0.6% → 0.9% |     3 → 4 | `primop any`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:1209:14 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1209:14`                   |
| -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `attrByPath`             | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/lib/systemd-lib.nix:466:24 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-lib.nix:466:24` |

##### `(anonymous)` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:53`)

|  Change | Delta |             % |   Samples | Callee        | Location                                                                                                                            |
| ------: | ----: | ------------: | --------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
|  -13.7% |   -72 | 99.1% → 98.9% | 526 → 454 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:60 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:60` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `const`       | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:60`                                                                   |

##### `filterAttrs` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/types.nix:1019:17`)

| Change | Delta |      % |   Samples | Callee               | Location                                                                                                                            |
| -----: | ----: | -----: | --------: | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| -13.4% |   -70 | 100.0% | 524 → 454 | `primop removeAttrs` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/attrsets.nix:662:28 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/attrsets.nix:667:28` |

##### `(anonymous)` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/top-level/default.nix:217:10`)

|  Change | Delta |            % | Samples | Callee  | Location                                                                |
| ------: | ----: | -----------: | ------: | ------- | ----------------------------------------------------------------------- |
| removed |   -68 | 98.6% → 0.0% |  68 → 0 | `dfold` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/booter.nix:165:10` |

##### `primop derivationStrict:gnome-shell-50.1` (`«nix-internal»/derivation-internal.nix:37:12`)

|  Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| removed |  -124 | 97.6% → 0.0% | 124 → 0 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
| removed |    -1 |  0.8% → 0.0% |   1 → 0 | `(anonymous)`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:582:18` |
| removed |    -1 |  0.8% → 0.0% |   1 → 0 | `primop map`     | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:582:13` |
| removed |    -1 |  0.8% → 0.0% |   1 → 0 | `functor`        | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/by-name/gn/gnome-shell/package.nix:109:6`  |

##### `primop concatStringsSep` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:20`)

|  Change | Delta |            % | Samples | Callee        | Location                                                         |
| ------: | ----: | -----------: | ------: | ------------- | ---------------------------------------------------------------- |
| removed |   -78 | 67.8% → 0.0% |  78 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:47` |
| removed |   -37 | 32.2% → 0.0% |  37 → 0 | `primop map`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/strings.nix:567:42` |

##### `primop isBool` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/lib/modules.nix:1380:10`)

|  Change | Delta |             % |   Samples | Callee        | Location                                                                                                                                                                |
| ------: | ----: | ------------: | --------: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -65.2% |  -107 | 58.4% → 33.7% |  164 → 57 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/lib/systemd-unit-options.nix:489:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-unit-options.nix:489:16` |
| removed |    -3 |   1.1% → 0.0% |     3 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/services/monitoring/prometheus/exporters.nix:589:16`                                                             |
|   -2.9% |    -3 | 36.7% → 59.2% | 103 → 100 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/lib/systemd-unit-options.nix:497:16 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/lib/systemd-unit-options.nix:497:16` |
| removed |    -3 |   1.1% → 0.0% |     3 → 0 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/system/etc/etc.nix:225:36`                                                                                       |
|     new |    +2 |   0.0% → 1.2% |     0 → 2 | `(anonymous)` | `lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/services/monitoring/prometheus/exporters.nix:590:16`                                                             |

##### `primop all` (`lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:18:15`)

| Change | Delta |      % |  Samples | Callee        | Location                                                                                                                                                                                                              |
| -----: | ----: | -----: | -------: | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -64.2% |  -111 | 100.0% | 173 → 62 | `(anonymous)` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:19:5 → lxg1pnrmz21ljinmjza552wh8l7byj0q-source/nixos/modules/security/acme/mk-cert-ownership-assertion.nix:19:5` |

##### `primop derivationStrict:libxml2-2.15.2` (`«nix-internal»/derivation-internal.nix:37:12`)

|  Change | Delta |            % | Samples | Callee           | Location                                                                                      |
| ------: | ----: | -----------: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| removed |   -81 | 79.4% → 0.0% |  81 → 0 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                                |
| removed |   -18 | 17.6% → 0.0% |  18 → 0 | `(anonymous)`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/linux/default.nix:718:17`                |
| removed |    -1 |  1.0% → 0.0% |   1 → 0 | `primop import`  | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:199:12`      |
| removed |    -1 |  1.0% → 0.0% |   1 → 0 | `(anonymous)`    | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:563:18`      |
| removed |    -1 |  1.0% → 0.0% |   1 → 0 | `optionalString` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/development/libraries/libxml2/common.nix:127:5` |

##### `primop derivationStrict:evolution-data-server-3.60.1` (`«nix-internal»/derivation-internal.nix:37:12`)

|  Change | Delta |            % | Samples | Callee           | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| removed |   -97 | 99.0% → 0.0% |  97 → 0 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`                                           |
| removed |    -1 |  1.0% → 0.0% |   1 → 0 | `makeCMakeFlags` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/pkgs/stdenv/generic/make-derivation.nix:970:24` |

##### `primop length` (`j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/lists.nix:1125:11`)

|  Change | Delta |             % | Samples | Callee          | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------------------- |
| removed |   -84 | 100.0% → 0.0% |  84 → 0 | `filterModules` | `j2r11kxv91yl5xqppy3vy84klwxjbz1i-source/lib/modules.nix:591:17` |
