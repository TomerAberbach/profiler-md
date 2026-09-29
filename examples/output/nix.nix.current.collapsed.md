# Sampling profile

Collected 974 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 81.4% |     793 |
| Native           | 13.9% |     135 |
| Unknown          |  4.1% |      40 |
| Standard library |  0.6% |       6 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function              | Location                                                              |
| ----: | ------: | --------------------- | --------------------------------------------------------------------- |
| 14.0% |     136 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:582:18`                      |
|  7.3% |      71 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:631:18`                      |
|  6.9% |      67 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:563:18`                      |
|  4.1% |      40 | `(anonymous)`         | `<unknown>`                                                           |
|  3.7% |      36 | `makeCMakeFlags`      | `pkgs/stdenv/generic/make-derivation.nix:970:24`                      |
|  3.6% |      35 | `optionals`           | `pkgs/stdenv/generic/make-derivation.nix:542:26`                      |
|  3.5% |      34 | `mergeEqualOption`    | `lib/modules.nix:1254:11`                                             |
|  3.2% |      31 | `applyModuleArgs`     | `lib/modules.nix:705:56`                                              |
|  2.7% |      26 | `mkCrate`             | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
|  2.3% |      22 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                             |
|  2.1% |      20 | `(anonymous)`         | `pkgs/build-support/buildenv/default.nix:113:30`                      |
|  1.3% |      13 | `optionalString`      | `pkgs/development/interpreters/python/mk-python-derivation.nix:400:9` |
|  1.1% |      11 | `optionalString`      | `pkgs/development/haskell-modules/generic-builder.nix:686:11`         |
|  1.0% |      10 | `makeMesonFlags`      | `pkgs/stdenv/generic/make-derivation.nix:971:24`                      |
|  0.9% |       9 | `primop dirOf`        | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`            |
|  0.9% |       9 | `(anonymous)`         | `lib/lists.nix:1939:20`                                               |
|  0.9% |       9 | `filter`              | `nixos/modules/misc/documentation.nix:126:13`                         |
|  0.8% |       8 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:983:18`                      |
|  0.7% |       7 | `getRes`              | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`     |
|  0.7% |       7 | `binaryMerge`         | `lib/attrsets.nix:1628:11`                                            |

#### Categories

##### Ours

|     % | Samples | Function           | Location                                                              |
| ----: | ------: | ------------------ | --------------------------------------------------------------------- |
| 14.0% |     136 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:582:18`                      |
|  7.3% |      71 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:631:18`                      |
|  6.9% |      67 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:563:18`                      |
|  3.7% |      36 | `makeCMakeFlags`   | `pkgs/stdenv/generic/make-derivation.nix:970:24`                      |
|  3.6% |      35 | `optionals`        | `pkgs/stdenv/generic/make-derivation.nix:542:26`                      |
|  3.5% |      34 | `mergeEqualOption` | `lib/modules.nix:1254:11`                                             |
|  3.2% |      31 | `applyModuleArgs`  | `lib/modules.nix:705:56`                                              |
|  2.7% |      26 | `mkCrate`          | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
|  2.1% |      20 | `(anonymous)`      | `pkgs/build-support/buildenv/default.nix:113:30`                      |
|  1.3% |      13 | `optionalString`   | `pkgs/development/interpreters/python/mk-python-derivation.nix:400:9` |
|  1.1% |      11 | `optionalString`   | `pkgs/development/haskell-modules/generic-builder.nix:686:11`         |
|  1.0% |      10 | `makeMesonFlags`   | `pkgs/stdenv/generic/make-derivation.nix:971:24`                      |
|  0.9% |       9 | `(anonymous)`      | `lib/lists.nix:1939:20`                                               |
|  0.9% |       9 | `filter`           | `nixos/modules/misc/documentation.nix:126:13`                         |
|  0.8% |       8 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:983:18`                      |
|  0.7% |       7 | `getRes`           | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`     |
|  0.7% |       7 | `binaryMerge`      | `lib/attrsets.nix:1628:11`                                            |
|  0.6% |       6 | `(anonymous)`      | `lib/attrsets.nix:667:53`                                             |
|  0.6% |       6 | `makeOutputChecks` | `pkgs/stdenv/generic/make-derivation.nix:867:35`                      |
|  0.4% |       4 | `(anonymous)`      | `lib/modules.nix:537:34`                                              |

##### Native

|    % | Samples | Function              | Location                                                      |
| ---: | ------: | --------------------- | ------------------------------------------------------------- |
| 2.3% |      22 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                     |
| 0.9% |       9 | `primop dirOf`        | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`    |
| 0.5% |       5 | `primop map`          | `pkgs/stdenv/generic/make-derivation.nix:631:13`              |
| 0.4% |       4 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`                |
| 0.4% |       4 | `primop elemAt`       | `lib/lists.nix:141:48`                                        |
| 0.4% |       4 | `primop all`          | `lib/modules.nix:1253:17`                                     |
| 0.4% |       4 | `primop mapAttrs`     | `pkgs/stdenv/generic/make-derivation.nix:1006:9`              |
| 0.4% |       4 | `primop toString`     | `pkgs/development/haskell-modules/generic-builder.nix:698:49` |
| 0.3% |       3 | `primop mapAttrs`     | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`    |
| 0.3% |       3 | `primop any`          | `pkgs/stdenv/generic/make-derivation.nix:519:7`               |
| 0.3% |       3 | `primop isList`       | `pkgs/build-support/trivial-builders/default.nix:566:21`      |
| 0.3% |       3 | `primop map`          | `lib/modules.nix:1426:18`                                     |
| 0.2% |       2 | `primop any`          | `lib/modules.nix:1209:14`                                     |
| 0.2% |       2 | `primop removeAttrs`  | `pkgs/stdenv/generic/make-derivation.nix:650:25`              |
| 0.2% |       2 | `primop import`       | `pkgs/stdenv/generic/make-derivation.nix:199:12`              |
| 0.2% |       2 | `primop head`         | `«nix-internal»/derivation-internal.nix:60:2`                 |
| 0.2% |       2 | `primop length`       | `lib/modules.nix:886:34`                                      |
| 0.2% |       2 | `primop concatMap`    | `lib/modules.nix:1434:18`                                     |
| 0.2% |       2 | `primop lessThan`     | `lib/strings.nix:2910:28`                                     |
| 0.1% |       1 | `primop concatMap`    | `lib/modules.nix:495:26`                                      |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.1% |      40 | `(anonymous)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`)

|    % | Samples | Caller                                            | Location                                       |
| ---: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 5.1% |       7 | `primop derivationStrict:gst-plugins-bad-1.26.11` | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.2% |       3 | `primop derivationStrict:xvfb-21.1.23`            | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.2% |       3 | `primop derivationStrict:pipewire-1.6.5`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 1.5% |       2 | `primop derivationStrict:nginx-1.30.3`            | `«nix-internal»/derivation-internal.nix:37:12` |
| 1.5% |       2 | `primop derivationStrict:xauth-1.1.5`             | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`)

|    % | Samples | Caller                                                | Location                                       |
| ---: | ------: | ----------------------------------------------------- | ---------------------------------------------- |
| 8.5% |       6 | `primop derivationStrict:pandoc-3.7.0.2`              | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.2% |       3 | `primop derivationStrict:quickcheck-instances-0.3.33` | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       2 | `primop derivationStrict:curl-8.20.0`                 | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       2 | `primop derivationStrict:gtk+3-3.24.52`               | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       2 | `primop derivationStrict:qtbase-6.11.1`               | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:563:18`)

|    % | Samples | Caller                                                | Location                                       |
| ---: | ------: | ----------------------------------------------------- | ---------------------------------------------- |
| 4.5% |       3 | `primop derivationStrict:python3.13-wheel-0.46.1`     | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       2 | `primop derivationStrict:python3.13-mypy-1.20.1`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       2 | `primop derivationStrict:python3.13-filelock-3.20.3`  | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       2 | `primop derivationStrict:python3.13-installer-1.0.0`  | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       2 | `primop derivationStrict:python3.13-flit-core-3.12.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|     % | Samples | Caller                                    | Location                                       |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 62.5% |      25 | `primop toString`                         | `nixos/lib/systemd-lib.nix:463:11`             |
|  7.5% |       3 | `primop concatLists`                      | `nixos/lib/systemd-lib.nix:359:7`              |
|  5.0% |       2 | `primop concatLists`                      | `lib/modules.nix:944:11`                       |
|  2.5% |       1 | `(anonymous)`                             | `<unknown>`                                    |
|  2.5% |       1 | `primop derivationStrict:python3-3.13.13` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `makeCMakeFlags` (`pkgs/stdenv/generic/make-derivation.nix:970:24`)

|    % | Samples | Caller                                                        | Location                                       |
| ---: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| 5.6% |       2 | `primop derivationStrict:bootstrap-stage4-gcc-wrapper-15.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       1 | `primop derivationStrict:shadow-4.19.4`                       | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       1 | `primop derivationStrict:python3.13-packaging-26.1`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       1 | `primop derivationStrict:pkg-config-0.29.2`                   | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.8% |       1 | `primop derivationStrict:nixos-init-0.1.0`                    | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionals` (`pkgs/stdenv/generic/make-derivation.nix:542:26`)

|    % | Samples | Caller                                                        | Location                                       |
| ---: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| 2.9% |       1 | `primop derivationStrict:binutils-wrapper-2.46`               | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.9% |       1 | `primop derivationStrict:binutils-patchelfed-ld-wrapper-2.46` | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.9% |       1 | `primop derivationStrict:env_filter-0.1.3`                    | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.9% |       1 | `primop derivationStrict:rustversion-1.0.22`                  | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.9% |       1 | `primop derivationStrict:static_assertions-1.1.0`             | `«nix-internal»/derivation-internal.nix:37:12` |

##### `mergeEqualOption` (`lib/modules.nix:1254:11`)

|     % | Samples | Caller                   | Location                                        |
| ----: | ------: | ------------------------ | ----------------------------------------------- |
| 91.2% |      31 | `primop addErrorContext` | `lib/modules.nix:1147:15`                       |
|  2.9% |       1 | `(anonymous)`            | `lib/attrsets.nix:1937:9`                       |
|  2.9% |       1 | `(anonymous)`            | `nixos/modules/services/x11/xserver.nix:213:34` |
|  2.9% |       1 | `(anonymous)`            | `lib/types.nix:743:26`                          |

##### `applyModuleArgs` (`lib/modules.nix:705:56`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      31 | `applyModuleArgsIfFunction` | `lib/modules.nix:450:13` |

##### `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |      26 | `primop toString` | `pkgs/build-support/rust/import-cargo-lock.nix:318:28` |

##### `primop functionArgs` (`lib/trivial.nix:1109:86`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      22 | `(anonymous)` | `lib/customisation.nix:310:15` |

##### `(anonymous)` (`pkgs/build-support/buildenv/default.nix:113:30`)

|     % | Samples | Caller                                       | Location                                       |
| ----: | ------: | -------------------------------------------- | ---------------------------------------------- |
| 90.0% |      18 | `primop derivationStrict:system-path`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       2 | `primop derivationStrict:asciidoctor-2.0.26` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`pkgs/development/interpreters/python/mk-python-derivation.nix:400:9`)

|     % | Samples | Caller                                               | Location                                       |
| ----: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
| 23.1% |       3 | `primop derivationStrict:python3.13-pygments-2.20.0` | `«nix-internal»/derivation-internal.nix:37:12` |
|  7.7% |       1 | `primop derivationStrict:python3.13-gevent-25.9.1`   | `«nix-internal»/derivation-internal.nix:37:12` |
|  7.7% |       1 | `primop derivationStrict:meson-1.10.2`               | `«nix-internal»/derivation-internal.nix:37:12` |
|  7.7% |       1 | `primop derivationStrict:asciidoc-10.2.1`            | `«nix-internal»/derivation-internal.nix:37:12` |
|  7.7% |       1 | `primop derivationStrict:python3.13-babel-2.17.0`    | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`pkgs/development/haskell-modules/generic-builder.nix:686:11`)

|    % | Samples | Caller                                              | Location                                       |
| ---: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| 9.1% |       1 | `primop derivationStrict:hspec-expectations-0.8.4`  | `«nix-internal»/derivation-internal.nix:37:12` |
| 9.1% |       1 | `primop derivationStrict:base16-bytestring-1.0.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 9.1% |       1 | `primop derivationStrict:xml-1.3.14`                | `«nix-internal»/derivation-internal.nix:37:12` |
| 9.1% |       1 | `primop derivationStrict:generically-0.1.1`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 9.1% |       1 | `primop derivationStrict:ChasingBottoms-1.3.1.17`   | `«nix-internal»/derivation-internal.nix:37:12` |

##### `makeMesonFlags` (`pkgs/stdenv/generic/make-derivation.nix:971:24`)

|     % | Samples | Caller                                                             | Location                                       |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------- |
| 10.0% |       1 | `primop derivationStrict:python-runtime-deps-check-hook.sh`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:pkg-config-wrapper-0.29.2`                | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:qtbase-6.11.1`                            | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:spirv-tools-1.4.341.0`                    | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:update-autotools-gnu-config-scripts-hook` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop dirOf` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`)

|     % | Samples | Caller                                            | Location                                       |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 11.1% |       1 | `primop derivationStrict:__getdirentries-builder` | `«nix-internal»/derivation-internal.nix:37:12` |
| 11.1% |       1 | `primop derivationStrict:setenv-builder`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 11.1% |       1 | `primop derivationStrict:__init_io-builder`       | `«nix-internal»/derivation-internal.nix:37:12` |
| 11.1% |       1 | `primop derivationStrict:libc.a-builder`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 11.1% |       1 | `primop derivationStrict:putchar-builder`         | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`lib/lists.nix:1939:20`)

|      % | Samples | Caller          | Location                                                              |
| -----: | ------: | --------------- | --------------------------------------------------------------------- |
| 100.0% |       9 | `primop foldl'` | `pkgs/development/interpreters/python/python-packages-base.nix:140:5` |

##### `filter` (`nixos/modules/misc/documentation.nix:126:13`)

|      % | Samples | Caller        | Location                                      |
| -----: | ------: | ------------- | --------------------------------------------- |
| 100.0% |       9 | `primop path` | `nixos/modules/misc/documentation.nix:122:27` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:983:18`)

|     % | Samples | Caller                                                      | Location                                                              |
| ----: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| 12.5% |       1 | `primop derivationStrict:asciidoc-10.2.1`                   | `«nix-internal»/derivation-internal.nix:37:12`                        |
| 12.5% |       1 | `(anonymous)`                                               | `pkgs/development/libraries/gobject-introspection/wrapper.nix:110:31` |
| 12.5% |       1 | `primop derivationStrict:python3.13-setuptools-rust-1.12.0` | `«nix-internal»/derivation-internal.nix:37:12`                        |
| 12.5% |       1 | `primop derivationStrict:tasty-golden-2.3.6`                | `«nix-internal»/derivation-internal.nix:37:12`                        |
| 12.5% |       1 | `primop derivationStrict:either-1.15.0`                     | `«nix-internal»/derivation-internal.nix:37:12`                        |

##### `getRes` (`pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`)

|      % | Samples | Caller                    | Location                |
| -----: | ------: | ------------------------- | ----------------------- |
| 100.0% |       7 | `primop concatStringsSep` | `lib/strings.nix:262:5` |

##### `binaryMerge` (`lib/attrsets.nix:1628:11`)

|     % | Samples | Caller        | Location                   |
| ----: | ------: | ------------- | -------------------------- |
| 71.4% |       5 | `binaryMerge` | `lib/attrsets.nix:1628:11` |
| 28.6% |       2 | `binaryMerge` | `lib/attrsets.nix:1628:52` |

##### `(anonymous)` (`lib/attrsets.nix:667:53`)

|      % | Samples | Caller          | Location                  |
| -----: | ------: | --------------- | ------------------------- |
| 100.0% |       6 | `primop filter` | `lib/attrsets.nix:667:45` |

##### `makeOutputChecks` (`pkgs/stdenv/generic/make-derivation.nix:867:35`)

|     % | Samples | Caller                                             | Location                                       |
| ----: | ------: | -------------------------------------------------- | ---------------------------------------------- |
| 16.7% |       1 | `primop derivationStrict:patch-ev.c`               | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:pkg-config-0.29.2.tar.gz` | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:nginx.conf`               | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:docbook-xml-4.4.zip`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:lazy-options.json`        | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop map` (`pkgs/stdenv/generic/make-derivation.nix:631:13`)

|     % | Samples | Caller                                                 | Location                                       |
| ----: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| 20.0% |       1 | `primop derivationStrict:bison-3.8.2`                  | `«nix-internal»/derivation-internal.nix:37:12` |
| 20.0% |       1 | `primop derivationStrict:mpfr-4.2.2`                   | `«nix-internal»/derivation-internal.nix:37:12` |
| 20.0% |       1 | `primop derivationStrict:libavif-1.4.1`                | `«nix-internal»/derivation-internal.nix:37:12` |
| 20.0% |       1 | `primop derivationStrict:perl5.42.0-DBD-SQLite-1.74`   | `«nix-internal»/derivation-internal.nix:37:12` |
| 20.0% |       1 | `primop derivationStrict:perl5.42.0-File-BaseDir-0.09` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`lib/modules.nix:537:34`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |       4 | `primop concatLists` | `lib/modules.nix:527:24` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|     % | Samples | Caller                                                 | Location                                       |
| ----: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| 25.0% |       1 | `primop derivationStrict:libedit-20251016-3.1`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:gnu-config-2024-01-01`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:postgresql-and-plugins-16.14` | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:system-path`                  | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop elemAt` (`lib/lists.nix:141:48`)

|      % | Samples | Caller              | Location                      |
| -----: | ------: | ------------------- | ----------------------------- |
| 100.0% |       4 | `composeExtensions` | `lib/fixed-points.nix:346:17` |

##### `primop all` (`lib/modules.nix:1253:17`)

|      % | Samples | Caller                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |       4 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop mapAttrs` (`pkgs/stdenv/generic/make-derivation.nix:1006:9`)

|      % | Samples | Caller        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       4 | `(anonymous)` | `pkgs/stdenv/generic/make-derivation.nix:1071:8` |

##### `primop toString` (`pkgs/development/haskell-modules/generic-builder.nix:698:49`)

|     % | Samples | Caller                                                  | Location                                       |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------- |
| 25.0% |       1 | `primop derivationStrict:ansi-wl-pprint-1.0.2`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:optparse-applicative-0.18.1.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:network-uri-2.6.4.2`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:singleton-bool-0.1.8`          | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop mapAttrs` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`)

|      % | Samples | Caller                                                   | Location                                       |
| -----: | ------: | -------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       3 | `primop derivationStrict:minimal-bootstrap-test-builder` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop any` (`pkgs/stdenv/generic/make-derivation.nix:519:7`)

|      % | Samples | Caller                   | Location                                         |
| -----: | ------: | ------------------------ | ------------------------------------------------ |
| 100.0% |       3 | `makeDerivationArgument` | `pkgs/stdenv/generic/make-derivation.nix:966:23` |

##### `primop isList` (`pkgs/build-support/trivial-builders/default.nix:566:21`)

|      % | Samples | Caller        | Location                                                 |
| -----: | ------: | ------------- | -------------------------------------------------------- |
| 100.0% |       3 | `(anonymous)` | `pkgs/build-support/trivial-builders/default.nix:563:13` |

##### `primop map` (`lib/modules.nix:1426:18`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       3 | `primop any` | `lib/modules.nix:1209:14` |

##### `primop any` (`lib/modules.nix:1209:14`)

|     % | Samples | Caller                   | Location                  |
| ----: | ------: | ------------------------ | ------------------------- |
| 50.0% |       1 | `primop addErrorContext` | `lib/modules.nix:1147:15` |
| 50.0% |       1 | `(anonymous)`            | `lib/asserts.nix:195:54`  |

##### `primop removeAttrs` (`pkgs/stdenv/generic/make-derivation.nix:650:25`)

|      % | Samples | Caller                   | Location                                         |
| -----: | ------: | ------------------------ | ------------------------------------------------ |
| 100.0% |       2 | `makeDerivationArgument` | `pkgs/stdenv/generic/make-derivation.nix:966:23` |

##### `primop import` (`pkgs/stdenv/generic/make-derivation.nix:199:12`)

|     % | Samples | Caller                                             | Location                                       |
| ----: | ------: | -------------------------------------------------- | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:libxml2-2.15.3`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop head` (`«nix-internal»/derivation-internal.nix:60:2`)

|     % | Samples | Caller        | Location                                                   |
| ----: | ------: | ------------- | ---------------------------------------------------------- |
| 50.0% |       1 | `(anonymous)` | `pkgs/stdenv/generic/make-derivation.nix:1071:8`           |
| 50.0% |       1 | `(anonymous)` | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:28:17` |

##### `primop length` (`lib/modules.nix:886:34`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       2 | `(anonymous)` | `lib/modules.nix:925:40` |

##### `primop concatMap` (`lib/modules.nix:1434:18`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       2 | `primop any` | `lib/modules.nix:1209:14` |

##### `primop lessThan` (`lib/strings.nix:2910:28`)

|      % | Samples | Caller        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       2 | `(anonymous)` | `pkgs/stdenv/generic/make-derivation.nix:682:13` |

##### `primop concatMap` (`lib/modules.nix:495:26`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       1 | `primop elem` | `lib/modules.nix:497:27` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                   | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 92.3% |     899 | `primop addErrorContext`   | `lib/modules.nix:1147:15`                             |
| 92.3% |     899 | `(anonymous)`              | `lib/attrsets.nix:1193:85`                            |
| 91.1% |     887 | `primop getAttr`           | `«nix-internal»/derivation-internal.nix:50:17`        |
| 87.4% |     851 | `(anonymous)`              | `<unknown>`                                           |
| 80.3% |     782 | `primop isAttrs`           | `lib/modules.nix:1228:15`                             |
| 80.3% |     782 | `primop addErrorContext`   | `lib/modules.nix:1227:11`                             |
| 77.9% |     759 | `primop head`              | `lib/attrsets.nix:1719:13`                            |
| 77.8% |     758 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| 77.8% |     758 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| 60.4% |     588 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| 60.3% |     587 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| 60.3% |     587 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| 47.4% |     462 | `primop removeAttrs`       | `lib/attrsets.nix:667:28`                             |
| 47.2% |     460 | `primop filter`            | `lib/attrsets.nix:667:45`                             |
| 47.1% |     459 | `(anonymous)`              | `lib/attrsets.nix:667:53`                             |
| 46.6% |     454 | `(anonymous)`              | `lib/attrsets.nix:667:60`                             |
| 46.6% |     454 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| 46.6% |     454 | `primop mapAttrs`          | `lib/types.nix:1025:21`                               |
| 41.7% |     406 | `mkDerivationSimple`       | `pkgs/stdenv/generic/make-derivation.nix:308:22`      |
| 41.7% |     406 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 92.3% |     899 | `(anonymous)`              | `lib/attrsets.nix:1193:85`                            |
| 77.8% |     758 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| 77.8% |     758 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| 60.4% |     588 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| 60.3% |     587 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| 60.3% |     587 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| 47.1% |     459 | `(anonymous)`              | `lib/attrsets.nix:667:53`                             |
| 46.6% |     454 | `(anonymous)`              | `lib/attrsets.nix:667:60`                             |
| 46.6% |     454 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| 41.7% |     406 | `mkDerivationSimple`       | `pkgs/stdenv/generic/make-derivation.nix:308:22`      |
| 41.7% |     406 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |
| 39.8% |     388 | `(anonymous)`              | `lib/trivial.nix:1211:22`                             |
| 39.8% |     388 | `toFunction`               | `pkgs/stdenv/generic/make-derivation.nix:225:55`      |
| 39.7% |     387 | `filterAttrs`              | `nixos/modules/config/shells-environment.nix:94:11`   |
| 39.7% |     387 | `(anonymous)`              | `lib/modules.nix:1136:35`                             |
| 39.7% |     387 | `(anonymous)`              | `nixos/modules/system/activation/top-level.nix:71:8`  |
| 39.7% |     387 | `mkDerivation`             | `nixos/modules/system/activation/top-level.nix:58:16` |
| 39.6% |     386 | `(anonymous)`              | `nixos/modules/services/x11/xserver.nix:968:13`       |
| 39.6% |     386 | `optionalString`           | `nixos/modules/services/x11/xserver.nix:967:13`       |
| 34.9% |     340 | `dischargeProperties`      | `lib/modules.nix:1200:80`                             |

##### Native

|     % | Samples | Function                                | Location                                               |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------ |
| 92.3% |     899 | `primop addErrorContext`                | `lib/modules.nix:1147:15`                              |
| 91.1% |     887 | `primop getAttr`                        | `«nix-internal»/derivation-internal.nix:50:17`         |
| 80.3% |     782 | `primop isAttrs`                        | `lib/modules.nix:1228:15`                              |
| 80.3% |     782 | `primop addErrorContext`                | `lib/modules.nix:1227:11`                              |
| 77.9% |     759 | `primop head`                           | `lib/attrsets.nix:1719:13`                             |
| 47.4% |     462 | `primop removeAttrs`                    | `lib/attrsets.nix:667:28`                              |
| 47.2% |     460 | `primop filter`                         | `lib/attrsets.nix:667:45`                              |
| 46.6% |     454 | `primop mapAttrs`                       | `lib/types.nix:1025:21`                                |
| 41.3% |     402 | `primop any`                            | `lib/modules.nix:1209:14`                              |
| 39.8% |     388 | `primop isFunction`                     | `lib/trivial.nix:1131:8`                               |
| 39.7% |     387 | `primop mapAttrs`                       | `nixos/modules/config/shells-environment.nix:93:9`     |
| 39.7% |     387 | `primop concatStringsSep`               | `nixos/modules/system/activation/top-level.nix:376:22` |
| 39.6% |     386 | `primop derivationStrict:xkb-validated` | `«nix-internal»/derivation-internal.nix:37:12`         |
| 39.5% |     385 | `primop derivationStrict:system-path`   | `«nix-internal»/derivation-internal.nix:37:12`         |
| 34.9% |     340 | `primop addErrorContext`                | `lib/modules.nix:1200:14`                              |
| 34.9% |     340 | `primop map`                            | `lib/modules.nix:1191:11`                              |
| 34.9% |     340 | `primop concatMap`                      | `lib/modules.nix:1189:26`                              |
| 34.9% |     340 | `primop length`                         | `lib/modules.nix:1424:8`                               |
| 22.8% |     222 | `primop all`                            | `lib/modules.nix:1253:17`                              |
| 20.6% |     201 | `primop length`                         | `lib/lists.nix:140:13`                                 |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 87.4% |     851 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `primop addErrorContext` (`lib/modules.nix:1147:15`)

|     % | Samples | Callee                   | Location                  |
| ----: | ------: | ------------------------ | ------------------------- |
| 86.4% |     777 | `primop addErrorContext` | `lib/modules.nix:1227:11` |
| 50.3% |     452 | `primop mapAttrs`        | `lib/types.nix:1025:21`   |
| 43.0% |     387 | `(anonymous)`            | `lib/modules.nix:1136:35` |
| 40.9% |     368 | `primop any`             | `lib/modules.nix:1209:14` |
| 19.7% |     177 | `primop all`             | `lib/modules.nix:1253:17` |

##### `(anonymous)` (`lib/attrsets.nix:1193:85`)

|      % | Samples | Callee                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |     899 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|     % | Samples | Callee                                     | Location                                       |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------- |
| 43.5% |     386 | `primop derivationStrict:xkb-validated`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 43.4% |     385 | `primop derivationStrict:system-path`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 13.2% |     117 | `primop derivationStrict:etc`              | `«nix-internal»/derivation-internal.nix:37:12` |
| 12.7% |     113 | `primop derivationStrict:gnome-shell-50.2` | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.1% |      90 | `primop derivationStrict:ibus-1.5.33`      | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|     % | Samples | Callee               | Location                                                |
| ----: | ------: | -------------------- | ------------------------------------------------------- |
| 90.0% |     766 | `(anonymous)`        | `lib/attrsets.nix:1193:85`                              |
| 16.6% |     141 | `primop concatLists` | `nixos/modules/system/boot/systemd.nix:555:11`          |
|  4.9% |      42 | `optional`           | `nixos/modules/system/boot/systemd/tmpfiles.nix:218:15` |
|  4.7% |      40 | `primop map`         | `lib/modules.nix:947:15`                                |
|  4.5% |      38 | `primop concatLists` | `lib/modules.nix:944:11`                                |

##### `primop isAttrs` (`lib/modules.nix:1228:15`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 96.9% |     758 | `checkAssertWarn`         | `nixos/modules/system/activation/top-level.nix:78:26`  |
| 51.4% |     402 | `primop getAttr`          | `«nix-internal»/derivation-internal.nix:50:17`         |
| 49.5% |     387 | `primop concatStringsSep` | `nixos/modules/system/activation/top-level.nix:376:22` |
| 12.7% |      99 | `primop elemAt`           | `lib/lists.nix:350:43`                                 |
|  5.6% |      44 | `makeJobScript`           | `nixos/lib/systemd-unit-options.nix:498:24`            |

##### `primop addErrorContext` (`lib/modules.nix:1227:11`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     782 | `primop isAttrs` | `lib/modules.nix:1228:15` |

##### `primop head` (`lib/attrsets.nix:1719:13`)

|      % | Samples | Callee        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |     759 | `(anonymous)` | `<unknown>` |

##### `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`)

|     % | Samples | Callee         | Location                 |
| ----: | ------: | -------------- | ------------------------ |
| 77.4% |     587 | `showWarnings` | `lib/asserts.nix:200:7`  |
| 22.6% |     171 | `primop map`   | `lib/asserts.nix:195:26` |

##### `(anonymous)` (`nixos/default.nix:21:12`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     758 | `primop head` | `lib/attrsets.nix:1719:13` |

##### `fold'` (`lib/lists.nix:143:5`)

|     % | Samples | Callee          | Location                                              |
| ----: | ------: | --------------- | ----------------------------------------------------- |
| 65.8% |     387 | `mkDerivation`  | `nixos/modules/system/activation/top-level.nix:58:16` |
| 34.2% |     201 | `primop length` | `lib/lists.nix:140:13`                                |

##### `foldr` (`lib/trivial.nix:1051:33`)

|      % | Samples | Callee  | Location              |
| -----: | ------: | ------- | --------------------- |
| 100.0% |     587 | `fold'` | `lib/lists.nix:143:5` |

##### `showWarnings` (`lib/asserts.nix:200:7`)

|      % | Samples | Callee  | Location                  |
| -----: | ------: | ------- | ------------------------- |
| 100.0% |     587 | `foldr` | `lib/trivial.nix:1051:33` |

##### `primop removeAttrs` (`lib/attrsets.nix:667:28`)

|     % | Samples | Callee               | Location                                                       |
| ----: | ------: | -------------------- | -------------------------------------------------------------- |
| 99.6% |     460 | `primop filter`      | `lib/attrsets.nix:667:45`                                      |
| 83.8% |     387 | `primop mapAttrs`    | `lib/types.nix:1025:21`                                        |
|  0.4% |       2 | `(anonymous)`        | `nixos/modules/services/desktops/pipewire/pipewire.nix:378:91` |
|  0.2% |       1 | `(anonymous)`        | `nixos/modules/services/databases/postgresql.nix:60:86`        |
|  0.2% |       1 | `primop removeAttrs` | `nixos/modules/system/boot/systemd.nix:652:24`                 |

##### `primop filter` (`lib/attrsets.nix:667:45`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 99.8% |     459 | `(anonymous)` | `lib/attrsets.nix:667:53` |

##### `(anonymous)` (`lib/attrsets.nix:667:53`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 98.9% |     454 | `(anonymous)` | `lib/attrsets.nix:667:60` |

##### `(anonymous)` (`lib/attrsets.nix:667:60`)

|     % | Samples | Callee                   | Location                           |
| ----: | ------: | ------------------------ | ---------------------------------- |
| 98.0% |     445 | `primop addErrorContext` | `lib/modules.nix:1227:11`          |
|  0.9% |       4 | `(anonymous)`            | `lib/attrsets.nix:667:70`          |
|  0.9% |       4 | `primop any`             | `lib/modules.nix:1209:14`          |
|  0.2% |       1 | `attrByPath`             | `nixos/lib/systemd-lib.nix:466:24` |

##### `filterAttrs` (`lib/types.nix:1019:17`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |     454 | `primop removeAttrs` | `lib/attrsets.nix:667:28` |

##### `primop mapAttrs` (`lib/types.nix:1025:21`)

|      % | Samples | Callee        | Location                |
| -----: | ------: | ------------- | ----------------------- |
| 100.0% |     454 | `filterAttrs` | `lib/types.nix:1019:17` |

##### `mkDerivationSimple` (`pkgs/stdenv/generic/make-derivation.nix:308:22`)

|     % | Samples | Callee             | Location                                         |
| ----: | ------: | ------------------ | ------------------------------------------------ |
| 95.6% |     388 | `toFunction`       | `pkgs/stdenv/generic/make-derivation.nix:225:55` |
|  6.7% |      27 | `extendDerivation` | `pkgs/stdenv/generic/make-derivation.nix:1015:5` |
|  0.5% |       2 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:236:14` |

##### `makeDerivationExtensible` (`pkgs/stdenv/generic/make-derivation.nix:225:29`)

|      % | Samples | Callee               | Location                                         |
| -----: | ------: | -------------------- | ------------------------------------------------ |
| 100.0% |     406 | `mkDerivationSimple` | `pkgs/stdenv/generic/make-derivation.nix:308:22` |

##### `primop any` (`lib/modules.nix:1209:14`)

|     % | Samples | Callee             | Location                  |
| ----: | ------: | ------------------ | ------------------------- |
| 84.6% |     340 | `(anonymous)`      | `lib/modules.nix:1204:24` |
| 16.9% |      68 | `(anonymous)`      | `lib/modules.nix:1209:19` |
|  0.7% |       3 | `primop concatMap` | `lib/modules.nix:1434:18` |
|  0.7% |       3 | `primop map`       | `lib/modules.nix:1426:18` |

##### `(anonymous)` (`lib/trivial.nix:1211:22`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |     388 | `primop isFunction` | `lib/trivial.nix:1131:8` |

##### `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     388 | `(anonymous)` | `lib/trivial.nix:1211:22` |

##### `primop isFunction` (`lib/trivial.nix:1131:8`)

|     % | Samples | Callee          | Location                                                      |
| ----: | ------: | --------------- | ------------------------------------------------------------- |
| 99.7% |     387 | `(anonymous)`   | `nixos/modules/system/activation/top-level.nix:71:8`          |
|  0.3% |       1 | `optionalAttrs` | `pkgs/development/haskell-modules/generic-builder.nix:1115:8` |

##### `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |     387 | `primop removeAttrs` | `lib/attrsets.nix:667:28` |

##### `(anonymous)` (`lib/modules.nix:1136:35`)

|      % | Samples | Callee            | Location                                           |
| -----: | ------: | ----------------- | -------------------------------------------------- |
| 100.0% |     387 | `primop mapAttrs` | `nixos/modules/config/shells-environment.nix:93:9` |

##### `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     387 | `(anonymous)` | `lib/attrsets.nix:1193:85` |

##### `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`)

|      % | Samples | Callee                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |     387 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29` |

##### `primop mapAttrs` (`nixos/modules/config/shells-environment.nix:93:9`)

|      % | Samples | Callee        | Location                                            |
| -----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% |     387 | `filterAttrs` | `nixos/modules/config/shells-environment.nix:94:11` |

##### `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`)

|     % | Samples | Callee           | Location                                       |
| ----: | ------: | ---------------- | ---------------------------------------------- |
| 99.7% |     386 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |
|  0.3% |       1 | `(anonymous)`    | `lib/types.nix:743:26`                         |

##### `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     386 | `(anonymous)` | `lib/attrsets.nix:1193:85` |

##### `optionalString` (`nixos/modules/services/x11/xserver.nix:967:13`)

|      % | Samples | Callee        | Location                                        |
| -----: | ------: | ------------- | ----------------------------------------------- |
| 100.0% |     386 | `(anonymous)` | `nixos/modules/services/x11/xserver.nix:968:13` |

##### `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`)

|      % | Samples | Callee           | Location                                        |
| -----: | ------: | ---------------- | ----------------------------------------------- |
| 100.0% |     386 | `optionalString` | `nixos/modules/services/x11/xserver.nix:967:13` |

##### `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`)

|     % | Samples | Callee           | Location                                         |
| ----: | ------: | ---------------- | ------------------------------------------------ |
| 71.2% |     274 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`   |
| 23.9% |      92 | `primop map`     | `pkgs/build-support/buildenv/default.nix:113:25` |
|  4.7% |      18 | `(anonymous)`    | `pkgs/build-support/buildenv/default.nix:113:30` |
|  0.3% |       1 | `(anonymous)`    | `pkgs/build-support/buildenv/default.nix:114:11` |

##### `dischargeProperties` (`lib/modules.nix:1200:80`)

|     % | Samples | Callee                | Location                                                |
| ----: | ------: | --------------------- | ------------------------------------------------------- |
| 49.1% |     167 | `primop isBool`       | `lib/modules.nix:1380:10`                               |
| 41.5% |     141 | `primop concatLists`  | `nixos/modules/system/boot/systemd.nix:547:7`           |
| 31.8% |     108 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`          |
| 16.5% |      56 | `dischargeProperties` | `lib/modules.nix:1381:31`                               |
| 12.4% |      42 | `flatten`             | `nixos/modules/system/boot/systemd/tmpfiles.nix:211:11` |

##### `primop addErrorContext` (`lib/modules.nix:1200:14`)

|      % | Samples | Callee                | Location                  |
| -----: | ------: | --------------------- | ------------------------- |
| 100.0% |     340 | `dischargeProperties` | `lib/modules.nix:1200:80` |

##### `primop map` (`lib/modules.nix:1191:11`)

|      % | Samples | Callee                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |     340 | `primop addErrorContext` | `lib/modules.nix:1200:14` |

##### `primop concatMap` (`lib/modules.nix:1189:26`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     340 | `(anonymous)` | `lib/modules.nix:1190:11` |

##### `primop length` (`lib/modules.nix:1424:8`)

|      % | Samples | Callee             | Location                  |
| -----: | ------: | ------------------ | ------------------------- |
| 100.0% |     340 | `primop concatMap` | `lib/modules.nix:1189:26` |

##### `primop all` (`lib/modules.nix:1253:17`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 99.1% |     220 | `(anonymous)` | `lib/modules.nix:1253:22` |

##### `primop length` (`lib/lists.nix:140:13`)

|     % | Samples | Callee             | Location                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------- |
| 99.5% |     200 | `(anonymous)`      | `nixos/modules/system/activation/top-level.nix:78:72` |
|  0.5% |       1 | `primop attrNames` | `nixos/modules/config/users-groups.nix:616:8`         |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0% |      29 | `mergeEqualOption` (`lib/modules.nix:1254:11`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/etc/etc.nix:61:16`) ← `primop toString` (`lib/strings.nix:1220:16`) ← `primop match` (1222:8) ← `escapeShellArg` (1218:5) ← `primop concatStringsSep` (262:5) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:58:11`) ← `(anonymous)` (57:11) ← `primop concatStringsSep` (`lib/strings.nix:262:5`) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:56:11`) ← `primop derivationStrict:etc` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (37:12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.8% |      27 | `applyModuleArgs` (`lib/modules.nix:705:56`) ← `applyModuleArgsIfFunction` (450:13) ← `unifyModuleSyntax` (449:11) ← `loadModule` (536:37) ← `(anonymous)` (536:24) ← `primop concatLists` (527:24) ← `primop concatMap` (495:26) ← `primop elem` (497:27) ← `isDisabled` (568:39) ← `(anonymous)` (568:31) ← `primop filter` (571:22) ← `primop genericClosure` (570:36) ← `primop map` (570:9) ← `filterModules` (591:17) ← `primop length` (`lib/lists.nix:1129:19`) ← `primop sub` (1129:29) ← `primop genList` (1131:5) ← `reverseList` (`lib/modules.nix:275:37`) ← `primop map` (790:9) ← `primop zipAttrsWith` (789:21) ← `primop mapAttrs` (873:23) ← `primop mapAttrs` (925:24) ← `recurse` (`lib/attrsets.nix:1196:5`) ← `mapAttrsRecursiveCond` (`lib/modules.nix:283:28`) ← `primop seq` (402:18)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.0% |      19 | `(anonymous)` ← `primop toString` (`nixos/lib/systemd-lib.nix:463:11`) ← `primop derivationStrict:system-units` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/etc/etc.nix:61:16`) ← `primop toString` (`lib/strings.nix:1220:16`) ← `primop match` (1222:8) ← `escapeShellArg` (1218:5) ← `primop concatStringsSep` (262:5) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:58:11`) ← `(anonymous)` (57:11) ← `primop concatStringsSep` (`lib/strings.nix:262:5`) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:56:11`) ← `primop derivationStrict:etc` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (37:12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |      18 | `(anonymous)` (`pkgs/build-support/buildenv/default.nix:113:30`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:667:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.6% |      16 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:prefetch-npm-deps-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:npm-config-hook` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:furo-web-2025.12.19` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-furo-2025.12.19` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-pyproject-api-1.10.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-tox-4.34.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-jaraco-envs-2.6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-distutils-80.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:scons-4.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:roc-toolkit-0.4.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pipewire-1.6.5` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:350:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:667:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`) |
| 0.9% |       9 | `filter` (`nixos/modules/misc/documentation.nix:126:13`) ← `primop path` (122:27) ← `primop derivationStrict:lazy-options.json` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:options.json` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-configuration-reference-manpage` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:667:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |       7 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:350:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:667:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       6 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:pandoc-3.7.0.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:pandoc-cli-3.7.0.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nuspell-5.1.7` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:enchant-2.6.9` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:evolution-data-server-3.60.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gnome-shell-50.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:667:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |       5 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:switch-to-configuration-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`nixos/modules/system/activation/switchable-system.nix:54:20`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/activatable-system.nix:82:73`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:43:7`) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (`«nix-internal»/derivation-internal.nix:37:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |       4 | `(anonymous)` ← `primop toString` (`nixos/lib/systemd-lib.nix:463:11`) ← `primop derivationStrict:initrd-units` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`lib/modules.nix:849:21`) ← `primop isAttrs` (1228:15) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop toJSON` (`pkgs/build-support/kernel/make-initrd-ng.nix:80:18`) ← `primop derivationStrict:initrd-linux-6.18.37` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `optionalString` (`nixos/modules/system/boot/kernel.nix:411:13`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:43:7`) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (`«nix-internal»/derivation-internal.nix:37:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |       3 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-init-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`lib/strings.nix:612:5`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/initrd.nix:706:15`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:497:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/initrd.nix:125:30`) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd/initrd.nix:124:16`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:199:35`) ← `primop map` (199:11) ← `primop filter` (198:17) ← `primop length` (202:21) ← `primop lessThan` (202:38) ← `optional` (202:7) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:xvfb-21.1.23` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:libxkbcommon-1.13.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk+3-3.24.52` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qtbase-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qt5compat-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:v4l-utils-1.32.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:libdisplay-info-0.3.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:mesa-26.1.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:graphics-drivers` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`nixos/modules/hardware/graphics.nix:134:44`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:218:73`) ← `primop match` (218:29) ← `optional` (218:15) ← `(anonymous)` ← `primop isList` (`lib/lists.nix:448:19`) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (`nixos/modules/system/boot/systemd/tmpfiles.nix:211:11`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:pipewire-1.6.5` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:350:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:667:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:quickcheck-instances-0.3.33` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:aeson-2.2.4.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ShellCheck-0.11.0` (37:12) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`pkgs/build-support/trivial-builders/default.nix:330:15`) ← `optionalString` (327:31) ← `primop derivationStrict:unit-script-wpa_supplicant-start` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`nixos/lib/systemd-lib.nix:587:5`) ← `makeJobScript` (`nixos/lib/systemd-unit-options.nix:498:24`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:551:20`) ← `optional` (556:14) ← `primop concatLists` (555:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:547:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |       2 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:nginx-1.30.3` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:489:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18`) ← `svcUser` (20:5) ← `(anonymous)` (19:5) ← `primop all` (18:15) ← `(anonymous)` (`lib/asserts.nix:195:54`) ← `primop filter` (195:46) ← `primop map` (195:26) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |       2 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:xauth-1.1.5` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`nixos/modules/services/networking/ssh/sshd.nix:903:66`) ← `primop concatStringsSep` (894:9) ← `primop isString` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/services/networking/ssh/sshd.nix:944:168`) ← `primop match` (944:14) ← `(anonymous)` (`lib/asserts.nix:195:54`) ← `primop filter` (195:46) ← `primop map` (195:26) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |       2 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:gtk+3-3.24.52` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:qtbase-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qt5compat-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:v4l-utils-1.32.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:libdisplay-info-0.3.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:mesa-26.1.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:graphics-drivers` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`nixos/modules/hardware/graphics.nix:134:44`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:218:73`) ← `primop match` (218:29) ← `optional` (218:15) ← `(anonymous)` ← `primop isList` (`lib/lists.nix:448:19`) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (`nixos/modules/system/boot/systemd/tmpfiles.nix:211:11`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |       2 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:qtbase-6.11.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:qttools-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qttranslations-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qtbase-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qt5compat-6.11.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:v4l-utils-1.32.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:libdisplay-info-0.3.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:mesa-26.1.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:graphics-drivers` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`nixos/modules/hardware/graphics.nix:134:44`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:218:73`) ← `primop match` (218:29) ← `optional` (218:15) ← `(anonymous)` ← `primop isList` (`lib/lists.nix:448:19`) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (448:13) ← `primop concatMap` (448:33) ← `flatten` (`nixos/modules/system/boot/systemd/tmpfiles.nix:211:11`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |       2 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:make-initrd-ng-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:667:60`) ← `(anonymous)` (667:53) ← `primop filter` (667:45) ← `primop removeAttrs` (667:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:551:20`) ← `optional` (556:14) ← `primop concatLists` (555:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:547:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |       2 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:563:18`) ← `primop derivationStrict:nix-functional-tests-2.34.7` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nix-2.34.7` (37:12) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:497:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:551:20`) ← `optional` (556:14) ← `primop concatLists` (555:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:547:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1193:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1719:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
