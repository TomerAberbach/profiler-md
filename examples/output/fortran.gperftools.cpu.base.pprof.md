# CPU profile

Took 3.84s over 3,849 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 59.1% | 2.27s |   2,275 |
| Native   | 40.9% | 1.57s |   1,574 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                  | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 51.3% |   1.97s |   1,975 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  4.3% | 165.0ms |     165 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
|  2.7% | 102.0ms |     102 | `_init`                                   | `<unknown>`                                      |
|  1.9% |  72.0ms |      72 | `0x118970`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.6% |  63.0ms |      63 | `0x118680`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.6% |  62.0ms |      62 | `0x92240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.6% |  60.0ms |      60 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.5% |  58.0ms |      58 | `0x118994`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  47.0ms |      47 | `0x8faf4`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.2% |  46.0ms |      46 | `0x92284`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.2% |  45.0ms |      45 | `0x929c4`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.2% |  45.0ms |      45 | `0x118720`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.1% |  43.0ms |      43 | `0x929e0`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.1% |  41.0ms |      41 | `0xddb88`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.9% |  33.0ms |      33 | `0x1189ec`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.8% |  32.0ms |      32 | `0x91228`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.8% |  31.0ms |      31 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.6% |  23.0ms |      23 | `0x1186f8`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.5% |  21.0ms |      21 | `0x92c70`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.5% |  21.0ms |      21 | `0x10c300`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                        | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 51.3% |   1.97s |   1,975 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|  4.3% | 165.0ms |     165 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% |  31.0ms |      31 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% |  20.0ms |      20 | `__json_string_utilities_MOD_unescape_string`   | `src/json-fortran/src/json_string_utilities.F90` |
|  0.4% |  15.0ms |      15 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  0.4% |  14.0ms |      14 | `__json_value_module_MOD_json_value_destroy`    | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  13.0ms |      13 | `__json_value_module_MOD_destroy_json_data`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  11.0ms |      11 | `__json_value_module_MOD_parse_for_chars`       | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   6.0ms |       6 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   6.0ms |       6 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_pop_char`              | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   3.0ms |       3 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |   2.0ms |       2 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   2.0ms |       2 | `__json_value_module_MOD_to_logical`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   2.0ms |       2 | `__json_value_module_MOD_json_info`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_integer`            | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|    % |    Time | Samples | Function   | Location                                         |
| ---: | ------: | ------: | ---------- | ------------------------------------------------ |
| 2.7% | 102.0ms |     102 | `_init`    | `<unknown>`                                      |
| 1.9% |  72.0ms |      72 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.6% |  63.0ms |      63 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.6% |  62.0ms |      62 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.6% |  60.0ms |      60 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.5% |  58.0ms |      58 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.2% |  47.0ms |      47 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.2% |  46.0ms |      46 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.2% |  45.0ms |      45 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.2% |  45.0ms |      45 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.1% |  43.0ms |      43 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.1% |  41.0ms |      41 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.9% |  33.0ms |      33 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.8% |  32.0ms |      32 | `0x91228`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% |  23.0ms |      23 | `0x1186f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% |  21.0ms |      21 | `0x92c70`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% |  21.0ms |      21 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% |  20.0ms |      20 | `0x1189f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% |  20.0ms |      20 | `0x9e658`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% |  18.0ms |      18 | `0x90dc0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 72.5% |  1.43s |   1,431 | `src/json-fortran/src/json_value_module.F90:11447` |
|  4.8% | 94.0ms |      94 | `src/json-fortran/src/json_value_module.F90:11469` |
|  3.7% | 73.0ms |      73 | `src/json-fortran/src/json_value_module.F90:11395` |
|  3.4% | 68.0ms |      68 | `src/json-fortran/src/json_value_module.F90:11318` |
|  3.3% | 66.0ms |      66 | `src/json-fortran/src/json_value_module.F90:11452` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 30.3% | 50.0ms |      50 | `src/json-fortran/src/json_value_module.F90:11084` |
| 19.4% | 32.0ms |      32 | `src/json-fortran/src/json_value_module.F90:11091` |
| 18.2% | 30.0ms |      30 | `src/json-fortran/src/json_value_module.F90:11098` |
| 17.6% | 29.0ms |      29 | `src/json-fortran/src/json_value_module.F90:11086` |
|  6.1% | 10.0ms |      10 | `src/json-fortran/src/json_value_module.F90:11122` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 35.5% | 11.0ms |      11 | `src/json-fortran/src/json_value_module.F90:10221` |
| 25.8% |  8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:10202` |
|  9.7% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10147` |
|  9.7% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10139` |
|  9.7% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10156` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 15.0% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 15.0% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:514` |
| 15.0% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:611` |
| 15.0% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:615` |
| 10.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:483` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 20.0% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10980` |
| 20.0% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10902` |
| 13.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10910` |
| 13.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10938` |
| 13.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10899` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 21.4% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:2269` |
| 14.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2259` |
| 14.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2290` |
| 14.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2263` |
| 14.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2277` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 38.5% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:1400` |
| 23.1% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:1396` |
| 15.4% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1398` |
| 15.4% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1393` |
|  7.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1397` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 63.6% | 7.0ms |       7 | `src/json-fortran/src/json_value_module.F90:11164` |
| 18.2% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11163` |
|  9.1% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11161` |
|  9.1% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11165` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 50.0% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11292` |
| 33.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11225` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11266` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 33.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3433` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3406` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3443` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3423` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3420` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 75.0% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:2213` |
| 25.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2211` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:11341` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11008` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10659` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1423` |
| 50.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1419` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10776` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10703` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 60.4% |   1.19s |   1,193 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 26.5% | 523.0ms |     523 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  8.1% | 160.0ms |     160 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  2.3% |  46.0ms |      46 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  1.9% |  38.0ms |      38 | `__json_value_module_MOD_parse_number`    | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 52.1% | 86.0ms |      86 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 47.9% | 79.0ms |      79 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 67.6% | 69.0ms |      69 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 20.6% | 21.0ms |      21 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  4.9% |  5.0ms |       5 | `__json_value_module_MOD_parse_string`  | `src/json-fortran/src/json_value_module.F90` |
|  2.9% |  3.0ms |       3 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  2.0% |  2.0ms |       2 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118970` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 55.6% | 40.0ms |      40 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 33.3% | 24.0ms |      24 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  8.3% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  2.8% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118680` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 85.7% | 54.0ms |      54 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
|  9.5% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  1.6% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90`     |
|  1.6% |  1.0ms |       1 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90`     |
|  1.6% |  1.0ms |       1 | `0x10b283`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92240` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                             | Location                                     |
| ----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 62.9% | 39.0ms |      39 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90` |
| 16.1% | 10.0ms |      10 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  9.7% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90` |
|  8.1% |  5.0ms |       5 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90` |
|  1.6% |  1.0ms |       1 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `0x11899c` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 68.3% | 41.0ms |      41 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 30.0% | 18.0ms |      18 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  1.7% |  1.0ms |       1 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118994` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 55.2% | 32.0ms |      32 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 27.6% | 16.0ms |      16 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 13.8% |  8.0ms |       8 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  3.4% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x8faf4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 66.0% | 31.0ms |      31 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 29.8% | 14.0ms |      14 | `0x91c5f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.3% |  2.0ms |       2 | `0x91bfb` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92284` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                      | Location                                         |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------ |
| 30.4% | 14.0ms |      14 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`     |
| 19.6% |  9.0ms |       9 | `0x1c1b3`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 15.2% |  7.0ms |       7 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`     |
|  8.7% |  4.0ms |       4 | `0x9980f`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  6.5% |  3.0ms |       3 | `0x1c1f3`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x929c4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 73.3% | 33.0ms |      33 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 15.6% |  7.0ms |       7 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  6.7% |  3.0ms |       3 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  2.2% |  1.0ms |       1 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |
|  2.2% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`   | `src/json-fortran/src/json_value_module.F90` |

##### `0x118720` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                          | Location                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 51.1% | 23.0ms |      23 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 46.7% | 21.0ms |      21 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  2.2% |  1.0ms |       1 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0x929e0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 30.2% | 13.0ms |      13 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
| 14.0% |  6.0ms |       6 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90` |
| 11.6% |  5.0ms |       5 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
| 11.6% |  5.0ms |       5 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
|  9.3% |  4.0ms |       4 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |

##### `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 41.0ms |      41 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1189ec` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 60.6% | 20.0ms |      20 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 21.2% |  7.0ms |       7 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 18.2% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x91228` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 32.0ms |      32 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 90.3% | 28.0ms |      28 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  6.5% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
|  3.2% |  1.0ms |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1186f8` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 69.6% | 16.0ms |      16 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 13.0% |  3.0ms |       3 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| 13.0% |  3.0ms |       3 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |
|  4.3% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x92c70` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 71.4% | 15.0ms |      15 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 28.6% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x10c300` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 21.0ms |      21 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 20.0ms |      20 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1189f8` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 45.0% | 9.0ms |       9 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 45.0% | 9.0ms |       9 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 10.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x9e658` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 20.0ms |      20 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x90dc0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 18.0ms |      18 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 15.0ms |      15 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 14.0ms |      14 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 84.6% | 11.0ms |      11 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  1.0ms |       1 | `__json_value_module_MOD_to_logical`         | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  1.0ms |       1 | `__json_value_module_MOD_to_string`          | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                | Location                                     |
| -----: | -----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 11.0ms |      11 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 6.0ms |       6 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                          | Location                                     |
| ----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 66.7% | 4.0ms |       4 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |
| 33.3% | 2.0ms |       2 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 4.0ms |       4 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 75.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 25.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Time | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                        | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% |   3.84s |   3,849 | `MAIN__`                                        | `out/profile.f90`                                |
| 100.0% |   3.84s |   3,849 | `main`                                          | `out/profile.f90`                                |
| 100.0% |   3.84s |   3,849 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.84s |   3,849 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.84s |   3,849 | `_start`                                        | `<unknown>`                                      |
|  97.3% |   3.74s |   3,745 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
|  97.3% |   3.74s |   3,744 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  94.8% |   3.64s |   3,648 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  94.6% |   3.64s |   3,643 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  53.5% |   2.06s |   2,061 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|  45.4% |   1.74s |   1,746 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  32.7% |   1.26s |   1,260 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  11.0% | 423.0ms |     423 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|   9.0% | 345.0ms |     345 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|   7.9% | 303.0ms |     303 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|   6.0% | 231.0ms |     231 | `0x9245b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   3.4% | 132.0ms |     132 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.7% | 104.0ms |     104 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.7% | 102.0ms |     102 | `_init`                                         | `<unknown>`                                      |
|   2.1% |  80.0ms |      80 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |

#### Categories

##### Ours

|      % |    Time | Samples | Function                                          | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% |   3.84s |   3,849 | `MAIN__`                                          | `out/profile.f90`                                  |
| 100.0% |   3.84s |   3,849 | `main`                                            | `out/profile.f90`                                  |
|  97.3% |   3.74s |   3,745 | `__json_file_module_MOD_json_file_load`           | `src/json-fortran/src/json_file_module.F90`        |
|  97.3% |   3.74s |   3,744 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  94.8% |   3.64s |   3,648 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  94.6% |   3.64s |   3,643 | `__json_value_module_MOD_parse_array`             | `src/json-fortran/src/json_value_module.F90`       |
|  53.5% |   2.06s |   2,061 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
|  45.4% |   1.74s |   1,746 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  32.7% |   1.26s |   1,260 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  11.0% | 423.0ms |     423 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|   9.0% | 345.0ms |     345 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90`       |
|   7.9% | 303.0ms |     303 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|   2.1% |  80.0ms |      80 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|   1.8% |  70.0ms |      70 | `__json_value_module_MOD_json_value_destroy`      | `src/json-fortran/src/json_value_module.F90`       |
|   1.8% |  70.0ms |      70 | `__json_file_module_MOD_json_file_destroy`        | `src/json-fortran/src/json_file_module.F90`        |
|   1.6% |  61.0ms |      61 | `__json_value_module_MOD_parse_for_chars`         | `src/json-fortran/src/json_value_module.F90`       |
|   0.6% |  22.0ms |      22 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90`       |
|   0.6% |  22.0ms |      22 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|   0.5% |  18.0ms |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|   0.5% |  18.0ms |      18 | `__json_file_module_MOD_json_file_get_string`     | `src/json-fortran/src/json_file_module.F90`        |

##### Native

|      % |    Time | Samples | Function   | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% |   3.84s |   3,849 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.84s |   3,849 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.84s |   3,849 | `_start`   | `<unknown>`                                      |
|   6.0% | 231.0ms |     231 | `0x9245b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   3.4% | 132.0ms |     132 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.7% | 104.0ms |     104 | `0x1c1b3`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.7% | 102.0ms |     102 | `_init`    | `<unknown>`                                      |
|   1.9% |  72.0ms |      72 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.7% |  67.0ms |      67 | `0x9102b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.7% |  65.0ms |      65 | `0x92f67`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.7% |  64.0ms |      64 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.7% |  64.0ms |      64 | `0x10324b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.7% |  64.0ms |      64 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.6% |  63.0ms |      63 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.6% |  62.0ms |      62 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.6% |  60.0ms |      60 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.5% |  58.0ms |      58 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.5% |  58.0ms |      58 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  55.0ms |      55 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.4% |  52.0ms |      52 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `MAIN__` (`out/profile.f90`)

|     % |   Time | Samples | Callee                                        | Location                                         |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 97.3% |  3.74s |   3,745 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90`      |
|  1.8% | 70.0ms |      70 | `__json_file_module_MOD_json_file_destroy`    | `src/json-fortran/src/json_file_module.F90`      |
|  0.5% | 18.0ms |      18 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90`      |
|  0.1% |  5.0ms |       5 | `0x109623`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |  3.0ms |       3 | `0x1093fb`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `main` (`out/profile.f90`)

|      % |  Time | Samples | Callee   | Location          |
| -----: | ----: | ------: | -------- | ----------------- |
| 100.0% | 3.84s |   3,849 | `MAIN__` | `out/profile.f90` |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 3.84s |   3,849 | `main` | `out/profile.f90` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.84s |   3,849 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.84s |   3,849 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |  Time | Samples | Callee                                    | Location                                         |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 100.0% | 3.74s |   3,744 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90`     |
|  <0.1% | 1.0ms |       1 | `0x118698`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 97.4% |  3.64s |   3,648 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
|  1.7% | 64.0ms |      64 | `0x10324b`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.6% | 21.0ms |      21 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% | 10.0ms |      10 | `0x10b3c3`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x10b44f`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 99.9% |   3.64s |   3,643 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| 99.6% |   3.63s |   3,632 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 32.7% |   1.19s |   1,194 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
| 24.3% | 888.0ms |     888 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 14.8% | 541.0ms |     541 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                      | Location                                     |
| ----: | -----: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.9% |  3.63s |   3,639 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  1.7% | 61.0ms |      61 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 45.0ms |      45 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  0.4% | 15.0ms |      15 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90` |
|  0.2% |  6.0ms |       6 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
|  3.1% | 64.0ms |      64 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% |  8.0ms |       8 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |  2.0ms |       2 | `0x1093fc` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x10a4bc` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x109394` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                         |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 70.6% |  1.23s |   1,233 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.1% | 54.0ms |      54 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  3.1% | 54.0ms |      54 | `0x92f67`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  2.3% | 41.0ms |      41 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.8% | 32.0ms |      32 | `0x118994`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 68.1% | 858.0ms |     858 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
| 14.6% | 184.0ms |     184 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  4.8% |  61.0ms |      61 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90`     |
|  1.7% |  21.0ms |      21 | `0x118720`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.7% |  21.0ms |      21 | `_init`                                   | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 81.6% | 345.0ms |     345 | `__json_value_module_MOD_string_to_int`   | `src/json-fortran/src/json_value_module.F90`     |
|  9.5% |  40.0ms |      40 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.3% |  14.0ms |      14 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.2% |   5.0ms |       5 | `0x92240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.7% |   3.0ms |       3 | `0x1186f8`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                          | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 84.9% | 293.0ms |     293 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  2.9% |  10.0ms |      10 | `0x92240`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  2.0% |   7.0ms |       7 | `0x929c4`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.2% |   4.0ms |       4 | `0x1185e0`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.9% |   3.0ms |       3 | `0x1186dc`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 41.9% | 127.0ms |     127 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 15.5% |  47.0ms |      47 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.9% |  18.0ms |      18 | `0x108f53` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.3% |  16.0ms |      16 | `0x1098bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.3% |  10.0ms |      10 | `0x10a0fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9245b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 29.0% | 67.0ms |      67 | `0x9102b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 13.9% | 32.0ms |      32 | `0x91228` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.8% | 18.0ms |      18 | `0x90dc0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.6% | 13.0ms |      13 | `0x9123c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.8% | 11.0ms |      11 | `0x9155f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                         |
| ----: | -----: | ------: | --------- | ------------------------------------------------ |
| 33.3% | 44.0ms |      44 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 26.5% | 35.0ms |      35 | `0xfa7fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 15.2% | 20.0ms |      20 | `0x9e658` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 10.6% | 14.0ms |      14 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.8% |  9.0ms |       9 | `0xfa727` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 87.5% | 91.0ms |      91 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.7% |  9.0ms |       9 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.0% |  1.0ms |       1 | `0x9236c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.0% |  1.0ms |       1 | `0x92464` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.0% |  1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 77.5% | 62.0ms |      62 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.8% |  7.0ms |       7 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.5% |  2.0ms |       2 | `0x92260` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.5% |  2.0ms |       2 | `0x923e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.3% |  1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 70.0ms |      70 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  28.6% | 20.0ms |      20 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
|  22.9% | 16.0ms |      16 | `0x92a9b`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  18.6% | 13.0ms |      13 | `0x929e0`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|   4.3% |  3.0ms |       3 | `0x92a58`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |

##### `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 70.0ms |      70 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9102b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee     | Location                              |
| ----: | -----: | ------: | ---------- | ------------------------------------- |
| 19.4% | 13.0ms |      13 | `0x8eb7f`  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 14.9% | 10.0ms |      10 | `0x8eb04`  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.0% |  6.0ms |       6 | `0x8eb3f`  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.0% |  6.0ms |       6 | `0x1376f4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.5% |  5.0ms |       5 | `0x1376e8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92f67` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 75.4% | 49.0ms |      49 | `0x91c5f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.2% |  4.0ms |       4 | `0x91bfb` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.6% |  3.0ms |       3 | `0x91b93` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.1% |  2.0ms |       2 | `0x91ad4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.1% |  2.0ms |       2 | `0x91c58` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 81.3% | 52.0ms |      52 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 18.8% | 12.0ms |      12 | `0x10c997` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 64.0ms |      64 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10a47b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 64.1% | 41.0ms |      41 | `0x10c353` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 32.8% | 21.0ms |      21 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.6% |  1.0ms |       1 | `0x10c318` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.6% |  1.0ms |       1 | `0x10c460` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                         |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 78.7% | 48.0ms |      48 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.3% |  2.0ms |       2 | `0x106110`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 31.0% | 18.0ms |      18 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 25.9% | 15.0ms |      15 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 17.2% | 10.0ms |      10 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.2% |  3.0ms |       3 | `0x10a918` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.2% |  3.0ms |       3 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 56.4% | 31.0ms |      31 | `0x8faf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 14.5% |  8.0ms |       8 | `0x8fbf0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.3% |  4.0ms |       4 | `0x8fb44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.5% |  3.0ms |       3 | `0x8faa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.8% |  1.0ms |       1 | `0x8fbc8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee    | Location                                         |
| -----: | -----: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 52.0ms |      52 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 22.7% | 5.0ms |       5 | `0x929e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 18.2% | 4.0ms |       4 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|    % |  Time | Samples | Callee    | Location                              |
| ---: | ----: | ------: | --------- | ------------------------------------- |
| 4.5% | 1.0ms |       1 | `0x92260` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 4.5% | 1.0ms |       1 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |   Time | Samples | Callee                                     | Location                                     |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 94.4% | 17.0ms |      17 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |
|  5.6% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                            | Location                                           |
| -----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 18.0ms |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 85.0ms |      85 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.9% | 74.0ms |      74 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% | 66.0ms |      66 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% | 47.0ms |      47 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% | 26.0ms |      26 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% | 25.0ms |      25 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 20.0ms |      20 | `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x10bd0b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10c353` ← `0x10a47b` ← `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
