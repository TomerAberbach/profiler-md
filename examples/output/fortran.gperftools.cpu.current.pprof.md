# CPU profile

Took 4.04s over 4,047 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 61.4% | 2.48s |   2,483 |
| Native   | 38.6% | 1.56s |   1,564 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                  | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 54.0% |   2.18s |   2,184 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.5% | 143.0ms |     143 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
|  1.9% |  77.0ms |      77 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.7% |  67.0ms |      67 | `_init`                                   | `<unknown>`                                      |
|  1.5% |  60.0ms |      60 | `0x929c4`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.4% |  56.0ms |      56 | `0xddb88`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.3% |  53.0ms |      53 | `0x118970`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  50.0ms |      50 | `0x1189ec`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  48.0ms |      48 | `0x118680`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  48.0ms |      48 | `0x118994`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.1% |  44.0ms |      44 | `0x8faf4`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.1% |  43.0ms |      43 | `0x91228`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.0% |  41.0ms |      41 | `0x92240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.0% |  39.0ms |      39 | `0x929e0`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.9% |  35.0ms |      35 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90`     |
|  0.9% |  35.0ms |      35 | `0x118720`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.7% |  29.0ms |      29 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.7% |  28.0ms |      28 | `0x92c70`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.6% |  26.0ms |      26 | `0x92284`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.6% |  24.0ms |      24 | `0x9123c`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                          | Location                                         |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 54.0% |   2.18s |   2,184 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`     |
|  3.5% | 143.0ms |     143 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.9% |  35.0ms |      35 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.7% |  29.0ms |      29 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`     |
|  0.4% |  17.0ms |      17 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90` |
|  0.4% |  16.0ms |      16 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  13.0ms |      13 | `__json_value_module_MOD_json_value_destroy`      | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  11.0ms |      11 | `__json_value_module_MOD_parse_for_chars`         | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |  10.0ms |      10 | `__json_value_module_MOD_json_value_add_member`   | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   6.0ms |       6 | `__json_value_module_MOD_json_info`               | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   5.0ms |       5 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   2.0ms |       2 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90` |
| <0.1% |   2.0ms |       2 | `__json_value_module_MOD_pop_char`                | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   2.0ms |       2 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_parse_array`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_object`               | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|    % |   Time | Samples | Function   | Location                                         |
| ---: | -----: | ------: | ---------- | ------------------------------------------------ |
| 1.9% | 77.0ms |      77 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.7% | 67.0ms |      67 | `_init`    | `<unknown>`                                      |
| 1.5% | 60.0ms |      60 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.4% | 56.0ms |      56 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.3% | 53.0ms |      53 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.2% | 50.0ms |      50 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.2% | 48.0ms |      48 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.2% | 48.0ms |      48 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.1% | 44.0ms |      44 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.1% | 43.0ms |      43 | `0x91228`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.0% | 41.0ms |      41 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.0% | 39.0ms |      39 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.9% | 35.0ms |      35 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.7% | 28.0ms |      28 | `0x92c70`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% | 26.0ms |      26 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% | 24.0ms |      24 | `0x9123c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% | 22.0ms |      22 | `0x9e658`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% | 22.0ms |      22 | `0x1189f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% | 21.0ms |      21 | `0x90dc0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% | 20.0ms |      20 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Location                                           |
| ----: | ------: | ------: | -------------------------------------------------- |
| 72.6% |   1.58s |   1,585 | `src/json-fortran/src/json_value_module.F90:11447` |
|  4.6% | 101.0ms |     101 | `src/json-fortran/src/json_value_module.F90:11395` |
|  3.9% |  86.0ms |      86 | `src/json-fortran/src/json_value_module.F90:11452` |
|  3.7% |  80.0ms |      80 | `src/json-fortran/src/json_value_module.F90:11358` |
|  3.5% |  77.0ms |      77 | `src/json-fortran/src/json_value_module.F90:11469` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 33.6% | 48.0ms |      48 | `src/json-fortran/src/json_value_module.F90:11084` |
| 18.9% | 27.0ms |      27 | `src/json-fortran/src/json_value_module.F90:11098` |
| 15.4% | 22.0ms |      22 | `src/json-fortran/src/json_value_module.F90:11091` |
| 12.6% | 18.0ms |      18 | `src/json-fortran/src/json_value_module.F90:11086` |
|  4.9% |  7.0ms |       7 | `src/json-fortran/src/json_value_module.F90:11122` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 22.9% | 8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:10969` |
| 17.1% | 6.0ms |       6 | `src/json-fortran/src/json_value_module.F90:10910` |
| 14.3% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:10923` |
|  8.6% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10980` |
|  5.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10939` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 55.2% | 16.0ms |      16 | `src/json-fortran/src/json_value_module.F90:10221` |
|  6.9% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10145` |
|  6.9% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10170` |
|  6.9% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10162` |
|  6.9% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10215` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 29.4% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:605` |
| 17.6% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 17.6% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:615` |
| 11.8% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:501` |
| 11.8% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:518` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 37.5% | 6.0ms |       6 | `src/json-fortran/src/json_value_module.F90:1396` |
| 18.8% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:1393` |
| 18.8% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:1400` |
| 12.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1398` |
|  6.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1395` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 30.8% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:2296` |
| 15.4% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2277` |
| 15.4% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2269` |
| 15.4% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2263` |
|  7.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2259` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 81.8% | 9.0ms |       9 | `src/json-fortran/src/json_value_module.F90:11164` |
| 18.2% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11163` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 20.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3408` |
| 20.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3421` |
| 20.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3423` |
| 10.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3433` |
| 10.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3420` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 83.3% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:1419` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1421` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 60.0% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11292` |
| 40.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11225` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2204` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2213` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 50.0% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:131` |
| 50.0% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:134` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11341` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10755` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11018` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:8087` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10671` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:9182` |

##### `__json_value_module_MOD_to_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10852` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 58.5% |   1.27s |   1,278 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 28.6% | 624.0ms |     624 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.6% | 165.0ms |     165 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  2.6% |  57.0ms |      57 | `__json_value_module_MOD_parse_number`    | `src/json-fortran/src/json_value_module.F90` |
|  2.4% |  52.0ms |      52 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 59.4% | 85.0ms |      85 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 39.2% | 56.0ms |      56 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  0.7% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
|  0.7% |  1.0ms |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `0x11899c` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 63.6% | 49.0ms |      49 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 31.2% | 24.0ms |      24 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  5.2% |  4.0ms |       4 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 56.7% | 38.0ms |      38 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
| 25.4% | 17.0ms |      17 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |
|  6.0% |  4.0ms |       4 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  2.0ms |       2 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  2.0ms |       2 | `__json_value_module_MOD_string_to_int`      | `src/json-fortran/src/json_value_module.F90` |

##### `0x929c4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 78.3% | 47.0ms |      47 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 10.0% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  8.3% |  5.0ms |       5 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  3.3% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`   | `src/json-fortran/src/json_value_module.F90` |

##### `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 56.0ms |      56 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x118970` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 62.3% | 33.0ms |      33 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 20.8% | 11.0ms |      11 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 13.2% |  7.0ms |       7 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  3.8% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x1189ec` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 68.0% | 34.0ms |      34 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 26.0% | 13.0ms |      13 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  6.0% |  3.0ms |       3 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118680` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 81.3% | 39.0ms |      39 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
|  8.3% |  4.0ms |       4 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  4.2% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90`     |
|  4.2% |  2.0ms |       2 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90`     |
|  2.1% |  1.0ms |       1 | `0x10b283`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x118994` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 35.4% | 17.0ms |      17 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 35.4% | 17.0ms |      17 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 29.2% | 14.0ms |      14 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x8faf4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 86.4% | 38.0ms |      38 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.1% |  4.0ms |       4 | `0x91c5f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.5% |  2.0ms |       2 | `0x91bfb` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91228` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 95.3% | 41.0ms |      41 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.7% |  2.0ms |       2 | `0x91b93` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92240` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 68.3% | 28.0ms |      28 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
|  9.8% |  4.0ms |       4 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  9.8% |  4.0ms |       4 | `__json_value_module_MOD_parse_array`   | `src/json-fortran/src/json_value_module.F90` |
|  7.3% |  3.0ms |       3 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |
|  4.9% |  2.0ms |       2 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |

##### `0x929e0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                       | Location                                         |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------------ |
| 25.6% | 10.0ms |      10 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90`     |
| 17.9% |  7.0ms |       7 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90`     |
| 12.8% |  5.0ms |       5 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90`     |
| 12.8% |  5.0ms |       5 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90`     |
|  7.7% |  3.0ms |       3 | `0x112f0f`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 97.1% | 34.0ms |      34 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  2.9% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118720` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                          | Location                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 57.1% | 20.0ms |      20 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 40.0% | 14.0ms |      14 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  2.9% |  1.0ms |       1 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 86.2% | 25.0ms |      25 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 13.8% |  4.0ms |       4 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x92c70` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                            | Location                                           |
| ----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 78.6% | 22.0ms |      22 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
| 17.9% |  5.0ms |       5 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.6% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `0x92284` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                          | Location                                         |
| ----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 26.9% | 7.0ms |       7 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
| 23.1% | 6.0ms |       6 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
| 15.4% | 4.0ms |       4 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 11.5% | 3.0ms |       3 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  7.7% | 2.0ms |       2 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9123c` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 95.8% | 23.0ms |      23 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.2% |  1.0ms |       1 | `0x91b93` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9e658` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 22.0ms |      22 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1189f8` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 59.1% | 13.0ms |      13 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 27.3% |  6.0ms |       6 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 13.6% |  3.0ms |       3 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x90dc0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 95.2% | 20.0ms |      20 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.8% |  1.0ms |       1 | `0x91b93` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10c300` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 20.0ms |      20 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 17.0ms |      17 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 68.8% | 11.0ms |      11 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
| 12.5% |  2.0ms |       2 | `__json_value_module_MOD_to_array`           | `src/json-fortran/src/json_value_module.F90` |
|  6.3% |  1.0ms |       1 | `__json_value_module_MOD_to_logical`         | `src/json-fortran/src/json_value_module.F90` |
|  6.3% |  1.0ms |       1 | `__json_value_module_MOD_to_integer`         | `src/json-fortran/src/json_value_module.F90` |
|  6.3% |  1.0ms |       1 | `__json_value_module_MOD_to_object`          | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 13.0ms |      13 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                | Location                                     |
| -----: | -----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 11.0ms |      11 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                          | Location                                     |
| ----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 80.0% | 8.0ms |       8 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |
| 20.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% | 6.0ms |       6 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 5.0ms |       5 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Time | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 50.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 50.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                        | Location                                    |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_to_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                        | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% |   4.04s |   4,047 | `MAIN__`                                        | `out/profile.f90`                                |
| 100.0% |   4.04s |   4,047 | `main`                                          | `out/profile.f90`                                |
| 100.0% |   4.04s |   4,047 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   4.04s |   4,047 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   4.04s |   4,047 | `_start`                                        | `<unknown>`                                      |
|  97.2% |   3.93s |   3,935 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  97.2% |   3.93s |   3,935 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
|  94.6% |   3.82s |   3,829 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  94.4% |   3.82s |   3,820 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  56.4% |   2.28s |   2,281 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|  44.4% |   1.79s |   1,796 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  31.9% |   1.29s |   1,291 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  11.1% | 448.0ms |     448 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|   9.0% | 366.0ms |     366 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|   8.1% | 328.0ms |     328 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|   6.7% | 273.0ms |     273 | `0x9245b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   2.8% | 114.0ms |     114 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.7% | 109.0ms |     109 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.3% |  93.0ms |      93 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|   2.1% |  83.0ms |      83 | `0x1029eb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Categories

##### Ours

|      % |    Time | Samples | Function                                          | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% |   4.04s |   4,047 | `MAIN__`                                          | `out/profile.f90`                                  |
| 100.0% |   4.04s |   4,047 | `main`                                            | `out/profile.f90`                                  |
|  97.2% |   3.93s |   3,935 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  97.2% |   3.93s |   3,935 | `__json_file_module_MOD_json_file_load`           | `src/json-fortran/src/json_file_module.F90`        |
|  94.6% |   3.82s |   3,829 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  94.4% |   3.82s |   3,820 | `__json_value_module_MOD_parse_array`             | `src/json-fortran/src/json_value_module.F90`       |
|  56.4% |   2.28s |   2,281 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
|  44.4% |   1.79s |   1,796 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  31.9% |   1.29s |   1,291 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  11.1% | 448.0ms |     448 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|   9.0% | 366.0ms |     366 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90`       |
|   8.1% | 328.0ms |     328 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|   2.3% |  93.0ms |      93 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|   1.9% |  78.0ms |      78 | `__json_value_module_MOD_json_value_destroy`      | `src/json-fortran/src/json_value_module.F90`       |
|   1.9% |  78.0ms |      78 | `__json_file_module_MOD_json_file_destroy`        | `src/json-fortran/src/json_file_module.F90`        |
|   1.7% |  70.0ms |      70 | `__json_value_module_MOD_parse_for_chars`         | `src/json-fortran/src/json_value_module.F90`       |
|   0.8% |  31.0ms |      31 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90`       |
|   0.6% |  26.0ms |      26 | `__json_file_module_MOD_json_file_get_string`     | `src/json-fortran/src/json_file_module.F90`        |
|   0.6% |  25.0ms |      25 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|   0.5% |  20.0ms |      20 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |

##### Native

|      % |    Time | Samples | Function   | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% |   4.04s |   4,047 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   4.04s |   4,047 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   4.04s |   4,047 | `_start`   | `<unknown>`                                      |
|   6.7% | 273.0ms |     273 | `0x9245b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   2.8% | 114.0ms |     114 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.7% | 109.0ms |     109 | `0x1c1b3`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.1% |  83.0ms |      83 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.1% |  83.0ms |      83 | `0x10324b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.0% |  81.0ms |      81 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.9% |  77.0ms |      77 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.9% |  77.0ms |      77 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.8% |  74.0ms |      74 | `0x9102b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.7% |  69.0ms |      69 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.7% |  67.0ms |      67 | `_init`    | `<unknown>`                                      |
|   1.5% |  60.0ms |      60 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.4% |  56.0ms |      56 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  56.0ms |      56 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.4% |  56.0ms |      56 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  56.0ms |      56 | `0x10c353` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.3% |  53.0ms |      53 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `MAIN__` (`out/profile.f90`)

|     % |   Time | Samples | Callee                                        | Location                                         |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 97.2% |  3.93s |   3,935 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90`      |
|  1.9% | 78.0ms |      78 | `__json_file_module_MOD_json_file_destroy`    | `src/json-fortran/src/json_file_module.F90`      |
|  0.6% | 26.0ms |      26 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |  2.0ms |       2 | `0x1098bf`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  2.0ms |       2 | `0x109623`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `main` (`out/profile.f90`)

|      % |  Time | Samples | Callee   | Location          |
| -----: | ----: | ------: | -------- | ----------------- |
| 100.0% | 4.04s |   4,047 | `MAIN__` | `out/profile.f90` |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 4.04s |   4,047 | `main` | `out/profile.f90` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 4.04s |   4,047 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 4.04s |   4,047 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 97.3% |  3.82s |   3,829 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
|  2.1% | 83.0ms |      83 | `0x10324b`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% | 17.0ms |      17 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |  5.0ms |       5 | `0x10b3c3`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90`     |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |  Time | Samples | Callee                                    | Location                                     |
| -----: | ----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 3.93s |   3,935 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 99.8% |   3.82s |   3,820 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| 99.4% |   3.80s |   3,807 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 32.1% |   1.23s |   1,231 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
| 23.8% | 912.0ms |     912 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 16.9% | 647.0ms |     647 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                      | Location                                     |
| ----: | -----: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.9% |  3.81s |   3,816 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  1.4% | 55.0ms |      55 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  1.1% | 43.0ms |      43 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 10.0ms |      10 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  0.2% |  8.0ms |       8 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
|  3.4% | 77.0ms |      77 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% | 10.0ms |      10 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.2% |  4.0ms |       4 | `0x1098bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x109f17` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x10233c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                         |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 73.8% |  1.32s |   1,326 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  4.1% | 73.0ms |      73 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  2.7% | 49.0ms |      49 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.9% | 34.0ms |      34 | `0x1189ec`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.7% | 30.0ms |      30 | `0x92f67`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 68.3% | 882.0ms |     882 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 14.3% | 184.0ms |     184 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  5.4% |  70.0ms |      70 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  1.3% |  17.0ms |      17 | `_init`                                   | `<unknown>`                                  |
|  1.2% |  15.0ms |      15 | `0x92f67`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`        |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 81.7% | 366.0ms |     366 | `__json_value_module_MOD_string_to_int`   | `src/json-fortran/src/json_value_module.F90`     |
| 12.7% |  57.0ms |      57 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  2.0% |   9.0ms |       9 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.7% |   3.0ms |       3 | `0x92240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.4% |   2.0ms |       2 | `0x118680`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                          | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 85.8% | 314.0ms |     314 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  1.6% |   6.0ms |       6 | `0x1185e0`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |   5.0ms |       5 | `0x12bb0`                                       | `usr/lib/aarch64-linux-gnu/libm.so.6`            |
|  1.4% |   5.0ms |       5 | `0x10a2b0`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |   5.0ms |       5 | `0x929c4`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 34.1% | 112.0ms |     112 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 13.7% |  45.0ms |      45 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.1% |  20.0ms |      20 | `0x108f53` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.1% |  20.0ms |      20 | `0x10a0fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.5% |  18.0ms |      18 | `0x108efb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9245b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 27.1% | 74.0ms |      74 | `0x9102b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 15.0% | 41.0ms |      41 | `0x91228` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.4% | 23.0ms |      23 | `0x9123c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.3% | 20.0ms |      20 | `0x90dc0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.0% | 11.0ms |      11 | `0x9155f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                         |
| ----: | -----: | ------: | --------- | ------------------------------------------------ |
| 33.3% | 38.0ms |      38 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 30.7% | 35.0ms |      35 | `0xfa7fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 19.3% | 22.0ms |      22 | `0x9e658` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  7.9% |  9.0ms |       9 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.1% |  7.0ms |       7 | `0xfa727` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Time | Samples | Callee    | Location                              |
| ----: | ------: | ------: | --------- | ------------------------------------- |
| 94.5% | 103.0ms |     103 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.8% |   2.0ms |       2 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.9% |   1.0ms |       1 | `0x923f0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.9% |   1.0ms |       1 | `0x92364` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.9% |   1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 82.8% | 77.0ms |      77 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.5% |  7.0ms |       7 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.2% |  2.0ms |       2 | `0x9244c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.1% |  1.0ms |       1 | `0x92254` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.1% |  1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 83.1% | 69.0ms |      69 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 16.9% | 14.0ms |      14 | `0x10c997` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 83.0ms |      83 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 46.9% | 38.0ms |      38 | `0x8faf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.6% |  7.0ms |       7 | `0x8fbf0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.4% |  6.0ms |       6 | `0x8faa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.2% |  5.0ms |       5 | `0x8fae0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.7% |  3.0ms |       3 | `0x8fbac` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  33.3% | 26.0ms |      26 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
|  25.6% | 20.0ms |      20 | `0x92a9b`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|   9.0% |  7.0ms |       7 | `0x929e0`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|   5.1% |  4.0ms |       4 | `_init`                                      | `<unknown>`                                  |

##### `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `0x10a47b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 72.7% | 56.0ms |      56 | `0x10c353` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 26.0% | 20.0ms |      20 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |  1.0ms |       1 | `0x10c2c4` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9102b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 25.7% | 19.0ms |      19 | `0x8eb7f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.5% |  7.0ms |       7 | `0x8eb3f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.5% |  7.0ms |       7 | `0x8ea94` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.1% |  6.0ms |       6 | `0x8eb44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.1% |  6.0ms |       6 | `0x8eb74` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 84.3% | 59.0ms |      59 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee    | Location                                         |
| -----: | -----: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 69.0ms |      69 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 26.8% | 15.0ms |      15 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 25.0% | 14.0ms |      14 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 21.4% | 12.0ms |      12 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  8.9% |  5.0ms |       5 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.4% |  3.0ms |       3 | `0x10aa5b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10bd0b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 56.0ms |      56 | `0xddb88` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10c353` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 56.0ms |      56 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 22.6% | 7.0ms |       7 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 16.1% | 5.0ms |       5 | `0x929e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.2% | 1.0ms |       1 | `0x92aac` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.2% | 1.0ms |       1 | `0x8fc08` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.2% | 1.0ms |       1 | `0x92a58` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|     % |   Time | Samples | Callee                                            | Location                                           |
| ----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 96.2% | 25.0ms |      25 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  3.8% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_value_module.F90`       |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |   Time | Samples | Callee                                     | Location                                     |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 76.0% | 19.0ms |      19 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |
| 16.0% |  4.0ms |       4 | `__json_value_module_MOD_json_get_string`  | `src/json-fortran/src/json_value_module.F90` |
|  4.0% |  1.0ms |       1 | `0x92aac`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  4.0% |  1.0ms |       1 | `0x92c70`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`        |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 10.0% | 2.0ms |       2 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.0% | 1.0ms |       1 | `0x92f88` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 90.0ms |      90 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.1% | 87.0ms |      87 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.3% | 53.0ms |      53 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% | 49.0ms |      49 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.8% | 31.0ms |      31 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.8% | 31.0ms |      31 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% | 25.0ms |      25 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
