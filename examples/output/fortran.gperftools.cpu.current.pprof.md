# CPU profile

Took 4.04s over 4,047 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| ours     | 98.3% |  3.98s |   3,980 |
| native   |  1.7% | 67.0ms |      67 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                        | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 56.4% |   2.28s |   2,281 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
| 11.1% | 448.0ms |     448 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  9.2% | 372.0ms |     372 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  8.1% | 328.0ms |     328 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  3.2% | 130.0ms |     130 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  2.3% |  93.0ms |      93 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|  2.2% |  88.0ms |      88 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  1.7% |  67.0ms |      67 | `_init`                                         | `<unknown>`                                      |
|  1.2% |  50.0ms |      50 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|  1.2% |  48.0ms |      48 | `__json_value_module_MOD_json_value_destroy`    | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% |  31.0ms |      31 | `__json_value_module_MOD_destroy_json_data`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% |  20.0ms |      20 | `__json_string_utilities_MOD_unescape_string`   | `src/json-fortran/src/json_string_utilities.F90` |
|  0.5% |  19.0ms |      19 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  13.0ms |      13 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  0.3% |  11.0ms |      11 | `__json_value_module_MOD_parse_for_chars`       | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |  10.0ms |      10 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `MAIN__`                                        | `out/profile.f90`                                |
|  0.1% |   6.0ms |       6 | `__json_value_module_MOD_json_info`             | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_json_get_string`       | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_to_logical`            | `src/json-fortran/src/json_value_module.F90`     |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Location                                           |
| ----: | ------: | ------: | -------------------------------------------------- |
| 69.5% |   1.58s |   1,585 | `src/json-fortran/src/json_value_module.F90:11447` |
|  4.4% | 101.0ms |     101 | `src/json-fortran/src/json_value_module.F90:11395` |
|  4.3% |  97.0ms |      97 | `src/json-fortran/src/json_value_module.F90:11385` |
|  3.8% |  86.0ms |      86 | `src/json-fortran/src/json_value_module.F90:11452` |
|  3.5% |  80.0ms |      80 | `src/json-fortran/src/json_value_module.F90:11358` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Location                                           |
| ----: | ------: | ------: | -------------------------------------------------- |
| 29.7% | 133.0ms |     133 | `src/json-fortran/src/json_value_module.F90:11075` |
| 20.8% |  93.0ms |      93 | `src/json-fortran/src/json_value_module.F90:11122` |
| 18.8% |  84.0ms |      84 | `src/json-fortran/src/json_value_module.F90:11073` |
| 11.4% |  51.0ms |      51 | `src/json-fortran/src/json_value_module.F90:11084` |
|  6.9% |  31.0ms |      31 | `src/json-fortran/src/json_value_module.F90:11098` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 24.2% | 90.0ms |      90 | `src/json-fortran/src/json_value_module.F90:10910` |
| 15.6% | 58.0ms |      58 | `src/json-fortran/src/json_value_module.F90:10918` |
| 14.0% | 52.0ms |      52 | `src/json-fortran/src/json_value_module.F90:10969` |
| 13.7% | 51.0ms |      51 | `src/json-fortran/src/json_value_module.F90:10938` |
|  9.7% | 36.0ms |      36 | `src/json-fortran/src/json_value_module.F90:10962` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Location                                             |
| ----: | ------: | ------: | ---------------------------------------------------- |
| 54.0% | 177.0ms |     177 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 45.1% | 148.0ms |     148 | `src/json-fortran/src/json_string_utilities.F90:132` |
|  0.9% |   3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 41.5% | 54.0ms |      54 | `src/json-fortran/src/json_value_module.F90:10145` |
| 20.8% | 27.0ms |      27 | `src/json-fortran/src/json_value_module.F90:10186` |
| 14.6% | 19.0ms |      19 | `src/json-fortran/src/json_value_module.F90:10185` |
| 12.3% | 16.0ms |      16 | `src/json-fortran/src/json_value_module.F90:10221` |
|  3.1% |  4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:10170` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 96.8% | 90.0ms |      90 | `src/json-fortran/src/json_value_module.F90:2211` |
|  2.2% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2204` |
|  1.1% |  1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:2213` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 94.3% | 83.0ms |      83 | `src/json-fortran/src/json_value_module.F90:9770` |
|  5.7% |  5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:9808` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 98.0% | 49.0ms |      49 | `src/json-fortran/src/json_value_module.F90:8074` |
|  2.0% |  1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:8087` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 41.7% | 20.0ms |      20 | `src/json-fortran/src/json_value_module.F90:2259` |
| 41.7% | 20.0ms |      20 | `src/json-fortran/src/json_value_module.F90:2296` |
|  4.2% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2277` |
|  4.2% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2269` |
|  4.2% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2263` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 35.5% | 11.0ms |      11 | `src/json-fortran/src/json_value_module.F90:1396` |
| 25.8% |  8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:1398` |
| 16.1% |  5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:1395` |
|  9.7% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:1393` |
|  9.7% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:1400` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 25.0% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 25.0% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:605` |
| 15.0% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:615` |
| 10.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:501` |
| 10.0% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:518` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 47.4% | 9.0ms |       9 | `src/json-fortran/src/json_value_module.F90:11216` |
| 21.1% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:11225` |
| 15.8% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11292` |
| 15.8% | 3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11283` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 46.2% | 6.0ms |       6 | `src/json-fortran/src/json_value_module.F90:11018` |
| 38.5% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:11007` |
| 15.4% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11006` |

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

##### `MAIN__` (`out/profile.f90`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 75.0% | 6.0ms |       6 | `out/profile.f90:31` |
| 25.0% | 2.0ms |       2 | `out/profile.f90:32` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 83.3% | 5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:1419` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1421` |

##### `__json_value_module_MOD_json_get_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:9094` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10672` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:10671` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 58.1% |   1.32s |   1,326 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 28.4% | 647.0ms |     647 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  8.1% | 184.0ms |     184 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  2.6% |  59.0ms |      59 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  2.5% |  57.0ms |      57 | `__json_value_module_MOD_parse_number`    | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.8% | 259.0ms |     259 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 41.7% | 187.0ms |     187 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  0.2% |   1.0ms |       1 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
|  0.2% |   1.0ms |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 97.6% | 363.0ms |     363 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  2.4% |   9.0ms |       9 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Caller                                             | Location                                     |
| ----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 95.7% | 314.0ms |     314 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  4.3% |  14.0ms |      14 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 88.5% | 115.0ms |     115 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 11.5% |  15.0ms |      15 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 89.2% | 83.0ms |      83 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 10.8% | 10.0ms |      10 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                  | Location                                    |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 88.0ms |      88 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 56.7% | 38.0ms |      38 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
| 25.4% | 17.0ms |      17 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |
|  6.0% |  4.0ms |       4 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  2.0ms |       2 | `__json_value_module_MOD_parse_string`       | `src/json-fortran/src/json_value_module.F90` |
|  3.0% |  2.0ms |       2 | `__json_value_module_MOD_string_to_int`      | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 50.0ms |      50 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 48.0ms |      48 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 83.9% | 26.0ms |      26 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  6.5% |  2.0ms |       2 | `__json_value_module_MOD_to_array`           | `src/json-fortran/src/json_value_module.F90` |
|  3.2% |  1.0ms |       1 | `__json_value_module_MOD_to_logical`         | `src/json-fortran/src/json_value_module.F90` |
|  3.2% |  1.0ms |       1 | `__json_value_module_MOD_to_integer`         | `src/json-fortran/src/json_value_module.F90` |
|  3.2% |  1.0ms |       1 | `__json_value_module_MOD_to_object`          | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 20.0ms |      20 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 94.7% | 18.0ms |      18 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  5.3% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 13.0ms |      13 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                | Location                                     |
| -----: | -----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 11.0ms |      11 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                          | Location                                     |
| ----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 80.0% | 8.0ms |       8 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |
| 20.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90` |

##### `MAIN__` (`out/profile.f90`)

|      % |  Time | Samples | Caller | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 8.0ms |       8 | `main` | `out/profile.f90` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% | 6.0ms |       6 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                            | Location                                           |
| -----: | ----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

### Total time

Functions ranked by total time spent in the function and all its callees.

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
|   1.7% |  67.0ms |      67 | `_init`                                           | `<unknown>`                                        |
|   0.8% |  31.0ms |      31 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90`       |
|   0.6% |  26.0ms |      26 | `__json_file_module_MOD_json_file_get_string`     | `src/json-fortran/src/json_file_module.F90`        |
|   0.6% |  25.0ms |      25 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `MAIN__` (`out/profile.f90`)

|     % |   Time | Samples | Callee                                        | Location                                    |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------- |
| 97.2% |  3.93s |   3,935 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90` |
|  1.9% | 78.0ms |      78 | `__json_file_module_MOD_json_file_destroy`    | `src/json-fortran/src/json_file_module.F90` |
|  0.6% | 26.0ms |      26 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `main` (`out/profile.f90`)

|      % |  Time | Samples | Callee   | Location          |
| -----: | ----: | ------: | -------- | ----------------- |
| 100.0% | 4.04s |   4,047 | `MAIN__` | `out/profile.f90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 97.3% |  3.82s |   3,829 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  0.4% | 17.0ms |      17 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |  1.0ms |       1 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

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

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                        | Location                                         |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 73.8% |  1.32s |   1,326 | `__json_value_module_MOD_pop_char.part.0`     | `src/json-fortran/src/json_value_module.F90`     |
|  1.1% | 20.0ms |      20 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |  2.0ms |       2 | `_init`                                       | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 68.3% | 882.0ms |     882 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 14.3% | 184.0ms |     184 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  5.4% |  70.0ms |      70 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  1.3% |  17.0ms |      17 | `_init`                                   | `<unknown>`                                  |
|  0.2% |   3.0ms |       3 | `__json_value_module_MOD_to_string`       | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 81.7% | 366.0ms |     366 | `__json_value_module_MOD_string_to_int`   | `src/json-fortran/src/json_value_module.F90` |
| 12.7% |  57.0ms |      57 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  0.4% |   2.0ms |       2 | `__json_value_module_MOD_to_integer`      | `src/json-fortran/src/json_value_module.F90` |
|  0.4% |   2.0ms |       2 | `_init`                                   | `<unknown>`                                  |
|  0.4% |   2.0ms |       2 | `__json_value_module_MOD_string_to_dble`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                          | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 85.8% | 314.0ms |     314 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  0.5% |   2.0ms |       2 | `_init`                                         | `<unknown>`                                      |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  33.3% | 26.0ms |      26 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
|   5.1% |  4.0ms |       4 | `_init`                                      | `<unknown>`                                  |

##### `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 84.3% | 59.0ms |      59 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

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

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `MAIN__` (`out/profile.f90`) ← `main`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.3% | 95.0ms |      95 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.2% | 89.0ms |      89 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.2% | 88.0ms |      88 | `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.4% | 56.0ms |      56 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% | 50.0ms |      50 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% | 43.0ms |      43 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% | 31.0ms |      31 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.8% | 31.0ms |      31 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% | 26.0ms |      26 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 25.0ms |      25 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 25.0ms |      25 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_value_destroy` ← `__json_value_module_MOD_json_value_destroy` ← `__json_value_module_MOD_json_value_destroy` ← `__json_value_module_MOD_json_value_destroy` ← `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 20.0ms |      20 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
