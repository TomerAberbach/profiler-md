# Sampling profile

Collected 1,266 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 80.7% |   1,022 |
| Native           | 15.4% |     195 |
| Unknown          |  3.6% |      45 |
| Standard library |  0.3% |       4 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function              | Location                                                              |
| ----: | ------: | --------------------- | --------------------------------------------------------------------- |
| 11.8% |     149 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:582:18`                      |
|  7.6% |      96 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:631:18`                      |
|  7.0% |      89 | `(anonymous)`         | `pkgs/stdenv/generic/make-derivation.nix:563:18`                      |
|  5.3% |      67 | `primop functionArgs` | `lib/trivial.nix:1109:86`                                             |
|  4.7% |      60 | `applyModuleArgs`     | `lib/modules.nix:705:56`                                              |
|  4.4% |      56 | `makeCMakeFlags`      | `pkgs/stdenv/generic/make-derivation.nix:970:24`                      |
|  3.6% |      45 | `(anonymous)`         | `<unknown>`                                                           |
|  3.1% |      39 | `optionals`           | `pkgs/stdenv/generic/make-derivation.nix:542:26`                      |
|  2.7% |      34 | `mergeEqualOption`    | `lib/modules.nix:1254:11`                                             |
|  1.8% |      23 | `mkCrate`             | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
|  1.7% |      22 | `primop mapAttrs`     | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`            |
|  1.7% |      21 | `(anonymous)`         | `pkgs/build-support/buildenv/default.nix:113:30`                      |
|  1.4% |      18 | `filter`              | `nixos/modules/misc/documentation.nix:126:13`                         |
|  1.3% |      17 | `binaryMerge`         | `lib/attrsets.nix:1623:11`                                            |
|  1.1% |      14 | `optionalString`      | `pkgs/development/interpreters/python/mk-python-derivation.nix:400:9` |
|  0.9% |      12 | `makeMesonFlags`      | `pkgs/stdenv/generic/make-derivation.nix:971:24`                      |
|  0.8% |      10 | `getRes`              | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`     |
|  0.8% |      10 | `(anonymous)`         | `lib/lists.nix:1901:20`                                               |
|  0.7% |       9 | `getOutput`           | `pkgs/stdenv/linux/default.nix:773:16`                                |
|  0.6% |       8 | `(anonymous)`         | `lib/strings.nix:567:47`                                              |

#### Categories

##### Ours

|     % | Samples | Function           | Location                                                              |
| ----: | ------: | ------------------ | --------------------------------------------------------------------- |
| 11.8% |     149 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:582:18`                      |
|  7.6% |      96 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:631:18`                      |
|  7.0% |      89 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:563:18`                      |
|  4.7% |      60 | `applyModuleArgs`  | `lib/modules.nix:705:56`                                              |
|  4.4% |      56 | `makeCMakeFlags`   | `pkgs/stdenv/generic/make-derivation.nix:970:24`                      |
|  3.1% |      39 | `optionals`        | `pkgs/stdenv/generic/make-derivation.nix:542:26`                      |
|  2.7% |      34 | `mergeEqualOption` | `lib/modules.nix:1254:11`                                             |
|  1.8% |      23 | `mkCrate`          | `pkgs/build-support/rust/import-cargo-lock.nix:156:5`                 |
|  1.7% |      21 | `(anonymous)`      | `pkgs/build-support/buildenv/default.nix:113:30`                      |
|  1.4% |      18 | `filter`           | `nixos/modules/misc/documentation.nix:126:13`                         |
|  1.3% |      17 | `binaryMerge`      | `lib/attrsets.nix:1623:11`                                            |
|  1.1% |      14 | `optionalString`   | `pkgs/development/interpreters/python/mk-python-derivation.nix:400:9` |
|  0.9% |      12 | `makeMesonFlags`   | `pkgs/stdenv/generic/make-derivation.nix:971:24`                      |
|  0.8% |      10 | `getRes`           | `pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`     |
|  0.8% |      10 | `(anonymous)`      | `lib/lists.nix:1901:20`                                               |
|  0.7% |       9 | `getOutput`        | `pkgs/stdenv/linux/default.nix:773:16`                                |
|  0.6% |       8 | `(anonymous)`      | `lib/strings.nix:567:47`                                              |
|  0.6% |       7 | `extends`          | `lib/fixed-points.nix:331:16`                                         |
|  0.6% |       7 | `optionalString`   | `pkgs/development/haskell-modules/generic-builder.nix:835:9`          |
|  0.6% |       7 | `optionalString`   | `pkgs/development/haskell-modules/generic-builder.nix:686:11`         |

##### Native

|    % | Samples | Function                            | Location                                                      |
| ---: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 5.3% |      67 | `primop functionArgs`               | `lib/trivial.nix:1109:86`                                     |
| 1.7% |      22 | `primop mapAttrs`                   | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`    |
| 0.6% |       7 | `primop getAttr`                    | `«nix-internal»/derivation-internal.nix:50:17`                |
| 0.6% |       7 | `primop dirOf`                      | `pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`    |
| 0.4% |       5 | `primop all`                        | `lib/modules.nix:1253:17`                                     |
| 0.3% |       4 | `primop any`                        | `pkgs/stdenv/generic/make-derivation.nix:519:7`               |
| 0.2% |       3 | `primop concatMap`                  | `lib/modules.nix:1434:18`                                     |
| 0.2% |       3 | `primop unsafeDiscardStringContext` | `lib/strings.nix:2904:7`                                      |
| 0.2% |       3 | `primop map`                        | `lib/modules.nix:1426:18`                                     |
| 0.2% |       2 | `primop import`                     | `pkgs/stdenv/generic/make-derivation.nix:199:12`              |
| 0.2% |       2 | `primop map`                        | `lib/modules.nix:1191:11`                                     |
| 0.2% |       2 | `primop import`                     | `pkgs/stdenv/generic/make-derivation.nix:200:12`              |
| 0.2% |       2 | `primop map`                        | `pkgs/stdenv/generic/make-derivation.nix:631:13`              |
| 0.2% |       2 | `primop length`                     | `lib/modules.nix:886:34`                                      |
| 0.2% |       2 | `primop mapAttrs`                   | `pkgs/stdenv/generic/make-derivation.nix:1006:9`              |
| 0.2% |       2 | `primop mapAttrs`                   | `lib/modules.nix:802:13`                                      |
| 0.2% |       2 | `primop toString`                   | `pkgs/development/haskell-modules/generic-builder.nix:698:49` |
| 0.2% |       2 | `primop isList`                     | `pkgs/build-support/trivial-builders/default.nix:566:21`      |
| 0.2% |       2 | `primop elemAt`                     | `lib/attrsets.nix:288:52`                                     |
| 0.1% |       1 | `primop concatLists`                | `lib/modules.nix:527:24`                                      |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 3.6% |      45 | `(anonymous)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`)

|    % | Samples | Caller                                            | Location                                       |
| ---: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 4.7% |       7 | `primop derivationStrict:gst-plugins-bad-1.26.11` | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.4% |       5 | `primop derivationStrict:pipewire-1.6.5`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.4% |       5 | `primop derivationStrict:aeson-2.2.4.1`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.7% |       4 | `primop derivationStrict:gcc-15.2.0`              | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.7% |       4 | `primop derivationStrict:systemd-260.1`           | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`)

|    % | Samples | Caller                                            | Location                                       |
| ---: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 7.3% |       7 | `primop derivationStrict:pandoc-3.7.0.2`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.2% |       4 | `primop derivationStrict:autoreconf-hook`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 4.2% |       4 | `primop derivationStrict:pandoc-lua-engine-0.4.3` | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.1% |       3 | `primop derivationStrict:python3.13-afdko-4.0.2`  | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.1% |       2 | `primop derivationStrict:python3.13-flake8-7.3.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:563:18`)

|    % | Samples | Caller                                               | Location                                       |
| ---: | ------: | ---------------------------------------------------- | ---------------------------------------------- |
| 4.5% |       4 | `primop derivationStrict:python3.13-wheel-0.46.1`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.4% |       3 | `primop derivationStrict:asciidoc-10.2.1`            | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.4% |       3 | `primop derivationStrict:python3.13-build-1.4.4`     | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.4% |       3 | `primop derivationStrict:python3.13-installer-1.0.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 3.4% |       3 | `primop derivationStrict:python3.13-mypy-1.20.1`     | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop functionArgs` (`lib/trivial.nix:1109:86`)

|      % | Samples | Caller        | Location                       |
| -----: | ------: | ------------- | ------------------------------ |
| 100.0% |      67 | `(anonymous)` | `lib/customisation.nix:310:15` |

##### `applyModuleArgs` (`lib/modules.nix:705:56`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |      60 | `applyModuleArgsIfFunction` | `lib/modules.nix:450:13` |

##### `makeCMakeFlags` (`pkgs/stdenv/generic/make-derivation.nix:970:24`)

|    % | Samples | Caller                                                        | Location                                       |
| ---: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| 3.6% |       2 | `primop derivationStrict:pkg-config-0.29.2`                   | `«nix-internal»/derivation-internal.nix:37:12` |
| 1.8% |       1 | `primop derivationStrict:bootstrap-stage2-gcc-wrapper-15.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 1.8% |       1 | `primop derivationStrict:gtk-doc-1.35.1`                      | `«nix-internal»/derivation-internal.nix:37:12` |
| 1.8% |       1 | `primop derivationStrict:krb5-1.22.1`                         | `«nix-internal»/derivation-internal.nix:37:12` |
| 1.8% |       1 | `primop derivationStrict:python3.13-bootstrap-build-1.4.4`    | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|     % | Samples | Caller                                    | Location                                       |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 55.6% |      25 | `primop toString`                         | `nixos/lib/systemd-lib.nix:463:11`             |
|  6.7% |       3 | `primop concatLists`                      | `lib/modules.nix:944:11`                       |
|  4.4% |       2 | `primop derivationStrict:python3-3.13.13` | `«nix-internal»/derivation-internal.nix:37:12` |
|  4.4% |       2 | `primop derivationStrict:libtool-2.5.4`   | `«nix-internal»/derivation-internal.nix:37:12` |
|  4.4% |       2 | `primop concatLists`                      | `nixos/lib/systemd-lib.nix:359:7`              |

##### `optionals` (`pkgs/stdenv/generic/make-derivation.nix:542:26`)

|    % | Samples | Caller                                                        | Location                                       |
| ---: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| 2.6% |       1 | `primop derivationStrict:binutils-patchelfed-ld-wrapper-2.46` | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.6% |       1 | `primop derivationStrict:python-setup-hook.sh`                | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.6% |       1 | `primop derivationStrict:expect-5.45.4`                       | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.6% |       1 | `primop derivationStrict:serde-1.0.228`                       | `«nix-internal»/derivation-internal.nix:37:12` |
| 2.6% |       1 | `primop derivationStrict:pythoncheck.sh`                      | `«nix-internal»/derivation-internal.nix:37:12` |

##### `mergeEqualOption` (`lib/modules.nix:1254:11`)

|     % | Samples | Caller                   | Location                                          |
| ----: | ------: | ------------------------ | ------------------------------------------------- |
| 79.4% |      27 | `primop addErrorContext` | `lib/modules.nix:1147:15`                         |
|  8.8% |       3 | `(anonymous)`            | `nixos/modules/config/fonts/fontconfig.nix:60:57` |
|  5.9% |       2 | `(anonymous)`            | `lib/attrsets.nix:1926:9`                         |
|  2.9% |       1 | `(anonymous)`            | `lib/types.nix:743:26`                            |
|  2.9% |       1 | `(anonymous)`            | `nixos/modules/services/x11/xserver.nix:213:34`   |

##### `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |      23 | `primop toString` | `pkgs/build-support/rust/import-cargo-lock.nix:318:28` |

##### `primop mapAttrs` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`)

|     % | Samples | Caller                                                   | Location                                                      |
| ----: | ------: | -------------------------------------------------------- | ------------------------------------------------------------- |
| 95.5% |      21 | `primop derivationStrict:minimal-bootstrap-test-builder` | `«nix-internal»/derivation-internal.nix:37:12`                |
|  4.5% |       1 | `optionalString`                                         | `pkgs/os-specific/linux/minimal-bootstrap/default.nix:416:14` |

##### `(anonymous)` (`pkgs/build-support/buildenv/default.nix:113:30`)

|     % | Samples | Caller                                       | Location                                       |
| ----: | ------: | -------------------------------------------- | ---------------------------------------------- |
| 90.5% |      19 | `primop derivationStrict:system-path`        | `«nix-internal»/derivation-internal.nix:37:12` |
|  9.5% |       2 | `primop derivationStrict:asciidoctor-2.0.26` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `filter` (`nixos/modules/misc/documentation.nix:126:13`)

|      % | Samples | Caller        | Location                                      |
| -----: | ------: | ------------- | --------------------------------------------- |
| 100.0% |      18 | `primop path` | `nixos/modules/misc/documentation.nix:122:27` |

##### `binaryMerge` (`lib/attrsets.nix:1623:11`)

|     % | Samples | Caller        | Location                   |
| ----: | ------: | ------------- | -------------------------- |
| 52.9% |       9 | `binaryMerge` | `lib/attrsets.nix:1623:52` |
| 47.1% |       8 | `binaryMerge` | `lib/attrsets.nix:1623:11` |

##### `optionalString` (`pkgs/development/interpreters/python/mk-python-derivation.nix:400:9`)

|    % | Samples | Caller                                                    | Location                                       |
| ---: | ------: | --------------------------------------------------------- | ---------------------------------------------- |
| 7.1% |       1 | `primop derivationStrict:python3.13-wheel-0.46.1`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.1% |       1 | `primop derivationStrict:gixy-0.1.21`                     | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.1% |       1 | `primop derivationStrict:python3.13-jinja2-3.1.6`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.1% |       1 | `primop derivationStrict:python3.13-requests-2.33.1`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 7.1% |       1 | `primop derivationStrict:python3.13-pytest-timeout-2.4.0` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `makeMesonFlags` (`pkgs/stdenv/generic/make-derivation.nix:971:24`)

|     % | Samples | Caller                                                             | Location                                       |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------- |
| 25.0% |       3 | `primop derivationStrict:source`                                   | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       2 | `primop derivationStrict:curl-8.20.0`                              | `«nix-internal»/derivation-internal.nix:37:12` |
| 16.7% |       2 | `primop derivationStrict:python3.13-bootstrap-build-1.4.4`         | `«nix-internal»/derivation-internal.nix:37:12` |
|  8.3% |       1 | `primop derivationStrict:update-autotools-gnu-config-scripts-hook` | `«nix-internal»/derivation-internal.nix:37:12` |
|  8.3% |       1 | `primop derivationStrict:pkg-config-wrapper-0.29.2`                | `«nix-internal»/derivation-internal.nix:37:12` |

##### `getRes` (`pkgs/os-specific/linux/minimal-bootstrap/mes/default.nix:269:20`)

|      % | Samples | Caller                    | Location                |
| -----: | ------: | ------------------------- | ----------------------- |
| 100.0% |      10 | `primop concatStringsSep` | `lib/strings.nix:263:5` |

##### `(anonymous)` (`lib/lists.nix:1901:20`)

|      % | Samples | Caller          | Location                                                              |
| -----: | ------: | --------------- | --------------------------------------------------------------------- |
| 100.0% |      10 | `primop foldl'` | `pkgs/development/interpreters/python/python-packages-base.nix:140:5` |

##### `getOutput` (`pkgs/stdenv/linux/default.nix:773:16`)

|      % | Samples | Caller                                 | Location                                       |
| -----: | ------: | -------------------------------------- | ---------------------------------------------- |
| 100.0% |       9 | `primop derivationStrict:stdenv-linux` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`lib/strings.nix:567:47`)

|      % | Samples | Caller                    | Location                 |
| -----: | ------: | ------------------------- | ------------------------ |
| 100.0% |       8 | `primop concatStringsSep` | `lib/strings.nix:567:20` |

##### `extends` (`lib/fixed-points.nix:331:16`)

|     % | Samples | Caller                  | Location                          |
| ----: | ------: | ----------------------- | --------------------------------- |
| 85.7% |       6 | `extends`               | `lib/fixed-points.nix:331:16`     |
| 14.3% |       1 | `primop intersectAttrs` | `pkgs/top-level/stage.nix:157:26` |

##### `optionalString` (`pkgs/development/haskell-modules/generic-builder.nix:835:9`)

|     % | Samples | Caller                                              | Location                                       |
| ----: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| 14.3% |       1 | `primop derivationStrict:hadrian-9.10.3`            | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:base16-bytestring-1.0.2.0` | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:tasty-golden-2.3.6`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:pandoc-3.7.0.2`            | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:conduit-extra-1.3.8`       | `«nix-internal»/derivation-internal.nix:37:12` |

##### `optionalString` (`pkgs/development/haskell-modules/generic-builder.nix:686:11`)

|     % | Samples | Caller                                            | Location                                       |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 14.3% |       1 | `primop derivationStrict:tasty-quickcheck-0.11.1` | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:nothunks-0.3.1`          | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:vector-stream-0.1.0.1`   | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:serialise-0.2.6.1`       | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:http-client-tls-0.3.6.4` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|     % | Samples | Caller                                                                  | Location                                            |
| ----: | ------: | ----------------------------------------------------------------------- | --------------------------------------------------- |
| 14.3% |       1 | `primop derivationStrict:mes-0.27.1-builder`                            | `«nix-internal»/derivation-internal.nix:37:12`      |
| 14.3% |       1 | `primop derivationStrict:asciidoc-10.2.1`                               | `«nix-internal»/derivation-internal.nix:37:12`      |
| 14.3% |       1 | `optionalString`                                                        | `pkgs/os-specific/linux/busybox/default.nix:178:19` |
| 14.3% |       1 | `primop derivationStrict:security-wrapper-su-x86_64-unknown-linux-musl` | `«nix-internal»/derivation-internal.nix:37:12`      |
| 14.3% |       1 | `primop derivationStrict:system-path`                                   | `«nix-internal»/derivation-internal.nix:37:12`      |

##### `primop dirOf` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:86:24`)

|     % | Samples | Caller                                            | Location                                       |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 14.3% |       1 | `primop derivationStrict:abtol-builder`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:vprintf-builder`         | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:__buffered_read-builder` | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:getdents-builder`        | `«nix-internal»/derivation-internal.nix:37:12` |
| 14.3% |       1 | `primop derivationStrict:execv-builder`           | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop all` (`lib/modules.nix:1253:17`)

|      % | Samples | Caller                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |       5 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop any` (`pkgs/stdenv/generic/make-derivation.nix:519:7`)

|      % | Samples | Caller                   | Location                                         |
| -----: | ------: | ------------------------ | ------------------------------------------------ |
| 100.0% |       4 | `makeDerivationArgument` | `pkgs/stdenv/generic/make-derivation.nix:966:23` |

##### `primop concatMap` (`lib/modules.nix:1434:18`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       3 | `primop any` | `lib/modules.nix:1209:14` |

##### `primop unsafeDiscardStringContext` (`lib/strings.nix:2904:7`)

|      % | Samples | Caller        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       3 | `(anonymous)` | `pkgs/stdenv/generic/make-derivation.nix:682:13` |

##### `primop map` (`lib/modules.nix:1426:18`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       3 | `primop any` | `lib/modules.nix:1209:14` |

##### `primop import` (`pkgs/stdenv/generic/make-derivation.nix:199:12`)

|     % | Samples | Caller                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:binutils-2.46`  | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:libxml2-2.15.2` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop map` (`lib/modules.nix:1191:11`)

|      % | Samples | Caller        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |       2 | `(anonymous)` | `lib/modules.nix:1190:11` |

##### `primop import` (`pkgs/stdenv/generic/make-derivation.nix:200:12`)

|     % | Samples | Caller                                                             | Location                                       |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:bash-5.3p9`                               | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:update-autotools-gnu-config-scripts-hook` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop map` (`pkgs/stdenv/generic/make-derivation.nix:631:13`)

|     % | Samples | Caller                                  | Location                                       |
| ----: | ------: | --------------------------------------- | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:mpfr-4.2.2`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:opusfile-0.12` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop length` (`lib/modules.nix:886:34`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       2 | `(anonymous)` | `lib/modules.nix:930:25` |

##### `primop mapAttrs` (`pkgs/stdenv/generic/make-derivation.nix:1006:9`)

|      % | Samples | Caller        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       2 | `(anonymous)` | `pkgs/stdenv/generic/make-derivation.nix:1071:8` |

##### `primop mapAttrs` (`lib/modules.nix:802:13`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       2 | `(anonymous)` | `lib/modules.nix:791:11` |

##### `primop toString` (`pkgs/development/haskell-modules/generic-builder.nix:698:49`)

|     % | Samples | Caller                                           | Location                                       |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------- |
| 50.0% |       1 | `primop derivationStrict:hedgehog-1.5`           | `«nix-internal»/derivation-internal.nix:37:12` |
| 50.0% |       1 | `primop derivationStrict:pandoc-server-0.1.0.11` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `primop isList` (`pkgs/build-support/trivial-builders/default.nix:566:21`)

|      % | Samples | Caller        | Location                                                 |
| -----: | ------: | ------------- | -------------------------------------------------------- |
| 100.0% |       2 | `(anonymous)` | `pkgs/build-support/trivial-builders/default.nix:563:13` |

##### `primop elemAt` (`lib/attrsets.nix:288:52`)

|      % | Samples | Caller    | Location                 |
| -----: | ------: | --------- | ------------------------ |
| 100.0% |       2 | `atDepth` | `lib/attrsets.nix:290:5` |

##### `primop concatLists` (`lib/modules.nix:527:24`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |       1 | `primop concatLists` | `lib/modules.nix:527:24` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                 | Location                                              |
| ----: | ------: | ------------------------ | ----------------------------------------------------- |
| 90.8% |   1,150 | `primop addErrorContext` | `lib/modules.nix:1147:15`                             |
| 90.8% |   1,150 | `(anonymous)`            | `lib/attrsets.nix:1188:85`                            |
| 88.9% |   1,125 | `primop getAttr`         | `«nix-internal»/derivation-internal.nix:50:17`        |
| 87.3% |   1,105 | `(anonymous)`            | `<unknown>`                                           |
| 80.4% |   1,018 | `primop isAttrs`         | `lib/modules.nix:1228:15`                             |
| 80.4% |   1,018 | `primop addErrorContext` | `lib/modules.nix:1227:11`                             |
| 78.5% |     994 | `checkAssertWarn`        | `nixos/modules/system/activation/top-level.nix:78:26` |
| 78.5% |     994 | `primop head`            | `lib/attrsets.nix:1714:13`                            |
| 78.5% |     994 | `(anonymous)`            | `nixos/default.nix:21:12`                             |
| 52.3% |     662 | `fold'`                  | `lib/lists.nix:143:5`                                 |
| 52.2% |     661 | `foldr`                  | `lib/trivial.nix:1051:33`                             |
| 52.2% |     661 | `showWarnings`           | `lib/asserts.nix:200:7`                               |
| 44.2% |     560 | `primop any`             | `lib/modules.nix:1209:14`                             |
| 42.2% |     534 | `primop removeAttrs`     | `lib/attrsets.nix:662:28`                             |
| 41.9% |     531 | `(anonymous)`            | `lib/attrsets.nix:662:53`                             |
| 41.9% |     531 | `primop filter`          | `lib/attrsets.nix:662:45`                             |
| 41.5% |     526 | `(anonymous)`            | `lib/attrsets.nix:662:60`                             |
| 41.4% |     524 | `filterAttrs`            | `lib/types.nix:1019:17`                               |
| 41.4% |     524 | `primop mapAttrs`        | `lib/types.nix:1025:21`                               |
| 37.2% |     471 | `(anonymous)`            | `lib/modules.nix:1190:11`                             |

#### Categories

##### Ours

|     % | Samples | Function                   | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 90.8% |   1,150 | `(anonymous)`              | `lib/attrsets.nix:1188:85`                            |
| 78.5% |     994 | `checkAssertWarn`          | `nixos/modules/system/activation/top-level.nix:78:26` |
| 78.5% |     994 | `(anonymous)`              | `nixos/default.nix:21:12`                             |
| 52.3% |     662 | `fold'`                    | `lib/lists.nix:143:5`                                 |
| 52.2% |     661 | `foldr`                    | `lib/trivial.nix:1051:33`                             |
| 52.2% |     661 | `showWarnings`             | `lib/asserts.nix:200:7`                               |
| 41.9% |     531 | `(anonymous)`              | `lib/attrsets.nix:662:53`                             |
| 41.5% |     526 | `(anonymous)`              | `lib/attrsets.nix:662:60`                             |
| 41.4% |     524 | `filterAttrs`              | `lib/types.nix:1019:17`                               |
| 37.2% |     471 | `(anonymous)`              | `lib/modules.nix:1190:11`                             |
| 37.2% |     471 | `(anonymous)`              | `lib/modules.nix:1204:24`                             |
| 37.0% |     468 | `dischargeProperties`      | `lib/modules.nix:1200:80`                             |
| 37.0% |     468 | `mkDerivationSimple`       | `pkgs/stdenv/generic/make-derivation.nix:308:22`      |
| 37.0% |     468 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29`      |
| 35.9% |     455 | `(anonymous)`              | `nixos/modules/system/activation/top-level.nix:71:8`  |
| 35.9% |     455 | `(anonymous)`              | `lib/trivial.nix:1211:22`                             |
| 35.9% |     455 | `toFunction`               | `pkgs/stdenv/generic/make-derivation.nix:225:55`      |
| 35.9% |     455 | `mkDerivation`             | `nixos/modules/system/activation/top-level.nix:58:16` |
| 35.9% |     454 | `filterAttrs`              | `nixos/modules/config/shells-environment.nix:94:11`   |
| 35.9% |     454 | `(anonymous)`              | `lib/modules.nix:1136:35`                             |

##### Native

|     % | Samples | Function                                | Location                                               |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------ |
| 90.8% |   1,150 | `primop addErrorContext`                | `lib/modules.nix:1147:15`                              |
| 88.9% |   1,125 | `primop getAttr`                        | `«nix-internal»/derivation-internal.nix:50:17`         |
| 80.4% |   1,018 | `primop isAttrs`                        | `lib/modules.nix:1228:15`                              |
| 80.4% |   1,018 | `primop addErrorContext`                | `lib/modules.nix:1227:11`                              |
| 78.5% |     994 | `primop head`                           | `lib/attrsets.nix:1714:13`                             |
| 44.2% |     560 | `primop any`                            | `lib/modules.nix:1209:14`                              |
| 42.2% |     534 | `primop removeAttrs`                    | `lib/attrsets.nix:662:28`                              |
| 41.9% |     531 | `primop filter`                         | `lib/attrsets.nix:662:45`                              |
| 41.4% |     524 | `primop mapAttrs`                       | `lib/types.nix:1025:21`                                |
| 37.2% |     471 | `primop concatMap`                      | `lib/modules.nix:1189:26`                              |
| 37.2% |     471 | `primop length`                         | `lib/modules.nix:1424:8`                               |
| 37.1% |     470 | `primop map`                            | `lib/modules.nix:1191:11`                              |
| 37.0% |     469 | `primop addErrorContext`                | `lib/modules.nix:1200:14`                              |
| 36.0% |     456 | `primop isFunction`                     | `lib/trivial.nix:1131:8`                               |
| 35.9% |     454 | `primop mapAttrs`                       | `nixos/modules/config/shells-environment.nix:93:9`     |
| 35.9% |     454 | `primop derivationStrict:xkb-validated` | `«nix-internal»/derivation-internal.nix:37:12`         |
| 35.9% |     454 | `primop concatStringsSep`               | `nixos/modules/system/activation/top-level.nix:376:22` |
| 35.8% |     453 | `primop derivationStrict:system-path`   | `«nix-internal»/derivation-internal.nix:37:12`         |
| 26.3% |     333 | `primop filter`                         | `lib/asserts.nix:195:46`                               |
| 26.3% |     333 | `primop map`                            | `lib/asserts.nix:195:26`                               |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 87.3% |   1,105 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `primop addErrorContext` (`lib/modules.nix:1147:15`)

|     % | Samples | Callee                   | Location                  |
| ----: | ------: | ------------------------ | ------------------------- |
| 88.0% |   1,012 | `primop addErrorContext` | `lib/modules.nix:1227:11` |
| 45.5% |     523 | `primop mapAttrs`        | `lib/types.nix:1025:21`   |
| 44.6% |     513 | `primop any`             | `lib/modules.nix:1209:14` |
| 39.5% |     454 | `(anonymous)`            | `lib/modules.nix:1136:35` |
| 18.4% |     212 | `primop all`             | `lib/modules.nix:1253:17` |

##### `(anonymous)` (`lib/attrsets.nix:1188:85`)

|      % | Samples | Callee                   | Location                  |
| -----: | ------: | ------------------------ | ------------------------- |
| 100.0% |   1,150 | `primop addErrorContext` | `lib/modules.nix:1147:15` |

##### `primop getAttr` (`«nix-internal»/derivation-internal.nix:50:17`)

|     % | Samples | Callee                                     | Location                                       |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------- |
| 40.4% |     454 | `primop derivationStrict:xkb-validated`    | `«nix-internal»/derivation-internal.nix:37:12` |
| 40.3% |     453 | `primop derivationStrict:system-path`      | `«nix-internal»/derivation-internal.nix:37:12` |
| 13.6% |     153 | `primop derivationStrict:nginx-1.30.2`     | `«nix-internal»/derivation-internal.nix:37:12` |
| 11.6% |     131 | `primop derivationStrict:etc`              | `«nix-internal»/derivation-internal.nix:37:12` |
| 11.3% |     127 | `primop derivationStrict:gnome-shell-50.1` | `«nix-internal»/derivation-internal.nix:37:12` |

##### `(anonymous)` (`<unknown>`)

|     % | Samples | Callee               | Location                                          |
| ----: | ------: | -------------------- | ------------------------------------------------- |
| 90.3% |     998 | `(anonymous)`        | `lib/attrsets.nix:1188:85`                        |
| 13.0% |     144 | `primop concatLists` | `nixos/modules/system/boot/systemd.nix:540:11`    |
| 10.2% |     113 | `primop isString`    | `pkgs/stdenv/generic/make-derivation.nix:1009:14` |
|  5.2% |      58 | `primop map`         | `lib/modules.nix:947:15`                          |
|  4.9% |      54 | `primop concatLists` | `lib/modules.nix:944:11`                          |

##### `primop isAttrs` (`lib/modules.nix:1228:15`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 97.6% |     994 | `checkAssertWarn`         | `nixos/modules/system/activation/top-level.nix:78:26`  |
| 46.7% |     475 | `primop getAttr`          | `«nix-internal»/derivation-internal.nix:50:17`         |
| 44.6% |     454 | `primop concatStringsSep` | `nixos/modules/system/activation/top-level.nix:376:22` |
| 11.6% |     118 | `primop elemAt`           | `lib/lists.nix:347:43`                                 |
|  4.1% |      42 | `makeJobScript`           | `nixos/lib/systemd-unit-options.nix:498:24`            |

##### `primop addErrorContext` (`lib/modules.nix:1227:11`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   1,018 | `primop isAttrs` | `lib/modules.nix:1228:15` |

##### `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`)

|     % | Samples | Callee         | Location                 |
| ----: | ------: | -------------- | ------------------------ |
| 66.5% |     661 | `showWarnings` | `lib/asserts.nix:200:7`  |
| 33.5% |     333 | `primop map`   | `lib/asserts.nix:195:26` |

##### `primop head` (`lib/attrsets.nix:1714:13`)

|      % | Samples | Callee        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |     994 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`nixos/default.nix:21:12`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     994 | `primop head` | `lib/attrsets.nix:1714:13` |

##### `fold'` (`lib/lists.nix:143:5`)

|     % | Samples | Callee          | Location                                              |
| ----: | ------: | --------------- | ----------------------------------------------------- |
| 68.7% |     455 | `mkDerivation`  | `nixos/modules/system/activation/top-level.nix:58:16` |
| 31.4% |     208 | `primop length` | `lib/lists.nix:140:13`                                |

##### `foldr` (`lib/trivial.nix:1051:33`)

|      % | Samples | Callee  | Location              |
| -----: | ------: | ------- | --------------------- |
| 100.0% |     661 | `fold'` | `lib/lists.nix:143:5` |

##### `showWarnings` (`lib/asserts.nix:200:7`)

|      % | Samples | Callee  | Location                  |
| -----: | ------: | ------- | ------------------------- |
| 100.0% |     661 | `foldr` | `lib/trivial.nix:1051:33` |

##### `primop any` (`lib/modules.nix:1209:14`)

|     % | Samples | Callee             | Location                  |
| ----: | ------: | ------------------ | ------------------------- |
| 84.1% |     471 | `(anonymous)`      | `lib/modules.nix:1204:24` |
| 18.4% |     103 | `(anonymous)`      | `lib/modules.nix:1209:19` |
|  1.1% |       6 | `primop concatMap` | `lib/modules.nix:1434:18` |
|  0.5% |       3 | `primop map`       | `lib/modules.nix:1426:18` |

##### `primop removeAttrs` (`lib/attrsets.nix:662:28`)

|     % | Samples | Callee               | Location                                                       |
| ----: | ------: | -------------------- | -------------------------------------------------------------- |
| 99.4% |     531 | `primop filter`      | `lib/attrsets.nix:662:45`                                      |
| 85.0% |     454 | `primop mapAttrs`    | `lib/types.nix:1025:21`                                        |
|  0.4% |       2 | `primop removeAttrs` | `nixos/modules/system/boot/systemd.nix:637:24`                 |
|  0.2% |       1 | `(anonymous)`        | `nixos/modules/services/desktops/pipewire/pipewire.nix:378:91` |
|  0.2% |       1 | `(anonymous)`        | `nixos/modules/services/databases/postgresql.nix:60:86`        |

##### `(anonymous)` (`lib/attrsets.nix:662:53`)

|     % | Samples | Callee        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 99.1% |     526 | `(anonymous)` | `lib/attrsets.nix:662:60` |
|  0.2% |       1 | `const`       | `lib/attrsets.nix:662:60` |

##### `primop filter` (`lib/attrsets.nix:662:45`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     531 | `(anonymous)` | `lib/attrsets.nix:662:53` |

##### `(anonymous)` (`lib/attrsets.nix:662:60`)

|     % | Samples | Callee                   | Location                           |
| ----: | ------: | ------------------------ | ---------------------------------- |
| 98.1% |     516 | `primop addErrorContext` | `lib/modules.nix:1227:11`          |
|  1.0% |       5 | `(anonymous)`            | `lib/attrsets.nix:662:70`          |
|  0.6% |       3 | `primop any`             | `lib/modules.nix:1209:14`          |
|  0.4% |       2 | `attrByPath`             | `nixos/lib/systemd-lib.nix:466:24` |

##### `filterAttrs` (`lib/types.nix:1019:17`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |     524 | `primop removeAttrs` | `lib/attrsets.nix:662:28` |

##### `primop mapAttrs` (`lib/types.nix:1025:21`)

|      % | Samples | Callee        | Location                |
| -----: | ------: | ------------- | ----------------------- |
| 100.0% |     524 | `filterAttrs` | `lib/types.nix:1019:17` |

##### `(anonymous)` (`lib/modules.nix:1190:11`)

|     % | Samples | Callee       | Location                  |
| ----: | ------: | ------------ | ------------------------- |
| 99.8% |     470 | `primop map` | `lib/modules.nix:1191:11` |

##### `(anonymous)` (`lib/modules.nix:1204:24`)

|      % | Samples | Callee          | Location                 |
| -----: | ------: | --------------- | ------------------------ |
| 100.0% |     471 | `primop length` | `lib/modules.nix:1424:8` |

##### `primop concatMap` (`lib/modules.nix:1189:26`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     471 | `(anonymous)` | `lib/modules.nix:1190:11` |

##### `primop length` (`lib/modules.nix:1424:8`)

|      % | Samples | Callee             | Location                  |
| -----: | ------: | ------------------ | ------------------------- |
| 100.0% |     471 | `primop concatMap` | `lib/modules.nix:1189:26` |

##### `primop map` (`lib/modules.nix:1191:11`)

|     % | Samples | Callee                   | Location                  |
| ----: | ------: | ------------------------ | ------------------------- |
| 99.8% |     469 | `primop addErrorContext` | `lib/modules.nix:1200:14` |

##### `primop addErrorContext` (`lib/modules.nix:1200:14`)

|     % | Samples | Callee                | Location                  |
| ----: | ------: | --------------------- | ------------------------- |
| 99.8% |     468 | `dischargeProperties` | `lib/modules.nix:1200:80` |

##### `dischargeProperties` (`lib/modules.nix:1200:80`)

|     % | Samples | Callee                | Location                                                |
| ----: | ------: | --------------------- | ------------------------------------------------------- |
| 60.0% |     281 | `primop isBool`       | `lib/modules.nix:1380:10`                               |
| 47.4% |     222 | `primop getAttr`      | `«nix-internal»/derivation-internal.nix:50:17`          |
| 30.8% |     144 | `primop concatLists`  | `nixos/modules/system/boot/systemd.nix:532:7`           |
| 12.0% |      56 | `dischargeProperties` | `lib/modules.nix:1381:31`                               |
| 10.0% |      47 | `flatten`             | `nixos/modules/system/boot/systemd/tmpfiles.nix:211:11` |

##### `mkDerivationSimple` (`pkgs/stdenv/generic/make-derivation.nix:308:22`)

|     % | Samples | Callee             | Location                                         |
| ----: | ------: | ------------------ | ------------------------------------------------ |
| 97.2% |     455 | `toFunction`       | `pkgs/stdenv/generic/make-derivation.nix:225:55` |
|  4.7% |      22 | `extendDerivation` | `pkgs/stdenv/generic/make-derivation.nix:1015:5` |
|  0.4% |       2 | `(anonymous)`      | `pkgs/stdenv/generic/make-derivation.nix:236:14` |
|  0.2% |       1 | `primop match`     | `pkgs/build-support/fetchurl/default.nix:280:27` |
|  0.2% |       1 | `primop head`      | `pkgs/build-support/fetchurl/default.nix:318:50` |

##### `makeDerivationExtensible` (`pkgs/stdenv/generic/make-derivation.nix:225:29`)

|     % | Samples | Callee               | Location                                         |
| ----: | ------: | -------------------- | ------------------------------------------------ |
| 99.8% |     467 | `mkDerivationSimple` | `pkgs/stdenv/generic/make-derivation.nix:308:22` |

##### `primop isFunction` (`lib/trivial.nix:1131:8`)

|     % | Samples | Callee          | Location                                             |
| ----: | ------: | --------------- | ---------------------------------------------------- |
| 99.8% |     455 | `(anonymous)`   | `nixos/modules/system/activation/top-level.nix:71:8` |
|  0.2% |       1 | `primop elemAt` | `lib/lists.nix:347:43`                               |

##### `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`)

|      % | Samples | Callee        | Location                   |
| -----: | ------: | ------------- | -------------------------- |
| 100.0% |     455 | `(anonymous)` | `lib/attrsets.nix:1188:85` |

##### `(anonymous)` (`lib/trivial.nix:1211:22`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |     455 | `primop isFunction` | `lib/trivial.nix:1131:8` |

##### `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`)

|      % | Samples | Callee        | Location                  |
| -----: | ------: | ------------- | ------------------------- |
| 100.0% |     455 | `(anonymous)` | `lib/trivial.nix:1211:22` |

##### `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`)

|      % | Samples | Callee                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |     455 | `makeDerivationExtensible` | `pkgs/stdenv/generic/make-derivation.nix:225:29` |

##### `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |     454 | `primop removeAttrs` | `lib/attrsets.nix:662:28` |

##### `(anonymous)` (`lib/modules.nix:1136:35`)

|      % | Samples | Callee            | Location                                           |
| -----: | ------: | ----------------- | -------------------------------------------------- |
| 100.0% |     454 | `primop mapAttrs` | `nixos/modules/config/shells-environment.nix:93:9` |

##### `primop mapAttrs` (`nixos/modules/config/shells-environment.nix:93:9`)

|      % | Samples | Callee        | Location                                            |
| -----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% |     454 | `filterAttrs` | `nixos/modules/config/shells-environment.nix:94:11` |

##### `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`)

|      % | Samples | Callee           | Location                                        |
| -----: | ------: | ---------------- | ----------------------------------------------- |
| 100.0% |     454 | `optionalString` | `nixos/modules/services/x11/xserver.nix:967:13` |

##### `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`)

|      % | Samples | Callee           | Location                                       |
| -----: | ------: | ---------------- | ---------------------------------------------- |
| 100.0% |     454 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17` |

##### `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`)

|     % | Samples | Callee           | Location                                         |
| ----: | ------: | ---------------- | ------------------------------------------------ |
| 70.2% |     318 | `primop getAttr` | `«nix-internal»/derivation-internal.nix:50:17`   |
| 24.9% |     113 | `primop map`     | `pkgs/build-support/buildenv/default.nix:113:25` |
|  4.2% |      19 | `(anonymous)`    | `pkgs/build-support/buildenv/default.nix:113:30` |
|  0.7% |       3 | `(anonymous)`    | `pkgs/build-support/buildenv/default.nix:114:11` |

##### `primop filter` (`lib/asserts.nix:195:46`)

|     % | Samples | Callee        | Location                                              |
| ----: | ------: | ------------- | ----------------------------------------------------- |
| 97.0% |     323 | `(anonymous)` | `lib/asserts.nix:195:54`                              |
|  3.0% |      10 | `(anonymous)` | `nixos/modules/system/activation/top-level.nix:78:54` |

##### `primop map` (`lib/asserts.nix:195:26`)

|      % | Samples | Callee          | Location                 |
| -----: | ------: | --------------- | ------------------------ |
| 100.0% |     333 | `primop filter` | `lib/asserts.nix:195:46` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.3% |      55 | `applyModuleArgs` (`lib/modules.nix:705:56`) ← `applyModuleArgsIfFunction` (450:13) ← `unifyModuleSyntax` (449:11) ← `loadModule` (536:37) ← `(anonymous)` (536:24) ← `primop concatLists` (527:24) ← `primop concatMap` (495:26) ← `primop elem` (497:27) ← `isDisabled` (568:39) ← `(anonymous)` (568:31) ← `primop filter` (571:22) ← `primop genericClosure` (570:36) ← `primop map` (570:9) ← `filterModules` (591:17) ← `primop length` (`lib/lists.nix:1125:11`) ← `primop genList` (1127:5) ← `reverseList` (`lib/modules.nix:275:37`) ← `primop map` (790:9) ← `primop zipAttrsWith` (789:21) ← `primop mapAttrs` (873:23) ← `primop mapAttrs` (925:24) ← `recurse` (`lib/attrsets.nix:1191:5`) ← `mapAttrsRecursiveCond` (`lib/modules.nix:283:28`) ← `primop seq` (402:18)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |      23 | `mergeEqualOption` (`lib/modules.nix:1254:11`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/etc/etc.nix:61:16`) ← `primop toString` (`lib/strings.nix:1203:16`) ← `primop match` (1205:8) ← `escapeShellArg` (1201:5) ← `primop concatStringsSep` (263:5) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:58:11`) ← `(anonymous)` (57:11) ← `primop concatStringsSep` (`lib/strings.nix:263:5`) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:56:11`) ← `primop derivationStrict:etc` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (37:12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.6% |      20 | `(anonymous)` ← `primop toString` (`nixos/lib/systemd-lib.nix:463:11`) ← `primop derivationStrict:system-units` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/etc/etc.nix:61:16`) ← `primop toString` (`lib/strings.nix:1203:16`) ← `primop match` (1205:8) ← `escapeShellArg` (1201:5) ← `primop concatStringsSep` (263:5) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:58:11`) ← `(anonymous)` (57:11) ← `primop concatStringsSep` (`lib/strings.nix:263:5`) ← `concatMapStringsSep` (`nixos/modules/system/etc/etc.nix:56:11`) ← `primop derivationStrict:etc` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (37:12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.5% |      19 | `primop mapAttrs` (`pkgs/os-specific/linux/minimal-bootstrap/utils.nix:42:19`) ← `primop derivationStrict:minimal-bootstrap-test-builder` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:minimal-bootstrap-test` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:stdenv-linux` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:glibc-iconv-2.42` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pkg-config-0.29.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pkg-config-wrapper-0.29.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:libxml2-2.15.2` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`pkgs/servers/http/nginx/generic.nix:180:26`) ← `primop isString` (`pkgs/stdenv/generic/make-derivation.nix:1009:14`) ← `(anonymous)` ← `primop derivationStrict:nginx-1.30.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:489:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18`) ← `svcUser` (20:5) ← `(anonymous)` (19:5) ← `primop all` (18:15) ← `(anonymous)` (`lib/asserts.nix:195:54`) ← `primop filter` (195:46) ← `primop map` (195:26) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |      19 | `(anonymous)` (`pkgs/build-support/buildenv/default.nix:113:30`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |      18 | `filter` (`nixos/modules/misc/documentation.nix:126:13`) ← `primop path` (122:27) ← `primop derivationStrict:lazy-options.json` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:options.json` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-configuration-reference-manpage` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.9% |      12 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:prefetch-npm-deps-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:npm-config-hook` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:furo-web-2025.12.19` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-furo-2025.12.19` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-pyproject-api-1.10.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-tox-4.34.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-jaraco-envs-2.6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:python3.13-distutils-80.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:scons-4.10.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:roc-toolkit-0.4.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pipewire-1.6.5` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`) |
| 0.7% |       9 | `getOutput` (`pkgs/stdenv/linux/default.nix:773:16`) ← `primop derivationStrict:stdenv-linux` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:glibc-iconv-2.42` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pkg-config-0.29.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:pkg-config-wrapper-0.29.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:libxml2-2.15.2` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`pkgs/servers/http/nginx/generic.nix:180:26`) ← `primop isString` (`pkgs/stdenv/generic/make-derivation.nix:1009:14`) ← `(anonymous)` ← `primop derivationStrict:nginx-1.30.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:489:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18`) ← `svcUser` (20:5) ← `(anonymous)` (19:5) ← `primop all` (18:15) ← `(anonymous)` (`lib/asserts.nix:195:54`) ← `primop filter` (195:46) ← `primop map` (195:26) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |       7 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       7 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:pandoc-3.7.0.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:pandoc-cli-3.7.0.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nuspell-5.1.7` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:enchant-2.6.9` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:evolution-data-server-3.60.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gnome-shell-50.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |       7 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:switch-to-configuration-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`nixos/modules/system/activation/switchable-system.nix:54:20`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/activatable-system.nix:82:73`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:43:7`) ← `primop derivationStrict:nixos-system-profiler-26.11pre-git` (`«nix-internal»/derivation-internal.nix:37:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% |       6 | `(anonymous)` (`nixos/doc/manual/default.nix:112:55`) ← `primop concatStringsSep` (`lib/strings.nix:263:5`) ← `concatMapStringsSep` (`nixos/doc/manual/default.nix:112:29`) ← `primop toString` (`lib/strings.nix:1203:16`) ← `primop match` (1205:8) ← `escapeShellArg` (`nixos/doc/manual/default.nix:112:13`) ← `primop derivationStrict:nixos-manual-html` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |       5 | `applyModuleArgs` (`lib/modules.nix:705:56`) ← `applyModuleArgsIfFunction` (450:13) ← `unifyModuleSyntax` (449:11) ← `loadModule` (536:37) ← `(anonymous)` (536:24) ← `primop concatLists` (527:24) ← `primop concatLists` (527:24) ← `primop concatMap` (495:26) ← `primop elem` (497:27) ← `isDisabled` (568:39) ← `(anonymous)` (568:31) ← `primop filter` (571:22) ← `primop genericClosure` (570:36) ← `primop map` (570:9) ← `filterModules` (591:17) ← `primop length` (`lib/lists.nix:1125:11`) ← `primop genList` (1127:5) ← `reverseList` (`lib/modules.nix:275:37`) ← `primop map` (790:9) ← `primop zipAttrsWith` (789:21) ← `primop mapAttrs` (873:23) ← `primop mapAttrs` (925:24) ← `recurse` (`lib/attrsets.nix:1191:5`) ← `mapAttrsRecursiveCond` (`lib/modules.nix:283:28`) ← `primop seq` (402:18)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.4% |       5 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:pipewire-1.6.5` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |       5 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:aeson-2.2.4.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:ShellCheck-0.11.0` (37:12) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`pkgs/build-support/trivial-builders/default.nix:330:15`) ← `optionalString` (327:31) ← `primop derivationStrict:unit-script-wpa_supplicant-start` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `getExe'` (`lib/meta.nix:528:5`) ← `getExe` (`nixos/lib/systemd-lib.nix:587:5`) ← `makeJobScript` (`nixos/lib/systemd-unit-options.nix:498:24`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd.nix:536:20`) ← `optional` (541:14) ← `primop concatLists` (540:11) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd.nix:532:7`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% |       4 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:gcc-15.2.0` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:bootstrap-stage4-gcc-wrapper-15.2.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:bash-5.3p9` (37:12) ← `primop getAttr` (50:17) ← `getOutput` (`pkgs/build-support/cc-wrapper/default.nix:984:13`) ← `primop isString` (`pkgs/stdenv/generic/make-derivation.nix:1009:14`) ← `(anonymous)` (`pkgs/stdenv/linux/default.nix:718:17`) ← `primop derivationStrict:libxml2-2.15.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop toString` (`pkgs/servers/http/nginx/generic.nix:180:26`) ← `primop isString` (`pkgs/stdenv/generic/make-derivation.nix:1009:14`) ← `(anonymous)` ← `primop derivationStrict:nginx-1.30.2` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:489:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/security/acme/mk-cert-ownership-assertion.nix:11:18`) ← `svcUser` (20:5) ← `(anonymous)` (19:5) ← `primop all` (18:15) ← `(anonymous)` (`lib/asserts.nix:195:54`) ← `primop filter` (195:46) ← `primop map` (195:26) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |       4 | `mkCrate` (`pkgs/build-support/rust/import-cargo-lock.nix:156:5`) ← `primop toString` (318:28) ← `primop derivationStrict:cargo-vendor-dir` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:nixos-init-0.1.0` (37:12) ← `primop getAttr` (50:17) ← `(anonymous)` (`lib/strings.nix:567:47`) ← `primop concatStringsSep` (567:20) ← `makeSearchPath` (606:5) ← `makeSearchPathOutput` (`nixos/modules/system/boot/systemd/initrd.nix:695:15`) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/lib/systemd-unit-options.nix:497:16`) ← `primop isBool` (`lib/modules.nix:1380:10`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/initrd.nix:125:30`) ← `(anonymous)` ← `primop concatLists` (`nixos/modules/system/boot/systemd/initrd.nix:124:16`) ← `dischargeProperties` (`lib/modules.nix:1381:31`) ← `dischargeProperties` (1200:80) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/boot/systemd/tmpfiles.nix:199:35`) ← `primop map` (199:11) ← `primop filter` (198:17) ← `primop length` (202:21) ← `primop lessThan` (202:38) ← `optional` (202:7) ← `dischargeProperties` (`lib/modules.nix:1200:80`) ← `primop addErrorContext` (1200:14) ← `primop map` (1191:11) ← `(anonymous)` (1190:11) ← `primop concatMap` (1189:26) ← `primop length` (1424:8) ← `(anonymous)` (1204:24) ← `primop any` (1209:14) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:78:72`) ← `primop length` (`lib/lists.nix:140:13`) ← `fold'` (143:5) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.3% |       4 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:systemd-260.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `(anonymous)` (`lib/attrsets.nix:1926:9`) ← `getOutput` (`lib/strings.nix:567:86`) ← `(anonymous)` (567:83) ← `primop filter` (567:75) ← `primop map` (567:42) ← `primop concatStringsSep` (567:20) ← `makeSearchPath` (606:5) ← `makeSearchPathOutput` (`nixos/modules/config/nsswitch.nix:24:16`) ← `(anonymous)` (`lib/asserts.nix:195:54`) ← `primop filter` (195:46) ← `primop map` (195:26) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |       4 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:582:18`) ← `primop derivationStrict:ffmpeg-headless-8.1` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:pipewire-1.6.5` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:openal-soft-1.24.3` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gst-plugins-bad-1.26.11` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gtk4-4.22.4` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:ibus-with-plugins-1.5.33` (37:12) ← `primop getAttr` (50:17) ← `primop toString` (`lib/types.nix:695:41`) ← `primop substring` (695:26) ← `check` (1220:31) ← `check` (`lib/modules.nix:1253:27`) ← `(anonymous)` (1253:22) ← `primop all` (1253:17) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/i18n/input-method/default.nix:106:7`) ← `primop elemAt` (`lib/lists.nix:347:43`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/types.nix:724:29`) ← `primop filter` (724:21) ← `primop map` (743:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/config/system-path.nix:209:15`) ← `primop map` (`pkgs/build-support/buildenv/default.nix:113:25`) ← `primop derivationStrict:system-path` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3% |       4 | `(anonymous)` (`pkgs/stdenv/generic/make-derivation.nix:631:18`) ← `primop derivationStrict:pandoc-lua-engine-0.4.3` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop derivationStrict:pandoc-cli-3.7.0.2` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:nuspell-5.1.7` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:enchant-2.6.9` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:webkitgtk-2.52.4+abi=6.0` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:evolution-data-server-3.60.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:gnome-shell-50.1` (37:12) ← `primop getAttr` (50:17) ← `primop derivationStrict:system-path` (37:12) ← `primop getAttr` (50:17) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop removeAttrs` (`lib/attrsets.nix:662:28`) ← `filterAttrs` (`nixos/modules/config/shells-environment.nix:94:11`) ← `primop mapAttrs` (93:9) ← `(anonymous)` (`lib/modules.nix:1136:35`) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/services/x11/xserver.nix:968:13`) ← `optionalString` (967:13) ← `primop derivationStrict:xkb-validated` (`«nix-internal»/derivation-internal.nix:37:12`) ← `primop getAttr` (50:17) ← `primop concatStringsSep` (`nixos/modules/system/activation/top-level.nix:376:22`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `(anonymous)` (`lib/attrsets.nix:662:60`) ← `(anonymous)` (662:53) ← `primop filter` (662:45) ← `primop removeAttrs` (662:28) ← `filterAttrs` (`lib/types.nix:1019:17`) ← `primop mapAttrs` (1025:21) ← `primop addErrorContext` (`lib/modules.nix:1147:15`) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` (`nixos/modules/system/activation/top-level.nix:71:8`) ← `primop isFunction` (`lib/trivial.nix:1131:8`) ← `(anonymous)` (1211:22) ← `toFunction` (`pkgs/stdenv/generic/make-derivation.nix:225:55`) ← `mkDerivationSimple` (308:22) ← `makeDerivationExtensible` (225:29) ← `mkDerivation` (`nixos/modules/system/activation/top-level.nix:58:16`) ← `fold'` (`lib/lists.nix:143:5`) ← `foldr` (`lib/trivial.nix:1051:33`) ← `showWarnings` (`lib/asserts.nix:200:7`) ← `checkAssertWarn` (`nixos/modules/system/activation/top-level.nix:78:26`) ← `primop isAttrs` (`lib/modules.nix:1228:15`) ← `primop addErrorContext` (1227:11) ← `primop addErrorContext` (1147:15) ← `(anonymous)` (`lib/attrsets.nix:1188:85`) ← `(anonymous)` ← `primop head` (`lib/attrsets.nix:1714:13`) ← `(anonymous)` (`nixos/default.nix:21:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
