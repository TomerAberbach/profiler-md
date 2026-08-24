# Sampling profile

Collected 1,047 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 80.8% |     846 |
| Native           | 16.0% |     167 |
| Unknown          |  2.4% |      25 |
| Standard library |  0.9% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function              | Location                                                          |
| ----: | ------: | --------------------- | ----------------------------------------------------------------- |
| 15.3% |     160 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:582:18`                  |
|  7.4% |      77 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:631:18`                  |
|  6.5% |      68 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                         |
|  4.7% |      49 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:563:18`                  |
|  4.4% |      46 | `applyModuleArgs`     | `lib/modules.nix:705:56`                                          |
|  3.2% |      33 | `makeCMakeFlags`      | `pkgs/stdenv/generic/make-derivation.nix:970:24`                  |
|  2.9% |      30 | `optionals`           | `pkgs/stdenv/generic/make-derivation.nix:542:26`                  |
|  2.4% |      25 | `(anonymous)`         | `<unknown>`                                                       |
|  2.3% |      24 | `(anonymous)`         | `pkgs/build-support/buildenv/default.nix:113:30`                  |
|  2.3% |      24 | `mergeEqualOption`    | `lib/modules.nix:1254:11`                                         |
|  1.8% |      19 | `filter`              | `nixos/modules/misc/documentation.nix:126:13`                     |
|  1.5% |      16 | `mkCrate`             | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`             |
|  1.2% |      13 | `makeMesonFlags`      | `pkgs/stdenv/generic/make-derivation.nix:971:24`                  |
|  1.0% |      10 | `primop dirOf`        | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`        |
|  1.0% |      10 | `optionalString`      | `pkgs/development/haskell-modules/generic-builder.nix:686:11`     |
|  0.9% |       9 | `binaryMerge`         | `lib/attrsets.nix:1623:11`                                        |
|  0.9% |       9 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:983:18`                  |
|  0.7% |       7 | `(anonymous)`         | `<nix/fetchurl.nix>:41:1`                                         |
|  0.7% |       7 | `getRes`              | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20` |
|  0.7% |       7 | `concatMapStringsSep` | `pkgs/development/haskell-modules/generic-builder.nix:865:13`     |

#### Categories

##### Ours

|     % | Samples | Function                     | Location                                                              |
| ----: | ------: | ---------------------------- | --------------------------------------------------------------------- |
| 15.3% |     160 | `(anonymous)`                | `pkgs/stdenv/generic/make-derivation.nix:582:18`                      |
|  7.4% |      77 | `(anonymous)`                | `pkgs/stdenv/generic/make-derivation.nix:631:18`                      |
|  4.7% |      49 | `(anonymous)`                | `pkgs/stdenv/generic/make-derivation.nix:563:18`                      |
|  4.4% |      46 | `applyModuleArgs`            | `lib/modules.nix:705:56`                                              |
|  3.2% |      33 | `makeCMakeFlags`             | `pkgs/stdenv/generic/make-derivation.nix:970:24`                      |
|  2.9% |      30 | `optionals`                  | `pkgs/stdenv/generic/make-derivation.nix:542:26`                      |
|  2.3% |      24 | `(anonymous)`                | `pkgs/build-support/buildenv/default.nix:113:30`                      |
|  2.3% |      24 | `mergeEqualOption`           | `lib/modules.nix:1254:11`                                             |
|  1.8% |      19 | `filter`                     | `nixos/modules/misc/documentation.nix:126:13`                         |
|  1.5% |      16 | `mkCrate`                    | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
|  1.2% |      13 | `makeMesonFlags`             | `pkgs/stdenv/generic/make-derivation.nix:971:24`                      |
|  1.0% |      10 | `optionalString`             | `pkgs/development/haskell-modules/generic-builder.nix:686:11`         |
|  0.9% |       9 | `binaryMerge`                | `lib/attrsets.nix:1623:11`                                            |
|  0.9% |       9 | `(anonymous)`                | `pkgs/stdenv/generic/make-derivation.nix:983:18`                      |
|  0.7% |       7 | `getRes`                     | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`     |
|  0.7% |       7 | `concatMapStringsSep`        | `pkgs/development/haskell-modules/generic-builder.nix:865:13`         |
|  0.5% |       5 | `extends`                    | `lib/fixed-points.nix:331:16`                                         |
|  0.5% |       5 | `(anonymous)`                | `lib/lists.nix:1901:20`                                               |
|  0.4% |       4 | `buildBootstrapPythonModule` | `pkgs/development/python-modules/bootstrap/build/default.nix:46:31`   |
|  0.4% |       4 | `optionalString`             | `pkgs/development/interpreters/python/mk-python-derivation.nix:400:9` |

##### Native

|    % | Samples | Function              | Location                                                      |
| ---: | ------: | --------------------- | ------------------------------------------------------------- |
| 6.5% |      68 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                     |
| 1.0% |      10 | `primop dirOf`        | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`    |
| 0.6% |       6 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`                |
| 0.5% |       5 | `primop length`       | `lib/modules.nix:886:34`                                      |
| 0.4% |       4 | `primop mapAttrs`     | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`    |
| 0.4% |       4 | `primop mapAttrs`     | `pkgs/stdenv/generic/make-derivation.nix:1006:9`              |
| 0.3% |       3 | `primop length`       | `lib/modules.nix:1222:9`                                      |
| 0.3% |       3 | `primop all`          | `lib/modules.nix:1253:17`                                     |
| 0.3% |       3 | `primop map`          | `pkgs/stdenv/generic/make-derivation.nix:631:13`              |
| 0.2% |       2 | `primop listToAttrs`  | `lib/customisation.nix:404:12`                                |
| 0.2% |       2 | `primop import`       | `pkgs/stdenv/generic/make-derivation.nix:199:12`              |
| 0.2% |       2 | `primop concatMap`    | `lib/modules.nix:1434:18`                                     |
| 0.2% |       2 | `primop seq`          | `lib/modules.nix:378:17`                                      |
| 0.2% |       2 | `primop removeAttrs`  | `pkgs/stdenv/generic/make-derivation.nix:650:25`              |
| 0.2% |       2 | `primop toString`     | `pkgs/development/haskell-modules/generic-builder.nix:698:49` |
| 0.2% |       2 | `primop head`         | `pkgs/build-support/fetchurl/default.nix:318:50`              |
| 0.2% |       2 | `primop map`          | `lib/modules.nix:1426:18`                                     |
| 0.1% |       1 | `primop concatLists`  | `lib/modules.nix:527:24`                                      |
| 0.1% |       1 | `primop toString`     | `lib/modules.nix:676:17`                                      |
| 0.1% |       1 | `primop map`          | `lib/modules.nix:947:15`                                      |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 2.4% |      25 | `(anonymous)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`)

|    % | Samples | Caller                                             | Location                                       |
| ---: | ------: | -------------------------------------------------- | ---------------------------------------------- |
| 5.0% |       8 | `primop derivationStrict:ffmpeg-headless-8.1`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.4% |       7 | `primop derivationStrict:gst-plugins-bad-1.26.11`  | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.8% |       6 | `primop derivationStrict:pipewire-1.6.5`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.1% |       5 | `primop derivationStrict:gnome-shell-50.1`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.5% |       4 | `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`)

|    % | Samples | Caller                                                 | Location                                       |
| ---: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| 5.2% |       4 | `primop derivationStrict:pandoc-3.7.0.2`               | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.9% |       3 | `primop derivationStrict:qtbase-6.11.0`                | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.9% |       3 | `primop derivationStrict:python3.13-jaraco-text-4.0.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.9% |       3 | `primop derivationStrict:lens-5.3.6`                   | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.9% |       3 | `primop derivationStrict:pandoc-lua-engine-0.4.3`      | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop functionArgs` (`lib/trivial.nix:1109:86`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      68 | `(anonymous)` | `lib/customisation.nix:310:15` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:563:18`)

|    % | Samples | Caller                                               | Location                                       |
| ---: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
| 8.2% |       4 | `primop derivationStrict:python3.13-installer-1.0.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 6.1% |       3 | `primop derivationStrict:python3.13-mypy-1.20.1`     | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.1% |       2 | `primop derivationStrict:python3.13-sphinx-9.1.0`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.1% |       2 | `primop derivationStrict:furo-web-2025.12.19`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.1% |       2 | `primop derivationStrict:python3.13-cattrs-25.3.0`   | `«nix-internal»/derivation-internal.nix:37:12` |

##### `applyModuleArgs` (`lib/modules.nix:705:56`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      46 | `applyModuleArgsIfFunction` | `lib/modules.nix:450:13` |

##### `makeCMakeFlags` (`pkgs/stdenv/generic/make-derivation.nix:970:24`)

|    % | Samples | Caller                                                   | Location                                       |
| ---: | ------: | -------------------------------------------------------- | ---------------------------------------------- |
| 3.0% |       1 | `primop derivationStrict:python3.13-cryptography-48.0.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       1 | `primop derivationStrict:dconf-0.49.0`                   | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       1 | `primop derivationStrict:libxtst-1.2.5`                  | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       1 | `primop derivationStrict:rav1e-0.8.1`                    | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.0% |       1 | `primop derivationStrict:ruby-3.4.9`                     | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionals` (`pkgs/stdenv/generic/make-derivation.nix:542:26`)

|    % | Samples | Caller                                                     | Location                                       |
| ---: | ------: | ---------------------------------------------------------- | ---------------------------------------------- |
| 3.3% |       1 | `primop derivationStrict:auditable-cargo-bootstrap-1.95.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.3% |       1 | `primop derivationStrict:libice-1.1.2`                     | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.3% |       1 | `primop derivationStrict:log-0.4.27`                       | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.3% |       1 | `primop derivationStrict:tempfile-3.20.0`                  | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.3% |       1 | `primop derivationStrict:windows_i686_gnu-0.53.0`          | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|     % | Samples | Caller               | Location                                |
| ----: | ------: | -------------------- | --------------------------------------- |
| 52.0% |      13 | `primop toString`    | `nixos/lib/systemd-lib.nix:463:11`      |
| 12.0% |       3 | `primop concatLists` | `nixos/lib/systemd-lib.nix:359:7`       |
|  8.0% |       2 | `primop concatLists` | `nixos/modules/security/pam.nix:124:22` |
|  4.0% |       1 | `primop concatLists` | `lib/modules.nix:944:11`                |
|  4.0% |       1 | `(anonymous)`        | `lib/modules.nix:878:19`                |

##### `(anonymous)` (`pkgs/build-support/buildenv/default.nix:113:30`)

|     % | Samples | Caller                                        | Location                                       |
| ----: | ------: | --------------------------------------------- | ---------------------------------------------- |
| 87.5% |      21 | `primop derivationStrict:system-path`         | `«nix-internal»/derivation-internal.nix:37:12` |
|  4.2% |       1 | `primop derivationStrict:ronn-gems`           | `«nix-internal»/derivation-internal.nix:37:12` |
|  4.2% |       1 | `primop derivationStrict:asciidoctor-2.0.26`  | `«nix-internal»/derivation-internal.nix:37:12` |
|  4.2% |       1 | `primop derivationStrict:wireplumber-configs` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `mergeEqualOption` (`lib/modules.nix:1254:11`)

|     % | Samples | Caller                   | Location                                          |
| ----: | ------: | ------------------------ | ------------------------------------------------- |
| 83.3% |      20 | `primop addErrorContext` | `lib/modules.nix:1147:15`                         |
| 12.5% |       3 | `(anonymous)`            | `nixos/modules/config/fonts/fontconfig.nix:60:57` |
|  4.2% |       1 | `(anonymous)`            | `nixos/modules/services/x11/xserver.nix:213:34`   |

##### `filter` (`nixos/modules/misc/documentation.nix:126:13`)

|      % | Samples | Caller        | Location                                      |
| -----: | ------: | ------------- | --------------------------------------------- |
| 100.0% |      19 | `primop path` | `nixos/modules/misc/documentation.nix:122:27` |

##### `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |      16 | `primop toString` | `pkgs/build-support/rust/import-cargo-lock.nix:318:28` |

##### `makeMesonFlags` (`pkgs/stdenv/generic/make-derivation.nix:971:24`)

|    % | Samples | Caller                                                | Location                                       |
| ---: | ------: | ----------------------------------------------------- | ---------------------------------------------- |
| 7.7% |       1 | `primop derivationStrict:fetch-cargo-vendor-util`     | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.7% |       1 | `primop derivationStrict:python-catch-conflicts-hook` | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.7% |       1 | `primop derivationStrict:spirv-tools-1.4.341.0`       | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.7% |       1 | `primop derivationStrict:hashable-1.5.1.0.tar.gz`     | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.7% |       1 | `primop derivationStrict:ragel-6.10`                  | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop dirOf` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`)

|     % | Samples | Caller                                       | Location                                       |
| ----: | ------: | -------------------------------------------- | ---------------------------------------------- |
| 10.0% |       1 | `primop derivationStrict:mes-0.27.1-builder` | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:strtold-builder`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:write-builder`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:isspace-builder`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:fsync-builder`      | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`pkgs/development/haskell-modules/generic-builder.nix:686:11`)

|     % | Samples | Caller                                         | Location                                       |
| ----: | ------: | ---------------------------------------------- | ---------------------------------------------- |
| 10.0% |       1 | `primop derivationStrict:vector-0.13.2.0`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:cabal-doctest-1.0.12` | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:crypton-x509-1.7.7`   | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:serialise-0.2.6.1`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 10.0% |       1 | `primop derivationStrict:reducers-3.12.5`      | `«nix-internal»/derivation-internal.nix:37:12` |

##### `binaryMerge` (`lib/attrsets.nix:1623:11`)

|     % | Samples | Caller        | Location                   |
| ----: | ------: | ------------- | -------------------------- |
| 66.7% |       6 | `binaryMerge` | `lib/attrsets.nix:1623:52` |
| 33.3% |       3 | `binaryMerge` | `lib/attrsets.nix:1623:11` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:983:18`)

|     % | Samples | Caller                                                          | Location                                                      |
| ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 11.1% |       1 | `primop derivationStrict:python3.13-sphinxcontrib-qthelp-2.0.0` | `«nix-internal»/derivation-internal.nix:37:12`                |
| 11.1% |       1 | `defaultTo`                                                     | `pkgs/build-support/replace-vars/replace-vars-with.nix:64:26` |
| 11.1% |       1 | `primop derivationStrict:meson-1.10.2`                          | `«nix-internal»/derivation-internal.nix:37:12`                |
| 11.1% |       1 | `primop derivationStrict:python3.13-meson-python-0.19.0`        | `«nix-internal»/derivation-internal.nix:37:12`                |
| 11.1% |       1 | `primop derivationStrict:fftw-double-3.3.10`                    | `«nix-internal»/derivation-internal.nix:37:12`                |

##### `(anonymous)` (`<nix/fetchurl.nix>:41:1`)

|      % | Samples | Caller          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |       7 | `primop import` | `pkgs/build-support/fetchurl/boot.nix:41:1` |

##### `getRes` (`pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`)

|      % | Samples | Caller                    | Location                |
| -----: | ------: | ------------------------- | ----------------------- |
| 100.0% |       7 | `primop concatStringsSep` | `lib/strings.nix:263:5` |

##### `concatMapStringsSep` (`pkgs/development/haskell-modules/generic-builder.nix:865:13`)

|     % | Samples | Caller                                             | Location                                       |
| ----: | ------: | -------------------------------------------------- | ---------------------------------------------- |
| 14.3% |       1 | `primop derivationStrict:base-orphans-0.9.4`       | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:lua-arbitrary-1.0.1.2`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:digest-0.0.2.1`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:th-lift-instances-0.1.20` | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:byteorder-1.0.4`          | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|     % | Samples | Caller                                                                           | Location                                       |
| ----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------- |
| 16.7% |       1 | `primop derivationStrict:stdenv-linux`                                           | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:mesa-26.1.2`                                            | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:perl-5.42.0`                                            | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:security-wrapper-fusermount3-x86_64-unknown-linux-musl` | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       1 | `primop derivationStrict:wasilibc-static-wasm32-unknown-wasi-27`                 | `«nix-internal»/derivation-internal.nix:37:12` |

##### `extends` (`lib/fixed-points.nix:331:16`)

|     % | Samples | Caller                  | Location                          |
| ----: | ------: | ----------------------- | --------------------------------- |
| 80.0% |       4 | `extends`               | `lib/fixed-points.nix:331:16`     |
| 20.0% |       1 | `primop intersectAttrs` | `pkgs/top-level/stage.nix:157:26` |

##### `(anonymous)` (`lib/lists.nix:1901:20`)

|     % | Samples | Caller          | Location                                                              |
| ----: | ------: | --------------- | --------------------------------------------------------------------- |
| 80.0% |       4 | `primop foldl'` | `pkgs/development/interpreters/python/python-packages-base.nix:140:5` |
| 20.0% |       1 | `primop foldl'` | `pkgs/top-level/perl-packages.nix:48:5`                               |

##### `primop length` (`lib/modules.nix:886:34`)

|     % | Samples | Caller        | Location                 |
| ----: | ------: | ------------- | ------------------------ |
| 80.0% |       4 | `(anonymous)` | `lib/modules.nix:930:25` |
| 20.0% |       1 | `(anonymous)` | `lib/modules.nix:925:40` |

##### `buildBootstrapPythonModule` (`pkgs/development/python-modules/bootstrap/build/default.nix:46:31`)

|      % | Samples | Caller                                                     | Location                                       |
| -----: | ------: | ---------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       4 | `primop derivationStrict:python3.13-bootstrap-build-1.4.4` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`pkgs/development/interpreters/python/mk-python-derivation.nix:400:9`)

|     % | Samples | Caller                                                        | Location                                       |
| ----: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| 25.0% |       1 | `primop derivationStrict:python3.13-wheel-0.46.1`             | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:python3.13-pygments-2.20.0`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:python3.13-nanobind-2.12.0`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 25.0% |       1 | `primop derivationStrict:python3.13-sphinxcontrib-jquery-4.1` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop mapAttrs` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`)

|      % | Samples | Caller                                                   | Location                                       |
| -----: | ------: | -------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       4 | `primop derivationStrict:minimal-bootstrap-test-builder` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop mapAttrs` (`pkgs/stdenv/generic/make-derivation.nix:1006:9`)

|      % | Samples | Caller        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       4 | `(anonymous)` | `pkgs/stdenv/generic/make-derivation.nix:1071:8` |

##### `primop length` (`lib/modules.nix:1222:9`)

|      % | Samples | Caller                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |       3 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop all` (`lib/modules.nix:1253:17`)

|      % | Samples | Caller                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |       3 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop map` (`pkgs/stdenv/generic/make-derivation.nix:631:13`)

|     % | Samples | Caller                                                 | Location                                       |
| ----: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| 33.3% |       1 | `primop derivationStrict:perl5.42.0-File-BaseDir-0.09` | `«nix-internal»/derivation-internal.nix:37:12` |
| 33.3% |       1 | `primop derivationStrict:gtksourceview-5.20.0`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 33.3% |       1 | `primop derivationStrict:appstream-glib-0.8.3`         | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop listToAttrs` (`lib/customisation.nix:404:12`)

|      % | Samples | Caller             | Location                                         |
| -----: | ------: | ------------------ | ------------------------------------------------ |
| 100.0% |       2 | `extendDerivation` | `pkgs/stdenv/generic/make-derivation.nix:1015:5` |

##### `primop import` (`pkgs/stdenv/generic/make-derivation.nix:199:12`)

|     % | Samples | Caller                                                             | Location                                       |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:expect-5.45.4`                            | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:bootstrap-stage0-glibc-minimal-bootstrap` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop concatMap` (`lib/modules.nix:1434:18`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       2 | `primop any` | `lib/modules.nix:1209:14` |

##### `primop seq` (`lib/modules.nix:378:17`)

|     % | Samples | Caller        | Location                                |
| ----: | ------: | ------------- | --------------------------------------- |
| 50.0% |       1 | `(anonymous)` | `lib/attrsets.nix:662:70`               |
| 50.0% |       1 | `(anonymous)` | `nixos/modules/security/pam.nix:920:38` |

##### `primop removeAttrs` (`pkgs/stdenv/generic/make-derivation.nix:650:25`)

|      % | Samples | Caller                   | Location                                         |
| -----: | ------: | ------------------------ | ------------------------------------------------ |
| 100.0% |       2 | `makeDerivationArgument` | `pkgs/stdenv/generic/make-derivation.nix:966:23` |

##### `primop toString` (`pkgs/development/haskell-modules/generic-builder.nix:698:49`)

|     % | Samples | Caller                                                  | Location                                       |
| ----: | ------: | ------------------------------------------------------- | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:test-framework-0.8.2.3`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:optparse-applicative-0.18.1.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop head` (`pkgs/build-support/fetchurl/default.nix:318:50`)

|      % | Samples | Caller               | Location                                         |
| -----: | ------: | -------------------- | ------------------------------------------------ |
| 100.0% |       2 | `mkDerivationSimple` | `pkgs/stdenv/generic/make-derivation.nix:308:22` |

##### `primop map` (`lib/modules.nix:1426:18`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       2 | `primop any` | `lib/modules.nix:1209:14` |

##### `primop concatLists` (`lib/modules.nix:527:24`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |       1 | `primop concatLists` | `lib/modules.nix:527:24` |

##### `primop toString` (`lib/modules.nix:676:17`)

|      % | Samples | Caller                  | Location                 |
| -----: | ------: | ----------------------- | ------------------------ |
| 100.0% |       1 | `primop genericClosure` | `lib/modules.nix:570:36` |

##### `primop map` (`lib/modules.nix:947:15`)

|      % | Samples | Caller        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       1 | `(anonymous)` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                   | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 91.8% |     961 | `primop addErrorContext`   | `lib/modules.nix:1147:15`                             |
| 91.8% |     961 | `(anonymous)`              | `lib/attrsets.nix:1188:85`                            |
| 90.0% |     942 | `primop getAttr`           | `«nix-internal»/derivation-internal.nix:50:17`        |
| 89.2% |     934 | `(anonymous)`              | `<unknown>`                                           |
| 82.8% |     867 | `primop isAttrs`           | `lib/modules.nix:1228:15`                             |
| 82.8% |     867 | `primop addErrorContext`   | `lib/modules.nix:1227:11`                             |
| 80.6% |     844 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| 80.6% |     844 | `primop head`              | `lib/attrsets.nix:1714:13`                            |
| 80.6% |     844 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| 70.8% |     741 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| 70.7% |     740 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| 70.7% |     740 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| 60.2% |     630 | `primop removeAttrs`       | `lib/attrsets.nix:662:28`                             |
| 60.1% |     629 | `(anonymous)`              | `lib/attrsets.nix:662:53`                             |
| 60.1% |     629 | `primop filter`            | `lib/attrsets.nix:662:45`                             |
| 60.0% |     628 | `(anonymous)`              | `lib/attrsets.nix:662:60`                             |
| 59.4% |     622 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| 59.4% |     622 | `primop mapAttrs`          | `lib/types.nix:1025:21`                               |
| 57.6% |     603 | `mkDerivationSimple`       | `pkgs/stdenv/generic/make-derivation.nix:308:22`      |
| 57.5% |     602 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 91.8% |     961 | `(anonymous)`              | `lib/attrsets.nix:1188:85`                            |
| 80.6% |     844 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| 80.6% |     844 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| 70.8% |     741 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| 70.7% |     740 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| 70.7% |     740 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| 60.1% |     629 | `(anonymous)`              | `lib/attrsets.nix:662:53`                             |
| 60.0% |     628 | `(anonymous)`              | `lib/attrsets.nix:662:60`                             |
| 59.4% |     622 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| 57.6% |     603 | `mkDerivationSimple`       | `pkgs/stdenv/generic/make-derivation.nix:308:22`      |
| 57.5% |     602 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |
| 56.2% |     588 | `mkDerivation`             | `nixos/modules/system/activation/top-level.nix:58:16` |
| 56.1% |     587 | `filterAttrs`              | `nixos/modules/config/shells-environment.nix:94:11`   |
| 56.1% |     587 | `(anonymous)`              | `lib/modules.nix:1136:35`                             |
| 56.1% |     587 | `(anonymous)`              | `nixos/modules/services/x11/xserver.nix:968:13`       |
| 56.1% |     587 | `optionalString`           | `nixos/modules/services/x11/xserver.nix:967:13`       |
| 56.1% |     587 | `(anonymous)`              | `nixos/modules/system/activation/top-level.nix:71:8`  |
| 56.1% |     587 | `(anonymous)`              | `lib/trivial.nix:1211:22`                             |
| 56.1% |     587 | `toFunction`               | `pkgs/stdenv/generic/make-derivation.nix:225:55`      |
| 25.9% |     271 | `(anonymous)`              | `lib/modules.nix:1204:24`                             |

##### Native

|     % | Samples | Function                                | Location                                               |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------ |
| 91.8% |     961 | `primop addErrorContext`                | `lib/modules.nix:1147:15`                              |
| 90.0% |     942 | `primop getAttr`                        | `«nix-internal»/derivation-internal.nix:50:17`         |
| 82.8% |     867 | `primop isAttrs`                        | `lib/modules.nix:1228:15`                              |
| 82.8% |     867 | `primop addErrorContext`                | `lib/modules.nix:1227:11`                              |
| 80.6% |     844 | `primop head`                           | `lib/attrsets.nix:1714:13`                             |
| 60.2% |     630 | `primop removeAttrs`                    | `lib/attrsets.nix:662:28`                              |
| 60.1% |     629 | `primop filter`                         | `lib/attrsets.nix:662:45`                              |
| 59.4% |     622 | `primop mapAttrs`                       | `lib/types.nix:1025:21`                                |
| 56.1% |     587 | `primop mapAttrs`                       | `nixos/modules/config/shells-environment.nix:93:9`     |
| 56.1% |     587 | `primop derivationStrict:xkb-validated` | `«nix-internal»/derivation-internal.nix:37:12`         |
| 56.1% |     587 | `primop concatStringsSep`               | `nixos/modules/system/activation/top-level.nix:376:22` |
| 56.1% |     587 | `primop isFunction`                     | `lib/trivial.nix:1131:8`                               |
| 56.0% |     586 | `primop derivationStrict:system-path`   | `«nix-internal»/derivation-internal.nix:37:12`         |
| 30.5% |     319 | `primop any`                            | `lib/modules.nix:1209:14`                              |
| 25.9% |     271 | `primop concatMap`                      | `lib/modules.nix:1189:26`                              |
| 25.9% |     271 | `primop length`                         | `lib/modules.nix:1424:8`                               |
| 25.7% |     269 | `primop addErrorContext`                | `lib/modules.nix:1200:14`                              |
| 25.7% |     269 | `primop map`                            | `lib/modules.nix:1191:11`                              |
| 24.7% |     259 | `primop all`                            | `lib/modules.nix:1253:17`                              |
| 23.7% |     248 | `primop toString`                       | `lib/types.nix:695:41`                                 |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 89.2% |     934 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `primop addErrorContext` (`lib/modules.nix:1147:15`)

|     % | Samples | Callee                   | Location                  |
| ----: | ------: | ------------------------ | ------------------------- |
| 89.5% |     860 | `primop addErrorContext` | `lib/modules.nix:1227:11` |
| 64.7% |     622 | `primop mapAttrs`        | `lib/types.nix:1025:21`   |
| 61.1% |     587 | `(anonymous)`            | `lib/modules.nix:1136:35` |
| 29.8% |     286 | `primop any`             | `lib/modules.nix:1209:14` |
| 23.7% |     228 | `primop all`             | `lib/modules.nix:1253:17` |

##### `(anonymous)` (`lib/attrsets.nix:1188:85`)

|      % | Samples | Callee                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |     961 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|     % | Samples | Callee                                             | Location                                       |
| ----: | ------: | -------------------------------------------------- | ---------------------------------------------- |
| 62.3% |     587 | `primop derivationStrict:xkb-validated`            | `«nix-internal»/derivation-internal.nix:37:12` |
| 62.2% |     586 | `primop derivationStrict:system-path`              | `«nix-internal»/derivation-internal.nix:37:12` |
| 17.8% |     168 | `primop derivationStrict:ibus-with-plugins-1.5.33` | `«nix-internal»/derivation-internal.nix:37:12` |
| 17.8% |     168 | `primop derivationStrict:gnome-shell-50.1`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 17.7% |     167 | `primop derivationStrict:ibus-1.5.33`              | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|     % | Samples | Callee               | Location                                                |
| ----: | ------: | -------------------- | ------------------------------------------------------- |
| 90.7% |     847 | `(anonymous)`        | `lib/attrsets.nix:1188:85`                              |
| 10.2% |      95 | `primop concatLists` | `nixos/modules/system/boot/systemd.nix:540:11`          |
|  5.2% |      49 | `optional`           | `nixos/modules/system/boot/systemd/tmpfiles.nix:218:15` |
|  4.6% |      43 | `primop map`         | `lib/modules.nix:947:15`                                |
|  4.2% |      39 | `(anonymous)`        | `lib/modules.nix:930:25`                                |

##### `primop isAttrs` (`lib/modules.nix:1228:15`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 97.3% |     844 | `checkAssertWarn`         | `nixos/modules/system/activation/top-level.nix:78:26`  |
| 69.0% |     598 | `primop getAttr`          | `«nix-internal»/derivation-internal.nix:50:17`         |
| 67.7% |     587 | `primop concatStringsSep` | `nixos/modules/system/activation/top-level.nix:376:22` |
| 20.8% |     180 | `primop elemAt`           | `lib/lists.nix:347:43`                                 |
|  2.3% |      20 | `makeJobScript`           | `nixos/lib/systemd-unit-options.nix:498:24`            |

##### `primop addErrorContext` (`lib/modules.nix:1227:11`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     867 | `primop isAttrs` | `lib/modules.nix:1228:15` |

##### `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`)

|     % | Samples | Callee         | Location                 |
| ----: | ------: | -------------- | ------------------------ |
| 87.7% |     740 | `showWarnings` | `lib/asserts.nix:200:7`  |
| 12.3% |     104 | `primop map`   | `lib/asserts.nix:195:26` |

##### `primop head` (`lib/attrsets.nix:1714:13`)

|      % | Samples | Callee        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |     844 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`nixos/default.nix:21:12`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     844 | `primop head` | `lib/attrsets.nix:1714:13` |

##### `fold'` (`lib/lists.nix:143:5`)

|     % | Samples | Callee          | Location                                              |
| ----: | ------: | --------------- | ----------------------------------------------------- |
| 79.4% |     588 | `mkDerivation`  | `nixos/modules/system/activation/top-level.nix:58:16` |
| 20.6% |     153 | `primop length` | `lib/lists.nix:140:13`                                |

##### `foldr` (`lib/trivial.nix:1051:33`)

|      % | Samples | Callee  | Location              |
| -----: | ------: | ------- | --------------------- |
| 100.0% |     740 | `fold'` | `lib/lists.nix:143:5` |

##### `showWarnings` (`lib/asserts.nix:200:7`)

|      % | Samples | Callee  | Location                  |
| -----: | ------: | ------- | ------------------------- |
| 100.0% |     740 | `foldr` | `lib/trivial.nix:1051:33` |

##### `primop removeAttrs` (`lib/attrsets.nix:662:28`)

|     % | Samples | Callee               | Location                                                       |
| ----: | ------: | -------------------- | -------------------------------------------------------------- |
| 99.8% |     629 | `primop filter`      | `lib/attrsets.nix:662:45`                                      |
| 93.2% |     587 | `primop mapAttrs`    | `lib/types.nix:1025:21`                                        |
|  0.3% |       2 | `(anonymous)`        | `nixos/modules/services/desktops/pipewire/pipewire.nix:378:91` |
|  0.2% |       1 | `primop removeAttrs` | `nixos/modules/system/boot/systemd.nix:637:24`                 |

##### `(anonymous)` (`lib/attrsets.nix:662:53`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 99.8% |     628 | `(anonymous)` | `lib/attrsets.nix:662:60` |

##### `primop filter` (`lib/attrsets.nix:662:45`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     629 | `(anonymous)` | `lib/attrsets.nix:662:53` |

##### `(anonymous)` (`lib/attrsets.nix:662:60`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 98.4% |     618 | `primop addErrorContext` | `lib/modules.nix:1227:11`                               |
|  0.5% |       3 | `(anonymous)`            | `lib/attrsets.nix:662:70`                               |
|  0.5% |       3 | `primop any`             | `lib/modules.nix:1209:14`                               |
|  0.5% |       3 | `attrByPath`             | `nixos/lib/systemd-lib.nix:466:24`                      |
|  0.2% |       1 | `primop length`          | `nixos/modules/services/networking/ssh/sshd.nix:159:60` |

##### `filterAttrs` (`lib/types.nix:1019:17`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |     622 | `primop removeAttrs` | `lib/attrsets.nix:662:28` |

##### `primop mapAttrs` (`lib/types.nix:1025:21`)

|      % | Samples | Callee        | Location                |
| -----: | ------: | ------------- | ----------------------- |
| 100.0% |     622 | `filterAttrs` | `lib/types.nix:1019:17` |

##### `mkDerivationSimple` (`pkgs/stdenv/generic/make-derivation.nix:308:22`)

|     % | Samples | Callee             | Location                                         |
| ----: | ------: | ------------------ | ------------------------------------------------ |
| 97.3% |     587 | `toFunction`       | `pkgs/stdenv/generic/make-derivation.nix:225:55` |
|  3.8% |      23 | `extendDerivation` | `pkgs/stdenv/generic/make-derivation.nix:1015:5` |
|  0.7% |       4 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:236:14` |
|  0.3% |       2 | `primop head`      | `pkgs/build-support/fetchurl/default.nix:318:50` |
|  0.2% |       1 | `primop match`     | `pkgs/build-support/fetchurl/default.nix:280:27` |

##### `makeDerivationExtensible` (`pkgs/stdenv/generic/make-derivation.nix:225:29`)

|      % | Samples | Callee               | Location                                         |
| -----: | ------: | -------------------- | ------------------------------------------------ |
| 100.0% |     602 | `mkDerivationSimple` | `pkgs/stdenv/generic/make-derivation.nix:308:22` |

##### `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`)

|      % | Samples | Callee                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |     588 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29` |

##### `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |     587 | `primop removeAttrs` | `lib/attrsets.nix:662:28` |

##### `(anonymous)` (`lib/modules.nix:1136:35`)

|      % | Samples | Callee            | Location                                           |
| -----: | ------: | ----------------- | -------------------------------------------------- |
| 100.0% |     587 | `primop mapAttrs` | `nixos/modules/config/shells-environment.nix:93:9` |

##### `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     587 | `(anonymous)` | `lib/attrsets.nix:1188:85` |

##### `optionalString` (`nixos/modules/services/x11/xserver.nix:967:13`)

|      % | Samples | Callee        | Location                                        |
| -----: | ------: | ------------- | ----------------------------------------------- |
| 100.0% |     587 | `(anonymous)` | `nixos/modules/services/x11/xserver.nix:968:13` |

##### `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     587 | `(anonymous)` | `lib/attrsets.nix:1188:85` |

##### `(anonymous)` (`lib/trivial.nix:1211:22`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |     587 | `primop isFunction` | `lib/trivial.nix:1131:8` |

##### `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     587 | `(anonymous)` | `lib/trivial.nix:1211:22` |

##### `primop mapAttrs` (`nixos/modules/config/shells-environment.nix:93:9`)

|      % | Samples | Callee        | Location                                            |
| -----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% |     587 | `filterAttrs` | `nixos/modules/config/shells-environment.nix:94:11` |

##### `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`)

|      % | Samples | Callee           | Location                                        |
| -----: | ------: | ---------------- | ----------------------------------------------- |
| 100.0% |     587 | `optionalString` | `nixos/modules/services/x11/xserver.nix:967:13` |

##### `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`)

|      % | Samples | Callee           | Location                                       |
| -----: | ------: | ---------------- | ---------------------------------------------- |
| 100.0% |     587 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `primop isFunction` (`lib/trivial.nix:1131:8`)

|      % | Samples | Callee        | Location                                             |
| -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% |     587 | `(anonymous)` | `nixos/modules/system/activation/top-level.nix:71:8` |

##### `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`)

|     % | Samples | Callee           | Location                                         |
| ----: | ------: | ---------------- | ------------------------------------------------ |
| 66.7% |     391 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`   |
| 29.5% |     173 | `primop map`     | `pkgs/build-support/buildenv/default.nix:113:25` |
|  3.6% |      21 | `(anonymous)`    | `pkgs/build-support/buildenv/default.nix:113:30` |
|  0.2% |       1 | `(anonymous)`    | `pkgs/stdenv/generic/make-derivation.nix:975:14` |

##### `primop any` (`lib/modules.nix:1209:14`)

|     % | Samples | Callee             | Location                  |
| ----: | ------: | ------------------ | ------------------------- |
| 85.0% |     271 | `(anonymous)`      | `lib/modules.nix:1204:24` |
| 20.4% |      65 | `(anonymous)`      | `lib/modules.nix:1209:19` |
|  0.9% |       3 | `primop concatMap` | `lib/modules.nix:1434:18` |
|  0.6% |       2 | `primop map`       | `lib/modules.nix:1426:18` |

##### `(anonymous)` (`lib/modules.nix:1204:24`)

|      % | Samples | Callee          | Location                 |
| -----: | ------: | --------------- | ------------------------ |
| 100.0% |     271 | `primop length` | `lib/modules.nix:1424:8` |

##### `primop concatMap` (`lib/modules.nix:1189:26`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 99.6% |     270 | `(anonymous)` | `lib/modules.nix:1190:11` |

##### `primop length` (`lib/modules.nix:1424:8`)

|      % | Samples | Callee             | Location                  |
| -----: | ------: | ------------------ | ------------------------- |
| 100.0% |     271 | `primop concatMap` | `lib/modules.nix:1189:26` |

##### `primop addErrorContext` (`lib/modules.nix:1200:14`)

|      % | Samples | Callee                | Location                  |
| -----: | ------: | --------------------- | ------------------------- |
| 100.0% |     269 | `dischargeProperties` | `lib/modules.nix:1200:80` |

##### `primop map` (`lib/modules.nix:1191:11`)

|      % | Samples | Callee                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |     269 | `primop addErrorContext` | `lib/modules.nix:1200:14` |

##### `primop all` (`lib/modules.nix:1253:17`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 99.6% |     258 | `(anonymous)` | `lib/modules.nix:1253:22` |

##### `primop toString` (`lib/types.nix:695:41`)

|      % | Samples | Callee           | Location                                       |
| -----: | ------: | ---------------- | ---------------------------------------------- |
| 100.0% |     248 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.9% |      41 | `applyModuleArgs` (`lib/modules.nix:705:56`) ← `applyModuleArgsIfFunction` (450:13) ← `unifyModuleSyntax` (449:11) ← `loadModule` (536:37) ← `(anonymous)` (536:24) ← `primop concatLists` (527:24) ← `primop concatMap` (495:26) ← `primop elem` (497:27) ← `isDisabled` (568:39) ← `(anonymous)` (568:31) ← `primop filter` (571:22) ← `primop genericClosure` (570:36) ← `primop map` (570:9) ← `filterModules` (591:17) ← `primop length` (`lib/lists.nix:1125:11`) ← `primop genList` (1127:5) ← `reverseList` (`lib/modules.nix:275:37`) ← `primop map` (790:9) ← `primop zipAttrsWith` (789:21) ← `primop mapAttrs` (873:23) ← `primop mapAttrs` (925:24) ← `recurse` (`lib/attrsets.nix:1191:5`) ← `mapAttrsRecursiveCond` (`lib/modules.nix:283:28`) ← `primop seq` (402:18)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |      21 | `(anonymous)` (`pkgs/build-support/buildenv/default.nix:113:30`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.8% |      19 | `mergeEqualOption` (`lib/modules.nix:1254:11`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/etc/etc.nix:61:16`) ← `primop toString` (`lib/strings.nix:1203:16`) ← `primop match` (1205:8) ← `escapeShellArg` (1201:5) ← `primop concatStringsSep` (263:5) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:58:11`) ← `(anonymous)` (57:11) ← `primop concatStringsSep` (`lib/strings.nix:263:5`) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:56:11`) ← `primop derivationStrict:etc` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (37:12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.8% |      19 | `filter` (`nixos/modules/misc/documentation.nix:126:13`) ← `primop path` (122:27) ← `primop derivationStrict:lazy-options.json` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:options.json` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-configuration-reference-manpage` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |      15 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:prefetch-npm-deps-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:npm-config-hook` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:furo-web-2025.12.19` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-furo-2025.12.19` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-pyproject-api-1.10.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-tox-4.34.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-jaraco-envs-2.6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-distutils-80.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:scons-4.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:roc-toolkit-0.4.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pipewire-1.6.5` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`) |
| 1.1% |      11 | `(anonymous)` ← `primop toString` (`nixos/lib/systemd-lib.nix:463:11`) ← `primop derivationStrict:system-units` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/etc/etc.nix:61:16`) ← `primop toString` (`lib/strings.nix:1203:16`) ← `primop match` (1205:8) ← `escapeShellArg` (1201:5) ← `primop concatStringsSep` (263:5) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:58:11`) ← `(anonymous)` (57:11) ← `primop concatStringsSep` (`lib/strings.nix:263:5`) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:56:11`) ← `primop derivationStrict:etc` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (37:12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.8% |       8 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:ffmpeg-headless-8.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:pipewire-1.6.5` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% |       7 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       6 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:pipewire-1.6.5` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% |       5 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gnome-shell-50.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |       4 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:evolution-data-server-3.60.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gnome-shell-50.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% |       4 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:pandoc-3.7.0.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:pandoc-cli-3.7.0.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nuspell-5.1.7` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:enchant-2.6.9` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:evolution-data-server-3.60.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gnome-shell-50.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:qtbase-6.11.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:qttools-6.11.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qttranslations-6.11.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qtbase-6.11.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:qt5compat-6.11.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:v4l-utils-1.32.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:libdisplay-info-0.3.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:mesa-26.1.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:graphics-drivers` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`nixos/modules/hardware/graphics.nix:134:44`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:218:73`) ← `primop match` (218:29) ← `optional` (218:15) ← `(anonymous)` ← `primop isList` (`lib/lists.nix:445:19`) ← `flatten` (445:47) ← `(anonymous)` (445:44) ← `primop concatMap` (445:33) ← `flatten` (445:47) ← `(anonymous)` (445:44) ← `primop concatMap` (445:33) ← `flatten` (445:47) ← `(anonymous)` (445:44) ← `primop concatMap` (445:33) ← `flatten` (`nixos/modules/system/boot/systemd/tmpfiles.nix:211:11`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |       3 | `toCommand` (`pkgs/development/libraries/mesa/default.nix:129:15`) ← `primop concatStringsSep` (`lib/trivial.nix:152:33`) ← `(anonymous)` (152:27) ← `primop foldl'` (`pkgs/development/libraries/mesa/default.nix:131:25`) ← `primop derivationStrict:mesa-rust-package-cache` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:mesa-26.1.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:graphics-drivers` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`nixos/modules/hardware/graphics.nix:134:44`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:218:73`) ← `primop match` (218:29) ← `optional` (218:15) ← `(anonymous)` ← `primop isList` (`lib/lists.nix:445:19`) ← `flatten` (445:47) ← `(anonymous)` (445:44) ← `primop concatMap` (445:33) ← `flatten` (445:47) ← `(anonymous)` (445:44) ← `primop concatMap` (445:33) ← `flatten` (445:47) ← `(anonymous)` (445:44) ← `primop concatMap` (445:33) ← `flatten` (`nixos/modules/system/boot/systemd/tmpfiles.nix:211:11`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.3% |       3 | `(anonymous)` (`nixos/lib/systemd-unit-options.nix:503:56`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:536:20`) ← `optional` (541:14) ← `primop concatLists` (540:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:532:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gdm-50.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/display-managers/generic.nix:72:16`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:497:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:536:20`) ← `optional` (541:14) ← `primop concatLists` (540:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:532:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:imagemagick-7.1.2-23` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-icons-0-unstable-2025-06-28` (37:12) ← `primop getAttr` (50:17) ← `defaultTo` (`pkgs/build-support/replace-vars/replace-vars-with.nix:64:26`) ← `primop toString` (`lib/strings.nix:1203:16`) ← `primop match` (1205:8) ← `escapeShellArg` (`pkgs/build-support/replace-vars/replace-vars-with.nix:64:6`) ← `primop concatStringsSep` (94:37) ← `primop derivationStrict:org.gnome.login-screen.gschema.override` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:gdm-50.0` (37:12) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/display-managers/generic.nix:72:16`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:497:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:536:20`) ← `optional` (541:14) ← `primop concatLists` (540:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:532:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:python3.13-jaraco-text-4.0.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-distutils-80.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:scons-4.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:roc-toolkit-0.4.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pipewire-1.6.5` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% |       3 | `(anonymous)` (`pkgs/development/tools/analysis/binlore/default.nix:101:33`) ← `primop concatStringsSep` (`lib/strings.nix:125:31`) ← `concatMapStrings` (`pkgs/development/tools/analysis/binlore/default.nix:101:11`) ← `primop derivationStrict:more-binlore` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `phraseInvocation` (`pkgs/development/misc/resholve/resholve-utils.nix:183:58`) ← `phraseContext` (181:36) ← `phraseContextForOut` (183:37) ← `phraseSolution` (183:26) ← `primop concatStringsSep` (`pkgs/by-name/xd/xdg-utils/package.nix:332:14`) ← `primop derivationStrict:xdg-utils-1.2.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `(anonymous)` (`lib/strings.nix:567:47`) ← `primop concatStringsSep` (567:20) ← `makeSearchPath` (606:5) ← `makeSearchPathOutput` (`pkgs/applications/networking/browsers/firefox/wrapper.nix:351:12`) ← `primop derivationStrict:firefox-152.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |       3 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gnome-connections-50.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
