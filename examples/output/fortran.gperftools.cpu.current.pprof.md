# CPU profile

Took 3.81s over 3,811 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 60.1% | 2.29s |   2,290 |
| Native   | 39.9% | 1.52s |   1,521 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                      | Location                                         |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 52.2% |   1.98s |   1,988 | `__json_value_module_MOD_pop_char.part.0`     | `src/json-fortran/src/json_value_module.F90`     |
|  3.9% | 149.0ms |     149 | `__json_value_module_MOD_parse_string`        | `src/json-fortran/src/json_value_module.F90`     |
|  2.0% |  76.0ms |      76 | `_init`                                       | `<unknown>`                                      |
|  1.7% |  66.0ms |      66 | `0x11899c`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.7% |  65.0ms |      65 | `0x92240`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.5% |  59.0ms |      59 | `0x118970`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.5% |  56.0ms |      56 | `0x929c4`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.4% |  53.0ms |      53 | `0x1189ec`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  52.0ms |      52 | `0x8faf4`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.2% |  46.0ms |      46 | `0x118994`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  45.0ms |      45 | `0x118680`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  45.0ms |      45 | `0x929e0`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.1% |  41.0ms |      41 | `0x92284`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.9% |  35.0ms |      35 | `0xddb88`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.9% |  33.0ms |      33 | `0x118720`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.8% |  30.0ms |      30 | `0x91228`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.8% |  29.0ms |      29 | `__json_value_module_MOD_parse_value`         | `src/json-fortran/src/json_value_module.F90`     |
|  0.7% |  25.0ms |      25 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|  0.6% |  23.0ms |      23 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|  0.6% |  22.0ms |      22 | `0x9e658`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                               | Location                                         |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------ |
| 52.2% |   1.98s |   1,988 | `__json_value_module_MOD_pop_char.part.0`              | `src/json-fortran/src/json_value_module.F90`     |
|  3.9% | 149.0ms |     149 | `__json_value_module_MOD_parse_string`                 | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% |  29.0ms |      29 | `__json_value_module_MOD_parse_value`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.7% |  25.0ms |      25 | `__json_string_utilities_MOD_unescape_string`          | `src/json-fortran/src/json_string_utilities.F90` |
|  0.6% |  23.0ms |      23 | `__json_value_module_MOD_parse_object`                 | `src/json-fortran/src/json_value_module.F90`     |
|  0.6% |  21.0ms |      21 | `__json_value_module_MOD_destroy_json_data`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.4% |  16.0ms |      16 | `__json_value_module_MOD_json_value_destroy`           | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   9.0ms |       9 | `__json_value_module_MOD_parse_for_chars`              | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_json_value_add_member`        | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   6.0ms |       6 | `__json_value_module_MOD_parse_number`                 | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   5.0ms |       5 | `__json_string_utilities_MOD_string_to_integer`        | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_value_create`            | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_info`                    | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   2.0ms |       2 | `__json_value_module_MOD_pop_char`                     | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_string_to_int`                | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_name` | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_logical`                   | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|    % |   Time | Samples | Function   | Location                                         |
| ---: | -----: | ------: | ---------- | ------------------------------------------------ |
| 2.0% | 76.0ms |      76 | `_init`    | `<unknown>`                                      |
| 1.7% | 66.0ms |      66 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.7% | 65.0ms |      65 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.5% | 59.0ms |      59 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.5% | 56.0ms |      56 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.4% | 53.0ms |      53 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.4% | 52.0ms |      52 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.2% | 46.0ms |      46 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.2% | 45.0ms |      45 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 1.2% | 45.0ms |      45 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 1.1% | 41.0ms |      41 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.9% | 35.0ms |      35 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.9% | 33.0ms |      33 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.8% | 30.0ms |      30 | `0x91228`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% | 22.0ms |      22 | `0x9e658`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% | 21.0ms |      21 | `0x92c70`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% | 21.0ms |      21 | `0x9123c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% | 20.0ms |      20 | `0x1189f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% | 18.0ms |      18 | `0x9d240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.3% | 12.0ms |      12 | `0x92dcc`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 72.7% |  1.44s |   1,445 | `src/json-fortran/src/json_value_module.F90:11475` |
|  4.5% | 90.0ms |      90 | `src/json-fortran/src/json_value_module.F90:11497` |
|  4.5% | 90.0ms |      90 | `src/json-fortran/src/json_value_module.F90:11423` |
|  3.8% | 76.0ms |      76 | `src/json-fortran/src/json_value_module.F90:11480` |
|  3.1% | 62.0ms |      62 | `src/json-fortran/src/json_value_module.F90:11386` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 37.6% | 56.0ms |      56 | `src/json-fortran/src/json_value_module.F90:11112` |
| 16.1% | 24.0ms |      24 | `src/json-fortran/src/json_value_module.F90:11126` |
| 16.1% | 24.0ms |      24 | `src/json-fortran/src/json_value_module.F90:11119` |
| 15.4% | 23.0ms |      23 | `src/json-fortran/src/json_value_module.F90:11114` |
|  5.4% |  8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:11150` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 34.5% | 10.0ms |      10 | `src/json-fortran/src/json_value_module.F90:10228` |
| 17.2% |  5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:10209` |
| 10.3% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10192` |
| 10.3% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:10152` |
|  6.9% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10169` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 20.0% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:605` |
| 20.0% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 16.0% | 4.0ms |       4 | `src/json-fortran/src/json_string_utilities.F90:611` |
| 16.0% | 4.0ms |       4 | `src/json-fortran/src/json_string_utilities.F90:514` |
|  8.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:501` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 21.7% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:10985` |
| 17.4% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:10920` |
|  8.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10996` |
|  8.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10978` |
|  8.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10937` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 38.1% | 8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:1403` |
| 33.3% | 7.0ms |       7 | `src/json-fortran/src/json_value_module.F90:1407` |
|  9.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1405` |
|  4.8% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1400` |
|  4.8% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1404` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 37.5% | 6.0ms |       6 | `src/json-fortran/src/json_value_module.F90:2303` |
| 12.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2260` |
| 12.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2270` |
| 12.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2297` |
| 12.5% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2284` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 88.9% | 8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:11192` |
| 11.1% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11193` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 25.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3450` |
| 25.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3413` |
| 25.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:3428` |
| 12.5% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3440` |
| 12.5% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:3427` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 83.3% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:11320` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11253` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 40.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:116` |
| 20.0% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:131` |
| 20.0% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:132` |
| 20.0% | 1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:134` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2218` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2220` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1428` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1426` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11369` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:8094` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:5652` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10678` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 59.5% |   1.18s |   1,183 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 27.4% | 544.0ms |     544 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.4% | 148.0ms |     148 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  59.0ms |      59 | `__json_value_module_MOD_parse_number`    | `src/json-fortran/src/json_value_module.F90` |
|  2.3% |  46.0ms |      46 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 57.0% | 85.0ms |      85 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 43.0% | 64.0ms |      64 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 68.4% | 52.0ms |      52 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
| 18.4% | 14.0ms |      14 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |
|  5.3% |  4.0ms |       4 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  3.9% |  3.0ms |       3 | `__json_value_module_MOD_string_to_int`      | `src/json-fortran/src/json_value_module.F90` |
|  2.6% |  2.0ms |       2 | `__json_value_module_MOD_parse_number`       | `src/json-fortran/src/json_value_module.F90` |

##### `0x11899c` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 66.7% | 44.0ms |      44 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 24.2% | 16.0ms |      16 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  9.1% |  6.0ms |       6 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x92240` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 70.8% | 46.0ms |      46 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 18.5% | 12.0ms |      12 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  4.6% |  3.0ms |       3 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  4.6% |  3.0ms |       3 | `__json_value_module_MOD_parse_array`   | `src/json-fortran/src/json_value_module.F90` |
|  1.5% |  1.0ms |       1 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x118970` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 42.4% | 25.0ms |      25 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 37.3% | 22.0ms |      22 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 16.9% | 10.0ms |      10 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  3.4% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x929c4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                  | Location                                     |
| ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 60.7% | 34.0ms |      34 | `__json_value_module_MOD_parse_object`  | `src/json-fortran/src/json_value_module.F90` |
| 19.6% | 11.0ms |      11 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
| 16.1% |  9.0ms |       9 | `__json_value_module_MOD_parse_value`   | `src/json-fortran/src/json_value_module.F90` |
|  3.6% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`   | `src/json-fortran/src/json_value_module.F90` |

##### `0x1189ec` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 56.6% | 30.0ms |      30 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 39.6% | 21.0ms |      21 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  3.8% |  2.0ms |       2 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x8faf4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 84.6% | 44.0ms |      44 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.5% |  6.0ms |       6 | `0x91c5f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.8% |  2.0ms |       2 | `0x91bfb` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x118994` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 52.2% | 24.0ms |      24 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 23.9% | 11.0ms |      11 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| 23.9% | 11.0ms |      11 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x118680` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 66.7% | 30.0ms |      30 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 31.1% | 14.0ms |      14 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
|  2.2% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x929e0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                       | Location                                         |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------------ |
| 28.9% | 13.0ms |      13 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90`     |
| 22.2% | 10.0ms |      10 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90`     |
|  8.9% |  4.0ms |       4 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90`     |
|  8.9% |  4.0ms |       4 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90`     |
|  6.7% |  3.0ms |       3 | `0x10b75f`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92284` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                          | Location                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 31.7% | 13.0ms |      13 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
| 14.6% |  6.0ms |       6 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
| 14.6% |  6.0ms |       6 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  9.8% |  4.0ms |       4 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  7.3% |  3.0ms |       3 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0xddb88` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 35.0ms |      35 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x118720` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                          | Location                                         |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 54.5% | 18.0ms |      18 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 39.4% | 13.0ms |      13 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  3.0% |  1.0ms |       1 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  3.0% |  1.0ms |       1 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |

##### `0x91228` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 30.0ms |      30 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 93.1% | 27.0ms |      27 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  6.9% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 25.0ms |      25 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 23.0ms |      23 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9e658` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 22.0ms |      22 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 71.4% | 15.0ms |      15 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  9.5% |  2.0ms |       2 | `__json_value_module_MOD_to_array`           | `src/json-fortran/src/json_value_module.F90` |
|  9.5% |  2.0ms |       2 | `__json_value_module_MOD_to_string`          | `src/json-fortran/src/json_value_module.F90` |
|  4.8% |  1.0ms |       1 | `__json_value_module_MOD_parse_number`       | `src/json-fortran/src/json_value_module.F90` |
|  4.8% |  1.0ms |       1 | `__json_value_module_MOD_to_logical`         | `src/json-fortran/src/json_value_module.F90` |

##### `0x92c70` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 66.7% | 14.0ms |      14 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 33.3% |  7.0ms |       7 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x9123c` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller    | Location                              |
| -----: | -----: | ------: | --------- | ------------------------------------- |
| 100.0% | 21.0ms |      21 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1189f8` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 65.0% | 13.0ms |      13 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
| 35.0% |  7.0ms |       7 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9d240` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 18.0ms |      18 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 16.0ms |      16 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `0x92dcc` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 91.7% | 11.0ms |      11 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  8.3% |  1.0ms |       1 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 9.0ms |       9 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                          | Location                                     |
| ----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 50.0% | 4.0ms |       4 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |
| 37.5% | 3.0ms |       3 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90` |
| 12.5% | 1.0ms |       1 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 83.3% | 5.0ms |       5 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 16.7% | 1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Caller                                  | Location                                     |
| ----: | ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 60.0% | 3.0ms |       3 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
| 40.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_number`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 50.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 50.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                                 | Location                                     |
| -----: | ----: | ------: | ------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_name` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                        | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% |   3.81s |   3,811 | `main`                                          | `out/profile.f90`                                |
| 100.0% |   3.81s |   3,811 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.81s |   3,811 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.81s |   3,811 | `_start`                                        | `<unknown>`                                      |
|  99.9% |   3.80s |   3,809 | `MAIN__`                                        | `out/profile.f90`                                |
|  97.2% |   3.70s |   3,703 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  97.2% |   3.70s |   3,703 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
|  95.0% |   3.62s |   3,620 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  94.9% |   3.61s |   3,618 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  53.7% |   2.04s |   2,047 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|  44.6% |   1.70s |   1,700 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  31.6% |   1.20s |   1,205 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  12.4% | 472.0ms |     472 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|  10.0% | 381.0ms |     381 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|   8.7% | 332.0ms |     332 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|   6.4% | 245.0ms |     245 | `0x9245b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   3.2% | 121.0ms |     121 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.6% | 100.0ms |     100 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.5% |  95.0ms |      95 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|   2.4% |  92.0ms |      92 | `0x92a9b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Categories

##### Ours

|      % |    Time | Samples | Function                                          | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% |   3.81s |   3,811 | `main`                                            | `out/profile.f90`                                  |
|  99.9% |   3.80s |   3,809 | `MAIN__`                                          | `out/profile.f90`                                  |
|  97.2% |   3.70s |   3,703 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  97.2% |   3.70s |   3,703 | `__json_file_module_MOD_json_file_load`           | `src/json-fortran/src/json_file_module.F90`        |
|  95.0% |   3.62s |   3,620 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  94.9% |   3.61s |   3,618 | `__json_value_module_MOD_parse_array`             | `src/json-fortran/src/json_value_module.F90`       |
|  53.7% |   2.04s |   2,047 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
|  44.6% |   1.70s |   1,700 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  31.6% |   1.20s |   1,205 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  12.4% | 472.0ms |     472 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  10.0% | 381.0ms |     381 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90`       |
|   8.7% | 332.0ms |     332 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|   2.5% |  95.0ms |      95 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|   2.2% |  83.0ms |      83 | `__json_value_module_MOD_json_value_destroy`      | `src/json-fortran/src/json_value_module.F90`       |
|   2.2% |  83.0ms |      83 | `__json_file_module_MOD_json_file_destroy`        | `src/json-fortran/src/json_file_module.F90`        |
|   1.6% |  60.0ms |      60 | `__json_value_module_MOD_parse_for_chars`         | `src/json-fortran/src/json_value_module.F90`       |
|   0.9% |  34.0ms |      34 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90`       |
|   0.7% |  27.0ms |      27 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|   0.5% |  19.0ms |      19 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|   0.5% |  19.0ms |      19 | `__json_file_module_MOD_json_file_get_string`     | `src/json-fortran/src/json_file_module.F90`        |

##### Native

|      % |    Time | Samples | Function   | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% |   3.81s |   3,811 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.81s |   3,811 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.81s |   3,811 | `_start`   | `<unknown>`                                      |
|   6.4% | 245.0ms |     245 | `0x9245b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   3.2% | 121.0ms |     121 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.6% | 100.0ms |     100 | `0x1c1b3`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.4% |  92.0ms |      92 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   2.0% |  76.0ms |      76 | `_init`    | `<unknown>`                                      |
|   1.8% |  67.0ms |      67 | `0x9102b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.7% |  66.0ms |      66 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.7% |  65.0ms |      65 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.7% |  64.0ms |      64 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.7% |  64.0ms |      64 | `0x10324b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.5% |  59.0ms |      59 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.5% |  56.0ms |      56 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.4% |  53.0ms |      53 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  53.0ms |      53 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  52.0ms |      52 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  52.0ms |      52 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.2% |  46.0ms |      46 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`out/profile.f90`)

|     % |  Time | Samples | Callee     | Location                                         |
| ----: | ----: | ------: | ---------- | ------------------------------------------------ |
| 99.9% | 3.80s |   3,809 | `MAIN__`   | `out/profile.f90`                                |
| <0.1% | 1.0ms |       1 | `0x118730` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 1.0ms |       1 | `0x1185e0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 3.81s |   3,811 | `main` | `out/profile.f90` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.81s |   3,811 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.81s |   3,811 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `MAIN__` (`out/profile.f90`)

|     % |   Time | Samples | Callee                                        | Location                                         |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 97.2% |  3.70s |   3,703 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90`      |
|  2.2% | 83.0ms |      83 | `__json_file_module_MOD_json_file_destroy`    | `src/json-fortran/src/json_file_module.F90`      |
|  0.5% | 19.0ms |      19 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90`      |
|  0.1% |  2.0ms |       2 | `0x1093fb`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x108efb`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                 | Location                                         |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 97.8% |  3.62s |   3,620 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90`     |
|  1.7% | 64.0ms |      64 | `0x10324b`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% | 16.0ms |      16 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |  3.0ms |       3 | `0x10b3c3`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |  Time | Samples | Callee                                    | Location                                     |
| -----: | ----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 3.70s |   3,703 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 99.9% |   3.61s |   3,618 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| 99.6% |   3.60s |   3,607 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 31.7% |   1.14s |   1,147 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
| 24.6% | 891.0ms |     891 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 15.4% | 559.0ms |     559 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                      | Location                                     |
| ----: | -----: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.8% |  3.61s |   3,612 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  1.6% | 59.0ms |      59 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 42.0ms |      42 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 10.0ms |      10 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  0.2% |  8.0ms |       8 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
|  2.1% | 42.0ms |      42 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.3% |  6.0ms |       6 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.2% |  4.0ms |       4 | `0x1098bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x1097f0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `0x109f08` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                         |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 70.9% |  1.20s |   1,205 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  3.4% | 58.0ms |      58 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  2.6% | 44.0ms |      44 | `0x11899c`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.9% | 33.0ms |      33 | `0x92f67`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.8% | 30.0ms |      30 | `0x1189ec`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                         |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------------ |
| 67.1% | 809.0ms |     809 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
| 13.7% | 165.0ms |     165 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
|  5.0% |  60.0ms |      60 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90`     |
|  1.2% |  14.0ms |      14 | `_init`                                   | `<unknown>`                                      |
|  1.2% |  14.0ms |      14 | `0x118680`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 80.7% | 381.0ms |     381 | `__json_value_module_MOD_string_to_int`   | `src/json-fortran/src/json_value_module.F90` |
| 12.5% |  59.0ms |      59 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  14.0ms |      14 | `0x9245b`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  0.4% |   2.0ms |       2 | `0x92284`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  0.4% |   2.0ms |       2 | `__json_value_module_MOD_to_integer`      | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                          | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 83.2% | 317.0ms |     317 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  2.9% |  11.0ms |      11 | `0x929c4`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  1.8% |   7.0ms |       7 | `0x118730`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |   5.0ms |       5 | `0x10a040`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.0% |   4.0ms |       4 | `0x105ff0`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 36.1% | 120.0ms |     120 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 13.6% |  45.0ms |      45 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  9.6% |  32.0ms |      32 | `0x108f53` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.0% |  20.0ms |      20 | `0x10a0fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.4% |  18.0ms |      18 | `0x108efb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9245b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 27.3% | 67.0ms |      67 | `0x9102b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.2% | 30.0ms |      30 | `0x91228` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  8.6% | 21.0ms |      21 | `0x9123c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.9% | 12.0ms |      12 | `0x9155f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.5% | 11.0ms |      11 | `0x91234` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                         |
| ----: | -----: | ------: | --------- | ------------------------------------------------ |
| 36.4% | 44.0ms |      44 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 27.3% | 33.0ms |      33 | `0xfa7fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 18.2% | 22.0ms |      22 | `0x9e658` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  5.0% |  6.0ms |       6 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  4.1% |  5.0ms |       5 | `0x9e660` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 91.0% | 91.0ms |      91 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.0% |  4.0ms |       4 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.0% |  1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.0% |  1.0ms |       1 | `0x9247c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.0% |  1.0ms |       1 | `0x9235c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 83.2% | 79.0ms |      79 | `0x9245b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.3% |  6.0ms |       6 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.1% |  1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.1% |  1.0ms |       1 | `0x92478` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.1% |  1.0ms |       1 | `0x9244c` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 47.8% | 44.0ms |      44 | `0x8faf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.8% |  9.0ms |       9 | `0x8faa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.6% |  7.0ms |       7 | `0x8fb44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.5% |  6.0ms |       6 | `0x8fae0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  5.4% |  5.0ms |       5 | `0x8fbc8` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 83.0ms |      83 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  33.7% | 28.0ms |      28 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
|  22.9% | 19.0ms |      19 | `0x92a9b`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|  15.7% | 13.0ms |      13 | `0x929e0`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`        |
|   4.8% |  4.0ms |       4 | `_init`                                      | `<unknown>`                                  |

##### `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 83.0ms |      83 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9102b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 26.9% | 18.0ms |      18 | `0x8eb7f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.0% |  6.0ms |       6 | `0x8eb3f` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.5% |  5.0ms |       5 | `0x8eb04` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.5% |  5.0ms |       5 | `0x8eb74` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.0% |  4.0ms |       4 | `0x8ea58` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 81.3% | 52.0ms |      52 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 18.8% | 12.0ms |      12 | `0x10c997` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee     | Location                                         |
| -----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 64.0ms |      64 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 85.0% | 51.0ms |      51 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                         |
| ----: | -----: | ------: | ---------- | ------------------------------------------------ |
| 45.3% | 24.0ms |      24 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 17.0% |  9.0ms |       9 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  9.4% |  5.0ms |       5 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  7.5% |  4.0ms |       4 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.9% |  1.0ms |       1 | `0x10b290` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee    | Location                                         |
| -----: | -----: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 52.0ms |      52 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 26.5% | 9.0ms |       9 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.8% | 4.0ms |       4 | `0x929e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|    % |  Time | Samples | Callee    | Location                              |
| ---: | ----: | ------: | --------- | ------------------------------------- |
| 3.7% | 1.0ms |       1 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 3.7% | 1.0ms |       1 | `0x92f67` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |   Time | Samples | Callee                                     | Location                                     |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 94.7% | 18.0ms |      18 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |
|  5.3% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                            | Location                                           |
| -----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 19.0ms |      19 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 85.0ms |      85 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.9% | 71.0ms |      71 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.3% | 50.0ms |      50 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% | 37.0ms |      37 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% | 26.0ms |      26 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 25.0ms |      25 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                     |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                   |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
