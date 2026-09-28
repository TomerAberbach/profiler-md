# CPU profile

Took 3.95s over 3,956 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 59.9% | 2.36s |   2,369 |
| Native   | 40.1% | 1.58s |   1,587 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                  | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 53.1% |   2.09s |   2,099 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.4% | 136.0ms |     136 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
|  2.0% |  81.0ms |      81 | `_init`                                   | `<unknown>`                                      |
|  1.6% |  65.0ms |      65 | `0x118970`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.5% |  61.0ms |      61 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  57.0ms |      57 | `0x929c4`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.4% |  54.0ms |      54 | `0x118994`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |  52.0ms |      52 | `0x929e0`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.3% |  52.0ms |      52 | `0x8faf4`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.1% |  44.0ms |      44 | `0x118720`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.1% |  44.0ms |      44 | `0x118680`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.1% |  44.0ms |      44 | `0x92284`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.1% |  42.0ms |      42 | `0x92240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.0% |  39.0ms |      39 | `0x1189ec`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.0% |  39.0ms |      39 | `0x91228`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.8% |  33.0ms |      33 | `0xddb88`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.7% |  26.0ms |      26 | `0x92c70`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.7% |  26.0ms |      26 | `0x9d240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.6% |  23.0ms |      23 | `0x1186f8`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.6% |  22.0ms |      22 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90`     |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                                | Location                                         |
| ----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------ |
| 53.1% |   2.09s |   2,099 | `__json_value_module_MOD_pop_char.part.0`               | `src/json-fortran/src/json_value_module.F90`     |
|  3.4% | 136.0ms |     136 | `__json_value_module_MOD_parse_string`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.6% |  22.0ms |      22 | `__json_value_module_MOD_parse_object`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% |  19.0ms |      19 | `__json_value_module_MOD_parse_value`                   | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% |  18.0ms |      18 | `__json_string_utilities_MOD_unescape_string`           | `src/json-fortran/src/json_string_utilities.F90` |
|  0.4% |  15.0ms |      15 | `__json_value_module_MOD_json_value_destroy`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  11.0ms |      11 | `__json_value_module_MOD_destroy_json_data`             | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_parse_number`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_parse_for_chars`               | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   7.0ms |       7 | `__json_value_module_MOD_json_value_add_member`         | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   5.0ms |       5 | `__json_string_utilities_MOD_string_to_integer`         | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |   5.0ms |       5 | `__json_value_module_MOD_json_value_create`             | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_to_string`                     | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_pop_char`                      | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_info`                     | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_parse_array`                   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_null`                       | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_push_char`                     | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|    % |   Time | Samples | Function   | Location                                         |
| ---: | -----: | ------: | ---------- | ------------------------------------------------ |
| 2.0% | 81.0ms |      81 | `_init`    | `<unknown>`                                      |
| 1.6% | 65.0ms |      65 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.5% | 61.0ms |      61 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.4% | 57.0ms |      57 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.4% | 54.0ms |      54 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.3% | 52.0ms |      52 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.3% | 52.0ms |      52 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.1% | 44.0ms |      44 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.1% | 44.0ms |      44 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.1% | 44.0ms |      44 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.1% | 42.0ms |      42 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.0% | 39.0ms |      39 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.0% | 39.0ms |      39 | `0x91228`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.8% | 33.0ms |      33 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.7% | 26.0ms |      26 | `0x92c70`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.7% | 26.0ms |      26 | `0x9d240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% | 23.0ms |      23 | `0x1186f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% | 20.0ms |      20 | `0x9123c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.4% | 16.0ms |      16 | `0x1189f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.4% | 15.0ms |      15 | `0x9e658`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 74.0% |  1.55s |   1,554 | `src/json-fortran/src/json_value_module.F90:11447` |
|  4.1% | 86.0ms |      86 | `src/json-fortran/src/json_value_module.F90:11395` |
|  3.9% | 82.0ms |      82 | `src/json-fortran/src/json_value_module.F90:11469` |
|  3.9% | 81.0ms |      81 | `src/json-fortran/src/json_value_module.F90:11452` |
|  2.7% | 57.0ms |      57 | `src/json-fortran/src/json_value_module.F90:11318` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 25.7% | 35.0ms |      35 | `src/json-fortran/src/json_value_module.F90:11084` |
| 20.6% | 28.0ms |      28 | `src/json-fortran/src/json_value_module.F90:11098` |
| 19.9% | 27.0ms |      27 | `src/json-fortran/src/json_value_module.F90:11086` |
| 19.1% | 26.0ms |      26 | `src/json-fortran/src/json_value_module.F90:11091` |
|  3.7% |  5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:11073` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 22.7% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:10969` |
| 18.2% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:10962` |
| 13.6% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10922` |
|  9.1% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10980` |
|  9.1% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10923` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 42.1% | 8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:10221` |
| 10.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10135` |
| 10.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10147` |
|  5.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10209` |
|  5.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10215` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 27.8% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 22.2% | 4.0ms |       4 | `src/json-fortran/src/json_string_utilities.F90:605` |
| 16.7% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:501` |
| 11.1% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:615` |
|  5.6% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:514` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 26.7% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:2296` |
| 26.7% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:2273` |
| 13.3% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2301` |
|  6.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2268` |
|  6.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2259` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 36.4% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:1398` |
| 27.3% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:1396` |
| 18.2% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1400` |
| 18.2% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1393` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 37.5% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11292` |
| 25.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11252` |
| 25.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11225` |
| 12.5% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11216` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 87.5% | 7.0ms |       7 | `src/json-fortran/src/json_value_module.F90:11164` |
| 12.5% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11179` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 28.6% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3406` |
| 14.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3429` |
| 14.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3408` |
| 14.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3420` |
| 14.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3423` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 40.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 40.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:132` |
| 20.0% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:128` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 60.0% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:2211` |
| 40.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2204` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 50.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10800` |
| 50.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10776` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:11341` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1419` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1423` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11018` |

##### `__json_value_module_MOD_to_null` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10824` |

##### `__json_value_module_MOD_push_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11498` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:5496` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:5612` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 59.3% |   1.24s |   1,244 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 27.1% | 568.0ms |     568 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.3% | 154.0ms |     154 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  63.0ms |      63 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  62.0ms |      62 | `__json_value_module_MOD_parse_number`    | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 52.2% | 71.0ms |      71 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 47.8% | 65.0ms |      65 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 64.2% | 52.0ms |      52 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
| 14.8% | 12.0ms |      12 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |
|  7.4% |  6.0ms |       6 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  4.9% |  4.0ms |       4 | `__json_value_module_MOD_string_to_int`      | `src/json-fortran/src/json_value_module.F90` |
|  3.7% |  3.0ms |       3 | `__json_value_module_MOD_parse_number`       | `src/json-fortran/src/json_value_module.F90` |

##### `0x118970` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 67.7% | 44.0ms |      44 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 24.6% | 16.0ms |      16 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  5.0ms |       5 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x11899c` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 75.4% | 46.0ms |      46 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 23.0% | 14.0ms |      14 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  1.6% |  1.0ms |       1 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x929c4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 57.9% | 33.0ms |      33 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
| 15.8% |  9.0ms |       9 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |
| 12.3% |  7.0ms |       7 | `__json_value_module_MOD_string_to_int`      | `src/json-fortran/src/json_value_module.F90` |
|  7.0% |  4.0ms |       4 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  3.5% |  2.0ms |       2 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90` |

##### `0x118994` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 42.6% | 23.0ms |      23 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 40.7% | 22.0ms |      22 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 14.8% |  8.0ms |       8 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  1.9% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x929e0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                       | Location                                         |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------------ |
| 34.6% | 18.0ms |      18 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90`     |
| 17.3% |  9.0ms |       9 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90`     |
| 15.4% |  8.0ms |       8 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90`     |
|  7.7% |  4.0ms |       4 | `0x10b75f`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.8% |  3.0ms |       3 | `0x112f0f`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8faf4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 86.5% | 45.0ms |      45 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 13.5% |  7.0ms |       7 | `0x91c5f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x118720` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 50.0% | 22.0ms |      22 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 38.6% | 17.0ms |      17 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  6.8% |  3.0ms |       3 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  4.5% |  2.0ms |       2 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118680` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 81.8% | 36.0ms |      36 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 18.2% |  8.0ms |       8 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x92284` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                          | Location                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 45.5% | 20.0ms |      20 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
| 20.5% |  9.0ms |       9 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  9.1% |  4.0ms |       4 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|  6.8% |  3.0ms |       3 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
|  4.5% |  2.0ms |       2 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0x92240` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 69.0% | 29.0ms |      29 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 14.3% |  6.0ms |       6 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  7.1% |  3.0ms |       3 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |
|  4.8% |  2.0ms |       2 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  2.4% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`   | `src/json-fortran/src/json_value_module.F90` |

##### `0x1189ec` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 51.3% | 20.0ms |      20 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 33.3% | 13.0ms |      13 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 12.8% |  5.0ms |       5 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  2.6% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x91228` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 39.0ms |      39 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 33.0ms |      33 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92c70` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                            | Location                                           |
| ----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 80.8% | 21.0ms |      21 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
| 15.4% |  4.0ms |       4 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.8% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `0x9d240` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                        | Location                                     |
| ----: | -----: | ------: | --------------------------------------------- | -------------------------------------------- |
| 96.2% | 25.0ms |      25 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90` |
|  3.8% |  1.0ms |       1 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90`  |

##### `0x1186f8` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 56.5% | 13.0ms |      13 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
| 30.4% |  7.0ms |       7 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  4.3% |  1.0ms |       1 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90`     |
|  4.3% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90`     |
|  4.3% |  1.0ms |       1 | `0x10b283`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 22.0ms |      22 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9123c` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 20.0ms |      20 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 94.7% | 18.0ms |      18 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  5.3% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 18.0ms |      18 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1189f8` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 75.0% | 12.0ms |      12 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 25.0% |  4.0ms |       4 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 15.0ms |      15 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9e658` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 15.0ms |      15 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                       | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 72.7% | 8.0ms |       8 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
| 18.2% | 2.0ms |       2 | `__json_value_module_MOD_to_null`            | `src/json-fortran/src/json_value_module.F90` |
|  9.1% | 1.0ms |       1 | `__json_value_module_MOD_to_integer`         | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 8.0ms |       8 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 87.5% | 7.0ms |       7 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| 12.5% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                          | Location                                     |
| ----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 71.4% | 5.0ms |       5 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |
| 28.6% | 2.0ms |       2 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Caller                                             | Location                                     |
| ----: | ----: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 80.0% | 4.0ms |       4 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
| 20.0% | 1.0ms |       1 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 5.0ms |       5 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 4.0ms |       4 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_null` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_push_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_array` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                                  | Location                                     |
| -----: | ----: | ------: | ------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                                 | Location                                     |
| -----: | ----: | ------: | ------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_name` | `src/json-fortran/src/json_value_module.F90` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                        | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% |   3.95s |   3,956 | `main`                                          | `out/profile.f90`                                |
| 100.0% |   3.95s |   3,956 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.95s |   3,956 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.95s |   3,956 | `_start`                                        | `<unknown>`                                      |
|  99.9% |   3.95s |   3,952 | `MAIN__`                                        | `out/profile.f90`                                |
|  96.8% |   3.82s |   3,829 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  96.8% |   3.82s |   3,829 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
|  94.4% |   3.73s |   3,736 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  94.4% |   3.73s |   3,734 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  55.0% |   2.17s |   2,176 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|  44.5% |   1.76s |   1,760 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  31.1% |   1.23s |   1,232 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  11.7% | 463.0ms |     463 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|   9.1% | 361.0ms |     361 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|   7.8% | 310.0ms |     310 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|   7.0% | 278.0ms |     278 | `0x9245b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   3.1% | 123.0ms |     123 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   3.1% | 121.0ms |     121 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.5% |  99.0ms |      99 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|   2.5% |  98.0ms |      98 | `0x92a9b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Categories

##### Ours

|      % |    Time | Samples | Function                                           | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 100.0% |   3.95s |   3,956 | `main`                                             | `out/profile.f90`                                  |
|  99.9% |   3.95s |   3,952 | `MAIN__`                                           | `out/profile.f90`                                  |
|  96.8% |   3.82s |   3,829 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`       |
|  96.8% |   3.82s |   3,829 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`        |
|  94.4% |   3.73s |   3,736 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
|  94.4% |   3.73s |   3,734 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`       |
|  55.0% |   2.17s |   2,176 | `__json_value_module_MOD_pop_char.part.0`          | `src/json-fortran/src/json_value_module.F90`       |
|  44.5% |   1.76s |   1,760 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`       |
|  31.1% |   1.23s |   1,232 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
|  11.7% | 463.0ms |     463 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
|   9.1% | 361.0ms |     361 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
|   7.8% | 310.0ms |     310 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
|   2.5% |  99.0ms |      99 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`       |
|   2.4% |  94.0ms |      94 | `__json_value_module_MOD_json_value_destroy`       | `src/json-fortran/src/json_value_module.F90`       |
|   2.4% |  94.0ms |      94 | `__json_file_module_MOD_json_file_destroy`         | `src/json-fortran/src/json_file_module.F90`        |
|   1.9% |  76.0ms |      76 | `__json_value_module_MOD_parse_for_chars`          | `src/json-fortran/src/json_value_module.F90`       |
|   0.6% |  24.0ms |      24 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
|   0.5% |  21.0ms |      21 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|   0.5% |  20.0ms |      20 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|   0.5% |  20.0ms |      20 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |

##### Native

|      % |    Time | Samples | Function   | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% |   3.95s |   3,956 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.95s |   3,956 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.95s |   3,956 | `_start`   | `<unknown>`                                      |
|   7.0% | 278.0ms |     278 | `0x9245b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   3.1% | 123.0ms |     123 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   3.1% | 121.0ms |     121 | `0x1c1b3`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.5% |  98.0ms |      98 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   2.1% |  83.0ms |      83 | `0x9102b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   2.0% |  81.0ms |      81 | `_init`    | `<unknown>`                                      |
|   1.9% |  77.0ms |      77 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.9% |  77.0ms |      77 | `0x10324b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.8% |  70.0ms |      70 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.6% |  65.0ms |      65 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.5% |  61.0ms |      61 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  57.0ms |      57 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.4% |  54.0ms |      54 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.3% |  53.0ms |      53 | `0x92f67`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.3% |  52.0ms |      52 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.3% |  52.0ms |      52 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.3% |  51.0ms |      51 | `0xfa6bf`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`out/profile.f90`)

|     % |  Time | Samples | Callee     | Location                                         |
| ----: | ----: | ------: | ---------- | ------------------------------------------------ |
| 99.9% | 3.95s |   3,952 | `MAIN__`   | `out/profile.f90`                                |
|  0.1% | 2.0ms |       2 | `0x105ff0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 1.0ms |       1 | `0x1185e0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 1.0ms |       1 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 3.95s |   3,956 | `main` | `out/profile.f90` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.95s |   3,956 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.95s |   3,956 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `MAIN__` (`out/profile.f90`)

|     % |   Time | Samples | Callee                                        | Location                                         |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 96.9% |  3.82s |   3,829 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90`      |
|  2.4% | 94.0ms |      94 | `__json_file_module_MOD_json_file_destroy`    | `src/json-fortran/src/json_file_module.F90`      |
|  0.6% | 24.0ms |      24 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90`      |
|  0.1% |  2.0ms |       2 | `0x109623`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x10987c`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 97.6% |  3.73s |   3,736 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
|  2.0% | 77.0ms |      77 | `0x10324b`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.3% | 11.0ms |      11 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |  4.0ms |       4 | `0x10b3c3`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0xfb6f3`                              | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |  Time | Samples | Callee                                    | Location                                     |
| -----: | ----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 3.82s |   3,829 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 99.9% |   3.73s |   3,734 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| 99.7% |   3.72s |   3,725 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 31.7% |   1.18s |   1,185 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
| 24.4% | 912.0ms |     912 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 15.7% | 586.0ms |     586 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                      | Location                                     |
| -----: | -----: | ------: | ------------------------------------------- | -------------------------------------------- |
| 100.0% |  3.73s |   3,733 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|   1.9% | 71.0ms |      71 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|   1.0% | 36.0ms |      36 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|   0.2% |  9.0ms |       9 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90` |
|   0.2% |  6.0ms |       6 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
|  2.3% | 51.0ms |      51 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.5% | 10.0ms |      10 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.2% |  4.0ms |       4 | `0x1098bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |  2.0ms |       2 | `0x109f17` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x86ab8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                         |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 73.0% |  1.28s |   1,284 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.5% | 61.0ms |      61 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  2.6% | 46.0ms |      46 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.6% | 45.0ms |      45 | `0x92f67`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.3% | 23.0ms |      23 | `0x118994`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 68.8% | 848.0ms |     848 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
| 13.6% | 167.0ms |     167 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  6.1% |  75.0ms |      75 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90`     |
|  1.4% |  17.0ms |      17 | `0x118720`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.0% |  12.0ms |      12 | `_init`                                   | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 78.0% | 361.0ms |     361 | `__json_value_module_MOD_string_to_int`   | `src/json-fortran/src/json_value_module.F90` |
| 13.4% |  62.0ms |      62 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  3.9% |  18.0ms |      18 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  0.6% |   3.0ms |       3 | `_init`                                   | `<unknown>`                                  |
|  0.6% |   3.0ms |       3 | `0x92240`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`        |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                          | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 82.3% | 297.0ms |     297 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  1.9% |   7.0ms |       7 | `0x929c4`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.7% |   6.0ms |       6 | `0x92240`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.4% |   5.0ms |       5 | `0x118730`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |   5.0ms |       5 | `0x10a2b0`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 39.0% | 121.0ms |     121 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 11.0% |  34.0ms |      34 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.8% |  21.0ms |      21 | `0x10a0fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.5% |  17.0ms |      17 | `0x108efb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.2% |  16.0ms |      16 | `0x108f53` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9245b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 29.9% | 83.0ms |      83 | `0x9102b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 14.0% | 39.0ms |      39 | `0x91228` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.2% | 20.0ms |      20 | `0x9123c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.5% | 18.0ms |      18 | `0x9155f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.7% | 13.0ms |      13 | `0x91234` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                         |
| ----: | -----: | ------: | --------- | ------------------------------------------------ |
| 41.5% | 51.0ms |      51 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 22.8% | 28.0ms |      28 | `0xfa7fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 12.2% | 15.0ms |      15 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 12.2% | 15.0ms |      15 | `0x9e658` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  5.7% |  7.0ms |       7 | `0xfa727` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Time | Samples | Callee    | Location                              |
| ----: | ------: | ------: | --------- | ------------------------------------- |
| 95.9% | 116.0ms |     116 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.7% |   2.0ms |       2 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.8% |   1.0ms |       1 | `0x92464` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.8% |   1.0ms |       1 | `0x9244c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  0.8% |   1.0ms |       1 | `0x92260` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 76.8% | 76.0ms |      76 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.0% |  4.0ms |       4 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.0% |  4.0ms |       4 | `0x92260` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.0% |  2.0ms |       2 | `0x923e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.0% |  2.0ms |       2 | `0x9244c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 45.9% | 45.0ms |      45 | `0x8faf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 13.3% | 13.0ms |      13 | `0x8faa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.2% |  8.0ms |       8 | `0x8fae0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.1% |  6.0ms |       6 | `0x8fbf0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.1% |  5.0ms |       5 | `0x8fbf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 94.0ms |      94 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  33.0% | 31.0ms |      31 | `0x92a9b`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  19.1% | 18.0ms |      18 | `0x929e0`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  16.0% | 15.0ms |      15 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
|   6.4% |  6.0ms |       6 | `_init`                                      | `<unknown>`                                  |

##### `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 94.0ms |      94 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9102b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 31.3% | 26.0ms |      26 | `0x8eb7f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.4% |  7.0ms |       7 | `0x8ea8c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.2% |  6.0ms |       6 | `0x8eb3f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.8% |  4.0ms |       4 | `0x8ea9c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.8% |  4.0ms |       4 | `0x8eaa4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 90.9% | 70.0ms |      70 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  9.1% |  7.0ms |       7 | `0x10c997` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 77.0ms |      77 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 89.5% | 68.0ms |      68 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee    | Location                                         |
| -----: | -----: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 70.0ms |      70 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92f67` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 62.3% | 33.0ms |      33 | `0x91c5f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.5% |  4.0ms |       4 | `0x91aa4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.5% |  4.0ms |       4 | `0x91b93` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.7% |  3.0ms |       3 | `0x91b68` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.8% |  2.0ms |       2 | `0x8fc14` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xfa6bf` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                         |
| ----: | -----: | ------: | --------- | ------------------------------------------------ |
| 98.0% | 50.0ms |      50 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.0% |  1.0ms |       1 | `0x1c1b8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|     % |   Time | Samples | Callee                                            | Location                                           |
| ----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 87.5% | 21.0ms |      21 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  4.2% |  1.0ms |       1 | `0x9d240`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
|  4.2% |  1.0ms |       1 | `0x92240`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
|  4.2% |  1.0ms |       1 | `0x9d1f0`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |   Time | Samples | Callee                                     | Location                                     |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 95.2% | 20.0ms |      20 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |
|  4.8% |  1.0ms |       1 | `0x92c70`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`        |

##### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                                  | Location                                         |
| ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------ |
| 65.0% | 13.0ms |      13 | `__json_string_utilities_MOD_string_to_integer`         | `src/json-fortran/src/json_string_utilities.F90` |
| 20.0% |  4.0ms |       4 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90`     |
|  5.0% |  1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90`     |
|  5.0% |  1.0ms |       1 | `0x9d150`                                               | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  5.0% |  1.0ms |       1 | `_init`                                                 | `<unknown>`                                      |

##### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                             | Location                                     |
| -----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 20.0ms |      20 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.1% | 82.0ms |      82 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% | 70.0ms |      70 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.3% | 52.0ms |      52 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.9% | 36.0ms |      36 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% | 29.0ms |      29 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 29.0ms |      29 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% | 28.0ms |      28 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
